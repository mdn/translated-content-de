---
title: "Node: lookupPrefix() Methode"
short-title: lookupPrefix()
slug: Web/API/Node/lookupPrefix
l10n:
  sourceCommit: f9c2ae293074c49f1ed2b86913ef24b0042e0047
---

{{APIRef("DOM")}}

Die **`lookupPrefix()`** Methode des [`Node`](/de/docs/Web/API/Node)-Interfaces
gibt einen String zurück, der das Präfix für einen gegebenen Namespace-URI enthält, falls vorhanden,
und `null`, wenn nicht.
Wenn mehrere Präfixe möglich sind, wird das erste Präfix zurückgegeben.

## Syntax

```js-nolint
lookupPrefix(namespace)
```

### Parameter

- `namespace`
  - : Ein String, der den Namespace enthält, zu dem das Präfix gesucht wird. Der leere String ist gleichbedeutend mit `null`, wobei in beiden Fällen `null` zurückgegeben wird.
    > [!NOTE]
    > Dieser Parameter ist nicht optional, kann aber auf `null` gesetzt werden.

### Rückgabewert

Ein String, der das entsprechende Präfix enthält, oder `null`, wenn keines gefunden wurde.
Wenn `namespace` null oder ein leerer String ist, gibt `lookupPrefix()` `null` zurück.

Wenn der Knoten ein [`DocumentType`](/de/docs/Web/API/DocumentType) oder ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) ist,
gibt `lookupPrefix()` immer `null` zurück.

## Beispiel

> [!NOTE]
> Dieses Beispiel läuft in einem HTML-Dokument, in dem `xmlns:`-Attribute ignoriert werden (außer `xmlns:xlink`). Firefox setzt die Namespace-URIs aller Elemente auf `null`, während Chrome und Safari die Standard-Namespace-URIs von HTML-, SVG- und MathML-Elementen korrekt setzen. Wenn Sie aussagekräftigere Tests durchführen möchten, können Sie ein eigenständiges [SVG](/de/docs/Web/SVG)-Dokument öffnen und Skripte in dessen Kontext ausführen.

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
    console.log(el, uri, el.lookupPrefix(uri));
    row.appendChild(document.createElement("td")).textContent = String(
      el.lookupPrefix(uri),
    );
  }
}
```

{{ EmbedLiveSample('Example','100%',190) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
