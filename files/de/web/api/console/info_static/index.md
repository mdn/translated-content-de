---
title: "console: info() statische Methode"
short-title: info()
slug: Web/API/console/info_static
l10n:
  sourceCommit: f2372e442803696ba0fe1c9804096065f2b42824
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.info()`** gibt eine Nachricht auf der Konsole auf der Logebene "info" aus. Die Nachricht wird dem Benutzer nur angezeigt, wenn die Konsole so konfiguriert ist, dass sie Info-Ausgaben anzeigt. In den meisten Fällen wird das Log-Level innerhalb der Konsole-UI konfiguriert. Die Nachricht kann eine spezielle Formatierung erhalten, wie z.B. ein kleines "i"-Symbol daneben.

## Syntax

```js-nolint
console.info(val1)
console.info(val1, /* …, */ valN)
console.info(msg)
console.info(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art Trennung zwischen ihnen an die Konsole ausgegeben. Es gibt einen Sonderfall, wenn `obj1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungsstrings enthält, die mit `subst1` bis `substN` in aufeinanderfolgender Reihenfolge bis zur Anzahl der Ersetzungsstrings ersetzt werden. Siehe [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, die zur Ersetzung von Ersetzungsstrings innerhalb von `msg` verwendet werden. Wenn es mehr Ersetzungswerte als Ersetzungsstrings gibt, werden die zusätzlichen Werte selbst nach der detaillierten Assertionsnachricht auf die gleiche Weise wie ohne Format-String an die Konsole ausgegeben.

Weitere Einzelheiten finden Sie unter [Ausgabe von Text an die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console).

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
