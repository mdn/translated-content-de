---
title: "Attr: value-Eigenschaft"
short-title: value
slug: Web/API/Attr/value
l10n:
  sourceCommit: 76600240fbe75e083e964bc3707cce81e99999c2
---

{{APIRef("DOM")}}

Die **`value`**-Eigenschaft des [`Attr`](/de/docs/Web/API/Attr)-Interfaces enthält den Wert des Attributs.

## Wert

Ein String, der den Attributwert darstellt.

## Beispiel

Das folgende Beispiel zeigt den aktuellen Wert des Attributs `test`. Ein Klick auf den Knopf ändert ihn in einen anderen Wert und liest ihn erneut, um den angezeigten Wert zu aktualisieren.

### HTML

```html
<label test="initial value"></label>

<button>Click me to set test to <code>"a new value"</code>…</button>

<p>
  Current value of the <code>test</code> attribute:
  <output id="result">None.</output>
</p>
```

### JavaScript

```js
const element = document.querySelector("label");
const button = document.querySelector("button");
const result = document.querySelector("#result");

const attribute = element.attributes[0];
result.value = attribute.value;

button.addEventListener("click", () => {
  attribute.value = "a new value";
  result.value = attribute.value;
});
```

{{ EmbedLiveSample('Example','100%',100) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
