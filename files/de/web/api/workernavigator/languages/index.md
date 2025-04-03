---
title: "WorkerNavigator: languages-Eigenschaft"
short-title: languages
slug: Web/API/WorkerNavigator/languages
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`WorkerNavigator.languages`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die ein Array von Strings zurückgibt, welches die bevorzugten Sprachen des Benutzers darstellt. Die Sprache wird mithilfe von Sprach-Tags beschrieben, entsprechend {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}. In dem zurückgegebenen Array sind sie nach Präferenz geordnet, wobei die am meisten bevorzugte Sprache zuerst steht.

Der Wert von [`navigator.language`](/de/docs/Web/API/WorkerNavigator/language) ist das erste Element des zurückgegebenen Arrays.

Wenn sich dieser Wert ändert, weil sich die bevorzugten Sprachen des Benutzers ändern, wird ein [`languagechange`](/de/docs/Web/API/Window/languagechange_event)-Ereignis auf dem [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Objekt ausgelöst.

Der `Accept-Language` HTTP-Header in jeder HTTP-Anfrage des Browsers des Benutzers verwendet denselben Wert wie die `navigator.languages`-Eigenschaft, außer für das zusätzliche `qvalues` (Qualitätswerte)-Feld (z.B. `en-US;q=0.8`).

## Wert

Ein Array oder Strings.

## Beispiele

Sie können dies in einem Web Worker ausführen:

```js
navigator.language; //"en-US"
navigator.languages; //["en-US", "zh-CN", "ja-JP"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerNavigator.language`](/de/docs/Web/API/WorkerNavigator/language)
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
- [`languagechange`](/de/docs/Web/API/WorkerGlobalScope/languagechange_event) Ereignis
