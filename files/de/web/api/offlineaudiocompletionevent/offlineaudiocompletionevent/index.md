---
title: "OfflineAudioCompletionEvent: OfflineAudioCompletionEvent() Konstruktor"
short-title: OfflineAudioCompletionEvent()
slug: Web/API/OfflineAudioCompletionEvent/OfflineAudioCompletionEvent
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Audio API")}}

Der **`OfflineAudioCompletionEvent()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues
[`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent) Objekt.

> [!NOTE]
> In der Regel würden Sie den Konstruktor nicht manuell verwenden.
> `OfflineAudioCompletionEvent` Ereignisse werden aus historischen Gründen an
> [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) Instanzen gesendet.

## Syntax

```js-nolint
new OfflineAudioCompletionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß-/kleinschreibungssensitiv und Browser setzen es auf `complete`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `renderedBuffer`
      - : Der gerenderte [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der die Audiodaten enthält.

### Rückgabewert

Ein neues [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
