---
title: Web Speech API
slug: Web/API/Web_Speech_API
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("Web Speech API")}}

Die **Web Speech API** ermöglicht es Ihnen, Sprachdaten in Webanwendungen zu integrieren. Die Web Speech API besteht aus zwei Teilen: `SpeechSynthesis` (Text-zu-Sprache) und `SpeechRecognition` (asynchrone Spracherkennung).

## Web Speech Konzepte und Nutzung

Die Web Speech API befähigt Webanwendungen, Sprachdaten zu verarbeiten. Diese API besteht aus zwei Komponenten:

- Die Spracherkennung wird über das [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) Interface aufgerufen, das die Fähigkeit bietet, Sprachkontext aus einem Audioeingang (normalerweise über den Standard-Spracherkennungsdienst des Geräts) zu erkennen und entsprechend zu reagieren. In der Regel verwenden Sie den Konstruktor des Interfaces, um ein neues [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) Objekt zu erstellen, das eine Reihe von Ereignishandlern zur Verfügung hat, um zu erkennen, wann Sprache über das Mikrofon des Geräts eingegeben wird. Das [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar) Interface repräsentiert einen Container für eine bestimmte Grammatik, die Ihre App erkennen soll. Die Grammatik wird im [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) definiert.
- Die Sprachsynthese wird über das [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) Interface aufgerufen, eine Text-zu-Sprache Komponente, die es Programmen ermöglicht, ihren Textinhalt vorzulesen (normalerweise über den Standard-Sprachsynthesizer des Geräts). Verschiedene Stimmtypen werden durch [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice) Objekte repräsentiert, und verschiedene Textteile, die gesprochen werden sollen, durch [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) Objekte. Diese können durch die Methode [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak) gesprochen werden.

Für weitere Details zur Nutzung dieser Funktionen siehe [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

## Web Speech API Schnittstellen

### Spracherkennung

- [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)
  - : Die Steuerungsschnittstelle für den Erkennungsdienst; behandelt auch die [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent) Ereignisse, die vom Erkennungsdienst gesendet werden.
- [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)
  - : Repräsentiert ein einzelnes Wort, das vom Spracherkennungsdienst erkannt wurde.
- [`SpeechRecognitionErrorEvent`](/de/docs/Web/API/SpeechRecognitionErrorEvent)
  - : Repräsentiert Fehlermeldungen des Erkennungsdienstes.
- [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent)
  - : Das Ereignisobjekt für die [`result`](/de/docs/Web/API/SpeechRecognition/result_event) und [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event) Ereignisse und enthält alle mit einem vorläufigen oder endgültigen Spracherkennungsergebnis verbundenen Daten.
- [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)
  - : Die Worte oder Wortmuster, die der Erkennungsdienst erkennen soll.
- [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList)
  - : Repräsentiert eine Liste von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar) Objekten.
- [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)
  - : Repräsentiert ein einzelnes Erkennungsergebnis, das mehrere [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative) Objekte enthalten kann.
- [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)
  - : Repräsentiert eine Liste von [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) Objekten oder ein einzelnes, wenn Ergebnisse im [`continuous`](/de/docs/Web/API/SpeechRecognition/continuous) Modus erfasst werden.

### Sprachsynthese

- [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)
  - : Die Steuerungsschnittstelle für den Sprachdienst; kann verwendet werden, um Informationen über die auf dem Gerät verfügbaren Synthesestimmen abzurufen, Sprache zu starten und zu pausieren und andere Befehle auszuführen.
- [`SpeechSynthesisErrorEvent`](/de/docs/Web/API/SpeechSynthesisErrorEvent)
  - : Enthält Informationen über Fehler, die bei der Verarbeitung von [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) Objekten im Sprachdienst auftreten.
- [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent)
  - : Enthält Informationen über den aktuellen Zustand von [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) Objekten, die im Sprachdienst verarbeitet wurden.
- [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)
  - : Repräsentiert eine Sprachaufforderung. Es enthält den Inhalt, den der Sprachdienst vorlesen soll, und Informationen darüber, wie es gelesen werden soll (z.B. Sprache, Tonhöhe und Lautstärke).
- [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)
  - : Repräsentiert eine Stimme, die das System unterstützt. Jede `SpeechSynthesisVoice` hat ihren eigenen relativen Sprachdienst mit Informationen zur Sprache, Name und URI.
- [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis)
  - : Wird als Teil der `[NoInterfaceObject]` Schnittstelle `SpeechSynthesisGetter` spezifiziert und vom `Window` Objekt implementiert, die `speechSynthesis` Eigenschaft bietet Zugriff auf den [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) Controller und somit den Einstiegspunkt zu Sprachsynthesefunktionen.

## Fehler

Informationen zu Fehlern, die von der Speech API gemeldet werden (z.B. `"language-not-supported"` und `"language-unavailable"`), finden Sie in der folgenden Dokumentation:

- [`error` Eigenschaft des `SpeechRecognitionErrorEvent` Objekts](/de/docs/Web/API/SpeechRecognitionErrorEvent/error)
- [`error` Eigenschaft des `SpeechSynthesisErrorEvent` Objekts](/de/docs/Web/API/SpeechSynthesisErrorEvent/error)

## Beispiele

Die [Beispiele zur Web Speech API](https://github.com/mdn/dom-examples/tree/main/web-speech-api) auf GitHub enthalten Demos zur Veranschaulichung der Spracherkennung und -synthese.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [SitePoint Artikel](https://www.sitepoint.com/talking-web-pages-and-the-speech-synthesis-api/)
- [HTML5Rocks Artikel](https://developer.chrome.com/blog/web-apps-that-talk-introduction-to-the-speech-synthesis-api/)
