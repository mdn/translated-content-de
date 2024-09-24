---
title: "@starting-style"
slug: Web/CSS/@starting-style
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die **`@starting-style`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/At-rule) wird verwendet, um Startwerte für Eigenschaften festzulegen, die auf ein Element angewendet werden sollen, von denen aus Sie beim ersten Stil-Update des Elements übergehen möchten, also wenn ein Element zum ersten Mal auf einer zuvor geladenen Seite angezeigt wird.

## Syntax

Die `@starting-style` Regel kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block, der ein oder mehrere Regelsätze enthält, die Startstil-Deklarationen definieren und die Elemente auswählen, auf die sie angewendet werden:

   ```css
   @starting-style {
     rulesets
   }
   ```

2. Eingebettet in einen bestehenden Regelsatz, der ein oder mehrere Deklarationen enthält, die Startwerten für die bereits von diesem Regelsatz ausgewählten Elemente definieren:

   ```css
   selector { /* existierender Regelsatz */
     /* ... */

     @starting-style {
       declarations
     }
   }
   ```

## Beschreibung

Um unerwartetes Verhalten zu vermeiden, werden [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) standardmäßig nicht bei der anfänglichen Stilaktualisierung eines Elements ausgelöst oder wenn sich sein {{CSSxRef("display")}}-Typ von `none` zu einem anderen Wert ändert. Um Übergänge beim ersten Stil zu ermöglichen, werden `@starting-style` Regeln benötigt. Sie definieren Startstile für Elemente, die keinen vorherigen Zustand haben, und legen die Eigenschaftswerte fest, von denen aus der Übergang erfolgt.

`@starting-style` ist besonders nützlich, wenn Ein- und Austrittsübergänge für Elemente erstellt werden, die in der [obersten Ebene](/de/docs/Glossary/Top_layer) angezeigt werden (wie [Popovers](/de/docs/Web/API/Popover_API) und modale {{htmlelement("dialog")}}s), Elemente, die sich von und zu `display: none` ändern und Elemente, die zum ersten Mal zum DOM hinzugefügt oder aus diesem entfernt werden.

> **Hinweis:** `@starting-style` ist nur für CSS-Übergänge relevant. Beim Einsatz von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) zur Implementierung solcher Effekte wird `@starting-style` nicht benötigt. Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Es gibt zwei Möglichkeiten, `@starting-style` zu verwenden: als eigenständige Regel oder innerhalb eines Regelsatzes verschachtelt.

Betrachten wir ein Szenario, in dem wir ein [Popover](/de/docs/Web/API/Popover_API) animieren möchten, wenn es angezeigt wird (das heißt, wenn es zur obersten Ebene hinzugefügt wird). Die "ursprüngliche Regel", die die Stile für das geöffnete Popover angibt, könnte wie folgt aussehen (siehe das [Popover-Beispiel](#animieren_eines_popovers) unten):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Um die Startwerte der Eigenschaften des Popovers festzulegen, die mit der ersten Methode animiert werden sollen, fügen Sie einen eigenständigen `@starting-style` Block in Ihr CSS ein:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> Die `@starting-style` Regel und die "ursprüngliche Regel" haben die gleiche {{cssxref("specificity")}}. Um sicherzustellen, dass Startstile angewendet werden, sollten Sie die `@starting-style` Regel _nach_ der "ursprünglichen Regel" einfügen. Wenn Sie die `@starting-style` Regel vor der "ursprünglichen Regel" spezifizieren, werden die ursprünglichen Stile die Startstile überschreiben.

Um den Startstil des Popovers mit der verschachtelten Methode zu spezifizieren, können Sie den `@starting-style` Block innerhalb der "ursprünglichen Regel" verschachteln:

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

Es ist wichtig zu verstehen, dass ein Element von seinen `@starting-style` Stilen übergeht, wenn es zum ersten Mal im DOM gerendert oder von {{cssxref("display", "display: none")}} zu einem sichtbaren Wert wechselt. Wenn es wieder aus seinem anfänglichen sichtbaren Zustand zurückkehrt, wird es die `@starting-style` Stile nicht mehr verwenden, da es jetzt im DOM sichtbar ist. Stattdessen wird es zu welchen Stilen auch immer in den Standardzustand dieses Elements zurückkehren.

In der Tat gibt es in diesen Situationen drei Stilzustände zu verwalten - Startstilzustand, Übergangszustand und Standardzustand. Es ist möglich, dass die "zu" und "von" Übergänge in solchen Fällen unterschiedlich sind. Sie können einen Beweis dafür in unserem [Demonstration, wann Startstile verwendet werden](#demonstration,_wann_startstile_verwendet_werden) Beispiel unten sehen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende @starting-style Verwendung

Übergang der {{cssxref("background-color")}} eines Elements von transparent zu grün, wenn es anfänglich gerendert wird:

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

### Demonstration, wann Startstile verwendet werden

In diesem Beispiel wird ein Button gedrückt, um ein {{htmlelement("div")}} Element zu erstellen, ihm eine `class` von `showing` zu geben und es dem DOM hinzuzufügen.

`showing` erhält einen `@starting-style` von `background-color: red` und einen Stil von `background-color: blue`, zu dem es übergehen soll. Der Standard-`div` Regelsatz enthält `background-color: yellow` und dort wird auch der `transition` gesetzt.

Wenn das `<div>` zum ersten Mal dem DOM hinzugefügt wird, sehen Sie den Hintergrund, der von rot zu blau übergeht. Nach einem Timeout entfernen wir die `showing` Klasse vom `<div>` über JavaScript. In diesem Moment wechselt es von blau zurück zu gelb, nicht zu rot. Das beweist, dass die Startstile nur verwendet werden, wenn das Element zum ersten Mal im DOM gerendert wird. Sobald es erschienen ist, kehrt das Element zu dem Standardstil zurück, der darauf gesetzt ist.

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

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Demonstration of when starting styles are used", "100%", "150") }}

### Animieren eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) mithilfe von [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) animiert. Grundlegende Ein- und Austrittsanimationen werden durch die {{CSSxRef("transition")}} Eigenschaft bereitgestellt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} Element, das als Popover unter Verwendung des [popover](/de/docs/Web/HTML/Global_attributes/popover) Attributs deklariert ist, und ein {{htmlelement("button")}} Element, das als Sichtsteuerung des Popovers bestimmt ist, indem das [popovertarget](/de/docs/Web/HTML/Element/button#popovertarget) Attribut verwendet wird.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

In diesem Beispiel möchten wir zwei Eigenschaften animieren: [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform) (insbesondere, um einen horizontalen Skalierungstransform zu erstellen), um das Popover ein- und auszublenden sowie horizontal wachsen und schrumpfen zu lassen.

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

  /* Finaler Zustand der Austrittsanimation */
  opacity: 0;
  transform: scaleX(0);

  transition:
    opacity 0.7s,
    transform 0.7s,
    overlay 0.7s allow-discrete,
    display 0.7s allow-discrete;
  /* Entspricht
  transition: all 0.7s allow-discrete; */
}

/* Nach der [popover]:popover-open Regel einfügen */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}

/* Übergang für das Popover-Rückgrat */
[popover]::backdrop {
  background-color: rgb(0 0 0 / 0%);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* Entspricht
  transition: all 0.7s allow-discrete; */
}

[popover]:popover-open::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* Verschachtelung (&) wird für Pseudo-Elemente nicht unterstützt,
also einen eigenständigen starting-style-Block angeben. */
@starting-style {
  [popover]:popover-open::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}
```

Um dies zu erreichen, haben wir einen Anfangszustand für diese Eigenschaften im Standard-verborgenen Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open) Pseudoklasse) festgelegt.

Wir setzen dann eine [`transition`](/de/docs/Web/CSS/transition) Eigenschaft, um zwischen den beiden Zuständen zu animieren. Ein Anfangszustand für die Animation ist in einem `@starting-style` Regel enthalten, um die Eintrittsanimation zu aktivieren.

Da das animierte Element in die [oberste Ebene](/de/docs/Glossary/Top_layer) befördert wird, wenn es gezeigt wird und aus der obersten Ebene entfernt wird, wenn es verborgen wird (mit [`display: none`](/de/docs/Web/CSS/display)), sind einige zusätzliche Schritte erforderlich, um sicherzustellen, dass die Animation in beide Richtungen funktioniert:

- `display` wird in die Liste der Übergangselemente aufgenommen, um sicherzustellen, dass das animierte Element während beider Eintritts- und Austrittsanimationen sichtbar bleibt (auf `display: block` oder einen anderen sichtbaren `display` Wert gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; in der Tat würde das Popover einfach verschwinden. Beachten Sie, dass der [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) Wert auch in der Kurzform festgelegt ist, um die Animation zu aktivieren.
- [`overlay`](/de/docs/Web/CSS/overlay) wird in die Liste der Übergangselemente aufgenommen, um sicherzustellen, dass die Entfernung des Elements aus der obersten Ebene bis zum Ende der Animation verzögert wird. Dies macht keinen großen Unterschied bei einfachen Animationen wie dieser, aber in komplexeren Fällen kann es durch das Nichttun zu einem schnellen Entfernen des Elements aus dem Overlay kommen, was bedeutet, dass die Animation nicht glatt oder effektiv ist. Auch `transition-behavior: allow-discrete` ist in diesem Fall erforderlich, damit die Animation erfolgt.

> [!NOTE]
> Wir haben auch einen Übergang auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) eingefügt, der hinter dem Popover erscheint, wenn es öffnet, um eine angenehme Verdunkelungsanimation zu bieten. `[popover]:popover-open::backdrop` wird verwendet, um das Rückgrat zu selektieren, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Animating a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal, wenn sie angezeigt werden, von `display: none` zu `display: block` wechseln, wechselt das Popover jedes Mal, wenn der Eintrittsübergang erfolgt, von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open` Zustand zu dem Standardzustand von `[popover]`.

> [!NOTE]
> Sie finden ein Beispiel, das das Überblenden eines {{htmlelement("dialog")}} Elements und seines Rückgrats zeigt, wenn es auf der Seite mit dem `<dialog>` Referenzmerkmal geöffnet und geschlossen wird — siehe [Überblenden von Dialogelementen](/de/docs/Web/HTML/Element/dialog#transitioning_dialog_elements).

### Überblenden von Elementen bei DOM-Hinzufügung und -Entfernung

Dieses Beispiel enthält einen Button, der, wenn er gedrückt wird, neue Elemente zu einem {{htmlelement("section")}} Container hinzufügt. Jedes Element enthält wiederum einen verschachtelten Button, der beim Drücken das Element entfernt. Dieses Beispiel zeigt, wie Übergänge verwendet werden, um Elemente zu animieren, wenn sie dem DOM hinzugefügt oder daraus entfernt werden.

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

Wenn der "Create new column"-Button geklickt wird, wird die `createColumn()` Funktion aufgerufen. Diese erstellt ein {{htmlelement("div")}} Element mit einer zufällig generierten Hintergrundfarbe und einem {{htmlelement("button")}} Element, um das `<div>` zu schließen. Es fügt dann das `<button>` zum `<div>` und das `<div>` zum `<section>` Container hinzu.

Wir fügen dann einen Event-Listener zum Schließen-Button über {{domxref("EventTarget.addEventListener", "addEventListener")}} hinzu. Klicken auf den Schließen-Button führt zwei Dinge aus:

- Fügt die `fade-out` Klasse zum `<div>` hinzu. Das Hinzufügen der Klasse löst die Austrittsanimation aus, die auf dieser Klasse gesetzt ist.
- Entfernt das `<div>` nach einer Verzögerung von 1000ms. Das {{domxref("setTimeout()")}} verzögert die Entfernung des `<div>`s aus dem DOM (über {{domxref("Element.remove()")}}), bis die Animation endet.

#### CSS

Wir fügen eine {{cssxref("transition")}} hinzu, die die {{cssxref("opacity")}} und {{cssxref("scale")}} jedes Spalte animiert, während sie hinzugefügt und entfernt werden:

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
  /* Entspricht
  transition: all 0.7s allow-discrete; */
}

/* Nach der `div` Regel einfügen */
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

Um die [`opacity`](/de/docs/Web/CSS/opacity) und [`scale`](/de/docs/Web/CSS/scale) jedes `<div>`s zu animieren, wenn es dem DOM hinzugefügt wird und dann die Animation umzukehren, wenn es aus dem DOM entfernt wird, gehen wir folgendermaßen vor:

- Geben Sie den Endzustand der Eigenschaften an, die wir im `div { ... }` Regel übergehen möchten.
- Geben Sie den Anfangszustand an, von dem aus die Eigenschaften im `@starting-style` Block übergehen sollen.
- Geben Sie die Austrittsanimation in der `.fade-out` Regel an - dies ist die Klasse, die das JavaScript den `<div>` Elementen zuweist, wenn ihre Schließen-Buttons gedrückt werden. Neben dem Setzen der `opacity` und `scale` Endzustände setzen wir auch [`display: none`](/de/docs/Web/CSS/display) auf die `<div>`s - wir möchten, dass sie sofort nicht mehr verfügbar werden, wenn sie aus der Benutzeroberfläche entfernt werden.
- Geben Sie die [`transition`](/de/docs/Web/CSS/transition) Liste innerhalb der `div { ... }` Regel an, um `opacity`, `scale` und `display` zu animieren. Beachten Sie, dass für `display` der [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) Wert auch in der Kurzform festgelegt ist, damit es animiert wird.

#### Ergebnis

Das endgültige Ergebnis sieht wie folgt aus:

{{ EmbedLiveSample("Transitioning elements on DOM addition and removal", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul
- [`overlay`](/de/docs/Web/CSS/overlay)
- [`transition-behavior`](/de/docs/Web/CSS/transition-behavior)
- {{domxref("CSSStartingStyleRule")}}
- [Vier neue CSS-Features für sanfte Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
