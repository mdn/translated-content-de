---
title: "Element: animate() Methode"
short-title: animate()
slug: Web/API/Element/animate
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef('Web Animations')}}

Die **`animate()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle ist eine Abkürzungsmethode, die eine neue [`Animation`](/de/docs/Web/API/Animation) erstellt, sie auf das Element anwendet und dann die Animation abspielt. Sie gibt das erstellte [`Animation`](/de/docs/Web/API/Animation) Objektinstanz zurück.

> [!NOTE]
> Elemente können mehrere Animationen zugewiesen bekommen. Sie können eine Liste der Animationen abrufen, die ein Element betreffen, indem Sie [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) aufrufen.

## Syntax

```js-nolint
animate(keyframes, options)
```

### Parameter

- `keyframes`
  - : Entweder ein Array von Keyframe-Objekten **oder** ein Keyframe-Objekt, dessen Eigenschaften Arrays von Werten zum Iterieren sind. Siehe [Keyframe-Formate](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats) für weitere Details.
- `options`

  - : Entweder eine **Ganzzahl, die die Dauer der Animation** (in Millisekunden) angibt, **oder** ein Objekt, das eine oder mehrere Zeitsteuerungseigenschaften enthält, die im [`KeyframeEffect()` options parameter](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters) beschrieben sind und/oder die folgenden Optionen:

    - `id` {{optional_inline}}
      - : Eine für `animate()` einzigartige Eigenschaft: Ein String, mit dem auf die Animation verwiesen wird.
    - `rangeEnd` {{optional_inline}}

      - : Gibt das Ende des Anbindungsbereichs einer Animation entlang ihrer Zeitleiste an, d.h. wo entlang der Zeitleiste eine Animation endet. Das JavaScript-Pendant zur CSS-Eigenschaft {{cssxref("animation-range-end")}}. `rangeEnd` kann mehrere unterschiedliche Wertetypen annehmen, wie folgt:

        - Ein String, der `normal` sein kann (was bedeutet, dass keine Änderungen am Anbindungsbereich der Animation vorgenommen werden), eine CSS {{cssxref("length-percentage")}} darstellende Verschiebung, ein `<timeline-range-name>` oder ein `<timeline-range-name>` mit einem `<length-percentage>` dahinter. Zum Beispiel:

          ```plain
          "normal"
          "entry"
          "cover 100%"
          ```

          Weitere Informationen zu den verfügbaren Werten finden Sie unter [`animation-range`](/de/docs/Web/CSS/animation-range). Werfen Sie auch einen Blick auf den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/), der genau zeigt, was die verschiedenen Werte in einem leicht verständlichen visuellen Format bedeuten.

        - Ein Objekt, das `rangeName` (ein String) und `offset` (ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue))-Eigenschaften enthält, die ein `<timeline-range-name>` und `<length-percentage>` darstellen, wie im vorherigen Punkt beschrieben. Zum Beispiel:

          ```js
          {
            rangeName: 'entry',
            offset: CSS.percent('100'),
          }
          ```

        - Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), das eine Verschiebung darstellt, zum Beispiel:

          ```js
          CSS.percent("100");
          ```

    - `rangeStart` {{optional_inline}}
      - : Gibt den Beginn des Anbindungsbereichs einer Animation entlang ihrer Zeitleiste an, d.h. wo entlang der Zeitleiste eine Animation beginnt. Das JavaScript-Pendant zur CSS-Eigenschaft {{cssxref("animation-range-start")}}. `rangeStart` kann die gleichen Wertetypen wie `rangeEnd` annehmen.
    - `timeline` {{optional_inline}}
      - : Eine für `animate()` einzigartige Eigenschaft: Die [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), die mit der Animation verknüpft wird. Standardmäßig ist dies [`Document.timeline`](/de/docs/Web/API/Document/timeline). Das JavaScript-Pendant zur CSS-Eigenschaft {{cssxref("animation-timeline")}}.

### Rückgabewert

Gibt eine [`Animation`](/de/docs/Web/API/Animation) zurück.

## Beispiele

### Rotation und Skalierung

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

In der Demo [Down the Rabbit Hole (mit der Web Animation API)](https://codepen.io/rachelnabors/pen/rxpmJL/?editors=0010) verwenden wir die praktische `animate()` Methode, um sofort eine Animation auf das `#tunnel`-Element zu erstellen und abzuspielen, damit es unendlich nach oben fließt. Beachten Sie das Array von Objekten, das als Keyframes und auch der Timing-Optionenblock übergeben wird.

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

### Implizite Von/Bis-Keyframes

In neueren Browserversionen können Sie nur einen Anfangs- oder Endzustand für eine Animation festlegen (d.h. ein einzelnes Keyframe), und der Browser wird das andere Ende der Animation ableiten, wenn er dazu in der Lage ist. Betrachten Sie zum Beispiel [diese einfache Animation](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html) — das Keyframe-Objekt sieht so aus:

```js
let rotate360 = [{ transform: "rotate(360deg)" }];
```

Wir haben nur den Endzustand der Animation spezifiziert, und der Anfangszustand wird impliziert.

### timeline, rangeStart, und rangeEnd

Eine typische Verwendung der Eigenschaften `timeline`, `rangeStart`, und `rangeEnd` könnte so aussehen:

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
- [CSS scroll-driven animations](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
