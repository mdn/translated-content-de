---
title: Verwendung der Web Speech API
slug: Web/API/Web_Speech_API/Using_the_Web_Speech_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("Web Speech API")}}
Die Web Speech API bietet zwei unterschiedliche Funktionalitäten — Spracherkennung und Sprachsynthese (auch als Text-to-Speech oder TTS bekannt) — die interessante neue Möglichkeiten für Barrierefreiheit und Steuerungsmechanismen eröffnen. Dieser Artikel bietet eine einfache Einführung in beide Bereiche, zusammen mit Demos.

## Spracherkennung

Bei der Spracherkennung wird Sprache über das Mikrofon eines Geräts empfangen, die dann von einem Spracherkennungsdienst mit einer Liste von Grammatik (im Wesentlichen das Vokabular, das in einer bestimmten App erkannt werden soll) abgeglichen wird. Wenn ein Wort oder eine Phrase erfolgreich erkannt wird, wird sie als Ergebnis (oder Ergebnisliste) als Textzeichenfolge zurückgegeben, und es können weitere Aktionen ausgelöst werden.

Die Web Speech API hat eine Hauptcontroller-Schnittstelle dafür — [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) — sowie eine Reihe eng verwandter Schnittstellen zur Darstellung von Grammatik, Ergebnissen usw. In der Regel wird das standardmäßige Spracherkennungssystem des Geräts für die Spracherkennung verwendet — die meisten modernen Betriebssysteme haben ein Spracherkennungssystem für Voice-Befehle. Denken Sie an Diktat auf macOS, Siri auf iOS, Cortana auf Windows 10, Android Speech usw.

> [!NOTE]
> In einigen Browsern, wie Chrome, beinhaltet die Verwendung der Spracherkennung auf einer Webseite eine serverbasierte Erkennungs-Engine. Ihr Audio wird zu einem Onlinedienst zur Erkennungsverarbeitung gesendet, daher funktioniert es nicht offline.

### Demo

Um die einfache Verwendung der Web-Spracherkennung zu zeigen, haben wir eine Demo namens [Speech Color Changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer) erstellt. Wenn der Bildschirm angetippt/geklickt wird, können Sie ein HTML-Farb-Stichwort sagen, und die Hintergrundfarbe der App ändert sich entsprechend.

![Die Benutzeroberfläche einer App mit dem Titel Speech Color Changer. Sie lädt den Benutzer ein, den Bildschirm anzutippen und eine Farbe zu sagen, und dann ändert sie die Hintergrundfarbe der App in diese Farbe. In diesem Fall hat sie den Hintergrund in Rot geändert.](speech-color-changer.png)

Um die Demo auszuführen, navigieren Sie zur [Live-Demo-URL](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) in einem unterstützenden mobilen Browser (wie Chrome).

### HTML und CSS

Das HTML und CSS der App ist wirklich trivial. Wir haben einen Titel, einen Anleitungs-Absatz und ein <div>, in das wir Diagnosemeldungen ausgeben.

```html
<h1>Speech color changer</h1>
<p>Tap/click then say a color to change the background color of the app.</p>
<div>
  <p class="output"><em>…diagnostic messages</em></p>
</div>
```

Das CSS bietet ein sehr einfaches responsives Styling, sodass es auf verschiedenen Geräten gut aussieht.

### JavaScript

Schauen wir uns das JavaScript im Detail an.

#### Präfix-Eigenschaften

Derzeit unterstützen Browser die Spracherkennung mit Präfix-Eigenschaften. Deshalb fügen wir am Anfang unseres Codes diese Zeilen hinzu, um sowohl Präfix-Eigenschaften als auch nicht-präfixierte Versionen zu berücksichtigen, die möglicherweise in Zukunft unterstützt werden:

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

Das verwendete Grammatikformat ist das [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) — Sie können viel mehr darüber im vorherigen Link zur Spezifikation finden. Lassen Sie uns jedoch zunächst einen kurzen Überblick geben:

- Die Zeilen sind durch Semikolons getrennt, genau wie in JavaScript.
- Die erste Zeile — `#JSGF V1.0;` — gibt das verwendete Format und die Version an. Diese muss immer zuerst eingeschlossen werden.
- Die zweite Zeile gibt eine Art Begriff an, den wir erkennen möchten. `public` deklariert, dass es eine öffentliche Regel ist, die Zeichenfolge in spitzen Klammern definiert den erkannten Namen für diesen Begriff (`color`), und die Liste der Elemente, die dem Gleichheitszeichen folgen, sind die alternativen Werte, die als geeignete Werte für den Begriff erkannt und akzeptiert werden. Beachten Sie, wie jede durch ein Pipe-Zeichen getrennt ist.
- Sie können so viele Begriffe definieren, wie Sie möchten, und dabei eine relativ komplexe Grammatik festlegen. Für diese einfache Demo halten wir die Dinge jedoch simpel.

#### Die Grammatik in unsere Spracherkennung einbinden

Der nächste Schritt besteht darin, eine Spracherkennungsinstanz zu definieren, um die Erkennung für unsere Anwendung zu steuern. Dies wird mithilfe des Konstruktors [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition) erledigt. Wir erstellen auch eine neue Sprachgrammatikliste, um unsere Grammatik zu enthalten, mithilfe des Konstruktors [`SpeechGrammarList()`](/de/docs/Web/API/SpeechGrammarList/SpeechGrammarList).

```js
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
```

Wir fügen unsere `grammar` der Liste mithilfe der Methode [`SpeechGrammarList.addFromString()`](/de/docs/Web/API/SpeechGrammarList/addFromString) hinzu. Diese akzeptiert als Parameter die Zeichenfolge, die wir hinzufügen möchten, plus optional einen Gewichtswert, der die Wichtigkeit dieser Grammatik im Verhältnis zu anderen in der Liste verfügbaren Grammatiken angibt (kann von 0 bis einschließlich 1 sein). Die hinzugefügte Grammatik ist in der Liste als `SpeechGrammar`-Objektinstanz verfügbar.

```js
speechRecognitionList.addFromString(grammar, 1);
```

Wir fügen dann die [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) der Spracherkennungsinstanz hinzu, indem wir sie dem Wert der [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars) Eigenschaft zuweisen. Wir setzen auch einige andere Eigenschaften der Erkennungsinstanz, bevor wir fortfahren:

- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous): Steuert, ob kontinuierliche Ergebnisse erfasst werden (`true`), oder nur ein einziges Ergebnis jedes Mal, wenn die Erkennung gestartet wird (`false`).
- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang): Legt die Sprache der Erkennung fest. Dies zu setzen, ist eine gute Praxis und daher empfohlen.
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults): Definiert, ob das Spracherkennungssystem Zwischenprodukte oder nur endgültige Ergebnisse zurückgeben soll. Endgültige Ergebnisse sind für dieses einfache Demo ausreichend.
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives): Legt die Anzahl alternativer potenzieller Übereinstimmungen fest, die pro Ergebnis zurückgegeben werden sollen. Dies kann manchmal nützlich sein, beispielsweise wenn ein Ergebnis nicht ganz klar ist und Sie eine Liste von Alternativen anzeigen möchten, aus denen der Benutzer die richtige auswählen kann. Aber für diese einfache Demo ist das nicht nötig, also geben wir einfach eine an (was ohnehin der Standardwert ist).

```js
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
```

#### Starten der Spracherkennung

Nachdem wir Verweise auf das Ausgabe-{{htmlelement("div")}} und das HTML-Element erfasst haben (damit wir später Diagnosemeldungen ausgeben und die Hintergrundfarbe der App aktualisieren können), implementieren wir einen `onclick`-Handler, sodass beim Tippen/Klicken auf den Bildschirm der Spracherkennungsdienst gestartet wird. Dies wird durch Aufrufen von [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start) erreicht. Die Methode `forEach()` wird verwendet, um farbige Indikatoren anzuzeigen, die zeigen, welche Farben gesagt werden sollen.

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

Sobald die Spracherkennung gestartet ist, gibt es viele Ereignishandler, die verwendet werden können, um Ergebnisse zu erhalten, und andere umgebende Informationen (siehe die [`SpeechRecognition`-Ereignisse](/de/docs/Web/API/SpeechRecognition#events)). Das wahrscheinlich am häufigsten verwendete ist das [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Ereignis, das ausgelöst wird, sobald ein erfolgreiches Ergebnis empfangen wurde:

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(`Confidence: ${event.results[0][0].confidence}`);
};
```

Die zweite Zeile hier sieht etwas komplex aus, lassen Sie uns das Schritt für Schritt erklären. Die [`SpeechRecognitionEvent.results`](/de/docs/Web/API/SpeechRecognitionEvent/results)-Eigenschaft gibt ein [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)-Objekt zurück, das [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekte enthält. Sie hat einen Getter, sodass sie wie ein Array aufgerufen werden kann — das erste `[0]` gibt das `SpeechRecognitionResult` bei Position 0 zurück. Jedes `SpeechRecognitionResult`-Objekt enthält [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte, die die jeweils erkannten Wörter enthalten. Diese haben ebenfalls Getter, sodass sie wie Arrays aufgerufen werden können — das zweite `[0]` gibt daher das `SpeechRecognitionAlternative` bei Position 0 zurück. Wir geben dann seine `transcript`-Eigenschaft zurück, um eine Zeichenfolge mit dem individuell erkannten Ergebnis zu erhalten, setzen die Hintergrundfarbe auf diese Farbe und melden die erkannte Farbe in einer Diagnosemeldung in der Benutzeroberfläche.

Wir verwenden auch das [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event)-Ereignis, um den Spracherkennungsdienst zu stoppen (mithilfe von [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop)), sobald ein einzelnes Wort erkannt und gesprochen wurde:

```js
recognition.onspeechend = () => {
  recognition.stop();
};
```

#### Behandlung von Fehlern und nicht erkannter Sprache

Die letzten beiden Handler sind da, um Fälle zu behandeln, in denen Sprache erkannt wurde, die nicht in der definierten Grammatik war, oder ein Fehler aufgetreten ist. Das [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)-Ereignis scheint vorgesehen zu sein, um den ersten genannten Fall zu behandeln, obwohl es derzeit nicht korrekt ausgelöst zu werden scheint; es gibt einfach zurück, was auch immer erkannt wurde:

```js
recognition.onnomatch = (event) => {
  diagnostic.textContent = "I didn't recognize that color.";
};
```

Das [`error`](/de/docs/Web/API/SpeechRecognition/error_event)-Ereignis verarbeitet Fälle, in denen es zu einem tatsächlichen Fehler bei der Erkennung kommt — die [`SpeechRecognitionErrorEvent.error`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error)-Eigenschaft enthält den tatsächlich zurückgegebenen Fehler:

```js
recognition.onerror = (event) => {
  diagnostic.textContent = `Error occurred in recognition: ${event.error}`;
};
```

## Sprachsynthese

Sprachsynthese (auch bekannt als Text-to-Speech oder TTS) beinhaltet das Empfangen und Synthesieren von in einer App enthaltenem Text zu Sprache und das Abspielen über das Lautsprechersystem eines Geräts oder über Audioausgänge.

Die Web Speech API hat eine Hauptcontroller-Schnittstelle hierfür — [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) — sowie eine Reihe eng verwandter Schnittstellen zur Darstellung der zu synthetisierenden Texte (bekannt als Äußerungen), zu verwendenden Stimmen für die Äußerung usw. Auch hier haben die meisten Betriebssysteme irgendeine Art von Sprachsynthesesystem, welches von der API für diese Aufgabe genutzt wird, wenn verfügbar.

### Demo

Um die einfache Verwendung der Web-Sprachsynthese zu zeigen, haben wir eine Demo namens [Speak easy synthesis](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) bereitgestellt. Diese enthält eine Reihe von Formularsteuerungen zum Eingeben des zu synthetisierenden Textes sowie zum Festlegen von Tonhöhe, Geschwindigkeit und Stimme zur Verwendung beim Aussprechen des Textes. Nachdem Sie Ihren Text eingegeben haben, können Sie <kbd>Eingabetaste</kbd> drücken, um ihn zu hören.

![UI einer App namens speak easy synthesis. Sie hat ein Eingabefeld, in das Text zur Synthese eingegeben werden kann, Schieberegler zur Änderung der Rate und Tonhöhe der Sprache sowie ein Dropdown-Menü zur Auswahl zwischen verschiedenen Stimmen.](speak-easy-synthesis.png)

Um die Demo auszuführen, navigieren Sie zur [Live-Demo-URL](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) in einem unterstützenden mobilen Browser.

### HTML und CSS

Das HTML und CSS sind wieder ziemlich trivial und enthalten einen Titel, einige Anweisungen zur Verwendung sowie ein Formular mit einfachen Steuerelementen. Das {{htmlelement("select")}}-Element ist ursprünglich leer, wird aber später über JavaScript mit {{htmlelement("option")}}s befüllt.

```html
<h1>Speech synthesizer</h1>

<p>
  Enter some text in the input below and press return to hear it. change voices
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

#### Variablen setzen

Zuerst erfassen wir Verweise auf alle am UI beteiligten DOM-Elemente, aber interessanterweise erfassen wir einen Verweis auf [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis). Dies ist der Einstiegspunkt der API — er gibt eine Instanz von [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) zurück, der Controller-Schnittstelle für die Web-Sprachsynthese.

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

#### Ausfüllen des `select`-Elements

Zum Befüllen des {{htmlelement("select")}}-Elements mit den verschiedenen Sprachoptionen, die auf dem Gerät verfügbar sind, haben wir eine Funktion `populateVoiceList()` geschrieben. Zuerst rufen wir [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) auf, was eine Liste aller verfügbaren Stimmen zurückgibt, repräsentiert durch [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte. Wir durchlaufen dann diese Liste — für jede Stimme erstellen wir ein {{htmlelement("option")}}-Element, setzen seinen Textinhalt, um den Namen der Stimme anzuzeigen (geholt von [`SpeechSynthesisVoice.name`](/de/docs/Web/API/SpeechSynthesisVoice/name)), die Sprache der Stimme (geholt von [`SpeechSynthesisVoice.lang`](/de/docs/Web/API/SpeechSynthesisVoice/lang)), und `-- DEFAULT`, falls die Stimme die Standardstimme für die Synthese-Engine ist (überprüft, indem gesehen wird, ob [`SpeechSynthesisVoice.default`](/de/docs/Web/API/SpeechSynthesisVoice/default) `true` zurückgibt).

Wir erstellen auch `data-`Attributes für jede Option, die den Namen und die Sprache der zugeordneten Stimme enthalten, sodass wir diese später einfach abrufen können. Dann fügen wir die Optionen als Kinder des `select` hinzu.

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

Ältere Browser unterstützen das [`voiceschanged`](/de/docs/Web/API/SpeechSynthesis/voiceschanged_event)-Ereignis nicht und geben einfach eine Liste von Stimmen zurück, wenn [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) aufgerufen wird. Bei anderen, wie zum Beispiel Chrome, müssen Sie darauf warten, dass das Ereignis ausgelöst wird, bevor Sie die Liste befüllen. Um beide Fälle zu berücksichtigen, führen wir die Funktion wie unten gezeigt aus:

```js
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

#### Den eingegebenen Text sprechen

Als nächstes erstellen wir einen Ereignishandler, um den in das Textfeld eingegebenen Text zu sprechen. Wir verwenden einen [onsubmit](/de/docs/Web/API/HTMLFormElement/submit_event)-Handler für das Formular, sodass die Aktion ausgeführt wird, wenn <kbd>Eingabetaste</kbd> gedrückt wird. Zuerst erstellen wir eine neue Instanz von [`SpeechSynthesisUtterance()`](/de/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance) mithilfe seines Konstruktors — diese wird mit dem Wert der Texteingabe als Parameter versehen.

Als nächstes müssen wir herausfinden, welche Stimme wir verwenden sollen. Wir verwenden die `selectedOptions`-Eigenschaft von [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement), um das derzeit ausgewählte {{htmlelement("option")}}-Element zurückzugeben. Dann verwenden wir das `data-name`-Attribut dieses Elements, um das [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekt zu finden, dessen Name mit dem Wert dieses Attributs übereinstimmt. Wir setzen das passende Stimmenobjekt als Wert der [`SpeechSynthesisUtterance.voice`](/de/docs/Web/API/SpeechSynthesisUtterance/voice)-Eigenschaft.

Schließlich setzen wir die [`SpeechSynthesisUtterance.pitch`](/de/docs/Web/API/SpeechSynthesisUtterance/pitch) und [`SpeechSynthesisUtterance.rate`](/de/docs/Web/API/SpeechSynthesisUtterance/rate) auf die Werte der entsprechenden Bereichsformularelemente. Dann, mit allen notwendigen Vorbereitungen, starten wir die Äußerung, indem wir [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak) aufrufen und die [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Instanz als Parameter übergeben.

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

Im letzten Teil des Handlers fügen wir ein [`pause`](/de/docs/Web/API/SpeechSynthesisUtterance/pause_event)-Ereignis ein, um zu demonstrieren, wie [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent) gut genutzt werden kann. Wenn [`SpeechSynthesis.pause()`](/de/docs/Web/API/SpeechSynthesis/pause) aufgerufen wird, wird eine Meldung zurückgegeben, die die Zeichenanzahl und den Namen angibt, bei denen die Sprache pausiert wurde.

```js
utterThis.onpause = (event) => {
  const char = event.utterance.text.charAt(event.charIndex);
  console.log(
    `Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`,
  );
};
```

Zum Schluss rufen wir [blur()](/de/docs/Web/API/HTMLElement/blur) auf der Texteingabe auf. Dies dient hauptsächlich dazu, die Tastatur auf Firefox OS auszublenden.

```js
  inputTxt.blur();
}
```

#### Aktualisierung der angezeigten Ton- und Ratenwerte

Der letzte Teil des Codes aktualisiert die `pitch`/`rate`-Werte, die in der Benutzeroberfläche angezeigt werden, jedes Mal, wenn die Position der Schieberegler verändert wird.

```js
pitch.onchange = () => {
  pitchValue.textContent = pitch.value;
};

rate.onchange = () => {
  rateValue.textContent = rate.value;
};
```
