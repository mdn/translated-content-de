---
title: "LanguageModel: prompt() Methode"
short-title: prompt()
slug: Web/API/LanguageModel/prompt
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
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
  - : Der Inhalt zur Aufforderung des Modells. Dies ist entweder:
    - Eine Zeichenkette — Eine Kurzform für eine einzelne Textnachricht.
    - Ein Array von Objekten, die jeweils eine einzelne Nachricht in einem Gespräch mit einem Sprachmodell repräsentieren. Objekte können die folgenden Eigenschaften haben:
      - `role`
        - : Eine Zeichenkette, die die Perspektive angibt, aus der die Nachricht formuliert ist. Muss eine der folgenden sein:
          - `system`
            - : Eine systemübergreifende Anweisung, die das allgemeine Verhalten des Modells leitet. Dies muss die erste Anweisung sein, die an das Modell übergeben wird.
          - `user`
            - : Eine Nachricht vom Benutzer, auf die die API antworten soll.
          - `assistant`
            - : Eine Eingabe, die dem KI-Assistenten Kontext bietet, wie z. B. seine Persönlichkeit oder das Format seiner Antworten. Solche Nachrichten dienen hauptsächlich dazu, Kontext/Verlauf bereitzustellen und weiter zu beeinflussen, wie das Modell antwortet.
      - `content`
        - : Eine Zeichenkette, die eine Textaufforderung darstellt, oder ein Array von Objekten. Jedes Objekt umfasst die folgenden Eigenschaften:
          - `type`
            - : Ein enumerierter Wert, der den Typ des Inhalts repräsentiert. Dies kann eines der folgenden sein:
              - `audio`
                - : Audioinhalt.
              - `image`
                - : Bildinhalt.
              - `text`
                - : Textinhalt.
              - `tool-call`
                - : Ein Werkzeugaufruf, der vom Modell ausgeführt wurde.
              - `tool-response`
                - : Das Ergebnis eines Werkzeugaufrufs.
          - `value`
            - : Der Inhalt der Nachricht. Wenn der `type` `text` ist, ist dies immer eine Zeichenkette. Wenn der `type` `audio` oder `image` ist, kann der `value` einer von mehreren unterschiedlichen Objekttypen sein; siehe [Welche Datentypen werden akzeptiert?](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
      - `prefix` {{optional_inline}}
        - : Ein boolean, der standardmäßig auf `false` steht. Wenn `true`, wird die Nachricht als Präfix für die nächste generierte Antwort des Modells behandelt, anstatt als vollständiger Turn.
- `options` {{optional_inline}}
  - : Optionen zum Erstellen einer Aufforderung. Eigenschaften umfassen:
    - `responseConstraint`
      - : Ein Objekt, das der Struktur von [JSON Schema](https://json-schema.org/) folgt und das genaue Format definiert, in dem die Ausgabe des Modells geliefert werden soll. Wenn bereitgestellt und `omitResponseConstraintInput` `false` ist, wird jede implementierungsdefinierte Einschränkungsbeschreibungsnachricht in die Messung einbezogen.
    - `omitResponseConstraintInput`
      - : Ein boolean; Wenn `true`, wird die automatische Einschränkungsbeschreibungsnachricht aus der Messung ausgeschlossen.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), um den Vorgang abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einer {{jsxref("String")}} auflöst, die die vollständige Antwort des Modells enthält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Vorgang über die `signal` Option abgebrochen wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die `role` einer Nachricht `assistant` ist und ihr `type` etwas anderes als `text` ist.
    - Der `type` einer Nachricht `text` ist und ihr `value` keine Zeichenkette ist.
    - Der Eingabe- oder Ausgabe-Text in einer Sprache ist, die der Benutzeragent für Aufforderungen nicht unterstützt.
    - Der `type` einer Nachricht `image` oder `audio` ist, aber der Typ nicht in `expectedInputs` aufgelistet war oder der `value` kein [akzeptierter Datentyp](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted) ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Aufforderung aus einem anderen in den anderen Ausnahmearten nicht aufgeführten Grund fehlschlägt.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Aufforderung dazu führen würde, dass die Kontextnutzung der Sitzung das [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) des Modells überschreitet.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Keine Nachrichten im Nachrichtenarray enthalten sind.
    - Die `prefix` Eigenschaft einer Nachricht auf `true` gesetzt ist und:
      - Die `role` der Nachricht nicht `assistant` ist.
      - Die Nachricht nicht das letzte Element im Nachrichtenarray ist.
- `TypeError`
  - : Wird ausgelöst, wenn:
    - `omitResponseConstraintInput` `true` ist, aber `responseConstraint` nicht bereitgestellt wurde.
    - Die `role` einer Nachricht `system` ist, diese jedoch nicht die erste Nachricht war, die an den Kontext übergeben wurde.

## Beschreibung

Die `prompt()` Methode ist der primäre Mechanismus zur Interaktion mit einer Sprachmodellsitzung. Sie fügt die bereitgestellte Eingabe zum Kontextfenster hinzu und generiert eine Antwort. Die gesamte Antwort wird gepuffert und als einzelne Zeichenkette zurückgegeben, wenn die Generierung abgeschlossen ist.

Für lange Antworten oder Streaming-Anwendungen verwenden Sie stattdessen [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming), um die Antwort schrittweise zu erhalten. Um Inhalte zum Kontextfenster hinzuzufügen, ohne eine Antwort zu generieren, verwenden Sie [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append).

Jeder Aufruf von `prompt()` fügt dem Kontext der Sitzung hinzu. Um von einem bestimmten Zustand aus abzuzweigen, ohne die ursprüngliche Sitzung zu beeinflussen, rufen Sie [`LanguageModel.clone()`](/de/docs/Web/API/LanguageModel/clone) auf.

## Beispiele

### Einfache Textaufforderung

Dieses Beispiel zeigt die grundlegende Verwendung von `prompt()` mit einer einzigen Benutzereingabe als Text.

```js
const session = await LanguageModel.create();
const response = await session.prompt(
  "Summarize the water cycle in one paragraph.",
);
console.log(response);
```

Siehe auch [Verwendung der Prompt API > Modellaufforderung](/de/docs/Web/API/Prompt_API/Using#prompting_the_model).

### Mehrfachdialog

```js
const session = await LanguageModel.create();

const reply1 = await session.prompt("My name is Alex.");
console.log(reply1); // "Nice to meet you, Alex!"

const reply2 = await session.prompt("What's my name?");
console.log(reply2); // "Your name is Alex."
```

### Einschränkungen bei JSON-Ausgaben

Das folgende Beispiel zeigt, wie man JSON an die `responseConstraint` Option übergibt, um anzugeben, dass man ein Array erhalten möchte, das durch den Aufruf von `prompt()` zurückgegeben wird.

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

Siehe auch [Hinzufügen von Kontext mit anfänglichen und laufenden Eingaben > Hinzufügen von Antwortbeschränkungen](/de/docs/Web/API/Prompt_API/Adding_context#adding_response_constraints).

### Abbrechen einer Aufforderung

Das folgende Beispiel zeigt, wie ein Benutzer eine Aufforderung mit einem Button abbrechen kann. Dies wird durch Erstellen eines [`AbortController`](/de/docs/Web/API/AbortController) erreicht. Sein `abort()` kann von einem `click`-Handler eines Buttons aufgerufen werden. Damit dies funktioniert, muss eine Referenz auf die `signal` Eigenschaft des Controllers an `prompt()` übergeben werden.

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

Siehe auch [Verwendung der Prompt API > Abbrechen von Operationen und Zerstören von Instanzen](/de/docs/Web/API/Prompt_API/Using#cancelling_operations_and_destroying_instances).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming)
- [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append)
- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Verwendung der Prompt API](/de/docs/Web/API/Prompt_API/Using)
- [Hinzufügen von Kontext mit anfänglichen und laufenden Eingaben](/de/docs/Web/API/Prompt_API/Adding_context)
