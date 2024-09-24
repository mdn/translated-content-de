---
title: "SpeechSynthesisEvent: Konstruktor SpeechSynthesisEvent()"
short-title: SpeechSynthesisEvent()
slug: Web/API/SpeechSynthesisEvent/SpeechSynthesisEvent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Speech API")}}

Der **`SpeechSynthesisEvent()`** Konstruktor erstellt ein neues {{domxref("SpeechSynthesisEvent")}} Objekt.

> [!NOTE]
> Als Webentwickler müssen Sie diesen Konstruktor in der Regel nicht aufrufen, da der Browser diese Objekte selbst erstellt, wenn er Ereignisse auslöst.

## Syntax

```js-nolint
new SpeechSynthesisEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß-/kleinschreibungssensitiv und Browser setzen ihn auf `start`, `end`, `error`, `pause`, `resume`, `mark` oder `boundary`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den Eigenschaften, die in {{domxref("Event/Event", "Event()")}} definiert sind_, die folgenden Eigenschaften hat:
    - `utterance`
      - : Ein {{domxref("SpeechSynthesisUtterance")}} Objekt, welches die Sprachanforderung ist, bei der das Ereignis ausgelöst wurde.
    - `charIndex` {{Optional_inline}}
      - : Die Indexposition des Zeichens in {{domxref("SpeechSynthesisUtterance.text")}}, das gesprochen wurde, als das Ereignis ausgelöst wurde. Der Standardwert ist `0`.
    - `charLength` {{Optional_inline}}
      - : Die Anzahl der Zeichen, die nach dem Zeichen an der Position {{DOMxRef("SpeechSynthesisEvent.charIndex", "charIndex")}} noch gesprochen werden sollen. Der Standardwert ist `0`.
    - `elapsedTime` {{Optional_inline}}
      - : Die verstrichene Zeit in Sekunden, nachdem der Text von {{domxref("SpeechSynthesisUtterance.text")}} zu sprechen begonnen hatte, zu der das Ereignis ausgelöst wurde. Der Standardwert ist `0`.
    - `name` {{Optional_inline}}
      - : Der Name, der mit bestimmten Ereignistypen verknüpft ist: der Name des [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2) Markers, der im Falle eines {{domxref("SpeechSynthesisUtterance.mark_event", "mark")}} Ereignisses erreicht wurde, oder der Typ der Grenze, die im Falle eines {{domxref("SpeechSynthesisUtterance.boundary_event", "boundary")}} Ereignisses erreicht wurde. Der Standardwert ist der leere String (`""`).

### Rückgabewert

Ein neues {{domxref("SpeechSynthesisEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SpeechSynthesisErrorEvent")}}
