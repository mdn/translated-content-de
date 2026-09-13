---
title: LanguageModel
slug: Web/API/LanguageModel
l10n:
  sourceCommit: 343ab51426f9279175b8f71fff911621d0a7da20
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`LanguageModel`**-Schnittstelle der [Prompt API](/de/docs/Web/API/Prompt_API) repräsentiert eine Sitzung mit einem vom Browser bereitgestellten Sprachmodell. Sie bietet statische Methoden zum Erstellen von Sitzungen und Überprüfen der Verfügbarkeit sowie Instanzmethoden zum Abfragen des Modells, Hinzufügen von Kontext und Verwalten des Kontextfensters.

`LanguageModel`-Instanzen können nicht direkt erstellt werden. Verwenden Sie stattdessen die statische Methode [`LanguageModel.create()`](/de/docs/Web/API/LanguageModel/create_static).

{{InheritanceDiagram}}

## Statische Methoden

- [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem enumerierten Wert aufgelöst wird, der angibt, ob das Sprachmodell für die gegebenen Optionen verfügbar ist.
- [`LanguageModel.create()`](/de/docs/Web/API/LanguageModel/create_static)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer neuen `LanguageModel`-Sitzung aufgelöst wird und die Modelldaten bei Bedarf herunterlädt.

## Instanzmethoden

- [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die eingegebenen Daten dem Kontextfenster der Sitzung hinzugefügt wurden, ohne eine Antwort zu generieren.
- [`LanguageModel.clone()`](/de/docs/Web/API/LanguageModel/clone)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer neuen `LanguageModel`-Sitzung aufgelöst wird, die eine Kopie der Sitzung ist, auf die sie aufgerufen wird, einschließlich des gesamten Kontexts.
- [`LanguageModel.destroy()`](/de/docs/Web/API/LanguageModel/destroy) {{experimental_inline}}
  - : Gibt die Ressourcen frei, die der `LanguageModel`-Instanz zugewiesen sind, auf die sie aufgerufen wird, und stoppt jegliche weitere Aktivität darauf.
- [`LanguageModel.measureContextUsage()`](/de/docs/Web/API/LanguageModel/measureContextUsage)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit der Anzahl der Kontextfenster-Token aufgelöst wird, die die eingegebenen Daten verbrauchen würden, wenn sie in einer Operation wie `prompt()` oder `append()` verwendet würden.
- [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit der vollständigen Antwort des Modells auf die eingegebenen Daten aufgelöst wird.
- [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming)
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der die Antwort des Modells auf die eingegebenen Daten streamt, während sie generiert wird.

## Instanzeigenschaften

- [`LanguageModel.contextUsage`](/de/docs/Web/API/LanguageModel/contextUsage) {{ReadOnlyInline}}
  - : Gibt die Anzahl der aktuell von dieser Sitzung verbrauchten Kontextfenster-Token zurück.
- [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) {{ReadOnlyInline}}
  - : Gibt die gesamte für diese Sitzung verfügbare Kontextfenstergröße in Token zurück.

## Ereignisse

- [`contextoverflow`](/de/docs/Web/API/LanguageModel/contextoverflow_event)
  - : Wird ausgelöst, wenn ein `prompt()`, `promptStreaming()` oder `append()`-Aufruf die Größe des Kontextfensters überschreitet.

## Beispiele

### Erstellen einer Sitzung und Abfragen des Modells

Dieses Beispiel ruft zuerst [`create()`](/de/docs/Web/API/LanguageModel/create_static) auf, um eine neue Sitzung zu erhalten. Es wird festgelegt, dass das Sprachmodell eine `"system"`-Rolle übernimmt und sein Verhalten definiert. Beachten Sie, dass das Beispiel `await` verwendet, da `create()` ein {{jsxref("Promise")}} zurückgibt. Dies kann einige Zeit in Anspruch nehmen, wenn das Modell heruntergeladen werden muss.

Nach Erstellung der Sitzung ruft das Beispiel [`prompt()`](/de/docs/Web/API/LanguageModel/prompt) auf, um eine spezifische Frage zu stellen.

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

Dieses Beispiel ruft [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) auf, um eine Instanz von [`ReadableStream`](/de/docs/Web/API/ReadableStream) zu erhalten und gibt sie in Teilen auf der Konsole aus.

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
