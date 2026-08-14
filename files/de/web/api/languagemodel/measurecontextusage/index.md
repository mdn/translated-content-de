---
title: "LanguageModel: measureContextUsage() Methode"
short-title: measureContextUsage()
slug: Web/API/LanguageModel/measureContextUsage
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`measureContextUsage()`** Methode der [`LanguageModel`](/de/docs/Web/API/LanguageModel) Schnittstelle schätzt, wie viele Kontextfenster-Token der gegebene Eingabetext verbrauchen würde, ohne ihn an das Modell zu senden oder den Zustand der Sitzung zu verändern.

Dies ermöglicht es Ihnen zu überprüfen, wie viel des Kontextfensters ein gegebener Eingabetext benötigt, bevor Sie entscheiden, ob Sie ihn senden. Das Ergebnis kann mit [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) und [`LanguageModel.contextUsage`](/de/docs/Web/API/LanguageModel/contextUsage) verglichen werden, um festzustellen, ob der Eingabetext innerhalb das Kontextfenster-Limits passt.

Dies ist besonders nützlich für Langkontext-Anwendungen wie die Dokumentzusammenfassung, bei der Sie möglicherweise Inhalte aufteilen oder kürzen müssen, um innerhalb des Kontextfenster-Limits zu bleiben.

## Syntax

```js-nolint
measureContextUsage(input)
measureContextUsage(input, options)
```

### Parameter

- `input`
  - : Der Inhalt, der dem Kontextfenster hinzugefügt werden soll. Dies ist entweder:
    - Ein String — Kurzform für eine einzelne Textnachricht.
    - Ein Array von Objekten, von denen jedes eine einzelne Nachricht in einem Gespräch mit einem Sprachmodell darstellt.
      Objekte können die folgenden Eigenschaften haben:
      - `role`
        - : Ein String, der angibt, aus welcher Perspektive die Nachricht formuliert ist. Muss eine der folgenden sein:
          - `system`
            - : Eine Systemanweisung, die das allgemeine Verhalten des Modells leitet. Dies muss die erste Anweisung sein, die an das Modell übermittelt wird.
          - `user`
            - : Eine Nachricht vom Benutzer, auf die die API antworten soll.
          - `assistant`
            - : Eine Eingabe, die den KI-Assistenten kontextualisiert, wie z. B. seine Persona oder das Format seiner Antworten. Solche Nachrichten dienen hauptsächlich dazu, Kontext/Verlauf bereitzustellen, und formen weiter, wie das Modell antwortet.
      - `content`
        - : Ein String, der ein Text-Prompt darstellt, oder ein Array von Objekten. Jedes Objekt enthält die folgenden Eigenschaften:
          - `type`
            - : Ein aufzählbarer Wert, der die Art des Inhalts darstellt. Dies kann eine der folgenden sein:
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
            - : Der Inhalt der Nachricht. Wenn der `type` `text` ist, ist dies immer ein String. Wenn der `type` `audio` oder `image` ist, kann der `value` eines von mehreren verschiedenen Objekttypen sein; siehe [Welche Datentypen werden akzeptiert?](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
      - `prefix` {{optional_inline}}
        - : Ein Boolean, standardmäßig auf `false`. Wenn `true`, wird die Nachricht als Präfix für die nächste vom Modell generierte Antwort behandelt, anstatt als vollständiger Kommunikationsschritt.
- `options` {{optional_inline}}
  - : Optionen zur Messung der Kontextnutzung. Eigenschaften umfassen:
    - `responseConstraint`
      - : Ein Objekt gemäß der von [JSON Schema](https://json-schema.org/) definierten Struktur, das das genaue Format vorgibt, in dem die Ausgabe des Modells geliefert werden soll. Wird dies bereitgestellt und `omitResponseConstraintInput` ist `false`, wird jede implementierungsdefinierte Einschränkungs-Beschreibungsnachricht in die Messung einbezogen.
    - `omitResponseConstraintInput`
      - : Ein Boolean; wenn `true`, wird die automatische Einschränkungs-Beschreibungsnachricht aus der Messung ausgeschlossen.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zur Abbruch der Operation.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer {{jsxref("Number")}} aufgelöst wird, die die Anzahl der Kontextfenster-Token darstellt, die der Eingabetext verbrauchen würde.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Operation über die `signal`-Option abgebrochen wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Nutzung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Die `role` einer Nachricht `assistant` ist und der `type` etwas anderes als `text` ist.
    - Die `type` einer Nachricht `text` ist und der `value` kein String ist.
    - Der Ein- oder Ausgabtext in einer Sprache ist, die vom Benutzeragenten nicht für die Eingabeaufforderung unterstützt wird.
    - Der `type` einer Nachricht `image` oder `audio` ist, jedoch nicht in `expectedInputs` aufgelistet war, oder der `value` kein [akzeptierter Datentyp](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted) ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Keine Nachrichten im Nachrichten-Array enthalten sind.
    - Die `prefix`-Eigenschaft einer Nachricht auf `true` gesetzt ist und:
      - Die `role` der Nachricht nicht `assistant` ist.
      - Die Nachricht nicht das letzte Element im Nachrichten-Array ist.
- `TypeError`
  - : Ausgelöst, wenn:
    - `omitResponseConstraintInput` `true` ist, aber `responseConstraint` nicht bereitgestellt wird.
    - Die `role` einer Nachricht `system` ist, aber sie nicht die erste Nachricht ist, die an den Kontext übergeben wird.

## Beispiele

### Warnung, wenn der Kontext fast voll ist

Das folgende Beispiel verwendet eine Funktion, um zu überprüfen, ob Kontext verfügbar ist, bevor [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt) aufgerufen wird. Es berechnet zunächst den verbleibenden Kontext und übergibt diesen Wert an `measureContextUsage()`. Wenn `needed` kleiner oder gleich `remaining` ist, gibt es `true` zurück und die Sitzung wird fortgesetzt.

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
