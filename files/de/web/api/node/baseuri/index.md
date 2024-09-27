---
title: "Node: baseURI-Eigenschaft"
short-title: baseURI
slug: Web/API/Node/baseURI
l10n:
  sourceCommit: b7c9a25bc747b8a4a3dfd91a37ac1b2193414c3a
---

{{APIRef("DOM")}}

Die schreibgeschützte **`baseURI`**-Eigenschaft der [`Node`](/de/docs/Web/API/Node)-Schnittstelle gibt die absolute Basis-URL des Dokuments zurück, das den Knoten enthält.

Die Basis-URL wird verwendet, um relative URLs in absolute URLs aufzulösen, wenn der Browser diese benötigt, z.B. beim Verarbeiten des `src`-Attributs des HTML-{{HTMLElement("img")}}-Elements oder der `xlink:href` {{deprecated_inline}} oder `href`-Attribute in SVG.

Obwohl diese Eigenschaft schreibgeschützt ist, wird ihr Wert jedes Mal, wenn die Eigenschaft abgerufen wird, durch einen Algorithmus bestimmt und kann sich ändern, wenn sich die Bedingungen geändert haben.

Die Basis-URL wird wie folgt bestimmt:

1. Standardmäßig ist die Basis-URL der Speicherort des Dokuments (wie durch [`window.location`](/de/docs/Web/API/Window/location) bestimmt).
2. Handelt es sich um ein HTML-Dokument und befindet sich ein {{HTMLElement("Base")}}-Element im Dokument, wird stattdessen der `href`-Wert des _ersten_ `Base`-Elements mit einem solchen Attribut verwendet.

## Wert

Ein String, der die Basis-URL des [`Node`](/de/docs/Web/API/Node) darstellt.

## Beispiele

### Ohne \<base>

```html
<output>Not calculated</output>
```

```js
const output = document.querySelector("output");
output.value = output.baseURI;
```

{{EmbedLiveSample("Without_base", "100%", 40)}}

### Mit \<base>

```html
<base href="https://developer.mozilla.org/modified_base_uri/" />
<output>Not calculated</output>
```

```js
const output = document.querySelector("output");
output.value = output.baseURI;
```

{{EmbedLiveSample("With_base", "100%", 40)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("base")}}-Element.
