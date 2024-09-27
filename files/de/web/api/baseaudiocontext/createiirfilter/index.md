---
title: "BaseAudioContext: Methode createIIRFilter()"
short-title: createIIRFilter()
slug: Web/API/BaseAudioContext/createIIRFilter
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die **`createIIRFilter()`**-Methode des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Interfaces erstellt einen [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode), der einen allgemeinen **[infinite impulse response](https://en.wikipedia.org/wiki/Infinite_impulse_response)** (IIR)-Filter darstellt, der so konfiguriert werden kann, dass er als verschiedene Arten von Filtern dient.

> [!NOTE]
> Der [`IIRFilterNode()`](/de/docs/Web/API/IIRFilterNode/IIRFilterNode)
> Konstruktor ist die empfohlene Methode zum Erstellen eines [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode); siehe
> [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createIIRFilter(feedforward, feedback)
```

### Parameter

- `feedforward`
  - : Ein Array von Gleitkommawerten, das die Feedforward- (Zähler) Koeffizienten der Übertragungsfunktion des IIR-Filters spezifiziert. Die maximale Länge dieses Arrays beträgt 20, und mindestens ein Wert muss ungleich null sein.
- `feedback`
  - : Ein Array von Gleitkommawerten, das die Feedback- (Nenner) Koeffizienten der Übertragungsfunktion des IIR-Filters spezifiziert. Dieses Array kann bis zu 20 Elemente enthalten, von denen das erste nicht null sein darf.

### Rückgabewert

Ein [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode), der den Filter mit den angegebenen Feedback- und Feedforward-Koeffizientenarrays implementiert.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn alle `feedforward`-Koeffizienten 0 sind oder der erste `feedback`-Koeffizient 0 ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines oder beide der Eingabearrays mehr als 20 Elemente haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)
- [`AudioNode`](/de/docs/Web/API/AudioNode)
