---
title: "MediaList: toString() Methode"
short-title: toString()
slug: Web/API/MediaList/toString
l10n:
  sourceCommit: 494edeb208c312a26b7f5efb0902799d89a2bb33
---

{{APIRef("CSSOM")}}

Die **`toString()`** {{Glossary("stringifier", "Stringifier")}} Methode der [`MediaList`](/de/docs/Web/API/MediaList) Schnittstelle gibt einen String zurück, der die Werte des Objekts darstellt. Der Wert ist eine durch Kommas getrennte Liste von Medienwerten im gleichen Format wie die [`MediaList.mediaText`](/de/docs/Web/API/MediaList/mediaText) Eigenschaft.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String.

## Beispiele

```js
const firstStyleSheet = document.styleSheets[0]; // the document's first stylesheet
const mediaList = firstStyleSheet.media; // the mediaList of the stylesheet

// set the `media` text to a media query value
mediaList.mediaText = "SCREEN AND (140PX <= WIDTH <= 380PX)";

// add a second media value
mediaList.appendMedium(
  "SCREEN AND (MAX-HEIGHT: 400PX) AND (ORIENTATION: LANDSCAPE))",
);

// erroneously, add the same media query again
mediaList.appendMedium(
  "SCREEN AND (MAX-HEIGHT: 400PX) AND (ORIENTATION: LANDSCAPE))",
);

console.log(mediaList.toString());
// "screen and (140px <= width <= 380px), screen and (max-height: 400px) and (orientation: landscape)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaList.mediaText`](/de/docs/Web/API/MediaList/mediaText)
- [`MediaList.appendMedium()`](/de/docs/Web/API/MediaList/appendMedium)
- [Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
