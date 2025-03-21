---
title: "console: warn() statische Methode"
short-title: warn()
slug: Web/API/console/warn_static
l10n:
  sourceCommit: 7ed236277b061eb99a7ff66313aa068b9ffe69e5
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.warn()`** gibt eine Warnmeldung auf der Konsole aus, und zwar auf der Protokollebene "Warnung". Die Meldung wird dem Benutzer nur angezeigt, wenn die Konsole so konfiguriert ist, dass Warnmeldungen ausgegeben werden. In den meisten Fällen wird die Protokollebene in der Benutzeroberfläche der Konsole konfiguriert. Die Meldung kann eine spezielle Formatierung erhalten, wie z. B. gelbe Farben und ein Warnsymbol.

## Syntax

```js-nolint
console.warn(val1)
console.warn(val1, /* …, */ valN)
console.warn(msg)
console.warn(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der Konsole in der angegebenen Reihenfolge ausgegeben, wobei eine Art Trennung zwischen ihnen erfolgt. Es gibt einen speziellen Fall, wenn `val1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungszeichenketten enthält, die in aufeinanderfolgender Reihenfolge durch `subst1` bis `substN` ersetzt werden, bis zur Anzahl der Ersetzungszeichenketten. Sehen Sie sich [Verwendung von Zeichenkettenersetzungen](/de/docs/Web/API/console#using_string_substitutions) an, um zu verstehen, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, die zur Ersetzung von Zeichenketten innerhalb von `msg` verwendet werden. Wenn es mehr Ersetzungswerte als Ersetzungszeichenketten gibt, werden die zusätzlichen Werte selbst nach der detaillierten Meldung ohne Formatierung auf dieselbe Weise in die Konsole geschrieben, wie wenn kein Formatstring vorhanden ist.

Für weitere Details siehe [Ausgabe von Text in die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/console).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation zu `console.warn()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#warn)
- [Node.js Dokumentation zu `console.warn()`](https://nodejs.org/docs/latest/api/console.html#consolewarndata-args)
- [Google Chromes Dokumentation zu `console.warn()`](https://developer.chrome.com/docs/devtools/console/api/#warn)
