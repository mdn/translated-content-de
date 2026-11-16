---
title: Web Speech API
slug: Web/API/Web_Speech_API
l10n:
  sourceCommit: 25871546e715779a39a2d962820a35e44b6a6df1
---

{{DefaultAPISidebar("Web Speech API")}}

Die **Web Speech API** ermöglicht es Ihnen, Sprachdaten in Web-Apps einzubinden.
Die Web Speech API besteht aus zwei Teilen: `SpeechSynthesis` (Text-to-Speech) und `SpeechRecognition` (asynchrone Spracherkennung).

## Konzepte und Verwendung der Web Speech API

Die Web Speech API ermöglicht es Web-Apps, Sprachdaten zu verarbeiten. Sie hat zwei Komponenten:

- Die Spracherkennung ist über die Schnittstelle [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) zugänglich. Sie kann gesprochene Sprache aus einer Audioquelle erkennen und ermöglicht Ihrer App, entsprechend zu reagieren.
  Im Allgemeinen verwenden Sie den Konstruktor der Schnittstelle, um ein neues [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Objekt zu erstellen. Dieses Objekt stellt mehrere Event-Handler bereit, mit denen sich erkennen lässt, wann Sprache über das Mikrofon des Geräts (oder über eine Audiospur) eingeht.
  Standardmäßig entscheidet der Browser, ob die Erkennung über einen entfernten Dienst oder auf dem Gerät des Benutzers erfolgt. Sie können jedoch festlegen, dass sie [auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) durchgeführt werden muss.
- Die Sprachsynthese ist über die Schnittstelle [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) zugänglich. Diese Text-to-Speech-Komponente ermöglicht es Programmen, ihre Textinhalte vorzulesen (normalerweise über den standardmäßigen Sprachsynthesizer des Geräts). Verschiedene Stimmen werden durch [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte dargestellt; Textabschnitte, die gesprochen werden sollen, durch [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekte.
  Um diese vorlesen zu lassen, übergeben Sie sie an die Methode [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak).

Weitere Informationen zur Verwendung dieser Funktionen finden Sie unter [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

## Schnittstellen der Web Speech API

### Spracherkennung

- [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)
  - : Die Steuerungsschnittstelle für den Erkennungsdienst. Sie verarbeitet auch die vom Erkennungsdienst gesendeten [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent)-Objekte.
- [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)
  - : Stellt eine mögliche Übereinstimmung mit dem dar, was der Benutzer gesagt hat, wie es vom Spracherkennungsdienst erkannt wurde.
- [`SpeechRecognitionErrorEvent`](/de/docs/Web/API/SpeechRecognitionErrorEvent)
  - : Stellt Fehlermeldungen des Erkennungsdienstes dar.
- [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent)
  - : Das Event-Objekt für die Events [`result`](/de/docs/Web/API/SpeechRecognition/result_event) und [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event). Es enthält alle Daten, die mit einem vorläufigen oder endgültigen Spracherkennungsergebnis verbunden sind.
- [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)
  - : Stellt eine Phrase dar, die an die Spracherkennungs-Engine übergeben werden kann, um für die [kontextabhängige Gewichtung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) verwendet zu werden.
- [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)
  - : Stellt ein einzelnes Erkennungsergebnis dar, das mehrere [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte enthalten kann.
- [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)
  - : Stellt eine Sammlung von [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekten dar.
    Wenn sich die Erkennung nicht im Modus [`continuous`](/de/docs/Web/API/SpeechRecognition/continuous) befindet, enthält sie nur ein Ergebnis.

### Sprachsynthese

- [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)
  - : Die Steuerungsschnittstelle für den Sprachsynthesedienst. Mit ihr können Sie Informationen über die auf dem Gerät verfügbaren Stimmen abrufen, die Sprachausgabe starten und pausieren sowie weitere Befehle ausführen.
- [`SpeechSynthesisErrorEvent`](/de/docs/Web/API/SpeechSynthesisErrorEvent)
  - : Enthält Informationen über Fehler, die bei der Verarbeitung von [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekten im Sprachsynthesedienst auftreten.
- [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent)
  - : Enthält Informationen über den aktuellen Zustand von [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekten, die im Sprachsynthesedienst verarbeitet wurden.
- [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)
  - : Stellt eine Anfrage zur Sprachausgabe dar.
    Sie enthält den Inhalt, den der Sprachsynthesedienst vorlesen soll, sowie Informationen darüber, wie er vorgelesen werden soll (z. B. Sprache, Tonhöhe und Lautstärke).
- [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)
  - : Stellt eine Stimme dar, die vom System unterstützt wird.
    Jedes `SpeechSynthesisVoice`-Objekt hat einen eigenen zugehörigen Sprachsynthesedienst mit Informationen über Sprache, Namen und URI.
- [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis)
  - : Gibt das [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Objekt zurück, das den Einstiegspunkt für die Sprachsynthesefunktionen bildet.

### Veraltete Schnittstellen

Das Konzept der Grammatik wurde aus der Web Speech API entfernt. Die zugehörigen Funktionen sind aus Gründen der Abwärtskompatibilität weiterhin in der Spezifikation enthalten und werden von unterstützenden Browsern noch erkannt, haben aber keine Auswirkungen auf Spracherkennungsdienste.

- [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar) {{deprecated_inline}}
  - : Stellt Wörter oder Wortmuster dar, die der Erkennungsdienst erkennen soll.
- [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) {{deprecated_inline}}
  - : Stellt eine Liste von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten dar.

## Fehler

Informationen zu Fehlern, die von der Web Speech API gemeldet werden (z. B. `"language-not-supported"` und `"language-unavailable"`), finden Sie in der folgenden Dokumentation:

- [`error`-Eigenschaft des `SpeechRecognitionErrorEvent`-Objekts](/de/docs/Web/API/SpeechRecognitionErrorEvent/error)
- [`error`-Eigenschaft des `SpeechSynthesisErrorEvent`-Objekts](/de/docs/Web/API/SpeechSynthesisErrorEvent/error)

## Sicherheitsaspekte

Der Zugriff auf die Funktion zur [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) der Web Speech API wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}}-Direktive von {{httpheader("Permissions-Policy")}} gesteuert.

Wenn eine festgelegte Richtlinie die Verwendung blockiert, schlagen Aufrufe der API-Methoden [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static) und [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static) fehl.

## Beispiele

Unsere [Beispiele zur Web Speech API](https://mdn.github.io/dom-examples/web-speech-api/) veranschaulichen Spracherkennung und Sprachsynthese.

Sehen Sie sich auch den [Web Speech API Playground](https://speech.evanliu.com/) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
