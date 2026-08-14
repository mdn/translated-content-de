---
title: "LanguageModel: contextWindow-Eigenschaft"
short-title: contextWindow
slug: Web/API/LanguageModel/contextWindow
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die schreibgeschützte **`contextWindow`**-Eigenschaft der [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Schnittstelle gibt die Gesamtanzahl der Kontextfenster-Token zurück, die für diese Sitzung verfügbar sind. Sie wird festgelegt, wenn die Sitzung erstellt wird, und ändert sich während der Lebensdauer der Sitzung nicht.

Vergleichen Sie `contextWindow` mit [`contextUsage`](/de/docs/Web/API/LanguageModel/contextUsage), um zu bestimmen, wie viele Token noch verbleiben. Verwenden Sie [`measureContextUsage()`](/de/docs/Web/API/LanguageModel/measureContextUsage), um zu schätzen, wie viele Token ein neuer Prompt verbrauchen würde, bevor Sie ihn senden.

Der Wert ist implementierungsspezifisch und variiert je nach Modell, Gerätefähigkeiten und Konfiguration der Sitzung. Ein Wert von `Infinity` weist darauf hin, dass der Benutzeragent keine feste Begrenzung auferlegt.

## Wert

Eine Zahl, die die Kapazität des Kontextfensters der Sitzung in Token darstellt. Dieser Wert kann `Infinity` sein, wenn der Benutzeragent keine spezifische Begrenzung über den verfügbaren Speicher oder JavaScript-String-Beschränkungen hinaus auferlegt.

## Beispiele

### Warnung, wenn der Kontext fast voll ist

Das folgende Beispiel verwendet eine Funktion, um zu überprüfen, ob Kontext verfügbar ist, bevor [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt) aufgerufen wird. Es berechnet zuerst den verbleibenden Kontext und übergibt diesen Wert an `measureContextUsage()`. Wenn `needed` kleiner oder gleich `remaining` ist, gibt es `true` zurück und die Sitzung wird fortgesetzt.

```js
const promptText = "Let me ask you an interesting question...";
const session = await LanguageModel.create();

async function contextAvailable(promptText) {
  if (session.contextWindow === Infinity) {
    return true;
  }
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

- [`LanguageModel.contextUsage`](/de/docs/Web/API/LanguageModel/contextUsage)
- [`LanguageModel.measureContextUsage()`](/de/docs/Web/API/LanguageModel/measureContextUsage)
- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Verwendung der Prompt API](/de/docs/Web/API/Prompt_API/Using)
