---
title: perspective
slug: Web/CSS/perspective
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{CSSRef}}

Die **`perspective`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt die Entfernung zwischen der z=0-Ebene und dem Benutzer, um einem 3D-positionierten Element Perspektive zu verleihen.

{{EmbedInteractiveExample("pages/css/perspective.html")}}

## Syntax

```css
/* Keyword value */
perspective: none;

/* <length> values */
perspective: 20px;
perspective: 3.5em;

/* Global values */
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
  - : Ein {{cssxref("&lt;length&gt;")}}, der die Entfernung vom Benutzer zur z=0-Ebene angibt. Es wird verwendet, um eine Perspektivtransformation auf die Kinder des Elements anzuwenden. Negative Werte sind Syntaxfehler. Wenn der Wert kleiner als `1px` ist, wird er auf `1px` geklammert.

## Beschreibung

Jedes 3D-Element mit z>0 wird größer; jedes 3D-Element mit z<0 wird kleiner. Die Stärke des Effekts wird durch den Wert dieser Eigenschaft bestimmt.
Große Werte von `perspective` führen zu einer kleinen Transformation;
kleine Werte von `perspective` führen zu einer großen Transformation.

Die Teile der 3D-Elemente, die sich hinter dem Benutzer befinden — d.h. ihre z-Achsen-Koordinaten sind größer als der Wert der `perspective` CSS-Eigenschaft — werden nicht gezeichnet.

Der _Verschwindungspunkt_ ist standardmäßig in der Mitte des Elements platziert, aber seine Position kann mit der {{cssxref("perspective-origin")}} Eigenschaft geändert werden.

Die Verwendung dieser Eigenschaft mit einem anderen Wert als `none` erzeugt einen neuen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context). In diesem Fall fungiert das Objekt auch als enthaltender Block für `position: fixed` Elemente, die es enthält.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Perspektive einstellen

Ein Beispiel, das zeigt, wie ein Würfel variiert, wenn die `perspective` an verschiedenen Positionen eingestellt wird, finden Sie in [Using CSS transforms > Setting perspective](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#setting_perspective).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using CSS Transforms](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
