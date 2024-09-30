---
title: "Attr: name-Eigenschaft"
short-title: name
slug: Web/API/Attr/name
l10n:
  sourceCommit: 76600240fbe75e083e964bc3707cce81e99999c2
---

{{APIRef("DOM")}}

Die schreibgeschützte **`name`**-Eigenschaft der [`Attr`](/de/docs/Web/API/Attr)-Schnittstelle gibt den _qualifizierten Namen_ eines Attributs zurück, also den Namen des Attributs mit dem Namensraum-Präfix, falls vorhanden, davor. Zum Beispiel, wenn der lokale Name `lang` und das Namensraum-Präfix `xml` ist, lautet der zurückgegebene qualifizierte Name `xml:lang`.

Der qualifizierte Name ist immer in Kleinbuchstaben, unabhängig davon, welche Schreibweise bei der Attributerstellung verwendet wurde.

## Wert

Ein String, der den qualifizierten Namen des Attributs darstellt.

## Beispiel

Das folgende Beispiel zeigt den qualifizierten Namen des ersten Attributs der beiden ersten Elemente an, wenn wir auf den entsprechenden Button klicken.

### HTML

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<p>
  <button>Show value for &lt;svg&gt;</button>
  <button>Show value for &lt;label&gt;</button>
</p>

<p>
  Qualified name of the attribute <code>xml:lang</code>:
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
    outputEl.value = attribute.name;
  });
  i++;
}
```

{{ EmbedLiveSample('Example','100%',100) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Eigenschaften [`Attr.localName`](/de/docs/Web/API/Attr/localName), die den lokalen Teil des qualifizierten Namens des Attributs zurückgeben, und [`Attr.prefix`](/de/docs/Web/API/Attr/prefix), das Namensraum-Präfix.
- Die [`Element.tagName()`](/de/docs/Web/API/Element/tagName)-Eigenschaft, die den qualifizierten Namen eines [`Element`](/de/docs/Web/API/Element) zurückgibt.
