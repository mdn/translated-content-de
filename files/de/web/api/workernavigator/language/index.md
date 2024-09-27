---
title: "WorkerNavigator: language-Eigenschaft"
short-title: language
slug: Web/API/WorkerNavigator/language
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`WorkerNavigator.language`** Eigenschaft ist eine schreibgeschützte Eigenschaft, die einen String zurückgibt, der die bevorzugte Sprache des Benutzers darstellt, in der Regel die Sprache der Browser-Oberfläche.

## Wert

Ein String, der die Sprachversion, wie in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert, darstellt. Beispiele für gültige Sprachcodes sind "en", "en-US", "fr", "fr-FR", "es-ES" usw.

Beachten Sie, dass in Safari auf iOS vor Version 10.2 der Ländercode in Kleinbuchstaben zurückgegeben wird: "en-us", "fr-fr" usw.

## Beispiele

Sie können dies in einem Web Worker ausführen:

```js
if (/^en\b/.test(navigator.language)) {
  doLangSelect(window.navigator.language);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerNavigator.languages`](/de/docs/Web/API/WorkerNavigator/languages)
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
