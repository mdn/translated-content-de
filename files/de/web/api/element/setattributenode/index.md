---
title: "Element: setAttributeNode() Methode"
short-title: setAttributeNode()
slug: Web/API/Element/setAttributeNode
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("DOM") }}

Die **`setAttributeNode()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle fügt ein neues [`Attr`](/de/docs/Web/API/Attr) Knoten zum angegebenen Element hinzu.

Wenn Sie nicht mit dem Attributknoten arbeiten müssen (z.B. durch Kopieren von einem anderen Element), bevor Sie ihn hinzufügen, können Sie stattdessen die [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) Methode verwenden.

## Syntax

```js-nolint
setAttributeNode(attribute)
```

### Parameter

- `attribute`
  - : Der [`Attr`](/de/docs/Web/API/Attr) Knoten, der dem Element hinzugefügt werden soll.

### Rückgabewert

Der ersetzte Attributknoten, falls vorhanden, der von dieser Funktion zurückgegeben wird.

## Beispiele

Dieses Beispiel kopiert das `align` Attribut von einem Element zu einem anderen.

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

// Returns: 'left'
alert(d2.attributes[1].value);
```

## Anmerkungen

Wenn das benannte Attribut bereits auf dem Element existiert, wird dieses Attribut durch das neue ersetzt und das ersetzte Attribut wird zurückgegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.createAttribute()`](/de/docs/Web/API/Document/createAttribute)
- [`Element.getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode)
- [`Element.removeAttributeNode()`](/de/docs/Web/API/Element/removeAttributeNode)
