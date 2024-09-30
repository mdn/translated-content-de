---
title: "Node: isConnected-Eigenschaft"
short-title: isConnected
slug: Web/API/Node/isConnected
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

Die schreibgeschützte **`isConnected`**-Eigenschaft des [`Node`](/de/docs/Web/API/Node)-Interfaces gibt einen Boolean zurück, der anzeigt, ob der Knoten (direkt oder indirekt) mit einem [`Document`](/de/docs/Web/API/Document)-Objekt verbunden ist.

## Wert

Ein Boolean-Wert, der `true` ist, wenn der Knoten mit seinem relevanten Kontextobjekt verbunden ist, und `false`, wenn nicht.

## Beispiele

### Standard DOM

Ein Standard-DOM-Beispiel:

```js
let test = document.createElement("p");
console.log(test.isConnected); // Returns false
document.body.appendChild(test);
console.log(test.isConnected); // Returns true
```

### Shadow DOM

Ein Shadow-DOM-Beispiel:

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

## Siehe auch

- [Node.prototype.isConnected Polyfill](https://gist.github.com/eligrey/f109a6d0bf4efe3461201c3d7b745e8f)
