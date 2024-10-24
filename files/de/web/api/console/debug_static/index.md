---
title: "console: debug() statische Methode"
short-title: debug()
slug: Web/API/console/debug_static
l10n:
  sourceCommit: f2372e442803696ba0fe1c9804096065f2b42824
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.debug()`** gibt eine Nachricht auf der Konsole auf der Protokollebene "debug" aus. Die Nachricht wird nur angezeigt, wenn die Konsole so konfiguriert ist, dass Debug-Ausgaben angezeigt werden. In den meisten Fällen wird die Protokollebene innerhalb der Konsolen-UI konfiguriert. Diese Protokollebene könnte der `Debug`- oder `Verbose`-Protokollebene entsprechen.

## Syntax

```js-nolint
console.debug(val1)
console.debug(val1, /* …, */ valN)
console.debug(msg)
console.debug(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art Trennung zwischen ihnen an die Konsole ausgegeben. Es gibt einen Sonderfall, wenn `obj1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungsstrings enthält, die durch `subst1` bis `substN` nacheinander bis zur Anzahl der Ersetzungsstrings ersetzt werden. Siehe [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, die zum Ersetzen von Ersetzungsstrings innerhalb von `msg` verwendet werden. Wenn es mehr Ersetzungswerte gibt als Ersetzungsstrings, werden die zusätzlichen Werte selbst nach der detaillierten Assertionsnachricht auf die gleiche Weise wie bei einem fehlenden Formatstring an die Konsole geschrieben.

Weitere Details finden Sie unter [Textausgabe auf der Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Dokumentation von Microsoft Edge für `console.debug()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#debug)
- [Node.JS-Dokumentation für `console.debug()`](https://nodejs.org/docs/latest/api/console.html#consoledebugdata-args)
- [Dokumentation von Google Chrome für `console.debug()`](https://developer.chrome.com/docs/devtools/console/api/#debug)
