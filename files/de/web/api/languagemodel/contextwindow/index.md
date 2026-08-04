---
title: "Sprachmodell: contextWindow-Eigenschaft"
short-title: contextWindow
slug: Web/API/LanguageModel/contextWindow
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

Die schreibgeschützte **`contextWindow`**-Eigenschaft der [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Schnittstelle gibt die Gesamtzahl der verfügbaren Kontextfenster-Token für diese Sitzung zurück. Sie wird beim Erstellen der Sitzung festgelegt und ändert sich während der Lebensdauer der Sitzung nicht.

Vergleichen Sie `contextWindow` mit [`contextUsage`](/de/docs/Web/API/LanguageModel/contextUsage), um festzustellen, wie viele Token verbleiben. Verwenden Sie [`measureContextUsage()`](/de/docs/Web/API/LanguageModel/measureContextUsage), um abzuschätzen, wie viele Token ein neues Prompt verbrauchen würde, bevor es gesendet wird.

Der Wert ist implementierungsspezifisch und variiert je nach Modell, Gerätefähigkeiten und Konfiguration der Sitzung. Ein Wert von `Infinity` zeigt an, dass der User-Agent keine feste Begrenzung vorschreibt.

## Wert

Eine Zahl, die die Kapazität des Kontextfensters der Sitzung in Token repräsentiert. Dieser Wert kann `Infinity` sein, wenn der User-Agent keine spezifische Begrenzung über vorhandenen Speicher oder JavaScript-String-Beschränkungen hinaus auferlegt.

## Beispiele

### Warnung, wenn der Kontext fast voll ist

Das folgende Beispiel verwendet eine Funktion, um zu überprüfen, ob Kontext verfügbar ist, bevor [`LanguageModel.prompt()`](/de/docs/Web/API/LanguageModel/prompt) aufgerufen wird. Es berechnet zuerst den verbleibenden Kontext und übergibt diesen Wert an `measureContextUsage()`. Wenn `needed` kleiner oder gleich `remaining` ist, gibt sie `true` zurück und die Sitzung wird fortgesetzt.

```js
const promptText = "Let me ask you an interesting question...";

async function contextAvailable(promptText) {
  if (session.contextWindow === Infinity) {
    return true;
  }
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

- [`LanguageModel.contextUsage`](/de/docs/Web/API/LanguageModel/contextUsage)
- [`LanguageModel.measureContextUsage()`](/de/docs/Web/API/LanguageModel/measureContextUsage)
- [Prompt API](/de/docs/Web/API/Prompt_API)
- [Verwendung der Prompt API](/de/docs/Web/API/Prompt_API/Using)
