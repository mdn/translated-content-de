---
title: "Animation: commitStyles()-Methode"
short-title: commitStyles()
slug: Web/API/Animation/commitStyles
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{APIRef("Web Animations")}}

Die `commitStyles()`-Methode des [`Animation`](/de/docs/Web/API/Animation)-Interfaces der [Web Animations API](/de/docs/Web/API/Web_Animations_API) schreibt die [berechneten Werte](/de/docs/Web/CSS/CSS_cascade/computed_value) der aktuellen Stile einer Animation in das [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut des Zielelements. `commitStyles()` funktioniert auch, wenn die Animation [automatisch entfernt wurde](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations).

`commitStyles()` kann in Kombination mit `fill` verwendet werden, um den Endzustand einer Animation nach ihrem Ende beizubehalten. Derselbe Effekt könnte allein mit `fill` erreicht werden, aber [die Verwendung von Animationen mit unbefristetem `fill` wird nicht empfohlen](https://drafts.csswg.org/web-animations-1/#fill-behavior). Animationen [haben Vorrang vor allen statischen Stilen](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order), sodass eine Animation mit unbefristetem `fill` verhindern kann, dass das Zielelement jemals normal gestylt wird.

Die Verwendung von `commitStyles()` schreibt den Stilzustand in das [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut des Elements, wo sie wie üblich modifiziert und ersetzt werden können.

## Syntax

```js-nolint
commitStyles()
```

### Parameter

Keine.

### Rückgabewert

Kein Wert ({{jsxref("undefined")}}).

## Beispiele

### Endzustand einer Animation übernehmen

In diesem Beispiel haben wir zwei Buttons, beschriftet mit „Stile übernehmen“ und „Vorwärts füllen“. Beide Buttons animieren, wenn Sie darauf klicken, und beide Buttons behalten den Endzustand der Animation bei.

Der Unterschied besteht jedoch darin, dass „Vorwärts füllen“ nur `fill: "forwards"` verwendet, um den Endzustand der Animation beizubehalten: Das bedeutet, dass der Browser den Zustand der Animation unbefristet oder bis zu ihrer automatischen Entfernung aufrechterhalten muss.

Der Button „Stile übernehmen“ hingegen wartet darauf, dass die Animation beendet ist, ruft dann `commitStyles()` auf und bricht die Animation anschließend ab. Der fertige Stil wird so als Wert des `style`-Attributs gespeichert, anstatt als Animationszustand.

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
- [`Animation`](/de/docs/Web/API/Animation), um weitere Methoden und Eigenschaften zum Steuern von Animationen auf Websites zu entdecken.
