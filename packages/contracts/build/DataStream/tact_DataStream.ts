import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type DSTDeploy = {
    $$type: 'DSTDeploy';
    queryId: bigint;
}

export function storeDSTDeploy(src: DSTDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(306133030, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDSTDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 306133030) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DSTDeploy' as const, queryId: _queryId };
}

function loadTupleDSTDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DSTDeploy' as const, queryId: _queryId };
}

function storeTupleDSTDeploy(source: DSTDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDSTDeploy(): DictionaryValue<DSTDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDSTDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDSTDeploy(src.loadRef().beginParse());
        }
    }
}

export type DSTDeploySuccess = {
    $$type: 'DSTDeploySuccess';
    queryId: bigint;
}

export function storeDSTDeploySuccess(src: DSTDeploySuccess) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3957924127, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDSTDeploySuccess(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3957924127) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DSTDeploySuccess' as const, queryId: _queryId };
}

function loadTupleDSTDeploySuccess(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DSTDeploySuccess' as const, queryId: _queryId };
}

function storeTupleDSTDeploySuccess(source: DSTDeploySuccess) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDSTDeploySuccess(): DictionaryValue<DSTDeploySuccess> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDSTDeploySuccess(src)).endCell());
        },
        parse: (src) => {
            return loadDSTDeploySuccess(src.loadRef().beginParse());
        }
    }
}

export type DSTDeployBatch = {
    $$type: 'DSTDeployBatch';
    queryId: bigint;
}

export function storeDSTDeployBatch(src: DSTDeployBatch) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3012477066, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDSTDeployBatch(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3012477066) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DSTDeployBatch' as const, queryId: _queryId };
}

function loadTupleDSTDeployBatch(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DSTDeployBatch' as const, queryId: _queryId };
}

function storeTupleDSTDeployBatch(source: DSTDeployBatch) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDSTDeployBatch(): DictionaryValue<DSTDeployBatch> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDSTDeployBatch(src)).endCell());
        },
        parse: (src) => {
            return loadDSTDeployBatch(src.loadRef().beginParse());
        }
    }
}

export type DSTDeployBatchSuccess = {
    $$type: 'DSTDeployBatchSuccess';
    queryId: bigint;
    batch: Address;
}

export function storeDSTDeployBatchSuccess(src: DSTDeployBatchSuccess) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1261138638, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.batch);
    };
}

export function loadDSTDeployBatchSuccess(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1261138638) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _batch = sc_0.loadAddress();
    return { $$type: 'DSTDeployBatchSuccess' as const, queryId: _queryId, batch: _batch };
}

function loadTupleDSTDeployBatchSuccess(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _batch = source.readAddress();
    return { $$type: 'DSTDeployBatchSuccess' as const, queryId: _queryId, batch: _batch };
}

function storeTupleDSTDeployBatchSuccess(source: DSTDeployBatchSuccess) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.batch);
    return builder.build();
}

function dictValueParserDSTDeployBatchSuccess(): DictionaryValue<DSTDeployBatchSuccess> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDSTDeployBatchSuccess(src)).endCell());
        },
        parse: (src) => {
            return loadDSTDeployBatchSuccess(src.loadRef().beginParse());
        }
    }
}

export type DSTDeploySession = {
    $$type: 'DSTDeploySession';
    queryId: bigint;
}

export function storeDSTDeploySession(src: DSTDeploySession) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1658160529, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDSTDeploySession(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1658160529) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DSTDeploySession' as const, queryId: _queryId };
}

function loadTupleDSTDeploySession(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DSTDeploySession' as const, queryId: _queryId };
}

function storeTupleDSTDeploySession(source: DSTDeploySession) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDSTDeploySession(): DictionaryValue<DSTDeploySession> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDSTDeploySession(src)).endCell());
        },
        parse: (src) => {
            return loadDSTDeploySession(src.loadRef().beginParse());
        }
    }
}

export type DSTDeploySessionSuccess = {
    $$type: 'DSTDeploySessionSuccess';
    queryId: bigint;
    session: Address;
}

export function storeDSTDeploySessionSuccess(src: DSTDeploySessionSuccess) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3452518278, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.session);
    };
}

export function loadDSTDeploySessionSuccess(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3452518278) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _session = sc_0.loadAddress();
    return { $$type: 'DSTDeploySessionSuccess' as const, queryId: _queryId, session: _session };
}

function loadTupleDSTDeploySessionSuccess(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _session = source.readAddress();
    return { $$type: 'DSTDeploySessionSuccess' as const, queryId: _queryId, session: _session };
}

function storeTupleDSTDeploySessionSuccess(source: DSTDeploySessionSuccess) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.session);
    return builder.build();
}

function dictValueParserDSTDeploySessionSuccess(): DictionaryValue<DSTDeploySessionSuccess> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDSTDeploySessionSuccess(src)).endCell());
        },
        parse: (src) => {
            return loadDSTDeploySessionSuccess(src.loadRef().beginParse());
        }
    }
}

export type DSTSubscribe = {
    $$type: 'DSTSubscribe';
    queryId: bigint;
    subscriber: Address;
    notificationsCount: bigint;
}

export function storeDSTSubscribe(src: DSTSubscribe) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3216336466, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.subscriber);
        b_0.storeInt(src.notificationsCount, 257);
    };
}

export function loadDSTSubscribe(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3216336466) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _subscriber = sc_0.loadAddress();
    let _notificationsCount = sc_0.loadIntBig(257);
    return { $$type: 'DSTSubscribe' as const, queryId: _queryId, subscriber: _subscriber, notificationsCount: _notificationsCount };
}

function loadTupleDSTSubscribe(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _subscriber = source.readAddress();
    let _notificationsCount = source.readBigNumber();
    return { $$type: 'DSTSubscribe' as const, queryId: _queryId, subscriber: _subscriber, notificationsCount: _notificationsCount };
}

function storeTupleDSTSubscribe(source: DSTSubscribe) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.subscriber);
    builder.writeNumber(source.notificationsCount);
    return builder.build();
}

function dictValueParserDSTSubscribe(): DictionaryValue<DSTSubscribe> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDSTSubscribe(src)).endCell());
        },
        parse: (src) => {
            return loadDSTSubscribe(src.loadRef().beginParse());
        }
    }
}

export type DSTSubscribeSuccess = {
    $$type: 'DSTSubscribeSuccess';
    queryId: bigint;
    batch: Address;
    remainingNotificationsCount: bigint;
}

export function storeDSTSubscribeSuccess(src: DSTSubscribeSuccess) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3770107736, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.batch);
        b_0.storeInt(src.remainingNotificationsCount, 257);
    };
}

export function loadDSTSubscribeSuccess(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3770107736) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _batch = sc_0.loadAddress();
    let _remainingNotificationsCount = sc_0.loadIntBig(257);
    return { $$type: 'DSTSubscribeSuccess' as const, queryId: _queryId, batch: _batch, remainingNotificationsCount: _remainingNotificationsCount };
}

function loadTupleDSTSubscribeSuccess(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _batch = source.readAddress();
    let _remainingNotificationsCount = source.readBigNumber();
    return { $$type: 'DSTSubscribeSuccess' as const, queryId: _queryId, batch: _batch, remainingNotificationsCount: _remainingNotificationsCount };
}

function storeTupleDSTSubscribeSuccess(source: DSTSubscribeSuccess) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.batch);
    builder.writeNumber(source.remainingNotificationsCount);
    return builder.build();
}

function dictValueParserDSTSubscribeSuccess(): DictionaryValue<DSTSubscribeSuccess> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDSTSubscribeSuccess(src)).endCell());
        },
        parse: (src) => {
            return loadDSTSubscribeSuccess(src.loadRef().beginParse());
        }
    }
}

export type Candlestick = {
    $$type: 'Candlestick';
    start: bigint;
    end: bigint;
    open: bigint;
    close: bigint;
    high: bigint;
    low: bigint;
}

export function storeCandlestick(src: Candlestick) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.start, 257);
        b_0.storeInt(src.end, 257);
        b_0.storeInt(src.open, 257);
        let b_1 = new Builder();
        b_1.storeInt(src.close, 257);
        b_1.storeInt(src.high, 257);
        b_1.storeInt(src.low, 257);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadCandlestick(slice: Slice) {
    let sc_0 = slice;
    let _start = sc_0.loadIntBig(257);
    let _end = sc_0.loadIntBig(257);
    let _open = sc_0.loadIntBig(257);
    let sc_1 = sc_0.loadRef().beginParse();
    let _close = sc_1.loadIntBig(257);
    let _high = sc_1.loadIntBig(257);
    let _low = sc_1.loadIntBig(257);
    return { $$type: 'Candlestick' as const, start: _start, end: _end, open: _open, close: _close, high: _high, low: _low };
}

function loadTupleCandlestick(source: TupleReader) {
    let _start = source.readBigNumber();
    let _end = source.readBigNumber();
    let _open = source.readBigNumber();
    let _close = source.readBigNumber();
    let _high = source.readBigNumber();
    let _low = source.readBigNumber();
    return { $$type: 'Candlestick' as const, start: _start, end: _end, open: _open, close: _close, high: _high, low: _low };
}

function storeTupleCandlestick(source: Candlestick) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.start);
    builder.writeNumber(source.end);
    builder.writeNumber(source.open);
    builder.writeNumber(source.close);
    builder.writeNumber(source.high);
    builder.writeNumber(source.low);
    return builder.build();
}

function dictValueParserCandlestick(): DictionaryValue<Candlestick> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeCandlestick(src)).endCell());
        },
        parse: (src) => {
            return loadCandlestick(src.loadRef().beginParse());
        }
    }
}

export type DSTPublishCandlestick = {
    $$type: 'DSTPublishCandlestick';
    queryId: bigint;
    candlestick: Candlestick;
}

export function storeDSTPublishCandlestick(src: DSTPublishCandlestick) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(990592317, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.store(storeCandlestick(src.candlestick));
    };
}

export function loadDSTPublishCandlestick(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 990592317) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _candlestick = loadCandlestick(sc_0);
    return { $$type: 'DSTPublishCandlestick' as const, queryId: _queryId, candlestick: _candlestick };
}

function loadTupleDSTPublishCandlestick(source: TupleReader) {
    let _queryId = source.readBigNumber();
    const _candlestick = loadTupleCandlestick(source.readTuple());
    return { $$type: 'DSTPublishCandlestick' as const, queryId: _queryId, candlestick: _candlestick };
}

function storeTupleDSTPublishCandlestick(source: DSTPublishCandlestick) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeTuple(storeTupleCandlestick(source.candlestick));
    return builder.build();
}

function dictValueParserDSTPublishCandlestick(): DictionaryValue<DSTPublishCandlestick> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDSTPublishCandlestick(src)).endCell());
        },
        parse: (src) => {
            return loadDSTPublishCandlestick(src.loadRef().beginParse());
        }
    }
}

export type DSTPublishCandlestickSuccess = {
    $$type: 'DSTPublishCandlestickSuccess';
    queryId: bigint;
}

export function storeDSTPublishCandlestickSuccess(src: DSTPublishCandlestickSuccess) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(215123525, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDSTPublishCandlestickSuccess(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 215123525) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DSTPublishCandlestickSuccess' as const, queryId: _queryId };
}

function loadTupleDSTPublishCandlestickSuccess(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DSTPublishCandlestickSuccess' as const, queryId: _queryId };
}

function storeTupleDSTPublishCandlestickSuccess(source: DSTPublishCandlestickSuccess) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDSTPublishCandlestickSuccess(): DictionaryValue<DSTPublishCandlestickSuccess> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDSTPublishCandlestickSuccess(src)).endCell());
        },
        parse: (src) => {
            return loadDSTPublishCandlestickSuccess(src.loadRef().beginParse());
        }
    }
}

export type DSTUnsubscribedNotification = {
    $$type: 'DSTUnsubscribedNotification';
    queryId: bigint;
    remainingNotificationsCount: bigint;
}

export function storeDSTUnsubscribedNotification(src: DSTUnsubscribedNotification) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1287102660, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeInt(src.remainingNotificationsCount, 257);
    };
}

export function loadDSTUnsubscribedNotification(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1287102660) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _remainingNotificationsCount = sc_0.loadIntBig(257);
    return { $$type: 'DSTUnsubscribedNotification' as const, queryId: _queryId, remainingNotificationsCount: _remainingNotificationsCount };
}

function loadTupleDSTUnsubscribedNotification(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _remainingNotificationsCount = source.readBigNumber();
    return { $$type: 'DSTUnsubscribedNotification' as const, queryId: _queryId, remainingNotificationsCount: _remainingNotificationsCount };
}

function storeTupleDSTUnsubscribedNotification(source: DSTUnsubscribedNotification) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.remainingNotificationsCount);
    return builder.build();
}

function dictValueParserDSTUnsubscribedNotification(): DictionaryValue<DSTUnsubscribedNotification> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDSTUnsubscribedNotification(src)).endCell());
        },
        parse: (src) => {
            return loadDSTUnsubscribedNotification(src.loadRef().beginParse());
        }
    }
}

export type SBDeploy = {
    $$type: 'SBDeploy';
    queryId: bigint;
}

export function storeSBDeploy(src: SBDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4267613765, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadSBDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4267613765) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'SBDeploy' as const, queryId: _queryId };
}

function loadTupleSBDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'SBDeploy' as const, queryId: _queryId };
}

function storeTupleSBDeploy(source: SBDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserSBDeploy(): DictionaryValue<SBDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSBDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadSBDeploy(src.loadRef().beginParse());
        }
    }
}

export type SBDeploySuccess = {
    $$type: 'SBDeploySuccess';
    queryId: bigint;
    batchId: bigint;
}

export function storeSBDeploySuccess(src: SBDeploySuccess) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1031311118, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeInt(src.batchId, 257);
    };
}

export function loadSBDeploySuccess(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1031311118) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _batchId = sc_0.loadIntBig(257);
    return { $$type: 'SBDeploySuccess' as const, queryId: _queryId, batchId: _batchId };
}

function loadTupleSBDeploySuccess(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _batchId = source.readBigNumber();
    return { $$type: 'SBDeploySuccess' as const, queryId: _queryId, batchId: _batchId };
}

function storeTupleSBDeploySuccess(source: SBDeploySuccess) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.batchId);
    return builder.build();
}

function dictValueParserSBDeploySuccess(): DictionaryValue<SBDeploySuccess> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSBDeploySuccess(src)).endCell());
        },
        parse: (src) => {
            return loadSBDeploySuccess(src.loadRef().beginParse());
        }
    }
}

export type SBSubscribe = {
    $$type: 'SBSubscribe';
    queryId: bigint;
    session: Address;
    notificationsCount: bigint;
}

export function storeSBSubscribe(src: SBSubscribe) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2001551522, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.session);
        b_0.storeInt(src.notificationsCount, 257);
    };
}

export function loadSBSubscribe(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2001551522) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _session = sc_0.loadAddress();
    let _notificationsCount = sc_0.loadIntBig(257);
    return { $$type: 'SBSubscribe' as const, queryId: _queryId, session: _session, notificationsCount: _notificationsCount };
}

function loadTupleSBSubscribe(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _session = source.readAddress();
    let _notificationsCount = source.readBigNumber();
    return { $$type: 'SBSubscribe' as const, queryId: _queryId, session: _session, notificationsCount: _notificationsCount };
}

function storeTupleSBSubscribe(source: SBSubscribe) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.session);
    builder.writeNumber(source.notificationsCount);
    return builder.build();
}

function dictValueParserSBSubscribe(): DictionaryValue<SBSubscribe> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSBSubscribe(src)).endCell());
        },
        parse: (src) => {
            return loadSBSubscribe(src.loadRef().beginParse());
        }
    }
}

export type SBSubscribeSuccess = {
    $$type: 'SBSubscribeSuccess';
    queryId: bigint;
    session: Address;
    remainingNotificationsCount: bigint;
}

export function storeSBSubscribeSuccess(src: SBSubscribeSuccess) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4082513223, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.session);
        b_0.storeInt(src.remainingNotificationsCount, 257);
    };
}

export function loadSBSubscribeSuccess(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4082513223) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _session = sc_0.loadAddress();
    let _remainingNotificationsCount = sc_0.loadIntBig(257);
    return { $$type: 'SBSubscribeSuccess' as const, queryId: _queryId, session: _session, remainingNotificationsCount: _remainingNotificationsCount };
}

function loadTupleSBSubscribeSuccess(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _session = source.readAddress();
    let _remainingNotificationsCount = source.readBigNumber();
    return { $$type: 'SBSubscribeSuccess' as const, queryId: _queryId, session: _session, remainingNotificationsCount: _remainingNotificationsCount };
}

function storeTupleSBSubscribeSuccess(source: SBSubscribeSuccess) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.session);
    builder.writeNumber(source.remainingNotificationsCount);
    return builder.build();
}

function dictValueParserSBSubscribeSuccess(): DictionaryValue<SBSubscribeSuccess> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSBSubscribeSuccess(src)).endCell());
        },
        parse: (src) => {
            return loadSBSubscribeSuccess(src.loadRef().beginParse());
        }
    }
}

export type SBPublishCandlestick = {
    $$type: 'SBPublishCandlestick';
    queryId: bigint;
    candlestick: Candlestick;
    publisher: Address;
}

export function storeSBPublishCandlestick(src: SBPublishCandlestick) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4051052066, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.store(storeCandlestick(src.candlestick));
        let b_1 = new Builder();
        b_1.storeAddress(src.publisher);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadSBPublishCandlestick(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4051052066) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _candlestick = loadCandlestick(sc_0);
    let sc_1 = sc_0.loadRef().beginParse();
    let _publisher = sc_1.loadAddress();
    return { $$type: 'SBPublishCandlestick' as const, queryId: _queryId, candlestick: _candlestick, publisher: _publisher };
}

function loadTupleSBPublishCandlestick(source: TupleReader) {
    let _queryId = source.readBigNumber();
    const _candlestick = loadTupleCandlestick(source.readTuple());
    let _publisher = source.readAddress();
    return { $$type: 'SBPublishCandlestick' as const, queryId: _queryId, candlestick: _candlestick, publisher: _publisher };
}

function storeTupleSBPublishCandlestick(source: SBPublishCandlestick) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeTuple(storeTupleCandlestick(source.candlestick));
    builder.writeAddress(source.publisher);
    return builder.build();
}

function dictValueParserSBPublishCandlestick(): DictionaryValue<SBPublishCandlestick> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSBPublishCandlestick(src)).endCell());
        },
        parse: (src) => {
            return loadSBPublishCandlestick(src.loadRef().beginParse());
        }
    }
}

export type SBCandlestickPublishedNotification = {
    $$type: 'SBCandlestickPublishedNotification';
    queryId: bigint;
    candlestick: Candlestick;
    remainingNotificationsCount: bigint;
}

export function storeSBCandlestickPublishedNotification(src: SBCandlestickPublishedNotification) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4175431181, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.store(storeCandlestick(src.candlestick));
        let b_1 = new Builder();
        b_1.storeInt(src.remainingNotificationsCount, 257);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadSBCandlestickPublishedNotification(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4175431181) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _candlestick = loadCandlestick(sc_0);
    let sc_1 = sc_0.loadRef().beginParse();
    let _remainingNotificationsCount = sc_1.loadIntBig(257);
    return { $$type: 'SBCandlestickPublishedNotification' as const, queryId: _queryId, candlestick: _candlestick, remainingNotificationsCount: _remainingNotificationsCount };
}

function loadTupleSBCandlestickPublishedNotification(source: TupleReader) {
    let _queryId = source.readBigNumber();
    const _candlestick = loadTupleCandlestick(source.readTuple());
    let _remainingNotificationsCount = source.readBigNumber();
    return { $$type: 'SBCandlestickPublishedNotification' as const, queryId: _queryId, candlestick: _candlestick, remainingNotificationsCount: _remainingNotificationsCount };
}

function storeTupleSBCandlestickPublishedNotification(source: SBCandlestickPublishedNotification) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeTuple(storeTupleCandlestick(source.candlestick));
    builder.writeNumber(source.remainingNotificationsCount);
    return builder.build();
}

function dictValueParserSBCandlestickPublishedNotification(): DictionaryValue<SBCandlestickPublishedNotification> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSBCandlestickPublishedNotification(src)).endCell());
        },
        parse: (src) => {
            return loadSBCandlestickPublishedNotification(src.loadRef().beginParse());
        }
    }
}

export type SBUnsubscribedNotification = {
    $$type: 'SBUnsubscribedNotification';
    queryId: bigint;
    session: Address;
    remainingNotificationsCount: bigint;
}

export function storeSBUnsubscribedNotification(src: SBUnsubscribedNotification) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1003141156, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.session);
        b_0.storeInt(src.remainingNotificationsCount, 257);
    };
}

export function loadSBUnsubscribedNotification(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1003141156) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _session = sc_0.loadAddress();
    let _remainingNotificationsCount = sc_0.loadIntBig(257);
    return { $$type: 'SBUnsubscribedNotification' as const, queryId: _queryId, session: _session, remainingNotificationsCount: _remainingNotificationsCount };
}

function loadTupleSBUnsubscribedNotification(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _session = source.readAddress();
    let _remainingNotificationsCount = source.readBigNumber();
    return { $$type: 'SBUnsubscribedNotification' as const, queryId: _queryId, session: _session, remainingNotificationsCount: _remainingNotificationsCount };
}

function storeTupleSBUnsubscribedNotification(source: SBUnsubscribedNotification) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.session);
    builder.writeNumber(source.remainingNotificationsCount);
    return builder.build();
}

function dictValueParserSBUnsubscribedNotification(): DictionaryValue<SBUnsubscribedNotification> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSBUnsubscribedNotification(src)).endCell());
        },
        parse: (src) => {
            return loadSBUnsubscribedNotification(src.loadRef().beginParse());
        }
    }
}

export type SBPublishCandlestickSuccess = {
    $$type: 'SBPublishCandlestickSuccess';
    queryId: bigint;
}

export function storeSBPublishCandlestickSuccess(src: SBPublishCandlestickSuccess) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1027631690, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadSBPublishCandlestickSuccess(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1027631690) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'SBPublishCandlestickSuccess' as const, queryId: _queryId };
}

function loadTupleSBPublishCandlestickSuccess(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'SBPublishCandlestickSuccess' as const, queryId: _queryId };
}

function storeTupleSBPublishCandlestickSuccess(source: SBPublishCandlestickSuccess) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserSBPublishCandlestickSuccess(): DictionaryValue<SBPublishCandlestickSuccess> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSBPublishCandlestickSuccess(src)).endCell());
        },
        parse: (src) => {
            return loadSBPublishCandlestickSuccess(src.loadRef().beginParse());
        }
    }
}

export type SESDeploy = {
    $$type: 'SESDeploy';
    queryId: bigint;
}

export function storeSESDeploy(src: SESDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1372687436, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadSESDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1372687436) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'SESDeploy' as const, queryId: _queryId };
}

function loadTupleSESDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'SESDeploy' as const, queryId: _queryId };
}

function storeTupleSESDeploy(source: SESDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserSESDeploy(): DictionaryValue<SESDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSESDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadSESDeploy(src.loadRef().beginParse());
        }
    }
}

export type SESDeploySuccess = {
    $$type: 'SESDeploySuccess';
    queryId: bigint;
    subscriber: Address;
}

export function storeSESDeploySuccess(src: SESDeploySuccess) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(269942218, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.subscriber);
    };
}

export function loadSESDeploySuccess(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 269942218) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _subscriber = sc_0.loadAddress();
    return { $$type: 'SESDeploySuccess' as const, queryId: _queryId, subscriber: _subscriber };
}

function loadTupleSESDeploySuccess(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _subscriber = source.readAddress();
    return { $$type: 'SESDeploySuccess' as const, queryId: _queryId, subscriber: _subscriber };
}

function storeTupleSESDeploySuccess(source: SESDeploySuccess) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.subscriber);
    return builder.build();
}

function dictValueParserSESDeploySuccess(): DictionaryValue<SESDeploySuccess> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSESDeploySuccess(src)).endCell());
        },
        parse: (src) => {
            return loadSESDeploySuccess(src.loadRef().beginParse());
        }
    }
}

export type SESSubscribe = {
    $$type: 'SESSubscribe';
    queryId: bigint;
    notificationsCount: bigint;
}

export function storeSESSubscribe(src: SESSubscribe) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1533823831, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeInt(src.notificationsCount, 257);
    };
}

export function loadSESSubscribe(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1533823831) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _notificationsCount = sc_0.loadIntBig(257);
    return { $$type: 'SESSubscribe' as const, queryId: _queryId, notificationsCount: _notificationsCount };
}

function loadTupleSESSubscribe(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _notificationsCount = source.readBigNumber();
    return { $$type: 'SESSubscribe' as const, queryId: _queryId, notificationsCount: _notificationsCount };
}

function storeTupleSESSubscribe(source: SESSubscribe) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.notificationsCount);
    return builder.build();
}

function dictValueParserSESSubscribe(): DictionaryValue<SESSubscribe> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSESSubscribe(src)).endCell());
        },
        parse: (src) => {
            return loadSESSubscribe(src.loadRef().beginParse());
        }
    }
}

export type DSTTopUpSubscription = {
    $$type: 'DSTTopUpSubscription';
    queryId: bigint;
    subscriber: Address;
    batch: Address;
    notificationsCount: bigint;
}

export function storeDSTTopUpSubscription(src: DSTTopUpSubscription) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(495971614, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.subscriber);
        b_0.storeAddress(src.batch);
        b_0.storeInt(src.notificationsCount, 257);
    };
}

export function loadDSTTopUpSubscription(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 495971614) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _subscriber = sc_0.loadAddress();
    let _batch = sc_0.loadAddress();
    let _notificationsCount = sc_0.loadIntBig(257);
    return { $$type: 'DSTTopUpSubscription' as const, queryId: _queryId, subscriber: _subscriber, batch: _batch, notificationsCount: _notificationsCount };
}

function loadTupleDSTTopUpSubscription(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _subscriber = source.readAddress();
    let _batch = source.readAddress();
    let _notificationsCount = source.readBigNumber();
    return { $$type: 'DSTTopUpSubscription' as const, queryId: _queryId, subscriber: _subscriber, batch: _batch, notificationsCount: _notificationsCount };
}

function storeTupleDSTTopUpSubscription(source: DSTTopUpSubscription) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.subscriber);
    builder.writeAddress(source.batch);
    builder.writeNumber(source.notificationsCount);
    return builder.build();
}

function dictValueParserDSTTopUpSubscription(): DictionaryValue<DSTTopUpSubscription> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDSTTopUpSubscription(src)).endCell());
        },
        parse: (src) => {
            return loadDSTTopUpSubscription(src.loadRef().beginParse());
        }
    }
}

export type SBTopUpSubscription = {
    $$type: 'SBTopUpSubscription';
    queryId: bigint;
    session: Address;
    notificationsCount: bigint;
}

export function storeSBTopUpSubscription(src: SBTopUpSubscription) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(267884312, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.session);
        b_0.storeInt(src.notificationsCount, 257);
    };
}

export function loadSBTopUpSubscription(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 267884312) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _session = sc_0.loadAddress();
    let _notificationsCount = sc_0.loadIntBig(257);
    return { $$type: 'SBTopUpSubscription' as const, queryId: _queryId, session: _session, notificationsCount: _notificationsCount };
}

function loadTupleSBTopUpSubscription(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _session = source.readAddress();
    let _notificationsCount = source.readBigNumber();
    return { $$type: 'SBTopUpSubscription' as const, queryId: _queryId, session: _session, notificationsCount: _notificationsCount };
}

function storeTupleSBTopUpSubscription(source: SBTopUpSubscription) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.session);
    builder.writeNumber(source.notificationsCount);
    return builder.build();
}

function dictValueParserSBTopUpSubscription(): DictionaryValue<SBTopUpSubscription> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSBTopUpSubscription(src)).endCell());
        },
        parse: (src) => {
            return loadSBTopUpSubscription(src.loadRef().beginParse());
        }
    }
}

export type SESSubscribeSuccess = {
    $$type: 'SESSubscribeSuccess';
    queryId: bigint;
    remainingNotificationsCount: bigint;
}

export function storeSESSubscribeSuccess(src: SESSubscribeSuccess) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1400038355, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeInt(src.remainingNotificationsCount, 257);
    };
}

export function loadSESSubscribeSuccess(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1400038355) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _remainingNotificationsCount = sc_0.loadIntBig(257);
    return { $$type: 'SESSubscribeSuccess' as const, queryId: _queryId, remainingNotificationsCount: _remainingNotificationsCount };
}

function loadTupleSESSubscribeSuccess(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _remainingNotificationsCount = source.readBigNumber();
    return { $$type: 'SESSubscribeSuccess' as const, queryId: _queryId, remainingNotificationsCount: _remainingNotificationsCount };
}

function storeTupleSESSubscribeSuccess(source: SESSubscribeSuccess) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.remainingNotificationsCount);
    return builder.build();
}

function dictValueParserSESSubscribeSuccess(): DictionaryValue<SESSubscribeSuccess> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSESSubscribeSuccess(src)).endCell());
        },
        parse: (src) => {
            return loadSESSubscribeSuccess(src.loadRef().beginParse());
        }
    }
}

export type SESCandlestickPublishedNotification = {
    $$type: 'SESCandlestickPublishedNotification';
    queryId: bigint;
    candlestick: Candlestick;
    remainingNotificationsCount: bigint;
}

export function storeSESCandlestickPublishedNotification(src: SESCandlestickPublishedNotification) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3200926804, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.store(storeCandlestick(src.candlestick));
        let b_1 = new Builder();
        b_1.storeInt(src.remainingNotificationsCount, 257);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadSESCandlestickPublishedNotification(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3200926804) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _candlestick = loadCandlestick(sc_0);
    let sc_1 = sc_0.loadRef().beginParse();
    let _remainingNotificationsCount = sc_1.loadIntBig(257);
    return { $$type: 'SESCandlestickPublishedNotification' as const, queryId: _queryId, candlestick: _candlestick, remainingNotificationsCount: _remainingNotificationsCount };
}

function loadTupleSESCandlestickPublishedNotification(source: TupleReader) {
    let _queryId = source.readBigNumber();
    const _candlestick = loadTupleCandlestick(source.readTuple());
    let _remainingNotificationsCount = source.readBigNumber();
    return { $$type: 'SESCandlestickPublishedNotification' as const, queryId: _queryId, candlestick: _candlestick, remainingNotificationsCount: _remainingNotificationsCount };
}

function storeTupleSESCandlestickPublishedNotification(source: SESCandlestickPublishedNotification) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeTuple(storeTupleCandlestick(source.candlestick));
    builder.writeNumber(source.remainingNotificationsCount);
    return builder.build();
}

function dictValueParserSESCandlestickPublishedNotification(): DictionaryValue<SESCandlestickPublishedNotification> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSESCandlestickPublishedNotification(src)).endCell());
        },
        parse: (src) => {
            return loadSESCandlestickPublishedNotification(src.loadRef().beginParse());
        }
    }
}

export type SESUnsubscribedNotification = {
    $$type: 'SESUnsubscribedNotification';
    queryId: bigint;
    remainingNotificationsCount: bigint;
}

export function storeSESUnsubscribedNotification(src: SESUnsubscribedNotification) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4092566650, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeInt(src.remainingNotificationsCount, 257);
    };
}

export function loadSESUnsubscribedNotification(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4092566650) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _remainingNotificationsCount = sc_0.loadIntBig(257);
    return { $$type: 'SESUnsubscribedNotification' as const, queryId: _queryId, remainingNotificationsCount: _remainingNotificationsCount };
}

function loadTupleSESUnsubscribedNotification(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _remainingNotificationsCount = source.readBigNumber();
    return { $$type: 'SESUnsubscribedNotification' as const, queryId: _queryId, remainingNotificationsCount: _remainingNotificationsCount };
}

function storeTupleSESUnsubscribedNotification(source: SESUnsubscribedNotification) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.remainingNotificationsCount);
    return builder.build();
}

function dictValueParserSESUnsubscribedNotification(): DictionaryValue<SESUnsubscribedNotification> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSESUnsubscribedNotification(src)).endCell());
        },
        parse: (src) => {
            return loadSESUnsubscribedNotification(src.loadRef().beginParse());
        }
    }
}

export type SESUnsubscribe = {
    $$type: 'SESUnsubscribe';
    queryId: bigint;
}

export function storeSESUnsubscribe(src: SESUnsubscribe) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2668625285, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadSESUnsubscribe(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2668625285) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'SESUnsubscribe' as const, queryId: _queryId };
}

function loadTupleSESUnsubscribe(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'SESUnsubscribe' as const, queryId: _queryId };
}

function storeTupleSESUnsubscribe(source: SESUnsubscribe) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserSESUnsubscribe(): DictionaryValue<SESUnsubscribe> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSESUnsubscribe(src)).endCell());
        },
        parse: (src) => {
            return loadSESUnsubscribe(src.loadRef().beginParse());
        }
    }
}

export type SBUnsubscribe = {
    $$type: 'SBUnsubscribe';
    queryId: bigint;
}

export function storeSBUnsubscribe(src: SBUnsubscribe) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1095850324, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadSBUnsubscribe(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1095850324) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'SBUnsubscribe' as const, queryId: _queryId };
}

function loadTupleSBUnsubscribe(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'SBUnsubscribe' as const, queryId: _queryId };
}

function storeTupleSBUnsubscribe(source: SBUnsubscribe) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserSBUnsubscribe(): DictionaryValue<SBUnsubscribe> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSBUnsubscribe(src)).endCell());
        },
        parse: (src) => {
            return loadSBUnsubscribe(src.loadRef().beginParse());
        }
    }
}

export type SESDestroy = {
    $$type: 'SESDestroy';
    queryId: bigint;
}

export function storeSESDestroy(src: SESDestroy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2226780297, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadSESDestroy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2226780297) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'SESDestroy' as const, queryId: _queryId };
}

function loadTupleSESDestroy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'SESDestroy' as const, queryId: _queryId };
}

function storeTupleSESDestroy(source: SESDestroy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserSESDestroy(): DictionaryValue<SESDestroy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSESDestroy(src)).endCell());
        },
        parse: (src) => {
            return loadSESDestroy(src.loadRef().beginParse());
        }
    }
}

export type SESDestroySuccess = {
    $$type: 'SESDestroySuccess';
    queryId: bigint;
}

export function storeSESDestroySuccess(src: SESDestroySuccess) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(21916563, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadSESDestroySuccess(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 21916563) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'SESDestroySuccess' as const, queryId: _queryId };
}

function loadTupleSESDestroySuccess(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'SESDestroySuccess' as const, queryId: _queryId };
}

function storeTupleSESDestroySuccess(source: SESDestroySuccess) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserSESDestroySuccess(): DictionaryValue<SESDestroySuccess> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSESDestroySuccess(src)).endCell());
        },
        parse: (src) => {
            return loadSESDestroySuccess(src.loadRef().beginParse());
        }
    }
}

export type BRGDeploy = {
    $$type: 'BRGDeploy';
    queryId: bigint;
}

export function storeBRGDeploy(src: BRGDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4195386677, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadBRGDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4195386677) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'BRGDeploy' as const, queryId: _queryId };
}

function loadTupleBRGDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'BRGDeploy' as const, queryId: _queryId };
}

function storeTupleBRGDeploy(source: BRGDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserBRGDeploy(): DictionaryValue<BRGDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBRGDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadBRGDeploy(src.loadRef().beginParse());
        }
    }
}

export type BRGDeploySuccess = {
    $$type: 'BRGDeploySuccess';
    queryId: bigint;
}

export function storeBRGDeploySuccess(src: BRGDeploySuccess) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3142995347, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadBRGDeploySuccess(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3142995347) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'BRGDeploySuccess' as const, queryId: _queryId };
}

function loadTupleBRGDeploySuccess(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'BRGDeploySuccess' as const, queryId: _queryId };
}

function storeTupleBRGDeploySuccess(source: BRGDeploySuccess) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserBRGDeploySuccess(): DictionaryValue<BRGDeploySuccess> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBRGDeploySuccess(src)).endCell());
        },
        parse: (src) => {
            return loadBRGDeploySuccess(src.loadRef().beginParse());
        }
    }
}

export type BRGDeployBroker = {
    $$type: 'BRGDeployBroker';
    queryId: bigint;
    stream: Address;
}

export function storeBRGDeployBroker(src: BRGDeployBroker) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(298971134, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.stream);
    };
}

export function loadBRGDeployBroker(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 298971134) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _stream = sc_0.loadAddress();
    return { $$type: 'BRGDeployBroker' as const, queryId: _queryId, stream: _stream };
}

function loadTupleBRGDeployBroker(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _stream = source.readAddress();
    return { $$type: 'BRGDeployBroker' as const, queryId: _queryId, stream: _stream };
}

function storeTupleBRGDeployBroker(source: BRGDeployBroker) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.stream);
    return builder.build();
}

function dictValueParserBRGDeployBroker(): DictionaryValue<BRGDeployBroker> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBRGDeployBroker(src)).endCell());
        },
        parse: (src) => {
            return loadBRGDeployBroker(src.loadRef().beginParse());
        }
    }
}

export type BRKDeploy = {
    $$type: 'BRKDeploy';
    queryId: bigint;
}

export function storeBRKDeploy(src: BRKDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1366331229, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadBRKDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1366331229) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'BRKDeploy' as const, queryId: _queryId };
}

function loadTupleBRKDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'BRKDeploy' as const, queryId: _queryId };
}

function storeTupleBRKDeploy(source: BRKDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserBRKDeploy(): DictionaryValue<BRKDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBRKDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadBRKDeploy(src.loadRef().beginParse());
        }
    }
}

export type BRKDeploySuccess = {
    $$type: 'BRKDeploySuccess';
    queryId: bigint;
    stream: Address;
}

export function storeBRKDeploySuccess(src: BRKDeploySuccess) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2536416450, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.stream);
    };
}

export function loadBRKDeploySuccess(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2536416450) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _stream = sc_0.loadAddress();
    return { $$type: 'BRKDeploySuccess' as const, queryId: _queryId, stream: _stream };
}

function loadTupleBRKDeploySuccess(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _stream = source.readAddress();
    return { $$type: 'BRKDeploySuccess' as const, queryId: _queryId, stream: _stream };
}

function storeTupleBRKDeploySuccess(source: BRKDeploySuccess) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.stream);
    return builder.build();
}

function dictValueParserBRKDeploySuccess(): DictionaryValue<BRKDeploySuccess> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBRKDeploySuccess(src)).endCell());
        },
        parse: (src) => {
            return loadBRKDeploySuccess(src.loadRef().beginParse());
        }
    }
}

export type BRGDeployBrokerSuccess = {
    $$type: 'BRGDeployBrokerSuccess';
    queryId: bigint;
    broker: Address;
}

export function storeBRGDeployBrokerSuccess(src: BRGDeployBrokerSuccess) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(4042145317, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.broker);
    };
}

export function loadBRGDeployBrokerSuccess(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 4042145317) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _broker = sc_0.loadAddress();
    return { $$type: 'BRGDeployBrokerSuccess' as const, queryId: _queryId, broker: _broker };
}

function loadTupleBRGDeployBrokerSuccess(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _broker = source.readAddress();
    return { $$type: 'BRGDeployBrokerSuccess' as const, queryId: _queryId, broker: _broker };
}

function storeTupleBRGDeployBrokerSuccess(source: BRGDeployBrokerSuccess) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.broker);
    return builder.build();
}

function dictValueParserBRGDeployBrokerSuccess(): DictionaryValue<BRGDeployBrokerSuccess> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBRGDeployBrokerSuccess(src)).endCell());
        },
        parse: (src) => {
            return loadBRGDeployBrokerSuccess(src.loadRef().beginParse());
        }
    }
}

export type BRGDeployAccount = {
    $$type: 'BRGDeployAccount';
    queryId: bigint;
}

export function storeBRGDeployAccount(src: BRGDeployAccount) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3233956202, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadBRGDeployAccount(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3233956202) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'BRGDeployAccount' as const, queryId: _queryId };
}

function loadTupleBRGDeployAccount(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'BRGDeployAccount' as const, queryId: _queryId };
}

function storeTupleBRGDeployAccount(source: BRGDeployAccount) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserBRGDeployAccount(): DictionaryValue<BRGDeployAccount> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBRGDeployAccount(src)).endCell());
        },
        parse: (src) => {
            return loadBRGDeployAccount(src.loadRef().beginParse());
        }
    }
}

export type BRADeploy = {
    $$type: 'BRADeploy';
    queryId: bigint;
}

export function storeBRADeploy(src: BRADeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1181556865, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadBRADeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1181556865) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'BRADeploy' as const, queryId: _queryId };
}

function loadTupleBRADeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'BRADeploy' as const, queryId: _queryId };
}

function storeTupleBRADeploy(source: BRADeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserBRADeploy(): DictionaryValue<BRADeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBRADeploy(src)).endCell());
        },
        parse: (src) => {
            return loadBRADeploy(src.loadRef().beginParse());
        }
    }
}

export type BRADeploySuccess = {
    $$type: 'BRADeploySuccess';
    queryId: bigint;
    trader: Address;
}

export function storeBRADeploySuccess(src: BRADeploySuccess) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3517832790, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.trader);
    };
}

export function loadBRADeploySuccess(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3517832790) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _trader = sc_0.loadAddress();
    return { $$type: 'BRADeploySuccess' as const, queryId: _queryId, trader: _trader };
}

function loadTupleBRADeploySuccess(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _trader = source.readAddress();
    return { $$type: 'BRADeploySuccess' as const, queryId: _queryId, trader: _trader };
}

function storeTupleBRADeploySuccess(source: BRADeploySuccess) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.trader);
    return builder.build();
}

function dictValueParserBRADeploySuccess(): DictionaryValue<BRADeploySuccess> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBRADeploySuccess(src)).endCell());
        },
        parse: (src) => {
            return loadBRADeploySuccess(src.loadRef().beginParse());
        }
    }
}

export type BRGDeployAccountSuccess = {
    $$type: 'BRGDeployAccountSuccess';
    queryId: bigint;
    account: Address;
}

export function storeBRGDeployAccountSuccess(src: BRGDeployAccountSuccess) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1962963078, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.account);
    };
}

export function loadBRGDeployAccountSuccess(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1962963078) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _account = sc_0.loadAddress();
    return { $$type: 'BRGDeployAccountSuccess' as const, queryId: _queryId, account: _account };
}

function loadTupleBRGDeployAccountSuccess(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _account = source.readAddress();
    return { $$type: 'BRGDeployAccountSuccess' as const, queryId: _queryId, account: _account };
}

function storeTupleBRGDeployAccountSuccess(source: BRGDeployAccountSuccess) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.account);
    return builder.build();
}

function dictValueParserBRGDeployAccountSuccess(): DictionaryValue<BRGDeployAccountSuccess> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBRGDeployAccountSuccess(src)).endCell());
        },
        parse: (src) => {
            return loadBRGDeployAccountSuccess(src.loadRef().beginParse());
        }
    }
}

export type BRKDeposit = {
    $$type: 'BRKDeposit';
    queryId: bigint;
}

export function storeBRKDeposit(src: BRKDeposit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2141827764, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadBRKDeposit(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2141827764) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'BRKDeposit' as const, queryId: _queryId };
}

function loadTupleBRKDeposit(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'BRKDeposit' as const, queryId: _queryId };
}

function storeTupleBRKDeposit(source: BRKDeposit) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserBRKDeposit(): DictionaryValue<BRKDeposit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBRKDeposit(src)).endCell());
        },
        parse: (src) => {
            return loadBRKDeposit(src.loadRef().beginParse());
        }
    }
}

export type BRKDepositSuccess = {
    $$type: 'BRKDepositSuccess';
    queryId: bigint;
}

export function storeBRKDepositSuccess(src: BRKDepositSuccess) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2064422216, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadBRKDepositSuccess(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2064422216) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'BRKDepositSuccess' as const, queryId: _queryId };
}

function loadTupleBRKDepositSuccess(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'BRKDepositSuccess' as const, queryId: _queryId };
}

function storeTupleBRKDepositSuccess(source: BRKDepositSuccess) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserBRKDepositSuccess(): DictionaryValue<BRKDepositSuccess> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBRKDepositSuccess(src)).endCell());
        },
        parse: (src) => {
            return loadBRKDepositSuccess(src.loadRef().beginParse());
        }
    }
}

export type BRKWithdraw = {
    $$type: 'BRKWithdraw';
    queryId: bigint;
}

export function storeBRKWithdraw(src: BRKWithdraw) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(550691255, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadBRKWithdraw(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 550691255) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'BRKWithdraw' as const, queryId: _queryId };
}

function loadTupleBRKWithdraw(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'BRKWithdraw' as const, queryId: _queryId };
}

function storeTupleBRKWithdraw(source: BRKWithdraw) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserBRKWithdraw(): DictionaryValue<BRKWithdraw> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBRKWithdraw(src)).endCell());
        },
        parse: (src) => {
            return loadBRKWithdraw(src.loadRef().beginParse());
        }
    }
}

export type BRKWithdrawSuccess = {
    $$type: 'BRKWithdrawSuccess';
    queryId: bigint;
}

export function storeBRKWithdrawSuccess(src: BRKWithdrawSuccess) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2654800410, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadBRKWithdrawSuccess(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2654800410) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'BRKWithdrawSuccess' as const, queryId: _queryId };
}

function loadTupleBRKWithdrawSuccess(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'BRKWithdrawSuccess' as const, queryId: _queryId };
}

function storeTupleBRKWithdrawSuccess(source: BRKWithdrawSuccess) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserBRKWithdrawSuccess(): DictionaryValue<BRKWithdrawSuccess> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBRKWithdrawSuccess(src)).endCell());
        },
        parse: (src) => {
            return loadBRKWithdrawSuccess(src.loadRef().beginParse());
        }
    }
}

export type SubscriptionInfo = {
    $$type: 'SubscriptionInfo';
    remainingNotificationsCount: bigint;
}

export function storeSubscriptionInfo(src: SubscriptionInfo) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.remainingNotificationsCount, 257);
    };
}

export function loadSubscriptionInfo(slice: Slice) {
    let sc_0 = slice;
    let _remainingNotificationsCount = sc_0.loadIntBig(257);
    return { $$type: 'SubscriptionInfo' as const, remainingNotificationsCount: _remainingNotificationsCount };
}

function loadTupleSubscriptionInfo(source: TupleReader) {
    let _remainingNotificationsCount = source.readBigNumber();
    return { $$type: 'SubscriptionInfo' as const, remainingNotificationsCount: _remainingNotificationsCount };
}

function storeTupleSubscriptionInfo(source: SubscriptionInfo) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.remainingNotificationsCount);
    return builder.build();
}

function dictValueParserSubscriptionInfo(): DictionaryValue<SubscriptionInfo> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSubscriptionInfo(src)).endCell());
        },
        parse: (src) => {
            return loadSubscriptionInfo(src.loadRef().beginParse());
        }
    }
}

export type SBInfo = {
    $$type: 'SBInfo';
    subscriptionsCount: bigint;
}

export function storeSBInfo(src: SBInfo) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.subscriptionsCount, 257);
    };
}

export function loadSBInfo(slice: Slice) {
    let sc_0 = slice;
    let _subscriptionsCount = sc_0.loadIntBig(257);
    return { $$type: 'SBInfo' as const, subscriptionsCount: _subscriptionsCount };
}

function loadTupleSBInfo(source: TupleReader) {
    let _subscriptionsCount = source.readBigNumber();
    return { $$type: 'SBInfo' as const, subscriptionsCount: _subscriptionsCount };
}

function storeTupleSBInfo(source: SBInfo) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.subscriptionsCount);
    return builder.build();
}

function dictValueParserSBInfo(): DictionaryValue<SBInfo> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSBInfo(src)).endCell());
        },
        parse: (src) => {
            return loadSBInfo(src.loadRef().beginParse());
        }
    }
}

 type DataStream_init_args = {
    $$type: 'DataStream_init_args';
    publisher: Address;
    topic: string;
}

function initDataStream_init_args(src: DataStream_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.publisher);
        b_0.storeStringRefTail(src.topic);
    };
}

async function DataStream_init(publisher: Address, topic: string) {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initDataStream_init_args({ $$type: 'DataStream_init_args', publisher, topic })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const DataStream_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack underflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
}

const DataStream_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"DSTDeploy","header":306133030,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DSTDeploySuccess","header":3957924127,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DSTDeployBatch","header":3012477066,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DSTDeployBatchSuccess","header":1261138638,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"batch","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"DSTDeploySession","header":1658160529,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DSTDeploySessionSuccess","header":3452518278,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"session","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"DSTSubscribe","header":3216336466,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"subscriber","type":{"kind":"simple","type":"address","optional":false}},{"name":"notificationsCount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"DSTSubscribeSuccess","header":3770107736,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"batch","type":{"kind":"simple","type":"address","optional":false}},{"name":"remainingNotificationsCount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"Candlestick","header":null,"fields":[{"name":"start","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"end","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"open","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"close","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"high","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"low","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"DSTPublishCandlestick","header":990592317,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"candlestick","type":{"kind":"simple","type":"Candlestick","optional":false}}]},
    {"name":"DSTPublishCandlestickSuccess","header":215123525,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DSTUnsubscribedNotification","header":1287102660,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"remainingNotificationsCount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SBDeploy","header":4267613765,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"SBDeploySuccess","header":1031311118,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"batchId","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SBSubscribe","header":2001551522,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"session","type":{"kind":"simple","type":"address","optional":false}},{"name":"notificationsCount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SBSubscribeSuccess","header":4082513223,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"session","type":{"kind":"simple","type":"address","optional":false}},{"name":"remainingNotificationsCount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SBPublishCandlestick","header":4051052066,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"candlestick","type":{"kind":"simple","type":"Candlestick","optional":false}},{"name":"publisher","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"SBCandlestickPublishedNotification","header":4175431181,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"candlestick","type":{"kind":"simple","type":"Candlestick","optional":false}},{"name":"remainingNotificationsCount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SBUnsubscribedNotification","header":1003141156,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"session","type":{"kind":"simple","type":"address","optional":false}},{"name":"remainingNotificationsCount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SBPublishCandlestickSuccess","header":1027631690,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"SESDeploy","header":1372687436,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"SESDeploySuccess","header":269942218,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"subscriber","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"SESSubscribe","header":1533823831,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"notificationsCount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"DSTTopUpSubscription","header":495971614,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"subscriber","type":{"kind":"simple","type":"address","optional":false}},{"name":"batch","type":{"kind":"simple","type":"address","optional":false}},{"name":"notificationsCount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SBTopUpSubscription","header":267884312,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"session","type":{"kind":"simple","type":"address","optional":false}},{"name":"notificationsCount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SESSubscribeSuccess","header":1400038355,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"remainingNotificationsCount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SESCandlestickPublishedNotification","header":3200926804,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"candlestick","type":{"kind":"simple","type":"Candlestick","optional":false}},{"name":"remainingNotificationsCount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SESUnsubscribedNotification","header":4092566650,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"remainingNotificationsCount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SESUnsubscribe","header":2668625285,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"SBUnsubscribe","header":1095850324,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"SESDestroy","header":2226780297,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"SESDestroySuccess","header":21916563,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"BRGDeploy","header":4195386677,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"BRGDeploySuccess","header":3142995347,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"BRGDeployBroker","header":298971134,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"stream","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"BRKDeploy","header":1366331229,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"BRKDeploySuccess","header":2536416450,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"stream","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"BRGDeployBrokerSuccess","header":4042145317,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"broker","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"BRGDeployAccount","header":3233956202,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"BRADeploy","header":1181556865,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"BRADeploySuccess","header":3517832790,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"trader","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"BRGDeployAccountSuccess","header":1962963078,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"account","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"BRKDeposit","header":2141827764,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"BRKDepositSuccess","header":2064422216,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"BRKWithdraw","header":550691255,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"BRKWithdrawSuccess","header":2654800410,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"SubscriptionInfo","header":null,"fields":[{"name":"remainingNotificationsCount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SBInfo","header":null,"fields":[{"name":"subscriptionsCount","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
]

const DataStream_getters: ABIGetter[] = [
    {"name":"balance","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"storageReserve","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"deployBatchDeposit","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"deploySessionDeposit","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"publishCandlestickDeposit","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"notificationDeposit","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"notificationPremium","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"publisherAddress","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"topic","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
    {"name":"batches","arguments":[],"returnType":{"kind":"dict","key":"address","value":"SBInfo","valueFormat":"ref"}},
    {"name":"nextBatchId","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"batchAddress","arguments":[{"name":"batchId","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"sessionAddress","arguments":[{"name":"subscriber","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"address","optional":false}},
]

const DataStream_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"DSTDeploy"}},
    {"receiver":"internal","message":{"kind":"typed","type":"DSTDeployBatch"}},
    {"receiver":"internal","message":{"kind":"typed","type":"SBDeploySuccess"}},
    {"receiver":"internal","message":{"kind":"typed","type":"DSTDeploySession"}},
    {"receiver":"internal","message":{"kind":"typed","type":"SESDeploySuccess"}},
    {"receiver":"internal","message":{"kind":"typed","type":"DSTSubscribe"}},
    {"receiver":"internal","message":{"kind":"typed","type":"DSTTopUpSubscription"}},
    {"receiver":"internal","message":{"kind":"typed","type":"SBSubscribeSuccess"}},
    {"receiver":"internal","message":{"kind":"typed","type":"DSTPublishCandlestick"}},
    {"receiver":"internal","message":{"kind":"typed","type":"SBUnsubscribedNotification"}},
]

export class DataStream implements Contract {
    
    static async init(publisher: Address, topic: string) {
        return await DataStream_init(publisher, topic);
    }
    
    static async fromInit(publisher: Address, topic: string) {
        const init = await DataStream_init(publisher, topic);
        const address = contractAddress(0, init);
        return new DataStream(address, init);
    }
    
    static fromAddress(address: Address) {
        return new DataStream(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  DataStream_types,
        getters: DataStream_getters,
        receivers: DataStream_receivers,
        errors: DataStream_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: DSTDeploy | DSTDeployBatch | SBDeploySuccess | DSTDeploySession | SESDeploySuccess | DSTSubscribe | DSTTopUpSubscription | SBSubscribeSuccess | DSTPublishCandlestick | SBUnsubscribedNotification) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'DSTDeploy') {
            body = beginCell().store(storeDSTDeploy(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'DSTDeployBatch') {
            body = beginCell().store(storeDSTDeployBatch(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SBDeploySuccess') {
            body = beginCell().store(storeSBDeploySuccess(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'DSTDeploySession') {
            body = beginCell().store(storeDSTDeploySession(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SESDeploySuccess') {
            body = beginCell().store(storeSESDeploySuccess(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'DSTSubscribe') {
            body = beginCell().store(storeDSTSubscribe(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'DSTTopUpSubscription') {
            body = beginCell().store(storeDSTTopUpSubscription(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SBSubscribeSuccess') {
            body = beginCell().store(storeSBSubscribeSuccess(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'DSTPublishCandlestick') {
            body = beginCell().store(storeDSTPublishCandlestick(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SBUnsubscribedNotification') {
            body = beginCell().store(storeSBUnsubscribedNotification(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getBalance(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('balance', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getStorageReserve(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('storageReserve', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getDeployBatchDeposit(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('deployBatchDeposit', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getDeploySessionDeposit(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('deploySessionDeposit', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getPublishCandlestickDeposit(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('publishCandlestickDeposit', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getNotificationDeposit(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('notificationDeposit', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getNotificationPremium(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('notificationPremium', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getPublisherAddress(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('publisherAddress', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getTopic(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('topic', builder.build())).stack;
        let result = source.readString();
        return result;
    }
    
    async getBatches(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('batches', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.Address(), dictValueParserSBInfo(), source.readCellOpt());
        return result;
    }
    
    async getNextBatchId(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('nextBatchId', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getBatchAddress(provider: ContractProvider, batchId: bigint) {
        let builder = new TupleBuilder();
        builder.writeNumber(batchId);
        let source = (await provider.get('batchAddress', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getSessionAddress(provider: ContractProvider, subscriber: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(subscriber);
        let source = (await provider.get('sessionAddress', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}