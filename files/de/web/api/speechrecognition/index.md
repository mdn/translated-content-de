---
title: SpeechRecognition
slug: Web/API/SpeechRecognition
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Web Speech API")}}

Das **`SpeechRecognition`** Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist die Steuerungsschnittstelle für den Erkennungsdienst; es behandelt auch das [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent), das vom Erkennungsdienst gesendet wird.

> [!NOTE]
> In einigen Browsern, wie Chrome, beinhaltet die Nutzung der Spracherkennung auf einer Webseite eine serverbasierte Erkennungs-Engine. Ihr Audio wird für die Erkennungsverarbeitung an einen Webdienst gesendet, daher funktioniert es nicht offline.

{{InheritanceDiagram}}

## Konstruktor

- [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)
  - : Erstellt ein neues `SpeechRecognition` Objekt.

## Instanz-Eigenschaften

_`SpeechRecognition` erbt auch Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars)
  - : Gibt eine Sammlung von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar) Objekten zurück und legt diese fest, die die Grammatiken darstellen, die von der aktuellen `SpeechRecognition` verstanden werden sollen.
- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang)
  - : Gibt die Sprache der aktuellen `SpeechRecognition` zurück und legt sie fest. Ist nichts angegeben, wird standardmäßig der Wert des HTML [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attributs genommen, oder die Spracheinstellung des Benutzeragenten, wenn auch diese nicht gesetzt ist.
- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous)
  - : Legt fest, ob kontinuierliche Ergebnisse für jede Erkennung zurückgegeben werden oder nur ein einziges Ergebnis. Standardmäßig auf einzelne (`false`) festgelegt.
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults)
  - : Bestimmt, ob Zwischenresultate zurückgegeben (`true`) oder nicht (`false`) werden sollen. Zwischenresultate sind Ergebnisse, die noch nicht endgültig sind (z. B. ist die [`SpeechRecognitionResult.isFinal`](/de/docs/Web/API/SpeechRecognitionResult/isFinal) Eigenschaft `false`.)
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives)
  - : Setzt die maximale Anzahl von [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)s, die pro Ergebnis bereitgestellt werden. Der Standardwert ist 1.

## Instanz-Methoden

_`SpeechRecognition` erbt auch Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.abort()`](/de/docs/Web/API/SpeechRecognition/abort)
  - : Stoppt den Spracherkennungsdienst vom Empfangen eingehender Audiodaten und versucht nicht, ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) zurückzugeben.
- [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start)
  - : Startet den Spracherkennungsdienst, um eingehende Audiodaten zu empfangen, mit der Absicht, die mit der aktuellen `SpeechRecognition` verbundenen Grammatiken zu erkennen.
- [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop)
  - : Stoppt den Spracherkennungsdienst vom Empfangen eingehender Audiodaten und versucht, ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) mit den bisher erfassten Audiodaten zurückzugeben.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`audiostart`](/de/docs/Web/API/SpeechRecognition/audiostart_event)
  - : Ausgelöst, wenn der Benutzeragent begonnen hat, Audio zu erfassen.
    Auch verfügbar über die `onaudiostart` Eigenschaft.
- [`audioend`](/de/docs/Web/API/SpeechRecognition/audioend_event)
  - : Ausgelöst, wenn der Benutzeragent das Erfassen von Audio beendet hat.
    Auch verfügbar über die `onaudioend` Eigenschaft.
- [`end`](/de/docs/Web/API/SpeechRecognition/end_event)
  - : Ausgelöst, wenn der Spracherkennungsdienst die Verbindung getrennt hat.
    Auch verfügbar über die `onend` Eigenschaft.
- [`error`](/de/docs/Web/API/SpeechRecognition/error_event)
  - : Ausgelöst, wenn ein Fehler bei der Spracherkennung auftritt.
    Auch verfügbar über die `onerror` Eigenschaft.
- [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)
  - : Ausgelöst, wenn der Spracherkennungsdienst ein endgültiges Ergebnis ohne signifikante Erkennung zurückgibt. Dies kann einen gewissen Grad an Erkennung beinhalten, der den [`confidence`](/de/docs/Web/API/SpeechRecognitionAlternative/confidence) Schwellenwert nicht erfüllt oder überschreitet.
    Auch verfügbar über die `onnomatch` Eigenschaft.
- [`result`](/de/docs/Web/API/SpeechRecognition/result_event)
  - : Ausgelöst, wenn der Spracherkennungsdienst ein Ergebnis zurückgibt — ein Wort oder eine Phrase wurde positiv erkannt und dies wurde der App zurückgemeldet.
    Auch verfügbar über die `onresult` Eigenschaft.
- [`soundstart`](/de/docs/Web/API/SpeechRecognition/soundstart_event)
  - : Ausgelöst, wenn irgendein Klang — erkennbares Sprechen oder nicht — detektiert wurde.
    Auch verfügbar über die `onsoundstart` Eigenschaft.
- [`soundend`](/de/docs/Web/API/SpeechRecognition/soundend_event)
  - : Ausgelöst, wenn irgendein Klang — erkennbares Sprechen oder nicht — nicht mehr detektiert wird.
    Auch verfügbar über die `onsoundend` Eigenschaft.
- [`speechstart`](/de/docs/Web/API/SpeechRecognition/speechstart_event)
  - : Ausgelöst, wenn Klang detektiert wurde, der vom Spracherkennungsdienst als Sprache erkannt wird.
    Auch verfügbar über die `onspeechstart` Eigenschaft.
- [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event)
  - : Ausgelöst, wenn Sprache, die vom Spracherkennungsdienst erkannt wurde, nicht mehr detektiert wird.
    Auch verfügbar über die `onspeechend` Eigenschaft.
- [`start`](/de/docs/Web/API/SpeechRecognition/start_event)
  - : Ausgelöst, wenn der Spracherkennungsdienst begonnen hat, eingehende Audiodaten mit der Absicht zu empfangen, die der aktuellen `SpeechRecognition` verbundenen Grammatiken zu erkennen.
    Auch verfügbar über die `onstart` Eigenschaft.

## Beispiele

In unserem einfachen [Sprachfarbwechsler](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer) Beispiel, erstellen wir eine neue `SpeechRecognition` Objektinstanz mit dem [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition) Konstruktor, erstellen eine neue [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) und setzen diese als die Grammatik, die von der `SpeechRecognition` Instanz erkannt wird, mit der [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars) Eigenschaft.

Nachdem einige andere Werte definiert wurden, legen wir fest, dass der Erkennungsdienst beim Auftreten eines Klick-Events startet (siehe [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start).) Wenn ein Ergebnis erfolgreich erkannt wurde, wird das [`result`](/de/docs/Web/API/SpeechRecognition/result_event) Ereignis ausgelöst, wir extrahieren die Farbe, die ausgesprochen wurde, aus dem Ereignisobjekt und setzen die Hintergrundfarbe vom {{htmlelement("html")}} Element auf diese Farbe.

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
