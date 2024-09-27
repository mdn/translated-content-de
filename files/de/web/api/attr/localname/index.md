---
title: "Attr: Eigenschaft localName"
short-title: localName
slug: Web/API/Attr/localName
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}

Die schreibgeschützte **`localName`**-Eigenschaft der [`Attr`](/de/docs/Web/API/Attr)-Schnittstelle gibt den _lokalen Teil_ des _qualifizierten Namens_ eines Attributs zurück, also den Namen des Attributs, von jeglichem Namensraum davor befreit. Wenn zum Beispiel der qualifizierte Name `xml:lang` ist, dann ist der zurückgegebene lokale Name `lang`, vorausgesetzt, dass das Element diesen Namensraum unterstützt.

Der lokale Name ist immer in Kleinbuchstaben, unabhängig davon, in welcher Groß- und Kleinschreibung das Attribut erstellt wurde.

> [!NOTE]
> HTML unterstützt nur eine feste Anzahl von Namensräumen auf SVG- und MathML-Elementen. Diese sind `xml` (für das `xml:lang` Attribut), `xlink` (für die `xlink:href`, `xlink:show`, `xlink:target` und `xlink:title` Attribute) und `xpath`.
>
> Das bedeutet, dass der lokale Name eines Attributs eines HTML-Elements immer mit seinem qualifizierten Namen übereinstimmt: Doppelpunkte werden als normale Zeichen behandelt. In XML, wie in SVG oder MathML, zeigt der Doppelpunkt das Ende des Präfixes an und davor ist der Namensraum; der lokale Name kann sich vom qualifizierten Namen unterscheiden.

## Wert

Ein String, der den lokalen Teil des qualifizierten Namens des Attributs darstellt.

## Beispiel

Das folgende Beispiel zeigt den lokalen Namen des ersten Attributs der beiden ersten Elemente an, wenn wir auf den entsprechenden Button klicken. Das {{SVGElement("svg")}}-Element ist XML und unterstützt Namensräume, was dazu führt, dass der lokale Name (`lang`) sich vom qualifizierten Namen `xml:lang` unterscheidet. Das {{HTMLElement("label")}}-Element ist HTML und unterstützt keine Namensräume, was dazu führt, dass der lokale Name und der qualifizierte Name beide `xml:lang` sind.

### HTML

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<p>
  <button>Show value for &lt;svg&gt;</button>
  <button>Show value for &lt;label&gt;</button>
</p>

<p>
  Local part of the attribute <code>xml:lang</code>:
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
    outputEl.value = attribute.localName;
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

- Die Eigenschaften [`Attr.name`](/de/docs/Web/API/Attr/name), die den qualifizierten Namen des Attributs zurückgibt, und [`Attr.prefix`](/de/docs/Web/API/Attr/prefix), das Namespace-Präfix.
- Die [`Element.localName()`](/de/docs/Web/API/Element/localName)-Eigenschaft, die den lokalen Namen eines [`Element`](/de/docs/Web/API/Element) zurückgibt.
