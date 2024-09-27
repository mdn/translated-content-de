---
title: "WorkerNavigator: languages-Eigenschaft"
short-title: languages
slug: Web/API/WorkerNavigator/languages
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`WorkerNavigator.languages`**-Eigenschaft, die nur lesbar ist, gibt ein Array von Strings zurück, die die bevorzugten Sprachen des Benutzers repräsentieren. Die Sprache wird mit Hilfe von Sprach-Tags beschrieben gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}. Im zurückgegebenen Array sind sie nach Präferenz geordnet, wobei die bevorzugteste Sprache zuerst steht.

Der Wert von [`navigator.language`](/de/docs/Web/API/WorkerNavigator/language) entspricht dem ersten Element des zurückgegebenen Arrays.

Wenn sich der Wert ändert, da die bevorzugten Sprachen des Benutzers geändert werden, wird ein [`languagechange`](/de/docs/Web/API/Window/languagechange_event)-Ereignis auf dem [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Objekt ausgelöst.

Der HTTP-Header `Accept-Language` in jeder HTTP-Anfrage des Browsers des Benutzers verwendet denselben Wert wie die `navigator.languages`-Eigenschaft, außer für das zusätzliche `qvalues`-Feld (Qualitätswerte), z. B. `en-US;q=0.8`.

## Wert

Ein Array oder Strings.

## Beispiele

Sie können dies in einem Web-Worker ausführen:

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
- [`languagechange`](/de/docs/Web/API/WorkerGlobalScope/languagechange_event)-Ereignis
