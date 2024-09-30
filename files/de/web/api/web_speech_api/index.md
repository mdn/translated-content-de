---
title: Web Speech API
slug: Web/API/Web_Speech_API
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("Web Speech API")}}

Die **Web Speech API** ermöglicht es Ihnen, Sprachdaten in Webanwendungen zu integrieren. Die Web Speech API besteht aus zwei Teilen: `SpeechSynthesis` (Text-zu-Sprache) und `SpeechRecognition` (Asynchrone Spracherkennung).

## Konzepte und Verwendung der Web Speech API

Die Web Speech API ermöglicht es Webanwendungen, Sprachdaten zu verarbeiten. Diese API hat zwei Komponenten:

- Die Spracherkennung wird über das [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Interface aufgerufen, das die Fähigkeit bietet, Sprachkontext von einer Audioeingabe (normalerweise über den standardmäßigen Spracherkennungsdienst des Geräts) zu erkennen und entsprechend zu reagieren. In der Regel verwenden Sie den Konstruktor des Interface, um ein neues [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Objekt zu erstellen, welches eine Reihe von Ereignishandlern zur Verfügung hat, um zu erkennen, wann Sprache über das Mikrofon des Geräts eingegeben wird. Das [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Interface repräsentiert einen Container für ein bestimmtes Grammatikset, das Ihre App erkennen soll. Die Grammatik wird im [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) definiert.
- Die Sprachsynthese wird über das [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Interface aufgerufen, eine Text-zu-Sprache-Komponente, die es Programmen ermöglicht, ihren Textinhalt (normalerweise über den standardmäßigen Sprachsynthesizer des Geräts) vorzulesen. Verschiedene Stimmtypen werden durch [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte repräsentiert, und verschiedene Textteile, die Sie gesprochen haben möchten, werden durch [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekte repräsentiert. Diese können durch Übergabe an die Methode [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak) ausgesprochen werden.

Für weitere Details zur Verwendung dieser Funktionen siehe [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

## Schnittstellen der Web Speech API

### Spracherkennung

- [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)
  - : Das Steuerinterface für den Erkennungsdienst; es behandelt auch das [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent), das vom Erkennungsdienst gesendet wird.
- [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)
  - : Repräsentiert ein einzelnes Wort, das vom Spracherkennungsdienst erkannt wurde.
- [`SpeechRecognitionErrorEvent`](/de/docs/Web/API/SpeechRecognitionErrorEvent)
  - : Repräsentiert Fehlermeldungen vom Erkennungsdienst.
- [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent)
  - : Das Ereignisobjekt für die [`result`](/de/docs/Web/API/SpeechRecognition/result_event)- und [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)-Ereignisse und enthält alle Daten, die mit einem vorläufigen oder endgültigen Spracherkennungsergebnis verbunden sind.
- [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)
  - : Die Worte oder Wortmuster, die der Erkennungsdienst erkennen soll.
- [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList)
  - : Repräsentiert eine Liste von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten.
- [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)
  - : Repräsentiert ein einzelnes Erkennungsergebnis, das mehrere [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte enthalten kann.
- [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)
  - : Repräsentiert eine Liste von [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekten oder ein einzelnes, wenn die Ergebnisse im [`continuous`](/de/docs/Web/API/SpeechRecognition/continuous)-Modus erfasst werden.

### Sprachsynthese

- [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)
  - : Das Steuerinterface für den Sprachdienst; kann verwendet werden, um Informationen über die auf dem Gerät verfügbaren Synthesestimmen zu erhalten, Sprache zu starten und zu pausieren, sowie andere Befehle auszuführen.
- [`SpeechSynthesisErrorEvent`](/de/docs/Web/API/SpeechSynthesisErrorEvent)
  - : Enthält Informationen über Fehler, die bei der Verarbeitung von [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekten im Sprachdienst auftreten.
- [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent)
  - : Enthält Informationen über den aktuellen Zustand von [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekten, die im Sprachdienst verarbeitet wurden.
- [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)
  - : Repräsentiert eine Sprachaufforderung.
    Es enthält den Inhalt, den der Sprachdienst aussprechen soll, sowie Informationen darüber, wie er gelesen werden soll (z.B. Sprache, Tonhöhe und Lautstärke).
- [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)
  - : Repräsentiert eine Stimme, die das System unterstützt.
    Jede `SpeechSynthesisVoice` hat ihren eigenen relativen Sprachdienst, einschließlich Informationen über Sprache, Name und URI.
- [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis)
  - : Ausgegeben als Teil eines `[NoInterfaceObject]`-Interfaces namens `SpeechSynthesisGetter` und vom `Window`-Objekt implementiert, bietet die `speechSynthesis`-Eigenschaft Zugriff auf den [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Controller und damit den Einstieg in die Sprachsynthesefunktionalität.

## Fehler

Für Informationen zu Fehlern, die von der Speech API gemeldet werden (z.B. `"language-not-supported"` und `"language-unavailable"`), siehe folgende Dokumentation:

- [`error`-Eigenschaft des `SpeechRecognitionErrorEvent`-Objekts](/de/docs/Web/API/SpeechRecognitionErrorEvent/error)
- [`error`-Eigenschaft des `SpeechSynthesisErrorEvent`-Objekts](/de/docs/Web/API/SpeechSynthesisErrorEvent/error)

## Beispiele

Die [Web Speech API Beispiele](https://github.com/mdn/dom-examples/tree/main/web-speech-api) auf GitHub enthalten Demos zur Veranschaulichung von Spracherkennung und -synthese.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [SitePoint-Artikel](https://www.sitepoint.com/talking-web-pages-and-the-speech-synthesis-api/)
- [HTML5Rocks-Artikel](https://developer.chrome.com/blog/web-apps-that-talk-introduction-to-the-speech-synthesis-api/)
