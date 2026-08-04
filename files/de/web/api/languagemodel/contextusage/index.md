---
title: "LanguageModel: contextUsage-Eigenschaft"
short-title: contextUsage
slug: Web/API/LanguageModel/contextUsage
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die **`contextUsage`** nur lesbare Eigenschaft der [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Schnittstelle gibt die Anzahl der Kontextfenster-Token zurück, die derzeit von der Sitzung, die sie aufruft, verbraucht werden, einschließlich der anfänglichen Eingaben und aller nachfolgenden Runden.

Dieser Wert erhöht sich jedes Mal, wenn Sie [`prompt()`](/de/docs/Web/API/LanguageModel/prompt), [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) oder [`append()`](/de/docs/Web/API/LanguageModel/append) aufrufen.

Vergleichen Sie `contextUsage` mit [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow), um festzustellen, wie viele Token verbleiben. Wenn `contextUsage` `contextWindow` überschreiten würde, führen nachfolgende Methodenaufrufe zu einem `QuotaExceededError` und das [`contextoverflow`](/de/docs/Web/API/LanguageModel/contextoverflow_event)-Ereignis wird ausgelöst.

Um abzuschätzen, wie viele Token ein neuer Eingabeaufforderung nutzen würde, bevor Sie ihn senden, rufen Sie [`LanguageModel.measureContextUsage()`](/de/docs/Web/API/LanguageModel/measureContextUsage) auf.

## Wert

Eine Zahl, die die aktuelle Nutzung des Kontextfensters in Token darstellt.

## Beispiele

### Überwachung der Nutzung des Kontexts während eines Gesprächs

Dieses Beispiel schreibt die Nutzung des Kontexts in die Konsole, nachdem eine Sitzungseingabeaufforderung abgeschlossen ist.

```js
const session = await LanguageModel.create();

await session.prompt("Tell me about the history of the internet.");

console.log(
  `Context used: ${session.contextUsage} / ${session.contextWindow} tokens`,
);
```

### Warnung, wenn der Kontext fast voll ist

Das folgende Beispiel verwendet eine Funktion, um zu überprüfen, ob Kontext verfügbar ist, bevor [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt) aufgerufen wird. Zuerst berechnet es den verbleibenden Kontext und übergibt diesen Wert an `measureContextUsage()`. Wenn `needed` kleiner oder gleich `remaining` ist, gibt es `true` zurück und die Sitzung wird fortgesetzt.

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

- [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow)
- [`LanguageModel.measureContextUsage()`](/de/docs/Web/API/LanguageModel/measureContextUsage)
- [`contextoverflow`](/de/docs/Web/API/LanguageModel/contextoverflow_event) Ereignis
- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Verwendung der Prompt API](/de/docs/Web/API/Prompt_API/Using)
