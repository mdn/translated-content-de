---
title: Web Speech API
slug: Web/API/Web_Speech_API
l10n:
  sourceCommit: 57a80c7a6d2174d77234cb58f536a40dd0803c4a
---

{{DefaultAPISidebar("Web Speech API")}}

Die **Web Speech API** ermöglicht die Integration von Sprachdaten in Webanwendungen. Die Web Speech API besteht aus zwei Teilen: `SpeechSynthesis` (Text-zu-Sprache) und `SpeechRecognition` (Asynchrone Spracherkennung).

## Konzepte und Nutzung der Web Speech API

Die Web Speech API ermöglicht es Webanwendungen, Sprachdaten zu verarbeiten. Sie hat zwei Komponenten:

- Die Spracherkennung wird über das [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Interface aufgerufen, das die Fähigkeit bietet, Sprachkontext aus einer Audioquelle zu erkennen und es Ihrer Anwendung ermöglicht, entsprechend zu reagieren.
  Im Allgemeinen verwenden Sie den Konstruktor des Interfaces, um ein neues [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Objekt zu erstellen. Dieses Objekt bietet mehrere Ereignis-Handler, um zu erkennen, wann Sprache vom Mikrofon des Geräts (oder von einem Audiotrack) eingeht.
  Sie können angeben, ob Sie möchten, dass die Spracherkennung einen vom Benutzer bereitgestellten Dienst nutzt (Standard) oder [lokal im Browser](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) durchgeführt wird.
- Die Sprachsynthese wird über das [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Interface aufgerufen, eine Text-zu-Sprache-Komponente, die es Programmen ermöglicht, ihre Textinhalte (normalerweise über den Standardsprache-Synthesizer des Geräts) vorzulesen. Verschiedene Stimmtypen werden durch [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte repräsentiert, und verschiedene Textteile, die gesprochen werden sollen, werden durch [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekte dargestellt.
  Sie können diese durch Übergabe an die [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak)-Methode sprechen lassen.

Für weitere Details zur Nutzung dieser Funktionen, siehe [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

## Interfaces der Web Speech API

### Spracherkennung

- [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)
  - : Das Steuerungsinterface für den Erkennungsdienst; es verwaltet auch das [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent), das vom Erkennungsdienst gesendet wird.
- [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)
  - : Repräsentiert ein einzelnes Wort, das vom Spracherkennungsdienst erkannt wurde.
- [`SpeechRecognitionErrorEvent`](/de/docs/Web/API/SpeechRecognitionErrorEvent)
  - : Repräsentiert Fehlermeldungen des Erkennungsdienstes.
- [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent)
  - : Das Ereignisobjekt für die [`result`](/de/docs/Web/API/SpeechRecognition/result_event) und [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)-Ereignisse und enthält alle Daten, die mit einem vorläufigen oder endgültigen Spracherkennungsergebnis verbunden sind.
- [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)
  - : Repräsentiert eine Phrase, die in die Spracherkennungs-Engine eingegeben werden kann, um [kontextbezogene Bevorzugung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) zu verwenden.
- [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)
  - : Repräsentiert ein einzelnes Erkennungsergebnis, das mehrere [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte enthalten kann.
- [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)
  - : Repräsentiert eine Liste von [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekten oder ein einzelnes, wenn die Ergebnisse im [`continuous`](/de/docs/Web/API/SpeechRecognition/continuous)-Modus erfasst werden.

### Sprachsynthese

- [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)
  - : Das Steuerungsinterface für den Sprachdienst; dies kann verwendet werden, um Informationen über die auf dem Gerät verfügbaren Synthesestimmen abzurufen, Sprache zu starten und zu pausieren sowie andere Befehle auszuführen.
- [`SpeechSynthesisErrorEvent`](/de/docs/Web/API/SpeechSynthesisErrorEvent)
  - : Enthält Informationen über Fehler, die bei der Verarbeitung von [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekten im Sprachdienst auftreten.
- [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent)
  - : Enthält Informationen über den aktuellen Status von [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekten, die im Sprachdienst verarbeitet wurden.
- [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)
  - : Repräsentiert eine Sprachanforderung. Es enthält den Inhalt, den der Sprachdienst lesen soll, und Informationen darüber, wie es gelesen werden soll (z. B. Sprache, Tonhöhe und Lautstärke).
- [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)
  - : Repräsentiert eine Stimme, die das System unterstützt. Jede `SpeechSynthesisVoice` hat ihren eigenen relativen Sprachdienst einschließlich Informationen über Sprache, Name und URI.
- [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis)
  - : Wird als Teil eines `[NoInterfaceObject]`-Interfaces namens `SpeechSynthesisGetter` spezifiziert und vom `Window`-Objekt implementiert. Die `speechSynthesis`-Eigenschaft bietet Zugriff auf den [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Controller und somit den Einstiegspunkt für die Sprachsynthesefunktionalität.

### Veraltete Interfaces

Das Konzept der Grammatik wurde aus der Web Speech API entfernt. Verwandte Funktionen bleiben in der Spezifikation und werden weiterhin von unterstützenden Browsern für die Rückwärtskompatibilität erkannt, haben aber keinen Einfluss auf die Spracherkennungsdienste.

- [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar) {{deprecated_inline}}
  - : Repräsentiert Wörter oder Wortmuster, die der Erkennungsdienst erkennen soll.
- [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) {{deprecated_inline}}
  - : Repräsentiert eine Liste von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten.

## Fehler

Für Informationen zu Fehlern, die von der Speech API gemeldet werden (z. B. `"language-not-supported"` und `"language-unavailable"`), sehen Sie sich die folgende Dokumentation an:

- [`error` property des `SpeechRecognitionErrorEvent`-Objekts](/de/docs/Web/API/SpeechRecognitionErrorEvent/error)
- [`error` property des `SpeechSynthesisErrorEvent`-Objekts](/de/docs/Web/API/SpeechSynthesisErrorEvent/error)

## Sicherheitserwägungen

Der Zugriff auf die [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition)-Funktionalität der Web Speech API wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}}-Direktive kontrolliert.

Insbesondere wenn eine definierte Richtlinie die Nutzung blockiert, werden alle Versuche, die [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static) oder [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static)-Methoden der API aufzurufen, fehlschlagen.

## Beispiele

Unsere [Web Speech API Beispiele](https://mdn.github.io/dom-examples/web-speech-api/) veranschaulichen Spracherkennung und -synthese.

Sehen Sie sich auch den [Web Speech API Playground](https://speech.evanliu.com/) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
