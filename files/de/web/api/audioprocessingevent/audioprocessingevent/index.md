---
title: "AudioProcessingEvent: AudioProcessingEvent() Konstruktor"
short-title: AudioProcessingEvent()
slug: Web/API/AudioProcessingEvent/AudioProcessingEvent
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef}}{{Deprecated_header}}

Der **`AudioProcessingEvent()`** Konstruktor erstellt ein neues {{domxref("AudioProcessingEvent")}} Objekt.

> [!NOTE]
> Normalerweise wird dieser Konstruktor nicht direkt von Ihrem Code aufgerufen, da der Browser diese Objekte selbst erstellt und sie dem Ereignishandler zur Verfügung stellt.

## Syntax

```js-nolint
new AudioProcessingEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß- und kleinschreibungssensitiv und Browser setzen es immer auf `audioprocess`.
- `options`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `playbackTime`
      - : Eine Zahl, die die Zeit repräsentiert, wann der Ton abgespielt wird.
    - `inputBuffer`
      - : Ein {{domxref("AudioBuffer")}}, das die Eingabe-Audiodaten enthält.
    - `outputBuffer`
      - : Ein {{domxref("AudioBuffer")}}, in dem die Ausgabe-Audiodaten geschrieben werden.

### Rückgabewert

Ein neues {{domxref("AudioProcessingEvent")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("AudioProcessingEvent")}}
- {{domxref("ScriptProcessorNode")}}
