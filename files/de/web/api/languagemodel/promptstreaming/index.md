---
title: "LanguageModel: promptStreaming() Methode"
short-title: promptStreaming()
slug: Web/API/LanguageModel/promptStreaming
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`promptStreaming()`** Methode des [`LanguageModel`](/de/docs/Web/API/LanguageModel) Interfaces sendet Eingaben an das Sprachmodell und gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der die Antwort des Modells schrittweise liefert, während sie generiert wird.

Dies ist nützlich, um Antworten schrittweise an Benutzer anzuzeigen, insbesondere bei Ausgaben, die lange dauern, oder in jeder Situation, in der die wahrgenommene Latenz minimiert werden soll. Der Stream kann mit `for await...of` konsumiert werden oder indem man einen Leser über [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) anhängt.

## Syntax

```js-nolint
promptStreaming(input)
promptStreaming(input, options)
```

### Parameter

- `input`
  - : Der Inhalt, mit dem das Modell aufgefordert wird. Dies ist entweder:
    - Ein String — Kurzform für eine einzelne textuelle Nachricht.
    - Ein Array von Objekten, wobei jedes Objekt eine einzelne Nachricht in einem Gespräch mit einem Sprachmodell repräsentiert.
      Objekte können die folgenden Eigenschaften haben:
      - `role`
        - : Ein String, der angibt, aus welcher Sicht die Nachricht formuliert ist. Muss eine der folgenden sein:
          - `system`
            - : Eine systemweite Anweisung, die das gesamte Verhalten des Modells anleitet. Dies muss die erste Anweisung sein, die dem Modell übergeben wird.
          - `user`
            - : Eine Nachricht vom Benutzer, auf die die API reagieren soll.
          - `assistant`
            - : Eine Eingabe, die Kontext für den KI-Assistenten bereitstellt, wie seine Persona oder das Format seiner Antworten. Solche Nachrichten dienen hauptsächlich dazu, Kontext/Geschichte bereitzustellen und weiter zu definieren, wie das Modell reagiert.
      - `content`
        - : Ein String, der eine textbasierte Eingabe darstellt, oder ein Array von Objekten. Jedes Objekt enthält die folgenden Eigenschaften:
          - `type`
            - : Ein enumerierter Wert, der den Content-Typ repräsentiert. Dies kann einer der folgenden sein:
              - `audio`
                - : Audio-Inhalt.
              - `image`
                - : Bild-Inhalt.
              - `text`
                - : Textueller Inhalt.
              - `tool-call`
                - : Ein vom Modell ausgeführter Werkzeugaufruf.
              - `tool-response`
                - : Das Ergebnis eines Werkzeugaufrufs.
          - `value`
            - : Der Inhalt der Nachricht. Wenn der `type` `text` ist, ist dies immer ein String. Wenn der `type` `audio` oder `image` ist, kann der `value` einer von mehreren verschiedenen Objekttypen sein; siehe [Welche Datentypen werden akzeptiert?](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
      - `prefix` {{optional_inline}}
        - : Ein boolescher Wert, standardmäßig `false`. Wenn `true`, wird die Nachricht als Präfix für die nächste vom Modell generierte Antwort und nicht als vollständiger Zug behandelt.
- `options` {{optional_inline}}
  - : Optionen zur Erstellung eines Prompts. Eigenschaften umfassen:
    - `responseConstraint`
      - : Ein Objekt gemäß der Struktur, die von [JSON Schema](https://json-schema.org/) definiert wird und das genaue Format angibt, in dem die Ausgabe des Modells geliefert werden soll. Wenn bereitgestellt und `omitResponseConstraintInput` `false` ist, wird jede implementierungsspezifische Beschreibungsnachricht zur Messung hinzugefügt.
    - `omitResponseConstraintInput`
      - : Ein boolescher Wert; Wenn `true`, wird die automatische Beschreibungsnachricht von der Messung ausgeschlossen.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), um den Vorgang abzubrechen.

### Rückgabewert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) von {{jsxref("String")}}-Teilen. Jeder Teil repräsentiert ein Stück der Modellantwort, während sie generiert wird. Der Stream wird geschlossen, wenn die Generierung abgeschlossen ist.

### Ausnahmen

Fehler werden als Stream-Fehler und nicht als abgelehnte Promises angezeigt. Verbraucher sollten Fehler mit den Standard-Fehlerbehandlungsmechanismen eines Streams behandeln.

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Vorgang über die `signal`-Option abgebrochen wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Verwendung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die `role` einer Nachricht `assistant` ist und ihr `type` etwas anderes als `text` ist.
    - Der `type` einer Nachricht `text` ist und ihr `value` kein String ist.
    - Die Eingabe- oder Ausgabetexte in einer Sprache vorliegen, die der Benutzeragent für die Aufforderung nicht unterstützt.
    - Der `type` einer Nachricht `image` oder `audio` ist, aber der Typ nicht in `expectedInputs` aufgelistet war oder der `value` kein [akzeptierter Datentyp](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted) ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Aufforderung aus einem anderen Grund fehlschlägt, der nicht unter den anderen Ausnahmetypen aufgeführt ist.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Aufforderung dazu führen würde, dass die Kontextnutzung der Sitzung das Modell [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) überschreitet.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Keine Nachrichten im Nachrichtenarray enthalten sind.
    - Die `prefix`-Eigenschaft einer Nachricht auf `true` gesetzt ist und:
      - Die `role` der Nachricht nicht `assistant` ist.
      - Die Nachricht nicht das letzte Element im Nachrichtenarray ist.
- `TypeError`
  - : Wird ausgelöst, wenn:
    - `omitResponseConstraintInput` `true` ist, aber `responseConstraint` nicht bereitgestellt wurde.
    - Die `role` einer Nachricht `system` ist, aber nicht die erste Nachricht im Kontext war.

## Beschreibung

Die `promptStreaming()`-Methode fügt das bereitgestellte Eingabematerial zum Kontextfenster hinzu und generiert eine Antwort. Die gesamte Antwort wird schrittweise als [`ReadableStream`](/de/docs/Web/API/ReadableStream) empfangen.

Um die Antwort als einen vollständigen String zu erhalten, verwenden Sie stattdessen [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt). Um Inhalt zum Kontextfenster hinzuzufügen, ohne eine Antwort zu generieren, verwenden Sie [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append).

Jeder Aufruf von `promptStreaming()` fügt der Sitzungskontext hinzu. Um von einem gegebenen Zustand aus abzweigen zu können, ohne die ursprüngliche Sitzung zu beeinflussen, verwenden Sie [`LanguageModel.clone()`](/de/docs/Web/API/LanguageModel/clone).

## Beispiele

### Streaming einer Antwort zur Webseite

Dieses Beispiel schreibt Teile eines `promptStreaming()`-Aufrufs aus einem [`ReadableStream`](/de/docs/Web/API/ReadableStream), sobald sie ankommen.

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

### Gesammelte gestreamte Teile in einen einzelnen String umwandeln

In diesem Beispiel werden Teile aus einem [`ReadableStream`](/de/docs/Web/API/ReadableStream) gesammelt, bevor der gesamte Stream geschrieben wird.

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
- [Hinzufügen von Kontext mit anfänglichen und laufenden Prompt-Eingaben](/de/docs/Web/API/Prompt_API/Adding_context)
