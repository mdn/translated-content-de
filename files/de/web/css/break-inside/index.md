---
title: break-inside
slug: Web/CSS/break-inside
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`break-inside`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionsumbrüche innerhalb eines generierten Kastens ausgeführt werden sollen. Falls kein generierter Kasten vorhanden ist, wird die Eigenschaft ignoriert.

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

Jeder mögliche Umbruchpunkt (mit anderen Worten, jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem {{cssxref("break-after")}} Wert des vorherigen Elements, dem {{cssxref("break-before")}} Wert des nächsten Elements und dem `break-inside` Wert des enthaltenen Elements.

Um festzustellen, ob ein Umbruch durchgeführt werden muss, werden folgende Regeln angewendet:

1. Wenn einer der drei betrachteten Werte ein _erzwungener Umbruchwert_ ist (`always`, `left`, `right`, `page`, `column` oder `region`), hat er Vorrang. Wenn mehrere von ihnen ein solcher Umbruchwert sind, wird der Wert des zuletzt im Fluss erscheinenden Elements verwendet. Somit hat der `break-before` Wert Vorrang vor dem `break-after` Wert, der wiederum Vorrang vor dem `break-inside` Wert hat.
2. Wenn einer der drei betrachteten Werte ein _Vermeidungsbruchwert_ ist (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`), wird an dieser Stelle kein solcher Umbruch angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können weiche Umbrüche bei Bedarf hinzugefügt werden, jedoch nicht an Elementgrenzen, die einen entsprechenden `avoid` Wert aufweisen.

### Werte

- `auto`
  - : Erlaubt, aber erzwingt nicht, dass ein Umbruch (Seite, Spalte oder Region) innerhalb des Hauptkastens eingefügt wird.
- `avoid`
  - : Vermeidet, dass ein Umbruch (Seite, Spalte oder Region) innerhalb des Hauptkastens eingefügt wird.
- `avoid-page`
  - : Vermeidet jeden Seitenumbruch innerhalb des Hauptkastens.
- `avoid-column`
  - : Vermeidet jeden Spaltenumbruch innerhalb des Hauptkastens.
- `avoid-region`
  - : Vermeidet jeden Regionsumbruch innerhalb des Hauptkastens.

## Seitenumbruch-Aliasse

Aus Kompatibilitätsgründen sollte die veraltete Eigenschaft {{cssxref("page-break-inside")}} von Browsern als Alias von `break-inside` behandelt werden. Dies stellt sicher, dass Seiten, die `page-break-inside` verwenden, wie vorgesehen funktionieren. Ein Teilbereich der Werte sollte wie folgt als Alias wirken:

| page-break-inside | break-inside |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `avoid`           | `avoid`      |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vermeidung des Umbruchs innerhalb eines Bildes

Im folgenden Beispiel haben wir einen Container, der eine `<h1>` Überschrift enthält, die alle Spalten überspannt (erreicht mit `column-span: all`) und eine Reihe von Absätzen, die mit `column-width: 200px` über mehrere Spalten layoutet sind. Wir haben auch ein `<figure>`, das ein Bild und eine Bildunterschrift enthält.

Standardmäßig kann zwischen dem Bild und seiner Bildunterschrift ein Umbruch erfolgen, was wir nicht wollen. Um dies zu vermeiden, haben wir `break-inside: avoid` auf das `<figure>` gesetzt, was bewirkt, dass sie immer zusammenbleiben.

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

- [Lernen: Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Bruchstellen mit CSS-Fragmente umsetzen](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
