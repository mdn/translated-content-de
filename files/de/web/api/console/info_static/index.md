---
title: "console: info() statische Methode"
short-title: info()
slug: Web/API/console/info_static
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.info()`** gibt eine Nachricht auf der Konsole auf der "info"-Protokollebene aus. Die Nachricht wird nur angezeigt, wenn die Konsole so konfiguriert ist, dass sie Info-Ausgaben anzeigt. In den meisten Fällen wird die Protokollebene innerhalb der Benutzeroberfläche der Konsole konfiguriert. Die Nachricht kann eine spezielle Formatierung, wie beispielsweise ein kleines "i"-Symbol daneben, erhalten.

## Syntax

```js-nolint
console.info(val1)
console.info(val1, /* …, */ valN)
console.info(msg)
console.info(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art Trennung zwischen ihnen auf der Konsole ausgegeben. Es gibt einen Spezialfall, wenn `val1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungsstrings enthält, die nacheinander durch `subst1` bis `substN` ersetzt werden, bis zur Anzahl der Ersetzungsstrings. Siehe [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungsstrings innerhalb von `msg` ersetzt werden. Wenn es mehr Ersetzungswerte gibt als Ersetzungsstrings, werden die zusätzlichen Werte nach der detaillierten Assertion-Nachricht in derselben Weise wie ohne Formatstring auf der Konsole ausgegeben.

Weitere Details finden Sie unter [Textausgabe auf die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/console).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge Dokumentation für `console.info()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide/console/api#info)
- [Node.js Dokumentation für `console.info()`](https://nodejs.org/docs/latest/api/console.html#consoleinfodata-args)
- [Google Chrome Dokumentation für `console.info()`](https://developer.chrome.com/docs/devtools/console/api/#info)
