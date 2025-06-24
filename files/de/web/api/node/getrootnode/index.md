---
title: "Node: Methode getRootNode()"
short-title: getRootNode()
slug: Web/API/Node/getRootNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

Die **`getRootNode()`**-Methode der [`Node`](/de/docs/Web/API/Node)-Schnittstelle
gibt das Wurzelobjekt des Kontextobjekts zurück, welches optional das Shadow-Root einschließt, wenn es verfügbar ist.

## Syntax

```js-nolint
getRootNode()
getRootNode(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für das Abrufen des Root-Knotens festlegt. Die verfügbaren Optionen sind:
    - `composed`: Ein boolescher Wert, der angibt, ob das Shadow-Root (`false`, der Standardwert) oder ein Root-Knoten über das Shadow-Root hinaus (`true`) zurückgegeben werden soll.

### Rückgabewert

Ein Objekt, das von [`Node`](/de/docs/Web/API/Node) erbt. Dies unterscheidet sich je nach Aufrufpunkt von `getRootNode()` in der genauen Form; zum Beispiel:

- Bei einem Aufruf auf einem Element innerhalb einer Standardwebseite wird ein
  [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Objekt zurückgegeben, das die gesamte Seite (oder {{HTMLElement("iframe")}}) repräsentiert.
- Bei einem Aufruf auf einem Element innerhalb eines Shadow-DOMs wird das zugehörige
  [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurückgegeben.
- Bei einem Aufruf auf einem Element, das nicht an ein Dokument oder einen Shadow-Baum angehängt ist, wird
  die Wurzel des DOM-Baums, zu dem es gehört, zurückgegeben.

## Beispiele

### Beispiel 1

Das erste einfache Beispiel gibt eine Referenz auf den HTML-/Dokumentknoten zurück:

```js
const rootNode = node.getRootNode();
```

### Beispiel 2

Dieses komplexere Beispiel zeigt den Unterschied zwischen der Rückgabe eines normalen Roots und eines
Roots, einschließlich des Shadow-Roots:

```html
<div class="parent">
  <div class="child"></div>
</div>
<div class="shadowHost">shadowHost</div>
<pre id="output">Output: </pre>
```

```js
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const shadowHost = document.querySelector(".shadowHost");
const output = document.getElementById("output");

output.innerText += `\nparent's root: ${parent.getRootNode().nodeName}\n`; // #document
output.innerText += `child's  root: ${child.getRootNode().nodeName}\n\n`; // #document

// create a ShadowRoot
const shadowRoot = shadowHost.attachShadow({ mode: "open" });
shadowRoot.innerHTML =
  '<style>div{background:#2bb8aa;}</style><div class="shadowChild">shadowChild</div>';
const shadowChild = shadowRoot.querySelector(".shadowChild");

// The default value of composed is false
output.innerText += `shadowChild.getRootNode() === shadowRoot : ${
  shadowChild.getRootNode() === shadowRoot
}\n`; // true
output.innerText += `shadowChild.getRootNode({ composed:false }) === shadowRoot : ${
  shadowChild.getRootNode({ composed: false }) === shadowRoot
}\n`; // true
output.innerText += `shadowChild.getRootNode({ composed:true }).nodeName : ${
  shadowChild.getRootNode({ composed: true }).nodeName
}\n`; // #document
```

{{ EmbedLiveSample('Example 2', '100%', '200px') }}

### Beispiel 3

Dieses Beispiel gibt die Wurzel des nicht montierten Baums zurück.
Beachten Sie, dass `element` hier die Wurzel des Baums ist (da es keine übergeordnete Instanz hat), daher ist per Definition seine Wurzel es selbst:

```js
const element = document.createElement("p");
const child = document.createElement("span");

element.append(child);

const rootNode = child.getRootNode(); // <p><span></span></p>

element === rootNode; // true
element === element.getRootNode(); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
