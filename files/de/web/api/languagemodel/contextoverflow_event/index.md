---
title: "LanguageModel: Ereignis contextoverflow"
short-title: contextoverflow
slug: Web/API/LanguageModel/contextoverflow_event
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Das **`contextoverflow`**-Ereignis wird auf einer [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Instanz ausgelöst, wenn ein Aufruf von [`prompt()`](/de/docs/Web/API/LanguageModel/prompt), [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) oder [`append()`](/de/docs/Web/API/LanguageModel/append) dazu führt, dass die [`contextUsage`](/de/docs/Web/API/LanguageModel/contextUsage) der Sitzung das [`contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) überschreitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("contextoverflow", (event) => {})

oncontextoverflow = (event) => {}
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Reaktion auf einen Kontextüberlauf

Der folgende Code zeigt zwei Methoden zur Erstellung eines Ereignis-Listeners für das `contextoverflow`-Ereignis.

```js
const session = await LanguageModel.create();

session.addEventListener("contextoverflow", () => {
  console.warn("Context overflow detected.");
});
```

Alternativ:

```js
const session = await LanguageModel.create();

session.oncontextoverflow = () => {
  console.warn(
    "The session's context window is full. " +
      "Consider cloning the session or starting a new one.",
  );
};
```

### Zurücksetzen der Sitzung bei Überlauf

Das folgende Beispiel erstellt eine neue Sitzung, wenn das `contextoverflow`-Ereignis ausgelöst wird.

```js
let session = await LanguageModel.create({
  initialPrompts: [{ role: "system", content: "You are a helpful assistant." }],
});

session.addEventListener("contextoverflow", async () => {
  console.log("Context full — creating a fresh session.");
  session.destroy();
  session = await LanguageModel.create({
    initialPrompts: [
      { role: "system", content: "You are a helpful assistant." },
    ],
  });
});

async function chat(userMessage) {
  const response = await session.prompt(userMessage);
  return response;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LanguageModel.contextUsage`](/de/docs/Web/API/LanguageModel/contextUsage)
- [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow)
- [`LanguageModel.measureContextUsage()`](/de/docs/Web/API/LanguageModel/measureContextUsage)
- [Prompt API](/de/docs/Web/API/Prompt_API)
