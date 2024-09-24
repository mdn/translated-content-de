---
title: "Element: getAttributeNodeNS()-Methode"
short-title: getAttributeNodeNS()
slug: Web/API/Element/getAttributeNodeNS
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("DOM") }}

Die **`getAttributeNodeNS()`**-Methode des {{domxref("Element")}} Interfaces gibt den namensraumbezogenen {{domxref("Attr")}}-Knoten eines Elements zurück.

Diese Methode ist nützlich, wenn Sie die Instanzeigenschaften eines namensraumbezogenen Attributs benötigen. Wenn Sie nur den Wert des namensraumbezogenen Attributs benötigen, können Sie stattdessen die {{domxref("Element.getAttributeNS()", "getAttributeNS()")}}-Methode verwenden.

Wenn Sie den {{domxref("Attr")}}-Knoten eines Elements in HTML-Dokumenten benötigen und das Attribut nicht namensraumbezogen ist, verwenden Sie stattdessen die {{domxref("Element.getAttributeNode()", "getAttributeNode()")}}-Methode.

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

`getAttributeNodeNS` ist spezifischer als [getAttributeNode](/de/docs/Web/API/Element/getAttributeNode), da es Ihnen ermöglicht, Attribute anzugeben, die Teil eines bestimmten Namespaces sind. Die entsprechende Settermethode ist [setAttributeNodeNS](/de/docs/Web/API/Element/setAttributeNodeNS).

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("Document.createAttribute()")}}
- {{domxref("Document.createAttributeNS()")}}
- {{domxref("Element.setAttributeNodeNS()")}}
