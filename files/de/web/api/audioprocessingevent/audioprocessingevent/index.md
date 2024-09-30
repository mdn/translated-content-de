---
title: "AudioProcessingEvent: AudioProcessingEvent() Konstruktor"
short-title: AudioProcessingEvent()
slug: Web/API/AudioProcessingEvent/AudioProcessingEvent
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef}}{{Deprecated_header}}

Der **`AudioProcessingEvent()`** Konstruktor erstellt ein neues [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)-Objekt.

> [!NOTE]
> In der Regel wird dieser Konstruktor nicht direkt von Ihrem Code aufgerufen, da der Browser diese Objekte selbst erstellt und sie dem Ereignishandler bereitstellt.

## Syntax

```js-nolint
new AudioProcessingEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß-/kleinschreibungssensitiv und Browser setzen es immer auf `audioprocess`.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `playbackTime`
      - : Eine Zahl, die die Zeit darstellt, wann das Audio abgespielt wird.
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
