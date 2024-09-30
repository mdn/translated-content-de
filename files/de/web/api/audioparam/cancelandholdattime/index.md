---
title: "AudioParam: Methode cancelAndHoldAtTime()"
short-title: cancelAndHoldAtTime()
slug: Web/API/AudioParam/cancelAndHoldAtTime
l10n:
  sourceCommit: 7211da0d97a892bf781852e93ee96c2bd732c115
---

{{APIRef("Web Audio API")}}

Die **`cancelAndHoldAtTime()`**-Methode des
[`AudioParam`](/de/docs/Web/API/AudioParam)-Interfaces annulliert alle geplanten zukünftigen Änderungen am
`AudioParam`, hält jedoch seinen Wert zu einem gegebenen Zeitpunkt, bis weitere Änderungen mit anderen Methoden vorgenommen werden.

## Syntax

```js-nolint
cancelAndHoldAtTime(cancelTime)
```

### Parameter

- `cancelTime`
  - : Ein Double, das die Zeit (in Sekunden) darstellt, nachdem der [`AudioContext`](/de/docs/Web/API/AudioContext) erstmals erstellt wurde und nach dem alle geplanten Änderungen annulliert werden.

### Rückgabewert

Ein Verweis auf das [`AudioParam`](/de/docs/Web/API/AudioParam), auf dem es aufgerufen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
