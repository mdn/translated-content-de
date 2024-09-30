---
title: "console: debug() statische Methode"
short-title: debug()
slug: Web/API/console/debug_static
l10n:
  sourceCommit: 18a5b7e39a1cb4653207cc476c681120cc62d260
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.debug()`** gibt eine Nachricht auf der Konsole auf der Protokollebene "debug" aus. Die Nachricht wird nur dem Benutzer angezeigt, wenn die Konsole so konfiguriert ist, dass sie Debug-Ausgaben anzeigt. In den meisten Fällen wird die Protokollebene in der Konsole UI konfiguriert. Diese Protokollebene kann der `Debug`- oder `Verbose`-Protokollebene entsprechen.

## Syntax

```js-nolint
debug(val1)
debug(val1, /* …, */ valN)
debug(msg)
debug(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten zur Ausgabe. Eine Darstellung jedes dieser Werte wird in der in der Liste angegebenen Reihenfolge auf die Konsole ausgegeben, wobei eine Art von Trennung zwischen ihnen erfolgt. Es gibt einen Sonderfall, wenn `obj1` eine Zeichenkette ist, der anschließend beschrieben wird.
- `msg`
  - : Eine JavaScript-Zeichenkette, die null oder mehr Ersetzungszeichenketten enthält, die in aufeinanderfolgender Reihenfolge mit `subst1` bis `substN` ersetzt werden, bis zur Anzahl der Ersetzungszeichenketten. Siehe [Verwendung von Zeichenkettenersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungszeichenketten innerhalb von `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungszeichenketten gibt, werden die zusätzlichen Werte selbst auf die Konsole geschrieben, nachrichtenspezifische Ausgabe ohne Formatzeichenkette.

Siehe [Ausgabe von Text an die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation zu `console.debug()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#debug)
- [Node.JS Dokumentation zu `console.debug()`](https://nodejs.org/docs/latest/api/console.html#consoledebugdata-args)
- [Google Chromes Dokumentation zu `console.debug()`](https://developer.chrome.com/docs/devtools/console/api/#debug)
