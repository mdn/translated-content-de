---
title: "AudioParam: Methode cancelAndHoldAtTime()"
short-title: cancelAndHoldAtTime()
slug: Web/API/AudioParam/cancelAndHoldAtTime
l10n:
  sourceCommit: 7211da0d97a892bf781852e93ee96c2bd732c115
---

{{APIRef("Web Audio API")}}

Die **`cancelAndHoldAtTime()`**-Methode der
[`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstelle storniert alle geplanten zukünftigen Änderungen des
`AudioParam`, hält dessen Wert jedoch zu einem bestimmten Zeitpunkt, bis weitere Änderungen
mit anderen Methoden vorgenommen werden.

## Syntax

```js-nolint
cancelAndHoldAtTime(cancelTime)
```

### Parameter

- `cancelTime`
  - : Ein Double, das die Zeit (in Sekunden) darstellt, nachdem der [`AudioContext`](/de/docs/Web/API/AudioContext) zuerst erstellt wurde, nach der alle geplanten Änderungen storniert werden.

### Rückgabewert

Ein Verweis auf das [`AudioParam`](/de/docs/Web/API/AudioParam), auf das die Methode aufgerufen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
