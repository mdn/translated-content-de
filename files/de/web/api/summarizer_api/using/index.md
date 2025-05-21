---
title: Verwendung der Summarizer-API
slug: Web/API/Summarizer_API/Using
l10n:
  sourceCommit: 683890a47fa52942b23dd4406c7f095bb70b1c59
---

{{DefaultAPISidebar("Summarizer API")}}

Die [Summarizer API](/de/docs/Web/API/Summarizer_API) bietet einen asynchronen ({{jsxref("Promise")}}-basierten) Mechanismus, um einer Website zu ermöglichen, einen Textkörper in das interne KI-Modell des Browsers einzuspeisen und zu verlangen, dass eine Zusammenfassung des Textes basierend auf angegebenen Optionen zurückgegeben wird. Dieser Artikel erklärt, wie Sie die Grundlagen der Summarizer-API nutzen.

## Erstellen eines Summarizers

Die gesamte Funktionalität der Summarizer-API wird über eine einzige Schnittstelle bereitgestellt — [`Summarizer`](/de/docs/Web/API/Summarizer).

Der erste Schritt, um das KI-Modell des Browsers dazu zu bringen, eine Zusammenfassung auszugeben, besteht darin, eine `Summarizer`-Objektinstanz zu erstellen. Dies erfolgt mit der statischen Methode [`Summarizer.create()`](/de/docs/Web/API/Summarizer/create_static), die ein Optionsobjekt als Argument annimmt, in dem Sie angeben, welche Art von Zusammenfassung Sie haben möchten:

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tl;dr",
  length: "short",
  format: "markdown",
  expectedInputLanguages: ["en-US"],
  outputLanguage: "en-US",
});
```

Die Option [`sharedContext`](/de/docs/Web/API/Summarizer/sharedContext) liefert einen String, der dem KI-Modell hilft, eine geeignetere Zusammenfassung für den Kontext zu schreiben, in dem der Text verwendet wird, während [`type`](/de/docs/Web/API/Summarizer/type) angibt, welche Art von Zusammenfassung Sie bereitstellen möchten, wie Schlüsselstichpunkte oder eine "tl;dr"-Zusammenfassung.

Wir geben auch die gewünschte [`length`](/de/docs/Web/API/Summarizer/length), das Ausgabe-[`format`](/de/docs/Web/API/Summarizer/format), die [`expectedInputLanguages`](/de/docs/Web/API/Summarizer/expectedInputLanguages) und die gewünschte [`outputLanguage`](/de/docs/Web/API/Summarizer/outputLanguage) an. Wenn die Eingabe- und Ausgabesprachen nicht angegeben sind, wird die Sprache des Eingabetextes automatisch erkannt, und die Ausgabesprache entspricht der Eingabesprache.

Wenn das KI-Modell des Browsers die angegebenen Eingabe- oder Ausgabesprachen nicht unterstützt, wird ein Fehler ausgelöst.

> [!NOTE]
> Siehe die Referenzseite für [`create()`](/de/docs/Web/API/Summarizer/create_static) für die vollständige Liste der verfügbaren Optionen.

## Überprüfung der Konfigurationsunterstützung

Bevor Sie einen `Summarizer` erstellen, können Sie mithilfe der statischen Methode [`Summarizer.availability()`](/de/docs/Web/API/Summarizer/availability_static) prüfen, ob Ihre gewünschte Konfiguration vom aktuellen Browser unterstützt wird. Zum Beispiel:

```js
const availability = await Summarizer.availability({
  type: "tl;dr",
  length: "short",
  format: "markdown",
  expectedInputLanguages: ["en-US"],
  outputLanguage: "en-US",
});
```

Diese Methode gibt einen enumerierten Wert zurück, der angibt, ob Unterstützung vorhanden ist oder für die angegebenen Optionen verfügbar sein wird:

- `downloadable` bedeutet, dass der Browser die angeforderten Optionen unterstützt, aber zuerst ein KI-Modell oder einige Feinjustierungsdaten für das Modell herunterladen muss.
- `downloading` bedeutet, dass der Browser die angeforderten Optionen unterstützt, aber einen laufenden Download abschließen muss, bevor er fortfahren kann.
- `available` bedeutet, dass der Browser die gegebene Konfiguration ohne neue Downloads unterstützt.
- `unavailable` bedeutet, dass der Browser die gegebene Konfiguration nicht unterstützt.

Wenn ein Download erforderlich ist, wird dieser vom Browser automatisch gestartet, sobald eine `Summarizer`-Instanz mit der Methode `create()` erstellt wird. Sie können den Download-Fortschritt automatisch mit einem [Monitor](#überwachung_des_download-fortschritts) verfolgen.

## Erzeugen einer Zusammenfassung

Wenn Sie festgestellt haben, dass Ihre gewünschte Konfiguration funktioniert und Sie eine `Summarizer`-Instanz erstellt haben, können Sie diese verwenden, um eine Zusammenfassung zu erzeugen, indem Sie die Instanzmethode [`Summarizer.summarize()`](/de/docs/Web/API/Summarizer/summarize) aufrufen und den zu zusammenfassenden Text als Argument übergeben.

```js
const summary = await summarizer.summarize(myTextString);
console.log(summary);
```

Es kann optional ein Optionsobjekt als zweites Argument angenommen werden, das einen `context`-String für diese spezielle Zusammenfassung und ein Abbruch-`signal` (/de/docs/Web/API/AbortSignal) enthält, das es ermöglicht, die Anfrage für die Zusammenfassung abzubrechen (siehe nächsten Abschnitt).

Es gibt eine Streaming-Version der `summarize()`-Methode — [`Summarizer.summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming) — die es Ihnen ermöglicht, die Zusammenfassung als [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurückzugeben:

```js
const stream = summarizer.summarizeStreaming(myTextString);
let summary = "";

for await (const chunk of stream) {
  summary += chunk;
}

console.log("Stream complete");
summaryOutput.textContent = summary;
```

Nachdem eine `Summarizer`-Instanz erstellt wurde, können Sie sie wieder entfernen, indem Sie die Instanzmethode [`Summarizer.destroy()`](/de/docs/Web/API/Summarizer/destroy) aufrufen. Es ist sinnvoll, `Summarizer`-Objekte zu zerstören, wenn sie nicht mehr verwendet werden, da sie erhebliche Ressourcen in ihrer Handhabung binden.

## Abbrechen von Zusammenfassungsvorgängen

Sie können einen ausstehenden `create()`, `summarize()` oder `summarizeStreaming()`-Vorgang mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen:

```js
const controller = new AbortController();
const summary = await summarizer.summarize(myTextString, {
  signal: controller.signal,
});

// ...

controller.abort();
```

## Überwachung des Download-Fortschritts

Wenn das KI-Modell für einen bestimmten Summarizer heruntergeladen wird (`availability()` gibt `downloadable` und `downloading` zurück), ist es hilfreich, dem Benutzer Feedback zu geben, um ihm mitzuteilen, wie lange er warten muss, bis der Vorgang abgeschlossen ist.

Die `Summarizer.create()`-Methode kann eine `monitor`-Eigenschaft akzeptieren, deren Wert eine Callback-Funktion ist, die eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Instanz als Argument annimmt. `CreateMonitor` hat ein [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis verfügbar, das ausgelöst wird, wenn Fortschritte beim Herunterladen des KI-Modells gemacht werden.
Sie können dieses Ereignis verwenden, um Daten zum Ladefortschritt anzuzeigen:

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tl;dr",
  length: "short",
  monitor: (monitor) => {
    monitor.addEventListener("downloadprogress", (e) => {
      console.log(`Downloaded ${Math.floor(e.loaded * 100)}%`);
    });
  },
});
```

## Nutzungskontingente

Einige Implementierungen haben ein Eingabekontingent, das regelt, wie viele Vorgänge eine Website in einem bestimmten Zeitraum anfordern kann. Das Gesamtkontingent kann über die Eigenschaft [`Summarizer.inputQuota`](/de/docs/Web/API/Summarizer/inputQuota) zugegriffen werden, während die Kontingentnutzung für einen bestimmten Zusammenfassungsvorgang mit der Methode [`Summarizer.measureInputUsage()`](/de/docs/Web/API/Summarizer/measureInputUsage) zurückgegeben werden kann:

Zum Beispiel erstellen wir im folgenden Codeblock eine neue `Summarizer`-Instanz mit [`create()`](/de/docs/Web/API/Summarizer/create_static), geben dann das gesamte Eingabekontingent über `inputQuota` zurück und die Kontingentnutzung für eine Zusammenfassung eines bestimmten Textstrings über `measureInputUsage()`.

Wir überprüfen dann, ob die individuelle Eingabeverwendung für diesen String größer ist als das insgesamt verfügbare Kontingent. Wenn ja, werfen wir einen entsprechenden Fehler; wenn nicht, beginnen wir mit der Zusammenfassung des Strings mit [`summarize()`](/de/docs/Web/API/Summarizer/summarize).

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tl;dr",
  length: "short",
});

const totalInputQuota = summarizer.inputQuota;
const inputUsage = await summarizer.measureInputUsage(myTextString);

if (inputUsage > totalInputQuota) {
  throw new Error("Boo, insufficient quota to generate a summary.");
} else {
  console.log("Yay, quota available to generate a summary.");
  const summary = await summarizer.summarize(myTextString);
  // ...
}
```

Wenn Sie versuchen, einen Zusammenfassungsvorgang auszuführen, der das verfügbare Kontingent überschreitet, wird eine `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Vollständiges Beispiel

Schauen wir uns ein vollständiges Beispiel an, das die Summarizer-API in Aktion demonstriert.

### HTML

In unserem Markup definieren wir zunächst ein Eingabe-{{htmlelement("form")}}, das es dem Benutzer ermöglicht, den zu zusammenfassenden Text und die Konfigurationsoptionen festzulegen. Dazu gehört ein {{htmlelement("textarea")}} zum Eingeben des zu zusammenfassenden Textes, ein {{htmlelement("output")}}-Element, um die vom Benutzer festgelegte Zeichenzahl des Textes anzuzeigen, und zwei {{htmlelement("select")}}-Elemente zum Auswählen eines Summarizer- `type`](/de/docs/Web/API/Summarizer/type) und [`length`](/de/docs/Web/API/Summarizer/length).

```html live-sample___summarizer-example
<h2>Input</h2>

<form>
  <div>
    <label for="summary-text">Enter text to summarize:</label>
    <textarea id="summary-text" name="summaryText" rows="6"></textarea>
    <output class="input-count">Input character count: </output>
  </div>
  <div>
    <label for="summary-type">Summary type:</label>
    <select id="summary-type" name="summaryType">
      <option value="headline">Headline</option>
      <option value="key-points">Key points</option>
      <option value="teaser">Teaser</option>
      <option value="tl;dr" selected>tl;dr</option>
    </select>
  </div>
  <div>
    <label for="summary-length">Summary length:</label>
    <select id="summary-length" name="summaryLength">
      <option value="short" selected>Short</option>
      <option value="medium">Medium</option>
      <option value="long">Long</option>
    </select>
  </div>
  <button type="submit">Submit</button>
</form>
```

Die zweite Hälfte unseres Markups enthält ein {{htmlelement("p")}}-Element, um die erzeugte Zusammenfassung anzuzeigen, und ein zweites {{htmlelement("output")}}-Element, um die Zeichenzahl der Zusammenfassung anzuzeigen.

```html live-sample___summarizer-example
<h2>Summary output</h2>

<p class="summary-output"></p>
<output class="output-count">Output summary character count: 0</output>
```

```css hidden live-sample___summarizer-example
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  max-width: 600px;
  margin: 0 auto;
}

form div {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

select,
textarea,
.summary-output {
  padding: 5px;
}

.summary-output {
  min-height: 150px;
  border: 1px solid black;
  width: 100%;
  display: block;
}

.error {
  color: red;
}
```

Beachten Sie, dass wir das CSS für dieses Beispiel nicht zeigen werden, da nichts davon zum Verständnis der Summarizer-API relevant ist.

### JavaScript

In unserem Skript beginnen wir damit, Referenzen zum `<form>`, `<textarea>`, Senden `<button>`, Ausgabe der Zusammenfassung `<p>` und zwei `<output>`-Elementen zu erhalten.

```js live-sample___summarizer-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("button");

const summaryOutput = document.querySelector(".summary-output");
const inputCount = document.querySelector(".input-count");
const outputCount = document.querySelector(".output-count");
```

Als nächstes verwenden wir die Methode [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um zwei Ereignissetups zu überwachen:

- `submit`-Ereignisse am `<form>`-Element; wenn die Schaltfläche zum Senden geklickt wird, wird die Funktion `handleSubmission()` aufgerufen.
- `input`-Ereignisse am `<textarea>`-Element; wenn der aktuelle `<textarea>`-Wert geändert wird, wird die Funktion `updateInputCount()` aufgerufen.

```js live-sample___summarizer-example
form.addEventListener("submit", handleSubmission);
textarea.addEventListener("input", updateInputCount);
```

Die Funktion `updateInputCount()`, die als nächstes definiert wird, setzt den [`textContent`](/de/docs/Web/API/Node/textContent) des ersten `<output>`-Elements auf ein String, der die Länge des `<textarea>`-Werts enthält. Wir definieren auch eine Gegenstückfunktion `displayOutputCount()`, die dasselbe für das zweite `<output>`-Element tut. Diese wird erst am Ende der Funktion `handleSubmission()` aufgerufen, nachdem die Zusammenfassung zurückgegeben wurde.

```js live-sample___summarizer-example
function updateInputCount() {
  inputCount.textContent = `Input character count: ${textarea.value.length}`;
}

function displayOutputCount() {
  outputCount.textContent = `Output summary character count: ${summaryOutput.textContent.length}`;
}
```

Nun definieren wir die Funktion `handleSubmission()` selbst. Nachdem wir die standardmäßige Formularübermittlung verhindert haben, erstellen wir eine neue [`FormData`](/de/docs/Web/API/FormData)-Objektinstanz, die alle unsere `<form>`-Daten Name/Werte-Paare enthält. Wir führen dann einige Datentestungen durch, indem wir überprüfen, ob der `<textarea>`-Inhalt (`summaryText`) leer oder zu kurz ist, um Zyklen zu verschwenden, und geben eine Fehlermeldung in die Zusammenfassungsausgabe `<p>` aus, falls dies der Fall ist.

Vorausgesetzt, der Text hat die Tests bestanden, erstellen wir ein `Summarizer`-Objekt mit der `create()`-Methode, übergeben ihm eine `sharedContext`-Zeichenfolge und die `type` (`summaryType`) und `length` (`summaryLength`)-Werte, die im Formular ausgewählt wurden. Wir setzen dann die Ausgabesumme `<p>` und `<output>` auf "ausstehende" Nachrichten und deaktivieren die `<submit>`-Schaltfläche, während wir den Vorgang `summarize()` ausführen.

Nachdem der `summary`-Wert erfolgreich zurückgegeben wurde, setzen wir ihn als `textContent` des Ausgabe-Summen-`<p>`-Elements, rufen `displayOutputCount()` auf, um die Ausgabe der Zeichenzahl im zweiten `<output>`-Element anzuzeigen, und aktivieren die Submit-`<button>`-Taste wieder.

```js live-sample___summarizer-example
async function handleSubmission(e) {
  e.preventDefault();
  const formData = new FormData(form);

  if (formData.get("summaryText") === "") {
    summaryOutput.innerHTML = `<span class="error">No text entered to summarize!</span>`;
    return;
  } else if (formData.get("summaryText").length < 100) {
    summaryOutput.innerHTML = `<span class="error">I'm not trying to summarize something that short!</span>`;
    return;
  } else {
    summaryOutput.innerHTML = "";
  }

  try {
    const summarizer = await Summarizer.create({
      sharedContext:
        "A general summary to help a user decide if the text is worth reading",
      type: formData.get("summaryType"),
      length: formData.get("summaryLength"),
    });

    summaryOutput.textContent = "...generating summary...";
    outputCount.textContent = "Output summary character count: -";
    submitBtn.disabled = true;

    const summary = await summarizer.summarize(formData.get("summaryText"));

    summaryOutput.textContent = summary;
    displayOutputCount();
    submitBtn.disabled = false;
  } catch (e) {
    summaryOutput.innerHTML = `<span class="error">${e}</span>`;
  }
}
```

Der letzte Schritt besteht darin, die Funktion `updateInputCount()` auf der obersten Ebene des Skripts aufzurufen, um sicherzustellen, dass das erste `<output>`-Element mit der Eingabezählung immer den richtigen Wert beim Laden der Seite anzeigt.

```js live-sample___summarizer-example
updateInputCount();
```

### Ergebnis

Das gerenderte Beispiel sieht so aus:

{{EmbedLiveSample("summarizer-example", , "750px", , , , "summarizer", "allow-forms")}}

Versuchen Sie, einen Textkörper in das Feld "Eingabe" `<textarea>` einzugeben und dann die Senden-Schaltfläche zu drücken, um eine KI-generierte Zusammenfassung zu erstellen. Der Text von Ihrer Lieblings-Wikipedia-Seite wäre ideal. Versuchen Sie, mehrere Zusammenfassungen mit verschiedenen Optionskombinationen zu erstellen, um zu sehen, wie sie die Ausgabe beeinflussen.

## Siehe auch

- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
