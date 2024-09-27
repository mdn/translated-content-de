---
title: "AudioProcessingEvent: AudioProcessingEvent() Konstruktor"
short-title: AudioProcessingEvent()
slug: Web/API/AudioProcessingEvent/AudioProcessingEvent
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef}}{{Deprecated_header}}

Der **`AudioProcessingEvent()`** Konstruktor erstellt ein neues [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) Objekt.

> [!NOTE]
> Üblicherweise wird dieser Konstruktor nicht direkt durch Ihren Code aufgerufen, da der Browser diese Objekte selbst erstellt und sie dem Ereignishandler zur Verfügung stellt.

## Syntax

```js-nolint
new AudioProcessingEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß-/kleinschreibungssensitiv und Browser setzen ihn immer auf `audioprocess`.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften besitzt:
    - `playbackTime`
      - : Eine Zahl, die die Zeit darstellt, zu der das Audio abgespielt wird.
    - `inputBuffer`
      - : Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der die Eingabedaten für das Audio enthält.
    - `outputBuffer`
      - : Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), in dem die Ausgabedaten des Audio geschrieben werden.

### Rückgabewert

Ein neues [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)
- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)
