---
title: "console: log() statische Methode"
short-title: log()
slug: Web/API/console/log_static
l10n:
  sourceCommit: 18a5b7e39a1cb4653207cc476c681120cc62d260
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.log()`** gibt eine Nachricht an die Konsole aus.

## Syntax

```js-nolint
log(val1)
log(val1, /* …, */ valN)
log(msg)
log(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten zur Ausgabe. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art von Trennung zwischen ihnen an die Konsole ausgegeben. Es gibt einen Sonderfall, wenn `obj1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungs-Strings enthält, die nacheinander durch `subst1` bis `substN` in der Reihenfolge der Anzahl der Ersetzungs-Strings ersetzt werden. Siehe [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungs-Strings innerhalb `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungs-Strings gibt, werden die zusätzlichen Werte nach der ausführlichen Bestätigungsnachricht in gleicher Weise wie bei fehlendem Format-String an die Konsole geschrieben.

Weitere Details finden Sie im Abschnitt [Textausgabe an die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation der [`console`](/de/docs/Web/API/Console).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation zu `console.log()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#log)
- [Node.JS Dokumentation für `console.log()`](https://nodejs.org/docs/latest/api/console.html#consolelogdata-args)
- [Google Chromes Dokumentation zu `console.log()`](https://developer.chrome.com/docs/devtools/console/api/#log)
