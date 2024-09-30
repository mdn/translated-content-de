---
title: "Node: getRootNode()-Methode"
short-title: getRootNode()
slug: Web/API/Node/getRootNode
l10n:
  sourceCommit: ee846961725e36cf7bb407afe7a2df82d2860658
---

{{APIRef("DOM")}}

Die **`getRootNode()`**-Methode des [`Node`](/de/docs/Web/API/Node)-Interfaces gibt das Wurzelobjekt des Kontextes zurück, das optional das Shadow-Root enthält, falls es verfügbar ist.

## Syntax

```js-nolint
getRootNode()
getRootNode(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen zum Abrufen des Wurzelknotens festlegt. Die verfügbaren Optionen sind:

    - `composed`: Ein boolescher Wert, der angibt, ob das Shadow-Root zurückgegeben werden soll (`false`, der Standardwert), oder ein Wurzelknoten jenseits des Shadow-Root (`true`).

### Rückgabewert

Ein Objekt, das von [`Node`](/de/docs/Web/API/Node) erbt. Die genaue Form variiert je nachdem, wo Sie `getRootNode()` aufrufen; zum Beispiel:

- Wenn es auf einem Element innerhalb einer Standard-Webseite aufgerufen wird, wird ein
  [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Objekt zurückgegeben, das die gesamte Seite (oder {{HTMLElement("iframe")}}) darstellt.
- Wird es auf einem Element innerhalb eines Shadow DOM aufgerufen, wird das zugehörige
  [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurückgegeben.
- Wird es auf einem Element aufgerufen, das nicht mit einem Dokument oder einem Shadow-Tree verbunden ist, wird die Wurzel des DOM-Baums, zu dem es gehört, zurückgegeben.

## Beispiele

### Beispiel 1

Das erste einfache Beispiel gibt eine Referenz zum HTML/Dokumentknoten zurück:

```js
const rootNode = node.getRootNode();
```

### Beispiel 2

Dieses komplexere Beispiel zeigt den Unterschied zwischen der Rückgabe eines normalen Wurzels und einer Wurzel einschließlich des Shadow-Roots:

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

Dieses Beispiel gibt die Wurzel des nicht montierten Baums zurück. Beachten Sie, dass `element` hier die Wurzel des Baums ist (da es keinen Elternknoten hat), sodass definitionsgemäß seine Wurzel es selbst ist:

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
