---
title: "console: info() statische Methode"
short-title: info()
slug: Web/API/console/info_static
l10n:
  sourceCommit: 18a5b7e39a1cb4653207cc476c681120cc62d260
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.info()`** statische Methode gibt eine Nachricht auf der Konsole auf der "info"-Protokollebene aus. Die Nachricht wird dem Benutzer nur angezeigt, wenn die Konsole so konfiguriert ist, dass sie Informationsausgabe anzeigt. In den meisten Fällen wird die Protokollebene innerhalb der Konsolen-UI konfiguriert. Die Nachricht kann eine besondere Formatierung erhalten, wie z.B. ein kleines "i"-Symbol daneben.

## Syntax

```js-nolint
info(val1)
info(val1, /* …, */ valN)
info(msg)
info(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art Trennung zwischen ihnen auf der Konsole ausgegeben. Es gibt einen Sonderfall, wenn `obj1` ein String ist, der nachfolgend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungsstrings enthält, die nacheinander durch `subst1` bis `substN` ersetzt werden, bis zur Anzahl der Ersetzungsstrings. Siehe [Verwenden von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, die zum Ersetzen von Ersetzungsstrings innerhalb von `msg` verwendet werden. Wenn es mehr Ersetzungswerte gibt als Ersetzungsstrings, werden die zusätzlichen Werte nach der detaillierten Fehlermeldung in der Konsole ausgegeben, wie es auch ohne Formatstring der Fall wäre.

Siehe [Ausgabe von Text zur Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von {{domxref("console")}} für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge-Dokumentation für `console.info()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#info)
- [Node.JS-Dokumentation für `console.info()`](https://nodejs.org/docs/latest/api/console.html#consoleinfodata-args)
- [Google Chrome-Dokumentation für `console.info()`](https://developer.chrome.com/docs/devtools/console/api/#info)
