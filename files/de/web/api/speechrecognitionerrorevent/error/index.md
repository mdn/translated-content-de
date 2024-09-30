---
title: "SpeechRecognitionErrorEvent: error-Eigenschaft"
short-title: error
slug: Web/API/SpeechRecognitionErrorEvent/error
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`error`** schreibgeschützte Eigenschaft des [`SpeechRecognitionErrorEvent`](/de/docs/Web/API/SpeechRecognitionErrorEvent)-Interface gibt den Typ des aufgetretenen Fehlers zurück.

## Wert

Ein String, der den Fehlertyp benennt. Die möglichen Fehlertypen sind:

- `no-speech`
  - : Es wurde keine Sprache erkannt.
- `aborted`
  - : Die Spracheingabe wurde auf irgendeine Weise abgebrochen, möglicherweise durch ein anwenderspezifisches Verhalten wie eine Schaltfläche, die der Benutzer drücken kann, um die Spracheingabe abzubrechen.
- `audio-capture`
  - : Die Audioaufnahme ist fehlgeschlagen.
- `network`
  - : Die für den Abschluss der Erkennung erforderliche Netzwerkkommunikation ist fehlgeschlagen.
- `not-allowed`
  - : Der Benutzeragent hat aus Sicherheits-, Datenschutz- oder Benutzervorlieben-Gründen jegliche Spracheingabe nicht zugelassen.
- `service-not-allowed`
  - : Der Benutzeragent hat den angeforderten Sprachdienst nicht zugelassen, entweder weil der Benutzeragent ihn nicht unterstützt oder aus Sicherheits-, Datenschutz- oder Benutzervorlieben-Gründen. In diesem Fall würde ein anderer, besser geeigneter Sprachdienst verwendet werden.
- `bad-grammar`
  - : Es gab einen Fehler in der Sprachgrammatik oder den semantischen Tags oder das gewählte Grammatikformat oder semantische Tag-Format wurde nicht unterstützt.
- `language-not-supported`
  - : Der Benutzeragent unterstützt die in der [`lang`](/de/docs/Web/API/SpeechRecognition/lang)-Attributwert des [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Objekts angegebene Sprache nicht. Der Satz der unterstützten Sprachen ist browserabhängig und es gibt keine Möglichkeit von Frontend-Code aus, programmgesteuert zu bestimmen, welche Sprachen der Browser eines Nutzers für die Spracherkennung unterstützt.

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
