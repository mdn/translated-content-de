---
title: "Node: isDefaultNamespace() Methode"
short-title: isDefaultNamespace()
slug: Web/API/Node/isDefaultNamespace
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("DOM")}}

Die **`isDefaultNamespace()`** Methode des [`Node`](/de/docs/Web/API/Node) Schnittstelle akzeptiert eine Namespace-URI als Argument. Sie gibt einen booleschen Wert zurück, der `true` ist, wenn der Namespace der Standard-Namespace auf dem gegebenen Knoten ist, und `false`, wenn nicht.

> [!NOTE]
> Der Standard-Namespace eines HTML-Elements ist immer `""`. Für ein SVG-Element wird er durch das `xmlns`-Attribut festgelegt.

## Syntax

```js-nolint
isDefaultNamespace(namespaceURI)
```

### Parameter

- `namespaceURI`
  - : Ein String, der den Namespace darstellt, gegen den das Element überprüft wird.
    > [!NOTE] > `namespaceURI` ist kein optionaler Parameter, kann jedoch `null` sein.

### Rückgabewert

Ein boolescher Wert, der den Rückgabewert `true` oder `false` hält, um anzugeben, ob der Parameter der Standard-Namespace ist oder nicht.

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
