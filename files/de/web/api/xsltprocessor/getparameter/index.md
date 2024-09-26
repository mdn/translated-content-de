---
title: "XSLTProcessor: Methode getParameter()"
short-title: getParameter()
slug: Web/API/XSLTProcessor/getParameter
l10n:
  sourceCommit: 80a9cc85c3f718386f709c22a9e01a2a5c74580d
---

{{APIRef("XSLT")}}

Die `getParameter()` Methode des {{domxref("XSLTProcessor")}} Interfaces gibt den Wert eines Parameters (`<xsl:param>`) aus dem im Prozessor importierten Stylesheet zurück.

## Syntax

```js-nolint
getParameter(namespaceURI, localName)
```

### Parameter

- `namespaceURI`
  - : Der Namespace, der mit dem Parameternamen verbunden ist. Ein ["null"](/de/docs/Web/JavaScript/Reference/Operators/null) Wert wird genauso wie der leere String (`""`) behandelt.
- `localName`
  - : Der Name des Parameters im zugehörigen Namespace.

### Rückgabewert

Ein Objekt, das der dem Parameter zugeordnete Wert ist. Es kann jeden Typ haben.

> [!NOTE]
> Firefox unterstützt jede Art von Parameter. Chrome, Edge und Safari unterstützen nur String-Parameter.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XSLTProcessor.setParameter()")}}
- {{domxref("XSLTProcessor.removeParameter()")}}
- {{domxref("XSLTProcessor.clearParameters()")}}
- {{domxref("XSLTProcessor.reset()")}}