---
title: "BaseAudioContext: Methode createIIRFilter()"
short-title: createIIRFilter()
slug: Web/API/BaseAudioContext/createIIRFilter
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die **`createIIRFilter()`** Methode des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) Schnittstellenobjekts erstellt einen [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode), der einen allgemeinen **[Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response)** (IIR)-Filter darstellt, der als verschiedene Arten von Filtern konfiguriert werden kann.

> [!NOTE]
> Der [`IIRFilterNode()`](/de/docs/Web/API/IIRFilterNode/IIRFilterNode)
> Konstruktor ist der empfohlene Weg, um einen [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode) zu erstellen; siehe
> [Creating an AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createIIRFilter(feedforward, feedback)
```

### Parameter

- `feedforward`
  - : Ein Array von Gleitkommawerten, das die Feedforward- (Zähler) Koeffizienten für die Übertragungsfunktion des IIR-Filters angibt. Die maximale Länge dieses Arrays beträgt 20, und mindestens ein Wert muss ungleich null sein.
- `feedback`
  - : Ein Array von Gleitkommawerten, das die Feedback- (Nenner) Koeffizienten für die Übertragungsfunktion des IIR-Filters angibt. Dieses Array kann bis zu 20 Mitglieder haben, das erste darf nicht null sein.

### Rückgabewert

Ein [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode), der den Filter mit den angegebenen Feedback- und Feedforward-Koeffizientenarrays implementiert.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn alle `feedforward` Koeffizienten 0 sind oder wenn der erste
    `feedback` Koeffizient 0 ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein oder beide Eingabearrays mehr als 20 Mitglieder enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)
- [`AudioNode`](/de/docs/Web/API/AudioNode)
