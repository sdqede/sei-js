// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: cosmos/bank/v1beta1/bank.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin } from "../../base/v1beta1/coin";

export const protobufPackage = "cosmos.bank.v1beta1";

/** Params defines the parameters for the bank module. */
export interface Params {
	send_enabled: SendEnabled[];
	default_send_enabled: boolean;
}

/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 */
export interface SendEnabled {
	denom: string;
	enabled: boolean;
}

/** Input models transaction input. */
export interface Input {
	address: string;
	coins: Coin[];
}

/** Output models transaction outputs. */
export interface Output {
	address: string;
	coins: Coin[];
}

/**
 * Supply represents a struct that passively keeps track of the total supply
 * amounts in the network.
 * This message is deprecated now that supply is indexed by denom.
 *
 * @deprecated
 */
export interface Supply {
	total: Coin[];
}

/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */
export interface DenomUnit {
	/** denom represents the string name of the given denom unit (e.g uatom). */
	denom: string;
	/**
	 * exponent represents power of 10 exponent that one must
	 * raise the base_denom to in order to equal the given DenomUnit's denom
	 * 1 denom = 1^exponent base_denom
	 * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
	 * exponent = 6, thus: 1 atom = 10^6 uatom).
	 */
	exponent: number;
	/** aliases is a list of string aliases for the given denom */
	aliases: string[];
}

/**
 * Metadata represents a struct that describes
 * a basic token.
 */
export interface Metadata {
	description: string;
	/** denom_units represents the list of DenomUnit's for a given coin */
	denom_units: DenomUnit[];
	/** base represents the base denom (should be the DenomUnit with exponent = 0). */
	base: string;
	/**
	 * display indicates the suggested denom that should be
	 * displayed in clients.
	 */
	display: string;
	/**
	 * name defines the name of the token (eg: Cosmos Atom)
	 *
	 * Since: cosmos-sdk 0.43
	 */
	name: string;
	/**
	 * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
	 * be the same as the display.
	 *
	 * Since: cosmos-sdk 0.43
	 */
	symbol: string;
}

export interface AllowList {
	/** Can be empty for no admin, or a valid sei address */
	addresses: string[];
}

function createBaseParams(): Params {
	return { send_enabled: [], default_send_enabled: false };
}

export const Params: MessageFns<Params, "cosmos.bank.v1beta1.Params"> = {
	$type: "cosmos.bank.v1beta1.Params" as const,

	encode(message: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.send_enabled) {
			SendEnabled.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.default_send_enabled !== false) {
			writer.uint32(16).bool(message.default_send_enabled);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Params {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseParams();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.send_enabled.push(SendEnabled.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.default_send_enabled = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Params {
		return {
			send_enabled: globalThis.Array.isArray(object?.send_enabled) ? object.send_enabled.map((e: any) => SendEnabled.fromJSON(e)) : [],
			default_send_enabled: isSet(object.default_send_enabled) ? globalThis.Boolean(object.default_send_enabled) : false
		};
	},

	toJSON(message: Params): unknown {
		const obj: any = {};
		if (message.send_enabled?.length) {
			obj.send_enabled = message.send_enabled.map((e) => SendEnabled.toJSON(e));
		}
		if (message.default_send_enabled !== false) {
			obj.default_send_enabled = message.default_send_enabled;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
		return Params.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
		const message = createBaseParams();
		message.send_enabled = object.send_enabled?.map((e) => SendEnabled.fromPartial(e)) || [];
		message.default_send_enabled = object.default_send_enabled ?? false;
		return message;
	}
};

function createBaseSendEnabled(): SendEnabled {
	return { denom: "", enabled: false };
}

export const SendEnabled: MessageFns<SendEnabled, "cosmos.bank.v1beta1.SendEnabled"> = {
	$type: "cosmos.bank.v1beta1.SendEnabled" as const,

	encode(message: SendEnabled, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.denom !== "") {
			writer.uint32(10).string(message.denom);
		}
		if (message.enabled !== false) {
			writer.uint32(16).bool(message.enabled);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SendEnabled {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSendEnabled();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.denom = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.enabled = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SendEnabled {
		return {
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false
		};
	},

	toJSON(message: SendEnabled): unknown {
		const obj: any = {};
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.enabled !== false) {
			obj.enabled = message.enabled;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SendEnabled>, I>>(base?: I): SendEnabled {
		return SendEnabled.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SendEnabled>, I>>(object: I): SendEnabled {
		const message = createBaseSendEnabled();
		message.denom = object.denom ?? "";
		message.enabled = object.enabled ?? false;
		return message;
	}
};

function createBaseInput(): Input {
	return { address: "", coins: [] };
}

export const Input: MessageFns<Input, "cosmos.bank.v1beta1.Input"> = {
	$type: "cosmos.bank.v1beta1.Input" as const,

	encode(message: Input, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		for (const v of message.coins) {
			Coin.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Input {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseInput();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.coins.push(Coin.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Input {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			coins: globalThis.Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
		};
	},

	toJSON(message: Input): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.coins?.length) {
			obj.coins = message.coins.map((e) => Coin.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Input>, I>>(base?: I): Input {
		return Input.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Input>, I>>(object: I): Input {
		const message = createBaseInput();
		message.address = object.address ?? "";
		message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
		return message;
	}
};

function createBaseOutput(): Output {
	return { address: "", coins: [] };
}

export const Output: MessageFns<Output, "cosmos.bank.v1beta1.Output"> = {
	$type: "cosmos.bank.v1beta1.Output" as const,

	encode(message: Output, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		for (const v of message.coins) {
			Coin.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Output {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseOutput();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.coins.push(Coin.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Output {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			coins: globalThis.Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
		};
	},

	toJSON(message: Output): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.coins?.length) {
			obj.coins = message.coins.map((e) => Coin.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Output>, I>>(base?: I): Output {
		return Output.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Output>, I>>(object: I): Output {
		const message = createBaseOutput();
		message.address = object.address ?? "";
		message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
		return message;
	}
};

function createBaseSupply(): Supply {
	return { total: [] };
}

export const Supply: MessageFns<Supply, "cosmos.bank.v1beta1.Supply"> = {
	$type: "cosmos.bank.v1beta1.Supply" as const,

	encode(message: Supply, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.total) {
			Coin.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Supply {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSupply();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.total.push(Coin.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Supply {
		return { total: globalThis.Array.isArray(object?.total) ? object.total.map((e: any) => Coin.fromJSON(e)) : [] };
	},

	toJSON(message: Supply): unknown {
		const obj: any = {};
		if (message.total?.length) {
			obj.total = message.total.map((e) => Coin.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Supply>, I>>(base?: I): Supply {
		return Supply.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Supply>, I>>(object: I): Supply {
		const message = createBaseSupply();
		message.total = object.total?.map((e) => Coin.fromPartial(e)) || [];
		return message;
	}
};

function createBaseDenomUnit(): DenomUnit {
	return { denom: "", exponent: 0, aliases: [] };
}

export const DenomUnit: MessageFns<DenomUnit, "cosmos.bank.v1beta1.DenomUnit"> = {
	$type: "cosmos.bank.v1beta1.DenomUnit" as const,

	encode(message: DenomUnit, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.denom !== "") {
			writer.uint32(10).string(message.denom);
		}
		if (message.exponent !== 0) {
			writer.uint32(16).uint32(message.exponent);
		}
		for (const v of message.aliases) {
			writer.uint32(26).string(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DenomUnit {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDenomUnit();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.denom = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.exponent = reader.uint32();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.aliases.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DenomUnit {
		return {
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			exponent: isSet(object.exponent) ? globalThis.Number(object.exponent) : 0,
			aliases: globalThis.Array.isArray(object?.aliases) ? object.aliases.map((e: any) => globalThis.String(e)) : []
		};
	},

	toJSON(message: DenomUnit): unknown {
		const obj: any = {};
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.exponent !== 0) {
			obj.exponent = Math.round(message.exponent);
		}
		if (message.aliases?.length) {
			obj.aliases = message.aliases;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DenomUnit>, I>>(base?: I): DenomUnit {
		return DenomUnit.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DenomUnit>, I>>(object: I): DenomUnit {
		const message = createBaseDenomUnit();
		message.denom = object.denom ?? "";
		message.exponent = object.exponent ?? 0;
		message.aliases = object.aliases?.map((e) => e) || [];
		return message;
	}
};

function createBaseMetadata(): Metadata {
	return { description: "", denom_units: [], base: "", display: "", name: "", symbol: "" };
}

export const Metadata: MessageFns<Metadata, "cosmos.bank.v1beta1.Metadata"> = {
	$type: "cosmos.bank.v1beta1.Metadata" as const,

	encode(message: Metadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.description !== "") {
			writer.uint32(10).string(message.description);
		}
		for (const v of message.denom_units) {
			DenomUnit.encode(v!, writer.uint32(18).fork()).join();
		}
		if (message.base !== "") {
			writer.uint32(26).string(message.base);
		}
		if (message.display !== "") {
			writer.uint32(34).string(message.display);
		}
		if (message.name !== "") {
			writer.uint32(42).string(message.name);
		}
		if (message.symbol !== "") {
			writer.uint32(50).string(message.symbol);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Metadata {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMetadata();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.description = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.denom_units.push(DenomUnit.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.base = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.display = reader.string();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.name = reader.string();
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.symbol = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Metadata {
		return {
			description: isSet(object.description) ? globalThis.String(object.description) : "",
			denom_units: globalThis.Array.isArray(object?.denom_units) ? object.denom_units.map((e: any) => DenomUnit.fromJSON(e)) : [],
			base: isSet(object.base) ? globalThis.String(object.base) : "",
			display: isSet(object.display) ? globalThis.String(object.display) : "",
			name: isSet(object.name) ? globalThis.String(object.name) : "",
			symbol: isSet(object.symbol) ? globalThis.String(object.symbol) : ""
		};
	},

	toJSON(message: Metadata): unknown {
		const obj: any = {};
		if (message.description !== "") {
			obj.description = message.description;
		}
		if (message.denom_units?.length) {
			obj.denom_units = message.denom_units.map((e) => DenomUnit.toJSON(e));
		}
		if (message.base !== "") {
			obj.base = message.base;
		}
		if (message.display !== "") {
			obj.display = message.display;
		}
		if (message.name !== "") {
			obj.name = message.name;
		}
		if (message.symbol !== "") {
			obj.symbol = message.symbol;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Metadata>, I>>(base?: I): Metadata {
		return Metadata.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Metadata>, I>>(object: I): Metadata {
		const message = createBaseMetadata();
		message.description = object.description ?? "";
		message.denom_units = object.denom_units?.map((e) => DenomUnit.fromPartial(e)) || [];
		message.base = object.base ?? "";
		message.display = object.display ?? "";
		message.name = object.name ?? "";
		message.symbol = object.symbol ?? "";
		return message;
	}
};

function createBaseAllowList(): AllowList {
	return { addresses: [] };
}

export const AllowList: MessageFns<AllowList, "cosmos.bank.v1beta1.AllowList"> = {
	$type: "cosmos.bank.v1beta1.AllowList" as const,

	encode(message: AllowList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.addresses) {
			writer.uint32(10).string(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): AllowList {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAllowList();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.addresses.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): AllowList {
		return {
			addresses: globalThis.Array.isArray(object?.addresses) ? object.addresses.map((e: any) => globalThis.String(e)) : []
		};
	},

	toJSON(message: AllowList): unknown {
		const obj: any = {};
		if (message.addresses?.length) {
			obj.addresses = message.addresses;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<AllowList>, I>>(base?: I): AllowList {
		return AllowList.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<AllowList>, I>>(object: I): AllowList {
		const message = createBaseAllowList();
		message.addresses = object.addresses?.map((e) => e) || [];
		return message;
	}
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
	? T
	: T extends globalThis.Array<infer U>
		? globalThis.Array<DeepPartial<U>>
		: T extends ReadonlyArray<infer U>
			? ReadonlyArray<DeepPartial<U>>
			: T extends {}
				? { [K in keyof T]?: DeepPartial<T[K]> }
				: Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}

export interface MessageFns<T, V extends string> {
	readonly $type: V;
	encode(message: T, writer?: BinaryWriter): BinaryWriter;
	decode(input: BinaryReader | Uint8Array, length?: number): T;
	fromJSON(object: any): T;
	toJSON(message: T): unknown;
	create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
	fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
