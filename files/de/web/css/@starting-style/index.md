---
title: "@starting-style"
slug: Web/CSS/@starting-style
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die **`@starting-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um Anfangswerte für Eigenschaften eines Elements zu definieren, von denen aus Sie eine Transition starten möchten, wenn das Element das erste Mal eine Stil-Änderung erfährt, d. h. wenn ein Element zum ersten Mal auf einer zuvor geladenen Seite angezeigt wird.

## Syntax

Die `@starting-style`-Regel kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block, der ein oder mehrere Regelsets enthält, die Anfangsstil-Deklarationen definieren und die Elemente auswählen, auf die sie angewendet werden:

   ```css
   @starting-style {
     rulesets
   }
   ```

2. Verschachtelt innerhalb eines bestehenden Regelsets, wobei sie ein oder mehrere Deklarationen enthält, die Anfangswerte von Eigenschaften für die bereits vom Regelset ausgewählten Elemente definieren:

   ```css
   selector { /* existing ruleset */
     /* ... */

     @starting-style {
       declarations
     }
   }
   ```

## Beschreibung

Um unerwartetes Verhalten zu vermeiden, werden [CSS-Transitions](/de/docs/Web/CSS/CSS_transitions) standardmäßig nicht ausgelöst, wenn ein Element das erste Mal einen Stil erhält oder wenn sich sein {{CSSxRef("display")}}-Typ von `none` zu einem anderen Wert ändert. Um solche Erst-Stil-Transitions zu aktivieren, sind `@starting-style`-Regeln erforderlich. Diese liefern Anfangs-Stile für Elemente, die keinen vorherigen Zustand haben, und definieren die Eigenschaftswerte, von denen aus animiert werden soll.

`@starting-style` ist besonders nützlich beim Erstellen von Eintritts- und Austrittsanimationen für Elemente, die in der {{Glossary("top_layer", "Top-Ebene")}} angezeigt werden (z. B. [Popovers](/de/docs/Web/API/Popover_API) und modale {{htmlelement("dialog")}}-Elemente), Elemente, die von und zu `display: none` wechseln, und Elemente, die dem DOM hinzugefügt oder entfernt werden.

> **Hinweis:** `@starting-style` ist nur für CSS-Transitions relevant. Beim Einsatz von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) für solche Effekte ist `@starting-style` nicht notwendig. Siehe [Using CSS animations](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Es gibt zwei Möglichkeiten, `@starting-style` zu verwenden: als eigenständige Regel oder verschachtelt innerhalb eines Regelsets.

Betrachten wir ein Szenario, in dem ein [Popover](/de/docs/Web/API/Popover_API) animiert wird, wenn es angezeigt wird (d. h., wenn es zur Top-Ebene hinzugefügt wird). Die "ursprüngliche Regel", die die Stile für das offene Popover definiert, könnte wie folgt aussehen (siehe das [Popover-Beispiel](#animation_eines_popovers) unten):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Um die Startwerte der zu animierenden Eigenschaften des Popovers mit der ersten Methode zu spezifizieren, umfasst Ihr CSS einen eigenständigen `@starting-style`-Block:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> Die `@starting-style`-Regel und die "ursprüngliche Regel" haben dieselbe [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity). Um sicherzustellen, dass die Anfangsstile angewendet werden, fügen Sie die `@starting-style`-Regel _nach_ der "ursprünglichen Regel" ein. Wenn Sie die `@starting-style`-Regel vor der "ursprünglichen Regel" spezifizieren, überschreiben die ursprünglichen Stile die Anfangsstile.

Um den Anfangsstil für das Popover mit der verschachtelten Methode zu spezifizieren, können Sie den `@starting-style`-Block innerhalb der "ursprünglichen Regel" verschachteln:

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

Es ist wichtig zu verstehen, dass ein Element von seinen `@starting-style`-Stilen ausgehend transitioniert, wenn es das erste Mal im DOM gerendert wird oder wenn es von {{cssxref("display", "display: none")}} zu einem sichtbaren Wert wechselt. Wenn es aus seinem anfänglichen Sichtbarkeitszustand zurückwechselt, verwendet es nicht mehr die `@starting-style`-Stile, da es jetzt im DOM sichtbar ist. Stattdessen transitioniert es zurück zu den Stilen, die für den Standardzustand dieses Elements existieren.

In solchen Situationen gibt es praktisch drei Stilzustände zu verwalten — den Anfangsstil-Zustand, den transitionierten Zustand und den Standardzustand. Es ist möglich, dass die "to"- und "from"-Transitions in solchen Fällen unterschiedlich sind. Einen Beweis dafür können Sie in unserem [Demonstration of when starting styles are used](#demonstration,_wann_anfangsstile_verwendet_werden)-Beispiel unten sehen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von @starting-style

Animieren Sie die {{cssxref("background-color")}} eines Elements von transparent zu grün, wenn es zuerst gerendert wird:

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

Animieren Sie die {{cssxref("opacity")}} eines Elements, wenn sich dessen {{cssxref("display")}}-Wert zu oder von `none` ändert:

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

### Demonstration, wann Anfangsstile verwendet werden

In diesem Beispiel wird eine Schaltfläche gedrückt, um ein {{htmlelement("div")}}-Element zu erstellen, ihm die `class` `showing` zuzuweisen und es dem DOM hinzuzufügen.

`showing` erhält einen `@starting-style` von `background-color: red` und einen Stil von `background-color: blue`, zu dem transitioniert wird. Das Standard-`div`-Regelset enthält `background-color: yellow` und ist auch dort, wo das `transition` festgelegt wird.

Wenn das `<div>` das erste Mal dem DOM hinzugefügt wird, sehen Sie, wie der Hintergrund von Rot zu Blau transitioniert. Nach einer Verzögerung entfernen wir die `showing`-Klasse aus dem `<div>` mithilfe von JavaScript. Zu diesem Zeitpunkt transitioniert es von Blau zurück zu Gelb, nicht Rot. Dies beweist, dass die Anfangsstile nur verwendet werden, wenn das Element das erste Mal im DOM gerendert wird. Sobald es erschienen ist, transitioniert das Element zurück zum Standardstil, der darauf festgelegt wurde.

Nach einer weiteren Verzögerung entfernen wir das `<div>` vollständig aus dem DOM, was den Ausgangszustand des Beispiels zurücksetzt, sodass es erneut ausgeführt werden kann.

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

### Animation eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) mithilfe von [CSS-Transitions](/de/docs/Web/CSS/CSS_transitions) animiert. Grundlegende Ein- und Austrittsanimationen werden mit der {{CSSxRef("transition")}}-Eigenschaft bereitgestellt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das mit dem [Popover](/de/docs/Web/HTML/Global_attributes/popover)-Attribut als Popover deklariert wurde, sowie ein {{htmlelement("button")}}-Element, das mithilfe seines [popovertarget](/de/docs/Web/HTML/Element/button#popovertarget)-Attributs als Anzeige-Steuerung des Popovers festgelegt wurde.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

In diesem Beispiel möchten wir zwei Eigenschaften animieren, {{cssxref("opacity")}} und {{cssxref("transform")}} (speziell, eine horizontal skalierende Transformation), um das Popover ein-/ausblenden sowie horizontal wachsen/schrumpfen zu lassen.

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

Um dies zu erreichen, haben wir einen Anfangszustand für diese Eigenschaften im standardmäßig ausgeblendeten Zustand des Popover-Elements (ausgewählt über `[popover]`) festgelegt und einen Endzustand für den offenen Zustand des Popovers (ausgewählt über die {{cssxref(":popover-open")}}-Pseudoklasse).

Wir haben dann eine {{cssxref("transition")}}-Eigenschaft eingerichtet, um zwischen den beiden Zuständen zu animieren. Ein Anfangsstil für die Animation ist innerhalb einer `@starting-style`-At-Regel enthalten, um die Eintrittsanimation zu aktivieren.

Da das animierte Element in die {{Glossary("top_layer", "Top-Ebene")}} befördert wird, wenn es angezeigt wird, und aus der Top-Ebene entfernt wird, wenn es ausgeblendet wird (mit {{cssxref("display", "display: none")}}), sind einige zusätzliche Schritte erforderlich, um sicherzustellen, dass die Animation in beide Richtungen funktioniert:

- `display` wird zur Liste der zu animierenden Elemente hinzugefügt, um sicherzustellen, dass das animierte Element während der Ein- und Austrittsanimation sichtbar bleibt (auf `display: block` oder einen anderen sichtbaren `display`-Wert gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar — das Popover würde im Grunde einfach verschwinden. Beachten Sie, dass der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} auch im Kurzbefehl festgelegt ist, um die Animation zu aktivieren.
- {{cssxref("overlay")}} wird zur Liste der zu animierenden Elemente hinzugefügt, um sicherzustellen, dass die Entfernung des Elements aus der Top-Ebene bis zum Ende der Animation verzögert wird. Dies macht für Animationen wie diese keinen großen Unterschied, aber in komplexeren Fällen kann es das Entfernen des Elements aus dem Overlay zu schnell bewirken, was bedeutet, dass die Animation nicht glatt oder effektiv ist. Auch hier ist `transition-behavior: allow-discrete` erforderlich, damit die Animation eintritt.

> [!NOTE]
> Wir haben auch eine Transition auf der {{cssxref("::backdrop")}} hinzugefügt, die hinter dem Popover erscheint, wenn es geöffnet wird, um eine angenehme Verdunkelungsanimation bereitzustellen. `[popover]:popover-open::backdrop` wird verwendet, um den Backdrop auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Animating a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jeder Anzeige von `display: none` auf `display: block` wechseln, transitioniert das Popover bei jedem Auftreten der Eintrittsanimation von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Beim Schließen des Popovers transitioniert es von seinem `[popover]:popover-open`-Zustand zurück in den Standardzustand `[popover]`.

> [!NOTE]
> Sie finden ein Beispiel, das das Transitionieren eines {{htmlelement("dialog")}}-Elements und seines Backdrops zeigt, während es eingeblendet und ausgeblendet wird, auf der Referenzseite zu `<dialog>` — siehe [Transitioning dialog elements](/de/docs/Web/HTML/Element/dialog#transitioning_dialog_elements).

### Transitionierung von Elementen bei DOM-Hinzufügung und -Entfernung

Dieses Beispiel enthält eine Schaltfläche, die beim Drücken neue Elemente zu einem {{htmlelement("section")}}-Container hinzufügt. Jedes Element enthält eine verschachtelte Schaltfläche, die das Element beim Drücken entfernt. Dieses Beispiel zeigt, wie Transitions verwendet werden, um Elemente zu animieren, wenn sie dem DOM hinzugefügt oder daraus entfernt werden.

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

Wenn die Schaltfläche "Create new column" geklickt wird, wird die Funktion `createColumn()` aufgerufen. Diese erstellt ein {{htmlelement("div")}}-Element mit einer zufällig generierten Hintergrundfarbe und ein {{htmlelement("button")}}-Element, um das `<div>` zu schließen. Anschließend wird das `<button>` dem `<div>` und das `<div>` dem `<section>`-Container hinzugefügt.

Wir fügen dann einen Event-Listener zum Schließen des Buttons mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Durch Klicken auf den Schließen-Button werden zwei Dinge erreicht:

- Es wird die Klasse `fade-out` zum `<div>` hinzugefügt. Das Hinzufügen der Klasse löst die Austrittsanimation aus, die auf dieser Klasse festgelegt ist.
- Das `<div>` wird nach einer Verzögerung von 1000ms entfernt. Die Methode [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verzögert das Entfernen des `<div>` vom DOM (über [`Element.remove()`](/de/docs/Web/API/Element/remove)), bis die Animation abgeschlossen ist.

#### CSS

Wir fügen eine {{cssxref("transition")}} hinzu, die die {{cssxref("opacity")}} und {{cssxref("scale")}} jeder Spalte animiert, wenn sie hinzugefügt oder entfernt werden:

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

Um die {{cssxref("opacity")}} und {{cssxref("scale")}} jedes `<div>` zu animieren, wenn es dem DOM hinzugefügt und die Animation beim Entfernen umzukehren, müssen wir:

- Den Endzustand der Eigenschaften, die wir transitionieren möchten, in der `div { ... }`-Regel festlegen.
- Den Ausgangszustand, von dem aus die Eigenschaften transitionieren, innerhalb eines `@starting-style`-Blocks definieren.
- Die Austrittsanimation in der `.fade-out`-Regel angeben — dies ist die Klasse, die der JavaScript-Code den `<div>`-Elementen hinzufügt, wenn ihre Schließen-Schaltflächen gedrückt werden. Neben dem Festlegen der Endzustände für `opacity` und `scale` setzen wir auch [`display: none`](/de/docs/Web/CSS/display) auf die `<div>`-Elemente — sie sollen nach der UI-Entfernung unmittelbar unzugänglich werden.
- Die {{cssxref("transition")}}-Liste innerhalb der `div { ... }`-Regel definieren, um `opacity`, `scale` und `display` zu animieren. Beachten Sie, dass für `display` der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} im Kurzbefehl ebenfalls gesetzt ist, damit es animiert wird.

#### Ergebnis

Das Endergebnis sieht wie folgt aus:

{{ EmbedLiveSample("Transitioning elements on DOM addition and removal", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Transitions](/de/docs/Web/CSS/CSS_transitions)-Modul
- {{cssxref("overlay")}}
- {{cssxref("transition-behavior")}}
- [`CSSStartingStyleRule`](/de/docs/Web/API/CSSStartingStyleRule)
- [Four new CSS features for smooth entry and exit animations](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
