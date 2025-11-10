---
title: "SpeechRecognitionErrorEvent: error-Eigenschaft"
short-title: error
slug: Web/API/SpeechRecognitionErrorEvent/error
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die **`error`**-Eigenschaft mit Schreibschutz des [`SpeechRecognitionErrorEvent`](/de/docs/Web/API/SpeechRecognitionErrorEvent)-Interfaces gibt den Typ des aufgetretenen Fehlers zurück.

## Wert

Ein enumerierter Wert, der den Fehlertyp darstellt. Mögliche Werte sind:

- `aborted`
  - : Die Spracheingabe wurde auf irgendeine Weise abgebrochen, möglicherweise durch ein benutzerspezifisches Verhalten wie eine Taste, die der Benutzer drücken kann, um die Spracheingabe abzubrechen.
- `audio-capture`
  - : Die Audioaufnahme ist fehlgeschlagen.
- `bad-grammar` {{deprecated_inline}} {{non-standard_inline}}
  - : Es gab einen Fehler in der Spracherkennungsgrammatik oder den semantischen Tags, oder das gewählte Grammatik- oder semantische Tag-Format wurde nicht unterstützt.
    > [!NOTE]
    > Dieser Fehler ist nicht mehr Teil der Spezifikation der Web Speech API; das Konzept der Grammatik wurde aus der Web Speech API entfernt. Verwandte Funktionen bleiben in der Spezifikation und werden weiterhin von unterstützenden Browsern zur Rückwärtskompatibilität erkannt, haben jedoch keinen Einfluss auf die Spracherkennungsdienste.
- `language-not-supported`
  - : Der User-Agent unterstützt die im [`lang`](/de/docs/Web/API/SpeechRecognition/lang)-Attribut des [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Objekts angegebene Sprache nicht. Der Satz der unterstützten Sprachen hängt vom Browser ab, und es gibt keine Möglichkeit, programmgesteuert aus dem Front-End-Code zu bestimmen, welche Sprachen ein Benutzerbrowser für die Spracherkennung unterstützt.
- `network`
  - : Die zur Abschließung der Erkennung erforderliche Netzwerkkommunikation ist fehlgeschlagen.
- `no-speech`
  - : Es wurde keine Sprache erkannt.
- `not-allowed`
  - : Der User-Agent hat aus Gründen der Sicherheit, Privatsphäre oder Benutzerpräferenz jegliche Spracheingabe untersagt.
- `phrases-not-supported`
  - : Das Spracherkennungsmodell unterstützt keine [`phrases`](/de/docs/Web/API/SpeechRecognition/phrases) für [kontextuelles Biasing](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition).
- `service-not-allowed`
  - : Der User-Agent hat den angeforderten Spracherkennungsdienst abgelehnt, entweder weil der User-Agent ihn nicht unterstützt oder aus Gründen der Sicherheit, Privatsphäre oder Benutzerpräferenz. In diesem Fall würde die Nutzung eines anderen, besser geeigneten Spracherkennungsdienstes ermöglicht.

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
