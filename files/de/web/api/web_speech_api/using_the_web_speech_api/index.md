---
title: Verwendung der Web Speech API
slug: Web/API/Web_Speech_API/Using_the_Web_Speech_API
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{DefaultAPISidebar("Web Speech API")}}
Die Web Speech API bietet zwei unterschiedliche Funktionsbereiche — Spracherkennung und Sprachsynthese (auch bekannt als Text-to-Speech, oder TTS) — die interessante neue Möglichkeiten für Barrierefreiheit und Steuerungsmechanismen eröffnen. Dieser Artikel bietet eine einfache Einführung in beide Bereiche sowie Demos.

## Spracherkennung

Die Spracherkennung beinhaltet das Empfangen von Sprache über das Mikrofon eines Geräts, die dann durch einen Spracherkennungsdienst mit einer Liste von Grammatik abgeglichen wird (im Grunde, das Vokabular, das in einer bestimmten App erkannt werden soll). Wenn ein Wort oder eine Phrase erfolgreich erkannt wird, wird es als Ergebnis (oder Liste von Ergebnissen) als Textzeichenfolge zurückgegeben, und es können weitere Aktionen initiiert werden.

Die Web Speech API verfügt über eine Hauptkontrollschnittstelle hierfür — [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) — plus eine Reihe eng verwandter Schnittstellen zur Darstellung von Grammatik, Ergebnissen usw. In der Regel wird das auf dem Gerät verfügbare Standard-Spracherkennungssystem für die Spracherkennung verwendet — die meisten modernen Betriebssysteme besitzen ein Spracherkennungssystem zum Ausführen von Sprachbefehlen. Denken Sie an Diktat auf macOS, Siri auf iOS, Cortana auf Windows 10, Android Speech usw.

> [!NOTE]
> In einigen Browsern, wie Chrome, beinhaltet die Verwendung von Spracherkennung auf einer Webseite eine serverbasierte Erkennungsmaschine. Ihr Audio wird zu einem Webdienst zur Erkennungsverarbeitung gesendet, sodass es offline nicht funktioniert.

### Demo

Um die einfache Nutzung der Websprachenerkennung zu zeigen, haben wir eine Demo namens [Sprachfarbwechsler](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer) erstellt. Wenn auf den Bildschirm geklickt/geklopft wird, können Sie ein HTML-Farbkeyword sagen, und die Hintergrundfarbe der App ändert sich in diese Farbe.

![Die Benutzeroberfläche einer App mit dem Titel Sprachfarbwechsler. Sie lädt den Benutzer ein, auf den Bildschirm zu tippen und eine Farbe zu sagen, und dann ändert sie den Hintergrund der App zu dieser Farbe. In diesem Fall hat sich der Hintergrund rot gefärbt.](speech-color-changer.png)

Um die Demo auszuführen, navigieren Sie zur [Live-Demo-URL](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) in einem unterstützenden mobilen Browser (wie Chrome).

### HTML und CSS

Das HTML und CSS für die App ist wirklich trivial. Wir haben einen Titel, einen Anleitungsabsatz und ein Div, in das wir Diagnosemeldungen ausgeben.

```html
<h1>Speech color changer</h1>
<p>Tap/click then say a color to change the background color of the app.</p>
<div>
  <p class="output"><em>…diagnostic messages</em></p>
</div>
```

Das CSS bietet ein sehr einfaches, responsives Styling, damit es auf verschiedenen Geräten in Ordnung aussieht.

### JavaScript

Schauen wir uns das JavaScript etwas genauer an.

#### Präfix-Eigenschaften

Browser unterstützen derzeit Spracherkennung mit Präfix-Eigenschaften. Daher fügen wir am Anfang unseres Codes diese Zeilen ein, um sowohl Präfix-Eigenschaften als auch nicht präfixierte Versionen, die möglicherweise in Zukunft unterstützt werden, zu ermöglichen:

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

Das verwendete Grammatikformat ist [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) — auf der vorherigen Spec-Seite gibt es viel mehr Informationen darüber. Aber lassen Sie uns nun kurz darauf eingehen:

- Die Zeilen werden wie in JavaScript durch Semikolons getrennt.
- Die erste Zeile — `#JSGF V1.0;` — gibt das verwendete Format und die Version an. Dies muss immer zuerst enthalten sein.
- Die zweite Zeile gibt eine Art Begriff an, den wir erkennen möchten. `public` erklärt, dass es sich um eine öffentliche Regel handelt, die Zeichenkette in spitzen Klammern definiert den erkannten Namen für diesen Begriff (`color`), und die Liste der nach dem Gleichheitszeichen folgenden Elemente sind die alternativen Werte, die erkannt und als passende Werte für den Begriff akzeptiert werden sollen. Beachten Sie, wie jedes durch ein senkrechtes Zeichen getrennt ist.
- Sie können so viele Begriffe definieren, wie Sie möchten, und dabei relativ komplexe Grammatikdefinitionen einbeziehen. Für diese einfache Demo halten wir es jedoch simpel.

#### Einbindung der Grammatik in unsere Spracherkennung

Der nächste Schritt ist das Definieren einer Spracherkennungsinstanz, um die Erkennung für unsere Anwendung zu steuern. Dies wird mit dem [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)-Konstruktor erledigt. Wir erstellen auch eine neue Sprachgrammarliste, um unsere Grammatik zu enthalten, unter Verwendung des [`SpeechGrammarList()`](/de/docs/Web/API/SpeechGrammarList/SpeechGrammarList)-Konstruktors.

```js
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
```

Wir fügen unser `grammar` der Liste mithilfe der Methode [`SpeechGrammarList.addFromString()`](/de/docs/Web/API/SpeechGrammarList/addFromString) hinzu. Diese akzeptiert als Parameter die Zeichenkette, die wir hinzufügen möchten, sowie optional einen Gewichtungswert, der die Bedeutung dieser Grammatik im Verhältnis zu anderen in der Liste verfügbaren Grammatiken angibt (kann zwischen 0 und 1 (einschließlich) liegen). Die hinzugefügte Grammatik ist in der Liste als [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objektinstanz verfügbar.

```js
speechRecognitionList.addFromString(grammar, 1);
```

Wir fügen dann die [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) der Spracherkennungsinstanz hinzu, indem wir sie auf den Wert der [`SpeechRecognition.grammars`](/de/docs/Web/API/SpeechRecognition/grammars)-Eigenschaft setzen. Wir setzen auch einige andere Eigenschaften der Erkennungsinstanz, bevor wir fortfahren:

- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous): Steuert, ob kontinuierliche Ergebnisse erfasst werden (`true`), oder ob nur ein einzelnes Ergebnis jedes Mal zurückgegeben wird, wenn die Erkennung gestartet wird (`false`).
- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang): Legt die Sprache der Erkennung fest. Das Setzen dieser Einstellung ist eine gute Praxis und daher empfohlen.
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults): Bestimmt, ob das Spracherkennungssystem Zwischen- oder nur Endergebnisse zurückgeben soll. Endergebnisse reichen für diese einfache Demo aus.
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives): Legt die Anzahl alternativer potenzieller Übereinstimmungen fest, die pro Ergebnis zurückgegeben werden sollen. Dies kann manchmal nützlich sein, z. B. wenn ein Ergebnis nicht ganz klar ist und Sie eine Liste mit Alternativen anzeigen möchten, aus denen der Benutzer die richtige auswählen kann. Für diese einfache Demo ist das jedoch nicht notwendig, daher spezifizieren wir nur eine (was ohnehin der Standard ist).

```js
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
```

#### Starten der Spracherkennung

Nachdem wir Referenzen auf das Ausgabeelement {{htmlelement("div")}} und das HTML-Element (um später Diagnosemeldungen auszugeben und die Hintergrundfarbe der App zu aktualisieren) erfasst haben, implementieren wir einen `onclick`-Handler, sodass, wenn auf den Bildschirm geklickt/geklickt wird, der Spracherkennungsdienst startet. Dies wird erreicht, indem [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start) aufgerufen wird. Die Methode `forEach()` wird verwendet, um farbige Indikatoren auszugeben, die zeigen, welche Farben versucht werden sollen.

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

#### Empfang und Behandlung von Ergebnissen

Sobald die Spracherkennung gestartet ist, gibt es viele Event-Handler, die verwendet werden können, um Ergebnisse und andere umgebende Informationen abzurufen (siehe die [„SpeechRecognition“-Ereignisse](/de/docs/Web/API/SpeechRecognition#events)). Das am häufigsten verwendete ist wahrscheinlich das [„result“-Ereignis](/de/docs/Web/API/SpeechRecognition/result_event), das ausgelöst wird, sobald ein erfolgreiches Ergebnis empfangen wird:

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(`Confidence: ${event.results[0][0].confidence}`);
};
```

Die zweite Zeile hier sieht etwas komplex aus, also lassen Sie uns sie Schritt für Schritt erklären. Die Eigenschaft [`SpeechRecognitionEvent.results`](/de/docs/Web/API/SpeechRecognitionEvent/results) gibt ein [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)-Objekt zurück, das [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekte enthält. Es hat einen Getter, sodass es wie ein Array zugegriffen werden kann — das erste `[0]` gibt das `SpeechRecognitionResult` an Position 0 zurück. Jedes `SpeechRecognitionResult`-Objekt enthält [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte, die einzelne erkannte Wörter enthalten. Diese haben auch Getter, sodass sie wie Arrays zugegriffen werden können — das zweite `[0]` gibt daher die `SpeechRecognitionAlternative` an Position 0 zurück. Wir geben dann dessen `transcript`-Eigenschaft zurück, um eine Zeichenkette mit dem einzelnen erkannten Ergebnis als Zeichenkette zu erhalten, setzen die Hintergrundfarbe auf diese Farbe und melden die erkannte Farbe als Diagnosemeldung in der Benutzeroberfläche.

Wir verwenden auch das [„speechend“-Ereignis](/de/docs/Web/API/SpeechRecognition/speechend_event), um den Spracherkennungsdienst zu stoppen (mit [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop)), sobald ein einzelnes Wort erkannt und fertig gesprochen wurde:

```js
recognition.onspeechend = () => {
  recognition.stop();
};
```

#### Behandlung von Fehlern und nicht erkannter Sprache

Die letzten beiden Handler sind da, um Fälle zu behandeln, in denen Sprache erkannt wurde, die nicht in der definierten Grammatik enthalten ist, oder ein Fehler aufgetreten ist. Das [`nomatch`-Ereignis](/de/docs/Web/API/SpeechRecognition/nomatch_event) scheint den ersten genannten Fall behandeln zu sollen, obwohl es im Moment nicht korrekt ausgelöst zu werden scheint; es gibt einfach das zurück, was ohnehin erkannt wurde:

```js
recognition.onnomatch = (event) => {
  diagnostic.textContent = "I didn't recognize that color.";
};
```

Das [„error“-Ereignis](/de/docs/Web/API/SpeechRecognition/error_event) behandelt Fälle, in denen tatsächlich ein Fehler bei der Erkennung vorliegt — die Eigenschaft [`SpeechRecognitionErrorEvent.error`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error) enthält den tatsächlich zurückgegebenen Fehler:

```js
recognition.onerror = (event) => {
  diagnostic.textContent = `Error occurred in recognition: ${event.error}`;
};
```

## Sprachsynthese

Die Sprachsynthese (auch bekannt als Text-to-Speech, oder TTS) beinhaltet die Synthese von innerhalb einer App enthaltenem Text in Sprache und das Ausspielen über den Lautsprecher eines Geräts oder einen Audioausgangsanschluss.

Die Web Speech API hat eine Hauptkontrollschnittstelle dafür — [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) — plus eine Reihe eng verwandter Schnittstellen zur Darstellung des zu synthetisierenden Textes (bekannt als Äußerungen), der für die Äußerung zu verwendenden Stimmen usw. Auch hier haben die meisten Betriebssysteme eine Art Sprachsynthesesystem, das von der API für diese Aufgabe genutzt wird, sofern verfügbar.

### Demo

Um die einfache Nutzung der Websprachsynthese zu zeigen, haben wir eine Demo namens [sprechend leicht gemacht](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) bereitgestellt. Diese enthält eine Reihe von Formularelementen zum Eingeben des zu synthetisierenden Textes und zum Einstellen der Tonhöhe, Geschwindigkeit und Stimme, die verwendet werden soll, wenn der Text geäußert wird. Nachdem Sie Ihren Text eingegeben haben, können Sie <kbd>Enter</kbd>/<kbd>Return</kbd> drücken, um ihn gesprochen zu hören.

![Benutzeroberfläche einer App namens „sprechend leicht gemacht“. Es gibt ein Eingabefeld zum Eingeben des zu synthetisierenden Textes, Schieberegler zur Änderung der Sprechgeschwindigkeit und Tonhöhe sowie ein Dropdown-Menü zur Auswahl verschiedener Stimmen.](speak-easy-synthesis.png)

Um die Demo auszuführen, navigieren Sie zur [Live-Demo-URL](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) in einem unterstützenden mobilen Browser.

### HTML und CSS

Das HTML und CSS sind erneut ziemlich trivial und enthalten einen Titel, einige Anweisungen zur Verwendung und ein Formular mit einigen einfachen Steuerelementen. Das {{htmlelement("select")}}-Element ist anfangs leer, wird aber über JavaScript mit {{htmlelement("option")}}-Elementen gefüllt (siehe später).

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

#### Variablen setzen

Zuerst erfassen wir Referenzen zu allen in der Benutzeroberfläche involvierten DOM-Elementen, aber interessanterweise erfassen wir eine Referenz auf [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis). Dies ist der Einstiegspunkt der API — sie gibt eine Instanz von [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) zurück, die Kontrollschnittstelle für die Websprachsynthese.

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

#### Das Auswahlelement füllen

Um das {{htmlelement("select")}}-Element mit den verschiedenen Sprachoptionen zu füllen, die das Gerät verfügbar hat, haben wir eine `populateVoiceList()`-Funktion geschrieben. Wir rufen zuerst [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) auf, die eine Liste aller verfügbaren Stimmen zurückgibt, dargestellt durch [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte. Wir schleifen dann durch diese Liste — für jede Stimme erstellen wir ein {{htmlelement("option")}}-Element, setzen dessen Textinhalt, um den Namen der Stimme anzuzeigen (aus [`SpeechSynthesisVoice.name`](/de/docs/Web/API/SpeechSynthesisVoice/name) entnommen), die Sprache der Stimme (entnommen aus [`SpeechSynthesisVoice.lang`](/de/docs/Web/API/SpeechSynthesisVoice/lang)), und `-- DEFAULT`, wenn die Stimme die Standardstimme für die Synthesemaschine ist (überprüft, indem geprüft wird, ob [`SpeechSynthesisVoice.default`](/de/docs/Web/API/SpeechSynthesisVoice/default) `true` zurückgibt).

Wir erstellen auch `data-`-Attribute für jede Option, die den Namen und die Sprache der zugehörigen Stimme enthalten, sodass wir sie später leicht abrufen können, und hängen dann die Optionen als Kinder des select-Elements an.

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

Ältere Browser unterstützen das [„voiceschanged“-Ereignis](/de/docs/Web/API/SpeechSynthesis/voiceschanged_event) nicht und geben einfach eine Liste mit Stimmen zurück, wenn [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) aufgerufen wird. Bei anderen, wie Chrome, müssen Sie warten, bis das Ereignis ausgelöst wird, bevor Sie die Liste füllen. Um beide Fälle zu berücksichtigen, führen wir die Funktion wie folgt aus:

```js
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

#### Den eingegebenen Text sprechen

Als nächstes erstellen wir einen Ereignis-Handler, um den in das Textfeld eingegebenen Text zu sprechen. Wir verwenden einen [„onsubmit“-Handler](/de/docs/Web/API/HTMLFormElement/submit_event) auf dem Formular, sodass die Aktion ausgeführt wird, wenn <kbd>Enter</kbd>/<kbd>Return</kbd> gedrückt wird. Wir erstellen zuerst eine neue [`SpeechSynthesisUtterance()`](/de/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance)-Instanz mithilfe ihres Konstruktors — dieser wird der Wert des Texteingabefelds als Parameter übergeben.

Als Nächstes müssen wir herausfinden, welche Stimme verwendet werden soll. Wir verwenden die [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) `selectedOptions`-Eigenschaft, um das derzeit ausgewählte {{htmlelement("option")}}-Element zurückzugeben. Wir verwenden dann das `data-name`-Attribut dieses Elements und finden das [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekt, dessen Name mit dem Wert dieses Attributs übereinstimmt. Wir setzen das passende Sprachobjekt auf den Wert der [`SpeechSynthesisUtterance.voice`](/de/docs/Web/API/SpeechSynthesisUtterance/voice)-Eigenschaft.

Abschließend setzen wir die [`SpeechSynthesisUtterance.pitch`](/de/docs/Web/API/SpeechSynthesisUtterance/pitch) und [`SpeechSynthesisUtterance.rate`](/de/docs/Web/API/SpeechSynthesisUtterance/rate) auf die Werte der entsprechenden Reichweitenformular-Elemente. Dann, mit allen notwendigen Vorbereitungen getroffen, beginnen wir das Aussprechen der Äußerung, indem wir [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak) aufrufen und die [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Instanz als Parameter übergeben.

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

Im letzten Teil des Handlers binden wir ein [`pause`-Ereignis](/de/docs/Web/API/SpeechSynthesisUtterance/pause_event) ein, um zu zeigen, wie [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent) sinnvoll genutzt werden kann. Wenn [`SpeechSynthesis.pause()`](/de/docs/Web/API/SpeechSynthesis/pause) aufgerufen wird, wird eine Meldung zurück­gegeben, die die Zeichen-Nummer und den Namen nennt, bei denen die Sprache pausiert wurde.

Abschließend rufen wir [`blur()`](/de/docs/Web/API/HTMLElement/blur) auf das Texteingabefeld auf. Dies dient hauptsächlich dazu, die Tastatur unter Firefox OS auszublenden.

#### Aktualisieren der angezeigten Werte für Tonhöhe und Rate

Der letzte Teil des Codes aktualisiert die in der Benutzeroberfläche angezeigten `pitch`/`rate`-Werte jedes Mal, wenn sich die Schiebereglerpositionen ändern.

```js
pitch.onchange = () => {
  pitchValue.textContent = pitch.value;
};

rate.onchange = () => {
  rateValue.textContent = rate.value;
};
```
