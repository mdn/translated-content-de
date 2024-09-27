---
title: "console: dirxml() statische Methode"
short-title: dirxml()
slug: Web/API/console/dirxml_static
l10n:
  sourceCommit: 2288418f34f0b8d29188010a7005b84d2157526f
---

{{APIRef("Console API")}}

Die **`console.dirxml()`** statische Methode zeigt einen interaktiven Baum der Nachkommenselemente des angegebenen XML/HTML-Elements an. Falls eine Darstellung als Element nicht möglich ist, wird stattdessen die JavaScript-Objektansicht angezeigt. Die Ausgabe wird als hierarchische Liste von erweiterbaren Knoten präsentiert, die es Ihnen ermöglichen, die Inhalte von Kindknoten zu sehen.

## Syntax

```js-nolint
dirxml(object)
```

### Parameter

- `object`
  - : Ein JavaScript-Objekt, dessen Eigenschaften ausgegeben werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Dokumentation von Microsoft Edge für `console.dirxml()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#dirxml)
- [Node.JS Dokumentation für `console.dirxml()`](https://nodejs.org/docs/latest/api/console.html#consoledirxmldata)
- [Google Chrome Dokumentation für `console.dirxml()`](https://developer.chrome.com/docs/devtools/console/api/#dirxml)
