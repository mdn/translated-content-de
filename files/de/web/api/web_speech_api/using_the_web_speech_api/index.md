---
title: Verwenden der Web Speech API
slug: Web/API/Web_Speech_API/Using_the_Web_Speech_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("Web Speech API")}}
Die Web Speech API bietet zwei unterschiedliche Funktionsbereiche — Spracherkennung und Sprachsynthese (auch bekannt als Text-to-Speech oder TTS) — die interessante neue Möglichkeiten für Barrierefreiheit und Steuerungsmechanismen eröffnen. Dieser Artikel bietet eine einfache Einführung in beide Bereiche, zusammen mit Demos.

## Spracherkennung

Die Spracherkennung umfasst die Aufnahme von Sprache über das Mikrofon eines Geräts, die dann von einem Spracherkennungsdienst anhand einer Liste von Grammatiken geprüft wird (im Grunde das Vokabular, das in einer bestimmten App erkannt werden soll). Wenn ein Wort oder eine Phrase erfolgreich erkannt wird, wird es als Ergebnis (oder Liste von Ergebnissen) als Textzeichenkette zurückgegeben und weitere Aktionen können daraufhin initiiert werden.

Die Web Speech API hat eine Haupt-Steuerungsschnittstelle hierfür — {{domxref("SpeechRecognition")}} — sowie eine Reihe eng verwandter Schnittstellen zur Darstellung von Grammatik, Ergebnissen usw. In der Regel wird das auf dem Gerät verfügbare Standard-Spracherkennungssystem für die Spracherkennung verwendet — die meisten modernen Betriebssysteme verfügen über ein Spracherkennungssystem zur Ausgabe von Sprachbefehlen. Denken Sie an Diktat auf macOS, Siri auf iOS, Cortana auf Windows 10, Android Speech usw.

> [!NOTE]
> In einigen Browsern, wie z. B. Chrome, erfordert die Verwendung der Spracherkennung auf einer Webseite eine serverbasierte Erkennungs-Engine. Ihr Audio wird an einen Webdienst für die Erkennungsverarbeitung gesendet, sodass es im Offline-Modus nicht funktioniert.

### Demo

Um eine einfache Nutzung der Web-Spracherkennung zu demonstrieren, haben wir eine Demo namens [Speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer) erstellt. Wenn der Bildschirm getippt/geklickt wird, können Sie ein HTML-Farb-Schlüsselwort sagen, und die Hintergrundfarbe der App ändert sich in diese Farbe.

![Die Benutzeroberfläche einer App mit dem Titel "Speech Color changer". Sie lädt den Benutzer ein, auf den Bildschirm zu tippen und eine Farbe zu sagen und dann die Hintergrundfarbe der App auf die entsprechende Farbe zu ändern. In diesem Fall hat sie den Hintergrund rot gefärbt.](speech-color-changer.png)

Um die Demo auszuführen, navigieren Sie zur [Live-Demo-URL](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) in einem unterstützenden mobilen Browser (wie Chrome).

### HTML und CSS

Das HTML und CSS der App ist wirklich trivial. Wir haben einen Titel, einen Anleitungsabsatz und ein div, in das wir Diagnose-Nachrichten ausgeben.

```html
<h1>Speech color changer</h1>
<p>Tap/klicken Sie dann und sagen Sie eine Farbe, um die Hintergrundfarbe der App zu ändern.</p>
<div>
  <p class="output"><em>…Diagnosenachrichten</em></p>
</div>
```

Das CSS bietet ein sehr einfaches responsives Styling, sodass es auf verschiedenen Geräten gut aussieht.

### JavaScript

Lassen Sie uns das JavaScript ein wenig genauer betrachten.

#### Präfix-Eigenschaften

Browser unterstützen derzeit die Spracherkennung mit Präfix-Eigenschaften. Daher enthalten wir am Anfang unseres Codes diese Zeilen, um sowohl Präfix-Eigenschaften als auch unpräfixte Versionen zu ermöglichen, die in Zukunft unterstützt werden könnten:

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

Das verwendete Grammatikformat ist das [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) — im vorherigen Link zur Spezifikation finden Sie viel mehr darüber. Lassen Sie uns jedoch kurz durchgehen:

- Die Zeilen werden durch Semikolons getrennt, genau wie in JavaScript.
- Die erste Zeile — `#JSGF V1.0;` — gibt das verwendete Format und die Version an. Dies muss immer zuerst enthalten sein.
- Die zweite Zeile gibt einen Typ von Begriffen an, die wir erkennen möchten. `public` erklärt, dass es eine öffentliche Regel ist, der String in den spitzen Klammern definiert den anerkannten Namen für diesen Begriff (`color`), und die Liste der Elemente, die dem Gleichheitszeichen folgen, sind die alternativen Werte, die erkannt und als angemessene Werte für den Begriff akzeptiert werden. Beachten Sie, wie jedes durch ein Pipe-Zeichen getrennt wird.
- Sie können so viele Begriffe definieren, wie Sie möchten, auf separaten Zeilen, die der obigen Struktur folgen, und recht komplexe Grammatiken einfügen. Für diese einfache Demo halten wir die Dinge einfach.

#### Einfügen der Grammatik in unsere Spracherkennung

Als nächstes definieren wir eine Instanz der Spracherkennung, um die Erkennung für unsere Anwendung zu steuern. Dies erfolgt mit dem {{domxref("SpeechRecognition.SpeechRecognition()","SpeechRecognition()")}} Konstruktor. Wir erstellen auch eine neue Sprach-Grammatikliste, um unsere Grammatik zu enthalten, unter Verwendung des {{domxref("SpeechGrammarList.SpeechGrammarList()","SpeechGrammarList()")}} Konstruktors.

```js
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
```

Wir fügen unsere `grammar` der Liste mit der Methode {{domxref("SpeechGrammarList.addFromString()")}} hinzu. Diese akzeptiert als Parameter den String, den wir hinzufügen möchten, plus optional einen Gewichtungswert, der die Wichtigkeit dieser Grammatik in Bezug auf andere Grammatiken in der Liste angibt (kann von 0 bis 1 inklusive variieren). Die hinzugefügte Grammatik ist in der Liste als {{domxref("SpeechGrammar")}} Objektinstanz verfügbar.

```js
speechRecognitionList.addFromString(grammar, 1);
```

Wir fügen dann die {{domxref("SpeechGrammarList")}} der Spracherkennungsinstanz hinzu, indem wir sie auf den Wert der Eigenschaft {{domxref("SpeechRecognition.grammars")}} setzen. Wir setzen auch einige andere Eigenschaften der Erkennungsinstanz, bevor wir fortfahren:

- {{domxref("SpeechRecognition.continuous")}}: Steuert, ob kontinuierliche Ergebnisse erfasst werden (`true`) oder nur ein einzelnes Ergebnis jedes Mal, wenn die Erkennung gestartet wird (`false`).
- {{domxref("SpeechRecognition.lang")}}: Legt die Sprache der Erkennung fest. Das Setzen dies ist eine gute Übung und daher empfohlen.
- {{domxref("SpeechRecognition.interimResults")}}: Definiert, ob das Spracherkennungssystem Zwischen-Ergebnisse oder nur endgültige Ergebnisse zurückgeben soll. Endgültige Ergebnisse reichen für diese einfache Demo aus.
- {{domxref("SpeechRecognition.maxAlternatives")}}: Setzt die Anzahl der alternativen potenziellen Übereinstimmungen, die pro Ergebnis zurückgegeben werden sollen. Dies kann manchmal nützlich sein, zum Beispiel wenn ein Ergebnis nicht vollständig klar ist und Sie eine Liste von Alternativen anzeigen möchten, aus denen der Benutzer die richtige auswählen kann. Aber es wird für diese einfache Demo nicht benötigt, also geben wir einfach eins an (was eigentlich sowieso der Standard ist).

```js
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
```

#### Start der Spracherkennung

Nachdem wir Referenzen auf die Ausgabe-{{htmlelement("div")}} und das HTML-Element erfasst haben (damit wir Diagnosenachrichten ausgeben und die Hintergrundfarbe der App später aktualisieren können), implementieren wir einen onclick-Handler, sodass wenn der Bildschirm getippt/geklickt wird, der Spracherkennungsdienst startet. Dies wird durch einen Aufruf von {{domxref("SpeechRecognition.start()")}} erreicht. Die `forEach()` Methode wird verwendet, um farbige Indikatoren anzuzeigen, die zeigen, welche Farben gesagt werden sollen.

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
  console.log("Bereit, einen Farbauftrag zu empfangen.");
};
```

#### Empfang und Verarbeitung von Ergebnissen

Sobald die Spracherkennung gestartet ist, gibt es viele Ereignishandler, die verwendet werden können, um Ergebnisse und andere umgebende Informationen abzurufen (siehe die [`SpeechRecognition`-Ereignisse](/de/docs/Web/API/SpeechRecognition#events).) Das gebräuchlichste, das Sie wahrscheinlich verwenden werden, ist das {{domxref("SpeechRecognition.result_event", "result")}}-Ereignis, das ausgelöst wird, sobald ein erfolgreiches Ergebnis empfangen wird:

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Ergebnis empfangen: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(`Vertrauen: ${event.results[0][0].confidence}`);
};
```

Die zweite Zeile hier sieht ein wenig komplex aus, also lassen Sie uns diese Schritt für Schritt erklären. Die Eigenschaft {{domxref("SpeechRecognitionEvent.results")}} gibt ein {{domxref("SpeechRecognitionResultList")}} Objekt zurück, das {{domxref("SpeechRecognitionResult")}} Objekte enthält. Es hat einen Getter, sodass es wie ein Array zugegriffen werden kann — das erste `[0]` gibt das `SpeechRecognitionResult` an Position 0 zurück. Jedes `SpeechRecognitionResult` Objekt enthält {{domxref("SpeechRecognitionAlternative")}} Objekte, die einzelne erkannte Wörter enthalten. Diese haben auch Getter, sodass sie wie Arrays zugegriffen werden können — das zweite `[0]` gibt daher die `SpeechRecognitionAlternative` an Position 0 zurück. Wir geben dann seine `transcript` Eigenschaft zurück, um einen String zu erhalten, der das individuelle erkannte Ergebnis als String enthält, setzen die Hintergrundfarbe auf diese Farbe und melden die erkannte Farbe als Diagnosenachricht in der Benutzeroberfläche.

Wir verwenden auch das {{domxref("SpeechRecognition.speechend_event", "speechend")}}-Ereignis, um den Spracherkennungsdienst zu stoppen (mithilfe von {{domxref("SpeechRecognition.stop()")}}), wenn ein einzelnes Wort erkannt wurde und es beendet ist, gesprochen zu werden:

```js
recognition.onspeechend = () => {
  recognition.stop();
};
```

#### Fehlerbehandlung und nicht erkannte Sprache

Die letzten zwei Handler sind dort, um Fälle zu behandeln, in denen Sprache erkannt wurde, die nicht in der definierten Grammatik war, oder ein Fehler aufgetreten ist. Das {{domxref("SpeechRecognition.nomatch_event", "nomatch")}}-Ereignis scheint den ersten genannten Fall zu behandeln, obwohl zu beachten ist, dass es im Moment anscheinend nicht korrekt ausgelöst wird; es gibt einfach alles zurück, was erkannt wurde:

```js
recognition.onnomatch = (event) => {
  diagnostic.textContent = "Ich habe diese Farbe nicht erkannt.";
};
```

Das {{domxref("SpeechRecognition.error_event", "error")}}-Ereignis behandelt Fälle, in denen tatsächlich ein Fehler bei der Erkennung aufgetreten ist — die Eigenschaft {{domxref("SpeechRecognitionErrorEvent.error")}} enthält den tatsächlichen Fehler, der zurückgegeben wurde:

```js
recognition.onerror = (event) => {
  diagnostic.textContent = `Fehler bei der Erkennung aufgetreten: ${event.error}`;
};
```

## Sprachsynthese

Sprachsynthese (auch bekannt als Text-to-Speech oder TTS) beinhaltet das Empfangen von zu Sprache zu synthetisierendem Text innerhalb einer App und das Abspielen über den Lautsprecher oder eine Audioausgangsverbindung eines Geräts.

Die Web Speech API hat eine Haupt-Steuerungsschnittstelle hierfür — {{domxref("SpeechSynthesis")}} — sowie eine Reihe eng verwandter Schnittstellen zur Darstellung von zu synthetisierendem Text (genannt Äußerungen), Stimmen, die für die Äußerung verwendet werden sollen usw. Auch hier haben die meisten Betriebssysteme irgendeine Art Sprachsynthesesystem, das von der API für diese Aufgabe verwendet wird, soweit verfügbar.

### Demo

Um eine einfache Nutzung der Sprachsynthese zu demonstrieren, haben wir eine Demo namens [Speak easy synthesis](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) bereitgestellt. Diese enthält eine Reihe von Formulario-Elementen zum Eingeben des zu synthetisierenden Textes und zum Einstellen der Tonhöhe, Geschwindigkeit und Stimme, die beim Aussprechen des Textes verwendet werden soll. Nachdem Sie Ihren Text eingegeben haben, können Sie <kbd>Eingabe</kbd>/<kbd>Return</kbd> drücken, um ihn sprechen zu hören.

![Benutzeroberfläche einer App namens speak easy synthesis. Sie hat ein Eingabefeld, um Text zur Synthese einzugeben, Schieberegler zur Änderung der Sprechgeschwindigkeit und -höhe und ein Dropdown-Menü zur Auswahl zwischen verschiedenen Stimmen.](speak-easy-synthesis.png)

Um die Demo auszuführen, navigieren Sie zur [Live-Demo-URL](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) in einem unterstützenden mobilen Browser.

### HTML und CSS

Das HTML und CSS sind erneut ziemlich trivial, enthalten einen Titel, einige Anweisungen zur Verwendung und ein Formular mit einigen einfachen Kontrollen. Das {{htmlelement("select")}}-Element ist anfänglich leer, wird jedoch später über JavaScript mit {{htmlelement("option")}}s gefüllt (siehe weiter unten).

```html
<h1>Sprachausgabe</h1>

<p>
  Geben Sie einen Text in das unten stehende Eingabefeld ein und drücken Sie die Eingabetaste, um ihn zu hören. Wechseln Sie zwischen Stimmen mit dem Dropdown-Menü.
</p>

<form>
  <input type="text" class="txt" />
  <div>
    <label for="rate">Geschwindigkeit</label
    ><input type="range" min="0.5" max="2" value="1" step="0.1" id="rate" />
    <div class="rate-value">1</div>
    <div class="clearfix"></div>
  </div>
  <div>
    <label for="pitch">Tonhöhe </label
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

Zunächst erfassen wir Referenzen auf alle in der Benutzeroberfläche beteiligten DOM-Elemente, aber interessanterweise erfassen wir eine Referenz auf {{domxref("Window.speechSynthesis")}}. Dies ist der Einstiegspunkt der API — es wird eine Instanz von {{domxref("SpeechSynthesis")}} zurückgegeben, der Steuerungsschnittstelle für die webbasierte Sprachsynthese.

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

#### Das select-Element füllen

Um das {{htmlelement("select")}}-Element mit den verschiedenen Stimmenoptionen zu füllen, die auf dem Gerät verfügbar sind, haben wir eine `populateVoiceList()`-Funktion geschrieben. Wir rufen zuerst {{domxref("SpeechSynthesis.getVoices()")}}, das eine Liste aller verfügbaren Stimmen zurückgibt, dargestellt von {{domxref("SpeechSynthesisVoice")}} Objekten. Dann durchlaufen wir diese Liste — für jede Stimme erstellen wir ein {{htmlelement("option")}}-Element, setzen seinen Textinhalt, um den Namen der Stimme anzuzeigen (abgerufen aus {{domxref("SpeechSynthesisVoice.name")}}), die Sprache der Stimme (abgerufen aus {{domxref("SpeechSynthesisVoice.lang")}}), und `-- DEFAULT`, wenn die Stimme die Standardstimme für die Synthesemaschine ist (geprüft, indem wir sehen, ob {{domxref("SpeechSynthesisVoice.default")}} `true` zurückgibt.)

Wir erstellen auch `data-` Attribute für jede Option, die den Namen und die Sprache der zugehörigen Stimme enthalten, damit wir sie später leicht abrufen können, und fügen die Optionen als untergeordnete Elemente des select ein.

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

Ältere Browser unterstützen das {{domxref("SpeechSynthesis.voiceschanged_event", "voiceschanged")}}-Ereignis nicht und geben einfach eine Liste der Stimmen zurück, wenn {{domxref("SpeechSynthesis.getVoices()")}} ausgelöst wird. Während auf anderen, wie Chrome, Sie auf das Ereignis warten müssen, bevor die Liste gefüllt wird. Um beide Fälle zu berücksichtigen, führen wir die Funktion wie unten gezeigt aus:

```js
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

#### Den eingegebenen Text sprechen

Als nächstes erstellen wir einen Ereignishandler, um den Text zu beginnen, der in das Texteingabefeld eingegeben wurde. Wir verwenden einen [onsubmit](/de/docs/Web/API/HTMLFormElement/submit_event) Handler auf dem Formular, damit die Aktion ausgelöst wird, wenn <kbd>Eingabe</kbd>/<kbd>Return</kbd> gedrückt wird. Wir erstellen zuerst eine neue {{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance()", "SpeechSynthesisUtterance()")}} Instanz mit ihrem Konstruktor — diesem wird der Wert des Texteingabefelds als Parameter übergeben.

Als nächstes müssen wir herausfinden, welche Stimme verwendet werden soll. Wir verwenden die {{domxref("HTMLSelectElement")}} `selectedOptions` Eigenschaft, um das derzeit ausgewählte {{htmlelement("option")}}-Element zurückzugeben. Wir verwenden dann das `data-name` Attribut dieses Elements, um das {{domxref("SpeechSynthesisVoice")}}-Objekt zu finden, dessen Name mit diesem Attributwert übereinstimmt. Wir setzen das übereinstimmende Sprach-Objekt als Wert der Eigenschaft {{domxref("SpeechSynthesisUtterance.voice")}}.

Schließlich setzen wir den {{domxref("SpeechSynthesisUtterance.pitch")}} und {{domxref("SpeechSynthesisUtterance.rate")}} auf die Werte der entsprechenden Bereichsformular-Elemente. Wenn alle notwendigen Vorbereitungen getroffen wurden, beginnen wir das Aussprechen der Äußerung, indem wir {{domxref("SpeechSynthesis.speak()")}} aufrufen und die {{domxref("SpeechSynthesisUtterance")}}-Instanz als Parameter übergeben.

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

Im letzten Teil des Handlers fügen wir ein {{domxref("SpeechSynthesisUtterance.pause_event", "pause")}}-Ereignis hinzu, um zu demonstrieren, wie {{domxref("SpeechSynthesisEvent")}} sinnvoll genutzt werden kann. Wenn {{domxref("SpeechSynthesis.pause()")}} aufgerufen wird, wird eine Nachricht zurückgegeben, die die Zeichenanzahl und den Namen angibt, an dem die Sprache angehalten wurde.

```js
utterThis.onpause = (event) => {
  const char = event.utterance.text.charAt(event.charIndex);
  console.log(
    `Sprache pausierte bei Zeichen ${event.charIndex} von "${event.utterance.text}", das ist "${char}".`,
  );
};
```

Schließlich rufen wir [blur()](/de/docs/Web/API/HTMLElement/blur) auf dem Texteingabefeld auf. Dies dient hauptsächlich dazu, die Tastatur auf Firefox OS auszublenden.

```js
  inputTxt.blur();
}
```

#### Aktualisierung der angezeigten Tonhöhe und Geschwindigkeitswerte

Der letzte Teil des Codes aktualisiert die `pitch`/`rate` Werte, die in der Benutzeroberfläche angezeigt werden, jedes Mal, wenn die Schiebereglerpositionen verändert werden.

```js
pitch.onchange = () => {
  pitchValue.textContent = pitch.value;
};

rate.onchange = () => {
  rateValue.textContent = rate.value;
};
```
