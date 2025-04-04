---
title: Web Speech API
slug: Web/API/Web_Speech_API
l10n:
  sourceCommit: 9732950dbd369d70d037d0d6a316f8467cd9b5e8
---

{{DefaultAPISidebar("Web Speech API")}}

Die **Web Speech API** ermöglicht es Ihnen, Sprachdaten in Webanwendungen zu integrieren. Die Web Speech API besteht aus zwei Teilen: `SpeechSynthesis` (Text-zu-Sprache) und `SpeechRecognition` (Asynchrone Spracherkennung).

## Web Speech Konzepte und Nutzung

Die Web Speech API ermöglicht es Webanwendungen, Sprachdaten zu verarbeiten. Es gibt zwei Komponenten in dieser API:

- Die Spracherkennung erfolgt über die [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Schnittstelle, die die Fähigkeit bietet, Sprachkontext von einem Audioeingang (normalerweise über den standardmäßigen Spracherkennungsdienst des Geräts) zu erkennen und entsprechend zu reagieren. In der Regel verwenden Sie den Konstruktor der Schnittstelle, um ein neues [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Objekt zu erstellen, das eine Reihe von Ereignishandlern zur Verfügung hat, um zu erkennen, wann Sprache über das Mikrofon des Geräts eingegeben wird. Die [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Schnittstelle repräsentiert einen Container für einen bestimmten Satz von Grammatik, den Ihre App erkennen soll. Die Grammatik wird im [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) definiert.
- Die Sprachsynthese erfolgt über die [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Schnittstelle, eine Text-zu-Sprache-Komponente, die es Programmen ermöglicht, ihren Textinhalt vorzulesen (normalerweise über den standardmäßigen Sprachsynthesizer des Geräts). Verschiedene Stimmtypen werden durch [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte und verschiedene Textteile, die gesprochen werden sollen, durch [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekte repräsentiert. Sie können diese sprechen lassen, indem Sie sie an die [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak)-Methode übergeben.

Weitere Details zur Nutzung dieser Funktionen finden Sie unter [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

## Web Speech API-Schnittstellen

### Spracherkennung

- [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)
  - : Die Steuerungsschnittstelle für den Erkennungsdienst; sie behandelt auch die vom Erkennungsdienst gesendeten [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent).
- [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)
  - : Repräsentiert ein einzelnes Wort, das von dem Spracherkennungsdienst erkannt wurde.
- [`SpeechRecognitionErrorEvent`](/de/docs/Web/API/SpeechRecognitionErrorEvent)
  - : Repräsentiert Fehlermeldungen vom Erkennungsdienst.
- [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent)
  - : Das Ereignisobjekt für die [`result`](/de/docs/Web/API/SpeechRecognition/result_event)- und [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)-Ereignisse und enthält alle Daten, die mit einem vorläufigen oder endgültigen Spracherkennungsergebnis verbunden sind.
- [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)
  - : Die Worte oder Wortmuster, die der Erkennungsdienst erkennen soll.
- [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList)
  - : Repräsentiert eine Liste von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten.
- [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)
  - : Repräsentiert ein einzelnes Erkennungsmuster, das mehrere [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte enthalten kann.
- [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)
  - : Repräsentiert eine Liste von [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekten oder ein einziges, wenn Ergebnisse im [`continuous`](/de/docs/Web/API/SpeechRecognition/continuous)-Modus erfasst werden.

### Sprachsynthese

- [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)
  - : Die Steuerungsschnittstelle für den Sprachdienst; diese kann verwendet werden, um Informationen über die auf dem Gerät verfügbaren Synthesestimmen abzurufen, Sprache zu starten und anzuhalten sowie weitere Befehle auszuführen.
- [`SpeechSynthesisErrorEvent`](/de/docs/Web/API/SpeechSynthesisErrorEvent)
  - : Enthält Informationen über Fehler, die beim Verarbeiten von [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekten im Sprachdienst auftreten.
- [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent)
  - : Enthält Informationen über den aktuellen Zustand von [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekten, die im Sprachdienst verarbeitet wurden.
- [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)
  - : Repräsentiert eine Sprechanforderung. Sie enthält den Inhalt, den der Sprachdienst lesen soll und Informationen darüber, wie er ihn lesen soll (z. B. Sprache, Tonhöhe und Lautstärke).
- [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)
  - : Repräsentiert eine Stimme, die vom System unterstützt wird. Jede `SpeechSynthesisVoice` hat ihren eigenen zugehörigen Sprachdienst, einschließlich Informationen über Sprache, Name und URI.
- [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis)
  - : Spezifiziert als Teil einer `[NoInterfaceObject]`-Schnittstelle namens `SpeechSynthesisGetter` und implementiert vom `Window`-Objekt, bietet die `speechSynthesis`-Eigenschaft Zugriff auf den [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Controller und damit den Einstiegspunkt in die Sprachsynthesefunktionalität.

## Fehler

Für Informationen zu Fehlern, die von der Speech API gemeldet werden (z. B. `"language-not-supported"` und `"language-unavailable"`), siehe die folgende Dokumentation:

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
