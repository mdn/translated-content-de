---
title: "Element: Methode setAttributeNodeNS()"
short-title: setAttributeNodeNS()
slug: Web/API/Element/setAttributeNodeNS
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("DOM") }}

Die **`setAttributeNodeNS()`**-Methode des {{domxref("Element")}}-Interfaces fügt einem Element einen neuen Namespaced-{{domxref("Attr")}}-Knoten hinzu.

Wenn Sie den Attributknoten (wie das Klonen von einem anderen Element) vor dem Hinzufügen nicht bearbeiten müssen, können Sie stattdessen die {{domxref("Element.setAttributeNS()", "setAttributeNS()")}}-Methode verwenden.

Wenn Sie mit HTML-Dokumenten arbeiten und das angeforderte Attribut nicht als Teil eines bestimmten Namespace spezifizieren müssen, verwenden Sie stattdessen die {{domxref("Element.setAttribute()", "setAttribute()")}}-Methode.

## Syntax

```js-nolint
setAttributeNodeNS(attributeNode)
```

### Parameter

- `attributeNode`
  - : Der hinzuzufügende {{domxref("Attr")}}-Knoten zum Element.

### Rückgabewert

Der ersetzte Attributknoten, falls vorhanden, wird von dieser Funktion zurückgegeben.

## Beispiele

```js
// <div id="one" xmlns:myNS="http://www.mozilla.org/ns/specialspace"
//            myNS:special-align="utterleft">one</div>
// <div id="two">two</div>

const myns = "http://www.mozilla.org/ns/specialspace";
const d1 = document.getElementById("one");
const d2 = document.getElementById("two");
const a = d1.getAttributeNodeNS(myns, "special-align");
d2.setAttributeNodeNS(a.cloneNode(true));
alert(d2.attributes[1].value); // gibt zurück: `utterleft'
```

## Hinweise

Wenn das angegebene Attribut bereits auf dem Element existiert, wird dieses Attribut durch das neue ersetzt und das ersetzte wird zurückgegeben.

Beachten Sie, dass Sie, wenn Sie versuchen, ohne Klonen den Knoten zu setzen, möglicherweise einen `NS_ERROR_DOM_INUSE_ATTRIBUTE_ERR` "Attribut bereits in Benutzung" Fehler sehen, da das DOM das Klonen für {{domxref("Attr")}} erfordert, um wiederverwendet zu werden (im Gegensatz zu anderen Knoten, die bewegt werden können).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.createAttribute()")}}
- {{domxref("Document.createAttributeNS()")}}
- {{domxref("Element.getAttributeNodeNS()")}}
