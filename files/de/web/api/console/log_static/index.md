---
title: "console: log() statische Methode"
short-title: log()
slug: Web/API/console/log_static
l10n:
  sourceCommit: f2372e442803696ba0fe1c9804096065f2b42824
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.log()`** gibt eine Nachricht an die Konsole aus.

## Syntax

```js-nolint
console.log(val1)
console.log(val1, /* …, */ valN)
console.log(msg)
console.log(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten zur Ausgabe. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art Trennung zwischen ihnen an die Konsole ausgegeben. Es gibt einen Sonderfall, wenn `obj1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungs-Strings enthält, die nacheinander mit `subst1` bis `substN` bis zur Anzahl der Ersetzungs-Strings ersetzt werden. Siehe [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungs-Strings innerhalb von `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungs-Strings gibt, werden die zusätzlichen Werte auf dieselbe Weise nach der detaillierten Assertionsnachricht in die Konsole geschrieben, als ob es keinen Format-String gäbe.

Weitere Details finden Sie unter [Textausgabe an die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge Dokumentation für `console.log()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#log)
- [Node.JS Dokumentation für `console.log()`](https://nodejs.org/docs/latest/api/console.html#consolelogdata-args)
- [Google Chrome Dokumentation für `console.log()`](https://developer.chrome.com/docs/devtools/console/api/#log)
