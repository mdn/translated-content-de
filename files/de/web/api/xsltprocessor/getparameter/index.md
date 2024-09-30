---
title: "XSLTProcessor: getParameter()-Methode"
short-title: getParameter()
slug: Web/API/XSLTProcessor/getParameter
l10n:
  sourceCommit: 80a9cc85c3f718386f709c22a9e01a2a5c74580d
---

{{APIRef("XSLT")}}

Die `getParameter()`-Methode der [`XSLTProcessor`](/de/docs/Web/API/XSLTProcessor)-Schnittstelle gibt den Wert eines Parameters (`<xsl:param>`) aus dem im Prozessor importierten Stylesheet zurück.

## Syntax

```js-nolint
getParameter(namespaceURI, localName)
```

### Parameter

- `namespaceURI`
  - : Der Namespace, der mit dem Parameternamen verknüpft ist. Ein ["null"](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird genauso behandelt wie der leere String (`""`).
- `localName`
  - : Der Name des Parameters im zugehörigen Namespace.

### Rückgabewert

Ein Objekt, das den mit dem Parameter verknüpften Wert darstellt. Es kann jeden Typ haben.

> [!NOTE]
> Firefox unterstützt jede Art von Parameter. Chrome, Edge und Safari unterstützen nur Zeichenfolgenparameter.

## Beispiele

### Verwendung von getParameter()

Dieses Beispiel zeigt, wie man `getParameter()` verwendet, um den Wert eines Parameters zu überprüfen, der das Verhalten einer XSLT-Transformation steuert.

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
