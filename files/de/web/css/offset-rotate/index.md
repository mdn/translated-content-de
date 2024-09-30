---
title: offset-rotate
slug: Web/CSS/offset-rotate
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die **`offset-rotate`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Orientierung/Richtung des Elements, während es entlang des {{cssxref("offset-path")}} positioniert wird.

{{EmbedInteractiveExample("pages/css/offset-rotate.html")}}

> [!NOTE]
> Frühere Versionen der Spezifikation nannten diese Eigenschaft `motion-rotation`.

## Syntax

```css
/* Follow the path direction, with optional additional angle */
offset-rotate: auto;
offset-rotate: auto 45deg;

/* Follow the path direction but facing the opposite direction of `auto` */
offset-rotate: reverse;

/* Keep a constant rotation regardless the position on the path */
offset-rotate: 90deg;
offset-rotate: 0.5turn;

/* Global values */
offset-rotate: inherit;
offset-rotate: initial;
offset-rotate: revert;
offset-rotate: revert-layer;
offset-rotate: unset;
```

- `auto`
  - : Das Element wird um den Winkel der Richtung des {{cssxref("offset-path")}} relativ zur positiven x-Achse gedreht. Dies ist der Standardwert.
- {{cssxref("&lt;angle&gt;")}}
  - : Das Element hat eine konstante im Uhrzeigersinn Rotationstransformation, die durch den angegebenen Rotationswinkel angewendet wird.
- `auto <angle>`
  - : Wenn `auto` von einem {{cssxref("&lt;angle&gt;")}} gefolgt wird, wird der berechnete Wert des Winkels zum berechneten Wert von `auto` hinzugefügt.
- `reverse`
  - : Das Element wird ähnlich wie bei `auto` gedreht, außer dass es in die entgegengesetzte Richtung zeigt. Es entspricht der Angabe eines Werts von `auto 180deg`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Orientierung des Elements entlang seines Offset-Pfads festlegen

#### HTML

```html
<div></div>
<div></div>
<div></div>
```

#### CSS

```css
div {
  width: 40px;
  height: 40px;
  background: #2bc4a2;
  margin: 20px;
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
  animation: move 5000ms infinite alternate ease-in-out;

  offset-path: path("M20,20 C20,50 180,-10 180,20");
}
div:nth-child(1) {
  offset-rotate: auto;
}
div:nth-child(2) {
  offset-rotate: auto 90deg;
}
div:nth-child(3) {
  offset-rotate: 30deg;
}

@keyframes move {
  100% {
    offset-distance: 100%;
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_element_orientation_along_its_offset_path', '100%', '200')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
