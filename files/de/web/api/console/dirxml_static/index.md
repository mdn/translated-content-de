---
title: "console: dirxml() statische Methode"
short-title: dirxml()
slug: Web/API/console/dirxml_static
l10n:
  sourceCommit: 2288418f34f0b8d29188010a7005b84d2157526f
---

{{APIRef("Console API")}}

Die **`console.dirxml()`** statische Methode zeigt einen interaktiven Baum der Nachkommenelemente des angegebenen XML/HTML-Elements an. Wenn es nicht möglich ist, es als Element anzuzeigen, wird stattdessen die JavaScript-Objektansicht gezeigt. Die Ausgabe wird als hierarchische Liste erweiterbarer Knoten präsentiert, die es Ihnen ermöglicht, die Inhalte von Kindknoten zu sehen.

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

- [Microsoft Edge-Dokumentation für `console.dirxml()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#dirxml)
- [Node.JS-Dokumentation für `console.dirxml()`](https://nodejs.org/docs/latest/api/console.html#consoledirxmldata)
- [Google Chrome-Dokumentation für `console.dirxml()`](https://developer.chrome.com/docs/devtools/console/api/#dirxml)
