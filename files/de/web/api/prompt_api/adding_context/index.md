---
title: Hinzufügen von Kontext mit anfänglichen und laufenden Eingabeaufforderungen
short-title: Hinzufügen von Kontext
slug: Web/API/Prompt_API/Adding_context
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

{{DefaultAPISidebar("Prompt API")}}

In unserem grundlegenden [Prompt-API-Leitfaden](/de/docs/Web/API/Prompt_API/Using) haben wir alles behandelt, was Sie benötigen, um mit der [Prompt API](/de/docs/Web/API/Prompt_API) zu beginnen. Dies deckt jedoch nur die Erstellung einer generischen AI-Prompt-App ab. Um Ihrer App verschiedene Persönlichkeiten zu geben, sie auf unterschiedliche Weise reagieren zu lassen und sich an vergangene Gespräche zu erinnern, müssen Sie zusätzlichen Kontext bereitstellen. Die Prompt API bietet verschiedene Mechanismen, um dies zu ermöglichen, die in diesem Artikel behandelt werden.

## Eingabeaufforderungssyntax

Wenn [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt) aufgerufen wird, nimmt es einen `input`-Parameter entgegen, der die Eingaben enthält, auf die reagiert werden soll:

```js
const response = await session.prompt(inputElem.value);
```

Der vorherige `prompt()`-Aufruf erhält nur einen einzigen String als Parameter. Dies ist eine Kurzform, die für die häufige Situation verfügbar ist, in der Sie dem Modell nur eine einzelne Benutzereingabe übergeben möchten. Sie können dies erweitern, um die `role` des `input`-Objekts explizit anzugeben:

```js
const response = await session.prompt([
  {
    role: "user",
    content: inputElem.value,
  },
]);
```

Die drei verfügbaren `role`-Typen sind:

- `user`
  - : Eingaben, die vom `user` kommen und auf die die API reagieren soll.
- `assistant`
  - : Eingaben, die aus der Sicht des KI-Assistenten geschrieben sind und hauptsächlich dazu dienen, Kontext/Verlauf bereitzustellen und die Art und Weise, wie das Modell reagiert, weiter zu gestalten. Diese werden häufig zur [Sitzungserhaltung](/de/docs/Web/API/Prompt_API/Preserving_sessions) und bei [wenigen Beispielaufforderungen](#wenige_beispielaufforderungen) verwendet.
- `system`
  - : Globale Eingaben aus dem gesamten System, die dem Modell Anweisungen darüber geben, wie es reagieren soll. Wenn eine `system`-Eingabe enthalten ist, muss sie zuerst in den bereitgestellten Eingaben erscheinen, ansonsten wird das zurückgegebene Versprechen mit einer Ausnahme abgelehnt. `system`-Eingaben werden normalerweise nur als [anfängliche Eingabeaufforderungen](#bereitstellung_anfänglicher_eingabeaufforderungen_während_der_sitzungs-erstellung) eingeschlossen.

### Mehrere Eingaben

Sie können mehrere Eingaben im Array bereitstellen, zum Beispiel:

```js
const response = await session.prompt([
  {
    role: "user",
    content: "The following is my favorite color. Do you like it?",
  },
  {
    role: "user",
    content: inputElem.value,
  },
]);
```

Dies ist nützlich, weil Sie zusätzlichen Kontext bereitstellen können, um dem Modell zu helfen, eine Antwort zusammen mit der tatsächlichen Eingabe von der Seite, die möglicherweise nur ein Wort ist, zu erstellen.

### Angabe des Eingabetyps

Standardmäßig ist der `input`-Typ `text`. Um den `type` explizit anzugeben, können Sie die vorherige Form weiter ausbauen, um das vollständige Langform-Äquivalent anzugeben, das wie folgt aussieht:

```js
const response = await session.prompt([
  {
    role: "user",
    content: [
      {
        type: "text",
        value: inputElem.value,
      },
    ],
  },
]);
```

Sie benötigen diese Form nicht, es sei denn, Sie geben dem Assistenten `image`- und/oder `audio`-Eingaben (siehe [multimodale Eingaben](/de/docs/Web/API/Prompt_API/Multimodal)):

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

Sie könnten jedoch das vorherige Beispiel mit mehreren Benutzereingaben in diese Form umschreiben, das beide Nachrichten in einem einzigen Eingabeobjekt enthält. Möglicherweise finden Sie diese Version einfacher zu verstehen:

```js
const response = await session.prompt([
  {
    role: "user",
    content: [
      {
        type: "text",
        value: "The following is my favorite color. Do you like it?",
      },
      { type: "text", value: inputElem.value },
    ],
  },
]);
```

## Bereitstellung anfänglicher Eingabeaufforderungen während der Sitzungs-erstellung

Die Methode [`create()`](/de/docs/Web/API/LanguageModel/create_static) kann eine Option [`initialPrompts`](/de/docs/Web/API/LanguageModel/create_static#initialprompts) aufnehmen, die ein Array von Eingabeaufforderungen enthält, ähnlich wie das `inputs`-Array, das an `prompt()` und andere Methoden übergeben wird. Dadurch können Sie eine anfängliche Reihe von Aufforderungen in die Sitzung übergeben, wenn sie erstellt wird, sodass das Modell sofort über einige Kontexte verfügt, mit denen es arbeiten kann.

Zum Beispiel:

```js
const session = await LanguageModel.create({
  initialPrompts: [
    {
      role: "system",
      content: "Respond like a pirate.",
    },
    {
      role: "assistant",
      content: "Avast ye, pirate! I am Redbeard!",
    },
    {
      role: "user",
      content:
        "Yarrrr, matey! Well met. My name is Silas Blacktooth, the scourge of Blackpool!",
    },
  ],
});
```

Neben dem Modell mitzuteilen, welche Art von Persönlichkeit es haben soll, ist `initialPrompts` auch nützlich, um ein zuvor gespeichertes Gespräch nach einem Seiten-Reload oder einem späteren Besuch der App in die Sitzung zu laden. Siehe [Erhaltung von Sitzungen über Wiederladungen hinweg](/de/docs/Web/API/Prompt_API/Preserving_sessions).

> [!NOTE]
> Die in [Eingabeaufforderungssyntax](#eingabeaufforderungssyntax) diskutierte Textzeichenfolgen-Kurzform kann nicht in der `initialPrompts`-Option eines `create()`-Aufrufs verwendet werden.

## Wenige Beispielaufforderungen

Eine wenige Beispielaufforderung ist eine Reihe von `user`-Rolle und `assistant`-Rolle Eingabepaaren, die als Beispiel an die API übergeben werden, um diese zu schulen, wie sie auf eine bestimmte Art von Eingabe reagieren soll, bevor sie aufgefordert wird, eine ähnliche Aufgabe zu erfüllen.

Das folgende Beispiel zeigt, wie man eine wenige Beispielaufforderung verwendet, um eine französische Übersetzung in einem bestimmten Format anzufordern, indem Beispiel-Eingaben und -Ausgaben bereitgestellt werden, um die erwartete Struktur zu demonstrieren.

```js
const session = await LanguageModel.create({
  expectedInputs: [{ type: "text", languages: ["en"] }],
  expectedOutputs: [{ type: "text", languages: ["en", "fr"] }],
  initialPrompts: [
    {
      role: "system",
      content:
        "Translate the user's input to French. Use the output format 'English input: French output'",
    },
    { role: "user", content: "Hello" },
    { role: "assistant", content: "Hello: Bonjour" },
    { role: "user", content: "Goodbye" },
    { role: "assistant", content: "Goodbye: Au revoir" },
    { role: "user", content: "The train is late" },
    {
      role: "assistant",
      content: "The train is late: Le train est en retard",
    },
    { role: "user", content: "My shoes are pink" },
    {
      role: "assistant",
      content: "My shoes are pink: Mes chaussures sont roses",
    },
  ],
});

const result = await session.prompt("Window");
console.log(result); // "Window: Fenêtre"
```

Sie könnten nur die `system`-anfängliche Aufforderung einschließen, und das Beispiel würde immer noch funktionieren, aber es wäre weniger wahrscheinlich, dass es Antworten im gewünschten Format liefert.

## Beispiel für anfängliche und mehrere Eingaben

Werfen wir einen Blick auf ein Beispiel, das anfängliche und mehrere Eingaben für zusätzlichen Kontext verwendet. In diesem Beispiel wird der Benutzer aufgefordert, seinen Namen einzugeben, und die API bietet eine skurrile Bewertung davon.

Technisch gesehen ist dies dem [vollständigen Beispiel](/de/docs/Web/API/Prompt_API/Using#complete_example) aus dem vorherigen Leitfaden sehr ähnlich, wobei die einzigen wirklichen Unterschiede darin bestehen, dass die Benutzereingabe über eine einzeilige Text{{htmlelement("input")}} erfolgt, anstatt über eine {{htmlelement("textarea")}}, und die `create()`- und `prompt()`-Aufrufe sich unterscheiden. Daher werden wir den gesamten Code hier nicht noch einmal durchgehen. Um den Code genauer zu betrachten, sehen Sie sich die Beschreibungen des vorherigen Artikels an und drücken Sie die "Play"-Taste im gerenderten Live-Output, um den vollständigen Code im MDN Playground zu öffnen.

```html hidden live-sample___rate-my-name
<h1>Prompt API rate my name!</h1>
<p>
  Enter your name (or someone else's name) into the input field and press the
  rate button to have AI review your name. First released in Chrome 148.
</p>

<h2>Input</h2>

<form>
  <div>
    <label for="prompt-text">Enter your name:</label>
    <input id="prompt-text" name="promptText" />
  </div>
  <button type="submit" id="submit">Rate my name!</button
  ><button type="button" id="abort">Abort rating</button>
</form>

<h2>Output</h2>

<p class="prompt-output"></p>
```

```css hidden live-sample___rate-my-name live-sample___excerpt-question live-sample___constraint-example
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

form div {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

input,
textarea,
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

```js hidden live-sample___rate-my-name
const form = document.querySelector("form");
const inputElem = document.querySelector("input");
const submitBtn = document.querySelector("#submit");
const abortBtn = document.querySelector("#abort");
abortBtn.disabled = true;
submitBtn.disabled = true;
const promptOutput = document.querySelector(".prompt-output");

let session;
inputElem.addEventListener("focus", () => {
  if (!("LanguageModel" in window)) {
    promptOutput.innerHTML = `<span class="error">Your browser doesn't support the Prompt API!</span>`;
    return;
  }

  if (!session) {
    init();
  }
});

async function init() {
  session = await getSession();
  promptOutput.textContent = `Session created.`;
  submitBtn.disabled = false;
}

form.addEventListener("submit", handleSubmission);

async function handleSubmission(e) {
  e.preventDefault();

  if (inputElem.value === "") {
    promptOutput.innerHTML = `<span class="error">No text entered!</span>`;
    return;
  }

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
          content: "What do you think of my name?",
        },
        {
          role: "user",
          content: inputElem.value,
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
  }
}

async function getSession() {
  const availability = await LanguageModel.availability({
    expectedInputs: [{ type: "text", languages: ["en"] }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
  });
  if (availability === "unavailable") {
    promptOutput.textContent = "Language model not available.";
    return undefined;
  } else if (availability === "available") {
    return await LanguageModel.create({
      expectedInputs: [{ type: "text", languages: ["en"] }],
      expectedOutputs: [{ type: "text", languages: ["en"] }],
      initialPrompts: [
        {
          role: "system",
          content:
            "In each case, respond with a short paragraph that pokes fun at the person's name in a sarcastic manner. Include a rating out of 10 at the end of the paragraph. The response should be cheeky, but not rude or offensive.",
        },
      ],
    });
  }
  return await LanguageModel.create({
    expectedInputs: [{ type: "text", languages: ["en"] }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
    initialPrompts: [
      {
        role: "system",
        content:
          "In each case, respond with a short paragraph that pokes fun at the person's name in a sarcastic manner. Include a rating out of 10 at the end of the paragraph. The response should be cheeky, but not rude or offensive.",
      },
    ],
    monitor(monitor) {
      monitor.addEventListener("downloadprogress", (e) => {
        promptOutput.textContent = `Downloading model data ${Math.floor(e.loaded * 100)}%`;
      });
    },
  });
}
```

### JavaScript

Wenn die Methode [`create()`](/de/docs/Web/API/LanguageModel/create_static) aufgerufen wird, um die `LanguageModel`-Instanz der Sitzung zu erstellen, übergeben wir eine `initialPrompts`-Option, die eine `system`-Eingabe enthält, um dem Modell genau mitzuteilen, wie es auf jede Benutzereingabe reagieren soll:

```js
return await LanguageModel.create({
  expectedInputs: [{ type: "text", languages: ["en"] }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
  initialPrompts: [
    {
      role: "system",
      content:
        "In each case, respond with a short paragraph that pokes fun at the person's name in a sarcastic manner. Include a rating out of 10 at the end of the paragraph. The response should be cheeky, but not rude or offensive.",
    },
  ],
});
```

Wenn wir `prompt()` auf unserem `session`-Objekt aufrufen, übergeben wir ihm zwei `user`-Eingabeobjekte. Das erste macht klar, was der Benutzer von der API verlangt, und das zweite liefert den Namen des Benutzers, der in das `<input>`-Element eingegeben wurde, zur Bewertung durch die API.

```js
const response = await session.prompt(
  [
    {
      role: "user",
      content: "What do you think of my name?",
    },
    {
      role: "user",
      content: inputElem.value,
    },
  ],
  {
    signal: controller.signal,
  },
);
```

### Ergebnis

{{EmbedLiveSample("rate-my-name", , "600px", , , , "language-model", "allow-forms")}}

Versuchen Sie, einen Namen in das `<input>` einzugeben, und drücken Sie dann die Schaltfläche zum Absenden, um das KI-Modell um eine skurrile Bewertung des Namens zu bitten.

## Hinzufügen von Antwortbeschränkungen

Die Methoden `prompt()` und [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) akzeptieren beide eine [`responseConstraint`](/de/docs/Web/API/LanguageModel/prompt#responseconstraint) Option, die als Wert ein [JSON-Schema](https://json-schema.org/) Objekt hat, das das genaue Format angibt, das für die Antworten des Assistenten erwartet wird. Dies liefert kontrolliertere Ergebnisse, als nur die API zu bitten, auf eine bestimmte Weise auf eine `system`-Aufforderung zu reagieren.

Ein sehr einfaches Schema könnte eine Antwort definieren, die einen einzelnen booleschen Wert enthalten soll:

```js
const schema = {
  type: "boolean",
};
```

Um dies zu verwenden, legen Sie das Schema als Wert der `responseConstraint`-Option fest:

```js
const response = await session.prompt(
  [
    {
      role: "user",
      content: `Is this a color: ${inputElem.value}?`,
    },
  ],
  {
    responseConstraint: schema,
  },
);
```

In diesem Fall setzen wir den Inhalt der Eingabeaufforderung auf "Ist dies eine Farbe:" gefolgt vom `value` des `<input>`-Elements. Infolgedessen wird die API bewerten, ob die Eingabe des Benutzers eine Farbe ist oder nicht, und einen Wert von `true` oder `false` zurückgeben.

### Ein komplexeres Beschränkungsbeispiel

Werfen wir einen Blick auf ein komplexeres Beispiel, um Ihnen eine bessere Vorstellung davon zu geben, was mit Antwortbeschränkungen möglich ist. In diesem Fall gibt das Schema an, dass die API-Antwort als JSON geliefert werden soll, das enthält:

- Einen einzelnen String, der eine Zusammenfassungsbeschreibung darstellt.
- Ein Array von genau drei Strings, die drei unterstützende Aufzählungspunkte darstellen.

```js
const schema = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  title: "Description with Three Bullets",
  type: "object",
  properties: {
    description: {
      type: "string",
      description: "A descriptive sentence summarizing the content.",
      minLength: 1,
    },
    bullets: {
      type: "array",
      description: "Exactly three supporting bullet points.",
      items: {
        type: "string",
        minLength: 1,
      },
      minItems: 3,
      maxItems: 3,
    },
  },
  required: ["description", "bullets"],
  additionalProperties: false,
};
```

Dies wird wie zuvor in der `responseConstraint`-Option des `prompt()`-Aufrufs eingeschlossen:

```js
const response = await session.prompt(textarea.value, {
  responseConstraint: schema,
});
```

Da die Antwort als JSON-String spezifiziert ist, können wir die Antwort in ein Objekt parsen und dann die Eigenschaften des Objekts in unserer Antwort verwenden:

```js
const structuredOutput = JSON.parse(response);

promptOutput.innerHTML = `${structuredOutput.description}<br><br>- ${structuredOutput.bullets[0]}<br>- ${structuredOutput.bullets[1]}<br>- ${structuredOutput.bullets[2]}`;
```

Sie können dieses Demo im folgenden Live-Beispiel ausprobieren:

```html hidden live-sample___constraint-example
<h1>Prompt API constraint demo</h1>
<p>
  Type in a subject. The demo uses a JSON schema to constrain the API response
  to a JSON string containing a summary string and an array containing three
  supporting strings. Released in Chrome 148, but trialed since version 137.
</p>

<h2>Input</h2>

<form>
  <div>
    <label for="prompt-text">Enter prompt text:</label>
    <textarea id="prompt-text" name="promptText" rows="6"></textarea>
  </div>
  <button type="submit" id="submit">Submit query</button
  ><button type="button" id="abort">Abort query</button>
</form>

<h2>Output</h2>

<p class="prompt-output"></p>
```

```js hidden live-sample___constraint-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("#submit");
const abortBtn = document.querySelector("#abort");
abortBtn.disabled = true;
submitBtn.disabled = true;
const promptOutput = document.querySelector(".prompt-output");

let session;
textarea.addEventListener("focus", () => {
  if (!("LanguageModel" in window)) {
    promptOutput.innerHTML = `<span class="error">Your browser doesn't support the Prompt API!</span>`;
    return;
  }

  if (!session) {
    init();
  }
});

async function init() {
  session = await getSession();
  promptOutput.textContent = `Session created.`;
  submitBtn.disabled = false;
}

form.addEventListener("submit", handleSubmission);

async function handleSubmission(e) {
  e.preventDefault();

  if (textarea.value === "") {
    promptOutput.innerHTML = `<span class="error">No text entered!</span>`;
    return;
  }

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

    const schema = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      title: "Description with Three Bullets",
      type: "object",
      properties: {
        description: {
          type: "string",
          description: "A descriptive sentence summarizing the content.",
          minLength: 1,
        },
        bullets: {
          type: "array",
          description: "Exactly three supporting bullet points.",
          items: {
            type: "string",
            minLength: 1,
          },
          minItems: 3,
          maxItems: 3,
        },
      },
      required: ["description", "bullets"],
      additionalProperties: false,
    };

    const response = await session.prompt(textarea.value, {
      signal: controller.signal,
      responseConstraint: schema,
    });

    const structuredOutput = JSON.parse(response);

    promptOutput.innerHTML = `${structuredOutput.description}<br><br>- ${structuredOutput.bullets[0]}<br>- ${structuredOutput.bullets[1]}<br>- ${structuredOutput.bullets[2]}`;

    submitBtn.disabled = false;
    abortBtn.disabled = true;
    console.log(`${session.contextUsage}/${session.contextWindow}`);
  } catch (e) {
    promptOutput.innerHTML = `<span class="error">${e}</span>`;
  }
}

async function getSession() {
  const availability = await LanguageModel.availability({
    expectedInputs: [{ type: "text", languages: ["en"] }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
  });
  if (availability === "unavailable") {
    promptOutput.textContent = "Language model not available.";
    return undefined;
  } else if (availability === "available") {
    return await LanguageModel.create({
      expectedInputs: [{ type: "text", languages: ["en"] }],
      expectedOutputs: [{ type: "text", languages: ["en"] }],
    });
  }
  return await LanguageModel.create({
    expectedInputs: [{ type: "text", languages: ["en"] }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
    monitor(monitor) {
      monitor.addEventListener("downloadprogress", (e) => {
        promptOutput.textContent = `Downloading model data ${Math.floor(e.loaded * 100)}%`;
      });
    },
  });
}
```

{{EmbedLiveSample("constraint-example", , "660px", , , , "language-model", "allow-forms")}}

## Zusätzliche Nachrichten zum Kontext hinzufügen

Die Ableitung einer Antwort auf eine Benutzerfrage oder -aussage kann lange dauern, insbesondere wenn die API mit großen, komplexen Texteingaben oder multimodalen Eingaben umgehen muss.

Um die wahrgenommene Latenzzeit zwischen der Benutzeraufforderung und der Antwort zu verringern, kann es sinnvoll sein, die API so schnell wie möglich mit der Verarbeitung der Anfrage zu beginnen — indem nützlicher Kontext bereitgestellt wird, bevor der Benutzer seine tatsächliche Eingabe sendet — oder danach weiteren Kontext hinzuzufügen.

Die Methode [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append) dient dazu, solchen Kontext bereitzustellen — sie fügt zusätzliche Eingaben zur Verarbeitung durch die API hinzu, ohne eine Modellantwort zu erzeugen.

Zum Beispiel liefern wir im folgenden Ausschnitt einen Auszug aus einem ziemlich berühmten Buch. Wir verwenden `append()`, um den Auszug in die API-Sitzung einzuspeisen, und stellen dann eine Frage darüber mittels eines `prompt()`-Aufrufs. Der Browser kann mit der Verarbeitung des Auszugs beginnen, während er darauf wartet, dass die Frage gestellt wird.

```js
const excerpt =
  "The face of Elrond was ageless, neither old nor young, though in it was written the memory of many things both glad and sorrowful. His hair was dark as the shadows of twilight, and upon it was set a circlet of silver; his eyes were grey as a clear evening, and in them was a light like the light of stars. Venerable he seemed as a king crowned with many winters, and yet hale as a tried warrior in the fullness of his strength. He was Lord of Rivendell and mighty among both Elves and Men.";

await session.append(excerpt);

// ...

const response = await session.prompt([
  {
    role: "user",
    content: "What book was the last entered text taken from?",
  },
]);
```

### Ein Anhängebeispiel

Werfen wir einen Blick auf eine reale Implementierung des zuvor genannten Auszugsbeispiels. In diesem Fall können Sie einen Textabschnitt in ein Eingabefeld eingeben und eine Frage zu diesem Text in ein anderes. Wenn Sie dies absenden, wird die API-Antwort die Frage speziell im Kontext des bereitgestellten Textabschnitts beantworten.

Es funktioniert ähnlich wie die vorherigen Beispiele, daher werden wir nicht den gesamten Code erschöpfend durchgehen. Um den vollständigen Code zu studieren, drücken Sie die "Play"-Taste im gerenderten Live-Output, um den vollständigen Code im MDN Playground zu öffnen.

```html hidden live-sample___excerpt-question
<h1>Prompt API excerpt question demo</h1>
<p>
  Enter a passage of text (such as a book excerpt) into the textarea, then enter
  a question about the text into the single-line input. Press the submit button
  to ask your question to the API. First released in Chrome 148.
</p>

<h2>Input</h2>

<form>
  <div>
    <label for="excerpt-text">Enter your text passage:</label>
    <textarea id="excerpt-text" name="excerpt-text" rows="6"></textarea>
  </div>
  <div>
    <label for="question-text">Enter your question:</label>
    <input id="question-text" name="question-text" />
  </div>
  <button type="submit" id="submit">Ask question!</button
  ><button type="button" id="abort">Abort question</button>
</form>

<h2>Output</h2>

<p class="prompt-output"></p>
```

```js hidden live-sample___excerpt-question
const form = document.querySelector("form");
const textareaElem = document.querySelector("textarea");
const inputElem = document.querySelector("input");
const submitBtn = document.querySelector("#submit");
const abortBtn = document.querySelector("#abort");
abortBtn.disabled = true;
submitBtn.disabled = true;
const promptOutput = document.querySelector(".prompt-output");

let session;
textareaElem.addEventListener("focus", () => {
  if (!("LanguageModel" in window)) {
    promptOutput.innerHTML = `<span class="error">Your browser doesn't support the Prompt API!</span>`;
    return;
  }

  if (!session) {
    init();
  }
});

async function init() {
  session = await getSession();
  promptOutput.textContent = `Session created.`;
}

textareaElem.addEventListener("change", appendExcerpt);
form.addEventListener("submit", handleSubmission);

async function appendExcerpt() {
  if (textareaElem.value === "") {
    promptOutput.innerHTML = `<span class="error">No passage entered!</span>`;
    return;
  }
  session.append(textareaElem.value);
  submitBtn.disabled = false;
}

async function handleSubmission(e) {
  e.preventDefault();

  if (inputElem.value === "") {
    promptOutput.innerHTML = `<span class="error">No question entered!</span>`;
    return;
  }

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
          content: "I have a question for you about the provided text.",
        },
        {
          role: "user",
          content: inputElem.value,
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
  }
}

async function getSession() {
  const availability = await LanguageModel.availability({
    expectedInputs: [{ type: "text", languages: ["en"] }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
  });
  if (availability === "unavailable") {
    promptOutput.textContent = "Language model not available.";
    return undefined;
  } else if (availability === "available") {
    return await LanguageModel.create({
      expectedInputs: [{ type: "text", languages: ["en"] }],
      expectedOutputs: [{ type: "text", languages: ["en"] }],
    });
  }
  return await LanguageModel.create({
    expectedInputs: [{ type: "text", languages: ["en"] }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
    monitor(monitor) {
      monitor.addEventListener("downloadprogress", (e) => {
        promptOutput.textContent = `Downloading model data ${Math.floor(e.loaded * 100)}%`;
      });
    },
  });
}
```

#### JavaScript

In diesem Beispiel wird der Auszug in ein `<textarea>` eingegeben. Sobald das `change`-Ereignis des `<textarea>` ausgelöst wird (was bedeutet, dass der Benutzer etwas Text eingegeben hat und dann den Fokus woanders hin verlagert hat), führen wir die Funktion `appendExcerpt()` aus. Diese überprüft, ob das `<textarea>` Text enthält. Falls ja, wird der Text über `append()` an die Sitzung übergeben, sodass die Verarbeitung beginnen kann. An diesem Punkt aktivieren wir auch die Schaltfläche zum Absenden des Formulars (wir haben sie zuvor deaktiviert, damit keine Frage eingereicht werden kann, ohne dass ein Auszug eingegeben wurde).

```js
textareaElem.addEventListener("change", appendExcerpt);

async function appendExcerpt() {
  if (textareaElem.value === "") {
    promptOutput.innerHTML = `<span class="error">No passage entered!</span>`;
    return;
  }
  session.append(textareaElem.value);
  submitBtn.disabled = false;
}
```

Die Frage wird in ein Text `<input>` eingegeben. Sobald das `<form>`, das die Eingabe enthält, abgesendet wird (das `submit`-Ereignis wird ausgelöst), führen wir die Funktion `handleSubmission()` aus. Der bedeutendste Teil des Funktionskörpers ist der `prompt()`-Aufruf. Wir übergeben zwei `user`-Eingaben daran — eine, die besagt, dass die Frage sich auf den bereitgestellten Text bezieht (früher über den `append()`-Aufruf übergeben), und eine mit der tatsächlichen Frage, die aus dem `value` des `<input>`-Elements entnommen wird.

```js
form.addEventListener("submit", handleSubmission);

async function handleSubmission(e) {
  // ...

  const response = await session.prompt(
    [
      {
        role: "user",
        content: "I have a question for you about the provided text.",
      },
      {
        role: "user",
        content: inputElem.value,
      },
    ],
    {
      signal: controller.signal,
    },
  );

  promptOutput.textContent = response;

  // ...
}
```

#### Ergebnis

{{EmbedLiveSample("excerpt-question", , "730px", , , , "language-model", "allow-forms")}}

Versuchen Sie, einen Textabschnitt in das Textfeld einzugeben und eine Frage zu diesem Abschnitt in das einzeilige Eingabefeld einzugeben, und senden Sie dann das Formular ab.
