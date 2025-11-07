---
title: "Animation: commitStyles() Methode"
short-title: commitStyles()
slug: Web/API/Animation/commitStyles
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Web Animations")}}

Die `commitStyles()`-Methode der [`Animation`](/de/docs/Web/API/Animation)-Schnittstelle der [Web Animations API](/de/docs/Web/API/Web_Animations_API) schreibt die [berechneten Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der aktuellen Stile der Animation in das [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut des Zielelements.

Sie wird hauptsächlich verwendet, um die Stile für den Endzustand einer Animation in das Zielelement zu schreiben, damit die Gestaltung nach Beendigung der Animation erhalten bleibt.

## Syntax

```js-nolint
commitStyles()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beschreibung

Die `commitStyles()`-Methode wird hauptsächlich verwendet, um die [berechneten Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) für den Endzustand einer Animation in das [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut des Zielelements zu schreiben, damit die Gestaltung nach Beendigung der Animation erhalten bleibt.
Dies kann geschehen, wenn die Animation abgeschlossen ist (wenn also die [`finished`](/de/docs/Web/API/Animation/finished)-Eigenschaft des [`Animation`](/de/docs/Web/API/Animation)-Objekts aufgelöst wurde).

### `commitStyles()` zusammen mit Fill-Modus

In älteren Browsern müssen Sie den [`fill`-Modus](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) angeben, um in der Lage zu sein, die Stile an das Element _nachdem_ die Animation beendet ist, zu übernehmen.

Der untenstehende Code zeigt, wie Sie ein Element mit dem Namen `animatedElement` animieren und [`fill: "forwards"`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) setzen können, um die Animationsstile nach dem Ende beizubehalten.
Sobald die Animation beendet ist, übernehmen wir die Stile auf das Element mit `commitStyles()`.

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

Da `fill` die Animation unbefristet beibehält, beenden wir die Animation, sobald wir die Stile übernommen haben.

Beachten Sie, dass derselbe Effekt nur mit `fill` allein erzielt werden könnte, jedoch wird [die Verwendung von unbefristet füllenden Animationen nicht empfohlen](https://drafts.csswg.org/web-animations-1/#fill-behavior).
Animationen [haben Vorrang vor allen statischen Stilen](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order), sodass eine unbefristet füllende Animation verhindern kann, dass das Zielelement jemals normal gestaltet wird.

> [!NOTE]
> Sie könnten auch vermeiden, den Endzustand explizit zu speichern, indem Sie diese als Anfangsstile des Elements festlegen und zu den Endstilen animieren.

### `commitStyles()` ohne Festlegung des Fill-Modus

In neueren Browsern müssen Sie den [`fill`-Modus](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) nicht festlegen (siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für spezifische Versionen).

> [!NOTE]
> Es gibt keine Möglichkeit, dieses neue Verhalten zu überprüfen.
> Vorerst sollten die meisten Codes weiterhin `fill` setzen, wie im vorherigen Abschnitt gezeigt.

Der untenstehende Code zeigt, wie Sie ein Element mit dem Namen `animatedElement` animieren, auf den Abschluss der Animation mit der [`finished`](/de/docs/Web/API/Animation/finished)-Eigenschaft warten und dann die Stile auf das Element mit `commitStyles()` übernehmen.
Da wir `fill` nicht setzen, müssen wir die Animation anschließend nicht stornieren.

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

`commitStyles()` funktioniert auch, wenn die Animation [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wurde.
Nachdem die Stile des Elements übernommen wurden, können sie wie gewohnt geändert und ersetzt werden.

## Beispiele

### Animation mit und ohne Verwendung von Fill

Dieses Beispiel zeigt, wie Sie `commitStyles()` verwenden können, um die berechneten Stile am Ende der Animation zu speichern, sowohl mit als auch ohne Verwendung von `fill`.
Es bietet auch ein Beispiel dafür, was passiert, wenn weder `commitStyles()` noch `fill` verwendet werden, zum Vergleich.

Das Beispiel zeigt zuerst zwei Schaltflächen mit der Bezeichnung "commitStyles() only" und "commitStyles() with fill".
Beide Schaltflächen animieren sich, wenn Sie sie anklicken, und beide Schaltflächen rufen `commitStyles()` auf, um den Endzustand der Animation beizubehalten.
Der Unterschied besteht darin, dass "commitStyles() only" nicht `fill: "forwards"` angibt, um den Endzustand der Animation zu erhalten.
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
Dieses animiert die Schaltfläche, um sich beim Klicken nach rechts oder links zu bewegen.
Beachten Sie, dass `commitStyles()` unmittelbar nach Beendigung der Animation aufgerufen wird.

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
Dieser animiert ebenfalls die Schaltfläche, sich beim Klicken nach rechts oder links zu bewegen.
Da es ein `fill` definiert, muss die Animation anschließend abgebrochen werden.

Beachten Sie, dass `commitStyles()` unmittelbar nach Beendigung der Animation aufgerufen wird.

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
Dieser animiert ebenfalls die Schaltfläche, sich beim Klicken nach rechts oder links zu bewegen.
Es definiert kein Fill und die Animation wird nicht abgebrochen.

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
Beachten Sie, dass die erste Schaltfläche am Ende der Animation "springt", wenn der aktuelle Browser weiterhin `fill` erfordert, damit die Stile nach Ende der Animation übernommen werden.
Die Schaltfläche "No commitStyles() or fill" springt immer am Ende, da der Endzustand nicht gespeichert ist.

{{EmbedLiveSample("Animation with and without using fill")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation) für andere Methoden und Eigenschaften, die Sie zur Steuerung von Webseitenanimationen verwenden können.
