---
title: "LanguageModel: create() statische Methode"
short-title: create()
slug: Web/API/LanguageModel/create_static
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`create()`** statische Methode der [`LanguageModel`](/de/docs/Web/API/LanguageModel) Schnittstelle konstruiert eine neue [`LanguageModel`](/de/docs/Web/API/LanguageModel) Instanz und lädt automatisch die entsprechenden Modelldaten herunter, falls sie noch nicht verfügbar sind.

## Syntax

```js-nolint
LanguageModel.create()
LanguageModel.create(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die Optionen für die Erstellung einer [`LanguageModel`](/de/docs/Web/API/LanguageModel) Sitzung darstellt. Die Eigenschaften umfassen:
    - `expectedInputs`
      - : Ein Array von Objekten, die die erforderlichen Eingabemodalitäten und Sprachen darstellen.
        Jedes Objekt kann die folgenden Eigenschaften enthalten:
        - `type`
          - : Ein enumerierter Wert, der den Inhaltstyp angibt. Muss einer der folgenden sein:
            - `text`
              - : Klartext-Inhalt.
            - `image`
              - : Bildinhalt.
            - `audio`
              - : Audioinhalt.
            - `tool-call`
              - : Ein vom Modell ausgegebener Werkzeugaufruf.
            - `tool-response`
              - : Das Ergebnis eines Werkzeugaufrufs.
        - `languages` {{optional_inline}}
          - : Ein Array von Strings, das [BCP 47](https://www.rfc-editor.org/info/rfc5646/) Sprach-Tags enthält (zum Beispiel `en`, `fr`, `ja`), die die Sitzung für diesen Inhaltstyp verarbeiten soll. Der Benutzeragent verwendet diese Liste, um zu bestimmen, ob das Modell die angegebenen Sprachen unterstützt, und um geeignete Modellkomponenten oder Feinabstimmungen auszuwählen.
    - `expectedOutputs`
      - : Ein Array von Objekten, die die erforderlichen Ausgabemodalitäten und Sprachen darstellen.
        Jedes Objekt kann die folgenden Eigenschaften enthalten:
        - `type`
          - : Ein enumerierter Wert, der den Inhaltstyp angibt. Muss einer der folgenden sein:
            - `text`
              - : Klartext-Inhalt.
            - `image`
              - : Bildinhalt.
            - `audio`
              - : Audioinhalt.
            - `tool-call`
              - : Ein vom Modell ausgegebener Werkzeugaufruf.
            - `tool-response`
              - : Das Ergebnis eines Werkzeugaufrufs.
        - `languages` {{optional_inline}}
          - : Ein Array von Strings, das [BCP 47](https://www.rfc-editor.org/info/rfc5646/) Sprach-Tags enthält (zum Beispiel `en`, `fr`, `ja`), die die Sitzung für diesen Inhaltstyp verarbeiten soll. Der Benutzeragent verwendet diese Liste, um zu bestimmen, ob das Modell die angegebenen Sprachen unterstützt, und um geeignete Modellkomponenten oder Feinabstimmungen auszuwählen.
    - `initialPrompts`
      - : Ein Array von Objekten, die Nachrichten darstellen, die während der Erstellung einer Sprachmodell-Sitzung übermittelt werden. Dies ermöglicht es dem Modell, sich Anweisungen oder vorherige Dialoge "zu merken", ohne diese bei jeder neuen Anfrage erneut senden zu müssen. Jedes Objekt kann die folgenden Eigenschaften enthalten:
        - `role`
          - : Ein String, der den Standpunkt angibt, aus dem die Nachricht formuliert ist. Muss einer der folgenden sein:
            - `system`
              - : Eine systemweite Anweisung, die das allgemeine Verhalten des Modells lenkt. Dies muss die erste an das Modell übergebene Anweisung sein.
            - `user`
              - : Eine Nachricht vom Benutzer, auf die die API antworten soll.
            - `assistant`
              - : Eine Eingabe, die dem AI-Assistenten Kontext liefert, wie z.B. seine Persönlichkeit oder das Format seiner Antworten. Solche Nachrichten dienen hauptsächlich dazu, Kontext/Geschichte zu liefern und die Reaktion des Modells weiter zu gestalten.
        - `content`
          - : Ein String, der ein Text-Prompt darstellt, oder ein Array von Objekten. Jedes Objekt umfasst die folgenden Eigenschaften:
            - `type`
              - : Ein enumerierter Wert, der den Typ des Inhalts darstellt. Dies kann einer der folgenden sein:
                - `audio`
                  - : Audioinhalt.
                - `image`
                  - : Bildinhalt.
                - `text`
                  - : Textinhalt.
                - `tool-call`
                  - : Ein vom Modell ausgegebener Werkzeugaufruf.
                - `tool-response`
                  - : Das Ergebnis eines Werkzeugaufrufs.
            - `value`
              - : Der Inhalt der Nachricht. Wenn der `type` `text` ist, ist dies immer ein String. Wenn der `type` `audio` oder `image` ist, kann der `value` aus mehreren verschiedenen Objekttypen bestehen; siehe [Welche Datentypen werden akzeptiert?](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
        - `prefix` {{optional_inline}}
          - : Ein boolescher Wert, standardmäßig `false`. Wenn `true`, wird die Nachricht als Präfix für die nächste generierte Antwort des Modells behandelt, anstatt als komplette Runde.
    - `monitor`
      - : Ein Verweis auf eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) Callback-Funktion, um Download-Fortschrittsereignisse zu empfangen.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), um die Sitzungs-erstellung abzubrechen.
    - `tools`
      - : Ein Array von Objekten, die Werkzeuge darstellen, die dem AI zur Verfügung stehen.
        Jedes Objekt kann die folgenden Eigenschaften enthalten:
        - `name`
          - : Ein String, der dem Werkzeug einen eindeutigen Namen gibt, den das Modell verwendet, um darauf zu verweisen, wenn es einen Werkzeugaufruf ausführt.
        - `description`
          - : Ein String, der beschreibt, was das Werkzeug tut. Das Modell verwendet diese Beschreibung, um zu entscheiden, ob und wann das Werkzeug aufgerufen wird.
        - `inputSchema`
          - : Ein [JSON Schema](https://json-schema.org/), das die Eingabeparameter des Werkzeugs beschreibt. Das Modell verwendet dieses Schema, um die Argumente zu konstruieren, die es an die `execute` Funktion des Werkzeugs übergibt.
        - `execute`
          - : Eine Callback-Funktion, die der Benutzeragent aufruft, wenn das Modell dieses Werkzeug verwendet. Ihre Argumente sind spezifisch für das verwendete Modell. Sie muss ein {{jsxref("Promise")}} zurückgeben, das mit einem {{jsxref("String")}} aufgelöst wird, der das Ergebnis des Werkzeugs darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer neuen [`LanguageModel`](/de/docs/Web/API/LanguageModel) Instanz aufgelöst wird.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn der Vorgang über die `signal` Option abgebrochen wurde.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn das aufrufende Dokument nicht vollständig aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn die Nutzung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}} {{httpheader("Permissions-Policy")}} blockiert ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn:
    - Die `role` einer Nachricht `assistant` ist und ihr `type` nicht `text` ist.
    - Der `type` einer Nachricht `text` ist und ihr `value` kein String ist.
    - Der Eingabe- oder Ausgabe-text in einer Sprache verfasst ist, die der Benutzeragent nicht für Prompting unterstützt.
    - Der `type` einer Nachricht `image` oder `audio` ist, der Typ jedoch nicht in `expectedInputs` aufgeführt war, oder der `value` kein [akzeptierter Datentyp](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted) ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn die Erstellung aus einem anderen Grund fehlschlägt, der nicht zu den anderen Ausnahmearten gehört.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn der Inhalt in `initialPrompts` das Modell [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) überschreitet.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn:
    - Keine Nachrichten im Nachrichtenarray enthalten sind.
    - Die `prefix` Eigenschaft einer Nachricht auf `true` gesetzt ist und:
      - Die `role` der Nachricht nicht `assistant` ist.
      - Die Nachricht nicht das letzte Element im Nachrichtenarray ist.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn:
    - Die `role` einer Nachricht `system` ist, aber nicht die erste an den Kontext übergebene Nachricht war.

## Beschreibung

Die `create()` Methode erstellt eine neue Sprachmodell-sitzung und lädt das Modell automatisch, falls es noch nicht verfügbar ist.
Sie können den Fortschritt des Modells-Downloads mit der [`monitor`](#monitor) Option überwachen.

Vor dem Aufruf von `create()`, verwenden Sie [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static), um zu prüfen, ob die gewünschte Konfiguration unterstützt wird.

Sobald eine Sitzung erstellt ist, verwenden Sie deren Instanzmethoden — [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt), [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming), [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append) und andere — um mit dem Modell zu interagieren.

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit dieses Feature funktioniert.

## Beispiele

### Erstellen einer einfachen Sitzung

Dieses Beispiel erstellt eine Standardsitzung und fordert dann das Ergebnis der Addition von `2` und `2` an.
Beachten Sie, dass Text standardmäßig unterstützt wird, daher sollte das heruntergeladene Modell für diesen Fall geeignet sein.

```js
const session = await LanguageModel.create();
const answer = await session.prompt("What is 2 + 2?");
console.log(answer);
```

Siehe auch [Using the Prompt API > Creating a `LanguageModel` session](/de/docs/Web/API/Prompt_API/Using#creating_a_languagemodel_session).

### Erstellen einer Sitzung mit einem System-Prompt

Das folgende Beispiel gibt der KI Anweisungen zur Persönlichkeit, die sie vor der Generierung einer Antwort annehmen soll.

```js
const session = await LanguageModel.create({
  initialPrompts: [
    {
      role: "system",
      content: "You are a concise assistant. Respond in one sentence.",
    },
  ],
});

const response = await session.prompt("What is photosynthesis?");
console.log(response);
```

Siehe auch [Hinzufügen von Kontext mit anfänglichen und fortlaufenden Eingabeprompts > Bereitstellung anfänglicher Prompts während der Sitzungserstellung](/de/docs/Web/API/Prompt_API/Adding_context#providing_initial_prompts_during_session_creation).

### Überwachung des Download-Fortschritts

Dieser Code zeigt, wie Sie den Download-Fortschritt eines Modells überwachen können.
Beachten Sie, dass, wenn das Modell nicht verfügbar oder bereits verfügbar ist, das Ereignis nie ausgelöst wird.

```js
const session = await LanguageModel.create({
  monitor(monitor) {
    monitor.addEventListener("downloadprogress", ({ loaded, total }) => {
      console.log(`Model download: ${Math.round((loaded / total) * 100)}%`);
    });
  },
});
```

Siehe auch [Using the Prompt API > Monitoring download progress](/de/docs/Web/API/Prompt_API/Using#monitoring_download_progress).

### Bereitstellung von Few-Shot-Prompts

Das folgende Beispiel zeigt, wie Sie ein [Few-Shot-Prompt](/de/docs/Web/API/Prompt_API/Adding_context#few-shot_prompts) verwenden können, um die API um eine spezifische Aufgabe (Französisch-Übersetzung) in einem bestimmten Format zu bitten, bevor Sie einige Beispiele bereitstellen, die ihr helfen, das korrekte Ausgabeformat zu erlernen.

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

Siehe auch [Hinzufügen von Kontext mit anfänglichen und fortlaufenden Eingabeprompts > Few-Shot-Prompts](/de/docs/Web/API/Prompt_API/Adding_context#few-shot_prompts).

### Definieren eines Werkzeugs mit einer Callback-Funktion

Dieses Beispiel erstellt eine Sitzung mit einem hypothetischen "Get Weather"-Werkzeug. Wenn das Modell entscheidet, das Werkzeug aufzurufen, ruft der Benutzeragent `execute()` mit den vom Modell bereitgestellten Argumenten auf.

```js
async function getWeatherData(location) {
  const response = await fetch(
    `https://api.example.com/weather?city=${location}`,
  );
  const data = await response.json();
  return `${data.temp}°C, ${data.description}`;
}

const session = await LanguageModel.create({
  tools: [
    {
      name: "getWeather",
      description: "Returns the current weather for a given city.",
      inputSchema: {
        type: "object",
        properties: {
          location: { type: "string", description: "The city name." },
        },
        required: ["location"],
      },
      async execute(...args) {
        const location = args[0];
        return await getWeatherData(location);
      },
    },
  ],
});

const response = await session.prompt("What's the weather like in Tokyo?");
console.log(response);
```

### Abbrechen einer Sitzung

Das folgende Beispiel ermöglicht es dem Benutzer, ein Prompt abzubrechen. Dies geschieht, indem zuerst ein [`AbortController`](/de/docs/Web/API/AbortController) erstellt und seine `abort()` Methode einem Abbrechen-Button-Klick-Handler zugewiesen wird. Anschließend wird `create()` aufgerufen und `AbortController.signal` als die `signal` Eigenschaft übergeben.

```js
const controller = new AbortController();

const cancelButton = document.getElementById("cancel-button");
cancelButton.addEventListener("click", () => controller.abort());

const session = await LanguageModel.create({
  signal: controller.signal,
  initialPrompts: [
    {
      role: "system",
      content: "You are a helpful assistant.",
    },
  ],
});
```

Siehe auch [Using the Prompt API > Canceling operations and destroying instances](/de/docs/Web/API/Prompt_API/Using#canceling_operations_and_destroying_instances).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static)
- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Using the Prompt API](/de/docs/Web/API/Prompt_API/Using)
- [Hinzufügen von Kontext mit anfänglichen und fortlaufenden Eingabeprompts](/de/docs/Web/API/Prompt_API/Adding_context)
