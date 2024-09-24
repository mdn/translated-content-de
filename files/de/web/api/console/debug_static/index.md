---
title: "console: debug() statische Methode"
short-title: debug()
slug: Web/API/console/debug_static
l10n:
  sourceCommit: 18a5b7e39a1cb4653207cc476c681120cc62d260
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.debug()`** statische Methode gibt eine Nachricht auf der Konsole auf der "debug" Protokollebene aus. Die Nachricht wird nur angezeigt, wenn die Konsole so konfiguriert ist, dass sie Debug-Ausgaben anzeigt. In den meisten Fällen wird die Protokollebene innerhalb der Konsole-UI konfiguriert. Diese Protokollebene könnte der `Debug`- oder `Verbose`-Protokollebene entsprechen.

## Syntax

```js-nolint
debug(val1)
debug(val1, /* …, */ valN)
debug(msg)
debug(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art Trennung zwischen ihnen auf der Konsole ausgegeben. Ein Sonderfall besteht, wenn `obj1` ein String ist, der nachfolgend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungs-Strings enthält, die mit `subst1` bis `substN` in aufeinanderfolgender Reihenfolge bis zur Anzahl der Ersetzungs-Strings ersetzt werden. Siehe [Verwenden von Zeichenkettenersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, die Ersetzungs-Strings in `msg` ersetzen sollen. Wenn es mehr Ersetzungswerte als Ersetzungs-Strings gibt, werden die zusätzlichen Werte selbst auf die Konsole geschrieben, nach der detaillierten Behauptungsmeldung, auf die gleiche Weise wie wenn es keinen Format-String gibt.

Weitere Details finden Sie unter [Ausgabe von Text in die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von {{domxref("console")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge-Dokumentation für `console.debug()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#debug)
- [Node.JS-Dokumentation für `console.debug()`](https://nodejs.org/docs/latest/api/console.html#consoledebugdata-args)
- [Google Chrome-Dokumentation für `console.debug()`](https://developer.chrome.com/docs/devtools/console/api/#debug)
