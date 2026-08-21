---
title: "AudioProcessingEvent: AudioProcessingEvent() Konstruktor"
short-title: AudioProcessingEvent()
slug: Web/API/AudioProcessingEvent/AudioProcessingEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Web Audio API")}}

Der **`AudioProcessingEvent()`** Konstruktor erstellt ein neues [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) Objekt.

> [!NOTE]
> Normalerweise wird dieser Konstruktor nicht direkt von Ihrem Code aufgerufen, da der Browser diese Objekte selbst erstellt und sie dem Ereignis-Handler zur Verfügung stellt.

## Syntax

```js-nolint
new AudioProcessingEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen es immer auf `audioprocess`.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `playbackTime`
      - : Eine Zahl, die die Zeit darstellt, wann der Ton abgespielt wird.
    - `inputBuffer`
      - : Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), das die Eingabedaten des Audios enthält.
    - `outputBuffer`
      - : Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), in das die Ausgabedaten des Audios geschrieben werden.

### Rückgabewert

Ein neues [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)
- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)
