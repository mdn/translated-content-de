---
title: SpeechRecognition
slug: Web/API/SpeechRecognition
l10n:
  sourceCommit: 6f9cf70a2fc871d273ddeeb73170c76b17f20b59
---

{{APIRef("Web Speech API")}}

Das **`SpeechRecognition`** Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist das Kontroll-Interface für den Erkennungsdienst; es behandelt auch das [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent), das vom Erkennungsdienst gesendet wird.

> [!NOTE]
> In einigen Browsern, wie Chrome, erfordert die Nutzung der Spracherkennung auf einer Webseite eine serverbasierte Erkennungs-Engine. Ihr Audio wird zur Erkennungsverarbeitung an einen Webdienst gesendet, daher funktioniert es nicht offline.

{{InheritanceDiagram}}

## Konstruktor

- [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)
  - : Erstellt ein neues `SpeechRecognition` Objekt.

## Instanz-Eigenschaften

_`SpeechRecognition` erbt auch Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang)
  - : Gibt die Sprache des aktuellen `SpeechRecognition` zurück und setzt sie. Wenn nicht angegeben, wird standardmäßig der Wert des HTML [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attributs oder die Spracheinstellung des Benutzeragenten verwendet, falls diese ebenfalls nicht festgelegt ist.
- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous)
  - : Steuert, ob kontinuierliche Ergebnisse für jede Erkennung zurückgegeben werden oder nur ein einzelnes Ergebnis. Standardwert ist einzelnes Ergebnis (`false`).
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults)
  - : Bestimmt, ob Zwischenresultate (`true`) oder nicht (`false`) zurückgegeben werden sollen. Zwischenresultate sind Ergebnisse, die noch nicht endgültig sind (z.B. ist die [`SpeechRecognitionResult.isFinal`](/de/docs/Web/API/SpeechRecognitionResult/isFinal)-Eigenschaft `false`).
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives)
  - : Legt die maximale Anzahl von [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)s fest, die pro Ergebnis bereitgestellt werden. Der Standardwert ist 1.
- [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases) {{experimental_inline}}
  - : Setzt ein Array von [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase) Objekten, die für das [kontextuelle Biasing](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) verwendet werden sollen.
- [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally) {{experimental_inline}}
  - : Gibt an, ob die Spracherkennung lokal auf dem Gerät des Benutzers durchgeführt werden muss.

### Veraltete Eigenschaften

Das Konzept der Grammatik wurde aus der Web Speech API entfernt. Verwandte Funktionen bleiben jedoch in der Spezifikation und werden von unterstützenden Browsern aus Gründen der Rückwärtskompatibilität weiterhin erkannt, haben jedoch keinen Einfluss auf die Spracherkennungsdienste.

- [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars)
  - : Gibt eine Sammlung von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten zurück und setzt sie, die die von der aktuellen `SpeechRecognition` verstandenen Grammatiken darstellen.

## Statische Methoden

- [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static) {{experimental_inline}}
  - : Prüft, ob die angegebenen Sprachen für die Spracherkennung auf dem angegebenen Qualitätslevel verfügbar sind.
- [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static) {{experimental_inline}}
  - : Installiert die erforderlichen Sprachpakete für die geräteinterne Spracherkennung in den angegebenen Sprachen und Qualitätsstufen.

## Instanz-Methoden

_`SpeechRecognition` erbt auch Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.abort()`](/de/docs/Web/API/SpeechRecognition/abort)
  - : Stoppt den Spracherkennungsdienst, der eingehendes Audio abhört, und versucht nicht, ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) zurückzugeben.
- [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start)
  - : Startet den Spracherkennungsdienst, um eingehendes Audio (von einem Mikrofon oder einer Audiospur) zu hören und gibt die Ergebnisse dieser Erkennung zurück.
- [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop)
  - : Stoppt den Spracherkennungsdienst, der eingehendes Audio abhört, und versucht, basierend auf den bisher erfassten Ergebnissen ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) zurückzugeben.

## Ereignisse

Lauschen Sie diesen Ereignissen mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`audiostart`](/de/docs/Web/API/SpeechRecognition/audiostart_event)
  - : Wird ausgelöst, wenn der Benutzeragent begonnen hat, Audio aufzunehmen.
- [`audioend`](/de/docs/Web/API/SpeechRecognition/audioend_event)
  - : Wird ausgelöst, wenn der Benutzeragent das Aufnehmen von Audio beendet hat.
- [`end`](/de/docs/Web/API/SpeechRecognition/end_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst die Verbindung getrennt hat.
- [`error`](/de/docs/Web/API/SpeechRecognition/error_event)
  - : Wird ausgelöst, wenn ein Fehler bei der Spracherkennung auftritt.
- [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst ein Endergebnis ohne signifikante Erkennung zurückgibt. Dies kann ein gewisses Maß an Erkennung beinhalten, das den [`confidence`](/de/docs/Web/API/SpeechRecognitionAlternative/confidence)-Schwellenwert nicht erreicht oder übertrifft.
- [`result`](/de/docs/Web/API/SpeechRecognition/result_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst ein Ergebnis zurückgibt — ein Wort oder Satz wurde positiv erkannt und dies wurde an die Anwendung zurückgemeldet.
- [`soundstart`](/de/docs/Web/API/SpeechRecognition/soundstart_event)
  - : Wird ausgelöst, wenn ein beliebiges Geräusch — erkennbare Sprache oder nicht — erkannt wurde.
- [`soundend`](/de/docs/Web/API/SpeechRecognition/soundend_event)
  - : Wird ausgelöst, wenn ein beliebiges Geräusch — erkennbare Sprache oder nicht — nicht mehr erkannt wird.
- [`speechstart`](/de/docs/Web/API/SpeechRecognition/speechstart_event)
  - : Wird ausgelöst, wenn ein Geräusch erkannt wurde, das vom Spracherkennungsdienst als Sprache erkannt wird.
- [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event)
  - : Wird ausgelöst, wenn Sprache, die vom Spracherkennungsdienst erkannt wird, nicht mehr erkannt wird.
- [`start`](/de/docs/Web/API/SpeechRecognition/start_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst beginnt, Audio zur Erkennung zu hören.

## Beispiele

In unserem [Beispiel zur Farbänderung durch Sprache](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) erstellen wir eine neue `SpeechRecognition` Objektinstanz mit dem [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition) Konstruktor.

Nachdem einige andere Werte definiert wurden, setzen wir es so, dass der Erkennungsdienst startet, wenn ein Button angeklickt wird (siehe [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start)). Wenn ein Ergebnis erfolgreich erkannt wurde, wird das [`result`](/de/docs/Web/API/SpeechRecognition/result_event) Ereignis ausgelöst. Wir extrahieren die gesprochene Farbe aus dem Ereignisobjekt und setzen dann die Hintergrundfarbe des {{htmlelement("html")}} Elements auf diese Farbe.

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
