---
title: "DynamicsCompressorNode: DynamicsCompressorNode() Konstruktor"
short-title: DynamicsCompressorNode()
slug: Web/API/DynamicsCompressorNode/DynamicsCompressorNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Der **`DynamicsCompressorNode()`** Konstruktor erstellt ein neues [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)-Objekt, das einen Kompressionseffekt bietet. Dieser reduziert die Lautstärke der lautesten Teile des Signals, um Clipping und Verzerrung zu vermeiden. Diese Probleme können auftreten, wenn mehrere Sounds gleichzeitig abgespielt und gemeinsam verarbeitet werden.

## Syntax

```js-nolint
new DynamicsCompressorNode(context, options)
```

### Parameter

- `context`
  - : Ein Verweis auf einen [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}
  - : Die Optionen sind wie folgt:
    - `attack`
      - : Die Zeitdauer (in Sekunden), um die Verstärkung um 10dB zu verringern. Der Standardwert ist 0.003. Dieses Parameter ist k-rate. Der nominale Bereich ist \[0, 1].
    - `knee`
      - : Ein Dezibelwert, der den Bereich über der Schwelle darstellt, in dem die Kurve glatt in den "Verhältnis"-Teil übergeht. Der Standardwert ist 30. Dieses Parameter ist k-rate. Der nominale Bereich ist \[0, 40].
    - `ratio`
      - : Die Menge an dB-Änderung im Eingang für eine 1 dB-Änderung im Ausgang. Der Standardwert ist 12. Dieses Parameter ist k-rate. Der nominale Bereich ist \[1, 20].
    - `release`
      - : Die Zeitdauer (in Sekunden), um die Verstärkung um 10dB zu erhöhen. Der Standardwert ist 0.250. Dieses Parameter ist k-rate. Der nominale Bereich ist \[0, 1].
    - `threshold`
      - : Der Dezibelwert, oberhalb dessen die Kompression wirksam wird. Der Standardwert ist -24. Dieses Parameter ist k-rate. Der nominale Bereich ist \[-100, 0].

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
