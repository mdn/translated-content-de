---
title: "console: error() statische Methode"
short-title: error()
slug: Web/API/console/error_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.error()`** gibt eine Nachricht auf dem "Error"-Protokollebene in der Konsole aus. Die Nachricht wird nur angezeigt, wenn die Konsole so konfiguriert ist, dass Fehlerausgaben angezeigt werden. In den meisten Fällen wird die Protokollebene innerhalb der Konsolen-Oberfläche konfiguriert. Die Nachricht kann als Fehler formatiert sein, mit roten Farben und Informationen über den Aufruf-Stack.

## Syntax

```js-nolint
console.error(val1)
console.error(val1, /* …, */ valN)
console.error(msg)
console.error(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten zur Ausgabe. Eine Darstellung jedes dieser Werte wird in der gegebenen Reihenfolge mit einer Art Trennung zwischen jedem von ihnen in die Konsole ausgegeben. Ein Sonderfall tritt auf, wenn `val1` ein String ist, was anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungszeichenfolgen enthält, die in aufeinanderfolgender Reihenfolge durch `subst1` bis `substN` ersetzt werden, bis zur Anzahl der Ersetzungszeichenfolgen. Weitere Informationen zur Funktionsweise von Ersetzungen finden Sie unter [Using string substitutions](/de/docs/Web/API/console#using_string_substitutions).
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen die Ersetzungszeichenfolgen innerhalb `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungszeichenfolgen gibt, werden die zusätzlichen Werte selbst nach der detaillierten Fehlermeldung in der Konsole geschrieben, genauso wie wenn es keinen Format-String gäbe.

Weitere Details finden Sie unter [Outputting text to the console](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/console).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation zu `console.error()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#error)
- [Node.js Dokumentation zu `console.error()`](https://nodejs.org/docs/latest/api/console.html#consoleerrordata-args)
- [Google Chromes Dokumentation zu `console.error()`](https://developer.chrome.com/docs/devtools/console/api/#error)
