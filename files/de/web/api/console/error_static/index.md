---
title: "console: error() statische Methode"
short-title: error()
slug: Web/API/console/error_static
l10n:
  sourceCommit: 18a5b7e39a1cb4653207cc476c681120cc62d260
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.error()`** statische Methode gibt eine Nachricht an die Konsole auf der Protokollebene "Fehler" aus. Die Nachricht wird nur angezeigt, wenn die Konsole so konfiguriert ist, dass Fehlerausgaben angezeigt werden. In den meisten Fällen wird die Protokollebene innerhalb der Konsolen-Benutzeroberfläche konfiguriert. Die Nachricht kann als Fehler formatiert sein, mit roten Farben und Informationen zum Aufrufstapel.

## Syntax

```js-nolint
error(val1)
error(val1, /* …, */ valN)
error(msg)
error(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der Konsole in der angegebenen Reihenfolge mit einer gewissen Trennung zwischen ihnen ausgegeben. Es gibt einen Spezialfall, wenn `obj1` ein String ist, der nachfolgend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungsstrings enthält, die durch `subst1` bis `substN` in aufsteigender Reihenfolge bis zur Anzahl der Ersetzungsstrings ersetzt werden. Siehe [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungsstrings in `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungsstrings gibt, werden die zusätzlichen Werte nach der detaillierten Fehlermeldung in der Konsole auf die gleiche Weise wie bei fehlendem Formatstring selbst ausgegeben.

Weitere Details finden Sie unter [Textausgabe an die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von {{domxref("console")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation zu `console.error()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#error)
- [Node.JS-Dokumentation zu `console.error()`](https://nodejs.org/docs/latest/api/console.html#consoleerrordata-args)
- [Google Chromes Dokumentation zu `console.error()`](https://developer.chrome.com/docs/devtools/console/api/#error)
