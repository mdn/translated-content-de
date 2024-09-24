---
title: "FontFaceSet: load()-Methode"
short-title: load()
slug: Web/API/FontFaceSet/load
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

Die `load()`-Methode des {{domxref("FontFaceSet")}} zwingt alle in den Parametern angegebenen Schriftarten zum Laden.

## Syntax

```js-nolint
load(font)
load(font, text)
```

### Parameter

- `font`
  - : eine Schriftangabe unter Verwendung der CSS-Wertsyntax, z. B. "italic bold 16px Roboto".
- `text`
  - : beschränkt die Schriftarten auf diejenigen, deren Unicode-Bereich mindestens eines der Zeichen im Text enthält. Dies [überprüft nicht die individuelle Glyphenabdeckung](https://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("Array")}} von geladenen {{domxref("FontFace")}}-Objekten erfüllt wird. Das
Promise wird erfüllt, wenn alle Schriftarten geladen sind; es wird abgelehnt, wenn eine der Schriftarten
nicht geladen werden konnte.

## Beispiele

Das folgende Beispiel gibt ein Promise zurück, das je nach Erfolg des Ladens von "MyFont" erfüllt oder abgelehnt wird. Der Code in `then()` kann die Verfügbarkeit dieser Schriftart voraussetzen.

```js
document.fonts.load("12px MyFont", "ß").then(/* ... */);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
