---
title: "`text-align-last` CSS property"
short-title: text-align-last
slug: Web/CSS/Reference/Properties/text-align-last
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`text-align-last`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie die letzte Zeile eines Blocks oder einer Linie, direkt vor einem erzwungenen Zeilenumbruch, ausgerichtet wird.

{{InteractiveExample("CSS Demo: text-align-last")}}

```css interactive-example-choice
text-align-last: right;
```

```css interactive-example-choice
text-align-last: center;
```

```css interactive-example-choice
text-align-last: left;
```

```html interactive-example
<section id="default-example">
  <div>
    <p id="example-element">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>
  </div>
</section>
```

```css interactive-example
section {
  font-size: 1.5em;
}

#default-example > div {
  width: 250px;
}

#example-element {
  text-align: justify;
}
```

## Syntax

```css
/* Keyword values */
text-align-last: auto;
text-align-last: start;
text-align-last: end;
text-align-last: left;
text-align-last: right;
text-align-last: center;
text-align-last: justify;

/* Global values */
text-align-last: inherit;
text-align-last: initial;
text-align-last: revert;
text-align-last: revert-layer;
text-align-last: unset;
```

### Werte

Diese Eigenschaft wird mit einem der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Die betroffene Zeile wird gemäß dem Wert von {{cssxref("text-align")}} ausgerichtet, es sei denn, {{cssxref("text-align")}} ist `justify`, in diesem Fall ist der Effekt derselbe, als ob `text-align-last` auf `start` gesetzt wäre.
- `start`
  - : Entspricht `left`, wenn die Richtung von links nach rechts ist, und `right`, wenn die Richtung von rechts nach links ist.
- `end`
  - : Entspricht `right`, wenn die Richtung von links nach rechts ist, und `left`, wenn die Richtung von rechts nach links ist.
- `left`
  - : Der Inline-Inhalt wird am linken Rand des Linienkastens ausgerichtet.
- `right`
  - : Der Inline-Inhalt wird am rechten Rand des Linienkastens ausgerichtet.
- `center`
  - : Der Inline-Inhalt wird innerhalb des Linienkastens zentriert.
- `justify`
  - : Der Text wird im Blocksatz ausgerichtet. Der Text sollte mit seinen linken und rechten Kanten an den linken und rechten Inhaltsrändern des Absatzes ausgerichtet werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Letzte Zeile im Blocksatz

```html hidden
<p>
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
p {
  font-size: 1.4em;
  text-align: justify;
  text-align-last: center;
}
```

#### Ergebnisse

{{EmbedLiveSample('Justifying_the_last_line','560')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
