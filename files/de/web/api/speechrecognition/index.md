---
title: SpeechRecognition
slug: Web/API/SpeechRecognition
l10n:
  sourceCommit: 57a80c7a6d2174d77234cb58f536a40dd0803c4a
---

{{APIRef("Web Speech API")}}

Das **`SpeechRecognition`**-Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist das Steuerinterface für den Erkennungsdienst; es behandelt auch das [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent), das vom Erkennungsdienst gesendet wird.

> [!NOTE]
> Bei einigen Browsern, wie Chrome, beinhaltet die Nutzung von Spracherkennung auf einer Webseite eine serverbasierte Erkennungs-Engine. Ihr Audio wird an einen Webdienst zur Verarbeitung der Erkennung gesendet, daher funktioniert es nicht offline.

{{InheritanceDiagram}}

## Konstruktor

- [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)
  - : Erstellt ein neues `SpeechRecognition`-Objekt.

## Instanz-Eigenschaften

_`SpeechRecognition` erbt auch Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang)
  - : Gibt die Sprache der aktuellen `SpeechRecognition` zurück und legt sie fest. Wenn nicht angegeben, wird standardmäßig der HTML [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attributwert verwendet, oder die Spracheinstellung des Benutzeragenten, falls diese ebenfalls nicht festgelegt ist.
- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous)
  - : Steuert, ob kontinuierliche Ergebnisse für jede Erkennung zurückgegeben werden oder nur ein einzelnes Ergebnis. Standardmäßig wird nur ein einzelnes Ergebnis zurückgegeben (`false`.)
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults)
  - : Steuert, ob Zwischenergebnisse zurückgegeben werden sollen (`true`) oder nicht (`false`). Zwischenergebnisse sind Ergebnisse, die noch nicht endgültig sind (z.B. ist die [`SpeechRecognitionResult.isFinal`](/de/docs/Web/API/SpeechRecognitionResult/isFinal)-Eigenschaft `false`.)
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives)
  - : Legt die maximale Anzahl von [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)s fest, die pro Ergebnis bereitgestellt werden. Der Standardwert ist 1.
- [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases) {{experimental_inline}}
  - : Legt ein Array von [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Objekten fest, die für das [kontextuelle Biasing](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) verwendet werden sollen.
- [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally) {{experimental_inline}}
  - : Gibt an, ob die Spracherkennung lokal auf dem Gerät des Benutzers durchgeführt werden muss.
- [`SpeechRecognition.unspokenPunctuation`](/de/docs/Web/API/SpeechRecognition/unspokenPunctuation) {{experimental_inline}}
  - : Gibt an, ob die Spracherkennungs-Engine Interpunktionszeichen basierend auf den natürlichen Sprachmustern des Benutzers schlussfolgernd einfügen soll.

### Veraltete Eigenschaften

Das Konzept der Grammatik wurde aus der Web Speech API entfernt. Verwandte Funktionen verbleiben in der Spezifikation und werden von unterstützenden Browsern für die Rückwärtskompatibilität weiterhin erkannt, haben jedoch keinen Einfluss auf Spracherkennungsdienste.

- [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars)
  - : Gibt eine Sammlung der [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekte zurück und legt diese fest, die die von der aktuellen `SpeechRecognition` verstandenen Grammatiken repräsentieren.

## Statische Methoden

- [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static) {{experimental_inline}}
  - : Prüft, ob die angegebenen Sprachen für die Spracherkennung verfügbar sind.
- [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static) {{experimental_inline}}
  - : Installiert die erforderlichen Sprachpakete für die geräteinterne Spracherkennung in den angegebenen Sprachen.

## Instanz-Methoden

_`SpeechRecognition` erbt auch Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.abort()`](/de/docs/Web/API/SpeechRecognition/abort)
  - : Stoppt den Spracherkennungsdienst beim Zuhören von eingehenden Audios und versucht nicht, ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) zurückzugeben.
- [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start)
  - : Startet den Spracherkennungsdienst, um auf eingehende Audiosignale (von einem Mikrofon oder einer Audiospur) zu lauschen und gibt die Ergebnisse dieser Erkennung zurück.
- [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop)
  - : Stoppt den Spracherkennungsdienst beim Zuhören von eingehenden Audiosignalen und versucht, basierend auf den bisher erfassten Ergebnissen ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) zurückzugeben.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisung eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieses Interfaces.

- [`audiostart`](/de/docs/Web/API/SpeechRecognition/audiostart_event)
  - : Wird ausgelöst, wenn der Benutzeragent begonnen hat, Audio aufzunehmen.
- [`audioend`](/de/docs/Web/API/SpeechRecognition/audioend_event)
  - : Wird ausgelöst, wenn der Benutzeragent die Audioaufnahme beendet hat.
- [`end`](/de/docs/Web/API/SpeechRecognition/end_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst die Verbindung getrennt hat.
- [`error`](/de/docs/Web/API/SpeechRecognition/error_event)
  - : Wird ausgelöst, wenn ein Fehler in der Spracherkennung auftritt.
- [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst ein endgültiges Ergebnis ohne signifikante Erkennung zurückgibt. Dies könnte eine gewisse Erkennung beinhalten, die den [`confidence`](/de/docs/Web/API/SpeechRecognitionAlternative/confidence)-Schwellenwert nicht erfüllt oder übertrifft.
- [`result`](/de/docs/Web/API/SpeechRecognition/result_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst ein Ergebnis zurückgibt — ein Wort oder ein Satz wurde positiv erkannt und dies wurde an die App zurückgemeldet.
- [`soundstart`](/de/docs/Web/API/SpeechRecognition/soundstart_event)
  - : Wird ausgelöst, wenn ein beliebiges Geräusch — erkennbar als Sprache oder nicht — erkannt wurde.
- [`soundend`](/de/docs/Web/API/SpeechRecognition/soundend_event)
  - : Wird ausgelöst, wenn ein beliebiges Geräusch — erkennbar als Sprache oder nicht — nicht mehr erkannt wird.
- [`speechstart`](/de/docs/Web/API/SpeechRecognition/speechstart_event)
  - : Wird ausgelöst, wenn ein Geräusch, das vom Spracherkennungsdienst als Sprache erkannt wird, erkannt wurde.
- [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event)
  - : Wird ausgelöst, wenn Sprache, die vom Spracherkennungsdienst erkannt wird, nicht mehr erkannt wird.
- [`start`](/de/docs/Web/API/SpeechRecognition/start_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst beginnt, auf Audio zu lauschen, um es zu erkennen.

## Beispiele

In unserem [Speech color changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/)-Beispiel erstellen wir eine neue `SpeechRecognition`-Objektinstanz, indem wir den [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)-Konstruktor verwenden.

Nachdem einige andere Werte definiert wurden, stellen wir dann sicher, dass der Erkennungsdienst startet, wenn eine Schaltfläche geklickt wird (siehe [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start)). Wenn ein Ergebnis erfolgreich erkannt wurde, wird das [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Ereignis ausgelöst, wir extrahieren die gesprochene Farbe aus dem Ereignisobjekt und setzen dann die Hintergrundfarbe des {{htmlelement("html")}}-Elements auf diese Farbe.

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
