---
title: "Element: animate()-Methode"
short-title: animate()
slug: Web/API/Element/animate
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef('Web Animations')}}

Die **`animate()`**-Methode der {{domxref("Element")}}-Schnittstelle ist eine Abkürzungsmethode, die eine neue {{domxref("Animation")}} erstellt, sie auf das Element anwendet und dann die Animation abspielt. Sie gibt die erstellte {{domxref("Animation")}}-Objektinstanz zurück.

> [!NOTE]
> Elemente können mehrere Animationen aufweisen. Sie können eine Liste der Animationen, die ein Element beeinflussen, abrufen, indem Sie {{domxref("Element.getAnimations()")}} aufrufen.

## Syntax

```js-nolint
animate(keyframes, options)
```

### Parameter

- `keyframes`
  - : Entweder ein Array von Keyframe-Objekten **oder** ein Keyframe-Objekt, dessen Eigenschaften Arrays von Werten sind, über die iteriert werden soll. Weitere Details finden Sie unter [Keyframe Formate](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats).
- `options`

  - : Entweder ein **Ganzzahlwert, der die Dauer der Animation** (in Millisekunden) darstellt, **oder** ein Objekt, das eine oder mehrere der in den [`KeyframeEffect()` options parameter](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters) beschriebenen Zeitsteuerungseigenschaften und/oder die folgenden Optionen enthält:

    - `id` {{optional_inline}}
      - : Eine Eigenschaft, die für `animate()` einzigartig ist: Ein String, um auf die Animation zu verweisen.
    - `rangeEnd` {{optional_inline}}

      - : Gibt das Ende des Anhangsbereichs einer Animation entlang ihrer Zeitleiste an, d.h. wo entlang der Zeitleiste eine Animation enden wird. Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-range-end")}}. `rangeEnd` kann verschiedene Wertetypen annehmen, wie folgt:

        - Ein String, der `normal` sein kann (was bedeutet, dass keine Änderung des Anhangsbereichs der Animation erfolgt), ein CSS {{cssxref("length-percentage")}}, das ein Offset darstellt, ein `<timeline-range-name>`, oder ein `<timeline-range-name>` mit einem darauf folgenden `<length-percentage>`. Zum Beispiel:

          ```plain
          "normal"
          "entry"
          "cover 100%"
          ```

          Siehe [`animation-range`](/de/docs/Web/CSS/animation-range) für eine detaillierte Beschreibung der verfügbaren Werte. Schauen Sie sich auch den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) an, der genau zeigt, was die verschiedenen Werte in einem einfachen visuellen Format bedeuten.

        - Ein Objekt, das die Eigenschaften `rangeName` (ein String) und `offset` (ein {{domxref("CSSNumericValue")}}) enthält, die ein `<timeline-range-name>` und `<length-percentage>` darstellen, wie im vorherigen Punkt beschrieben. Zum Beispiel:

          ```js
          {
            rangeName: 'entry',
            offset: CSS.percent('100'),
          }
          ```

        - Ein {{domxref("CSSNumericValue")}}, das ein Offset darstellt, zum Beispiel:

          ```js
          CSS.percent("100");
          ```

    - `rangeStart` {{optional_inline}}
      - : Gibt den Beginn des Anhangsbereichs einer Animation entlang ihrer Zeitleiste an, d.h. wo entlang der Zeitleiste eine Animation beginnen wird. Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-range-start")}}. `rangeStart` kann die gleichen Wertetypen wie `rangeEnd` annehmen.
    - `timeline` {{optional_inline}}
      - : Eine Eigenschaft, die für `animate()` einzigartig ist: Die mit der Animation zu assoziierende {{domxref("AnimationTimeline")}}. Standardmäßig ist dies {{domxref("Document.timeline")}}. Das JavaScript-Äquivalent der CSS-Eigenschaft {{cssxref("animation-timeline")}}.

### Rückgabewert

Gibt eine {{domxref("Animation")}} zurück.

## Beispiele

### Rotieren und Skalieren

In diesem Beispiel verwenden wir die `animate()`-Methode, um ein Element zu rotieren und zu skalieren.

#### HTML

```html
<div class="newspaper">Drehende Zeitung<br />verursacht Schwindel</div>
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

Im Demo [Down the Rabbit Hole (mit der Web Animation API)](https://codepen.io/rachelnabors/pen/rxpmJL/?editors=0010) verwenden wir die praktische `animate()`-Methode, um sofort eine Animation auf dem `#tunnel`-Element zu erstellen und abzuspielen, die es unendlich nach oben fließen lässt. Beachten Sie das Array von Objekten, das als Keyframes übergeben wird, und auch den Timing-Options-Block.

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

### Implizite to/from Keyframes

In neueren Browserversionen können Sie nur einen Anfangs- oder Endzustand für eine Animation festlegen (d.h. ein einzelnes Keyframe), und der Browser wird, falls möglich, das andere Ende der Animation ableiten. Betrachten Sie zum Beispiel [diese einfache Animation](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html) — das Keyframe-Objekt sieht wie folgt aus:

```js
let rotate360 = [{ transform: "rotate(360deg)" }];
```

Wir haben nur den Endzustand der Animation angegeben, und der Anfangszustand wird implizit.

### timeline, rangeStart und rangeEnd

Eine typische Verwendung der Eigenschaften `timeline`, `rangeStart` und `rangeEnd` könnte so aussehen:

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

- {{domxref("Animation")}}
- {{domxref("Element.getAnimations()")}}
- {{cssxref("animation-range-end")}}, {{cssxref("animation-range-start")}}, {{cssxref("animation-timeline")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
