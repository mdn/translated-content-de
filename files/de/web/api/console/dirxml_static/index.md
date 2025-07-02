---
title: "console: dirxml() statische Methode"
short-title: dirxml()
slug: Web/API/console/dirxml_static
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

{{APIRef("Console API")}}

Die statische Methode **`console.dirxml()`** zeigt einen interaktiven Baum der untergeordneten Elemente des angegebenen XML/HTML-Elements an. Wenn es nicht möglich ist, es als Element anzuzeigen, wird stattdessen die JavaScript-Objektansicht gezeigt. Die Ausgabe wird als hierarchische Liste erweiterbarer Knoten präsentiert, die Ihnen ermöglicht, die Inhalte der Kindknoten zu sehen.

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

- [Microsoft Edges Dokumentation für `console.dirxml()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide/console/api#dirxml)
- [Node.js Dokumentation für `console.dirxml()`](https://nodejs.org/docs/latest/api/console.html#consoledirxmldata)
- [Google Chromes Dokumentation für `console.dirxml()`](https://developer.chrome.com/docs/devtools/console/api/#dirxml)
