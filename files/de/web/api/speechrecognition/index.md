---
title: SpeechRecognition
slug: Web/API/SpeechRecognition
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Web Speech API")}}

Die **`SpeechRecognition`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist die Steuerungsschnittstelle für den Erkennungsdienst; sie verarbeitet auch das [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent), das vom Erkennungsdienst gesendet wird.

> [!NOTE]
> In einigen Browsern, wie Chrome, beinhaltet die Nutzung der Spracherkennung auf einer Webseite eine serverbasierte Erkennungs-Engine. Ihr Audio wird an einen Webservice zur Erkennungsverarbeitung gesendet, sodass es nicht offline funktioniert.

{{InheritanceDiagram}}

## Konstruktor

- [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)
  - : Erstellt ein neues `SpeechRecognition`-Objekt.

## Instanzeigenschaften

_`SpeechRecognition` erbt auch Eigenschaften von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars)
  - : Gibt eine Sammlung von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten zurück und setzt diese, die die Grammatiken repräsentieren, die von der aktuellen `SpeechRecognition` erkannt werden sollen.
- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang)
  - : Gibt die Sprache der aktuellen `SpeechRecognition` zurück und setzt sie. Wenn nicht angegeben, wird dies auf den Wert des HTML-Attributs [`lang`](/de/docs/Web/HTML/Global_attributes/lang) oder die Spracheinstellung des Benutzeragents gesetzt, wenn auch das nicht festgelegt ist.
- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous)
  - : Kontrolliert, ob kontinuierliche Ergebnisse für jede Erkennung zurückgegeben werden oder nur ein einzelnes Ergebnis. Standardmäßig ist dies auf einzelne (`false`) Ergebnisse gesetzt.
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults)
  - : Kontrolliert, ob Zwischenresultate zurückgegeben werden sollen (`true`) oder nicht (`false`). Zwischenresultate sind Ergebnisse, die noch nicht final sind (z.B. die Eigenschaft [`SpeechRecognitionResult.isFinal`](/de/docs/Web/API/SpeechRecognitionResult/isFinal) ist `false`).
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives)
  - : Setzt die maximale Anzahl von [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)s, die pro Ergebnis bereitgestellt werden. Der Standardwert ist 1.

## Instanzmethoden

_`SpeechRecognition` erbt auch Methoden von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.abort()`](/de/docs/Web/API/SpeechRecognition/abort)
  - : Beendet den Spracherkennungsdienst, der sonst auf eingehendes Audio hört, und versucht nicht, ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) zurückzugeben.
- [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start)
  - : Startet den Spracherkennungsdienst, der auf eingehendes Audio hört, um die mit der aktuellen `SpeechRecognition` verbundenen Grammatiken zu erkennen.
- [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop)
  - : Beendet den Spracherkennungsdienst, der auf eingehendes Audio hört, und versucht, ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) mit dem bisher erfassten Audio zurückzugeben.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`audiostart`](/de/docs/Web/API/SpeechRecognition/audiostart_event)
  - : Wird ausgelöst, wenn der Benutzeragent begonnen hat, Audio zu erfassen.
    Auch verfügbar über die Eigenschaft `onaudiostart`.
- [`audioend`](/de/docs/Web/API/SpeechRecognition/audioend_event)
  - : Wird ausgelöst, wenn der Benutzeragent die Audioerfassung beendet hat.
    Auch verfügbar über die Eigenschaft `onaudioend`.
- [`end`](/de/docs/Web/API/SpeechRecognition/end_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst die Verbindung getrennt hat.
    Auch verfügbar über die Eigenschaft `onend`.
- [`error`](/de/docs/Web/API/SpeechRecognition/error_event)
  - : Wird ausgelöst, wenn ein Fehler bei der Spracherkennung auftritt.
    Auch verfügbar über die Eigenschaft `onerror`.
- [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst ein finales Ergebnis ohne signifikante Erkennung zurückgibt. Dies kann einen gewissen Grad an Erkennung beinhalten, der den [`confidence`](/de/docs/Web/API/SpeechRecognitionAlternative/confidence)-Schwellenwert nicht erfüllt oder übertrifft.
    Auch verfügbar über die Eigenschaft `onnomatch`.
- [`result`](/de/docs/Web/API/SpeechRecognition/result_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst ein Ergebnis zurückgibt — ein Wort oder eine Phrase wurde positiv erkannt und dies wurde der App zurückgemeldet.
    Auch verfügbar über die Eigenschaft `onresult`.
- [`soundstart`](/de/docs/Web/API/SpeechRecognition/soundstart_event)
  - : Wird ausgelöst, wenn irgendein Geräusch — erkennbarer Sprachklang oder nicht — festgestellt wurde.
    Auch verfügbar über die Eigenschaft `onsoundstart`.
- [`soundend`](/de/docs/Web/API/SpeechRecognition/soundend_event)
  - : Wird ausgelöst, wenn irgendein Geräusch — erkennbarer Sprachklang oder nicht — nicht mehr festgestellt wird.
    Auch verfügbar über die Eigenschaft `onsoundend`.
- [`speechstart`](/de/docs/Web/API/SpeechRecognition/speechstart_event)
  - : Wird ausgelöst, wenn ein Geräusch, das vom Spracherkennungsdienst als Sprache erkannt wird, festgestellt wurde.
    Auch verfügbar über die Eigenschaft `onspeechstart`.
- [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event)
  - : Wird ausgelöst, wenn Sprache, die vom Spracherkennungsdienst erkannt wird, nicht mehr festgestellt wird.
    Auch verfügbar über die Eigenschaft `onspeechend`.
- [`start`](/de/docs/Web/API/SpeechRecognition/start_event)
  - : Wird ausgelöst, wenn der Spracherkennungsdienst begonnen hat, auf eingehendes Audio zu hören, mit der Absicht, die mit der aktuellen `SpeechRecognition` verbundenen Grammatiken zu erkennen.
    Auch verfügbar über die Eigenschaft `onstart`.

## Beispiele

In unserem einfachen [Speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer)-Beispiel erstellen wir eine neue Instanz eines `SpeechRecognition`-Objekts mit dem [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)-Konstruktor, erstellen eine neue [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) und setzen sie als die Grammatik, die von der `SpeechRecognition`-Instanz erkannt wird, unter Verwendung der [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars)-Eigenschaft.

Nachdem andere Werte definiert wurden, wird der Erkennungsdienst so eingestellt, dass er startet, wenn ein Klickereignis auftritt (siehe [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start)). Wenn ein Ergebnis erfolgreich erkannt wurde, wird das [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Ereignis ausgelöst, wir extrahieren die gesprochene Farbe aus dem Ereignisobjekt und setzen dann die Hintergrundfarbe des {{htmlelement("html")}}-Elements auf diese Farbe.

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
