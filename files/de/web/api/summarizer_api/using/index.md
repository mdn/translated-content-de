---
title: Nutzung der Summarizer-API
slug: Web/API/Summarizer_API/Using
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{DefaultAPISidebar("Summarizer API")}}

Die [Summarizer-API](/de/docs/Web/API/Summarizer_API) bietet einen asynchronen, auf {{jsxref("Promise")}} basierenden Mechanismus, mit dem eine Webseite einen Textinhalt in das interne KI-Modell des Browsers einspeisen und eine Zusammenfassung des Textes basierend auf angegebenen Optionen anfordern kann. Dieser Artikel erklärt, wie Sie die Grundlagen der Summarizer-API verwenden.

## Erstellen eines Summarizers

Die gesamte Funktionalität der Summarizer-API wird über eine einzige Schnittstelle zugänglich gemacht — [`Summarizer`](/de/docs/Web/API/Summarizer).

Der erste Schritt, damit das KI-Modell des Browsers eine Zusammenfassung erstellt, besteht darin, eine Instanz eines `Summarizer`-Objekts zu erstellen. Dies erfolgt mit der statischen Methode [`Summarizer.create()`](/de/docs/Web/API/Summarizer/create_static), die ein Optionsobjekt als Argument nimmt, das angibt, welche Art von Zusammenfassung Sie erstellen möchten:

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

Die Option [`sharedContext`](/de/docs/Web/API/Summarizer/sharedContext) bietet einen String, der dem KI-Modell hilft, eine angemessenere Zusammenfassung für den Kontext zu schreiben, in dem der Text verwendet wird, während [`type`](/de/docs/Web/API/Summarizer/type) angibt, welche Art von Zusammenfassung Sie bereitstellen möchten, wie etwa wesentliche Punkte oder eine "tl;dr"-Zusammenfassung.

Wir spezifizieren auch die gewünschte [`length`](/de/docs/Web/API/Summarizer/length), das Ausgabe-[`format`](/de/docs/Web/API/Summarizer/format), die [`expectedInputLanguages`](/de/docs/Web/API/Summarizer/expectedInputLanguages) und die gewünschte [`outputLanguage`](/de/docs/Web/API/Summarizer/outputLanguage). Wenn die Eingabe- und Ausgabesprachen nicht angegeben sind, wird die Sprache des Eingabetexts automatisch erkannt und die Ausgabesprache entspricht der Eingabesprache.

Wenn das KI-Modell des Browsers die angegebenen Eingabe- oder Ausgabesprachen nicht unterstützt, wird ein Fehler ausgelöst.

> [!NOTE]
> Schauen Sie sich die Referenzseite zu [`create()`](/de/docs/Web/API/Summarizer/create_static) für die vollständige Liste der verfügbaren Optionen an.

## Konfigurationsunterstützung überprüfen

Bevor Sie einen `Summarizer` erstellen, können Sie überprüfen, ob Ihre gewünschte Konfiguration vom aktuellen Browser unterstützt wird, indem Sie die statische Methode [`Summarizer.availability()`](/de/docs/Web/API/Summarizer/availability_static) verwenden. Zum Beispiel:

```js
const availability = await Summarizer.availability({
  type: "tl;dr",
  length: "short",
  format: "markdown",
  expectedInputLanguages: ["en-US"],
  outputLanguage: "en-US",
});
```

Diese Methode gibt einen enumerierten Wert zurück, der angibt, ob Unterstützung für die angegebenen Optionen verfügbar ist oder sein wird:

- `downloadable` bedeutet, dass der Browser die angeforderten Optionen unterstützt, aber zuerst ein KI-Modell oder einige Feindaten für das Modell herunterladen muss.
- `downloading` bedeutet, dass der Browser die angeforderten Optionen unterstützt, jedoch den laufenden Download abschließen muss, bevor er fortfahren kann.
- `available` bedeutet, dass der Browser die gegebene Konfiguration unterstützt, ohne zusätzliche Downloads zu erfordern.
- `unavailable` bedeutet, dass der Browser die gegebene Konfiguration nicht unterstützt.

Falls ein Download erforderlich ist, wird dieser automatisch vom Browser gestartet, sobald eine `Summarizer`-Instanz mit der Methode `create()` erstellt wird. Sie können den Downloadfortschritt automatisch mit einem [Monitor](#überwachung_des_downloadfortschritts) verfolgen.

## Zusammenfassung erzeugen

Wenn Sie festgestellt haben, dass Ihre gewünschte Konfiguration funktioniert und Sie eine `Summarizer`-Instanz erstellt haben, können Sie sie verwenden, um eine Zusammenfassung zu generieren, indem Sie die Instanzmethode [`Summarizer.summarize()`](/de/docs/Web/API/Summarizer/summarize) aufrufen und ihr den zu zusammenfassenden Text als Argument übergeben.

```js
const summary = await summarizer.summarize(myTextString);
console.log(summary);
```

Es akzeptiert optional ein Optionsobjekt als zweites Argument, das einen `context`-String spezifisch für diese Zusammenfassung und ein Abbruch-`signal` [/de/docs/Web/API/AbortSignal) enthalten kann, mit dem die Anforderung zur Zusammenfassung abgebrochen werden kann (siehe nächsten Abschnitt).

Es gibt eine Streaming-Version der Methode `summarize()` — [`Summarizer.summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming) — die es erlaubt, die Zusammenfassung als [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurückzugeben:

```js
const stream = summarizer.summarizeStreaming(myTextString);
let summary = "";

for await (const chunk of stream) {
  summary += chunk;
}

console.log("Stream complete");
summaryOutput.textContent = summary;
```

Nachdem eine `Summarizer`-Instanz erstellt wurde, können Sie sie wieder entfernen, indem Sie die Instanzmethode [`Summarizer.destroy()`](/de/docs/Web/API/Summarizer/destroy) verwenden. Es macht Sinn, `Summarizer`-Objekte zu löschen, wenn sie nicht mehr verwendet werden, da sie erhebliche Ressourcen in Anspruch nehmen.

## Abbrechen von Zusammenfassungsvorgängen

Sie können einen ausstehenden `create()`, `summarize()` oder `summarizeStreaming()` Vorgang mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen:

```js
const controller = new AbortController();
const summary = await summarizer.summarize(myTextString, {
  signal: controller.signal,
});

// ...

controller.abort();
```

## Überwachung des Downloadfortschritts

Wenn das KI-Modell für einen bestimmten Summarizer heruntergeladen wird (`availability()` gibt `downloadable` und `downloading` zurück), ist es hilfreich, dem Benutzer Feedback zu geben, um ihm mitzuteilen, wie lange er warten muss, bis der Vorgang abgeschlossen ist.

Die Methode `Summarizer.create()` kann eine `monitor`-Eigenschaft akzeptieren, deren Wert eine Callback-Funktion ist, die eine Instanz von [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) als Argument nimmt. `CreateMonitor` hat ein [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event) Ereignis, das ausgelöst wird, wenn Fortschritte beim Herunterladen des KI-Modells gemacht werden. Sie können dieses Ereignis verwenden, um Ladefortschrittsdaten anzuzeigen:

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tl;dr",
  length: "short",
  monitor(monitor) {
    monitor.addEventListener("downloadprogress", (e) => {
      console.log(`Downloaded ${Math.floor(e.loaded * 100)}%`);
    });
  },
});
```

## Nutzungsquoten

Einige Implementierungen haben ein Eingabe-Limit, das bestimmt, wie viele Vorgänge eine Webseite in einem bestimmten Zeitraum anfordern kann. Die gesamte Quote kann über die [`Summarizer.inputQuota`](/de/docs/Web/API/Summarizer/inputQuota) Eigenschaft abgerufen werden, während die Nutzung der Quote für einen bestimmten Zusammenfassungsvorgang mittels der Methode [`Summarizer.measureInputUsage()`](/de/docs/Web/API/Summarizer/measureInputUsage) ermittelt werden kann:

Beispielsweise erstellen wir im folgenden Codeausschnitt eine neue `Summarizer`-Instanz mit [`create()`](/de/docs/Web/API/Summarizer/create_static), dann geben wir die gesamte Eingabe-Quote über `inputQuota` zurück und die Nutzung der Eingabe-Quote zur Zusammenfassung einer bestimmten Textzeichenfolge über `measureInputUsage()`.

Dann prüfen wir, ob die individuelle Eingabenutzung für diese Zeichenfolge größer ist als die insgesamt verfügbare Quote. Falls ja, werfen wir einen entsprechenden Fehler; wenn nicht, beginnen wir mit der Zusammenfassung der Zeichenfolge mit [`summarize()`](/de/docs/Web/API/Summarizer/summarize).

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

Wenn Sie versuchen, einen Zusammenfassungsvorgang auszuführen, der die verfügbare Quote überschreitet, wird ein `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Komplettes Beispiel

Werfen wir einen Blick auf ein vollständiges Beispiel, das die Summarizer-API in Aktion zeigt.

### HTML

In unserem Markup definieren wir zuerst ein Eingabe{{htmlelement("form")}}, das dem Benutzer ermöglicht, den zu zusammenfassenden Text und Konfigurationsoptionen festzulegen. Dazu gehört ein {{htmlelement("textarea")}}, in das der zu zusammenfassende Text eingegeben wird, ein {{htmlelement("output")}}-Element, um die Zeichenanzahl des vom Benutzer festgelegten Textes anzuzeigen, sowie zwei {{htmlelement("select")}}-Elemente zur Auswahl eines Summarizer-[`type`](/de/docs/Web/API/Summarizer/type) und der [`length`](/de/docs/Web/API/Summarizer/length).

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

Die zweite Hälfte unseres Markups umfasst ein {{htmlelement("p")}}-Element, um die generierte Zusammenfassung anzuzeigen, und ein zweites {{htmlelement("output")}}-Element, um die Zeichenanzahl der Zusammenfassung anzuzeigen.

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

Beachten Sie, dass wir das CSS für dieses Beispiel nicht zeigen werden, da keines davon relevant ist, um die Summarizer-API zu verstehen.

### JavaScript

In unserem Skript beginnen wir mit dem Abrufen von Referenzen zu dem `<form>`, `<textarea>`, dem Submit-`<button>`, der Ausgabesumme-`<p>`, und den beiden `<output>`-Elementen.

```js live-sample___summarizer-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("button");

const summaryOutput = document.querySelector(".summary-output");
const inputCount = document.querySelector(".input-count");
const outputCount = document.querySelector(".output-count");
```

Anschließend verwenden wir die Methode [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf zwei Sets von Ereignissen zu hören:

- `submit`-Ereignisse auf dem `<form>`-Element; wenn der Submit-Button geklickt wird, wird die Funktion `handleSubmission()` aufgerufen.
- `input`-Ereignisse auf dem `<textarea>`-Element; wenn der aktuelle Wert des `<textarea>` geändert wird, wird die Funktion `updateInputCount()` aufgerufen.

```js live-sample___summarizer-example
form.addEventListener("submit", handleSubmission);
textarea.addEventListener("input", updateInputCount);
```

Die Funktion `updateInputCount()`, die als nächstes definiert wird, setzt das [`textContent`](/de/docs/Web/API/Node/textContent) des ersten `<output>`-Elements auf einen String, der die Länge des `<textarea>`-Werts enthält. Wir definieren auch eine Gegenstück-Funktion `displayOutputCount()`, die dasselbe für das zweite `<output>`-Element tut. Diese wird erst gegen Ende der Funktion `handleSubmission()` aufgerufen, nachdem die Zusammenfassung zurückgegeben wurde.

```js live-sample___summarizer-example
function updateInputCount() {
  inputCount.textContent = `Input character count: ${textarea.value.length}`;
}

function displayOutputCount() {
  outputCount.textContent = `Output summary character count: ${summaryOutput.textContent.length}`;
}
```

Nun definieren wir die Funktion `handleSubmission()` selbst. Nachdem wir die standardmäßige Formularübermittlung verhindert haben, erstellen wir ein neues [`FormData`](/de/docs/Web/API/FormData)-Objekt, das alle unsere `<form>`-Daten-Namens/Werte-Paare enthält. Dann führen wir einige Datenvalidierungstests durch, um zu überprüfen, ob der `<textarea>`-Inhalt (`summaryText`) leer oder zu kurz ist, um die Zyklen zu verschwenden, und eine Fehlermeldung innerhalb der Summen-Ausgabe-`<p>` anzuzeigen, falls dem so ist.

Wenn der Text die Tests bestanden hat, erstellen wir ein `Summarizer`-Objekt mit der Methode `create()`, indem wir ihr einen `sharedContext`-String und die im Formular ausgewählten Werte `type` (`summaryType`) und `length` (`summaryLength`) übergeben. Dann setzen wir das Ausgabesummen-`<p>` und `<output>` auf "ausstehende" Meldungen und deaktivieren den `<submit>`-Button, während wir die Operation `summarize()` ausführen.

Nachdem der Wert `summary` erfolgreich zurückgegeben wurde, setzen wir ihn als die `textContent` des Ausgabesummen-`<p>`-Elements, rufen `displayOutputCount()` auf, um die Ausgabenzeichenanzahl im zweiten `<output>`-Element anzuzeigen, und aktivieren den Submit-`<button>` wieder.

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

Der letzte Schritt besteht darin, die Funktion `updateInputCount()` auf der obersten Ebene des Skripts aufzurufen, um sicherzustellen, dass das erste `<output>`-Element, das die Eingabeanzahl enthält, beim Laden der Seite immer den korrekten Wert anzeigt.

```js live-sample___summarizer-example
updateInputCount();
```

### Ergebnis

Das gerenderte Beispiel sieht wie folgt aus:

{{EmbedLiveSample("summarizer-example", , "750px", , , , "summarizer", "allow-forms")}}

Versuchen Sie, einen Textkörper in das "Input"-`<textarea>` einzugeben und dann den Submit-Button zu drücken, um eine KI-generierte Zusammenfassung zu erstellen. Der Text von Ihrer Lieblings-Wikipedia-Seite wäre ideal. Versuchen Sie, mehrere Zusammenfassungen mit verschiedenen Optionen zu erstellen, um zu sehen, wie sie das Ergebnis beeinflussen.

## Siehe auch

- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
