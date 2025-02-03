---
title: "console: warn() statische Methode"
short-title: warn()
slug: Web/API/console/warn_static
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.warn()`** statische Methode gibt eine Warnmeldung auf der Konsole auf der Protokollebene "Warnung" aus. Die Meldung wird nur angezeigt, wenn die Konsole so konfiguriert ist, dass sie Warnungen ausgibt. In den meisten Fällen wird die Protokollebene innerhalb der Konsolen-Benutzeroberfläche konfiguriert. Die Meldung kann eine spezielle Formatierung erhalten, wie z.B. gelbe Farben und ein Warnsymbol.

## Syntax

```js-nolint
console.warn(val1)
console.warn(val1, /* …, */ valN)
console.warn(msg)
console.warn(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art Trennung dazwischen in der Konsole ausgegeben. Es gibt einen Sonderfall, wenn `obj1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungsstrings enthält, die in aufeinanderfolgender Reihenfolge durch `subst1` bis `substN` bis zur Anzahl der Ersetzungsstrings ersetzt werden. Sehen Sie sich [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung an, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungsstrings innerhalb von `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungsstrings gibt, werden die zusätzlichen Werte selbst nach der detaillierten Assert-Meldung in gleicher Weise wie ohne Format-String in die Konsole geschrieben.

Siehe [Textausgabe in die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Einzelheiten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge-Dokumentation für `console.warn()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#warn)
- [Node.js-Dokumentation für `console.warn()`](https://nodejs.org/docs/latest/api/console.html#consolewarndata-args)
- [Google Chrome-Dokumentation für `console.warn()`](https://developer.chrome.com/docs/devtools/console/api/#warn)
