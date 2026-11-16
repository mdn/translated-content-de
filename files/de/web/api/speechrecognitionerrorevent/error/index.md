---
title: "SpeechRecognitionErrorEvent: Eigenschaft error"
short-title: error
slug: Web/API/SpeechRecognitionErrorEvent/error
l10n:
  sourceCommit: 25871546e715779a39a2d962820a35e44b6a6df1
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte Eigenschaft **`error`** des Interfaces [`SpeechRecognitionErrorEvent`](/de/docs/Web/API/SpeechRecognitionErrorEvent) gibt den Typ des aufgetretenen Fehlers zurück.

## Wert

Ein Aufzählungswert, der den Fehlertyp angibt. Mögliche Werte sind:

- `aborted`
  - : Die Spracheingabe wurde auf irgendeine Weise abgebrochen, möglicherweise durch ein benutzeragentspezifisches Verhalten wie eine Schaltfläche, mit der die Spracheingabe abgebrochen werden kann.
- `audio-capture`
  - : Die Audioaufnahme ist fehlgeschlagen.
- `bad-grammar` {{deprecated_inline}} {{non-standard_inline}}
  - : In der Grammatik für die Spracherkennung oder in semantischen Tags ist ein Fehler aufgetreten, oder das gewählte Grammatik- beziehungsweise semantische Tag-Format wurde nicht unterstützt.
    > [!NOTE]
    > Dieser Fehler ist nicht mehr Teil der Web Speech API-Spezifikation; das Konzept der Grammatik wurde aus der Web Speech API entfernt. Zugehörige Funktionen sind weiterhin in der Spezifikation enthalten und werden von unterstützenden Browsern aus Gründen der Abwärtskompatibilität noch erkannt, haben aber keine Auswirkungen auf Spracherkennungsdienste.
- `language-not-supported`
  - : Der User Agent unterstützt die Sprache nicht, die in der Eigenschaft [`lang`](/de/docs/Web/API/SpeechRecognition/lang) des Objekts [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) angegeben ist.
    Welche Sprachen unterstützt werden, hängt vom Browser ab.
    Mit der Methode [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static) können Sie vor dem Start der Erkennung prüfen, ob eine Sprache unterstützt wird.
- `network`
  - : Die für den Abschluss der Erkennung erforderliche Netzwerkkommunikation ist fehlgeschlagen.
- `no-speech`
  - : Es wurde keine Sprache erkannt.
- `not-allowed`
  - : Der User Agent hat die Spracheingabe aus Sicherheits- oder Datenschutzgründen oder aufgrund von Benutzereinstellungen nicht zugelassen.
- `phrases-not-supported`
  - : Das Spracherkennungsmodell unterstützt [`phrases`](/de/docs/Web/API/SpeechRecognition/phrases) für die [kontextbezogene Gewichtung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) nicht.
- `service-not-allowed`
  - : Der User Agent hat den angeforderten Spracherkennungsdienst nicht zugelassen, weil er ihn entweder nicht unterstützt oder weil Sicherheits- oder Datenschutzgründe oder Benutzereinstellungen dagegen sprechen. In diesem Fall wäre stattdessen die Verwendung eines anderen, besser geeigneten Spracherkennungsdienstes zulässig.

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
