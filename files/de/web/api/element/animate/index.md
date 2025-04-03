---
title: "Element: animate() Methode"
short-title: animate()
slug: Web/API/Element/animate
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef('Web Animations')}}

Die **`animate()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces ist eine Abkürzungsmethode, die eine neue [`Animation`](/de/docs/Web/API/Animation) erstellt, diese auf das Element anwendet und dann die Animation abspielt. Sie gibt die erstellte [`Animation`](/de/docs/Web/API/Animation)-Objektinstanz zurück.

> [!NOTE]
> Elemente können mehrere Animationen haben, die auf sie angewendet werden. Sie können eine Liste der Animationen, die ein Element betreffen, abrufen, indem Sie [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) aufrufen.

## Syntax

```js-nolint
animate(keyframes, options)
```

### Parameter

- `keyframes`
  - : Entweder ein Array von Keyframe-Objekten **oder** ein Keyframe-Objekt, dessen Eigenschaften Arrays von Werten sind, über die iteriert werden soll. Siehe [Keyframe-Formate](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats) für weitere Details.
- `options`

  - : Entweder ein **Integer, der die Dauer der Animation** (in Millisekunden) darstellt, **oder** ein Objekt, das eine oder mehrere Timing-Eigenschaften enthält, die im [`KeyframeEffect()`-Optionsparameter](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters) beschrieben sind und/oder die folgenden Optionen:

    - `id` {{optional_inline}}
      - : Eine Eigenschaft, die `animate()` einzigartig ist: Ein String, mit dem die Animation referenziert wird.
    - `rangeEnd` {{optional_inline}}

      - : Bestimmt das Ende eines Animationsanhängerbereichs entlang seiner Zeitleiste, d.h. wo entlang der Zeitleiste eine Animation endet. Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-range-end")}}. `rangeEnd` kann mehrere verschiedene Wertetypen annehmen, wie folgt:

        - Ein String, der `normal` sein kann (bedeutet keine Änderung des Animationsanhängerbereichs), ein CSS {{cssxref("length-percentage")}}, das einen Versatz darstellt, ein `<timeline-range-name>`, oder ein `<timeline-range-name>` mit einem anschließendem `<length-percentage>`. Zum Beispiel:

          ```plain
          "normal"
          "entry"
          "cover 100%"
          ```

          Siehe [`animation-range`](/de/docs/Web/CSS/animation-range) für eine detaillierte Beschreibung der verfügbaren Werte. Sehen Sie sich auch das [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) an, das zeigt, was die verschiedenen Werte in einem einfachen visuellen Format bedeuten.

        - Ein Objekt, das die Eigenschaften `rangeName` (ein String) und `offset` (ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)) enthält, die ein `<timeline-range-name>` und `<length-percentage>` darstellen, wie im vorherigen Punkt beschrieben. Zum Beispiel:

          ```js
          {
            rangeName: 'entry',
            offset: CSS.percent('100'),
          }
          ```

        - Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), das einen Versatz darstellt, zum Beispiel:

          ```js
          CSS.percent("100");
          ```

    - `rangeStart` {{optional_inline}}
      - : Bestimmt den Start eines Animationsanhängerbereichs entlang seiner Zeitleiste, d.h. wo entlang der Zeitleiste eine Animation beginnt. Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-range-start")}}. `rangeStart` kann die gleichen Wertetypen wie `rangeEnd` annehmen.
    - `timeline` {{optional_inline}}
      - : Eine Eigenschaft, die `animate()` einzigartig ist: Die [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), die mit der Animation verknüpft wird. Standardmäßig auf [`Document.timeline`](/de/docs/Web/API/Document/timeline). Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-timeline")}}.

### Rückgabewert

Gibt eine [`Animation`](/de/docs/Web/API/Animation) zurück.

## Beispiele

### Rotieren und Skalieren

In diesem Beispiel verwenden wir die `animate()`-Methode, um ein Element zu rotieren und zu skalieren.

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

### Demo "Down the Rabbit Hole"

In der Demo [Down the Rabbit Hole (with the Web Animation API)](https://codepen.io/rachelnabors/pen/rxpmJL/?editors=0010) verwenden wir die bequeme `animate()`-Methode, um sofort eine Animation auf dem `#tunnel`-Element zu erstellen und abzuspielen, damit es unendlich nach oben fließt. Beachten Sie das Array von Objekten, das als Keyframes übergeben wird, sowie den Timing-Optionsblock.

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

### Implizite von/bis Keyframes

In neueren Browserversionen können Sie einen Anfangs- oder Endzustand für eine Animation (d.h. einen einzigen Keyframe) festlegen, und der Browser wird, sofern möglich, den anderen Endpunkt der Animation ableiten. Betrachten Sie zum Beispiel [diese einfache Animation](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html) — das Keyframe-Objekt sieht so aus:

```js
let rotate360 = [{ transform: "rotate(360deg)" }];
```

Wir haben nur den Endzustand der Animation spezifiziert, und der Anfangszustand wird implizit angenommen.

### timeline, rangeStart und rangeEnd

Typische Verwendung der Eigenschaften `timeline`, `rangeStart` und `rangeEnd` könnte so aussehen:

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
