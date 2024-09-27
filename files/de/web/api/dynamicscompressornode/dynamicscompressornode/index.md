---
title: "DynamicsCompressorNode: DynamicsCompressorNode()-Konstruktor"
short-title: DynamicsCompressorNode()
slug: Web/API/DynamicsCompressorNode/DynamicsCompressorNode
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("Web Audio API")}}

Der **`DynamicsCompressorNode()`**-Konstruktor erstellt ein neues [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)-Objekt, das einen Kompressionseffekt bietet. Dieser verringert die Lautstärke der lautesten Teile des Signals, um Clipping und Verzerrungen zu verhindern. Diese können auftreten, wenn mehrere Sounds gleichzeitig abgespielt und zusammengeführt werden.

## Syntax

```js-nolint
new DynamicsCompressorNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz auf einen [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}

  - : Die Optionen sind wie folgt:

    - `attack`
      - : Die Zeitdauer (in Sekunden), um den Pegel um 10dB zu reduzieren.
        Der Standardwert ist 0.003. Dieser Parameter ist k-rate. Sein nomineller Bereich ist \[0, 1].
    - `knee`
      - : Ein Dezibelwert, der den Bereich über der Schwelle darstellt, in dem die Kurve sanft in den "Ratio"-Abschnitt übergeht. Der Standardwert ist 30. Dieser Parameter ist k-rate. Sein nomineller Bereich ist \[0, 40].
    - `ratio`
      - : Die Menge der dB-Änderung am Eingang für eine 1 dB-Änderung am Ausgang. Der Standardwert ist 12. Dieser Parameter ist k-rate. Sein nomineller Bereich ist \[1, 20].
    - `release`
      - : Die Zeitdauer (in Sekunden), um den Pegel um 10dB zu erhöhen. Der Standardwert ist 0.250. Dieser Parameter ist k-rate. Sein nomineller Bereich ist \[0, 1].
    - `threshold`
      - : Der Dezibelwert, über dem die Kompression beginnen wird. Der Standardwert ist -24. Dieser Parameter ist k-rate. Sein nomineller Bereich ist \[-100, 0].

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
