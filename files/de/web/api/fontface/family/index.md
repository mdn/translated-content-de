---
title: "FontFace: Eigenschaft family"
short-title: family
slug: Web/API/FontFace/family
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **`FontFace.family`**-Eigenschaft ermöglicht es dem Autor, die Schriftfamilie eines [`FontFace`](/de/docs/Web/API/FontFace)-Objekts zu erhalten oder festzulegen.

Der Wert wird für das Namensabgleichverfahren zu einer bestimmten Schriftart verwendet, wenn Elemente mit der {{cssxref("font-family")}} Eigenschaft gestylt werden. Jeder Name kann verwendet werden, und dieser überschreibt jeden im zugrunde liegenden Fontdaten angegebenen Namen.

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
