---
title: "DOMTokenList: supports()-Methode"
short-title: supports()
slug: Web/API/DOMTokenList/supports
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{APIRef("DOM")}}

Die **`supports()`**-Methode der Schnittstelle [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) gibt `true` zurück, wenn ein gegebener `token` in den unterstützten Tokens des zugehörigen Attributs enthalten ist. Diese Methode soll die Funktionsüberprüfung unterstützen.

## Syntax

```js-nolint
supports(token)
```

### Parameter

- `token`
  - : Ein String, der den abzufragenden Token enthält.

### Rückgabewert

Ein boolescher Wert, der angibt, ob der Token gefunden wurde.

## Beispiel

```js
const iframe = document.getElementById("display");

if (iframe.sandbox.supports("an-upcoming-feature")) {
  // support code for mystery future feature
} else {
  // fallback code
}

if (iframe.sandbox.supports("allow-scripts")) {
  // instruct frame to run JavaScript
  //
  // (NOTE: This feature is well-supported; this is just an example!)
  //
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
