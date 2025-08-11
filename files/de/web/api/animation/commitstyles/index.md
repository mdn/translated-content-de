---
title: "Animation: commitStyles() Methode"
short-title: commitStyles()
slug: Web/API/Animation/commitStyles
l10n:
  sourceCommit: 6eae35bc64a49865a469ca29bc40e6993b9cb8cc
---

{{APIRef("Web Animations")}}

Die `commitStyles()` Methode des [Web Animations API](/de/docs/Web/API/Web_Animations_API)'s [`Animation`](/de/docs/Web/API/Animation) Interface schreibt die [berechneten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der aktuellen Stile der Animation in das [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut des Zielelements.

Sie wird hauptsächlich verwendet, um die Stile des Endzustands einer Animation in das Zielelement zu schreiben, sodass die Gestaltung nach dem Ende der Animation bestehen bleibt.

## Syntax

```js-nolint
commitStyles()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die `commitStyles()` Methode wird hauptsächlich verwendet, um die [berechneten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) für den Endzustand einer Animation in das [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut des Zielelements zu schreiben, sodass die Gestaltung nach dem Ende der Animation bestehen bleibt.
Dies kann geschehen, wenn die Animation beendet ist (d.h. die [`Animation`](/de/docs/Web/API/Animation) Objekt's [`finished`](/de/docs/Web/API/Animation/finished) Eigenschaft aufgelöst wurde).

### `commitStyles()` zusammen mit Fill-Modus

In älteren Browsern müssen Sie den [`fill` Modus](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) angeben, um die Stile _nach_ dem Abschluss der Animation auf das Element anwenden zu können.

Der folgende Code zeigt, wie Sie ein Element namens `animatedElement` animieren können, indem Sie [`fill: "forwards"`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) setzen, um die Animationsstile nach deren Abschluss zu bewahren.
Sobald die Animation abgeschlossen ist, werden die Stile mit `commitStyles()` auf das Element angewendet.

```js
// Start the animation
const animation = animatedElement.animate(
  { transform: "translate(100px)" },
  { duration: 500, fill: "forwards" },
);

// Wait for the animation to finish
await animation.finished;
// Commit animation state to he animatedElement style attribute
animation.commitStyles();
// Cancel the animation
animation.cancel();
```

Da `fill` die Animation auf unbestimmte Zeit aufrechterhält, stornieren wir die Animation, nachdem wir die Stile übernommen haben.

Beachten Sie, dass derselbe Effekt auch alleine mit `fill` erreicht werden könnte, jedoch [wird die Verwendung unbefristet füllender Animationen nicht empfohlen](https://drafts.csswg.org/web-animations-1/#fill-behavior).
Animationen [haben Vorrang vor allen statischen Stilen](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order), sodass eine unbefristet füllende Animation verhindern kann, dass das Zielelement jemals normal gestylt wird.

> [!NOTE]
> Sie könnten es auch vermeiden, den endgültigen Zustand explizit zu speichern, indem Sie ihn als anfängliche Stile des Elements festlegen und zur endgültigen Stilen animieren.

### `commitStyles()` ohne Festlegung des Fill-Modus

In neueren Browsern müssen Sie den [`fill` Modus](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) nicht setzen (siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für spezifische Versionen).

> [!NOTE]
> Es gibt keine Möglichkeit, dieses neue Verhalten zu überprüfen.
> Vorerst sollte der meiste Code weiterhin `fill` setzen, wie im vorherigen Abschnitt gezeigt.

Der folgende Code zeigt, wie Sie ein Element namens `animatedElement` animieren können, auf das Beenden der Animation mit der [`finished`](/de/docs/Web/API/Animation/finished) Eigenschaft warten und dann die Stile mit `commitStyles()` auf das Element anwenden.
Da wir nicht `fill` setzen, müssen wir die Animation danach nicht abbrechen.

```js
// Start the animation
const animation = animatedElement.animate(
  { transform: "translate(100px)" },
  { duration: 500 },
);

// Wait for the animation to finish
await animation.finished;

// Commit animation state to the animatedElement style attribute
animation.commitStyles();
```

`commitStyles()` funktioniert, selbst wenn die Animation [automatisch entfernt wurde](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations).
Sobald die Stile des Elements übernommen wurden, können sie normal modifiziert und ersetzt werden.

## Beispiele

### Animation mit und ohne Verwendung von Fill

Dieses Beispiel zeigt, wie Sie `commitStyles()` verwenden können, um die berechneten Stile am Ende der Animation zu speichern, sowohl mit als auch ohne Verwendung von `fill`.
Es bietet auch ein Beispiel dafür, was passiert, wenn weder `commitStyles()` noch `fill` verwendet werden, zum Vergleich.

Das Beispiel zeigt zunächst zwei Schaltflächen mit den Bezeichnungen "commitStyles() only" und "commitStyles() with fill".
Beide Schaltflächen animieren, wenn Sie sie anklicken, und beide Schaltflächen rufen `commitStyles()` auf, um den Endzustand der Animation zu bewahren.
Der Unterschied besteht darin, dass "commitStyles() only" nicht `fill: "forwards"` angibt, um den Endzustand der Animation zu bewahren.
In Browsern, die nicht der aktuellen Spezifikation entsprechen, wird der Endzustand möglicherweise nicht erfasst.

Der Code zeigt dann eine Schaltfläche "No commitStyles() or fill", die zum Vergleich verwendet werden kann, und eine "Reset"-Schaltfläche.

#### HTML

```html
<button class="commit-styles">commitStyles() only</button>
<button class="commit-with-fill">commitStyles() with fill</button>
<button class="no-commit-or-fill">No commitStyles() or fill</button>
```

```html hidden
<button id="reset" type="button">Reset</button>
```

```css hidden
button {
  margin: 0.5rem;
  display: block;
}
```

```js hidden
const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

#### JavaScript

Dieser Code definiert einen Klick-Handler für die Schaltfläche "commitStyles() only".
Diese animiert die Schaltfläche, um sie beim Klicken nach rechts oder links zu bewegen.
Beachten Sie, dass `commitStyles()` unmittelbar nach dem Abschluss der Animation aufgerufen wird.

```js
let offset1 = 0;

const commitStyles = document.querySelector(".commit-styles");

commitStyles.addEventListener("click", async (event) => {
  // Start the animation
  offset1 = 100 - offset1;
  const animation = commitStyles.animate(
    { transform: `translate(${offset1}px)` },
    { duration: 500 },
  );

  // Wait for the animation to finish
  await animation.finished;
  // Commit animation state to style attribute
  animation.commitStyles();
});
```

Dieser Code definiert einen Klick-Handler für die Schaltfläche "commitStyles() with fill".
Diese animiert ebenfalls die Schaltfläche, um sie beim Klicken nach rechts oder links zu bewegen.
Da es ein `fill` definiert, muss die Animation danach abgebrochen werden.

Beachten Sie, dass `commitStyles()` unmittelbar nach dem Abschluss der Animation aufgerufen wird.

```js
const commitStylesWithFill = document.querySelector(".commit-with-fill");
let offset2 = 0;

commitStylesWithFill.addEventListener("click", async (event) => {
  // Start the animation
  offset2 = 100 - offset2;
  const animation = commitStylesWithFill.animate(
    { transform: `translate(${offset2}px)` },
    { duration: 500, fill: "forwards" },
  );

  // Wait for the animation to finish
  await animation.finished;
  // Commit animation state to style attribute
  animation.commitStyles();
  // Cancel the animation
  animation.cancel();
});
```

Dieser Code definiert einen Klick-Handler für die Schaltfläche "No commitStyles() or fill".
Diese animiert ebenfalls die Schaltfläche, um sie beim Klicken nach rechts oder links zu bewegen.
Es definiert kein fill und wir stornieren die Animation nicht.

```js
const noCommitStylesOrFill = document.querySelector(".no-commit-or-fill");
let offset3 = 0;

noCommitStylesOrFill.addEventListener("click", async (event) => {
  // Start the animation
  offset3 = 100 - offset3;
  const animation = noCommitStylesOrFill.animate(
    { transform: `translate(${offset3}px)` },
    { duration: 500 },
  );
});
```

#### Ergebnis

Klicken Sie auf die Schaltflächen, um sie zu animieren.
Beachten Sie, dass die erste Schaltfläche am Ende der Animation "springt", wenn der aktuelle Browser noch `fill` benötigt, um Stile nach dem Ende der Animation zu übernehmen.
Die Schaltfläche "No commitStyles() or fill" springt am Ende immer, da der Endzustand nicht gespeichert wird.

{{EmbedLiveSample("Animation with and without using fill")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation) für andere Methoden und Eigenschaften, die Sie zur Steuerung von Webseiten-Animationen verwenden können.
