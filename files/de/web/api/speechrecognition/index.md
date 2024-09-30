---
title: SpeechRecognition
slug: Web/API/SpeechRecognition
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Speech API")}}

Die **`SpeechRecognition`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist die Steuerungsschnittstelle für den Erkennungsdienst; sie verarbeitet auch das [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent), das vom Erkennungsdienst gesendet wird.

> [!NOTE]
> In einigen Browsern, wie Chrome, erfordert die Nutzung von Spracherkennung auf einer Webseite eine serverbasierte Erkennungs-Engine. Ihr Audio wird an einen Webdienst zur Erkennungsbearbeitung gesendet, daher funktioniert es nicht offline.

{{InheritanceDiagram}}

## Konstruktor

- [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)
  - : Erstellt ein neues `SpeechRecognition`-Objekt.

## Instanzeigenschaften

_`SpeechRecognition` übernimmt auch Eigenschaften von seiner übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars)
  - : Gibt eine Sammlung von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten zurück, die die Grammatiken darstellen, die von der aktuellen `SpeechRecognition` erkannt werden sollen, und setzt sie.
- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang)
  - : Gibt die Sprache der aktuellen `SpeechRecognition` zurück und setzt sie. Falls nicht angegeben, wird standardmäßig der Wert des HTML-Attributs [`lang`](/de/docs/Web/HTML/Global_attributes/lang) verwendet oder die Spracheinstellung des Benutzeragenten, falls diese ebenfalls nicht festgelegt ist.
- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous)
  - : Steuert, ob kontinuierliche Ergebnisse für jede Erkennung zurückgegeben werden, oder nur ein einzelnes Ergebnis. Standardmäßig ist dies auf Einzel (`false`) gesetzt.
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults)
  - : Steuert, ob vorläufige Ergebnisse zurückgegeben werden sollen (`true`) oder nicht (`false`). Vorläufige Ergebnisse sind Ergebnisse, die noch nicht endgültig sind (zum Beispiel ist die [`SpeechRecognitionResult.isFinal`](/de/docs/Web/API/SpeechRecognitionResult/isFinal)-Eigenschaft `false`).
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives)
  - : Legt die maximale Anzahl von [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)s fest, die pro Ergebnis bereitgestellt werden. Der Standardwert ist 1.

## Instanzmethoden

_`SpeechRecognition` übernimmt auch Methoden von seiner übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.abort()`](/de/docs/Web/API/SpeechRecognition/abort)
  - : Stoppt den Spracherkennungsdienst beim Zuhören auf eingehendes Audio und versucht nicht, ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) zurückzugeben.
- [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start)
  - : Startet den Spracherkennungsdienst, um auf eingehendes Audio zu hören, mit dem Ziel, die mit der aktuellen `SpeechRecognition` verbundenen Grammatiken zu erkennen.
- [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop)
  - : Stoppt den Spracherkennungsdienst beim Zuhören auf eingehendes Audio und versucht, ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) mit dem bisher erfassten Audio zurückzugeben.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener für die `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`audiostart`](/de/docs/Web/API/SpeechRecognition/audiostart_event)
  - : Wird ausgelöst, wenn der Benutzeragent begonnen hat, Audio zu erfassen.
    Auch verfügbar über die `onaudiostart`-Eigenschaft.
- [`audioend`](/de/docs/Web/API/SpeechRecognition/audioend_event)
  - : Wird ausgelöst, wenn der Benutzeragent die Audioaufnahme beendet hat.
    Auch verfügbar über die `onaudioend`-Eigenschaft.
- [`end`](/de/docs/Web/API/SpeechRecognition/end_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst die Verbindung getrennt hat.
    Auch verfügbar über die `onend`-Eigenschaft.
- [`error`](/de/docs/Web/API/SpeechRecognition/error_event)
  - : Wird ausgelöst, wenn ein Spracherkennungsfehler auftritt.
    Auch verfügbar über die `onerror`-Eigenschaft.
- [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst ein endgültiges Ergebnis ohne signifikante Erkennung zurückgibt. Dies kann ein gewisses Maß an Erkennung beinhalten, das nicht die [`confidence`](/de/docs/Web/API/SpeechRecognitionAlternative/confidence)-Schwelle erreicht oder überschreitet.
    Auch verfügbar über die `onnomatch`-Eigenschaft.
- [`result`](/de/docs/Web/API/SpeechRecognition/result_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst ein Ergebnis zurückgibt — ein Wort oder eine Phrase wurde positiv erkannt und dies wurde an die App zurückgemeldet.
    Auch verfügbar über die `onresult`-Eigenschaft.
- [`soundstart`](/de/docs/Web/API/SpeechRecognition/soundstart_event)
  - : Wird ausgelöst, wenn ein beliebiges Geräusch — erkennbarer Sprachgebrauch oder nicht — erkannt wurde.
    Auch verfügbar über die `onsoundstart`-Eigenschaft.
- [`soundend`](/de/docs/Web/API/SpeechRecognition/soundend_event)
  - : Wird ausgelöst, wenn ein beliebiges Geräusch — erkennbarer Sprachgebrauch oder nicht — nicht mehr erkannt wird.
    Auch verfügbar über die `onsoundend`-Eigenschaft.
- [`speechstart`](/de/docs/Web/API/SpeechRecognition/speechstart_event)
  - : Wird ausgelöst, wenn das erkannt wurde, was der Spracherkennungsdienst als Sprache erkennt.
    Auch verfügbar über die `onspeechstart`-Eigenschaft.
- [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event)
  - : Wird ausgelöst, wenn die vom Spracherkennungsdienst erkannte Sprache nicht mehr erkannt wird.
    Auch verfügbar über die `onspeechend`-Eigenschaft.
- [`start`](/de/docs/Web/API/SpeechRecognition/start_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst begonnen hat, auf eingehendes Audio zu hören, mit der Absicht, die mit der aktuellen `SpeechRecognition` verbundenen Grammatiken zu erkennen.
    Auch verfügbar über die `onstart`-Eigenschaft.

## Beispiele

In unserem einfachen [Beispiel zur Sprachgesteuerten Farbänderung](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer) erstellen wir eine neue `SpeechRecognition`-Objektinstanz mit dem [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)-Konstruktor, erstellen eine neue [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) und setzen diese als Grammatik, die von der `SpeechRecognition`-Instanz erkannt werden soll, mittels der [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars)-Eigenschaft.

Nachdem einige andere Werte definiert wurden, setzen wir es so, dass der Erkennungsdienst startet, wenn ein Klick-Ereignis auftritt (siehe [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start).) Wenn ein Ergebnis erfolgreich erkannt wurde, wird das [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Ereignis ausgelöst, wir extrahieren die Farbe, die aus dem Ereignisobjekt gesprochen wurde, und setzen dann die Hintergrundfarbe des {{htmlelement("html")}}-Elements auf diese Farbe.

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");

document.body.onclick = () => {
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
