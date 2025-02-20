---
title: "console: debug() statische Methode"
short-title: debug()
slug: Web/API/console/debug_static
l10n:
  sourceCommit: 7ed236277b061eb99a7ff66313aa068b9ffe69e5
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.debug()`** gibt eine Nachricht auf der Konsole auf der Log-Ebene "debug" aus. Die Nachricht wird dem Benutzer nur angezeigt, wenn die Konsole so konfiguriert ist, dass Debug-Ausgabe angezeigt wird. In den meisten Fällen wird die Log-Ebene innerhalb der Benutzeroberfläche der Konsole konfiguriert. Diese Log-Ebene könnte der `Debug`- oder `Verbose`-Log-Ebene entsprechen.

## Syntax

```js-nolint
console.debug(val1)
console.debug(val1, /* …, */ valN)
console.debug(msg)
console.debug(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art von Trennung zwischen ihnen auf der Konsole ausgegeben. Es gibt einen Sonderfall, wenn `val1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungszeichenfolgen enthält, die durch `subst1` bis `substN` in aufeinanderfolgender Reihenfolge bis zur Anzahl der Ersetzungszeichenfolgen ersetzt werden. Siehe [Verwenden von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, die Ersetzungszeichenfolgen innerhalb von `msg` ersetzen. Wenn es mehr Ersetzungswerte als Ersetzungszeichenfolgen gibt, werden die zusätzlichen Werte selbst nach der detaillierten Assertion-Nachricht auf die gleiche Weise wie bei fehlendem Formatstring auf der Konsole ausgegeben.

Siehe [Ausgabe von Text auf der Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation zu `console.debug()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#debug)
- [Node.js-Dokumentation zu `console.debug()`](https://nodejs.org/docs/latest/api/console.html#consoledebugdata-args)
- [Google Chromes Dokumentation zu `console.debug()`](https://developer.chrome.com/docs/devtools/console/api/#debug)
