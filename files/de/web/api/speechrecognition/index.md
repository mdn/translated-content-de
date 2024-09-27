---
title: SpeechRecognition
slug: Web/API/SpeechRecognition
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Speech API")}}

Die **`SpeechRecognition`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist die Kontrollschnittstelle für den Erkennungsdienst; sie verwaltet auch das [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent), das vom Erkennungsdienst gesendet wird.

> [!NOTE]
> In einigen Browsern, wie Chrome, beinhaltet die Sprachwiedererkennung auf einer Webseite eine serverbasierte Erkennungs-Engine. Ihr Audio wird an einen Webdienst zur Erkennungsverarbeitung gesendet, daher funktioniert es nicht offline.

{{InheritanceDiagram}}

## Konstruktor

- [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)
  - : Erstellt ein neues `SpeechRecognition`-Objekt.

## Instanz-Eigenschaften

_`SpeechRecognition` erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars)
  - : Gibt eine Sammlung von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten zurück und setzt diese, welche die Grammatiken darstellen, die von der aktuellen `SpeechRecognition` verstanden werden.
- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang)
  - : Gibt die Sprache der aktuellen `SpeechRecognition` zurück und setzt diese. Wenn nicht angegeben, wird auf den HTML-Attributwert [`lang`](/de/docs/Web/HTML/Global_attributes/lang) oder die Spracheinstellung des User-Agents zurückgegriffen, falls auch dies nicht festgelegt ist.
- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous)
  - : Kontrolliert, ob kontinuierliche Ergebnisse für jede Erkennung zurückgegeben werden oder nur ein einzelnes Ergebnis. Der Standardwert ist Einzel (`false`).
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults)
  - : Kontrolliert, ob Zwischenergebnisse zurückgegeben werden sollen (`true`) oder nicht (`false`). Zwischenergebnisse sind Ergebnisse, die noch nicht final sind (z.B. ist die Eigenschaft [`SpeechRecognitionResult.isFinal`](/de/docs/Web/API/SpeechRecognitionResult/isFinal) `false`).
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives)
  - : Setzt die maximale Anzahl von [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)s, die pro Ergebnis bereitgestellt werden. Der Standardwert ist 1.

## Instanz-Methoden

_`SpeechRecognition` erbt auch Methoden von seiner übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechRecognition.abort()`](/de/docs/Web/API/SpeechRecognition/abort)
  - : Stoppt den Sprachenerkennungsdienst, sodass er nicht mehr auf eingehendes Audio lauscht, und versucht nicht, ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) zurückzugeben.
- [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start)
  - : Startet den Sprachenerkennungsdienst, um auf eingehendes Audio zu lauschen, mit der Absicht, die mit der aktuellen `SpeechRecognition` verbundenen Grammatiken zu erkennen.
- [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop)
  - : Stoppt den Sprachenerkennungsdienst, indem es keine eingehenden Audios mehr entgegennimmt, und versucht, ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) mit dem bisher aufgenommenen Audio zurückzugeben.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener auf die `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`audiostart`](/de/docs/Web/API/SpeechRecognition/audiostart_event)
  - : Wird ausgelöst, wenn der Benutzeragent damit begonnen hat, Audio aufzunehmen.
    Auch über die `onaudiostart`-Eigenschaft verfügbar.
- [`audioend`](/de/docs/Web/API/SpeechRecognition/audioend_event)
  - : Wird ausgelöst, wenn der Benutzeragent das Aufnehmen von Audio beendet hat.
    Auch über die `onaudioend`-Eigenschaft verfügbar.
- [`end`](/de/docs/Web/API/SpeechRecognition/end_event)
  - : Wird ausgelöst, wenn der Sprachenerkennungsdienst die Verbindung getrennt hat.
    Auch über die `onend`-Eigenschaft verfügbar.
- [`error`](/de/docs/Web/API/SpeechRecognition/error_event)
  - : Wird ausgelöst, wenn ein Fehler bei der Sprachwiedererkennung auftritt.
    Auch über die `onerror`-Eigenschaft verfügbar.
- [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)
  - : Wird ausgelöst, wenn der Sprachenerkennungsdienst ein endgültiges Ergebnis ohne signifikante Erkennung zurückgibt. Dies kann einen gewissen Grad der Erkennung beinhalten, der die [`confidence`](/de/docs/Web/API/SpeechRecognitionAlternative/confidence)-Schwelle nicht erreicht oder überschreitet.
    Auch über die `onnomatch`-Eigenschaft verfügbar.
- [`result`](/de/docs/Web/API/SpeechRecognition/result_event)
  - : Wird ausgelöst, wenn der Sprachenerkennungsdienst ein Ergebnis zurückgibt – ein Wort oder eine Phrase wurde positiv erkannt und dem Anwendungsprogramm zurückgemeldet.
    Auch über die `onresult`-Eigenschaft verfügbar.
- [`soundstart`](/de/docs/Web/API/SpeechRecognition/soundstart_event)
  - : Wird ausgelöst, wenn ein beliebiges Geräusch – erkennbarer Sprache oder nicht – erkannt wird.
    Auch über die `onsoundstart`-Eigenschaft verfügbar.
- [`soundend`](/de/docs/Web/API/SpeechRecognition/soundend_event)
  - : Wird ausgelöst, wenn ein beliebiges Geräusch – erkennbarer Sprache oder nicht – nicht mehr erkannt wird.
    Auch über die `onsoundend`-Eigenschaft verfügbar.
- [`speechstart`](/de/docs/Web/API/SpeechRecognition/speechstart_event)
  - : Wird ausgelöst, wenn der Sprachenerkennungsdienst ein als Sprache erkennbares Geräusch erkannt hat.
    Auch über die `onspeechstart`-Eigenschaft verfügbar.
- [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event)
  - : Wird ausgelöst, wenn die vom Sprachenerkennungsdienst erkannte Sprache nicht mehr erkannt wird.
    Auch über die `onspeechend`-Eigenschaft verfügbar.
- [`start`](/de/docs/Web/API/SpeechRecognition/start_event)
  - : Wird ausgelöst, wenn der Sprachenerkennungsdienst begonnen hat, auf eingehendes Audio zu lauschen, um Grammatiken zu erkennen, die mit der aktuellen `SpeechRecognition` verbunden sind.
    Auch über die `onstart`-Eigenschaft verfügbar.

## Beispiele

In unserem einfachen [Speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer) Beispiel erstellen wir eine neue `SpeechRecognition`-Objektinstanz unter Verwendung des [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition) Konstruktors, erstellen eine neue [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) und legen diese als die Grammatik fest, die von der `SpeechRecognition`-Instanz mit der [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars)-Eigenschaft erkannt wird.

Nachdem einige andere Werte definiert wurden, setzen wir die Erkennung so, dass der Dienst startet, wenn ein Klick-Ereignis auftritt (siehe [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start).) Wenn ein Resultat erfolgreich erkannt wurde, wird das [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Ereignis ausgelöst; wir extrahieren die gesprochene Farbe aus dem Ereignisobjekt und setzen dann die Hintergrundfarbe des {{htmlelement("html")}}-Elements auf diese Farbe.

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
