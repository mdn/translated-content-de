---
title: "SpeechRecognitionErrorEvent: error-Eigenschaft"
short-title: error
slug: Web/API/SpeechRecognitionErrorEvent/error
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte Eigenschaft **`error`** des [`SpeechRecognitionErrorEvent`](/de/docs/Web/API/SpeechRecognitionErrorEvent)-Interfaces gibt den Typ des aufgetretenen Fehlers zurück.

## Wert

Ein String, der den Typ des Fehlers benennt. Die möglichen Fehlertypen sind:

- `no-speech`
  - : Es wurde keine Spracheingabe erkannt.
- `aborted`
  - : Die Spracheingabe wurde auf irgendeine Weise abgebrochen, möglicherweise durch ein benutzerspezifisches Verhalten wie eine Schaltfläche, die der Benutzer drücken kann, um die Spracheingabe abzubrechen.
- `audio-capture`
  - : Die Audioaufnahme ist fehlgeschlagen.
- `network`
  - : Die für den Abschluss der Erkennung erforderliche Netzwerkkommunikation ist fehlgeschlagen.
- `not-allowed`
  - : Der Benutzeragent hat jegliche Spracheingabe aus Gründen der Sicherheit, des Datenschutzes oder der Benutzerpräferenz nicht zugelassen.
- `service-not-allowed`
  - : Der Benutzeragent hat den angeforderten Spracherkennungsdienst nicht zugelassen, entweder weil der Benutzeragent ihn nicht unterstützt oder aus Gründen der Sicherheit, des Datenschutzes oder der Benutzerpräferenz. In diesem Fall wäre ein anderer, besser geeigneter Spracherkennungsdienst erlaubt.
- `bad-grammar`
  - : Es gab einen Fehler in der Spracherkennungsgrammatik oder den semantischen Tags, oder das gewählte Grammatikformat oder das Format der semantischen Tags wurde nicht unterstützt.
- `language-not-supported`
  - : Der Benutzeragent unterstützt die Sprache nicht, die im Wert des [`lang`](/de/docs/Web/API/SpeechRecognition/lang)-Attributs des [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Objekts angegeben ist. Die Menge der unterstützten Sprachen hängt vom Browser ab, und es gibt keinen Weg vom Frontend-Code aus, um programmgesteuert zu bestimmen, welche Sprachen der Browser eines Benutzers für die Spracherkennung unterstützt.

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
