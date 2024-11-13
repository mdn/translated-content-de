---
title: "@starting-style"
slug: Web/CSS/@starting-style
l10n:
  sourceCommit: 0326d9301650304ef67a56e88b542b160093042e
---

{{CSSRef}}

Die **`@starting-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um Anfangswerte für Eigenschaften eines Elements zu definieren, von denen Sie möchten, dass sie beim ersten Stil-Update des Elements übergehen, d.h. wenn ein Element auf einer zuvor geladenen Seite erstmals angezeigt wird.

## Syntax

Die `@starting-style` At-Regel kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block, der einen oder mehrere Regelsätze enthält, die Anfangsdeklarationen definieren und die Elemente auswählen, auf die sie angewendet werden:

   ```css
   @starting-style {
     rulesets
   }
   ```

2. Eingebettet in einen bestehenden Regelsatz, wobei er eine oder mehrere Deklarationen enthält, die Anfangswerte der Eigenschaften für die bereits durch diesen Regelsatz ausgewählten Elemente definieren:

   ```css
   selector { /* existing ruleset */
     /* ... */

     @starting-style {
       declarations
     }
   }
   ```

## Beschreibung

Um unerwartetes Verhalten zu vermeiden, werden [CSS-Transitionen](/de/docs/Web/CSS/CSS_transitions) standardmäßig nicht beim ersten Stil-Update eines Elements ausgelöst oder wenn sich der {{CSSxRef("display")}}-Wert von `none` in einen anderen Wert ändert. Um erste Stil-Transitionen zu ermöglichen, sind `@starting-style` Regeln erforderlich. Sie bieten Anfangsstile für Elemente, die keinen vorherigen Zustand haben und definieren die Eigenschaftswerte, von denen aus übergegangen werden soll.

`@starting-style` ist besonders nützlich beim Erstellen von Ein- und Austritts-Transitionen für Elemente, die in der {{Glossary("top_layer", "obersten Schicht")}} angezeigt werden (wie [Popovers](/de/docs/Web/API/Popover_API) und modale {{htmlelement("dialog")}}e), Elemente, die von und zu `display: none` wechseln und Elemente, die zum ersten Mal in den DOM hinzugefügt oder daraus entfernt werden.

> **Hinweis:** `@starting-style` ist nur für CSS-Transitionen relevant. Bei der Verwendung von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) für solche Effekte wird `@starting-style` nicht benötigt. Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Es gibt zwei Möglichkeiten, `@starting-style` zu verwenden: als eigenständige Regel oder eingebettet in einen Regelsatz.

Betrachten wir ein Szenario, in dem wir ein [Popover](/de/docs/Web/API/Popover_API) animieren möchten, wenn es angezeigt wird (d.h. wenn es in die oberste Schicht hinzugefügt wird). Die "ursprüngliche Regel", die die Stile für das geöffnete Popover festlegt, könnte ungefähr so aussehen (siehe das [Popover-Beispiel](#animating_a_popover) unten):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Um die Anfangswerte der Eigenschaften des Popovers zu spezifizieren, die mit der ersten Methode animiert werden, fügen Sie einen eigenständigen `@starting-style` Block in Ihr CSS ein:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> Die `@starting-style` At-Regel und die "ursprüngliche Regel" haben die gleiche {{cssxref("specificity")}}. Um sicherzustellen, dass die Anfangsstile angewendet werden, fügen Sie die `@starting-style` At-Regel _nach_ der "ursprünglichen Regel" ein. Wenn Sie die `@starting-style` At-Regel vor der "ursprünglichen Regel" angeben, überschreiben die ursprünglichen Stile die Anfangsstile.

Um den Anfangsstil des Popovers mit der eingebetteten Methode anzugeben, können Sie den `@starting-style` Block innerhalb der "ursprünglichen Regel" einbetten:

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

### Wann genau werden Anfangsstile verwendet?

Es ist wichtig zu verstehen, dass ein Element von seinen `@starting-style`-Stilen übergeht, wenn es zum ersten Mal im DOM gerendert wird oder wenn es von {{cssxref("display", "display: none")}} zu einem sichtbaren Wert übergeht. Wenn es aus seinem anfänglichen sichtbaren Zustand zurückwechselt, verwendet es die `@starting-style`-Stile nicht mehr, da es nun sichtbar im DOM ist. Stattdessen wird es zu den bestehenden Stilen des Standardzustands des Elements zurückkehren.

Effektiv gibt es in diesen Situationen drei Stilzustände zu verwalten — Starting-Style-Zustand, Transitionierter Zustand und Standardzustand. Es ist möglich, dass die "Zu"- und "Von"-Transitionen in solchen Fällen unterschiedlich sind. Ein Beweis dafür finden Sie in unserem [Demonstrationsbeispiel, wann Startstile verwendet werden](#demonstration_of_when_starting_styles_are_used) unten.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von @starting-style

Übergang der {{cssxref("background-color")}} eines Elements von transparent zu grün, wenn es initial gerendert wird:

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

Übergang der {{cssxref("opacity")}} eines Elements, wenn es seinen {{cssxref("display")}}-Wert zu oder von `none` ändert:

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

In diesem Beispiel wird ein Button gedrückt, um ein {{htmlelement("div")}} Element zu erstellen, ihm eine `class` von `showing` zu geben und es in den DOM hinzuzufügen.

`showing` erhält einen `@starting-style` von `background-color: red` und einen Stil von `background-color: blue`, zu dem übergegangen werden soll. Der Standard-`div`-Regelsatz enthält `background-color: yellow` und ist auch dort, wo der `transition`-Wert gesetzt wird.

Wenn das `<div>` zum ersten Mal zum DOM hinzugefügt wird, sehen Sie den Hintergrund von rot nach blau übergehen. Nach einem Timeout entfernen wir die `showing`-Klasse vom `<div>` über JavaScript. An diesem Punkt geht es von blau zurück zu gelb, nicht rot. Dies beweist, dass die Anfangsstile nur verwendet werden, wenn das Element zum ersten Mal im DOM gerendert wird. Sobald es erschienen ist, kehrt das Element zu dem Standardstil zurück, der darauf gesetzt ist.

Nach einem weiteren Timeout entfernen wir das `<div>` ganz aus dem DOM und setzen den Anfangszustand des Beispiels zurück, damit es erneut ausgeführt werden kann.

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

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Demonstration of when starting styles are used", "100%", "150") }}

### Animating a popover

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) mit [CSS-Transitionen](/de/docs/Web/CSS/CSS_transitions) animiert. Grundlegende Ein- und Austrittsanimationen werden mit der {{CSSxRef("transition")}} Eigenschaft bereitgestellt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Global_attributes/popover) Attribut deklariert ist, und ein {{htmlelement("button")}} Element, das als Steuerungselement des Popovers mit seinem [popovertarget](/de/docs/Web/HTML/Element/button#popovertarget) Attribut bestimmt ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

In diesem Beispiel möchten wir zwei Eigenschaften animieren, {{cssxref("opacity")}} und {{cssxref("transform")}} (insbesondere eine horizontal skalierende Transformation), um das Popover ein- und auszublenden sowie horizontal zu wachsen und zu schrumpfen.

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
  background-color: rgb(0 0 0 / 0%);
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
    background-color: rgb(0 0 0 / 0%);
  }
}
```

Um dies zu erreichen, haben wir einen Anfangszustand für diese Eigenschaften im standardmäßig verborgenen Zustand des Popover-Elements (ausgewählt über `[popover]`) festgelegt und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die {{cssxref(":popover-open")}} Pseudo-Klasse).

Wir stellen dann eine {{cssxref("transition")}} Eigenschaft ein, um zwischen den beiden Zuständen zu animieren. Ein Anfangszustand für die Animation wird innerhalb einer `@starting-style` At-Regel enthalten, um die Eintrittsanimation zu ermöglichen.

Da das animierte Element in die {{Glossary("top_layer", "oberste Schicht")}} befördert wird, wenn es angezeigt wird und aus der obersten Schicht entfernt wird, wenn es verborgen ist (mit {{cssxref("display", "display: none")}}), sind einige zusätzliche Schritte erforderlich, um sicherzustellen, dass die Animation in beide Richtungen funktioniert:

- `display` wird zur Liste der übergangenen Elemente hinzugefügt, um sicherzustellen, dass das animierte Element während sowohl der Ein- als auch der Austrittsanimation sichtbar bleibt (auf `display: block` oder einen anderen sichtbaren `display`-Wert setzen). Ohne dies wäre die Austrittsanimation nicht sichtbar; in der Tat würde das Popover einfach verschwinden. Beachten Sie, dass der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} ebenfalls im Kurzschreibstil eingestellt wird, um die Animation zu aktivieren.
- {{cssxref("overlay")}} wird zur Liste der übergangenen Elemente hinzugefügt, um sicherzustellen, dass das Entfernen des Elements aus der obersten Schicht bis zum Ende der Animation aufgeschoben wird. Dies macht keinen großen Unterschied für Animationen wie diese, aber in komplexeren Fällen kann es, wenn man dies nicht tut, dazu führen, dass das Element zu schnell aus der Überlagerung entfernt wird, was bedeutet, dass die Animation nicht glatt oder effektiv ist. Wiederum ist `transition-behavior: allow-discrete` in diesem Fall erforderlich, damit die Animation stattfindet.

> [!NOTE]
> Wir haben auch eine Übergang auf der {{cssxref("::backdrop")}}, die hinter dem Popover erscheint, wenn es geöffnet ist, eingefügt, um eine schöne Verdunkelungsanimation bereitzustellen. `[popover]:popover-open::backdrop` wird verwendet, um den Hintergrund auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Animating a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers von `display: none` zu `display: block` wechseln, jedes Mal wenn sie gezeigt werden, das Popover von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen übergeht, jedes Mal wenn der Eintrittstransition erfolgt. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open`-Zustand zurück zum Standard-`[popover]`-Zustand.

> [!NOTE]
> Sie können ein Beispiel finden, das das Übergehen eines {{htmlelement("dialog")}} Elements und seiner Überlagerung demonstriert, wie es angezeigt und verborgen wird, auf der `<dialog>` Referenzseite — siehe [Übergehen von Dialogelementen](/de/docs/Web/HTML/Element/dialog#transitioning_dialog_elements).

### Übergang von Elementen bei Hinzufügen und Entfernen aus dem DOM

Dieses Beispiel enthält einen Button, der beim Drücken neue Elemente zu einem {{htmlelement("section")}} Container hinzufügt. Jedes Element enthält wiederum einen eingebetteten Button, der beim Drücken das Element entfernt. Dieses Beispiel zeigt, wie man Transitionen verwendet, um Elemente zu animieren, wenn sie dem DOM hinzugefügt oder daraus entfernt werden.

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

function randomColor() {
  function randomNum() {
    return Math.floor(Math.random() * 255);
  }

  return `rgb(${randomNum()} ${randomNum()} ${randomNum()})`;
}

function createColumn() {
  const divElem = document.createElement("div");
  divElem.style.backgroundColor = randomColor();

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

Wenn der Button "Neue Spalte erstellen" geklickt wird, wird die Funktion `createColumn()` aufgerufen. Diese erstellt ein {{htmlelement("div")}} Element mit einer zufällig generierten Hintergrundfarbe und ein {{htmlelement("button")}} Element zum Schließen des `<div>`. Es fügt dann den `<button>` dem `<div>` und das `<div>` dem `<section>` Container hinzu.

Wir fügen dann einen Ereignislistener zum Schließen-Button über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Ein Klick auf den Schließen-Button bewirkt zwei Dinge:

- Fügt die Klasse `fade-out` zum `<div>` hinzu. Das Hinzufügen der Klasse löst die Austrittsanimation aus, die auf dieser Klasse festgelegt ist.
- Entfernt das `<div>` nach einer Verzögerung von 1000ms. Der [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verzögert die Entfernung des `<div>` aus dem DOM (über [`Element.remove()`](/de/docs/Web/API/Element/remove)) bis nach dem Ende der Animation.

#### CSS

Wir fügen eine {{cssxref("transition")}} ein, die die {{cssxref("opacity")}} und {{cssxref("scale")}} jeder Spalte animiert, während sie hinzugefügt oder entfernt werden:

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
  background: linear-gradient(
    to right,
    rgb(255 255 255 / 0%),
    rgb(255 255 255 / 50%)
  );
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

Um die {{cssxref("opacity")}} und {{cssxref("scale")}} jedes `<div>` zu animieren, wenn es dem DOM hinzugefügt wird, und dann die Animation umzudrehen, wenn es aus dem DOM entfernt wird, gehen wir wie folgt vor:

- Wir spezifizieren den Endzustand der Eigenschaften, die wir übergehen möchten, in der Regel `div { ... }`.
- Wir spezifizieren den Anfangszustand, von dem aus die Eigenschaften übergehen sollen, innerhalb eines `@starting-style` Blocks.
- Wir spezifizieren die Austrittsanimation in der `.fade-out` Regel – das ist die Klasse, die das JavaScript den `<div>` Elementen zuweist, wenn die Schließen-Buttons gedrückt werden. Neben dem Setzen der `opacity` und `scale` Endzustände setzen wir auch [`display: none`](/de/docs/Web/CSS/display) auf die `<div>`s — wir möchten, dass sie sofort nicht mehr verfügbar sind, wenn sie aus der Benutzeroberfläche entfernt werden.
- Wir spezifizieren die {{cssxref("transition")}} Liste innerhalb der `div { ... }` Regel um `opacity`, `scale` und `display` zu animieren. Beachten Sie, dass für `display`, der {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} Wert ebenfalls im Kurzschreibstil gesetzt wird, damit es animiert wird.

#### Ergebnis

Das Endergebnis sieht wie folgt aus:

{{ EmbedLiveSample("Transitioning elements on DOM addition and removal", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Modul für [CSS Transitionen](/de/docs/Web/CSS/CSS_transitions)
- {{cssxref("overlay")}}
- {{cssxref("transition-behavior")}}
- [`CSSStartingStyleRule`](/de/docs/Web/API/CSSStartingStyleRule)
- [Vier neue CSS-Features für sanfte Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
