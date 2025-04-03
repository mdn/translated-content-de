---
title: Web Speech API
slug: Web/API/Web_Speech_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Web Speech API")}}

Die **Web Speech API** ermöglicht es Ihnen, Sprachdaten in Webanwendungen zu integrieren. Die Web Speech API besteht aus zwei Teilen: `SpeechSynthesis` (Text-to-Speech) und `SpeechRecognition` (Asynchrone Spracherkennung).

## Konzepte und Nutzung der Web Speech

Die Web Speech API ermöglicht es Webanwendungen, Sprachdaten zu verarbeiten. Es gibt zwei Komponenten dieser API:

- Die Spracherkennung erfolgt über das [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Interface, das die Fähigkeit bietet, Sprachkontext von einer Audioeingabe (normalerweise über den standardmäßigen Spracherkennungsdienst des Geräts) zu erkennen und entsprechend zu reagieren. In der Regel verwenden Sie den Konstruktor des Interfaces, um ein neues [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Objekt zu erstellen, welches eine Reihe von Ereignishandlern hat, um zu erkennen, wann Sprache über das Mikrofon des Geräts eingegeben wird. Das [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Interface stellt einen Container für ein bestimmtes Set von Grammatik dar, das Ihre App erkennen sollte. Grammatik wird mit dem [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) definiert.
- Die Sprachsynthese erfolgt über das [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Interface, eine Text-to-Speech-Komponente, die es Programmen erlaubt, ihren Textinhalt vorzulesen (normalerweise über den standardmäßigen Sprachsynthesizer des Geräts). Verschiedene Stimmtypen werden durch [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte repräsentiert, und verschiedene Textteile, die gesprochen werden sollen, durch [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekte. Sie können diese sprechen lassen, indem Sie sie an die Methode [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak) übergeben.

Für weitere Details zur Verwendung dieser Funktionen siehe [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

## Schnittstellen der Web Speech API

### Spracherkennung

- [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)
  - : Das Steuerinterface für den Erkennungsdienst; es behandelt auch das vom Erkennungsdienst gesendete [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent).
- [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)
  - : Repräsentiert ein einzelnes Wort, das vom Spracherkennungsdienst erkannt wurde.
- [`SpeechRecognitionErrorEvent`](/de/docs/Web/API/SpeechRecognitionErrorEvent)
  - : Repräsentiert Fehlermeldungen des Erkennungsdienstes.
- [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent)
  - : Das Ereignisobjekt für die Ereignisse [`result`](/de/docs/Web/API/SpeechRecognition/result_event) und [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event), und enthält alle Daten, die mit einem vorläufigen oder endgültigen Spracherkennungsergebnis verbunden sind.
- [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)
  - : Die Wörter oder Muster von Wörtern, die der Erkennungsdienst erkennen soll.
- [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList)
  - : Repräsentiert eine Liste von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten.
- [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)
  - : Repräsentiert einen einzelnen Erkennungstreffer, der mehrere [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte enthalten kann.
- [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)
  - : Repräsentiert eine Liste von [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekten oder ein einzelnes Objekt, wenn Ergebnisse im [`continuous`](/de/docs/Web/API/SpeechRecognition/continuous)-Modus erfasst werden.

### Sprachsynthese

- [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)
  - : Das Steuerinterface für den Sprachdienst; es kann verwendet werden, um Informationen über die verfügbaren Synthesestimmen auf dem Gerät abzurufen, Sprache zu starten und zu pausieren, und weitere Befehle auszuführen.
- [`SpeechSynthesisErrorEvent`](/de/docs/Web/API/SpeechSynthesisErrorEvent)
  - : Enthält Informationen über Fehler, die beim Verarbeiten von [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekten im Sprachdienst auftreten.
- [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent)
  - : Enthält Informationen über den aktuellen Zustand von [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekten, die im Sprachdienst verarbeitet wurden.
- [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)
  - : Repräsentiert eine Sprechaufforderung. Es enthält den Inhalt, den der Sprachdienst lesen soll, und Informationen darüber, wie er gelesen werden soll (z.B. Sprache, Tonhöhe und Lautstärke).
- [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)
  - : Repräsentiert eine Stimme, die das System unterstützt. Jede `SpeechSynthesisVoice` hat ihren eigenen zugehörigen Sprachdienst einschließlich Informationen über Sprache, Name und URI.
- [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis)
  - : Als Teil einer `[NoInterfaceObject]`-Schnittstelle namens `SpeechSynthesisGetter` spezifiziert und vom `Window`-Objekt implementiert, bietet die `speechSynthesis`-Eigenschaft Zugriff auf den [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Controller und damit den Einstiegspunkt in die Sprachsynthesefunktionalität.

## Fehler

Für Informationen über Fehler, die von der Speech API gemeldet werden (zum Beispiel `"language-not-supported"` und `"language-unavailable"`), sehen Sie die folgende Dokumentation:

- [`error`-Eigenschaft des `SpeechRecognitionErrorEvent`-Objekts](/de/docs/Web/API/SpeechRecognitionErrorEvent/error)
- [`error`-Eigenschaft des `SpeechSynthesisErrorEvent`-Objekts](/de/docs/Web/API/SpeechSynthesisErrorEvent/error)

## Beispiele

Die [Web Speech API Beispiele](https://github.com/mdn/dom-examples/tree/main/web-speech-api) auf GitHub enthalten Demos zur Veranschaulichung der Spracherkennung und -synthese.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [SitePoint-Artikel](https://www.sitepoint.com/talking-web-pages-and-the-speech-synthesis-api/)
- [HTML5Rocks-Artikel](https://developer.chrome.com/blog/web-apps-that-talk-introduction-to-the-speech-synthesis-api/)
