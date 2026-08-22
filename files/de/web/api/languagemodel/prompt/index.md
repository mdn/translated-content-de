---
title: "LanguageModel: Methode prompt()"
short-title: prompt()
slug: Web/API/LanguageModel/prompt
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`prompt()`**-Methode der [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Schnittstelle sendet Eingaben an das Sprachmodell und gibt ein {{jsxref("Promise")}} zurück, das mit der vollständigen Antwort des Modells als Zeichenfolge aufgelöst wird.

## Syntax

```js-nolint
prompt(input)
prompt(input, options)
```

### Parameter

- `input`
  - : Der Inhalt, mit dem das Modell aufgefordert wird. Dieser ist entweder:
    - Ein String — Abkürzung für eine einzelne Textnachricht.
    - Ein Array von Objekten, von denen jedes eine einzelne Nachricht in einem Gespräch mit einem Sprachmodell darstellt.
      Objekte können die folgenden Eigenschaften haben:
      - `role`
        - : Ein String, der die Perspektive angibt, aus der die Nachricht formuliert ist. Muss eine der folgenden sein:
          - `system`
            - : Eine Systemanweisung, die das gesamte Verhalten des Modells leitet. Dies muss die erste Anweisung sein, die an das Modell übergeben wird.
          - `user`
            - : Eine Nachricht vom Benutzer, auf die die API reagieren soll.
          - `assistant`
            - : Eine Eingabe, die Kontext für den KI-Assistenten bereitstellt, wie z.B. seine Persönlichkeit oder das Format seiner Antworten. Solche Nachrichten dienen hauptsächlich dazu, Kontext/Geschichte bereitzustellen und die Art der Modellantworten zu prägen.
      - `content`
        - : Ein String, der einen Text-Trigger darstellt, oder ein Array von Objekten. Jedes Objekt enthält die folgenden Eigenschaften:
          - `type`
            - : Ein enumerierter Wert, der den Inhaltstyp darstellt. Dies kann einer der folgenden sein:
              - `audio`
                - : Audio-Inhalt.
              - `image`
                - : Bildinhalt.
              - `text`
                - : Textinhalt.
              - `tool-call`
                - : Ein vom Modell ausgeführter Aufruf eines Werkzeugs.
              - `tool-response`
                - : Das Ergebnis eines Werkzeugaufrufs.
          - `value`
            - : Der Inhalt der Nachricht. Wenn der `type` `text` ist, ist dies immer ein String. Wenn der `type` `audio` oder `image` ist, kann der `value` einer von mehreren verschiedenen Objekttypen sein; siehe [Welche Datentypen werden akzeptiert?](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
      - `prefix` {{optional_inline}}
        - : Ein Boolean, der standardmäßig auf `false` steht. Wenn `true`, wird die Nachricht als Präfix für die nächste generierte Antwort des Modells behandelt, anstatt als vollständiger Zug.
- `options` {{optional_inline}}
  - : Optionen zum Erstellen eines Prompts. Eigenschaften umfassen:
    - `responseConstraint`
      - : Ein Objekt, das der Struktur von [JSON Schema](https://json-schema.org/) folgt und das genaue Format definiert, in dem die Ausgabe des Modells geliefert werden soll. Wenn bereitgestellt und `omitResponseConstraintInput` `false` ist, wird jede implementierungsdefinierte Beschreibungsnachricht in die Messung eingeschlossen.
    - `omitResponseConstraintInput`
      - : Ein Boolean; wenn `true`, wird die automatische Beschreibungsnachricht von der Messung ausgeschlossen.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), um den Vorgang abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("String")}} aufgelöst wird, der die vollständige Antwort des Modells enthält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Vorgang über die `signal`-Option abgebrochen wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die `role` einer Nachricht `assistant` ist und ihr `type` etwas anderes als `text` ist.
    - Der `type` einer Nachricht `text` ist und ihr `value` kein String ist.
    - Der Eingabe- oder Ausgabetext in einer Sprache ist, die vom Benutzeragenten nicht für Prompts unterstützt wird.
    - Der `type` einer Nachricht `image` oder `audio` ist, der Typ jedoch nicht in `expectedInputs` aufgelistet war, oder der `value` kein [akzeptierter Datentyp](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted) ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Prompt aus einem anderen Grund fehlschlägt, der nicht in den anderen Ausnahmetypen aufgeführt ist.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Prompt dazu führen würde, dass der Nutzungskontext der Sitzung das Modell [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) überschreitet.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Keine Nachrichten im Nachrichtenarray enthalten sind.
    - Die `prefix`-Eigenschaft einer Nachricht auf `true` gesetzt ist und:
      - Die `role` der Nachricht nicht `assistant` ist.
      - Die Nachricht nicht das letzte Element im Nachrichtenarray ist.
- `TypeError`
  - : Wird ausgelöst, wenn:
    - `omitResponseConstraintInput` `true` ist, aber `responseConstraint` nicht angegeben wurde.
    - Die `role` einer Nachricht `system` ist, diese aber nicht die erste übergebene Nachricht an den Kontext war.

## Beschreibung

Die Methode `prompt()` ist der primäre Mechanismus zur Interaktion mit einer Sprachmodell-Sitzung. Sie fügt die bereitgestellten Eingaben in das Kontextfenster ein und generiert eine Antwort. Die gesamte Antwort wird gepuffert und als ein einziger String zurückgegeben, wenn die Generierung abgeschlossen ist.

Für lange Antworten oder Streaming-Anwendungsfälle verwenden Sie stattdessen [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming), um die Antwort schrittweise zu erhalten. Um Inhalte dem Kontextfenster hinzuzufügen, ohne eine Antwort zu generieren, verwenden Sie [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append).

Jeder Aufruf von `prompt()` fügt dem Kontext der Sitzung etwas hinzu. Um von einem gegebenen Zustand aus einen Zweig zu eröffnen, ohne die ursprüngliche Sitzung zu beeinträchtigen, rufen Sie [`LanguageModel.clone()`](/de/docs/Web/API/LanguageModel/clone) auf.

## Beispiele

### Einfacher Text-Prompt

Dieses Beispiel zeigt die grundlegende Verwendung von `prompt()` mit einer einzelnen Benutzertext-Eingabe.

```js
const session = await LanguageModel.create();
const response = await session.prompt(
  "Summarize the water cycle in one paragraph.",
);
console.log(response);
```

Siehe auch [Die Prompt-API verwenden > Das Modell auffordern](/de/docs/Web/API/Prompt_API/Using#prompting_the_model).

### Mehrstufiges Gespräch

```js
const session = await LanguageModel.create();

const reply1 = await session.prompt("My name is Alex.");
console.log(reply1); // "Nice to meet you, Alex!"

const reply2 = await session.prompt("What's my name?");
console.log(reply2); // "Your name is Alex."
```

### Eingeschränkte JSON-Ausgabe

Das folgende Beispiel zeigt, wie JSON an die `responseConstraint`-Option übergeben wird, um festzulegen, dass Sie ein Array von dem Aufruf an `prompt()` zurückgeben möchten.

```js
const session = await LanguageModel.create();
const raw = await session.prompt("Name three planets in our solar system.", {
  responseConstraint: {
    type: "object",
    properties: {
      planets: {
        type: "array",
        items: { type: "string" },
      },
    },
    required: ["planets"],
  },
});

const { planets } = JSON.parse(raw);
console.log(planets); // ["Mercury", "Venus", "Earth"]
```

Siehe auch [Hinzufügen von Kontext mit anfänglichen und fortlaufenden Prompt-Eingaben > Hinzufügen von Antwortbeschränkungen](/de/docs/Web/API/Prompt_API/Adding_context#adding_response_constraints).

### Abbrechen eines Prompts

Das folgende Beispiel zeigt, wie ein Benutzer einen Prompt mit einem Button abbrechen kann. Dies erfolgt durch die Erstellung eines [`AbortController`](/de/docs/Web/API/AbortController). Sein `abort()` kann von einem Button-`click`-Handler aufgerufen werden. Damit dies funktioniert, muss ein Verweis auf die `signal`-Eigenschaft des Controllers an `prompt()` übergeben werden.

```js
const controller = new AbortController();

// Select your cancel button from the DOM
const cancelButton = document.querySelector("#btn-cancel");

// Trigger the abort when the user clicks the button
cancelButton.addEventListener("click", () => {
  controller.abort();
});

try {
  const response = await session.prompt("write a very long story.", {
    signal: controller.signal,
  });
  console.log(response);
} catch (err) {
  if (err.name === "AbortError") {
    console.log("prompt was cancelled.");
  } else {
    console.error("An unexpected error occurred:", err);
  }
}
```

Siehe auch [Die Prompt-API verwenden > Vorgänge abbrechen und Instanzen zerstören](/de/docs/Web/API/Prompt_API/Using#cancelling_operations_and_destroying_instances).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming)
- [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append)
- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Die Prompt-API verwenden](/de/docs/Web/API/Prompt_API/Using)
- [Hinzufügen von Kontext mit anfänglichen und fortlaufenden Prompt-Eingaben](/de/docs/Web/API/Prompt_API/Adding_context)
