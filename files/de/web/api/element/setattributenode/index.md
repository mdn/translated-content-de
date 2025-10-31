---
title: "Element: setAttributeNode() Methode"
short-title: setAttributeNode()
slug: Web/API/Element/setAttributeNode
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{ APIRef("DOM") }}

Die **`setAttributeNode()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle fügt einen neuen [`Attr`](/de/docs/Web/API/Attr) Knoten zu dem angegebenen Element hinzu.

Wenn Sie nicht mit dem Attributknoten arbeiten müssen (zum Beispiel Klonen von einem anderen Element) bevor Sie ihn hinzufügen, können Sie stattdessen die [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) Methode verwenden.

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

Dieses Beispiel kopiert das `lang` Attribut von einem Element zu einem anderen.

### HTML

```html
<div id="one" lang="en-US">one</div>
<div id="two">two</div>
```

### JavaScript

```js
const d1 = document.getElementById("one");
const d2 = document.getElementById("two");
const a = d1.getAttributeNode("lang");

d2.setAttributeNode(a.cloneNode(true));

// Returns: 'en-US'
console.log(d2.attributes[1].value);
```

## Hinweise

Wenn das benannte Attribut bereits auf dem Element existiert, wird dieses Attribut durch das neue ersetzt und das ersetzte Attribut wird zurückgegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.createAttribute()`](/de/docs/Web/API/Document/createAttribute)
- [`Element.getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode)
- [`Element.removeAttributeNode()`](/de/docs/Web/API/Element/removeAttributeNode)
