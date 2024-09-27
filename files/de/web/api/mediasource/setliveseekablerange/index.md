---
title: "MediaSource: setLiveSeekableRange()-Methode"
short-title: setLiveSeekableRange()
slug: Web/API/MediaSource/setLiveSeekableRange
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`setLiveSeekableRange()`**-Methode der [`MediaSource`](/de/docs/Web/API/MediaSource)-Schnittstelle legt den Bereich fest, in dem der Benutzer im Medienelement suchen kann.

## Syntax

```js-nolint
setLiveSeekableRange(start, end)
```

### Parameter

- `start`
  - : Der Beginn des festzulegenden Suchbereichs in Sekunden, gemessen vom Anfang der Quelle. Wenn die Dauer der Medienquelle positiv unendlich ist, dann wird das [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt, das von der [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable)-Eigenschaft zurückgegeben wird, einen Startzeitstempel haben, der nicht größer ist als dieser Wert.
- `end`
  - : Das Ende des festzulegenden Suchbereichs in Sekunden, gemessen vom Anfang der Quelle. Wenn die Dauer der Medienquelle positiv unendlich ist, dann wird das [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt, das von der [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable)-Eigenschaft zurückgegeben wird, einen Endzeitstempel haben, der nicht kleiner ist als dieser Wert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// TBD
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
