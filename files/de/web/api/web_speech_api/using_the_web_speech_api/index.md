---
title: Verwendung der Web Speech API
slug: Web/API/Web_Speech_API/Using_the_Web_Speech_API
l10n:
  sourceCommit: d4ea77f1c9e15e472e484d9561319597c5cce716
---

{{DefaultAPISidebar("Web Speech API")}}
Die Web Speech API bietet zwei unterschiedliche Funktionen — Spracherkennung und Sprachsynthese (auch bekannt als Text-zu-Sprache oder TTS) — die interessante neue Möglichkeiten für Barrierefreiheit und Steuerungsmechanismen eröffnen. Dieser Artikel bietet eine einfache Einführung in beide Bereiche, zusammen mit Demonstrationen.

## Spracherkennung

Die Spracherkennung umfasst das Empfangen von Sprache über das Mikrofon eines Geräts, welche dann von einem Spracherkennungsdienst mit einer Liste von Grammatik (im Wesentlichen dem Vokabular, das Sie in einer bestimmten Anwendung erkannt haben möchten) abgeglichen wird. Wenn ein Wort oder Satz erfolgreich erkannt wird, wird es als Ergebnis (oder Liste von Ergebnissen) als Textzeichenfolge zurückgegeben, und es können weitere Aktionen initiiert werden.

Die Web Speech API verfügt über eine Hauptsteuerungsschnittstelle hierfür — [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) — sowie über einige eng verwandte Schnittstellen zur Darstellung von Grammatik, Ergebnissen usw. In der Regel wird das standardmäßig auf dem Gerät verfügbare Spracherkennungssystem für die Spracherkennung verwendet — die meisten modernen Betriebssysteme verfügen über ein System zur Ausführung von Sprachbefehlen. Denken Sie an Diktieren auf macOS, Siri auf iOS, Cortana auf Windows 10, Android Speech usw.

> [!NOTE]
> In einigen Browsern, wie Chrome, umfasst die Verwendung der Spracherkennung auf einer Webseite eine serverbasierte Erkennungs-Engine. Ihr Audio wird zur Erkennungsverarbeitung an einen Webdienst gesendet, sodass es offline nicht funktioniert.

### Demo

Um die einfache Nutzung der Web-Spracherkennung zu zeigen, haben wir eine Demo namens [Speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer) erstellt. Wenn der Bildschirm angetippt/geklickt wird, können Sie ein HTML-Farbcode-Wort sagen, und die Hintergrundfarbe der App ändert sich in diese Farbe.

![Das UI einer Anwendung namens Speech Color Changer. Es lädt den Benutzer ein, den Bildschirm zu berühren und eine Farbe zu sagen, und dann färbt es den Hintergrund der App in diese Farbe. In diesem Fall hat es den Hintergrund rot gefärbt.](speech-color-changer.png)

Um die Demo auszuführen, navigieren Sie zur [Live-Demo-URL](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) in einem unterstützenden mobilen Browser (wie Chrome).

### HTML und CSS

Das HTML und CSS für die App ist wirklich trivial. Wir haben einen Titel, einen Instruktions-Absatz und ein Div, in das wir Diagnosenachrichten ausgeben.

```html
<h1>Speech color changer</h1>
<p>Tap/click then say a color to change the background color of the app.</p>
<div>
  <p class="output"><em>…diagnostic messages</em></p>
</div>
```

Das CSS bietet ein sehr einfaches, responsives Styling, sodass es auf allen Geräten gut aussieht.

### JavaScript

Schauen wir uns das JavaScript etwas genauer an.

#### Präfix-Eigenschaften

Browser unterstützen derzeit die Spracherkennung mit Präfix-Eigenschaften. Daher fügen wir zu Beginn unseres Codes diese Zeilen hinzu, um sowohl Präfix-Eigenschaften als auch nicht gepräfixte Versionen zuzulassen, die möglicherweise in Zukunft unterstützt werden:

```js
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
```

#### Die Grammatik

Der nächste Teil unseres Codes definiert die Grammatik, die unsere App erkennen soll. Die folgende Variable wird definiert, um unsere Grammatik zu halten:

```js
const colors = [
  "aqua",
  "azure",
  "beige",
  "bisque",
  "black",
  "blue",
  "brown",
  "chocolate",
  "coral" /* … */,
];
const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(
  " | ",
)};`;
```

Das verwendete Grammatikformat ist das [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) — Sie können viel mehr darüber im vorhergehenden Link zur Spezifikation finden. Im Moment wollen wir es jedoch schnell durchlaufen:

- Die Zeilen sind durch Semikolons getrennt, genau wie in JavaScript.
- Die erste Zeile — `#JSGF V1.0;` — gibt das verwendete Format und die Version an. Dies muss immer zuerst enthalten sein.
- Die zweite Zeile gibt eine Art von Begriff an, den wir erkennen möchten. `public` gibt an, dass es sich um eine öffentliche Regel handelt, die Zeichenfolge in spitzen Klammern definiert den erkannten Namen für diesen Begriff (`color`), und die Liste der nach dem Gleichheitszeichen folgenden Elemente sind die alternativen Werte, die erkannt und als geeignete Werte für den Begriff akzeptiert werden. Beachten Sie, wie jeder durch ein Pipe-Zeichen getrennt ist.
- Es können beliebig viele Begriffe in separaten Zeilen nach dem obigen Aufbau definiert werden, einschließlich recht komplexer Grammatikdefinitionen. Für diese einfache Demo halten wir die Dinge jedoch einfach.

#### Einfügen der Grammatik in unsere Spracherkennung

Als nächstes müssen wir eine Spracherkennungsinstanz definieren, um die Erkennung für unsere Anwendung zu steuern. Dies geschieht mit dem Konstruktor [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition). Wir erstellen auch eine neue Sprachgrammatik-Liste, um unsere Grammatik zu enthalten, unter Verwendung des Konstruktors [`SpeechGrammarList()`](/de/docs/Web/API/SpeechGrammarList/SpeechGrammarList).

```js
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
```

Wir fügen unsere `grammar` der Liste mit der Methode [`SpeechGrammarList.addFromString()`](/de/docs/Web/API/SpeechGrammarList/addFromString) hinzu. Diese akzeptiert als Parameter die Zeichenfolge, die wir hinzufügen möchten, plus optional einen Gewichtswert, der die Wichtigkeit dieser Grammatik im Verhältnis zu anderen verfügbaren Grammatiken in der Liste angibt (kann von 0 bis 1 inklusiv sein). Die hinzugefügte Grammatik ist in der Liste als Instanz eines [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar) Objekt verfügbar.

```js
speechRecognitionList.addFromString(grammar, 1);
```

Wir fügen dann die [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) der Spracherkennungsinstanz hinzu, indem wir sie auf den Wert der [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars) Eigenschaft setzen. Wir setzen auch einige andere Eigenschaften der Erkennungsinstanz, bevor wir fortfahren:

- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous): Steuert, ob kontinuierlich Ergebnisse erfasst werden (`true`) oder jeweils nur ein einzelnes Ergebnis, wenn die Erkennung gestartet wird (`false`).
- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang): Setzt die Sprache der Erkennung. Es ist gute Praxis, dies festzulegen, und daher empfohlen.
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults): Definiert, ob das Spracherkennungssystem vorläufige Ergebnisse zurückgeben soll oder nur endgültige Ergebnisse. Endgültige Ergebnisse reichen für diese einfache Demo aus.
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives): Legt fest, wie viele alternative potenzielle Übereinstimmungen pro Ergebnis zurückgegeben werden sollen. Dies kann manchmal nützlich sein, zum Beispiel wenn ein Ergebnis nicht völlig klar ist und man eine Liste von Alternativen anzeigen möchte, aus der der Benutzer die richtige auswählen kann. Für diese einfache Demo ist das jedoch nicht notwendig, sodass wir einfach eine angeben (was ohnehin der Standard ist).

```js
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
```

#### Starten der Spracherkennung

Nach dem Erfassen von Verweisen auf das Ausgabeelement {{htmlelement("div")}} und das HTML-Element (damit wir später Diagnosenachrichten ausgeben und die Hintergrundfarbe der App aktualisieren können), implementieren wir einen `onclick`-Handler, sodass der Spracherkennungsdienst startet, wenn der Bildschirm angetippt/geklickt wird. Dies wird durch Aufrufen von [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start) erreicht. Die Methode `forEach()` wird verwendet, um farbige Indikatoren anzuzeigen, welche Farben ausprobiert werden sollen.

```js
const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");
const hints = document.querySelector(".hints");

let colorHTML = "";
colors.forEach((color, i) => {
  console.log(color, i);
  colorHTML += `<span style="background-color:${color};"> ${color} </span>`;
});
hints.innerHTML = `Tap or click then say a color to change the background color of the app. Try ${colorHTML}.`;

document.body.onclick = () => {
  recognition.start();
  console.log("Ready to receive a color command.");
};
```

#### Empfangen und Verarbeiten von Ergebnissen

Sobald die Spracherkennung gestartet ist, gibt es viele Ereignishandler, die verwendet werden können, um Ergebnisse und andere umgebende Informationen zu erhalten (siehe die [`SpeechRecognition`-Ereignisse](/de/docs/Web/API/SpeechRecognition#events).) Das gebräuchlichste, das Sie wahrscheinlich verwenden werden, ist das [`result`](/de/docs/Web/API/SpeechRecognition/result_event) Ereignis, das ausgelöst wird, wenn ein erfolgreiches Ergebnis empfangen wurde:

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(`Confidence: ${event.results[0][0].confidence}`);
};
```

Die zweite Zeile hier sieht etwas komplex aus, also lassen Sie uns sie Schritt für Schritt erklären. Die Eigenschaft [`SpeechRecognitionEvent.results`](/de/docs/Web/API/SpeechRecognitionEvent/results) gibt ein [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList) Objekt zurück, das [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) Objekte enthält. Es hat einen Getter, sodass es wie ein Array zugegriffen werden kann — das erste `[0]` gibt das `SpeechRecognitionResult` an Position 0 zurück. Jedes `SpeechRecognitionResult` Objekt enthält [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative) Objekte, die einzelne erkannte Wörter enthalten. Diese haben ebenfalls Getter, sodass sie wie Arrays zugegriffen werden können — das zweite `[0]` gibt somit die `SpeechRecognitionAlternative` an Position 0 zurück. Wir geben dann ihre `transcript`-Eigenschaft zurück, um eine Zeichenfolge zu erhalten, die das individuell erkannte Ergebnis als Zeichenfolge enthält, setzen die Hintergrundfarbe auf diese Farbe und melden die erkannte Farbe als Diagnosenachricht in der UI.

Wir verwenden auch das [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event) Ereignis, um den Spracherkennungsdienst zu stoppen (unter Verwendung von [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop)), sobald ein einzelnes Wort erkannt wurde und es zu Ende gesprochen wurde:

```js
recognition.onspeechend = () => {
  recognition.stop();
};
```

#### Behandeln von Fehlern und nicht erkannter Sprache

Die letzten beiden Handler sind da, um Fälle zu behandeln, in denen Sprache erkannt wurde, die nicht in der definierten Grammatik war, oder wenn ein Fehler auftrat. Das [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event) Ereignis scheint dazu gedacht zu sein, den ersten Fall zu behandeln, obwohl es im Moment nicht korrekt ausgelöst wird; es gibt einfach das zurück, was ohnehin erkannt wurde:

```js
recognition.onnomatch = (event) => {
  diagnostic.textContent = "I didn't recognize that color.";
};
```

Das [`error`](/de/docs/Web/API/SpeechRecognition/error_event) Ereignis behandelt Fälle, in denen ein tatsächlicher Fehler bei der Erkennung aufgetreten ist — die Eigenschaft [`SpeechRecognitionErrorEvent.error`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error) enthält den tatsächlichen zurückgegebenen Fehler:

```js
recognition.onerror = (event) => {
  diagnostic.textContent = `Error occurred in recognition: ${event.error}`;
};
```

## Sprachsynthese

Sprachsynthese (auch bekannt als Text-zu-Sprache oder TTS) bezieht sich auf das Empfangen und Umwandeln von Text innerhalb einer App in Sprache und die Wiedergabe dieser über ein Gerätelautsprecher oder einen Audioausgang.

Die Web Speech API verfügt über eine Hauptsteuerungsschnittstelle hierfür — [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) — sowie über einige eng verwandte Schnittstellen zur Darstellung von Text, der synthetisiert werden soll (bekannt als Äußerungen), Stimmen, die für die Äußerung verwendet werden sollen usw. Auch hier haben die meisten Betriebssysteme eine Art Sprachsynthesesystem, das von der API für diese Aufgabe verwendet wird, sofern verfügbar.

### Demo

Um die einfache Nutzung der Web-Sprachsynthese zu zeigen, haben wir eine Demo namens [Speak easy synthesis](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) bereitgestellt. Diese enthält eine Reihe von Formularelementen zum Eingeben von Text, der synthetisiert werden soll, und zum Festlegen der Tonhöhe, der Geschwindigkeit und der Stimme, die beim Aussprechen des Textes verwendet werden sollen. Nachdem Sie Ihren Text eingegeben haben, können Sie <kbd>Enter</kbd>/<kbd>Return</kbd> drücken, um ihn gesprochen zu hören.

![UI einer App namens Speak Easy Synthesis. Es gibt ein Eingabefeld, in das Text eingegeben werden kann, der synthetisiert werden soll, Schieberegler zur Änderung der Sprachgeschwindigkeit und Tonhöhe sowie ein Dropdown-Menü zur Auswahl zwischen verschiedenen Stimmen.](speak-easy-synthesis.png)

Um die Demo auszuführen, navigieren Sie zur [Live-Demo-URL](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) in einem unterstützenden mobilen Browser.

### HTML und CSS

Das HTML und CSS ist wieder ziemlich einfach, enthält einen Titel, einige Anweisungen zur Verwendung und ein Formular mit einigen einfachen Steuerelementen. Das {{htmlelement("select")}} Element ist anfänglich leer, wird jedoch über JavaScript mit {{htmlelement("option")}}s gefüllt (siehe weiter unten).

```html
<h1>Speech synthesizer</h1>

<p>
  Enter some text in the input below and press return to hear it. Change voices
  using the dropdown menu.
</p>

<form>
  <input type="text" class="txt" />
  <div>
    <label for="rate">Rate</label
    ><input type="range" min="0.5" max="2" value="1" step="0.1" id="rate" />
    <div class="rate-value">1</div>
    <div class="clearfix"></div>
  </div>
  <div>
    <label for="pitch">Pitch</label
    ><input type="range" min="0" max="2" value="1" step="0.1" id="pitch" />
    <div class="pitch-value">1</div>
    <div class="clearfix"></div>
  </div>
  <select></select>
</form>
```

### JavaScript

Untersuchen wir das JavaScript, das diese App antreibt.

#### Variablen festlegen

Zuerst erfassen wir Verweise auf alle am UI beteiligten DOM-Elemente, aber interessanterweise erfassen wir einen Verweis auf [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis). Dies ist der Einstiegspunkt der API — es gibt eine Instanz von [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) zurück, die Steuerungsschnittstelle für die Web-Sprachsynthese.

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector(".txt");
const voiceSelect = document.querySelector("select");

const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector(".pitch-value");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector(".rate-value");

const voices = [];
```

#### Das Auswahl-Element füllen

Um das {{htmlelement("select")}}-Element mit den verschiedenen Sprachoptionen zu füllen, die auf dem Gerät verfügbar sind, haben wir eine Funktion `populateVoiceList()` geschrieben. Wir rufen zuerst [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) auf, das eine Liste aller verfügbaren Stimmen, dargestellt durch [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice) Objekte, zurückgibt. Wir durchlaufen dann diese Liste — für jede Stimme erstellen wir ein {{htmlelement("option")}}-Element, setzen den Textinhalt, um den Namen der Stimme anzuzeigen (von [`SpeechSynthesisVoice.name`](/de/docs/Web/API/SpeechSynthesisVoice/name) abgerufen), die Sprache der Stimme (von [`SpeechSynthesisVoice.lang`](/de/docs/Web/API/SpeechSynthesisVoice/lang) abgerufen) und `-- DEFAULT`, falls die Stimme die Standardstimme für die Synthesemaschine ist (geprüft, indem gesehen wird, ob [`SpeechSynthesisVoice.default`](/de/docs/Web/API/SpeechSynthesisVoice/default) `true` zurückgibt).

Wir erstellen auch `data-` Attribute für jede Option, die den Namen und die Sprache der zugeordneten Stimme enthalten, sodass wir sie später leicht abrufen können, und fügen die Optionen als Kinder des Select-Elements hinzu.

```js
function populateVoiceList() {
  voices = synth.getVoices();

  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  }
}
```

Ältere Browser unterstützen das [`voiceschanged`](/de/docs/Web/API/SpeechSynthesis/voiceschanged_event) Ereignis nicht und geben einfach eine Liste von Stimmen zurück, wenn [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) ausgelöst wird. Während es in anderen, wie Chrome, notwendig ist, auf das Ereignis zu warten, bevor die Liste gefüllt wird. Um beiden Fällen gerecht zu werden, führen wir die Funktion wie unten gezeigt aus:

```js
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

#### Den eingegebenen Text sprechen

Als nächstes erstellen wir einen Ereignis-Handler, um den Text, der in das Textfeld eingegeben wurde, zu beginnen zu sprechen. Wir verwenden einen [onsubmit](/de/docs/Web/API/HTMLFormElement/submit_event) Handler auf dem Formular, sodass die Aktion erfolgt, wenn <kbd>Enter</kbd>/<kbd>Return</kbd> gedrückt wird. Zuerst erstellen wir eine neue [`SpeechSynthesisUtterance()`](/de/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance) Instanz mit ihrem Konstruktor — dieser wird der Wert des Text-Inputs als Parameter übergeben.

Als nächstes müssen wir herausfinden, welche Stimme verwendet werden soll. Wir nutzen die [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) `selectedOptions`-Eigenschaft, um das momentan ausgewählte {{htmlelement("option")}}-Element zurückzugeben. Wir verwenden dann das `data-name` Attribut dieses Elements, um das [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice) Objekt zu finden, dessen Name dem Wert dieses Attributs entspricht. Wir setzen das passende Sprachobjekt als Wert der [`SpeechSynthesisUtterance.voice`](/de/docs/Web/API/SpeechSynthesisUtterance/voice) Eigenschaft.

Schließlich setzen wir die [`SpeechSynthesisUtterance.pitch`](/de/docs/Web/API/SpeechSynthesisUtterance/pitch) und [`SpeechSynthesisUtterance.rate`](/de/docs/Web/API/SpeechSynthesisUtterance/rate) auf die Werte der entsprechenden Bereichelemente des Formulars. Dann, mit allen notwendigen Vorbereitungen getroffen, starten wir die Äußerung, indem wir [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak) aufrufen und die Instanz der [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) als Parameter übergeben.

```js
inputForm.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for (const voice of voices) {
    if (voice.name === selectedOption) {
      utterThis.voice = voice;
    }
  }
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
  synth.speak(utterThis);
```

Im letzten Teil des Handlers fügen wir ein [`pause`](/de/docs/Web/API/SpeechSynthesisUtterance/pause_event) Ereignis hinzu, um zu zeigen, wie [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent) gut genutzt werden kann. Wenn [`SpeechSynthesis.pause()`](/de/docs/Web/API/SpeechSynthesis/pause) aufgerufen wird, gibt dies eine Nachricht zurück, die die Zeichenanzahl und den Namen meldet, an dem die Sprache angehalten wurde.

```js
utterThis.onpause = (event) => {
  const char = event.utterance.text.charAt(event.charIndex);
  console.log(
    `Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`,
  );
};
```

Schließlich rufen wir [blur()](/de/docs/Web/API/HTMLElement/blur) am Text-Input auf. Dies dient hauptsächlich dazu, die Tastatur auf Firefox OS auszublenden.

```js
  inputTxt.blur();
}
```

#### Aktualisieren der angezeigten Werte für Tonhöhe und Geschwindigkeit

Der letzte Teil des Codes aktualisiert die `pitch`/`rate` Werte, die im UI angezeigt werden, jedes Mal, wenn die Schiebereglerpositionen verschoben werden.

```js
pitch.onchange = () => {
  pitchValue.textContent = pitch.value;
};

rate.onchange = () => {
  rateValue.textContent = rate.value;
};
```
