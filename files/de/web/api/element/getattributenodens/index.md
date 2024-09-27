---
title: "Element: getAttributeNodeNS() Methode"
short-title: getAttributeNodeNS()
slug: Web/API/Element/getAttributeNodeNS
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("DOM") }}

Die **`getAttributeNodeNS()`** Methode des [`Element`](/de/docs/Web/API/Element) Interface gibt den namespacedefinierten [`Attr`](/de/docs/Web/API/Attr) Knoten eines Elements zurück.

Diese Methode ist nützlich, wenn Sie die Instanzeigenschaften des namespacedefinierten Attributs benötigen. Wenn Sie nur den Wert des namespacedefinierten Attributs benötigen, können Sie stattdessen die [`getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS) Methode verwenden.

Wenn Sie den [`Attr`](/de/docs/Web/API/Attr) Knoten eines Elements in HTML-Dokumenten benötigen und das Attribut nicht namespacedefiniert ist, verwenden Sie stattdessen die [`getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode) Methode.

## Syntax

```js-nolint
getAttributeNodeNS(namespace, nodeName)
```

### Parameter

- `namespace`
  - : Ein String, der den Namespace des Attributs angibt.
- `nodeName`
  - : Ein String, der den Namen des Attributs angibt.

### Rückgabewert

Der Knoten für das angegebene Attribut.

## Hinweise

`getAttributeNodeNS` ist spezifischer als [getAttributeNode](/de/docs/Web/API/Element/getAttributeNode), da es Ihnen erlaubt, Attribute anzugeben, die Teil eines bestimmten Namespaces sind. Die entsprechende Setzermethode ist [setAttributeNodeNS](/de/docs/Web/API/Element/setAttributeNodeNS).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.createAttribute()`](/de/docs/Web/API/Document/createAttribute)
- [`Document.createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS)
- [`Element.setAttributeNodeNS()`](/de/docs/Web/API/Element/setAttributeNodeNS)
