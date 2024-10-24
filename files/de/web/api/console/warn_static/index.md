---
title: "console: warn() statische Methode"
short-title: warn()
slug: Web/API/console/warn_static
l10n:
  sourceCommit: f2372e442803696ba0fe1c9804096065f2b42824
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.warn()`** gibt eine Warnmeldung auf der Konsole auf der Log-Ebene "Warnung" aus. Die Meldung wird nur angezeigt, wenn die Konsole so konfiguriert ist, dass sie Warnmeldungen ausgibt. In den meisten Fällen wird die Log-Ebene innerhalb der Konsole-UI konfiguriert. Die Nachricht kann eine spezielle Formatierung erhalten, wie zum Beispiel gelbe Farben und ein Warnsymbol.

## Syntax

```js-nolint
console.warn(val1)
console.warn(val1, /* …, */ valN)
console.warn(msg)
console.warn(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art von Trennung dazwischen in der Konsole ausgegeben. Es gibt einen Sonderfall, wenn `obj1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungszeichenfolgen enthält, die in aufeinanderfolgender Reihenfolge bis zur Anzahl der Ersetzungszeichenfolgen durch `subst1` bis `substN` ersetzt werden. Siehe [Verwendung von Zeichenfolgenersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungszeichenfolgen innerhalb von `msg` ersetzt werden sollen. Wenn es mehr Ersetzungswerte als Ersetzungszeichenfolgen gibt, werden die zusätzlichen Werte selbst nach der detaillierten Aussage in die Konsole geschrieben, auf die gleiche Weise, wie wenn es keine Formatzeichenfolge gibt.

Siehe [Ausgabe von Text auf der Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Details.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge-Dokumentation für `console.warn()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#warn)
- [Node.JS-Dokumentation für `console.warn()`](https://nodejs.org/docs/latest/api/console.html#consolewarndata-args)
- [Google Chrome-Dokumentation für `console.warn()`](https://developer.chrome.com/docs/devtools/console/api/#warn)
