---
title: "Dokument: hasPrivateToken()-Methode"
short-title: hasPrivateToken()
slug: Web/API/Document/hasPrivateToken
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{APIRef("Storage Access API")}}{{SeeCompatTable}}

Die Methode **`hasPrivateToken()`** der Schnittstelle [`Document`](/de/docs/Web/API/Document) gibt ein Promise zurück, das mit einem booleschen Wert erfüllt wird. Dieser gibt an, ob der Browser ein [Private State Token](/de/docs/Web/API/Private_State_Token_API) gespeichert hat, das von einem bestimmten Ausstellerserver stammt.

## Syntax

```js-nolint
hasPrivateToken(issuer)
```

### Parameter

- `issuer`
  - : Ein String, der die URL eines Ausstellerservers angibt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem booleschen Wert aufgelöst wird. Dieser gibt an, ob der Browser ein Private State Token gespeichert hat, das vom angegebenen Ausstellerserver stammt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das aktuelle [`Document`](/de/docs/Web/API/Document) nicht in einem {{Glossary("Secure_Context", "sicheren Kontext")}} geladen wurde.
    - Die maximale Anzahl von Ausstellern pro {{Glossary("Origin", "Origin")}} auf oberster Ebene (zwei) überschritten wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `issuer` keine gültige URL ist.

## Beispiele

```js
const hasToken = await Document.hasPrivateToken(`issuer.example`);
if (!hasToken) {
  await fetch(
    "https://issuer.example/.well-known/private-state-token/issuance",
    {
      method: "POST",
      privateToken: {
        version: 1,
        operation: "token-request",
      },
    },
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Private State Token API](/de/docs/Web/API/Private_State_Token_API)
