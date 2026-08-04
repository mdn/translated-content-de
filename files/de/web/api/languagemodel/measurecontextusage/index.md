---
title: "LanguageModel: measureContextUsage() Methode"
short-title: measureContextUsage()
slug: Web/API/LanguageModel/measureContextUsage
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`measureContextUsage()`** Methode der [`LanguageModel`](/de/docs/Web/API/LanguageModel) Schnittstelle schätzt, wie viele Kontextfenstertoken der gegebene Input verbrauchen würde, ohne ihn an das Modell zu senden oder den Zustand der Sitzung zu ändern.

Dies ermöglicht es Ihnen, zu überprüfen, wie viel des Kontextfensters ein gegebener Input erfordert, bevor Sie entscheiden, ob er gesendet werden soll. Das Ergebnis kann mit [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) und [`LanguageModel.contextUsage`](/de/docs/Web/API/LanguageModel/contextUsage) verglichen werden, um zu bestimmen, ob der Input in das Limit des Kontextfensters passt.

Dies ist besonders nützlich für Anwendungen mit langem Kontext, wie z.B. Dokumentenzusammenfassungen, bei denen Sie möglicherweise den Inhalt aufteilen oder kürzen müssen, um innerhalb des Kontextfensterlimits zu bleiben.

## Syntax

```js-nolint
measureContextUsage(input)
measureContextUsage(input, options)
```

### Parameter

- `input`
  - : Der Inhalt, der dem Kontextfenster hinzugefügt werden soll. Dies ist entweder:
    - Ein String — Kurzform für eine einzelne Textnachricht.
    - Ein Array von Objekten, wobei jedes Objekt eine einzelne Nachricht in einem Gespräch mit einem Sprachmodell darstellt.
      Objekte können folgende Eigenschaften haben:
      - `role`
        - : Ein String, der den Standpunkt angibt, aus dem die Nachricht formuliert ist. Muss einer der folgenden sein:
          - `system`
            - : Eine systemweite Anweisung, die das allgemeine Verhalten des Modells leitet. Dies muss die erste Anweisung sein, die dem Modell übergeben wird.
          - `user`
            - : Eine Nachricht vom Benutzer, auf die die API reagieren soll.
          - `assistant`
            - : Ein Input, der Kontext für den KI-Assistenten bereitstellt, wie seine Persona oder das Format seiner Antworten. Solche Nachrichten dienen hauptsächlich der Bereitstellung von Kontext/Historie und beeinflussen weiter, wie das Modell antwortet.
      - `content`
        - : Ein String, der ein textbasiertes Prompt darstellt, oder ein Array von Objekten. Jedes Objekt enthält die folgenden Eigenschaften:
          - `type`
            - : Ein enumerierter Wert, der den Inhaltstyp darstellt. Dies kann einer der folgenden sein:
              - `audio`
                - : Audiocontent.
              - `image`
                - : Bildinhalt.
              - `text`
                - : Textinhalt.
              - `tool-call`
                - : Ein vom Modell ausgegebener Werkzeuaufruf.
              - `tool-response`
                - : Das Ergebnis eines Werkzeuaufrufs.
          - `value`
            - : Der Inhalt der Nachricht. Wenn der `type` `text` ist, ist dies immer ein String. Wenn der `type` `audio` oder `image` ist, kann der `value` eines von mehreren verschiedenen Objekttypen sein; siehe [Welche Datentypen werden akzeptiert?](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
      - `prefix` {{optional_inline}}
        - : Ein Boolescher Wert, der standardmäßig auf `false` gesetzt ist. Wenn `true`, wird die Nachricht als Präfix für die nächste vom Modell generierte Antwort behandelt, anstatt als vollständige Runde.
- `options` {{optional_inline}}
  - : Optionen zur Messung der Kontextnutzung. Eigenschaften umfassen:
    - `responseConstraint`
      - : Ein Objekt, das der Struktur entspricht, die von [JSON Schema](https://json-schema.org/) definiert ist und das genaue Format, in dem die Ausgabe des Modells geliefert werden soll, definiert. Bei Bereitstellung und wenn `omitResponseConstraintInput` `false` ist, wird jede implementierungsdefinierte Beschränkungsnachricht in die Messung einbezogen.
    - `omitResponseConstraintInput`
      - : Ein boolescher Wert; Wenn `true`, wird die automatische Beschränkungsnachricht von der Messung ausgeschlossen.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zum Abbrechen der Operation.

### Rückgabewert

Ein {{jsxref("Promise")}}, das eine {{jsxref("Number")}} auflöst, die die Anzahl der Kontextfenstertoken angibt, die der Input verbrauchen würde.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Operation über die Option `signal` abgebrochen wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Verwendung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Eine Nachricht die `role` `assistant` hat und ihr `type` nicht `text` ist.
    - Eine Nachricht den `type` `text` hat und der `value` kein String ist.
    - Der Eingabetext oder der Ausgabetext in einer Sprache ist, die vom Benutzeragenten für Prompts nicht unterstützt wird.
    - Eine Nachricht den `type` `image` oder `audio` hat, aber der Typ nicht in `expectedInputs` aufgelistet ist, oder der `value` kein [akzeptierter Datentyp](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted) ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Keine Nachrichten im Nachrichtenarray enthalten sind.
    - Die `prefix`-Eigenschaft einer Nachricht auf `true` gesetzt ist und:
      - Die Nachricht die `role` nicht `assistant` hat.
      - Die Nachricht nicht das letzte Element im Nachrichtenarray ist.
- `TypeError`
  - : Wird ausgelöst, wenn:
    - `omitResponseConstraintInput` `true` ist, aber `responseConstraint` nicht bereitgestellt wird.
    - Eine Nachricht die `role` `system` hat, aber nicht die erste Nachricht war, die dem Kontext übergeben wurde.

## Beispiele

### Warnung, wenn der Kontext fast voll ist

Das folgende Beispiel verwendet eine Funktion, um zu überprüfen, ob Kontext verfügbar ist, bevor [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt) aufgerufen wird. Es berechnet zunächst den verbleibenden Kontext und übergibt diesen Wert an `measureContextUsage()`. Wenn `needed` kleiner oder gleich `remaining` ist, wird `true` zurückgegeben und die Sitzung wird fortgesetzt.

```js
const promptText = "Let me ask you an interesting question...";

async function contextAvailable(promptText) {
  const remaining = session.contextWindow - session.contextUsage;
  const needed = await session.measureContextUsage(promptText);

  return needed <= remaining;
}

const session = await LanguageModel.create();

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
