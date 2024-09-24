---
title: "console: warn() statische Methode"
short-title: warn()
slug: Web/API/console/warn_static
l10n:
  sourceCommit: 18a5b7e39a1cb4653207cc476c681120cc62d260
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.warn()`** statische Methode gibt eine Warnmeldung auf der Konsole aus, die auf der Log-Stufe "Warnung" angezeigt wird. Die Nachricht wird dem Benutzer nur dann angezeigt, wenn die Konsole so konfiguriert ist, dass sie Warnmeldungen anzeigt. In den meisten Fällen wird die Log-Stufe innerhalb der Konsolen-Benutzeroberfläche konfiguriert. Die Nachricht kann ein spezielles Format erhalten, wie z.B. gelbe Farben und ein Warnsymbol.

## Syntax

```js-nolint
warn(val1)
warn(val1, /* …, */ valN)
warn(msg)
warn(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten zur Ausgabe. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge in die Konsole ausgegeben, mit einer Art Trennung zwischen ihnen. Es gibt einen Sonderfall, wenn `obj1` ein String ist, der nachfolgend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungsstrings enthält, die in aufeinanderfolgender Reihenfolge mit `subst1` bis `substN` ersetzt werden, bis zur Anzahl der Ersetzungsstrings. Siehe [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungsstrings innerhalb von `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungsstrings gibt, werden die zusätzlichen Werte in gleicher Weise in die Konsole geschrieben, wie wenn es keinen Formatstring gibt, nach der detaillierten Assertion-Meldung.

Weitere Details finden Sie unter [Textausgabe in die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von {{domxref("console")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation zu `console.warn()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#warn)
- [Node.JS Dokumentation zu `console.warn()`](https://nodejs.org/docs/latest/api/console.html#consolewarndata-args)
- [Google Chromes Dokumentation zu `console.warn()`](https://developer.chrome.com/docs/devtools/console/api/#warn)
