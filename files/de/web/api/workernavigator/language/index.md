---
title: "WorkerNavigator: language-Eigenschaft"
short-title: language
slug: Web/API/WorkerNavigator/language
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte Eigenschaft **`WorkerNavigator.language`** gibt einen String zurück, der die bevorzugte Sprache des Benutzers repräsentiert, normalerweise die Sprache der Browser-Benutzeroberfläche.

## Wert

Ein String, der die Sprachversion darstellt, wie in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert. Beispiele für gültige Sprachcodes sind "en", "en-US", "fr", "fr-FR", "es-ES", etc.

Beachten Sie, dass in Safari auf iOS vor Version 10.2 der zurückgegebene Ländercode kleingeschrieben ist: "en-us", "fr-fr" etc.

## Beispiele

Sie können diesen Code in einen Web Worker einfügen:

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
