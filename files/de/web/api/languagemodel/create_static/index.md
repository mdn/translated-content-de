---
title: "LanguageModel: create() statische Methode"
short-title: create()
slug: Web/API/LanguageModel/create_static
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`create()`** statische Methode der [`LanguageModel`](/de/docs/Web/API/LanguageModel) Schnittstelle erstellt eine neue Instanz von [`LanguageModel`](/de/docs/Web/API/LanguageModel) und lädt automatisch die entsprechenden Modelldaten herunter, falls diese noch nicht verfügbar sind.

## Syntax

```js-nolint
LanguageModel.create()
LanguageModel.create(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die Optionen für die Erstellung einer [`LanguageModel`](/de/docs/Web/API/LanguageModel) Sitzung darstellt. Eigenschaften beinhalten:
    - `expectedInputs`
      - : Ein Array von Objekten, die die erforderlichen Eingabemodalitäten und Sprachen darstellen.
        Jedes Objekt kann die folgenden Eigenschaften beinhalten:
        - `type`
          - : Ein enumerierter Wert, der den Inhaltstyp angibt. Muss einer der folgenden sein:
            - `text`
              - : Klartext-Inhalt.
            - `image`
              - : Bildinhalt.
            - `audio`
              - : Audioinhalt.
            - `tool-call`
              - : Ein vom Modell ausgeführter Werkzeuginvokation.
            - `tool-response`
              - : Das Ergebnis einer Werkzeuginvokation.
        - `languages` {{optional_inline}}
          - : Ein Array von Zeichenfolgen, das [BCP 47](https://www.rfc-editor.org/rfc/rfc5646) Sprach-Tags enthält (zum Beispiel, `en`, `fr`, `ja`), die die Sitzung für diesen Inhaltstyp behandeln soll. Der User-Agent verwendet diese Liste, um zu bestimmen, ob das Modell die angegebenen Sprachen unterstützt und um geeignete Modellkomponenten oder Feinabstimmungen auszuwählen.
    - `expectedOutputs`
      - : Ein Array von Objekten, die die erforderlichen Ausgabemodalitäten und Sprachen darstellen.
        Jedes Objekt kann die folgenden Eigenschaften beinhalten:
        - `type`
          - : Ein enumerierter Wert, der den Inhaltstyp angibt. Muss einer der folgenden sein:
            - `text`
              - : Klartext-Inhalt.
            - `image`
              - : Bildinhalt.
            - `audio`
              - : Audioinhalt.
            - `tool-call`
              - : Ein vom Modell ausgeführter Werkzeuginvokation.
            - `tool-response`
              - : Das Ergebnis einer Werkzeuginvokation.
        - `languages` {{optional_inline}}
          - : Ein Array von Zeichenfolgen, das [BCP 47](https://www.rfc-editor.org/rfc/rfc5646) Sprach-Tags enthält (zum Beispiel, `en`, `fr`, `ja`), die die Sitzung für diesen Inhaltstyp behandeln soll. Der User-Agent verwendet diese Liste, um zu bestimmen, ob das Modell die angegebenen Sprachen unterstützt und um geeignete Modellkomponenten oder Feinabstimmungen auszuwählen.
    - `initialPrompts`
      - : Ein Array von Objekten, die Nachrichten darstellen, die während der Erstellung einer Sprachmodell-Sitzung übermittelt werden. Dies ermöglicht es dem Modell, sich Anweisungen oder vorherige Dialoge "zu merken", ohne sie bei jeder neuen Anfrage erneut senden zu müssen. Jedes Objekt kann die folgenden Eigenschaften beinhalten:
        - `role`
          - : Eine Zeichenfolge, die angibt, aus welcher Sicht die Nachricht formuliert ist. Muss einer der folgenden sein:
            - `system`
              - : Eine systemweite Anweisung, die das allgemeine Verhalten des Modells leitet. Dies muss die erste Anweisung sein, die dem Modell übermittelt wird.
            - `user`
              - : Eine Nachricht des Nutzers, auf die die API antworten soll.
            - `assistant`
              - : Eine Eingabe, die Kontext für den AI-Assistenten bietet, wie z.B. seine Persona oder das Format seiner Antworten. Solche Nachrichten dienen hauptsächlich dazu, Kontext/Verlauf zu liefern und weiter zu formen, wie das Modell antwortet.
        - `content`
          - : Eine Zeichenfolge, die ein Text- oder ein Array von Objekten darstellt. Jedes Objekt enthält die folgenden Eigenschaften:
            - `type`
              - : Ein enumerierter Wert, der den Inhaltstyp repräsentiert. Dies kann einer der folgenden sein:
                - `audio`
                  - : Audioinhalt.
                - `image`
                  - : Bildinhalt.
                - `text`
                  - : Textinhalt.
                - `tool-call`
                  - : Ein vom Modell ausgeführter Werkzeuginvokation.
                - `tool-response`
                  - : Das Ergebnis einer Werkzeuginvokation.
            - `value`
              - : Der Inhalt der Nachricht. Wenn der `type` `text` ist, ist dies immer eine Zeichenfolge. Wenn der `type` `audio` oder `image` ist, kann der `value` einer von mehreren verschiedenen Objekttypen sein; siehe [Welche Datentypen werden akzeptiert?](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
        - `prefix` {{optional_inline}}
          - : Ein boolescher Wert, der standardmäßig `false` ist. Wenn er `true` ist, wird die Nachricht eher als Präfix für die nächste generierte Antwort des Modells behandelt als als vollständiger Zug.
    - `monitor`
      - : Ein Verweis auf eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) Rückruffunktion, um Ereignisse zum Downloadfortschritt zu empfangen.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), um die Sitzungserstellung abzubrechen.
    - `tools`
      - : Ein Array von Objekten, die die dem AI zur Verfügung stehenden Werkzeuge darstellen.
        Jedes Objekt kann die folgenden Eigenschaften beinhalten:
        - `name`
          - : Eine Zeichenfolge, die dem Werkzeug einen eindeutigen Namen gibt, den das Modell verwendet, um darauf zu verweisen, wenn es einen Werkzeuginvokation ausführt.
        - `description`
          - : Eine Zeichenfolge, die beschreibt, was das Werkzeug macht. Das Modell verwendet diese Beschreibung, um zu entscheiden, ob und wann das Werkzeug aufgerufen wird.
        - `inputSchema`
          - : Ein [JSON Schema](https://json-schema.org/), das die Eingabeparameter des Werkzeugs beschreibt. Das Modell verwendet dieses Schema, um die Argumente zu konstruieren, die es an die `execute`-Funktion des Werkzeugs übergibt.
        - `execute`
          - : Eine Rückruffunktion, die vom User-Agent aufgerufen wird, wenn das Modell dieses Werkzeug aufruft. Ihre Argumente sind spezifisch für das Modell, das verwendet wird. Sie muss ein {{jsxref("Promise")}} zurückgeben, das mit einer {{jsxref("String")}} aufgelöst wird, die das Ergebnis des Werkzeugs darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer neuen Instanz von [`LanguageModel`](/de/docs/Web/API/LanguageModel) aufgelöst wird.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Operation über die Option `signal` abgebrochen wird.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aufrufende Dokument nicht vollständig aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}} {{httpheader("Permissions-Policy")}} blockiert ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die `role` einer Nachricht `assistant` ist und ihr `type` etwas anderes als `text` ist.
    - Der `type` einer Nachricht `text` ist und ihr `value` keine Zeichenkette ist.
    - Der Eingabe- oder Ausgabe-Text in einer Sprache vorliegt, die der User-Agent für das Prompting nicht unterstützt.
    - Der `type` einer Nachricht `image` oder `audio` ist, dieser Typ aber nicht in `expectedInputs` aufgeführt ist, oder der `value` kein [akzeptierter Datentyp](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted) ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Erstellung aus einem anderen Grund als den in den anderen Ausnahmearten aufgeführten fehlschlägt.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der in `initialPrompts` bereitgestellte Inhalt das [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) des Modells überschreitet.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Keine Nachrichten im Nachrichtenarray enthalten sind.
    - Die `prefix` Eigenschaft einer Nachricht auf `true` gesetzt ist und:
      - Die `role` der Nachricht nicht `assistant` ist.
      - Die Nachricht nicht das letzte Element im Nachrichtenarray ist.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die `role` einer Nachricht `system` ist, sie aber nicht die erste Nachricht ist, die an den Kontext übergeben wird.

## Beschreibung

Die `create()` Methode erstellt eine neue Sprachmodell-Sitzung und lädt das Modell automatisch herunter, falls es noch nicht verfügbar ist.
Sie können den Fortschritt eines Modelldownloads mit der Option [`monitor`](#monitor) überwachen.

Bevor Sie `create()` aufrufen, verwenden Sie [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static), um zu überprüfen, ob die gewünschte Konfiguration unterstützt wird.

Sobald eine Sitzung erstellt ist, verwenden Sie deren Instanzmethoden — [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt), [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming), [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append) und andere — um mit dem Modell zu interagieren.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Erstellen einer einfachen Sitzung

Dieses Beispiel erstellt eine Standardsitzung und fordert sie dann für das Ergebnis der Addition von `2` und `2` auf.
Beachten Sie, dass Text standardmäßig unterstützt wird, sodass das heruntergeladene Modell für diesen Fall geeignet sein sollte.

```js
const session = await LanguageModel.create();
const answer = await session.prompt("What is 2 + 2?");
console.log(answer);
```

Siehe auch [Verwendung der Prompt API > Erstellung einer `LanguageModel` Sitzung](/de/docs/Web/API/Prompt_API/Using#creating_a_languagemodel_session).

### Erstellung einer Sitzung mit einem System-Prompt

Das folgende Beispiel liefert der KI Anweisungen zur Annahme einer Persona, bevor eine Antwort generiert wird.

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

Siehe auch [Hinzufügen von Kontext mit initialen und fortlaufenden Prompt-Eingaben > Bereitstellung initialer Prompts während der Sitzungserstellung](/de/docs/Web/API/Prompt_API/Adding_context#providing_initial_prompts_during_session_creation).

### Überwachung des Download-Fortschritts

Dieser Code zeigt, wie Sie den Download-Fortschritt eines Modells überwachen können.
Beachten Sie, dass wenn das Modell nicht verfügbar oder bereits verfügbar ist, das Ereignis nie ausgelöst wird.

```js
const session = await LanguageModel.create({
  monitor(monitor) {
    monitor.addEventListener("downloadprogress", ({ loaded, total }) => {
      console.log(`Model download: ${Math.round((loaded / total) * 100)}%`);
    });
  },
});
```

Siehe auch [Verwendung der Prompt API > Überwachung des Download-Fortschritts](/de/docs/Web/API/Prompt_API/Using#monitoring_download_progress).

### Bereitstellung von Few-Shot-Prompts

Das folgende Beispiel zeigt, wie man ein [Few-Shot-Prompt](/de/docs/Web/API/Prompt_API/Adding_context#few-shot_prompts) verwendet, um die API nach einer bestimmten Aufgabe (französische Übersetzung) in einem spezifischen Format zu fragen, bevor einige Beispiele bereitgestellt werden, um das richtige Ausgabeformat zu erlernen.

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

Siehe auch [Hinzufügen von Kontext mit initialen und fortlaufenden Prompt-Eingaben > Few-Shot-Prompts](/de/docs/Web/API/Prompt_API/Adding_context#few-shot_prompts).

### Definition eines Werkzeugs mit einer Rückruffunktion

Dieses Beispiel erstellt eine Sitzung mit einem hypothetischen "Wetter abrufen" Werkzeug. Wenn das Modell beschließt, das Werkzeug aufzurufen, ruft der User-Agent `execute()` mit den vom Modell bereitgestellten Argumenten auf.

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
      execute: async (...args) => {
        const location = args[0];
        return await getWeatherData(location);
      },
    },
  ],
});

const response = await session.prompt("What's the weather like in Tokyo?");
console.log(response);
```

### Abbruch einer Sitzung

Das folgende Beispiel ermöglicht es einem Benutzer, einen Prompt abzubrechen. Dies geschieht, indem zuerst ein [`AbortController`](/de/docs/Web/API/AbortController) erstellt und dessen `abort()` Methode einem Abbrechen-Button-Click-Handler zugewiesen wird. Anschließend wird `create()` aufgerufen und `AbortController.signal` als `signal` Eigenschaft übergeben.

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

Siehe auch [Verwendung der Prompt API > Abbruch von Operationen und Zerstörung von Instanzen](/de/docs/Web/API/Prompt_API/Using#cancelling_operations_and_destroying_instances).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static)
- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Verwendung der Prompt API](/de/docs/Web/API/Prompt_API/Using)
- [Hinzufügen von Kontext mit initialen und fortlaufenden Prompt-Eingaben](/de/docs/Web/API/Prompt_API/Adding_context)
