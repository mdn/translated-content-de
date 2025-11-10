---
title: "WorkerNavigator: language-Eigenschaft"
short-title: language
slug: Web/API/WorkerNavigator/language
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`WorkerNavigator.language`**-Eigenschaft gibt einen String zurück, der die bevorzugte Sprache des Benutzers darstellt, normalerweise die Sprache der Browser-Oberfläche.

## Wert

Ein String, der die Sprachversion als {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} darstellt, zum Beispiel `en`, `en-US`, `fr`, `fr-FR`, `es-ES`, etc.

Beachten Sie, dass in Safari unter iOS vor Version 10.2 der zurückgegebene Ländercode in Kleinbuchstaben ist: "en-us", "fr-fr" etc.

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

- [`WorkerNavigator.languages`](/de/docs/Web/API/WorkerNavigator/languages)
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
