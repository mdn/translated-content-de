---
title: Perspektive
slug: Web/CSS/perspective
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

Die **`perspective`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt die Distanz zwischen der z=0 Ebene und dem Benutzer, um einem 3D-positionierten Element eine Perspektive zu verleihen.

{{EmbedInteractiveExample("pages/css/perspective.html")}}

## Syntax

```css
/* Schlüsselwert */
perspective: none;

/* <Längen> Werte */
perspective: 20px;
perspective: 3.5em;

/* Globale Werte */
perspective: inherit;
perspective: initial;
perspective: revert;
perspective: revert-layer;
perspective: unset;
```

### Werte

- `none`
  - : Gibt an, dass keine Perspektivtransformation angewendet werden soll.
- `<length>`
  - : Eine {{cssxref("&lt;length&gt;")}}, die die Distanz vom Benutzer zur z=0 Ebene angibt. Sie wird verwendet, um eine Perspektivtransformation auf die Kinder des Elements anzuwenden. Negative Werte führen zu Syntaxfehlern. Wenn der Wert kleiner als `1px` ist, wird er auf `1px` begrenzt.

## Beschreibung

Jedes 3D-Element mit z>0 wird größer; jedes 3D-Element mit z<0 wird kleiner. Die Stärke des Effekts wird durch den Wert dieser Eigenschaft bestimmt.
Große Werte der `perspective` führen zu einer kleinen Transformation;
kleine Werte der `perspective` führen zu einer großen Transformation.

Die Teile der 3D-Elemente, die sich hinter dem Benutzer befinden — d.h. deren z-Achsen-Koordinaten größer als der Wert der `perspective` CSS-Eigenschaft sind — werden nicht gezeichnet.

Der _Fluchtpunkt_ ist standardmäßig in der Mitte des Elements platziert, aber seine Position kann mit der {{cssxref("perspective-origin")}} Eigenschaft verändert werden.

Die Verwendung dieser Eigenschaft mit einem anderen Wert als `none` erzeugt einen neuen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context). In diesem Fall fungiert das Objekt auch als enthaltender Block für `position: fixed` Elemente, die es enthält.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Perspektive einstellen

Ein Beispiel, das zeigt, wie ein Würfel variiert, wenn die `perspective` an verschiedenen Positionen eingestellt ist, finden Sie unter [Using CSS transforms > Setting perspective](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#setting_perspective).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using CSS Transforms](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
