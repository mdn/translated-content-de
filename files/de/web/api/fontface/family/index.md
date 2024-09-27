---
title: "FontFace: family-Eigenschaft"
short-title: family
slug: Web/API/FontFace/family
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSS Font Loading API")}}

Die **`FontFace.family`**-Eigenschaft ermöglicht es dem Autor, die Schriftfamilie eines [`FontFace`](/de/docs/Web/API/FontFace)-Objekts abzurufen oder festzulegen.

Der Wert wird für die Namensübereinstimmung mit einem bestimmten Schriftschnitt verwendet, wenn Elemente mit der [`font-family`](/de/docs/Web/CSS/font-family)-Eigenschaft gestylt werden. Jeder beliebige Name kann verwendet werden, und dieser überschreibt jeglichen in den zugrunde liegenden Schriftartdaten angegebenen Namen.

Diese Eigenschaft entspricht dem {{cssxref("@font-face/font-family", "font-family")}}-Deskriptor von {{cssxref("@font-face")}}.

## Wert

Ein String.

## Beispiele

```js
let fontFace = new FontFace(
  "Roboto",
  "url(https://fonts.example.com/roboto.woff2)",
);
console.log(fontFace.family); // 'Roboto'

fontFace.family = "newRoboto";
console.log(fontFace.family); // 'newRoboto'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
