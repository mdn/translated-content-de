---
title: "Node: isDefaultNamespace() Methode"
short-title: isDefaultNamespace()
slug: Web/API/Node/isDefaultNamespace
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die **`isDefaultNamespace()`** Methode des [`Node`](/de/docs/Web/API/Node) Interfaces nimmt einen Namespace-URI als Argument an. Sie gibt einen booleschen Wert zurück, der `true` ist, wenn der Namespace der Standard-Namensraum des gegebenen Knotens ist, und `false`, wenn nicht.

> [!NOTE]
> Der Standard-Namensraum eines HTML-Elements ist immer `""`. Für ein SVG-Element wird er durch das `xmlns` Attribut festgelegt.

## Syntax

```js-nolint
isDefaultNamespace(namespaceURI)
```

### Parameter

- `namespaceURI`
  - : Ein String, der den Namespace darstellt, gegen den das Element überprüft wird.
    > **Hinweis:** `namespaceURI` ist kein optionaler Parameter, kann jedoch `null` sein.

### Rückgabewert

Ein boolescher Wert, der `true` oder `false` zurückgibt und angibt, ob der Parameter der Standard-Namensraum ist oder nicht.

## Beispiel

```html
Is "" the default namespace for &lt;output&gt;:
<output>Not tested</output>.<br />
Is "http://www.w3.org/2000/svg" the default namespace for &lt;output&gt;:
<output>Not tested</output>.<br />
Is "" the default namespace for &lt;svg&gt;: <output>Not tested</output>.<br />
Is "http://www.w3.org/2000/svg" the default namespace for &lt;svg&gt;:
<output>Not tested</output>.<br />
<svg xmlns="http://www.w3.org/2000/svg" height="1"></svg>
<button>Click to run tests</button>
```

```js
const button = document.querySelector("button");
button.addEventListener("click", () => {
  const aHtmlElt = document.querySelector("output");
  const aSvgElt = document.querySelector("svg");

  const result = document.getElementsByTagName("output");
  result[0].value = aHtmlElt.isDefaultNamespace(""); // true
  result[1].value = aHtmlElt.isDefaultNamespace("http://www.w3.org/2000/svg"); // false
  result[2].value = aSvgElt.isDefaultNamespace(""); // false
  result[3].value = aSvgElt.isDefaultNamespace("http://www.w3.org/2000/svg"); // true
});
```

{{ EmbedLiveSample('Example','100%',130) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.lookupNamespaceURI`](/de/docs/Web/API/Node/lookupNamespaceURI)
- [`Node.lookupPrefix`](/de/docs/Web/API/Node/lookupPrefix)
