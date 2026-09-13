---
title: "Element: getAttributeNodeNS() Methode"
short-title: getAttributeNodeNS()
slug: Web/API/Element/getAttributeNodeNS
l10n:
  sourceCommit: f22f67069495dc37e550e354913d4ca984f5a4b0
---

{{APIRef("DOM")}}

Die **`getAttributeNodeNS()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle gibt das angegebene namespacete Attribut des angegebenen Elements als ein [`Attr`](/de/docs/Web/API/Attr) Knoten zurück. Sie gibt `null` zurück, wenn das Element kein Attribut mit dem angegebenen Namen im Namespace hat.

Diese Methode ist nützlich, wenn Sie die Instanzeigenschaften des namespaceten Attributs benötigen. Wenn Sie nur den Wert des namespaceten Attributs benötigen, können Sie stattdessen die [`getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS) Methode verwenden.

Wenn Sie mit HTML-Dokumenten arbeiten und das angeforderte Attribut nicht als Teil eines bestimmten Namespaces angeben müssen, verwenden Sie stattdessen die [`getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode) Methode.

## Syntax

```js-nolint
getAttributeNodeNS(namespace, localName)
```

### Parameter

- `namespace`
  - : Ein String, der den Namespace des Attributs angibt, oder `null` für keinen expliziten Namespace.
- `localName`
  - : Ein String, der den Namen des Attributs angibt.

### Rückgabewert

Ein `Attr` Knoten für das Attribut oder `null`, wenn das Element kein Attribut mit dem angegebenen Namen im Namespace hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.createAttribute()`](/de/docs/Web/API/Document/createAttribute)
- [`Document.createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS)
- [`Element.setAttributeNodeNS()`](/de/docs/Web/API/Element/setAttributeNodeNS)
