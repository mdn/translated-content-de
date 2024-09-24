---
title: "DOMTokenList: supports()-Methode"
short-title: supports()
slug: Web/API/DOMTokenList/supports
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{APIRef("DOM")}}

Die **`supports()`**-Methode der {{domxref("DOMTokenList")}}-Schnittstelle
gibt `true` zurück, wenn ein gegebener `token` in den unterstützten Tokens des zugehörigen Attributs enthalten ist. Diese Methode ist zur Unterstützung der Feature-Erkennung vorgesehen.

## Syntax

```js-nolint
supports(token)
```

### Parameter

- `token`
  - : Ein String, der den zu überprüfenden Token enthält.

### Rückgabewert

Ein boolescher Wert, der anzeigt, ob der Token gefunden wurde.

## Beispiel

```js
const iframe = document.getElementById("display");

if (iframe.sandbox.supports("an-upcoming-feature")) {
  // Unterstützungscode für ein zukünftiges Feature
} else {
  // Fallback-Code
}

if (iframe.sandbox.supports("allow-scripts")) {
  // Anweisung an die Frame, JavaScript auszuführen
  //
  // (HINWEIS: Diese Funktion wird gut unterstützt; dies ist nur ein Beispiel!)
  //
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
