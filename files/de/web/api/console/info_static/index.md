---
title: "console: info() statische Methode"
short-title: info()
slug: Web/API/console/info_static
l10n:
  sourceCommit: 18a5b7e39a1cb4653207cc476c681120cc62d260
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.info()`** statische Methode gibt eine Nachricht auf der Konsole auf dem "Info"-Log-Level aus. Die Nachricht wird nur angezeigt, wenn die Konsole so konfiguriert ist, dass sie Info-Ausgaben darstellt. In den meisten Fällen wird das Log-Level innerhalb der Konsole-UI konfiguriert. Die Nachricht kann eine spezielle Formatierung erhalten, wie z.B. ein kleines "i"-Symbol daneben.

## Syntax

```js-nolint
info(val1)
info(val1, /* …, */ valN)
info(msg)
info(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art von Trennung dazwischen auf der Konsole ausgegeben. Es gibt einen Sonderfall, wenn `obj1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String mit null oder mehr Ersetzungsstrings, die in aufsteigender Reihenfolge durch `subst1` bis `substN` ersetzt werden, bis zur Anzahl der Ersetzungsstrings. Siehe [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungsstrings innerhalb `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungsstrings gibt, werden die zusätzlichen Werte selbst nach der ausführlichen Assert-Nachricht auf die Konsole geschrieben, in der gleichen Art und Weise, wie es der Fall ist, wenn es keinen Formatstring gibt.

Siehe [Textausgabe auf die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Details.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge-Dokumentation für `console.info()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#info)
- [Node.JS-Dokumentation für `console.info()`](https://nodejs.org/docs/latest/api/console.html#consoleinfodata-args)
- [Google Chrome-Dokumentation für `console.info()`](https://developer.chrome.com/docs/devtools/console/api/#info)
