---
title: "console: dirxml() statische Methode"
short-title: dirxml()
slug: Web/API/console/dirxml_static
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Console API")}}

Die statische Methode **`console.dirxml()`** zeigt einen interaktiven Baum der Nachfahrelemente des angegebenen XML/HTML-Elements an. Wenn es nicht möglich ist, es als Element anzuzeigen, wird stattdessen die JavaScript-Objektansicht gezeigt. Die Ausgabe wird als hierarchische Liste von erweiterbaren Knoten präsentiert, die es Ihnen ermöglicht, den Inhalt der Kindknoten zu sehen.

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
- [Node.js Dokumentation für `console.dirxml()`](https://nodejs.org/docs/latest/api/console.html#consoledirxmldata)
- [Google Chromes Dokumentation für `console.dirxml()`](https://developer.chrome.com/docs/devtools/console/api/#dirxml)
