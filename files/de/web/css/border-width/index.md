---
title: border-width
slug: Web/CSS/border-width
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`border-width`** [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite des Rahmens eines Elements fest.

{{EmbedInteractiveExample("pages/css/border-width.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`border-bottom-width`](/de/docs/Web/CSS/border-bottom-width)
- [`border-left-width`](/de/docs/Web/CSS/border-left-width)
- [`border-right-width`](/de/docs/Web/CSS/border-right-width)
- [`border-top-width`](/de/docs/Web/CSS/border-top-width)

## Syntax

```css
/* Schlüsselwort-Werte */
border-width: thin;
border-width: medium;
border-width: thick;

/* <Längen>-Werte */
border-width: 4px;
border-width: 1.2rem;

/* oben und unten | links und rechts */
border-width: 2px 1.5em;

/* oben | links und rechts | unten */
border-width: 1px 2em 1.5cm;

/* oben | rechts | unten | links */
border-width: 1px 2em 0 4rem;

/* Globale Werte */
border-width: inherit;
border-width: initial;
border-width: revert;
border-width: revert-layer;
border-width: unset;
```

Die `border-width` Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden.

- Wird **ein** Wert angegeben, gilt er für **alle vier Seiten**.
- Werden **zwei** Werte angegeben, gilt der erste Wert für **oben und unten**, der zweite für **links und rechts**.
- Werden **drei** Werte angegeben, gilt der erste Wert für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Werden **vier** Werte angegeben, gelten die Breiten für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- `<line-width>`

  - : Definiert die Breite des Rahmens, entweder als explizite nichtnegative {{cssxref("&lt;length&gt;")}} oder als Schlüsselwort. Wenn es ein Schlüsselwort ist, muss es einen der folgenden Werte haben:

    - `thin`
    - `medium`
    - `thick`

> [!NOTE]
> Da die Spezifikation die genaue Dicke, die durch jedes Schlüsselwort bezeichnet wird, nicht definiert, ist das genaue Ergebnis bei Verwendung eines dieser Werte implementierungsabhängig. Dennoch folgen sie immer dem Muster `thin ≤ medium ≤ thick`, und die Werte sind innerhalb eines einzelnen Dokuments konstant.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Mischung aus Werten und Längen

#### HTML

```html
<p id="one-value">ein Wert: 6px breiter Rahmen auf allen 4 Seiten</p>
<p id="two-values">
  zwei verschiedene Werte: 2px breiter oberer und unterer Rahmen, 10px breiter
  rechter und linker Rahmen
</p>
<p id="three-values">
  drei verschiedene Werte: 0.3em oben, 9px unten und null Breite rechts und
  links
</p>
<p id="four-values">
  vier verschiedene Werte: "thin" oben, "medium" rechts, "thick" unten und 1em
  links
</p>
```

#### CSS

```css
#one-value {
  border: ridge #ccc;
  border-width: 6px;
}
#two-values {
  border: solid red;
  border-width: 2px 10px;
}
#three-values {
  border: dotted orange;
  border-width: 0.3em 0 9px;
}
#four-values {
  border: solid lightgreen;
  border-width: thin medium thick 1em;
}
p {
  width: auto;
  margin: 0.25em;
  padding: 0.25em;
}
```

#### Ergebnis

{{ EmbedLiveSample('A_mix_of_values_and_lengths', 320, 320) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Rahmenbezogenen Kurzschreibweisen: {{Cssxref("border")}}, {{Cssxref("border-style")}}, {{Cssxref("border-color")}}
- Die Eigenschaften im Zusammenhang mit der Rahmenbreite: {{Cssxref("border-bottom-width")}}, {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-top-width")}}
