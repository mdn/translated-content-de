---
title: "Element: setAttributeNodeNS()-Methode"
short-title: setAttributeNodeNS()
slug: Web/API/Element/setAttributeNodeNS
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("DOM") }}

Die **`setAttributeNodeNS()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle fügt einem Element einen neuen namensraumdefinierten [`Attr`](/de/docs/Web/API/Attr)-Knoten hinzu.

Wenn Sie nicht mit dem Attributknoten arbeiten müssen (beispielsweise beim Klonen von einem anderen Element), bevor Sie ihn hinzufügen, können Sie stattdessen die [`setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS)-Methode verwenden.

Wenn Sie mit HTML-Dokumenten arbeiten und das angeforderte Attribut nicht als Teil eines bestimmten Namensraums angeben müssen, verwenden Sie stattdessen die [`setAttribute()`](/de/docs/Web/API/Element/setAttribute)-Methode.

## Syntax

```js-nolint
setAttributeNodeNS(attributeNode)
```

### Parameter

- `attributeNode`
  - : Der [`Attr`](/de/docs/Web/API/Attr)-Knoten, der dem Element hinzugefügt werden soll.

### Rückgabewert

Der ersetzte Attributknoten, falls vorhanden, der von dieser Funktion zurückgegeben wird.

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
alert(d2.attributes[1].value); // returns: `utterleft'
```

## Hinweise

Wenn das angegebene Attribut bereits auf dem Element existiert, wird dieses Attribut durch das neue ersetzt und das ersetzte Attribut wird zurückgegeben.

Beachten Sie, dass, wenn Sie versuchen, ohne das Klonen des Knotens zu setzen, der Fehler `NS_ERROR_DOM_INUSE_ATTRIBUTE_ERR` "Attribut bereits in Benutzung" angezeigt werden könnte, da das DOM das Klonen für die Wiederverwendung von [`Attr`](/de/docs/Web/API/Attr) erfordert (im Gegensatz zu anderen Knoten, die verschoben werden können).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.createAttribute()`](/de/docs/Web/API/Document/createAttribute)
- [`Document.createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS)
- [`Element.getAttributeNodeNS()`](/de/docs/Web/API/Element/getAttributeNodeNS)
