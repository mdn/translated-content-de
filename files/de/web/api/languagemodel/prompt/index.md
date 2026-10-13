---
title: "LanguageModel: prompt()-Methode"
short-title: prompt()
slug: Web/API/LanguageModel/prompt
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die Methode **`prompt()`** der Schnittstelle [`LanguageModel`](/de/docs/Web/API/LanguageModel) sendet eine Eingabe an das Sprachmodell und gibt ein {{jsxref("Promise")}} zurück, das mit der vollständigen Antwort des Modells als Zeichenfolge erfüllt wird.

## Syntax

```js-nolint
prompt(input)
prompt(input, options)
```

### Parameter

- `input`
  - : Der Inhalt, der dem Modell als Prompt übergeben wird. Dies ist entweder:
    - Eine Zeichenfolge – Kurzform für eine einzelne Textnachricht.
    - Ein Array von Objekten, die jeweils eine einzelne Nachricht in einer Unterhaltung mit einem Sprachmodell darstellen.
      Die Objekte können folgende Eigenschaften haben:
      - `role`
        - : Eine Zeichenfolge, die angibt, aus welcher Perspektive die Nachricht formuliert ist. Muss einer der folgenden Werte sein:
          - `system`
            - : Eine Anweisung auf Systemebene, die das allgemeine Verhalten des Modells steuert. Dies muss die erste an das Modell übergebene Anweisung sein.
          - `user`
            - : Eine Nachricht des Benutzers, auf die die API antworten soll.
          - `assistant`
            - : Eine Eingabe, die dem KI-Assistenten Kontext liefert, etwa seine Rolle oder das Format seiner Antworten. Solche Nachrichten dienen hauptsächlich dazu, Kontext oder den bisherigen Gesprächsverlauf bereitzustellen und die Antworten des Modells weiter zu beeinflussen.
      - `content`
        - : Eine Zeichenfolge, die einen Text-Prompt darstellt, oder ein Array von Objekten. Jedes Objekt enthält die folgenden Eigenschaften:
          - `type`
            - : Ein Aufzählungswert, der den Inhaltstyp angibt. Dies kann einer der folgenden Werte sein:
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
            - : Der Inhalt der Nachricht. Wenn `type` den Wert `text` hat, ist dies immer eine Zeichenfolge. Wenn `type` den Wert `audio` oder `image` hat, kann `value` einer von mehreren Objekttypen sein; siehe [Welche Datentypen werden akzeptiert?](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
      - `prefix` {{optional_inline}}
        - : Ein boolescher Wert, standardmäßig `false`. Bei `true` wird die Nachricht als Präfix für die nächste generierte Antwort des Modells behandelt und nicht als abgeschlossener Gesprächsbeitrag.
- `options` {{optional_inline}}
  - : Optionen zum Erstellen eines Prompts. Dazu gehören:
    - `responseConstraint`
      - : Ein Objekt, das der durch [JSON Schema](https://json-schema.org/) definierten Struktur entspricht und das genaue Format festlegt, in dem die Ausgabe des Modells zurückgegeben werden soll. Wenn diese Option angegeben ist und `omitResponseConstraintInput` den Wert `false` hat, wird jede implementierungsabhängige Nachricht zur Beschreibung der Einschränkung bei der Messung berücksichtigt.
    - `omitResponseConstraintInput`
      - : Ein boolescher Wert; bei `true` wird die automatisch erzeugte Nachricht zur Beschreibung der Einschränkung von der Messung ausgeschlossen.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), mit dem der Vorgang abgebrochen werden kann.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("String")}} erfüllt wird, der die vollständige Antwort des Modells enthält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Vorgang über die Option `signal` abgebrochen wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Verwendung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}}-{{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - `role` einer Nachricht den Wert `assistant` hat und ihr `type` einen anderen Wert als `text` hat.
    - `type` einer Nachricht den Wert `text` hat und ihr `value` keine Zeichenfolge ist.
    - Der Eingabe- oder Ausgabetext in einer Sprache verfasst ist, die der User Agent für Prompts nicht unterstützt.
    - `type` einer Nachricht den Wert `image` oder `audio` hat, dieser Typ aber nicht in `expectedInputs` aufgeführt wurde oder `value` kein [akzeptierter Datentyp](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted) ist.
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
    - `role` einer Nachricht den Wert `system` hat, die Nachricht aber nicht die erste an den Kontext übergebene Nachricht war.

## Beschreibung

Die Methode `prompt()` ist der wichtigste Mechanismus für die Interaktion mit einer Sprachmodellsitzung. Sie fügt die bereitgestellte Eingabe zum Kontextfenster hinzu und generiert eine Antwort. Die gesamte Antwort wird zwischengespeichert und nach Abschluss der Generierung als einzelne Zeichenfolge zurückgegeben.

Verwenden Sie für lange Antworten oder Anwendungsfälle mit Streaming stattdessen [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming), um die Antwort schrittweise zu erhalten. Um dem Kontextfenster Inhalt hinzuzufügen, ohne eine Antwort zu generieren, verwenden Sie [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append).

Jeder Aufruf von `prompt()` erweitert den Kontext der Sitzung. Um von einem bestimmten Zustand aus einen neuen Verlauf zu beginnen, ohne die ursprüngliche Sitzung zu beeinflussen, rufen Sie [`LanguageModel.clone()`](/de/docs/Web/API/LanguageModel/clone) auf.

## Beispiele

### Einfacher Text-Prompt

Dieses Beispiel zeigt die grundlegende Verwendung von `prompt()` mit einer einzelnen Texteingabe des Benutzers.

```js
const session = await LanguageModel.create();
const response = await session.prompt(
  "Summarize the water cycle in one paragraph.",
);
console.log(response);
```

Siehe auch [Verwendung der Prompt API > Dem Modell einen Prompt übergeben](/de/docs/Web/API/Prompt_API/Using#prompting_the_model).

### Unterhaltung über mehrere Gesprächsbeiträge

```js
const session = await LanguageModel.create();

const reply1 = await session.prompt("My name is Alex.");
console.log(reply1); // "Nice to meet you, Alex!"

const reply2 = await session.prompt("What's my name?");
console.log(reply2); // "Your name is Alex."
```

### JSON-Ausgabe mit vorgegebenem Format

Das folgende Beispiel zeigt, wie Sie der Option `responseConstraint` JSON übergeben, um festzulegen, dass der Aufruf von `prompt()` ein Array zurückgeben soll.

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

Siehe auch [Kontext durch anfängliche und fortlaufende Prompt-Eingaben hinzufügen > Einschränkungen für Antworten hinzufügen](/de/docs/Web/API/Prompt_API/Adding_context#adding_response_constraints).

### Einen Prompt abbrechen

Das folgende Beispiel zeigt, wie Sie Benutzern ermöglichen, einen Prompt mit einer Schaltfläche abzubrechen. Dazu wird ein [`AbortController`](/de/docs/Web/API/AbortController) erstellt. Dessen `abort()`-Methode kann im `click`-Handler einer Schaltfläche aufgerufen werden. Damit dies funktioniert, muss eine Referenz auf die Eigenschaft `signal` des Controllers an `prompt()` übergeben werden.

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

Siehe auch [Verwendung der Prompt API > Vorgänge abbrechen und Instanzen zerstören](/de/docs/Web/API/Prompt_API/Using#canceling_operations_and_destroying_instances).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming)
- [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append)
- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Verwendung der Prompt API](/de/docs/Web/API/Prompt_API/Using)
- [Kontext durch anfängliche und fortlaufende Prompt-Eingaben hinzufügen](/de/docs/Web/API/Prompt_API/Adding_context)
