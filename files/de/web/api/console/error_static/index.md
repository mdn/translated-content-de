---
title: "console: error() statische Methode"
short-title: error()
slug: Web/API/console/error_static
l10n:
  sourceCommit: 18a5b7e39a1cb4653207cc476c681120cc62d260
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.error()`** statische Methode gibt eine Nachricht auf der Konsole auf der Protokollebene "error" aus. Die Nachricht wird nur angezeigt, wenn die Konsole so konfiguriert ist, dass Fehlerausgaben angezeigt werden. In den meisten Fällen wird die Protokollebene innerhalb der Konsole UI konfiguriert. Die Nachricht kann als Fehler formatiert werden, mit roten Farben und Aufrufstapelinformationen.

## Syntax

```js-nolint
error(val1)
error(val1, /* …, */ valN)
error(msg)
error(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten zur Ausgabe. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art Trennung dazwischen auf der Konsole ausgegeben. Es gibt einen Sonderfall, wenn `obj1` ein String ist, der danach beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungszeichenfolgen enthält, die in aufeinanderfolgender Reihenfolge durch `subst1` bis `substN` ersetzt werden, entsprechend der Anzahl der Ersetzungszeichenfolgen. Siehe [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungszeichenfolgen innerhalb von `msg` ersetzt werden. Wenn es mehr Ersetzungswerte gibt als Ersetzungszeichenfolgen, werden die zusätzlichen Werte nach der detaillierten Bestätigungsnachricht auf dieselbe Weise auf der Konsole ausgegeben wie bei fehlendem Formatstring.

Siehe [Ausgabe von Text auf der Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge-Dokumentation für `console.error()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#error)
- [Node.JS-Dokumentation für `console.error()`](https://nodejs.org/docs/latest/api/console.html#consoleerrordata-args)
- [Google Chrome-Dokumentation für `console.error()`](https://developer.chrome.com/docs/devtools/console/api/#error)
