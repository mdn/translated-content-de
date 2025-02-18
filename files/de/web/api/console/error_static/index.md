---
title: "console: error() statische Methode"
short-title: error()
slug: Web/API/console/error_static
l10n:
  sourceCommit: 7ed236277b061eb99a7ff66313aa068b9ffe69e5
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.error()`** gibt eine Nachricht auf der Konsole auf der Protokollebene "error" aus. Die Nachricht wird dem Benutzer nur angezeigt, wenn die Konsole so konfiguriert ist, dass Fehlerausgaben angezeigt werden. In den meisten Fällen wird die Protokollebene in der Benutzeroberfläche der Konsole konfiguriert. Die Nachricht kann als Fehler formatiert sein, mit roter Farbe und Informationen zum Aufrufstack.

## Syntax

```js-nolint
console.error(val1)
console.error(val1, /* …, */ valN)
console.error(msg)
console.error(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art von Trennung zwischen den einzelnen Werten auf der Konsole ausgegeben. Es gibt einen Sonderfall, wenn `val1` ein String ist, der nachfolgend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungszeichenfolgen enthält, welche durch `subst1` bis `substN` in aufeinanderfolgender Reihenfolge bis zur Anzahl der Ersetzungszeichenfolgen ersetzt werden. Siehe [Verwendung von Zeichenfolgenersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, die Ersetzungszeichenfolgen innerhalb von `msg` ersetzen. Wenn es mehr Ersetzungswerte als Ersetzungszeichenfolgen gibt, werden die zusätzlichen Werte selbst in der Konsole ausgegeben, nach der detaillierten Assertionsnachricht, und zwar auf die gleiche Weise, wie es der Fall ist, wenn kein Formatstring verwendet wird.

Siehe [Ausgabe von Text in die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge-Dokumentation für `console.error()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#error)
- [Node.js-Dokumentation für `console.error()`](https://nodejs.org/docs/latest/api/console.html#consoleerrordata-args)
- [Google Chrome-Dokumentation für `console.error()`](https://developer.chrome.com/docs/devtools/console/api/#error)
