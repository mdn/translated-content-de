---
title: padding-bottom
slug: Web/CSS/padding-bottom
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`padding-bottom`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Höhe des [Innenabstandsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#padding_area) am unteren Ende eines Elements.

{{InteractiveExample("CSS Demo: padding-bottom")}}

```css interactive-example-choice
padding-bottom: 1em;
```

```css interactive-example-choice
padding-bottom: 10%;
```

```css interactive-example-choice
padding-bottom: 20px;
```

```css interactive-example-choice
padding-bottom: 1ch;
```

```css interactive-example-choice
padding-bottom: 0;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <div class="box">
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 10px solid #ffc129;
  overflow: hidden;
  text-align: left;
}

.box {
  border: dashed 1px;
}
```

Der Innenabstandsbereich eines Elements ist der Raum zwischen seinem Inhalt und seinem Rand.

![Der Effekt der CSS-Eigenschaft padding-bottom auf das Element-Boxmodell](padding-bottom.svg)

> [!NOTE]
> Die {{cssxref("padding")}}-Eigenschaft kann verwendet werden, um die Innenabstände an allen vier Seiten eines Elements mit einer einzigen Deklaration zu setzen.

## Syntax

```css
/* <length> values */
padding-bottom: 0.5em;
padding-bottom: 0;
padding-bottom: 2cm;

/* <percentage> value */
padding-bottom: 10%;

/* Global values */
padding-bottom: inherit;
padding-bottom: initial;
padding-bottom: revert;
padding-bottom: revert-layer;
padding-bottom: unset;
```

Die `padding-bottom`-Eigenschaft wird als ein einzelner Wert aus der untenstehenden Liste angegeben. Im Gegensatz zu Rändern sind negative Werte für Innenabstände nicht erlaubt.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Innenabstands als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Innenabstands als Prozentsatz, bezogen auf die Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block). Muss nicht negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen des unteren Innenabstands mit Pixeln und Prozentwerten

```css
.content {
  padding-bottom: 5%;
}
.side-box {
  padding-bottom: 10px;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, und {{cssxref("padding-left")}}
- {{cssxref("padding")}} Kurzschrift
- {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}}
- {{cssxref("padding-block")}} und {{cssxref("padding-inline")}} Kurzschriften
- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) Leitfaden
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
