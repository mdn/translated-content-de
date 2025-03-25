---
title: AudioParamDescriptor
slug: Web/API/AudioParamDescriptor
l10n:
  sourceCommit: 46b0ecd3b5280fbff659d138e3a7eaaf0fd12a24
---

{{APIRef("Web Audio API")}}

Das **`AudioParamDescriptor`** Wörterbuch der [Web Audio API](/de/docs/Web/API/Web_Audio_API) spezifiziert Eigenschaften für [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekte.

Es wird verwendet, um benutzerdefinierte `AudioParam`s auf einem [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) zu erstellen. Wenn der zugrunde liegende [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) einen statischen Getter [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors) hat, dann wird das zurückgegebene Array von Objekten basierend auf diesem Wörterbuch intern vom `AudioWorkletNode`-Konstruktor verwendet, um die [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters)-Eigenschaft entsprechend zu befüllen.

## Instanz-Eigenschaften

- `name`
  - : Der String, der den Namen des `AudioParam` darstellt. Unter diesem Namen wird das `AudioParam` in der [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters)-Eigenschaft des Knotens verfügbar sein, und unter diesem Namen wird die [`AudioWorkletProcessor.process`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode die berechneten Werte dieses `AudioParam` erwerben.
- `automationRate` {{optional_inline}}
  - : Entweder [`"a-rate"`](/de/docs/Web/API/AudioParam#a-rate) oder [`"k-rate"`](/de/docs/Web/API/AudioParam#k-rate) String, der eine Automatisierungsrate dieses `AudioParam` darstellt. Standardwert ist `"a-rate"`.
- `minValue` {{optional_inline}}
  - : Ein `float`, der den Mindestwert des `AudioParam` darstellt. Standardwert ist `-3.4028235e38`.
- `maxValue` {{optional_inline}}
  - : Ein `float`, der den Höchstwert des `AudioParam` darstellt. Standardwert ist `3.4028235e38`.
- `defaultValue` {{optional_inline}}
  - : Ein `float`, der den Anfangswert des `AudioParam` darstellt. Standardwert ist `0`.

## Beispiele

Das untenstehende Codefragment zeigt einen Deskriptor dieses Typs, der von einer statischen [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors)-Methode zurückgegeben wird, die in einem benutzerdefinierten `AudioWorkletProcessor` definiert ist (dies ist Teil des ausführlicheren Beispiels in [AudioWorkletNode.parameters](/de/docs/Web/API/AudioWorkletNode/parameters#examples)).

```js
// white-noise-processor.js
class WhiteNoiseProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: "customGain",
        defaultValue: 1,
        minValue: 0,
        maxValue: 1,
        automationRate: "a-rate",
      },
    ];
  }

  // …
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
