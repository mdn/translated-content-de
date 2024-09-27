---
title: "@starting-style"
slug: Web/CSS/@starting-style
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die **`@starting-style`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/At-rule) wird verwendet, um Ausgangswerte für Eigenschaften festzulegen, die auf ein Element gesetzt werden, von dem aus Sie eine Transition durchführen möchten, wenn das Element seine erste Stilaktualisierung erhält, d.h. wenn ein Element erstmals auf einer zuvor geladenen Seite angezeigt wird.

## Syntax

Die `@starting-style` At-Regel kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block, der einen oder mehrere Regelmengen enthält, die Anfangs-Stildeklarationen definieren und die Elemente auswählen, auf die sie angewendet werden:

   ```css
   @starting-style {
     rulesets
   }
   ```

2. Verschachtelt innerhalb einer existierenden Regelmenge, in diesem Fall enthält sie eine oder mehrere Deklarationen, die Anfangseigenschaften für die bereits von dieser Regelmenge ausgewählten Elemente definieren:

   ```css
   selector { /* existing ruleset */
     /* ... */

     @starting-style {
       declarations
     }
   }
   ```

## Beschreibung

Um unerwartetes Verhalten zu vermeiden, werden [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) standardmäßig nicht bei der ersten Stilaktualisierung eines Elements oder wenn sich der {{CSSxRef("display")}}-Typ von `none` zu einem anderen Wert ändert, ausgelöst. Um Übergänge beim ersten Stil zu ermöglichen, sind `@starting-style`-Regeln erforderlich. Sie bieten Ausgangsstile für Elemente, die keinen vorherigen Zustand haben, und definieren die Eigenschaftswerte, von denen aus Übergänge durchgeführt werden.

`@starting-style` ist besonders nützlich beim Erstellen von Ein- und Ausblendübergängen für Elemente, die in der [Top-Ebene](/de/docs/Glossary/Top_layer) angezeigt werden (wie [Popovers](/de/docs/Web/API/Popover_API) und modale {{htmlelement("dialog")}}e), von `display: none` zu anderen Werten wechseln und für Elemente, die erstmals zum oder aus dem DOM hinzugefügt oder entfernt werden.

> **Note:** `@starting-style` ist ausschließlich für CSS-Übergänge von Bedeutung. Bei der Verwendung von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) für solche Effekte wird `@starting-style` nicht benötigt. Siehe [Using CSS animations](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Es gibt zwei Möglichkeiten, `@starting-style` zu verwenden: als eigenständige Regel oder verschachtelt in einer Regelmenge.

Betrachten Sie ein Szenario, in dem wir ein [Popover](/de/docs/Web/API/Popover_API) beim Anzeigen animieren möchten (d.h. wenn es zur Top-Ebene hinzugefügt wird). Die "Originalregel", die die Stile für das geöffnete Popover angibt, könnte so aussehen (siehe das [Popover-Beispiel](#animieren_eines_popovers) unten):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Um die Anfangswerte der Popover-Eigenschaften anzugeben, die mit der ersten Methode animiert werden sollen, fügen Sie einen eigenständigen `@starting-style`-Block in Ihr CSS ein:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> Die `@starting-style` At-Regel und die "Originalregel" haben die gleiche {{cssxref("specificity")}}. Um sicherzustellen, dass die Ausgangsstile angewendet werden, fügen Sie die `@starting-style` At-Regel _nach_ der "Originalregel" hinzu. Wenn Sie die `@starting-style` At-Regel vor der "Originalregel" festlegen, werden die ursprünglichen Stile die Ausgangsstile überschreiben.

Um den Ausgangsstil für das Popover mit der verschachtelten Methode anzugeben, können Sie den `@starting-style`-Block innerhalb der "Originalregel" verschachteln:

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

### Wann genau werden Ausgangsstile verwendet?

Es ist wichtig zu verstehen, dass ein Element von seinen `@starting-style`-Stilen übergeht, wenn es erstmals im DOM gerendert wird oder wenn es von {{cssxref("display", "display: none")}} zu einem sichtbaren Wert wechselt. Wenn es aus seinem anfänglichen sichtbaren Zustand zurückkehrt, wird es die `@starting-style`-Stile nicht mehr verwenden, da es nun im DOM sichtbar ist. Stattdessen wechselt es zurück zu den Stilen, die für den Standardzustand des Elements existieren.

Effektiv gibt es in diesen Situationen drei Stilzustände zu verwalten — Ausgangsstilzustand, übergangener Zustand und Standardzustand. Es ist möglich, dass die "zu"- und "von"-Übergänge in solchen Fällen unterschiedlich sind. Sie können einen Beweis dafür in unserem [Beispiel zur Demonstration, wann Ausgangsstile verwendet werden](#demonstration,_wann_ausgangsstile_verwendet_werden) unten sehen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende `@starting-style` Verwendung

Übergang der {{cssxref("background-color")}} eines Elements von transparent nach grün, wenn es zunächst gerendert wird:

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

### Demonstration, wann Ausgangsstile verwendet werden

In diesem Beispiel wird eine Schaltfläche gedrückt, um ein {{htmlelement("div")}}-Element zu erstellen, ihm eine `class` von `showing` zu geben und es dem DOM hinzuzufügen.

`showing` erhält ein `@starting-style` von `background-color: red` und einen Stil von `background-color: blue` auf den zu wechselnden Zustand. Die Standard-`div`-Regelmenge enthält `background-color: yellow`, wo auch die `transition` gesetzt wird.

Wenn das `<div>` erstmals dem DOM hinzugefügt wird, sehen Sie, wie der Hintergrund von rot nach blau wechselt. Nach einem Timeout entfernen wir die `showing`-Klasse vom `<div>` über JavaScript. An diesem Punkt wechselt es von blau zurück zu gelb, nicht rot. Dies beweist, dass die Ausgangsstile nur verwendet werden, wenn das Element erstmals im DOM gerendert wird. Sobald es erschienen ist, wechselt das Element zurück zu dem Standardstil, der darauf gesetzt ist.

Nach einem weiteren Timeout entfernen wir das `<div>` vollständig aus dem DOM, setzen den Anfangszustand des Beispiels zurück, damit es erneut ausgeführt werden kann.

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

Der Code wird wie folgt wiedergegeben:

{{ EmbedLiveSample("Demonstration of when starting styles are used", "100%", "150") }}

### Animieren eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) animiert. Grundlegende Ein- und Ausblendeanimationen werden mit der Eigenschaft {{CSSxRef("transition")}} bereitgestellt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, deklariert als Popover unter Verwendung des [popover](/de/docs/Web/HTML/Global_attributes/popover)-Attributs, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerelement des Popovers über sein [popovertarget](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut dient.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

In diesem Beispiel wollen wir zwei Eigenschaften, [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform) (insbesondere eine horizontale Skalierungstransformation) animieren, um das Popover ein- und auszublenden sowie es horizontal wachsen und schrumpfen zu lassen.

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

Um dies zu erreichen, haben wir einen Ausgangszustand für diese Eigenschaften auf dem standardmäßig versteckten Zustand des Popover-Elements gesetzt (ausgewählt über `[popover]`) und einen Endzustand auf dem offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open) Pseudoklasse).

Wir setzen dann eine [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um zwischen den beiden Zuständen zu animieren. Ein Ausgangszustand für die Animation wird innerhalb einer `@starting-style` At-Regel aufgenommen, um die Eintrittsanimation zu aktivieren.

Da das animierte Element in die [Top-Ebene](/de/docs/Glossary/Top_layer) befördert wird, wenn es angezeigt wird, und aus dieser entfernt wird, wenn es versteckt wird (mit [`display: none`](/de/docs/Web/CSS/display)), sind einige zusätzliche Schritte erforderlich, um sicherzustellen, dass die Animation in beide Richtungen funktioniert:

- `display` wird der Liste der übergangenen Elemente hinzugefügt, um sicherzustellen, dass das animierte Element während beider Animationen sichtbar ist (auf `display: block` oder einen anderen sichtbaren `display`-Wert gesetzt). Ohne dies wäre die Ausblendanimation nicht sichtbar; das Popover würde einfach verschwinden. Beachten Sie, dass der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) ebenfalls im Shorthand festgelegt ist, um die Animation zu aktivieren.
- [`overlay`](/de/docs/Web/CSS/overlay) wird der Liste der übergangenen Elemente hinzugefügt, um sicherzustellen, dass die Entfernung des Elements aus der obersten Ebene bis zum Ende der Animation hinausgezögert wird. Dies macht keinen großen Unterschied bei einfachen Animationen wie dieser, aber in komplexeren Fällen kann das Nichtausführen dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht glatt oder effektiv ist. Auch hier ist `transition-behavior: allow-discrete` erforderlich, damit die Animation stattfindet.

> [!NOTE]
> Wir haben auch eine Übergangsanimation für das [`::backdrop`](/de/docs/Web/CSS/::backdrop), die hinter dem Popover angezeigt wird, hinzugefügt, um eine schöne Verdunkelungsanimation zu bieten. `[popover]:popover-open::backdrop` wird verwendet, um den Hintergrund auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt wiedergegeben:

{{ EmbedLiveSample("Animating a popover", "100%", "200") }}

> [!NOTE]
> Da Popover bei jeder Anzeige von `display: none` zu `display: block` wechseln, wechselt das Popover bei jedem Eintrittsübergang von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open`-Zustand zurück in den Standard-`[popover]`-Zustand.

> [!NOTE]
> Ein Beispiel, das das Überblenden eines {{htmlelement("dialog")}}-Elements und seines Hintergrunds zeigt, wenn es angezeigt oder versteckt wird, finden Sie auf der `<dialog>`-Referenzseite — siehe [Transitioning dialog elements](/de/docs/Web/HTML/Element/dialog#transitioning_dialog_elements).

### Übergang von Elementen bei DOM-Hinzufügung und -Entfernung

Dieses Beispiel enthält eine Schaltfläche, die bei einem Klick neue Elemente zu einem {{htmlelement("section")}}-Container hinzufügt. Jedes Element enthält wiederum eine verschachtelte Schaltfläche, die das Element beim Klicken entfernt. Dieses Beispiel zeigt, wie Übergänge verwendet werden können, um Elemente zu animieren, wenn sie dem DOM hinzugefügt oder daraus entfernt werden.

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

Wenn der "Neue Spalte erstellen"-Button geklickt wird, wird die `createColumn()`-Funktion aufgerufen. Diese erstellt ein {{htmlelement("div")}}-Element mit einer zufällig generierten Hintergrundfarbe und ein {{htmlelement("button")}}-Element, um das `<div>` zu schließen. Es fügt dann die `<button>` zum `<div>` und das `<div>` zum `<section>`-Container hinzu.

Wir fügen dann einen Event-Listener zu den Schließen-Button über [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Das Klicken auf den Schließen-Button bewirkt zwei Dinge:

- Fügt die Klasse `fade-out` zum `<div>` hinzu. Das Hinzufügen der Klasse löst die Austrittsanimation aus, die auf dieser Klasse gesetzt ist.
- Entfernt das `<div>` nach einer Verzögerung von 1000 ms. Die [`setTimeout()`](/de/docs/Web/API/SetTimeout) verzögert das Entfernen des `<div>` aus dem DOM (über [`Element.remove()`](/de/docs/Web/API/Element/remove)) bis nach dem Ende der Animation.

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

Um die [`opacity`](/de/docs/Web/CSS/opacity) und [`scale`](/de/docs/Web/CSS/scale) jedes `<div>` zu animieren, wenn es zum DOM hinzugefügt und dann die Animation rückgängig gemacht wird, wenn es aus dem DOM entfernt wird, gehen wir folgendermaßen vor:

- Geben Sie den Endzustand der Eigenschaften an, die wir auf die `div { ... }`-Regel übergehen möchten.
- Geben Sie den Ausgangszustand an, aus dem die Eigenschaften innerhalb eines `@starting-style`-Blocks übergehen sollen.
- Geben Sie die Austrittsanimation innerhalb der `.fade-out`-Regel an — dies ist die Klasse, die das JavaScript den `<div>`-Elementen zuweist, wenn ihre Schließen-Buttons gedrückt werden. Neben dem Setzen der `opacity`- und `scale`-Endzustände setzen wir auch [`display: none`](/de/docs/Web/CSS/display) auf die `<div>`-Elemente — wir möchten, dass sie sofort nach dem Entfernen aus der Benutzeroberfläche nicht mehr verfügbar sind.
- Geben Sie die [`transition`](/de/docs/Web/CSS/transition)-Liste innerhalb der `div { ... }`-Regel an, um `opacity`, `scale` und `display` zu animieren. Beachten Sie, dass für `display` der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) ebenfalls im Shorthand festgelegt wird, damit es animiert.

#### Ergebnis

Das endgültige Ergebnis sieht so aus:

{{ EmbedLiveSample("Transitioning elements on DOM addition and removal", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS transitions](/de/docs/Web/CSS/CSS_transitions) Modul
- [`overlay`](/de/docs/Web/CSS/overlay)
- [`transition-behavior`](/de/docs/Web/CSS/transition-behavior)
- [`CSSStartingStyleRule`](/de/docs/Web/API/CSSStartingStyleRule)
- [Four new CSS features for smooth entry and exit animations](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
