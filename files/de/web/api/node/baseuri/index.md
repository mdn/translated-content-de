---
title: "Node: baseURI-Eigenschaft"
short-title: baseURI
slug: Web/API/Node/baseURI
l10n:
  sourceCommit: b7c9a25bc747b8a4a3dfd91a37ac1b2193414c3a
---

{{APIRef("DOM")}}

Die schreibgeschützte **`baseURI`**-Eigenschaft der {{domxref("Node")}}-Schnittstelle gibt die absolute Basis-URL des Dokuments zurück, das den Knoten enthält.

Die Basis-URL wird verwendet, um relative URLs aufzulösen, wenn der Browser eine absolute URL benötigt. Dies ist beispielsweise der Fall, wenn der `src`-Attribut eines HTML {{HTMLElement("img")}}-Elements oder die `xlink:href` {{deprecated_inline}} oder `href`-Attribute in SVG verarbeitet werden.

Obwohl diese Eigenschaft schreibgeschützt ist, wird ihr Wert bei jedem Zugriff auf die Eigenschaft durch einen Algorithmus bestimmt und kann sich ändern, wenn sich die Bedingungen geändert haben.

Die Basis-URL wird wie folgt bestimmt:

1. Standardmäßig ist die Basis-URL der Speicherort des Dokuments (wie durch {{domxref("window.location")}} bestimmt).
2. Handelt es sich um ein HTML-Dokument und es gibt ein {{HTMLElement("Base")}}-Element im Dokument,
   wird stattdessen der `href`-Wert des _ersten_ `Base`-Elements mit einem solchen Attribut verwendet.

## Wert

Ein String, der die Basis-URL des {{domxref("Node")}} darstellt.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTMLElement("base")}}-Element.
