---
title: "Animation: commitStyles() Methode"
short-title: commitStyles()
slug: Web/API/Animation/commitStyles
l10n:
  sourceCommit: b21dc41b8a458cb9cfa7e3eb6d6abcc4033b05ab
---

{{APIRef("Web Animations")}}

Die `commitStyles()` Methode der [Web Animations API](/de/docs/Web/API/Web_Animations_API) Schnittstelle [`Animation`](/de/docs/Web/API/Animation) schreibt die [berechneten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der aktuellen Stile einer Animation in das [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut des Ziel-Elements.

Sie wird hauptsächlich verwendet, um die Stile für den Endzustand einer Animation in das Ziel-Element zu schreiben, sodass die Gestaltung nach dem Ende der Animation beibehalten wird.

## Syntax

```js-nolint
commitStyles()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die `commitStyles()` Methode wird hauptsächlich verwendet, um die [berechneten Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) für den Endzustand einer Animation in das [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut des Ziel-Elements zu schreiben, sodass die Gestaltung nach dem Ende der Animation beibehalten wird. Dies kann erfolgen, wenn die Animation abgeschlossen ist (d.h. die [`Animation`](/de/docs/Web/API/Animation) Eigenschaft [`finished`](/de/docs/Web/API/Animation/finished) aufgelöst wurde).

### `commitStyles()` zusammen mit dem Fill-Modus

In älteren Browsern müssen Sie den [`fill` Modus](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) angeben, um die Stile nach Abschluss der Animation auf das Element anwenden zu können.

Der untenstehende Code zeigt, wie Sie ein Element namens `animatedElement` animieren können, indem Sie [`fill: "forwards"`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) setzen, um die Animationsstile nach Abschluss der Animation beizubehalten. Sobald die Animation beendet ist, wenden wir die Stile mit `commitStyles()` auf das Element an.

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

Da `fill` die Animation unbegrenzt fortsetzt, brechen wir die Animation ab, sobald wir die Stile festgeschrieben haben.

Beachten Sie, dass derselbe Effekt allein mit `fill` erzielt werden könnte, aber [die Nutzung unbegrenzt laufender Animationen wird nicht empfohlen](https://drafts.csswg.org/web-animations-1/#fill-behavior). Animationen [haben Vorrang vor allen statischen Stilen](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order), sodass eine unbegrenzt laufende Animation verhindern kann, dass das Ziel-Element jemals normal gestylt wird.

> [!NOTE]
> Möglicherweise müssen Sie den Endzustand nicht explizit speichern, indem Sie diese als initiale Stilelemente setzen und auf die Endstile animieren.

### `commitStyles()` ohne Fill-Modus

In neueren Browsern müssen Sie den [`fill` Modus](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) nicht einstellen (siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für spezifische Versionen).

> [!NOTE]
> Es gibt keine Möglichkeit, dieses neue Verhalten zu überprüfen. Bis jetzt sollte der meiste Code weiterhin `fill` wie im vorherigen Abschnitt gezeigt einstellen.

Der untenstehende Code zeigt, wie Sie ein Element namens `animatedElement` animieren können, auf die Animation über die [`finished`](/de/docs/Web/API/Animation/finished) Eigenschaft warten und dann die Stile mit `commitStyles()` auf das Element anwenden. Da wir `fill` nicht einstellen, müssen wir die Animation danach nicht abbrechen.

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

`commitStyles()` funktioniert auch, wenn die Animation [automatisch entfernt wurde](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations). Nachdem die Stile des Elements festgeschrieben wurden, können sie wie gewohnt geändert und ersetzt werden.

## Beispiele

### Animation mit und ohne Nutzung von Fill

Dieses Beispiel zeigt, wie Sie `commitStyles()` verwenden können, um die berechneten Stile am Ende der Animation sowohl mit als auch ohne `fill` zu speichern. Es bietet auch ein Beispiel, was passiert, wenn weder `commitStyles()` noch `fill` verwendet werden, zum Vergleich.

Das Beispiel zeigt zuerst zwei Schaltflächen mit den Bezeichnungen "commitStyles() only" und "commitStyles() with fill". Beide Schaltflächen animieren sich, wenn Sie sie anklicken, und beide Schaltflächen rufen `commitStyles()` auf, um den Endzustand der Animation beizubehalten. Der Unterschied besteht darin, dass "commitStyles() only" nicht `fill: "forwards"` definiert, um den Endzustand der Animation zu speichern. In Browsern, die nicht der aktuellen Spezifikation entsprechen, wird der Endzustand möglicherweise nicht erfasst.

Der Code zeigt dann eine Schaltfläche "No commitStyles() or fill" zur Nutzung als Vergleich und eine "Reset"-Schaltfläche.

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

Dieser Code definiert einen Klick-Handler für die "commitStyles() only" Schaltfläche.
Er animiert die Schaltfläche nach rechts oder links, wenn sie angeklickt wird.
Beachten Sie, dass `commitStyles()` unmittelbar nach Abschluss der Animation aufgerufen wird.

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

Dieser Code definiert einen Klick-Handler für die "commitStyles() with fill" Schaltfläche.
Auch hier wird die Schaltfläche nach rechts oder links bewegt, wenn sie angeklickt wird.
Da ein `fill` definiert wird, muss die Animation danach abgebrochen werden.

Beachten Sie, dass `commitStyles()` unmittelbar nach Abschluss der Animation aufgerufen wird.

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

Dieser Code definiert einen Klick-Handler für die "No commitStyles() or fill" Schaltfläche.
Auch hier wird die Schaltfläche nach rechts oder links bewegt, wenn sie angeklickt wird.
Es wird kein Fill definiert und wir brechen die Animation nicht ab.

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

Klicken Sie auf die Schaltflächen, um sie zu animieren. Beachten Sie, dass die erste Schaltfläche am Ende der Animation "springt", wenn der aktuelle Browser `fill` weiterhin benötigt, damit die Stile nach Ende der Animation festgeschrieben werden. Die "No commitStyles() or fill" Schaltfläche springt immer am Ende, da der Endzustand nicht gespeichert wird.

{{EmbedLiveSample("Animation with and without using fill")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation) für andere Methoden und Eigenschaften, die Sie zur Steuerung der Webseiten-Animation verwenden können.
