---
title: übersetzen
slug: Web/CSS/translate
l10n:
  sourceCommit: b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{CSSRef}}

Die **`translate`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, Übersetzungstransformationen individuell und unabhängig von der {{CSSxRef("transform")}}-Eigenschaft festzulegen. Dies passt besser zu typischen Benutzeroberflächen, da Sie sich nicht die genaue Reihenfolge der Transformationsfunktionen im `transform`-Wert merken müssen.

{{EmbedInteractiveExample("pages/css/translate.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
translate: none;

/* Einzelne Werte */
translate: 100px;
translate: 50%;

/* Zwei Werte */
translate: 100px 200px;
translate: 50% 105px;

/* Drei Werte */
translate: 50% 105px 5rem;

/* Globale Werte */
translate: inherit;
translate: initial;
translate: revert;
translate: revert-layer;
translate: unset;
```

### Werte

- Einzelner {{cssxref("&lt;length-percentage&gt;")}}-Wert
  - : Ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, der eine Übersetzung entlang der X-Achse spezifiziert. Entspricht einer `translate()`-Funktion (2D-Übersetzung) mit einem angegebenen Wert.
- Zwei {{cssxref("&lt;length-percentage&gt;")}}-Werte
  - : Zwei {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, die die Übersetzungswerte der X- und Y-Achse (respektive) einer 2D-Übersetzung spezifizieren. Entspricht einer `translate()`-Funktion (2D-Übersetzung) mit zwei angegebenen Werten.
- Drei Werte
  - : Zwei {{cssxref("&lt;length-percentage&gt;")}}- und ein einzelner {{cssxref("&lt;length&gt;")}}-Wert, die die Übersetzungswerte der X-, Y- und Z-Achse (respektive) einer 3D-Übersetzung spezifizieren. Entspricht einer `translate3d()`-Funktion (3D-Übersetzung).
- `none`
  - : Gibt an, dass keine Übersetzung angewendet werden soll.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Übersetzen eines Elements bei Hover

Dieses Beispiel zeigt, wie die `translate`-Eigenschaft verwendet wird, um ein Element in drei Achsen zu verschieben.
Das erste Feld wird entlang der X-Achse verschoben und das zweite Feld wird entlang der X- und Y-Achsen verschoben.
Das dritte Feld wird entlang der X-, Y- und Z-Achsen verschoben und wirkt, als bewege es sich auf den Betrachter zu, da {{cssxref('perspective')}} zum Elternelement hinzugefügt wurde.

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
