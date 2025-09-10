---
title: corner-bottom-left-shape
slug: Web/CSS/corner-bottom-left-shape
l10n:
  sourceCommit: 28a0409af150dc6d13584302f2e53664fb4ad02f
---

Die **`corner-bottom-left-shape`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die Form der unteren linken Ecke eines Kastens innerhalb seines {{cssxref("border-radius")}}-Bereichs an.

Eine vollständige Beschreibung des Verhaltens von Eckformen und mehrere Beispiele finden Sie auf der Seite der {{cssxref("corner-shape")}}-Kurzschreibweise.

## Syntax

```css
/* Keyword values */
corner-bottom-left-shape: bevel;
corner-bottom-left-shape: round;

/* superellipse() function values */
corner-bottom-left-shape: superellipse(0.7);
corner-bottom-left-shape: superellipse(-1.9);

/* Global values */
corner-bottom-left-shape: inherit;
corner-bottom-left-shape: initial;
corner-bottom-left-shape: revert;
corner-bottom-left-shape: revert-layer;
corner-bottom-left-shape: unset;
```

### Werte

Die Eigenschaft `corner-bottom-left-shape` wird mithilfe eines {{cssxref("&lt;corner-shape-value>")}}-Werts angegeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere verwandte Beispiele finden Sie auf der Referenzseite der {{cssxref("corner-shape")}}.

### Grundlegende Verwendung von `corner-bottom-left-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element.

```html live-sample___basic-usage
<div></div>
```

#### CSS

Wir geben dem Kasten einige grundlegende Stile, die wir der Kürze halber ausgeblendet haben. Wir wenden auch einen {{cssxref("box-shadow")}}, einen `border-radius` von `80px 40% 60px 20%` und eine `corner-bottom-left-shape` von `squircle` an.

```css hidden live-sample___basic-usage
body {
  font-family: Arial, Helvetica, sans-serif;
  width: 240px;
  margin: 20px auto;
}

div {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: goldenrod;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}
```

```css live-sample___basic-usage
div {
  box-shadow: 1px 1px 3px gray;
  border-radius: 80px 40% 60px 20%;
  corner-bottom-left-shape: squircle;
}
```

#### Ergebnis

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("basic-usage", "100%", "240")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("corner-shape")}}-Kurzschreibweise
- {{cssxref("corner-top-left-shape")}}, {{cssxref("corner-top-right-shape")}}, und {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("corner-start-start-shape")}}, {{cssxref("corner-start-end-shape")}}, {{cssxref("corner-end-start-shape")}}, und {{cssxref("corner-end-end-shape")}}
- {{cssxref("border-radius")}}-Kurzschreibweise
- {{cssxref("border-bottom-left-radius")}}
- [CSS-Rahmen und Boxdekorationen](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Modul
- [CSS-Hintergründe und -Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
