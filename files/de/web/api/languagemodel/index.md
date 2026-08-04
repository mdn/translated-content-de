---
title: LanguageModel
slug: Web/API/LanguageModel
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`LanguageModel`**-Schnittstelle der [Prompt API](/de/docs/Web/API/Prompt_API) repräsentiert eine Sitzung mit einem vom Browser bereitgestellten Sprachmodell. Sie bietet statische Methoden zum Erstellen von Sitzungen und Überprüfen der Verfügbarkeit sowie Instanzmethoden zum Auffordern des Modells, Hinzufügen von Kontext und Verwalten des Kontextfensters.

`LanguageModel`-Instanzen können nicht direkt erstellt werden. Stattdessen verwenden Sie die statische Methode [`LanguageModel.create()`](/de/docs/Web/API/LanguageModel/create_static).

{{InheritanceDiagram}}

## Statische Methoden

- [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem enumerierten Wert aufgelöst wird, der anzeigt, ob das Sprachmodell für die angegebenen Optionen verfügbar ist.
- [`LanguageModel.create()`](/de/docs/Web/API/LanguageModel/create_static)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer neuen `LanguageModel`-Sitzung aufgelöst wird und bei Bedarf die Modelldaten herunterlädt.

## Instanzmethoden

- [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die angegebene Eingabe dem Kontextfenster der Sitzung hinzugefügt wurde, ohne eine Antwort zu generieren.
- [`LanguageModel.clone()`](/de/docs/Web/API/LanguageModel/clone)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer neuen `LanguageModel`-Sitzung aufgelöst wird, die eine Kopie der Sitzung ist, auf der sie aufgerufen wird, einschließlich des gesamten Kontexts.
- [`LanguageModel.destroy()`](/de/docs/Web/API/LanguageModel/destroy)
  - : Gibt die Ressourcen frei, die der `LanguageModel`-Instanz zugewiesen sind, auf der sie aufgerufen wird, und stoppt jegliche weitere Aktivität darauf.
- [`LanguageModel.measureContextUsage()`](/de/docs/Web/API/LanguageModel/measureContextUsage)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit der Anzahl der Kontextfenstertoken aufgelöst wird, die die angegebene Eingabe verbrauchen würde, wenn sie in einer Operation wie `prompt()` oder `append()` verwendet würde.
- [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit der vollständigen Antwort des Modells auf die angegebene Eingabe aufgelöst wird.
- [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming)
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der die Antwort des Modells auf die angegebene Eingabe streamt, während sie generiert wird.

## Instanzeigenschaften

- [`LanguageModel.contextUsage`](/de/docs/Web/API/LanguageModel/contextUsage) {{ReadOnlyInline}}
  - : Gibt die Anzahl der momentan von dieser Sitzung verbrauchten Kontextfenstertoken zurück.
- [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) {{ReadOnlyInline}}
  - : Gibt die gesamte für diese Sitzung verfügbare Kontextfenstergröße in Token zurück.

## Ereignisse

- [`contextoverflow`](/de/docs/Web/API/LanguageModel/contextoverflow_event)
  - : Wird ausgelöst, wenn ein `prompt()`, `promptStreaming()` oder `append()`-Aufruf die Größe des Kontextfensters überschreitet.

## Beispiele

### Erstellen einer Sitzung und Auffordern des Modells

Dieses Beispiel ruft zuerst [`create()`](/de/docs/Web/API/LanguageModel/create_static) auf, um eine neue Sitzung zu erhalten. Es gibt vor, dass das Sprachmodell eine `"system"`-Rolle annimmt und definiert, wie es sich verhalten soll. Beachten Sie, dass das Beispiel `await` verwendet, da `create()` ein {{jsxref("Promise")}} zurückgibt. Dies kann einige Zeit in Anspruch nehmen, wenn das Modell heruntergeladen werden muss.

Nach dem Erstellen der Sitzung ruft das Beispiel [`prompt()`](/de/docs/Web/API/LanguageModel/prompt) auf, um eine spezifische Frage zu stellen.

```js
const session = await LanguageModel.create({
  initialPrompts: [
    {
      role: "system",
      content: "You are a helpful assistant.",
    },
  ],
});

const response = await session.prompt("What is the capital of France?");
console.log(response); // "The capital of France is Paris."
```

### Streamen einer Antwort

Dieses Beispiel ruft [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) auf, um eine Instanz von [`ReadableStream`](/de/docs/Web/API/ReadableStream) zu erhalten und schreibt sie in Chunks auf die Konsole.

```js
const session = await LanguageModel.create();
const readableStream = session.promptStreaming("Tell me a short story.");

for await (const chunk of readableStream) {
  console.log(chunk);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prompt API](/de/docs/Web/API/Prompt_API)
