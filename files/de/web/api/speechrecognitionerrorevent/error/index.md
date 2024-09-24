---
title: "SpeechRecognitionErrorEvent: error-Eigenschaft"
short-title: error
slug: Web/API/SpeechRecognitionErrorEvent/error
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`error`** Schreibgeschützte Eigenschaft des
{{domxref("SpeechRecognitionErrorEvent")}} Schnittstelle gibt den Typ des aufgetretenen Fehlers zurück.

## Wert

Ein String, der den Typ des Fehlers benennt. Die möglichen Fehlertypen sind:

- `no-speech`
  - : Es wurde keine Sprache erkannt.
- `aborted`
  - : Die Spracheingabe wurde auf irgendeine Weise abgebrochen, möglicherweise durch eine benutzerspezifische
    Aktion wie eine Schaltfläche, die der Benutzer drücken kann, um die Spracheingabe abzubrechen.
- `audio-capture`
  - : Die Audioaufnahme ist fehlgeschlagen.
- `network`
  - : Die für den Abschluss der Erkennung erforderliche Netzwerkkommunikation ist fehlgeschlagen.
- `not-allowed`
  - : Der User-Agent hat keine Spracheingaben zugelassen, aus Gründen der Sicherheit,
    Privatsphäre oder aufgrund von Benutzervorlieben.
- `service-not-allowed`
  - : Der User-Agent hat den angeforderten Spracherkennungsdienst nicht zugelassen, entweder weil
    der User-Agent ihn nicht unterstützt oder aus Gründen der Sicherheit, Privatsphäre oder aufgrund von Benutzervorlieben. In diesem Fall würde ein anderer, besser geeigneter Spracherkennungsdienst verwendet werden können.
- `bad-grammar`
  - : Es gab einen Fehler in der Spracherkennungsgrammatik oder semantischen Tags, oder das gewählte
    Grammatikformat oder semantische Tag-Format wurde nicht unterstützt.
- `language-not-supported`
  - : Der User-Agent unterstützt die in der [`lang`](/de/docs/Web/API/SpeechRecognition/lang) Attribut-Wert des {{domxref("SpeechRecognition")}} Objekts angegebene Sprache nicht. Die Menge der unterstützten Sprachen ist vom Browser abhängig, und es gibt aus Frontend-Code keine Möglichkeit, programmgesteuert festzustellen, welche Sprachen der Browser eines Benutzers für die Spracherkennung unterstützt.

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
