---
title: "Knoten: Methode isDefaultNamespace()"
short-title: isDefaultNamespace()
slug: Web/API/Node/isDefaultNamespace
l10n:
  sourceCommit: f9c2ae293074c49f1ed2b86913ef24b0042e0047
---

{{APIRef("DOM")}}

Die **`isDefaultNamespace()`** Methode des [`Node`](/de/docs/Web/API/Node) Interface akzeptiert eine Namespace-URI als Argument. Sie gibt einen booleschen Wert zurück, der `true` ist, wenn der Namespace der Standard-Namespace des angegebenen Knotens ist, und `false`, wenn nicht. Der Standard-Namespace kann mit [`Node.lookupNamespaceURI()`](/de/docs/Web/API/Node/lookupNamespaceURI) abgerufen werden, indem `null` als Argument übergeben wird.

## Syntax

```js-nolint
isDefaultNamespace(namespaceURI)
```

### Parameter

- `namespaceURI`
  - : Ein String, der den Namespace repräsentiert, gegen den das Element überprüft wird. Der leere String ist gleichbedeutend mit `null`.
    > [!NOTE]
    > `namespaceURI` ist kein optionaler Parameter, kann aber `null` sein.

### Rückgabewert

Ein boolescher Wert, der den Rückgabewert `true` oder `false` enthält und angibt, ob der Parameter der Standard-Namespace ist oder nicht. Es ist gleichbedeutend mit `node.lookupNamespaceURI(null) === namespaceURI`.

## Beispiel

> [!NOTE]
> Dieses Beispiel wird in einem HTML-Dokument ausgeführt, in dem `xmlns:` Attribute ignoriert werden (außer `xmlns:xlink`). Firefox setzt die Namespace-URI aller Elemente auf `null`, während Chrome und Safari die Standard-Namespace-URIs von HTML-, SVG- und MathML-Elementen korrekt setzen. Wenn Sie aussagekräftigere Tests durchführen möchten, können Sie ein eigenständiges [SVG](/de/docs/Web/SVG) Dokument öffnen und Skripte in dessen Kontext ausführen.

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
      <th><code>namespaceURI</code></th>
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

for (const uri of [
  "http://www.w3.org/2000/xmlns/",
  "http://www.w3.org/XML/1998/namespace",
  "http://www.w3.org/1999/xhtml",
  "http://www.w3.org/2000/svg",
  "http://www.w3.org/1999/xlink",
  "http://www.w3.org/1998/Math/MathML",
  "",
  null,
]) {
  const row = document.createElement("tr");
  tbody.appendChild(row);
  row.appendChild(document.createElement("td")).textContent =
    JSON.stringify(uri);
  for (const el of [htmlElt, svgElt, svgEltXLink, mathElt]) {
    console.log(el, uri, el.isDefaultNamespace(uri));
    row.appendChild(document.createElement("td")).textContent = String(
      el.isDefaultNamespace(uri),
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

- [`Node.lookupNamespaceURI`](/de/docs/Web/API/Node/lookupNamespaceURI)
- [`Node.lookupPrefix`](/de/docs/Web/API/Node/lookupPrefix)
