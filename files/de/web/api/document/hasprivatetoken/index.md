---
title: "Dokument: hasPrivateToken()-Methode"
short-title: hasPrivateToken()
slug: Web/API/Document/hasPrivateToken
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{APIRef("Storage Access API")}}{{SeeCompatTable}}

Die **`hasPrivateToken()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interface gibt ein Promise zurück, das mit einem boolean erfüllt wird, der anzeigt, ob der Browser ein [Private-State-Token](/de/docs/Web/API/Private_State_Token_API) von einem bestimmten Ausstellerserver gespeichert hat.

## Syntax

```js-nolint
hasPrivateToken(issuer)
```

### Parameter

- `issuer`
  - : Ein String, der die URL eines Ausstellerservers darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem booleanen Wert aufgelöst wird, der anzeigt, ob der Browser ein Private-State-Token von dem angegebenen Ausstellerserver gespeichert hat.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das aktuelle [`Document`](/de/docs/Web/API/Document) nicht in einem {{Glossary("Secure_Context", "sicheren Kontext")}} geladen ist.
    - Die maximale Anzahl von Ausstellern pro oberster {{Glossary("Origin", "Origin")}} (zwei) überschritten wurde.
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
