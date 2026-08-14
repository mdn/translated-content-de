---
title: Multimodale Eingaben
slug: Web/API/Prompt_API/Multimodal
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

{{DefaultAPISidebar("Prompt API")}}

Die [Prompt API](/de/docs/Web/API/Prompt_API) akzeptiert multimodale Eingaben, einschließlich Bild- und Audioinhalte. Dieser Artikel erklärt, wie Sie in Ihrer App mit multimodalen Eingaben umgehen können.

## Festlegen erwarteter Eingabetypen

Um anzugeben, dass Sie Bild- und/oder Audioeingaben in Ihrer Sitzung verwenden möchten, müssen Sie diese in die Option `expectedInputs` der Methode [`create()`](/de/docs/Web/API/LanguageModel/create_static) einbeziehen:

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

## Bereitstellung multimodaler Eingabedaten

Bei der Bereitstellung multimodaler Eingaben - zum Beispiel in einem Aufruf von [`prompt()`](/de/docs/Web/API/LanguageModel/prompt), [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) oder [`append()`](/de/docs/Web/API/LanguageModel/append) oder in der Option [`initialPrompts`](/de/docs/Web/API/LanguageModel/create_static#initialprompts) eines `create()`-Aufrufs - müssen Sie den korrekten Datentyp in Ihren Eingabeobjekten angeben und in Ihren `value`-Eigenschaften auf die Datenquelle verweisen.

Das folgende Beispiel übergibt drei `user`-Eingaben in einem `prompt()`-Aufruf, je einen von jedem Typ — `text`, `image` und `audio`.

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
  - [`ArrayBufferView`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
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

## Komplettes Beispiel

Schauen wir uns ein multimodales Beispiel an, das es Ihnen ermöglicht, eine lokale Bilddatei auszuwählen und die API beschreibt sie für Sie.

Die allgemeine Struktur der App ähnelt stark den Beispielen in vorherigen Leitfäden. Wir werden nicht den gesamten Code ausführlich durchgehen; stattdessen erklären wir nur die relevantesten Teile. Um den vollständigen Code ausführlicher zu betrachten, drücken Sie die "Play"-Taste im [angezeigten Live-Ausgang](#ergebnis), um den vollständigen Code im MDN Playground zu öffnen.

### HTML

Die Datei, die beschrieben werden soll, wird mit einem [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element ausgewählt. Die Bildbeschreibung der API wird in ein {{htmlelement("p")}}-Element ausgegeben. Wir fügen auch ein {{htmlelement("img")}}-Element hinzu, um das ausgewählte Bild anzuzeigen.

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

Wir erstellen eine `session`-Variable, um unsere Sitzung zu halten. Da die Verwendung der API eine {{Glossary("Transient_activation", "transiente Aktivierung")}} erfordert, füllen wir `session` innerhalb eines `keydown`-Ereignishandlers im Demo-Fenster. Wenn der Benutzer die Demo fokussiert und eine Taste drückt, überprüfen wir zuerst, ob die API unterstützt wird; wenn nicht, drucken wir eine Nicht-Unterstützungsmeldung. Wenn die Unterstützung verfügbar ist, überprüfen wir, ob `session` bereits einen Wert zugewiesen hat (wir möchten nicht jedes Mal eine neue Sitzung erstellen). Falls nicht, führen wir die `init()`-Funktion aus.

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

Die `init()`-Funktion generiert eine `LanguageModel`-Instanz mit der benutzerdefinierten `getSession()`-Funktion.

Vorausgesetzt, die Erstellung ist erfolgreich, weisen wir die resultierende `LanguageModel`-Instanz der `session`-Variable zu, drucken eine Erfolgsmeldung in die Ausgabe-`<p>`, aktivieren das `<input>`, damit Bilder ausgewählt werden können, und weisen Ereignislistener zu, um die Benutzeroberfläche zu aktualisieren, wenn ein neues Bild im Datei-Picker ausgewählt wird, und um die Einreichung einer Prompt-Abfrage zu behandeln.

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

Die `getSession()`-Funktion funktioniert wie in anderen Beispielen ([`getSession()` wird hier erklärt](/de/docs/Web/API/Prompt_API/Using#:~:text=Now%20we%20define%20the%20getSession%28%29%20function)), außer dass wir `image` sowie `text` in unsere `expectedInputs`-Option aufnehmen:

```js
return await LanguageModel.create({
  expectedInputs: [{ type: "text", languages: ["en"] }, { type: "image" }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});
```

Die `getImage()`-Funktion überprüft zuerst, ob eine Datei im `<input type="file">`-Picker ausgewählt ist. Falls nicht, drucken wir einen geeigneten Fehler in die Ausgabe-`<p>` und `return` dann. Am Ende des Funktionskörpers setzen wir das `src`-Attribut des `<img>`-Elements auf eine Objekt-URL, die aus der im Datei-Picker ausgewählten Datei erstellt wurde, sodass das Bild in der Benutzeroberfläche angezeigt wird.

Oben fügen wir zwei Ereignislistener zum `<img>` hinzu:

- Wenn ein `error`-Ereignis im `<img>` ausgelöst wird, drucken wir einen geeigneten Fehler in die Ausgabe-`<p>` und `return` dann.
- Wenn ein `load`-Ereignis im `<img>` ausgelöst wird, drucken wir eine Erfolgsmeldung in die Ausgabe-`<p>`, um dem Benutzer mitzuteilen, dass die App bereit ist, die Abfrage des Bildes durchzuführen, und aktivieren dann den `<button>` zur Einreichung, damit die Abfrage eingereicht werden kann.

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

Die `handleSubmission()`-Funktion verwendet denselben Ablauf wie bei vorherigen Beispielen, um das Sprachmodell zu fragen und die Ausgabe abzurufen ([Erklärung siehe hier](/de/docs/Web/API/Prompt_API/Using#:~:text=Next%2C%20inside%20a%20try%20block%2C%20we)). Der Hauptunterschied besteht darin, dass wir in den Eingaben des `prompt()`-Aufrufs zuerst die API bitten, das Bild zu beschreiben, und ihr dann einen Verweis auf das `<img>`-Element selbst übergeben.

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

Fokussieren Sie das eingebettete Demo-Fenster und drücken Sie eine Taste auf Ihrer Tastatur, um die App zu starten, dann wählen Sie ein Bild mit dem Datei-Picker aus. Wenn das Bild geladen wird, drücken Sie die Schaltfläche "Abfrage einreichen". Nach kurzer Wartezeit sollte die Bildbeschreibung der API in der Ausgabe-`<p>` erscheinen.

## Siehe auch

- [MediaRecorder + Audio Prompt API Demo](https://chrome.dev/web-ai-demos/mediarecorder-audio-prompt/) auf chrome.dev (2026)
- [Prompt API mit Bild-Eingabe-Demo](https://chrome.dev/web-ai-demos/canvas-image-prompt/) auf chrome.dev (2026)
