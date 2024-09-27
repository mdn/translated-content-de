---
title: "Node: parentElement-Eigenschaft"
short-title: parentElement
slug: Web/API/Node/parentElement
l10n:
  sourceCommit: 8cdc8bb0ee320abf8a2f54a1a167d1a72ff8a2ca
---

{{APIRef("DOM")}}

Die schreibgeschützte **`parentElement`**-Eigenschaft der [`Node`](/de/docs/Web/API/Node)-Schnittstelle gibt das übergeordnete [`Element`](/de/docs/Web/API/Element) des DOM-Knotens zurück oder `null`, wenn der Knoten entweder kein übergeordnetes Element hat oder dessen übergeordnetes Element kein DOM-[`Element`](/de/docs/Web/API/Element) ist. [`Node.parentNode`](/de/docs/Web/API/Node/parentNode) hingegen gibt eine beliebige Art von übergeordnetem Element zurück, unabhängig von dessen Typ.

## Wert

Ein [`Element`](/de/docs/Web/API/Element), das das übergeordnete Element des aktuellen Knotens ist, oder `null`, falls es keines gibt.

## Beispiel

### Verwendung von parentElement

Dieses Beispiel setzt das übergeordnete Element von `node` so, dass es eine rote Textfarbe hat.

```js
if (node.parentElement) {
  node.parentElement.style.color = "red";
}
```

### parentElement ist null

`parentElement` kann `null` sein, wenn der Knoten kein übergeordnetes Element hat (zum Beispiel, weil es nicht mit einem Baum verbunden ist) oder wenn sein übergeordnetes Element kein `Element` ist. Andererseits gibt [`Node.parentNode`](/de/docs/Web/API/Node/parentNode) immer den übergeordneten Knoten zurück, der ein [`Document`](/de/docs/Web/API/Document) oder andere Knotentypen sein kann.

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

- [`Node.parentNode`](/de/docs/Web/API/Node/parentNode)
