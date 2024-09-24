---
title: "WorkerNavigator: language-Eigenschaft"
short-title: language
slug: Web/API/WorkerNavigator/language
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte Eigenschaft **`WorkerNavigator.language`** gibt
einen String zurück, der die bevorzugte Sprache des Benutzers darstellt, normalerweise die Sprache der Browser-Benutzeroberfläche.

## Wert

Ein String, der die Sprachversion darstellt, wie sie in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert ist. Beispiele für gültige Sprachcodes sind "en", "en-US", "fr", "fr-FR", "es-ES" usw.

Beachten Sie, dass in Safari auf iOS vor 10.2 der zurückgegebene Ländercode in Kleinbuchstaben ist:
"en-us", "fr-fr" usw.

## Beispiele

Sie können dies in einen Web-Worker einfügen:

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

- {{domxref("WorkerNavigator.languages")}}
- {{domxref("WorkerNavigator")}}
