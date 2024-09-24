---
title: font-synthesis-style
slug: Web/CSS/font-synthesis-style
l10n:
  sourceCommit: 28368ab728eed206d9069f5ba5b889e990ff810c
---

{{CSSRef}}

Die **`font-synthesis-style`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen anzugeben, ob der Browser einen schrägen Schriftschnitt synthetisieren darf, wenn dieser in einer Schriftfamilie fehlt.

Es ist oft praktisch, die Kurzschreibweise {{cssxref("font-synthesis")}} zu verwenden, um alle Schriftsynthetisierungswerte zu steuern.

## Syntax

```css
/* Schlüsselwort-Werte */
font-synthesis-style: auto;
font-synthesis-style: none;

/* Globale Werte */
font-synthesis-style: inherit;
font-synthesis-style: initial;
font-synthesis-style: revert;
font-synthesis-style: revert-layer;
font-synthesis-style: unset;
```

### Werte

- `auto`
  - : Gibt an, dass der fehlende schräge Schriftschnitt bei Bedarf vom Browser synthetisiert werden darf.
- `none`
  - : Gibt an, dass die Synthese des fehlenden schrägen Schriftschnitts durch den Browser nicht erlaubt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren der Synthese des schrägen Schriftschnitts

Dieses Beispiel zeigt, wie die Synthese des schrägen Schriftschnitts durch den Browser in der `Montserrat`-Schriftart ausgeschaltet wird.

#### HTML

```html
<p class="english">
  This is the default <em>oblique typeface</em> and
  <strong>bold typeface</strong>.
</p>

<p class="english no-syn">
  The <em>oblique typeface</em> is turned off here but not the
  <strong>bold typeface</strong>.
</p>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.english {
  font-family: "Montserrat", sans-serif;
}
.no-syn {
  font-synthesis-style: none;
}
```

#### Ergebnis

{{EmbedLiveSample('Disabling synthesis of bold typeface', '', '100')}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [font-synthesis](/de/docs/Web/CSS/font-synthesis) Kurzschreibweise, [font-synthesis-small-caps](/de/docs/Web/CSS/font-synthesis-small-caps), [font-synthesis-weight](/de/docs/Web/CSS/font-synthesis-weight)
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}
