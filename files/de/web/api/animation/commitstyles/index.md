---
title: "Animation: commitStyles()-Methode"
short-title: commitStyles()
slug: Web/API/Animation/commitStyles
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Animations")}}

Die `commitStyles()`-Methode des [`Animation`](/de/docs/Web/API/Animation)-Interfaces der [Web Animations API](/de/docs/Web/API/Web_Animations_API) schreibt die [berechneten Werte](/de/docs/Web/CSS/computed_value) der aktuellen Stile der Animation in das [`style`](/de/docs/Web/HTML/Global_attributes#style)-Attribut des Zielelements. `commitStyles()` funktioniert auch, wenn die Animation [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wurde.

`commitStyles()` kann in Kombination mit `fill` verwendet werden, um den Endzustand einer Animation über das Ende der Animation hinaus bestehen zu lassen. Der gleiche Effekt könnte allein mit `fill` erreicht werden, aber [die Verwendung von auf unbestimmte Zeit füllenden Animationen wird abgeraten](https://drafts.csswg.org/web-animations-1/#fill-behavior). Animationen [haben Vorrang vor allen statischen Stilen](/de/docs/Web/CSS/Cascade#cascading_order), sodass eine unbestimmt füllende Animation verhindern kann, dass das Zielelement normal gestylt wird.

Die Verwendung von `commitStyles()` schreibt den Stilzustand in das [`style`](/de/docs/Web/HTML/Global_attributes#style)-Attribut des Elements, wo sie wie gewohnt modifiziert und ersetzt werden können.

## Syntax

```js-nolint
commitStyles()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Finale Zustand einer Animation festschreiben

In diesem Beispiel haben wir zwei Buttons, die mit "Stile übernehmen" und "Vorwärts füllen" beschriftet sind. Beide Buttons animieren sich, wenn Sie darauf klicken, und beide Buttons bewahren den Endzustand der Animation.

Der Unterschied besteht jedoch darin, dass "Vorwärts füllen" nur `fill: "forwards"` verwendet, um den Endzustand der Animation zu bewahren: Das bedeutet, dass der Browser den Zustand der Animation auf unbestimmte Zeit beibehalten muss oder bis er automatisch entfernt werden kann.

Der "Stile übernehmen" Button hingegen wartet darauf, dass die Animation endet, ruft dann `commitStyles()` auf und bricht die Animation ab, sodass der fertige Stil als Wert des `style`-Attributs und nicht als Animationszustand erfasst wird.

#### HTML

```html
<button class="commit-styles">Commit styles</button>
<br />
<button class="fill-forwards">Fill forwards</button>
```

```css hidden
button {
  margin: 0.5rem;
}
```

#### JavaScript

```js
const commitStyles = document.querySelector(".commit-styles");
let offset1 = 0;

commitStyles.addEventListener("click", async (event) => {
  // Start the animation
  offset1 = 100 - offset1;
  const animation = commitStyles.animate(
    { transform: `translate(${offset1}px)` },
    { duration: 500, fill: "forwards" },
  );

  // Wait for the animation to finish
  await animation.finished;
  // Commit animation state to style attribute
  animation.commitStyles();
  // Cancel the animation
  animation.cancel();
});

const fillForwards = document.querySelector(".fill-forwards");
let offset2 = 0;

fillForwards.addEventListener("click", async (event) => {
  // Start the animation
  offset2 = 100 - offset2;
  const animation = fillForwards.animate(
    { transform: `translate(${offset2}px)` },
    { duration: 500, fill: "forwards" },
  );
});
```

#### Ergebnis

{{EmbedLiveSample("committing_the_final_state_of_an_animation")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation) für andere Methoden und Eigenschaften, die Sie zur Steuerung von Webseitenanimationen verwenden können.
