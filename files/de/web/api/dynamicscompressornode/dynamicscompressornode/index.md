---
title: "DynamicsCompressorNode: DynamicsCompressorNode()-Konstruktor"
short-title: DynamicsCompressorNode()
slug: Web/API/DynamicsCompressorNode/DynamicsCompressorNode
l10n:
  sourceCommit: a293f02fe42b2e81240bb75edf818c164473e0b0
---

{{APIRef("Web Audio API")}}

Der **`DynamicsCompressorNode()`**-Konstruktor erstellt eine neue [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)-Objektinstanz, die verwendet werden kann, um einen Kompressionseffekt bereitzustellen, der die Lautstärke der lautesten Teile eines Signals verringert.

Kompression kann helfen, Clipping und Verzerrungen zu vermeiden, wenn mehrere Sounds kombiniert werden. Sie wird auch in der Musikproduktion und beim Game-Audio für dynamische Kontrolle, Tonformung und kreative Effekte eingesetzt.

## Syntax

```js-nolint
new DynamicsCompressorNode(context, options)
```

### Parameter

- `context`
  - : Ein Verweis auf ein [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}
  - : Die Optionen sind wie folgt:
    - `attack`
      - : Die Zeitspanne (in Sekunden), um den Pegel um 10 dB zu reduzieren.
        Der Standardwert ist 0,003.
        Dieser Parameter ist k-rate.
        Der nominelle Bereich ist \[0, 1].
    - `knee`
      - : Ein Dezibelwert, der den Bereich oberhalb der Schwelle darstellt, in dem die Kurve sanft in den "ratio"-Abschnitt übergeht.
        Der Standardwert ist 30.
        Dieser Parameter ist k-rate.
        Der nominelle Bereich ist \[0, 40].
    - `ratio`
      - : Der Betrag der Pegeländerung in dB im Eingang für eine 1 dB-Änderung im Ausgang.
        Der Standardwert ist 12.
        Dieser Parameter ist k-rate.
        Der nominelle Bereich ist \[1, 20].
    - `release`
      - : Die Zeitspanne (in Sekunden), um den Pegel um 10 dB zu erhöhen. Der
        Standardwert ist 0,250.
        Dieser Parameter ist k-rate.
        Der nominelle Bereich ist \[0, 1].
    - `threshold`
      - : Der Dezibelwert, über dem die Kompression wirksam wird.
        Der Standardwert ist -24.
        Dieser Parameter ist k-rate.
        Der nominelle Bereich ist \[-100, 0].

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
