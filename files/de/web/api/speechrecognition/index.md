---
title: SpeechRecognition
slug: Web/API/SpeechRecognition
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("Web Speech API")}}

Das **`SpeechRecognition`**-Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist das Kontrollinterface für den Erkennungsdienst; es behandelt auch das [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent), das vom Erkennungsdienst gesendet wird.

> [!NOTE]
> In einigen Browsern, wie Chrome, erfordert die Nutzung der Spracherkennung auf einer Webseite eine serverbasierte Erkennungs-Engine. Ihr Audio wird an einen Webdienst zur Erkennungsverarbeitung gesendet, sodass es offline nicht funktioniert.

{{InheritanceDiagram}}

## Konstruktor

- [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)
  - : Erstellt ein neues `SpeechRecognition`-Objekt.

## Instanz-Eigenschaften

_`SpeechRecognition` erbt auch Eigenschaften von seinem Elterninterface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang)
  - : Gibt die Sprache der aktuellen `SpeechRecognition` zurück und setzt sie. Wenn nicht angegeben, wird standardmäßig der HTML-Attributwert [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) oder die Spracheinstellung des User-Agents verwendet, sofern dieser nicht festgelegt ist.
- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous)
  - : Steuert, ob kontinuierliche Ergebnisse für jede Erkennung zurückgegeben werden oder nur ein einzelnes Ergebnis. Standardmäßig ist es auf ein einzelnes Ergebnis (`false`) festgelegt.
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults)
  - : Steuert, ob vorläufige Ergebnisse zurückgegeben werden sollen (`true`) oder nicht (`false`). Vorläufige Ergebnisse sind Ergebnisse, die noch nicht endgültig sind (z.B. ist die Eigenschaft [`SpeechRecognitionResult.isFinal`](/de/docs/Web/API/SpeechRecognitionResult/isFinal) `false`).
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives)
  - : Legt die maximale Anzahl von [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)s pro Ergebnis fest. Der Standardwert ist 1.
- [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases) {{experimental_inline}}
  - : Legt ein Array von [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Objekten fest, die für [kontextuelles Biasing](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) verwendet werden.
- [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally) {{experimental_inline}}
  - : Gibt an, ob die Spracherkennung lokal auf dem Gerät des Benutzers durchgeführt werden muss.

### Veraltete Eigenschaften

Das Konzept der Grammatik wurde aus der Web Speech API entfernt. Verwandte Funktionen bleiben in der Spezifikation und werden von unterstützenden Browsern weiterhin für die Abwärtskompatibilität erkannt, haben jedoch keinen Einfluss auf die Spracherkennungsdienste.

- [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars)
  - : Gibt eine Sammlung von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten zurück und setzt sie, die die von der aktuellen `SpeechRecognition` verstandenen Grammatiken darstellen.

## Statische Methoden

- [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static) {{experimental_inline}}
  - : Überprüft, ob die angegebenen Sprachen für die Spracherkennung verfügbar sind.
- [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static) {{experimental_inline}}
  - : Installiert die erforderlichen Sprachpakete für die geräteinterne Spracherkennung in den angegebenen Sprachen.

## Instanz-Methoden

_`SpeechRecognition` erbt auch Methoden von seinem Elterninterface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.abort()`](/de/docs/Web/API/SpeechRecognition/abort)
  - : Stoppt den Spracherkennungsdienst, sodass er eingehende Audiodaten nicht mehr hört und keinen [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) zurückzugeben versucht.
- [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start)
  - : Startet den Spracherkennungsdienst, um eingehende Audiodaten (von einem Mikrofon oder einer Audiospur) zu hören, und gibt die Ergebnisse dieser Erkennung zurück.
- [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop)
  - : Stoppt den Spracherkennungsdienst vom Hören eingehender Audiodaten und versucht, basierend auf den bisher erfassten Ergebnissen eine [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) zurückzugeben.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignislistener der `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`audiostart`](/de/docs/Web/API/SpeechRecognition/audiostart_event)
  - : Wird ausgelöst, wenn der User-Agent mit der Audioerfassung begonnen hat.
- [`audioend`](/de/docs/Web/API/SpeechRecognition/audioend_event)
  - : Wird ausgelöst, wenn der User-Agent die Audioerfassung abgeschlossen hat.
- [`end`](/de/docs/Web/API/SpeechRecognition/end_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst getrennt wurde.
- [`error`](/de/docs/Web/API/SpeechRecognition/error_event)
  - : Wird ausgelöst, wenn ein Fehler bei der Spracherkennung auftritt.
- [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst ein endgültiges Ergebnis ohne signifikante Erkennung zurückgibt. Dies kann ein gewisses Maß an Erkennung beinhalten, das die [`confidence`](/de/docs/Web/API/SpeechRecognitionAlternative/confidence)-Schwelle nicht erreicht oder überschreitet.
- [`result`](/de/docs/Web/API/SpeechRecognition/result_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst ein Ergebnis zurückgibt – ein Wort oder Satz wurde positiv erkannt und dies wurde an die App zurückgemeldet.
- [`soundstart`](/de/docs/Web/API/SpeechRecognition/soundstart_event)
  - : Wird ausgelöst, wenn ein beliebiges Geräusch – erkennbarer Sprachklang oder nicht – erkannt wurde.
- [`soundend`](/de/docs/Web/API/SpeechRecognition/soundend_event)
  - : Wird ausgelöst, wenn ein beliebiges Geräusch – erkennbarer Sprachklang oder nicht – nicht mehr erkannt wird.
- [`speechstart`](/de/docs/Web/API/SpeechRecognition/speechstart_event)
  - : Wird ausgelöst, wenn ein Geräusch, das von dem Spracherkennungsdienst als Sprache erkannt wird, erkannt wurde.
- [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event)
  - : Wird ausgelöst, wenn Sprache, die vom Spracherkennungsdienst erkannt wurde, nicht mehr erkannt wird.
- [`start`](/de/docs/Web/API/SpeechRecognition/start_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst beginnt, Audio zur Erkennung zu hören.

## Beispiele

In unserem [Speech color changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/)-Beispiel erstellen wir eine neue `SpeechRecognition`-Objektinstanz mithilfe des [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)-Konstruktors.

Nachdem einige andere Werte festgelegt wurden, stellen wir es so ein, dass der Erkennungsdienst startet, wenn ein Button geklickt wird (siehe [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start)). Wenn ein Ergebnis erfolgreich erkannt wurde, wird das [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Ereignis ausgelöst, wir extrahieren die gesprochene Farbe aus dem Ereignisobjekt und setzen dann die Hintergrundfarbe des {{htmlelement("html")}}-Elements auf diese Farbe.

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
