---
title: "AudioWorkletProcessor: parameterDescriptors statische Eigenschaft"
short-title: parameterDescriptors
slug: Web/API/AudioWorkletProcessor/parameterDescriptors_static
l10n:
  sourceCommit: db01d0c8b4cbf8a4467b1db65e17f6724d0ce710
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte Eigenschaft **`parameterDescriptors`** einer von [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) abgeleiteten Klasse ist ein _statischer Getter_, der ein Iterable von Objekten basierend auf [`AudioParamDescriptor`](/de/docs/Web/API/AudioParamDescriptor) zurückgibt.

Die Eigenschaft ist kein Teil der [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-Schnittstelle, aber, wenn sie definiert ist, wird sie intern vom [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-Konstruktor aufgerufen, um eine Liste benutzerdefinierter [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekte in der Eigenschaft [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters) des zugehörigen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) zu erstellen.

Das Definieren des Getters ist optional.

## Wert

Ein Iterable von Objekten basierend auf [`AudioParamDescriptor`](/de/docs/Web/API/AudioParamDescriptor). Die Eigenschaften dieser Objekte sind wie folgt:

- `name`
  - : Der String, der den Namen des `AudioParam` repräsentiert. Unter diesem Namen wird das `AudioParam` in der [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters)-Eigenschaft des Knotens verfügbar sein, und unter diesem Namen wird die [`AudioWorkletProcessor.process`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode die berechneten Werte dieses `AudioParam` erlangen.
- `automationRate` {{optional_inline}}
  - : Entweder der String [`"a-rate"`](/de/docs/Web/API/AudioParam#a-rate) oder [`"k-rate"`](/de/docs/Web/API/AudioParam#k-rate), der eine Automationsrate dieses `AudioParam` repräsentiert. Standardwert ist `"a-rate"`.
- `minValue` {{optional_inline}}
  - : Ein `float`, der den Mindestwert des `AudioParam` repräsentiert. Standardwert ist `-3.4028235e38`.
- `maxValue` {{optional_inline}}
  - : Ein `float`, der den Höchstwert des `AudioParam` repräsentiert. Standardwert ist `3.4028235e38`.
- `defaultValue` {{optional_inline}}
  - : Ein `float`, der den Anfangswert des `AudioParam` repräsentiert. Standardwert ist `0`.

## Beispiele

Siehe [`AudioWorkletNode.parameters`](/de/docs/Web/API/AudioWorkletNode/parameters#examples) für Beispielcode, der zeigt, wie ein statischer `parameterDescriptors`-Getter zu einem benutzerdefinierten `AudioWorkletProcessor` hinzugefügt wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
