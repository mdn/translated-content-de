---
title: "LanguageModel: promptStreaming() Methode"
short-title: promptStreaming()
slug: Web/API/LanguageModel/promptStreaming
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`promptStreaming()`** Methode der [`LanguageModel`](/de/docs/Web/API/LanguageModel) Schnittstelle sendet Eingaben an das Sprachmodell und gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der die Antwort des Modells inkrementell liefert, während sie generiert wird.

Dies ist nützlich, um Antworten an Benutzer schrittweise für Ausgaben anzuzeigen, die lange dauern, oder in jedem Szenario, in dem die wahrgenommene Latenz minimiert werden soll. Der Stream kann mit `for await...of` konsumiert oder ein Leser über [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) angehängt werden.

## Syntax

```js-nolint
promptStreaming(input)
promptStreaming(input, options)
```

### Parameter

- `input`
  - : Der Inhalt, mit dem das Modell angesprochen wird. Dies ist entweder:
    - Ein String — Abkürzung für eine einzelne textuelle Nachricht.
    - Ein Array von Objekten, wobei jedes Objekt eine einzelne Nachricht in einem Gespräch mit einem Sprachmodell darstellt.
      Objekte können die folgenden Eigenschaften haben:
      - `role`
        - : Ein String, der die Perspektive angibt, aus der die Nachricht formuliert ist. Muss eine der folgenden sein:
          - `system`
            - : Eine Systemanweisung, die das allgemeine Verhalten des Modells steuert. Dies muss die erste Anweisung sein, die an das Modell übergeben wird.
          - `user`
            - : Eine Nachricht vom Benutzer, auf die die API antworten soll.
          - `assistant`
            - : Eine Eingabe, die dem KI-Assistenten Kontext bietet, wie seine Persona oder das Format seiner Antworten. Solche Nachrichten dienen hauptsächlich dazu, Kontext/Verlauf zu liefern und weiter zu beeinflussen, wie das Modell antwortet.
      - `content`
        - : Ein String, der einen textuellen Prompt darstellt, oder ein Array von Objekten. Jedes Objekt enthält die folgenden Eigenschaften:
          - `type`
            - : Ein enumerierter Wert, der den Typ des Inhalts darstellt. Dies kann einer der folgenden sein:
              - `audio`
                - : Audio-Inhalt.
              - `image`
                - : Bild-Inhalt.
              - `text`
                - : Textueller Inhalt.
              - `tool-call`
                - : Eine vom Modell ausgeführte Werkzeugaufruf.
              - `tool-response`
                - : Das Ergebnis eines Werkzeugaufrufs.
          - `value`
            - : Der Inhalt der Nachricht. Wenn der `type` `text` ist, ist dies immer ein String. Wenn der `type` `audio` oder `image` ist, kann der `value` einer von mehreren verschiedenen Objekttypen sein; siehe [Welche Datentypen werden akzeptiert?](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
      - `prefix` {{optional_inline}}
        - : Ein Boolean, defaultmäßig `false`. Wenn `true`, wird die Nachricht als Präfix für die nächste vom Modell generierte Antwort behandelt, anstatt als vollständige Wendung.
- `options` {{optional_inline}}
  - : Optionen zum Erstellen eines Prompts. Eigenschaften umfassen:
    - `responseConstraint`
      - : Ein Objekt nach der Struktur, die von [JSON Schema](https://json-schema.org/) definiert ist, das das genaue Format beschreibt, in dem die Ausgabe des Modells geliefert werden soll. Wenn angegeben und `omitResponseConstraintInput` `false` ist, wird eine beliebig definierte Einschränkungs-Beschreibungsnachricht in das Maß einbezogen.
    - `omitResponseConstraintInput`
      - : Ein Boolean; wenn `true`, wird die automatische Einschränkungs-Beschreibungsnachricht aus dem Maß ausgeschlossen.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), um die Operation abzubrechen.

### Rückgabewert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) von {{jsxref("String")}}-Chunks. Jeder Chunk repräsentiert ein Stück der Modellantwort, während sie generiert wird. Der Stream schließt, wenn die Generierung abgeschlossen ist.

### Ausnahmen

Fehler treten als Stream-Fehler auf, anstatt als abgelehnte Promises. Konsumierende sollten Fehler mit den standardmäßigen Fehlerbehandlungsmechanismen eines Streams behandeln.

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Operation über die `signal` Option abgebrochen wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Der `role` einer Nachricht `assistant` ist und ihr `type` alles andere als `text` ist.
    - Der `type` einer Nachricht `text` ist und der `value` kein String ist.
    - Der Eingabe- oder Ausgabetext in einer Sprache verfasst ist, die der Benutzeragent nicht zum Promten unterstützt.
    - Der `type` einer Nachricht `image` oder `audio` ist, aber der Typ nicht in `expectedInputs` aufgeführt war, oder der `value` kein [akzeptierter Datentyp](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted) ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Prompt aus irgendeinem anderen Grund fehlschlägt, der nicht in den anderen Ausnahmetypen aufgeführt ist.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Prompt dazu führen würde, dass die Nutzung des Sitzungs-Kontexts das [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) des Modells überschreitet.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Keine Nachrichten im Nachrichten-Array enthalten sind.
    - Die `prefix`-Eigenschaft einer Nachricht `true` gesetzt ist und:
      - Der `role` der Nachricht nicht `assistant` ist.
      - Die Nachricht nicht das letzte Element im Nachrichten-Array ist.
- `TypeError`
  - : Wird ausgelöst, wenn:
    - `omitResponseConstraintInput` `true` ist, aber `responseConstraint` nicht bereitgestellt wurde.
    - Der `role` einer Nachricht `system` ist, es aber nicht die erste Nachricht ist, die an den Kontext übergeben wurde.

## Beschreibung

Die `promptStreaming()` Methode fügt die bereitgestellte Eingabe dem Kontextfenster hinzu und generiert eine Antwort. Die gesamte Antwort wird inkrementell als [`ReadableStream`](/de/docs/Web/API/ReadableStream) empfangen.

Um die Antwort als einen kompletten String zu erhalten, verwenden Sie stattdessen [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt). Um Inhalte dem Kontextfenster hinzuzufügen, ohne eine Antwort zu generieren, verwenden Sie [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append).

Jeder Aufruf von `promptStreaming()` fügt der Sitzungskontext hinzu. Um von einem gegebenen Zustand abzuzweigen, ohne die ursprüngliche Sitzung zu beeinträchtigen, rufen Sie [`LanguageModel.clone()`](/de/docs/Web/API/LanguageModel/clone) auf.

## Beispiele

### Eine Antwort auf die Seite streamen

Dieses Beispiel schreibt Chunks aus einem `promptStreaming()` Aufruf des [`ReadableStream`](/de/docs/Web/API/ReadableStream) während ihres Eintreffens aus.

```js
const session = await LanguageModel.create();
const output = document.querySelector("#output");

const stream = session.promptStreaming("Write a short poem about the ocean.");

for await (const chunk of stream) {
  output.textContent += chunk;
}
```

Siehe auch [Using the Prompt API > Complete streaming example](/de/docs/Web/API/Prompt_API/Using#complete_streaming_example).

### Streamen mit einem Abbruchsignal

Dieses Beispiel zeigt, wie ein [`AbortController`](/de/docs/Web/API/AbortController) mit `promptStreaming()` verwendet wird.

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

### Gesammelte gestreamte Chunks in einen einzelnen String sammeln

In diesem Beispiel werden Chunks aus einem [`ReadableStream`](/de/docs/Web/API/ReadableStream) gesammelt, bevor der gesamte Stream ausgegeben wird.

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
- [Using the Prompt API](/de/docs/Web/API/Prompt_API/Using)
- [Hinzufügen von Kontext mit initialen und fortlaufenden Prompteingaben](/de/docs/Web/API/Prompt_API/Adding_context)
