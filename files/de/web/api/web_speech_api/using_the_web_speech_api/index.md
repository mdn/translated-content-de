---
title: Verwendung der Web Speech API
slug: Web/API/Web_Speech_API/Using_the_Web_Speech_API
l10n:
  sourceCommit: 25871546e715779a39a2d962820a35e44b6a6df1
---

{{DefaultAPISidebar("Web Speech API")}}

Die Web Speech API bietet zwei unterschiedliche Funktionsbereiche: Spracherkennung und Sprachsynthese (auch als Text-to-Speech oder TTS bezeichnet). Beide eröffnen interessante Möglichkeiten für Barrierefreiheit und Steuerung. Dieser Artikel führt anhand von Demos in beide Bereiche ein.

## Spracherkennung

Bei der Spracherkennung wird Audio über das Mikrofon eines Geräts (oder aus einer Audiospur) empfangen und anschließend von einem Spracherkennungsdienst verarbeitet. Wenn der Dienst ein Wort oder eine Wortgruppe erfolgreich erkennt, gibt er eine Textzeichenfolge (oder eine Liste von Zeichenfolgen) zurück, mit der Sie weitere Aktionen auslösen können.

Die Web Speech API stellt dafür eine zentrale Steuerungsschnittstelle bereit – [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) – sowie mehrere zugehörige Schnittstellen zur Darstellung der Ergebnisse.

Der Browser entscheidet, wo die Spracherkennung durchgeführt wird. Je nach Browser wird das Audio möglicherweise an einen serverbasierten Erkennungsdienst gesendet, sodass die Erkennung offline nicht funktioniert. Alternativ kann es auf dem Gerät des Benutzers verarbeitet werden.

Um Datenschutz und Leistung zu verbessern, können Sie festlegen, dass die Spracherkennung auf dem Gerät durchgeführt werden muss. Dadurch wird sichergestellt, dass weder das Audio noch der transkribierte Text zur Verarbeitung an einen Drittanbieterdienst gesendet wird. Die Funktion zur Verarbeitung auf dem Gerät wird im Abschnitt [Spracherkennung auf dem Gerät](#spracherkennung_auf_dem_gerät) ausführlicher behandelt.

### Demo

Um die Verwendung der Spracherkennung zu demonstrieren, haben wir eine Beispiel-App namens [Speech color changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) erstellt. Nachdem Sie auf die Schaltfläche **Start recognition** geklickt haben, sagen Sie ein HTML-Farbschlüsselwort. Die Hintergrundfarbe der App ändert sich daraufhin in diese Farbe.

![Screenshot unserer Demo-App „Speech color changer“. Sie fordert dazu auf, auf die Schaltfläche zu klicken und eine Farbe zu nennen. Der Hintergrund der App nimmt diese Farbe an. In diesem Fall ist der Hintergrund rosa geworden.](speech-color-changer.png)

Um die Demo auszuprobieren, öffnen Sie die [Live-Demo](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) in einem [unterstützten Browser](/de/docs/Web/API/SpeechRecognition#browser_compatibility).

### HTML und CSS

HTML und CSS der App sind einfach gehalten. Es gibt einen Titel, einen Absatz mit Anweisungen ({{htmlelement("p")}}), eine Schaltfläche ({{htmlelement("button")}}) und einen Ausgabeabsatz, in dem wir Statusmeldungen anzeigen, einschließlich der Wörter, die unsere App erkannt hat.

```html
<h1>Speech color changer</h1>

<p class="hints"></p>

<button>Start recognition</button>

<p class="output"><em>...diagnostic messages</em></p>
```

Das CSS sorgt für ein einfaches responsives Design, damit die App auf verschiedenen Geräten gut aussieht.

### JavaScript

Sehen wir uns das JavaScript etwas genauer an.

#### Eigenschaften mit Präfix

Einige Browser unterstützen Spracherkennung derzeit mit Eigenschaften, die ein Präfix tragen. Daher fügen wir am Anfang unseres Codes die folgenden Zeilen ein, um sowohl Eigenschaften mit als auch ohne Präfix zu unterstützen:

```js
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
```

#### Farbliste

Im nächsten Teil unseres Codes definieren wir einige Beispielfarben, die wir in der Benutzeroberfläche anzeigen. So erhalten Benutzer eine Vorstellung davon, welche Farben sie nennen können:

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

Als Nächstes definieren wir eine Spracherkennungsinstanz, um die Erkennung in unserer App zu steuern. Dazu verwenden wir den Konstruktor [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition).

```js
const recognition = new SpeechRecognition();
```

Anschließend legen wir einige Eigenschaften der Erkennungsinstanz fest:

- [`SpeechRecognition.continuous`](/de/docs/Web/API/SpeechRecognition/continuous): Steuert, ob Ergebnisse fortlaufend (`true`) oder bei jedem Start der Erkennung nur einmal (`false`) erfasst werden.
- [`SpeechRecognition.lang`](/de/docs/Web/API/SpeechRecognition/lang): Legt die Sprache für die Erkennung fest. Es wird empfohlen, diese ausdrücklich festzulegen.
- [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults): Legt fest, ob das Spracherkennungssystem Zwischenergebnisse oder nur endgültige Ergebnisse zurückgeben soll. Für diese Demo reichen endgültige Ergebnisse aus.
- [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives): Legt fest, wie viele alternative mögliche Übereinstimmungen pro Ergebnis zurückgegeben werden sollen. Das kann beispielsweise nützlich sein, wenn ein Ergebnis nicht eindeutig ist und Sie dem Benutzer eine Liste mit Alternativen zur Auswahl anzeigen möchten. Für diese Demo ist das jedoch nicht nötig, daher geben wir nur eine Alternative an (was ohnehin der Standardwert ist).

```js
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
```

#### Starten der Spracherkennung

Nachdem wir Referenzen auf den Ausgabeabsatz, das `<html>`-Element, den Absatz mit Anweisungen und das `<button>`-Element abgerufen haben, verwenden wir die Methoden {{jsxref("Array.prototype.map()", "map()")}} und {{jsxref("Array.prototype.join()", "join()")}}, um farbige Markierungen anzuzeigen. Sie zeigen, welche Farben Benutzer nennen können. Anschließend implementieren wir einen `onclick`-Handler. Wenn ein Benutzer auf die Schaltfläche klickt, ruft der Handler [`SpeechRecognition.start()`](/de/docs/Web/API/SpeechRecognition/start) auf, um den Spracherkennungsdienst zu starten.

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

Sobald die Spracherkennung gestartet wurde, stehen mehrere Event-Handler zur Verfügung, mit denen Sie Ergebnisse und weitere zugehörige Informationen abrufen können (siehe [Ereignisse](/de/docs/Web/API/SpeechRecognition#events) für `SpeechRecognition`). Am häufigsten wird das Ereignis [`result`](/de/docs/Web/API/SpeechRecognition/result_event) verwendet, das nach dem Empfang eines erfolgreichen Ergebnisses ausgelöst wird:

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(`Confidence: ${event.results[0][0].confidence}`);
};
```

Die zweite Zeile ist etwas komplex. Die folgende Liste erläutert ihre einzelnen Bestandteile:

- Die Eigenschaft [`SpeechRecognitionEvent.results`](/de/docs/Web/API/SpeechRecognitionEvent/results) gibt ein [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)-Objekt zurück, das [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekte enthält. Auf seine Einträge können Sie wie auf die eines Arrays zugreifen. Das erste `[0]` gibt also das `SpeechRecognitionResult` an Position `0` zurück.
- Jedes `SpeechRecognitionResult`-Objekt enthält ein oder mehrere [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte. Jedes davon stellt eine mögliche Übereinstimmung mit dem Gesagten dar; sie sind nach absteigender Wahrscheinlichkeit geordnet. Auch auf diese Objekte können Sie wie auf ein Array zugreifen. Das zweite `[0]` gibt daher die wahrscheinlichste Übereinstimmung zurück.
- Die Eigenschaft `transcript` des `SpeechRecognitionAlternative`-Objekts gibt eine Zeichenfolge mit dem erkannten Text zurück. Dieser Wert wird dann verwendet, um die Hintergrundfarbe auf eine erkannte Farbe zu setzen und ihn außerdem als Statusmeldung in der Benutzeroberfläche auszugeben.

Wir verwenden außerdem das Ereignis [`speechend`](/de/docs/Web/API/SpeechRecognition/speechend_event), um den Spracherkennungsdienst nach dem Erkennen eines einzelnen Wortes zu stoppen (mit [`SpeechRecognition.stop()`](/de/docs/Web/API/SpeechRecognition/stop)):

```js
recognition.onspeechend = () => {
  recognition.stop();
};
```

#### Umgang mit Fehlern und nicht erkannter Sprache

Die letzten beiden Handler behandeln Fälle, in denen der gesprochene Begriff nicht erkannt wird oder bei der Erkennung ein Fehler auftritt. Das Ereignis [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event) soll den ersten Fall behandeln. In den meisten Fällen gibt die Erkennungssoftware allerdings etwas zurück, selbst wenn das Ergebnis unverständlich ist:

```js
recognition.onnomatch = (event) => {
  diagnostic.textContent = "I didn't recognize that color.";
};
```

Das Ereignis [`error`](/de/docs/Web/API/SpeechRecognition/error_event) behandelt Fälle, in denen bei der Erkennung tatsächlich ein Fehler auftritt. Die Eigenschaft [`SpeechRecognitionErrorEvent.error`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error) enthält den zurückgegebenen Fehler:

```js
recognition.onerror = (event) => {
  diagnostic.textContent = `Error occurred in recognition: ${event.error}`;
};
```

## Spracherkennung auf dem Gerät

Einige Browser führen die Spracherkennung mithilfe eines Onlinedienstes durch. Das bedeutet, dass eine Audioaufnahme zur Verarbeitung an einen Server gesendet wird und die Ergebnisse anschließend an den Browser zurückgegeben werden. Dies bringt einige Probleme mit sich:

- Datenschutz: Vielen Benutzern ist es unangenehm, wenn ihre Sprache an einen Server gesendet wird.
- Leistung: Das Senden von Daten an einen Server für jeden Erkennungsvorgang kann bei anspruchsvolleren Anwendungen die Leistung beeinträchtigen. Außerdem funktionieren Ihre Apps dann nicht offline.

Um diese Probleme zu verringern, können Sie mit der Web Speech API festlegen, dass der Browser die Spracherkennung auf dem Gerät durchführen soll. Dafür muss für jede Sprache, die Sie erkennen möchten, einmalig ein Sprachpaket heruntergeladen werden. Nach der Installation steht die Funktion auch offline zur Verfügung.

In diesem Abschnitt wird erläutert, wie Sie die Spracherkennung auf dem Gerät verwenden.

### Demo

Um die Spracherkennung auf dem Gerät zu demonstrieren, haben wir eine Beispiel-App namens [On-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) erstellt ([Live-Demo ausprobieren](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)).

Diese Demo funktioniert weitgehend wie die zuvor besprochene Online-Demo zum Ändern der Farbe durch Sprache. Die Unterschiede werden im Folgenden erläutert.

> [!NOTE]
> In der ursprünglichen „Speech color changer“-Demo haben wir zusätzliche Zeilen eingefügt, um Browser zu unterstützen, die die Web Speech API nur mit Eigenschaften mit Herstellerpräfix unterstützen (weitere Informationen finden Sie im Abschnitt [Eigenschaften mit Präfix](#eigenschaften_mit_präfix)). In der Version der Demo mit Verarbeitung auf dem Gerät ist kein Code zur Behandlung von Präfixen erforderlich, da die Implementierungen, die diese Funktion unterstützen, ohne Präfixe auskommen.

### Festlegen der Erkennung auf dem Gerät

Um festzulegen, dass Sie die Verarbeitung auf dem Gerät durch den Browser verwenden möchten, setzen Sie die Eigenschaft [`SpeechRecognition.processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally) auf `true`, bevor Sie die Spracherkennung starten (der Standardwert ist `false`):

```js
recognition.processLocally = true;
```

### Verfügbarkeit prüfen und Sprachpakete installieren

Damit die Spracherkennung auf dem Gerät funktioniert, muss im Browser ein Sprachpaket für die Sprache installiert sein, die Sie erkennen möchten. Wenn Sie `start()` aufrufen, nachdem Sie `processLocally` auf `true` gesetzt haben, aber das passende Sprachpaket nicht installiert ist, schlägt die Erkennung fehl. Dabei wird ein [`error`](/de/docs/Web/API/SpeechRecognition/error_event)-Ereignis mit dem Fehlercode [`service-not-allowed`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error#service-not-allowed) ausgelöst.

Gehen Sie wie folgt vor, um das passende Sprachpaket zu installieren:

1. Prüfen Sie mit der Methode [`SpeechRecognition.available()`](/de/docs/Web/API/SpeechRecognition/available_static), ob das Sprachpaket auf dem Gerät des Benutzers installiert ist.
2. Falls es nicht installiert ist, installieren Sie es mit der Methode [`SpeechRecognition.install()`](/de/docs/Web/API/SpeechRecognition/install_static).

Diese Schritte werden im folgenden `click`-Event-Handler für das `<button>`-Element der App ausgeführt:

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

In dieser Demo übergeben wir `available()` ein Optionsobjekt mit zwei Eigenschaften:

- Ein `langs`-Array mit den Sprachen, deren Verfügbarkeit geprüft werden soll.
- Einen booleschen Wert `processLocally`, der festlegt, ob die Verfügbarkeit der Sprache nur auf dem Gerät (`true`) _oder_ entweder lokal oder über einen serverbasierten Erkennungsdienst (`false`, der Standardwert) geprüft werden soll.

Beim Aufruf gibt diese Methode ein {{jsxref("Promise")}} zurück, das mit einem Aufzählungswert erfüllt wird, der die Verfügbarkeit der angegebenen Sprachen angibt. In unserer Demo prüfen wir drei Fälle:

- Ist der zurückgegebene Wert `unavailable`, steht kein geeignetes Sprachpaket zum Herunterladen zur Verfügung. Wir geben außerdem eine entsprechende Meldung im Ausgabebereich aus.
- Ist der zurückgegebene Wert `available`, ist das Sprachpaket lokal verfügbar und die Erkennung kann beginnen. In diesem Fall rufen wir `start()` auf und geben eine Meldung in der Konsole aus, sobald die App Spracheingaben empfangen kann.
- Ist der Wert etwas anderes (`downloadable` oder `downloading`), geben wir eine Statusmeldung aus, um den Benutzer darüber zu informieren, dass der Download eines Sprachpakets beginnt. Anschließend rufen wir die Methode `install()` auf, um den Download durchzuführen.

Wir rufen `install()` mit denselben Optionen auf. Die Methode beginnt mit dem Herunterladen der Sprachpakete für die in `langs` aufgeführten Sprachen und gibt ein {{jsxref("Promise")}} zurück. Dieses wird mit `true` erfüllt, wenn die Sprachpakete erfolgreich heruntergeladen und installiert wurden, andernfalls mit `false`.

Für diese Demo geben wir eine Statusmeldung aus, die angibt, ob der Vorgang erfolgreich war oder fehlgeschlagen ist. In einer umfangreicheren App würden Sie die Steuerelemente während des Downloads vermutlich deaktivieren und sie nach Erfüllung des Promise wieder aktivieren.

### Integration mit Permissions Policy

Der Zugriff auf die Methoden `available()` und `install()` wird durch die {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}}-Direktive von {{httpheader("Permissions-Policy")}} gesteuert. Wenn eine Richtlinie den Zugriff blockiert, wird das von `available()` zurückgegebene Promise mit `unavailable` erfüllt. Das von `install()` zurückgegebene Promise wird mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` zurückgewiesen.

Der Standardwert der Zulassungsliste für `on-device-speech-recognition` ist `self`. Sie müssen die Richtlinie daher nur anpassen, wenn Sie diese Methoden in eingebetteten Dokumenten einer anderen Herkunft verwenden oder ihre Verwendung ausdrücklich deaktivieren möchten.

### Anforderungen an die Qualitätsstufe festlegen

Die Methoden `available()` und `install()` unterstützen beide die Option [`quality`](/de/docs/Web/API/SpeechRecognition/available_static#quality). Damit können Sie prüfen, ob unterschiedliche Komplexitätsstufen der Spracherkennung unterstützt werden. Beispielsweise ist die Verarbeitung kurzer Sprachbefehle wesentlich einfacher als das Verarbeiten von Diktaten oder Transkriptionen. Daher werden Sprachbefehle voraussichtlich von mehr Kombinationen aus Hardware und Sprachpaketen unterstützt als Diktate.

Das folgende Codebeispiel passt den Code aus dem Beispiel [On-device speech color changer](#demo_2) an. Es ruft `available()` mit der auf `dictation` gesetzten Option `quality` auf, um zu prüfen, ob die Erkennung auf dem Gerät diese Qualitätsstufe unterstützt. Ist das Ergebnis `unavailable`, setzen wir die Eigenschaft [`processLocally`](/de/docs/Web/API/SpeechRecognition/processLocally) des `SpeechRecognition`-Objekts auf `false`. Dadurch kann der Browser einen entfernten Erkennungsdienst verwenden, falls einer verfügbar ist. Anschließend rufen wir `start()` auf.

Ist das Ergebnis `available`, rufen wir `start()` auf, um die Erkennung auf dem Gerät zu starten. Bei jedem anderen Ergebnis rufen wir `install()` mit der auf `dictation` gesetzten Option `quality` auf, um die benötigten Sprachpakete zu installieren.

```js
startBtn.addEventListener("click", () => {
  // Check availability of on-device target language dictation quality
  SpeechRecognition.available({
    langs: ["en-US"],
    processLocally: true,
    quality: "dictation",
  }).then((result) => {
    if (result === "unavailable") {
      diagnostic.textContent = `On-device recognition for dictation not available. Falling back to any available recognition service.`;
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

## Kontextbezogene Gewichtung bei der Spracherkennung

Manchmal kann ein Spracherkennungsdienst ein bestimmtes Wort oder eine Wortgruppe nicht richtig erkennen. Das passiert besonders häufig bei Fachbegriffen (etwa aus der Medizin oder Wissenschaft), Eigennamen, ungewöhnlichen Formulierungen oder Wörtern, die ähnlich wie andere Wörter klingen und deshalb falsch erkannt werden können.

Bei Tests haben wir beispielsweise festgestellt, dass unser [On-device speech color changer](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/) Schwierigkeiten hatte, die Farbe `azure` zu erkennen: Stattdessen lieferte er wiederholt Ergebnisse wie „as you“. Weitere Farben, die häufig falsch erkannt wurden, waren `khaki` („car key“), `tan` und `thistle` („this all“).

Um solche Probleme zu verringern, können Sie der Erkennungssoftware mit der Web Speech API Hinweise auf Wortgruppen geben, die mit höherer Wahrscheinlichkeit gesprochen werden und bei der Erkennung bevorzugt berücksichtigt werden sollen. Dadurch steigt die Wahrscheinlichkeit, dass diese Wörter und Wortgruppen richtig erkannt werden.

Dazu setzen Sie den Wert der Eigenschaft [`SpeechRecognition.phrases`](/de/docs/Web/API/SpeechRecognition/phrases) auf ein Array von [`SpeechRecognitionPhrase`](/de/docs/Web/API/SpeechRecognitionPhrase)-Objekten. Jedes `SpeechRecognitionPhrase`-Objekt enthält:

- Eine Eigenschaft `phrase`: eine Zeichenfolge mit dem Wort oder der Wortgruppe, deren Gewichtung Sie erhöhen möchten.
- Eine Eigenschaft `boost`: eine Gleitkommazahl zwischen `0.0` und `10.0` (einschließlich), die festlegt, wie stark das Wort oder die Wortgruppe gewichtet werden soll. Je höher der Wert, desto wahrscheinlicher ist es, dass das Wort oder die Wortgruppe erkannt wird.

In unserer „On-device speech color changer“-Demo erstellen wir dafür ein Array mit den stärker zu gewichtenden Wortgruppen und ihren jeweiligen Gewichtungswerten:

```js
const phraseData = [
  { phrase: "azure", boost: 5.0 },
  { phrase: "khaki", boost: 3.0 },
  { phrase: "tan", boost: 2.0 },
];
```

Diese müssen als `ObservableArray` von `SpeechRecognitionPhrase`-Objekten dargestellt werden. Dazu bilden wir das ursprüngliche Array auf ein neues Array ab und wandeln jedes Element mithilfe des Konstruktors [`SpeechRecognitionPhrase()`](/de/docs/Web/API/SpeechRecognitionPhrase/SpeechRecognitionPhrase) in ein `SpeechRecognitionPhrase`-Objekt um:

```js
const phraseObjects = phraseData.map(
  (p) => new SpeechRecognitionPhrase(p.phrase, p.boost),
);
```

Nachdem wir die `SpeechRecognition`-Instanz erstellt haben, fügen wir die Wortgruppen für die kontextbezogene Gewichtung hinzu, indem wir das Array `phraseObjects` als Wert der Eigenschaft `SpeechRecognition.phrases` festlegen:

```js
recognition.phrases = phraseObjects;
```

Das Array mit den Wortgruppen lässt sich wie ein normales JavaScript-Array ändern, beispielsweise indem dynamisch neue Wortgruppen hinzugefügt werden:

```js
recognition.phrases.push(new SpeechRecognitionPhrase("thistle", 5.0));
```

Mit diesem Code wurden die problematischen Farbschlüsselwörter unseren Beobachtungen zufolge zuverlässiger erkannt als zuvor.

## Sprachsynthese

Bei der Sprachsynthese (auch Text-to-Speech oder TTS) wird in einer App enthaltener Text in Sprache umgewandelt und über den Lautsprecher oder einen Audioausgang eines Geräts wiedergegeben.

Die Web Speech API stellt dafür eine zentrale Steuerungsschnittstelle bereit – [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) – sowie mehrere eng verwandte Schnittstellen. Diese repräsentieren den zu synthetisierenden Text (als Äußerungen bezeichnet), die für die Äußerung verwendeten Stimmen und weitere Informationen. Auch hier gilt: Die meisten Betriebssysteme verfügen über ein Sprachsynthesesystem, das die API für diese Aufgabe nutzt, sofern es verfügbar ist.

### Demo

Um die Verwendung der Sprachsynthese im Web zu demonstrieren, haben wir eine Beispiel-App namens [Speech synthesizer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) erstellt. Sie enthält ein Eingabefeld für den Text, der gesprochen werden soll. Sie können die Sprechgeschwindigkeit und Tonhöhe anpassen und außerdem im Dropdown-Menü eine Stimme für den gesprochenen Text auswählen. Nachdem Sie Ihren Text eingegeben haben, drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd> oder klicken Sie auf die Schaltfläche **Play**, um sich den Text vorlesen zu lassen.

![Benutzeroberfläche einer App namens „Speak easy synthesis“. Sie enthält ein Eingabefeld für den Text, der gesprochen werden soll, Schieberegler zum Ändern der Sprechgeschwindigkeit und Tonhöhe sowie ein Dropdown-Menü zur Auswahl zwischen verschiedenen Stimmen.](speak-easy-synthesis.png)

Um die Demo auszuprobieren, öffnen Sie die [Live-Demo](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) in einem [unterstützten Browser](/de/docs/Web/API/SpeechSynthesis#browser_compatibility).

### HTML und CSS

HTML und CSS dieser App sind recht einfach gehalten. Es gibt einen Titel, einige Hinweise zur Verwendung und ein Formular mit grundlegenden Steuerelementen. Das Element {{htmlelement("select")}} ist zunächst leer; es wird über JavaScript mit {{htmlelement("option")}}-Elementen gefüllt (mehr dazu später).

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

Sehen wir uns das JavaScript an, das diese App steuert.

#### Variablen festlegen

Zuerst erfassen wir Referenzen auf alle DOM-Elemente der Benutzeroberfläche. Besonders wichtig ist jedoch die Referenz auf [`Window.speechSynthesis`](/de/docs/Web/API/Window/speechSynthesis). Dies ist der Einstiegspunkt der API: Die Eigenschaft gibt eine Instanz von [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) zurück, der Steuerungsschnittstelle für die Sprachsynthese im Web.

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector(".txt");
const voiceSelect = document.querySelector("select");

const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector(".pitch-value");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector(".rate-value");

let voices = [];
```

#### Das select-Element füllen

Um das Element {{htmlelement("select")}} mit den verschiedenen auf dem Gerät verfügbaren Stimmen zu füllen, haben wir eine Funktion `populateVoiceList()` geschrieben. Zuerst rufen wir [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) auf. Die Methode gibt ein Array aller verfügbaren Stimmen zurück, dargestellt durch [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte. Anschließend durchlaufen wir dieses Array und erstellen für jede Stimme ein {{htmlelement("option")}}-Element. Dessen Textinhalt setzen wir auf den Namen der Stimme (aus [`SpeechSynthesisVoice.name`](/de/docs/Web/API/SpeechSynthesisVoice/name)), gefolgt von ihrer Sprache (aus [`SpeechSynthesisVoice.lang`](/de/docs/Web/API/SpeechSynthesisVoice/lang)). Wenn die Stimme die Standardstimme der Sprachsynthese ist, [`SpeechSynthesisVoice.default`](/de/docs/Web/API/SpeechSynthesisVoice/default) also `true` zurückgibt, hängen wir außerdem `— DEFAULT` an.

Für jede Option erstellen wir zudem `data-`-Attribute mit dem Namen und der Sprache der zugehörigen Stimme, damit wir diese später leicht abrufen können. Anschließend fügen wir die Optionen als Kindelemente des select-Elements hinzu.

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

Ältere Browser unterstützen das Ereignis [`voiceschanged`](/de/docs/Web/API/SpeechSynthesis/voiceschanged_event) nicht und geben beim Aufruf von [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) einfach eine Liste von Stimmen zurück. Bei anderen Browsern, etwa Chrome, müssen Sie dagegen warten, bis das Ereignis ausgelöst wird, bevor Sie die Liste füllen können. Um beide Fälle zu unterstützen, führen wir die Funktion wie folgt aus:

```js
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

#### Den eingegebenen Text sprechen

Als Nächstes erstellen wir einen Event-Handler, der die Sprachausgabe des im Textfeld eingegebenen Textes startet. Wir verwenden einen [onsubmit](/de/docs/Web/API/HTMLFormElement/submit_event)-Handler für das Formular, damit die Aktion beim Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd> ausgeführt wird. Zuerst erstellen wir mithilfe des Konstruktors eine neue [`SpeechSynthesisUtterance()`](/de/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance)-Instanz. Dabei übergeben wir den Wert des Texteingabefelds als Parameter.

Als Nächstes müssen wir bestimmen, welche Stimme verwendet werden soll. Mit der Eigenschaft `selectedOptions` von [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) ermitteln wir das aktuell ausgewählte {{htmlelement("option")}}-Element. Anschließend verwenden wir dessen Attribut `data-name`, um das [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekt zu finden, dessen Name dem Attributwert entspricht. Dieses Stimmobjekt legen wir als Wert der Eigenschaft [`SpeechSynthesisUtterance.voice`](/de/docs/Web/API/SpeechSynthesisUtterance/voice) fest.

Schließlich setzen wir [`SpeechSynthesisUtterance.pitch`](/de/docs/Web/API/SpeechSynthesisUtterance/pitch) und [`SpeechSynthesisUtterance.rate`](/de/docs/Web/API/SpeechSynthesisUtterance/rate) auf die Werte der entsprechenden Schieberegler im Formular. Nachdem alle Vorbereitungen abgeschlossen sind, starten wir die Sprachausgabe durch Aufruf von [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak). Dabei übergeben wir die [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Instanz als Parameter.

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

Im letzten Teil des Handlers verwenden wir ein [`pause`](/de/docs/Web/API/SpeechSynthesisUtterance/pause_event)-Ereignis, um eine Anwendungsmöglichkeit von [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent) zu demonstrieren. Wenn [`SpeechSynthesis.pause()`](/de/docs/Web/API/SpeechSynthesis/pause) aufgerufen wird, wird eine Meldung ausgegeben, die die Zeichennummer und das Zeichen angibt, an dem die Sprachausgabe angehalten wurde.

Zum Schluss rufen wir [`blur()`](/de/docs/Web/API/HTMLElement/blur) für das Texteingabefeld auf. Dies dient hauptsächlich dazu, die Tastatur unter Firefox OS auszublenden.

#### Angezeigte Werte für Tonhöhe und Sprechgeschwindigkeit aktualisieren

Der letzte Teil des Codes aktualisiert die in der Benutzeroberfläche angezeigten Werte für `pitch` und `rate`, wenn die Schieberegler bewegt werden.

```js
pitch.onchange = () => {
  pitchValue.textContent = pitch.value;
};

rate.onchange = () => {
  rateValue.textContent = rate.value;
};
```
