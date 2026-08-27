---
title: "Animation: commitStyles() Methode"
short-title: commitStyles()
slug: Web/API/Animation/commitStyles
l10n:
  sourceCommit: b3cd597b58940518a7712487ce94efc0881cb549
---

{{APIRef("Web Animations")}}

Die `commitStyles()` Methode des [`Animation`](/de/docs/Web/API/Animation)-Interfaces der [Web Animations API](/de/docs/Web/API/Web_Animations_API) schreibt die [berechneten Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der aktuellen Stile der Animation in das [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut des Zielelements.

Sie wird hauptsächlich verwendet, um die Stile für den Endzustand einer Animation in das Zielelement zu schreiben, sodass die Formatierung auch nach dem Ende der Animation bestehen bleibt.

## Syntax

```js-nolint
commitStyles()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beschreibung

Die `commitStyles()` Methode wird hauptsächlich verwendet, um die [berechneten Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) für den Endzustand einer Animation in das [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut des Zielelements zu schreiben, sodass die Formatierung auch nach dem Ende der Animation bestehen bleibt.
Dies kann erfolgen, wenn die Animation beendet ist (d.h. die [`finished`](/de/docs/Web/API/Animation/finished)-Eigenschaft des [`Animation`](/de/docs/Web/API/Animation)-Objekts aufgelöst wurde).

### `commitStyles()` zusammen mit der Fill-Einstellung

In älteren Browsern müssen Sie den [`fill` Modus](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) angeben, um die Stile _nachdem_ die Animation beendet ist, auf das Element anwenden zu können.

Der unten stehende Code zeigt, wie Sie ein Element namens `animatedElement` animieren können, wobei [`fill: "forwards"`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) gesetzt wird, um die Animationsstile nach dem Ende beizubehalten.
Sobald die Animation beendet ist, übertragen wir die Stile auf das Element mit `commitStyles()`.

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

Da `fill` die Animation unbegrenzt beibehält, brechen wir die Animation ab, nachdem wir die Stile übertragen haben.

Beachten Sie, dass derselbe Effekt auch alleine mit `fill` erzielt werden könnte, jedoch wird [die Verwendung von unbestimmt füllenden Animationen nicht empfohlen](https://drafts.csswg.org/web-animations-1/#fill-behavior).
Animationen [haben Vorrang vor allen statischen Stilen](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order), sodass eine unbestimmt füllende Animation verhindern kann, dass das Zielelement jemals normal gestylt wird.

> [!NOTE]
> Sie könnten auch vermeiden, den Endzustand explizit zu speichern, indem Sie diese als anfängliche Stile des Elements festlegen und zu den Endstilen animieren.

### `commitStyles()` ohne Setzen des Fill-Modus

In neueren Browsern müssen Sie den [`fill` Modus](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) nicht festlegen (siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für spezifische Versionen).

> [!NOTE]
> Es gibt keine Möglichkeit, dieses neue Verhalten zu überprüfen.
> Für den Moment sollte der meiste Code weiterhin `fill` setzen, wie im vorherigen Abschnitt gezeigt.

Der unten stehende Code zeigt, wie Sie ein Element namens `animatedElement` animieren können, auf die Beendigung der Animation mit der [`finished`](/de/docs/Web/API/Animation/finished)-Eigenschaft warten und dann die Stile mit `commitStyles()` auf das Element übertragen.
Da wir `fill` nicht setzen, brauchen wir die Animation danach nicht abzubrechen.

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

`commitStyles()` funktioniert auch, wenn die Animation [automatisch entfernt wurde](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations).
Nachdem die Stile des Elements übertragen wurden, können sie wie gewohnt verändert und ersetzt werden.

## Beispiele

### Animation mit und ohne Verwendung von Fill

Dieses Beispiel zeigt, wie Sie `commitStyles()` verwenden können, um die berechneten Stile am Ende der Animation zu speichern, sowohl mit als auch ohne die Verwendung von `fill`.
Es zeigt außerdem, was passiert, wenn weder `commitStyles()` noch `fill` verwendet werden, zum Vergleich.

Das Beispiel zeigt zunächst zwei Schaltflächen mit der Bezeichnung "commitStyles() only" und "commitStyles() with fill".
Beide Schaltflächen animieren, wenn Sie darauf klicken, und beide Schaltflächen rufen `commitStyles()` auf, um den Endzustand der Animation beizubehalten.
Der Unterschied ist, dass "commitStyles() only" nicht `fill: "forwards"` angibt, um den Endzustand der Animation zu beibehalten.
In Browsern, die nicht der aktuellen Spezifikation entsprechen, kann der Endzustand möglicherweise nicht erfasst werden.

Der Code zeigt dann eine Schaltfläche "No commitStyles() or fill" für den Vergleich und eine "Reset"-Schaltfläche.

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
Dies animiert die Schaltfläche, sich nach rechts oder links zu bewegen, wenn sie angeklickt wird.
Beachten Sie, dass `commitStyles()` direkt nach dem Ende der Animation aufgerufen wird.

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
Dies animiert ebenfalls die Schaltfläche, sich nach rechts oder links zu bewegen, wenn sie angeklickt wird.
Da es `fill` definiert, muss die Animation danach abgebrochen werden.

Beachten Sie, dass `commitStyles()` direkt nach dem Ende der Animation aufgerufen wird.

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
Dies animiert ebenfalls die Schaltfläche, sich nach rechts oder links zu bewegen, wenn sie angeklickt wird.
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

Klicken Sie auf die Schaltflächen, um sie zu animieren.
Beachten Sie, dass die erste Schaltfläche am Ende der Animation "springen" wird, wenn der aktuelle Browser noch `fill` benötigt, um Stile nach dem Ende der Animation zu übertragen.
Die Schaltfläche "No commitStyles() or fill" springt immer am Ende, da der Endzustand nicht gespeichert wird.

{{EmbedLiveSample("Animation with and without using fill")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation) für andere Methoden und Eigenschaften, die Sie zur Steuerung der Web-Seiten-Animation verwenden können.
