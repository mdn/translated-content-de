---
title: "console: warn() statische Methode"
short-title: warn()
slug: Web/API/console/warn_static
l10n:
  sourceCommit: 18a5b7e39a1cb4653207cc476c681120cc62d260
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.warn()`** gibt eine Warnmeldung auf der "warning"-Protokollebene in der Konsole aus. Die Nachricht wird nur angezeigt, wenn die Konsole so konfiguriert ist, dass sie Warnmeldungen anzeigt. In den meisten Fällen wird das Protokollebene innerhalb der Konsole-UI konfiguriert. Die Nachricht kann spezielle Formatierungen erhalten, wie z.B. gelbe Farben und ein Warnsymbol.

## Syntax

```js-nolint
warn(val1)
warn(val1, /* …, */ valN)
warn(msg)
warn(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten zum Ausgeben. Eine Darstellung jedes dieser Werte wird der Reihe nach mit einer Art Trennung zwischen ihnen in die Konsole ausgegeben. Es gibt einen Sonderfall, wenn `obj1` ein String ist, der im Folgenden beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungsstrings enthält, die der Reihe nach bis zur Anzahl der Ersetzungsstrings durch `subst1` bis `substN` ersetzt werden. Siehe [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungsstrings innerhalb von `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungsstrings gibt, werden die zusätzlichen Werte nach der detaillierten Bestätigungsnachricht auf die gleiche Weise wie bei fehlendem Formatstring in die Konsole geschrieben.

Siehe [Ausgabe von Text in die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge-Dokumentation für `console.warn()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#warn)
- [Node.JS-Dokumentation für `console.warn()`](https://nodejs.org/docs/latest/api/console.html#consolewarndata-args)
- [Google Chrome-Dokumentation für `console.warn()`](https://developer.chrome.com/docs/devtools/console/api/#warn)
