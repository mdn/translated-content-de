---
title: "console: error()-Methode"
short-title: error()
slug: Web/API/console/error_static
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.error()`**-Methode gibt eine Nachricht auf der Konsole auf der Log-Ebene "error" aus. Die Nachricht wird dem Benutzer nur angezeigt, wenn die Konsole so konfiguriert ist, dass sie Fehlerausgaben anzeigt. In den meisten Fällen wird das Log-Level innerhalb der Konsole-Oberfläche konfiguriert. Die Nachricht kann als Fehler formatiert werden, mit roter Farbe und Informationen zum Aufruf-Stack.

## Syntax

```js-nolint
console.error(val1)
console.error(val1, /* …, */ valN)
console.error(msg)
console.error(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten zur Ausgabe. Eine Repräsentation jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art Trennzeichen dazwischen an die Konsole ausgegeben. Es gibt einen Sonderfall, wenn `val1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungsstrings enthält, die in fortlaufender Reihenfolge bis zur Anzahl der Ersetzungsstrings mit `subst1` bis `substN` ersetzt werden. Siehe [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungsstrings innerhalb von `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungsstrings gibt, werden die zusätzlichen Werte selbst nach der detaillierten Assertionsnachricht auf die gleiche Weise an die Konsole ausgegeben, als wenn es keinen Formatstring gäbe.

Weitere Informationen finden Sie unter [Textausgabe auf der Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/console).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation für `console.error()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide/console/api#error)
- [Node.js Dokumentation für `console.error()`](https://nodejs.org/docs/latest/api/console.html#consoleerrordata-args)
- [Google Chromes Dokumentation für `console.error()`](https://developer.chrome.com/docs/devtools/console/api/#error)
