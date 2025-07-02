---
title: "console: debug() static method"
short-title: debug()
slug: Web/API/console/debug_static
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.debug()`** gibt eine Nachricht auf der Konsole auf der Logstufe "debug" aus. Die Nachricht wird dem Benutzer nur angezeigt, wenn die Konsole so konfiguriert ist, dass sie Debug-Ausgaben anzeigt. In den meisten Fällen wird die Logstufe innerhalb der Konsole-UI konfiguriert. Diese Logstufe könnte der `Debug`- oder `Verbose`-Logstufe entsprechen.

## Syntax

```js-nolint
console.debug(val1)
console.debug(val1, /* …, */ valN)
console.debug(msg)
console.debug(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge auf der Konsole ausgegeben, wobei eine Art Trennung zwischen ihnen erfolgt. Es gibt einen Sonderfall, wenn `val1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungsstrings enthält, die der Reihe nach von `subst1` bis `substN` ersetzt werden, bis zur Anzahl der Ersetzungsstrings. Sehen Sie unter [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) nach, um zu erfahren, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen die Ersetzungsstrings in `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungsstrings gibt, werden die zusätzlichen Werte nach der detaillierten Aussage ähnlich wie ohne Formatstring selbst auf der Konsole ausgegeben.

Weitere Details finden Sie unter [Ausgabe von Text auf die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation zu [`console`](/de/docs/Web/API/console).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation für `console.debug()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide/console/api#debug)
- [Node.js-Dokumentation für `console.debug()`](https://nodejs.org/docs/latest/api/console.html#consoledebugdata-args)
- [Dokumentation von Google Chrome für `console.debug()`](https://developer.chrome.com/docs/devtools/console/api/#debug)
