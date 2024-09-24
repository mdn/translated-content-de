---
title: "SourceBuffer: remove()-Methode"
short-title: remove()
slug: Web/API/SourceBuffer/remove
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Media Source Extensions")}}

Die **`remove()`**-Methode des {{domxref("SourceBuffer")}}-Interfaces entfernt Mediensegmente innerhalb eines spezifischen Zeitbereichs aus dem `SourceBuffer`. Diese Methode kann nur aufgerufen werden, wenn {{domxref("SourceBuffer.updating")}} gleich `false` ist. Falls `SourceBuffer.updating` nicht `false` ist, rufen Sie {{domxref("SourceBuffer.abort()")}} auf.

## Syntax

```js-nolint
remove(start, end)
```

### Parameter

- `start`
  - : Ein Double, das den Anfang des Zeitbereichs in Sekunden darstellt.
- `end`
  - : Ein Double, das das Ende des Zeitbereichs in Sekunden darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` {{domxref("DOMException")}}

  - : Wird ausgelöst, wenn entweder die {{domxref("MediaSource.duration")}}-Eigenschaft `NaN` ist, der `start`-Parameter negativ oder größer als {{domxref("MediaSource.duration")}} ist, oder der `end`-Parameter kleiner oder gleich `start` oder gleich `NaN` ist.

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die {{domxref("SourceBuffer.updating")}}-Eigenschaft gleich `true` ist oder dieser `SourceBuffer` aus der {{domxref("MediaSource")}} entfernt wurde.

## Beispiele

TBD.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
