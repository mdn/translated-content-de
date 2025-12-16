---
title: "Dokument: hasRedemptionRecord()-Methode"
short-title: hasRedemptionRecord()
slug: Web/API/Document/hasRedemptionRecord
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

{{APIRef("Storage Access API")}}

Die **`hasRedemptionRecord()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt ein Promise zurück, das mit einem Boolean erfüllt wird, der angibt, ob der Browser über einen [Redemption-Record](/de/docs/Web/API/Private_State_Token_API/Using#redeeming_tokens) verfügt, der von einem bestimmten Aussteller stammt.

## Syntax

```js-nolint
hasRedemptionRecord(issuer)
```

### Parameter

- `issuer`
  - : Ein String, der die URL eines Ausstellerservers darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Boolean-Wert aufgelöst wird, der anzeigt, ob der Browser einen Redemption-Record gespeichert hat, der vom angegebenen Ausstellerserver stammt.

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
