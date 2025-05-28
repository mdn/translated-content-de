---
title: Verwendung der Summarizer-API
slug: Web/API/Summarizer_API/Using
l10n:
  sourceCommit: 3e4f9ff802c6393edf7c17ff0d9c30d0de79663e
---

{{DefaultAPISidebar("Summarizer API")}}

Die [Summarizer-API](/de/docs/Web/API/Summarizer_API) bietet einen asynchronen ({{jsxref("Promise")}}-basierten) Mechanismus für eine Website, um einen Textkörper in das interne AI-Modell des Browsers einzuspeisen und eine Zusammenfassung des Textes basierend auf angegebenen Optionen anzufordern. Dieser Artikel erklärt, wie man die Grundlagen der Summarizer-API verwendet.

## Erstellung eines Summarizers

Die gesamte Funktionalität der Summarizer-API wird über ein einziges Interface bereitgestellt — [`Summarizer`](/de/docs/Web/API/Summarizer).

Der erste Schritt, um das AI-Modell des Browsers dazu zu bringen, eine Zusammenfassung auszugeben, ist die Erstellung einer Instanz des `Summarizer`-Objekts. Dies geschieht mit der statischen Methode [`Summarizer.create()`](/de/docs/Web/API/Summarizer/create_static), die ein Optionsobjekt als Argument entgegennimmt, das Optionen dafür angibt, welche Art von Zusammenfassung erstellt werden soll:

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tldr",
  length: "short",
  format: "markdown",
  expectedInputLanguages: ["en-US"],
  outputLanguage: "en-US",
});
```

Die Option [`sharedContext`](/de/docs/Web/API/Summarizer/sharedContext) stellt einen String bereit, der dem AI-Modell hilft, eine passendere Zusammenfassung für den Kontext zu schreiben, in dem der Text verwendet wird, während der [`type`](/de/docs/Web/API/Summarizer/type) angibt, welche Art von Zusammenfassung gewünscht wird, wie z.B. Schlüsselpunkte oder eine "tldr"-Zusammenfassung.

Es wird auch die gewünschte [`length`](/de/docs/Web/API/Summarizer/length), das Ausgabe[`format`](/de/docs/Web/API/Summarizer/format), die [`expectedInputLanguages`](/de/docs/Web/API/Summarizer/expectedInputLanguages) und die gewünschte [`outputLanguage`](/de/docs/Web/API/Summarizer/outputLanguage) angegeben. Wenn die Eingabe- und Ausgabesprachen nicht spezifiziert sind, wird die Sprache des Eingabetextes automatisch erkannt, und die Ausgabesprache entspricht der Eingabesprache.

Wenn das AI-Modell des Browsers die angegebenen Eingabe- oder Ausgabesprachen nicht unterstützt, wird ein Fehler ausgelöst.

> [!NOTE]
> Siehe die [`create()`](/de/docs/Web/API/Summarizer/create_static)-Referenzseite für die vollständige Liste der verfügbaren Optionen.

## Überprüfung der Konfigurationsunterstützung

Bevor Sie einen `Summarizer` erstellen, können Sie mit der statischen Methode [`Summarizer.availability()`](/de/docs/Web/API/Summarizer/availability_static) überprüfen, ob Ihre gewünschte Konfiguration vom aktuellen Browser unterstützt wird. Zum Beispiel:

```js
const availability = await Summarizer.availability({
  type: "tldr",
  length: "short",
  format: "markdown",
  expectedInputLanguages: ["en-US"],
  outputLanguage: "en-US",
});
```

Diese Methode gibt einen Enumerationswert zurück, der anzeigt, ob die Unterstützung für die angegebene Optionen verfügbar ist oder sein wird:

- `downloadable` bedeutet, dass der Browser die angeforderten Optionen unterstützt, jedoch zuerst ein AI-Modell oder einige Fine-Tuning-Daten für das Modell heruntergeladen werden müssen.
- `downloading` bedeutet, dass der Browser die angeforderten Optionen unterstützt, aber einen laufenden Download abschließen muss, bevor er fortfahren kann.
- `available` bedeutet, dass der Browser die gegebene Konfiguration unterstützt, ohne dass neue Downloads erforderlich sind.
- `unavailable` bedeutet, dass der Browser die gegebene Konfiguration nicht unterstützt.

Wenn ein Download erforderlich ist, wird er automatisch vom Browser gestartet, sobald eine `Summarizer`-Instanz mit der `create()`-Methode erstellt wird. Sie können den Fortschritt des Downloads automatisch mit einem [Monitor](#überwachung_des_download-fortschritts) verfolgen.

## Erstellung einer Zusammenfassung

Wenn Sie festgestellt haben, dass Ihre gewünschte Konfiguration funktioniert und Sie eine `Summarizer`-Instanz erstellt haben, können Sie diese verwenden, um eine Zusammenfassung zu erstellen, indem Sie die [`Summarizer.summarize()`](/de/docs/Web/API/Summarizer/summarize)-Instanzmethode aufrufen, wobei Sie den Text, der zusammengefasst werden soll, als Argument übergeben.

```js
const summary = await summarizer.summarize(myTextString);
console.log(summary);
```

Es kann auch optional ein Optionsobjekt als zweites Argument akzeptiert werden, das einen spezifischen `context`-String für diese Zusammenfassung und ein Abbruch [`signal`](/de/docs/Web/API/AbortSignal) akzeptiert, das es ermöglicht, die Anforderung der Zusammenfassung abzubrechen (siehe nächster Abschnitt).

Es gibt eine Streaming-Version der `summarize()`-Methode — [`Summarizer.summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming) — die es ermöglicht, die Zusammenfassung als [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurückzugeben:

```js
const stream = summarizer.summarizeStreaming(myTextString);
let summary = "";

for await (const chunk of stream) {
  summary += chunk;
}

console.log("Stream complete");
summaryOutput.textContent = summary;
```

Nachdem eine `Summarizer`-Instanz erstellt wurde, können Sie sie wieder entfernen, indem Sie die [`Summarizer.destroy()`](/de/docs/Web/API/Summarizer/destroy)-Instanzmethode verwenden. Es ist sinnvoll, `Summarizer`-Objekte zu zerstören, wenn sie nicht mehr verwendet werden, da sie erhebliche Ressourcen in ihrer Handhabung binden.

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

Wenn das AI-Modell für einen bestimmten Summarizer heruntergeladen wird (`availability()` gibt `downloadable` und `downloading` zurück), ist es hilfreich, dem Benutzer eine Rückmeldung zu geben, um ihm zu sagen, wie lange er warten muss, bis der Vorgang abgeschlossen ist.

Die `Summarizer.create()`-Methode kann eine `monitor`-Eigenschaft akzeptieren, deren Wert eine Callback-Funktion ist, die eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Instanz als Argument nimmt. `CreateMonitor` verfügt über ein [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis, das ausgelöst wird, wenn Fortschritte beim Herunterladen des AI-Modells gemacht werden.
Sie können dieses Ereignis verwenden, um Ladefortschrittsdaten zu veröffentlichen:

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tldr",
  length: "short",
  monitor(monitor) {
    monitor.addEventListener("downloadprogress", (e) => {
      console.log(`Downloaded ${Math.floor(e.loaded * 100)}%`);
    });
  },
});
```

## Nutzungskontingente

Einige Implementierungen haben ein Eingabekontingent, das regelt, wie viele Vorgänge eine Website in einem bestimmten Zeitraum anfordern kann. Das Gesamtkontingent kann über die [`Summarizer.inputQuota`](/de/docs/Web/API/Summarizer/inputQuota)-Eigenschaft abgerufen werden, während die Nutzung des Kontingents für eine bestimmte Zusammenfassungsoperation mit der [`Summarizer.measureInputUsage()`](/de/docs/Web/API/Summarizer/measureInputUsage)-Methode zurückgegeben werden kann:

Zum Beispiel erstellen wir im unten stehenden Codeausschnitt eine neue `Summarizer`-Instanz mit [`create()`](/de/docs/Web/API/Summarizer/create_static), dann geben wir das gesamte Eingabekontingent über `inputQuota` und die Nutzung des Eingabekontingents für das Zusammenfassen eines bestimmten Text-Strings über `measureInputUsage()` zurück.

Wir testen dann, ob die individuelle Eingabenutzung für diesen String größer ist als das insgesamt verfügbare Kontingent. Wenn ja, werfen wir einen entsprechenden Fehler; wenn nicht, beginnen wir mit dem Zusammenfassen des Strings mit [`summarize()`](/de/docs/Web/API/Summarizer/summarize).

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tldr",
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

Wenn Sie versuchen, eine Zusammenfassungsoperation auszuführen, die das verfügbare Kontingent überschreitet, wird eine `QuotaExceededError`-[`DOMException`](/de/docs/Web/API/DOMException) geworfen.

## Komplettes Beispiel

Schauen wir uns ein komplettes Beispiel an, das die Summarizer-API in Aktion zeigt.

### HTML

In unserem Markup definieren wir zuerst ein Eingabe{{htmlelement("form")}}, das dem Benutzer ermöglicht, den Text festzulegen, der zusammengefasst werden soll, und Konfigurationsoptionen. Dazu gehören ein {{htmlelement("textarea")}} zum Eingeben des zusammenzufassenden Textes, ein {{htmlelement("output")}}-Element, um die Zeichenanzahl des vom Benutzer festgelegten Textes anzuzeigen, und zwei {{htmlelement("select")}}-Elemente zur Auswahl eines Summarizer-`type`s und der `length`.

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
      <option value="tldr" selected>tldr</option>
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

Die zweite Hälfte unseres Markup enthält ein {{htmlelement("p")}}-Element, um die generierte Zusammenfassung anzuzeigen, und ein zweites {{htmlelement("output")}}-Element, um die Zeichenanzahl der Zusammenfassung anzuzeigen.

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

Beachten Sie, dass wir das CSS für dieses Beispiel nicht anzeigen werden, da nichts davon relevant für das Verständnis der Summarizer-API ist.

### JavaScript

In unserem Skript beginnen wir damit, Referenzen zum `<form>`, `<textarea>`, zum Senden-`<button>`, zur Zusammenfassungsausgabe-`<p>` und zu zwei `<output>`-Elementen zu erstellen.

```js live-sample___summarizer-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("button");

const summaryOutput = document.querySelector(".summary-output");
const inputCount = document.querySelector(".input-count");
const outputCount = document.querySelector(".output-count");
```

Als nächstes verwenden wir die Methode [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um zwei Sätze von Ereignissen zu hören:

- `submit`-Ereignisse auf dem `<form>`-Element; wenn der Senden-Button geklickt wird, wird die Funktion `handleSubmission()` aufgerufen.
- `input`-Ereignisse auf dem `<textarea>`-Element; wenn der aktuelle `<textarea>`-Wert geändert wird, wird die Funktion `updateInputCount()` aufgerufen.

```js live-sample___summarizer-example
form.addEventListener("submit", handleSubmission);
textarea.addEventListener("input", updateInputCount);
```

Die als nächstes definierte Funktion `updateInputCount()` setzt den [`textContent`](/de/docs/Web/API/Node/textContent) des ersten `<output>`-Elements auf einen String, der die Länge des `<textarea>`-Werts enthält. Wir definieren auch eine Gegenstückfunktion `displayOutputCount()`, die dasselbe für das zweite `<output>`-Element tut. Dies wird erst gegen Ende der `handleSubmission()`-Funktion aufgerufen, nachdem die Zusammenfassung zurückgegeben wurde.

```js live-sample___summarizer-example
function updateInputCount() {
  inputCount.textContent = `Input character count: ${textarea.value.length}`;
}

function displayOutputCount() {
  outputCount.textContent = `Output summary character count: ${summaryOutput.textContent.length}`;
}
```

Jetzt definieren wir die `handleSubmission()`-Funktion selbst. Nachdem das Standardformulardatum verhindert wurde, erstellen wir einen neuen [`FormData`](/de/docs/Web/API/FormData)-Objektinstanz, die all unsere `<form>`-Daten in Form von Namen/Wert-Paaren enthält. Dann führen wir einige Datenvalidierungen durch, bei denen überprüft wird, ob der `<textarea>`-Inhalt (`summaryText`) leer ist oder zu kurz, um Zyklen zu verschwenden, und eine Fehlermeldung im Zusammenfassungsausgabe-`<p>` gedruckt wird, falls dies so ist.

Hat der Text die Tests bestanden, erstellen wir ein `Summarizer`-Objekt mit der `create()`-Methode, indem wir ihr einen `sharedContext`-String und die im Formular ausgewählten Werte für `type` (`summaryType`) und `length` (`summaryLength`) übergeben. Dann setzen wir die Ausgabesummary im `<p>` und `<output>` auf "ausstehende" Nachrichten und deaktivieren den `<submit>`-Button, während wir die `summarize()`-Operation ausführen.

Nachdem der `summary`-Wert erfolgreich zurückgegeben wurde, setzen wir ihn als `textContent` des Ausgabesummary-`<p>`-Elements, rufen `displayOutputCount()` auf, um die Zahl der Ausgabenzeichen im zweiten `<output>`-Element anzuzeigen, und aktivieren den Senden-`<button>` wieder.

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
  }
  summaryOutput.innerHTML = "";

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

Der letzte Schritt besteht darin, die Funktion `updateInputCount()` auf der obersten Ebene des Skripts aufzurufen, um sicherzustellen, dass das erste `<output>`-Element, das die Eingabeanzahl enthält, immer den richtigen Wert beim Laden der Seite anzeigt.

```js live-sample___summarizer-example
updateInputCount();
```

### Ergebnis

Das gerenderte Beispiel sieht folgendermaßen aus:

{{EmbedLiveSample("summarizer-example", , "750px", , , , "summarizer", "allow-forms")}}

Versuchen Sie, einen Textkörper in das "Eingabe"-`<textarea>` einzugeben und dann die Schaltfläche zum Abschicken zu drücken, um eine AI-generierte Zusammenfassung zu erzeugen. Der Text Ihrer Lieblings-Wikipedia-Seite wäre ideal. Versuchen Sie, mehrere Zusammenfassungen mit unterschiedlichen Kombinationen von Optionen zu erzeugen, um zu sehen, wie sie die Ausgabe beeinflussen.

## Siehe auch

- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
