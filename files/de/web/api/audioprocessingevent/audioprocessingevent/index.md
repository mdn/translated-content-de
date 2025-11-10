---
title: "AudioProcessingEvent: Konstruktor AudioProcessingEvent()"
short-title: AudioProcessingEvent()
slug: Web/API/AudioProcessingEvent/AudioProcessingEvent
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Web Audio API")}}{{Deprecated_header}}

Der **`AudioProcessingEvent()`**-Konstruktor erstellt ein neues [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)-Objekt.

> [!NOTE]
> Normalerweise wird dieser Konstruktor nicht direkt von Ihrem Code aufgerufen, da der Browser diese Objekte selbst erstellt und dem Event-Handler zur Verfügung stellt.

## Syntax

```js-nolint
new AudioProcessingEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß-/klein-schreibungsempfindlich und Browser setzen ihn immer auf `audioprocess`.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften hat:
    - `playbackTime`
      - : Eine Zahl, die die Zeit darstellt, wann der Ton abgespielt wird.
    - `inputBuffer`
      - : Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), das die Eingabe-Audiodaten enthält.
    - `outputBuffer`
      - : Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), in dem die Ausgabe-Audiodaten geschrieben werden.

### Rückgabewert

Ein neues [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)
- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)
