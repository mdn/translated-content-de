---
title: "Node: parentElement-Eigenschaft"
short-title: parentElement
slug: Web/API/Node/parentElement
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{APIRef("DOM")}}

Die schreibgeschützte **`parentElement`**-Eigenschaft der [`Node`](/de/docs/Web/API/Node)-Schnittstelle
gibt das übergeordnete [`Element`](/de/docs/Web/API/Element) des DOM-Knotens zurück oder `null`, wenn der Knoten entweder kein Elternteil hat oder sein Elternteil kein DOM-`[`Element`](/de/docs/Web/API/Element)` ist. [`Node.parentNode`](/de/docs/Web/API/Node/parentNode) hingegen gibt jede Art von übergeordnetem Element zurück, unabhängig von dessen Typ.

## Wert

Ein [`Element`](/de/docs/Web/API/Element), das das übergeordnete Element des aktuellen Knotens ist,
oder `null`, wenn keines vorhanden ist.

## Beispiel

### Verwendung von parentElement

Dieses Beispiel setzt das übergeordnete Element von `node` auf eine rote Textfarbe.

```js
if (node.parentElement) {
  node.parentElement.style.color = "red";
}
```

### parentElement ist null

`parentElement` kann `null` sein, wenn der Knoten kein übergeordnetes Element hat (zum Beispiel, weil er nicht an einen Baum angeschlossen ist) oder sein Elternteil kein `Element` ist. Andererseits gibt [`Node.parentNode`](/de/docs/Web/API/Node/parentNode) immer den Elternknoten zurück, der ein [`Document`](/de/docs/Web/API/Document) oder andere Knotentypen sein kann.

```html
<!doctype html>
<html lang="en-US">
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
