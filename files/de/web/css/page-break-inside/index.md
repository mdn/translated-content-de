---
title: page-break-inside
slug: Web/CSS/page-break-inside
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{deprecated_header}}

> [!WARNING]
> Diese Eigenschaft wurde durch die {{cssxref("break-inside")}}-Eigenschaft ersetzt.

Die **`page-break-inside`** [CSS](/de/docs/Web/CSS) Eigenschaft passt Seitenumbrüche _innerhalb_ des aktuellen Elements an.

{{InteractiveExample("CSS Demo: page-break-inside")}}

```css interactive-example-choice
page-break-inside: auto;
```

```css interactive-example-choice
page-break-inside: avoid;
```

```html interactive-example
<section id="default-example">
  <div>
    <p>
      The effect of this property can be noticed when the document is being
      printed or a preview of a print is displayed.
    </p>
    <button id="print-btn">Show Print Preview</button>
    <div class="box-container">
      <div class="box">Content before the property</div>
      <div class="box" id="example-element">
        Content with 'page-break-inside'
      </div>
      <div class="box">Content after the property</div>
    </div>
  </div>
</section>
```

```css interactive-example
.box {
  border: solid #5b6dcd 5px;
  background-color: #5b6dcd;
  margin: 10px 0;
  padding: 5px;
}

#example-element {
  border: solid 5px #ffc129;
  background-color: #ffc129;
  color: black;
}

.hide-element {
  display: none;
}

@media print {
  #example-element {
    height: 25cm;
  }
}
```

```js interactive-example
const btn = document.getElementById("print-btn");
const editorContainer = document.getElementsByClassName(
  "css-editor-container",
)[0];
const exampleHTMLElement = document.getElementById("default-example");

const printableSection = document.createElement("div");
printableSection.setAttribute("id", "printable-section");
printableSection.classList.add("hide-element");
document.body.appendChild(printableSection);

btn.addEventListener("click", () => {
  const exampleContent = exampleHTMLElement.innerHTML;

  editorContainer.classList.add("hide-element");
  printableSection.innerHTML = exampleContent;
  printableSection.classList.remove("hide-element");

  window.print();

  printableSection.classList.add("hide-element");
  printableSection.innerHTML = "";
  editorContainer.classList.remove("hide-element");
});
```

## Syntax

```css
/* Keyword values */
page-break-inside: auto;
page-break-inside: avoid;

/* Global values */
page-break-inside: inherit;
page-break-inside: initial;
page-break-inside: revert;
page-break-inside: revert-layer;
page-break-inside: unset;
```

### Werte

- `auto`
  - : Anfangswert. Automatische Seitenumbrüche (weder erzwungen noch verboten).
- `avoid`
  - : Vermeidet Seitenumbrüche innerhalb des Elements.

## Seitenumbruch-Aliasse

Die `page-break-inside`-Eigenschaft ist jetzt eine veraltete Eigenschaft, die durch {{cssxref("break-inside")}} ersetzt wurde.

Aus Kompatibilitätsgründen sollte `page-break-inside` von Browsern als Alias für `break-inside` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-inside` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt als Aliasse verwendet werden:

| page-break-inside | break-inside |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `avoid`           | `avoid`      |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vermeidung von Seitenumbrüchen innerhalb von Elementen

#### HTML

```html
<div class="page">
  <p>This is the first paragraph.</p>
  <section class="list">
    <span>A list</span>
    <ol>
      <li>one</li>
      <!-- <li>two</li> -->
    </ol>
  </section>
  <ul>
    <li>one</li>
    <!-- <li>two</li> -->
  </ul>
  <p>This is the second paragraph.</p>
  <p>This is the third paragraph, it contains more text.</p>
  <p>
    This is the fourth paragraph. It has a little bit more text than the third
    one.
  </p>
</div>
```

#### CSS

```css
.page {
  background-color: #8cffa0;
  height: 90px;
  width: 200px;
  columns: 1;
  column-width: 100px;
}

.list,
ol,
ul,
p {
  break-inside: avoid;
}

p {
  background-color: #8ca0ff;
}

ol,
ul,
.list {
  margin: 0.5em 0;
  display: block;
  background-color: orange;
}

p:first-child {
  margin-top: 0;
}
```

#### Ergebnis

{{EmbedLiveSample("Avoiding_page_breaks_inside_elements", 400, 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("break-before")}}, {{cssxref("break-after")}}, {{cssxref("break-inside")}}
- {{cssxref("page-break-after")}}, {{cssxref("page-break-before")}}
- {{cssxref("orphans")}}, {{cssxref("widows")}}
