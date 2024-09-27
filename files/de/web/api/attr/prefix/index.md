---
title: "Attr: prefix-Eigenschaft"
short-title: prefix
slug: Web/API/Attr/prefix
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}

Die schreibgeschützte **`prefix`**-Eigenschaft des [`Attr`](/de/docs/Web/API/Attr) gibt das Namensraum-Präfix des Attributs zurück oder `null`, wenn kein Präfix angegeben ist.

Das Präfix ist immer in Kleinbuchstaben, unabhängig davon, wie es bei der Attributerstellung verwendet wurde.

> [!NOTE]
> Nur XML unterstützt Namensräume. HTML nicht. Das bedeutet, dass das Präfix eines Attributs eines HTML-Elements immer `null` sein wird.

Außerdem werden nur die Namensräume `xml` (für das Attribut `xml:lang`), `xlink` (für die Attribute `xlink:href`, `xlink:show`, `xlink:target` und `xlink:title`) und `xpath` unterstützt, und zwar nur bei SVG- und MathML-Elementen.

## Wert

Ein String, der das Präfix des Namensraums enthält, zu dem das Attribut gehört. Wenn keiner vorhanden ist, wird `null` zurückgegeben.

## Beispiel

### HTML

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<p>
  <button>Show value for &lt;svg&gt;</button>
  <button>Show value for &lt;label&gt;</button>
</p>

<p>
  Prefix of the attribute <code>xml:lang</code>:
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
    outputEl.value = attribute.prefix;
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

- Die Eigenschaften [`Attr.name`](/de/docs/Web/API/Attr/name), die den qualifizierten Namen des Attributs zurückgibt, und [`Attr.localName`](/de/docs/Web/API/Attr/localName), ihren lokalen Namen.
- Die [`Element.prefix()`](/de/docs/Web/API/Element/prefix)-Eigenschaft, die das Namensraum-Präfix eines [`Element`](/de/docs/Web/API/Element) zurückgibt.
