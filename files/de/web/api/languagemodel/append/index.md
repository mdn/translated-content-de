---
title: "LanguageModel: append() Methode"
short-title: append()
slug: Web/API/LanguageModel/append
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`append()`** Methode des [`LanguageModel`](/de/docs/Web/API/LanguageModel) Interfaces fügt Inhalt zum Kontextfenster der Sitzung hinzu, ohne eine Antwort des Modells zu generieren. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Inhalt erfolgreich in den Kontext geladen wurde. Verwenden Sie diese Methode, um einen Kontext vorzuladen, bevor Sie dem Modell eine Frage stellen.

Ein Kontext kann ein Dokument, ein Gespräch, eine Historie oder Hintergrundinformationen sein. Sie können die `append()`-Methode zu jedem Zeitpunkt während der Lebensdauer der Sitzung aufrufen.

## Syntax

```js-nolint
append(input)
append(input, options)
```

### Parameter

- `input`
  - : Der Inhalt, der dem Kontextfenster hinzugefügt werden soll. Dies ist entweder:
    - Ein String — Kurzform für eine einzelne textuelle Nachricht.
    - Ein Array von Objekten, die jeweils eine einzelne Nachricht in einem Gespräch mit einem Sprachmodell darstellen.
      Objekte können die folgenden Eigenschaften haben:
      - `role`
        - : Ein String, der den Standpunkt angibt, aus dem die Nachricht formuliert ist. Muss eine der folgenden sein:
          - `system`
            - : Eine systemweite Anweisung, die das Gesamtverhalten des Modells leitet. Dies muss die erste Anweisung sein, die dem Modell übergeben wird.
          - `user`
            - : Eine Nachricht vom Benutzer, auf die die API reagieren soll.
          - `assistant`
            - : Eine Eingabe, die den KI-Assistenten mit Kontext versorgt, wie z.B. seine Persona oder das Format seiner Antworten. Solche Nachrichten dienen hauptsächlich dazu, Kontext/Verlauf bereitzustellen und zu beeinflussen, wie das Modell reagiert.
      - `content`
        - : Ein String, der ein textliches Prompt darstellt, oder ein Array von Objekten. Jedes Objekt umfasst die folgenden Eigenschaften:
          - `type`
            - : Ein enumerierter Wert, der die Art des Inhalts darstellt. Dies kann eine der folgenden sein:
              - `audio`
                - : Audio-Inhalt.
              - `image`
                - : Bildinhalt.
              - `text`
                - : Textinhalt.
              - `tool-call`
                - : Ein vom Modell ausgeführter Werkzeugaufruf.
              - `tool-response`
                - : Das Ergebnis eines Werkzeugaufrufs.
          - `value`
            - : Der Inhalt der Nachricht. Wenn der `type` `text` ist, ist dies immer ein String. Wenn der `type` `audio` oder `image` ist, kann der `value` eine der mehreren verschiedenen Objektarten sein; siehe [Welche Datentypen werden akzeptiert?](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
      - `prefix` {{optional_inline}}
        - : Ein boolescher Wert, der standardmäßig `false` ist. Wenn `true`, wird die Nachricht als Präfix für die nächste generierte Antwort des Modells behandelt, anstatt als vollständiger Turn.
- `options` {{optional_inline}}
  - : Ein Objekt, das die übergebenen Optionen darstellt. Eigenschaften umfassen:
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), um die Append-Operation abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird, wenn der Inhalt in das Kontextfenster vorgefüllt wurde, oder mit einem der folgenden Ausnahmewerte bei Fehlschlag abgelehnt wird.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Operation über die `signal`-Option abgebrochen wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die `role` einer Nachricht `assistant` ist und ihr `type` etwas anderes als `text` ist.
    - Der `type` einer Nachricht `text` ist und ihr `value` kein String ist.
    - Der Eingabe- oder Ausgabetext in einer Sprache ist, die der Benutzeragent nicht für Prompts unterstützt.
    - Der `type` einer Nachricht `image` oder `audio` ist, aber der Typ nicht in `expectedInputs` aufgeführt war, oder der `value` kein [akzeptierter Datentyp](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted) ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Vorfüllen aus einem anderen, nicht in den anderen Ausnahmetypen aufgeführten Grund fehlschlägt.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Anhängen von `input` dazu führen würde, dass die Nutzung des Sitzungs-Kontextes das Modell's [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) überschreitet.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Keine Nachrichten im Nachrichtenarray enthalten sind.
    - Die `prefix`-Eigenschaft einer Nachricht auf `true` gesetzt ist und:
      - Die `role` der Nachricht nicht `assistant` ist.
      - Die Nachricht nicht das letzte Element im Nachrichtenarray ist.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `role` einer Nachricht `system` ist, diese aber nicht die erste Nachricht war, die dem Kontext übergeben wurde.

## Beispiele

Siehe auch [Hinzufügen von Kontext mit inizialen und laufenden Prompt-Eingaben > Anhängen zusätzlicher Nachrichten an den Kontext](/de/docs/Web/API/Prompt_API/Adding_context#appending_extra_messages_to_the_context).

### Kontext vor dem Prompten anhängen

Dieses Beispiel zeigt, wie einem Kontext für die Benutzerrolle hinzugefügt wird, bevor `prompt()` aufgerufen wird.
Beachten Sie, dass wir einfach Texteingaben (`documentText`) in diesem Fall angeben können, da `user` die Standardrolle ist.

```js
const documentText = "This is my important essay...";
const session = await LanguageModel.create();

// Preload the document text into context
await session.append(documentText);

// Now ask questions about the document
const summary = await session.prompt(
  "Summarize the key points of this document.",
);
console.log(summary);
```

### Anhängen von Kontext mit einem Abbruchsignal

Ein Abbruchsignal ermöglicht es, eine Append-Operation abzubrechen. Das folgende Beispiel übergibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) an das `signal`-Mitglied und ruft seine `abort()`-Methode nach 3 Sekunden auf.

```js
const controller = new AbortController();
setTimeout(() => controller.abort(), 3000);

try {
  await session.append(
    "Here is some background context for future questions.",
    {
      signal: controller.signal,
    },
  );
  console.log("Context appended successfully.");
} catch (err) {
  if (err.name === "AbortError") {
    console.log("Append was aborted.");
  }
}
```

### Überprüfung der Kontextnutzung nach dem Anhängen

Der folgende Code zeigt, wie die Anzahl der Tokens protokolliert wird, die nach dem Anhängen einer großen Menge an Kontext verwendet wurden.

```js
const largeDocument = "This is my large body of text...";
const session = await LanguageModel.create();
await session.append(largeDocument);

console.log(
  `Context used: ${session.contextUsage} / ${session.contextWindow} tokens`,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt)
- [`LanguageModel.measureContextUsage()`](/de/docs/Web/API/LanguageModel/measureContextUsage)
- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Verwendung der Prompt API](/de/docs/Web/API/Prompt_API/Using)
- [Hinzufügen von Kontext mit inizialen und laufenden Prompt-Eingaben](/de/docs/Web/API/Prompt_API/Adding_context)
