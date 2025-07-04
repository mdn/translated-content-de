---
title: "console: info() statische Methode"
short-title: info()
slug: Web/API/console/info_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.info()`** gibt eine Nachricht auf der Konsole auf der Logstufe "info" aus. Die Nachricht wird nur dann dem Nutzer angezeigt, wenn die Konsole so konfiguriert ist, dass sie Info-Ausgaben anzeigt. In den meisten Fällen wird die Logstufe innerhalb der Konsole-Oberfläche konfiguriert. Die Nachricht kann eine spezielle Formatierung erhalten, wie z.B. ein kleines "i"-Symbol neben der Nachricht.

## Syntax

```js-nolint
console.info(val1)
console.info(val1, /* …, */ valN)
console.info(msg)
console.info(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge in die Konsole ausgegeben, wobei eine Art von Trennung zwischen ihnen erfolgt. Es gibt einen Sonderfall, wenn `val1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungsstrings enthält, die der Reihe nach durch `subst1` bis `substN` ersetzt werden, bis zur Anzahl der Ersetzungsstrings. Siehe [String-Ersetzungen verwenden](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungsstrings in `msg` ersetzt werden. Wenn mehr Ersetzungswerte als Ersetzungsstrings vorhanden sind, werden die zusätzlichen Werte selbst nach der detaillierten Überprüfungsnachricht in die Konsole geschrieben, ähnlich wie wenn es keinen Formatstring gibt.

Siehe [Textausgabe auf die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/console) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation für `console.info()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#info)
- [Node.js Dokumentation für `console.info()`](https://nodejs.org/docs/latest/api/console.html#consoleinfodata-args)
- [Google Chromes Dokumentation für `console.info()`](https://developer.chrome.com/docs/devtools/console/api/#info)
