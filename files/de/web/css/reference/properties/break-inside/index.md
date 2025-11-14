---
title: break-inside
slug: Web/CSS/Reference/Properties/break-inside
l10n:
  sourceCommit: 18161d1b77cdfdc739a4f05be695961924b4c173
---

Die **`break-inside`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, wie Seiten-, Spalten- oder Regionenumbrüche innerhalb eines generierten Rahmens verhalten sollen. Wenn kein generierter Rahmen vorhanden ist, wird die Eigenschaft ignoriert.

{{InteractiveExample("CSS Demo: break-inside")}}

```css interactive-example-choice
break-inside: auto;
```

```css interactive-example-choice
break-inside: avoid;
```

```html interactive-example
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

@media print {
  #example-element {
    height: 25cm;
  }
}
```

```js interactive-example
const btn = document.getElementById("print-btn");

btn.addEventListener("click", () => {
  window.print();
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

Jeder mögliche Umbruchpunkt (mit anderen Worten, jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem {{cssxref("break-after")}} Wert des vorherigen Elements, dem {{cssxref("break-before")}} Wert des nächsten Elements und dem `break-inside` Wert des enthaltenen Elements.

Um zu bestimmen, ob ein Umbruch erfolgt, werden die folgenden Regeln angewendet:

1. Wenn einer der drei betreffenden Werte ein _erzwungener Umbruchwert_ ist (`always`, `left`, `right`, `page`, `column` oder `region`), hat dieser Vorrang. Wenn mehr als einer dieser Umbrüche vorhanden ist, wird der Wert des Elements verwendet, das zuletzt im Fluss erscheint. Somit hat der `break-before` Wert Vorrang vor dem `break-after` Wert, welcher wiederum Vorrang vor dem `break-inside` Wert hat.
2. Wenn einer der drei betreffenden Werte ein _Vermeidungsumbruchwert_ ist (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`), wird an dieser Stelle kein solcher Umbruch angewendet.

Nachdem erzwungene Umbrüche angewendet wurden, können weiche Umbrüche hinzugefügt werden, wenn nötig, jedoch nicht an Elementgrenzen, die sich in einem entsprechenden `avoid` Wert auflösen.

### Werte

- `auto`
  - : Erlaubt, erzwingt jedoch nicht, dass ein beliebiger Umbruch (Seite, Spalte oder Region) innerhalb des Hauptrahmens eingefügt wird.
- `avoid`
  - : Vermeidet jeglichen Umbruch (Seite, Spalte oder Region) innerhalb des Hauptrahmens.
- `avoid-page`
  - : Vermeidet jeglichen Seitenumbruch innerhalb des Hauptrahmens.
- `avoid-column`
  - : Vermeidet jeglichen Spaltenumbruch innerhalb des Hauptrahmens.
- `avoid-region`
  - : Vermeidet jeglichen Regionsumbruch innerhalb des Hauptrahmens.

## Seitenumbruch Aliase

Aus Kompatibilitätsgründen sollte die veraltete {{cssxref("page-break-inside")}} Eigenschaft von Browsern als Alias für `break-inside` betrachtet werden. Dies stellt sicher, dass Webseiten, die `page-break-inside` verwenden, wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt als Alias verwendet werden:

| page-break-inside | break-inside |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `avoid`           | `avoid`      |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vermeidung von Umbrüchen innerhalb einer Abbildung

Im folgenden Beispiel haben wir einen Container, der eine `<h1>`-Überschrift über alle Spalten spannt (erreicht durch `column-span: all`) und eine Reihe von Absätzen, die in mehreren Spalten mithilfe von `column-width: 200px` angeordnet sind. Wir haben auch eine `<figure>`, die ein Bild und eine Bildunterschrift enthält.

Standardmäßig ist es möglich, dass zwischen dem Bild und seiner Bildunterschrift ein Umbruch erfolgt, was wir nicht möchten. Um dies zu vermeiden, haben wir `break-inside: avoid` auf die `<figure>` gesetzt, wodurch sie immer zusammenbleiben.

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
  font-family: "Helvetica", "Arial", sans-serif;
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

- [Lernen: Layout mit mehreren Spalten](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Umbruch von Boxen mit CSS-Fragmentierung](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
