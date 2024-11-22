---
title: "console: dirxml() statische Methode"
short-title: dirxml()
slug: Web/API/console/dirxml_static
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{APIRef("Console API")}}

Die **`console.dirxml()`** statische Methode zeigt einen interaktiven Baum der Nachfahren-Elemente des angegebenen XML/HTML-Elements an. Wenn es nicht möglich ist, es als Element anzuzeigen, wird stattdessen die JavaScript-Objektansicht angezeigt. Die Ausgabe wird als hierarchische Liste von erweiterbaren Knoten präsentiert, die es Ihnen ermöglicht, die Inhalte von Kindknoten zu sehen.

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

- [Microsoft Edges Dokumentation zu `console.dirxml()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#dirxml)
- [Node.js Dokumentation zu `console.dirxml()`](https://nodejs.org/docs/latest/api/console.html#consoledirxmldata)
- [Google Chromes Dokumentation zu `console.dirxml()`](https://developer.chrome.com/docs/devtools/console/api/#dirxml)
