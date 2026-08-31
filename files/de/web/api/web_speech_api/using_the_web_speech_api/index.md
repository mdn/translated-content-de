---
title: Verwendung der Web Speech API
slug: Web/API/Web_Speech_API/Using_the_Web_Speech_API
l10n:
  sourceCommit: 26fb7eaa7b398a35c2463fa15ab6ccfa46a9e06d
---

{{DefaultAPISidebar("Web Speech API")}}

Die Web Speech API bietet zwei unterschiedliche Funktionsbereiche — Spracherkennung und Sprachausgabe (auch bekannt als Text-to-Speech oder TTS) — die interessante Möglichkeiten für Barrierefreiheit und Steuerung eröffnen. Dieser Artikel bietet eine Einführung in beide Bereiche zusammen mit Demos.

## Spracherkennung

Die Spracherkennung umfasst den Empfang von Audio von einem Mikrofon des Geräts (oder von einer Audiospur), welches dann von einem Spracherkennungsdienst überprüft wird. Wenn der Dienst ein Wort oder einen Satz erfolgreich erkennt, gibt er eine Textzeichenfolge (oder eine Liste von Zeichenfolgen) zurück, die Sie zur Initiierung weiterer Aktionen verwenden können.

Die Web Speech API hat eine Hauptsteuerungsschnittstelle hierfür — [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) — und mehrere verwandte Schnittstellen zur Darstellung von Ergebnissen.

Im Allgemeinen wird das Spracherkennungssystem verwendet, das auf dem Gerät des Benutzers verfügbar ist. Die meisten modernen Betriebssysteme verfügen über ein Spracherkennungssystem zur Ausgabe von Sprachbefehlen, wie **Dictation** auf macOS oder **Copilot** auf Windows.

Standardmäßig umfasst die Nutzung der Spracherkennung auf einer Webseite eine serverbasierte Erkennungsengine. Ihr Audio wird an einen Webdienst zur Erkennungsverarbeitung gesendet, daher funktioniert es nicht offline.

Um die Privatsphäre und Leistung zu verbessern, können Sie angeben, dass die Spracherkennung auf dem Gerät durchgeführt werden soll. Dies stellt sicher, dass weder das Audio noch die transkribierte Sprache zur Verarbeitung an einen Drittanbieterdienst gesendet werden. Wir behandeln die On-Device-Funktionalität ausführlicher im Abschnitt [On-Device Spracherkennung](#on-device_spracherkennung).

### Demo

Um zu demonstrieren, wie man die Spracherkennung verwendet, haben wir eine Beispiel-App namens [Speech color changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) erstellt. Nachdem Sie die **Start recognition**-Schaltfläche gedrückt haben, sprechen Sie ein HTML-Farbschlüsselwort. Die Hintergrundfarbe der App ändert sich in diese Farbe.

![Screenshot unserer Demo-App namens Speech Color Changer. Sie lädt den Benutzer ein, die Schaltfläche zu drücken und eine Farbe zu sagen. Sie ändert die Hintergrundfarbe der App in diese Farbe. In diesem Fall hat sie die Hintergrundfarbe in Pink geändert.](speech-color-changer.png)

Um die Demo auszuführen, navigieren Sie zur [Live-Demo-URL](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) in einem [unterstützten Browser](/de/docs/Web/API/SpeechRecognition#browser_compatibility).

### HTML und CSS

Das HTML und CSS für die App sind grundlegend. Es gibt einen Titel, einen Anleitungs-Paragraf ({{htmlelement("p")}}), eine Steuerung {{htmlelement("button")}} und einen Ausgabepunkt, an dem wir Diagnosemeldungen anzeigen, einschließlich der Wörter, die unsere App erkannt hat.

```html
<h1>Speech color changer</h1>

<p class="hints"></p>

<button>Start recognition</button>

<p class="output"><em>...diagnostic messages</em></p>
```

Das CSS bietet eine einfache responsive Gestaltung, sodass es auf allen Geräten gut aussieht.

### JavaScript

Schauen wir uns das JavaScript etwas detaillierter an.

#### Präfixierte Eigenschaften

Einige Browser unterstützen derzeit die Spracherkennung mit präfixierten Eigenschaften. Daher schließen wir am Anfang unseres Codes diese Zeilen ein, um sowohl präfixierte Eigenschaften als auch unpräfixierte Versionen zuzulassen:

```js
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
```

#### Farbliste

Der nächste Teil unserer Code definiert ein paar Beispiel-Farben, die wir in die Benutzeroberfläche drucken, um den Benutzern eine Vorstellung davon zu geben, was sie sagen sollen:

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

Als Nächstes definieren wir eine Spracherkennung-Instanz zur Steuerung der Erkennung in unserer App. Wir tun dies, indem wir den [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)-Konstruktor verwenden.

```js
const recognition = new SpeechRecognition();
```

Danach setzen wir einige Eigenschaften der Erkennungsinstanz:

- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous): Steuerung, ob Ergebnisse kontinuierlich (`true`) oder nur einmal jedes Mal, wenn eine Erkennung startet (`false`), erfasst werden.
- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang): Legt die Sprache der Erkennung fest. Dies ausdrücklich zu setzen, ist die empfohlene beste Praxis.
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults): Definiert, ob das Spracherkennungssystem Zwischen- oder nur Endergebnisse zurückgeben soll. Für diese Demo sind Endergebnisse ausreichend.
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives): Legt die Anzahl alternativer potenzieller Übereinstimmungen fest, die pro Ergebnis zurückgegeben werden sollen. Dies kann manchmal nützlich sein, z. B. wenn ein Ergebnis nicht ganz klar ist und Sie eine Liste von Alternativen anzeigen möchten, aus denen der Benutzer auswählen kann. Für diese Demo ist das jedoch nicht erforderlich, daher geben wir nur eine an (was ohnehin der Standard ist).

```js
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
```

#### Starten der Spracherkennung

Nachdem wir Referenzen zum Ausgabepunkt, zum `<html>`-Element, zum Anleitungs-Paragraf und zur `<button>`-Schaltfläche erhalten haben, implementieren wir einen `onclick`-Handler. Wenn ein Benutzer die Schaltfläche drückt, beginnt der Spracherkennungsdienst, indem er [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start) aufruft. Wir haben auch eine `forEach()`-Methode verwendet, um farbige Indikatoren auszugeben, die anzeigen, welche Farben Benutzer versuchen können zu sagen.

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

#### Empfangen und Verarbeiten von Ergebnissen

Sobald die Spracherkennung gestartet ist, stehen mehrere Ereignishandler zur Verfügung, mit denen Sie Ergebnisse und andere zugehörige Informationen abrufen können (siehe [Events](/de/docs/Web/API/SpeechRecognition#events) für `SpeechRecognition`). Das häufigste Ereignis ist das [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Ereignis, das ausgelöst wird, nachdem ein erfolgreiches Ergebnis empfangen wurde:

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(`Confidence: ${event.results[0][0].confidence}`);
};
```

Die zweite Zeile ist etwas kompliziert, daher erklären wir jeden Teil hier:

- Die [`SpeechRecognitionEvent.results`](/de/docs/Web/API/SpeechRecognitionEvent/results)-Eigenschaft gibt ein [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)-Objekt zurück, das [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekte enthält. Es hat einen Getter, sodass es wie ein Array zugegriffen werden kann — das erste `[0]` gibt das `SpeechRecognitionResult` an Position `0` zurück.
- Jedes `SpeechRecognitionResult`-Objekt enthält wiederum [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte, die jeweils ein individuell erkennbares Wort darstellen. Diese haben auch Getter, sodass sie wie Arrays zugegriffen werden können — das zweite `[0]` gibt die `SpeechRecognitionAlternative` an Position `0` zurück.
- Die `transcript`-Eigenschaft der `SpeechRecognitionAlternative` gibt eine Zeichenfolge mit dem erkannten Text zurück. Dieser Wert wird dann verwendet, um die Hintergrundfarbe in eine erkannte Farbe zu ändern und sie auch als Diagnosemeldung in der Benutzeroberfläche auszugeben.

Wir verwenden auch das [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event)-Ereignis, um den Spracherkennungsdienst (mit [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop)) zu stoppen, nachdem ein einzelnes Wort erkannt wurde:

```js
recognition.onspeechend = () => {
  recognition.stop();
};
```

#### Umgang mit Fehlern und nicht erkannter Sprache

Die letzten beiden Handler decken Fälle ab, in denen der gesprochene Begriff nicht erkannt wird oder ein Fehler bei der Erkennung auftritt. Das [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)-Ereignis soll den ersten Fall behandeln, obwohl in den meisten Fällen die Erkennungsengine etwas zurückgeben wird, selbst wenn es unverständlich ist:

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

## On-Device Spracherkennung

Die Spracherkennung wird normalerweise mit einem Online-Dienst durchgeführt. Dies bedeutet, dass eine Audioaufnahme zur Verarbeitung an einen Server gesendet wird und die Ergebnisse dann an den Browser zurückgegeben werden. Dies hat ein paar Probleme:

- Privatsphäre: Viele Benutzer fühlen sich unwohl damit, dass ihre Sprache an einen Server gesendet wird.
- Leistung: Das Senden von Daten an einen Server für jede Erkennung kann die Leistung in aufwändigeren Anwendungen verlangsamen und Ihre Apps werden offline nicht funktionieren.

Um diese Probleme zu vermeiden, lässt die Web Speech API Sie angeben, dass die Spracherkennung auf dem Gerät durch den Browser durchgeführt werden soll. Dies erfordert einen einmaligen Download eines Sprachpakets für jede Sprache, die Sie erkennen möchten; sobald installiert, steht die Funktionalität offline zur Verfügung.

Dieser Abschnitt erklärt, wie Sie die On-Device-Spracherkennung verwenden.

### Demo

Um die On-Device-Spracherkennung zu demonstrieren, haben wir eine Beispiel-App namens [On-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([Demo live ausführen](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)) erstellt.

Diese Demo funktioniert sehr ähnlich wie die Online-Speech-Color-Changer-Demo, die zuvor besprochen wurde, wobei die Unterschiede unten aufgeführt sind.

> [!NOTE]
> In der ursprünglichen Speech-Color-Changer-Demo hatten wir zusätzliche Zeilen eingefügt, um Browser zu behandeln, die die Web Speech API nur mit vendor-präfixierten Eigenschaften unterstützen (siehe den Abschnitt [Präfixierte Eigenschaften](#präfixierte_eigenschaften) für mehr Details). In der On-Device-Version der Demo ist kein Präfix-bezogener Code erforderlich, da die Implementierungen, die diese Funktionalität unterstützen, dies ohne Präfixe tun.

### On-Device-Erkennung angeben

Um anzugeben, dass Sie die On-Device-Verarbeitung des Browsers verwenden möchten, setzen Sie die [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally)-Eigenschaft auf `true`, bevor Sie irgendeine Spracherkennung starten (der Standardwert ist `false`):

```js
recognition.processLocally = true;
```

### Verfügbarkeit prüfen und Sprachpakete installieren

Damit die On-Device-Spracherkennung funktioniert, muss der Browser ein Sprachpaket für die Sprache installiert haben, die Sie erkennen möchten. Wenn Sie die `start()`-Methode ausführen, nachdem Sie `processLocally = true` angegeben haben, aber das richtige Sprachpaket nicht installiert ist, schlägt der Funktionsaufruf mit einem [`language-not-supported`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported)-Fehler fehl.

Um das richtige Sprachpaket zu installieren, stellen Sie sicher, dass Sie diese zwei Schritte befolgen:

1. Prüfen, ob das Sprachpaket auf dem Gerät des Benutzers verfügbar ist: Dies wird durch die statische Methode [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static) erledigt.
2. Installieren Sie das Sprachpaket, wenn es nicht verfügbar ist: Dies wird durch die statische Methode [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static) gehandhabt.

Diese Schritte werden im folgenden `click`-Ereignishandler auf der `<button>`-Steuerschaltfläche der App behandelt:

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

Die `available()`-Methode nimmt ein Optionsobjekt, das zwei Eigenschaften enthält:

- Ein `langs`-Array mit den Sprachen, für die die Verfügbarkeit geprüft werden soll.
- Ein `processLocally`-Boolean, der angibt, ob die Verfügbarkeit der Sprache nur lokal auf dem Gerät (`true`) überprüft werden soll _oder_ entweder lokal oder über einen serverbasierenden Erkennungsdienst (`false`, der Standard).

Wird diese Methode ausgeführt, gibt sie ein {{jsxref("Promise")}} zurück, das mit einem aufgezählten Wert aufgelöst wird, der die Verfügbarkeit der angegebenen Sprachen anzeigt. In unserer Demo testen wir drei Bedingungen:

- Wenn der resultierende Wert `unavailable` ist, bedeutet dies, dass kein geeignetes Sprachpaket zum Download verfügbar ist. Wir geben auch eine entsprechende Nachricht an den Ausgabepunkt aus.
- Wenn der resultierende Wert `available` ist, bedeutet dies, dass das Sprachpaket lokal verfügbar ist, daher kann die Erkennung beginnen. In diesem Fall führen wir `start()` aus und protokollieren eine Nachricht in die Konsole, wenn die App bereit ist, Sprache zu empfangen.
- Wenn der Wert etwas anderes ist (`downloadable` oder `downloading`), geben wir eine Diagnosemeldung aus, um den Benutzer darüber zu informieren, dass ein Sprachpaket-Download beginnt, und führen dann die `install()`-Methode aus, um den Download zu handhaben.

Die `install()`-Methode funktioniert ähnlich wie die `available()`-Methode, außer dass ihr Optionsobjekt nur das `langs`-Array nimmt. Wird sie ausgeführt, beginnt sie mit dem Herunterladen aller Sprachpakete für die im `langs` angegebenen Sprachen und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird mit einem Boolean, der angibt, ob die angegebenen Sprachpakete erfolgreich heruntergeladen und installiert wurden (`true`) oder nicht (`false`).

Für diese Demo geben wir eine Diagnosemeldung aus, um die Erfolg- und Fehlerschutzfälle anzuzeigen. In einer vollständigeren App würden Sie wahrscheinlich die Steuerelemente während des Download-Prozesses deaktivieren und sie wieder aktivieren, nachdem das Promise aufgelöst wurde.

### Integration der Berechtigungsrichtlinie

Die Verwendung der `available()`- und `install()`-Methoden wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} gesteuert. Insbesondere, wenn eine definierte Richtlinie die Nutzung blockiert, schlagen alle Versuche, diese Methoden aufzurufen, fehl.

Der Standardzutrittslistenwert für `on-device-speech-recognition` ist `self`. Das bedeutet, Sie müssen sich keine Sorgen über die Anpassung der Richtlinie machen, es sei denn, Sie versuchen, diese Methoden in eingebetteten Cross-Origin-Dokumenten zu verwenden oder wollen deren Verwendung ausdrücklich verbieten.

### Anforderungen an Qualitätsniveaus angeben

Sowohl die `available()`- als auch die `install()`-Methoden unterstützen die [`quality`](/de/docs/Web/API/SpeechRecognition/available_static#quality)-Option. Dies ermöglicht es Ihnen, die Unterstützung für unterschiedliche Schwierigkeitslevel der Spracherkennung zu überprüfen — zum Beispiel ist das Verarbeiten von kurzen Sprachbefehlen viel einfacher als das Verarbeiten von Diktat/Transkription, und der erstgenannte Anwendungsfall wird wahrscheinlich von mehr Hardware- und Sprachpaketkombinationen unterstützt als der letztere.

Zum Beispiel ist der folgende Code-Schnipsel eine Modifikation des Codes aus dem [On-Device Speech Color Changer](#demo_2)-Beispiel in dem wir die `available()`-Methode mit der `quality`-Option auf `dictation` eingestellt aufrufen, um zu prüfen, ob die On-Device-Erkennung diese Qualitätsstufe unterstützt. Wenn das zurückgegebene Ergebnis `unavailable` ist, setzen wir die [`processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally)-Eigenschaft des `SpeechRecognition`-Objekts auf `false`, um die API zu zwingen, einen Cloud-Erkennungsdienst zu verwenden, und `start()` den Erkennungsdienst.

Wenn das Ergebnis `available` ist, können wir loslegen, also rufen wir einfach `start()` auf, um die On-Device-Erkennung zu starten. Wenn das Ergebnis ein anderer Wert ist, führen wir die `install()`-Methode mit der `quality`-Option auf `dictation` ein, um die erforderlichen Sprachpakete zu installieren.

```js
startBtn.addEventListener("click", () => {
  // Check availability of on-device target language dictation quality
  SpeechRecognition.available({
    langs: ["en-US"],
    processLocally: true,
    quality: "dictation",
  }).then((result) => {
    if (result === "unavailable") {
      diagnostic.textContent = `On-device recognition for dictation not available, running with cloud recognition`;
      recognition.processLocally = false;
      recognition.start();
    } else if (result === "available") {
      recognition.start();
      console.log("Ready to receive a color command.");
    } else {
      diagnostic.textContent = `en-US language pack downloading`;
      SpeechRecognition.install({
        langs: ["en-US"],
        processLocally: true,
        quality: "dictation",
      }).then((result) => {
        if (result) {
          diagnostic.textContent = `en-US language pack downloaded. Try again.`;
        } else {
          diagnostic.textContent = `en-US language pack failed to download. Try again later.`;
        }
      });
    }
  });
});
```

## Kontextbezogene Gewichtung in der Spracherkennung

Es wird Momente geben, in denen ein Spracherkennungsdienst ein spezifisches Wort oder eine Phrase nicht korrekt erkennt. Dies passiert meist bei domänenspezifischen Begriffen (wie medizinisches oder wissenschaftliches Vokabular), Eigennamen, ungewöhnlichen Phrasen oder Wörtern, die ähnlich klingen wie andere Wörter und daher möglicherweise falsch erkannt werden.

Zum Beispiel stellten wir während Tests fest, dass unser [On-device Speech Color Changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) Probleme hatte, die Farbe `azure` zu erkennen — er gab immer wieder Ergebnisse wie "as you" zurück. Andere Farben, die häufig falsch erkannt wurden, waren `khaki` ("car key"), `tan` und `thistle` ("this all").

Um solche Probleme zu mindern, lässt die Web Speech API Sie Hinweise an die Erkennungs-Engine geben, um Phrasen hervorzuheben, die mit höherer Wahrscheinlichkeit gesprochen werden. Das macht diese Wörter und Phrasen wahrscheinlicher korrekt erkannt.

Sie können dies tun, indem Sie ein Array von [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Objekten als Wert der [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases)-Eigenschaft festlegen. Jedes `SpeechRecognitionPhrase`-Objekt enthält:

- Eine `phrase`-Eigenschaft, die eine Zeichenfolge mit dem Wort oder der Phrase enthält, die Sie hervorheben möchten.
- Eine `boost`-Eigenschaft, die eine Gleitkommazahl zwischen `0.0` und `10.0` (einschließlich) ist, die die Höhe des Boosts festlegt, den Sie auf das Wort oder die Phrase anwenden möchten. Höhere Werte machen das Wort oder die Phrase wahrscheinlicher korrekt erkannt.

In unserer "On-device Speech Color Changer"-Demo handhaben wir dies, indem wir ein Array von Phrasen erstellen, die hervorgehoben werden sollen, und ihre Boost-Werte:

```js
const phraseData = [
  { phrase: "azure", boost: 5.0 },
  { phrase: "khaki", boost: 3.0 },
  { phrase: "tan", boost: 2.0 },
];
```

Diese müssen als ein `ObservableArray` von `SpeechRecognitionPhrase`-Objekten dargestellt werden. Wir handhaben dies, indem wir das ursprüngliche Array mappen, um jedes Array-Element in ein `SpeechRecognitionPhrase`-Objekt zu konvertieren, indem wir den [`SpeechRecognitionPhrase()`](/de/docs/Web/API/SpeechRecognitionPhrase/SpeechRecognitionPhrase)-Konstruktor verwenden:

```js
const phraseObjects = phraseData.map(
  (p) => new SpeechRecognitionPhrase(p.phrase, p.boost),
);
```

Nach dem Erstellen der `SpeechRecognition`-Instanz fügen wir unsere kontextbezogenen Gewichtungsphrasen hinzu, indem wir das `phraseObjects`-Array als Wert der `SpeechRecognition.phrases`-Eigenschaft festlegen:

```js
recognition.phrases = phraseObjects;
```

Das Phrasen-Array kann genau wie ein normales JavaScript-Array modifiziert werden, zum Beispiel durch dynamisches Hinzufügen neuer Phrasen:

```js
recognition.phrases.push(new SpeechRecognitionPhrase("thistle", 5.0));
```

Mit diesem Code fanden wir heraus, dass die problematischen Farbkeywords genauer erkannt wurden als zuvor.

## Sprachausgabe

Sprachausgabe (auch bekannt als Text-to-Speech oder TTS) umfasst das Synthesieren von in einer App enthaltenem Text zu Sprache und das Abspielen über den Lautsprecher oder Audioausgangsanschluss eines Geräts.

Die Web Speech API hat eine Hauptsteuerungsschnittstelle dafür — [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) — plus eine Reihe von eng verwandten Schnittstellen zum Darstellen des zu synthetisierenden Textes (bekannt als Äußerungen), Stimmen, die für die Äußerung verwendet werden sollen usw. Auch hier verfügen die meisten Betriebssysteme über ein Sprachausgabusystem, das von der API für diese Aufgabe verwendet wird, wie verfügbar.

### Demo

Um zu demonstrieren, wie man Web-Sprachausgabe verwendet, haben wir eine Beispiel-App namens [Speech Synthesizer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) erstellt. Sie hat ein Eingabefeld für den Text, der synthetisiert werden soll. Sie können die Geschwindigkeit und Tonhöhe anpassen und auch eine Stimme aus dem Dropdown-Menü auswählen, die für den gesprochenen Text verwendet werden soll. Nachdem Sie Ihren Text eingegeben haben, drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd> oder klicken Sie auf die **Play**-Schaltfläche, um den Text laut vorgelesen zu hören.

![UI einer App namens Speak Easy Synthesis. Sie hat ein Eingabefeld, in das Text eingegeben werden kann, der synthetisiert werden soll, Schieberegler um die Geschwindigkeit und Höhe der Sprache zu ändern, und ein Dropdown-Menü zum Auswählen zwischen verschiedenen Stimmen.](speak-easy-synthesis.png)

Um die Demo auszuführen, navigieren Sie zur [Live-Demo-URL](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) in einem [unterstützten Browser](/de/docs/Web/API/SpeechSynthesis#browser_compatibility).

### HTML und CSS

Die HTML und CSS für diese App sind ziemlich grundlegend. Es gibt einen Titel, einige Anwendungshinweise und ein Formular mit ein paar grundlegenden Steuerungen. Das {{htmlelement("select")}}-Element ist zunächst leer; es wird über JavaScript mit {{htmlelement("option")}}s gefüllt (später behandelt).

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

Zuerst erfassen wir Referenzen zu allen an der UI beteiligten DOM-Elementen, aber interessanterweise erfassen wir eine Referenz zu [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis). Dies ist der Einstiegspunkt der API — sie gibt eine Instanz von [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) zurück, der Steuerungsschnittstelle für Web-Sprachausgabe.

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

Um das {{htmlelement("select")}}-Element mit den verschiedenen Sprachoptionen zu füllen, die das Gerät verfügbar hat, haben wir eine `populateVoiceList()`-Funktion geschrieben. Zuerst rufen wir [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) auf, die eine Liste aller verfügbaren Stimmen zurückgibt, dargestellt durch [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte. Dann durchlaufen wir diese Liste — für jede Stimme erstellen wir ein {{htmlelement("option")}}-Element, setzen dessen Textinhalt, um den Namen der Stimme anzuzeigen (aus [`SpeechSynthesisVoice.name`](/de/docs/Web/API/SpeechSynthesisVoice/name) geholt), die Sprache der Stimme (aus [`SpeechSynthesisVoice.lang`](/de/docs/Web/API/SpeechSynthesisVoice/lang) geholt), und `-- DEFAULT`, wenn die Stimme die Standardstimme für die Ausgabemaschine ist (überprüft durch Abfragen, ob [`SpeechSynthesisVoice.default`](/de/docs/Web/API/SpeechSynthesisVoice/default) `true` zurückgibt.)

Wir erstellen auch `data-`-Attribute für jede Option, die den Namen und die Sprache der zugehörigen Stimme enthalten, sodass wir sie später leicht greifen können, und hängen dann die Optionen als Kinder des Selects an.

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

Ältere Browser unterstützen das Ereignis [`voiceschanged`](/de/docs/Web/API/SpeechSynthesis/voiceschanged_event) nicht und geben einfach eine Liste von Stimmen zurück, wenn [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) aufgerufen wird. Während andere, wie Chrome, warten müssen, bis das Ereignis ausgelöst wird, bevor sie die Liste füllen. Um für beide Fälle zu sorgen, führen wir die Funktion wie unten gezeigt aus:

```js
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

#### Den eingegebenen Text sprechen

Als nächstes erstellen wir einen Ereignishandler, um mit dem Sprechen des in das Textfeld eingegebenen Textes zu beginnen. Wir verwenden einen [onsubmit](/de/docs/Web/API/HTMLFormElement/submit_event)-Handler auf dem Formular, damit die Aktion ausgeführt wird, wenn <kbd>Enter</kbd>/<kbd>Return</kbd> gedrückt wird. Wir erstellen zunächst eine neue Instanz von [`SpeechSynthesisUtterance()`](/de/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance) mit dessen Konstruktor — dies wird als Parameter der Wert des Texteingabefelds übergeben.

Als Nächstes müssen wir herausfinden, welche Stimme verwendet werden soll. Wir verwenden die [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) `selectedOptions`-Eigenschaft, um das aktuell ausgewählte {{htmlelement("option")}}-Element zurückzugeben. Wir verwenden dann das `data-name`-Attribut dieses Elements, um das [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekt zu finden, dessen Name mit dem Wert dieses Attributs übereinstimmt. Wir setzen das passende Stimmobjekt als Wert der [`SpeechSynthesisUtterance.voice`](/de/docs/Web/API/SpeechSynthesisUtterance/voice)-Eigenschaft.

Schließlich setzen wir die [`SpeechSynthesisUtterance.pitch`](/de/docs/Web/API/SpeechSynthesisUtterance/pitch) und [`SpeechSynthesisUtterance.rate`](/de/docs/Web/API/SpeechSynthesisUtterance/rate) auf die Werte der entsprechenden Reichweite-Forma-Elemente. Dann, mit allem notwendigen Vorbereitungen getroffen, starten wir das Sprechen der Äußerung, indem wir [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak) aufrufen und die [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Instanz als Parameter übergeben.

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

Im letzten Teil des Handlers nehmen wir ein [`pause`](/de/docs/Web/API/SpeechSynthesisUtterance/pause_event)-Ereignis auf, um zu demonstrieren, wie [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent) gut genutzt werden kann. Wenn [`SpeechSynthesis.pause()`](/de/docs/Web/API/SpeechSynthesis/pause) aufgerufen wird, gibt dies eine Nachricht zurück, die die Zeichen-Nummer und den Namen meldet, bei dem die Sprache pausiert wurde.

Schließlich rufen wir [`blur()`](/de/docs/Web/API/HTMLElement/blur) auf dem Texteingabefeld auf. Dies dient hauptsächlich dazu, die Tastatur auf Firefox OS auszublenden.

#### Anzeige der aktualisierten Tonhöhe- und Geschwindigkeitswerte

Der letzte Teil des Codes aktualisiert die in der Benutzeroberfläche angezeigten `pitch`/`rate`-Werte, jedes Mal, wenn die Schiebereglerpositionen verändert werden.

```js
pitch.onchange = () => {
  pitchValue.textContent = pitch.value;
};

rate.onchange = () => {
  rateValue.textContent = rate.value;
};
```
