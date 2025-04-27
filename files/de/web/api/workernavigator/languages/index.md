---
title: "WorkerNavigator: languages-Eigenschaft"
short-title: languages
slug: Web/API/WorkerNavigator/languages
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`WorkerNavigator.languages`**-Eigenschaft gibt ein Array von Zeichenfolgen zurück, das die bevorzugten Sprachen des Benutzers darstellt. Die Sprache wird unter Verwendung von Sprach-Tags gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} beschrieben. Im zurückgegebenen Array sind sie entsprechend ihrer Präferenz geordnet, wobei die bevorzugteste Sprache zuerst steht.

Der Wert von [`navigator.language`](/de/docs/Web/API/WorkerNavigator/language) ist das erste Element des zurückgegebenen Arrays.

Wenn sich der Wert ändert, beispielsweise wenn die bevorzugten Sprachen des Benutzers geändert werden, wird ein [`languagechange`](/de/docs/Web/API/Window/languagechange_event)-Ereignis auf dem [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Objekt ausgelöst.

Der `Accept-Language` HTTP-Header in jeder HTTP-Anfrage des Browsers des Benutzers verwendet denselben Wert wie die `navigator.languages`-Eigenschaft, außer dass das zusätzliche `qvalues` (Qualitätswerte)-Feld enthalten ist (z. B. `en-US;q=0.8`).

## Wert

Ein Array oder Zeichenfolgen.

## Beispiele

Dies können Sie in einen Web-Worker einfügen:

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
