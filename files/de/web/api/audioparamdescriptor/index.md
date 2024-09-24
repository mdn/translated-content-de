---
title: AudioParamDescriptor
slug: Web/API/AudioParamDescriptor
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("Web Audio API")}}

Das **`AudioParamDescriptor`**-Wörterbuch der [Web Audio API](/de/docs/Web/API/Web_Audio_API) legt Eigenschaften für {{domxref("AudioParam")}} Objekte fest.

Es wird verwendet, um benutzerdefinierte `AudioParam`s auf einem {{domxref("AudioWorkletNode")}} zu erstellen. Wenn der zugrunde liegende {{domxref("AudioWorkletProcessor")}} über einen statischen {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}}-Getter verfügt, wird das zurückgegebene Array von Objekten basierend auf diesem Wörterbuch intern vom `AudioWorkletNode`-Konstruktor verwendet, um seine {{domxref("AudioWorkletNode.parameters", "parameters")}}-Eigenschaft entsprechend zu füllen.

## Instanz-Eigenschaften

- `name`
  - : Der String, der den Namen des `AudioParam` repräsentiert. Unter diesem Namen wird das `AudioParam` in der {{domxref("AudioWorkletNode.parameters", "parameters")}}-Eigenschaft des Knotens verfügbar sein, und unter diesem Namen wird die {{domxref("AudioWorkletProcessor.process")}}-Methode die berechneten Werte dieses `AudioParam` erwerben.
- `automationRate` {{optional_inline}}
  - : Entweder der [`"a-rate"`](/de/docs/Web/API/AudioParam#a-rate) oder [`"k-rate"`](/de/docs/Web/API/AudioParam#k-rate) String, der eine Automatisierungsrate dieses `AudioParam` darstellt. Standardmäßig ist `"a-rate"`.
- `minValue` {{optional_inline}}
  - : Ein `float`, der den minimalen Wert des `AudioParam` darstellt. Standardmäßig `-3.4028235e38`.
- `maxValue` {{optional_inline}}
  - : Ein `float`, der den maximalen Wert des `AudioParam` darstellt. Standardmäßig `3.4028235e38`.
- `defaultValue` {{optional_inline}}
  - : Ein `float`, der den Anfangswert des `AudioParam` darstellt. Standardmäßig `0`.

## Beispiele

Das folgende Codefragment zeigt einen Deskriptor dieses Typs, der durch eine statische {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}}-Methode zurückgegeben wird, die in einem benutzerdefinierten `AudioWorkletProcessor` definiert ist (dies ist Teil des umfassenderen Beispiels in [AudioWorkletNode.parameters](/de/docs/Web/API/AudioWorkletNode/parameters#examples)).

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
