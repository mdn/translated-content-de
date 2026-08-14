---
title: "LanguageModel: create() statische Methode"
short-title: create()
slug: Web/API/LanguageModel/create_static
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`create()`** statische Methode des [`LanguageModel`](/de/docs/Web/API/LanguageModel) Schnittstelle konstruiert eine neue Instanz von [`LanguageModel`](/de/docs/Web/API/LanguageModel) und lädt automatisch die entsprechenden Modelldaten herunter, wenn diese noch nicht verfügbar sind.

## Syntax

```js-nolint
LanguageModel.create()
LanguageModel.create(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die Optionen für die Erstellung einer [`LanguageModel`](/de/docs/Web/API/LanguageModel) Sitzung repräsentiert. Die Eigenschaften umfassen:
    - `expectedInputs`
      - : Ein Array von Objekten, die die erforderlichen Eingabemodalitäten und Sprachen darstellen.
        Jedes Objekt kann die folgenden Eigenschaften enthalten:
        - `type`
          - : Ein enumerierter Wert, der den Inhaltstyp angibt. Muss einer der folgenden sein:
            - `text`
              - : Reiner Textinhalt.
            - `image`
              - : Bildinhalt.
            - `audio`
              - : Audioinhalt.
            - `tool-call`
              - : Eine vom Modell ausgegebene Werkzeugaufruf.
            - `tool-response`
              - : Das Ergebnis eines Werkzeugaufrufs.
        - `languages` {{optional_inline}}
          - : Ein Array von Zeichenfolgen, das [BCP 47](https://www.rfc-editor.org/info/rfc5646/) Sprach-Tags enthält (zum Beispiel `en`, `fr`, `ja`), die die Sitzung für diesen Inhaltstyp verarbeiten soll. Der Benutzeragent verwendet diese Liste, um zu bestimmen, ob das Modell die angegebenen Sprachen unterstützt und um geeignete Modellkomponenten oder Feinabstimmungen auszuwählen.
    - `expectedOutputs`
      - : Ein Array von Objekten, die die erforderlichen Ausgabemodalitäten und Sprachen darstellen.
        Jedes Objekt kann die folgenden Eigenschaften enthalten:
        - `type`
          - : Ein enumerierter Wert, der den Inhaltstyp angibt. Muss einer der folgenden sein:
            - `text`
              - : Reiner Textinhalt.
            - `image`
              - : Bildinhalt.
            - `audio`
              - : Audioinhalt.
            - `tool-call`
              - : Eine vom Modell ausgegebene Werkzeugaufruf.
            - `tool-response`
              - : Das Ergebnis eines Werkzeugaufrufs.
        - `languages` {{optional_inline}}
          - : Ein Array von Zeichenfolgen, das [BCP 47](https://www.rfc-editor.org/info/rfc5646/) Sprach-Tags enthält (zum Beispiel `en`, `fr`, `ja`), die die Sitzung für diesen Inhaltstyp verarbeiten soll. Der Benutzeragent verwendet diese Liste, um zu bestimmen, ob das Modell die angegebenen Sprachen unterstützt und um geeignete Modellkomponenten oder Feinabstimmungen auszuwählen.
    - `initialPrompts`
      - : Ein Array von Objekten, die Nachrichten darstellen, die während der Erstellung einer Sprachmodellsitzung übergeben werden. Dies ermöglicht dem Modell, Anweisungen oder vorherige Dialoge zu "merken", ohne sie bei jeder neuen Anfrage erneut zu senden. Jedes Objekt kann die folgenden Eigenschaften enthalten:
        - `role`
          - : Eine Zeichenfolge, die den Standpunkt angibt, aus dem die Nachricht formuliert ist. Muss einer der folgenden sein:
            - `system`
              - : Eine systemweite Anweisung, die das allgemeine Verhalten des Modells leitet. Dies muss die erste Anweisung sein, die dem Modell übergeben wird.
            - `user`
              - : Eine Nachricht vom Benutzer, auf die die API reagieren soll.
            - `assistant`
              - : Eine Eingabe, die Kontext für den KI-Assistenten bietet, wie seine Persona oder das Format seiner Antworten. Solche Nachrichten dienen hauptsächlich dazu, Kontext/Verlauf bereitzustellen und weiter zu gestalten, wie das Modell reagiert.
        - `content`
          - : Eine Zeichenfolge, die einen Text-Prompt darstellt, oder ein Array von Objekten. Jedes Objekt enthält die folgenden Eigenschaften:
            - `type`
              - : Ein enumerierter Wert, der den Inhaltstyp repräsentiert. Dies kann einer der folgenden sein:
                - `audio`
                  - : Audioinhalt.
                - `image`
                  - : Bildinhalt.
                - `text`
                  - : Textinhalt.
                - `tool-call`
                  - : Eine vom Modell ausgegebene Werkzeugaufruf.
                - `tool-response`
                  - : Das Ergebnis eines Werkzeugaufrufs.
            - `value`
              - : Der Inhalt der Nachricht. Wenn der `type` `text` ist, ist dies immer eine Zeichenfolge. Wenn der `type` `audio` oder `image` ist, kann der `value` einer von mehreren verschiedenen Objekttypen sein; siehe [Welche Datentypen werden akzeptiert?](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
        - `prefix` {{optional_inline}}
          - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Wenn `true`, wird die Nachricht als Präfix für die nächste generierte Antwort des Modells behandelt, anstatt als vollständiger Zug.
    - `monitor`
      - : Ein Verweis auf eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) Rückruffunktion, um Ereignisse zum Download-Fortschritt zu empfangen.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), um die Sitzungserstellung abzubrechen.
    - `tools`
      - : Ein Array von Objekten, die Werkzeuge darstellen, die dem KI zur Verfügung stehen.
        Jedes Objekt kann die folgenden Eigenschaften enthalten:
        - `name`
          - : Eine Zeichenfolge, die dem Werkzeug einen eindeutigen Namen gibt, den das Modell verwendet, um darauf zu verweisen, wenn es einen Werkzeugaufruf ausführt.
        - `description`
          - : Eine Beschreibung, was das Werkzeug tut. Das Modell verwendet diese Beschreibung, um zu entscheiden, ob und wann das Werkzeug aufgerufen wird.
        - `inputSchema`
          - : Ein [JSON Schema](https://json-schema.org/), das die Eingabeparameter des Werkzeugs beschreibt. Das Modell verwendet dieses Schema, um die Argumente zu konstruieren, die es an die `execute` Funktion des Werkzeugs übergibt.
        - `execute`
          - : Eine Rückruffunktion, die der Benutzeragent aufruft, wenn das Modell dieses Werkzeug aufruft. Seine Argumente sind modellspezifisch. Es muss ein {{jsxref("Promise")}} zurückgeben, das mit einem {{jsxref("String")}} aufgelöst wird, das das Ergebnis des Werkzeugs darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer neuen Instanz von [`LanguageModel`](/de/docs/Web/API/LanguageModel) aufgelöst wird.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Vorgang über die `signal` Option abgebrochen wurde.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aufrufende Dokument nicht vollständig aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die `role` einer Nachricht `assistant` ist und ihr `type` etwas anderes als `text` ist.
    - Der `type` einer Nachricht `text` ist und ihr `value` keine Zeichenfolge ist.
    - Der Eingabe- oder Ausgabetext in einer Sprache ist, die der Benutzeragent nicht zur Aufforderung unterstützt.
    - Der `type` einer Nachricht `image` oder `audio` ist, aber der Typ nicht in `expectedInputs` aufgeführt war, oder der `value` nicht ein [akzeptierter Datentyp](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted) ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Erstellung aus einem anderen Grund als den in den anderen Ausnahmetypen angegebenen fehlschlägt.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Inhalt, der in `initialPrompts` bereitgestellt wird, das [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) des Modells überschreitet.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Keine Nachrichten im Nachrichtenarray enthalten sind.
    - Die `prefix` Eigenschaft einer Nachricht auf `true` gesetzt ist und:
      - Die `role` dieser Nachricht nicht `assistant` ist.
      - Die Nachricht nicht das letzte Element im Nachrichtenarray ist.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die `role` einer Nachricht `system` ist, aber es war nicht die erste Nachricht, die dem Kontext übergeben wurde.

## Beschreibung

Die Methode `create()` konstruiert eine neue Sprachmodellsitzung und lädt das Modell automatisch herunter, wenn es noch nicht verfügbar ist.
Sie können den Fortschritt eines Modell-Downloads mit der Option [`monitor`](#monitor) überwachen.

Bevor Sie `create()` aufrufen, verwenden Sie [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static), um zu prüfen, ob die gewünschte Konfiguration unterstützt wird.

Sobald eine Sitzung erstellt ist, verwenden Sie ihre Instanzmethoden — [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt), [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming), [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append) und andere — um mit dem Modell zu interagieren.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit dieses Feature funktioniert.

## Beispiele

### Erstellen einer grundlegenden Sitzung

Dieses Beispiel erstellt eine Standardsitzung und fragt dann nach dem Ergebnis der Addition von `2` und `2`.
Beachten Sie, dass Text standardmäßig unterstützt wird, sodass das heruntergeladene Modell für diesen Fall geeignet sein sollte.

```js
const session = await LanguageModel.create();
const answer = await session.prompt("What is 2 + 2?");
console.log(answer);
```

Siehe auch [Die Prompt API verwenden > Eine `LanguageModel`-Sitzung erstellen](/de/docs/Web/API/Prompt_API/Using#creating_a_languagemodel_session).

### Erstellen einer Sitzung mit einem System-Prompt

Das folgende Beispiel gibt der KI Anweisungen zur Rolle, die sie übernehmen soll, bevor sie eine Antwort generiert.

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

Siehe auch [Kontext mit anfänglichen und fortlaufenden Eingabe-Prompts hinzufügen > Anfängliche Prompts bei der Sitzungs-Erstellung bereitstellen](/de/docs/Web/API/Prompt_API/Adding_context#providing_initial_prompts_during_session_creation).

### Überwachen des Downloadfortschritts

In diesem Code wird gezeigt, wie der Downloadfortschritt eines Modells überwacht werden kann.
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

Siehe auch [Die Prompt API verwenden > Downloadfortschritt überwachen](/de/docs/Web/API/Prompt_API/Using#monitoring_download_progress).

### Bereitstellung von Few-Shot-Prompts

Das folgende Beispiel zeigt, wie ein [Few-Shot-Prompt](/de/docs/Web/API/Prompt_API/Adding_context#few-shot_prompts) verwendet wird, um die API nach einer bestimmten Aufgabe (z.B. einer französischen Übersetzung) in einem bestimmten Format zu fragen, bevor einige Beispiele bereitgestellt werden, die ihr helfen, das richtige Ausgabformat zu lernen.

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

Siehe auch [Kontext mit anfänglichen und fortlaufenden Eingabe-Prompts hinzufügen > Few-Shot-Prompts](/de/docs/Web/API/Prompt_API/Adding_context#few-shot_prompts).

### Ein Werkzeug mit einem Callback definieren

Dieses Beispiel erstellt eine Sitzung mit einem hypothetischen "get weather" Werkzeug. Wenn das Modell entscheidet, das Werkzeug aufzurufen, ruft der Benutzeragent `execute()` mit den vom Modell bereitgestellten Argumenten auf.

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

### Eine Sitzung abbrechen

Das folgende Beispiel ermöglicht es einem Benutzer, eine Eingabeaufforderung abzubrechen. Dazu wird zuerst ein [`AbortController`](/de/docs/Web/API/AbortController) erstellt und dessen `abort()` Methode einem Abbrechen-Button-Klickhandler zugewiesen. Anschließend wird `create()` aufgerufen und `AbortController.signal` als `signal` Eigenschaft übergeben.

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

Siehe auch [Die Prompt API verwenden > Abbrechen von Vorgängen und Zerstören von Instanzen](/de/docs/Web/API/Prompt_API/Using#cancelling_operations_and_destroying_instances).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static)
- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Die Prompt API verwenden](/de/docs/Web/API/Prompt_API/Using)
- [Kontext mit anfänglichen und fortlaufenden Eingabe-Prompts hinzufügen](/de/docs/Web/API/Prompt_API/Adding_context)
