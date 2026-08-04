---
title: "LanguageModel: prompt() Methode"
short-title: prompt()
slug: Web/API/LanguageModel/prompt
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`prompt()`** Methode des [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Interfaces sendet Eingaben an das Sprachmodell und gibt ein {{jsxref("Promise")}} zurück, das mit der vollständigen Antwort des Modells als Zeichenkette aufgelöst wird.

## Syntax

```js-nolint
prompt(input)
prompt(input, options)
```

### Parameter

- `input`
  - : Der Inhalt, mit dem das Modell aufgefordert werden soll. Dies ist entweder:
    - Ein String — Abkürzung für eine einzelne textuelle Nachricht.
    - Ein Array von Objekten, die jeweils eine einzelne Nachricht in einem Gespräch mit einem Sprachmodell darstellen.
      Objekte können die folgenden Eigenschaften haben:
      - `role`
        - : Ein String, der angibt, aus welcher Perspektive die Nachricht formuliert ist. Muss eines der folgenden sein:
          - `system`
            - : Eine systemweite Anweisung, die das allgemeine Verhalten des Modells leitet. Dies muss die erste Anweisung sein, die dem Modell übergeben wird.
          - `user`
            - : Eine Nachricht vom Benutzer, auf die die API antworten soll.
          - `assistant`
            - : Eine Eingabe, die den KI-Assistenten kontextualisiert, wie seine Persona oder das Format seiner Antworten. Solche Nachrichten dienen hauptsächlich dazu, Kontext/Geschichte bereitzustellen und weiter zu formen, wie das Modell antwortet.
      - `content`
        - : Ein String, der eine textuelle Eingabeaufforderung darstellt, oder ein Array von Objekten. Jedes Objekt enthält die folgenden Eigenschaften:
          - `type`
            - : Ein enumerierter Wert, der den Typ des Inhalts darstellt. Dies kann eines der folgenden sein:
              - `audio`
                - : Audioinhalt.
              - `image`
                - : Bildinhalt.
              - `text`
                - : Textinhalt.
              - `tool-call`
                - : Ein vom Modell ausgegebener Werkzeuginvokation.
              - `tool-response`
                - : Das Ergebnis einer Werkzeuginvokation.
          - `value`
            - : Der Inhalt der Nachricht. Wenn der `type` `text` ist, ist dies immer ein String. Wenn der `type` `audio` oder `image` ist, kann der `value` eines von mehreren verschiedenen Objekttypen sein; siehe [Welche Datentypen werden akzeptiert?](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
      - `prefix` {{optional_inline}}
        - : Ein Boolean-Wert, der standardmäßig `false` ist. Wenn `true`, wird die Nachricht als Präfix für die nächste vom Modell generierte Antwort behandelt und nicht als vollständiger Turn.
- `options` {{optional_inline}}
  - : Optionen für die Erstellung einer Eingabeaufforderung. Eigenschaften umfassen:
    - `responseConstraint`
      - : Ein Objekt, das der Struktur folgt, die von [JSON Schema](https://json-schema.org/) definiert wird, und das genaue Format angibt, in dem die Ausgabe des Modells geliefert werden soll. Wenn angegeben und `omitResponseConstraintInput` `false` ist, wird jede implementierungsdefinierte Constraint-Beschreibungsnachricht in die Messung einbezogen.
    - `omitResponseConstraintInput`
      - : Ein Boolean-Wert; wenn `true`, wird die automatische Constraint-Beschreibungsnachricht aus der Messung ausgeschlossen.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zur Abbruch des Vorgangs.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("String")}} aufgelöst wird, der die vollständige Antwort des Modells enthält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Vorgang über die `signal`-Option abgebrochen wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}} {{httpheader("Permissions-Policy")}} blockiert ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die `role` einer Nachricht `assistant` ist und ihr `type` etwas anderes als `text` ist.
    - Eine Nachricht `type` `text` ist und ihr `value` kein String ist.
    - Der Eingabe- oder Ausgabetext in einer Sprache ist, die vom Benutzeragenten für Eingabeaufforderungen nicht unterstützt wird.
    - Eine Nachricht `type` `image` oder `audio` ist, dieser Typ jedoch nicht in `expectedInputs` aufgeführt ist, oder der `value` ist kein [akzeptierter Datentyp](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Eingabeaufforderung aus einem anderen Grund als den in den anderen Ausnahmearten genannten fehlschlägt.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Eingabeaufforderung dazu führen würde, dass die Nutzung des Sitzungszusammenhangs das [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) des Modells überschreitet.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Keine Nachrichten im Nachrichten-Array enthalten sind.
    - Die `prefix` Eigenschaft einer Nachricht auf `true` gesetzt ist und:
      - Die `role` der Nachricht ist nicht `assistant`.
      - Die Nachricht ist nicht das letzte Element im Nachrichten-Array.
- `TypeError`
  - : Wird ausgelöst, wenn:
    - `omitResponseConstraintInput` `true` ist, aber `responseConstraint` nicht angegeben wurde.
    - Die `role` einer Nachricht `system` ist, die jedoch nicht die erste Nachricht war, die an den Kontext übergeben wurde.

## Beschreibung

Die `prompt()`-Methode ist der primäre Mechanismus zur Interaktion mit einer Sprachmodel-Sitzung. Sie fügt die bereitgestellte Eingabe zum Kontextfenster hinzu und generiert eine Antwort. Die gesamte Antwort wird gepuffert und in einer einzigen Zeichenkette zurückgegeben, wenn die Generierung abgeschlossen ist.

Für längere Antworten oder Streaming-Anwendungsfälle nutzen Sie [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming), um die Antwort schrittweise zu erhalten. Um Inhalte zum Kontextfenster hinzuzufügen, ohne eine Antwort zu generieren, verwenden Sie [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append).

Jeder Aufruf von `prompt()` trägt zum Kontext der Sitzung bei. Um von einem gegebenen Zustand aus zu verzweigen, ohne die ursprüngliche Sitzung zu beeinflussen, rufen Sie [`LanguageModel.clone()`](/de/docs/Web/API/LanguageModel/clone) auf.

## Beispiele

### Grundlegendes Texteingabeaufforderung

Dieses Beispiel zeigt eine grundlegende Nutzung von `prompt()` mit einer einzelnen Benutzereingabe als Text.

```js
const session = await LanguageModel.create();
const response = await session.prompt(
  "Summarize the water cycle in one paragraph.",
);
console.log(response);
```

Siehe auch [Verwendung der Prompt-API > Das Modell auffordern](/de/docs/Web/API/Prompt_API/Using#prompting_the_model).

### Mehrstufiges Gespräch

```js
const session = await LanguageModel.create();

const reply1 = await session.prompt("My name is Alex.");
console.log(reply1); // "Nice to meet you, Alex!"

const reply2 = await session.prompt("What's my name?");
console.log(reply2); // "Your name is Alex."
```

### Einschränkter JSON-Ausgabe

Das folgende Beispiel zeigt, wie JSON an die `responseConstraint`-Option übergeben wird, um anzugeben, dass ein Array von dem Aufruf zu `prompt()` zurückgegeben werden soll.

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

Siehe auch [Hinzufügen von Kontext mit anfänglichen und laufenden Eingabeaufforderungen > Hinzufügen von Antwortbeschränkungen](/de/docs/Web/API/Prompt_API/Adding_context#adding_response_constraints).

### Abbrechen einer Eingabeaufforderung

Das folgende Beispiel zeigt, wie einem Benutzer ermöglicht wird, eine Eingabeaufforderung mit einem Knopf abzubrechen. Dies geschieht durch Erstellen eines [`AbortController`](/de/docs/Web/API/AbortController). Dessen `abort()` ist aus einem `click`-Handler eines Knopfs aufrufbar. Damit dies funktioniert, muss ein Verweis auf die `signal`-Eigenschaft des Controllers an `prompt()` übergeben werden.

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

Siehe auch [Verwendung der Prompt-API > Vorgänge abbrechen und Instanzen zerstören](/de/docs/Web/API/Prompt_API/Using#cancelling_operations_and_destroying_instances).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming)
- [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append)
- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Verwendung der Prompt-API](/de/docs/Web/API/Prompt_API/Using)
- [Hinzufügen von Kontext mit anfänglichen und laufenden Eingabeaufforderungen](/de/docs/Web/API/Prompt_API/Adding_context)
