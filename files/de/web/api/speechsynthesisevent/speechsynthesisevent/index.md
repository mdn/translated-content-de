---
title: "SpeechSynthesisEvent: SpeechSynthesisEvent() Konstruktor"
short-title: SpeechSynthesisEvent()
slug: Web/API/SpeechSynthesisEvent/SpeechSynthesisEvent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Speech API")}}

Der **`SpeechSynthesisEvent()`** Konstruktor erstellt ein neues [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent) Objekt.

> [!NOTE]
> Ein Webentwickler muss diesen Konstruktor normalerweise nicht aufrufen, da der Browser diese Objekte selbst erstellt, wenn Ereignisse ausgelöst werden.

## Syntax

```js-nolint
new SpeechSynthesisEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitiv und Browser setzen ihn auf `start`, `end`, `error`, `pause`, `resume`, `mark` oder `boundary`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften hat:
    - `utterance`
      - : Ein [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) Objekt, auf das sich die Sprechanforderung bezieht, die das Ereignis ausgelöst hat.
    - `charIndex` {{Optional_inline}}
      - : Die Indexposition des Charakters in [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text), die gesprochen wurde, als das Ereignis ausgelöst wurde. Der Standardwert ist `0`.
    - `charLength` {{Optional_inline}}
      - : Die Anzahl der Zeichen, die nach dem Zeichen an der [`charIndex`](/de/docs/Web/API/SpeechSynthesisEvent/charIndex) Position noch gesprochen werden sollen. Der Standardwert ist `0`.
    - `elapsedTime` {{Optional_inline}}
      - : Die verstrichene Zeit in Sekunden, nachdem [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) zu sprechen begonnen hat, zu der das Ereignis ausgelöst wurde. Der Standardwert ist `0`.
    - `name` {{Optional_inline}}
      - : Der Name, der mit bestimmten Arten von Ereignissen assoziiert ist: der Name des [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2) Markers, der im Fall eines [`mark`](/de/docs/Web/API/SpeechSynthesisUtterance/mark_event) Ereignisses erreicht wurde, oder der Typ von Grenze, die im Fall eines [`boundary`](/de/docs/Web/API/SpeechSynthesisUtterance/boundary_event) Ereignisses erreicht wurde. Der Standardwert ist der leere String (`""`).

### Rückgabewert

Ein neues [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SpeechSynthesisErrorEvent`](/de/docs/Web/API/SpeechSynthesisErrorEvent)
