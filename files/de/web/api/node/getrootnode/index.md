---
title: "Node: getRootNode()-Methode"
short-title: getRootNode()
slug: Web/API/Node/getRootNode
l10n:
  sourceCommit: ee846961725e36cf7bb407afe7a2df82d2860658
---

{{APIRef("DOM")}}

Die **`getRootNode()`**-Methode der {{domxref("Node")}}-Schnittstelle
gibt das Wurzelobjekt des Kontextobjekts zurück,
das optional die Schattenwurzel beinhaltet, wenn diese verfügbar ist.

## Syntax

```js-nolint
getRootNode()
getRootNode(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für das Abrufen des Wurzelknotens festlegt. Die verfügbaren Optionen sind:

    - `composed`: Ein boolescher Wert, der angibt, ob die Schattenwurzel
      zurückgegeben werden soll (`false`, der Standardwert) oder ein Wurzelknoten über die Schattenwurzel hinaus (`true`).

### Rückgabewert

Ein Objekt, das von {{domxref('Node')}} erbt. Die genaue Form hängt davon ab, wo Sie `getRootNode()` aufrufen; beispielsweise:

- Beim Aufruf auf einem Element innerhalb einer Standard-Webseite wird ein
  {{domxref("HTMLDocument")}}-Objekt zurückgegeben, das die gesamte Seite (oder {{HTMLElement("iframe")}}) repräsentiert.
- Beim Aufruf auf einem Element innerhalb eines Schatten-DOMs wird die zugehörige
  {{domxref("ShadowRoot")}} zurückgegeben.
- Beim Aufruf auf einem Element, das nicht an ein Dokument oder einen Schattendom-Baum angehängt ist, wird die Wurzel des DOM-Baums zurückgegeben, zu dem es gehört.

## Beispiele

### Beispiel 1

Das erste einfache Beispiel gibt eine Referenz zum HTML-/Dokumentknoten zurück:

```js
const rootNode = node.getRootNode();
```

### Beispiel 2

Dieses komplexere Beispiel zeigt den Unterschied zwischen der Rückgabe einer normalen Wurzel und einer Wurzel, die die Schattenwurzel beinhaltet:

```html
<div class="parent">
  <div class="child"></div>
</div>
<div class="shadowHost">shadowHost</div>
<pre id="output">Ausgabe: </pre>
```

```js
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const shadowHost = document.querySelector(".shadowHost");
const output = document.getElementById("output");

output.innerText += `\nElternteil's Wurzel: ${parent.getRootNode().nodeName}\n`; // #document
output.innerText += `Kind's Wurzel: ${child.getRootNode().nodeName}\n\n`; // #document

// Eine ShadowRoot erstellen
const shadowRoot = shadowHost.attachShadow({ mode: "open" });
shadowRoot.innerHTML =
  '<style>div{background:#2bb8aa;}</style><div class="shadowChild">shadowChild</div>';
const shadowChild = shadowRoot.querySelector(".shadowChild");

// Der Standardwert von composed ist false
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

{{ EmbedLiveSample('Beispiel 2', '100%', '200px') }}

### Beispiel 3

Dieses Beispiel gibt die Wurzel des nicht montierten Baums zurück.
Beachten Sie, dass `element` hier die Wurzel des Baums ist (da es kein Elternteil hat), daher ist es per Definition seine eigene Wurzel:

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
