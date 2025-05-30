// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: cosmos/tx/v1beta1/service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Block } from "../../../tendermint/types/block";
import { BlockID } from "../../../tendermint/types/types";
import { GasInfo, Result, TxResponse } from "../../base/abci/v1beta1/abci";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Tx } from "./tx";

export const protobufPackage = "cosmos.tx.v1beta1";

/** OrderBy defines the sorting order */
export enum OrderBy {
	/** ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. */
	ORDER_BY_UNSPECIFIED = 0,
	/** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
	ORDER_BY_ASC = 1,
	/** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
	ORDER_BY_DESC = 2,
	UNRECOGNIZED = -1
}

export function orderByFromJSON(object: any): OrderBy {
	switch (object) {
		case 0:
		case "ORDER_BY_UNSPECIFIED":
			return OrderBy.ORDER_BY_UNSPECIFIED;
		case 1:
		case "ORDER_BY_ASC":
			return OrderBy.ORDER_BY_ASC;
		case 2:
		case "ORDER_BY_DESC":
			return OrderBy.ORDER_BY_DESC;
		case -1:
		case "UNRECOGNIZED":
		default:
			return OrderBy.UNRECOGNIZED;
	}
}

export function orderByToJSON(object: OrderBy): string {
	switch (object) {
		case OrderBy.ORDER_BY_UNSPECIFIED:
			return "ORDER_BY_UNSPECIFIED";
		case OrderBy.ORDER_BY_ASC:
			return "ORDER_BY_ASC";
		case OrderBy.ORDER_BY_DESC:
			return "ORDER_BY_DESC";
		case OrderBy.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
export enum BroadcastMode {
	/** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
	BROADCAST_MODE_UNSPECIFIED = 0,
	/**
	 * BROADCAST_MODE_BLOCK - BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
	 * the tx to be committed in a block.
	 */
	BROADCAST_MODE_BLOCK = 1,
	/**
	 * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
	 * a CheckTx execution response only.
	 */
	BROADCAST_MODE_SYNC = 2,
	/**
	 * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
	 * immediately.
	 */
	BROADCAST_MODE_ASYNC = 3,
	UNRECOGNIZED = -1
}

export function broadcastModeFromJSON(object: any): BroadcastMode {
	switch (object) {
		case 0:
		case "BROADCAST_MODE_UNSPECIFIED":
			return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
		case 1:
		case "BROADCAST_MODE_BLOCK":
			return BroadcastMode.BROADCAST_MODE_BLOCK;
		case 2:
		case "BROADCAST_MODE_SYNC":
			return BroadcastMode.BROADCAST_MODE_SYNC;
		case 3:
		case "BROADCAST_MODE_ASYNC":
			return BroadcastMode.BROADCAST_MODE_ASYNC;
		case -1:
		case "UNRECOGNIZED":
		default:
			return BroadcastMode.UNRECOGNIZED;
	}
}

export function broadcastModeToJSON(object: BroadcastMode): string {
	switch (object) {
		case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
			return "BROADCAST_MODE_UNSPECIFIED";
		case BroadcastMode.BROADCAST_MODE_BLOCK:
			return "BROADCAST_MODE_BLOCK";
		case BroadcastMode.BROADCAST_MODE_SYNC:
			return "BROADCAST_MODE_SYNC";
		case BroadcastMode.BROADCAST_MODE_ASYNC:
			return "BROADCAST_MODE_ASYNC";
		case BroadcastMode.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequest {
	/** events is the list of transaction event type. */
	events: string[];
	/** pagination defines a pagination for the request. */
	pagination?: PageRequest | undefined;
	order_by: OrderBy;
}

/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventResponse {
	/** txs is the list of queried transactions. */
	txs: Tx[];
	/** tx_responses is the list of queried TxResponses. */
	tx_responses: TxResponse[];
	/** pagination defines a pagination for the response. */
	pagination?: PageResponse | undefined;
}

/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface BroadcastTxRequest {
	/** tx_bytes is the raw transaction. */
	tx_bytes: Uint8Array;
	mode: BroadcastMode;
}

/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxResponse {
	/** tx_response is the queried TxResponses. */
	tx_response?: TxResponse | undefined;
}

/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface SimulateRequest {
	/**
	 * tx is the transaction to simulate.
	 * Deprecated. Send raw tx bytes instead.
	 *
	 * @deprecated
	 */
	tx?: Tx | undefined;
	/**
	 * tx_bytes is the raw transaction.
	 *
	 * Since: cosmos-sdk 0.43
	 */
	tx_bytes: Uint8Array;
}

/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponse {
	/** gas_info is the information about gas used in the simulation. */
	gas_info?: GasInfo | undefined;
	/** result is the result of the simulation. */
	result?: Result | undefined;
}

/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */
export interface GetTxRequest {
	/** hash is the tx hash to query, encoded as a hex string. */
	hash: string;
}

/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponse {
	/** tx is the queried transaction. */
	tx?: Tx | undefined;
	/** tx_response is the queried TxResponses. */
	tx_response?: TxResponse | undefined;
}

/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsRequest {
	/** height is the height of the block to query. */
	height: number;
	/** pagination defines a pagination for the request. */
	pagination?: PageRequest | undefined;
}

/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsResponse {
	/** txs are the transactions in the block. */
	txs: Tx[];
	block_id?: BlockID | undefined;
	block?: Block | undefined;
	/** pagination defines a pagination for the response. */
	pagination?: PageResponse | undefined;
}

function createBaseGetTxsEventRequest(): GetTxsEventRequest {
	return { events: [], pagination: undefined, order_by: 0 };
}

export const GetTxsEventRequest: MessageFns<GetTxsEventRequest, "cosmos.tx.v1beta1.GetTxsEventRequest"> = {
	$type: "cosmos.tx.v1beta1.GetTxsEventRequest" as const,

	encode(message: GetTxsEventRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.events) {
			writer.uint32(10).string(v!);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		if (message.order_by !== 0) {
			writer.uint32(24).int32(message.order_by);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetTxsEventRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetTxsEventRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.events.push(reader.string());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pagination = PageRequest.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.order_by = reader.int32() as any;
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GetTxsEventRequest {
		return {
			events: globalThis.Array.isArray(object?.events) ? object.events.map((e: any) => globalThis.String(e)) : [],
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
			order_by: isSet(object.order_by) ? orderByFromJSON(object.order_by) : 0
		};
	},

	toJSON(message: GetTxsEventRequest): unknown {
		const obj: any = {};
		if (message.events?.length) {
			obj.events = message.events;
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		if (message.order_by !== 0) {
			obj.order_by = orderByToJSON(message.order_by);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetTxsEventRequest>, I>>(base?: I): GetTxsEventRequest {
		return GetTxsEventRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetTxsEventRequest>, I>>(object: I): GetTxsEventRequest {
		const message = createBaseGetTxsEventRequest();
		message.events = object.events?.map((e) => e) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		message.order_by = object.order_by ?? 0;
		return message;
	}
};

function createBaseGetTxsEventResponse(): GetTxsEventResponse {
	return { txs: [], tx_responses: [], pagination: undefined };
}

export const GetTxsEventResponse: MessageFns<GetTxsEventResponse, "cosmos.tx.v1beta1.GetTxsEventResponse"> = {
	$type: "cosmos.tx.v1beta1.GetTxsEventResponse" as const,

	encode(message: GetTxsEventResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.txs) {
			Tx.encode(v!, writer.uint32(10).fork()).join();
		}
		for (const v of message.tx_responses) {
			TxResponse.encode(v!, writer.uint32(18).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetTxsEventResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetTxsEventResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.txs.push(Tx.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.tx_responses.push(TxResponse.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.pagination = PageResponse.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GetTxsEventResponse {
		return {
			txs: globalThis.Array.isArray(object?.txs) ? object.txs.map((e: any) => Tx.fromJSON(e)) : [],
			tx_responses: globalThis.Array.isArray(object?.tx_responses) ? object.tx_responses.map((e: any) => TxResponse.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: GetTxsEventResponse): unknown {
		const obj: any = {};
		if (message.txs?.length) {
			obj.txs = message.txs.map((e) => Tx.toJSON(e));
		}
		if (message.tx_responses?.length) {
			obj.tx_responses = message.tx_responses.map((e) => TxResponse.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetTxsEventResponse>, I>>(base?: I): GetTxsEventResponse {
		return GetTxsEventResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetTxsEventResponse>, I>>(object: I): GetTxsEventResponse {
		const message = createBaseGetTxsEventResponse();
		message.txs = object.txs?.map((e) => Tx.fromPartial(e)) || [];
		message.tx_responses = object.tx_responses?.map((e) => TxResponse.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	}
};

function createBaseBroadcastTxRequest(): BroadcastTxRequest {
	return { tx_bytes: new Uint8Array(0), mode: 0 };
}

export const BroadcastTxRequest: MessageFns<BroadcastTxRequest, "cosmos.tx.v1beta1.BroadcastTxRequest"> = {
	$type: "cosmos.tx.v1beta1.BroadcastTxRequest" as const,

	encode(message: BroadcastTxRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.tx_bytes.length !== 0) {
			writer.uint32(10).bytes(message.tx_bytes);
		}
		if (message.mode !== 0) {
			writer.uint32(16).int32(message.mode);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): BroadcastTxRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseBroadcastTxRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.tx_bytes = reader.bytes();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.mode = reader.int32() as any;
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): BroadcastTxRequest {
		return {
			tx_bytes: isSet(object.tx_bytes) ? bytesFromBase64(object.tx_bytes) : new Uint8Array(0),
			mode: isSet(object.mode) ? broadcastModeFromJSON(object.mode) : 0
		};
	},

	toJSON(message: BroadcastTxRequest): unknown {
		const obj: any = {};
		if (message.tx_bytes.length !== 0) {
			obj.tx_bytes = base64FromBytes(message.tx_bytes);
		}
		if (message.mode !== 0) {
			obj.mode = broadcastModeToJSON(message.mode);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<BroadcastTxRequest>, I>>(base?: I): BroadcastTxRequest {
		return BroadcastTxRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<BroadcastTxRequest>, I>>(object: I): BroadcastTxRequest {
		const message = createBaseBroadcastTxRequest();
		message.tx_bytes = object.tx_bytes ?? new Uint8Array(0);
		message.mode = object.mode ?? 0;
		return message;
	}
};

function createBaseBroadcastTxResponse(): BroadcastTxResponse {
	return { tx_response: undefined };
}

export const BroadcastTxResponse: MessageFns<BroadcastTxResponse, "cosmos.tx.v1beta1.BroadcastTxResponse"> = {
	$type: "cosmos.tx.v1beta1.BroadcastTxResponse" as const,

	encode(message: BroadcastTxResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.tx_response !== undefined) {
			TxResponse.encode(message.tx_response, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): BroadcastTxResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseBroadcastTxResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.tx_response = TxResponse.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): BroadcastTxResponse {
		return { tx_response: isSet(object.tx_response) ? TxResponse.fromJSON(object.tx_response) : undefined };
	},

	toJSON(message: BroadcastTxResponse): unknown {
		const obj: any = {};
		if (message.tx_response !== undefined) {
			obj.tx_response = TxResponse.toJSON(message.tx_response);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<BroadcastTxResponse>, I>>(base?: I): BroadcastTxResponse {
		return BroadcastTxResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<BroadcastTxResponse>, I>>(object: I): BroadcastTxResponse {
		const message = createBaseBroadcastTxResponse();
		message.tx_response = object.tx_response !== undefined && object.tx_response !== null ? TxResponse.fromPartial(object.tx_response) : undefined;
		return message;
	}
};

function createBaseSimulateRequest(): SimulateRequest {
	return { tx: undefined, tx_bytes: new Uint8Array(0) };
}

export const SimulateRequest: MessageFns<SimulateRequest, "cosmos.tx.v1beta1.SimulateRequest"> = {
	$type: "cosmos.tx.v1beta1.SimulateRequest" as const,

	encode(message: SimulateRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.tx !== undefined) {
			Tx.encode(message.tx, writer.uint32(10).fork()).join();
		}
		if (message.tx_bytes.length !== 0) {
			writer.uint32(18).bytes(message.tx_bytes);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SimulateRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSimulateRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.tx = Tx.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.tx_bytes = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SimulateRequest {
		return {
			tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
			tx_bytes: isSet(object.tx_bytes) ? bytesFromBase64(object.tx_bytes) : new Uint8Array(0)
		};
	},

	toJSON(message: SimulateRequest): unknown {
		const obj: any = {};
		if (message.tx !== undefined) {
			obj.tx = Tx.toJSON(message.tx);
		}
		if (message.tx_bytes.length !== 0) {
			obj.tx_bytes = base64FromBytes(message.tx_bytes);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SimulateRequest>, I>>(base?: I): SimulateRequest {
		return SimulateRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SimulateRequest>, I>>(object: I): SimulateRequest {
		const message = createBaseSimulateRequest();
		message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
		message.tx_bytes = object.tx_bytes ?? new Uint8Array(0);
		return message;
	}
};

function createBaseSimulateResponse(): SimulateResponse {
	return { gas_info: undefined, result: undefined };
}

export const SimulateResponse: MessageFns<SimulateResponse, "cosmos.tx.v1beta1.SimulateResponse"> = {
	$type: "cosmos.tx.v1beta1.SimulateResponse" as const,

	encode(message: SimulateResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.gas_info !== undefined) {
			GasInfo.encode(message.gas_info, writer.uint32(10).fork()).join();
		}
		if (message.result !== undefined) {
			Result.encode(message.result, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SimulateResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSimulateResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.gas_info = GasInfo.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.result = Result.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SimulateResponse {
		return {
			gas_info: isSet(object.gas_info) ? GasInfo.fromJSON(object.gas_info) : undefined,
			result: isSet(object.result) ? Result.fromJSON(object.result) : undefined
		};
	},

	toJSON(message: SimulateResponse): unknown {
		const obj: any = {};
		if (message.gas_info !== undefined) {
			obj.gas_info = GasInfo.toJSON(message.gas_info);
		}
		if (message.result !== undefined) {
			obj.result = Result.toJSON(message.result);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SimulateResponse>, I>>(base?: I): SimulateResponse {
		return SimulateResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SimulateResponse>, I>>(object: I): SimulateResponse {
		const message = createBaseSimulateResponse();
		message.gas_info = object.gas_info !== undefined && object.gas_info !== null ? GasInfo.fromPartial(object.gas_info) : undefined;
		message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
		return message;
	}
};

function createBaseGetTxRequest(): GetTxRequest {
	return { hash: "" };
}

export const GetTxRequest: MessageFns<GetTxRequest, "cosmos.tx.v1beta1.GetTxRequest"> = {
	$type: "cosmos.tx.v1beta1.GetTxRequest" as const,

	encode(message: GetTxRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.hash !== "") {
			writer.uint32(10).string(message.hash);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetTxRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetTxRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.hash = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GetTxRequest {
		return { hash: isSet(object.hash) ? globalThis.String(object.hash) : "" };
	},

	toJSON(message: GetTxRequest): unknown {
		const obj: any = {};
		if (message.hash !== "") {
			obj.hash = message.hash;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetTxRequest>, I>>(base?: I): GetTxRequest {
		return GetTxRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetTxRequest>, I>>(object: I): GetTxRequest {
		const message = createBaseGetTxRequest();
		message.hash = object.hash ?? "";
		return message;
	}
};

function createBaseGetTxResponse(): GetTxResponse {
	return { tx: undefined, tx_response: undefined };
}

export const GetTxResponse: MessageFns<GetTxResponse, "cosmos.tx.v1beta1.GetTxResponse"> = {
	$type: "cosmos.tx.v1beta1.GetTxResponse" as const,

	encode(message: GetTxResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.tx !== undefined) {
			Tx.encode(message.tx, writer.uint32(10).fork()).join();
		}
		if (message.tx_response !== undefined) {
			TxResponse.encode(message.tx_response, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetTxResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetTxResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.tx = Tx.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.tx_response = TxResponse.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GetTxResponse {
		return {
			tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
			tx_response: isSet(object.tx_response) ? TxResponse.fromJSON(object.tx_response) : undefined
		};
	},

	toJSON(message: GetTxResponse): unknown {
		const obj: any = {};
		if (message.tx !== undefined) {
			obj.tx = Tx.toJSON(message.tx);
		}
		if (message.tx_response !== undefined) {
			obj.tx_response = TxResponse.toJSON(message.tx_response);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetTxResponse>, I>>(base?: I): GetTxResponse {
		return GetTxResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetTxResponse>, I>>(object: I): GetTxResponse {
		const message = createBaseGetTxResponse();
		message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
		message.tx_response = object.tx_response !== undefined && object.tx_response !== null ? TxResponse.fromPartial(object.tx_response) : undefined;
		return message;
	}
};

function createBaseGetBlockWithTxsRequest(): GetBlockWithTxsRequest {
	return { height: 0, pagination: undefined };
}

export const GetBlockWithTxsRequest: MessageFns<GetBlockWithTxsRequest, "cosmos.tx.v1beta1.GetBlockWithTxsRequest"> = {
	$type: "cosmos.tx.v1beta1.GetBlockWithTxsRequest" as const,

	encode(message: GetBlockWithTxsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.height !== 0) {
			writer.uint32(8).int64(message.height);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetBlockWithTxsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetBlockWithTxsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.height = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pagination = PageRequest.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GetBlockWithTxsRequest {
		return {
			height: isSet(object.height) ? globalThis.Number(object.height) : 0,
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: GetBlockWithTxsRequest): unknown {
		const obj: any = {};
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetBlockWithTxsRequest>, I>>(base?: I): GetBlockWithTxsRequest {
		return GetBlockWithTxsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetBlockWithTxsRequest>, I>>(object: I): GetBlockWithTxsRequest {
		const message = createBaseGetBlockWithTxsRequest();
		message.height = object.height ?? 0;
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	}
};

function createBaseGetBlockWithTxsResponse(): GetBlockWithTxsResponse {
	return { txs: [], block_id: undefined, block: undefined, pagination: undefined };
}

export const GetBlockWithTxsResponse: MessageFns<GetBlockWithTxsResponse, "cosmos.tx.v1beta1.GetBlockWithTxsResponse"> = {
	$type: "cosmos.tx.v1beta1.GetBlockWithTxsResponse" as const,

	encode(message: GetBlockWithTxsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.txs) {
			Tx.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.block_id !== undefined) {
			BlockID.encode(message.block_id, writer.uint32(18).fork()).join();
		}
		if (message.block !== undefined) {
			Block.encode(message.block, writer.uint32(26).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(34).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetBlockWithTxsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetBlockWithTxsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.txs.push(Tx.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.block_id = BlockID.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.block = Block.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.pagination = PageResponse.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GetBlockWithTxsResponse {
		return {
			txs: globalThis.Array.isArray(object?.txs) ? object.txs.map((e: any) => Tx.fromJSON(e)) : [],
			block_id: isSet(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined,
			block: isSet(object.block) ? Block.fromJSON(object.block) : undefined,
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: GetBlockWithTxsResponse): unknown {
		const obj: any = {};
		if (message.txs?.length) {
			obj.txs = message.txs.map((e) => Tx.toJSON(e));
		}
		if (message.block_id !== undefined) {
			obj.block_id = BlockID.toJSON(message.block_id);
		}
		if (message.block !== undefined) {
			obj.block = Block.toJSON(message.block);
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetBlockWithTxsResponse>, I>>(base?: I): GetBlockWithTxsResponse {
		return GetBlockWithTxsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetBlockWithTxsResponse>, I>>(object: I): GetBlockWithTxsResponse {
		const message = createBaseGetBlockWithTxsResponse();
		message.txs = object.txs?.map((e) => Tx.fromPartial(e)) || [];
		message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
		message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	}
};

function bytesFromBase64(b64: string): Uint8Array {
	if ((globalThis as any).Buffer) {
		return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
	} else {
		const bin = globalThis.atob(b64);
		const arr = new Uint8Array(bin.length);
		for (let i = 0; i < bin.length; ++i) {
			arr[i] = bin.charCodeAt(i);
		}
		return arr;
	}
}

function base64FromBytes(arr: Uint8Array): string {
	if ((globalThis as any).Buffer) {
		return globalThis.Buffer.from(arr).toString("base64");
	} else {
		const bin: string[] = [];
		arr.forEach((byte) => {
			bin.push(globalThis.String.fromCharCode(byte));
		});
		return globalThis.btoa(bin.join(""));
	}
}

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

function longToNumber(int64: { toString(): string }): number {
	const num = globalThis.Number(int64.toString());
	if (num > globalThis.Number.MAX_SAFE_INTEGER) {
		throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
	}
	if (num < globalThis.Number.MIN_SAFE_INTEGER) {
		throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
	}
	return num;
}

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
