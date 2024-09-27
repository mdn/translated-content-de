---
title: AudioParamDescriptor
slug: Web/API/AudioParamDescriptor
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("Web Audio API")}}

Das **`AudioParamDescriptor`**-Wörterbuch der [Web Audio API](/de/docs/Web/API/Web_Audio_API) legt Eigenschaften für [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekte fest.

Es wird verwendet, um benutzerdefinierte `AudioParam`s auf einem [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) zu erstellen. Wenn der zugrunde liegende [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) einen statischen [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors)-Getter hat, dann wird das durch dieses Wörterbuch zurückgegebene Array von Objekten intern vom `AudioWorkletNode`-Konstruktor verwendet, um seine [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters)-Eigenschaft entsprechend zu füllen.

## Instanz-Eigenschaften

- `name`
  - : Der String, der den Namen des `AudioParam` repräsentiert. Unter diesem Namen wird das `AudioParam` in der [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters)-Eigenschaft des Nodes verfügbar sein, und unter diesem Namen wird die [`AudioWorkletProcessor.process`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode die berechneten Werte dieses `AudioParam` abrufen.
- `automationRate` {{optional_inline}}
  - : Entweder [`"a-rate"`](/de/docs/Web/API/AudioParam#a-rate) oder [`"k-rate"`](/de/docs/Web/API/AudioParam#k-rate) String, der eine Automationsrate dieses `AudioParam` darstellt. Standardwert ist `"a-rate"`.
- `minValue` {{optional_inline}}
  - : Ein `float`, der den minimalen Wert des `AudioParam` darstellt. Standardwert ist `-3.4028235e38`.
- `maxValue` {{optional_inline}}
  - : Ein `float`, der den maximalen Wert des `AudioParam` darstellt. Standardwert ist `3.4028235e38`.
- `defaultValue` {{optional_inline}}
  - : Ein `float`, der den Anfangswert des `AudioParam` darstellt. Standardwert ist `0`.

## Beispiele

Der folgende Codeausschnitt zeigt einen Descriptor dieses Typs, der von einer statischen [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors)-Methode zurückgegeben wird, die in einem benutzerdefinierten `AudioWorkletProcessor` definiert ist (dies ist Teil des vollständigeren Beispiels in [AudioWorkletNode.parameters](/de/docs/Web/API/AudioWorkletNode/parameters#examples)).

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
