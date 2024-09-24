---
title: offset-anchor
slug: Web/CSS/offset-anchor
l10n:
  sourceCommit: 0b26e0b94c77c3d34f0b8b77ba624a7323ccfdad
---

{{CSSRef}}

Die **`offset-anchor`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt den Punkt innerhalb der Box eines Elements, das entlang eines {{cssxref("offset-path")}} bewegt wird, der tatsächlich entlang des Pfads bewegt wird.

{{EmbedInteractiveExample("pages/css/offset-anchor.html")}}

## Syntax

```css
/* Keyword-Werte */
offset-anchor: top;
offset-anchor: bottom;
offset-anchor: left;
offset-anchor: right;
offset-anchor: center;
offset-anchor: auto;

/* <percentage> Werte */
offset-anchor: 25% 75%;

/* <length> Werte */
offset-anchor: 0 0;
offset-anchor: 1cm 2cm;
offset-anchor: 10ch 8em;

/* Randversatzwerte */
offset-anchor: bottom 10px right 20px;
offset-anchor: right 3em bottom 10px;

/* Globale Werte */
offset-anchor: inherit;
offset-anchor: initial;
offset-anchor: revert;
offset-anchor: revert-layer;
offset-anchor: unset;
```

### Werte

- `auto`
  - : `offset-anchor` erhält denselben Wert wie der {{cssxref("transform-origin")}} des Elements, es sei denn, {{cssxref("offset-path")}} ist `none`, in diesem Fall übernimmt es seinen Wert von {{cssxref("offset-position")}}.
- `<position>`
  - : Ein {{cssxref("&lt;position&gt;")}} definiert eine x/y-Koordinate, um ein Element relativ zu den Kanten der Elementbox zu platzieren. Es kann mit einem bis vier Werten definiert werden. Für weitere Details siehe die Referenzseiten zu {{cssxref("&lt;position&gt;")}} und {{cssxref("background-position")}}. Beachten Sie, dass die 3-Wert Positionssyntax für keine Verwendung von `<position>` funktioniert, außer bei `background(-position)`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verschiedene offset-anchor Werte setzen

Im folgenden Beispiel haben wir drei {{htmlelement("div")}} Elemente, die in {{htmlelement("section")}} Elemente eingebettet sind. Jedes `<div>` erhält denselben {{cssxref("offset-path")}} (eine horizontale Linie mit einer Länge von 200 Pixeln) und wird animiert, um sich entlang dieser zu bewegen. Die drei bekommen dann unterschiedliche {{cssxref("background-color")}} und `offset-anchor` Werte.

Jedes `<section>` wurde mit einem linearen Verlauf gestaltet, um eine horizontale Linie durch die Mitte zu erzeugen, um Ihnen eine visuelle Darstellung zu geben, wo die `<div>` Offset-Pfade verlaufen.

Dies ermöglicht es Ihnen zu sehen, welchen Effekt die unterschiedlichen `offset-anchor` Werte haben — der erste, `auto`, bewirkt, dass der Mittelpunkt des `<div>` entlang des Pfades bewegt wird. Die anderen beiden bewirken, dass die Punkte oben rechts bzw. unten links des `<div>` entlang des Pfades bewegt werden.

#### HTML

```html
<section>
  <div class="offset-anchor1"></div>
</section>
<section>
  <div class="offset-anchor2"></div>
</section>
<section>
  <div class="offset-anchor3"></div>
</section>
```

#### CSS

```css
div {
  offset-path: path("M 0,20 L 200,20");
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
}

section {
  background-image: linear-gradient(
    to bottom,
    transparent,
    transparent 49%,
    #000 50%,
    #000 51%,
    transparent 52%
  );
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

.offset-anchor1 {
  offset-anchor: auto;
  background: cyan;
}

.offset-anchor2 {
  offset-anchor: right top;
  background: purple;
}

.offset-anchor3 {
  offset-anchor: left bottom;
  background: magenta;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_various_offset-anchor_values', '100%', '300')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("offset")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-rotate")}}
- [SVG `<path>`](/de/docs/Web/SVG/Tutorial/Paths)
