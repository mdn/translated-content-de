---
title: "console: debug() Static-Methode"
short-title: debug()
slug: Web/API/console/debug_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.debug()`** gibt eine Nachricht auf der Konsole auf der Logstufe "debug" aus. Die Nachricht wird dem Benutzer nur angezeigt, wenn die Konsole so konfiguriert ist, dass Debug-Ausgaben angezeigt werden. In den meisten Fällen wird die Logstufe innerhalb der Konsolen-Benutzeroberfläche konfiguriert. Diese Logstufe kann der `Debug`- oder `Verbose`-Logstufe entsprechen.

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
  - : Ein JavaScript-String, der null oder mehr Ersetzungsstrings enthält, die in aufeinanderfolgender Reihenfolge bis zur Anzahl der Ersetzungsstrings mit `subst1` bis `substN` ersetzt werden. Weitere Informationen zu Ersetzungen finden Sie unter [Using string substitutions](/de/docs/Web/API/console#using_string_substitutions).
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen die Ersetzungsstrings in `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungsstrings gibt, werden die zusätzlichen Werte selbst nach der detaillierten Assertion-Nachricht in derselben Weise wie bei einem fehlenden Formatstring an die Konsole geschrieben.

Siehe [Outputting text to the console](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/console) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation für `console.debug()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#debug)
- [Node.js Dokumentation für `console.debug()`](https://nodejs.org/docs/latest/api/console.html#consoledebugdata-args)
- [Google Chromes Dokumentation für `console.debug()`](https://developer.chrome.com/docs/devtools/console/api/#debug)
