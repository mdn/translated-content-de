---
title: "LanguageModel: measureContextUsage() Methode"
short-title: measureContextUsage()
slug: Web/API/LanguageModel/measureContextUsage
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`measureContextUsage()`** Methode der [`LanguageModel`](/de/docs/Web/API/LanguageModel) Schnittstelle schätzt, wie viele Tokens im Kontextfenster der gegebene Input verbrauchen würde, ohne ihn an das Modell zu senden oder den Zustand der Sitzung zu ändern.

Dies ermöglicht es Ihnen, zu überprüfen, wie viel des Kontextfensters ein gegebener Input erfordert, bevor Sie entscheiden, ob Sie ihn senden. Das Ergebnis kann mit [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) und [`LanguageModel.contextUsage`](/de/docs/Web/API/LanguageModel/contextUsage) verglichen werden, um festzustellen, ob der Input in das Kontextfenster-Limit passt.

Dies ist besonders nützlich für Anwendungen mit langen Kontexten wie Dokumentenzusammenfassungen, bei denen Sie möglicherweise Inhalte aufteilen oder kürzen müssen, um innerhalb des Kontextfensters-Limits zu bleiben.

## Syntax

```js-nolint
measureContextUsage(input)
measureContextUsage(input, options)
```

### Parameter

- `input`
  - : Der Inhalt, der dem Kontextfenster hinzugefügt werden soll. Dies ist entweder:
    - Ein String — Abkürzung für eine einzelne Textnachricht.
    - Ein Array von Objekten, wobei jedes Objekt eine einzelne Nachricht in einem Gespräch mit einem Sprachmodell darstellt. Objekte können die folgenden Eigenschaften haben:
      - `role`
        - : Ein String, der den Standpunkt angibt, aus dem die Nachricht formuliert ist. Muss eines der folgenden sein:
          - `system`
            - : Eine systembezogene Anweisung, die das allgemeine Verhalten des Modells leitet. Dies muss die erste Anweisung sein, die dem Modell übergeben wird.
          - `user`
            - : Eine Nachricht vom Benutzer, auf die die API reagieren soll.
          - `assistant`
            - : Ein Input, der Kontext für den KI-Assistenten bietet, wie zum Beispiel seine Persona oder das Format seiner Antworten. Solche Nachrichten dienen hauptsächlich dazu, Kontext/Verlauf bereitzustellen und die Reaktion des Modells weiter zu gestalten.
      - `content`
        - : Ein String, der eine Textaufforderung darstellt oder ein Array von Objekten. Jedes Objekt enthält die folgenden Eigenschaften:
          - `type`
            - : Ein enumerierter Wert, der den Inhaltstyp darstellt. Dies kann einer der folgenden sein:
              - `audio`
                - : Audioinhalt.
              - `image`
                - : Bildinhalt.
              - `text`
                - : Textinhalt.
              - `tool-call`
                - : Ein Werkzeugaufruf, der vom Modell ausgegeben wurde.
              - `tool-response`
                - : Das Ergebnis eines Werkzeugaufrufs.
          - `value`
            - : Der Inhalt der Nachricht. Wenn der `type` `text` ist, ist dies immer ein String. Wenn der `type` `audio` oder `image` ist, kann der `value` einer von mehreren verschiedenen Objekttypen sein; siehe [Welche Datentypen werden akzeptiert?](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
      - `prefix` {{optional_inline}}
        - : Ein Boolean, standardmäßig `false`. Wenn `true`, wird die Nachricht als Präfix für die nächste vom Modell generierte Antwort behandelt, anstatt als vollständige Runde.
- `options` {{optional_inline}}
  - : Optionen zur Messung der Kontextnutzung. Eigenschaften sind:
    - `responseConstraint`
      - : Ein Objekt, das der von [JSON Schema](https://json-schema.org/) definierten Struktur folgt und das genaue Format definiert, in dem die Ausgabe des Modells geliefert werden soll. Wenn angegeben und `omitResponseConstraintInput` `false` ist, ist jede implementationsdefinierte Einschränkungs-Beschreibungsnachricht in der Messung enthalten.
    - `omitResponseConstraintInput`
      - : Ein Boolean; wenn `true`, wird die automatische Einschränkungs-Beschreibungsnachricht von der Messung ausgeschlossen.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zum Abbrechen der Operation.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer {{jsxref("Number")}} aufgelöst wird und die Anzahl der Tokens im Kontextfenster darstellt, die der Input verbrauchen würde.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Operation über die `signal` Option abgebrochen wird.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}} {{httpheader("Permissions-Policy")}} blockiert ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die `role` einer Nachricht `assistant` ist und ihr `type` etwas anderes als `text` ist.
    - Der `type` einer Nachricht `text` ist und ihr `value` kein String ist.
    - Der Eingabe- oder Ausgabetext in einer Sprache ist, die der Benutzeragent für Aufforderungen nicht unterstützt.
    - Der `type` einer Nachricht `image` oder `audio` ist, aber der Typ nicht in den `expectedInputs` aufgeführt war, oder der `value` kein [akzeptierter Datentyp](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted) ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Keine Nachrichten im Nachrichtenarray enthalten sind.
    - Die `prefix` Eigenschaft einer Nachricht auf `true` gesetzt ist und:
      - Die `role` der Nachricht nicht `assistant` ist.
      - Die Nachricht nicht das letzte Element im Nachrichtenarray ist.
- `TypeError`
  - : Wird ausgelöst, wenn:
    - `omitResponseConstraintInput` `true` ist, aber `responseConstraint` nicht angegeben wurde.
    - Die `role` einer Nachricht `system` ist, die Nachricht jedoch nicht die erste Nachricht ist, die an den Kontext übergeben wurde.

## Beispiele

### Warnung, wenn der Kontext fast voll ist

Das folgende Beispiel verwendet eine Funktion, um zu überprüfen, ob Kontext verfügbar ist, bevor [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt) aufgerufen wird. Es berechnet zuerst den verbleibenden Kontext und übergibt diesen Wert an `measureContextUsage()`. Wenn `needed` kleiner oder gleich `remaining` ist, gibt es `true` zurück und die Sitzung wird fortgesetzt.

```js
const promptText = "Let me ask you an interesting question...";
const session = await LanguageModel.create();

async function contextAvailable(promptText) {
  const remaining = session.contextWindow - session.contextUsage;
  const needed = await session.measureContextUsage(promptText);

  return needed <= remaining;
}

if (await contextAvailable(promptText)) {
  const response = await session.prompt(promptText);
  console.log(response);
} else {
  console.warn("Prompt skipped: Not enough context window remaining.");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LanguageModel.contextUsage`](/de/docs/Web/API/LanguageModel/contextUsage)
- [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow)
- [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append)
- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Verwendung der Prompt API](/de/docs/Web/API/Prompt_API/Using)
