---
title: "FontFaceSet: load()-Methode"
short-title: load()
slug: Web/API/FontFaceSet/load
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

Die `load()`-Methode des [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) erzwingt das Laden aller in den Parametern angegebenen Schriftarten.

## Syntax

```js-nolint
load(font)
load(font, text)
```

### Parameter

- `font`
  - : Eine Schriftart-Spezifikation unter Verwendung der CSS-Wertsyntax, z.B. "italic bold 16px Roboto"
- `text`
  - : Beschränkt die Schriftarten auf solche, deren Unicode-Bereich mindestens ein Zeichen im Text enthält. Dies [überprüft nicht die Abdeckung einzelner Glyphen](https://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html).

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem {{jsxref("Array")}} von geladenen [`FontFace`](/de/docs/Web/API/FontFace)-Objekten erfüllt wird. Das Versprechen wird erfüllt, wenn alle Schriftarten geladen sind; es wird abgelehnt, wenn eine der Schriftarten nicht geladen werden konnte.

## Beispiele

Das folgende Beispiel gibt ein Promise zurück, das je nach Erfolg des Ladens von "MyFont" erfüllt oder abgelehnt wird. Der Code in `then()` kann von der Verfügbarkeit dieser Schriftart ausgehen.

```js
document.fonts.load("12px MyFont", "ß").then(/* ... */);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
