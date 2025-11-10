---
title: "FontFace: family-Eigenschaft"
short-title: family
slug: Web/API/FontFace/family
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **`FontFace.family`**-Eigenschaft ermöglicht es dem Autor, die Schriftfamilie eines [`FontFace`](/de/docs/Web/API/FontFace)-Objekts abzurufen oder festzulegen.

Der Wert wird für die Namensabstimmung gegen eine bestimmte Schriftschnitt verwendet, wenn Elemente mit der [`font-family`](/de/docs/Web/CSS/Reference/Properties/font-family)-Eigenschaft gestylt werden. Jeder Name kann verwendet werden, und dieser überschreibt jeden im zugrunde liegenden Schriftmaterial angegebenen Namen.

Diese Eigenschaft entspricht dem {{cssxref("@font-face/font-family", "font-family")}} Deskriptor von {{cssxref("@font-face")}}.

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
