---
title: Verwendung der Web Speech API
slug: Web/API/Web_Speech_API/Using_the_Web_Speech_API
l10n:
  sourceCommit: 3cbd2b2b2eb0be9425949c20ca5d398645f7c0e9
---

{{DefaultAPISidebar("Web Speech API")}}

Die Web Speech API bietet zwei unterschiedliche Funktionalitäten — Spracherkennung und Sprachsynthese (auch bekannt als Text-to-Speech oder TTS) — die interessante Möglichkeiten für Barrierefreiheit und Steuerung eröffnen. Dieser Artikel bietet eine Einführung in beide Bereiche, zusammen mit Demos.

## Spracherkennung

Spracherkennung umfasst das Empfangen von Audio von einem Mikrofon eines Geräts (oder von einem Audiotrack), das dann von einem Spracherkennungsdienst geprüft wird. Wenn der Dienst ein Wort oder eine Phrase erfolgreich erkennt, gibt er eine Textzeichenfolge (oder eine Liste von Zeichenfolgen) zurück, die Sie verwenden können, um weitere Aktionen zu initiieren.

Die Web Speech API bietet hierfür eine Hauptsteuerungsschnittstelle — [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) — und mehrere zugehörige Schnittstellen zur Darstellung von Ergebnissen.

In der Regel wird das Spracherkennungssystem des Geräts des Nutzers für die Spracherkennung verwendet. Die meisten modernen Betriebssysteme verfügen über ein Spracherkennungssystem zur Ausgabe von Sprachbefehlen, wie beispielsweise **Dictation** auf macOS oder **Copilot** auf Windows.

Standardmäßig beinhaltet die Verwendung der Spracherkennung auf einer Webseite eine serverbasierte Erkennungs-Engine. Ihr Audio wird an einen Webdienst zur Erkennungsverarbeitung gesendet, sodass es offline nicht funktioniert.

Um die Privatsphäre und Leistung zu verbessern, können Sie angeben, dass die Spracherkennung auf dem Gerät durchgeführt werden soll. Dies stellt sicher, dass weder das Audio noch die transkribierte Sprache an einen Drittanbieterdienst zur Verarbeitung gesendet werden. Wir behandeln die On-Device-Funktionalität im Abschnitt [On-Device-Spracherkennung](#on-device_spracherkennung) ausführlicher.

### Demo

Um die Verwendung der Spracherkennung zu demonstrieren, haben wir eine Beispiel-App namens [Speech color changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) erstellt. Nachdem Sie die **Start recognition**-Taste gedrückt haben, geben Sie ein HTML-Farbkeyword an. Die Hintergrundfarbe der App ändert sich dann zu dieser Farbe.

![Screenshot unserer Demo-App namens Speech Color Changer. Sie fordert den Benutzer auf, die Taste zu drücken und eine Farbe zu sagen. Sie ändert die Hintergrundfarbe der App zu dieser Farbe. In diesem Fall wurde die Hintergrundfarbe auf Rosa geändert.](speech-color-changer.png)

Um die Demo auszuführen, navigieren Sie zur [Live-Demo-URL](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) in einem [unterstützenden Browser](/de/docs/Web/API/SpeechRecognition#browser_compatibility).

### HTML und CSS

Das HTML und CSS für die App sind grundlegend. Es gibt einen Titel, einen Anleitungsabsatz ({{htmlelement("p")}}), eine Steuerung {{htmlelement("button")}} und einen Ausgabebereich, in dem wir diagnostische Nachrichten anzeigen, einschließlich der vom App erkannten Worte.

```html
<h1>Speech color changer</h1>

<p class="hints"></p>

<button>Start recognition</button>

<p class="output"><em>...diagnostic messages</em></p>
```

Das CSS sorgt für ein einfaches, responsives Styling, sodass es auf allen Geräten gut aussieht.

### JavaScript

Schauen wir uns das JavaScript etwas genauer an.

#### Präfix-Eigenschaften

Einige Browser unterstützen derzeit die Spracherkennung mit präfixierten Eigenschaften. Daher haben wir zu Beginn unseres Codes diese Zeilen eingefügt, um sowohl präfixierte als auch nicht präfixierte Versionen zu unterstützen:

```js
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
```

#### Farbliste

Der nächste Teil unseres Codes definiert einige Beispiel-Farben, die wir in die UI drucken, um den Benutzern eine Vorstellung davon zu geben, was sie sagen sollen:

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

#### Erstellen einer Spracherkennung-Instanz

Als nächstes definieren wir eine Spracherkennung-Instanz, um die Erkennung in unserer App zu steuern. Wir tun dies, indem wir den [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition) Konstruktor verwenden.

```js
const recognition = new SpeechRecognition();
```

Wir setzen dann einige Eigenschaften der Erkennungsinstanz:

- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous): Steuert, ob Ergebnisse kontinuierlich (`true`) oder nur einmalig bei jedem Erkennungsstart (`false`) erfasst werden.
- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang): Legt die Sprache der Erkennung fest. Es wird empfohlen, dies explizit anzugeben.
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults): Definiert, ob das Spracherkennungssystem Zwischen- oder nur Endergebnisse zurückgeben soll. Für diese Demo sind Endergebnisse ausreichend.
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives): Legt die Anzahl alternativer möglicher Treffer fest, die pro Ergebnis zurückgegeben werden sollen. Dies kann manchmal nützlich sein, zum Beispiel wenn ein Ergebnis nicht ganz klar ist und Sie eine Liste von Alternativen anzeigen möchten, aus der der Benutzer auswählen kann. Aber es ist für diese Demo nicht notwendig, deswegen geben wir einfach eins an (was ohnehin der Standard ist).

```js
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
```

#### Starten der Spracherkennung

Nach dem Erfassen von Referenzen auf den Ausgabebereich, das `<html>`-Element, den Anleitungsabsatz und den `<button>`, implementieren wir einen `onclick`-Handler. Wenn ein Benutzer die Taste drückt, startet der Spracherkennungsservice durch Aufrufen von [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start). Wir haben auch die `forEach()`-Methode verwendet, um farbige Indikatoren auszugeben, die zeigen, welche Farben Benutzer probieren können zu sagen.

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

#### Empfangen und Bearbeiten von Ergebnissen

Sobald die Spracherkennung gestartet wurde, stehen mehrere Ereignishandler zur Verfügung, die Sie verwenden können, um Ergebnisse und andere verwandte Informationen abzurufen (siehe [Events](/de/docs/Web/API/SpeechRecognition#events) für `SpeechRecognition`). Das gebräuchlichste ist das [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Ereignis, das ausgelöst wird, nachdem ein erfolgreiches Ergebnis empfangen wurde:

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(`Confidence: ${event.results[0][0].confidence}`);
};
```

Die zweite Zeile ist etwas komplex, daher erklären wir hier jeden Teil:

- Die [`SpeechRecognitionEvent.results`](/de/docs/Web/API/SpeechRecognitionEvent/results)-Eigenschaft gibt ein [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)-Objekt zurück, das [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekte enthält. Es hat einen Getter, sodass darauf wie auf ein Array zugegriffen werden kann — das erste `[0]` gibt das `SpeechRecognitionResult` an Position `0` zurück.
- Jedes `SpeechRecognitionResult`-Objekt enthält wiederum [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte, die jeweils ein einzelnes erkanntes Wort repräsentieren. Diese haben ebenfalls Getter, sodass darauf wie auf ein Array zugegriffen werden kann — das zweite `[0]` gibt das `SpeechRecognitionAlternative` an Position `0` zurück.
- Die `transcript`-Eigenschaft des `SpeechRecognitionAlternative` gibt eine Zeichenfolge zurück, die den erkannten Text enthält. Dieser Wert wird dann verwendet, um die Hintergrundfarbe auf eine erkannte Farbe zu setzen und sie auch als diagnostische Nachricht in der Benutzeroberfläche zu melden.

Wir verwenden auch das [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event)-Ereignis, um den Spracherkennungsservice zu stoppen (mit [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop)) nachdem ein einzelnes Wort erkannt wurde:

```js
recognition.onspeechend = () => {
  recognition.stop();
};
```

#### Fehler und nicht erkannte Sprachbehandlung

Die letzten zwei Handler decken Fälle ab, in denen der gesprochene Begriff nicht erkannt wird oder ein Fehler mit der Erkennung auftritt. Das [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)-Ereignis soll den ersten Fall behandeln, obwohl die Erkennungs-Engine in den meisten Fällen etwas zurückgibt, auch wenn es unverständlich ist:

```js
recognition.onnomatch = (event) => {
  diagnostic.textContent = "I didn't recognize that color.";
};
```

Das [`error`](/de/docs/Web/API/SpeechRecognition/error_event)-Ereignis behandelt Fälle, in denen ein tatsächlicher Fehler mit der Erkennung auftritt — die [`SpeechRecognitionErrorEvent.error`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error)-Eigenschaft enthält den zurückgegebenen Fehler:

```js
recognition.onerror = (event) => {
  diagnostic.textContent = `Error occurred in recognition: ${event.error}`;
};
```

## On-Device Spracherkennung

Die Spracherkennung wird in der Regel mit einem Online-Service durchgeführt. Das bedeutet, dass eine Audioaufnahme an einen Server zur Verarbeitung gesendet wird, und die Ergebnisse dann an den Browser zurückgegeben werden. Dies hat ein paar Probleme:

- Privatsphäre: Viele Nutzer fühlen sich unwohl damit, dass ihre Sprache an einen Server gesendet wird.
- Leistung: Das Senden von Daten an einen Server für jede Erkennung kann die Leistung in intensiveren Anwendungen verlangsamen, und Ihre Apps funktionieren nicht offline.

Um diese Probleme zu mildern, ermöglicht die Web Speech API, dass Sie angeben, dass die Spracherkennung direkt im Browser auf dem Gerät durchgeführt werden soll. Dies erfordert einen einmaligen Sprachpaket-Download für jede Sprache, die Sie erkennen möchten; sobald installiert, steht die Funktionalität offline zur Verfügung.

Dieser Abschnitt erklärt, wie man die On-Device-Spracherkennung verwendet.

### Demo

Zur Demonstration der On-Device-Spracherkennung haben wir eine Beispiel-App namens [On-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) erstellt ([Demo live ausführen](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)).

Diese Demo funktioniert ähnlich wie die zuvor diskutierte Online-Sprach-Farbwechsler-Demo, mit unten aufgeführten Unterschieden.

### Festlegen der On-Device-Erkennung

Um anzugeben, dass die On-Device-Verarbeitung des Browsers verwendet werden soll, setzen Sie die Eigenschaft [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally) auf `true`, bevor Sie die Spracherkennung starten (der Standardwert ist `false`):

```js
recognition.processLocally = true;
```

### Verfügbarkeit prüfen und Sprachpakete installieren

Damit die On-Device-Spracherkennung funktioniert, muss der Browser ein Sprachpaket für die Sprache installiert haben, die Sie erkennen möchten. Wenn Sie die `start()`-Methode ausführen, nachdem `processLocally = true` festgelegt wurde, aber das richtige Sprachpaket nicht installiert ist, schlägt der Funktionsaufruf mit einem [`language-not-supported`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported) Fehler fehl.

Um das richtige Sprachpaket zu installieren, befolgen Sie diese zwei Schritte:

1. Prüfen Sie, ob das Sprachpaket auf dem Gerät des Benutzers verfügbar ist: Dies erfolgt mit der statischen Methode [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static).
2. Installieren Sie das Sprachpaket, falls es nicht verfügbar ist: Dies erfolgt mit der statischen Methode [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static).

Diese Schritte werden im folgenden `click`-Ereignishandler der App-Steuerung `<button>` behandelt:

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

Die `available()`-Methode nimmt ein Optionsobjekt mit zwei Eigenschaften:

- Ein `langs`-Array, das die Sprachen enthält, für die die Verfügbarkeit überprüft werden soll.
- Ein `processLocally`-Boolean-Wert, der angibt, ob die Verfügbarkeit der Sprache nur auf dem Gerät (`true`) _oder_ entweder lokal oder über einen serverbasierten Erkennungsdienst (`false`, der Standard) überprüft werden soll.

Wenn diese Methode ausgeführt wird, gibt sie eine {{jsxref("Promise")}} zurück, die mit einem enumerierten Wert aufgelöst wird, der die Verfügbarkeit der angegebenen Sprachen anzeigt. In unserer Demo testen wir für drei Bedingungen:

- Wenn der resultierende Wert `unavailable` ist, bedeutet dies, dass kein geeignetes Sprachpaket zum Download verfügbar ist. Wir drucken auch eine entsprechende Nachricht auf die Ausgabe.
- Wenn der resultierende Wert `available` ist, bedeutet dies, dass das Sprachpaket lokal verfügbar ist, sodass die Erkennung beginnen kann. In diesem Fall führen wir `start()` aus und protokollieren eine Nachricht in die Konsole, wenn die App bereit ist, Sprache zu empfangen.
- Wenn der Wert etwas anderes ist (`downloadable` oder `downloading`), drucken wir eine Diagnose-Nachricht, um den Benutzer darüber zu informieren, dass ein Sprachpaket-Download beginnt, und führen dann die `install()`-Methode aus, um den Download zu bearbeiten.

Die `install()`-Methode funktioniert ähnlich wie die `available()`-Methode, außer dass ihr Optionsobjekt nur das `langs`-Array enthält. Wenn sie ausgeführt wird, beginnt sie mit dem Herunterladen aller Sprachpakete für die in `langs` angegebenen Sprachen und gibt ein {{jsxref("Promise")}} zurück, das mit einem Boolean-Wert aufgelöst wird, der angibt, ob die angegebenen Sprachpakete erfolgreich heruntergeladen und installiert wurden (`true`) oder nicht (`false`).

Für diese Demo drucken wir eine Diagnose-Nachricht, um die Erfolgs- und Misserfolgsfälle anzuzeigen. In einer vollständigeren App würden Sie wahrscheinlich die Steuerungen während des Downloadprozesses deaktivieren und sie nach der Auflösung des Versprechens wieder aktivieren.

### Integration der Berechtigungsrichtlinie

Die Verwendung der `available()`- und `install()`-Methoden wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} gesteuert. Speziell, wenn eine definierte Richtlinie die Nutzung blockiert, schlagen alle Versuche, diese Methoden aufzurufen, fehl.

Der Standard-Allowlist-Wert für `on-device-speech-recognition` ist `self`. Das bedeutet, dass Sie sich keine Sorgen über das Anpassen der Richtlinie machen müssen, es sei denn, Sie versuchen, diese Methoden in eingebetteten Cross-Origin-Dokumenten zu verwenden oder möchten ihre Verwendung explizit deaktivieren.

### Nichtpräfixierte Web Speech API

In der ursprünglichen Speach-Color-Wechsler-Demo haben wir zusätzliche Zeilen hinzugefügt, um Browser zu behandeln, die die Web Speech API nur mit herstellerspezifischen Präfix-Eigenschaften unterstützen (siehe den Abschnitt [Präfix-Eigenschaften](#präfix-eigenschaften) für weitere Details).

In der On-Device-Version der Demo ist kein Präfix-Handhabungs-Code erforderlich, da die Implementierungen, die diese Funktionalität unterstützen, dies ohne Präfixe tun.

## Kontextuelle Beeinflussung in der Spracherkennung

Es wird Zeiten geben, in denen ein Spracherkennungsdienst ein bestimmtes Wort oder einen bestimmten Satz nicht korrekt erkennt. Dies tritt am häufigsten bei fachspezifischen Begriffen auf (wie medizinisches oder wissenschaftliches Vokabular), Eigennamen, ungewöhnlichen Phrasen oder Wörtern, die sich ähnlich wie andere Wörter anhören und daher möglicherweise falsch identifiziert werden.

Zum Beispiel fanden wir während des Tests heraus, dass unser [On-device speech color changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) Probleme hatte, die Farbe `azure` zu erkennen - sie gab immer wieder Ergebnisse wie "as you" zurück. Andere Farben, die häufig falsch erkannt wurden, waren `khaki` ("car key"), `tan` und `thistle` ("this all").

Um solche Probleme zu mildern, ermöglicht die Web Speech API, dass Sie Hinweise an die Erkennungs-Engine geben, um Phrasen hervorzuheben, die wahrscheinlich gesprochen werden, und auf die die Engine voreingenommen sein sollte. Dies macht es wahrscheinlicher, dass diese Wörter und Phrasen korrekt erkannt werden.

Sie können dies erreichen, indem Sie ein Array von [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Objekten als den Wert der [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases)-Eigenschaft festlegen. Jedes `SpeechRecognitionPhrase`-Objekt enthält:

- Eine `phrase`-Eigenschaft, die eine Zeichenfolge mit dem Wort oder der Phrase enthält, die Sie verstärken möchten.
- Eine `boost`-Eigenschaft, die eine Fließkommazahl zwischen `0.0` und `10.0` (einschließlich) ist und die Menge der Verstärkung festlegt, die Sie auf dieses Wort oder diese Phrase anwenden möchten. Höhere Werte machen es wahrscheinlicher, dass das Wort oder die Phrase erkannt wird.

In unserer "On-device speech color changer"-Demo handhaben wir dies, indem wir ein Array von zu verstärkenden Phrasen und deren Verstärkungswerten erstellen:

```js
const phraseData = [
  { phrase: "azure", boost: 5.0 },
  { phrase: "khaki", boost: 3.0 },
  { phrase: "tan", boost: 2.0 },
];
```

Diese müssen als `ObservableArray` von `SpeechRecognitionPhrase`-Objekten dargestellt werden. Wir handhaben dies, indem wir das ursprüngliche Array abbilden, um jedes Arrayelement in ein `SpeechRecognitionPhrase`-Objekt mit dem [`SpeechRecognitionPhrase()`](/de/docs/Web/API/SpeechRecognitionPhrase/SpeechRecognitionPhrase) Konstruktor zu konvertieren:

```js
const phraseObjects = phraseData.map(
  (p) => new SpeechRecognitionPhrase(p.phrase, p.boost),
);
```

Nachdem wir die `SpeechRecognition`-Instanz erstellt haben, fügen wir unsere kontextuellen Beeinflussungsp

hrasen hinzu, indem wir das `phraseObjects`-Array als Wert der `SpeechRecognition.phrases`-Eigenschaft festlegen:

```js
recognition.phrases = phraseObjects;
```

Das Phrasenarray kann wie ein normales JavaScript-Array modifiziert werden, zum Beispiel durch das dynamische Hinzufügen neuer Phrasen:

```js
recognition.phrases.push(new SpeechRecognitionPhrase("thistle", 5.0));
```

Mit diesem Code stellten wir fest, dass die problematischen Farbstichworte genauer erkannt wurden als zuvor.

## Sprachsynthese

Die Sprachsynthese (auch bekannt als Text-to-Speech oder TTS) umfasst das Umsetzen von Text, der in einer App enthalten ist, in Sprache und das Abspielen über einen Lautsprecher oder den Audioausgang eines Geräts.

Die Web Speech API bietet eine Hauptsteuerungsschnittstelle für diese — [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) — sowie eine Reihe eng verwandter Schnittstellen zur Darstellung des zu synthetisierenden Textes (bekannt als Äußerungen), der für die Äußerung zu verwendenden Stimmen usw. Auch hier haben die meisten Betriebssysteme irgendein Sprachsynthesesystem, das von der API für diese Aufgabe verwendet wird, sofern verfügbar.

### Demo

Um zu demonstrieren, wie Sie die Web-Sprachsynthese verwenden, haben wir eine Beispiel-App namens [Speech synthesizer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) erstellt. Sie hat ein Eingabefeld, in das Sie den zu synthetisierenden Text eingeben können. Sie können die Geschwindigkeit und Tonhöhe anpassen und auch eine Stimme im Dropdown-Menü auswählen, die für den gesprochenen Text verwendet werden soll. Nachdem Sie Ihren Text eingegeben haben, drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd> oder klicken Sie auf die Taste **Play**, um sich den Text laut vorlesen zu lassen.

![UI einer App namens Speak Easy Synthesis. Sie verfügt über ein Eingabefeld zum Eingeben von zu synthetisierendem Text, Schieberegler zur Änderung der Geschwindigkeit und Tonhöhe der Sprache sowie ein Dropdown-Menü zur Auswahl verschiedener Stimmen.](speak-easy-synthesis.png)

Um die Demo auszuführen, navigieren Sie zur [Live-Demo-URL](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) in einem [unterstützenden Browser](/de/docs/Web/API/SpeechSynthesis#browser_compatibility).

### HTML und CSS

Das HTML und CSS für diese App sind ziemlich grundlegend. Es gibt einen Titel, einige Benutzungsanweisungen und ein Formular mit grundlegenden Steuerungen. Das {{htmlelement("select")}}-Element ist zunächst leer; es wird über JavaScript mit {{htmlelement("option")}}s gefüllt (später behandelt).

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

Zuerst erfassen wir Referenzen für alle DOM-Elemente, die an der Benutzeroberfläche beteiligt sind, aber interessanterweise erfassen wir eine Referenz zu [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis). Dies ist der Einstiegspunkt der API — sie gibt eine Instanz von [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) zurück, die Steuerungsschnittstelle für die Web-Sprachsynthese.

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

#### Auswahlelement füllen

Um das {{htmlelement("select")}}-Element mit den verschiedenen Stimmoptionen zu füllen, die das Gerät zur Verfügung hat, haben wir eine `populateVoiceList()`-Funktion geschrieben. Zuerst rufen wir [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) auf, das eine Liste aller verfügbaren Stimmen zurückgibt, dargestellt durch [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte. Wir durchlaufen diese Liste — für jede Stimme erstellen wir ein {{htmlelement("option")}}-Element, setzen dessen Textinhalt so, dass der Name der Stimme angezeigt wird (ausgelesen von [`SpeechSynthesisVoice.name`](/de/docs/Web/API/SpeechSynthesisVoice/name)), die Sprache der Stimme (ausgelesen von [`SpeechSynthesisVoice.lang`](/de/docs/Web/API/SpeechSynthesisVoice/lang)) und `-- DEFAULT`, wenn die Stimme die Standardstimme für die Synthese-Engine ist (überprüft, indem wir prüfen, ob [`SpeechSynthesisVoice.default`](/de/docs/Web/API/SpeechSynthesisVoice/default) `true` zurückgibt).

Wir erstellen auch `data-`-Attribute für jede Option, die den Namen und die Sprache der zugehörigen Stimme enthalten, sodass wir später einfach darauf zugreifen können, und fügen die Optionen dann als Kinder der Auswahl hinzu.

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

Ältere Browser unterstützen das [`voiceschanged`](/de/docs/Web/API/SpeechSynthesis/voiceschanged_event)-Ereignis nicht und geben einfach eine Liste von Stimmen zurück, wenn [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) ausgelöst wird. Auf anderen wiederum, wie Chrome, muss man warten, bis das Ereignis auslöst, bevor man die Liste füllt. Um beide Fälle abzudecken, führen wir die Funktion wie gezeigt aus:

```js
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

#### Der eingegebene Text wird gesprochen

Als nächstes erstellen wir einen Ereignishandler, um den in das Textfeld eingegebenen Text sprechen zu lassen. Wir verwenden einen [onsubmit](/de/docs/Web/API/HTMLFormElement/submit_event)-Handler auf dem Formular, damit die Aktion beim Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd> stattfindet. Wir erstellen zuerst eine neue Instanz von [`SpeechSynthesisUtterance()`](/de/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance) mit dessen Konstruktor — dieser wird mit dem Wert des Texteingabefeldes als Parameter übergeben.

Als nächstes müssen wir herausfinden, welche Stimme verwendet werden soll. Wir verwenden die [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) `selectedOptions`-Eigenschaft, um das derzeit ausgewählte {{htmlelement("option")}}-Element zurückzugeben. Wir verwenden dann das `data-name`-Attribut dieses Elements, um das [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekt zu finden, dessen Name mit dem Wert dieses Attributs übereinstimmt. Wir setzen das übereinstimmende Sprachobjekt als den Wert der [`SpeechSynthesisUtterance.voice`](/de/docs/Web/API/SpeechSynthesisUtterance/voice)-Eigenschaft.

Schließlich setzen wir die [`SpeechSynthesisUtterance.pitch`](/de/docs/Web/API/SpeechSynthesisUtterance/pitch) und die [`SpeechSynthesisUtterance.rate`](/de/docs/Web/API/SpeechSynthesisUtterance/rate) auf die Werte der entsprechenden Bereichsformularelemente. Dann, mit allen notwendigen Vorbereitungen, starten wir die Äußerung, indem wir [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak) aufrufen und die [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Instanz als Parameter übergeben.

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

Im letzten Teil des Handlers schließen wir ein [`pause`](/de/docs/Web/API/SpeechSynthesisUtterance/pause_event)-Ereignis ein, um zu demonstrieren, wie [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent) gut genutzt werden kann. Wenn [`SpeechSynthesis.pause()`](/de/docs/Web/API/SpeechSynthesis/pause) aufgerufen wird, wird eine Nachricht zurückgegeben, die die Zahl des Zeichens und den Namen meldet, bei dem die Sprache pausiert wurde.

Schließlich rufen wir [`blur()`](/de/docs/Web/API/HTMLElement/blur) auf dem Texteingabefeld auf. Dies dient hauptsächlich dazu, die Tastatur auf Firefox OS auszublenden.

#### Die angezeigten Werte für Tonhöhe und Geschwindigkeit aktualisieren

Der letzte Teil des Codes aktualisiert die `pitch`/`rate`-Werte, die in der Benutzeroberfläche angezeigt werden, jedes Mal, wenn die Schiebereglerpositionen bewegt werden.

```js
pitch.onchange = () => {
  pitchValue.textContent = pitch.value;
};

rate.onchange = () => {
  rateValue.textContent = rate.value;
};
```
