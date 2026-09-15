---
title: Multimodale Prompts
slug: Web/API/Prompt_API/Multimodal
l10n:
  sourceCommit: 6a5c66fd39deaf266d332f7e04a885751d1d691c
---

{{DefaultAPISidebar("Prompt API")}}

Die [Prompt API](/de/docs/Web/API/Prompt_API) akzeptiert multimodale Eingaben, einschließlich Bild- und Audioinhalten. Dieser Artikel erläutert, wie Sie multimodale Eingaben in Ihrer App verarbeiten.

## Erwartete Eingabetypen angeben

Um zu deklarieren, dass Sie Bild- und/oder Audioeingaben in Ihrer Sitzung verwenden möchten, müssen Sie diese in die Option `expectedInputs` der Methode [`create()`](/de/docs/Web/API/LanguageModel/create_static) einschließen:

```js
return await LanguageModel.create({
  expectedInputs: [
    { type: "text", languages: ["en"] },
    { type: "image" },
    { type: "audio" },
  ],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});
```

## Multimodale Eingabedaten bereitstellen

Wenn Sie multimodale Eingaben bereitstellen – beispielsweise in einem Aufruf von [`prompt()`](/de/docs/Web/API/LanguageModel/prompt), [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) oder [`append()`](/de/docs/Web/API/LanguageModel/append), oder in der Option [`initialPrompts`](/de/docs/Web/API/LanguageModel/create_static#initialprompts) eines `create()`-Aufrufs –, müssen Sie den korrekten Daten-`type` in Ihren Eingabeobjekten angeben und in den Eigenschaften `value` auf die Datenquelle verweisen.

Das folgende Beispiel übergibt drei `user`-Eingaben an einen `prompt()`-Aufruf, jeweils eine von jedem Typ: `text`, `image` und `audio`.

```js
const response = await session.prompt([
  {
    role: "user",
    content: [
      { type: "text", value: "Describe my image and audio:" },
      { type: "image", value: imgElem },
      { type: "audio", value: audioBuffer },
    ],
  },
]);
```

## Welche Datentypen werden akzeptiert?

Die Prompt API akzeptiert mehrere verschiedene Formate für Audio- und Bilddaten:

- Audio:
  - [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)
  - {{jsxref("TypedArray")}}
  - {{jsxref("DataView")}}
  - {{jsxref("ArrayBuffer")}}
  - [`Blob`](/de/docs/Web/API/Blob)
- Bild:
  - [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
  - [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)
  - [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) (verwendet den Frame an der aktuellen `<video>`-Position)
  - [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
  - [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
  - [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
  - [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - [`Blob`](/de/docs/Web/API/Blob)
  - [`ImageData`](/de/docs/Web/API/ImageData)

## Vollständiges Beispiel

Sehen wir uns ein multimodales Beispiel an, mit dem Sie eine lokale Bilddatei auswählen und von der API beschreiben lassen können.

Die allgemeine App-Struktur ähnelt stark den Beispielen in vorherigen Leitfäden. Wir werden nicht den gesamten Code ausführlich durchgehen; stattdessen erklären wir nur die relevantesten Teile. Um den vollständigen Codebestand genauer anzusehen, drücken Sie in der [gerenderten Live-Ausgabe](#ergebnis) auf die Schaltfläche „Play“, um den vollständigen Code in MDN Playground zu öffnen.

### HTML

Die zu beschreibende Datei wird über ein Element [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file) ausgewählt. Die Bildbeschreibung der API wird in einem {{htmlelement("p")}}-Element ausgegeben. Außerdem schließen wir ein {{htmlelement("img")}}-Element ein, um das ausgewählte Bild anzuzeigen.

```html live-sample___multimodal
<h1>Prompt API demo</h1>
<p>
  <strong>Focus the demo window, then press a key to start the app</strong>.
  This demo loads an image from your local filesystem, and then uses the Prompt
  API to describe it. First released in Chrome 148.
</p>

<h2>Input</h2>

<section>
  <form>
    <div>
      <label for="url">Choose image from your local files:</label>
      <input type="file" id="inputElem" accept="image/*" />
    </div>
    <button type="submit" id="submit">Submit query</button
    ><button type="button" id="abort">Abort query</button>
  </form>
  <img />
</section>

<h2>Output</h2>

<p class="prompt-output"></p>
```

```css hidden live-sample___multimodal
* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial";
}

body {
  max-width: 600px;
  margin: 0 auto;
}

section {
  display: flex;
  gap: 10px;
}

form {
  flex: 1;
}

img {
  display: block;
  flex: 1;
  max-width: 300px;
  border: 1px solid #999999;
}

form div {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

input,
.prompt-output {
  padding: 5px;
}

.prompt-output {
  min-height: 150px;
  border: 1px solid black;
  width: 100%;
  display: block;
}

.error {
  color: red;
}

button {
  margin-right: 10px;
}
```

### JavaScript

Wir erstellen eine Variable `session`, um unsere Sitzung zu speichern. Da die Verwendung der API eine {{Glossary("Transient_activation", "vorübergehende Aktivierung")}} erfordert, füllen wir `session` innerhalb eines `keydown`-Event-Handlers im Demo-Fenster. Wenn der Benutzer den Fokus auf die Demo setzt und eine Taste drückt, prüfen wir zunächst, ob die API unterstützt wird. Ist dies nicht der Fall, geben wir eine Meldung über die fehlende Unterstützung aus. Falls Unterstützung verfügbar ist, prüfen wir, ob `session` bereits ein Wert zugewiesen wurde (wir möchten nicht jedes Mal eine neue Sitzung erstellen). Ist dies nicht der Fall, führen wir die Funktion `init()` aus.

```js hidden live-sample___multimodal
const form = document.querySelector("form");
const inputElem = document.querySelector("input");
const submitBtn = document.querySelector("#submit");
const abortBtn = document.querySelector("#abort");
abortBtn.disabled = true;
submitBtn.disabled = true;
inputElem.disabled = true;
const promptOutput = document.querySelector(".prompt-output");
const imgElem = document.querySelector("img");
```

```js live-sample___multimodal
let session;
window.addEventListener("keydown", () => {
  if (!("LanguageModel" in window)) {
    promptOutput.innerHTML = `<span class="error">Your browser doesn't support the Prompt API!</span>`;
  } else if (!session) {
    init();
  }
});
```

Die Funktion `init()` erzeugt mithilfe der benutzerdefinierten Funktion `getSession()` eine `LanguageModel`-Instanz.

Wenn die Erzeugung erfolgreich ist, weisen wir die resultierende `LanguageModel`-Instanz der Variable `session` zu, geben eine Erfolgsmeldung im Ausgabe-`<p>` aus, aktivieren das `<input>`, damit Bilder ausgewählt werden können, und weisen Event-Listener zu, um die Benutzeroberfläche zu aktualisieren, wenn im Dateiauswahldialog ein neues Bild ausgewählt wird, sowie um die Übermittlung einer Prompt-Abfrage zu verarbeiten.

```js live-sample___multimodal
async function init() {
  session = await getSession();
  if (!session) return;
  promptOutput.textContent = `Session created.`;
  inputElem.disabled = false;
  inputElem.addEventListener("change", getImage);
  form.addEventListener("submit", handleSubmission);
}
```

Die Funktion `getSession()` funktioniert genauso wie in anderen Beispielen ([`getSession()` wird hier erklärt](/de/docs/Web/API/Prompt_API/Using#:~:text=Now%20we%20define%20the%20getSession%28%29%20function)), außer dass wir zusätzlich zu `text` auch `image` in unsere Option `expectedInputs` einschließen:

```js
return await LanguageModel.create({
  expectedInputs: [{ type: "text", languages: ["en"] }, { type: "image" }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});
```

Die Funktion `getImage()` prüft zunächst, ob im Auswahldialog `<input type="file">` eine Datei ausgewählt ist. Falls nicht, geben wir einen passenden Fehler im Ausgabe-`<p>` aus und führen anschließend `return` aus. Am Ende des Funktionsrumpfs setzen wir das Attribut `src` des `<img>`-Elements auf eine Objekt-URL, die aus der im Dateiauswahldialog ausgewählten Datei erstellt wurde, damit das Bild in der Benutzeroberfläche angezeigt wird.

Davor fügen wir dem `<img>` zwei Event-Listener hinzu:

- Wenn ein `error`-Event auf dem `<img>` ausgelöst wird, geben wir einen passenden Fehler im Ausgabe-`<p>` aus und führen anschließend `return` aus.
- Wenn ein `load`-Event auf dem `<img>` ausgelöst wird, geben wir eine Erfolgsmeldung im Ausgabe-`<p>` aus, um dem Benutzer mitzuteilen, dass die App bereit ist, das Bild abzufragen, und aktivieren anschließend die Schaltfläche zum Übermitteln `<button>`, damit die Abfrage übermittelt werden kann.

```js live-sample___multimodal
function getImage() {
  const file = inputElem.files[0];
  if (!file) {
    promptOutput.innerHTML = `<span class="error">No file selected!</span>`;
    return;
  }

  imgElem.addEventListener("error", () => {
    promptOutput.innerHTML = `<span class="error">Image not loaded!</span>`;
  });

  imgElem.addEventListener("load", () => {
    promptOutput.innerHTML = "Image query ready to submit!";
    submitBtn.disabled = false;
  });

  imgElem.src = URL.createObjectURL(file);
}
```

Die Funktion `handleSubmission()` verwendet denselben Ablauf wie die vorherigen Beispiele, um das Sprachmodell abzufragen und seine Ausgabe abzurufen ([siehe Erklärung](/de/docs/Web/API/Prompt_API/Using#:~:text=Next%2C%20inside%20a%20try%20block%2C%20we)). Der wesentliche Unterschied besteht darin, dass wir in den Eingaben des `prompt()`-Aufrufs die API zunächst bitten, das Bild zu beschreiben, und ihr dann eine Referenz auf das `<img>`-Element selbst übergeben.

```js live-sample___multimodal
async function handleSubmission(e) {
  e.preventDefault();
  try {
    promptOutput.textContent = "...generating response...";
    submitBtn.disabled = true;
    abortBtn.disabled = false;

    const controller = new AbortController();
    abortBtn.addEventListener("click", () => {
      controller.abort("Query aborted by user.");
      submitBtn.disabled = false;
      abortBtn.disabled = true;
    });

    const response = await session.prompt(
      [
        {
          role: "user",
          content: [
            { type: "text", value: "Please describe the following image:" },
            { type: "image", value: imgElem },
          ],
        },
      ],
      {
        signal: controller.signal,
      },
    );

    promptOutput.textContent = response;

    submitBtn.disabled = false;
    abortBtn.disabled = true;
    console.log(`${session.contextUsage}/${session.contextWindow}`);
  } catch (e) {
    promptOutput.innerHTML = `<span class="error">${e}</span>`;
    submitBtn.disabled = true;
    abortBtn.disabled = false;
  }
}
```

```js hidden live-sample___multimodal
async function getSession() {
  const availability = await LanguageModel.availability({
    expectedInputs: [{ type: "text", languages: ["en"] }, { type: "image" }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
  });
  if (availability === "unavailable") {
    promptOutput.textContent = "Language model not available.";
    return undefined;
  } else if (availability === "available") {
    return await LanguageModel.create({
      expectedInputs: [{ type: "text", languages: ["en"] }, { type: "image" }],
      expectedOutputs: [{ type: "text", languages: ["en"] }],
    });
  }
  return await LanguageModel.create({
    expectedInputs: [{ type: "text", languages: ["en"] }, { type: "image" }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
    monitor(monitor) {
      monitor.addEventListener("downloadprogress", (e) => {
        promptOutput.textContent = `Downloading model data ${Math.floor(e.loaded * 100)}%`;
      });
    },
  });
}
```

### Ergebnis

{{EmbedLiveSample("multimodal", , "630px", , , , "language-model", "allow-forms")}}

Setzen Sie den Fokus auf das eingebettete Demo-Fenster und drücken Sie eine Taste auf Ihrer Tastatur, um die App zu starten. Wählen Sie anschließend über den Dateiauswahldialog ein Bild aus. Wenn das Bild geladen ist, drücken Sie die Schaltfläche „Submit query“. Nach kurzer Wartezeit sollte die Bildbeschreibung der API im Ausgabe-`<p>` erscheinen.

## Siehe auch

- [MediaRecorder + Audio Prompt API-Demo](https://chrome.dev/web-ai-demos/mediarecorder-audio-prompt/) auf chrome.dev (2026)
- [Prompt API mit Bild-Eingabe-Demo](https://chrome.dev/web-ai-demos/canvas-image-prompt/) auf chrome.dev (2026)
