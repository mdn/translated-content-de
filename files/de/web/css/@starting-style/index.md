---
title: "@starting-style"
slug: Web/CSS/@starting-style
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`@starting-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um Anfangswerte für Eigenschaften festzulegen, die auf ein Element angewendet werden sollen, von denen aus Sie übergehen möchten, wenn das Element seine erste Stilaktualisierung erhält, d.h. wenn ein Element zum ersten Mal auf einer zuvor geladenen Seite angezeigt wird.

## Syntax

Die `@starting-style` At-Regel kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block, in welchem Fall sie einen oder mehrere Regelsets enthält, die Anfangsstil-Deklarationen definieren und die Elemente auswählen, auf die sie angewendet werden:

   ```css
   @starting-style {
     /* rulesets */
   }
   ```

2. Eingenistet innerhalb eines bestehenden Regelsets, in welchem Fall sie eine oder mehrere Deklarationen enthält, die Anfangseigenschaftswerte für die bereits durch dieses Regelset ausgewählten Elemente definieren:

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

Um unerwartetes Verhalten zu vermeiden, werden [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) standardmäßig nicht bei der anfänglichen Stilaktualisierung eines Elements ausgelöst oder wenn sich der {{CSSxRef("display")}}-Typ von `none` zu einem anderen Wert ändert. Um Übergänge bei der Erststilanwendung zu ermöglichen, sind `@starting-style`-Regeln erforderlich. Sie bieten Anfangsstile für Elemente, die keinen vorherigen Zustand besitzen, und definieren die Eigenschaftswerte, von denen der Übergang erfolgt.

`@starting-style` ist besonders nützlich, um Ein- und Ausblendeübergänge für Elemente zu erstellen, die im {{Glossary("top_layer", "obersten Layer")}} angezeigt werden (wie z.B. [Popovers](/de/docs/Web/API/Popover_API) und modale {{htmlelement("dialog")}}s), Elemente, die sich von und zu `display: none` ändern, und Elemente, wenn sie zum ersten Mal in den oder aus dem DOM hinzugefügt oder entfernt werden.

> [!NOTE]
> `@starting-style` ist nur relevant für CSS-Übergänge. Wenn Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) verwenden, um solche Effekte umzusetzen, ist `@starting-style` nicht erforderlich. Sehen Sie sich [Using CSS animations](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel an.

Es gibt zwei Möglichkeiten, `@starting-style` zu verwenden: als eigenständige Regel oder eingekapselt in einem Regelset.

Betrachten wir ein Szenario, in dem wir ein [Popover](/de/docs/Web/API/Popover_API) animieren möchten, wenn es angezeigt wird (d.h. wenn es zum obersten Layer hinzugefügt wird). Die "ursprüngliche Regel", die die Stile für das geöffnete Popover festlegt, könnte folgendermaßen aussehen (siehe das [Popover-Beispiel](#ein_popover_animieren) unten):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Um die Anfangswerte der animierten Eigenschaften des Popovers mit der ersten Methode anzugeben, fügen Sie einen eigenständigen `@starting-style` Block in Ihr CSS ein:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> Die `@starting-style` At-Regel und die "ursprüngliche Regel" haben die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity). Um sicherzustellen, dass die Anfangsstile angewendet werden, sollten Sie die `@starting-style` At-Regel _nach_ der "ursprünglichen Regel" einfügen. Wenn Sie die `@starting-style` At-Regel vor der "ursprünglichen Regel" angeben, überschreiben die ursprünglichen Stile die Anfangsstile.

Um den Anfangsstil für das Popover mit der eingelassenen Methode anzugeben, können Sie den `@starting-style` Block innerhalb der "ursprünglichen Regel" einfügen:

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

Es ist wichtig zu verstehen, dass ein Element von seinen `@starting-style` Stilen übergeht, wenn es zuerst im DOM gerendert wird oder wenn es von {{cssxref("display", "display: none")}} zu einem sichtbaren Wert wechselt. Wenn es aus seinem anfänglichen sichtbaren Zustand zurückwechselt, verwendet es nicht mehr die `@starting-style` Stile, da es jetzt im DOM sichtbar ist. Stattdessen kehrt es zu den bestehenden Stilen für den Standardzustand des Elements zurück.

Tatsächlich gibt es in diesen Situationen drei Stilzustände zu verwalten – den Ausgangsstilzustand, den Übergangszustand und den Standardzustand. Es ist möglich, dass die Übergänge "zu" und "von" in solchen Fällen unterschiedlich sind. Sie können einen Nachweis darüber in unserem [Beispiel, wann Anfangsstile verwendet werden](#wann_anfangsstile_verwendet_werden) unten sehen.

## Formale Syntax

{{CSSSyntaxRaw(`@starting-style = @starting-style { <rule-list> }`)}}

## Beispiele

### Grundlegende Verwendung von @starting-style

Übergang der {{cssxref("background-color")}} eines Elements von transparent zu grün, wenn es zuerst gerendert wird:

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

### Wann Anfangsstile verwendet werden

In diesem Beispiel wird ein Button gedrückt, um ein {{htmlelement("div")}} Element zu erzeugen, diesem eine `class` von `showing` zu geben und es dem DOM hinzuzufügen.

`showing` wird ein `@starting-style` von `background-color: red` zugewiesen und ein Stil von `background-color: blue`, zu dem übergangen werden soll. Das Standardregelset für `div` enthält `background-color: yellow` und dort wird auch der `transition` gesetzt.

Wenn das `<div>` zuerst dem DOM hinzugefügt wird, sehen Sie, wie der Hintergrund von rot zu blau übergeht. Nach einem Timeout entfernen wir die `showing` Klasse vom `<div>` via JavaScript. Zu diesem Zeitpunkt geht es von blau zurück auf gelb, nicht auf rot. Dies beweist, dass die Anfangsstile nur verwendet werden, wenn das Element zuerst im DOM gerendert wird. Sobald es erschienen ist, geht das Element zurück zu dem standardmäßigen Stil, der auf es gesetzt ist.

Nach einem weiteren Timeout entfernen wir das `<div>` dann vollständig aus dem DOM, um den Anfangszustand des Beispiels zurückzusetzen, sodass es erneut ausgeführt werden kann.

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

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Demonstration of when starting styles are used", "100%", "150") }}

### Ein Popover animieren

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) durch [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) animiert. Grundlegende Ein- und Ausblendeanimationen werden über die {{CSSxRef("transition")}}-Eigenschaft bereitgestellt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut deklariert ist, und ein {{htmlelement("button")}} Element, das als Anzeige-Steuerung des Popovers mit dem [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut ausgewiesen ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

In diesem Beispiel möchten wir zwei Eigenschaften animieren, {{cssxref("opacity")}} und {{cssxref("transform")}} (insbesondere eine horizontal skalierende Transformation), um das Popover ein- und auszublenden sowie horizontal zu wachsen und zu schrumpfen.

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

Um dies zu erreichen, haben wir einen Anfangszustand für diese Eigenschaften im standardmäßig ausgeblendeten Zustand des Popover-Elements festgelegt (ausgewählt über `[popover]`) und einen Endzustand im geöffneten Zustand des Popovers (ausgewählt über die {{cssxref(":popover-open")}}-Pseudoklasse).

Wir setzen dann eine {{cssxref("transition")}}-Eigenschaft, um zwischen den beiden Zuständen zu animieren. Ein Anfangszustand für die Animation ist innerhalb einer `@starting-style` At-Regel enthalten, um die Eintrittsanimation zu aktivieren.

Da das animierte Element beim Anzeigen in den {{Glossary("top_layer", "top layer")}} gefördert und beim Ausblenden aus dem top layer entfernt wird (mit {{cssxref("display", "display: none")}}), sind einige zusätzliche Schritte erforderlich, um sicherzustellen, dass die Animation in beiden Richtungen funktioniert:

- `display` wird zur Liste der übergangenen Elemente hinzugefügt, um sicherzustellen, dass das animierte Element während beider Ein- und Austrittsanimationen sichtbar ist (auf `display: block` oder einen anderen sichtbaren `display`-Wert gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; in der Tat würde das Popover einfach verschwinden. Beachten Sie, dass auch der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} im Kurzschreibweise festgelegt wird, um die Animation zu aktivieren.
- {{cssxref("overlay")}} wird zur Liste der übergangenen Elemente hinzugefügt, um sicherzustellen, dass die Entfernung des Elements aus dem top layer bis zum Ende der Animation verschoben wird. Dies macht für Animationen wie diese keinen großen Unterschied, aber in komplexeren Fällen kann das Element zu schnell aus dem Overlay entfernt werden, wenn dies nicht getan wird, was bedeutet, dass die Animation nicht glatt oder effektiv ist. Auch hier wird `transition-behavior: allow-discrete` in diesem Fall benötigt, damit die Animation auftritt.

> [!NOTE]
> Wir haben auch einen Übergang auf das {{cssxref("::backdrop")}}-Element eingebaut, das hinter dem Popover erscheint, wenn es sich öffnet, um eine schöne Abdunklungsanimation bereitzustellen. `[popover]:popover-open::backdrop` wird verwendet, um das Hintergrundelement auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Animating a popover", "100%", "200") }}

> [!NOTE]
> Da sich Popovers jedes Mal von `display: none` zu `display: block` ändern, wenn sie angezeigt werden, wechselt das Popover jedes Mal vom `@starting-style`-Stil zu seinen `[popover]:popover-open`-Stilen, wenn der Zugang aktiviert wird. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open`-Zustand zurück in den Standard-`[popover]`-Zustand.

> [!NOTE]
> Sie finden ein Beispiel, das das Überblenden eines {{htmlelement("dialog")}}-Elements und seines Hintergrunds zeigt, wenn es angezeigt und ausgeblendet wird, auf der `<dialog>`-Referenzseite — siehe [Übergang von Dialogelementen](/de/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements).

### Übergang von Elementen bei DOM-Hinzufügung und -Entfernung

Dieses Beispiel enthält einen Button, der, wenn er gedrückt wird, neue Elemente zu einem {{htmlelement("section")}} Container hinzufügt. Jedes Element enthält wiederum einen verschachtelten Button, der das Element entfernt, wenn er gedrückt wird. Dieses Beispiel zeigt, wie man Übergänge verwendet, um Elemente beim Hinzufügen zum oder Entfernen aus dem DOM zu animieren.

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

Wenn der "Create new column"-Button geklickt wird, wird die `createColumn()`-Funktion aufgerufen. Diese erstellt ein {{htmlelement("div")}} Element mit einer zufällig generierten Hintergrundfarbe und einem {{htmlelement("button")}} Element, um das `<div>` zu schließen. Dann fügt es den `<button>` zum `<div>` und das `<div>` zum `<section>` Container hinzu.

Dann fügen wir einen Ereignishandler zum Schließen-Button über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Beim Klick auf den Schließen-Button passiert zweierlei:

- Die `fade-out`-Klasse wird dem `<div>` hinzugefügt. Das Hinzufügen der Klasse löst die Austrittsanimation aus, die auf dieser Klasse festgelegt ist.
- Das `<div>` wird nach einer Verzögerung von 1000ms entfernt. Die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) Methode verzögert das Entfernen des `<div>` aus dem DOM (über [`Element.remove()`](/de/docs/Web/API/Element/remove)), bis die Animation endet.

#### CSS

Wir fügen eine {{cssxref("transition")}} ein, die die {{cssxref("opacity")}} und {{cssxref("scale")}} jedes Spalte animiert, wenn sie hinzugefügt und entfernt werden:

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

Um die {{cssxref("opacity")}} und {{cssxref("scale")}} jedes `<div>` zu animieren, wenn es dem DOM hinzugefügt wird, und dann die Animation umzukehren, wenn es aus dem DOM entfernt wird, machen wir Folgendes:

- Geben Sie den Endzustand der Eigenschaften, die wir animieren möchten, in der `div { ... }`-Regel an.
- Geben Sie den Anfangszustand, von dem die Eigenschaften übergehen sollen, in einem `@starting-style` Block an.
- Geben Sie die Austrittsanimation in der `.fade-out`-Regel an — das ist die Klasse, die JavaScript den `<div>`-Elementen zuweist, wenn auf ihre Schließen-Buttons geklickt wird. Neben dem Setzen der Endzustände von `opacity` und `scale` setzen wir auch [`display: none`](/de/docs/Web/CSS/Reference/Properties/display) auf die `<div>`s — wir möchten, dass sie sofort unzugänglich werden, wenn sie aus der Benutzeroberfläche entfernt werden.
- Geben Sie die {{cssxref("transition")}}-Liste in der `div { ... }` Regel an, um `opacity`, `scale` und `display` zu animieren. Beachten Sie, dass für `display` auch der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} im Kurzschreibformat gesetzt wird, damit es animiert wird.

#### Ergebnis

Das Endergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Transitioning elements on DOM addition and removal", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS transitions](/de/docs/Web/CSS/CSS_transitions) Modul
- {{cssxref("overlay")}}
- {{cssxref("transition-behavior")}}
- [`CSSStartingStyleRule`](/de/docs/Web/API/CSSStartingStyleRule)
- [Vier neue CSS-Features für sanfte Ein- und Ausblendeanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
