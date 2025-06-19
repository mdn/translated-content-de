---
title: Verwendung der Web Speech API
slug: Web/API/Web_Speech_API/Using_the_Web_Speech_API
l10n:
  sourceCommit: fd09c1946d60a65cdac611601710177b3246ce35
---

{{DefaultAPISidebar("Web Speech API")}}
Die Web Speech API bietet zwei unterschiedliche Funktionalitäten — Spracherkennung und Sprachausgabe (auch bekannt als Text-to-Speech oder tts) — die interessante neue Möglichkeiten für Barrierefreiheit und Steuermethoden eröffnen. Dieser Artikel bietet eine einfache Einführung in beide Bereiche, zusammen mit Demos.

## Spracherkennung

Spracherkennung beinhaltet das Empfangen von Sprache über das Mikrofon eines Geräts, die dann von einem Spracherkennungsdienst mit einer Grammatikliste abgeglichen wird (im Grunde genommen das Vokabular, das Sie in einer bestimmten App erkannt haben möchten). Wenn ein Wort oder Satz erfolgreich erkannt wird, wird es als Ergebnis (oder Liste von Ergebnissen) als Textzeichenfolge zurückgegeben, und es können daraufhin weitere Aktionen initiiert werden.

Die Web Speech API verfügt über eine Hauptsteuerungsschnittstelle dafür — [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) — sowie eine Reihe von eng verwandten Schnittstellen zum Darstellen von Grammatik, Ergebnissen usw. Im Allgemeinen wird das standardmäßige Spracherkennungssystem verwendet, das auf dem Gerät verfügbar ist — die meisten modernen Betriebssysteme haben ein Spracherkennungssystem zur Ausgabe von Sprachbefehlen. Denken Sie an die Diktierfunktion auf macOS, Siri auf iOS, Cortana auf Windows 10, Android Speech usw.

> [!NOTE]
> In einigen Browsern, wie Chrome, erfordert die Spracherkennung auf einer Webseite eine serverbasierte Erkennungs-Engine. Ihr Audio wird an einen Webdienst zur Erkennungsverarbeitung gesendet, sodass es offline nicht funktioniert.

### Demo

Um die einfache Nutzung der Web-Spracherkennung zu demonstrieren, haben wir eine Demo namens [Speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer) geschrieben. Wenn der Bildschirm angetippt/geklickt wird, können Sie ein HTML-Farb-Schlüsselwort sagen, und die Hintergrundfarbe der App ändert sich in diese Farbe.

![Die Benutzeroberfläche einer App mit dem Titel Speech Color Changer. Sie lädt den Benutzer ein, den Bildschirm zu tippen und eine Farbe zu sagen, und ändert dann die Hintergrundfarbe der App in diese Farbe. In diesem Fall hat sie den Hintergrund rot eingefärbt.](speech-color-changer.png)

Um die Demo auszuführen, navigieren Sie zur [Live-Demo-URL](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) in einem unterstützenden mobilen Browser (wie Chrome).

### HTML und CSS

Das HTML und CSS für die App ist wirklich trivial. Wir haben einen Titel, einen Anleitungsabsatz und ein Div, in das wir Diagnosemeldungen ausgeben.

```html
<h1>Speech color changer</h1>
<p class="hints"></p>
<div>
  <p class="output"><em>…diagnostic messages</em></p>
</div>
```

Das CSS bietet eine sehr einfache, responsive Gestaltung, sodass es auf allen Geräten gut aussieht.

### JavaScript

Schauen wir uns das JavaScript etwas genauer an.

#### Präfixeigenschaften

Browser unterstützen derzeit Spracherkennung mit Präfixeigenschaften.
Daher beinhalten wir am Anfang unseres Codes diese Zeilen, um sowohl Präfixeigenschaften als auch unpräfixierte Versionen zu ermöglichen, die möglicherweise in Zukunft unterstützt werden:

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
  "coral",
  // …
];
const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(
  " | ",
)};`;
```

Das verwendete Grammatikformat ist das [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) — weitere Informationen finden Sie unter dem obigen Link zur Spezifikation. Für den Moment gehen wir es jedoch schnell durch:

- Die Zeilen werden durch Semikolons getrennt, genau wie in JavaScript.
- Die erste Zeile — `#JSGF V1.0;` — gibt das verwendete Format und die Version an. Diese muss immer zuerst enthalten sein.
- Die zweite Zeile gibt eine Art von Begriff an, die wir erkennen möchten. `public` erklärt, dass es sich um eine öffentliche Regel handelt, die Zeichenfolge in der spitzen Klammer definiert den erkannten Namen für diesen Begriff (`color`), und die Liste von Elementen, die dem Gleichheitszeichen folgen, sind die alternativen Werte, die erkannt und akzeptiert werden als geeignete Werte für den Begriff. Beachten Sie, wie jede von einem Pipe-Zeichen getrennt ist.
- Sie können so viele Begriffe definieren, wie Sie möchten, auf separaten Zeilen, die der obigen Struktur folgen, und recht komplexe Grammatikdefinitionen einbeziehen. Für diese einfache Demo halten wir die Dinge einfach.

#### Einbindung der Grammatik in unsere Spracherkennung

Der nächste Schritt ist die Definition einer Spracherkennungsinstanz, um die Erkennung für unsere Anwendung zu steuern. Dies erfolgt mit dem [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition) Konstruktor. Wir erstellen auch eine neue Sprachgrammatikliste, um unsere Grammatik zu enthalten, mit dem [`SpeechGrammarList()`](/de/docs/Web/API/SpeechGrammarList/SpeechGrammarList) Konstruktor.

```js
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
```

Wir fügen unsere `grammar` der Liste mit der Methode [`SpeechGrammarList.addFromString()`](/de/docs/Web/API/SpeechGrammarList/addFromString) hinzu. Diese akzeptiert als Parameter die Zeichenfolge, die wir hinzufügen möchten, sowie optional einen Gewichtswert, der die Bedeutung dieser Grammatik in Bezug auf andere in der Liste verfügbare Grammatiken angibt (kann von 0 bis einschließlich 1 sein). Die hinzugefügte Grammatik ist in der Liste als Instanz des [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar) Objekts verfügbar.

```js
speechRecognitionList.addFromString(grammar, 1);
```

Wir fügen dann die [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) der Spracherkennungsinstanz hinzu, indem wir sie auf den Wert der [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars) Eigenschaft setzen. Wir setzen auch ein paar andere Eigenschaften der Erkennungsinstanz, bevor wir weitermachen:

- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous): Steuert, ob kontinuierliche Ergebnisse erfasst werden (`true`) oder nur ein einzelnes Ergebnis jedes Mal, wenn die Erkennung gestartet wird (`false`).
- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang): Setzt die Sprache der Erkennung. Dies einzustellen ist eine gute Praxis und daher empfohlen.
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults): Definiert, ob das Spracherkennungssystem vorläufige Ergebnisse oder nur endgültige Ergebnisse zurückgeben soll. Endgültige Ergebnisse sind für diese einfache Demo ausreichend.
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives): Stellt die Anzahl der alternativen potenziellen Übereinstimmungen ein, die pro Ergebnis zurückgegeben werden sollen. Dies kann manchmal nützlich sein, z.B. wenn ein Ergebnis nicht ganz klar ist und Sie eine Liste mit Alternativen anzeigen möchten, aus der der Benutzer die richtige auswählen kann. Aber es wird für diese einfache Demo nicht benötigt, daher spezifizieren wir nur eins (was eigentlich ohnehin der Standard ist).

```js
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
```

#### Starten der Spracherkennung

Nachdem wir Referenzen auf das Ausgabe-{{htmlelement("div")}} und das HTML-Element erfasst haben (um Diagnosen auszugeben und die Hintergrundfarbe der App später zu aktualisieren), implementieren wir einen `onclick`-Handler, sodass bei einem Tippen/Klicken auf den Bildschirm der Spracherkennungsdienst gestartet wird. Dies wird durch Aufruf von [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start) erreicht. Die `forEach()` Methode wird verwendet, um farbige Indikatoren auszugeben, welche Farben gesagt werden sollen.

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

Sobald die Spracherkennung gestartet ist, gibt es viele Ereignishandler, die zum Abrufen von Ergebnissen und anderen umgebenden Informationen verwendet werden können (siehe die [`SpeechRecognition` Ereignisse](/de/docs/Web/API/SpeechRecognition#events).) Der häufigste, den Sie wahrscheinlich verwenden werden, ist das [`result`](/de/docs/Web/API/SpeechRecognition/result_event) Ereignis, das ausgelöst wird, sobald ein erfolgreiches Ergebnis empfangen wurde:

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(`Confidence: ${event.results[0][0].confidence}`);
};
```

Die zweite Zeile hier sieht etwas komplex aus, deswegen erklären wir sie Schritt für Schritt. Die [`SpeechRecognitionEvent.results`](/de/docs/Web/API/SpeechRecognitionEvent/results) Eigenschaft gibt ein [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList) Objekt zurück, das [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) Objekte enthält. Es hat einen Getter, sodass es wie ein Array angesprochen werden kann — das erste `[0]` gibt das `SpeechRecognitionResult` an Position 0 zurück. Jedes `SpeechRecognitionResult` Objekt enthält [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative) Objekte, die individuelle erkannte Wörter enthalten. Diese haben ebenfalls Getter, sodass sie wie Arrays angesprochen werden können — das zweite `[0]` gibt daher die `SpeechRecognitionAlternative` an Position 0 zurück. Wir kehren dann ihre `transcript` Eigenschaft zurück, um eine Zeichenfolge zu erhalten, die das einzelne erkannte Ergebnis als Zeichenfolge enthält, setzen die Hintergrundfarbe auf die erkannte Farbe und melden die erkannte Farbe als Diagnosemeldung in der Benutzeroberfläche.

Wir verwenden auch das [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event) Ereignis, um den Spracherkennungsdienst vom Laufen abzuhalten (mithilfe von [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop)), sobald ein einzelnes Wort erkannt wurde und es vollständig ausgesprochen wurde:

```js
recognition.onspeechend = () => {
  recognition.stop();
};
```

#### Umgang mit Fehlern und nicht erkannter Sprache

Die letzten beiden Handler sind da, um Fälle zu behandeln, in denen Sprache erkannt wurde, die nicht in der definierten Grammatik war, oder ein Fehler aufgetreten ist. Das [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event) Ereignis scheint für den erstgenannten Fall vorgesehen zu sein, obwohl es momentan nicht korrekt ausgelöst zu werden scheint; es gibt einfach das zurück, was erkannt wurde.

```js
recognition.onnomatch = (event) => {
  diagnostic.textContent = "I didn't recognize that color.";
};
```

Das [`error`](/de/docs/Web/API/SpeechRecognition/error_event) Ereignis behandelt Fälle, in denen tatsächlich ein Fehler bei der erfolgreichen Erkennung aufgetreten ist — die [`SpeechRecognitionErrorEvent.error`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error) Eigenschaft enthält den tatsächlich zurückgegebenen Fehler:

```js
recognition.onerror = (event) => {
  diagnostic.textContent = `Error occurred in recognition: ${event.error}`;
};
```

## Sprachausgabe

Die Sprachausgabe (auch bekannt als Text-to-Speech oder TTS) beinhaltet die Synthese von Text, der in einer App enthalten ist, und dessen Wiedergabe aus dem Lautsprecher oder der Audioausgangsverbindung eines Geräts.

Die Web Speech API hat eine Hauptsteuerungsschnittstelle dafür — [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) — sowie eine Reihe von eng verwandten Schnittstellen für die Darstellung synthetisierter Texte (bekannt als Äußerungen), zu verwendende Stimmen für die Äußerung usw. Auch hier haben die meisten Betriebssysteme eine Art Sprachausgabesystem, das von der API für diese Aufgabe nach Möglichkeit verwendet wird.

### Demo

Um die einfache Nutzung der Web-Sprachausgabe zu zeigen, haben wir eine Demo namens [Speak easy synthesis](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) bereitgestellt. Diese enthält eine Reihe von Formularsteuerungen zum Eingeben von Text, der synthetisiert werden soll, sowie Optionen zur Einstellung der Tonhöhe, Geschwindigkeit und Stimme, die bei der Äußerung des Textes verwendet werden sollen. Nachdem Sie Ihren Text eingegeben haben, können Sie <kbd>Enter</kbd>/<kbd>Return</kbd> drücken, um ihn sich anhören zu können.

![Benutzeroberfläche einer App namens Speak Easy Synthesis. Sie enthält ein Eingabefeld zur Eingabe von zu synthetisierendem Text, Schieberegler zur Änderung der Geschwindigkeit und Tonhöhe der Sprache sowie ein Dropdown-Menü zur Auswahl zwischen verschiedenen Stimmen.](speak-easy-synthesis.png)

Um die Demo auszuführen, navigieren Sie zur [Live-Demo-URL](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) in einem unterstützenden mobilen Browser.

### HTML und CSS

Das HTML und CSS sind wiederum ziemlich trivial, enthalten einen Titel, einige Gebrauchsanweisungen und ein Formular mit einigen einfachen Steuerungen. Das {{htmlelement("select")}} Element ist zunächst leer, wird aber später über JavaScript mit {{htmlelement("option")}}s gefüllt.

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

Lassen Sie uns das JavaScript untersuchen, das diese App antreibt.

#### Variablen festlegen

Zunächst erfassen wir Referenzen zu allen im UI enthaltenen DOM-Elementen, interessanterweise erfassen wir jedoch eine Referenz auf [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis). Dies ist der Einstiegspunkt der API — es gibt eine Instanz von [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) zurück, die Steuerungsschnittstelle für die Web-Sprachausgabe.

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

#### Das select Element befüllen

Um das {{htmlelement("select")}} Element mit den verschiedenen Sprachoptionen zu füllen, die das Gerät zur Verfügung hat, haben wir eine `populateVoiceList()` Funktion geschrieben. Wir rufen zunächst [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) auf, das eine Liste aller verfügbaren Stimmen, dargestellt durch [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice) Objekte, zurückgibt. Dann durchlaufen wir diese Liste — für jede Stimme erstellen wir ein {{htmlelement("option")}} Element, setzen den Textinhalt auf den Namen der Stimme (entnommen aus [`SpeechSynthesisVoice.name`](/de/docs/Web/API/SpeechSynthesisVoice/name)), die Sprache der Stimme (entnommen aus [`SpeechSynthesisVoice.lang`](/de/docs/Web/API/SpeechSynthesisVoice/lang)) und fügen `-- DEFAULT` hinzu, wenn die Stimme die Standardstimme für die Synthese-Engine ist (überprüft, indem wir sehen, ob [`SpeechSynthesisVoice.default`](/de/docs/Web/API/SpeechSynthesisVoice/default) `true` zurückgibt).

Zusätzlich erstellen wir `data-` Attribute für jede Option, die den Namen und die Sprache der zugehörigen Stimme enthalten, sodass wir sie später leicht abrufen können, und fügen die Optionen als Kinder zum select hinzu.

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

Ältere Browser unterstützen das [`voiceschanged`](/de/docs/Web/API/SpeechSynthesis/voiceschanged_event) Ereignis nicht und liefern einfach eine Liste von Stimmen, wenn [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) aufgerufen wird.
In anderen, wie Chrome, müssen Sie auf das Ereignis warten, bevor Sie die Liste füllen.
Um beide Fälle zu berücksichtigen, führen wir die Funktion wie unten gezeigt aus:

```js
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

#### Den eingegebenen Text sprechen

Als nächstes erstellen wir einen Event-Handler, um den in das Textfeld eingegebenen Text zu sprechen. Wir verwenden ein [onsubmit](/de/docs/Web/API/HTMLFormElement/submit_event) Handler im Formular, sodass die Aktion erfolgt, wenn <kbd>Enter</kbd>/<kbd>Return</kbd> gedrückt wird. Zuerst erstellen wir eine neue [`SpeechSynthesisUtterance()`](/de/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance) Instanz mithilfe seines Konstruktors — dieser wird der Wert des Texteingabefeldes als Parameter übergeben.

Als nächstes müssen wir herausfinden, welche Stimme verwendet werden soll. Wir verwenden die [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) `selectedOptions` Eigenschaft, um das aktuell ausgewählte {{htmlelement("option")}} Element zurückzugeben. Dann verwenden wir das `data-name` Attribut dieses Elements, finden das [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice) Objekt, dessen Name mit diesem Attributswert übereinstimmt. Wir setzen das passende Voice-Objekt auf den Wert der [`SpeechSynthesisUtterance.voice`](/de/docs/Web/API/SpeechSynthesisUtterance/voice) Eigenschaft.

Schließlich setzen wir die [`SpeechSynthesisUtterance.pitch`](/de/docs/Web/API/SpeechSynthesisUtterance/pitch) und [`SpeechSynthesisUtterance.rate`](/de/docs/Web/API/SpeechSynthesisUtterance/rate) auf die Werte der entsprechenden Bereichsformularelemente. Mit allen notwendigen Vorbereitungen beginnen wir die Äußerung zu sprechen, indem wir [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak) aufrufen und die [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) Instanz als Parameter übergeben.

```js
inputForm.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (const voice of voices) {
    if (voice.name === selectedOption) {
      utterThis.voice = voice;
    }
  }
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
  synth.speak(utterThis);
  utterThis.onpause = (event) => {
    const char = event.utterance.text.charAt(event.charIndex);
    console.log(
      `Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`,
    );
  };
  inputTxt.blur();
};
```

Im letzten Teil des Handlers fügen wir ein [`pause`](/de/docs/Web/API/SpeechSynthesisUtterance/pause_event) Ereignis ein, um zu demonstrieren, wie [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent) sinnvoll genutzt werden kann. Wenn [`SpeechSynthesis.pause()`](/de/docs/Web/API/SpeechSynthesis/pause) aufgerufen wird, gibt dies eine Meldung zurück, die die Zeichenanzahl und den Namen angibt, bei dem die Sprache pausiert wurde.

Zuletzt rufen wir [`blur()`](/de/docs/Web/API/HTMLElement/blur) auf das Texteingabefeld auf. Dies dient hauptsächlich dazu, die Tastatur auf Firefox OS auszublenden.

#### Aktualisieren der angezeigten Pitch- und Geschwindigkeitswerte

Der letzte Teil des Codes aktualisiert die `pitch`/`rate` Werte, die in der Benutzeroberfläche angezeigt werden, jedes Mal, wenn die Schiebereglerpositionen bewegt werden.

```js
pitch.onchange = () => {
  pitchValue.textContent = pitch.value;
};

rate.onchange = () => {
  rateValue.textContent = rate.value;
};
```
