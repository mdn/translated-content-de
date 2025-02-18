---
title: "console: log() static method"
short-title: log()
slug: Web/API/console/log_static
l10n:
  sourceCommit: 7ed236277b061eb99a7ff66313aa068b9ffe69e5
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.log()`** statische Methode gibt eine Nachricht in der Konsole aus.

## Syntax

```js-nolint
console.log(val1)
console.log(val1, /* …, */ valN)
console.log(msg)
console.log(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der Konsole in der angegebenen Reihenfolge ausgegeben, mit einer Art Trennung zwischen ihnen. Es gibt einen Sonderfall, wenn `val1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungsstrings enthält, die durch `subst1` bis `substN` in fortlaufender Reihenfolge ersetzt werden, bis zur Anzahl der Ersetzungsstrings. Siehe [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungsstrings innerhalb von `msg` ersetzt werden. Wenn mehr Ersetzungswerte als Ersetzungsstrings vorhanden sind, werden die zusätzlichen Werte selbst nach der detaillierten Aussage in der Konsole geschrieben, und zwar auf dieselbe Weise wie bei fehlendem Formatstring.

Siehe [Ausgabe von Text in der Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation zu `console.log()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#log)
- [Node.js Dokumentation zu `console.log()`](https://nodejs.org/docs/latest/api/console.html#consolelogdata-args)
- [Google Chromes Dokumentation zu `console.log()`](https://developer.chrome.com/docs/devtools/console/api/#log)
