---
title: "console: warn() statische Methode"
short-title: warn()
slug: Web/API/console/warn_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.warn()`** gibt eine Warnmeldung auf der Konsole auf der "warning"-Log-Stufe aus. Die Meldung wird nur angezeigt, wenn die Konsole so konfiguriert ist, dass Warnmeldungen angezeigt werden. In den meisten Fällen wird die Log-Stufe innerhalb der Konsole-UI konfiguriert. Die Meldung kann eine spezielle Formatierung erhalten, wie z.B. gelbe Farben und ein Warnsymbol.

## Syntax

```js-nolint
console.warn(val1)
console.warn(val1, /* …, */ valN)
console.warn(msg)
console.warn(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art Trennung zwischen ihnen auf der Konsole ausgegeben. Es gibt einen Sonderfall, wenn `val1` ein String ist, der nachfolgend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungs-Strings enthält, die nacheinander mit `subst1` bis `substN` entsprechend der Anzahl der Ersetzungs-Strings ersetzt werden. Siehe [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungs-Strings innerhalb von `msg` ersetzt werden sollen. Wenn es mehr Ersetzungswerte als Ersetzungs-Strings gibt, werden die zusätzlichen Werte nach der detaillierten Fehlermeldung in derselben Weise wie bei fehlendem Format-String selbst auf der Konsole ausgegeben.

Weitere Informationen finden Sie unter [Ausgabe von Text auf der Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/console).

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation für `console.warn()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#warn)
- [Node.js-Dokumentation für `console.warn()`](https://nodejs.org/docs/latest/api/console.html#consolewarndata-args)
- [Google Chromes Dokumentation für `console.warn()`](https://developer.chrome.com/docs/devtools/console/api/#warn)
