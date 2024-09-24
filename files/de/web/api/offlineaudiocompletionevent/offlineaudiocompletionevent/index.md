---
title: "OfflineAudioCompletionEvent: OfflineAudioCompletionEvent() Konstruktor"
short-title: OfflineAudioCompletionEvent()
slug: Web/API/OfflineAudioCompletionEvent/OfflineAudioCompletionEvent
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Audio API")}}

Der **`OfflineAudioCompletionEvent()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues
{{domxref("OfflineAudioCompletionEvent")}} Objekt.

> [!NOTE]
> In der Regel würden Sie den Konstruktor nicht manuell verwenden.
> `OfflineAudioCompletionEvent` Ereignisse werden aus historischen Gründen an
> {{domxref("OfflineAudioContext")}} Instanzen gesendet.

## Syntax

```js-nolint
new OfflineAudioCompletionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist Groß- und Kleinschreibungssensitiv und Browser setzen es auf `complete`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `renderedBuffer`
      - : Der gerenderte {{domxref("AudioBuffer")}}, der die Audiodaten enthält.

### Rückgabewert

Ein neues {{domxref("OfflineAudioCompletionEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
