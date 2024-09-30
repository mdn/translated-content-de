---
title: "Element: Methode getAttributeNodeNS()"
short-title: getAttributeNodeNS()
slug: Web/API/Element/getAttributeNodeNS
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("DOM") }}

Die **`getAttributeNodeNS()`** Methode des [`Element`](/de/docs/Web/API/Element) Interfaces gibt den namensraumbezogenen [`Attr`](/de/docs/Web/API/Attr) Knoten eines Elements zurück.

Diese Methode ist nützlich, wenn Sie die Instanzeigenschaften des namensraumbezogenen Attributs benötigen. Wenn Sie nur den Wert des namensraumbezogenen Attributs benötigen, können Sie stattdessen die [`getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS) Methode verwenden.

Wenn Sie den [`Attr`](/de/docs/Web/API/Attr) Knoten eines Elements in HTML-Dokumenten benötigen und das Attribut nicht namensraumbezogen ist, verwenden Sie stattdessen die [`getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode) Methode.

## Syntax

```js-nolint
getAttributeNodeNS(namespace, nodeName)
```

### Parameter

- `namespace`
  - : Ein String, der den Namensraum des Attributs angibt.
- `nodeName`
  - : Ein String, der den Namen des Attributs angibt.

### Rückgabewert

Der Knoten für das angegebene Attribut.

## Hinweise

`getAttributeNodeNS` ist spezifischer als [getAttributeNode](/de/docs/Web/API/Element/getAttributeNode), da es Ihnen erlaubt, Attribute zu spezifizieren, die Teil eines bestimmten Namensraums sind. Die entsprechende Setter-Methode ist [setAttributeNodeNS](/de/docs/Web/API/Element/setAttributeNodeNS).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.createAttribute()`](/de/docs/Web/API/Document/createAttribute)
- [`Document.createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS)
- [`Element.setAttributeNodeNS()`](/de/docs/Web/API/Element/setAttributeNodeNS)
