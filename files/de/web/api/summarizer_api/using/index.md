---
title: Verwendung der Summarizer-API
slug: Web/API/Summarizer_API/Using
l10n:
  sourceCommit: f91ff68767990aea89c9cb21fd8fc6b365cef3cb
---

{{DefaultAPISidebar("Summarizer API")}}

Die [Summarizer-API](/de/docs/Web/API/Summarizer_API) bietet einen asynchronen ({{jsxref("Promise")}}-basierten) Mechanismus für eine Webseite, um einen Textkörper in das interne AI-Modell des Browsers einzuspeisen und eine Zusammenfassung des Textes anhand spezifischer Optionen anzufordern. Dieser Artikel erklärt, wie Sie die Grundlagen der Summarizer-API verwenden.

## Erstellen eines Summarizers

Alle Funktionen der Summarizer-API werden über eine einzige Schnittstelle aufgerufen — [`Summarizer`](/de/docs/Web/API/Summarizer).

Der erste Schritt, um das AI-Modell des Browsers zur Ausgabe einer Zusammenfassung zu veranlassen, besteht darin, eine Instanz eines `Summarizer`-Objekts zu erstellen. Dies geschieht mittels der statischen Methode [`Summarizer.create()`](/de/docs/Web/API/Summarizer/create_static), die ein Optionsobjekt als Argument nimmt und angibt, welche Art von Zusammenfassung Sie erstellen möchten:

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

Die Option [`sharedContext`](/de/docs/Web/API/Summarizer/sharedContext) bietet einen String, der dem AI-Modell hilft, eine geeignetere Zusammenfassung für den Kontext zu schreiben, in dem der Text verwendet wird, während der [`type`](/de/docs/Web/API/Summarizer/type) angibt, welche Art von Zusammenfassung erstellt werden soll, wie Schlüsselpunkte oder eine "tldr"-Zusammenfassung.

Wir spezifizieren auch die gewünschte [`length`](/de/docs/Web/API/Summarizer/length), das Ausgabe-`format`([/de/docs/Web/API/Summarizer/format]), die [`expectedInputLanguages`](/de/docs/Web/API/Summarizer/expectedInputLanguages) und die gewünschte [`outputLanguage`](/de/docs/Web/API/Summarizer/outputLanguage). Wenn die Eingabe- und Ausgabesprachen nicht angegeben werden, wird die Sprache des Eingabetexts automatisch erkannt und die Ausgabesprache entspricht der Eingabesprache.

Wenn das AI-Modell des Browsers die angegebenen Eingabe- oder Ausgabesprachen nicht unterstützt, wird ein Fehler ausgelöst.

> [!NOTE]
> Sehen Sie sich die Referenzseite zur [`create()`](/de/docs/Web/API/Summarizer/create_static)-Methode an, um die vollständige Liste der verfügbaren Optionen zu erhalten.

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

Diese Methode gibt einen enumerierten Wert zurück, der angibt, ob die Unterstützung für das angegebene Optionsset verfügbar ist oder sein wird:

- `downloadable` bedeutet, dass der Browser die angeforderten Optionen unterstützt, aber zuerst ein AI-Modell oder einige Feinabstimmungsdaten für das Modell herunterladen muss.
- `downloading` bedeutet, dass der Browser die angeforderten Optionen unterstützt, aber den laufenden Download abschließen muss, bevor er fortfahren kann.
- `available` bedeutet, dass der Browser die gegebene Konfiguration unterstützt, ohne dass neue Downloads erforderlich sind.
- `unavailable` bedeutet, dass der Browser die gegebene Konfiguration nicht unterstützt.

Wenn ein Download erforderlich ist, wird er automatisch vom Browser gestartet, sobald eine `Summarizer`-Instanz mit der `create()`-Methode erstellt wird. Sie können den Download-Fortschritt automatisch mit einem [Monitor](#überwachung_des_download-fortschritts) verfolgen.

## Erzeugung einer Zusammenfassung

Wenn Sie festgestellt haben, dass Ihre gewünschte Konfiguration funktioniert und Sie eine `Summarizer`-Instanz erstellt haben, können Sie diese verwenden, um eine Zusammenfassung zu generieren, indem Sie die Instanzmethode [`Summarizer.summarize()`](/de/docs/Web/API/Summarizer/summarize) aufrufen. Sie übergeben ihr den zu zusammenfassenden Text als Argument.

```js
const summary = await summarizer.summarize(myTextString);
console.log(summary);
```

Es akzeptiert auch optional ein Optionsobjekt als zweites Argument, das einen spezifischen `context`-String für diese Zusammenfassung sowie ein Abbruch-`signal` ([`AbortSignal`](/de/docs/Web/API/AbortSignal)) zur Verfügung stellt, über das die Anforderung zur Zusammenfassung abgebrochen werden kann (siehe nächster Abschnitt).

Es gibt eine Streaming-Version der `summarize()`-Methode — [`Summarizer.summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming) —, die es ermöglicht, die Zusammenfassung als [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurückzugeben:

```js
const stream = summarizer.summarizeStreaming(myTextString);
let summary = "";

for await (const chunk of stream) {
  summary += chunk;
}

console.log("Stream complete");
summaryOutput.textContent = summary;
```

## Abbrechen von Vorgängen und Zerstören von Instanzen

Sie können einen anstehenden `create()`, `summarize()` oder `summarizeStreaming()`-Vorgang mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen, wobei das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) als `signal`-Eigenschaftswert in das Methodenoptionsobjekt aufgenommen wird. Zum Beispiel würde das Abbrechen eines `Summarizer.create()`-Vorgangs so aussehen:

```js
const controller = new AbortController();
const summary = await summarizer.summarize(myTextString, {
  signal: controller.signal,
});

// ...

controller.abort();
```

Nachdem eine `Summarizer`-Instanz erstellt wurde, können Sie ihre zugewiesenen Ressourcen freigeben und alle weiteren Aktivitäten stoppen, indem Sie ihre [`Summarizer.destroy()`](/de/docs/Web/API/Summarizer/destroy) Methode aufrufen. Sie werden ermutigt, dies zu tun, nachdem Sie die `Summarizer`-Objekte abgeschlossen haben, da sie viele Ressourcen verbrauchen können.

```js
summarizer.destroy();
```

Wenn ein `create()`-Aufruf einem [`AbortController`](/de/docs/Web/API/AbortController) zugeordnet ist und Sie dessen [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) Methode aufrufen, nachdem der `create()`-Aufruf erfolgreich war, hat dies den gleichen Effekt wie das Aufrufen von `destroy()` auf dem resultierenden `Summarizer`-Objekt.

## Überwachung des Download-Fortschritts

Wenn das AI-Modell für einen bestimmten Summarizer heruntergeladen wird (`availability()` gibt `downloadable` und `downloading` zurück), ist es hilfreich, dem Benutzer ein Feedback zu geben, um ihm mitzuteilen, wie lange er warten muss, bis der Vorgang abgeschlossen ist.

Die `Summarizer.create()`-Methode kann eine `monitor`-Eigenschaft akzeptieren, deren Wert eine Callback-Funktion ist, die eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) Instanz als Argument erhält. `CreateMonitor` hat ein [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Event, das ausgelöst wird, wenn Fortschritte beim Herunterladen des AI-Modells gemacht werden. Sie können dieses Event verwenden, um Daten zum Ladefortschritt bereitzustellen:

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

Einige Implementierungen haben ein Eingangskontingent, das regelt, wie viele Vorgänge eine Website in einem bestimmten Zeitraum anfordern kann. Das Gesamtkontingent kann über die [`Summarizer.inputQuota`](/de/docs/Web/API/Summarizer/inputQuota)-Eigenschaft abgerufen werden, während die Kontingentnutzung für einen bestimmten Zusammenfassungsvorgang mit der Methode [`Summarizer.measureInputUsage()`](/de/docs/Web/API/Summarizer/measureInputUsage) zurückgegeben werden kann:

Zum Beispiel wird im unten stehenden Code-Snippet eine neue `Summarizer`-Instanz mit [`create()`](/de/docs/Web/API/Summarizer/create_static) erstellt, dann das gesamte Eingangskontingent über `inputQuota` und die Nutzung des Eingangskontingents für eine bestimmte Textzusammenfassung über `measureInputUsage()` zurückgegeben.

Anschließend testen wir, ob die individuelle Eingangsnutzung für diesen String größer ist als das insgesamt verfügbare Kontingent. Falls ja, werfen wir einen entsprechenden Fehler; falls nicht, beginnen wir mit der Zusammenfassung des Strings mittels [`summarize()`](/de/docs/Web/API/Summarizer/summarize).

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

Wenn Sie versuchen, einen Zusammenfassungsvorgang auszuführen, der das verfügbare Kontingent überschreitet, wird ein `QuotaExceededError`-Fehler ([`DOMException`](/de/docs/Web/API/DOMException)) ausgelöst.

## Vollständiges Beispiel

Schauen wir uns ein vollständiges Beispiel an, das die Summarizer-API in Aktion zeigt.

### HTML

In unserem Markup definieren wir zunächst ein Eingabe-{{htmlelement("form")}}, das dem Benutzer die Eingabe des zu zusammenfassenden Textes und der Konfigurationsoptionen ermöglicht. Dazu gehört ein {{htmlelement("textarea")}} zum Eingeben des zu zusammenfassenden Textes, ein {{htmlelement("output")}}-Element zur Anzeige der vom Benutzer festgelegten Zeichenanzahl des Textes sowie zwei {{htmlelement("select")}}-Elemente zur Auswahl eines Summarizer-`type` ([`type`](/de/docs/Web/API/Summarizer/type)) und einer `length` ([`length`](/de/docs/Web/API/Summarizer/length)).

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

In unserem Skript beginnen wir damit, Referenzen auf das `<form>`, `<textarea>`, das `<button>` zum Senden, das `<p>`-Element zur Ausgabe der Zusammenfassung und zwei `<output>`-Elemente zu erhalten.

```js live-sample___summarizer-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("button");

const summaryOutput = document.querySelector(".summary-output");
const inputCount = document.querySelector(".input-count");
const outputCount = document.querySelector(".output-count");
```

Als nächstes verwenden wir die Methode [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um zwei Set von Ereignissen zu überwachen:

- `submit`-Ereignisse auf dem `<form>`-Element; wenn die Senden-Schaltfläche angeklickt wird, wird die `handleSubmission()`-Funktion aufgerufen.
- `input`-Ereignisse auf dem `<textarea>`-Element; wenn der aktuelle Wert des `<textarea>`-Elements geändert wird, wird die `updateInputCount()`-Funktion aufgerufen.

```js live-sample___summarizer-example
form.addEventListener("submit", handleSubmission);
textarea.addEventListener("input", updateInputCount);
```

Die `updateInputCount()`-Funktion, die als nächstes definiert wird, setzt den [`textContent`](/de/docs/Web/API/Node/textContent) des ersten `<output>`-Elements auf einen String, der die Länge des `<textarea>`-Wertes enthält. Wir definieren auch eine Gegenstück-Funktion `displayOutputCount()`, die dasselbe für das zweite `<output>`-Element macht. Diese Funktion wird erst gegen Ende der `handleSubmission()`-Funktion aufgerufen, nachdem die Zusammenfassung zurückgegeben wurde.

```js live-sample___summarizer-example
function updateInputCount() {
  inputCount.textContent = `Input character count: ${textarea.value.length}`;
}

function displayOutputCount() {
  outputCount.textContent = `Output summary character count: ${summaryOutput.textContent.length}`;
}
```

Nun definieren wir die `handleSubmission()`-Funktion selbst. Nach der Verhinderung der Standardformularübermittlung erstellen wir eine neue [`FormData`](/de/docs/Web/API/FormData)-Objektinstanz, die alle unsere `<form>`-Daten-Name/Wert-Paare enthält. Wir führen dann einige Datenüberprüfungstests durch, in denen wir prüfen, ob der `<textarea>`-Inhalt (`summaryText`) leer oder zu kurz ist, um Zyklen zu verschwenden, und drucken eine Fehlermeldung in das `<p>`-Element der Zusammenfassungsausgabe, falls dies der Fall ist.

Vorausgesetzt, der Text hat die Tests bestanden, erstellen wir ein `Summarizer`-Objekt mit der `create()`-Methode, indem wir ihm einen `sharedContext`-String und die `type` (`summaryType`) und `length` (`summaryLength`)-Werte übergeben, die im Formular ausgewählt wurden. Wir setzen dann das Ausgabe-`<p>` der Zusammenfassung und `<output>` auf "ausstehende" Nachrichten und deaktivieren den `<submit>`-Button, während wir den `summarize()`-Vorgang ausführen.

Nachdem der `summary`-Wert erfolgreich zurückgegeben wurde, setzen wir ihn als `textContent` des Ausgabe-`<p>`-Elements der Zusammenfassung, rufen `displayOutputCount()` auf, um die Ausgabezeichenanzahl im zweiten `<output>`-Element zu zeigen, und aktivieren den Senden-`<button>` wieder.

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

Der letzte Schritt ist der Aufruf der `updateInputCount()`-Funktion auf der obersten Ebene des Skripts, um sicherzustellen, dass das erste `<output>`-Element mit der Eingabezähleranzeige immer den richtigen Wert beim Laden der Seite anzeigt.

```js live-sample___summarizer-example
updateInputCount();
```

### Ergebnis

Das gerenderte Beispiel sieht so aus:

{{EmbedLiveSample("summarizer-example", , "750px", , , , "summarizer", "allow-forms")}}

Versuchen Sie, einen Textkörper in das "Input"-`<textarea>` einzugeben und dann die Senden- Schaltfläche zu drücken, um eine AI-generierte Zusammenfassung zu erstellen. Der Text Ihrer bevorzugten Wikipedia-Seite wäre ideal. Probieren Sie aus, mehrere Zusammenfassungen mit verschiedenen Optionskombinationen zu erstellen, um zu sehen, wie sie sich auf die Ausgabe auswirken.

## Siehe auch

- [Web-KI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
