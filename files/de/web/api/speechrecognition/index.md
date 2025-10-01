---
title: SpeechRecognition
slug: Web/API/SpeechRecognition
l10n:
  sourceCommit: 11478c4adedc859a4fe3e3c4004fcfd96ebc1eba
---

{{APIRef("Web Speech API")}}

Das **`SpeechRecognition`** Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist das Kontroll-Interface für den Erkennungsdienst; es bearbeitet auch das [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent), das vom Erkennungsdienst gesendet wird.

> [!NOTE]
> In einigen Browsern, wie Chrome, erfordert die Verwendung der Spracherkennung auf einer Webseite eine serverbasierte Erkennungs-Engine. Ihr Audio wird an einen Webservice zur Erkennungsverarbeitung gesendet, sodass es offline nicht funktioniert.

{{InheritanceDiagram}}

## Konstruktor

- [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)
  - : Erstellt ein neues `SpeechRecognition` Objekt.

## Instanz-Eigenschaften

_`SpeechRecognition` erbt auch Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang)
  - : Gibt die Sprache der aktuellen `SpeechRecognition` zurück und legt diese fest. Wenn nicht angegeben, ist dies standardmäßig der Wert des HTML [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attributs, oder die Spracheinstellung des User-Agents, falls dies ebenfalls nicht festgelegt ist.
- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous)
  - : Steuert, ob kontinuierliche Ergebnisse für jede Erkennung zurückgegeben werden oder nur ein einzelnes Ergebnis. Standardmäßig wird ein einzelnes Ergebnis (`false`) zurückgegeben.
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults)
  - : Steuert, ob Zwischenresultate zurückgegeben werden sollen (`true`) oder nicht (`false`). Zwischenresultate sind Ergebnisse, die noch nicht endgültig sind (z.B. wenn die [`SpeechRecognitionResult.isFinal`](/de/docs/Web/API/SpeechRecognitionResult/isFinal) Eigenschaft `false` ist).
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives)
  - : Legt die maximale Anzahl der [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)s fest, die pro Ergebnis bereitgestellt werden. Der Standardwert ist 1.
- [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases) {{experimental_inline}}
  - : Legt ein Array von [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase) Objekten fest, die für die [kontextuelle Voreingenommenheit](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition) verwendet werden.
- [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally) {{experimental_inline}}
  - : Gibt an, ob die Spracherkennung lokal auf dem Gerät des Benutzers durchgeführt werden muss.

### Veraltete Eigenschaften

Das Konzept der Grammatik wurde aus der Web Speech API entfernt. Verwandte Funktionen bleiben in der Spezifikation und werden von unterstützenden Browsern zur Aufrechterhaltung der Abwärtskompatibilität weiterhin erkannt, haben jedoch keine Auswirkungen auf Spracherkennungsdienste.

- [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars)
  - : Gibt eine Sammlung von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar) Objekten zurück und legt diese fest, die die von der aktuellen `SpeechRecognition` verstandenen Grammatiken repräsentieren.

## Statische Methoden

- [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static) {{experimental_inline}}
  - : Prüft, ob die angegebenen Sprachen für die Spracherkennung verfügbar sind.
- [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static) {{experimental_inline}}
  - : Installiert die erforderlichen Sprachpakete für die gerätebasierte Spracherkennung in den angegebenen Sprachen.

## Instanz-Methoden

_`SpeechRecognition` erbt auch Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.abort()`](/de/docs/Web/API/SpeechRecognition/abort)
  - : Stoppt den Spracherkennungsdienst vom Empfang des eingehenden Audiosignals und versucht nicht, ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) zurückzugeben.
- [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start)
  - : Startet den Spracherkennungsdienst, um auf eingehendes Audio zu lauschen (von einem Mikrofon oder einer Audiospur) und gibt die Ergebnisse dieser Erkennung zurück.
- [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop)
  - : Stoppt den Spracherkennungsdienst vom Lauschen auf eingehendes Audio und versucht, basierend auf den bisher erfassten Ergebnissen ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) zurückzugeben.

## Ereignisse

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abgehört werden oder durch Zuweisung eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieses Interfaces.

- [`audiostart`](/de/docs/Web/API/SpeechRecognition/audiostart_event)
  - : Ausgelöst, wenn der User-Agent begonnen hat, Audio aufzunehmen.
- [`audioend`](/de/docs/Web/API/SpeechRecognition/audioend_event)
  - : Ausgelöst, wenn der User-Agent das Aufnehmen von Audio beendet hat.
- [`end`](/de/docs/Web/API/SpeechRecognition/end_event)
  - : Ausgelöst, wenn der Spracherkennungsdienst die Verbindung getrennt hat.
- [`error`](/de/docs/Web/API/SpeechRecognition/error_event)
  - : Ausgelöst, wenn ein Fehler bei der Spracherkennung auftritt.
- [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)
  - : Ausgelöst, wenn der Spracherkennungsdienst ein endgültiges Ergebnis ohne signifikante Erkennung zurückgibt. Dies kann ein gewisses Maß an Erkennung beinhalten, das nicht den [`confidence`](/de/docs/Web/API/SpeechRecognitionAlternative/confidence) Schwellenwert erreicht oder übertrifft.
- [`result`](/de/docs/Web/API/SpeechRecognition/result_event)
  - : Ausgelöst, wenn der Spracherkennungsdienst ein Ergebnis zurückgibt — ein Wort oder ein Satz wurde positiv erkannt und dies wurde an die App zurückgemeldet.
- [`soundstart`](/de/docs/Web/API/SpeechRecognition/soundstart_event)
  - : Ausgelöst, wenn ein Geräusch — erkennbar als Sprache oder nicht — erkannt wurde.
- [`soundend`](/de/docs/Web/API/SpeechRecognition/soundend_event)
  - : Ausgelöst, wenn ein Geräusch — erkennbar als Sprache oder nicht — nicht mehr erkannt wird.
- [`speechstart`](/de/docs/Web/API/SpeechRecognition/speechstart_event)
  - : Ausgelöst, wenn ein Geräusch, das vom Spracherkennungsdienst als Sprache erkannt wird, erkannt wurde.
- [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event)
  - : Ausgelöst, wenn die vom Spracherkennungsdienst erkannte Sprache nicht mehr erkannt wird.
- [`start`](/de/docs/Web/API/SpeechRecognition/start_event)
  - : Ausgelöst, wenn der Spracherkennungsdienst beginnt, auf Audio zur Erkennung zu lauschen.

## Beispiele

In unserem [Speech color changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer) Beispiel erstellen wir eine neue `SpeechRecognition` Objektinstanz mit dem [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition) Konstruktor.

Nachdem einige andere Werte definiert wurden, wird der Erkennungsdienst so eingestellt, dass er startet, wenn ein Button geklickt wird (siehe [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start)). Wenn ein Ergebnis erfolgreich erkannt wurde, wird das [`result`](/de/docs/Web/API/SpeechRecognition/result_event) Ereignis ausgelöst, wir extrahieren die gesprochene Farbe aus dem Ereignisobjekt und setzen dann die Hintergrundfarbe des {{htmlelement("html")}} Elements auf diese Farbe.

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
