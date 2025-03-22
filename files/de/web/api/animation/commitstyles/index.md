---
title: "Animation: commitStyles() Methode"
short-title: commitStyles()
slug: Web/API/Animation/commitStyles
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{APIRef("Web Animations")}}

Die `commitStyles()`-Methode des [Web Animations API](/de/docs/Web/API/Web_Animations_API) `Animation`-Interfaces schreibt die [berechneten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der aktuellen Stile der Animation in das [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut des Zielelements. `commitStyles()` funktioniert auch, wenn die Animation [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wurde.

`commitStyles()` kann in Kombination mit `fill` verwendet werden, um den Endzustand einer Animation auch nach deren Ende beizubehalten. Der gleiche Effekt könnte allein mit `fill` erreicht werden, jedoch [wird die Verwendung von unbegrenzt füllenden Animationen nicht empfohlen](https://drafts.csswg.org/web-animations-1/#fill-behavior). Animationen [haben Vorrang vor allen statischen Stilen](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order), daher kann eine unbegrenzt füllende Animation verhindern, dass das Zielelement jemals normal gestylt wird.

Durch die Verwendung von `commitStyles()` wird der Styling-Zustand in das `style`-Attribut des Elements geschrieben, wo sie wie gewohnt modifiziert und ersetzt werden können.

## Syntax

```js-nolint
commitStyles()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Festschreiben des Endzustands einer Animation

In diesem Beispiel haben wir zwei Schaltflächen, die mit "Stile festschreiben" und "Vorwärts füllen" beschriftet sind. Beide Schaltflächen animieren, wenn Sie darauf klicken, und beide Schaltflächen behalten den Endzustand der Animation bei.

Der Unterschied besteht jedoch darin, dass "Vorwärts füllen" nur `fill: "forwards"` verwendet, um den Endzustand der Animation beizubehalten: Dies bedeutet, dass der Browser den Zustand der Animation unbegrenzt oder bis zur automatischen Entfernung beibehalten muss.

Die Schaltfläche "Stile festschreiben" hingegen wartet, bis die Animation beendet ist, ruft dann `commitStyles()` auf und bricht anschließend die Animation ab, sodass der fertige Stil als Wert des `style`-Attributs erfasst wird, anstatt als Animationszustand.

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
- [`Animation`](/de/docs/Web/API/Animation) für andere Methoden und Eigenschaften, die Sie zur Steuerung von Webseiten-Animationen verwenden können.
