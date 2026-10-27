---
title: "LanguageModel: contextoverflow-Ereignis"
short-title: contextoverflow
slug: Web/API/LanguageModel/contextoverflow_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Das **`contextoverflow`**-Ereignis wird auf einer [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Instanz ausgelöst, wenn ein Aufruf von [`prompt()`](/de/docs/Web/API/LanguageModel/prompt), [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) oder [`append()`](/de/docs/Web/API/LanguageModel/append) dazu führt, dass die [`contextUsage`](/de/docs/Web/API/LanguageModel/contextUsage) der Sitzung das [`contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow) überschreitet.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("contextoverflow", (event) => {})
```

Alternativ können Sie ihn der [Ereignisbehandlungs-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oncontextoverflow = (event) => {}
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Auf einen Kontextüberlauf reagieren

Der folgende Code zeigt zwei Möglichkeiten, einen Ereignis-Listener für das `contextoverflow`-Ereignis zu erstellen.

```js
const session = await LanguageModel.create();

session.addEventListener("contextoverflow", () => {
  console.warn("Context overflow detected.");
});
```

Alternativ können Sie die Ereignisbehandlungs-Eigenschaft `oncontextoverflow` verwenden. Beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `oncontextoverflow` hinzugefügte Ereignis-Listener ersetzt werden:

```js
const session = await LanguageModel.create();

session.oncontextoverflow = () => {
  console.warn(
    "The session's context window is full. " +
      "Consider cloning the session or starting a new one.",
  );
};
```

### Die Sitzung bei einem Überlauf zurücksetzen

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
