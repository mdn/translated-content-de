---
title: "LanguageModel: promptStreaming()-Methode"
short-title: promptStreaming()
slug: Web/API/LanguageModel/promptStreaming
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`promptStreaming()`**-Methode der [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Schnittstelle sendet eine Eingabe an das Sprachmodell und gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der die Antwort des Modells schrittweise liefert, während sie generiert wird.

Dies ist nützlich, um Benutzern Antworten schrittweise anzuzeigen, deren Generierung lange dauert, oder wenn die wahrgenommene Wartezeit möglichst gering sein soll. Verarbeiten Sie den Stream mit `for await...of` oder binden Sie über [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) einen Reader ein.

## Syntax

```js-nolint
promptStreaming(input)
promptStreaming(input, options)
```

### Parameter

- `input`
  - : Der Inhalt, der dem Modell als Prompt übergeben wird. Dies ist entweder:
    - Ein String – Kurzform für eine einzelne Textnachricht.
    - Ein Array von Objekten, die jeweils eine einzelne Nachricht in einer Unterhaltung mit einem Sprachmodell darstellen.
      Die Objekte können folgende Eigenschaften haben:
      - `role`
        - : Ein String, der angibt, aus welcher Perspektive die Nachricht formuliert ist. Muss einer der folgenden Werte sein:
          - `system`
            - : Eine Anweisung auf Systemebene, die das allgemeine Verhalten des Modells steuert. Dies muss die erste Anweisung sein, die an das Modell übergeben wird.
          - `user`
            - : Eine Nachricht des Benutzers, auf die die API antworten soll.
          - `assistant`
            - : Eine Eingabe, die dem KI-Assistenten Kontext gibt, etwa zu seiner Persona oder zum Format seiner Antworten. Solche Nachrichten dienen hauptsächlich dazu, Kontext oder Verlauf bereitzustellen und die Antworten des Modells weiter zu beeinflussen.
      - `content`
        - : Ein String, der einen textuellen Prompt darstellt, oder ein Array von Objekten. Jedes Objekt enthält folgende Eigenschaften:
          - `type`
            - : Ein Aufzählungswert, der die Art des Inhalts angibt. Dies kann einer der folgenden Werte sein:
              - `audio`
                - : Audioinhalt.
              - `image`
                - : Bildinhalt.
              - `text`
                - : Textinhalt.
              - `tool-call`
                - : Ein vom Modell ausgelöster Tool-Aufruf.
              - `tool-response`
                - : Das Ergebnis eines Tool-Aufrufs.
          - `value`
            - : Der Inhalt der Nachricht. Wenn `type` den Wert `text` hat, ist dies immer ein String. Wenn `type` den Wert `audio` oder `image` hat, kann `value` einem von mehreren verschiedenen Objekttypen entsprechen; siehe [Welche Datentypen werden akzeptiert?](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
      - `prefix` {{optional_inline}}
        - : Ein boolescher Wert, standardmäßig `false`. Bei `true` wird die Nachricht als Präfix für die nächste generierte Antwort des Modells behandelt statt als vollständiger Gesprächsbeitrag.
- `options` {{optional_inline}}
  - : Optionen für die Erstellung eines Prompts. Zu den Eigenschaften gehören:
    - `responseConstraint`
      - : Ein Objekt gemäß der durch [JSON Schema](https://json-schema.org/) definierten Struktur, das das genaue Format der Modellausgabe festlegt. Wenn es angegeben ist und `omitResponseConstraintInput` den Wert `false` hat, wird jede implementierungsspezifische Nachricht zur Beschreibung der Formatvorgabe in die Messung einbezogen.
    - `omitResponseConstraintInput`
      - : Ein boolescher Wert; bei `true` wird die automatisch erzeugte Nachricht zur Beschreibung der Formatvorgabe von der Messung ausgeschlossen.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), um den Vorgang abzubrechen.

### Rückgabewert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) aus {{jsxref("String")}}-Fragmenten. Jedes Fragment stellt einen Teil der Antwort des Modells dar, während sie generiert wird. Der Stream wird geschlossen, wenn die Generierung abgeschlossen ist.

### Ausnahmen

Fehler werden als Stream-Fehler ausgegeben, nicht als abgelehnte Promises. Verarbeiten Sie Fehler mit den üblichen Fehlerbehandlungsmechanismen eines Streams.

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Vorgang über die Option `signal` abgebrochen wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Verwendung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}}-{{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - `role` einer Nachricht den Wert `assistant` hat und ihr `type` einen anderen Wert als `text` hat.
    - `type` einer Nachricht den Wert `text` hat und ihr `value` kein String ist.
    - Der Eingabe- oder Ausgabetext in einer Sprache verfasst ist, die der User Agent für Prompts nicht unterstützt.
    - `type` einer Nachricht den Wert `image` oder `audio` hat, dieser Typ aber nicht in `expectedInputs` aufgeführt wurde oder `value` keinem [akzeptierten Datentyp](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted) entspricht.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Prompt aus einem anderen Grund fehlschlägt, der nicht unter den übrigen Ausnahmetypen aufgeführt ist.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Prompt dazu führen würde, dass die Kontextnutzung der Sitzung das [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) des Modells überschreitet.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Nachrichten-Array keine Nachrichten enthält.
    - Die Eigenschaft `prefix` einer Nachricht auf `true` gesetzt ist und:
      - `role` der Nachricht nicht `assistant` ist.
      - Die Nachricht nicht das letzte Element im Nachrichten-Array ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - `omitResponseConstraintInput` den Wert `true` hat, aber `responseConstraint` nicht angegeben wurde.
    - `role` einer Nachricht den Wert `system` hat, sie aber nicht die erste Nachricht war, die an den Kontext übergeben wurde.

## Beschreibung

Die `promptStreaming()`-Methode fügt die bereitgestellte Eingabe dem Kontextfenster hinzu und generiert eine Antwort. Die gesamte Antwort wird schrittweise als [`ReadableStream`](/de/docs/Web/API/ReadableStream) empfangen.

Um die Antwort als einen vollständigen String zu erhalten, verwenden Sie stattdessen [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt). Um dem Kontextfenster Inhalt hinzuzufügen, ohne eine Antwort zu generieren, verwenden Sie [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append).

Jeder Aufruf von `promptStreaming()` erweitert den Kontext der Sitzung. Um von einem bestimmten Zustand aus einen separaten Zweig zu erstellen, ohne die ursprüngliche Sitzung zu beeinflussen, rufen Sie [`LanguageModel.clone()`](/de/docs/Web/API/LanguageModel/clone) auf.

## Beispiele

### Eine Antwort schrittweise auf der Seite ausgeben

Dieses Beispiel gibt Fragmente aus dem [`ReadableStream`](/de/docs/Web/API/ReadableStream) eines `promptStreaming()`-Aufrufs aus, sobald sie eintreffen.

```js
const session = await LanguageModel.create();
const output = document.querySelector("#output");

const stream = session.promptStreaming("Write a short poem about the ocean.");

for await (const chunk of stream) {
  output.textContent += chunk;
}
```

Siehe auch [Verwendung der Prompt API > Vollständiges Streaming-Beispiel](/de/docs/Web/API/Prompt_API/Using#complete_streaming_example).

### Streaming mit einem Abbruchsignal

Dieses Beispiel zeigt, wie Sie einen [`AbortController`](/de/docs/Web/API/AbortController) mit `promptStreaming()` verwenden.

```js
const controller = new AbortController();
document
  .querySelector("#stop")
  .addEventListener("click", () => controller.abort());

const stream = session.promptStreaming("Tell me a long story.", {
  signal: controller.signal,
});

try {
  for await (const chunk of stream) {
    output.textContent += chunk;
  }
} catch (err) {
  if (err.name === "AbortError") {
    console.log("Streaming was stopped by the user.");
  }
}
```

### Gestreamte Fragmente zu einem einzelnen String zusammenfügen

In diesem Beispiel werden Fragmente aus einem [`ReadableStream`](/de/docs/Web/API/ReadableStream) gesammelt, bevor der gesamte Stream ausgegeben wird.

```js
const session = await LanguageModel.create();
const stream = session.promptStreaming("Explain quantum entanglement.");
const chunks = [];

for await (const chunk of stream) {
  chunks.push(chunk);
}

const fullResponse = chunks.join("");
console.log(fullResponse);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Verwendung der Prompt API](/de/docs/Web/API/Prompt_API/Using)
- [Kontext durch anfängliche und nachfolgende Prompt-Eingaben hinzufügen](/de/docs/Web/API/Prompt_API/Adding_context)
