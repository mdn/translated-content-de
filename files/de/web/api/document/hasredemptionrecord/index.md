---
title: "Dokument: hasRedemptionRecord() Methode"
short-title: hasRedemptionRecord()
slug: Web/API/Document/hasRedemptionRecord
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{APIRef("Storage Access API")}}{{SeeCompatTable}}

Die **`hasRedemptionRecord()`** Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt ein Promise zurück, das mit einem booleschen Wert erfüllt wird, der angibt, ob der Browser ein [Redemption Record](/de/docs/Web/API/Private_State_Token_API/Using#redeeming_tokens) von einem bestimmten Herausgeber hat.

## Syntax

```js-nolint
hasRedemptionRecord(issuer)
```

### Parameter

- `issuer`
  - : Ein String, der die URL eines Herausgeberservers darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einem booleschen Wert auflöst, der angibt, ob der Browser ein Redemption Record gespeichert hat, das von dem angegebenen Herausgeberserver stammt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) nicht in einem sicheren Kontext geladen ist.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `issuer` keine gültige URL ist.

## Beispiele

```js
const hasRR = await Document.hasRedemptionRecord(`issuer.example`);
if (hasRR) {
  await fetch("some-resource.example", {
    method: "POST",
    privateToken: {
      version: 1,
      operation: "send-redemption-record",
      issuers: ["https://issuer.example"],
    },
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Private State Token API](/de/docs/Web/API/Private_State_Token_API)
