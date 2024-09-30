---
title: "Node: parentElement-Eigenschaft"
short-title: parentElement
slug: Web/API/Node/parentElement
l10n:
  sourceCommit: 8cdc8bb0ee320abf8a2f54a1a167d1a72ff8a2ca
---

{{APIRef("DOM")}}

Die schreibgeschützte **`parentElement`**-Eigenschaft der [`Node`](/de/docs/Web/API/Node)-Schnittstelle
gibt das Elternelement des DOM-Knotens als [`Element`](/de/docs/Web/API/Element) zurück, oder `null`, wenn der Knoten entweder kein Elternteil hat oder dessen Elternteil kein DOM-`Element` ist. [`Node.parentNode`](/de/docs/Web/API/Node/parentNode) hingegen gibt jedes beliebige Elternteil unabhängig von dessen Typ zurück.

## Wert

Ein [`Element`](/de/docs/Web/API/Element), das das Elternelement des aktuellen Knotens ist,
oder `null`, wenn es keins gibt.

## Beispiel

### Verwendung von parentElement

Dieses Beispiel setzt das Elternelement von `node`, um eine rote Textfarbe zu haben.

```js
if (node.parentElement) {
  node.parentElement.style.color = "red";
}
```

### parentElement ist null

`parentElement` kann `null` sein, wenn der Knoten kein Elternteil hat (zum Beispiel, weil er nicht an einem Baum angefügt ist) oder sein Elternteil kein `Element` ist. Andererseits gibt [`Node.parentNode`](/de/docs/Web/API/Node/parentNode) immer den übergeordneten Knoten zurück, der ein [`Document`](/de/docs/Web/API/Document) oder andere Knotentypen sein kann.

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
