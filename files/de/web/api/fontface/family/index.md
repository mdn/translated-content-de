---
title: "FontFace: family-Eigenschaft"
short-title: family
slug: Web/API/FontFace/family
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **`FontFace.family`**-Eigenschaft ermöglicht es dem Autor, die Schriftfamilie eines [`FontFace`](/de/docs/Web/API/FontFace)-Objekts abzurufen oder festzulegen.

Der Wert wird zum Namensabgleich mit einem bestimmten Schriftschnitt verwendet, wenn Elemente mit der [`font-family`](/de/docs/Web/CSS/font-family)-Eigenschaft gestylt werden.
Jeder beliebige Name kann verwendet werden, und dieser überschreibt jeden im zugrunde liegenden Schriftartendaten angegebenen Namen.

Diese Eigenschaft entspricht dem {{cssxref("@font-face/font-family", "font-family")}}-Deskriptor von {{cssxref("@font-face")}}.

## Wert

Ein String.

## Beispiele

```js
let fontFace = new FontFace(
  "Roboto",
  'url("https://fonts.example.com/roboto.woff2")',
);
console.log(fontFace.family); // 'Roboto'

fontFace.family = "newRoboto";
console.log(fontFace.family); // 'newRoboto'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
