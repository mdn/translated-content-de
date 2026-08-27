---
title: "AudioParam: cancelAndHoldAtTime()-Methode"
short-title: cancelAndHoldAtTime()
slug: Web/API/AudioParam/cancelAndHoldAtTime
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Web Audio API")}}

Die **`cancelAndHoldAtTime()`**-Methode des [`AudioParam`](/de/docs/Web/API/AudioParam)-Interfaces storniert alle geplanten zukünftigen Änderungen am `AudioParam`, hält jedoch seinen Wert zu einer bestimmten Zeit, bis weitere Änderungen mit anderen Methoden vorgenommen werden.

## Syntax

```js-nolint
cancelAndHoldAtTime(cancelTime)
```

### Parameter

- `cancelTime`
  - : Ein Doppelwert, der die Zeit (in Sekunden) darstellt, nachdem der [`AudioContext`](/de/docs/Web/API/AudioContext) zuerst erstellt wurde, nach der alle geplanten Änderungen storniert werden.

### Rückgabewert

Eine Referenz auf das [`AudioParam`](/de/docs/Web/API/AudioParam), auf dem sie aufgerufen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
