---
title: "LanguageModel: Statische Methode create()"
short-title: create()
slug: Web/API/LanguageModel/create_static
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die statische Methode **`create()`** der Schnittstelle [`LanguageModel`](/de/docs/Web/API/LanguageModel) erstellt eine neue [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Instanz und lädt die zugehörigen Modelldaten automatisch herunter, falls sie noch nicht verfügbar sind.

## Syntax

```js-nolint
LanguageModel.create()
LanguageModel.create(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit den Optionen zum Erstellen einer [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Sitzung. Es kann folgende Eigenschaften enthalten:
    - `expectedInputs`
      - : Ein Array von Objekten, die die erforderlichen Eingabemodalitäten und Sprachen beschreiben.
        Jedes Objekt kann folgende Eigenschaften enthalten:
        - `type`
          - : Ein Aufzählungswert, der den Inhaltstyp angibt. Der Wert muss einer der folgenden sein:
            - `text`
              - : Einfacher Text.
            - `image`
              - : Bildinhalt.
            - `audio`
              - : Audioinhalt.
            - `tool-call`
              - : Ein vom Modell ausgelöster Werkzeugaufruf.
            - `tool-response`
              - : Das Ergebnis eines Werkzeugaufrufs.
        - `languages` {{optional_inline}}
          - : Ein Array von Zeichenfolgen mit [BCP-47](https://www.rfc-editor.org/info/rfc5646/)-Sprachtags (zum Beispiel `en`, `fr`, `ja`), die die Sitzung für diesen Inhaltstyp verarbeiten können soll. Der User Agent verwendet diese Liste, um festzustellen, ob das Modell die angegebenen Sprachen unterstützt, und um geeignete Modellkomponenten oder Feinabstimmungen auszuwählen.
    - `expectedOutputs`
      - : Ein Array von Objekten, die die erforderlichen Ausgabemodalitäten und Sprachen beschreiben.
        Jedes Objekt kann folgende Eigenschaften enthalten:
        - `type`
          - : Ein Aufzählungswert, der den Inhaltstyp angibt. Der Wert muss einer der folgenden sein:
            - `text`
              - : Einfacher Text.
            - `image`
              - : Bildinhalt.
            - `audio`
              - : Audioinhalt.
            - `tool-call`
              - : Ein vom Modell ausgelöster Werkzeugaufruf.
            - `tool-response`
              - : Das Ergebnis eines Werkzeugaufrufs.
        - `languages` {{optional_inline}}
          - : Ein Array von Zeichenfolgen mit [BCP-47](https://www.rfc-editor.org/info/rfc5646/)-Sprachtags (zum Beispiel `en`, `fr`, `ja`), die die Sitzung für diesen Inhaltstyp verarbeiten können soll. Der User Agent verwendet diese Liste, um festzustellen, ob das Modell die angegebenen Sprachen unterstützt, und um geeignete Modellkomponenten oder Feinabstimmungen auszuwählen.
    - `initialPrompts`
      - : Ein Array von Objekten, die Nachrichten darstellen, die beim Erstellen einer Sprachmodellsitzung übergeben werden. Dadurch kann sich das Modell an Anweisungen oder einen vorherigen Dialog „erinnern“, ohne dass diese bei jeder neuen Anfrage erneut gesendet werden müssen. Jedes Objekt kann folgende Eigenschaften enthalten:
        - `role`
          - : Eine Zeichenfolge, die angibt, aus welcher Perspektive die Nachricht formuliert ist. Der Wert muss einer der folgenden sein:
            - `system`
              - : Eine Anweisung auf Systemebene, die das allgemeine Verhalten des Modells steuert. Sie muss die erste Anweisung sein, die an das Modell übergeben wird.
            - `user`
              - : Eine Nachricht der benutzenden Person, auf die die API antworten soll.
            - `assistant`
              - : Eine Eingabe, die Kontext für den KI-Assistenten bereitstellt, etwa seine Persona oder das Format seiner Antworten. Solche Nachrichten dienen hauptsächlich dazu, Kontext beziehungsweise einen Gesprächsverlauf bereitzustellen und die Antworten des Modells weiter zu beeinflussen.
        - `content`
          - : Eine Zeichenfolge, die einen textuellen Prompt darstellt, oder ein Array von Objekten. Jedes Objekt enthält folgende Eigenschaften:
            - `type`
              - : Ein Aufzählungswert, der den Inhaltstyp angibt. Der Wert kann einer der folgenden sein:
                - `audio`
                  - : Audioinhalt.
                - `image`
                  - : Bildinhalt.
                - `text`
                  - : Textinhalt.
                - `tool-call`
                  - : Ein vom Modell ausgelöster Werkzeugaufruf.
                - `tool-response`
                  - : Das Ergebnis eines Werkzeugaufrufs.
            - `value`
              - : Der Inhalt der Nachricht. Wenn `type` den Wert `text` hat, ist dies immer eine Zeichenfolge. Wenn `type` den Wert `audio` oder `image` hat, kann `value` einer von mehreren unterschiedlichen Objekttypen sein; siehe [Welche Datentypen werden akzeptiert?](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
        - `prefix` {{optional_inline}}
          - : Ein boolescher Wert, der standardmäßig `false` ist. Bei `true` wird die Nachricht als Präfix für die nächste generierte Antwort des Modells behandelt und nicht als abgeschlossener Gesprächsbeitrag.
    - `monitor`
      - : Eine Referenz auf eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Callback-Funktion, die Ereignisse zum Downloadfortschritt empfängt.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), mit dem die Erstellung der Sitzung abgebrochen werden kann.
    - `tools`
      - : Ein Array von Objekten, die der KI verfügbare Werkzeuge darstellen.
        Jedes Objekt kann folgende Eigenschaften enthalten:
        - `name`
          - : Eine Zeichenfolge, die dem Werkzeug einen eindeutigen Namen gibt, mit dem das Modell bei einem Werkzeugaufruf darauf verweist.
        - `description`
          - : Eine Zeichenfolge, die beschreibt, was das Werkzeug tut. Das Modell verwendet diese Beschreibung, um zu entscheiden, ob und wann es das Werkzeug aufruft.
        - `inputSchema`
          - : Ein [JSON-Schema](https://json-schema.org/), das die Eingabeparameter des Werkzeugs beschreibt. Das Modell verwendet dieses Schema, um die Argumente für die `execute`-Funktion des Werkzeugs zusammenzustellen.
        - `execute`
          - : Eine Callback-Funktion, die der User Agent aufruft, wenn das Modell dieses Werkzeug aufruft. Ihre Argumente hängen vom verwendeten Modell ab. Sie muss ein {{jsxref("Promise")}} zurückgeben, das mit einem {{jsxref("String")}} als Ergebnis des Werkzeugs erfüllt wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer neuen [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Instanz erfüllt wird.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Vorgang über die Option `signal` abgebrochen wurde.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aufrufende Dokument nicht vollständig aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Verwendung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}}-{{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - `role` einer Nachricht den Wert `assistant` hat und ihr `type` einen anderen Wert als `text` hat.
    - `type` einer Nachricht den Wert `text` hat und ihr `value` keine Zeichenfolge ist.
    - Der Eingabe- oder Ausgabetext in einer Sprache verfasst ist, die der User Agent für Prompts nicht unterstützt.
    - `type` einer Nachricht den Wert `image` oder `audio` hat, dieser Typ aber nicht in `expectedInputs` aufgeführt ist oder `value` kein [akzeptierter Datentyp](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted) ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Erstellung aus einem anderen Grund fehlschlägt, der nicht bei den übrigen Ausnahmetypen aufgeführt ist.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der in `initialPrompts` bereitgestellte Inhalt das [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) des Modells überschreitet.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Nachrichten-Array keine Nachrichten enthält.
    - Die Eigenschaft `prefix` einer Nachricht auf `true` gesetzt ist und:
      - `role` der Nachricht nicht `assistant` ist.
      - Die Nachricht nicht das letzte Element im Nachrichten-Array ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - `role` einer Nachricht den Wert `system` hat, die Nachricht aber nicht die erste war, die an den Kontext übergeben wurde.

## Beschreibung

Die Methode `create()` erstellt eine neue Sprachmodellsitzung und lädt das Modell automatisch herunter, falls es noch nicht verfügbar ist.
Sie können den Fortschritt eines Modelldownloads mit der Option [`monitor`](#monitor) überwachen.

Prüfen Sie vor dem Aufruf von `create()` mit [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static), ob die gewünschte Konfiguration unterstützt wird.

Nachdem eine Sitzung erstellt wurde, können Sie über ihre Instanzmethoden – [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt), [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming), [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append) und weitere – mit dem Modell interagieren.

## Sicherheit

Eine [vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Damit diese Funktion genutzt werden kann, muss die benutzende Person mit der Seite oder einem UI-Element interagieren.

## Beispiele

### Eine einfache Sitzung erstellen

Dieses Beispiel erstellt eine Standardsitzung und fragt anschließend nach dem Ergebnis der Addition von `2` und `2`.
Text wird standardmäßig unterstützt, daher sollte das heruntergeladene Modell für diesen Fall geeignet sein.

```js
const session = await LanguageModel.create();
const answer = await session.prompt("What is 2 + 2?");
console.log(answer);
```

Siehe auch [Die Prompt API verwenden > Eine `LanguageModel`-Sitzung erstellen](/de/docs/Web/API/Prompt_API/Using#creating_a_languagemodel_session).

### Eine Sitzung mit einem System-Prompt erstellen

Das folgende Beispiel gibt der KI vor dem Generieren einer Antwort Anweisungen dazu, welche Persona sie annehmen soll.

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

Siehe auch [Kontext mit anfänglichen und fortlaufenden Prompt-Eingaben hinzufügen > Anfängliche Prompts beim Erstellen einer Sitzung bereitstellen](/de/docs/Web/API/Prompt_API/Adding_context#providing_initial_prompts_during_session_creation).

### Downloadfortschritt überwachen

Dieser Code zeigt, wie Sie den Fortschritt eines Modelldownloads überwachen können.
Beachten Sie, dass das Ereignis nie ausgelöst wird, wenn das Modell nicht verfügbar oder bereits vorhanden ist.

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

### Few-Shot-Prompts bereitstellen

Das folgende Beispiel zeigt, wie Sie mit einem [Few-Shot-Prompt](/de/docs/Web/API/Prompt_API/Adding_context#few-shot_prompts) die API auffordern, eine bestimmte Aufgabe (eine Übersetzung ins Französische) in einem bestimmten Format auszuführen. Anschließend werden einige Beispiele bereitgestellt, anhand derer sie das richtige Ausgabeformat lernen kann.

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

Siehe auch [Kontext mit anfänglichen und fortlaufenden Prompt-Eingaben hinzufügen > Few-Shot-Prompts](/de/docs/Web/API/Prompt_API/Adding_context#few-shot_prompts).

### Ein Werkzeug mit einer Callback-Funktion definieren

Dieses Beispiel erstellt eine Sitzung mit einem hypothetischen Werkzeug zum Abrufen des Wetters. Wenn das Modell entscheidet, das Werkzeug aufzurufen, ruft der User Agent `execute()` mit den vom Modell bereitgestellten Argumenten auf.

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

Das folgende Beispiel ermöglicht es, einen Prompt abzubrechen. Dazu wird zunächst ein [`AbortController`](/de/docs/Web/API/AbortController) erstellt und seine Methode `abort()` dem Click-Handler einer Abbrechen-Schaltfläche zugewiesen. Anschließend wird `create()` aufgerufen und `AbortController.signal` als Eigenschaft `signal` übergeben.

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

Siehe auch [Die Prompt API verwenden > Vorgänge abbrechen und Instanzen zerstören](/de/docs/Web/API/Prompt_API/Using#canceling_operations_and_destroying_instances).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static)
- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Die Prompt API verwenden](/de/docs/Web/API/Prompt_API/Using)
- [Kontext mit anfänglichen und fortlaufenden Prompt-Eingaben hinzufügen](/de/docs/Web/API/Prompt_API/Adding_context)
