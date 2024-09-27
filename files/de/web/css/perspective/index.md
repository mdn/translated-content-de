---
title: perspective
slug: Web/CSS/perspective
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

Die **`perspective`** [CSS](/de/docs/Web/CSS)-Eigenschaft bestimmt die Entfernung zwischen der Ebene z=0 und dem Benutzer, um einem 3D-positionierten Element Perspektive zu verleihen.

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
  - : Gibt an, dass keine Perspektiven-Transformation angewendet werden soll.
- `<length>`
  - : Eine {{cssxref("&lt;length&gt;")}}, die die Entfernung vom Benutzer zur z=0 Ebene angibt. Es wird verwendet, um eine Perspektiven-Transformation auf die Kinder des Elements anzuwenden. Negative Werte sind Syntaxfehler. Ist der Wert kleiner als `1px`, wird er auf `1px` begrenzt.

## Beschreibung

Jedes 3D-Element mit z>0 wird größer; jedes 3D-Element mit z<0 wird kleiner. Die Stärke des Effekts wird durch den Wert dieser Eigenschaft bestimmt. Große Werte von `perspective` verursachen eine kleine Transformation; kleine Werte von `perspective` verursachen eine große Transformation.

Die Teile der 3D-Elemente, die sich hinter dem Benutzer befinden — d.h. ihre z-Achsen-Koordinaten sind größer als der Wert der `perspective`-CSS-Eigenschaft — werden nicht gezeichnet.

Der _Fluchtpunkt_ wird standardmäßig in die Mitte des Elements gesetzt, aber seine Position kann mit der {{cssxref("perspective-origin")}}-Eigenschaft verändert werden.

Die Verwendung dieser Eigenschaft mit einem Wert ungleich `none` erzeugt einen neuen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context). In diesem Fall wirkt das Objekt auch als beinhaltender Block für `position: fixed` Elemente, die es enthält.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Perspektive festlegen

Ein Beispiel, das zeigt, wie ein Würfel variiert, wenn die `perspective` an verschiedenen Positionen gesetzt wird, finden Sie unter [Using CSS transforms > Setting perspective](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#setting_perspective).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using CSS Transforms](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
