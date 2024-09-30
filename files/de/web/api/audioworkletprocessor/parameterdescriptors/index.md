---
title: "AudioWorkletProcessor: parameterDescriptors-Eigenschaft"
short-title: parameterDescriptors
slug: Web/API/AudioWorkletProcessor/parameterDescriptors
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Die schreibgeschützte **`parameterDescriptors`**-Eigenschaft einer von [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) abgeleiteten Klasse ist ein _statischer Getter_,
der eine Iterable von auf [`AudioParamDescriptor`](/de/docs/Web/API/AudioParamDescriptor) basierenden Objekten zurückgibt.

Die Eigenschaft ist kein Teil der [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-Schnittstelle, aber wenn sie definiert ist, wird sie intern vom
[`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-Konstruktor aufgerufen, um eine Liste von benutzerdefinierten
[`AudioParam`](/de/docs/Web/API/AudioParam)-Objekten in der [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters)-Eigenschaft des zugehörigen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) zu erstellen.

Das Definieren des Getters ist optional.

## Wert

Eine Iterable von auf [`AudioParamDescriptor`](/de/docs/Web/API/AudioParamDescriptor) basierenden Objekten. Die Eigenschaften dieser Objekte sind wie folgt:

- `name`
  - : Der String, der den Namen des `AudioParam` darstellt. Unter diesem Namen wird das `AudioParam` in der [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters)-Eigenschaft des Knotens verfügbar sein, und unter diesem Namen wird die [`AudioWorkletProcessor.process`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode die berechneten Werte dieses `AudioParam` abrufen.
- `automationRate` {{optional_inline}}
  - : Entweder der String [`"a-rate"`](/de/docs/Web/API/AudioParam#a-rate) oder [`"k-rate"`](/de/docs/Web/API/AudioParam#k-rate), der eine Automatisierungsrate dieses `AudioParam` darstellt. Standardmäßig `"a-rate"`.
- `minValue` {{optional_inline}}
  - : Ein `float`, der den Mindestwert des `AudioParam` darstellt. Standardmäßig `-3.4028235e38`.
- `maxValue` {{optional_inline}}
  - : Ein `float`, der den Höchstwert des `AudioParam` darstellt. Standardmäßig `3.4028235e38`.
- `defaultValue` {{optional_inline}}
  - : Ein `float`, der den Anfangswert des `AudioParam` darstellt. Standardmäßig `0`.

## Beispiele

Siehe [`AudioWorkletNode.parameters`](/de/docs/Web/API/AudioWorkletNode/parameters#examples) für Beispielcode, der zeigt, wie man einen statischen `parameterDescriptors`-Getter zu einem benutzerdefinierten `AudioWorkletProcessor` hinzufügt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
