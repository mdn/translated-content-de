---
title: translate
slug: Web/CSS/translate
l10n:
  sourceCommit: b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{CSSRef}}

Die **`translate`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, Translations-Transformationen individuell und unabhängig von der {{CSSxRef("transform")}}-Eigenschaft zu spezifizieren. Dies passt besser zu typischen Benutzeroberflächenanwendungen und erspart es Ihnen, sich die genaue Reihenfolge der Transformationsfunktionen zu merken, die im `transform`-Wert angegeben werden sollen.

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

- Einzelner {{cssxref("&lt;length-percentage&gt;")}} Wert
  - : Ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, der eine Translation entlang der X-Achse angibt. Entspricht einer `translate()` (2D-Translation) Funktion mit einem angegebenen Wert.
- Zwei {{cssxref("&lt;length-percentage&gt;")}} Werte
  - : Zwei {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, die die X- und Y-Achsen-Translationswerte (jeweils) einer 2D-Translation angeben. Entspricht einer `translate()` (2D-Translation) Funktion mit zwei angegebenen Werten.
- Drei Werte
  - : Zwei {{cssxref("&lt;length-percentage&gt;")}} und ein einzelner {{cssxref("&lt;length&gt;")}} Wert, die die X-, Y- und Z-Achsen-Translationswerte (jeweils) einer 3D-Translation angeben. Entspricht einer `translate3d()` (3D-Translation) Funktion.
- `none`
  - : Gibt an, dass keine Translation angewendet werden soll.

## Formale Definition

{{CSSInfo}}

## Formaler Syntax

{{CSSSyntax}}

## Beispiele

### Übersetzen eines Elements bei Hover

Dieses Beispiel zeigt, wie die `translate`-Eigenschaft verwendet wird, um ein Element in drei Achsen zu verschieben. Das erste Kästchen wird entlang der X-Achse verschoben und das zweite Kästchen wird entlang der X- und Y-Achsen verschoben. Das dritte Kästchen wird entlang der X-, Y- und Z-Achsen verschoben und erweckt den Anschein, sich aufgrund der Hinzufügung von {{cssxref('perspective')}} zum Elternelement auf den Betrachter zu zubewegen.

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

> [!NOTE]
> skew ist kein unabhängiger Transformationswert.
