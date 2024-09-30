---
title: saturate()
slug: Web/CSS/filter-function/saturate
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{CSSRef}}

Die **`saturate()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) über-saturiert oder desaturiert das Eingangsbild. Das Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

> **Note:** `saturate()` wird als Matrixoperation auf der RGB-Farbe spezifiziert. Es konvertiert die Farbe nicht tatsächlich in das HSL-Modell, welches eine nichtlineare Operation ist. Daher kann es den Farbton oder die Helligkeit der Originalfarbe nicht erhalten.

{{EmbedInteractiveExample("pages/css/function-saturate.html")}}

## Syntax

```css
saturate(amount)
```

### Parameter

- `amount`
  - : Die Menge der Umwandlung, angegeben als {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Ein Wert unter `100%` desaturiert das Bild, während ein Wert über `100%` es über-saturiert. Ein Wert von `0%` ist komplett entsättigt, während ein Wert von `100%` das Eingangsbild unverändert lässt. Der Anfangswert für die [Interpolation](/de/docs/Glossary/interpolation) ist `1`.

## Beispiele

### Beispiele für korrekte Werte für saturate()

```css
saturate(0)     /* Completely unsaturated */
saturate(.4)    /* 40% saturated */
saturate(100%)  /* No effect */
saturate(200%)  /* Double saturation */
```

### saturate() erhält den Farbton oder die Helligkeit nicht

Das folgende Diagramm vergleicht zwei Farbverläufe mit `hsl(0 50% 50%)` als Mittelpunkt: Der erste wird mit `saturate()` erzeugt, und der zweite verwendet tatsächliche HSL-Farbwerte. Beachten Sie, wie der `saturate()`-Farbverlauf zu den beiden Enden Unterschiede im Farbton und in der Helligkeit zeigt.

```html
<div>
  <p>Using <code>saturate()</code></p>
  <div id="saturate"></div>
</div>
<div>
  <p>Using <code>hsl()</code></p>
  <div id="hsl"></div>
</div>
```

```css hidden
#saturate,
#hsl {
  display: flex;
  margin: 1em 0;
}

#saturate div,
#hsl div {
  width: 2px;
  height: 100px;
}
```

```js
const saturate = document.getElementById("saturate");
const hsl = document.getElementById("hsl");

for (let i = 0; i <= 200; i++) {
  const div1 = document.createElement("div");
  div1.style.backgroundColor = `hsl(0 ${i / 2}% 50%)`;
  hsl.appendChild(div1);

  const div2 = document.createElement("div");
  div2.style.backgroundColor = "hsl(0 50% 50%)";
  div2.style.filter = `saturate(${i}%)`;
  saturate.appendChild(div2);
}
```

{{EmbedLiveSample('saturate_does_not_preserve_hue_or_lightness','100%','350')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die anderen {{cssxref("&lt;filter-function&gt;")}} Funktionen, die in den Werten der {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} Eigenschaften verwendet werden können, umfassen:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
