---
title: "Element: animate() Methode"
short-title: animate()
slug: Web/API/Element/animate
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{APIRef('Web Animations')}}

Die **`animate()`** Methode des [`Element`](/de/docs/Web/API/Element) Interfaces ist eine Abkürzungsmethode, die eine neue [`Animation`](/de/docs/Web/API/Animation) erstellt, sie auf das Element anwendet und dann die Animation abspielt. Sie gibt das erstellte [`Animation`](/de/docs/Web/API/Animation)-Objekt zurück.

> [!NOTE]
> Elemente können mehrere Animationen haben, die auf sie angewendet werden. Sie können eine Liste der Animationen abrufen, die ein Element beeinflussen, indem Sie [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) aufrufen.

## Syntax

```js-nolint
animate(keyframes, options)
```

### Parameter

- `keyframes`
  - : Entweder ein Array von Keyframe-Objekten **oder** ein Keyframe-Objekt, dessen Eigenschaften Arrays von Werten sind, über die iteriert werden soll. Siehe [Keyframe Formats](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats) für weitere Details.
- `options`

  - : Entweder ein **Integer, der die Dauer der Animation** (in Millisekunden) darstellt, **oder** ein Objekt, das eine oder mehrere in den [`KeyframeEffect()` options parameter](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters) beschriebene Timing-Eigenschaften und/oder die folgenden Optionen enthält:

    - `id` {{optional_inline}}
      - : Eine für `animate()` einzigartige Eigenschaft: Ein String, mit dem die Animation referenziert wird.
    - `rangeEnd` {{optional_inline}}

      - : Gibt das Ende eines Animationsanheftungsbereichs entlang seiner Zeitleiste an, d.h. wo entlang der Zeitleiste eine Animation enden wird. Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-range-end")}}. `rangeEnd` kann verschiedene Wertetypen annehmen, wie folgt:

        - Ein String, der `normal` sein kann (was keine Änderung des Animationsanheftungsbereichs bedeutet), ein CSS {{cssxref("length-percentage")}}, das einen Versatz darstellt, ein `<timeline-range-name>`, oder ein `<timeline-range-name>` mit einem `<length-percentage>` danach. Zum Beispiel: `"normal"`, `"entry"`, oder `"cover 100%"`.

          Siehe [`animation-range`](/de/docs/Web/CSS/animation-range) für eine detaillierte Beschreibung der verfügbaren Werte. Werfen Sie auch einen Blick auf den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/), der genau zeigt, was die verschiedenen Werte in einem leicht verständlichen visuellen Format bedeuten.

        - Ein Objekt, das `rangeName` (ein String) und `offset` (ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)) Eigenschaften enthält und ein `<timeline-range-name>` und `<length-percentage>` repräsentiert, wie in der vorherigen Aufzählung beschrieben. Zum Beispiel: `{ rangeName: "entry", offset: CSS.percent("100") }`.
        - Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), das einen Versatz darstellt, zum Beispiel: `CSS.percent("100")`.

    - `rangeStart` {{optional_inline}}
      - : Gibt den Anfang eines Animationsanheftungsbereichs entlang seiner Zeitleiste an, d.h. wo entlang der Zeitleiste eine Animation starten wird. Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-range-start")}}. `rangeStart` kann dieselben Wertetypen wie `rangeEnd` annehmen.
    - `timeline` {{optional_inline}}
      - : Eine für `animate()` einzigartige Eigenschaft: Die [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), die mit der Animation assoziiert werden soll. Voreinstellung ist [`Document.timeline`](/de/docs/Web/API/Document/timeline). Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-timeline")}}.

### Rückgabewert

Gibt eine [`Animation`](/de/docs/Web/API/Animation) zurück.

## Beispiele

### Rotieren und Skalieren

In diesem Beispiel verwenden wir die Methode `animate()`, um ein Element zu rotieren und zu skalieren.

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

### Demo: Down the Rabbit Hole

In der Demo [Down the Rabbit Hole (with the Web Animation API)](https://codepen.io/rachelnabors/pen/rxpmJL/?editors=0010) verwenden wir die praktische Methode `animate()`, um eine Animation auf dem `#tunnel`-Element zu erstellen und sofort abzuspielen, damit es unendlich nach oben fließt. Beachten Sie das Array von Objekten, die als Keyframes übergeben werden, sowie den Zeitoptionen-Block.

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

### Implizite zu/von-Keyframes

In neueren Browserversionen können Sie einen Anfangs- oder Endzustand für eine Animation festlegen (d.h. einen einzelnen Keyframe), und der Browser wird das andere Ende der Animation ableiten, wenn er dazu in der Lage ist. Betrachten Sie zum Beispiel [diese einfache Animation](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html) – das Keyframe-Objekt sieht folgendermaßen aus:

```js
let rotate360 = [{ transform: "rotate(360deg)" }];
```

Wir haben nur den Endzustand der Animation spezifiziert, und der Anfangszustand wird impliziert.

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
- [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
