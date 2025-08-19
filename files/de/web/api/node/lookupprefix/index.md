---
title: "Node: lookupPrefix() Methode"
short-title: lookupPrefix()
slug: Web/API/Node/lookupPrefix
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

{{APIRef("DOM")}}

Die **`lookupPrefix()`** Methode des [`Node`](/de/docs/Web/API/Node) Interfaces gibt einen String zurück, der das Präfix für einen gegebenen Namensraum-URI enthält, falls vorhanden, und `null`, falls nicht. Wenn mehrere Präfixe möglich sind, wird das erste Präfix zurückgegeben.

## Syntax

```js-nolint
lookupPrefix(namespace)
```

### Parameter

- `namespace`
  - : Ein String, der den Namensraum enthält, für den das Präfix gesucht wird.
    > [!NOTE]
    > Dieser Parameter ist nicht optional, kann aber auf `null` gesetzt werden.

### Rückgabewert

Ein String, der das entsprechende Präfix enthält, oder `null`, wenn keines gefunden wurde. Wenn `namespace` `null` oder der leere String ist, gibt `lookupPrefix()` `null` zurück.

Ist der Knoten ein [`DocumentType`](/de/docs/Web/API/DocumentType) oder ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), gibt `lookupPrefix()` immer `null` zurück.

## Beispiel

```html
Prefix for <code>http://www.w3.org/2000/svg</code> on &lt;output&gt;:
<output>Not tested</output>.<br />
Prefix for <code>http://www.w3.org/XML/1998/namespace</code> on &lt;output&gt;:
<output>Not tested</output>.<br />
Prefix for <code>http://www.w3.org/TR/html4/</code> on &lt;output&gt;:
<output>Not tested</output>.<br />
Prefix for <code>https://www.w3.org/1999/xlink</code> on &lt;output&gt;:
<output>Not tested</output>.<br />
Prefix for <code>http://www.w3.org/2000/svg</code> on &lt;svg&gt;:
<output>Not tested</output>.<br />
Prefix for <code>https://www.w3.org/1999/xlink</code> on &lt;svg&gt;:
<output>Not tested</output>.<br />
Prefix for <code>http://www.w3.org/XML/1998/namespace</code> on &lt;svg&gt;:
<output>Not tested</output>.<br />
<svg xmlns:t="http://www.w3.org/2000/svg" height="1"></svg>
<button>Click to see the results</button>
```

```js
const button = document.querySelector("button");
button.addEventListener("click", () => {
  const htmlElt = document.querySelector("output");
  const svgElt = document.querySelector("svg");

  const result = document.getElementsByTagName("output");
  result[0].value = htmlElt.lookupPrefix("http://www.w3.org/2000/svg"); // true
  result[1].value = htmlElt.lookupPrefix(
    "http://www.w3.org/XML/1998/namespace",
  ); // false
  result[2].value = htmlElt.lookupPrefix("http://www.w3.org/TR/html4/"); // true
  result[3].value = htmlElt.lookupPrefix("https://www.w3.org/1999/xlink"); // false
  result[4].value = svgElt.lookupPrefix("http://www.w3.org/2000/svg"); // true
  result[5].value = svgElt.lookupPrefix("https://www.w3.org/1999/xlink"); // true
  result[6].value = svgElt.lookupPrefix("http://www.w3.org/XML/1998/namespace"); // false
});
```

{{ EmbedLiveSample('Example','100%',190) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
