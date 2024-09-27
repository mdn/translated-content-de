---
title: "console: info() statische Methode"
short-title: info()
slug: Web/API/console/info_static
l10n:
  sourceCommit: 18a5b7e39a1cb4653207cc476c681120cc62d260
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.info()`** statische Methode gibt eine Nachricht auf der Konsole auf der Protokollebene "info" aus. Die Nachricht wird dem Benutzer nur angezeigt, wenn die Konsole so konfiguriert ist, dass die Info-Ausgabe angezeigt wird. In den meisten Fällen wird die Protokollebene in der Konsolen-Benutzeroberfläche konfiguriert. Die Nachricht kann eine spezielle Formatierung erhalten, wie zum Beispiel ein kleines "i"-Symbol daneben.

## Syntax

```js-nolint
info(val1)
info(val1, /* …, */ valN)
info(msg)
info(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der angegebenen Reihenfolge mit einer Art von Trennung zwischen ihnen auf der Konsole ausgegeben. Es gibt einen Sonderfall, wenn `obj1` eine Zeichenkette ist, der anschließend beschrieben wird.
- `msg`
  - : Eine JavaScript-Zeichenkette, die null oder mehr Ersetzungszeichenfolgen enthält, die nacheinander mit `subst1` bis `substN` ersetzt werden, bis zur Anzahl der Ersetzungszeichenfolgen. Siehe [Verwendung von Zeichenkettenersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungszeichenfolgen innerhalb von `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungszeichenfolgen gibt, werden die zusätzlichen Werte selbst auf die Konsole geschrieben, nach der detaillierten Behauptungsnachricht, auf die gleiche Weise wie, wenn es keine Formatzeichenkette gibt.

Siehe [Ausgabe von Text an die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation für `console.info()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#info)
- [Node.JS Dokumentation für `console.info()`](https://nodejs.org/docs/latest/api/console.html#consoleinfodata-args)
- [Google Chromes Dokumentation für `console.info()`](https://developer.chrome.com/docs/devtools/console/api/#info)
