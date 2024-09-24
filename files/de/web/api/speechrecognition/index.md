---
title: SprachErkennung
slug: Web/API/SpeechRecognition
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Speech API")}}

Die **`SpeechRecognition`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist die Controller-Schnittstelle für den Erkennungsdienst; sie behandelt auch das {{domxref("SpeechRecognitionEvent")}}, das vom Erkennungsdienst gesendet wird.

> [!NOTE]
> In einigen Browsern, wie Chrome, erfordert die Nutzung der Spracherkennung auf einer Webseite eine serverbasierte Erkennungs-Engine. Ihr Audio wird an einen Webdienst zur Erkennungsverarbeitung gesendet und funktioniert daher nicht offline.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}}
  - : Erstellt ein neues `SpeechRecognition`-Objekt.

## Instanz-Eigenschaften

_`SpeechRecognition` erbt auch Eigenschaften von seiner Elternschnittstelle, {{domxref("EventTarget")}}._

- {{domxref("SpeechRecognition.grammars")}}
  - : Gibt eine Sammlung von {{domxref("SpeechGrammar")}}-Objekten zurück und setzt diese, die die Grammatiken repräsentieren, die von der aktuellen `SpeechRecognition` verstanden werden.
- {{domxref("SpeechRecognition.lang")}}
  - : Gibt die Sprache der aktuellen `SpeechRecognition` zurück und setzt sie. Wenn nicht angegeben, wird dies standardmäßig auf den Wert des HTML-Attributs [`lang`](/de/docs/Web/HTML/Global_attributes/lang) gesetzt oder auf die Spracheinstellung des Benutzeragenten, wenn auch dies nicht festgelegt ist.
- {{domxref("SpeechRecognition.continuous")}}
  - : Steuert, ob kontinuierliche Ergebnisse für jede Erkennung zurückgegeben werden oder nur ein einzelnes Ergebnis. Standardmäßig auf einzeln (`false`) gesetzt.
- {{domxref("SpeechRecognition.interimResults")}}
  - : Steuert, ob Zwischen-Ergebnisse zurückgegeben werden sollen (`true`) oder nicht (`false`). Zwischen-Ergebnisse sind Ergebnisse, die noch nicht endgültig sind (z.B. die Eigenschaft {{domxref("SpeechRecognitionResult.isFinal")}} ist `false`).
- {{domxref("SpeechRecognition.maxAlternatives")}}
  - : Legt die maximale Anzahl von {{domxref("SpeechRecognitionAlternative")}}s fest, die pro Ergebnis bereitgestellt werden. Der Standardwert ist 1.

## Instanz-Methoden

_`SpeechRecognition` erbt auch Methoden von seiner Elternschnittstelle, {{domxref("EventTarget")}}._

- {{domxref("SpeechRecognition.abort()")}}
  - : Stoppt den Sprachenerkennungsdienst, das eingehende Audio zu hören, und versucht nicht, ein {{domxref("SpeechRecognitionResult")}} zurückzugeben.
- {{domxref("SpeechRecognition.start()")}}
  - : Startet den Sprachenerkennungsdienst, um das eingehende Audio mit der Absicht zu hören, die mit der aktuellen `SpeechRecognition` verbundenen Grammatiken zu erkennen.
- {{domxref("SpeechRecognition.stop()")}}
  - : Stoppt den Sprachenerkennungsdienst, das eingehende Audio zu hören, und versucht, ein {{domxref("SpeechRecognitionResult")}} zurückzugeben, das das bisher erfasste Audio verwendet.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der Eigenschaft `oneventname` dieser Schnittstelle zuweisen.

- [`audiostart`](/de/docs/Web/API/SpeechRecognition/audiostart_event)
  - : Wird ausgelöst, wenn der Benutzeragent begonnen hat, Audio zu erfassen.
    Auch über die Eigenschaft `onaudiostart` verfügbar.
- [`audioend`](/de/docs/Web/API/SpeechRecognition/audioend_event)
  - : Wird ausgelöst, wenn der Benutzeragent die Audio-Erfassung abgeschlossen hat.
    Auch über die Eigenschaft `onaudioend` verfügbar.
- [`end`](/de/docs/Web/API/SpeechRecognition/end_event)
  - : Wird ausgelöst, wenn der Sprachenerkennungsdienst getrennt wurde.
    Auch über die Eigenschaft `onend` verfügbar.
- [`error`](/de/docs/Web/API/SpeechRecognition/error_event)
  - : Wird ausgelöst, wenn ein Fehler bei der Spracherkennung auftritt.
    Auch über die Eigenschaft `onerror` verfügbar.
- [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)
  - : Wird ausgelöst, wenn der Sprachenerkennungsdienst ein endgültiges Ergebnis ohne signifikante Erkennung zurückgibt. Dies kann ein gewisses Maß an Erkennung beinhalten, das den {{domxref("SpeechRecognitionAlternative.confidence","confidence")}}-Schwellenwert nicht erreicht oder überschreitet.
    Auch über die Eigenschaft `onnomatch` verfügbar.
- [`result`](/de/docs/Web/API/SpeechRecognition/result_event)
  - : Wird ausgelöst, wenn der Sprachenerkennungsdienst ein Ergebnis zurückgibt — ein Wort oder eine Phrase wurde positiv erkannt und an die App zurückgemeldet.
    Auch über die Eigenschaft `onresult` verfügbar.
- [`soundstart`](/de/docs/Web/API/SpeechRecognition/soundstart_event)
  - : Wird ausgelöst, wenn irgendein Ton — erkennbarer Sprache oder nicht — erkannt wurde.
    Auch über die Eigenschaft `onsoundstart` verfügbar.
- [`soundend`](/de/docs/Web/API/SpeechRecognition/soundend_event)
  - : Wird ausgelöst, wenn irgendein Ton — erkennbarer Sprache oder nicht — nicht mehr erkannt wird.
    Auch über die Eigenschaft `onsoundend` verfügbar.
- [`speechstart`](/de/docs/Web/API/SpeechRecognition/speechstart_event)
  - : Wird ausgelöst, wenn ein Ton erkannt wird, den der Sprachenerkennungsdienst als Sprache erkennt.
    Auch über die Eigenschaft `onspeechstart` verfügbar.
- [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event)
  - : Wird ausgelöst, wenn die erkannte Sprache des Sprachenerkennungsdienstes nicht mehr erkannt wird.
    Auch über die Eigenschaft `onspeechend` verfügbar.
- [`start`](/de/docs/Web/API/SpeechRecognition/start_event)
  - : Wird ausgelöst, wenn der Sprachenerkennungsdienst begonnen hat, eingehendes Audio zu hören, mit der Absicht, die mit der aktuellen `SpeechRecognition` verbundenen Grammatiken zu erkennen.
    Auch über die Eigenschaft `onstart` verfügbar.

## Beispiele

In unserem einfachen Beispiel [Speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer) erstellen wir eine neue `SpeechRecognition`-Objektinstanz mit dem {{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}}-Konstruktor, erstellen eine neue {{domxref("SpeechGrammarList")}} und legen sie als die Grammatik fest, die von der `SpeechRecognition`-Instanz erkannt werden soll, indem wir die Eigenschaft {{domxref("SpeechRecognition.grammars")}} verwenden.

Nachdem einige andere Werte definiert wurden, stellen wir dann ein, dass der Erkennungsdienst startet, wenn ein Klickereignis auftritt (siehe {{domxref("SpeechRecognition.start()")}}.) Wenn ein Ergebnis erfolgreich erkannt wurde, wird das {{domxref("SpeechRecognition.result_event", "result")}}-Ereignis ausgelöst, wir extrahieren die gesprochene Farbe aus dem Ereignisobjekt und setzen dann die Hintergrundfarbe des {{htmlelement("html")}}-Elements auf diese Farbe.

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
