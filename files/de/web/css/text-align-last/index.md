---
title: text-align-last
slug: Web/CSS/text-align-last
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{CSSRef}}

Die **`text-align-last`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie die letzte Zeile eines Blocks oder einer Zeile, direkt vor einem erzwungenen Zeilenumbruch, ausgerichtet wird.

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

- `auto`
  - : Die betroffene Zeile wird entsprechend dem Wert von {{cssxref("text-align")}} ausgerichtet, es sei denn, {{cssxref("text-align")}} ist `justify`, in welchem Fall die Wirkung der Einstellung von `text-align-last` auf `start` entspricht.
- `start`
  - : Entspricht `left`, wenn die Richtung von links nach rechts ist, und `right`, wenn die Richtung von rechts nach links ist.
- `end`
  - : Entspricht `right`, wenn die Richtung von links nach rechts ist, und `left`, wenn die Richtung von rechts nach links ist.
- `left`
  - : Der inline Inhalt wird am linken Rand des Linienkastens ausgerichtet.
- `right`
  - : Der inline Inhalt wird am rechten Rand des Linienkastens ausgerichtet.
- `center`
  - : Der inline Inhalt wird innerhalb des Linienkastens zentriert.
- `justify`
  - : Der Text wird gerechtfertigt. Der Text sollte so ausgerichtet werden, dass die linken und rechten Ränder mit den linken und rechten Inhaltsrändern des Absatzes übereinstimmen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Die letzte Zeile rechtfertigen

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
