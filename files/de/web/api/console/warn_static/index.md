---
title: "console: warn() statische Methode"
short-title: warn()
slug: Web/API/console/warn_static
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.warn()`** gibt eine Warnmeldung auf der Konsole auf der "warning"-Protokollebene aus. Die Nachricht wird nur angezeigt, wenn die Konsole so konfiguriert ist, dass sie Warnmeldungen ausgibt. In den meisten Fällen wird die Protokollebene innerhalb der Benutzeroberfläche der Konsole konfiguriert. Die Nachricht kann ein spezielles Format erhalten, wie z. B. gelbe Farben und ein Warnsymbol.

## Syntax

```js-nolint
console.warn(val1)
console.warn(val1, /* …, */ valN)
console.warn(msg)
console.warn(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge in die Konsole ausgegeben, mit einer Art Trennung zwischen ihnen. Es gibt einen Spezialfall, wenn `val1` ein String ist, der im Folgenden beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungszeichenfolgen enthält, die in aufeinanderfolgender Reihenfolge mit `subst1` bis `substN` ersetzt werden, bis zur Anzahl der Ersetzungszeichenfolgen. Siehe [Verwendung von Zeichenfolgenersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung der Funktionsweise von Ersetzungen.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen die Ersetzungszeichenfolgen innerhalb von `msg` ersetzt werden. Gibt es mehr Ersetzungswerte als Ersetzungszeichenfolgen, werden die zusätzlichen Werte nach der detaillierten Fehlermeldung auf die gleiche Weise in die Konsole geschrieben, wie wenn es keine Formatzeichenkette gibt.

Weitere Einzelheiten finden Sie unter [Textausgabe auf der Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/console).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation zu `console.warn()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide/console/api#warn)
- [Node.js-Dokumentation für `console.warn()`](https://nodejs.org/docs/latest/api/console.html#consolewarndata-args)
- [Google Chromes Dokumentation zu `console.warn()`](https://developer.chrome.com/docs/devtools/console/api/#warn)
