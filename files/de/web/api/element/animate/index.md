---
title: "Element: animate() Methode"
short-title: animate()
slug: Web/API/Element/animate
l10n:
  sourceCommit: 291a8c75ed553e807895225d51dff7ac24ad1f05
---

{{APIRef('Web Animations')}}

Die **`animate()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle ist eine Kurzbefehlsmethode, die eine neue [`Animation`](/de/docs/Web/API/Animation) erstellt, sie auf das Element anwendet und dann die Animation abspielt. Sie gibt die erstellte Instanz des [`Animation`](/de/docs/Web/API/Animation) Objekts zurück.

> [!NOTE]
> Elemente können mehrere Animationen haben, die auf sie angewendet werden. Sie können eine Liste der Animationen erhalten, die ein Element beeinflussen, indem Sie [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) aufrufen.

## Syntax

```js-nolint
animate(keyframes, options)
```

### Parameter

- `keyframes`
  - : Entweder ein Array von Keyframe-Objekten **oder** ein Keyframe-Objekt, dessen Eigenschaften Arrays von Werten sind, über die iteriert wird. Siehe [Keyframe-Formate](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats) für weitere Details.
- `options`
  - : Entweder eine **ganzzahlige Angabe der Animationsdauer** (in Millisekunden) **oder** ein Objekt, das eine oder mehrere Timing-Eigenschaften enthält, die im [`KeyframeEffect()` Optionsparameter](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters) beschrieben sind, und/oder die folgenden Optionen:
    - `id` {{optional_inline}}
      - : Eine Eigenschaft, die einzigartig für `animate()` ist: Ein String, mit dem die Animation referenziert werden kann.
    - `rangeEnd` {{optional_inline}}
      - : Gibt das Ende des Zuordnungsbereichs einer Animation entlang ihrer Zeitachse an, d.h. wo die Animation entlang der Zeitachse endet. Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-range-end")}}. `rangeEnd` kann verschiedene Wertetypen annehmen, wie folgt:
        - Ein String, der `normal` sein kann (bedeutet keine Änderung des Zuordnungsbereichs der Animation), ein CSS {{cssxref("length-percentage")}}, der einen Offset darstellt, ein `<timeline-range-name>`, oder ein `<timeline-range-name>` mit einem nachfolgenden `<length-percentage>`. Zum Beispiel: `"normal"`, `"entry"`, oder `"cover 100%"`.

          Siehe [`animation-range`](/de/docs/Web/CSS/animation-range) für eine detaillierte Beschreibung der verfügbaren Werte. Schauen Sie sich auch den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) an, der genau zeigt, was die verschiedenen Werte in einem leicht verständlichen visuellen Format bedeuten.

        - Ein Objekt, das `rangeName` (ein String) und `offset` (ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)) Eigenschaften enthält, die ein `<timeline-range-name>` und ein `<length-percentage>` repräsentieren, wie in der vorherigen Aufzählung beschrieben. Zum Beispiel: `{ rangeName: "entry", offset: CSS.percent("100") }`.
        - Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), das einen Offset repräsentiert, zum Beispiel: `CSS.percent("100")`.

    - `rangeStart` {{optional_inline}}
      - : Gibt den Beginn des Zuordnungsbereichs einer Animation entlang ihrer Zeitachse an, d.h. wo die Animation entlang der Zeitachse beginnt. Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-range-start")}}. `rangeStart` kann die gleichen Wertetypen wie `rangeEnd` annehmen.
    - `timeline` {{optional_inline}}
      - : Eine Eigenschaft, die einzigartig für `animate()` ist: Der [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), der mit der Animation verbunden wird. Standardwert ist [`Document.timeline`](/de/docs/Web/API/Document/timeline). Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-timeline")}}.

### Rückgabewert

Gibt eine [`Animation`](/de/docs/Web/API/Animation) zurück.

## Beispiele

### Rotieren und Skalieren

In diesem Beispiel verwenden wir die `animate()` Methode, um ein Element zu rotieren und zu skalieren.

#### HTML

```html
<div class="newspaper">Spinning newspaper<br />causes dizziness</div>
```

#### CSS

```css
html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}

.newspaper {
  padding: 0.5rem;
  text-transform: uppercase;
  text-align: center;
  background-color: white;
  cursor: pointer;
}
```

#### JavaScript

```js
const newspaperSpinning = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const newspaperTiming = {
  duration: 2000,
  iterations: 1,
};

const newspaper = document.querySelector(".newspaper");

newspaper.addEventListener("click", () => {
  newspaper.animate(newspaperSpinning, newspaperTiming);
});
```

#### Ergebnis

{{EmbedLiveSample("Rotating and scaling")}}

### Down the Rabbit Hole Demo

In der Demo [Down the Rabbit Hole (mit der Web Animation API)](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#moving_it_to_javascript) verwenden wir die praktische
`animate()` Methode, um sofort eine Animation auf dem `#tunnel` Element zu erstellen und abzuspielen, damit es unendlich nach oben fließt. Beachten Sie das Array von Objekten, das als Keyframes übergeben wird, sowie den Timing-Optionsblock.

```js
document.getElementById("tunnel").animate(
  [
    // keyframes
    { transform: "translateY(0px)" },
    { transform: "translateY(-300px)" },
  ],
  {
    // timing options
    duration: 1000,
    iterations: Infinity,
  },
);
```

### Implizite zu/von Keyframes

In neueren Browserversionen können Sie nur einen Anfangs- oder Endzustand für eine
Animation festlegen (d.h. ein einziges Keyframe), und der Browser leitet das andere Ende der
Animation ab, wenn er dazu in der Lage ist. Betrachten Sie zum Beispiel [diese einfache Animation](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html) — das Keyframe-Objekt sieht folgendermaßen aus:

```js
let rotate360 = [{ transform: "rotate(360deg)" }];
```

Wir haben nur den Endzustand der Animation angegeben, und der Anfangszustand ist
impliziert.

### timeline, rangeStart und rangeEnd

Die typische Verwendung der `timeline`, `rangeStart` und `rangeEnd` Eigenschaften könnte so aussehen:

```js
const img = document.querySelector("img");

const timeline = new ViewTimeline({
  subject: img,
  axis: "block",
});

img.animate(
  {
    opacity: [0, 1],
    transform: ["scaleX(0)", "scaleX(1)"],
  },
  {
    fill: "both",
    duration: 1,
    timeline,
    rangeStart: "cover 0%",
    rangeEnd: "cover 100%",
  },
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Animation`](/de/docs/Web/API/Animation)
- [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations)
- {{cssxref("animation-range-end")}}, {{cssxref("animation-range-start")}}, {{cssxref("animation-timeline")}}
- [CSS scrollgetriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
