---
title: "Node: isDefaultNamespace() Methode"
short-title: isDefaultNamespace()
slug: Web/API/Node/isDefaultNamespace
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die **`isDefaultNamespace()`** Methode der {{domxref("Node")}} Schnittstelle akzeptiert eine Namespace-URI als Argument.
Sie gibt einen booleschen Wert zurück, der `true` ist, wenn der Namespace der Standard-Namespace für das gegebene Node ist, und `false`, wenn nicht.

> [!NOTE]
> Der Standard-Namespace eines HTML-Elements ist immer `""`. Bei einem SVG-Element wird er durch das `xmlns` Attribut festgelegt.

## Syntax

```js-nolint
isDefaultNamespace(namespaceURI)
```

### Parameter

- `namespaceURI`
  - : Ein String, der den Namespace darstellt, gegen den das Element geprüft wird.
    > **Hinweis:** `namespaceURI` ist kein optionaler Parameter, kann jedoch `null` sein.

### Rückgabewert

Ein boolescher Wert, der den Rückgabewert `true` oder `false` enthält und anzeigt, ob der Parameter der Standard-Namespace ist oder nicht.

## Beispiel

```html
Ist "" der Standard-Namespace für &lt;output&gt;:
<output>Nicht getestet</output>.<br />
Ist "http://www.w3.org/2000/svg" der Standard-Namespace für &lt;output&gt;:
<output>Nicht getestet</output>.<br />
Ist "" der Standard-Namespace für &lt;svg&gt;: <output>Nicht getestet</output>.<br />
Ist "http://www.w3.org/2000/svg" der Standard-Namespace für &lt;svg&gt;:
<output>Nicht getestet</output>.<br />
<svg xmlns="http://www.w3.org/2000/svg" height="1"></svg>
<button>Tests ausführen</button>
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

- {{domxref("Node.lookupNamespaceURI")}}
- {{domxref("Node.lookupPrefix")}}
