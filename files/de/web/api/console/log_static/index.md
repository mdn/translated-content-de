---
title: "console: log() statische Methode"
short-title: log()
slug: Web/API/console/log_static
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
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
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der Konsole in der angegebenen Reihenfolge ausgegeben, wobei eine Art Trennung zwischen ihnen erfolgt. Es gibt einen Sonderfall, wenn `obj1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungs-Strings enthält, die nacheinander durch `subst1` bis `substN` in der angegebenen Reihenfolge ersetzt werden. Weitere Informationen, wie die Ersetzungen funktionieren, finden Sie unter [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions).
- `subst1` … `substN`
  - : JavaScript-Werte, die zur Ersetzung von Ersetzungs-Strings innerhalb von `msg` verwendet werden. Wenn es mehr Ersetzungswerte als Ersetzungs-Strings gibt, werden die zusätzlichen Werte nach der detaillierten Fehlernachricht in der gleichen Weise in die Konsole geschrieben, als ob es keine Formatzeichenkette gäbe.

Weitere Einzelheiten finden Sie unter [Ausgabe von Text in die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge-Dokumentation zu `console.log()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#log)
- [Node.js-Dokumentation zu `console.log()`](https://nodejs.org/docs/latest/api/console.html#consolelogdata-args)
- [Google Chrome-Dokumentation zu `console.log()`](https://developer.chrome.com/docs/devtools/console/api/#log)
