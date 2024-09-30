---
title: "Knoten: Methode lookupNamespaceURI()"
short-title: lookupNamespaceURI()
slug: Web/API/Node/lookupNamespaceURI
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die **`lookupNamespaceURI()`** Methode der [`Node`](/de/docs/Web/API/Node) Schnittstelle nimmt ein Präfix als Parameter und gibt den Namensraum-URI zurück, der mit diesem auf dem angegebenen Knoten assoziiert ist, falls er gefunden wird (und `null`, wenn nicht). Die Existenz dieser Methode ermöglicht es, `Node` Objekte als Namensraum-Resolver an [`XPathEvaluator.createExpression()`](/de/docs/Web/API/XPathEvaluator/createExpression) und [`XPathEvaluator.evaluate()`](/de/docs/Web/API/XPathEvaluator/evaluate) zu übergeben.

## Syntax

```js-nolint
lookupNamespaceURI(prefix)
```

### Parameter

- `prefix`
  - : Das zu suchende Präfix.
    > [!NOTE]
    > Dieser Parameter ist nicht optional, kann aber auf `null` gesetzt werden.

### Rückgabewert

Ein String, der den Namensraum-URI enthält, der dem Präfix entspricht.

- Gibt immer `null` zurück, wenn der Knoten ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), [`DocumentType`](/de/docs/Web/API/DocumentType), [`Document`](/de/docs/Web/API/Document) ohne [`documentElement`](/de/docs/Web/API/Document/documentElement) oder [`Attr`](/de/docs/Web/API/Attr) ohne zugehöriges Element ist.
- Wenn `prefix` `"xml"` ist, ist der Rückgabewert immer `"http://www.w3.org/XML/1998/namespace"`.
- Wenn `prefix` `"xmlns"` ist, ist der Rückgabewert immer `"http://www.w3.org/2000/xmlns/"`.
- Wenn das `prefix` `null` ist, ist der Rückgabewert der Standard-Namensraum-URI.
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

- [`Node.lookupPrefix`](/de/docs/Web/API/Node/lookupPrefix)
- [`Node.isDefaultNameSpace`](/de/docs/Web/API/Node/isDefaultNameSpace)
