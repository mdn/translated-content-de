---
title: "Dokument: hasPrivateToken()-Methode"
short-title: hasPrivateToken()
slug: Web/API/Document/hasPrivateToken
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

{{APIRef("Storage Access API")}}

Die **`hasPrivateToken()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt ein Promise zurück, das mit einem booleschen Wert erfüllt wird. Dieser gibt an, ob der Browser ein [private state token](/de/docs/Web/API/Private_State_Token_API) von einem bestimmten Herausgeber-Server gespeichert hat.

## Syntax

```js-nolint
hasPrivateToken(issuer)
```

### Parameter

- `issuer`
  - : Ein String, der die URL eines Herausgeber-Servers darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem booleschen Wert aufgelöst wird, der angibt, ob der Browser ein private state token vom angegebenen Herausgeber-Server gespeichert hat.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das aktuelle [`Document`](/de/docs/Web/API/Document) nicht in einem {{Glossary("Secure_Context", "sicheren Kontext")}} geladen ist.
    - Die maximale Anzahl von Herausgebern pro oberster {{Glossary("Origin", "Origin")}} (zwei) überschritten wurde.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
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
