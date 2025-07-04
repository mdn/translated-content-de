---
title: "console: dirxml() statische Methode"
short-title: dirxml()
slug: Web/API/console/dirxml_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}}

Die **`console.dirxml()`** statische Methode zeigt eine interaktive Baumstruktur der untergeordneten Elemente des angegebenen XML/HTML-Elements an. Falls es nicht möglich ist, es als Element darzustellen, wird stattdessen die JavaScript-Objektansicht angezeigt. Die Ausgabe wird als hierarchische Liste von erweiterbaren Knoten präsentiert, die es Ihnen ermöglichen, die Inhalte der untergeordneten Knoten zu sehen.

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

- [Microsoft Edge-Dokumentation für `console.dirxml()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#dirxml)
- [Node.js-Dokumentation für `console.dirxml()`](https://nodejs.org/docs/latest/api/console.html#consoledirxmldata)
- [Google Chrome-Dokumentation für `console.dirxml()`](https://developer.chrome.com/docs/devtools/console/api/#dirxml)
