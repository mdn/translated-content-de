---
title: "FontFace: family-Eigenschaft"
short-title: family
slug: Web/API/FontFace/family
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSS Font Loading API")}}

Die **`FontFace.family`**-Eigenschaft ermöglicht es dem Autor, die Schriftfamilie eines [`FontFace`](/de/docs/Web/API/FontFace)-Objekts abzurufen oder festzulegen.

Der Wert wird zur Namenszuordnung gegen eine bestimmte Schriftart verwendet, wenn Elemente mit der [`font-family`](/de/docs/Web/CSS/font-family)-Eigenschaft gestylt werden.
Jeder Name kann verwendet werden, und dieser überschreibt jeden Namen, der in den zugrundeliegenden Schriftdaten angegeben ist.

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
