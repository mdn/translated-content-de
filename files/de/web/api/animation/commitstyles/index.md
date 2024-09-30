---
title: "Animation: commitStyles() Methode"
short-title: commitStyles()
slug: Web/API/Animation/commitStyles
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Animations")}}

Die `commitStyles()` Methode der [`Animation`](/de/docs/Web/API/Animation) Schnittstelle des [Web Animations API](/de/docs/Web/API/Web_Animations_API) schreibt die [berechneten Werte](/de/docs/Web/CSS/computed_value) der aktuellen Stile der Animation in das [`style`](/de/docs/Web/HTML/Global_attributes#style) Attribut des Ziel-Elements. `commitStyles()` funktioniert selbst dann, wenn die Animation [automatisch entfernt wurde](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations).

`commitStyles()` kann in Kombination mit `fill` verwendet werden, um den Endzustand einer Animation nach deren Abschluss bestehen zu lassen. Derselbe Effekt könnte auch nur mit `fill` erzielt werden, aber [die Verwendung von Animationen mit unbegrenztem Füllverhalten wird nicht empfohlen](https://drafts.csswg.org/web-animations-1/#fill-behavior). Animationen [haben Vorrang vor allen statischen Stilen](/de/docs/Web/CSS/Cascade#cascading_order), sodass eine unbegrenzt füllende Animation verhindern kann, dass das Ziel-Element jemals normal gestylt wird.

Durch die Verwendung von `commitStyles()` wird der Stilzustand in das [`style`](/de/docs/Web/HTML/Global_attributes#style) Attribut des Elements geschrieben, wo sie normal modifiziert und ersetzt werden können.

## Syntax

```js-nolint
commitStyles()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Den Endzustand einer Animation festlegen

In diesem Beispiel haben wir zwei Schaltflächen, beschriftet mit "Styles festschreiben" und "Vorwärts füllen". Beide Schaltflächen animieren, wenn Sie darauf klicken, und beide halten den Endzustand der Animation aufrecht.

Der Unterschied besteht jedoch darin, dass "Vorwärts füllen" nur `fill: "forwards"` verwendet, um den Endzustand der Animation zu bewahren: Das bedeutet, dass der Browser den Zustand der Animation auf unbestimmte Zeit oder bis zur automatischen Entfernung aufrechterhalten muss.

Die Schaltfläche "Styles festschreiben" wartet jedoch, bis die Animation fertig ist, ruft dann `commitStyles()` auf und storniert die Animation, sodass der abgeschlossene Stil als Wert des `style` Attributs und nicht als Animationszustand festgelegt wird.

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
- [`Animation`](/de/docs/Web/API/Animation) für andere Methoden und Eigenschaften, die Sie zur Steuerung von Web-Seiten-Animationen verwenden können.
