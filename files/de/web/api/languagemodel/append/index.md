---
title: "LanguageModel: append() Methode"
short-title: append()
slug: Web/API/LanguageModel/append
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`append()`** Methode der [`LanguageModel`](/de/docs/Web/API/LanguageModel) Schnittstelle fügt Inhalte in das Kontextfenster der Sitzung ein, ohne dass eine Antwort des Modells generiert wird. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Inhalt erfolgreich in den Kontext geladen wurde. Nutzen Sie diese Methode, um einen Kontext vorzuladen, bevor Sie dem Modell eine Frage stellen.

Ein Kontext kann ein Dokument, ein Gespräch, eine Historie oder Hintergrundinformationen sein. Sie können die `append()` Methode jederzeit während der Lebensdauer der Sitzung aufrufen.

## Syntax

```js-nolint
append(input)
append(input, options)
```

### Parameter

- `input`
  - : Der Inhalt, der dem Kontextfenster hinzugefügt werden soll. Dies kann entweder sein:
    - Ein String — Kurzform für eine einzelne textuelle Nachricht.
    - Ein Array von Objekten, die jeweils eine einzelne Nachricht in einem Gespräch mit einem Sprachmodell repräsentieren.
      Die Objekte können die folgenden Eigenschaften haben:
      - `role`
        - : Ein String, der den Standpunkt angibt, aus dem die Nachricht formuliert ist. Muss einer der folgenden sein:
          - `system`
            - : Eine systemweite Anweisung, die das allgemeine Verhalten des Modells leitet. Dies muss die erste Anweisung sein, die dem Modell übergeben wird.
          - `user`
            - : Eine Nachricht des Benutzers, auf die die API reagieren soll.
          - `assistant`
            - : Eine Eingabe, die dem KI-Assistenten Kontext gibt, wie z.B. seine Persona oder das Format seiner Antworten. Solche Nachrichten dienen hauptsächlich dazu, Kontext/Verlauf bereitzustellen und die Reaktionen des Modells weiter zu formen.
      - `content`
        - : Ein String, der ein textuelles Prompt darstellt, oder ein Array von Objekten. Jedes Objekt enthält die folgenden Eigenschaften:
          - `type`
            - : Ein aufgezählter Wert, der den Inhaltstyp repräsentiert. Dies kann eines der folgenden sein:
              - `audio`
                - : Audioinhalt.
              - `image`
                - : Bildinhalt.
              - `text`
                - : Textueller Inhalt.
              - `tool-call`
                - : Ein vom Modell ausgeführter Werkzeugaufruf.
              - `tool-response`
                - : Das Ergebnis eines Werkzeugaufrufs.
          - `value`
            - : Der Inhalt der Nachricht. Wenn der `type` `text` ist, ist dies immer ein String. Wenn der `type` `audio` oder `image` ist, kann der `value` einer von mehreren verschiedenen Objekttypen sein; siehe [Welche Datentypen werden akzeptiert?](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
      - `prefix` {{optional_inline}}
        - : Ein Boolescher Wert, der standardmäßig auf `false` steht. Wenn `true`, wird die Nachricht als Präfix für die nächste vom Modell generierte Antwort behandelt, anstatt als vollständige Runde.
- `options` {{optional_inline}}
  - : Ein Objekt, das die übergebenen Optionen darstellt. Zu den Eigenschaften gehören:
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zur Abbrechung der Anhängeoperation.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird, wenn der Inhalt in das Kontextfenster vorgefüllt wurde, oder mit einem der folgenden Ausnahmefehlerwerte bei einem Fehler abgelehnt wird.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Operation über die `signal` Option abgebrochen wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Methode durch eine {{httpheader("Permissions-Policy/language-model", "language-model")}} {{httpheader("Permissions-Policy")}} blockiert ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Eine Nachricht die `role` `assistant` hat und ihr `type` etwas anderes als `text` ist.
    - Eine Nachricht die `type` `text` hat und ihr `value` kein String ist.
    - Der Eingabetext oder Ausgabetext in einer Sprache ist, die der Benutzeragent nicht für Prompts unterstützt.
    - Eine Nachricht die `type` `image` oder `audio` hat, aber der Typ nicht in `expectedInputs` aufgeführt ist oder der `value` kein [akzeptierter Datentyp](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted) ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Vorfüllen aus einem anderen Grund fehlschlägt, der nicht in den anderen Ausnahmetypen aufgelistet ist.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Hinzufügen von `input` die Kontextnutzung der Sitzung über das [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) des Modells hinaus erhöhen würde.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Keine Nachrichten im Nachrichtenarray enthalten sind.
    - Die `prefix` Eigenschaft einer Nachricht auf `true` gesetzt ist und:
      - Die `role` der Nachricht nicht `assistant` ist.
      - Die Nachricht nicht das letzte Element im Nachrichtenarray ist.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine Nachricht die `role` `system` hat, aber nicht die erste Nachricht ist, die an den Kontext übergeben wurde.

## Beispiele

Siehe auch [Hinzufügen von Kontext mit initialen und laufenden Prompteingaben > Hinzufügen zusätzlicher Nachrichten zum Kontext](/de/docs/Web/API/Prompt_API/Adding_context#appending_extra_messages_to_the_context).

### Kontext vor dem Prompt hinzufügen

Dieses Beispiel zeigt, wie man einen Kontext für die Benutzerrolle hinzufügen kann, bevor `prompt()` aufgerufen wird.
Beachten Sie, dass wir in diesem Fall einfach Texteingaben (`documentText`) angeben können, da `user` die Standardrolle ist.

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

### Kontext mit einem Abbruchsignal hinzufügen

Ein Abbruchsignal ermöglicht es Ihnen, eine Anhängeoperation abzubrechen. Das folgende Beispiel übergibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) an das `signal`-Mitglied und ruft seine `abort()` Methode nach 3 Sekunden auf.

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

### Kontextnutzung nach dem Anhängen überprüfen

Der folgende Code zeigt, wie die Anzahl der nach dem Anhängen einer großen Menge an Kontext verwendeten Tokens protokolliert wird.

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
- [Hinzufügen von Kontext mit initialen und laufenden Prompteingaben](/de/docs/Web/API/Prompt_API/Adding_context)
