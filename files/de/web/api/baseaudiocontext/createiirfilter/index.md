---
title: "BaseAudioContext: Methode createIIRFilter()"
short-title: createIIRFilter()
slug: Web/API/BaseAudioContext/createIIRFilter
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die **`createIIRFilter()`** Methode der {{domxref("BaseAudioContext")}} Schnittstelle erstellt einen {{ domxref("IIRFilterNode") }}, der eine allgemeine **[infinite impulse response](https://en.wikipedia.org/wiki/Infinite_impulse_response)** (IIR) Filter darstellt, welcher so konfiguriert werden kann, dass er als verschiedene Typen von Filtern dient.

> [!NOTE]
> Der {{domxref("IIRFilterNode.IIRFilterNode", "IIRFilterNode()")}} Konstruktor wird empfohlen, um einen {{domxref("IIRFilterNode")}} zu erstellen; siehe
> [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createIIRFilter(feedforward, feedback)
```

### Parameter

- `feedforward`
  - : Ein Array aus Gleitkommawerten, das die Feedforward- (Zähler-) Koeffizienten für die Übertragungsfunktion des IIR-Filters angibt. Die maximale Länge dieses Arrays beträgt 20, und mindestens ein Wert muss ungleich null sein.
- `feedback`
  - : Ein Array aus Gleitkommawerten, das die Feedback- (Nenner-) Koeffizienten für die Übertragungsfunktion des IIR-Filters angibt. Dieses Array kann bis zu 20 Elemente enthalten, das erste davon darf nicht null sein.

### Rückgabewert

Ein {{domxref("IIRFilterNode")}}, der den Filter mit den angegebenen Feedback- und Feedforward-Koeffizientarrays implementiert.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn alle `feedforward` Koeffizienten 0 sind oder wenn der erste `feedback` Koeffizient 0 ist.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eine oder beide Eingabearrays mehr als 20 Mitglieder haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("IIRFilterNode")}}
- {{domxref("AudioNode")}}
