---
title: break-inside
slug: Web/CSS/Reference/Properties/break-inside
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`break-inside`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionsumbrüche innerhalb eines generierten Kastens behandelt werden sollen. Wenn kein generierter Kasten vorhanden ist, wird die Eigenschaft ignoriert.

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
    <div class="box" id="example-element">Content with 'break-before'</div>
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

Jeder mögliche Umbruchpunkt (also jede Elementgrenze) wird durch drei Eigenschaften beeinflusst: dem {{cssxref("break-after")}} Wert des vorhergehenden Elements, dem {{cssxref("break-before")}} Wert des nächsten Elements und dem `break-inside` Wert des enthaltenen Elements.

Um festzustellen, ob ein Umbruch erforderlich ist, werden die folgenden Regeln angewendet:

1. Wenn einer der drei betroffenen Werte ein _erzwungener Umbruchwert_ ist (`always`, `left`, `right`, `page`, `column` oder `region`), hat dieser Vorrang. Wenn mehr als einer dieser Werte ein solcher Umbruch ist, wird der Wert des Elements verwendet, das am spätesten im Fluss erscheint. Daher hat der `break-before` Wert Vorrang vor dem `break-after` Wert, der wiederum Vorrang vor dem `break-inside` Wert hat.
2. Wenn einer der drei betroffenen Werte ein _Vermeidungsumbruchwert_ ist (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`), wird an dieser Stelle kein solcher Umbruch angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können weiche Umbrüche hinzugefügt werden, wenn nötig, jedoch nicht an Elementgrenzen, die in einem entsprechenden `avoid` Wert aufgelöst werden.

### Werte

- `auto`
  - : Erlaubt, erzwingt aber keinen Umbruch (Seite, Spalte oder Region) innerhalb des Hauptkastens.
- `avoid`
  - : Vermeidet jeden Umbruch (Seite, Spalte oder Region) innerhalb des Hauptkastens.
- `avoid-page`
  - : Vermeidet jeden Seitenumbruch innerhalb des Hauptkastens.
- `avoid-column`
  - : Vermeidet jeden Spaltenumbruch innerhalb des Hauptkastens.
- `avoid-region`
  - : Vermeidet jeden Regionsumbruch innerhalb des Hauptkastens.

## Seitenumbruch-Aliase

Aus Kompatibilitätsgründen sollte die veraltete {{cssxref("page-break-inside")}} Eigenschaft von Browsern als Alias von `break-inside` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-inside` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt als Aliase behandelt werden:

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

Im folgenden Beispiel haben wir einen Container, der eine `<h1>` enthält, die sich über alle Spalten erstreckt (erreicht durch `column-span: all`) und eine Reihe von Absätzen, die in mehreren Spalten mit `column-width: 200px` angeordnet sind. Wir haben auch eine `<figure>` mit einem Bild und einer Bildunterschrift.

Standardmäßig kann es zu einem Umbruch zwischen dem Bild und der Bildunterschrift kommen, was wir nicht wollen. Um dies zu vermeiden, haben wir `break-inside: avoid` auf der `<figure>` gesetzt, wodurch sie stets zusammenbleiben.

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

- [Lernen: Mehrspaltiges Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Breaking Boxes With CSS Fragmentation](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
