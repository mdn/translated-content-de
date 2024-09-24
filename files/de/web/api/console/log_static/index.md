---
title: "console: log() statische Methode"
short-title: log()
slug: Web/API/console/log_static
l10n:
  sourceCommit: 18a5b7e39a1cb4653207cc476c681120cc62d260
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.log()`** gibt eine Nachricht an die Konsole aus.

## Syntax

```js-nolint
log(val1)
log(val1, /* …, */ valN)
log(msg)
log(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten zur Ausgabe. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art Trennung zwischen ihnen an die Konsole ausgegeben. Es gibt einen Sonderfall, wenn `obj1` eine Zeichenkette ist, die anschließend beschrieben wird.
- `msg`
  - : Eine JavaScript-Zeichenkette, die null oder mehr Ersetzungszeichenfolgen enthält, die in aufsteigender Reihenfolge von `subst1` bis `substN` ersetzt werden, entsprechend der Anzahl der Ersetzungszeichenfolgen. Siehe [Verwendung von Zeichenkettenersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungszeichenfolgen innerhalb von `msg` ersetzt werden. Wenn es mehr Ersatzwerte als Ersetzungszeichenfolgen gibt, werden die zusätzlichen Werte selbst nach der detaillierten Assert-Nachricht auf dieselbe Weise an die Konsole geschrieben wie bei einer Ausgabe ohne Formatzeichenfolge.

Siehe [Ausgabe von Text an die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von {{domxref("console")}} für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation für `console.log()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#log)
- [Node.JS-Dokumentation für `console.log()`](https://nodejs.org/docs/latest/api/console.html#consolelogdata-args)
- [Google Chromes Dokumentation für `console.log()`](https://developer.chrome.com/docs/devtools/console/api/#log)
