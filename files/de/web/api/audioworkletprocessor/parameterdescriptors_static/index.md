---
title: "AudioWorkletProcessor: statische Eigenschaft parameterDescriptors"
short-title: parameterDescriptors
slug: Web/API/AudioWorkletProcessor/parameterDescriptors_static
l10n:
  sourceCommit: 757c86b372ca96d49679d57fb782467584c54f36
---

{{APIRef("Web Audio API")}}

Die statische Eigenschaft **`parameterDescriptors`** einer von [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) abgeleiteten Klasse ist ein Iterable aus Objekten, die auf [`AudioParamDescriptor`](/de/docs/Web/API/AudioParamDescriptor) basieren.

Die Eigenschaft gehört nicht zur Schnittstelle [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor). Wenn sie definiert ist, wird sie jedoch von [`registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor) gelesen, um eine Liste benutzerdefinierter [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekte in der Eigenschaft [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters) des zugehörigen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) zu erstellen. Integrierte APIs ändern sie nie, daher kann sie als _statischer Getter_ definiert werden.

Die Definition dieser Eigenschaft ist optional.

## Wert

Ein Iterable aus Objekten, die auf [`AudioParamDescriptor`](/de/docs/Web/API/AudioParamDescriptor) basieren. Diese Objekte haben folgende Eigenschaften:

- `name`
  - : Die Zeichenfolge, die den Namen des `AudioParam` angibt. Unter diesem Namen ist der `AudioParam` in der Eigenschaft [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters) des Knotens verfügbar. Unter demselben Namen erhält die Methode [`AudioWorkletProcessor.process`](/de/docs/Web/API/AudioWorkletProcessor/process) die berechneten Werte dieses `AudioParam`.
- `automationRate` {{optional_inline}}
  - : Die Zeichenfolge [`"a-rate"`](/de/docs/Web/API/AudioParam#a-rate) oder [`"k-rate"`](/de/docs/Web/API/AudioParam#k-rate), die die Automatisierungsrate dieses `AudioParam` angibt. Der Standardwert ist `"a-rate"`.
- `minValue` {{optional_inline}}
  - : Ein `float`, der den Mindestwert des `AudioParam` angibt. Der Standardwert ist `-3.4028235e38`.
- `maxValue` {{optional_inline}}
  - : Ein `float`, der den Höchstwert des `AudioParam` angibt. Der Standardwert ist `3.4028235e38`.
- `defaultValue` {{optional_inline}}
  - : Ein `float`, der den Anfangswert des `AudioParam` angibt. Der Standardwert ist `0`.

## Beispiele

Unter [`AudioWorkletNode.parameters`](/de/docs/Web/API/AudioWorkletNode/parameters#examples) finden Sie Beispielcode, der zeigt, wie Sie einem benutzerdefinierten `AudioWorkletProcessor` einen statischen `parameterDescriptors`-Getter hinzufügen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
