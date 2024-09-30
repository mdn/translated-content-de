---
title: text-align-last
slug: Web/CSS/text-align-last
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`text-align-last`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie die letzte Zeile eines Blocks oder eine Zeile, direkt vor einem erzwungenen Zeilenumbruch, ausgerichtet wird.

{{EmbedInteractiveExample("pages/css/text-align-last.html")}}

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
  - : Die betroffene Zeile wird entsprechend dem Wert von {{cssxref("text-align")}} ausgerichtet, es sei denn, {{cssxref("text-align")}} ist `justify`, in welchem Fall der Effekt dem gleichkommt, als wäre `text-align-last` auf `start` gesetzt.
- `start`
  - : Entspricht `left`, wenn die Richtung von links nach rechts ist, und `right`, wenn die Richtung von rechts nach links ist.
- `end`
  - : Entspricht `right`, wenn die Richtung von links nach rechts ist, und `left`, wenn die Richtung von rechts nach links ist.
- `left`
  - : Der Inline-Inhalt wird am linken Rand der Linienbox ausgerichtet.
- `right`
  - : Der Inline-Inhalt wird am rechten Rand der Linienbox ausgerichtet.
- `center`
  - : Der Inline-Inhalt wird in der Linienbox zentriert.
- `justify`
  - : Der Text wird ausgerichtet. Der Text sollte mit seinen linken und rechten Rändern an den linken und rechten Inhaltsrändern des Absatzes ausgerichtet sein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Die letzte Zeile ausrichten

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
