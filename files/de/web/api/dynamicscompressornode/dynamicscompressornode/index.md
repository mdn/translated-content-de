---
title: "DynamicsCompressorNode: DynamicsCompressorNode() Konstruktor"
short-title: DynamicsCompressorNode()
slug: Web/API/DynamicsCompressorNode/DynamicsCompressorNode
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("Web Audio API")}}

Der **`DynamicsCompressorNode()`**
Konstruktor erstellt ein neues {{domxref("DynamicsCompressorNode")}} Objekt, das einen Kompressionseffekt bietet, der die Lautstärke der lautesten Teile des Signals reduziert, um ein Clipping und Verzerrungen zu verhindern. Dies kann auftreten, wenn mehrere Klänge gleichzeitig abgespielt und zusammen gemultiplext werden.

## Syntax

```js-nolint
new DynamicsCompressorNode(context, options)
```

### Parameter

- `context`
  - : Ein Verweis auf ein {{domxref("AudioContext")}}.
- `options` {{optional_inline}}

  - : Die Optionen sind wie folgt:

    - `attack`
      - : Die Zeitmenge (in Sekunden), um den Gain um 10 dB zu reduzieren.
        Der Standardwert ist 0.003. Dieser Parameter ist k-rate. Der nominale Bereich ist \[0, 1].
    - `knee`
      - : Ein Dezibelwert, der den Bereich über der Schwelle darstellt, wo die Kurve
        sanft in den "Ratio"-Abschnitt übergeht. Der Standardwert ist 30\. Dieser Parameter ist k-rate. Der nominale Bereich ist \[0, 40].
    - `ratio`
      - : Die Menge an dB-Änderung im Eingang für eine 1 dB-Änderung im Ausgang. Der Standardwert ist 12. Dieser Parameter ist k-rate. Der nominale Bereich ist \[1, 20].
    - `release`
      - : Die Zeitmenge (in Sekunden), um den Gain um 10 dB zu erhöhen. Der
        Standardwert ist 0.250. Dieser Parameter ist k-rate. Der nominale Bereich ist \[0, 1].
    - `threshold`
      - : Der Dezibelwert, über dem die Kompression wirksam wird. Der Standardwert ist -24. Dieser Parameter ist k-rate. Der nominale Bereich ist \[-100, 0].

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
