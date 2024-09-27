---
title: "Node: getRootNode() Methode"
short-title: getRootNode()
slug: Web/API/Node/getRootNode
l10n:
  sourceCommit: ee846961725e36cf7bb407afe7a2df82d2860658
---

{{APIRef("DOM")}}

Die **`getRootNode()`** Methode des [`Node`](/de/docs/Web/API/Node) Schnittstelle
gibt das Wurzelelement des Kontextobjekts zurück,
welches optional das Shadow-Root umfasst, falls verfügbar.

## Syntax

```js-nolint
getRootNode()
getRootNode(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für die Ermittlung des Wurzelelementes festlegt. Die verfügbaren Optionen sind:

    - `composed`: Ein boolescher Wert, der angibt, ob das Shadow-Root
      (`false`, der Standard) oder ein Wurzelelement jenseits des Shadow-Roots (`true`) zurückgegeben werden soll.

### Rückgabewert

Ein Objekt, das von [`Node`](/de/docs/Web/API/Node) erbt. Die genaue Form hängt davon ab, wo `getRootNode()` aufgerufen wird; zum Beispiel:

- Ein Aufruf auf einem Element innerhalb einer normalen Webseite gibt ein
  [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Objekt zurück, das die gesamte Seite (oder {{HTMLElement("iframe")}}) darstellt.
- Ein Aufruf auf einem Element innerhalb eines Shadow DOM gibt das zugehörige
  [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.
- Ein Aufruf auf einem Element, das nicht an ein Dokument oder einen Shadow-Tree angehängt ist, gibt die Wurzel des DOM-Baums, zu dem es gehört, zurück.

## Beispiele

### Beispiel 1

Das erste einfache Beispiel gibt eine Referenz auf das HTML-/Dokumentelement zurück:

```js
const rootNode = node.getRootNode();
```

### Beispiel 2

Dieses komplexere Beispiel zeigt den Unterschied zwischen der Rückgabe eines normalen Wurzels und einer Wurzel, die das Shadow-Root umfasst:

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
Beachten Sie, dass `element` hier die Wurzel des Baums ist (da es keinen Elternteil hat), also ist per Definition seine Wurzel es selbst:

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
