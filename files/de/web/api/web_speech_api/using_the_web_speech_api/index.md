---
title: Verwendung der Web Speech API
slug: Web/API/Web_Speech_API/Using_the_Web_Speech_API
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{DefaultAPISidebar("Web Speech API")}}

Die Web Speech API bietet zwei verschiedene Funktionalitätsbereiche - Spracherkennung und Sprachsynthese (auch bekannt als Text-to-Speech oder TTS) - die interessante Möglichkeiten für Barrierefreiheit und Steuerung eröffnen. Dieser Artikel bietet eine Einführung in beide Bereiche sowie Demos.

## Spracherkennung

Bei der Spracherkennung wird Audio von einem Mikrofon eines Geräts (oder von einer Audiospur) empfangen, das dann von einem Spracherkennungsdienst geprüft wird. Wenn der Dienst erfolgreich ein Wort oder eine Phrase erkennt, gibt er eine Textzeichenfolge (oder eine Liste von Zeichenfolgen) zurück, die Sie zur Einleitung weiterer Aktionen verwenden können.

Die Web Speech API verfügt über eine Hauptsteuerungsschnittstelle dafür — [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) — und mehrere verwandte Schnittstellen zur Darstellung von Ergebnissen.

In der Regel wird das Spracherkennungssystem verwendet, das auf dem Gerät des Benutzers verfügbar ist. Die meisten modernen Betriebssysteme haben ein Spracherkennungssystem zur Ausgabe von Sprachbefehlen, wie zum Beispiel **Dictation** auf macOS oder **Copilot** auf Windows.

Standardmäßig verwendet das Spracherkennungssystem auf einer Webseite eine serverbasierte Erkennungs-Engine. Ihr Audio wird an einen Webdienst zur Erkennungsverarbeitung gesendet, sodass es offline nicht funktioniert.

Um die Privatsphäre und Leistung zu verbessern, können Sie angeben, dass die Spracherkennung auf dem Gerät durchgeführt werden soll. Dies stellt sicher, dass weder das Audio noch die transkribierte Sprache zur Verarbeitung an einen Drittanbieterdienst gesendet werden. Wir behandeln die On-Device-Funktionalität ausführlicher im Abschnitt [On-Device-Spracherkennung](#on-device-spracherkennung).

### Demo

Um zu demonstrieren, wie man die Spracherkennung verwendet, haben wir eine Beispiel-App namens [Speech color changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) erstellt. Nachdem Sie die **Start recognition**-Schaltfläche gedrückt haben, sagen Sie ein HTML-Farb-Keyword. Die Hintergrundfarbe der App ändert sich zu dieser Farbe.

![Screenshot unserer Demo-App namens Speech Color Changer. Es fordert den Benutzer auf, die Schaltfläche zu drücken und eine Farbe zu sagen. Es ändert die Hintergrundfarbe der App in die genannte Farbe. In diesem Fall hat es die Hintergrundfarbe zu Rosa geändert.](speech-color-changer.png)

Um die Demo auszuführen, navigieren Sie zur [Live-Demo-URL](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) in einem [unterstützenden Browser](/de/docs/Web/API/SpeechRecognition#browser_compatibility).

### HTML und CSS

Das HTML und CSS für die App sind grundlegend. Es gibt einen Titel, einen Instruktionsabsatz ({{htmlelement("p")}}), ein Steuerungs-{{htmlelement("button")}} und einen Ausgabebereich, in dem wir Diagnosemeldungen anzeigen, einschließlich der Wörter, die unsere App erkannt hat.

```html
<h1>Speech color changer</h1>

<p class="hints"></p>

<button>Start recognition</button>

<p class="output"><em>...diagnostic messages</em></p>
```

Das CSS sorgt für ein einfaches responsives Styling, damit es auf verschiedenen Geräten gut aussieht.

### JavaScript

Betrachten wir das JavaScript etwas genauer.

#### Präfixeigenschaften

Einige Browser unterstützen derzeit die Spracherkennung mit Präfixeigenschaften. Daher beinhalten wir am Anfang unseres Codes diese Zeilen, um sowohl Präfixeigenschaften als auch nicht-präfixierte Versionen zuzulassen:

```js
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
```

#### Farbliste

Im nächsten Teil unseres Codes definieren wir einige Beispiel-Farben, die wir in der Benutzeroberfläche anzeigen, um den Benutzern eine Vorstellung davon zu geben, was sie sagen sollen:

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

#### Erstellen einer Sprachkennung-Instanz

Als Nächstes definieren wir eine Spracherkennung-Instanz, um die Erkennung in unserer App zu steuern. Wir tun dies, indem wir den [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)-Konstruktor verwenden.

```js
const recognition = new SpeechRecognition();
```

Wir setzen dann einige Eigenschaften der Erkennungsinstanz:

- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous): Steuert, ob Ergebnisse kontinuierlich (`true`) oder nur einmal pro Erkennungsstart (`false`) erfasst werden.
- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang): Legt die Sprache der Erkennung fest. Dies explizit zu setzen, ist die empfohlene Best Practice.
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults): Definiert, ob das Spracherkennungssystem Zwischen- oder nur Endergebnisse zurückgeben soll. Für diese Demo reichen Endergebnisse aus.
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives): Legt die Anzahl der alternativen möglichen Treffer fest, die pro Ergebnis zurückgegeben werden sollen. Dies kann manchmal nützlich sein, zum Beispiel wenn ein Ergebnis nicht vollständig klar ist und Sie dem Benutzer eine Liste von Alternativen zur Auswahl anzeigen möchten. Für diese Demo sind allerdings nur eine (die Standard-Einstellung) ausreichend.

```js
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
```

#### Starten der Spracherkennung

Nachdem wir Referenzen zum Ausgabeabsatz, dem `<html>`-Element, dem Instruktionsabsatz und der `<button>` gegriffen haben, implementieren wir einen `onclick`-Handler. Wenn ein Benutzer die Schaltfläche drückt, startet der Spracherkennungsdienst, indem [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start) aufgerufen wird. Wir haben auch die `forEach()`-Methode verwendet, um farbige Indikatoren auszugeben, die zeigen, welche Farben die Benutzer versuchen können zu sagen.

```js
const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");
const hints = document.querySelector(".hints");
const startBtn = document.querySelector("button");

const colorHTML = colors
  .map((v) => `<span style="background-color:${v};">${v}</span>`)
  .join("");
hints.innerHTML = `Press the button then say a color to change the background color of the app. Try ${colorHTML}.`;

startBtn.onclick = () => {
  recognition.start();
  console.log("Ready to receive a color command.");
};
```

#### Empfang und Behandlung von Ergebnissen

Sobald die Spracherkennung gestartet wurde, stehen mehrere Ereignishandler zur Verfügung, die Sie verwenden können, um Ergebnisse und andere verwandte Informationen abzurufen (siehe [Events](/de/docs/Web/API/SpeechRecognition#events) für `SpeechRecognition`). Das gebräuchlichste Ereignis ist das [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Ereignis, das nach einem erfolgreichen Ergebnis ausgelöst wird:

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(`Confidence: ${event.results[0][0].confidence}`);
};
```

Die zweite Zeile ist etwas komplex, daher erklären wir hier jeden Teil:

- Die [`SpeechRecognitionEvent.results`](/de/docs/Web/API/SpeechRecognitionEvent/results)-Eigenschaft gibt ein [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)-Objekt zurück, das [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekte enthält. Es hat einen Getter, sodass es wie ein Array zugegriffen werden kann — das erste `[0]` ruft das `SpeechRecognitionResult` an Position `0` ab.
- Jedes `SpeechRecognitionResult`-Objekt enthält wiederum [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte, die jeweils ein individuell erkanntes Wort darstellen. Diese haben ebenfalls Getter, sodass sie wie Arrays zugänglich sind — das zweite `[0]` gibt das `SpeechRecognitionAlternative` an Position `0` zurück.
- Die `transcript`-Eigenschaft des `SpeechRecognitionAlternative` gibt eine Zeichenfolge mit dem erkannten Text zurück. Dieser Wert wird dann verwendet, um die Hintergrundfarbe auf eine erkannte Farbe zu setzen und auch als Diagnosemeldung in der Benutzeroberfläche zu melden.

Wir verwenden auch das [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event)-Ereignis, um den Spracherkennungsdienst (mit [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop)) zu stoppen, nachdem ein einzelnes Wort erkannt wurde:

```js
recognition.onspeechend = () => {
  recognition.stop();
};
```

#### Fehler- und nicht erkannte Sprache handhaben

Die letzten beiden Handler decken Fälle ab, in denen der gesprochene Begriff nicht erkannt wird oder ein Fehler bei der Erkennung auftritt. Das [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)-Ereignis soll den ersten Fall behandeln, obwohl in den meisten Fällen die Erkennungs-Engine etwas zurückgibt, auch wenn es unverständlich ist:

```js
recognition.onnomatch = (event) => {
  diagnostic.textContent = "I didn't recognize that color.";
};
```

Das [`error`](/de/docs/Web/API/SpeechRecognition/error_event)-Ereignis behandelt Fälle, in denen ein tatsächlicher Fehler bei der Erkennung auftritt — die [`SpeechRecognitionErrorEvent.error`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error)-Eigenschaft enthält den zurückgegebenen Fehler:

```js
recognition.onerror = (event) => {
  diagnostic.textContent = `Error occurred in recognition: ${event.error}`;
};
```

## On-Device-Spracherkennung

Üblicherweise wird die Spracherkennung mit einem Online-Dienst durchgeführt. Dies bedeutet, dass eine Audioaufnahme zur Verarbeitung an einen Server gesendet wird und die Ergebnisse dann an den Browser zurückgegeben werden. Dies hat einige Probleme:

- Privatsphäre: Viele Benutzer fühlen sich unwohl dabei, dass ihre Sprache an einen Server gesendet wird.
- Leistung: Das Senden von Daten an einen Server für jede Erkennung kann die Leistung in intensiveren Anwendungen verlangsamen, und Ihre Apps funktionieren nicht offline.

Um diese Probleme zu mildern, können Sie mit der Web Speech API angeben, dass die Spracherkennung auf dem Gerät vom Browser ausgeführt werden soll. Dafür ist ein einmaliger Download eines Sprachpakets für jede Sprache erforderlich, die Sie erkennen möchten; nach der Installation steht die Funktionalität offline zur Verfügung.

Dieser Abschnitt erklärt, wie man On-Device-Spracherkennung verwendet.

### Demo

Um die On-Device-Spracherkennung zu demonstrieren, haben wir eine Beispiel-App namens [On-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([Live-Demo ausführen](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)) erstellt.

Diese Demo funktioniert sehr ähnlich wie die zuvor besprochene Online-Speech-Color-Changer-Demo, mit den unten angegebenen Unterschieden.

### On-Device-Erkennung angeben

Um anzugeben, dass Sie die On-Device-Verarbeitung des Browsers verwenden möchten, setzen Sie die [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally)-Eigenschaft vor dem Start einer Spracherkennung auf `true` (der Standardwert ist `false`):

```js
recognition.processLocally = true;
```

### Verfügbarkeit prüfen und Sprachpakete installieren

Damit die On-Device-Spracherkennung funktioniert, muss im Browser ein Sprachpaket für die zu erkennende Sprache installiert sein. Wenn Sie die `start()`-Methode ausführen, nachdem Sie `processLocally = true` angegeben haben, das korrekte Sprachpaket jedoch nicht installiert ist, schlägt der Funktionsaufruf mit einem [`language-not-supported`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported)-Fehler fehl.

Um sicherzustellen, dass das richtige Sprachpaket installiert wird, befolgen Sie diese beiden Schritte:

1. Überprüfen Sie, ob das Sprachpaket auf dem Gerät des Benutzers verfügbar ist: Dies wird mit der statischen Methode [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static) gehandhabt.
2. Installieren Sie das Sprachpaket, wenn es nicht verfügbar ist: Dies wird mit der statischen Methode [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static) gehandhabt.

Diese Schritte werden im folgenden `click`-Ereignis-Handler auf dem Steuerungs-{{htmlelement("button")}} der App gehandhabt:

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

Die `available()`-Methode nimmt ein Optionsobjekt entgegen, das zwei Eigenschaften enthält:

- Ein `langs`-Array, das die Sprachen enthält, für die die Verfügbarkeit geprüft werden soll.
- Ein `processLocally`-boolean, der angibt, ob die Verfügbarkeit der Sprache nur On-Device (`true`) _oder_ entweder lokal oder über einen serverbasierten Erkennungsdienst (`false`, der Standard) geprüft werden soll.

Beim Ausführen gibt diese Methode ein {{jsxref("Promise")}} zurück, das mit einem enumerierten Wert aufgelöst wird, der die Verfügbarkeit der angegebenen Sprachen anzeigt. In unserer Demo testen wir auf drei Bedingungen:

- Wenn der resultierende Wert `unavailable` ist, bedeutet das, dass kein geeignetes Sprachpaket zum Download verfügbar ist. Wir geben außerdem eine entsprechende Nachricht an den Ausgabeabschnitt.
- Wenn der resultierende Wert `available` ist, bedeutet das, dass das Sprachpaket lokal verfügbar ist, sodass die Erkennung beginnen kann. In diesem Fall führen wir `start()` aus und protokollieren eine Nachricht an die Konsole, wenn die App bereit ist, Sprache zu empfangen.
- Wenn der Wert etwas anderes ist (`downloadable` oder `downloading`), geben wir eine Diagnosemeldung aus, um den Benutzer darauf hinzuweisen, dass ein Sprachpaket-Download beginnt, und führen dann die Methode `install()` aus, um den Download zu handhaben.

Die `install()`-Methode funktioniert ähnlich wie die `available()`-Methode, mit dem Unterschied, dass ihr Optionsobjekt nur das `langs`-Array übernimmt. Beim Ausführen wird der Download aller Sprachpakete für die in `langs` angegebenen Sprachen gestartet und ein {{jsxref("Promise")}} zurückgegeben, das mit einem boolean aufgelöst wird, der angibt, ob die angegebenen Sprachpakete erfolgreich heruntergeladen und installiert wurden (`true`) oder nicht (`false`).

Für diese Demo geben wir eine Diagnosemeldung aus, um auf erfolgreiche und fehlerhafte Fälle hinzuweisen. In einer umfassenderen App würden Sie wahrscheinlich die Steuerelemente während des Download-Prozesses deaktivieren und sie wieder aktivieren, nachdem das Versprechen aufgelöst wurde.

### Integration der Berechtigungs-Richtlinie

Die Verwendung der Methoden `available()` und `install()` wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} gesteuert. Speziell, wo eine definierte Richtlinie die Nutzung blockiert, schlägt jeder Versuch, diese Methoden aufzurufen, fehl.

Der Standard-Whitelistwert für `on-device-speech-recognition` ist `self`. Das bedeutet, dass Sie sich nicht um die Anpassung der Richtlinie kümmern müssen, es sei denn, Sie versuchen, diese Methoden in eingebetteten cross-origin Dokumenten zu verwenden, oder möchten ihre Verwendung explizit deaktivieren.

### Unpräfixierte Web Speech API

In der ursprünglichen Speech Color Changer-Demo haben wir zusätzliche Zeilen hinzugefügt, um Browser zu handhaben, die die Web Speech API nur mit anbieterprädikatierten Eigenschaften unterstützen (siehe [Präfixeigenschaften](#präfixeigenschaften) für weitere Details).

In der On-Device-Version der Demo ist kein Präfix-Handling-Code erforderlich, da die Implementierungen, die diese Funktionalität unterstützen, dies ohne Präfixe tun.

## Kontextuelles Biasing in der Spracherkennung

Es wird Zeiten geben, in denen ein Spracherkennungsdienst es nicht schafft, ein spezifisches Wort oder eine Phrase korrekt zu erkennen. Dies tritt am häufigsten bei bereichsspezifischen Begriffen (wie medizinischem oder wissenschaftlichem Vokabular), Eigennamen, ungewöhnlichen Phrasen oder Wörtern auf, die ähnlich wie andere Wörter klingen und daher fehlerhaft erkannt werden könnten.

Zum Beispiel stellten wir während des Tests fest, dass unser [On-device Speech Color Changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) Schwierigkeiten hatte, die Farbe `azure` zu erkennen - es wurden immer wieder Ergebnisse wie "as you" zurückgegeben. Andere Farben, die häufig missverstanden wurden, waren `khaki` ("car key"), `tan` und `thistle` ("this all").

Um solche Probleme zu mildern, können Sie mit der Web Speech API dem Erkennungs-Engine Hinweise geben, um Phrasen hervorzuheben, die mit größerer Wahrscheinlichkeit gesprochen werden und auf die die Engine ausgerichtet sein sollte. Dies macht es wahrscheinlicher, dass diese Wörter und Phrasen korrekt erkannt werden.

Dies können Sie tun, indem Sie ein Array von [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Objekten als Wert der [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases)-Eigenschaft setzen. Jedes `SpeechRecognitionPhrase`-Objekt enthält:

- Eine `phrase`-Eigenschaft, die eine Zeichenfolge mit dem Wort oder der Phrase enthält, die Sie verstärken möchten.
- Eine `boost`-Eigenschaft, die eine Gleitkommazahl zwischen `0.0` und `10.0` (einschließlich) ist, die die Menge der Verstärkung setzt, die Sie auf das Wort oder die Phrase anwenden möchten. Höhere Werte machen das Wort oder die Phrase wahrscheinlicher erkannt.

In unserer "On-device Speech Color Changer"-Demo handhaben wir dies, indem wir ein Array von Phrasen erstellen, die verstärkt werden sollen, sowie deren Verstärkungswerte:

```js
const phraseData = [
  { phrase: "azure", boost: 5.0 },
  { phrase: "khaki", boost: 3.0 },
  { phrase: "tan", boost: 2.0 },
];
```

Diese müssen als `ObservableArray` von `SpeechRecognitionPhrase`-Objekten dargestellt werden. Wir handhaben dies, indem wir das ursprüngliche Array mappen, um jedes Array-Element in ein `SpeechRecognitionPhrase`-Objekt zu konvertieren, indem wir den [`SpeechRecognitionPhrase()`](/de/docs/Web/API/SpeechRecognitionPhrase/SpeechRecognitionPhrase)-Konstruktor verwenden:

```js
const phraseObjects = phraseData.map(
  (p) => new SpeechRecognitionPhrase(p.phrase, p.boost),
);
```

Nach der Erstellung der `SpeechRecognition`-Instanz fügen wir unsere kontextuellen Biasing-Phrasen hinzu, indem wir das `phraseObjects`-Array als Wert der `SpeechRecognition.phrases`-Eigenschaft setzen:

```js
recognition.phrases = phraseObjects;
```

Das Phrasen-Array kann wie ein normales JavaScript-Array modifiziert werden, zum Beispiel indem neue Phrasen dynamisch hinzugefügt werden:

```js
recognition.phrases.push(new SpeechRecognitionPhrase("thistle", 5.0));
```

Mit diesem Code stellten wir fest, dass die problematischen Farbschlüsselwörter genauer erkannt wurden als zuvor.

## Sprachsynthese

Die Sprachsynthese (auch bekannt als Text-to-Speech oder TTS) beinhaltet das Erhalten und die Synthesizierung von Text, der innerhalb einer App enthalten ist, in Sprache und dessen Wiedergabe über den Lautsprecher oder die Audioausgabe eines Geräts.

Die Web Speech API hat eine Hauptsteuerungsschnittstelle dafür — [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) — plus eine Reihe von eng verwandten Schnittstellen zur Darstellung des Texts, der synthetisiert werden soll (bekannt als Äußerungen), Stimmen, die für die Äußerung verwendet werden sollen, etc. Auch hier haben die meisten Betriebssysteme eine Art Sprachsynthesesystem, das von der API für diese Aufgabe verwendet wird, wenn verfügbar.

### Demo

Um zu demonstrieren, wie man die Sprachsynthese im Web nutzt, haben wir eine Beispiel-App namens [Speech synthesiser](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) erstellt. Es enthält ein Eingabefeld zum Eingeben des zu synthetisierenden Texts. Sie können die Rate und Tonhöhe anpassen und auch eine Stimme aus dem Dropdown-Menü auswählen, die für den gesprochenen Text verwendet wird. Nachdem Sie Ihren Text eingegeben haben, drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd> oder klicken Sie auf die **Play**-Schaltfläche, um den Text laut vorgelesen zu hören.

![UI einer App namens Speak Easy Synthesis. Sie enthält ein Eingabefeld, in das der zu synthetisierende Text eingegeben wird, Schieberegler zur Anpassung der Rate und Tonhöhe der Sprache, und ein Dropdown-Menü zur Auswahl verschiedener Stimmen.](speak-easy-synthesis.png)

Um die Demo auszuführen, navigieren Sie zur [Live-Demo-URL](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) in einem [unterstützenden Browser](/de/docs/Web/API/SpeechSynthesis#browser_compatibility).

### HTML und CSS

Das HTML und CSS für diese App sind ziemlich einfach. Es gibt einen Titel, einige Nutzungsanweisungen und ein Formular mit einigen grundlegenden Steuerelementen. Das {{htmlelement("select")}}-Element ist zunächst leer; es wird mit {{htmlelement("option")}}s über JavaScript gefüllt (später behandelt).

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

Lassen Sie uns den JavaScript-Code untersuchen, der diese App antreibt.

#### Variablen setzen

Zunächst erfassen wir Referenzen zu allen DOM-Elementen, die an der Benutzeroberfläche beteiligt sind, aber interessanterweise erfassen wir eine Referenz zu [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis). Dies ist der Einstiegspunkt der API - es gibt eine Instanz von [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) zurück, der Steuerungsschnittstelle für die Web-Sprachsynthese.

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

#### Das Select-Element füllen

Um das {{htmlelement("select")}}-Element mit den verschiedenen Stimmenoptionen zu füllen, die das Gerät verfügbar hat, haben wir eine `populateVoiceList()`-Funktion geschrieben. Wir rufen zuerst [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) auf, das eine Liste aller verfügbaren Stimmen zurückgibt, dargestellt durch [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte. Anschließend durchlaufen wir diese Liste - für jede Stimme erstellen wir ein {{htmlelement("option")}}-Element, setzen seinen Textinhalt, um den Namen der Stimme anzuzeigen (aus [`SpeechSynthesisVoice.name`](/de/docs/Web/API/SpeechSynthesisVoice/name) entnommen), die Sprache der Stimme (aus [`SpeechSynthesisVoice.lang`](/en-US/docs

/Web/API/SpeechSynthesisVoice/lang) entnommen), und `-- DEFAULT`, wenn die Stimme die Standardstimme für die Synthese-Engine ist (geprüft, indem festgestellt wird, ob [`SpeechSynthesisVoice.default`](/de/docs/Web/API/SpeechSynthesisVoice/default) `true` zurückgibt.)

Wir erstellen auch `data-`-Attribute für jede Option, die den Namen und die Sprache der zugehörigen Stimme enthalten, damit wir sie später leicht abrufen können, und fügen die Optionen dann als Kinder des Select-Elements hinzu.

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

Ältere Browser unterstützen das [`voiceschanged`](/de/docs/Web/API/SpeechSynthesis/voiceschanged_event)-Ereignis nicht und geben einfach eine Liste von Stimmen zurück, wenn [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) ausgelöst wird. In anderen, wie z.B. Chrome, müssen Sie auf das Auslösen des Ereignisses warten, bevor Sie die Liste füllen. Um beide Fälle zuzulassen, führen wir die Funktion wie gezeigt aus:

```js
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

#### Den eingegebenen Text sprechen

Als nächstes erstellen wir einen Ereignis-Handler, um das Sprechen des in das Textfeld eingegebenen Texts zu starten. Wir verwenden einen [onsubmit](/de/docs/Web/API/HTMLFormElement/submit_event)-Handler auf dem Formular, sodass die Aktion ausgeführt wird, wenn <kbd>Enter</kbd>/<kbd>Return</kbd> gedrückt wird. Wir erstellen zuerst eine neue Instanz von [`SpeechSynthesisUtterance()`](/de/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance) mithilfe ihres Konstruktors - dieser wird der Wert des Texteingabefeldes als Parameter übergeben.

Als nächstes müssen wir herausfinden, welche Stimme verwendet werden soll. Wir verwenden die [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) `selectedOptions`-Eigenschaft, um das aktuell ausgewählte {{htmlelement("option")}}-Element zurückzugeben. Wir verwenden dann dieses Element und sein `data-name`-Attribut, um das [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekt zu finden, dessen Name mit dem Wert dieses Attributs übereinstimmt. Wir setzen das passende Voice-Objekt auf den Wert der [`SpeechSynthesisUtterance.voice`](/de/docs/Web/API/SpeechSynthesisUtterance/voice)-Eigenschaft.

Zum Schluss setzen wir die [`SpeechSynthesisUtterance.pitch`](/de/docs/Web/API/SpeechSynthesisUtterance/pitch) und [`SpeechSynthesisUtterance.rate`](/de/docs/Web/API/SpeechSynthesisUtterance/rate) auf die Werte der entsprechenden Bereichsformular-Elemente. Dann, mit allen notwendigen Vorbereitungen, starten wir die zu sprechende Äußerung, indem wir [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak) aufrufen und die [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Instanz übergeben.

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

Im letzten Teil des Handlers fügen wir ein [`pause`](/de/docs/Web/API/SpeechSynthesisUtterance/pause_event)-Ereignis hinzu, um zu demonstrieren, wie [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent) sinnvoll genutzt werden kann. Wenn [`SpeechSynthesis.pause()`](/de/docs/Web/API/SpeechSynthesis/pause) aufgerufen wird, gibt dies eine Nachricht zurück, die die Zeichennummer und den Namen meldet, bei dem die Sprache unterbrochen wurde.

Zum Schluss rufen wir [`blur()`](/de/docs/Web/API/HTMLElement/blur) auf das Texteingabefeld auf. Dies soll hauptsächlich die Tastatur auf Firefox OS ausblenden.

#### Aktualisieren der angezeigten Pitch- und Rate-Werte

Der letzte Teil des Codes aktualisiert die in der Benutzeroberfläche angezeigten `pitch`-/`rate`-Werte jedes Mal, wenn die Schiebereglerpositionen bewegt werden.

```js
pitch.onchange = () => {
  pitchValue.textContent = pitch.value;
};

rate.onchange = () => {
  rateValue.textContent = rate.value;
};
```
