---
title: "XSLTProcessor: getParameter() Methode"
short-title: getParameter()
slug: Web/API/XSLTProcessor/getParameter
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("DOM")}}

Die `getParameter()` Methode des [`XSLTProcessor`](/de/docs/Web/API/XSLTProcessor) Interfaces gibt den Wert eines Parameters (`<xsl:param>`) aus dem im Prozessor importierten Stylesheet zurück.

## Syntax

```js-nolint
getParameter(namespaceURI, localName)
```

### Parameter

- `namespaceURI`
  - : Der Namensraum, der mit dem Parameternamen verknüpft ist. Ein ["null"](/de/docs/Web/JavaScript/Reference/Operators/null) Wert wird genauso behandelt wie der leere String (`""`).
- `localName`
  - : Der Name des Parameters im zugehörigen Namensraum.

### Rückgabewert

Ein Objekt, das den mit dem Parameter verknüpften Wert darstellt. Es kann von jedem Typ sein.

> [!NOTE]
> Firefox unterstützt jeden Parametertyp. Chrome, Edge und Safari unterstützen nur String-Parameter.

## Beispiele

### Verwendung von getParameter()

Dieses Beispiel zeigt, wie `getParameter()` verwendet wird, um den Wert eines Parameters zu überprüfen, der das Verhalten einer XSLT-Transformation steuert.

```js
const xsltProcessor = new XSLTProcessor();
xsltProcessor.setParameter(null, "foo", "bar");
console.log(xsltProcessor.getParameter(null, "foo")); // "bar"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XSLTProcessor.setParameter()`](/de/docs/Web/API/XSLTProcessor/setParameter)
- [`XSLTProcessor.removeParameter()`](/de/docs/Web/API/XSLTProcessor/removeParameter)
- [`XSLTProcessor.clearParameters()`](/de/docs/Web/API/XSLTProcessor/clearParameters)
- [`XSLTProcessor.reset()`](/de/docs/Web/API/XSLTProcessor/reset)
