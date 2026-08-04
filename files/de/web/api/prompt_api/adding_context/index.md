---
title: Hinzufügen von Kontext mit anfänglichen und fortlaufenden Eingaben
short-title: Hinzufügen von Kontext
slug: Web/API/Prompt_API/Adding_context
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{DefaultAPISidebar("Prompt API")}}

In unserem grundlegenden [Prompt API Leitfaden](/de/docs/Web/API/Prompt_API/Using) haben wir alles behandelt, was Sie benötigen, um mit der [Prompt API](/de/docs/Web/API/Prompt_API) loszulegen. Dies deckt jedoch nur die Erstellung einer generischen KI-Prompt-App ab. Um Ihrer App unterschiedliche Persönlichkeiten zu verleihen, sie auf verschiedene Arten reagieren zu lassen und vergangene Gespräche zu erinnern, müssen Sie zusätzlichen Kontext bereitstellen. Die Prompt API bietet einige verschiedene Mechanismen, um dies zu ermöglichen, die in diesem Artikel behandelt werden.

## Syntax für Prompt-Eingaben

Wenn [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt) aufgerufen wird, nimmt es einen `input` Parameter an, der die Eingaben enthält, auf die reagiert werden soll:

```js
const response = await session.prompt(inputElem.value);
```

Der vorherige `prompt()` Aufruf erhält nur einen einzelnen String als Parameter. Dies ist eine Kurzform, die für die häufige Situation verfügbar ist, in der Sie dem Modell lediglich einen einzelnen Benutzereingabetext übergeben möchten. Sie können dies erweitern, um die `role` des `input` Objekts explizit zu deklarieren:

```js
const response = await session.prompt([
  {
    role: "user",
    content: inputElem.value,
  },
]);
```

Die drei verfügbaren `role` Typen sind:

- `user`
  - : Eingaben, die vom `user` kommen und auf die die API reagieren soll.
- `assistant`
  - : Eingaben, die aus der Sicht des KI-Assistenten geschrieben sind, die hauptsächlich dazu dienen, Kontext/Geschichte bereitzustellen und die Reaktionen des Modells weiter zu gestalten. Diese werden häufig für [das Bewahren von Sitzungen](/de/docs/Web/API/Prompt_API/Preserving_sessions) und [Few-Shot Prompts](#few-shot_prompts) verwendet.
- `system`
  - : Globale Eingaben aus dem gesamten System, die dem Modell Anweisungen geben, wie es reagieren soll. Wenn ein `system` Input enthalten ist, muss es als erstes in den bereitgestellten Eingaben sein, andernfalls wird das zurückgegebene Versprechen mit einer Ausnahme abgelehnt. `system` Eingaben werden normalerweise nur als [anfängliche Prompts](#anfängliche_prompts_während_der_sitzungs-erstellung_bereitstellen) enthalten.

### Mehrfache Eingaben

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

Dies ist nützlich, da Sie zusätzlichen Kontext bereitstellen können, um dem Modell dabei zu helfen, eine Antwort zu entwickeln, zusammen mit der eigentlichen Eingabe, die von der Seite genommen wurde, die möglicherweise nur ein Wort enthält.

### Eingabetyp festlegen

Standardmäßig ist der `input` Typ `text`. Um den `type` explizit zu deklarieren, können Sie die vorherige Form weiter zur vollständigen Ausführung ausdehnen, die so aussieht:

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

Sie benötigen diese Form nicht, es sei denn, Sie geben dem Assistenten `image` und/oder `audio` Eingaben (siehe [multimodale Prompts](/de/docs/Web/API/Prompt_API/Multimodal)):

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

Sie könnten jedoch das vorherige Beispiel mit mehreren Benutzereingaben in dieser Form umschreiben, das beide Nachrichten in einem einzelnen Eingabeobjekt enthält. Sie könnten diese Version leichter nachvollziehbar finden:

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

## Anfängliche Prompts während der Sitzungs-Erstellung bereitstellen

Die [`create()`](/de/docs/Web/API/LanguageModel/create_static) Methode kann eine `initialPrompts` Option übernehmen, die ein Array von Eingabe-Prompts enthält, genau wie das `inputs` Array, das an `prompt()` und andere Methoden übergeben wird. Dies ermöglicht es Ihnen, einen anfänglichen Satz von Prompts in die Sitzung einzuführen, während sie erstellt wird, sodass das Modell sofort einige Kontextinformationen zum Arbeiten hat.

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

Neben der Anweisung an das Modell, welche Art von Persönlichkeit es haben sollte, ist `initialPrompts` auch nützlich, um ein zuvor gespeichertes Gespräch in die Sitzung zu laden, nachdem die Seite neu geladen wurde oder ein erneuter Besuch der App erfolgt ist. Siehe [Bewahren von Sitzungen über Neuladungen hinweg](/de/docs/Web/API/Prompt_API/Preserving_sessions).

> [!NOTE]
> Die oben in [Syntax für Prompt-Eingaben](#syntax_für_prompt-eingaben) besprochene String-Kurzform kann nicht in der `initialPrompts` Option eines `create()` Aufrufs verwendet werden.

## Few-Shot Prompts

Ein Few-Shot Prompt ist ein Satz von `user`- und `assistant`-Rollen-Eingabepaaren, die der API als Beispiel übergeben werden, um sie darauf zu trainieren, auf eine bestimmte Art von Eingabe zu reagieren, bevor sie gebeten wird, eine ähnliche Aufgabe zu erfüllen.

Das folgende Beispiel zeigt, wie ein Few-Shot Prompt verwendet wird, um eine französische Übersetzung in einem bestimmten Format anzufordern, wobei Beispiel-Eingaben und -Ausgaben bereitgestellt werden, um die erwartete Struktur zu demonstrieren.

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

Sie könnten nur den `system` anfänglichen Prompt einfügen und das Beispiel würde immer noch funktionieren, aber es wäre weniger wahrscheinlich, dass Antworten im gewünschten Format geliefert werden.

## Beispiel für anfängliche und mehrere Eingaben

Schauen wir uns ein Beispiel an, das anfängliche und mehrere Eingaben für zusätzlichen Kontext verwendet. In diesem Beispiel wird der Benutzer aufgefordert, seinen Namen einzugeben, und die API liefert eine humorvolle Bewertung davon.

Technisch gesehen ist dies dem [vollständigen Beispiel](/de/docs/Web/API/Prompt_API/Using#complete_example) aus dem vorherigen Leitfaden sehr ähnlich, der einzige wirkliche Unterschied besteht darin, dass die Benutzereingabe über eine einzeilige Text-{{htmlelement("input")}} bereitgestellt wird, anstatt über eine {{htmlelement("textarea")}}, und die `create()` und `prompt()` Aufrufe unterschiedlich sind. Daher werden wir nicht den gesamten Code noch einmal durchgehen. Um den Code eingehender zu überprüfen, sehen Sie sich die Beschreibungen im vorherigen Artikel an und drücken Sie die Schaltfläche "Play" im gerenderten Live-Ausgang, um den vollständigen Code im MDN Playground zu öffnen.

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
  } else {
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
}
```

### JavaScript

Wenn die [`create()`](/de/docs/Web/API/LanguageModel/create_static) Methode aufgerufen wird, um die Sitzungs-`LanguageModel` Instanz zu erstellen, übergeben wir eine `initialPrompts` Option, die eine `system` Eingabe enthält, um dem Modell genau mitzuteilen, wie wir möchten, dass es auf jede Benutzeranfrage reagiert:

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

Wenn wir [`prompt()`](/de/docs/Web/API/LanguageModel/prompt) auf unserem `session` Objekt aufrufen, übergeben wir zwei `user` Eingabeobjekte. Das erste macht deutlich, was der Benutzer von der API verlangt, und das zweite stellt den Namen des Benutzers zur Verfügung, der in das `<input>` Element eingegeben wurde, damit die API ihn überprüfen kann.

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

Versuchen Sie, einen Namen in das `<input>` einzugeben und dann die Schaltfläche "Senden" zu drücken, um das KI-Modell um eine humorvolle Bewertung des Namens zu bitten.

## Hinzufügen von Antwortbeschränkungen

Die `prompt()` und [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) Methoden akzeptieren beide eine [`responseConstraint`](/de/docs/Web/API/LanguageModel/prompt#responseconstraint) Option, deren Wert ein [JSON Schema](https://json-schema.org/) Objekt ist, das das genaue Format für die Antworten des Assistenten definiert. Dies liefert kontrolliertere Ergebnisse als nur das Anfordern der API, auf eine bestimmte Weise über einen `system` Prompt zu antworten.

Ein sehr einfaches Schema könnte eine Antwort definieren, die einen einzigen Booleschen Wert enthalten soll:

```js
const schema = {
  type: "boolean",
};
```

Um dies zu verwenden, setzen Sie das Schema als den Wert der `responseConstraint` Option:

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

In diesem Fall setzen wir den Inhalt des Prompts auf "Ist dies eine Farbe:", gefolgt vom Wert eines `<input>` Elements. Das Ergebnis ist, dass die API bewertet, ob die Eingabe des Benutzers eine Farbe ist oder nicht, und einen Wert von `true` oder `false` zurückgibt.

### Ein komplexeres Einschränkungsbeispiel

Betrachten wir ein komplexeres Beispiel, um Ihnen eine bessere Vorstellung davon zu geben, was mit Antwortbeschränkungen möglich ist. In diesem Fall gibt das Schema vor, dass die API-Antwort als JSON geliefert werden soll, das enthält:

- Eine einzelne Zeichenkette, die eine Zusammenfassungsbeschreibung darstellt.
- Ein Array aus genau drei Zeichenketten, die drei unterstützende Aufzählungspunkte darstellen.

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

Dies wird wie zuvor in der `responseConstraint` Option des `prompt()` Aufrufs aufgenommen:

```js
const response = await session.prompt(textarea.value, {
  responseConstraint: schema,
});
```

Da die Antwort als JSON-Zeichenkette angegeben ist, können wir die Antwort in einem Objekt parsen und dann die Eigenschaften des Objekts in unserer Antwort verwenden:

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
  } else {
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
}
```

{{EmbedLiveSample("constraint-example", , "660px", , , , "language-model", "allow-forms")}}

## Zusätzliche Nachrichten zum Kontext hinzufügen

Das Finden einer Antwort auf eine Benutzerfrage oder -aussage kann lange dauern, insbesondere wenn die API mit großen, komplexen Texteingaben oder multimodalen Eingaben umgehen muss.

Um die wahrgenommene Latenz zwischen der Benutzereingabe und der Antwort zu verringern, kann es sinnvoll sein, die API sofort mit der Verarbeitung der Anfrage zu beginnen — nützlichen Kontext bereitzustellen, bevor der Benutzer seine tatsächliche Eingabe absendet — oder nachträglich weiteren Kontext hinzuzufügen.

Die [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append) Methode existiert, um solchen Kontext bereitzustellen — sie fügt der API weitere Eingaben hinzu, ohne eine Modellantwort zu generieren.

Zum Beispiel geben wir im folgenden Ausschnitt einen Auszug aus einem ziemlich berühmten Buch an. Wir verwenden `append()`, um den Auszug in die API-Sitzung einzufügen, und stellen dann eine Frage dazu mit einem `prompt()` Aufruf. Der Browser kann mit der Verarbeitung des Auszugs beginnen, während er darauf wartet, dass die Frage gestellt wird.

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

Betrachten wir eine echte Implementierung des erwähnten Auszugbeispiels. In diesem Fall können Sie einen Textpassage in ein Eingabefeld eingeben und eine Frage zu diesem Text in ein weiteres Eingabefeld. Wenn abgeschickt, wird die API-Antwort die Frage spezifisch im Kontext der bereitgestellten Textpassage beantworten.

Es funktioniert ähnlich wie frühere Beispiele, daher werden wir nicht den gesamten Code ausführlich durchgehen. Um den vollständigen Code zu studieren, drücken Sie die Schaltfläche "Play" im gerenderten Live-Ausgang, um den vollständigen Code im MDN Playground zu öffnen.

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
  } else {
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
}
```

#### JavaScript

In diesem Beispiel wird der Auszug in ein `<textarea>` eingegeben. Sobald das `change` Ereignis des `<textarea>` ausgelöst wird (was bedeutet, dass der Benutzer Text eingegeben hat und dann den Fokus woanders hin verschoben hat), führen wir die `appendExcerpt()` Funktion aus. Diese überprüft, ob das `<textarea>` Text enthält. Wenn ja, wird der Text in die Sitzung über `append()` eingegeben, sodass die Verarbeitung beginnen kann. An diesem Punkt aktivieren wir auch den Sende-Button des Formulars (wir haben ihn zuvor deaktiviert, damit keine Frage eingereicht werden kann, ohne dass ein Auszug eingegeben wurde).

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

Die Frage wird in ein Text-`<input>` eingegeben. Sobald das `<form>`, das die Eingabe enthält, abgeschickt wird (das `submit` Ereignis wird ausgelöst), führen wir die `handleSubmission()` Funktion aus. Der bedeutendste Teil des Funktionskörpers ist der `prompt()` Aufruf. Wir geben zwei `user` Eingaben darin ein — eine, die besagt, dass die Frage über den bereitgestellten Text sein wird (zuvor über den `append()` Aufruf übergeben), und eine, die die tatsächliche Frage enthält, die aus dem `value` des `<input>` Elements entnommen wurde.

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

Versuchen Sie, eine Passage des Textes in das Textbereich einzugeben und eine Frage zu dieser Passage in den einzeiligen Eingang, dann senden Sie das Formular ab.
