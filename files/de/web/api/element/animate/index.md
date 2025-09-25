---
title: "Element: `animate()` Methode"
short-title: animate()
slug: Web/API/Element/animate
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Web Animations")}}

Die **`animate()`** Methode des [`Element`](/de/docs/Web/API/Element) Interface
ist eine Abkürzungsmethode, die eine neue [`Animation`](/de/docs/Web/API/Animation) erstellt, auf das Element anwendet und die Animation abspielt. Sie gibt die erstellte Instanz des [`Animation`](/de/docs/Web/API/Animation) Objekts zurück.

> [!NOTE]
> Elemente können mehrere Animationen angewendet bekommen. Sie können eine Liste der Animationen erhalten, die ein Element beeinflussen, indem Sie [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) aufrufen.

## Syntax

```js-nolint
animate(keyframes, options)
```

### Parameter

- `keyframes`
  - : Entweder ein Array von Keyframe-Objekten **oder** ein Keyframe-Objekt, dessen Eigenschaften Arrays von zu durchlaufenden Werten sind. Siehe [Keyframe-Formate](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats) für weitere Details.
- `options`
  - : Entweder eine **Ganzzahl, die die Dauer der Animation** (in Millisekunden) darstellt, **oder** ein Objekt, das eine oder mehrere Zeitsteuerungseigenschaften enthält, die im [`KeyframeEffect()` options parameter](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters) beschrieben sind, sowie die folgenden Optionen:
    - `id` {{optional_inline}}
      - : Eine einzigartige Eigenschaft von `animate()`: Ein String, mit dem auf die Animation verwiesen wird.
    - `rangeEnd` {{optional_inline}}
      - : Gibt das Ende des Anhangsbereichs einer Animation entlang ihrer Zeitleiste an, d.h. wo entlang der Zeitleiste eine Animation endet. Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-range-end")}}. `rangeEnd` kann mehrere verschiedene Werttypen annehmen, wie folgt:
        - Ein String, der `normal` sein kann (was keine Änderung des Anhangsbereichs der Animation bedeutet), ein CSS {{cssxref("length-percentage")}}, das einen Versatz darstellt, ein `<timeline-range-name>`, oder ein `<timeline-range-name>` mit einem darauf folgenden `<length-percentage>`. Zum Beispiel: `"normal"`, `"entry"`, oder `"cover 100%"`.

          Siehe [`animation-range`](/de/docs/Web/CSS/animation-range) für eine detaillierte Beschreibung der verfügbaren Werte. Schauen Sie sich auch den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) an, der genau zeigt, was die verschiedenen Werte in einem leicht verständlichen visuellen Format bedeuten.

        - Ein Objekt, das `rangeName` (ein String) und `offset` (ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)) Eigenschaften enthält, die ein `<timeline-range-name>` und ein `<length-percentage>` darstellen, wie im vorherigen Aufzählungspunkt beschrieben. Zum Beispiel: `{ rangeName: "entry", offset: CSS.percent("100") }`.
        - Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), das einen Versatz darstellt, zum Beispiel: `CSS.percent("100")`.

    - `rangeStart` {{optional_inline}}
      - : Gibt den Anfang des Anhangsbereichs einer Animation entlang ihrer Zeitleiste an, d.h. wo entlang der Zeitleiste eine Animation startet. Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-range-start")}}. `rangeStart` kann dieselben Werttypen wie `rangeEnd` annehmen.
    - `timeline` {{optional_inline}}
      - : Eine einzigartige Eigenschaft von `animate()`: Die [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), die mit der Animation verbunden wird. Standardmäßig gesetzt auf [`Document.timeline`](/de/docs/Web/API/Document/timeline). Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-timeline")}}.

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

### Demo "Down the Rabbit Hole"

In der Demo [Down the Rabbit Hole (mit der Web Animation API)](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#moving_it_to_javascript) verwenden wir die praktische
`animate()` Methode, um sofort eine Animation auf dem
`#tunnel` Element zu erstellen und abzuspielen, damit es unendlich nach oben fließt. Beachten Sie das Array von Objekten, die als Keyframes übergeben werden, sowie den Timing Options Block.

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

Der Browser kann den Start- oder Endzustand einer Animation ableiten, indem er den aktuellen Zustand verwendet. Standardmäßig wird, wenn ein einzelnes Keyframe bereitgestellt wird, dieses als Endzustand behandelt und der Startzustand wird aus dem aktuellen berechneten Stil des Elements abgeleitet. Sie können jedoch das `offset` angeben, um zu bestimmen, wo das bereitgestellte Keyframe in der Zeitleiste der Animation platziert werden soll.

```html hidden
<div>
  <img
    id="logo"
    src="/shared-assets/images/examples/firefox-logo.svg"
    alt="Firefox logo" />
</div>
<button id="run">Animate - use current as start</button>
<button id="run2">Animate - use current as end</button>
<button id="run3">Animate - use current as both ends</button>
```

```css hidden
div {
  width: 100%;
}

#logo {
  width: 200px;
  height: 200px;
}
```

```js
const logo = document.getElementById("logo");
document.getElementById("run").addEventListener("click", () => {
  logo.animate({ transform: "translateX(300px)" }, 1000);
});
document.getElementById("run2").addEventListener("click", () => {
  logo.animate({ transform: "translateX(300px)", offset: 0 }, 1000);
});
document.getElementById("run3").addEventListener("click", () => {
  logo.animate({ transform: "translateX(300px)", offset: 0.5 }, 1000);
});
```

Wir haben einen einzelnen Frame in der Zeitleiste spezifiziert, und die Start- und/oder Endzustände können ausgefüllt werden, um eine vollständige Animation zu erzeugen.

{{EmbedLiveSample("Implicit to/from keyframes", "", 300)}}

### `timeline`, `rangeStart` und `rangeEnd`

Typische Verwendung der Eigenschaften `timeline`, `rangeStart` und `rangeEnd` könnte folgendermaßen aussehen:

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
