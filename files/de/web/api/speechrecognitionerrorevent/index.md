---
title: SpeechRecognitionErrorEvent
slug: Web/API/SpeechRecognitionErrorEvent
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Web Speech API")}}

Die **`SpeechRecognitionErrorEvent`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) stellt Fehlermeldungen des Erkennungsdienstes dar.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_`SpeechRecognitionErrorEvent` erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, {{domxref("Event")}}._

- {{domxref("SpeechRecognitionErrorEvent.error")}} {{ReadOnlyInline}}
  - : Gibt den Typ des aufgetretenen Fehlers zurück.
- {{domxref("SpeechRecognitionErrorEvent.message")}} {{ReadOnlyInline}}
  - : Gibt eine Nachricht zurück, die den Fehler im Detail beschreibt.

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
