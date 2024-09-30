---
title: break-inside
slug: Web/CSS/break-inside
l10n:
  sourceCommit: 69f98c69898886886f3267a4fa5f450f32133ca1
---

{{CSSRef}}

Die **`break-inside`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionsumbrüche innerhalb eines generierten Rahmens verhalten sollen. Wenn es keinen generierten Rahmen gibt, wird die Eigenschaft ignoriert.

{{EmbedInteractiveExample("pages/css/break-inside.html")}}

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

Jeder mögliche Umbruchpunkt (mit anderen Worten, jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem {{cssxref("break-after")}} Wert des vorhergehenden Elements, dem {{cssxref("break-before")}} Wert des nächsten Elements und dem `break-inside` Wert des umschließenden Elements.

Um zu bestimmen, ob ein Umbruch durchgeführt werden muss, gelten folgende Regeln:

1. Wenn einer der drei betreffenden Werte ein _erzwungener Umbruchwert_ ist (`always`, `left`, `right`, `page`, `column` oder `region`), hat dieser Vorrang. Wenn mehr als einer dieser Werte ein solcher Umbruch ist, wird der Wert des Elements verwendet, das zuletzt im Fluss erscheint. Auf diese Weise hat der Wert von `break-before` Vorrang vor dem Wert von `break-after`, der wiederum Vorrang vor dem Wert von `break-inside` hat.
2. Wenn einer der drei betreffenden Werte ein _Vermeidungsvollumbruchwert_ ist (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`), wird an dieser Stelle kein solcher Umbruch angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können weiche Umbrüche bei Bedarf hinzugefügt werden, jedoch nicht an Elementgrenzen, die in einem entsprechenden `avoid` Wert aufgelöst werden.

### Werte

- `auto`
  - : Erlaubt, erzwingt jedoch keinen Umbruch (Seite, Spalte oder Region) innerhalb des Hauptrahmens.
- `avoid`
  - : Vermeidet jeglichen Umbruch (Seite, Spalte oder Region) innerhalb des Hauptrahmens.
- `avoid-page`
  - : Vermeidet Seitenumbrüche innerhalb des Hauptrahmens.
- `avoid-column`
  - : Vermeidet Spaltenumbrüche innerhalb des Hauptrahmens.
- `avoid-region`
  - : Vermeidet Regionsumbrüche innerhalb des Hauptrahmens.

## Seitenu mbruch- Aliase

Aus Kompatibilitätsgründen sollte die veraltete Eigenschaft {{cssxref("page-break-inside")}} von Browsern als Alias von `break-inside` behandelt werden. Dies stellt sicher, dass Webseiten, die `page-break-inside` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt als Alias verwendet werden:

| page-break-inside | break-inside |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `avoid`           | `avoid`      |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vermeidung von Umbrüchen innerhalb einer Figure

Im folgenden Beispiel haben wir einen Container, der eine `<h1>` Überschrift enthält, die sich über alle Spalten erstreckt (erreicht durch `column-span: all`) und eine Reihe von Absätzen, die mithilfe von `column-width: 200px` in mehrere Spalten aufgeteilt sind. Wir haben auch ein `<figure>`, das ein Bild und eine Beschriftung enthält.

Standardmäßig kann es zu einem Umbruch zwischen Bild und Beschriftung kommen, was wir nicht möchten. Um dies zu vermeiden, haben wir `break-inside: avoid` auf das `<figure>` gesetzt, sodass sie immer zusammen bleiben.

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

- [Mehrspaltiges Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Boxen mit CSS Fragmentation brechen](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
