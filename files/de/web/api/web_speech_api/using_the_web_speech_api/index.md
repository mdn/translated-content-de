---
title: Verwenden der Web Speech API
slug: Web/API/Web_Speech_API/Using_the_Web_Speech_API
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{DefaultAPISidebar("Web Speech API")}}

Die Web Speech API bietet zwei unterschiedliche Funktionen — Spracherkennung und Sprachsynthese (auch bekannt als Text-to-Speech oder TTS) — die interessante Möglichkeiten zur Barrierefreiheit und Steuerung eröffnen. Dieser Artikel bietet eine Einführung in beide Bereiche sowie Demos.

## Spracherkennung

Die Spracherkennung umfasst das Empfangen von Audio von einem Mikrofon des Geräts (oder von einer Audiospur), die dann von einem Spracherkennungsdienst überprüft wird. Wenn der Dienst erfolgreich ein Wort oder einen Ausdruck erkennt, gibt er eine Textzeichenfolge (oder eine Liste von Zeichenfolgen) zurück, die Sie zur Initiierung weiterer Aktionen verwenden können.

Die Web Speech API verfügt über eine Hauptcontroller-Schnittstelle dafür — [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) — und mehrere verwandte Schnittstellen zur Darstellung von Ergebnissen.

Generell wird für die Spracherkennung das auf dem Benutzergerät verfügbare Spracherkennungssystem verwendet. Die meisten modernen Betriebssysteme verfügen über ein Spracherkennungssystem zur Ausgabe von Sprachbefehlen, wie **Diktat** auf macOS oder **Copilot** auf Windows.

Standardmäßig beinhaltet die Verwendung der Spracherkennung auf einer Webseite eine serverbasierte Erkennungsengine. Ihr Audio wird zu einem Webdienst zur Erkennungsbearbeitung gesendet, sodass es offline nicht funktioniert.

Um die Privatsphäre und Leistung zu verbessern, können Sie angeben, dass die Spracherkennung auf dem Gerät erfolgen soll. Dies stellt sicher, dass weder das Audio noch die transkribierte Sprache zur Verarbeitung an einen Drittanbieterdienst gesendet wird. Wir behandeln die geräteinterne Funktionalität ausführlicher im Abschnitt [Geräteinterne Spracherkennung](#geräteinterne_spracherkennung).

### Demo

Um zu demonstrieren, wie man Spracherkennung verwendet, haben wir eine Beispiel-App namens [Speech color changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer) erstellt. Nachdem Sie die Schaltfläche **Start recognition** gedrückt haben, sagen Sie ein HTML-Farbwort. Die Hintergrundfarbe der App ändert sich entsprechend.

![Screenshot unserer Demo-App namens Speech Color Changer. Sie fordert den Benutzer auf, die Schaltfläche zu drücken und eine Farbe zu sagen. Sie ändert die Hintergrundfarbe der App in diese Farbe. In diesem Fall hat sich die Hintergrundfarbe zu Rosa geändert.](speech-color-changer.png)

Um die Demo auszuführen, rufen Sie die [Live-Demo-URL](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) in einem [unterstützten Browser](/de/docs/Web/API/SpeechRecognition#browser_compatibility) auf.

### HTML und CSS

Das HTML und CSS der App sind einfach. Es gibt einen Titel, einen Anleitungspara ({{htmlelement("p")}}), eine Steuerung {{htmlelement("button")}} und einen Ausgabeabsatz, in dem wir Diagnosemeldungen anzeigen, einschließlich der Wörter, die unsere App erkannt hat.

```html
<h1>Speech color changer</h1>

<p class="hints"></p>

<button>Start recognition</button>

<p class="output"><em>...diagnostic messages</em></p>
```

Das CSS bietet eine grundlegende responsive Gestaltung, sodass es auf verschiedenen Geräten gut aussieht.

### JavaScript

Betrachten wir das JavaScript etwas genauer.

#### Präfix-Eigenschaften

Einige Browser unterstützen derzeit Spracherkennung mit Präfix-Eigenschaften. Daher enthalten wir am Anfang unseres Codes diese Zeilen, um sowohl Präfix- als auch nicht präfixierte Versionen zu ermöglichen:

```js
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
```

#### Farbliste

Der nächste Abschnitt unseres Codes definiert einige Beispiel-Farben, die wir im UI anzeigen, um den Benutzern einen Hinweis zu geben, was sie sagen sollen:

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
```

#### Erstellen einer Spracherkennungsinstanz

Als Nächstes definieren wir eine Spracherkennungsinstanz, um die Erkennung in unserer App zu steuern. Dies tun wir, indem wir den [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)-Konstruktor verwenden.

```js
const recognition = new SpeechRecognition();
```

Wir setzen dann einige Eigenschaften der Erkennungsinstanz:

- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous): Steuert, ob die Ergebnisse kontinuierlich erfasst werden (`true`) oder nur einmal bei jedem Erkennungsstart (`false`).
- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang): Legt die Sprache der Erkennung fest. Dies explizit einzustellen ist die empfohlene Best Practice.
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults): Definiert, ob das Spracherkennungssystem Zwischen- oder nur Endergebnisse zurückgeben soll. Für diese Demo sind Endergebnisse ausreichend.
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives): Legt die Anzahl alternativer potenzieller Übereinstimmungen fest, die pro Ergebnis zurückgegeben werden sollen. Dies kann manchmal nützlich sein, z. B. wenn ein Ergebnis nicht eindeutig ist und Sie eine Liste von Alternativen zur Auswahl anzeigen möchten. Für diese Demo ist das jedoch nicht erforderlich, daher geben wir nur eine an (was ohnehin der Standard ist).

```js
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
```

#### Starten der Spracherkennung

Nachdem wir die Verweise auf den Ausgabeabsatz, das `<html>`-Element, den Anleitungspara und den `<button>` erfasst haben, implementieren wir einen `onclick`-Handler. Wenn ein Benutzer den Button drückt, startet der Spracherkennungsdienst durch Aufruf von [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start). Wir haben auch die Methode `forEach()` verwendet, um farbige Indikatoren auszugeben, die zeigen, welche Farben die Benutzer ausprobieren können.

```js
const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");
const hints = document.querySelector(".hints");
const startBtn = document.querySelector("button");

let colorHTML = "";
colors.forEach(function (v, i, a) {
  console.log(v, i);
  colorHTML += '<span style="background-color:' + v + ';"> ' + v + " </span>";
});
hints.innerHTML =
  "Press the button then say a color to change the background color of the app. Try " +
  colorHTML +
  ".";

startBtn.onclick = function () {
  recognition.start();
  console.log("Ready to receive a color command.");
};
```

#### Empfangen und Verarbeiten von Ergebnissen

Sobald die Spracherkennung gestartet ist, stehen mehrere Event-Handler zur Verfügung, die Sie verwenden können, um Ergebnisse und andere zugehörige Informationen abzurufen (siehe [Events](/de/docs/Web/API/SpeechRecognition#events) für `SpeechRecognition`). Der am häufigsten verwendete ist das [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Event, das ausgelöst wird, nachdem ein erfolgreiches Ergebnis empfangen wurde:

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(`Confidence: ${event.results[0][0].confidence}`);
};
```

Die zweite Zeile ist etwas komplex, daher erklären wir hier jeden Teil:

- Die [`SpeechRecognitionEvent.results`](/de/docs/Web/API/SpeechRecognitionEvent/results)-Eigenschaft gibt ein [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)-Objekt zurück, das [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekte enthält. Es hat einen Getter, sodass es wie ein Array zugänglich ist — das erste `[0]` gibt das `SpeechRecognitionResult` an Position `0` zurück.
- Jedes `SpeechRecognitionResult`-Objekt enthält wiederum [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte, die jeweils ein einzelnes erkanntes Wort darstellen. Auch diese haben Getter, sodass sie wie Arrays zugänglich sind — das zweite `[0]` gibt die `SpeechRecognitionAlternative` an Position `0` zurück.
- Die `transcript`-Eigenschaft der `SpeechRecognitionAlternative` gibt eine Zeichenfolge zurück, die den erkannten Text enthält. Dieser Wert wird dann verwendet, um die Hintergrundfarbe auf eine erkannte Farbe zu setzen und sie auch als Diagnosemeldung im UI zu melden.

Wir verwenden auch das [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event)-Event, um den Spracherkennungsdienst nach Erkennung eines einzigen Wortes mit [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop) zu stoppen:

```js
recognition.onspeechend = () => {
  recognition.stop();
};
```

#### Umgang mit Fehlern und nicht erkannten Sprachteilen

Die letzten beiden Handler decken Fälle ab, in denen der gesprochene Begriff nicht erkannt wird oder ein Fehler bei der Erkennung auftritt. Das [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)-Event soll den ersten Fall behandeln, obwohl die Erkennungs-Engine in den meisten Fällen etwas zurückgibt, selbst wenn es unverständlich ist:

```js
recognition.onnomatch = (event) => {
  diagnostic.textContent = "I didn't recognize that color.";
};
```

Das [`error`](/de/docs/Web/API/SpeechRecognition/error_event)-Event behandelt Fälle, in denen ein tatsächlicher Fehler bei der Erkennung auftritt — die [`SpeechRecognitionErrorEvent.error`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error)-Eigenschaft enthält den zurückgegebenen Fehler:

```js
recognition.onerror = (event) => {
  diagnostic.textContent = `Error occurred in recognition: ${event.error}`;
};
```

## Geräteinterne Spracherkennung

Die Spracherkennung wird üblicherweise über einen Online-Dienst durchgeführt. Das bedeutet, dass eine Audioaufnahme an einen Server zur Verarbeitung gesendet wird, und die Ergebnisse dann an den Browser zurückgesendet werden. Dies hat einige Probleme:

- Privatsphäre: Viele Benutzer fühlen sich unwohl dabei, dass ihre Sprache an einen Server gesendet wird.
- Leistung: Das Senden von Daten an einen Server für jede Erkennung kann die Leistung in intensiveren Anwendungen verlangsamen, und Ihre Apps funktionieren nicht offline.

Um diese Probleme zu lösen, ermöglicht die Web Speech API, dass die Spracherkennung vom Browser auf dem Gerät durchgeführt wird. Dies erfordert einen einmaligen Sprachpaket-Download für jede Sprache, die Sie erkennen möchten; nach der Installation steht die Funktionalität offline zur Verfügung.

Dieser Abschnitt erklärt, wie Sie die geräteinterne Spracherkennung verwenden können.

### Demo

Um die geräteinterne Spracherkennung zu demonstrieren, haben wir eine Beispiel-App namens [On-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) erstellt ([Demo live ausführen](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)).

Diese Demo funktioniert sehr ähnlich wie die vorher besprochene Online-Sprachfarbwechseldemo, wobei die Unterschiede unten hervorgehoben werden.

### Festlegen der geräteinternen Erkennung

Um anzugeben, dass Sie die geräteinterne Verarbeitung des Browsers verwenden möchten, setzen Sie die [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally)-Eigenschaft vor dem Starten einer Spracherkennung auf `true` (der Standardwert ist `false`):

```js
recognition.processLocally = true;
```

### Verfügbarkeit prüfen und Sprachpakete installieren

Damit die geräteinterne Spracherkennung funktioniert, muss der Browser über ein Sprachpaket für die Sprache verfügen, die Sie erkennen möchten. Wenn Sie die Methode `start()` ausführen, nachdem Sie `processLocally = true` angegeben haben, aber das richtige Sprachpaket nicht installiert ist, schlägt der Funktionsaufruf mit einem [`language-not-supported`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported)-Fehler fehl.

Um das richtige Sprachpaket zu installieren, befolgen Sie diese zwei Schritte:

1. Prüfen, ob das Sprachpaket auf dem Gerät des Benutzers verfügbar ist: Dies wird mit der statischen Methode [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static) gehandhabt.
2. Installieren des Sprachpakets, wenn es nicht verfügbar ist: Dies wird mit der statischen Methode [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static) gehandhabt.

Diese Schritte werden im folgenden `click`-Event-Handler auf dem Steuerungs-`<button>` der App behandelt:

```js
startBtn.addEventListener("click", () => {
  // check availability of target language
  SpeechRecognition.available({ langs: ["en-US"], processLocally: true }).then(
    (result) => {
      if (result === "unavailable") {
        diagnostic.textContent = `en-US is not available to download at this time. Sorry!`;
      } else if (result === "available") {
        recognition.start();
        console.log("Ready to receive a color command.");
      } else {
        diagnostic.textContent = `en-US language pack is downloading...`;
        SpeechRecognition.install({
          langs: ["en-US"],
          processLocally: true,
        }).then((result) => {
          if (result) {
            diagnostic.textContent = `en-US language pack downloaded. Start recognition again.`;
          } else {
            diagnostic.textContent = `en-US language pack failed to download. Try again later.`;
          }
        });
      }
    },
  );
});
```

Die `available()`-Methode nimmt ein Optionsobjekt auf, das zwei Eigenschaften enthält:

- Ein `langs`-Array, das die Sprachen enthält, für die die Verfügbarkeit geprüft werden soll.
- Ein `processLocally`-Boolean, der angibt, ob die Verfügbarkeit der Sprache nur auf dem Gerät (`true`) oder entweder lokal oder über einen serverbasierten Erkennungsdienst (`false`, die Standardeinstellung) geprüft werden soll.

Wenn diese Methode ausgeführt wird, gibt sie ein {{jsxref("Promise")}} zurück, das mit einem enumerierten Wert auflöst, der die Verfügbarkeit der angegebenen Sprachen angibt. In unserer Demo testen wir drei Bedingungen:

- Wenn der resultierende Wert `unavailable` ist, bedeutet dies, dass kein geeignetes Sprachpaket zum Download verfügbar ist. Wir drucken auch eine entsprechende Nachricht in die Ausgabe.
- Wenn der resultierende Wert `available` ist, bedeutet dies, dass das Sprachpaket lokal verfügbar ist, sodass die Erkennung beginnen kann. In diesem Fall führen wir `start()` aus und protokollieren eine Nachricht in die Konsole, wenn die App bereit ist, Sprache zu empfangen.
- Wenn der Wert etwas anderes ist (`downloadable` oder `downloading`), drucken wir eine Diagnosemeldung, um den Benutzer zu informieren, dass ein Sprachpaket-Download beginnt, und führen dann die Methode `install()` aus, um den Download zu handhaben.

Die `install()`-Methode funktioniert ähnlich wie die `available()`-Methode, außer dass ihr Optionsobjekt nur das `langs`-Array annimmt. Wenn sie ausgeführt wird, beginnt sie, alle Sprachpakete für die in `langs` angegebenen Sprachen herunterzuladen und gibt ein {{jsxref("Promise")}} zurück, das mit einem Boolean auflöst, der angibt, ob die angegebenen Sprachpakete erfolgreich heruntergeladen und installiert wurden (`true`) oder nicht (`false`).

Für diese Demo drucken wir eine Diagnosemeldung, um die Erfolgs- und Fehlerfälle anzuzeigen. In einer umfassenderen App würden Sie wahrscheinlich die Steuerungen während des Download-Vorgangs deaktivieren und sie nach der Auflösung des Versprechens erneut aktivieren.

### Integration der Berechtigungsrichtlinie

Die Verwendung der Methoden `available()` und `install()` wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} gesteuert. Insbesondere, wenn eine definierte Richtlinie die Verwendung blockiert, schlagen Versuche, diese Methoden aufzurufen, fehl.

Der Standard-Wert für `on-device-speech-recognition` ist `self`. Das bedeutet, dass Sie sich keine Gedanken über die Anpassung der Richtlinie machen müssen, es sei denn, Sie versuchen, diese Methoden in eingebetteten Cross-Origin-Dokumenten zu verwenden oder möchten deren Nutzung ausdrücklich deaktivieren.

### Unpräfixte Web Speech API

In der ursprünglichen Demo zum Speech Color Changer haben wir zusätzliche Zeilen hinzugefügt, um Browser zu behandeln, die die Web Speech API nur mit herstellerspezifischen Eigenschaften unterstützen (siehe Abschnitt [Präfix-Eigenschaften](#präfix-eigenschaften) für weitere Details).

In der gerätinternen Version der Demo ist kein Code zur Präfixbehandlung erforderlich, da die Implementierungen, die diese Funktionalität unterstützen, dies ohne Präfixe tun.

## Kontextuelle Gewichtung in der Spracherkennung

Es gibt Fälle, in denen ein Spracherkennungsdienst ein bestimmtes Wort oder einen bestimmten Ausdruck nicht korrekt erkennt. Dies geschieht am häufigsten bei fachspezifischen Begriffen (wie medizinisches oder wissenschaftliches Vokabular), Eigennamen, ungewöhnlichen Ausdrücken oder Wörtern, die ähnlich wie andere Wörter klingen und daher möglicherweise falsch erkannt werden.

Zum Beispiel stellten wir während der Tests fest, dass unser [On-device speech color changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) Schwierigkeiten hatte, die Farbe `azure` zu erkennen — es wurden ständig Ergebnisse wie "as you" zurückgegeben. Andere Farben, die häufig falsch erkannt wurden, waren `khaki` ("car key"), `tan` und `thistle` ("this all").

Um solche Probleme zu mildern, können Sie der Erkennungs-Engine mithilfe der Web Speech API Hinweise geben, die Phrasen hervorheben, die mit größerer Wahrscheinlichkeit gesprochen werden und auf die die Engine ausgerichtet werden sollte. Dadurch ist es wahrscheinlicher, dass diese Wörter und Phrasen korrekt erkannt werden.

Sie können dies tun, indem Sie ein Array von [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Objekten als Wert der [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases)-Eigenschaft festlegen. Jedes `SpeechRecognitionPhrase`-Objekt enthält:

- Eine `phrase`-Eigenschaft, die eine Zeichenfolge mit dem Wort oder der Phrase enthält, die hervorgehoben werden soll.
- Eine `boost`-Eigenschaft, die eine Gleitkommazahl zwischen `0.0` und `10.0` (einschließlich) ist, die die Höhe der Gewichtung festlegt, die Sie auf dieses Wort oder diesen Ausdruck anwenden möchten. Höhere Werte machen das Wort oder den Ausdruck wahrscheinlicher erkannt.

In unserer "On-device speech color changer"-Demo handhaben wir dies, indem wir ein Array von zu verstärkenden Phrasen und deren Verstärkungswerte erstellen:

```js
const phraseData = [
  { phrase: "azure", boost: 5.0 },
  { phrase: "khaki", boost: 3.0 },
  { phrase: "tan", boost: 2.0 },
];
```

Diese müssen als `ObservableArray` von `SpeechRecognitionPhrase`-Objekten dargestellt werden. Wir handhaben dies, indem wir das ursprüngliche Array abbilden, um jedes Array-Element mithilfe des [`SpeechRecognitionPhrase()`](/de/docs/Web/API/SpeechRecognitionPhrase/SpeechRecognitionPhrase)-Konstruktors in ein `SpeechRecognitionPhrase`-Objekt zu konvertieren:

```js
const phraseObjects = phraseData.map(
  (p) => new SpeechRecognitionPhrase(p.phrase, p.boost),
);
```

Nach dem Erstellen der `SpeechRecognition`-Instanz fügen wir unsere kontextuellen Gewichtungsphrasen hinzu, indem wir das `phraseObjects`-Array als Wert der `SpeechRecognition.phrases`-Eigenschaft festlegen:

```js
recognition.phrases = phraseObjects;
```

Das Phrasen-Array kann wie ein normales JavaScript-Array geändert werden, zum Beispiel indem man ihm dynamisch neue Phrasen hinzufügt:

```js
recognition.phrases.push(new SpeechRecognitionPhrase("thistle", 5.0));
```

Mit diesem Code stellten wir fest, dass die problematischen Farb-Stichwörter genauer erkannt wurden als zuvor.

## Sprachsynthese

Die Sprachsynthese (auch bekannt als Text-to-Speech oder TTS) beinhaltet das Umwandeln von Text, der in einer App enthalten ist, in Sprache und das Abspielen über die Lautsprecher oder den Audioausgang eines Geräts.

Die Web Speech API hat eine Hauptcontroller-Schnittstelle dafür — [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) — sowie eine Reihe von eng verwandten Schnittstellen zur Darstellung des zu synthetisierenden Textes (bekannt als Äußerungen), der Stimmen, die für die Äußerung verwendet werden sollen, usw. Auch die meisten Betriebssysteme haben irgendein Sprachsynthesesystem, das von der API für diese Aufgabe verwendet wird.

### Demo

Um zu demonstrieren, wie man die Web Speech Synthese verwendet, haben wir eine Beispiel-App namens [Speech synthesiser](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) erstellt. Es enthält ein Eingabefeld zur Eingabe des zu synthetisierenden Textes. Sie können die Rate und Tonhöhe anpassen und auch eine Stimme aus dem Dropdown-Menü auswählen, die für den gesprochenen Text verwendet werden soll. Nachdem Sie Ihren Text eingegeben haben, drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd> oder klicken Sie auf die Schaltfläche **Play**, um den Text laut vorlesen zu lassen.

![UI einer App namens Speak Easy Synthesis. Sie enthält ein Eingabefeld, in das Text zur Synthese eingegeben wird, Schieberegler, um die Rate und Tonhöhe der Sprache zu ändern, und ein Dropdown-Menü, um zwischen verschiedenen Stimmen zu wählen.](speak-easy-synthesis.png)

Um die Demo auszuführen, rufen Sie die [Live-Demo-URL](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) in einem [unterstützten Browser](/de/docs/Web/API/SpeechSynthesis#browser_compatibility) auf.

### HTML und CSS

Das HTML und CSS dieser App sind ziemlich einfach. Es gibt einen Titel, einige Anweisungen zur Nutzung und ein Formular mit einigen einfachen Steuerungen. Das {{htmlelement("select")}}-Element ist anfangs leer; es wird durch JavaScript mit {{htmlelement("option")}}s gefüllt (später behandelt).

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

Zuerst erfassen wir Verweise auf alle DOM-Elemente, die an der UI beteiligt sind. Interessanterweise erfassen wir aber eine Referenz auf [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis). Dies ist der Einstiegspunkt der API — er gibt eine Instanz von [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) zurück, die Controller-Schnittstelle für die Web-Sprachsynthese.

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

#### Auffüllen des select-Elements

Um das {{htmlelement("select")}}-Element mit den verschiedenen verfügbaren Stimmen des Geräts zu füllen, haben wir eine Funktion `populateVoiceList()` geschrieben. Wir rufen zuerst [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) auf, das eine Liste aller verfügbaren Stimmen als [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte zurückgibt. Wir durchlaufen dann diese Liste — für jede Stimme erstellen wir ein {{htmlelement("option")}}-Element, setzen dessen Textinhalt, um den Namen der Stimme anzuzeigen (von [`SpeechSynthesisVoice.name`](/de/docs/Web/API/SpeechSynthesisVoice/name) geholt), die Sprache der Stimme (von [`SpeechSynthesisVoice.lang`](/de/docs/Web/API/SpeechSynthesisVoice/lang) geholt) und `-- DEFAULT`, wenn die Stimme die Standardstimme für die Synthese-Engine ist (überprüft, indem überprüft wird, ob [`SpeechSynthesisVoice.default`](/de/docs/Web/API/SpeechSynthesisVoice/default) `true` zurückgibt).

Wir erstellen auch `data-`-Attribute für jede Option, die den Namen und die Sprache der zugehörigen Stimme enthalten, sodass wir sie später leicht abrufen können, und fügen dann die Optionen als Kinder des `select` hinzu.

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

Ältere Browser unterstützen das [`voiceschanged`](/de/docs/Web/API/SpeechSynthesis/voiceschanged_event)-Event nicht und geben einfach eine Liste von Stimmen zurück, wenn [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) ausgelöst wird. Während Sie bei anderen, wie Chrome, warten müssen, bis das Event ausgelöst wird, bevor Sie die Liste füllen. Um für beide Fälle geeignet zu sein, führen wir die Funktion wie unten gezeigt aus:

```js
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

#### Sprechen des eingegebenen Textes

Als nächstes erstellen wir einen Event-Handler, um den Text im Texteinabefeld zu sprechen zu beginnen. Wir verwenden einen [onsubmit](/de/docs/Web/API/HTMLFormElement/submit_event)-Handler im Formular, sodass die Aktion ausgeführt wird, wenn <kbd>Enter</kbd>/<kbd>Return</kbd> gedrückt wird. Zuerst erstellen wir eine neue [`SpeechSynthesisUtterance()`](/de/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance)-Instanz mit ihrem Konstruktor – dies wird dem Textinhalt des Eingabefelds als Parameter übergeben.

Als nächstes müssen wir herausfinden, welche Stimme verwendet werden soll. Wir verwenden die [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) `selectedOptions`-Eigenschaft, um das aktuell ausgewählte {{htmlelement("option")}}-Element zurückzugeben. Dann verwenden wir das `data-name`-Attribut dieses Elements, um das [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekt zu finden, dessen Name dem Wert dieses Attributs entspricht. Wir setzen das übereinstimmende Stimmenobjekt als Wert der [`SpeechSynthesisUtterance.voice`](/de/docs/Web/API/SpeechSynthesisUtterance/voice)-Eigenschaft.

Schließlich setzen wir die [`SpeechSynthesisUtterance.pitch`](/de/docs/Web/API/SpeechSynthesisUtterance/pitch) und [`SpeechSynthesisUtterance.rate`](/de/docs/Web/API/SpeechSynthesisUtterance/rate) auf die Werte der entsprechenden Bereiche des Formulars. Dann, mit allen notwendigen Vorbereitungen, starten wir die Äußerung mit [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak), indem wir die [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Instanz als Parameter übergeben.

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

Im letzten Teil des Handlers fügen wir ein [`pause`](/de/docs/Web/API/SpeechSynthesisUtterance/pause_event)-Event hinzu, um zu demonstrieren, wie [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent) gut genutzt werden kann. Wenn [`SpeechSynthesis.pause()`](/de/docs/Web/API/SpeechSynthesis/pause) aufgerufen wird, gibt dies eine Meldung zurück, die die Zeichenummer und den Namen angibt, bei dem die Sprache pausiert wurde.

Schließlich rufen wir [`blur()`](/de/docs/Web/API/HTMLElement/blur) auf dem Texteingabefeld auf. Dies dient hauptsächlich dazu, die Tastatur bei Firefox OS auszublenden.

#### Aktualisieren der angezeigten Pitch- und Ratenwerte

Der letzte Teil des Codes aktualisiert die in der UI angezeigten `pitch`/`rate`-Werte, jedes Mal wenn die Schiebereglerpositionen bewegt werden.

```js
pitch.onchange = () => {
  pitchValue.textContent = pitch.value;
};

rate.onchange = () => {
  rateValue.textContent = rate.value;
};
```
