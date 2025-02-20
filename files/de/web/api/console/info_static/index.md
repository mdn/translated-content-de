---
title: "console: info() statische Methode"
short-title: info()
slug: Web/API/console/info_static
l10n:
  sourceCommit: 7ed236277b061eb99a7ff66313aa068b9ffe69e5
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.info()`** gibt eine Nachricht auf der Konsole auf der Protokollebene "info" aus. Die Nachricht wird nur angezeigt, wenn die Konsole so konfiguriert ist, dass Info-Ausgaben angezeigt werden. In den meisten Fällen wird die Protokollebene innerhalb der Konsolen-UI konfiguriert. Die Nachricht kann eine spezielle Formatierung erhalten, wie z. B. ein kleines "i"-Symbol daneben.

## Syntax

```js-nolint
console.info(val1)
console.info(val1, /* …, */ valN)
console.info(msg)
console.info(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art Trennung dazwischen auf der Konsole ausgegeben. Es gibt einen Sonderfall, wenn `val1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungsstrings enthält, die durch `subst1` bis `substN` in aufeinanderfolgender Reihenfolge bis zur Anzahl der Ersetzungsstrings ersetzt werden. Siehe [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, die Ersetzungsstrings innerhalb von `msg` ersetzen sollen. Wenn es mehr Ersatzwerte als Ersatzstrings gibt, werden die zusätzlichen Werte in gleicher Weise wie ohne Format-String nach dem detaillierten Assertionsnachricht ausgegeben.

Weitere Einzelheiten finden Sie unter [Textausgabe auf der Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge-Dokumentation zu `console.info()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#info)
- [Node.js-Dokumentation zu `console.info()`](https://nodejs.org/docs/latest/api/console.html#consoleinfodata-args)
- [Google Chrome-Dokumentation zu `console.info()`](https://developer.chrome.com/docs/devtools/console/api/#info)
