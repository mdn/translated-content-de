---
title: "LanguageModel: append()-Methode"
short-title: append()
slug: Web/API/LanguageModel/append
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`append()`**-Methode der [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Schnittstelle fügt dem Kontextfenster der Sitzung Inhalte hinzu, ohne eine Modellantwort zu erzeugen. Sie gibt eine {{jsxref("Promise")}} zurück, die erfüllt wird, sobald die Inhalte erfolgreich in den Kontext geladen wurden. Verwenden Sie diese Methode, um einen Kontext vorzuladen, bevor Sie dem Modell eine Frage stellen.

Ein Kontext kann aus einem Dokument, einer Unterhaltung, einem Verlauf oder Hintergrundinformationen bestehen. Sie können die `append()`-Methode jederzeit während der Sitzung aufrufen.

## Syntax

```js-nolint
append(input)
append(input, options)
```

### Parameter

- `input`
  - : Der Inhalt, der dem Kontextfenster hinzugefügt werden soll. Dies ist entweder:
    - Eine Zeichenfolge – Kurzform für eine einzelne Textnachricht.
    - Ein Array von Objekten, die jeweils eine einzelne Nachricht in einer Unterhaltung mit einem Sprachmodell darstellen.
      Die Objekte können folgende Eigenschaften haben:
      - `role`
        - : Eine Zeichenfolge, die angibt, aus welcher Perspektive die Nachricht formuliert ist. Muss einer der folgenden Werte sein:
          - `system`
            - : Eine Anweisung auf Systemebene, die das allgemeine Verhalten des Modells steuert. Dies muss die erste Anweisung sein, die an das Modell übergeben wird.
          - `user`
            - : Eine Nachricht des Benutzers, auf die die API antworten soll.
          - `assistant`
            - : Eine Eingabe, die dem KI-Assistenten Kontext bereitstellt, etwa seine Persona oder das Format seiner Antworten. Solche Nachrichten dienen hauptsächlich dazu, Kontext oder einen Verlauf bereitzustellen und die Antworten des Modells weiter zu beeinflussen.
      - `content`
        - : Eine Zeichenfolge, die einen textuellen Prompt darstellt, oder ein Array von Objekten. Jedes Objekt enthält die folgenden Eigenschaften:
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
            - : Der Inhalt der Nachricht. Wenn `type` den Wert `text` hat, ist dies immer eine Zeichenfolge. Wenn `type` den Wert `audio` oder `image` hat, kann `value` einem von mehreren verschiedenen Objekttypen entsprechen; siehe [Welche Datentypen werden akzeptiert?](/de/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
      - `prefix` {{optional_inline}}
        - : Ein boolescher Wert, standardmäßig `false`. Bei `true` wird die Nachricht als Präfix für die nächste generierte Antwort des Modells behandelt und nicht als vollständiger Gesprächsbeitrag.
- `options` {{optional_inline}}
  - : Ein Objekt mit den übergebbaren Optionen. Dazu gehört:
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), mit dem sich der Vorgang des Hinzufügens abbrechen lässt.

### Rückgabewert

Eine {{jsxref("Promise")}}, die mit `undefined` erfüllt wird, sobald die Inhalte in das Kontextfenster vorgeladen wurden. Bei einem Fehler wird sie mit einem der folgenden Ausnahme-Werte zurückgewiesen.

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
  - : Wird ausgelöst, wenn das Vorladen aus einem anderen Grund fehlschlägt, der nicht unter den übrigen Ausnahmetypen aufgeführt ist.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Hinzufügen von `input` dazu führen würde, dass die Kontextnutzung der Sitzung den Wert von [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) des Modells überschreitet.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Nachrichten-Array keine Nachrichten enthält.
    - Die Eigenschaft `prefix` einer Nachricht auf `true` gesetzt ist und:
      - `role` der Nachricht nicht `assistant` ist.
      - Die Nachricht nicht das letzte Element im Nachrichten-Array ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `role` einer Nachricht den Wert `system` hat, die Nachricht aber nicht die erste an den Kontext übergebene Nachricht war.

## Beispiele

Siehe auch [Kontext durch anfängliche und fortlaufende Prompt-Eingaben hinzufügen > Zusätzliche Nachrichten zum Kontext hinzufügen](/de/docs/Web/API/Prompt_API/Adding_context#appending_extra_messages_to_the_context).

### Kontext vor einer Prompt-Anfrage hinzufügen

Dieses Beispiel zeigt, wie Sie vor dem Aufruf von `prompt()` dem Kontext Inhalte mit der Rolle `user` hinzufügen.
Beachten Sie, dass wir in diesem Fall nur die Texteingabe (`documentText`) angeben müssen, da `user` die Standardrolle ist.

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

Mit einem Abbruchsignal können Sie den Vorgang des Hinzufügens abbrechen. Das folgende Beispiel übergibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) an `signal` und ruft nach 3 Sekunden dessen Methode `abort()` auf.

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

### Kontextnutzung nach dem Hinzufügen prüfen

Der folgende Code zeigt, wie Sie nach dem Hinzufügen einer großen Menge an Kontext die Anzahl der verwendeten Tokens protokollieren.

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
- [Kontext durch anfängliche und fortlaufende Prompt-Eingaben hinzufügen](/de/docs/Web/API/Prompt_API/Adding_context)
