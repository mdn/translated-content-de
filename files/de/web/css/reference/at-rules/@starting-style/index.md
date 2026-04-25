---
title: "`@starting-style` CSS at-rule"
short-title: "@starting-style"
slug: Web/CSS/Reference/At-rules/@starting-style
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

Die **`@starting-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird verwendet, um Startwerte für Eigenschaften festzulegen, die auf ein Element angewendet werden sollen, von dem Sie aus übergangsweise Änderungen wünschen, wenn das Element seine erste Stilaktualisierung erhält, d.h. wenn ein Element auf einer zuvor geladenen Seite erstmalig angezeigt wird.

## Syntax

Die `@starting-style` At-Regel kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block, in dem Fall enthält sie eine oder mehrere Regelsets, die Startstil-Deklarationen definieren und die Elemente auswählen, auf die sie angewendet werden:

   ```css
   @starting-style {
     /* rulesets */
   }
   ```

2. Eingerückt innerhalb eines vorhandenen Regelsets, in dem Fall enthält sie eine oder mehrere Deklarationen, die Startwerte für die bereits vom Regelset ausgewählten Elemente definieren:

   ```css
   selector {
     /* existing ruleset */
     /* ... */

     @starting-style {
       /* declarations */
     }
   }
   ```

## Beschreibung

Um unerwartetes Verhalten zu vermeiden, werden [CSS-Transitionen](/de/docs/Web/CSS/Guides/Transitions) standardmäßig nicht bei der anfänglichen Stilaktualisierung eines Elements oder wenn sich der {{CSSxRef("display")}} Typ von `none` zu einem anderen Wert ändert, ausgelöst. Um Transitionen beim ersten Stilwechsel zu aktivieren, sind `@starting-style` Regeln erforderlich. Sie bieten Startstile für Elemente, die keinen vorherigen Zustand haben, und definieren die Eigenschaftswerte, von denen die Transition ausgeht.

`@starting-style` ist besonders nützlich, wenn Eintritts- und Austritts-Transitionen für Elemente erstellt werden, die in der {{Glossary("top_layer", "Top-Ebene")}} angezeigt werden (wie [Popovers](/de/docs/Web/API/Popover_API) und modale {{htmlelement("dialog")}}s), Elemente, die von und zu `display: none` wechseln, und Elemente, die erstmals zum oder aus dem DOM hinzugefügt bzw. entfernt werden.

> [!NOTE]
> `@starting-style` ist nur für CSS-Transitionen relevant. Bei der Verwendung von [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) zur Implementierung solcher Effekte ist `@starting-style` nicht erforderlich. Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) für ein Beispiel.

Es gibt zwei Möglichkeiten, `@starting-style` zu verwenden: als eigenständige Regel oder eingebettet in ein Regelset.

Betrachten wir ein Szenario, in dem wir ein [Popover](/de/docs/Web/API/Popover_API) animieren möchten, wenn es angezeigt wird (also wenn es zur Top-Ebene hinzugefügt wird). Die "Originalregel", die die Stile für das geöffnete Popover festlegt, könnte in etwa wie folgt aussehen (siehe das untenstehende [Popover-Beispiel](#ein_popover_animieren)):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Um die Startwerte der Eigenschaften des Popovers, die animiert werden sollen, mit der ersten Methode festzulegen, fügen Sie einen eigenständigen `@starting-style` Block in Ihr CSS ein:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> Die `@starting-style` At-Regel und die "Originalregel" haben die gleiche [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity). Um sicherzustellen, dass Startstile angewendet werden, platzieren Sie die `@starting-style` At-Regel _nach_ der "Originalregel". Wenn Sie die `@starting-style` At-Regel vor der "Originalregel" angeben, überschreiben die Originalstile die Startstile.

Um den Startstil für das Popover mit der eingebetteten Methode festzulegen, können Sie den `@starting-style` Block innerhalb der "Originalregel" verschachteln:

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);

  @starting-style {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

### Wann genau werden Startstile verwendet?

Es ist wichtig zu verstehen, dass ein Element von seinen `@starting-style` Stilen übergeht, wenn es erstmals im DOM gerendert wird oder wenn es von {{cssxref("display", "display: none")}} zu einem sichtbaren Wert wechselt. Wenn es von seinem anfänglichen sichtbaren Zustand zurückwechselt, verwendet es die `@starting-style` Stile nicht mehr, da es jetzt im DOM sichtbar ist. Stattdessen wechselt es zurück zu welchen Stilen auch immer für den Standardzustand dieses Elements existieren.

Im Effekt gibt es drei Stilzustände, die in diesen Situationen verwaltet werden müssen — Startstilzustand, Übergangszustand und Standardzustand. Es ist möglich, dass die "zu" und "von" Transitionen in solchen Fällen unterschiedlich sind. Ein Beweis dafür ist in unserem [Beispiel, wann Startstile verwendet werden](#demonstration,_wann_startstile_verwendet_werden) weiter unten zu sehen.

## Formale Syntax

{{CSSSyntaxRaw(`@starting-style = @starting-style { <rule-list> }`)}}

## Beispiele

### Grundlegende Verwendung von @starting-style

Transitionieren Sie die {{cssxref("background-color")}} eines Elements von transparent zu grün, wenn es erstmals gerendert wird:

```css
#target {
  transition: background-color 1.5s;
  background-color: green;
}

@starting-style {
  #target {
    background-color: transparent;
  }
}
```

Transitionieren Sie die {{cssxref("opacity")}} eines Elements, wenn es seinen {{cssxref("display")}} Wert auf oder von `none` verändert:

```css
#target {
  transition-property: opacity, display;
  transition-duration: 0.5s;
  display: block;
  opacity: 1;
  @starting-style {
    opacity: 0;
  }
}

#target.hidden {
  display: none;
  opacity: 0;
}
```

### Demonstration, wann Startstile verwendet werden

In diesem Beispiel wird ein Button gedrückt, um ein {{htmlelement("div")}} Element zu erstellen, ihm eine `class` von `showing` zu geben und es zum DOM hinzuzufügen.

`showing` erhält ein `@starting-style` von `background-color: red` und einen Stil von `background-color: blue`, zu dem es übergeht. Das Standard-`div` Regelset enthält `background-color: yellow`, und hier wird auch die `transition` gesetzt.

Wenn das `<div>` erstmals zum DOM hinzugefügt wird, wird der Hintergrund von rot zu blau übergehen. Nach einem Timeout entfernen wir die `showing` Klasse mittels JavaScript vom `<div>`. An diesem Punkt wechselt es von blau zurück zu gelb, nicht rot. Dies beweist, dass die Startstile nur verwendet werden, wenn das Element erstmals im DOM gerendert wird. Sobald es erschienen ist, wechselt das Element zurück zu dem Standardstil, der darauf gesetzt ist.

Nach einem weiteren Timeout entfernen wir das `<div>` vollständig aus dem DOM, was den Anfangszustand des Beispiels zurücksetzt, damit es erneut ausgeführt werden kann.

#### HTML

```html
<button>Display <code>&lt;div&gt;</code></button>
```

#### CSS

```css hidden
div {
  width: 200px;
  height: 100px;
  border: 1px solid black;
  margin-top: 10px;
}

div::after {
  content: "class: " attr(class);
  position: relative;
  top: 3px;
  left: 3px;
}
```

```css
div {
  background-color: yellow;
  transition: background-color 3s;
}

div.showing {
  background-color: skyblue;
}

@starting-style {
  div.showing {
    background-color: red;
  }
}
```

#### JavaScript

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  btn.disabled = true;
  const divElem = document.createElement("div");
  divElem.classList.add("showing");
  document.body.append(divElem);

  setTimeout(() => {
    divElem.classList.remove("showing");

    setTimeout(() => {
      divElem.remove();
      btn.disabled = false;
    }, 3000);
  }, 3000);
});
```

#### Ergebnis

Der Code rendert sich wie folgt:

{{ EmbedLiveSample("Demonstration of when starting styles are used", "100%", "150") }}

### Ein Popover animieren

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) mithilfe von [CSS-Transitionen](/de/docs/Web/CSS/Guides/Transitions) animiert. Grundlegende Eintritts- und Austrittsanimationen werden unter Verwendung der {{CSSxRef("transition")}} Eigenschaft bereitgestellt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} Element, das als Popover deklariert ist, unter Verwendung des [Popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attributs und ein {{htmlelement("button")}} Element, das als Steuerung zur Anzeige des Popovers bestimmt ist, unter Verwendung seines [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attributs.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

In diesem Beispiel wollen wir zwei Eigenschaften animieren, {{cssxref("opacity")}} und {{cssxref("transform")}} (genauer gesagt, eine horizontal skalierende Transform), um das Popover ein- und ausblenden sowie horizontal wachsen und schrumpfen zu lassen.

```css
html {
  font-family: "Helvetica", "Arial", sans-serif;
}

[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;

  /* Final state of the exit animation */
  opacity: 0;
  transform: scaleX(0);

  transition:
    opacity 0.7s,
    transform 0.7s,
    overlay 0.7s allow-discrete,
    display 0.7s allow-discrete;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

/* Include after the [popover]:popover-open rule */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}

/* Transition for the popover's backdrop */
[popover]::backdrop {
  background-color: transparent;
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

[popover]:popover-open::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* Nesting (&) is not supported for pseudo-elements
so specify a standalone starting-style block. */
@starting-style {
  [popover]:popover-open::backdrop {
    background-color: transparent;
  }
}
```

Um dies zu erreichen, haben wir einen Startzustand für diese Eigenschaften im standardmäßig ausgeblendeten Zustand des Popover-Elements (ausgewählt über `[popover]`) festgelegt und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die {{cssxref(":popover-open")}} Pseudoklasse).

Wir setzen dann eine {{cssxref("transition")}} Eigenschaft, um zwischen den beiden Zuständen zu animieren. Ein Startzustand für die Animation ist innerhalb einer `@starting-style` At-Regel enthalten, um die Eintrittsanimation zu aktivieren.

Da das animierte Element auf die {{Glossary("top_layer", "Top-Ebene")}} befördert wird, wenn es angezeigt wird, und aus der Top-Ebene entfernt wird, wenn es ausgeblendet wird (mit {{cssxref("display", "display: none")}}), sind einige zusätzliche Schritte erforderlich, um sicherzustellen, dass die Animation in beide Richtungen funktioniert:

- `display` wird zur Liste der elementübergreifenden Transitionen hinzugefügt, um sicherzustellen, dass das animierte Element während beider, Ein- und Austrittsanimationen sichtbar ist (auf `display: block` oder einen anderen sichtbaren `display` Wert gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; effektiverweise würde das Popover einfach verschwinden. Beachten Sie, dass der {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} Wert auch im Shorthand gesetzt ist, um die Animation zu aktivieren.
- {{cssxref("overlay")}} wird zur Liste der elementübergreifenden Transitionen hinzugefügt, um sicherzustellen, dass das Entfernen des Elements von der Top-Ebene bis zum Ende der Animation verzögert wird. Dies macht keinen großen Unterschied bei Animationen wie dieser, aber in komplexeren Fällen kann das Nichttun dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht glatt oder effektiv ist. Auch hier ist `transition-behavior: allow-discrete` in diesem Fall erforderlich, damit die Animation erfolgt.

> [!NOTE]
> Wir haben auch eine Transition auf das {{cssxref("::backdrop")}} eingefügt, das hinter dem Popover erscheint, wenn es geöffnet wird, um eine schöne Verdunkelungsanimation zu bieten. `[popover]:popover-open::backdrop` wird verwendet, um das Backdrop auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code rendert sich wie folgt:

{{ EmbedLiveSample("Animating a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover von seinen `@starting-style` Stilen zu seinen `[popover]:popover-open` Stilen jedes Mal, wenn die Eintrittstransition erfolgt. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open` Zustand zurück zum Standard `[popover]` Zustand.

> [!NOTE]
> Auf der `<dialog>` Referenzseite finden Sie ein Beispiel, das zeigt, wie man ein {{htmlelement("dialog")}} Element und dessen Hintergrund beim Ein- und Ausblenden animiert — siehe [Transitioning dialog elements](/de/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements).

### Übergänge von Elementen bei DOM-Hinzufügung und -Entfernung

Dieses Beispiel enthält einen Button, der beim Drücken neue Elemente zu einem {{htmlelement("section")}} Container hinzufügt. Jedes Element enthält wiederum einen verschachtelten Button, der beim Drücken das Element entfernt. Dieses Beispiel zeigt, wie man Transitionen verwendet, um Elemente zu animieren, wenn sie zum oder aus dem DOM hinzugefügt bzw. entfernt werden.

#### HTML

```html
<button>Create new column</button>
<section></section>
```

#### JavaScript

JavaScript ermöglicht das Hinzufügen und Entfernen von Elementen:

```js
const btn = document.querySelector("button");
const sectionElem = document.querySelector("section");

btn.addEventListener("click", createColumn);

function randomBackground() {
  function randomNum() {
    return Math.floor(Math.random() * 255);
  }
  const baseColor = `${randomNum()} ${randomNum()} ${randomNum()}`;

  return `linear-gradient(to right, rgb(${baseColor} / 0), rgb(${baseColor} / 0.5))`;
}

function createColumn() {
  const divElem = document.createElement("div");
  divElem.style.background = randomBackground();

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "✖";
  closeBtn.setAttribute("aria-label", "close");
  divElem.append(closeBtn);
  sectionElem.append(divElem);

  closeBtn.addEventListener("click", () => {
    divElem.classList.add("fade-out");

    setTimeout(() => {
      divElem.remove();
    }, 1000);
  });
}
```

Wenn der "Create new column" Button geklickt wird, wird die `createColumn()` Funktion aufgerufen. Diese erstellt ein {{htmlelement("div")}} Element mit einer zufällig generierten Hintergrundfarbe und einem {{htmlelement("button")}} Element, um den `<div>` zu schließen. Es fügt dann den `<button>` zu dem `<div>` und dem `<div>` zum `<section>` Container hinzu.

Wir fügen dann einen Event-Listener zum Schließen-Button über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Beim Klick auf den Schließen-Button werden zwei Dinge gemacht:

- Die `fade-out` Klasse wird dem `<div>` hinzugefügt. Das Hinzufügen der Klasse löst die Austrittsanimation aus, die auf dieser Klasse gesetzt ist.
- Das `<div>` wird nach einer Verzögerung von 1000ms entfernt. Das [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verzögert die Entfernung des `<div>` aus dem DOM (über [`Element.remove()`](/de/docs/Web/API/Element/remove)) bis nach dem Ende der Animation.

#### CSS

Wir fügen eine {{cssxref("transition")}} ein, die die {{cssxref("opacity")}} und {{cssxref("scale")}} jeder Spalte animiert, wenn sie hinzugefügt und entfernt werden:

```css hidden
html * {
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 10px;
}

body > button {
  margin: 10px 10px 0 10px;
}

section {
  display: flex;
  flex: 1;
  gap: 10px;
  margin: 10px;
}
```

```css
div {
  flex: 1;
  border: 1px solid gray;
  position: relative;
  opacity: 1;
  scale: 1 1;

  transition:
    opacity 0.7s,
    scale 0.7s,
    display 0.7s allow-discrete,
    all 0.7s allow-discrete;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

/* Include after the `div` rule */
@starting-style {
  div {
    opacity: 0;
    scale: 1 0;
  }
}

.fade-out {
  opacity: 0;
  display: none;
  scale: 1 0;
}

div > button {
  font-size: 1.6rem;
  background: none;
  border: 0;
  text-shadow: 2px 1px 1px white;
  border-radius: 15px;
  position: absolute;
  top: 1px;
  right: 1px;
  cursor: pointer;
}
```

Um die {{cssxref("opacity")}} und {{cssxref("scale")}} jedes `<div>` zu animieren, wenn es zum DOM hinzugefügt wird, und dann die Animation umzukehren, wenn es aus dem DOM entfernt wird, gehen wir folgendermaßen vor:

- Wir geben den Endzustand der Eigenschaften an, die wir auf der `div { ... }` Regel übergehen möchten.
- Wir geben den Startzustand an, von dem aus wir die Eigenschaften innerhalb eines `@starting-style` Blocks übergehen möchten.
- Wir geben die Austrittsanimation innerhalb der `.fade-out` Regel an — dies ist die Klasse, die das JavaScript den `<div>` Elementen zuweist, wenn ihre Schaltflächen gedrückt werden. Neben dem Setzen der `opacity` und `scale` Endzustände setzen wir auch [`display: none`](/de/docs/Web/CSS/Reference/Properties/display) auf die `<div>`s — wir möchten, dass sie sofort nicht verfügbar werden, wenn sie aus der Benutzeroberfläche entfernt werden.
- In der `div { ... }` Regel geben wir die {{cssxref("transition")}} Liste an, um `opacity`, `scale`, und `display` zu animieren. Beachten Sie, dass für `display` auch der {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} Wert im Shorthand gesetzt ist, damit es animiert wird.

#### Ergebnis

Das Endergebnis sieht wie folgt aus:

{{ EmbedLiveSample("Transitioning elements on DOM addition and removal", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Transitionen](/de/docs/Web/CSS/Guides/Transitions) Modul
- {{cssxref("overlay")}}
- {{cssxref("transition-behavior")}}
- [`CSSStartingStyleRule`](/de/docs/Web/API/CSSStartingStyleRule)
- [Vier neue CSS-Funktionen für reibungslose Eintritts- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
