---
title: "Animation: commitStyles()-Methode"
short-title: commitStyles()
slug: Web/API/Animation/commitStyles
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{APIRef("Web Animations")}}

Die `commitStyles()`-Methode der [Web Animations API](/de/docs/Web/API/Web_Animations_API) Schnittstelle [`Animation`](/de/docs/Web/API/Animation) schreibt die [berechneten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value) der aktuellen Stile der Animation in das [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut des Ziel-Elements. `commitStyles()` funktioniert auch, wenn die Animation [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wurde.

`commitStyles()` kann in Kombination mit `fill` verwendet werden, um den Endzustand einer Animation nach deren Ende beizubehalten. Der gleiche Effekt könnte allein mit `fill` erzielt werden, jedoch [wird die Verwendung von dauerhaft füllenden Animationen nicht empfohlen](https://drafts.csswg.org/web-animations-1/#fill-behavior). Animationen [haben Vorrang vor allen statischen Stilen](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order), sodass eine dauerhaft füllende Animation verhindern kann, dass das Ziel-Element jemals normal gestylt wird.

Durch die Verwendung von `commitStyles()` wird der Stilzustand in das [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut des Elements geschrieben, wo sie wie gewohnt modifiziert und ersetzt werden können.

## Syntax

```js-nolint
commitStyles()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Übertragen des Endzustandes einer Animation

In diesem Beispiel haben wir zwei Schaltflächen, beschriftet als "Stile übertragen" und "Vorwärts füllen". Beide Schaltflächen animieren, wenn Sie sie anklicken, und beide Schaltflächen behalten den Endzustand der Animation bei.

Der Unterschied jedoch ist, dass "Vorwärts füllen" nur `fill: "forwards"` verwendet, um den Endzustand der Animation beizubehalten: Das bedeutet, dass der Browser den Zustand der Animation auf unbestimmte Zeit oder bis zur automatischen Entfernung beibehalten muss.

Die Schaltfläche "Stile übertragen" hingegen wartet, bis die Animation beendet ist, ruft dann `commitStyles()` auf und storniert anschließend die Animation, sodass der beendete Stil als Wert des `style`-Attributs erfasst wird, anstatt als Animationszustand.

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
- [`Animation`](/de/docs/Web/API/Animation) für andere Methoden und Eigenschaften, die Sie zur Steuerung der Animation von Webseiten verwenden können.
