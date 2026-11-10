---
title: LanguageModel
slug: Web/API/LanguageModel
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die Schnittstelle **`LanguageModel`** der [Prompt API](/de/docs/Web/API/Prompt_API) repräsentiert eine Sitzung mit einem vom Browser bereitgestellten Sprachmodell. Sie stellt statische Methoden zum Erstellen von Sitzungen und zum Prüfen der Verfügbarkeit sowie Instanzmethoden für Anfragen an das Modell, das Hinzufügen von Kontext und die Verwaltung des Kontextfensters bereit.

`LanguageModel`-Instanzen können nicht direkt erstellt werden. Verwenden Sie stattdessen die statische Methode [`LanguageModel.create()`](/de/docs/Web/API/LanguageModel/create_static).

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`LanguageModel.contextUsage`](/de/docs/Web/API/LanguageModel/contextUsage) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Tokens des Kontextfensters zurück, die diese Sitzung derzeit belegt.
- [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) {{ReadOnlyInline}}
  - : Gibt die Gesamtgröße des für diese Sitzung verfügbaren Kontextfensters in Tokens zurück.

## Statische Methoden

- [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Aufzählungswert erfüllt wird, der angibt, ob das Sprachmodell für die angegebenen Optionen verfügbar ist.
- [`LanguageModel.create()`](/de/docs/Web/API/LanguageModel/create_static)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer neuen `LanguageModel`-Sitzung erfüllt wird. Falls erforderlich, werden dabei die Modelldaten heruntergeladen.

## Instanzmethoden

- [`LanguageModel.append()`](/de/docs/Web/API/LanguageModel/append)
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn die angegebene Eingabe dem Kontextfenster der Sitzung hinzugefügt wurde, ohne eine Antwort zu generieren.
- [`LanguageModel.clone()`](/de/docs/Web/API/LanguageModel/clone)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer neuen `LanguageModel`-Sitzung erfüllt wird. Diese ist einschließlich des gesamten Kontexts eine Kopie der Sitzung, für die die Methode aufgerufen wurde.
- [`LanguageModel.destroy()`](/de/docs/Web/API/LanguageModel/destroy) {{experimental_inline}}
  - : Gibt die Ressourcen frei, die der `LanguageModel`-Instanz zugewiesen sind, für die die Methode aufgerufen wurde, und beendet alle weiteren Aktivitäten dieser Instanz.
- [`LanguageModel.measureContextUsage()`](/de/docs/Web/API/LanguageModel/measureContextUsage)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit der Anzahl der Tokens des Kontextfensters erfüllt wird, die die angegebene Eingabe bei einer Operation wie `prompt()` oder `append()` belegen würde.
- [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit der vollständigen Antwort des Modells auf die angegebene Eingabe erfüllt wird.
- [`LanguageModel.promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming)
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der die Antwort des Modells auf die angegebene Eingabe während ihrer Generierung als Stream bereitstellt.

## Ereignisse

- [`contextoverflow`](/de/docs/Web/API/LanguageModel/contextoverflow_event)
  - : Wird ausgelöst, wenn ein Aufruf von `prompt()`, `promptStreaming()` oder `append()` die Größe des Kontextfensters überschreitet.

## Beispiele

### Eine Sitzung erstellen und eine Anfrage an das Modell stellen

In diesem Beispiel wird zunächst [`create()`](/de/docs/Web/API/LanguageModel/create_static) aufgerufen, um eine neue Sitzung zu erstellen. Dabei wird festgelegt, dass das Sprachmodell die Rolle `"system"` übernimmt, und definiert, wie es sich verhalten soll. Beachten Sie, dass im Beispiel `await` verwendet wird, da `create()` ein {{jsxref("Promise")}} zurückgibt. Wenn das Modell heruntergeladen werden muss, kann es einige Zeit dauern, bis dieses erfüllt wird.

Nach dem Erstellen der Sitzung wird im Beispiel [`prompt()`](/de/docs/Web/API/LanguageModel/prompt) aufgerufen, um eine bestimmte Frage zu stellen.

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

### Eine Antwort als Stream empfangen

In diesem Beispiel wird [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) aufgerufen, um eine Instanz von [`ReadableStream`](/de/docs/Web/API/ReadableStream) zu erhalten. Die Antwort wird stückweise in die Konsole geschrieben.

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
