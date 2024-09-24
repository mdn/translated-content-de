---
title: "AudioWorkletProcessor: Eigenschaft parameterDescriptors"
short-title: parameterDescriptors
slug: Web/API/AudioWorkletProcessor/parameterDescriptors
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Die schreibgeschützte **`parameterDescriptors`**-Eigenschaft einer von {{domxref("AudioWorkletProcessor")}} abgeleiteten Klasse ist ein _statischer Getter_,
der ein iterierbares Objekt, basierend auf {{domxref("AudioParamDescriptor")}}, zurückgibt.

Die Eigenschaft ist nicht Teil des {{domxref("AudioWorkletProcessor")}}-Interfaces, aber, wenn definiert, wird sie intern vom
{{domxref("AudioWorkletProcessor")}}-Konstruktor aufgerufen, um eine Liste von benutzerdefinierten
{{domxref("AudioParam")}}-Objekten in der {{domxref("AudioWorkletNode.parameters", "parameters")}}-Eigenschaft des zugehörigen {{domxref("AudioWorkletNode")}} zu erstellen.

Das Definieren des Getters ist optional.

## Wert

Ein iterierbarer Satz von Objekten, die auf {{domxref("AudioParamDescriptor")}} basieren. Die Eigenschaften dieser Objekte sind wie folgt:

- `name`
  - : Der String, der den Namen des `AudioParam` darstellt. Unter diesem Namen wird das `AudioParam` in der {{domxref("AudioWorkletNode.parameters", "parameters")}}-Eigenschaft des Knotens verfügbar sein, und unter diesem Namen wird die {{domxref("AudioWorkletProcessor.process")}}-Methode die berechneten Werte dieses `AudioParam` erhalten.
- `automationRate` {{optional_inline}}
  - : Entweder der String [`"a-rate"`](/de/docs/Web/API/AudioParam#a-rate) oder [`"k-rate"`](/de/docs/Web/API/AudioParam#k-rate), der die Automatisierungsrate dieses `AudioParam` repräsentiert. Standardwert ist `"a-rate"`.
- `minValue` {{optional_inline}}
  - : Ein `float`, der den Mindestwert des `AudioParam` darstellt. Standardwert ist `-3.4028235e38`.
- `maxValue` {{optional_inline}}
  - : Ein `float`, der den Höchstwert des `AudioParam` darstellt. Standardwert ist `3.4028235e38`.
- `defaultValue` {{optional_inline}}
  - : Ein `float`, der den Anfangswert des `AudioParam` darstellt. Standardwert ist `0`.

## Beispiele

Sehen Sie sich [`AudioWorkletNode.parameters`](/de/docs/Web/API/AudioWorkletNode/parameters#examples) für Beispielcode an, der zeigt, wie man einen statischen `parameterDescriptors`-Getter zu einem benutzerdefinierten `AudioWorkletProcessor` hinzufügt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
