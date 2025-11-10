---
title: Web Speech API
slug: Web/API/Web_Speech_API
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{DefaultAPISidebar("Web Speech API")}}

Die **Web Speech API** ermöglicht es Ihnen, Sprachdaten in Webanwendungen zu integrieren. Die Web Speech API besteht aus zwei Teilen: `SpeechSynthesis` (Text-zu-Sprache) und `SpeechRecognition` (Asynchrone Spracherkennung).

## Web-Sprachkonzepte und Verwendung

Die Web Speech API ermöglicht es Webanwendungen, Sprachdaten zu verarbeiten. Sie hat zwei Komponenten:

- Spracherkennung wird über das [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Interface zugegriffen, das die Fähigkeit bietet, Sprachkontext aus einer Audioquelle zu erkennen und es Ihrer App ermöglicht, angemessen zu reagieren.
  In der Regel verwenden Sie den Konstruktor des Interfaces, um ein neues [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Objekt zu erstellen. Dieses Objekt bietet eine Anzahl von Ereignis-Handlern, um zu erkennen, wann Sprache von dem Mikrofon des Geräts (oder von einer Audiospur) eingehend ist.
  Sie können angeben, ob die Spracherkennung einen vom Nutzer bereitgestellten Dienst (Standard) verwenden oder [lokal im Browser ausgeführt werden](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) soll.
- Sprachsynthese wird über das [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Interface zugegriffen, eine Text-zu-Sprache-Komponente, die es Programmen ermöglicht, ihren Textinhalt zu lesen (normalerweise über den Standard-Sprachsynthesizer des Geräts). Verschiedene Stimmtypen werden durch [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte repräsentiert, und verschiedene Textabschnitte, die gesprochen werden sollen, werden durch [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekte repräsentiert.
  Sie können diese sprechen lassen, indem Sie sie an die [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak)-Methode übergeben.

Weitere Details zur Nutzung dieser Funktionen finden Sie unter [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

## Schnittstellen der Web Speech API

### Spracherkennung

- [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)
  - : Das Kontroll-Interface für den Erkennungsdienst; dieses behandelt auch das [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent), das vom Erkennungsdienst gesendet wird.
- [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)
  - : Repräsentiert ein einzelnes, vom Spracherkennungsdienst erkanntes Wort.
- [`SpeechRecognitionErrorEvent`](/de/docs/Web/API/SpeechRecognitionErrorEvent)
  - : Repräsentiert Fehlermeldungen vom Erkennungsdienst.
- [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent)
  - : Das Ereignisobjekt für die [`result`](/de/docs/Web/API/SpeechRecognition/result_event)- und [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)-Ereignisse und enthält alle Daten, die mit einem vorläufigen oder endgültigen Spracherkennungsergebnis verbunden sind.
- [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)
  - : Repräsentiert einen Satz, der in die Spracherkennungsmotor zur [kontextabhängigen Bevorzugung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) eingefügt werden kann.
- [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)
  - : Repräsentiert ein einzelnes Erkennungsergebnis, das möglicherweise mehrere [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte enthält.
- [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)
  - : Repräsentiert eine Liste von [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekten oder ein einzelnes, wenn Ergebnisse im [`continuous`](/de/docs/Web/API/SpeechRecognition/continuous)-Modus erfasst werden.

### Sprachsynthese

- [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)
  - : Das Kontroll-Interface für den Sprachdienst; dieses kann verwendet werden, um Informationen über die auf dem Gerät verfügbaren Synthesestimmen abzurufen, Sprache zu starten und zu pausieren und andere Befehle nebenbei auszuführen.
- [`SpeechSynthesisErrorEvent`](/de/docs/Web/API/SpeechSynthesisErrorEvent)
  - : Enthält Informationen über Fehler, die bei der Verarbeitung von [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekten im Sprachdienst auftreten.
- [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent)
  - : Enthält Informationen über den aktuellen Zustand der in den Sprachdienst verarbeiteten [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekte.
- [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)
  - : Repräsentiert eine Sprachanforderung.
    Es enthält den Inhalt, den der Sprachdienst lesen soll, sowie Informationen darüber, wie er gelesen werden soll (z. B. Sprache, Tonhöhe und Lautstärke).
- [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)
  - : Repräsentiert eine Stimme, die das System unterstützt.
    Jede `SpeechSynthesisVoice` hat ihren eigenen relativen Sprachdienst, einschließlich Informationen über Sprache, Name und URI.
- [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis)
  - : Spezifiert als Teil eines `[NoInterfaceObject]`-Interfaces namens `SpeechSynthesisGetter`, und implementiert vom `Window`-Objekt, bietet die `speechSynthesis`-Eigenschaft Zugriff auf den [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Controller und somit den Einstiegspunkt in die Sprachsynthesefunktionalität.

### Veraltete Schnittstellen

Das Konzept der Grammatik wurde aus der Web Speech API entfernt. Verwandte Funktionen bleiben in der Spezifikation und werden von unterstützenden Browsern aus Gründen der Rückwärtskompatibilität weiterhin erkannt, haben jedoch keinen Einfluss auf Spracherkennungsdienste.

- [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar) {{deprecated_inline}}
  - : Repräsentiert Wörter oder Muster von Wörtern, die der Erkennungsdienst erkennen soll.
- [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) {{deprecated_inline}}
  - : Repräsentiert eine Liste von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten.

## Fehler

Für Informationen über Fehler, die von der Speech API gemeldet werden (zum Beispiel `"language-not-supported"` und `"language-unavailable"`), siehe die folgende Dokumentation:

- [`error`-Eigenschaft des `SpeechRecognitionErrorEvent`-Objekts](/de/docs/Web/API/SpeechRecognitionErrorEvent/error)
- [`error`-Eigenschaft des `SpeechSynthesisErrorEvent`-Objekts](/de/docs/Web/API/SpeechSynthesisErrorEvent/error)

## Sicherheitsüberlegungen

Der Zugriff auf die [lokale Spracherkennung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition)-Funktionalität der Web Speech API wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}}- und {{httpheader("Permissions-Policy")}}-Direktive kontrolliert.

Insbesondere wo eine definierte Richtlinie die Nutzung blockiert, werden alle Versuche, die Methoden [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static) oder [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static) der API aufzurufen, fehlschlagen.

## Beispiele

Unsere [Beispiele der Web Speech API](https://mdn.github.io/dom-examples/web-speech-api/) veranschaulichen Spracherkennung und -synthese.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
