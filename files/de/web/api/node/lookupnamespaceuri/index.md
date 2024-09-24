---
title: "Node: Methode lookupNamespaceURI()"
short-title: lookupNamespaceURI()
slug: Web/API/Node/lookupNamespaceURI
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die **`lookupNamespaceURI()`**-Methode des {{domxref("Node")}}-Interfaces
nimmt einen Präfix als Parameter und gibt den damit auf dem gegebenen Knoten assoziierten Namespace-URI zurück, falls dieser gefunden wird (und `null`, wenn nicht). Die Existenz dieser Methode ermöglicht es `Node`-Objekten, als Namespace-Resolver an {{domxref("XPathEvaluator.createExpression()")}} und {{domxref("XPathEvaluator.evaluate()")}} übergeben zu werden.

## Syntax

```js-nolint
lookupNamespaceURI(prefix)
```

### Parameter

- `prefix`
  - : Der zu suchende Präfix.
    > [!NOTE]
    > Dieser Parameter ist nicht optional, kann aber auf `null` gesetzt werden.

### Rückgabewert

Ein String, der den Namespace-URI enthält, der dem Präfix entspricht.

- Gibt immer `null` zurück, wenn der Knoten ein {{domxref("DocumentFragment")}}, {{domxref("DocumentType")}}, {{domxref("Document")}} ohne {{domxref("Document/documentElement", "documentElement")}} oder ein {{domxref("Attr")}} ohne dazugehöriges Element ist.
- Wenn `prefix` `"xml"` ist, ist der Rückgabewert immer `"http://www.w3.org/XML/1998/namespace"`.
- Wenn `prefix` `"xmlns"` ist, ist der Rückgabewert immer `"http://www.w3.org/2000/xmlns/"`.
- Wenn `prefix` `null` ist, ist der Rückgabewert der Standard-Namespace-URI.
- Wenn das Präfix nicht gefunden wird, ist der Rückgabewert `null`.

## Beispiel

```html
<div style="display: none">
  <div>Test HTML element</div>
  <svg>
    <text>Test SVG element</text>
  </svg>
  <math>Test MathML element</math>
</div>

<table>
  <thead>
    <tr>
      <th><code>prefix</code></th>
      <th><code>&lt;div&gt;</code></th>
      <th><code>&lt;svg&gt;</code></th>
      <th><code>&lt;math&gt;</code></th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
```

```js
const htmlElt = document.querySelector("div");
const svgElt = document.querySelector("svg");
const mathElt = document.querySelector("math");

const tbody = document.querySelector("tbody");

for (const prefix of ["xmlns", "xml", "html", "svg", "xlink", "", null]) {
  const row = document.createElement("tr");
  tbody.appendChild(row);
  row.appendChild(document.createElement("td")).textContent =
    JSON.stringify(prefix);
  for (const el of [htmlElt, svgElt, mathElt]) {
    console.log(el, prefix, el.lookupNamespaceURI(prefix));
    row.appendChild(document.createElement("td")).textContent = String(
      el.lookupNamespaceURI(prefix),
    );
  }
}
```

{{ EmbedLiveSample('Example','100%',190) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Node.lookupPrefix")}}
- {{domxref("Node.isDefaultNameSpace")}}
