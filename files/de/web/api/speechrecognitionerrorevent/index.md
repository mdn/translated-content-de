---
title: SpeechRecognitionErrorEvent
slug: Web/API/SpeechRecognitionErrorEvent
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Das **`SpeechRecognitionErrorEvent`**-Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert Fehlermeldungen vom Erkennungsdienst.

{{InheritanceDiagram}}

## Konstruktor

- [`SpeechRecognitionErrorEvent()`](/de/docs/Web/API/SpeechRecognitionErrorEvent/SpeechRecognitionErrorEvent)
  - : Erstellt ein neues `SpeechRecognitionErrorEvent`-Objekt.

## Instanz-Eigenschaften

_`SpeechRecognitionErrorEvent` erbt auch Eigenschaften von seinem Eltern-Interface, [`Event`](/de/docs/Web/API/Event)._

- [`SpeechRecognitionErrorEvent.error`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error) {{ReadOnlyInline}}
  - : Gibt die Art des aufgetretenen Fehlers zurück.
- [`SpeechRecognitionErrorEvent.message`](/de/docs/Web/API/SpeechRecognitionErrorEvent/message) {{ReadOnlyInline}}
  - : Gibt eine Nachricht zurück, die den Fehler genauer beschreibt.

## Beispiele

```js
const recognition = new SpeechRecognition();

recognition.onerror = (event) => {
  console.log(`Speech recognition error detected: ${event.error}`);
  console.log(`Additional information: ${event.message}`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
