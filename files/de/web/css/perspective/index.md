---
title: perspective
slug: Web/CSS/perspective
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

Die **`perspective`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt den Abstand zwischen der z=0-Ebene und dem Benutzer, um einem 3D-positionierten Element eine Perspektive zu verleihen.

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
  - : Gibt an, dass keine Perspektiventransformation angewendet werden soll.
- `<length>`
  - : Ein {{cssxref("&lt;length&gt;")}}, der den Abstand vom Benutzer zur z=0-Ebene angibt. Es wird verwendet, um eine Perspektiventransformation auf die Kinder des Elements anzuwenden. Negative Werte sind Syntaxfehler. Wenn der Wert kleiner als `1px` ist, wird er auf `1px` begrenzt.

## Beschreibung

Jedes 3D-Element mit z>0 wird größer; jedes 3D-Element mit z<0 wird kleiner. Die Stärke des Effekts wird durch den Wert dieser Eigenschaft bestimmt.
Große Werte von `perspective` verursachen eine kleine Transformation;
kleine Werte von `perspective` verursachen eine große Transformation.

Die Teile der 3D-Elemente, die hinter dem Benutzer liegen — d. h. ihre z-Achsen-Koordinaten sind größer als der Wert der `perspective`-CSS-Eigenschaft — werden nicht gezeichnet.

Der _Fluchtpunkt_ befindet sich standardmäßig in der Mitte des Elements, aber seine Position kann mit der {{cssxref("perspective-origin")}} Eigenschaft geändert werden.

Die Verwendung dieser Eigenschaft mit einem anderen Wert als `none` erzeugt einen neuen [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context). In diesem Fall agiert das Objekt zudem als enthaltender Block für `position: fixed` Elemente, die es enthält.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Perspektive festlegen

Ein Beispiel, das zeigt, wie ein Würfel variiert, wenn die `perspective` an verschiedenen Positionen eingestellt wird, finden Sie unter [CSS-Transformationen verwenden > Perspektive festlegen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#setting_perspective).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Transformationen verwenden](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
