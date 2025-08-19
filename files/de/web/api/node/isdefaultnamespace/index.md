---
title: "Node: isDefaultNamespace()-Methode"
short-title: isDefaultNamespace()
slug: Web/API/Node/isDefaultNamespace
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

{{APIRef("DOM")}}

Die **`isDefaultNamespace()`**-Methode der [`Node`](/de/docs/Web/API/Node)-Schnittstelle akzeptiert einen Namespace-URI als Argument. Sie gibt einen booleschen Wert zurück, der `true` ist, wenn der Namespace der Standard-Namespace des angegebenen Knotens ist, und `false`, wenn nicht.

> [!NOTE]
> Der Standard-Namespace eines HTML-Elements ist immer `""`. Für ein SVG-Element wird er durch das `xmlns`-Attribut festgelegt.

## Syntax

```js-nolint
isDefaultNamespace(namespaceURI)
```

### Parameter

- `namespaceURI`
  - : Ein String, der den Namespace repräsentiert, gegen den das Element überprüft wird.
    > [!NOTE]
    > `namespaceURI` ist kein optionaler Parameter, kann aber `null` sein.

### Rückgabewert

Ein boolescher Wert, der den Rückgabewert `true` oder `false` enthält und angibt, ob der Parameter der Standard-Namespace ist oder nicht.

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
  const htmlElt = document.querySelector("output");
  const svgElt = document.querySelector("svg");

  const result = document.getElementsByTagName("output");
  result[0].value = htmlElt.isDefaultNamespace(""); // true
  result[1].value = htmlElt.isDefaultNamespace("http://www.w3.org/2000/svg"); // false
  result[2].value = svgElt.isDefaultNamespace(""); // false
  result[3].value = svgElt.isDefaultNamespace("http://www.w3.org/2000/svg"); // true
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
