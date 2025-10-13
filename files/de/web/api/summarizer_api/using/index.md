---
title: Verwendung der Summarizer-API
slug: Web/API/Summarizer_API/Using
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{DefaultAPISidebar("Summarizer API")}}

Die [Summarizer-API](/de/docs/Web/API/Summarizer_API) bietet einen asynchronen, auf einem ({{jsxref("Promise")}}) basierenden Mechanismus, um einer Website zu ermöglichen, einen Textkörper in das interne KI-Modell des Browsers einzuspeisen und zu verlangen, dass eine Zusammenfassung des Textes basierend auf angegebenen Optionen zurückgegeben wird. Dieser Artikel erklärt, wie man die Grundlagen der Summarizer-API verwendet.

## Erstellen eines Summarizers

Die gesamte Funktionalität der Summarizer-API wird über ein einziges Interface bereitgestellt — [`Summarizer`](/de/docs/Web/API/Summarizer).

Der erste Schritt, um das AI-Modell des Browsers dazu zu bringen, eine Zusammenfassung auszugeben, besteht darin, eine `Summarizer`-Objektinstanz zu erstellen. Dies erfolgt mithilfe der statischen Methode [`Summarizer.create()`](/de/docs/Web/API/Summarizer/create_static), die ein Optionsobjekt als Argument entgegennimmt, das die Optionen für die gewünschte Art der Zusammenfassung angibt:

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

Die [`sharedContext`](/de/docs/Web/API/Summarizer/sharedContext) Option stellt einen String bereit, der dem KI-Modell hilft, eine passendere Zusammenfassung für den Kontext zu erstellen, in dem der Text verwendet wird, während der [`type`](/de/docs/Web/API/Summarizer/type) angibt, welche Art von Zusammenfassung Sie bereitstellen möchten, wie z.B. wichtige Stichpunkte oder eine "tldr"-Zusammenfassung.

Wir geben auch die gewünschte [`length`](/de/docs/Web/API/Summarizer/length), das Ausgabe-[`format`](/de/docs/Web/API/Summarizer/format), die [`expectedInputLanguages`](/de/docs/Web/API/Summarizer/expectedInputLanguages) und die gewünschte [`outputLanguage`](/de/docs/Web/API/Summarizer/outputLanguage) an. Wenn die Eingabe- und Ausgabesprachen nicht angegeben sind, wird die Sprache des Eingabetextes automatisch erkannt, und die Ausgabesprache wird der Eingabesprache entsprechen.

Wenn das KI-Modell des Browsers die angegebenen Eingabe- oder Ausgabesprachen nicht unterstützt, wird ein Fehler ausgelöst.

> [!NOTE]
> Siehe die [`create()`](/de/docs/Web/API/Summarizer/create_static) Referenzseite für die vollständige Liste der verfügbaren Optionen.

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

Diese Methode gibt einen enumerierten Wert zurück, der angibt, ob Unterstützung für die angegebenen Optionen vorhanden ist oder verfügbar sein wird:

- `downloadable` bedeutet, dass der Browser die angeforderten Optionen unterstützt, aber zuerst ein KI-Modell oder einige Feinabstimmungsdaten für das Modell herunterladen muss.
- `downloading` bedeutet, dass der Browser die angeforderten Optionen unterstützt, aber einen laufenden Download abschließen muss, bevor er fortfahren kann.
- `available` bedeutet, dass der Browser die gegebene Konfiguration unterstützt, ohne dass neue Downloads erforderlich sind.
- `unavailable` bedeutet, dass der Browser die gegebene Konfiguration nicht unterstützt.

Wenn ein Download erforderlich ist, wird er automatisch vom Browser gestartet, sobald eine `Summarizer`-Instanz mit der Methode `create()` erstellt wird. Sie können den Downloadfortschritt automatisch mit einem [Überwachungsmechanismus](#überwachung_des_downloadfortschritts) verfolgen.

## Generieren einer Zusammenfassung

Wenn Sie festgestellt haben, dass Ihre gewünschte Konfiguration funktioniert und Sie eine `Summarizer`-Instanz erstellt haben, können Sie diese verwenden, um eine Zusammenfassung zu generieren, indem Sie die Instanzmethode [`Summarizer.summarize()`](/de/docs/Web/API/Summarizer/summarize) aufrufen und ihr den zusammenzufassenden Text als Argument übergeben.

```js
const summary = await summarizer.summarize(myTextString);
console.log(summary);
```

Es akzeptiert optional ein Optionsobjekt als zweites Argument, das einen `context`-String spezifisch für diese Zusammenfassung und ein Abbruch-[`signal`](/de/docs/Web/API/AbortSignal) ermöglicht, um die Anfrage zur Zusammenfassung abzubrechen (siehe nächster Abschnitt).

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

Nachdem eine `Summarizer`-Instanz erstellt wurde, können Sie diese wieder entfernen, indem Sie die Instanzmethode [`Summarizer.destroy()`](/de/docs/Web/API/Summarizer/destroy) verwenden. Es ist sinnvoll, `Summarizer`-Objekte zu löschen, wenn sie nicht mehr verwendet werden, da sie erhebliche Ressourcen in ihrer Verarbeitung binden.

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

## Überwachung des Downloadfortschritts

Wenn das KI-Modell für einen bestimmten Summarizer heruntergeladen wird (`availability()` gibt `downloadable` und `downloading` zurück), ist es hilfreich, dem Benutzer Feedback zu geben, um ihm zu sagen, wie lange er warten muss, bevor der Vorgang abgeschlossen ist.

Die `Summarizer.create()` Methode kann eine `monitor`-Eigenschaft akzeptieren, deren Wert eine Callback-Funktion ist, die eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Instanz als Argument nimmt. `CreateMonitor` hat ein [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis verfügbar, das ausgelöst wird, wenn Fortschritte beim Herunterladen des KI-Modells gemacht werden.
Sie können dieses Ereignis nutzen, um Ladefortschrittsdaten sichtbar zu machen:

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

## Nutzungsquoten

Einige Implementierungen haben ein Eingabequotum, das regelt, wie viele Operationen eine Website innerhalb eines bestimmten Zeitraums anfordern kann. Das Gesamtquotum kann über die [`Summarizer.inputQuota`](/de/docs/Web/API/Summarizer/inputQuota)-Eigenschaft abgerufen werden, während die Quotennutzung für eine bestimmte Zusammenfassungsoperation mit der Methode [`Summarizer.measureInputUsage()`](/de/docs/Web/API/Summarizer/measureInputUsage) zurückgegeben werden kann:

Zum Beispiel erstellen wir im folgenden Code-Snippet eine neue `Summarizer`-Instanz mit [`create()`](/de/docs/Web/API/Summarizer/create_static), dann geben wir das gesamte Eingabequotum über `inputQuota` und die Eingabequotennutzung für eine bestimmte Textzusammenfassung über `measureInputUsage()` zurück.

Dann prüfen wir, ob die individuelle Eingabenutzung für diesen String größer als das insgesamt verfügbare Quota ist. Wenn ja, werfen wir einen entsprechenden Fehler; wenn nicht, beginnen wir mit der Zusammenfassung des Strings mit [`summarize()`](/de/docs/Web/API/Summarizer/summarize).

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

Wenn Sie versuchen, eine Zusammenfassungsoperation auszuführen, die das verfügbare Quota überschreitet, wird ein `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Vollständiges Beispiel

Schauen wir uns ein vollständiges Beispiel an, das die Summarizer-API in Aktion zeigt.

### HTML

In unserem Markup definieren wir zunächst ein Eingabe-{{htmlelement("form")}}, das dem Benutzer erlaubt, den zu zusammenfassenden Text und die Konfigurationsoptionen festzulegen. Dies beinhaltet ein {{htmlelement("textarea")}} zum Eingeben des zusammenzufassenden Textes, ein {{htmlelement("output")}}-Element, um die Zeichenanzahl des vom Benutzer festgelegten Textes anzuzeigen, und zwei {{htmlelement("select")}}-Elemente zur Auswahl eines Summarizer-[`type`](/de/docs/Web/API/Summarizer/type) und [`length`](/de/docs/Web/API/Summarizer/length).

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

Die zweite Hälfte unseres Markups enthält ein {{htmlelement("p")}}-Element zur Anzeige der generierten Zusammenfassung und ein zweites {{htmlelement("output")}}-Element zur Anzeige der Zeichenanzahl der Zusammenfassung.

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
  font-family: "Helvetica", "Arial", sans-serif;
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

Beachten Sie, dass wir das CSS für dieses Beispiel nicht zeigen werden, da nichts davon für das Verständnis der Summarizer-API relevant ist.

### JavaScript

In unserem Skript beginnen wir damit, Referenzen zu `<form>`, `<textarea>`, dem Submit-`<button>`, dem Zusammenfassungs-Ausgabe-`<p>` und den zwei `<output>`-Elementen zu erhalten.

```js live-sample___summarizer-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("button");

const summaryOutput = document.querySelector(".summary-output");
const inputCount = document.querySelector(".input-count");
const outputCount = document.querySelector(".output-count");
```

Als Nächstes verwenden wir die Methode [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um zwei Ereignisset auf zu hören:

- `submit`-Ereignisse auf dem `<form>`-Element; wenn die Schaltfläche zum Senden angeklickt wird, wird die Funktion `handleSubmission()` aufgerufen.
- `input`-Ereignisse auf dem `<textarea>`-Element; wenn der aktuelle `<textarea>`-Wert geändert wird, wird die Funktion `updateInputCount()` aufgerufen.

```js live-sample___summarizer-example
form.addEventListener("submit", handleSubmission);
textarea.addEventListener("input", updateInputCount);
```

Die als nächstes definierte Funktion `updateInputCount()` setzt den [`textContent`](/de/docs/Web/API/Node/textContent) des ersten `<output>`-Elements auf einen String, der die Länge des `<textarea>`-Werts enthält. Wir definieren auch eine entsprechende `displayOutputCount()`-Funktion, die dasselbe für das zweite `<output>`-Element tut. Diese wird erst am Ende der `handleSubmission()`-Funktion aufgerufen, nachdem die Zusammenfassung zurückgegeben wurde.

```js live-sample___summarizer-example
function updateInputCount() {
  inputCount.textContent = `Input character count: ${textarea.value.length}`;
}

function displayOutputCount() {
  outputCount.textContent = `Output summary character count: ${summaryOutput.textContent.length}`;
}
```

Nun definieren wir die Funktion `handleSubmission()` selbst. Nachdem wir das standardmäßige Formular-Submit verhindert haben, erstellen wir eine neue [`FormData`](/de/docs/Web/API/FormData)-Objektinstanz, die alle unsere `<form>`-Daten Name/Wert-Paare enthält. Dann führen wir einige Datenvalidierungstests durch, überprüfen, ob der `<textarea>`-Inhalt (`summaryText`) leer oder zu kurz ist, um die Zyklen zu verschwenden, und geben im Falle eines Fehler eine Fehlermeldung innerhalb des Zusammenfassungs-Ausgabe-`<p>` aus.

Vorausgesetzt, der Text hat die Tests bestanden, erstellen wir ein `Summarizer`-Objekt mit der `create()`-Methode, übergeben einen `sharedContext`-String und die in dem Formular ausgewählten Werte `type` (`summaryType`) und `length` (`summaryLength`). Dann setzen wir die Ausgabe eines Zusammenfassungs-`<p>` und `<output>` auf "ausstehend"-Meldungen und deaktivieren den `<submit>`-Button, während wir den `summarize()`-Vorgang ausführen.

Nachdem der `summary`-Wert erfolgreich zurückgegeben wurde, setzen wir diesen als `textContent` des Ausgabe-`<p>`-Elements, rufen `displayOutputCount()` auf, um die Anzahl der Ausgabezeichen im zweiten `<output>`-Element anzuzeigen, und reaktivieren den Sende-`<button>`.

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

Der letzte Schritt besteht darin, die `updateInputCount()`-Funktion auf oberster Ebene des Skripts aufzurufen, um sicherzustellen, dass das erste `<output>`-Element, das die Eingabemenge enthält, beim Laden der Seite immer den richtigen Wert anzeigt.

```js live-sample___summarizer-example
updateInputCount();
```

### Ergebnis

Das gerenderte Beispiel sieht so aus:

{{EmbedLiveSample("summarizer-example", , "750px", , , , "summarizer", "allow-forms")}}

Versuchen Sie, einen Textkörper in das "Eingabe"-`<textarea>` einzugeben und dann die Schaltfläche Senden zu drücken, um eine KI-generierte Zusammenfassung zu erstellen. Der Text Ihrer bevorzugten Wikipedia-Seite wäre ideal. Versuchen Sie, mehrere Zusammenfassungen mit verschiedenen Optionskombinationen zu generieren, um zu sehen, wie sie das Ergebnis beeinflussen.

## Siehe auch

- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
