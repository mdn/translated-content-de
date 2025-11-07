---
title: "HTMLImageElement: srcset-Eigenschaft"
short-title: srcset
slug: Web/API/HTMLImageElement/srcset
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die **`srcset`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces identifiziert einen oder mehrere _Bildkandidaten-Strings_, die durch Kommas (`,`) getrennt sind und jeweils Bildressourcen angeben, die unter bestimmten Umständen verwendet werden sollen. Jeder Bildkandidaten-String enthält eine Bild-URL und einen optionalen Breiten- oder Pixeldichtedeskriptor, der angibt, unter welchen Bedingungen dieser Kandidat anstelle des durch die [`src`](/de/docs/Web/API/HTMLImageElement/src)-Eigenschaft angegebenen Bildes verwendet werden sollte. Sie spiegelt das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Inhaltsattribut des `<img>`-Elements wider.

Die `srcset`-Eigenschaft, zusammen mit der [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Eigenschaft, ist ein wesentlicher Bestandteil beim Entwurf responsiver Websites. Sie können zusammen verwendet werden, um Seiten zu erstellen, die für die jeweilige Darstellungssituation geeignete Bilder verwenden.

## Wert

Ein String. Weitere Informationen zur Syntax des `srcset`-Attributs finden Sie im HTML-Referenzabschnitt [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#srcset).

## Beispiele

### Das srcset-Attribut setzen

```js
const img = new Image();
img.srcset =
  "/en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-400px.png 2x, /en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-200px.png";
img.alt = "An example picture";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types)
- [`HTMLImageElement.currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc)
- [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)
- [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src)
