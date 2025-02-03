---
title: "console: debug() statische Methode"
short-title: debug()
slug: Web/API/console/debug_static
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.debug()`** gibt eine Nachricht auf der Konsole auf der Protokollebene "debug" aus. Die Nachricht wird dem Benutzer nur angezeigt, wenn die Konsole so konfiguriert ist, dass Debug-Ausgaben angezeigt werden. In den meisten Fällen wird die Protokollebene in der Benutzeroberfläche der Konsole konfiguriert. Diese Protokollebene kann der `Debug` oder `Verbose` Protokollebene entsprechen.

## Syntax

```js-nolint
console.debug(val1)
console.debug(val1, /* …, */ valN)
console.debug(msg)
console.debug(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge in der Konsole ausgegeben, mit einer Art Trennung zwischen jedem von ihnen. Es gibt einen Sonderfall, wenn `obj1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungsstrings enthält, die in aufeinanderfolgender Reihenfolge durch `subst1` bis `substN` ersetzt werden, bis zur Anzahl der Ersetzungsstrings. Sehen Sie sich [Verwenden von Zeichenkettenersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung an, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungsstrings innerhalb von `msg` ersetzt werden. Wenn es mehr Ersatzwerte als Ersetzungsstrings gibt, werden die zusätzlichen Werte nach der detaillierten Assert-Nachricht in der Konsole geschrieben, genauso wie wenn es keinen Format-String gibt.

Siehe [Ausgabe von Text auf der Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Dokumentation zu `console.debug()` von Microsoft Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#debug)
- [Node.js-Dokumentation zu `console.debug()`](https://nodejs.org/docs/latest/api/console.html#consoledebugdata-args)
- [Dokumentation zu `console.debug()` von Google Chrome](https://developer.chrome.com/docs/devtools/console/api/#debug)
