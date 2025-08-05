---
title: "@starting-style"
slug: Web/CSS/@starting-style
l10n:
  sourceCommit: 7f460077d6f16c939718e9482a8270166f6d9abd
---

Die **`@starting-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um Startwerte für Eigenschaften zu definieren, die auf ein Element gesetzt werden, von denen Sie aus übergehen möchten, wenn das Element seine erste Stilaktualisierung erhält, d.h. wenn ein Element zum ersten Mal auf einer zuvor geladenen Seite angezeigt wird.

## Syntax

Die `@starting-style` At-Regel kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block, der eine oder mehrere Regelmengen enthält, die Startstil-Deklarationen definieren und die Elemente auswählen, auf die sie angewendet werden:

   ```css
   @starting-style {
     /* rulesets */
   }
   ```

2. Verschachtelt innerhalb einer bestehenden Regelmenge, in diesem Fall enthält sie eine oder mehrere Deklarationen, die Startwerte von Eigenschaften für die von dieser Regelmenge bereits ausgewählten Elemente definieren:

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

Um unerwartetes Verhalten zu vermeiden, werden [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) standardmäßig bei der anfänglichen Stilaktualisierung eines Elements oder wenn sein {{CSSxRef("display")}}-Typ von `none` auf einen anderen Wert wechselt, nicht ausgelöst. Um Übergänge beim ersten Stilwechsel zu ermöglichen, werden `@starting-style`-Regeln benötigt. Diese bieten Startstile für Elemente, die keinen vorherigen Zustand haben und definieren die Eigenschaftswerte, von denen aus übergegangen werden soll.

`@starting-style` ist besonders nützlich, wenn Sie Eintritts- und Austrittsübergänge für Elemente erstellen, die in der {{Glossary("top_layer", "Top-Ebene")}} (wie [Popovers](/de/docs/Web/API/Popover_API) und modale {{htmlelement("dialog")}}s) angezeigt werden, Elemente, die von und zu `display: none` wechseln und Elemente, wenn sie zum ersten Mal zum DOM hinzugefügt oder daraus entfernt werden.

> [!NOTE]
> `@starting-style` ist nur in Bezug auf CSS-Übergänge relevant. Bei der Verwendung von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) zur Implementierung solcher Effekte wird `@starting-style` nicht benötigt. Siehe [Using CSS animations](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Es gibt zwei Möglichkeiten, `@starting-style` zu verwenden: als eigenständige Regel oder verschachtelt innerhalb einer Regelmenge.

Betrachten wir ein Szenario, bei dem wir ein [Popover](/de/docs/Web/API/Popover_API) animieren möchten, wenn es angezeigt wird (d.h. wenn es zur Top-Ebene hinzugefügt wird). Die "Originalregel", die die Stile für das geöffnete Popover angibt, könnte in etwa so aussehen (siehe das [Popover-Beispiel](#animating_a_popover) unten):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Um die Startwerte der Eigenschaften des Popovers anzugeben, die mit der ersten Methode animiert werden, fügen Sie in Ihrem CSS einen eigenständigen `@starting-style` Block ein:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> Die `@starting-style` At-Regel und die "Originalregel" haben die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity). Damit Startstile angewendet werden, fügen Sie die `@starting-style` At-Regel _nach_ der "Originalregel" ein. Wenn Sie die `@starting-style` At-Regel vor der "Originalregel" angeben, überschreiben die Originalstile die Startstile.

Um den Startstil des Popovers mit der verschachtelten Methode anzugeben, können Sie den `@starting-style` Block innerhalb der "Originalregel" verschachteln:

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

Es ist wichtig zu verstehen, dass ein Element von seinen `@starting-style` Stilen aus übergehen wird, wenn es zum ersten Mal im DOM gerendert wird oder wenn es von {{cssxref("display", "display: none")}} zu einem sichtbaren Wert wechselt. Wenn es von seinem anfänglichen sichtbaren Zustand zurückwechselt, wird es die `@starting-style` Stile nicht mehr verwenden, da es jetzt im DOM sichtbar ist. Stattdessen wechselt es zurück zu den Stilen, die für den Standardzustand dieses Elements existieren.

Tatsächlich gibt es in diesen Situationen drei zu verwaltende Stilzustände: Startstil-Zustand, übergehender Zustand und Standardzustand. Es ist möglich, dass sich die "Zu"- und "Von"-Übergänge in solchen Fällen unterscheiden. Sie können einen Beweis dafür in unserem [Demonstration of when starting styles are used](#demonstration_of_when_starting_styles_are_used) Beispiel unten sehen.

## Formale Syntax

{{CSSSyntaxRaw(`@starting-style = @starting-style { <rule-list> }`)}}

## Beispiele

### Basic @starting-style usage

Übergang des {{cssxref("background-color")}} eines Elements von transparent zu grün, wenn es zunächst gerendert wird:

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

Übergang der {{cssxref("opacity")}} eines Elements, wenn es seinen {{cssxref("display")}} Wert zu oder von `none` ändert:

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

### Demonstration of when starting styles are used

In diesem Beispiel wird eine Schaltfläche gedrückt, um ein {{htmlelement("div")}} Element zu erstellen, ihm eine `class` von `showing` zu geben und es dem DOM hinzuzufügen.

`showing` erhält eine `@starting-style` von `background-color: red` und einen Stil von `background-color: blue`, zu dem übergegangen wird. Das Standard-`div`-Regelset enthält `background-color: yellow` und ist auch dort, wo der `transition` gesetzt wird.

Wenn das `<div>` erstmals dem DOM hinzugefügt wird, sehen Sie den Hintergrund von rot zu blau übergehen. Nach einem Timeout entfernen wir die `showing` Klasse vom `<div>` über JavaScript. An diesem Punkt wechselt es von blau zurück zu gelb, nicht rot. Dies beweist, dass die Startstile nur verwendet werden, wenn das Element erstmals im DOM gerendert wird. Sobald es erschienen ist, wechselt das Element zurück zum Standardstil, der darauf gesetzt ist.

Nach einem weiteren Timeout entfernen wir dann das `<div>` vollständig aus dem DOM und setzen den Anfangszustand des Beispiels zurück, damit es erneut ausgeführt werden kann.

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

Der Code rendert wie folgt:

{{ EmbedLiveSample("Demonstration of when starting styles are used", "100%", "150") }}

### Animating a popover

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) mithilfe von [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) animiert. Grundlegende Ein- und Ausgangsanimationen werden über die {{CSSxRef("transition")}}-Eigenschaft bereitgestellt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut deklariert ist, und ein {{htmlelement("button")}} Element, das als Anzeige-Steuerung des Popovers mit dem [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut gekennzeichnet ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

In diesem Beispiel möchten wir zwei Eigenschaften animieren, {{cssxref("opacity")}} und {{cssxref("transform")}} (speziell eine horizontal skalierende Transformation), um das Popover ein- und auszublenden sowie horizontal zu wachsen und zu schrumpfen.

```css
html {
  font-family: Arial, Helvetica, sans-serif;
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

Um dies zu erreichen, haben wir einen Startzustand für diese Eigenschaften im versteckten Standardzustand des Popover-Elements gesetzt (ausgewählt über `[popover]`) und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die {{cssxref(":popover-open")}} Pseudoklasse).

Wir setzen dann eine {{cssxref("transition")}}-Eigenschaft, um zwischen den beiden Zuständen zu animieren. Ein Startzustand für die Animation ist innerhalb einer `@starting-style` At-Regel enthalten, um die Eintrittsanimation zu aktivieren.

Da das animierte Element bei Anzeige in die {{Glossary("top_layer", "Top-Ebene")}} gefördert und bei Ausblendung aus der Top-Ebene entfernt wird (mit {{cssxref("display", "display: none")}}), sind einige zusätzliche Schritte erforderlich, um sicherzustellen, dass die Animation in beide Richtungen funktioniert:

- `display` wird zur Liste der Übergangselemente hinzugefügt, um sicherzustellen, dass das animierte Element während sowohl der Ein- als auch der Ausgangsanimation sichtbar ist (auf `display: block` oder einen anderen sichtbaren `display` Wert gesetzt). Ohne dies wäre die Ausgangsanimation nicht sichtbar; im Effekt würde das Popover einfach verschwinden. Beachten Sie, dass auch der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} im Shorthand gesetzt ist, um die Animation zu aktivieren.
- {{cssxref("overlay")}} wird zur Liste der Übergangselemente hinzugefügt, um sicherzustellen, dass die Entfernung des Elements aus der Top-Ebene aufgeschoben wird, bis die Animation endet. Dies macht keinen großen Unterschied für Animationen wie diese, aber in komplexeren Fällen kann das Nicht-Durchführen dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht reibungslos oder effektiv ist. Auch hier ist `transition-behavior: allow-discrete` in diesem Fall erforderlich, damit die Animation auftritt.

> [!NOTE]
> Wir haben auch einen Übergang auf dem {{cssxref("::backdrop")}} enthalten, der hinter dem Popover erscheint, wenn es geöffnet wird, um eine schöne Abdunkelungsanimation bereitzustellen. `[popover]:popover-open::backdrop` wird verwendet, um das Backdrop auszuwählen, wenn das Popover offen ist.

#### Ergebnis

Der Code rendert wie folgt:

{{ EmbedLiveSample("Animating a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover von seinen `@starting-style` Stilen zu seinen `[popover]:popover-open` Stilen jedes Mal, wenn der Eintrittsübergang erfolgt. Wenn das Popover geschlossen wird, geht es von seinem `[popover]:popover-open` Zustand zurück zum Standard-`[popover]` Zustand.

> [!NOTE]
> Sie finden ein Beispiel, das zeigt, wie ein {{htmlelement("dialog")}} Element und sein Backdrop beim Ein- und Ausblenden auf der `<dialog>` Referenzseite übergeht — siehe [Transitioning dialog elements](/de/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements).

### Übergang von Elementen bei DOM-Hinzufügung und -Entfernung

Dieses Beispiel enthält eine Schaltfläche, die beim Drücken neue Elemente zu einem {{htmlelement("section")}} Container hinzufügt. Jedes Element enthält wiederum eine verschachtelte Schaltfläche, die beim Drücken das Element entfernt. Dieses Beispiel demonstriert, wie Übergänge verwendet werden, um Elemente zu animieren, wenn sie dem DOM hinzugefügt oder daraus entfernt werden.

#### HTML

```html
<button>Create new column</button>
<section></section>
```

#### JavaScript

JavaScript ermöglicht die Hinzufügung und Entfernung von Elementen:

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

Wenn die Schaltfläche "Create new column" geklickt wird, wird die Funktion `createColumn()` aufgerufen. Diese erstellt ein {{htmlelement("div")}} Element mit einer zufällig generierten Hintergrundfarbe und einem {{htmlelement("button")}} Element, um das `<div>` zu schließen. Es fügt dann das `<button>` dem `<div>` und das `<div>` dem `<section>` Container hinzu.

Wir fügen dann einen Ereignis-Listener zur Schließen-Schaltfläche über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Das Klicken auf die Schließen-Schaltfläche bewirkt zwei Dinge:

- Fügt die `fade-out` Klasse dem `<div>` hinzu. Das Hinzufügen der Klasse löst die auf dieser Klasse gesetzte Ausgangsanimation aus.
- Entfernt das `<div>` nach einer Verzögerung von 1000 ms. Das [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verzögert die Entfernung des `<div>` vom DOM (über [`Element.remove()`](/de/docs/Web/API/Element/remove)) bis nach dem Ende der Animation.

#### CSS

Wir fügen eine {{cssxref("transition")}} hinzu, die die {{cssxref("opacity")}} und {{cssxref("scale")}} jeder Spalte animiert, wenn sie hinzugefügt und entfernt werden:

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

Um die {{cssxref("opacity")}} und {{cssxref("scale")}} jedes `<div>` zu animieren, während es dem DOM hinzugefügt und dann die Animation beim Entfernen aus dem DOM rückgängig gemacht wird, wir:

- Geben den Endzustand der Eigenschaften an, die wir auf der `div { ... }` Regel übergehen möchten.
- Geben den Startzustand an, von dem aus die Eigenschaften innerhalb eines `@starting-style` Blocks übergehen sollen.
- Geben die Ausgangsanimation innerhalb der `.fade-out` Regel an — dies ist die Klasse, die das JavaScript den `<div>` Elementen zuweist, wenn ihre Schließen-Schaltflächen gedrückt werden. Neben dem Setzen der Endzustände von `opacity` und `scale` setzen wir auch [`display: none`](/de/docs/Web/CSS/display) auf die `<div>`s — wir möchten, dass sie sofort nicht mehr verfügbar sind, wenn sie aus der Benutzeroberfläche entfernt werden.
- Geben die {{cssxref("transition")}} Liste innerhalb der `div { ... }` Regel an, um `opacity`, `scale` und `display` zu animieren. Beachten Sie, dass für `display` der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} im Shorthand ebenfalls gesetzt ist, damit es animiert wird.

#### Ergebnis

Das Endergebnis sieht wie folgt aus:

{{ EmbedLiveSample("Transitioning elements on DOM addition and removal", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul
- {{cssxref("overlay")}}
- {{cssxref("transition-behavior")}}
- [`CSSStartingStyleRule`](/de/docs/Web/API/CSSStartingStyleRule)
- [Vier neue CSS-Funktionen für geschmeidige Ein- und Ausgangsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
