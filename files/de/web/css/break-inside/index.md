---
title: break-inside
slug: Web/CSS/break-inside
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`break-inside`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionsumbrüche innerhalb einer generierten Box verhalten sollen. Wenn keine generierte Box existiert, wird die Eigenschaft ignoriert.

{{InteractiveExample("CSS Demo: break-inside")}}

```css interactive-example-choice
break-inside: auto;
```

```css interactive-example-choice
break-inside: avoid;
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
      <div class="box" id="example-element">Content with 'break-inside'</div>
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
break-inside: auto;
break-inside: avoid;
break-inside: avoid-page;
break-inside: avoid-column;
break-inside: avoid-region;

/* Global values */
break-inside: inherit;
break-inside: initial;
break-inside: revert;
break-inside: revert-layer;
break-inside: unset;
```

Jeder mögliche Umbruchpunkt (mit anderen Worten, jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem Wert von {{cssxref("break-after")}} des vorherigen Elements, dem Wert von {{cssxref("break-before")}} des nächsten Elements und dem `break-inside` Wert des enthaltenden Elements.

Um zu bestimmen, ob ein Umbruch erfolgen muss, werden die folgenden Regeln angewendet:

1. Wenn einer der drei betroffenen Werte ein _erzwungener Umbruchwert_ (`always`, `left`, `right`, `page`, `column` oder `region`) ist, hat er Vorrang. Wenn mehr als einer dieser Umbruchwerte vorliegt, wird der Wert des Elements verwendet, das im Fluss am spätesten erscheint. Somit hat der `break-before` Wert Vorrang vor dem `break-after` Wert, welcher wiederum Vorrang vor dem `break-inside` Wert hat.
2. Wenn einer der drei betroffenen Werte ein _Umbruch-vermeidender Wert_ (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`) ist, wird an dieser Stelle kein solcher Umbruch angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können bei Bedarf weiche Umbrüche hinzugefügt werden, jedoch nicht an Elementgrenzen, die in einem entsprechenden `avoid` Wert aufgelöst werden.

### Werte

- `auto`
  - : Ermöglicht, erzwingt jedoch nicht, dass ein Umbruch (Seite, Spalte oder Region) innerhalb der Hauptbox eingefügt wird.
- `avoid`
  - : Vermeidet, dass ein Umbruch (Seite, Spalte oder Region) innerhalb der Hauptbox eingefügt wird.
- `avoid-page`
  - : Vermeidet jeden Seitenumbruch innerhalb der Hauptbox.
- `avoid-column`
  - : Vermeidet jeden Spaltenumbruch innerhalb der Hauptbox.
- `avoid-region`
  - : Vermeidet jeden Regionsumbruch innerhalb der Hauptbox.

## Seitenumbruch-Aliasse

Aus Kompatibilitätsgründen sollte die veraltete Eigenschaft {{cssxref("page-break-inside")}} von Browsern als Alias für `break-inside` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-inside` verwenden, wie beabsichtigt funktionieren. Ein Teil der Werte sollte wie folgt als Alias verwendet werden:

| page-break-inside | break-inside |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `avoid`           | `avoid`      |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vermeiden von Umbrüchen innerhalb einer Grafik

Im folgenden Beispiel haben wir einen Container, der eine `<h1>` enthält, die sich über alle Spalten erstreckt (erreicht durch `column-span: all`) und eine Reihe von Absätzen, die in mehreren Spalten mit `column-width: 200px` ausgelegt sind. Wir haben auch eine `<figure>`, die ein Bild und eine Beschriftung enthält.

Standardmäßig ist es möglich, dass ein Umbruch zwischen dem Bild und seiner Beschriftung erfolgt, was wir nicht wollen. Um dies zu vermeiden, haben wir `break-inside: avoid` auf die `<figure>` angewendet, wodurch sie immer zusammenbleiben.

#### HTML

```html
<article>
  <h1>Main heading</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
    fringilla mauris. Quisque commodo eget nisi sed pretium. Mauris luctus nec
    lacus in ultricies. Mauris vitae hendrerit arcu, ac scelerisque lacus.
    Aliquam lobortis in lacus sit amet posuere. Fusce iaculis urna id neque
    dapibus, eu lacinia lectus dictum.
  </p>

  <figure>
    <img
      src="https://mdn.dev/archives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png" />
    <figcaption>The Firefox logo — fox wrapped around the world</figcaption>
  </figure>

  <p>
    Praesent condimentum dui dui, sit amet rutrum diam tincidunt eu. Cras
    suscipit porta leo sit amet rutrum. Sed vehicula ornare tincidunt. Curabitur
    a ipsum ac diam mattis volutpat ac ut elit. Nullam luctus justo non
    vestibulum gravida. Morbi metus libero, pharetra non porttitor a, molestie
    nec nisi.
  </p>

  <p>
    In finibus viverra enim vel suscipit. Quisque consequat velit eu orci
    malesuada, ut interdum tortor molestie. Proin sed pellentesque augue. Nam
    risus justo, faucibus non porta a, congue vel massa. Cras luctus lacus nisl,
    sed tincidunt velit pharetra ac. Duis suscipit faucibus dui sed ultricies.
  </p>
</article>
```

#### CSS

```css
html {
  font-family: helvetica, arial, sans-serif;
}

body {
  width: 80%;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  letter-spacing: 2px;
  column-span: all;
}

h1 + p {
  margin-top: 0;
}

p {
  line-height: 1.5;
  break-after: column;
}

figure {
  break-inside: avoid;
}

img {
  max-width: 70%;
  display: block;
  margin: 0 auto;
}

figcaption {
  font-style: italic;
  font-size: 0.8rem;
  width: 70%;
}

article {
  column-width: 200px;
  gap: 20px;
}
```

### Ergebnis

{{EmbedLiveSample('Avoiding_breaking_inside_a_figure', '100%', 600)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erlernen: Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Breaking Boxes With CSS Fragmentation](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
