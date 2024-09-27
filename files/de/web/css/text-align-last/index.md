---
title: text-align-last
slug: Web/CSS/text-align-last
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`text-align-last`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie die letzte Zeile eines Blocks oder einer Zeile, direkt vor einem erzwungenen Zeilenumbruch, ausgerichtet wird.

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
  - : Die betroffene Zeile wird gemäß dem Wert von {{cssxref("text-align")}} ausgerichtet, es sei denn, {{cssxref("text-align")}} ist `justify`. In diesem Fall hat `text-align-last` den gleichen Effekt wie `start`.
- `start`
  - : Das gleiche wie `left`, wenn die Schreibrichtung von links nach rechts verläuft, und `right`, wenn die Schreibrichtung von rechts nach links verläuft.
- `end`
  - : Das gleiche wie `right`, wenn die Schreibrichtung von links nach rechts verläuft, und `left`, wenn die Schreibrichtung von rechts nach links verläuft.
- `left`
  - : Der Inline-Inhalt wird am linken Rand des Linienkastens ausgerichtet.
- `right`
  - : Der Inline-Inhalt wird am rechten Rand des Linienkastens ausgerichtet.
- `center`
  - : Der Inline-Inhalt wird innerhalb des Linienkastens zentriert.
- `justify`
  - : Der Text wird ausgerichtet. Der Text sollte mit seinen linken und rechten Rändern zu den linken und rechten Inhaltsrändern des Absatzes übereinstimmen.

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
