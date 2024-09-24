---
title: font-synthesis-position
slug: Web/CSS/font-synthesis-position
l10n:
  sourceCommit: a6cac9db700637ac004a3608a7b5003c1c0ef8f8
---

{{CSSRef}}

Die **`font-synthesis-position`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, festzulegen, ob ein Browser fehlende "Position"-Schriftarten für Hoch- und Tiefgestellt synthetisieren darf, wenn sie in einer Schriftfamilie fehlen, während {{cssxref("font-variant-position")}} verwendet wird, um die Positionen festzulegen.

Die **`font-synthesis-position`** Eigenschaft hat keine Wirkung, wenn die {{htmlelement("sup")}} und {{htmlelement("sub")}} Elemente verwendet werden.

Es ist oft praktisch, die Kurzschreibweise {{cssxref("font-synthesis")}} zu verwenden, um alle Schriftart-Synthese-Werte zu steuern.

## Syntax

```css
/* Schlüsselwortwerte */
font-synthesis-position: auto;
font-synthesis-position: none;

/* Globale Werte */
font-synthesis-position: inherit;
font-synthesis-position: initial;
font-synthesis-position: revert;
font-synthesis-position: revert-layer;
font-synthesis-position: unset;
```

### Werte

- `auto`
  - : Gibt an, dass eine fehlende Positionsschriftart, falls erforderlich, vom Browser synthetisiert werden darf.
- `none`
  - : Gibt an, dass die Synthese einer fehlenden Positionsschriftart durch den Browser nicht erlaubt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivierung der Synthese von Positionsschriftarten

Dieses Beispiel zeigt, wie die Synthese von Hoch- und Tiefgestellt-Schriftarten im Browser für die Schriftart `Montserrat` deaktiviert wird.

#### HTML

```html
<p>
  Dies sind die Standard-Positions<sup>hochgestellten</sup>,
  Positions<tief>tiefgestellten</tief>, <strong>fett</strong> und
  <em>kursiv</em> Schriftarten.
</p>

<p class="no-syn">
  Die Positionen <span class="super">hochgestellt</span> und
  <span class="sub">tiefgestellt</span> sind hier ausgeschaltet, aber nicht die
  <strong>fett</strong> und <em>kursiv</em> Schriftarten (in Browsern, die
  <code>font-synthesis-position</code> unterstützen).
</p>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  font-family: "Montserrat", sans-serif;
}
.super {
  font-variant-position: super;
}
.sub {
  font-variant-position: sub;
}
.no-syn {
  font-synthesis-position: none;
}
```

#### Ergebnis

{{EmbedLiveSample('Deaktivierung der Synthese von Positionsschriftarten', '', '100')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-synthesis")}} Kurzform, {{cssxref("font-synthesis-style")}}, {{cssxref("font-synthesis-weight")}}
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-weight")}}
