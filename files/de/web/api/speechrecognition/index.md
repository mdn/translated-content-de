---
title: SpeechRecognition
slug: Web/API/SpeechRecognition
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Web Speech API")}}

Die **`SpeechRecognition`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist die Steuerungsschnittstelle für den Spracherkennungsdienst. Sie verarbeitet auch die vom Spracherkennungsdienst gesendeten [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent)-Ereignisse.

> [!NOTE]
> In einigen Browsern, etwa Chrome, wird bei der Spracherkennung auf einer Webseite ein serverbasierter Spracherkennungsdienst verwendet. Ihre Audiodaten werden zur Verarbeitung an einen Webdienst gesendet. Daher funktioniert die Spracherkennung nicht offline.

{{InheritanceDiagram}}

## Konstruktor

- [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)
  - : Erstellt ein neues `SpeechRecognition`-Objekt.

## Instanzeigenschaften

_`SpeechRecognition` erbt außerdem Eigenschaften von seiner übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang)
  - : Gibt die Sprache der aktuellen `SpeechRecognition` zurück und legt sie fest. Wenn sie nicht angegeben ist, wird standardmäßig der Wert des HTML-Attributs [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) verwendet. Ist auch dieses nicht festgelegt, wird die Spracheinstellung des User-Agents verwendet.
- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous)
  - : Steuert, ob für jede Spracherkennung fortlaufend Ergebnisse oder nur ein einzelnes Ergebnis zurückgegeben werden. Standardmäßig wird ein einzelnes Ergebnis zurückgegeben (`false`).
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults)
  - : Steuert, ob vorläufige Ergebnisse zurückgegeben werden sollen (`true`) oder nicht (`false`). Vorläufige Ergebnisse sind noch nicht endgültig (beispielsweise ist die Eigenschaft [`SpeechRecognitionResult.isFinal`](/de/docs/Web/API/SpeechRecognitionResult/isFinal) `false`).
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives)
  - : Legt die maximale Anzahl von [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekten fest, die pro Ergebnis bereitgestellt werden. Der Standardwert ist 1.
- [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases)
  - : Legt ein Array von [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Objekten fest, die zur [kontextbezogenen Gewichtung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) verwendet werden.
- [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally)
  - : Gibt an, ob die Spracherkennung lokal auf dem Gerät des Benutzers erfolgen muss.
- [`SpeechRecognition.unspokenPunctuation`](/de/docs/Web/API/SpeechRecognition/unspokenPunctuation)
  - : Gibt an, ob die Spracherkennungs-Engine Satzzeichen anhand der natürlichen Sprechmuster des Benutzers erschließt und einfügt.

### Veraltete Eigenschaften

Das Konzept der Grammatik wurde aus der Web Speech API entfernt. Zugehörige Funktionen sind weiterhin in der Spezifikation enthalten und werden von unterstützenden Browsern aus Gründen der Abwärtskompatibilität noch erkannt, haben aber keine Auswirkungen auf Spracherkennungsdienste.

- [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars)
  - : Gibt eine Sammlung von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten zurück, die die von der aktuellen `SpeechRecognition` verstandenen Grammatiken darstellen, und legt diese Sammlung fest.

## Statische Methoden

- [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static)
  - : Prüft, ob die angegebenen Sprachen für die Spracherkennung verfügbar sind.
- [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static)
  - : Installiert die erforderlichen Sprachpakete für die Spracherkennung auf dem Gerät in den angegebenen Sprachen.

## Instanzmethoden

_`SpeechRecognition` erbt außerdem Methoden von seiner übergeordneten Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.abort()`](/de/docs/Web/API/SpeechRecognition/abort)
  - : Beendet die Erfassung eingehender Audiodaten durch den Spracherkennungsdienst, ohne zu versuchen, ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) zurückzugeben.
- [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start)
  - : Startet den Spracherkennungsdienst, damit er eingehende Audiodaten (von einem Mikrofon oder einem Audiotrack) erfasst und die Ergebnisse der Erkennung zurückgibt.
- [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop)
  - : Beendet die Erfassung eingehender Audiodaten durch den Spracherkennungsdienst und versucht, auf Grundlage der bis dahin erfassten Daten ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) zurückzugeben.

## Ereignisse

Sie können diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwachen oder der Eigenschaft `oneventname` dieser Schnittstelle einen Event-Listener zuweisen.

- [`audiostart`](/de/docs/Web/API/SpeechRecognition/audiostart_event)
  - : Wird ausgelöst, wenn der User-Agent mit der Audioerfassung begonnen hat.
- [`audioend`](/de/docs/Web/API/SpeechRecognition/audioend_event)
  - : Wird ausgelöst, wenn der User-Agent die Audioerfassung beendet hat.
- [`end`](/de/docs/Web/API/SpeechRecognition/end_event)
  - : Wird ausgelöst, wenn die Verbindung zum Spracherkennungsdienst getrennt wurde.
- [`error`](/de/docs/Web/API/SpeechRecognition/error_event)
  - : Wird ausgelöst, wenn bei der Spracherkennung ein Fehler auftritt.
- [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst ein endgültiges Ergebnis ohne hinreichende Erkennung zurückgibt. Dabei kann ein gewisser Grad an Erkennung vorliegen, der den Schwellenwert für [`confidence`](/de/docs/Web/API/SpeechRecognitionAlternative/confidence) jedoch nicht erreicht oder überschreitet.
- [`result`](/de/docs/Web/API/SpeechRecognition/result_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst ein Ergebnis zurückgibt: Ein Wort oder eine Phrase wurde eindeutig erkannt und das Ergebnis an die Anwendung übermittelt.
- [`soundstart`](/de/docs/Web/API/SpeechRecognition/soundstart_event)
  - : Wird ausgelöst, wenn ein beliebiges Geräusch erkannt wurde – unabhängig davon, ob es sich um erkennbare Sprache handelt.
- [`soundend`](/de/docs/Web/API/SpeechRecognition/soundend_event)
  - : Wird ausgelöst, wenn kein Geräusch mehr erkannt wird – unabhängig davon, ob es sich um erkennbare Sprache handelte.
- [`speechstart`](/de/docs/Web/API/SpeechRecognition/speechstart_event)
  - : Wird ausgelöst, wenn ein Geräusch erkannt wurde, das der Spracherkennungsdienst als Sprache identifiziert.
- [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event)
  - : Wird ausgelöst, wenn keine Sprache mehr erkannt wird.
- [`start`](/de/docs/Web/API/SpeechRecognition/start_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst beginnt, auf zu erkennende Audiodaten zu warten.

## Beispiele

In unserem Beispiel zum [Ändern der Farbe per Sprache](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) erstellen wir mit dem Konstruktor [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition) eine neue `SpeechRecognition`-Objektinstanz.

Nachdem einige weitere Werte definiert wurden, legen wir fest, dass der Spracherkennungsdienst beim Klicken auf eine Schaltfläche startet (siehe [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start)). Wenn ein Ergebnis erfolgreich erkannt wurde, wird das Ereignis [`result`](/de/docs/Web/API/SpeechRecognition/result_event) ausgelöst. Wir lesen dann die gesprochene Farbe aus dem Ereignisobjekt aus und setzen die Hintergrundfarbe des {{htmlelement("html")}}-Elements auf diese Farbe.

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
