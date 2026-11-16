---
title: SpeechRecognition
slug: Web/API/SpeechRecognition
l10n:
  sourceCommit: 25871546e715779a39a2d962820a35e44b6a6df1
---

{{APIRef("Web Speech API")}}

Die **`SpeechRecognition`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist die Steuerungsschnittstelle für den Spracherkennungsdienst. Sie verarbeitet auch die vom Spracherkennungsdienst gesendeten [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent)-Ereignisse.

> [!NOTE]
> In einigen Browsern verwendet die Spracherkennung standardmäßig eine serverbasierte Erkennungs-Engine.
> Ihre Audiodaten werden zur Verarbeitung an einen Webdienst gesendet. Daher funktioniert die Spracherkennung ohne Internetverbindung nur, wenn Sie mit [`processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally) die [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) vorschreiben.

{{InheritanceDiagram}}

## Konstruktor

- [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)
  - : Erstellt ein neues `SpeechRecognition`-Objekt.

## Instanzeigenschaften

_`SpeechRecognition` erbt außerdem Eigenschaften von seiner übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang)
  - : Gibt die Sprache der aktuellen `SpeechRecognition` zurück und legt sie fest. Wenn kein Wert angegeben ist, wird standardmäßig der Wert des HTML-Attributs [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) verwendet. Ist auch dieses nicht festgelegt, wird die Spracheinstellung des User-Agents verwendet.
- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous)
  - : Steuert, ob bei der Spracherkennung fortlaufend Ergebnisse oder nur ein einzelnes Ergebnis zurückgegeben werden. Standardmäßig wird nur ein einzelnes Ergebnis zurückgegeben (`false`).
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults)
  - : Steuert, ob Zwischenergebnisse zurückgegeben werden sollen (`true`) oder nicht (`false`). Zwischenergebnisse sind noch nicht endgültig (d.h. die Eigenschaft [`SpeechRecognitionResult.isFinal`](/de/docs/Web/API/SpeechRecognitionResult/isFinal) ist `false`).
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives)
  - : Legt die maximale Anzahl von [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekten fest, die pro Ergebnis bereitgestellt werden. Der Standardwert ist 1.
- [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases)
  - : Legt ein Array von [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Objekten fest, die für die [kontextabhängige Gewichtung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) verwendet werden.
- [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally)
  - : Gibt an, ob die Spracherkennung lokal auf dem Gerät des Benutzers durchgeführt werden muss.
- [`SpeechRecognition.unspokenPunctuation`](/de/docs/Web/API/SpeechRecognition/unspokenPunctuation)
  - : Gibt an, ob die Spracherkennungs-Engine anhand der natürlichen Sprechweise des Benutzers Satzzeichen erschließt und einfügt.

### Veraltete Eigenschaften

Das Konzept der Grammatik wurde aus der Web Speech API entfernt. Zugehörige Funktionen sind aus Gründen der Abwärtskompatibilität weiterhin in der Spezifikation enthalten und werden von unterstützenden Browsern noch erkannt, haben aber keine Auswirkungen auf Spracherkennungsdienste.

- [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars)
  - : Repräsentiert eine Sammlung von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten.

## Statische Methoden

- [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static)
  - : Prüft, ob die angegebenen Sprachen für die Spracherkennung verfügbar sind.
- [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static)
  - : Installiert die benötigten Sprachpakete für die Spracherkennung auf dem Gerät in den angegebenen Sprachen.

## Instanzmethoden

_`SpeechRecognition` erbt außerdem Methoden von seiner übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.abort()`](/de/docs/Web/API/SpeechRecognition/abort)
  - : Beendet die Erfassung eingehender Audiodaten durch den Spracherkennungsdienst, ohne zu versuchen, ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) zurückzugeben.
- [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start)
  - : Startet die Erfassung eingehender Audiodaten durch den Spracherkennungsdienst (von einem Mikrofon oder einem Audiotrack).
    Ergebnisse werden über das [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Ereignis bereitgestellt.
- [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop)
  - : Beendet die Erfassung eingehender Audiodaten durch den Spracherkennungsdienst und versucht, auf Grundlage der bisher erfassten Audiodaten ein Ergebnis zurückzugeben.

## Ereignisse

Überwachen Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie der `oneventname`-Eigenschaft dieser Schnittstelle einen Event-Listener zuweisen.

- [`audiostart`](/de/docs/Web/API/SpeechRecognition/audiostart_event)
  - : Wird ausgelöst, wenn der User-Agent mit der Erfassung von Audiodaten begonnen hat.
- [`audioend`](/de/docs/Web/API/SpeechRecognition/audioend_event)
  - : Wird ausgelöst, wenn der User-Agent die Erfassung von Audiodaten abgeschlossen hat.
- [`end`](/de/docs/Web/API/SpeechRecognition/end_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst die Verbindung getrennt hat.
- [`error`](/de/docs/Web/API/SpeechRecognition/error_event)
  - : Wird ausgelöst, wenn bei der Spracherkennung ein Fehler auftritt.
- [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst ein endgültiges Ergebnis zurückgibt, ohne dass eine ausreichend zuverlässige Erkennung stattgefunden hat. Dabei kann ein gewisser Grad an Erkennung vorliegen, der jedoch den [`confidence`](/de/docs/Web/API/SpeechRecognitionAlternative/confidence)-Schwellenwert nicht erreicht oder überschreitet.
- [`result`](/de/docs/Web/API/SpeechRecognition/result_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst ein Ergebnis zurückgibt. Dieses kann endgültig oder vorläufig sein (wenn [`interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults) `true` ist).
- [`soundstart`](/de/docs/Web/API/SpeechRecognition/soundstart_event)
  - : Wird ausgelöst, wenn ein Geräusch erkannt wurde – unabhängig davon, ob es sich um erkennbare Sprache handelt.
- [`soundend`](/de/docs/Web/API/SpeechRecognition/soundend_event)
  - : Wird ausgelöst, wenn kein Geräusch mehr erkannt wird – unabhängig davon, ob es sich um erkennbare Sprache handelt.
- [`speechstart`](/de/docs/Web/API/SpeechRecognition/speechstart_event)
  - : Wird ausgelöst, wenn ein Geräusch erkannt wurde, das der Spracherkennungsdienst als Sprache einstuft.
- [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event)
  - : Wird ausgelöst, wenn keine Sprache mehr erkannt wird, die der Spracherkennungsdienst als solche einstuft.
- [`start`](/de/docs/Web/API/SpeechRecognition/start_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst beginnt, auf zu erkennende Audiodaten zu warten.

## Beispiele

In unserem Beispiel [Sprachgesteuerter Farbwechsler](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) erstellen wir mit dem Konstruktor [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition) eine neue Instanz eines `SpeechRecognition`-Objekts.

Nachdem wir einige weitere Werte definiert haben, richten wir die Anwendung so ein, dass der Spracherkennungsdienst beim Klicken auf eine Schaltfläche startet (siehe [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start)). Wenn eine Äußerung erfolgreich erkannt wurde, wird das [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Ereignis ausgelöst. Wir lesen die ausgesprochene Farbe aus dem Ereignisobjekt aus und setzen anschließend die Hintergrundfarbe des {{htmlelement("html")}}-Elements auf diese Farbe.

```js
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");
const startBtn = document.querySelector("button");

startBtn.onclick = () => {
  recognition.start();
  console.log("Ready to receive a color command.");
};

recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}`;
  bg.style.backgroundColor = color;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
