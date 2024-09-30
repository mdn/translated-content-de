---
title: "console: log() statische Methode"
short-title: log()
slug: Web/API/console/log_static
l10n:
  sourceCommit: 18a5b7e39a1cb4653207cc476c681120cc62d260
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.log()`** statische Methode gibt eine Nachricht an die Konsole aus.

## Syntax

```js-nolint
log(val1)
log(val1, /* …, */ valN)
log(msg)
log(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art Trennung dazwischen an die Konsole ausgegeben. Es gibt einen Sonderfall, wenn `obj1` ein String ist, welcher anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungszeichenfolgen enthält, die in der Reihenfolge `subst1` bis `substN` ersetzt werden, bis die Anzahl der Ersetzungszeichenfolgen erreicht ist. Siehe [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungszeichenfolgen innerhalb von `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungszeichenfolgen gibt, werden die zusätzlichen Werte selbst in der gleichen Weise nach der ausführlichen Assertionsnachricht an die Konsole geschrieben, als gäbe es keine Formatzeichenfolge.

Siehe [Ausgabe von Texten an die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation für `console.log()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#log)
- [Node.JS Dokumentation für `console.log()`](https://nodejs.org/docs/latest/api/console.html#consolelogdata-args)
- [Google Chromes Dokumentation für `console.log()`](https://developer.chrome.com/docs/devtools/console/api/#log)
