---
title: Web Speech API
slug: Web/API/Web_Speech_API
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("Web Speech API")}}

Die **Web Speech API** ermöglicht es Ihnen, Sprachdaten in Web-Apps zu integrieren.
Die Web Speech API besteht aus zwei Teilen: `SpeechSynthesis` (Text-zu-Sprache) und `SpeechRecognition` (Asynchrone Spracherkennung).

## Web Speech Konzepte und Nutzung

Die Web Speech API befähigt Web-Apps, mit Sprachdaten umzugehen.
Es gibt zwei Komponenten in dieser API:

- Spracherkennung wird über die {{domxref("SpeechRecognition")}}-Schnittstelle zugegriffen, die die Fähigkeit bietet, Sprachkontext aus einer Audioeingabe (normalerweise über den standardmäßigen Spracherkennungsdienst des Geräts) zu erkennen und entsprechend zu reagieren.
  Im Allgemeinen verwenden Sie den Konstruktor der Schnittstelle, um ein neues {{domxref("SpeechRecognition")}}-Objekt zu erstellen, das über eine Reihe von Ereignishandlern verfügt, um zu erkennen, wann Sprache über das Mikrofon des Geräts eingegeben wird. Die {{domxref("SpeechGrammar")}}-Schnittstelle repräsentiert einen Container für einen bestimmten Satz von Grammatik, die Ihre App erkennen soll.
  Grammatik wird mit dem [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) definiert.
- Sprachsynthese wird über die {{domxref("SpeechSynthesis")}}-Schnittstelle zugegriffen, eine Text-zu-Sprache-Komponente, die es Programmen ermöglicht, ihre Textinhalte vorlesen zu lassen (normalerweise über den standardmäßigen Sprachsynthesizer des Geräts). Verschiedene Stimmtypen werden durch {{domxref("SpeechSynthesisVoice")}}-Objekte repräsentiert, und verschiedene Teile des Textes, den Sie gesprochen haben möchten, werden durch {{domxref("SpeechSynthesisUtterance")}}-Objekte repräsentiert.
  Sie können diese sprechen lassen, indem Sie sie der {{domxref("SpeechSynthesis.speak()")}}-Methode übergeben.

Für weitere Details zur Nutzung dieser Funktionen siehe [Using the Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

## Web Speech API Schnittstellen

### Spracherkennung

- {{domxref("SpeechRecognition")}}
  - : Die Steuerungsschnittstelle für den Erkennungsdienst; diese verarbeitet auch das vom Erkennungsdienst gesendete {{domxref("SpeechRecognitionEvent")}}.
- {{domxref("SpeechRecognitionAlternative")}}
  - : Repräsentiert ein einzelnes Wort, das vom Spracherkennungsdienst erkannt wurde.
- {{domxref("SpeechRecognitionErrorEvent")}}
  - : Repräsentiert Fehlermeldungen vom Erkennungsdienst.
- {{domxref("SpeechRecognitionEvent")}}
  - : Das Ereignisobjekt für die {{domxref("SpeechRecognition.result_event", "result")}}- und {{domxref("SpeechRecognition.nomatch_event", "nomatch")}}-Ereignisse und enthält alle mit einem vorläufigen oder endgültigen Spracherkennungsergebnis verbundenen Daten.
- {{domxref("SpeechGrammar")}}
  - : Die Wörter oder Wortmuster, die wir möchten, dass der Erkennungsdienst erkennt.
- {{domxref("SpeechGrammarList")}}
  - : Repräsentiert eine Liste von {{domxref("SpeechGrammar")}}-Objekten.
- {{domxref("SpeechRecognitionResult")}}
  - : Repräsentiert eine einzelne Erkennungsübereinstimmung, die mehrere {{domxref("SpeechRecognitionAlternative")}}-Objekte enthalten kann.
- {{domxref("SpeechRecognitionResultList")}}
  - : Repräsentiert eine Liste von {{domxref("SpeechRecognitionResult")}}-Objekten oder ein einzelnes, wenn Ergebnisse im {{domxref("SpeechRecognition.continuous","continuous")}}-Modus erfasst werden.

### Sprachsynthese

- {{domxref("SpeechSynthesis")}}
  - : Die Steuerungsschnittstelle für den Sprachdienst; diese kann verwendet werden, um Informationen zu den auf dem Gerät verfügbaren Synthesestimmen abzurufen, Sprache zu starten und zu pausieren und andere Befehle auszuführen.
- {{domxref("SpeechSynthesisErrorEvent")}}
  - : Enthält Informationen über Fehler, die beim Verarbeiten von {{domxref("SpeechSynthesisUtterance")}}-Objekten im Sprachdienst auftreten.
- {{domxref("SpeechSynthesisEvent")}}
  - : Enthält Informationen über den aktuellen Zustand von {{domxref("SpeechSynthesisUtterance")}}-Objekten, die im Sprachdienst verarbeitet wurden.
- {{domxref("SpeechSynthesisUtterance")}}
  - : Repräsentiert eine Sprachanforderung.
    Es enthält den Inhalt, den der Sprachdienst lesen soll, und Informationen darüber, wie er gelesen werden soll (z.B. Sprache, Tonhöhe und Lautstärke).
- {{domxref("SpeechSynthesisVoice")}}
  - : Repräsentiert eine Stimme, die das System unterstützt.
    Jede `SpeechSynthesisVoice` hat ihren eigenen relativen Sprachdienst, einschließlich Informationen über Sprache, Name und URI.
- {{domxref("Window.speechSynthesis")}}
  - : Spezifiziert als Teil einer `[NoInterfaceObject]`-Schnittstelle namens `SpeechSynthesisGetter` und implementiert durch das `Window`-Objekt, bietet die `speechSynthesis`-Eigenschaft Zugriff auf den {{domxref("SpeechSynthesis")}}-Controller und damit den Einstiegspunkt zur Sprachsynthese-Funktionalität.

## Fehler

Für Informationen zu Fehlern, die von der Speech API gemeldet werden (z.B. `"language-not-supported"` und `"language-unavailable"`), siehe die folgende Dokumentation:

- [`error`-Eigenschaft des `SpeechRecognitionErrorEvent`-Objekts](/de/docs/Web/API/SpeechRecognitionErrorEvent/error)
- [`error`-Eigenschaft des `SpeechSynthesisErrorEvent`-Objekts](/de/docs/Web/API/SpeechSynthesisErrorEvent/error)

## Beispiele

Die [Web Speech API Beispiele](https://github.com/mdn/dom-examples/tree/main/web-speech-api) auf GitHub enthalten Demos zur Veranschaulichung der Spracherkennung und -synthese.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Web Speech API](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [SitePoint-Artikel](https://www.sitepoint.com/talking-web-pages-and-the-speech-synthesis-api/)
- [HTML5Rocks-Artikel](https://developer.chrome.com/blog/web-apps-that-talk-introduction-to-the-speech-synthesis-api/)
