---
title: "Element: animate() Methode"
short-title: animate()
slug: Web/API/Element/animate
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("Web Animations")}}

Die **`animate()`** Methode des [`Element`](/de/docs/Web/API/Element) Interface ist eine Abkürzung, die eine neue [`Animation`](/de/docs/Web/API/Animation) erstellt, sie auf das Element anwendet und die Animation dann abspielt. Sie gibt das erstellte [`Animation`](/de/docs/Web/API/Animation) Objekt-Instanz zurück.

> [!NOTE]
> Elemente können mehrere Animationen anwenden. Sie können eine Liste der Animationen abrufen, die ein Element betreffen, indem Sie [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) aufrufen.

## Syntax

```js-nolint
animate(keyframes, options)
```

### Parameter

- `keyframes`
  - : Entweder ein Array von Keyframe-Objekten **oder** ein Keyframe-Objekt, dessen Eigenschaften Arrays von Werten enthalten, die durchlaufen werden sollen. Weitere Details finden Sie unter [Keyframe-Formate](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats).
- `options`
  - : Entweder ein **Ganzzahl, die die Dauer der Animation** (in Millisekunden) darstellt, **oder** ein Objekt, das eine oder mehrere Zeitsteuerungseigenschaften enthält, die im [`KeyframeEffect()` options parameter](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters) beschrieben sind und/oder die folgenden Optionen:
    - `id` {{optional_inline}}
      - : Eine Eigenschaft, die einzigartig für `animate()` ist: Ein String, mit dem die Animation referenziert werden kann.
    - `rangeEnd` {{optional_inline}}
      - : Gibt das Ende des Anwendungsbereichs einer Animation entlang ihrer Zeitleiste an, d.h. wo entlang der Zeitleiste eine Animation enden wird. Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-range-end")}}. `rangeEnd` kann verschiedene Werttypen annehmen, wie folgt:
        - Ein String, der `normal` sein kann (was keine Änderung des Anwendungsbereichs der Animation bedeutet), ein CSS {{cssxref("length-percentage")}} repräsentiert einen Versatz, ein `<timeline-range-name>` oder ein `<timeline-range-name>` mit einem `<length-percentage>`, das darauf folgt. Zum Beispiel: `"normal"`, `"entry"`, oder `"cover 100%"`.

          Sehen Sie {{cssxref("animation-range")}} für eine detaillierte Beschreibung der verfügbaren Werte. Schauen Sie sich auch den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) an, der genau zeigt, was die verschiedenen Werte in einem einfach zu verstehenden visuellen Format bedeuten.

        - Ein Objekt, das die Eigenschaften `rangeName` (ein String) und `offset` (ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)) enthält, die ein `<timeline-range-name>` und `<length-percentage>` repräsentieren, wie im vorherigen Punkt beschrieben. Zum Beispiel: `{ rangeName: "entry", offset: CSS.percent("100") }`.
        - Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), das einen Versatz darstellt, z.B.: `CSS.percent("100")`.

    - `rangeStart` {{optional_inline}}
      - : Gibt den Beginn des Anwendungsbereichs einer Animation entlang ihrer Zeitleiste an, d.h. wo entlang der Zeitleiste eine Animation startet. Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-range-start")}}. `rangeStart` kann die gleichen Werttypen wie `rangeEnd` annehmen.
    - `timeline` {{optional_inline}}
      - : Eine Eigenschaft, die einzigartig für `animate()` ist: Der [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), der mit der Animation verbunden werden soll. Standardmäßig ist dies [`Document.timeline`](/de/docs/Web/API/Document/timeline). Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-timeline")}}.

### Rückgabewert

Gibt eine [`Animation`](/de/docs/Web/API/Animation) zurück.

## Beispiele

### Drehen und Skalieren

In diesem Beispiel verwenden wir die `animate()` Methode, um ein Element zu drehen und zu skalieren.

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

Im Demo [Down the Rabbit Hole (mit der Web Animation API)](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#moving_it_to_javascript) verwenden wir die bequeme `animate()` Methode, um sofort eine Animation auf dem `#tunnel` Element zu erstellen und abzuspielen, um es unendlich nach oben fließen zu lassen. Beachten Sie das Array von Objekten, das als Keyframes übergeben wird, und auch den Zeitsteuerungsoptionsblock.

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

Der Browser kann den Start- oder Endzustand einer Animation ableiten, indem er den aktuellen Zustand verwendet. Standardmäßig wird, wenn ein einzelner Keyframe bereitgestellt wird, dieser als Endzustand betrachtet, und der Startzustand wird aus dem aktuellen berechneten Stil des Elements abgeleitet. Sie können jedoch das `offset` angeben, um anzuzeigen, wo der bereitgestellte Keyframe in der Animationszeitleiste platziert werden soll.

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

Wir haben einen einzelnen Frame in der Zeitleiste angegeben, und die Start- und/oder Endzustände können ergänzt werden, um eine vollständige Animation zu erstellen.

{{EmbedLiveSample("Implicit to/from keyframes", "", 300)}}

### timeline, rangeStart, und rangeEnd

Die typische Verwendung der Eigenschaften `timeline`, `rangeStart` und `rangeEnd` könnte so aussehen:

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
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
