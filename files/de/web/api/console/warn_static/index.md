---
title: "console: warn() statische Methode"
short-title: warn()
slug: Web/API/console/warn_static
l10n:
  sourceCommit: 18a5b7e39a1cb4653207cc476c681120cc62d260
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.warn()`** gibt eine Warnmeldung auf der Konsole auf der Log-Ebene "warning" aus. Die Nachricht wird nur dann dem Benutzer angezeigt, wenn die Konsole so konfiguriert ist, dass sie Warnmeldungen anzeigt. In den meisten Fällen wird das Log-Level innerhalb der Konsole UI konfiguriert. Die Nachricht kann eine spezielle Formatierung erhalten, wie zum Beispiel gelbe Farben und ein Warnsymbol.

## Syntax

```js-nolint
warn(val1)
warn(val1, /* …, */ valN)
warn(msg)
warn(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art von Trennung dazwischen auf der Konsole ausgegeben. Es gibt einen speziellen Fall, wenn `obj1` ein String ist, der nachfolgend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungszeichenfolgen enthält, die nacheinander mit `subst1` bis `substN` ersetzt werden, bis zur Anzahl der Ersetzungszeichenfolgen. Siehe [Verwendung von Zeichenfolgenersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen die Ersetzungszeichenfolgen innerhalb von `msg` ersetzt werden. Gibt es mehr Ersetzungswerte als Ersetzungszeichenfolgen, werden die zusätzlichen Werte selbst nach der detaillierten Fehlermeldung auf der Konsole ausgegeben, in derselben Weise, wie wenn es keine Formatzeichenfolge gibt.

Siehe [Ausgabe von Text auf der Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Dokumentation von Microsoft Edge für `console.warn()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#warn)
- [Node.JS Dokumentation für `console.warn()`](https://nodejs.org/docs/latest/api/console.html#consolewarndata-args)
- [Dokumentation von Google Chrome für `console.warn()`](https://developer.chrome.com/docs/devtools/console/api/#warn)
