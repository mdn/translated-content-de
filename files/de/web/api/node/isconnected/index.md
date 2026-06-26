---
title: "Node: isConnected-Eigenschaft"
short-title: isConnected
slug: Web/API/Node/isConnected
l10n:
  sourceCommit: cb10ea9c059e54e6b3fc61866e8db0f73fcdbce7
---

{{APIRef("DOM")}}

Die schreibgeschützte **`isConnected`**-Eigenschaft des [`Node`](/de/docs/Web/API/Node)-Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob der Knoten (direkt oder indirekt) mit einem [`Document`](/de/docs/Web/API/Document)-Objekt verbunden ist.

## Wert

Ein boolescher Wert, der `true` ist, wenn der Knoten mit seinem relevanten Kontextobjekt verbunden ist, und `false` wenn nicht.

> [!NOTE]
> Ein [`Attr`](/de/docs/Web/API/Attr)-Knoten gibt für `isConnected` immer `false` zurück, selbst wenn sein [`ownerElement`](/de/docs/Web/API/Attr/ownerElement) verbunden ist.
> Dies liegt daran, dass ein Attribut zwar über `ownerElement` mit einem Element verknüpft ist, jedoch nicht Teil des Knotendbaums ist — es hat keinen übergeordneten Knoten und ist sein eigener Wurzelknoten.
> Da `isConnected` nur dann `true` ist, wenn die Wurzel eines Knotens ein Dokument ist, wird ein `Attr`-Knoten niemals als verbunden angesehen.

## Beispiele

### Standard DOM

Ein Beispiel für Standard DOM:

```js
let test = document.createElement("p");
console.log(test.isConnected); // Returns false
document.body.appendChild(test);
console.log(test.isConnected); // Returns true
```

### Shadow DOM

Ein Beispiel für Shadow DOM:

```js
// Create a shadow root
const shadow = this.attachShadow({ mode: "open" });

// Create some CSS to apply to the shadow DOM
const style = document.createElement("style");
console.log(style.isConnected); // returns false

style.textContent = `
.wrapper {
  position: relative;
}

.info {
  font-size: 0.8rem;
  width: 200px;
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
  background: white;
  border-radius: 10px;
  opacity: 0;
  transition: 0.6s all;
  positions: absolute;
  bottom: 20px;
  left: 10px;
  z-index: 3
}
`;

// Attach the created style element to the shadow DOM

shadow.appendChild(style);
console.log(style.isConnected); // Returns true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
