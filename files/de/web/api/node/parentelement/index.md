---
title: "Node: parentElement-Eigenschaft"
short-title: parentElement
slug: Web/API/Node/parentElement
l10n:
  sourceCommit: 8cdc8bb0ee320abf8a2f54a1a167d1a72ff8a2ca
---

{{APIRef("DOM")}}

Die schreibgeschützte **`parentElement`**-Eigenschaft des {{domxref("Node")}}-Interfaces gibt das übergeordnete {{DOMxRef("Element")}} des DOM-Knotens zurück, oder `null`, wenn der Knoten entweder kein übergeordnetes Element hat oder sein übergeordnetes Element kein DOM-{{DOMxRef("Element")}} ist. {{domxref("Node.parentNode")}} hingegen gibt jede Art von übergeordnetem Element zurück, unabhängig von dessen Typ.

## Wert

Ein {{domxref("Element")}}, das das übergeordnete Element des aktuellen Knotens ist, oder `null`, falls es keines gibt.

## Beispiel

### Nutzung von parentElement

Dieses Beispiel sorgt dafür, dass der Elternteil von `node` eine rote Textfarbe hat.

```js
if (node.parentElement) {
  node.parentElement.style.color = "red";
}
```

### parentElement ist null

`parentElement` kann `null` sein, wenn der Knoten keinen Elternteil hat (z.B. weil er nicht an einen Baum angehängt ist) oder sein Elternteil kein `Element` ist. Andererseits gibt {{domxref("Node.parentNode")}} immer den übergeordneten Knoten zurück, der ein {{domxref("Document")}} oder andere Knotentypen sein kann.

```html
<!doctype html>
<html>
  <body>
    <script>
      const html = document.querySelector("html");
      console.log(html.parentElement); // null
      console.log(html.parentNode); // document
    </script>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Node.parentNode")}}
