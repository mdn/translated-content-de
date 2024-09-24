---
title: "MediaSource: Methode setLiveSeekableRange()"
short-title: setLiveSeekableRange()
slug: Web/API/MediaSource/setLiveSeekableRange
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Source Extensions")}}

Die **`setLiveSeekableRange()`** Methode des
{{domxref("MediaSource")}} Schnittstelle legt den Bereich fest, zu dem der Benutzer im
Medienelement springen kann.

## Syntax

```js-nolint
setLiveSeekableRange(start, end)
```

### Parameter

- `start`
  - : Der Beginn des festzulegenden suchbaren Bereichs in Sekunden, gemessen vom Anfang der
    Quelle. Wenn die Dauer der Medienquelle positive Unendlichkeit beträgt, wird das
    {{domxref("TimeRanges")}} Objekt, das durch die
    {{domxref("HTMLMediaElement.seekable")}} Eigenschaft zurückgegeben wird, einen Startzeitstempel nicht
    größer als dieser Wert haben.
- `end`
  - : Das Ende des festzulegenden suchbaren Bereichs in Sekunden, gemessen vom Anfang der
    Quelle. Wenn die Dauer der Medienquelle positive Unendlichkeit beträgt, wird das
    {{domxref("TimeRanges")}} Objekt, das durch die
    {{domxref("HTMLMediaElement.seekable")}} Eigenschaft zurückgegeben wird, einen Endzeitstempel nicht
    kleiner als dieser Wert haben.

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
