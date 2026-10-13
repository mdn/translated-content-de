---
title: "LanguageModel: Methode measureContextUsage()"
short-title: measureContextUsage()
slug: Web/API/LanguageModel/measureContextUsage
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die Methode **`measureContextUsage()`** der Schnittstelle [`LanguageModel`](/de/docs/Web/API/LanguageModel) schätzt, wie viele Tokens des Kontextfensters die angegebene Eingabe verbrauchen würde, ohne sie an das Modell zu senden oder den Zustand der Sitzung zu verändern.

So können Sie prüfen, wie viel Platz eine Eingabe im Kontextfenster benötigt, bevor Sie entscheiden, ob Sie sie senden. Das Ergebnis lässt sich mit [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) und [`LanguageModel.contextUsage`](/de/docs/Web/API/LanguageModel/contextUsage) vergleichen, um festzustellen, ob die Eingabe innerhalb der Grenze des Kontextfensters liegt.

Dies ist besonders nützlich für Anwendungen mit langen Kontexten, etwa für die Zusammenfassung von Dokumenten, bei denen Sie Inhalte möglicherweise aufteilen oder kürzen müssen, um innerhalb der Grenze des Kontextfensters zu bleiben.

## Syntax

```js-nolint
measureContextUsage(input)
measureContextUsage(input, options)
```

### Parameter

- `input`
  - : Der Inhalt, der dem Kontextfenster hinzugefügt werden soll. Dies ist entweder:
    - Ein String – Kurzform für eine einzelne Textnachricht.
    - Ein Array von Objekten, von denen jedes eine einzelne Nachricht in einer Konversation mit einem Sprachmodell darstellt.
      Die Objekte können folgende Eigenschaften haben:
      - `role`
        - : Ein String, der angibt, aus welcher Perspektive die Nachricht formuliert ist. Muss einer der folgenden Werte sein:
          - `system`
            - : Eine Anweisung auf Systemebene, die das allgemeine Verhalten des Modells steuert. Dies muss die erste Anweisung sein, die an das Modell übergeben wird.
          - `user`
            - : Eine Nachricht des Benutzers, auf die die API antworten soll.
          - `assistant`
            - : Eine Eingabe, die dem KI-Assistenten Kontext liefert, etwa seine Persona oder das Format seiner Antworten. Solche Nachrichten dienen hauptsächlich dazu, Kontext oder bisherigen Verlauf bereitzustellen und die Antworten des Modells weiter zu beeinflussen.
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
            - : Der Inhalt der Nachricht. Wenn `type` den Wert `text` hat, ist dies immer ein String. Wenn `type` den Wert `audio` oder `image` hat, kann `value` einer von mehreren Objekttypen sein; siehe [Welche Datentypen werden akzeptiert?](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
      - `prefix` {{optional_inline}}
        - : Ein boolescher Wert, der standardmäßig `false` ist. Bei `true` wird die Nachricht als Präfix für die nächste vom Modell generierte Antwort behandelt und nicht als vollständiger Gesprächsbeitrag.
- `options` {{optional_inline}}
  - : Optionen zur Messung der Kontextnutzung. Dazu gehören folgende Eigenschaften:
    - `responseConstraint`
      - : Ein Objekt mit der durch [JSON Schema](https://json-schema.org/) definierten Struktur, das das genaue Format festlegt, in dem die Ausgabe des Modells bereitgestellt werden soll. Wenn es angegeben ist und `omitResponseConstraintInput` den Wert `false` hat, wird eine implementierungsabhängige Nachricht zur Beschreibung der Einschränkung in die Messung einbezogen.
    - `omitResponseConstraintInput`
      - : Ein boolescher Wert; bei `true` wird die automatische Nachricht zur Beschreibung der Einschränkung von der Messung ausgeschlossen.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), mit dem der Vorgang abgebrochen werden kann.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer {{jsxref("Number")}} erfüllt wird, die angibt, wie viele Tokens des Kontextfensters die Eingabe verbrauchen würde.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Vorgang über die Option `signal` abgebrochen wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Verwendung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}}-{{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - `role` einer Nachricht den Wert `assistant` hat und ihr `type` einen anderen Wert als `text` hat.
    - `type` einer Nachricht den Wert `text` hat und ihr `value` kein String ist.
    - Der Eingabe- oder Ausgabetext in einer Sprache verfasst ist, die der User Agent für Prompts nicht unterstützt.
    - `type` einer Nachricht den Wert `image` oder `audio` hat, dieser Typ aber nicht in `expectedInputs` aufgeführt wurde oder `value` kein [akzeptierter Datentyp](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted) ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Nachrichten-Array keine Nachrichten enthält.
    - Die Eigenschaft `prefix` einer Nachricht auf `true` gesetzt ist und:
      - `role` der Nachricht nicht `assistant` ist.
      - Die Nachricht nicht das letzte Element im Nachrichten-Array ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - `omitResponseConstraintInput` den Wert `true` hat, aber `responseConstraint` nicht angegeben wurde.
    - `role` einer Nachricht den Wert `system` hat, die Nachricht aber nicht als erste an den Kontext übergeben wurde.

## Beispiele

### Warnung, wenn das Kontextfenster fast voll ist

Im folgenden Beispiel prüft eine Funktion, ob noch Platz im Kontextfenster verfügbar ist, bevor [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt) aufgerufen wird. Sie berechnet zunächst den verbleibenden Platz und übergibt diesen Wert an `measureContextUsage()`. Wenn `needed` kleiner oder gleich `remaining` ist, gibt sie `true` zurück und die Sitzung wird fortgesetzt.

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
