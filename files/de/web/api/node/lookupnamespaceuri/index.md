---
title: "Knoten: lookupNamespaceURI() Methode"
short-title: lookupNamespaceURI()
slug: Web/API/Node/lookupNamespaceURI
l10n:
  sourceCommit: f9c2ae293074c49f1ed2b86913ef24b0042e0047
---

{{APIRef("DOM")}}

Die **`lookupNamespaceURI()`** Methode des [`Node`](/de/docs/Web/API/Node) Interfaces nimmt ein Präfix als Parameter und gibt die Namespace-URI zurück, die damit auf dem gegebenen Knoten verknüpft ist (und `null`, wenn nicht gefunden). Das Vorhandensein dieser Methode ermöglicht es, `Node`-Objekte als Namespace-Resolver an [`XPathEvaluator.createExpression()`](/de/docs/Web/API/XPathEvaluator/createExpression) und [`XPathEvaluator.evaluate()`](/de/docs/Web/API/XPathEvaluator/evaluate) zu übergeben.

## Syntax

```js-nolint
lookupNamespaceURI(prefix)
```

### Parameter

- `prefix`
  - : Das zu suchende Präfix. Der leere String ist gleichbedeutend mit `null`, was auf den Standard-Namespace verweist.
    > [!NOTE]
    > Dieser Parameter ist nicht optional, kann aber auf `null` gesetzt werden.

### Rückgabewert

Ein String, der die Namespace-URI enthält, die dem Präfix entspricht.

- Gibt immer `null` zurück, wenn der Knoten ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), [`DocumentType`](/de/docs/Web/API/DocumentType), ein [`Document`](/de/docs/Web/API/Document) ohne [`documentElement`](/de/docs/Web/API/Document/documentElement) oder ein [`Attr`](/de/docs/Web/API/Attr) ohne zugehöriges Element ist.
- Wenn `prefix` `"xml"` ist, ist der Rückgabewert immer `"http://www.w3.org/XML/1998/namespace"`.
- Wenn `prefix` `"xmlns"` ist, ist der Rückgabewert immer `"http://www.w3.org/2000/xmlns/"`.
- Wenn das `prefix` `null` ist, ist der Rückgabewert die Standard-Namespace-URI.
- Wenn das Präfix nicht gefunden wird, ist der Rückgabewert `null`.

## Beispiel

> [!NOTE]
> Dieses Beispiel läuft in einem HTML-Dokument, in dem `xmlns:`-Attribute ignoriert werden (außer `xmlns:xlink`). Firefox setzt alle Namespace-URIs der Elemente auf `null`, während Chrome und Safari die Standard-Namespace-URIs von HTML-, SVG- und MathML-Elementen korrekt setzen. Wenn Sie aussagekräftigere Tests durchführen möchten, können Sie ein eigenständiges [SVG](/de/docs/Web/SVG) Dokument öffnen und Skripte in dessen Kontext ausführen.

```html
<div class="hidden">
  <div>Test HTML element</div>
  <svg>
    <text>Test SVG element</text>
  </svg>
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" id="with-xlink">
    <text>Test SVG element with xlink</text>
  </svg>
  <math>Test MathML element</math>
</div>

<table>
  <thead>
    <tr>
      <th><code>prefix</code></th>
      <th><code>&lt;div&gt;</code></th>
      <th><code>&lt;svg&gt;</code></th>
      <th><code>&lt;svg xmlns:xlink&gt;</code></th>
      <th><code>&lt;math&gt;</code></th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
```

```css hidden
.hidden {
  display: none;
}
```

```js
const htmlElt = document.querySelector("div");
const svgElt = document.querySelector("svg");
const svgEltXLink = document.querySelector("#with-xlink");
const mathElt = document.querySelector("math");

const tbody = document.querySelector("tbody");

for (const prefix of ["xmlns", "xml", "html", "svg", "xlink", "", null]) {
  const row = document.createElement("tr");
  tbody.appendChild(row);
  row.appendChild(document.createElement("td")).textContent =
    JSON.stringify(prefix);
  for (const el of [htmlElt, svgElt, svgEltXLink, mathElt]) {
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
- [`Node.isDefaultNameSpace`](/de/docs/Web/API/Node/isDefaultNamespace)
