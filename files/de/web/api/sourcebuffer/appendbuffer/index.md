---
title: "SourceBuffer: appendBuffer()-Methode"
short-title: appendBuffer()
slug: Web/API/SourceBuffer/appendBuffer
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`appendBuffer()`**-Methode der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Schnittstelle fügt Mediensegmentdaten aus einem {{jsxref("ArrayBuffer")}}, einem {{jsxref("TypedArray")}} oder einem {{jsxref("DataView")}}-Objekt zum `SourceBuffer` hinzu.

## Syntax

```js-nolint
appendBuffer(source)
```

### Parameter

- `source`
  - : Entweder ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt, das die Mediensegmentdaten enthält, die Sie dem `SourceBuffer` hinzufügen möchten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Keine.

## Beispiele

TBD.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
