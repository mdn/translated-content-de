---
title: "console: debug() statische Methode"
short-title: debug()
slug: Web/API/console/debug_static
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.debug()`** statische Methode gibt eine Nachricht mit dem Protokollierungslevel "debug" an die Konsole aus. Die Nachricht wird nur angezeigt, wenn die Konsole so konfiguriert ist, dass sie Debug-Ausgaben anzeigt. In den meisten Fällen wird das Protokollierungslevel in der Benutzeroberfläche der Konsole konfiguriert. Dieses Protokollierungslevel könnte dem `Debug`- oder `Verbose`-Level entsprechen.

## Syntax

```js-nolint
console.debug(val1)
console.debug(val1, /* …, */ valN)
console.debug(msg)
console.debug(msg, subst1, /* …, */ substN)
```

### Parameter

- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird der Konsole in der angegebenen Reihenfolge mit einer Art Trennung zwischen ihnen ausgegeben. Es gibt einen Sonderfall, wenn `obj1` ein String ist, der nachfolgend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungsstrings enthält, die in aufeinanderfolgender Reihenfolge durch `subst1` bis `substN` ersetzt werden, bis zur Anzahl der Ersetzungsstrings. Siehe [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungsstrings innerhalb von `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungsstrings gibt, werden die zusätzlichen Werte selbst der Konsole nach der detaillierten Assertionsnachricht auf die gleiche Weise geschrieben, wie wenn es keinen Formatstring gibt.

Siehe [Textausgabe an die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation zu `console.debug()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#debug)
- [Node.js Dokumentation zu `console.debug()`](https://nodejs.org/docs/latest/api/console.html#consoledebugdata-args)
- [Google Chromes Dokumentation zu `console.debug()`](https://developer.chrome.com/docs/devtools/console/api/#debug)
