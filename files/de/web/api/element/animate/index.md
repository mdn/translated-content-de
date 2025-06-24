---
title: "Element: animate() Methode"
short-title: animate()
slug: Web/API/Element/animate
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef('Web Animations')}}

Die **`animate()`** Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces
ist eine Abkürzungsmethode, die eine neue [`Animation`](/de/docs/Web/API/Animation) erstellt, sie auf das
Element anwendet und dann die Animation abspielt. Sie gibt die erstellte [`Animation`](/de/docs/Web/API/Animation)
Objektinstanz zurück.

> [!NOTE]
> Elemente können mehrere Animationen haben, die auf sie angewendet werden. Sie können eine Liste der
> Animationen, die ein Element beeinflussen, abrufen, indem Sie [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) aufrufen.

## Syntax

```js-nolint
animate(keyframes, options)
```

### Parameter

- `keyframes`
  - : Entweder ein Array von Keyframe-Objekten **oder** ein Keyframe-Objekt, dessen
    Eigenschaften Arrays von Werten sind, die iteriert werden sollen. Siehe [Keyframe-Formate](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats) für weitere Details.
- `options`

  - : Entweder ein **Ganzzahl, der die Dauer der Animation** (in
    Millisekunden) darstellt, **oder** ein Objekt, das eine oder mehrere Zeitsteuerungseigenschaften enthält, die im [`KeyframeEffect()` Optionsparameter](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters) beschrieben sind und/oder die folgenden Optionen:

    - `id` {{optional_inline}}
      - : Eine Besonderheit von `animate()`: Ein String mit dem die Animation referenziert wird.
    - `rangeEnd` {{optional_inline}}

      - : Legt das Ende des Bereichs fest, in dem eine Animation entlang ihrer Zeitachse angehängt wird, d.h. wo eine Animation entlang der Zeitachse enden wird. Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-range-end")}}. `rangeEnd` kann mehrere verschiedene Wertetypen annehmen, wie folgt:

        - Ein String, der `normal` sein kann (was bedeutet, dass es keine Veränderung des Anwendungsbereichs der Animation gibt), ein CSS {{cssxref("length-percentage")}}, das einen Offset darstellt, ein `<timeline-range-name>`, oder ein `<timeline-range-name>` mit einem `<length-percentage>` dahinter. Zum Beispiel: `"normal"`, `"entry"` oder `"cover 100%"`.

          Siehe [`animation-range`](/de/docs/Web/CSS/animation-range) für eine detaillierte Beschreibung der verfügbaren Werte. Schauen Sie sich auch den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) an, der genau zeigt, was die verschiedenen Werte in einem einfachen visuellen Format bedeuten.

        - Ein Objekt, das die Eigenschaften `rangeName` (ein String) und `offset` (ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)) enthält, die ein `<timeline-range-name>` und `<length-percentage>` darstellen, wie im vorherigen Aufzählungspunkt beschrieben. Zum Beispiel: `{ rangeName: "entry", offset: CSS.percent("100") }`.
        - Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), der einen Offset darstellt, zum Beispiel: `CSS.percent("100")`.

    - `rangeStart` {{optional_inline}}
      - : Legt den Anfang des Bereichs fest, in dem eine Animation entlang ihrer Zeitachse angehängt wird, d.h. wo eine Animation entlang der Zeitachse beginnen wird. Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-range-start")}}. `rangeStart` kann dieselben Wertetypen wie `rangeEnd` annehmen.
    - `timeline` {{optional_inline}}
      - : Eine Besonderheit von `animate()`: Die [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), die mit der Animation verknüpft wird. Standardmäßig [`Document.timeline`](/de/docs/Web/API/Document/timeline). Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-timeline")}}.

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

### "Down the Rabbit Hole" Demo

In der Demo [Down the Rabbit Hole (mit der Web Animation API)](https://codepen.io/rachelnabors/pen/rxpmJL/?editors=0010) verwenden wir die bequeme
`animate()` Methode, um sofort eine Animation zu erstellen und abzuspielen, die das
`#tunnel` Element unendlich nach oben fließen lässt. Beachten Sie das Array von
Objekten, die als Keyframes übergeben werden, sowie den Zeiteinstellungsblock.

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

In neueren Browserversionen können Sie einen Anfangs- oder Endzustand für eine
Animation einstellen (d.h. einen einzigen Keyframe), und der Browser wird das andere Ende der
Animation ableiten, wenn er es kann. Zum Beispiel schauen Sie sich [diese einfache Animation](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html) an — das Keyframe-Objekt sieht folgendermaßen aus:

```js
let rotate360 = [{ transform: "rotate(360deg)" }];
```

Wir haben nur den Endzustand der Animation angegeben, und der Anfangszustand ist
impliziert.

### timeline, rangeStart und rangeEnd

Typische Nutzung der Eigenschaften `timeline`, `rangeStart` und `rangeEnd` könnte so aussehen:

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
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
