---
title: "LanguageModel: contextUsage-Eigenschaft"
short-title: contextUsage
slug: Web/API/LanguageModel/contextUsage
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die schreibgeschützte **`contextUsage`**-Eigenschaft der [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Schnittstelle gibt die Anzahl der Kontextfenster-Token zurück, die momentan von der Sitzung verbraucht werden, die sie aufruft, einschließlich anfänglicher Eingabeaufforderungen und aller nachfolgenden Runden.

Dieser Wert erhöht sich jedes Mal, wenn Sie [`prompt()`](/de/docs/Web/API/LanguageModel/prompt), [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming) oder [`append()`](/de/docs/Web/API/LanguageModel/append) aufrufen.

Vergleichen Sie `contextUsage` mit [`LanguageModel.contextWindow`](/de/docs/Web/API/LanguageModel/contextWindow), um zu bestimmen, wie viele Token noch verbleiben. Wenn `contextUsage` `contextWindow` überschreiten würde, werfen nachfolgende Methodenaufrufe einen `QuotaExceededError` und das [`contextoverflow`](/de/docs/Web/API/LanguageModel/contextoverflow_event)-Ereignis wird ausgelöst.

Um abzuschätzen, wie viele Token eine neue Eingabeaufforderung verwenden würde, bevor sie gesendet wird, rufen Sie [`LanguageModel.measureContextUsage()`](/de/docs/Web/API/LanguageModel/measureContextUsage) auf.

## Wert

Eine Zahl, die die aktuelle Nutzung des Kontextfensters in Token repräsentiert.

## Beispiele

### Überwachung der Kontextnutzung während eines Gesprächs

Dieses Beispiel schreibt die Kontextnutzung in die Konsole, nachdem eine Sitzungseingabeaufforderung abgeschlossen ist.

```js
const session = await LanguageModel.create();

await session.prompt("Tell me about the history of the internet.");

console.log(
  `Context used: ${session.contextUsage} / ${session.contextWindow} tokens`,
);
```

### Warnung, wenn der Kontext fast voll ist

Das folgende Beispiel verwendet eine Funktion, um zu überprüfen, ob Kontext verfügbar ist, bevor [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt) aufgerufen wird. Es berechnet zuerst den verbleibenden Kontext und übergibt diesen Wert an `measureContextUsage()`. Wenn `needed` kleiner oder gleich `remaining` ist, gibt es `true` zurück und die Sitzung wird fortgesetzt.

```js
const promptText = "Let me ask you an interesting question...";
const session = await LanguageModel.create();

async function contextAvailable(promptText) {
  const remaining = session.contextWindow - session.contextUsage;
  const needed = await session.measureContextUsage(promptText);

  return needed <= remaining;
}

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
- [`contextoverflow`](/de/docs/Web/API/LanguageModel/contextoverflow_event)-Ereignis
- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Verwendung der Prompt API](/de/docs/Web/API/Prompt_API/Using)
