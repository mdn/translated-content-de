---
title: "console: dirxml() statische Methode"
short-title: dirxml()
slug: Web/API/console/dirxml_static
l10n:
  sourceCommit: f2372e442803696ba0fe1c9804096065f2b42824
---

{{APIRef("Console API")}}

Die statische Methode **`console.dirxml()`** zeigt einen interaktiven Baum der Nachfahrelemente des angegebenen XML/HTML-Elements an. Wenn es nicht möglich ist, es als Element darzustellen, wird die JavaScript-Objektansicht stattdessen angezeigt. Die Ausgabe wird als hierarchische Liste von erweiterbaren Knoten präsentiert, die es Ihnen ermöglichen, den Inhalt von Kindknoten zu sehen.

## Syntax

```js-nolint
console.dirxml(object)
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

- [Microsoft Edges Dokumentation für `console.dirxml()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#dirxml)
- [Node.JS Dokumentation für `console.dirxml()`](https://nodejs.org/docs/latest/api/console.html#consoledirxmldata)
- [Google Chromes Dokumentation für `console.dirxml()`](https://developer.chrome.com/docs/devtools/console/api/#dirxml)
