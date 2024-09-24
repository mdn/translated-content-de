---
title: break-inside
slug: Web/CSS/break-inside
l10n:
  sourceCommit: 69f98c69898886886f3267a4fa5f450f32133ca1
---

{{CSSRef}}

Die **`break-inside`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionsumbrüche innerhalb eines generierten Blocks handhaben werden sollen. Wenn kein generierter Block vorhanden ist, wird die Eigenschaft ignoriert.

{{EmbedInteractiveExample("pages/css/break-inside.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
break-inside: auto;
break-inside: avoid;
break-inside: avoid-page;
break-inside: avoid-column;
break-inside: avoid-region;

/* Globale Werte */
break-inside: inherit;
break-inside: initial;
break-inside: revert;
break-inside: revert-layer;
break-inside: unset;
```

Jeder mögliche Umbruchspunkt (mit anderen Worten, jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem {{cssxref("break-after")}} Wert des vorherigen Elements, dem {{cssxref("break-before")}} Wert des nachfolgenden Elements und dem `break-inside` Wert des umschließenden Elements.

Um festzustellen, ob ein Umbruch erfolgen muss, werden folgende Regeln angewendet:

1. Wenn einer der drei betroffenen Werte ein _erzwungener Umbruchwert_ ist (`always`, `left`, `right`, `page`, `column` oder `region`), hat er Vorrang. Wenn mehr als einer dieser Werte ein solcher Umbruch ist, wird der Wert des Elements verwendet, das zuletzt im Fluss erscheint. Somit hat der `break-before` Wert Vorrang vor dem `break-after` Wert, der wiederum Vorrang vor dem `break-inside` Wert hat.
2. Wenn einer der drei betroffenen Werte ein _Vermeidung-Umbruchwert_ ist (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`), wird an dieser Stelle kein solcher Umbruch angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können bei Bedarf weiche Umbrüche hinzugefügt werden, jedoch nicht an Elementgrenzen, die in einem entsprechenden `avoid` Wert resultieren.

### Werte

- `auto`
  - : Erlaubt, erzwingt aber nicht, dass ein Umbruch (Seite, Spalte oder Region) innerhalb des primären Blocks eingefügt wird.
- `avoid`
  - : Vermeidet jeden Umbruch (Seite, Spalte oder Region) innerhalb des primären Blocks.
- `avoid-page`
  - : Vermeidet jeden Seitenumbruch innerhalb des primären Blocks.
- `avoid-column`
  - : Vermeidet jeden Spaltenumbruch innerhalb des primären Blocks.
- `avoid-region`
  - : Vermeidet jeden Regionsumbruch innerhalb des primären Blocks.

## Seitenumbruch-Aliase

Aus Kompatibilitätsgründen sollte die alte Eigenschaft {{cssxref("page-break-inside")}} von Browsern als Alias von `break-inside` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-inside` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt als Aliase behandelt werden:

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

Im folgenden Beispiel haben wir einen Container, der eine `<h1>` Überschrift über alle Spalten gespannt enthält (erreicht mit `column-span: all`) und eine Reihe von Absätzen, die in mehreren Spalten mit `column-width: 200px` angeordnet sind. Wir haben auch eine `<figure>` mit einem Bild und einer Bildunterschrift.

Standardmäßig ist es möglich, dass ein Umbruch zwischen dem Bild und seiner Bildunterschrift erfolgt, was wir nicht möchten. Um dies zu vermeiden, haben wir `break-inside: avoid` auf die `<figure>` gesetzt, was bewirkt, dass sie immer zusammen bleiben.

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

- [Mehrspaltige Layouts](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Boxen mit CSS-Fragmentierung umbrechen](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
