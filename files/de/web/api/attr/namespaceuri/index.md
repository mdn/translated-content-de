---
title: "Attr: namespaceURI-Eigenschaft"
short-title: namespaceURI
slug: Web/API/Attr/namespaceURI
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{APIRef("DOM")}}

Die schreibgeschützte **`namespaceURI`**-Eigenschaft der [`Attr`](/de/docs/Web/API/Attr)-Schnittstelle gibt die Namespace-URI des Attributs zurück oder `null`, wenn das Element sich nicht in einem Namespace befindet.

Die Namespace-URI wird bei der Erstellung des [`Attr`](/de/docs/Web/API/Attr) festgelegt und kann nicht geändert werden. Ein Attribut mit einem Namespace kann mit [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) erstellt werden.

> [!NOTE]
> Ein Attribut erbt seinen Namespace nicht von dem Element, an das es gebunden ist. Wenn einem Attribut nicht ausdrücklich ein Namespace zugewiesen wird, hat es keinen Namespace.

Der Browser übernimmt nicht die Kontrolle oder Validierung der Namespaces an sich. Es obliegt der JavaScript-Anwendung, bei Bedarf eine Validierung durchzuführen. Beachten Sie auch, dass das Namespace-Präfix, sobald es mit einem bestimmten Attributknoten verknüpft ist, nicht geändert werden kann.

## Wert

Ein String, der die URI des Namespace enthält, oder `null`, wenn das Attribut sich nicht in einem Namespace befindet.

## Beispiel

Das folgende Beispiel zeigt die Ergebnisse für ein Attribut mit Präfix in einem HTML-Element und einem SVG-Element. Da HTML keine Namespaces verarbeitet, wird in diesem Fall immer `null` zurückgegeben. Im Fall des SVG-Elements wird die URI des XML-Namespaces zurückgegeben, `http://www.w3.org/XML/1998/namespace`.

### HTML

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<p>
  <button>Show value for &lt;svg&gt;</button>
  <button>Show value for &lt;label&gt;</button>
</p>

<p>
  Namespace URI of the attribute <code>xml:lang</code>:
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
    outputEl.value = attribute.namespaceURI;
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

- Die Eigenschaften [`Attr.name`](/de/docs/Web/API/Attr/name), die den qualifizierten Namen des Attributs zurückgibt, [`Attr.localName`](/de/docs/Web/API/Attr/localName), den lokalen Teil des Namens, und [`Attr.prefix`](/de/docs/Web/API/Attr/prefix), das Namespace-Präfix.
- Die [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI)-Eigenschaft, die gleichwertig mit dieser, aber für ein [`Element`](/de/docs/Web/API/Element) ist.
- Die Methode [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS), die ein Attribut mit einem gegebenen Namespace erstellt.
