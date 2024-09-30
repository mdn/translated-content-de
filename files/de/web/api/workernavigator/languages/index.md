---
title: "WorkerNavigator: languages-Eigenschaft"
short-title: languages
slug: Web/API/WorkerNavigator/languages
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte Eigenschaft **`WorkerNavigator.languages`**
gibt ein Array von Zeichenfolgen zurück, die die bevorzugten Sprachen des Benutzers darstellen. Die Sprache wird mittels Sprach-Tags gemäß
{{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} beschrieben. Im zurückgegebenen
Array sind die Sprachen nach Präferenz geordnet, wobei die bevorzugte Sprache an erster Stelle steht.

Der Wert von [`navigator.language`](/de/docs/Web/API/WorkerNavigator/language) ist das erste Element des zurückgegebenen Arrays.

Wenn sich der Wert ändert, da die bevorzugten Sprachen des Benutzers geändert werden, wird ein
[`languagechange`](/de/docs/Web/API/Window/languagechange_event) Event auf dem [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Objekt ausgelöst.

Der `Accept-Language` HTTP-Header in jeder HTTP-Anfrage vom Browser des Benutzers verwendet denselben Wert wie die `navigator.languages` Eigenschaft, außer für das zusätzliche `qvalues` (Qualitätswert) Feld (z.B. `en-US;q=0.8`).

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
- [`languagechange`](/de/docs/Web/API/WorkerGlobalScope/languagechange_event) Ereignis
