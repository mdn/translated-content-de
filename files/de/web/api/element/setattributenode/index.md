---
title: "Element: Methode setAttributeNode()"
short-title: setAttributeNode()
slug: Web/API/Element/setAttributeNode
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("DOM") }}

Die **`setAttributeNode()`**-Methode der {{domxref("Element")}}-Schnittstelle fügt einen neuen {{domxref("Attr")}}-Knoten zu dem angegebenen Element hinzu.

Wenn Sie nicht mit dem Attributknoten arbeiten müssen (z. B. beim Klonen von einem anderen Element), bevor Sie ihn hinzufügen, können Sie stattdessen die {{domxref("Element.setAttribute()", "setAttribute()")}}-Methode verwenden.

## Syntax

```js-nolint
setAttributeNode(attribute)
```

### Parameter

- `attribute`
  - : Der {{domxref("Attr")}}-Knoten, der dem Element hinzugefügt werden soll.

### Rückgabewert

Der ersetzte Attributknoten, falls vorhanden, der von dieser Funktion zurückgegeben wird.

## Beispiele

Dieses Beispiel kopiert das `align`-Attribut von einem Element auf ein anderes.

### HTML

```html
<div id="one" align="left">one</div>
<div id="two">two</div>
```

### JavaScript

```js
let d1 = document.getElementById("one");
let d2 = document.getElementById("two");
let a = d1.getAttributeNode("align");

d2.setAttributeNode(a.cloneNode(true));

// Gibt zurück: 'left'
alert(d2.attributes[1].value);
```

## Hinweise

Wenn das benannte Attribut bereits auf dem Element existiert, wird dieses Attribut durch das neue ersetzt und das ersetzte Attribut wird zurückgegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.createAttribute()")}}
- {{domxref("Element.getAttributeNode()")}}
- {{domxref("Element.removeAttributeNode()")}}
