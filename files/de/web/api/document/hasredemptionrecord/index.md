---
title: "Dokument: hasRedemptionRecord()-Methode"
short-title: hasRedemptionRecord()
slug: Web/API/Document/hasRedemptionRecord
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{APIRef("Storage Access API")}}{{SeeCompatTable}}

Die Methode **`hasRedemptionRecord()`** der Schnittstelle [`Document`](/de/docs/Web/API/Document) gibt ein Promise zurück, das mit einem booleschen Wert erfüllt wird. Dieser gibt an, ob der Browser einen [Einlösenachweis](/de/docs/Web/API/Private_State_Token_API/Using#redeeming_tokens) eines bestimmten Ausstellers gespeichert hat.

## Syntax

```js-nolint
hasRedemptionRecord(issuer)
```

### Parameter

- `issuer`
  - : Ein String, der die URL eines Ausstellerservers angibt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem booleschen Wert aufgelöst wird. Dieser gibt an, ob der Browser einen Einlösenachweis gespeichert hat, der vom angegebenen Ausstellerserver stammt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) nicht in einem sicheren Kontext geladen wurde.
- {{jsxref("TypeError")}}
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
