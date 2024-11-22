---
title: "console: error() statische Methode"
short-title: error()
slug: Web/API/console/error_static
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.error()`** statische Methode gibt eine Nachricht in der Konsole auf dem Protokollebene "Fehler" aus. Die Nachricht wird dem Benutzer nur angezeigt, wenn die Konsole so konfiguriert ist, dass sie Fehlerausgaben anzeigt. In den meisten Fällen wird das Protokollebene in der Benutzeroberfläche der Konsole konfiguriert. Die Nachricht kann als Fehler formatiert sein, mit roten Farben und Informationen zum Aufrufstapel.

## Syntax

```js-nolint
console.error(val1)
console.error(val1, /* …, */ valN)
console.error(msg)
console.error(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der Konsole in der angegebenen Reihenfolge mit einer Art von Trennung zwischen ihnen ausgegeben. Es gibt einen Sonderfall, wenn `obj1` eine Zeichenkette ist, der im Folgenden beschrieben wird.
- `msg`
  - : Eine JavaScript-Zeichenkette, die null oder mehr Ersetzungszeichenketten enthält, die durch `subst1` bis `substN` in aufeinanderfolgender Reihenfolge entsprechend der Anzahl der Ersetzungszeichenketten ersetzt werden. Informationen darüber, wie Ersetzungen funktionieren, finden Sie unter [Verwendung von Zeichenkettenersetzungen](/de/docs/Web/API/console#using_string_substitutions).
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungszeichenketten innerhalb von `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungszeichenketten gibt, werden die zusätzlichen Werte selbst in der Konsole ausgegeben, nachdem die detaillierte Fehlermeldung im gleichen Stil wie ohne Formatzeichenkette ausgegeben wurde.

Siehe [Ausgabe von Text in die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge-Dokumentation für `console.error()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#error)
- [Node.js-Dokumentation für `console.error()`](https://nodejs.org/docs/latest/api/console.html#consoleerrordata-args)
- [Google Chrome-Dokumentation für `console.error()`](https://developer.chrome.com/docs/devtools/console/api/#error)
