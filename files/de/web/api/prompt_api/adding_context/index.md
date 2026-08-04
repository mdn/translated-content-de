---
title: Hinzufügen von Kontext mit initialen und fortlaufenden Eingabeaufforderungen
short-title: Kontext hinzufügen
slug: Web/API/Prompt_API/Adding_context
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{DefaultAPISidebar("Prompt API")}}

In unserem grundlegenden [Leitfaden zur Prompt API](/de/docs/Web/API/Prompt_API/Using) haben wir alles behandelt, was Sie benötigen, um mit der [Prompt API](/de/docs/Web/API/Prompt_API) loszulegen. Dies deckt jedoch nur die Erstellung einer generischen KI-Eingabeaufforderungs-App ab. Um Ihrer App verschiedene Persönlichkeiten zu verleihen, sie auf unterschiedliche Weise reagieren zu lassen und vergangene Unterhaltungen zu behalten, müssen Sie zusätzlichen Kontext bereitstellen. Die Prompt API bietet mehrere Mechanismen, um dies zu ermöglichen, die in diesem Artikel behandelt werden.

## Syntax der Eingabeaufforderung

Wenn [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt) aufgerufen wird, nimmt es ein `input`-Parameter entgegen, der die Eingaben enthält, auf die reagiert werden soll:

```js
const response = await session.prompt(inputElem.value);
```

Der vorherige `prompt()`-Aufruf erhält nur einen einzelnen String als Parameter. Dies ist eine Kurzform, die in der gängigen Situation verfügbar ist, in der Sie dem Modell nur eine einzelne Benutzereingabe übergeben möchten. Sie können dies erweitern, um explizit die `Rolle` des `input`-Objekts anzugeben:

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
  - : Eingaben, die vom `user` stammen und auf die die API reagieren soll.
- `assistant`
  - : Eingaben, die aus der Perspektive des KI-Assistenten geschrieben sind, die hauptsächlich dazu dienen, Kontext/Geschichte bereitzustellen und weiter zu beeinflussen, wie das Modell reagiert. Diese werden häufig für das [Sichern von Sitzungen](/de/docs/Web/API/Prompt_API/Preserving_sessions) und [Few-Shot-Prompts](#few-shot-prompts) verwendet.
- `system`
  - : Globale Eingaben aus dem Gesamtsystem, die dem Modell Anweisungen geben, wie es reagieren soll. Wenn eine `system`-Eingabe enthalten ist, muss sie zuerst in den bereitgestellten Eingaben stehen, sonst wird das zurückgegebene Versprechen mit einer Ausnahme abgelehnt. `system`-Eingaben werden normalerweise nur als [initiale Eingabeaufforderungen](#bereitstellung_initialer_eingabeaufforderungen_während_der_sitzungserstellung) eingeschlossen.

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

Dies ist nützlich, weil Sie zusätzlichen Kontext bereitstellen können, um dem Modell zu helfen, eine Antwort zu formulieren, zusammen mit der eigentlichen Eingabe von der Seite, die möglicherweise nur ein Wort ist.

### Eingabetyp spezifizieren

Standardmäßig ist der `input`-Typ `text`. Um den `type` explizit anzugeben, können Sie die vorherige Form weiter erweitern, um das vollständige Langform-Äquivalent zu erstellen, das so aussieht:

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

Diese Form ist nur erforderlich, wenn Sie dem Assistenten `image` und/oder `audio`-Eingaben bereitstellen (siehe [multimodale Eingabenaufforderungen](/de/docs/Web/API/Prompt_API/Multimodal)):

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

Sie könnten jedoch das vorherige Beispiel der mehrfachen Benutzereingabe in dieser Form umschreiben, das beide Nachrichten in einem einzigen Eingabeobjekt enthält. Diese Version könnte leichter verständlich sein:

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

## Bereitstellung initialer Eingabeaufforderungen während der Sitzungserstellung

Die Methode [`create()`](/de/docs/Web/API/LanguageModel/create_static) kann eine Option [`initialPrompts`](/de/docs/Web/API/LanguageModel/create_static#initialprompts) annehmen, die ein Array von Eingabeaufforderungen enthält, genau wie das `inputs`-Array, das an `prompt()` und andere Methoden übergeben wird. Dadurch können Sie beim Erstellen der Sitzung einen initialen Satz von Eingabeaufforderungen in die Sitzung einbringen, sodass das Modell sofort über einen Kontext verfügt, mit dem es arbeiten kann.

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

Neben der Angabe, welche Art von Persönlichkeit das Modell haben soll, ist `initialPrompts` auch nützlich, um nach einem erneuten Laden der Seite oder einem erneuten Besuch der App ein vorher gespeichertes Gespräch in die Sitzung zu laden. Siehe [Sitzungen über Reloads hinweg beibehalten](/de/docs/Web/API/Prompt_API/Preserving_sessions).

> [!NOTE]
> Die am Anfang der [Syntax der Eingabeaufforderung](#syntax_der_eingabeaufforderung) besprochene Kurzform von Text-Strings kann in der `initialPrompts`-Option eines `create()`-Aufrufs nicht verwendet werden.

## Few-Shot-Prompts

Ein Few-Shot-Prompt ist ein Satz von `user`-Rollen- und `assistant`-Rollen-Input-Paaren, die als Beispiel an die API übergeben werden, um sie zu trainieren, auf eine bestimmte Art von Eingabe zu reagieren, bevor sie gebeten wird, eine ähnliche Aufgabe zu erledigen.

Das folgende Beispiel zeigt, wie man ein Few-Shot-Prompt verwendet, um eine französische Übersetzung in einem bestimmten Format anzufordern, indem man Beispiel-Eingaben und -Ausgaben bereitstellt, um die erwartete Struktur zu demonstrieren.

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

Sie könnten nur den initialen `system`-Prompt einschließen und das Beispiel würde immer noch funktionieren, aber es wäre weniger wahrscheinlich, dass die Antworten im gewünschten Format geliefert werden.

## Beispiel für initiale und multiple Eingaben

Lassen Sie uns ein Beispiel betrachten, das initiale und multiple Eingaben für zusätzlichen Kontext verwendet. In diesem Beispiel wird der Benutzer aufgefordert, seinen Namen einzugeben, und die API liefert eine humorvolle Bewertung davon.

Technisch gesehen ist dies dem [vollständigen Beispiel](/de/docs/Web/API/Prompt_API/Using#complete_example) aus dem vorherigen Leitfaden sehr ähnlich, die einzigen wirklichen Unterschiede sind, dass die Benutzereingabe über eine einzeilige Text-{{htmlelement("input")}} anstelle eines {{htmlelement("textarea")}} bereitgestellt wird und die Aufrufe von `create()` und `prompt()` unterschiedlich sind. Daher werden wir den gesamten Code nicht erneut durchgehen. Um den Code genauer zu untersuchen, sehen Sie sich die Beschreibungen im vorherigen Artikel an und drücken Sie die Schaltfläche "Play" in der angezeigten Live-Ausgabe, um den vollständigen Code im MDN Playground zu öffnen.

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

Wenn die Methode [`create()`](/de/docs/Web/API/LanguageModel/create_static) aufgerufen wird, um die `LanguageModel`-Instanz der Sitzung zu erstellen, übergeben wir eine `initialPrompts`-Option, die ein `system`-Input enthält, um dem Modell genau mitzuteilen, wie wir möchten, dass es auf jede Benutzeraufforderung reagiert:

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

Wenn wir [`prompt()`](/de/docs/Web/API/LanguageModel/prompt) auf unserem `session`-Objekt aufrufen, übergeben wir ihm zwei `user`-Eingabeobjekte. Das erste macht klar, was der Benutzer von der API verlangt, und das zweite stellt den vom Benutzer eingegebenen Namen im `<input>`-Element zur Bewertung durch die API bereit.

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

Versuchen Sie, einen Namen in das `<input>` einzugeben, und drücken Sie dann die Absenden-Taste, um das KI-Modell um eine humorvolle Bewertung des Namens zu bitten.

## Hinzufügen von Antwortbeschränkungen

Die Methoden `prompt()` und [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) akzeptieren beide eine [`responseConstraint`](/de/docs/Web/API/LanguageModel/prompt#responseconstraint)-Option, deren Wert ein [JSON-Schema](https://json-schema.org/) Objekt ist, das das genau erwartete Format für die Antworten des Assistenten definiert. Dies liefert kontrolliertere Ergebnisse, als die API einfach über einen `system`-Prompt anzuweisen, auf eine bestimmte Weise zu reagieren.

Ein sehr einfaches Schema könnte eine Antwort definieren, die einen einzelnen booleschen Wert enthalten soll:

```js
const schema = {
  type: "boolean",
};
```

Um dies zu verwenden, setzen Sie das Schema als Wert der `responseConstraint`-Option:

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

In diesem Fall setzen wir den Inhalt der Eingabeaufforderung auf "Ist das eine Farbe:" gefolgt vom `value` des `<input>`-Elements. Infolgedessen wird die API überprüfen, ob die Eingabe des Benutzers eine Farbe ist oder nicht, und einen `true`- oder `false`-Wert zurückgeben.

### Ein komplexeres Einschränkungsbeispiel

Schauen wir uns ein komplexeres Beispiel an, um Ihnen eine bessere Vorstellung davon zu geben, was mit Antwortbeschränkungen möglich ist. In diesem Fall gibt das Schema an, dass die Antwort der API als JSON geliefert werden soll, das enthält:

- Einen einzigen String, der eine zusammenfassende Beschreibung darstellt.
- Ein Array von genau drei Strings, die drei unterstützende Aufzählungspunkte repräsentieren.

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

Dies wird in der `responseConstraint`-Option des `prompt()`-Aufrufs eingeschlossen, wie zuvor:

```js
const response = await session.prompt(textarea.value, {
  responseConstraint: schema,
});
```

Da die Antwort als JSON-String angegeben ist, können wir die Antwort in ein Objekt parsen und dann die Eigenschaften des Objekts in unserer Antwort verwenden:

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

Das Ermitteln einer Antwort auf eine Benutzerfrage oder -aussage kann lange dauern, insbesondere wenn die API große, komplexe Texteingaben oder multimodale Eingaben verarbeiten muss.

Um die wahrgenommene Wartezeit zwischen der Eingabeaufforderung des Benutzers und der Antwort zu reduzieren, kann es eine gute Idee sein, die API dazu zu bringen, die Anfrage so schnell wie möglich zu verarbeiten – indem nützlicher Kontext bereitgestellt wird, bevor der Benutzer seine tatsächliche Eingabe übermittelt – oder danach weiteren Kontext hinzuzufügen.

Die Methode [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append) existiert, um solchen Kontext bereitzustellen – sie fügt der API weitere Eingaben zur Bearbeitung hinzu, ohne eine Modellantwort zu generieren.

Zum Beispiel liefern wir im folgenden Snippet einen Auszug aus einem ziemlich berühmten Buch. Wir verwenden `append()`, um den Auszug in die API-Sitzung einzuspeisen, und stellen dann eine Frage dazu mit einem `prompt()`-Aufruf. Der Browser kann mit der Verarbeitung des Auszugs beginnen, während er darauf wartet, dass die Frage gestellt wird.

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

### Ein Anhänge-Beispiel

Schauen wir uns eine echte Implementierung des zuvor erwähnten Auszugsbeispiels an. In diesem Fall können Sie einen Textabschnitt in ein Eingabefeld eingeben und eine Frage zu diesem Text in ein anderes. Wenn Sie es absenden, wird die API-Antwort die Frage speziell im Kontext des bereitgestellten Textabschnitts beantworten.

Es funktioniert ähnlich wie vorherige Beispiele, sodass wir nicht den gesamten Code gründlich durchgehen werden. Um den vollständigen Code zu studieren, drücken Sie die Schaltfläche "Play" in der angezeigten Live-Ausgabe, um den vollständigen Code im MDN Playground zu öffnen.

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

In diesem Beispiel wird der Auszug in ein `<textarea>` eingegeben. Sobald das `change`-Ereignis des `<textarea>` ausgelöst wird (was bedeutet, dass der Benutzer etwas Text eingegeben hat und dann den Fokus woanders hin verschoben hat), führen wir die Funktion `appendExcerpt()` aus. Diese überprüft, ob das `<textarea>` Text enthält. Falls ja, wird der Text in die Sitzung über `append()` eingebracht, sodass die Verarbeitung beginnen kann. An dieser Stelle aktivieren wir auch die Absenden-Taste des Formulars (wir haben sie zuvor deaktiviert, damit keine Frage gesendet werden kann, ohne dass ein Auszug eingegeben wurde).

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

Die Frage wird in ein `<input>`-Element eingegeben. Sobald das `<form>`, das das Eingabefeld enthält, abgesendet wird (das `submit`-Ereignis ausgelöst wird), führen wir die Funktion `handleSubmission()` aus. Der bedeutendste Teil des Funktionskörpers ist der `prompt()`-Aufruf. Wir übergeben ihm zwei `user`-Eingaben – eine, die aussagt, dass die Frage zu dem bereitgestellten Text (zuvor über den `append()`-Aufruf übergeben) handelt, und eine, die die tatsächliche Frage enthält, die aus dem `value`-Attribut des `<input>`-Elements entnommen wird.

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

Versuchen Sie, einen Textabschnitt in das Textbereichselement einzugeben und eine Frage zu dem Abschnitt in das einzeilige Eingabeelement einzugeben, und senden Sie dann das Formular ab.
