---
title: Verwendung der Summarizer-API
slug: Web/API/Summarizer_API/Using
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

{{DefaultAPISidebar("Summarizer API")}}

Die [Summarizer API](/de/docs/Web/API/Summarizer_API) bietet einen asynchronen ({{jsxref("Promise")}}-basierten) Mechanismus für eine Website, um einen Text in das interne KI-Modell des Browsers einzuspeisen und zu verlangen, dass es eine Zusammenfassung des Textes basierend auf bestimmten Optionen zurückgibt. Dieser Artikel erklärt, wie man die Grundlagen der Summarizer-API verwendet.

## Erstellen eines Summarizers

Die gesamte Funktionalität der Summarizer-API wird über ein einziges Interface aufgerufen — [`Summarizer`](/de/docs/Web/API/Summarizer).

Der erste Schritt, um das KI-Modell des Browsers dazu zu bringen, eine Zusammenfassung auszugeben, besteht darin, eine `Summarizer`-Objektinstanz zu erstellen. Dies geschieht mit der statischen Methode [`Summarizer.create()`](/de/docs/Web/API/Summarizer/create_static), die ein Optionsobjekt als Argument entgegennimmt, das Optionen für die Art der gewünschten Zusammenfassung festlegt:

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

Die Option [`sharedContext`](/de/docs/Web/API/Summarizer/sharedContext) liefert einen String, der dem KI-Modell hilft, eine besser geeignete Zusammenfassung für den Kontext zu schreiben, in dem der Text verwendet wird, während der [`type`](/de/docs/Web/API/Summarizer/type) angibt, welche Art von Zusammenfassung Sie bereitstellen möchten, wie z.B. Hauptpunkte oder eine "tldr"-Zusammenfassung.

Wir spezifizieren auch die gewünschte [`length`](/de/docs/Web/API/Summarizer/length), das Ausgabe-[`format`](/de/docs/Web/API/Summarizer/format), die [`expectedInputLanguages`](/de/docs/Web/API/Summarizer/expectedInputLanguages) und die gewünschte [`outputLanguage`](/de/docs/Web/API/Summarizer/outputLanguage). Wenn die Eingabe- und Ausgabesprachen nicht spezifiziert sind, wird die Sprache des Eingangstextes automatisch erkannt, und die Ausgabesprache wird der Eingangssprache entsprechen.

Wenn das KI-Modell des Browsers die angegebenen Ein- oder Ausgabesprachen nicht unterstützt, wird ein Fehler ausgelöst.

> [!NOTE]
> Siehe die Referenzseite zu [`create()`](/de/docs/Web/API/Summarizer/create_static) für die vollständige Liste der verfügbaren Optionen.

## Überprüfen der Konfigurationsunterstützung

Bevor Sie einen `Summarizer` erstellen, können Sie überprüfen, ob Ihre gewünschte Konfiguration vom aktuellen Browser unterstützt wird, indem Sie die statische Methode [`Summarizer.availability()`](/de/docs/Web/API/Summarizer/availability_static) verwenden. Zum Beispiel:

```js
const availability = await Summarizer.availability({
  type: "tldr",
  length: "short",
  format: "markdown",
  expectedInputLanguages: ["en-US"],
  outputLanguage: "en-US",
});
```

Diese Methode gibt einen enumerierten Wert zurück, der angibt, ob Unterstützung für den angegebenen Satz von Optionen vorhanden ist oder nicht:

- `downloadable` bedeutet, dass der Browser die angeforderten Optionen unterstützt, aber zuerst ein KI-Modell oder einige Feinabstimmungsdaten für das Modell herunterladen muss.
- `downloading` bedeutet, dass der Browser die angeforderten Optionen unterstützt, aber einen laufenden Download abschließen muss, bevor er fortfahren kann.
- `available` bedeutet, dass der Browser die gegebene Konfiguration unterstützt, ohne dass neue Downloads erforderlich sind.
- `unavailable` bedeutet, dass der Browser die gegebene Konfiguration nicht unterstützt.

Wenn ein Download erforderlich ist, wird er automatisch vom Browser gestartet, sobald eine `Summarizer`-Instanz mit der `create()`-Methode erstellt wird. Sie können den Download-Fortschritt automatisch mit einem [Monitor](#überwachung_des_download-fortschritts) verfolgen.

## Generieren einer Zusammenfassung

Nachdem Sie festgestellt haben, dass Ihre gewünschte Konfiguration funktioniert, und Sie eine `Summarizer`-Instanz erstellt haben, können Sie sie verwenden, um eine Zusammenfassung zu generieren, indem Sie die Instanzmethode [`Summarizer.summarize()`](/de/docs/Web/API/Summarizer/summarize) aufrufen und den zu zusammenfassenden Text als Argument übergeben.

```js
const summary = await summarizer.summarize(myTextString);
console.log(summary);
```

Es akzeptiert auch optional ein options-Objekt als zweites Argument, das einen spezifischen `context`-String für diese Zusammenfassung und ein Abbruchs-[`signal`](/de/docs/Web/API/AbortSignal) akzeptiert, das es erlaubt, die Anfrage zur Zusammenfassung abzubrechen (siehe nächsten Abschnitt).

Es gibt eine Streaming-Version der `summarize()`-Methode, die [`Summarizer.summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming), die es Ihnen erlaubt, die Zusammenfassung als [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurückzugeben:

```js
const stream = summarizer.summarizeStreaming(myTextString);
let summary = "";

for await (const chunk of stream) {
  summary += chunk;
}

console.log("Stream complete");
summaryOutput.textContent = summary;
```

## Abbrechen von Operationen und Zerstören von Instanzen

Sie können eine ausstehende `create()`, `summarize()` oder `summarizeStreaming()`-Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen, wobei das assoziierte [`AbortSignal`](/de/docs/Web/API/AbortSignal) als `signal`-Eigenschaftswert innerhalb des Methoden-Optionsobjekts enthalten ist. Zum Beispiel, das Abbrechen einer `Summarizer.create()`-Operation würde so aussehen:

```js
const controller = new AbortController();
const summary = await summarizer.summarize(myTextString, {
  signal: controller.signal,
});

// ...

controller.abort();
```

Nachdem eine `Summarizer`-Instanz erstellt wurde, können Sie ihre zugewiesenen Ressourcen freigeben und weitere Aktivitäten stoppen, indem Sie ihre [`Summarizer.destroy()`](/de/docs/Web/API/Summarizer/destroy) Methode aufrufen. Es wird empfohlen, dies zu tun, nachdem Sie das `Summarizer`-Objekt nicht mehr benötigen, da es viele Ressourcen verbrauchen kann.

```js
summarizer.destroy();
```

Wenn ein `create()`-Aufruf einen zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) hat und Sie seine [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) Methode nach einem erfolgreich durchgeführten `create()`-Aufruf aufrufen, hat dies denselben Effekt wie das Aufrufen von `destroy()` auf dem resultierenden `Summarizer`-Objekt.

## Überwachung des Download-Fortschritts

Wenn das KI-Modell für einen bestimmten Summarizer heruntergeladen wird (`availability()` gibt `downloadable` und `downloading` zurück), ist es hilfreich, dem Benutzer ein Feedback zu geben, wie lange er warten muss, bis der Vorgang abgeschlossen ist.

Die `Summarizer.create()`-Methode kann eine `monitor`-Eigenschaft akzeptieren, bei der es sich um eine Callback-Funktion handelt, die eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) Instanz als Argument übernimmt. `CreateMonitor` hat ein [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Event, das ausgelöst wird, wenn Fortschritte beim Herunterladen des KI-Modells gemacht werden.
Sie können dieses Ereignis nutzen, um Daten zum Ladefortschritt anzuzeigen:

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

Einige Implementierungen haben ein Eingabelimit, das bestimmt, wie viele Operationen eine Website in einem bestimmten Zeitraum anfordern kann. Das Gesamtkontingent kann über die [`Summarizer.inputQuota`](/de/docs/Web/API/Summarizer/inputQuota)-Eigenschaft abgerufen werden, während die Kontingentnutzung für eine bestimmte Zusammenfassungsoperation mit der [`Summarizer.measureInputUsage()`](/de/docs/Web/API/Summarizer/measureInputUsage)-Methode zurückgegeben werden kann:

Zum Beispiel erstellen wir im folgenden Codeabschnitt eine neue `Summarizer`-Instanz mit [`create()`](/de/docs/Web/API/Summarizer/create_static), geben dann das gesamte Eingabekontingent über `inputQuota` zurück und die Eingabekontingentnutzung für das Zusammenfassen einer bestimmten Textzeichenfolge über `measureInputUsage()`.

Wir prüfen dann, ob die individuelle Eingabenutzung für diese Zeichenfolge größer ist als das insgesamt verfügbare Kontingent. Wenn ja, werfen wir einen entsprechenden Fehler; wenn nicht, beginnen wir mit dem Zusammenfassen der Zeichenfolge mit [`summarize()`](/de/docs/Web/API/Summarizer/summarize).

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

Wenn Sie versuchen, eine Zusammenfassungsoperation auszuführen, die das verfügbare Kontingent überschreitet, wird ein `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Komplettes Beispiel

Werfen wir einen Blick auf ein vollständiges Beispiel, das die Summarizer-API in Aktion demonstriert.

### HTML

In unserem Markup definieren wir zuerst ein Eingabe-{{htmlelement("form")}}, das dem Benutzer erlaubt, den zu zusammenfassenden Text und die Konfigurationsoptionen festzulegen. Dazu gehört ein {{htmlelement("textarea")}} zum Eingeben des zusammenzufassenden Textes, ein {{htmlelement("output")}}-Element, um die vom Benutzer festgelegte Zeichenzahl des Textes anzuzeigen, und zwei {{htmlelement("select")}}-Elemente zur Auswahl eines Summarizer-typs [`type`](/de/docs/Web/API/Summarizer/type) und der [`length`](/de/docs/Web/API/Summarizer/length).

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

Die zweite Hälfte unseres Markups umfasst ein {{htmlelement("p")}}-Element zur Darstellung der generierten Zusammenfassung und ein zweites {{htmlelement("output")}}-Element zur Anzeige der Zeichenanzahl der Zusammenfassung.

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

Beachten Sie, dass wir das CSS für dieses Beispiel nicht zeigen werden, da es nicht relevant für das Verständnis der Summarizer-API ist.

### JavaScript

In unserem Skript beginnen wir, indem wir Referenzen zu `<form>`, `<textarea>`, Submit-`<button>`, Summary-Output-`<p>` und zwei `<output>`-Elementen abrufen.

```js live-sample___summarizer-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("button");

const summaryOutput = document.querySelector(".summary-output");
const inputCount = document.querySelector(".input-count");
const outputCount = document.querySelector(".output-count");
```

Als nächstes verwenden wir die Methode [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um zwei Sets von Ereignissen zuzuhören:

- `submit`-Ereignisse auf dem `<form>`-Element; wenn der Submit-Button angeklickt wird, wird die `handleSubmission()`-Funktion aufgerufen.
- `input`-Ereignisse auf dem `<textarea>`-Element; wenn der aktuelle `<textarea>`-Wert geändert wird, wird die `updateInputCount()`-Funktion aufgerufen.

```js live-sample___summarizer-example
form.addEventListener("submit", handleSubmission);
textarea.addEventListener("input", updateInputCount);
```

Die `updateInputCount()`-Funktion, die als nächstes definiert wird, setzt das erste `<output>`-Element's [`textContent`](/de/docs/Web/API/Node/textContent) auf einen String, der die Länge des `<textarea>`-Wertes enthält. Wir definieren auch eine Gegenstücksfunktion `displayOutputCount()`, die dasselbe für das zweite `<output>`-Element tut. Diese wird erst am Ende der `handleSubmission()`-Funktion aufgerufen, nachdem die Zusammenfassung zurückgegeben wurde.

```js live-sample___summarizer-example
function updateInputCount() {
  inputCount.textContent = `Input character count: ${textarea.value.length}`;
}

function displayOutputCount() {
  outputCount.textContent = `Output summary character count: ${summaryOutput.textContent.length}`;
}
```

Jetzt definieren wir die `handleSubmission()`-Funktion selbst. Nachdem die Standardformularübermittlung verhindert wurde, erstellen wir eine neue Instanz des [`FormData`](/de/docs/Web/API/FormData)-Objekts, die alle `<form>`-Daten-Namenswertpaare enthält. Wir führen dann einige Datenvalidierungstests durch und überprüfen, ob der `<textarea>`-Inhalt (`summaryText`) leer oder zu kurz ist, um Ressourcen zu verschwenden, und geben eine Fehlermeldung innerhalb des Summary-Output-`<p>` aus, falls dies der Fall ist.

Nachdem der Text die Tests bestanden hat, erstellen wir ein `Summarizer`-Objekt mit der `create()`-Methode, indem wir ihm einen `sharedContext`-String und die im Formular ausgewählten `type` (`summaryType`) und `length` (`summaryLength`) Werte übergeben. Wir setzen dann das Summary-Output-`<p>` und `<output>` auf "ausstehende" Meldungen und deaktivieren den `<submit>`-Button, während wir die `summarize()`-Operation durchführen.

Nachdem der `summary`-Wert erfolgreich zurückgegeben wurde, setzen wir ihn als `textContent` des Output-Summary-`<p>`-Elements, rufen `displayOutputCount()` auf, um die Zeichenanzahl der Ausgabe im zweiten `<output>`-Element anzuzeigen, und reaktivieren den Submit-`<button>`.

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

Der letzte Schritt ist es, die `updateInputCount()`-Funktion auf oberster Ebene des Skripts aufzurufen, um sicherzustellen, dass das erste `<output>`-Element, das die Eingabezählung enthält, immer den korrekten Wert beim Laden der Seite anzeigt.

```js live-sample___summarizer-example
updateInputCount();
```

### Ergebnis

Das gerenderte Beispiel sieht folgendermaßen aus:

{{EmbedLiveSample("summarizer-example", , "750px", , , , "summarizer", "allow-forms")}}

Versuchen Sie, einen Text in das "Eingabe"-`<textarea>` einzugeben und dann den Submit-Button zu drücken, um eine KI-generierte Zusammenfassung zu erstellen. Der Text von Ihrer Lieblings-Wikipedia-Seite wäre ideal. Versuchen Sie, mehrere Zusammenfassungen mit unterschiedlichen Optionskombinationen zu generieren, um zu sehen, wie sie das Ergebnis beeinflussen.

## Siehe auch

- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
