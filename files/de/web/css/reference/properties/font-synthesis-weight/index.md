---
title: font-synthesis-weight
slug: Web/CSS/Reference/Properties/font-synthesis-weight
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`font-synthesis-weight`** [CSS](/de-DE/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen anzugeben, ob der Browser die Fettschriftart synthetisieren darf, wenn sie in einer Schriftfamilie fehlt.

Es ist oft praktisch, die Kurzschreibweise {{cssxref("font-synthesis")}} zu verwenden, um alle Schriftartensynthese-Werte zu steuern.

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

- `auto`
  - : Gibt an, dass die fehlende Fettschriftart vom Browser bei Bedarf synthetisiert werden kann.
- `none`
  - : Gibt an, dass die Synthese der fehlenden Fettschriftart durch den Browser nicht erlaubt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren der Synthese von Fettschriftarten

Dieses Beispiel zeigt, wie die Synthese der Fettschriftart durch den Browser in der `Montserrat`-Schriftart deaktiviert wird.

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

- [font-synthesis](/de-DE/docs/Web/CSS/Reference/Properties/font-synthesis) Kurzschreibweise, [font-synthesis-small-caps](/de-DE/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps), [font-synthesis-style](/de-DE/docs/Web/CSS/Reference/Properties/font-synthesis-style)
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}
