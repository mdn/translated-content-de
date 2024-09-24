---
title: "Node: isConnected Eigenschaft"
short-title: isConnected
slug: Web/API/Node/isConnected
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

Die schreibgeschützte **`isConnected`** Eigenschaft der {{domxref("Node")}}-Schnittstelle
gibt einen Boolean zurück, der angibt, ob der Knoten
(direkt oder indirekt) mit einem {{domxref("Document")}}-Objekt verbunden ist.

## Wert

Ein Boolean-Wert, der `true` ist, wenn der Knoten mit seinem relevanten Kontextobjekt verbunden ist,
und `false`, wenn nicht.

## Beispiele

### Standard-DOM

Ein Standard-DOM-Beispiel:

```js
let test = document.createElement("p");
console.log(test.isConnected); // Gibt false zurück
document.body.appendChild(test);
console.log(test.isConnected); // Gibt true zurück
```

### Shadow-DOM

Ein Shadow-DOM-Beispiel:

```js
// Erstellen Sie einen Shadow-Root
const shadow = this.attachShadow({ mode: "open" });

// Erstellen Sie einige CSS-Stile, die auf das Shadow DOM angewendet werden sollen
const style = document.createElement("style");
console.log(style.isConnected); // gibt false zurück

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

// Hängen Sie das erstellte Style-Element an das Shadow DOM an

shadow.appendChild(style);
console.log(style.isConnected); // Gibt true zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Node.prototype.isConnected Polyfill](https://gist.github.com/eligrey/f109a6d0bf4efe3461201c3d7b745e8f)
