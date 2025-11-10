---
title: "WorkerNavigator: languages-Eigenschaft"
short-title: languages
slug: Web/API/WorkerNavigator/languages
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte Eigenschaft **`WorkerNavigator.languages`**
gibt ein Array von Strings zurück, das die bevorzugten Sprachen des Benutzers darstellt. Die Sprache wird mithilfe von {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtags")}} beschrieben. Im zurückgegebenen Array sind sie nach Präferenz geordnet, wobei die am meisten bevorzugte Sprache zuerst steht.

Der Wert von [`navigator.language`](/de/docs/Web/API/WorkerNavigator/language) ist das
erste Element des zurückgegebenen Arrays.

Wenn sich der Wert ändert, da die vom Benutzer bevorzugten Sprachen geändert werden,
wird ein [`languagechange`](/de/docs/Web/API/Window/languagechange_event)-Ereignis im [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Objekt ausgelöst.

Der `Accept-Language` HTTP-Header in jeder HTTP-Anfrage vom Benutzerbrowser nutzt denselben Wert für die `navigator.languages`-Eigenschaft, außer für das zusätzliche `qvalues` (Qualitätswerte)-Feld (z.B., `en-US;q=0.8`).

## Wert

Ein Array oder Strings.

## Beispiele

Sie können dies in einem Web Worker ausführen:

```js
navigator.language; // "en-US"
navigator.languages; // ["en-US", "zh-CN", "ja-JP"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerNavigator.language`](/de/docs/Web/API/WorkerNavigator/language)
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
- [`languagechange`](/de/docs/Web/API/WorkerGlobalScope/languagechange_event)-Ereignis
