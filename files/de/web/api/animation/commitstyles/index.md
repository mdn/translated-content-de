---
title: "Animation: Methode commitStyles()"
short-title: commitStyles()
slug: Web/API/Animation/commitStyles
l10n:
  sourceCommit: 870fe25a3e6ed1a44222c52dd8a992b731c1a383
---

{{APIRef("Web Animations")}}

Die Methode `commitStyles()` der Schnittstelle [`Animation`](/de/docs/Web/API/Animation) der [Web Animations API](/de/docs/Web/API/Web_Animations_API) schreibt die [berechneten Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) der aktuellen Stile der Animation in das Attribut [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) ihres Zielelements.

Sie wird hauptsächlich verwendet, um die Stile für den Endzustand einer Animation in das Zielelement zu schreiben, sodass die Gestaltung nach dem Ende der Animation erhalten bleibt.

## Syntax

```js-nolint
commitStyles()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die Methode `commitStyles()` wird hauptsächlich verwendet, um die [berechneten Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) für den Endzustand einer Animation in das Attribut [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) des Zielelements zu schreiben, sodass die Gestaltung nach dem Ende der Animation erhalten bleibt.
Dies kann erfolgen, wenn die Animation abgeschlossen ist (das heißt, wenn die Eigenschaft [`finished`](/de/docs/Web/API/Animation/finished) des Objekts [`Animation`](/de/docs/Web/API/Animation) aufgelöst wurde).

### `commitStyles()` zusammen mit dem fill-Modus

In älteren Browsern müssen Sie den [`fill`-Modus](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) angeben, um die Stile _nachdem_ die Animation abgeschlossen ist im Element festschreiben zu können.

Der folgende Code zeigt, wie Sie ein Element namens `animatedElement` animieren können, indem Sie [`fill: "forwards"`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) festlegen, damit die Animationsstile nach ihrem Abschluss erhalten bleiben.
Sobald die Animation abgeschlossen ist, schreiben wir die Stile mit `commitStyles()` im Element fest.

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

Da `fill` die Animation unbegrenzt bestehen lässt, brechen wir die Animation ab, nachdem wir die Stile festgeschrieben haben.

Beachten Sie, dass derselbe Effekt allein mit `fill` erreicht werden könnte, jedoch wird [von der Verwendung unbegrenzt auffüllender Animationen abgeraten](https://drafts.csswg.org/web-animations-1/#fill-behavior).
Animationen [haben Vorrang vor allen statischen Stilen](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order), sodass eine unbegrenzt auffüllende Animation verhindern kann, dass das Zielelement jemals normal gestaltet wird.

> [!NOTE]
> Sie können das explizite Speichern des Endzustands auch vermeiden, indem Sie ihn als anfängliche Stile des Elements festlegen und zu den finalen Stilen animieren.

### `commitStyles()` ohne Festlegen des fill-Modus

In neueren Browsern müssen Sie den [`fill`-Modus](/de/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) nicht festlegen (siehe die Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität) für bestimmte Versionen).

> [!NOTE]
> Es gibt keine Möglichkeit, dieses neue Verhalten per Feature-Erkennung zu prüfen.
> Derzeit sollte der meiste Code weiterhin `fill` festlegen, wie im vorherigen Abschnitt gezeigt.

Der folgende Code zeigt, wie Sie ein Element namens `animatedElement` animieren, mithilfe der Eigenschaft [`finished`](/de/docs/Web/API/Animation/finished) auf den Abschluss der Animation warten und anschließend die Stile mit `commitStyles()` im Element festschreiben können.
Da wir `fill` nicht festlegen, müssen wir die Animation danach nicht abbrechen.

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

`commitStyles()` funktioniert auch dann, wenn die Animation [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wurde.
Nachdem die Stile des Elements festgeschrieben wurden, können sie wie gewohnt geändert und ersetzt werden.

## Beispiele

### Animation mit und ohne Verwendung von fill

Dieses Beispiel zeigt, wie Sie `commitStyles()` verwenden können, um die berechneten Stile am Ende der Animation zu speichern, sowohl mit als auch ohne Verwendung von `fill`.
Zum Vergleich enthält es außerdem ein Beispiel dafür, was geschieht, wenn weder `commitStyles()` noch `fill` verwendet werden.

Das Beispiel zeigt zunächst zwei Schaltflächen mit den Beschriftungen „commitStyles() only“ und „commitStyles() with fill“ an.
Beide Schaltflächen werden animiert, wenn Sie darauf klicken, und beide rufen `commitStyles()` auf, um den Endzustand der Animation beizubehalten.
Der Unterschied besteht darin, dass „commitStyles() only“ nicht `fill: "forwards"` angibt, um den Endzustand der Animation beizubehalten.
In Browsern, die nicht der aktuellen Spezifikation entsprechen, wird der Endzustand möglicherweise nicht erfasst.

Der Code zeigt anschließend zum Vergleich eine Schaltfläche „No commitStyles() or fill“ sowie eine Schaltfläche „Reset“ an.

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

Dieser Code definiert einen Click-Handler für die Schaltfläche „commitStyles() only“.
Dieser animiert die Schaltfläche bei einem Klick so, dass sie nach rechts oder links bewegt wird.
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

Dieser Code definiert einen Click-Handler für die Schaltfläche „commitStyles() with fill“.
Auch dieser animiert die Schaltfläche bei einem Klick so, dass sie nach rechts oder links bewegt wird.
Da er ein `fill` definiert, muss die Animation anschließend abgebrochen werden.

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

Dieser Code definiert einen Click-Handler für die Schaltfläche „No commitStyles() or fill“.
Auch dieser animiert die Schaltfläche bei einem Klick so, dass sie nach rechts oder links bewegt wird.
Er definiert kein fill, und wir brechen die Animation nicht ab.

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
Beachten Sie, dass die erste Schaltfläche am Ende der Animation „springt“, wenn der aktuelle Browser weiterhin `fill` benötigt, damit Stile nach dem Ende der Animation festgeschrieben werden.
Die Schaltfläche „No commitStyles() or fill“ springt am Ende immer, da der Endzustand nicht gespeichert wird.

{{EmbedLiveSample("Animation with and without using fill")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation) für weitere Methoden und Eigenschaften, die Sie zur Steuerung von Webseitenanimationen verwenden können.
