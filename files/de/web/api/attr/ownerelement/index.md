---
title: "Attr: ownerElement Eigenschaft"
short-title: ownerElement
slug: Web/API/Attr/ownerElement
l10n:
  sourceCommit: 76600240fbe75e083e964bc3707cce81e99999c2
---

{{APIRef("DOM")}}

Die schreibgeschützte **`ownerElement`**-Eigenschaft des [`Attr`](/de/docs/Web/API/Attr)-Interfaces gibt das [`Element`](/de/docs/Web/API/Element) zurück, zu dem das Attribut gehört.

## Wert

Das [`Element`](/de/docs/Web/API/Element), zu dem das Attribut gehört, oder `null`, wenn das Attribut nicht mit einem Element verknüpft ist.

## Beispiel

Das folgende Beispiel zeigt den qualifizierten Namen des Elements der ersten beiden Elemente an, wenn Sie auf den entsprechenden Button klicken.

### HTML

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<p>
  <button>Show value for &lt;svg&gt;</button>
  <button>Show value for &lt;label&gt;</button>
</p>

<p>
  Qualified name of the owner element of the attribute <code>xml:lang</code>:
  <output id="result">None.</output>
</p>
```

### JavaScript

```js
const elements = document.querySelectorAll(".struct");
const buttons = document.querySelectorAll("button");
const outputEl = document.querySelector("#result");

let i = 0;
for (const button of buttons) {
  const element = elements[i];
  button.addEventListener("click", () => {
    const attribute = element.attributes[0];
    outputEl.value = attribute.ownerElement.tagName.toLowerCase();
  });
  i++;
}
```

{{ EmbedLiveSample('Example','100%',100) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
