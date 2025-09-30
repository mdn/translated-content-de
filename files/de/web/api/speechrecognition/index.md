---
title: SpeechRecognition
slug: Web/API/SpeechRecognition
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die **`SpeechRecognition`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist die Steuerungsschnittstelle für den Erkennungsdienst; sie behandelt auch das von dem Erkennungsdienst gesendete [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent).

> [!NOTE]
> In einigen Browsern, wie Chrome, erfordert die Nutzung der Spracherkennung auf einer Webseite eine serverbasierte Erkennungs-Engine. Ihr Audio wird an einen Webdienst zur Erkennung gesendet, daher funktioniert es nicht offline.

{{InheritanceDiagram}}

## Konstruktor

- [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)
  - : Erstellt ein neues `SpeechRecognition`-Objekt.

## Instanz-Eigenschaften

_`SpeechRecognition` erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang)
  - : Gibt die Sprache der aktuellen `SpeechRecognition` zurück und setzt sie. Wenn nicht angegeben, wird standardmäßig der Wert des HTML-Attributes [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) verwendet, oder die Spracheinstellung des Benutzeragenten, falls das auch nicht festgelegt ist.
- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous)
  - : Steuert, ob kontinuierliche Ergebnisse für jede Erkennung zurückgegeben werden oder nur ein einzelnes Ergebnis. Standardmäßig auf ein einziges Ergebnis (`false`).
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults)
  - : Steuert, ob Zwischenergebnisse zurückgegeben werden sollen (`true`) oder nicht (`false`). Zwischenergebnisse sind Ergebnisse, die noch nicht endgültig sind (z.B. ist die Eigenschaft [`SpeechRecognitionResult.isFinal`](/de/docs/Web/API/SpeechRecognitionResult/isFinal) `false`).
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives)
  - : Setzt die maximale Anzahl von [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)s, die pro Ergebnis bereitgestellt werden. Der Standardwert ist 1.
- [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases)
  - : Legt ein Array von [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Objekten fest, die für die [kontextuelle Bevorzugung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) verwendet werden.
- [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally)
  - : Gibt an, ob die Spracherkennung lokal auf dem Gerät des Benutzers durchgeführt werden muss.

### Veraltete Eigenschaften

Das Konzept der Grammatik wurde aus der Web Speech API entfernt. Verwandte Funktionen bleiben in der Spezifikation und werden weiterhin von unterstützenden Browsern für die Rückwärtskompatibilität erkannt, haben jedoch keinen Einfluss auf die Spracherkennungsdienste.

- [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars) {{deprecated_inline}}
  - : Gibt eine Sammlung von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten zurück und setzt sie, die die von der aktuellen `SpeechRecognition` verstandenen Grammatiken darstellen.

## Statische Methoden

- [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static)
  - : Prüft, ob die angegebenen Sprachen für die Spracherkennung verfügbar sind.
- [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static)
  - : Installiert die erforderlichen Sprachpakete für die geräteinterne Spracherkennung in den angegebenen Sprachen.

## Instanz-Methoden

_`SpeechRecognition` erbt auch Methoden von seiner übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.abort()`](/de/docs/Web/API/SpeechRecognition/abort)
  - : Stoppt den Spracherkennungsdienst vom Empfangen eingehender Audiodaten und versucht nicht, ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) zu liefern.
- [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start)
  - : Startet den Spracherkennungsdienst, um eingehende Audiodaten (von einem Mikrofon oder einer Audiospur) zu hören und liefert die Ergebnisse dieser Erkennung.
- [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop)
  - : Stoppt den Spracherkennungsdienst vom Hören auf eingehende Audiodaten und versucht, ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) basierend auf den bisher erfassten Ergebnissen zu liefern.

## Ereignisse

Hören Sie auf diese Ereignisse unter Verwendung von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener auf die `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`audiostart`](/de/docs/Web/API/SpeechRecognition/audiostart_event)
  - : Wird ausgelöst, wenn der Benutzeragent begonnen hat, Audio aufzunehmen.
- [`audioend`](/de/docs/Web/API/SpeechRecognition/audioend_event)
  - : Wird ausgelöst, wenn der Benutzeragent die Audioaufnahme beendet hat.
- [`end`](/de/docs/Web/API/SpeechRecognition/end_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst die Verbindung getrennt hat.
- [`error`](/de/docs/Web/API/SpeechRecognition/error_event)
  - : Wird ausgelöst, wenn ein Spracherkennungsfehler auftritt.
- [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst ein endgültiges Ergebnis ohne signifikante Erkennung liefert. Dies kann eine gewisse Erkennung umfassen, die die [`confidence`](/de/docs/Web/API/SpeechRecognitionAlternative/confidence)-Schwelle nicht erreicht oder überschreitet.
- [`result`](/de/docs/Web/API/SpeechRecognition/result_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst ein Ergebnis liefert – ein Wort oder eine Phrase wurde positiv erkannt und dies wurde an die Anwendung kommuniziert.
- [`soundstart`](/de/docs/Web/API/SpeechRecognition/soundstart_event)
  - : Wird ausgelöst, wenn ein beliebiger Klang – erkennbarer Sprachklang oder nicht – erkannt wurde.
- [`soundend`](/de/docs/Web/API/SpeechRecognition/soundend_event)
  - : Wird ausgelöst, wenn ein beliebiger Klang – erkennbarer Sprachklang oder nicht – nicht mehr erkannt wird.
- [`speechstart`](/de/docs/Web/API/SpeechRecognition/speechstart_event)
  - : Wird ausgelöst, wenn ein Klang erkannt wird, der vom Spracherkennungsdienst als Sprache erkannt wird.
- [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event)
  - : Wird ausgelöst, wenn erkannte Sprache vom Spracherkennungsdienst nicht mehr erkannt wird.
- [`start`](/de/docs/Web/API/SpeechRecognition/start_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst beginnt, nach Audio zu lauschen, um es zu erkennen.

## Beispiele

In unserem [Speech color changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer)-Beispiel erstellen wir eine neue `SpeechRecognition`-Objektinstanz mit dem [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)-Konstruktor.

Nachdem einige andere Werte definiert wurden, stellen wir ein, dass der Erkennungsdienst startet, wenn ein Button geklickt wird (siehe [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start)). Wenn ein Ergebnis erfolgreich erkannt wurde, wird das [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Ereignis ausgelöst, wir extrahieren die ausgesprochene Farbe aus dem Ereignisobjekt und setzen dann die Hintergrundfarbe des {{htmlelement("html")}}-Elements auf diese Farbe.

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
