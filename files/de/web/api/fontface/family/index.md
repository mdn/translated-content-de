---
title: "FontFace: family-Eigenschaft"
short-title: family
slug: Web/API/FontFace/family
l10n:
  sourceCommit: 3b7232826ab98368d06ebf8b021886e4a544de93
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **`FontFace.family`**-Eigenschaft ermöglicht es dem Autor, die Schriftfamilie eines [`FontFace`](/de/docs/Web/API/FontFace)-Objekts abzurufen oder festzulegen.

Der Wert wird für das Namensabgleich gegen einen bestimmten Schriftschnitt verwendet, wenn Elemente mit der [`font-family`](/de/docs/Web/CSS/font-family)-Eigenschaft formatiert werden. Jeder beliebige Name kann verwendet werden, und dieser überschreibt jeden in den zugrunde liegenden Schriftdaten angegebenen Namen.

Diese Eigenschaft entspricht dem {{cssxref("@font-face/font-family", "font-family")}} Deskriptor von {{cssxref("@font-face")}}.

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
