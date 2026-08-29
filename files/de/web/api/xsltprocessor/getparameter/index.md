---
title: "XSLTProcessor: Methode getParameter()"
short-title: getParameter()
slug: Web/API/XSLTProcessor/getParameter
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{APIRef("DOM")}}

Die `getParameter()`-Methode der [`XSLTProcessor`](/de/docs/Web/API/XSLTProcessor)-Schnittstelle gibt den Wert eines Parameters (`<xsl:param>`) aus dem im Prozessor importierten Stylesheet zurück.

## Syntax

```js-nolint
getParameter(namespaceURI, localName)
```

### Parameter

- `namespaceURI`
  - : Der Namespace, der mit dem Parameternamen assoziiert ist. Ein ["null"](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird wie ein leerer String (`""`) behandelt.
- `localName`
  - : Der Name des Parameters im zugehörigen Namespace.

### Rückgabewert

Ein Objekt, das mit dem Parameter assoziiert ist. Es kann jeden Typ haben.

> [!NOTE]
> Firefox unterstützt jeden Parameter-Typ. Chrome, Edge und Safari unterstützen nur Parameter vom Typ String.

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
