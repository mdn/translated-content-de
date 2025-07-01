---
title: "MediaList: toString()-Methode"
short-title: toString()
slug: Web/API/MediaList/toString
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("CSSOM")}}

Die **`toString()`**-Methode des [`MediaList`](/de/docs/Web/API/MediaList)-Interfaces gibt einen String zurück, der die Werte des Objekts repräsentiert. Der Wert ist eine durch Kommas getrennte Liste von Medienwerten im selben Format wie die [`MediaList.mediaText`](/de/docs/Web/API/MediaList/mediaText)-Eigenschaft.

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
mediaList.appendMedium("SCREEN AND (ORIENTATION: LANDSCAPE))");

// erroneously, add the same media query again
mediaList.appendMedium("SCREEN AND (ORIENTATION: LANDSCAPE))");

console.log(mediaList.toString());
// "screen and (140px <= width <= 380px), screen and (orientation: landscape)"
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
