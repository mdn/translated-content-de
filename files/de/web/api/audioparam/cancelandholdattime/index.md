---
title: "AudioParam: Methode cancelAndHoldAtTime()"
short-title: cancelAndHoldAtTime()
slug: Web/API/AudioParam/cancelAndHoldAtTime
l10n:
  sourceCommit: 7211da0d97a892bf781852e93ee96c2bd732c115
---

{{APIRef("Web Audio API")}}

Die **`cancelAndHoldAtTime()`**-Methode der
{{domxref("AudioParam")}}-Schnittstelle storniert alle geplanten zukünftigen Änderungen des
`AudioParam`, hält jedoch dessen Wert zu einem bestimmten Zeitpunkt, bis weitere Änderungen
mithilfe anderer Methoden vorgenommen werden.

## Syntax

```js-nolint
cancelAndHoldAtTime(cancelTime)
```

### Parameter

- `cancelTime`
  - : Ein Double, das die Zeit (in Sekunden) angibt, nachdem das [`AudioContext`](/de/docs/Web/API/AudioContext) zum ersten Mal erstellt wurde, nach der alle geplanten Änderungen storniert werden.

### Rückgabewert

Ein Verweis auf das {{domxref("AudioParam")}}, auf das es angewendet wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
