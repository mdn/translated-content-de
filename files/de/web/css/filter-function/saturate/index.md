---
title: saturate()
slug: Web/CSS/filter-function/saturate
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`saturate()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) über-sättigt oder entsättigt das Eingabebild. Das Ergebnis ist eine {{cssxref("&lt;filter-function&gt;")}}.

> [!NOTE]
> `saturate()` wird als Matrixoperation auf der RGB-Farbe spezifiziert. Es konvertiert die Farbe nicht tatsächlich in das HSL-Modell, was eine nichtlineare Operation ist. Daher kann es sein, dass es den Farbton oder die Helligkeit der ursprünglichen Farbe nicht beibehält.

{{InteractiveExample("CSS Demo: saturate()")}}

```css interactive-example-choice
filter: saturate(1);
```

```css interactive-example-choice
filter: saturate(4);
```

```css interactive-example-choice
filter: saturate(50%);
```

```css interactive-example-choice
filter: saturate(0);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

## Syntax

```css
saturate(amount)
```

### Parameter

- `amount` {{Optional_Inline}}
  - : Der Betrag der Umwandlung, angegeben als ein {{cssxref("&lt;number&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}. Ein Wert unter `100%` entsättigt das Bild, während ein Wert über `100%` es über-sättigt. Ein Wert von `0%` ist vollständig entsättigt, während ein Wert von `100%` die Eingabe unverändert lässt. Der Anfangswert für die {{Glossary("interpolation", "Interpolation")}} ist `1`. Der Standardwert ist `1`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Beispiele für korrekte Werte für saturate()

```css
saturate(0)     /* Completely unsaturated */
saturate(.4)    /* 40% saturated */
saturate()      /* No effect */
saturate(100%)  /* No effect */
saturate(200%)  /* Double saturation */
```

### saturate() bewahrt den Farbton oder die Helligkeit nicht

Das unten stehende Diagramm vergleicht zwei Farbverläufe mit `hsl(0 50% 50%)` als Mittelpunkt: Der erste wird mit `saturate()` erstellt, und der zweite verwendet tatsächliche HSL-Farbwerte. Beachten Sie, wie der `saturate()`-Verlauf Unterschiede im Farbton und in der Helligkeit zu den beiden Enden hin zeigt.

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

Die anderen {{cssxref("&lt;filter-function&gt;")}}-Funktionen, die in Werten der Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet werden können, umfassen:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
