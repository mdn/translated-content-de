---
title: "DynamicsCompressorNode: DynamicsCompressorNode() Konstruktor"
short-title: DynamicsCompressorNode()
slug: Web/API/DynamicsCompressorNode/DynamicsCompressorNode
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("Web Audio API")}}

Der **`DynamicsCompressorNode()`** Konstruktor erstellt ein neues [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode) Objekt, das einen Kompressionseffekt bietet, der die Lautstärke der lautesten Teile des Signals verringert, um Übersteuerung und Verzerrung zu vermeiden. Dies kann auftreten, wenn mehrere Klänge gleichzeitig abgespielt und zusammengeführt werden.

## Syntax

```js-nolint
new DynamicsCompressorNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz auf ein [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `attack`
      - : Die Zeitdauer (in Sekunden), um den Pegel um 10 dB zu verringern. Der Standardwert ist 0.003. Dieser Parameter ist k-rate. Sein nominaler Bereich ist \[0, 1].
    - `knee`
      - : Ein Dezibel-Wert, der den Bereich über dem Schwellenwert darstellt, in dem die Kurve sanft in den "Verhältnis"-Bereich übergeht. Der Standardwert ist 30. Dieser Parameter ist k-rate. Sein nominaler Bereich ist \[0, 40].
    - `ratio`
      - : Die Menge an dB-Änderung im Eingang für eine 1 dB Änderung im Ausgang. Der Standardwert ist 12. Dieser Parameter ist k-rate. Sein nominaler Bereich ist \[1, 20].
    - `release`
      - : Die Zeitdauer (in Sekunden), um den Pegel um 10 dB zu erhöhen. Der Standardwert ist 0.250. Dieser Parameter ist k-rate. Sein nominaler Bereich ist \[0, 1].
    - `threshold`
      - : Der Dezibel-Wert, über dem die Kompression wirksam wird. Der Standardwert ist -24. Dieser Parameter ist k-rate. Sein nominaler Bereich ist \[-100, 0].

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
