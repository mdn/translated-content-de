---
title: translate
slug: Web/CSS/translate
l10n:
  sourceCommit: b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{CSSRef}}

Die **`translate`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, Übersetzungstransformationen einzeln und unabhängig von der {{CSSxRef("transform")}}-Eigenschaft zu spezifizieren. Dies passt besser zu typischer Benutzeroberflächennutzung und erspart das Erinnern der genauen Reihenfolge der Transformationsfunktionen, die im `transform`-Wert angegeben werden müssen.

{{EmbedInteractiveExample("pages/css/translate.html")}}

## Syntax

```css
/* Keyword values */
translate: none;

/* Single values */
translate: 100px;
translate: 50%;

/* Two values */
translate: 100px 200px;
translate: 50% 105px;

/* Three values */
translate: 50% 105px 5rem;

/* Global values */
translate: inherit;
translate: initial;
translate: revert;
translate: revert-layer;
translate: unset;
```

### Werte

- Einfache {{cssxref("&lt;length-percentage&gt;")}} Angabe
  - : Ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, das eine Übersetzung entlang der X-Achse spezifiziert. Entspricht einer `translate()`-Funktion (2D Translation) mit einem angegebenen Wert.
- Zwei {{cssxref("&lt;length-percentage&gt;")}} Angaben
  - : Zwei {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, die die X- und Y-Achsen Übersetzungswerte (jeweils) einer 2D-Translation spezifizieren. Entspricht einer `translate()`-Funktion (2D Translation) mit zwei angegebenen Werten.
- Drei Werte
  - : Zwei {{cssxref("&lt;length-percentage&gt;")}} und ein {{cssxref("&lt;length&gt;")}} Wert, die die X-, Y- und Z-Achsen Übersetzungswerte (jeweils) einer 3D-Translation spezifizieren. Entspricht einer `translate3d()`-Funktion (3D Translation).
- `none`
  - : Spezifiziert, dass keine Übersetzung angewendet werden soll.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übersetzung eines Elements bei Hover

Dieses Beispiel zeigt, wie die `translate`-Eigenschaft verwendet wird, um ein Element in drei Achsen zu verschieben. Das erste Kästchen wird entlang der X-Achse verschoben und das zweite Kästchen wird entlang der X- und Y-Achsen verschoben. Das dritte Kästchen wird entlang der X-, Y- und Z-Achsen verschoben und erweckt den Eindruck, auf den Betrachter zuzubewegen, da dem Elternelement {{cssxref('perspective')}} hinzugefügt wurde.

#### HTML

```html
<div class="wrapper">
  <div id="box1">translate X</div>
  <div id="box2">translate X,Y</div>
  <div id="box3">translate X,Y,Z</div>
</div>
```

#### CSS

```css
.wrapper {
  perspective: 100px;
  display: inline-flex;
  gap: 1em;
}
.wrapper > div {
  width: 7em;
  line-height: 7em;
  text-align: center;
  transition: 0.5s ease-in-out;
  border: 3px dotted;
}
#box1:hover {
  translate: 20px;
}

#box2:hover {
  translate: 20px 20px;
}

#box3:hover {
  translate: 5px 5px 30px;
}
```

#### Ergebnis

{{EmbedLiveSample("Translating_an_element_on_hover", "100%", 175)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('scale')}}
- {{cssxref('rotate')}}
- {{cssxref('transform')}}

Note: skew ist kein unabhängiger Transformationswert
