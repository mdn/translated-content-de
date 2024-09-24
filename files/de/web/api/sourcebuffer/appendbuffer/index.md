---
title: "SourceBuffer: Methode appendBuffer()"
short-title: appendBuffer()
slug: Web/API/SourceBuffer/appendBuffer
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Media Source Extensions")}}

Die **`appendBuffer()`**-Methode des {{domxref("SourceBuffer")}}-Interfaces fügt Mediendatensegmente aus einem {{jsxref("ArrayBuffer")}}, einem {{jsxref("TypedArray")}} oder einem {{jsxref("DataView")}}-Objekt dem `SourceBuffer` hinzu.

## Syntax

```js-nolint
appendBuffer(source)
```

### Parameter

- `source`
  - : Entweder ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt, das die Mediendatensegmente enthält, die Sie dem `SourceBuffer` hinzufügen möchten.

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

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
