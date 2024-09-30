---
title: "MediaSource: Methode setLiveSeekableRange()"
short-title: setLiveSeekableRange()
slug: Web/API/MediaSource/setLiveSeekableRange
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`setLiveSeekableRange()`**-Methode des [`MediaSource`](/de/docs/Web/API/MediaSource)-Interfaces legt den Bereich fest, der vom Benutzer im Medien-Element angesprungen werden kann.

## Syntax

```js-nolint
setLiveSeekableRange(start, end)
```

### Parameter

- `start`
  - : Der Beginn des suchbaren Bereichs, der in Sekunden ab dem Beginn der Quelle festgelegt wird. Wenn die Dauer der Medienquelle positiv unendlich ist, wird das von der [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable)-Eigenschaft zurückgegebene [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt einen Startzeitstempel haben, der nicht größer als dieser Wert ist.
- `end`
  - : Das Ende des suchbaren Bereichs, der in Sekunden ab dem Beginn der Quelle festgelegt wird. Wenn die Dauer der Medienquelle positiv unendlich ist, wird das von der [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable)-Eigenschaft zurückgegebene [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt einen Endzeitstempel haben, der nicht kleiner als dieser Wert ist.

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
