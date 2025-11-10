---
title: "console: log() static method"
short-title: log()
slug: Web/API/console/log_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.log()`** statische Methode gibt eine Nachricht an die Konsole aus.

## Syntax

```js-nolint
console.log(val1)
console.log(val1, /* …, */ valN)
console.log(msg)
console.log(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten zur Ausgabe. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art Trennung dazwischen an die Konsole ausgegeben. Es gibt einen Sonderfall, wenn `val1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungszeichenfolgen enthält, die der Reihe nach mit `subst1` bis `substN` ersetzt werden, bis zur Anzahl der Ersetzungszeichenfolgen. Siehe [Verwendung von Zeichenfolgenersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen die Ersetzungszeichenfolgen innerhalb von `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungszeichenfolgen gibt, werden die zusätzlichen Werte selbst nach der detaillierten Assertion-Nachricht in gleicher Weise in die Konsole geschrieben, wie wenn kein Formatzeichen vorhanden ist.

Siehe [Textausgabe in die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/console) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge-Dokumentation für `console.log()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#log)
- [Node.js-Dokumentation für `console.log()`](https://nodejs.org/docs/latest/api/console.html#consolelogdata-args)
- [Google Chrome-Dokumentation für `console.log()`](https://developer.chrome.com/docs/devtools/console/api/#log)
