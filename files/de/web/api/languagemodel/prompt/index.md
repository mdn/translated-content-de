---
title: "LanguageModel: prompt() Methode"
short-title: prompt()
slug: Web/API/LanguageModel/prompt
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`prompt()`** Methode der [`LanguageModel`](/de/docs/Web/API/LanguageModel) Schnittstelle sendet Eingaben an das Sprachmodell und gibt ein {{jsxref("Promise")}} zurück, das mit der vollständigen Antwort des Modells als Zeichenkette aufgelöst wird.

## Syntax

```js-nolint
prompt(input)
prompt(input, options)
```

### Parameter

- `input`
  - : Der Inhalt, mit dem das Modell aufgefordert wird. Dies kann sein:
    - Ein String — Eine Kurzform für eine einzige textuelle Nachricht.
    - Ein Array von Objekten, die jeweils eine einzelne Nachricht in einem Gespräch mit einem Sprachmodell darstellen.
      Objekte können die folgenden Eigenschaften haben:
      - `role`
        - : Ein String, der angibt, aus welcher Perspektive die Nachricht formuliert ist. Muss eine der folgenden sein:
          - `system`
            - : Eine systemweite Anweisung, die das allgemeine Verhalten des Modells leitet. Dies muss die erste Anweisung sein, die an das Modell übergeben wird.
          - `user`
            - : Eine Nachricht vom Benutzer, auf die die API antworten soll.
          - `assistant`
            - : Eine Eingabe, die Kontext für den KI-Assistenten bietet, wie seine Persona oder das Format seiner Antworten. Solche Nachrichten dienen hauptsächlich dazu, Kontext/Geschichte bereitzustellen und die Reaktion des Modells weiter zu gestalten.
      - `content`
        - : Eine Zeichenkette, die eine textuelle Aufforderung darstellt, oder ein Array von Objekten. Jedes Objekt enthält die folgenden Eigenschaften:
          - `type`
            - : Ein enumerierter Wert, der den Inhaltstyp darstellt. Dies kann einer der folgenden sein:
              - `audio`
                - : Audioinhalt.
              - `image`
                - : Bildinhalt.
              - `text`
                - : Textinhalt.
              - `tool-call`
                - : Ein vom Modell ausgeführter Werkzeugaufruf.
              - `tool-response`
                - : Das Ergebnis eines Werkzeugaufrufs.
          - `value`
            - : Der Inhalt der Nachricht. Wenn der `type` `text` ist, ist dies immer eine Zeichenkette. Wenn der `type` `audio` oder `image` ist, kann der `value` einer von mehreren verschiedenen Objekttypen sein; siehe [Welche Datentypen werden akzeptiert?](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
      - `prefix` {{optional_inline}}
        - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist. Wenn `true`, wird die Nachricht als Präfix für die nächste generierte Antwort des Modells behandelt, anstatt als vollständige Runde.
- `options` {{optional_inline}}
  - : Optionen zur Erstellung einer Aufforderung. Zu den Eigenschaften gehören:
    - `responseConstraint`
      - : Ein Objekt, das der Struktur von [JSON Schema](https://json-schema.org/) folgt und das genaue Format definiert, in dem die Ausgabe des Modells geliefert werden soll. Wenn es bereitgestellt wird und `omitResponseConstraintInput` `false` ist, wird eine implementierungsdefinierte Beschreibungsnachricht in die Messung einbezogen.
    - `omitResponseConstraintInput`
      - : Ein boolescher Wert; wenn `true`, wird die automatische Beschreibungsnachricht aus der Messung ausgeschlossen.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), um die Operation abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("String")}} aufgelöst wird, der die vollständige Antwort des Modells enthält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Operation über die `signal` Option abgebrochen wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Nutzung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Die `role` einer Nachricht `assistant` ist und ihr `type` etwas anderes als `text` ist.
    - Der `type` einer Nachricht `text` ist und ihr `value` keine Zeichenkette ist.
    - Der Eingabe- oder Ausgabetext in einer Sprache ist, die vom Benutzer-Agenten für Aufforderungen nicht unterstützt wird.
    - Der `type` einer Nachricht `image` oder `audio` ist, aber der Typ nicht in `expectedInputs` aufgeführt war oder der `value` kein [akzeptierter Datentyp](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted) ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Aufforderung aus einem anderen als den in den anderen Ausnahmetypen aufgeführten Gründen fehlschlägt.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Aufforderung Nutzung des Kontexts der Sitzung über das Modell hinaus erhöhen würde [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Keine Nachrichten in dem Nachrichtenarray enthalten sind.
    - Die `prefix`-Eigenschaft einer Nachricht auf `true` gesetzt ist und:
      - Die `role` der Nachricht nicht `assistant` ist.
      - Die Nachricht nicht das letzte Element im Nachrichtenarray ist.
- `TypeError`
  - : Ausgelöst, wenn:
    - `omitResponseConstraintInput` `true` ist, aber `responseConstraint` nicht bereitgestellt wurde.
    - Die `role` einer Nachricht `system` ist, aber es nicht die erste Nachricht ist, die dem Kontext übergeben wurde.

## Beschreibung

Die `prompt()` Methode ist der primäre Mechanismus zur Interaktion mit einer Sprachmodellsitzung. Sie fügt die bereitgestellte Eingabe zum Kontextfenster hinzu und generiert eine Antwort. Die gesamte Antwort wird gepuffert und als einzelne Zeichenkette zurückgegeben, wenn die Generierung abgeschlossen ist.

Für lange Antworten oder Streaming-Anwendungsfälle verwenden Sie stattdessen [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming), um die Antwort schrittweise zu erhalten. Um Inhalt zum Kontextfenster hinzuzufügen, ohne eine Antwort zu generieren, verwenden Sie [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append).

Jeder Aufruf von `prompt()` fügt dem Kontext der Sitzung hinzu. Um von einem gegebenen Zustand abzweigen zu können, ohne die ursprüngliche Sitzung zu beeinflussen, rufen Sie [`LanguageModel.clone()`](/de/docs/Web/API/LanguageModel/clone) auf.

## Beispiele

### Basic Text Prompt

Dieses Beispiel zeigt die grundlegende `prompt()` Verwendung mit einer einzelnen Benutzereingabe als Text.

```js
const session = await LanguageModel.create();
const response = await session.prompt(
  "Summarize the water cycle in one paragraph.",
);
console.log(response);
```

Siehe auch [Using the Prompt API > Prompting the model](/de/docs/Web/API/Prompt_API/Using#prompting_the_model).

### Multi-Turn-Konversation

```js
const session = await LanguageModel.create();

const reply1 = await session.prompt("My name is Alex.");
console.log(reply1); // "Nice to meet you, Alex!"

const reply2 = await session.prompt("What's my name?");
console.log(reply2); // "Your name is Alex."
```

### Einschränkungen beim JSON-Ausgang

Das folgende Beispiel zeigt, wie JSON an die `responseConstraint` Option übergeben wird, um festzulegen, dass Sie ein Array zurückgeben möchten, das durch den Aufruf von `prompt()` zurückgegeben wird.

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

Siehe auch [Hinzufügen von Kontext mit initialen und fortlaufenden Eingaben > Hinzufügen von Antwortbeschränkungen](/de/docs/Web/API/Prompt_API/Adding_context#adding_response_constraints).

### Abbrechen einer Aufforderung

Das folgende Beispiel zeigt, wie ein Benutzer eine Aufforderung mit einem Knopf abbrechen kann. Dies geschieht durch Erstellen eines [`AbortController`](/de/docs/Web/API/AbortController). Sein `abort()` kann von einem `click` Handler eines Knopfes aufgerufen werden. Damit dies funktioniert, muss eine Referenz zur `signal` Eigenschaft des Controllers an `prompt()` übergeben werden.

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
    console.log("prompt was canceled.");
  } else {
    console.error("An unexpected error occurred:", err);
  }
}
```

Siehe auch [Using the Prompt API > Canceling operations and destroying instances](/de/docs/Web/API/Prompt_API/Using#canceling_operations_and_destroying_instances).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming)
- [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append)
- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Using the Prompt API](/de/docs/Web/API/Prompt_API/Using)
- [Hinzufügen von Kontext mit initialen und fortlaufenden Eingaben](/de/docs/Web/API/Prompt_API/Adding_context)
