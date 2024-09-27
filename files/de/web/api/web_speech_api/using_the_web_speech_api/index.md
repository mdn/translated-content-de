---
title: Verwendung der Web Speech API
slug: Web/API/Web_Speech_API/Using_the_Web_Speech_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("Web Speech API")}}
Die Web Speech API bietet zwei verschiedene Funktionsbereiche – Spracherkennung und Sprachsynthese (auch bekannt als Text-zu-Sprache oder TTS) –, die interessante neue Möglichkeiten für Barrierefreiheit und Steuerungsmechanismen eröffnen. Dieser Artikel bietet eine einfache Einführung in beide Bereiche, zusammen mit Demos.

## Spracherkennung

Spracherkennung beinhaltet das Empfangen von Sprache über das Mikrofon eines Geräts. Diese Sprache wird dann von einem Spracherkennungsdienst mit einer Liste von Grammatik abgeglichen (im Grunde das Vokabular, das in einer bestimmten App erkannt werden soll). Wenn ein Wort oder eine Phrase erfolgreich erkannt wird, wird es als Ergebnis (oder Liste von Ergebnissen) als Textstring zurückgegeben und weitere Aktionen können initiiert werden.

Die Web Speech API hat eine Hauptschnittstelle für diese Steuerung – [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) – sowie eine Reihe eng verwandter Schnittstellen zur Darstellung von Grammatik, Ergebnissen usw. Im Allgemeinen wird das Standardsprachenerkennungssystem auf dem Gerät für die Spracherkennung verwendet – die meisten modernen Betriebssysteme verfügen über ein System zur Spracherkennung für Sprachbefehle. Denken Sie an Diktieren auf macOS, Siri auf iOS, Cortana auf Windows 10, Android Speech usw.

> [!NOTE]
> In einigen Browsern, wie Chrome, beinhaltet die Verwendung der Spracherkennung auf einer Webseite eine serverbasierte Erkennungs-Engine. Ihr Audio wird an einen Webservice zur Erkennungsverarbeitung gesendet, daher funktioniert es nicht offline.

### Demo

Um die einfache Verwendung der Web Spracherkennung zu zeigen, haben wir eine Demo namens [Speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer) erstellt. Wenn der Bildschirm angetippt/angeklickt wird, können Sie ein HTML-Farbenschlüsselwort sagen, und die Hintergrundfarbe der App wird in diese Farbe geändert.

![Die Benutzeroberfläche einer App mit dem Titel "Speech Color Changer". Sie lädt den Benutzer ein, den Bildschirm zu tippen und eine Farbe zu sagen, und dann ändert sich der Hintergrund der App zu dieser Farbe. In diesem Fall wurde der Hintergrund rot.](speech-color-changer.png)

Um die Demo auszuführen, navigieren Sie zur [Live-Demo-URL](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) in einem unterstützenden mobilen Browser (wie Chrome).

### HTML und CSS

Das HTML und CSS für die App ist wirklich trivial. Wir haben einen Titel, einen Anweisungsabsatz und ein <div>, in dem wir Diagnosemeldungen ausgeben.

```html
<h1>Speech color changer</h1>
<p>Tap/click then say a color to change the background color of the app.</p>
<div>
  <p class="output"><em>…diagnostic messages</em></p>
</div>
```

Das CSS bietet eine sehr einfache responsive Gestaltung, sodass es auf allen Geräten gut aussieht.

### JavaScript

Schauen wir uns das JavaScript etwas genauer an.

#### Vorgestellte Eigenschaften

Browser unterstützen derzeit die Spracherkennung mit vorgestellten Eigenschaften. Daher beinhalten wir am Anfang unseres Codes diese Zeilen, um sowohl vorgestellte als auch nicht vorgestellte Versionen, die in Zukunft unterstützt werden können, zu erlauben:

```js
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
```

#### Die Grammatik

Der nächste Teil unseres Codes definiert die Grammatik, die unsere App erkennen soll. Die folgende Variable wird definiert, um unsere Grammatik zu speichern:

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

Das verwendete Grammatikformat ist das [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) – Sie können auf dem vorherigen Link zur Spezifikation viel mehr darüber erfahren. Für jetzt lassen Sie uns einfach schnell durchgehen:

- Die Zeilen sind durch Semikolons getrennt, genau wie in JavaScript.
- Die erste Zeile – `#JSGF V1.0;` – gibt das verwendete Format und die Version an. Diese muss immer zuerst enthalten sein.
- Die zweite Zeile zeigt den Typ eines Begriffs, den wir erkennen möchten. `public` deklariert, dass es eine öffentliche Regel ist, die Zeichenkette in spitzen Klammern definiert den erkannten Namen für diesen Begriff (`color`), und die Liste der Elemente, die dem Gleichheitszeichen folgen, sind die alternativen Werte, die als passende Werte für den Begriff erkannt und akzeptiert werden. Beachten Sie, wie jeder durch ein Pipe-Zeichen getrennt ist.
- Sie können so viele Begriffe definieren, wie Sie wollen, auf separaten Zeilen nach obiger Struktur, und recht komplexe Grammatikdefinitionen einschließen. Für diese einfache Demo halten wir es jedoch einfach.

#### Die Grammatik in unsere Spracherkennung einfügen

Das nächste, was zu tun ist, ist eine Spracherkennungsinstanz zu definieren, um die Erkennung für unsere Anwendung zu steuern. Dies erfolgt mit dem Konstruktor [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition). Wir erstellen auch eine neue Sprachgrammatikliste, um unsere Grammatik zu enthalten, mit dem Konstruktor [`SpeechGrammarList()`](/de/docs/Web/API/SpeechGrammarList/SpeechGrammarList).

```js
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
```

Wir fügen unsere `grammar` der Liste mit der Methode [`SpeechGrammarList.addFromString()`](/de/docs/Web/API/SpeechGrammarList/addFromString) hinzu. Diese akzeptiert als Parameter die Zeichenkette, die wir hinzufügen möchten, plus optional einen Gewichtungswert, der die Wichtigkeit dieser Grammatik im Verhältnis zu anderen im Verzeichnis verfügbaren Grammatiken angibt (kann von 0 bis einschließlich 1 sein). Die hinzugefügte Grammatik ist in der Liste als Objektinstanz [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar) verfügbar.

```js
speechRecognitionList.addFromString(grammar, 1);
```

Wir fügen dann die [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) der Spracherkennungsinstanz hinzu, indem wir sie auf den Wert der Eigenschaft [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars) setzen. Wir setzen auch einige andere Eigenschaften der Erkennungsinstanz, bevor wir weitermachen:

- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous): Steuert, ob fortlaufende Ergebnisse erfasst werden (`true`), oder jeweils nur ein Ergebnis, wenn die Erkennung gestartet wird (`false`).
- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang): Setzt die Sprache der Erkennung. Das Setzen davon ist gute Praxis und daher empfohlen.
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults): Definiert, ob das Spracherkennungssystem Zwischenresultate zurückgeben soll oder nur endgültige Resultate. Endgültige Resultate sind für diese einfache Demo ausreichend.
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives): Setzt die Anzahl der alternativen potenziellen Übereinstimmungen, die pro Ergebnis zurückgegeben werden sollen. Dies kann manchmal nützlich sein, z.B. wenn ein Ergebnis nicht völlig klar ist und Sie eine Liste mit Alternativen anzeigen möchten, aus denen der Benutzer die richtige auswählen kann. Es wird jedoch für diese einfache Demo nicht benötigt, daher spezifizieren wir nur eine (die tatsächlich sowieso der Standard ist).

```js
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
```

#### Die Spracherkennung starten

Nachdem wir Referenzen auf das Ausgabe-{{htmlelement("div")}} und das HTML-Element abgerufen haben (damit wir später Diagnosemeldungen ausgeben und die Hintergrundfarbe der App aktualisieren können), implementieren wir einen onclick-Handler, sodass der Spracherkennungsdienst startet, wenn der Bildschirm angetippt/angecklickt wird. Dies wird durch den Aufruf von [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start) erreicht. Die `forEach()`-Methode wird verwendet, um farbige Indikatoren auszugeben, die zeigen, welche Farben versucht werden sollen.

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

#### Ergebnisse empfangen und verarbeiten

Sobald die Spracherkennung gestartet ist, gibt es viele Event-Handler, die verwendet werden können, um Ergebnisse und andere umliegende Informationen abzurufen (siehe die [`SpeechRecognition` Events](/de/docs/Web/API/SpeechRecognition#events)). Der häufigste, den Sie wahrscheinlich verwenden werden, ist das [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Event, das ausgelöst wird, sobald ein erfolgreiches Ergebnis empfangen wird:

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(`Confidence: ${event.results[0][0].confidence}`);
};
```

Die zweite Zeile hier sieht etwas komplex aus, daher lassen Sie sie uns schrittweise erklären. Die Eigenschaft [`SpeechRecognitionEvent.results`](/de/docs/Web/API/SpeechRecognitionEvent/results) gibt ein Objekt [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList) zurück, das [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekte enthält. Es verfügt über einen Getter, sodass es wie ein Array aufgerufen werden kann — also gibt das erste `[0]` das `SpeechRecognitionResult` an Position 0 zurück. Jedes `SpeechRecognitionResult`-Objekt enthält [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte, die einzelne erkannte Wörter enthalten. Diese haben auch Getter, sodass sie wie Arrays aufgerufen werden können — das zweite `[0]` gibt daher die `SpeechRecognitionAlternative` an Position 0 zurück. Wir geben dann die `transcript`-Eigenschaft zurück, um eine Zeichenkette mit dem einzelnen erkannten Ergebnis als Zeichenkette zu erhalten, setzen die Hintergrundfarbe auf diese Farbe und melden die erkannte Farbe als Diagnosemeldung in der Benutzeroberfläche.

Wir verwenden auch das Event [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event), um den Spracherkennungsdienst (mit [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop)) zu stoppen, sobald ein einzelnes Wort erkannt und das Sprechen beendet ist:

```js
recognition.onspeechend = () => {
  recognition.stop();
};
```

#### Fehler und nicht erkannte Sprache behandeln

Die letzten beiden Handler sind da, um Fälle zu behandeln, in denen Sprache erkannt wurde, die nicht in der definierten Grammatik enthalten war, oder ein Fehler aufgetreten ist. Das Event [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event) scheint den ersten erwähnten Fall zu behandeln, obwohl es momentan nicht richtig zu funktionieren scheint; es gibt einfach das zurück, was erkannt wurde:

```js
recognition.onnomatch = (event) => {
  diagnostic.textContent = "I didn't recognize that color.";
};
```

Das Event [`error`](/de/docs/Web/API/SpeechRecognition/error_event) behandelt Fälle, in denen tatsächlich ein Fehler bei der erfolgreichen Erkennung vorliegt — die Eigenschaft [`SpeechRecognitionErrorEvent.error`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error) enthält den tatsächlichen zurückgegebenen Fehler:

```js
recognition.onerror = (event) => {
  diagnostic.textContent = `Error occurred in recognition: ${event.error}`;
};
```

## Sprachsynthese

Die Sprachsynthese (auch bekannt als Text-zu-Sprache oder TTS) beinhaltet die Synthese von in einer App enthaltenem Text zu Sprache und die Wiedergabe über den Lautsprecher eines Geräts oder den Audioausgang.

Die Web Speech API hat eine Hauptschnittstelle zur Steuerung dafür – [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) – sowie eine Anzahl von eng verwandten Schnittstellen zur Darstellung des zu synthetisierenden Textes (bekannt als Äußerungen), der zu verwendenden Stimmen für die Äußerung usw. Auch hier verfügen die meisten Betriebssysteme über eine Art Sprachsynthesesystem, das von der API für diese Aufgabe verwendet wird, sobald es verfügbar ist.

### Demo

Um die einfache Verwendung der Web Sprachsynthese zu zeigen, haben wir eine Demo namens [Speak easy synthesis](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) bereitgestellt. Diese enthält eine Reihe von Form-Steuerelementen zur Eingabe von Text, der synthetisiert werden soll, und zur Einstellung der Tonhöhe, Geschwindigkeit und Stimme, die verwendet werden soll, wenn der Text gesprochen wird. Nachdem Sie Ihren Text eingegeben haben, können Sie <kbd>Enter</kbd>/<kbd>Return</kbd> drücken, um ihn sprechen zu lassen.

![Oberfläche einer App namens "Speak Easy Synthesis". Sie verfügt über ein Eingabefeld zur Eingabe von Text, der synthetisiert werden soll, Schieberegler zur Änderung der Geschwindigkeit und Tonhöhe der Sprache und ein Dropdown-Menü zum Auswählen zwischen verschiedenen Stimmen.](speak-easy-synthesis.png)

Um die Demo auszuführen, navigieren Sie zur [Live-Demo-URL](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) in einem unterstützenden mobilen Browser.

### HTML und CSS

Das HTML und CSS sind wieder ziemlich trivial, mit einem Titel, einigen Anweisungen zur Verwendung und einem Formular mit einigen einfachen Steuerelementen. Das {{htmlelement("select")}}-Element ist zunächst leer, wird aber später per JavaScript mit {{htmlelement("option")}}s gefüllt (siehe weiter unten).

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

Zunächst erfassen wir Referenzen auf alle in der Benutzeroberfläche involvierten DOM-Elemente, aber interessanterweise erfassen wir auch eine Referenz auf [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis). Dies ist der Einstiegspunkt der API — es gibt eine Instanz von [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) zurück, der Steuerungsschnittstelle für die Websprachsynthese.

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

#### Füllen des Auswahl-Elements

Um das {{htmlelement("select")}}-Element mit den verschiedenen Sprachoptionen zu füllen, die das Gerät verfügbar hat, haben wir die Funktion `populateVoiceList()` geschrieben. Wir rufen zuerst [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) auf, das eine Liste aller verfügbaren Stimmen zurückgibt, dargestellt durch [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte. Wir durchlaufen dann diese Liste – für jede Stimme erstellen wir ein {{htmlelement("option")}}-Element, setzen seinen Textinhalt, um den Namen der Stimme anzuzeigen (erfasst von [`SpeechSynthesisVoice.name`](/de/docs/Web/API/SpeechSynthesisVoice/name)), die Sprache der Stimme (erfasst von [`SpeechSynthesisVoice.lang`](/de/docs/Web/API/SpeechSynthesisVoice/lang)) und `-- DEFAULT`, wenn die Stimme die Standardstimme für die Synthese-Engine ist (überprüft, indem geprüft wird, ob [`SpeechSynthesisVoice.default`](/de/docs/Web/API/SpeechSynthesisVoice/default) `true` zurückgibt).

Wir erstellen auch `data-` Attribute für jede Option, die den Namen und die Sprache der zugehörigen Stimme enthalten, damit wir sie später leicht abrufen können, und hängen dann die Optionen als Kinder des Auswahl-Elements an.

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

Ältere Browser unterstützen das Event [`voiceschanged`](/de/docs/Web/API/SpeechSynthesis/voiceschanged_event) nicht und geben einfach eine Liste von Stimmen zurück, wenn [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) ausgelöst wird. Während in anderen, wie Chrome, Sie darauf warten müssen, dass das Event ausgelöst wird, bevor Sie die Liste füllen. Um für beide Fälle zu sorgen, führen wir die Funktion aus, wie unten gezeigt:

```js
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

#### Den eingegebenen Text sprechen

Als nächstes erstellen wir einen Event-Handler, der beginnt, den in das Textfeld eingegebenen Text zu sprechen. Wir verwenden einen [onsubmit](/de/docs/Web/API/HTMLFormElement/submit_event)-Handler am Formular, sodass die Aktion passiert, wenn <kbd>Enter</kbd>/<kbd>Return</kbd> gedrückt wird. Wir erstellen zuerst eine neue Instanz von [`SpeechSynthesisUtterance()`](/de/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance), indem wir seinen Konstruktor verwenden — dies wird mit dem Wert des Texteingabefelds als Parameter übergeben.

Als nächstes müssen wir herausfinden, welche Stimme verwendet werden soll. Wir verwenden die [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) `selectedOptions`-Eigenschaft, um das momentan ausgewählte {{htmlelement("option")}}-Element zurückzugeben. Wir nutzen dann das `data-name`-Attribut dieses Elements und finden das [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekt, dessen Name mit dem Wert dieses Attributs übereinstimmt. Wir setzen das passende Sprachobjekt als den Wert der Eigenschaft [`SpeechSynthesisUtterance.voice`](/de/docs/Web/API/SpeechSynthesisUtterance/voice).

Schließlich setzen wir die [`SpeechSynthesisUtterance.pitch`](/de/docs/Web/API/SpeechSynthesisUtterance/pitch) und [`SpeechSynthesisUtterance.rate`](/de/docs/Web/API/SpeechSynthesisUtterance/rate) auf die Werte der entsprechenden Bereichsformular-Elemente. Mit allen notwendigen Vorbereitungen, um die Äußerung sprechen zu lassen, rufen wir [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak) auf, wobei wir die Instanz [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) als Parameter übergeben.

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

Im letzten Teil des Handlers fügen wir ein [`pause`](/de/docs/Web/API/SpeechSynthesisUtterance/pause_event)-Event ein, um zu demonstrieren, wie [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent) sinnvoll genutzt werden kann. Wenn [`SpeechSynthesis.pause()`](/de/docs/Web/API/SpeechSynthesis/pause) aufgerufen wird, gibt dies eine Meldung zurück, die die Zeichenanzahl und den Namen meldet, an dem die Sprache pausiert wurde.

```js
utterThis.onpause = (event) => {
  const char = event.utterance.text.charAt(event.charIndex);
  console.log(
    `Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`,
  );
};
```

Schließlich rufen wir [blur()](/de/docs/Web/API/HTMLElement/blur) auf das Textfeld auf. Dies dient hauptsächlich dazu, die Tastatur auf Firefox OS auszublenden.

```js
  inputTxt.blur();
}
```

#### Aktualisieren der angezeigten Tonhöhen- und Geschwindigkeitswerte

Der letzte Teil des Codes aktualisiert die `pitch`/`rate`-Werte, die in der Benutzeroberfläche angezeigt werden, wenn die Schiebereglerpositionen verschoben werden.

```js
pitch.onchange = () => {
  pitchValue.textContent = pitch.value;
};

rate.onchange = () => {
  rateValue.textContent = rate.value;
};
```
