---
title: "console: error() statische Methode"
short-title: error()
slug: Web/API/console/error_static
l10n:
  sourceCommit: f2372e442803696ba0fe1c9804096065f2b42824
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.error()`** statische Methode gibt eine Nachricht auf der "error"-Protokollebene in der Konsole aus. Die Nachricht wird nur angezeigt, wenn die Konsole so konfiguriert ist, dass sie Fehlerausgaben anzeigt. In den meisten Fällen wird die Protokollebene innerhalb der Konsolen-Benutzeroberfläche konfiguriert. Die Nachricht kann als Fehler formatiert werden, mit roter Farbe und Informationen zur Aufrufstapelverfolgung.

## Syntax

```js-nolint
console.error(val1)
console.error(val1, /* …, */ valN)
console.error(msg)
console.error(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten zur Ausgabe. Eine Darstellung jedes dieser Werte wird der Reihe nach in der Konsole ausgegeben, mit einer Art von Trennung zwischen ihnen. Ein Sonderfall tritt ein, wenn `obj1` ein String ist, der nachfolgend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungsstrings enthält, die der Reihe nach durch `subst1` bis `substN` ersetzt werden, bis zur Anzahl der Ersetzungsstrings. Siehe [Using string substitutions](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen die Ersetzungsstrings innerhalb von `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungsstrings gibt, werden die zusätzlichen Werte nach der detaillierten Bestätigungsmeldung auf dieselbe Weise in die Konsole geschrieben, wie wenn es keinen Format-String gibt.

Siehe [Ausgabe von Text in die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation zu `console.error()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#error)
- [Node.JS Dokumentation zu `console.error()`](https://nodejs.org/docs/latest/api/console.html#consoleerrordata-args)
- [Google Chromes Dokumentation zu `console.error()`](https://developer.chrome.com/docs/devtools/console/api/#error)
