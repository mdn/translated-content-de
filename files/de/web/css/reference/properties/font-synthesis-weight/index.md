---
title: "`font-synthesis-weight` CSS property"
short-title: font-synthesis-weight
slug: Web/CSS/Reference/Properties/font-synthesis-weight
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`font-synthesis-weight`**-Eigenschaft [CSS](/de/docs/Web/CSS) ermöglicht es Ihnen festzulegen, ob der Browser die fette Schriftart synthetisieren darf, wenn sie in einer Schriftfamilie fehlt.

Es ist oft praktisch, die Kurzschreibweise {{cssxref("font-synthesis")}} zu verwenden, um alle Werte der Schrifttypensynthese zu steuern.

## Syntax

```css
/* Keyword values */
font-synthesis-weight: auto;
font-synthesis-weight: none;

/* Global values */
font-synthesis-weight: inherit;
font-synthesis-weight: initial;
font-synthesis-weight: revert;
font-synthesis-weight: revert-layer;
font-synthesis-weight: unset;
```

### Werte

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Gibt an, dass die fehlende fette Schriftart vom Browser bei Bedarf synthetisiert werden darf.
- `none`
  - : Gibt an, dass die Synthese der fehlenden fetten Schriftart durch den Browser nicht erlaubt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren der Synthese der fetten Schriftart

Dieses Beispiel zeigt, wie die Synthese der fetten Schriftart durch den Browser in der `Montserrat`-Schriftart deaktiviert wird.

#### HTML

```html
<p class="english">
  This is the default <strong>bold typeface</strong> and
  <em>oblique typeface</em>.
</p>

<p class="english no-syn">
  The <strong>bold typeface</strong> is turned off here but not the
  <em>oblique typeface</em>.
</p>
```

#### CSS

```css
@import "https://fonts.googleapis.com/css2?family=Montserrat&display=swap";

.english {
  font-family: "Montserrat", sans-serif;
}
.no-syn {
  font-synthesis-weight: none;
}
```

#### Ergebnis

{{EmbedLiveSample('Disabling synthesis of bold typeface', '', '100')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [font-synthesis](/de/docs/Web/CSS/Reference/Properties/font-synthesis) Kurzschreibweise, [font-synthesis-small-caps](/de/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps), [font-synthesis-style](/de/docs/Web/CSS/Reference/Properties/font-synthesis-style)
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}
