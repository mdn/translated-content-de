---
title: CSS-Funktion `saturate()`
short-title: saturate()
slug: Web/CSS/Reference/Values/filter-function/saturate
l10n:
  sourceCommit: cff28ac91efd68d0809779c81902bd080f614a1d
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`saturate()`** erhöht oder verringert die Sättigung des Eingabebilds. Ihr Ergebnis ist eine {{cssxref("filter-function")}}.

> [!NOTE]
> `saturate()` ist als Matrixoperation auf RGB-Farben definiert. Die Farbe wird dabei nicht tatsächlich in das HSL-Modell umgewandelt; eine solche Umwandlung ist eine nichtlineare Operation. Daher bleiben Farbton und Helligkeit der ursprünglichen Farbe möglicherweise nicht erhalten.

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
  - : Das Ausmaß der Umwandlung, angegeben als {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Ein Wert unter `100%` verringert die Sättigung des Bilds, während ein Wert über `100%` sie erhöht. Bei `0%` ist das Bild vollständig entsättigt; bei `100%` bleibt das Eingabebild unverändert. Negative Werte sind nicht zulässig. Der Anfangswert für die {{Glossary("interpolation", "Interpolation")}} ist `1`. Der Standardwert ist `1`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Beispiele für gültige Werte von saturate()

```css
saturate(0)     /* Completely unsaturated */
saturate(.4)    /* 40% saturated */
saturate()      /* No effect */
saturate(100%)  /* No effect */
saturate(200%)  /* Double saturation */
```

### saturate() erhält Farbton und Helligkeit nicht

Das folgende Diagramm vergleicht zwei Farbverläufe mit `hsl(0 50% 50%)` als Mittelpunkt: Der erste wird mit `saturate()` erzeugt, der zweite verwendet tatsächliche HSL-Farbwerte. Beachten Sie, wie sich Farbton und Helligkeit des mit `saturate()` erzeugten Verlaufs zu beiden Enden hin unterscheiden.

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

Zu den weiteren {{cssxref("filter-function")}}-Funktionen, die in Werten der Eigenschaften {{cssxref("filter")}} und {{cssxref("backdrop-filter")}} verwendet werden können, gehören:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
