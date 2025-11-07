---
title: "@starting-style"
slug: Web/CSS/Reference/At-rules/@starting-style
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`@starting-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) wird verwendet, um Ausgangswerte für Eigenschaften eines Elements festzulegen, von denen Sie eine Transition durchführen möchten, wenn das Element seine erste Stilaktualisierung erhält, d. h. wenn ein Element erstmals auf einer zuvor geladenen Seite angezeigt wird.

## Syntax

Die `@starting-style` At-Regel kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block, der ein oder mehrere Regelsätze enthält, die Ausgangsstil-Deklarationen definieren und die Elemente auswählen, auf die sie angewendet werden:

   ```css
   @starting-style {
     /* rulesets */
   }
   ```

2. Verschachtelt innerhalb eines vorhandenen Regelsatzes, wobei sie ein oder mehrere Deklarationen enthält, die Ausgangseigenschaftenwerte für die vom Regelsatz bereits ausgewählten Elemente definieren:

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

Um unerwartetes Verhalten zu vermeiden, werden [CSS-Transitions](/de/docs/Web/CSS/CSS_transitions) standardmäßig nicht bei einer ersten Stilaktualisierung eines Elements oder wenn sich der {{CSSxRef("display")}}-Typ von `none` zu einem anderen Wert ändert, ausgelöst. Um anfängliche Stil-Transitions zu ermöglichen, sind `@starting-style`-Regeln erforderlich. Sie stellen Ausgangsstile für Elemente bereit, die keinen vorherigen Zustand haben, und definieren die Eigenschaftswerte, von denen die Transition ausgeht.

`@starting-style` ist besonders nützlich beim Erstellen von Ein- und Austritts-Transitions für Elemente, die im {{Glossary("top_layer", "Top Layer")}} angezeigt werden (wie [Popovers](/de/docs/Web/API/Popover_API) und modale {{htmlelement("dialog")}}e), Elemente, die zwischen `display: none` wechseln, und Elemente, die zum ersten Mal dem DOM hinzugefügt oder daraus entfernt werden.

> [!NOTE]
> `@starting-style` ist nur in Bezug auf CSS-Transitions relevant. Wenn Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) verwenden, um solche Effekte zu implementieren, ist `@starting-style` nicht erforderlich. Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Es gibt zwei Möglichkeiten, `@starting-style` zu verwenden: als eigenständige Regel oder verschachtelt innerhalb eines Regelsatzes.

Betrachten wir ein Szenario, in dem wir beim Anzeigen eines [Popovers](/de/docs/Web/API/Popover_API) eine Animation wünschen (das heißt, wenn es in den Top Layer hinzugefügt wird). Die "Originalregel", die die Stile für das geöffnete Popover angibt, könnte folgendermaßen aussehen (siehe das [Popover-Beispiel](#animieren_eines_popovers) unten):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Um die Ausgangswerte der Popover-Eigenschaften, die animiert werden sollen, mit der ersten Methode anzugeben, fügen Sie einen eigenständigen `@starting-style`-Block in Ihr CSS hinzu:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> Die `@starting-style` At-Regel und die "Originalregel" haben die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity). Um sicherzustellen, dass die Ausgangsstile angewendet werden, fügen Sie die `@starting-style`-Regel _nach_ der "Originalregel" ein. Wenn Sie die `@starting-style`-Regel vor der "Originalregel" angeben, überschreiben die Originalstile die Ausgangsstile.

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

Es ist wichtig zu verstehen, dass ein Element von seinen `@starting-style`-Stilen aus eine Transition durchführt, wenn es erstmals im DOM gerendert wird oder wenn es von {{cssxref("display", "display: none")}} zu einem sichtbaren Wert wechselt. Wenn es von seinem ersten sichtbaren Zustand zurückwechselt, verwendet es die `@starting-style`-Stile nicht mehr, da es nun im DOM sichtbar ist. Stattdessen wird es auf die Stile zurückkehren, die für den Standardzustand dieses Elements existieren.

Tatsächlich gibt es in diesen Situationen drei Stilzustände zu verwalten — Ausgangsstilzustand, Übergangszustand und Standardzustand. In solchen Fällen kann es sein, dass die "zu"- und "von"-Transitions unterschiedlich sind. Ein Beweis dafür finden Sie in unserem [Demonstrationsbeispiel, wann Ausgangsstile verwendet werden](#demonstration,_wann_ausgangsstile_verwendet_werden) weiter unten.

## Formale Syntax

{{CSSSyntaxRaw(`@starting-style = @starting-style { <rule-list> }`)}}

## Beispiele

### Grundlegende Verwendung von @starting-style

Übergang der {{cssxref("background-color")}} eines Elements von transparent zu grün, wenn es erstmals gerendert wird:

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

In diesem Beispiel wird ein Button gedrückt, um ein {{htmlelement("div")}}-Element zu erstellen, ihm die `class` "showing" zu geben und es dem DOM hinzuzufügen.

"showing" erhält eine `@starting-style` von `background-color: red` und einen Stil von `background-color: blue`, zu dem es übergehen soll. Der Standard-`div`-Regelsatz enthält `background-color: yellow` und legt auch dort den `transition` fest.

Wenn das `<div>` erstmals zum DOM hinzugefügt wird, sehen Sie, wie der Hintergrund von rot zu blau wechselt. Nach einer Zeitüberschreitung entfernen wir die `showing`-Klasse vom `<div>` über JavaScript. An diesem Punkt wechselt es von blau zurück zu gelb, nicht zu rot. Dies beweist, dass die Ausgangsstile nur verwendet werden, wenn das Element erstmals im DOM gerendert wird. Sobald es erschienen ist, wechselt das Element zurück zum Standardstil, der darauf gesetzt ist.

Nach einer weiteren Zeitüberschreitung entfernen wir dann das `<div>` vollständig aus dem DOM, um den Anfangszustand des Beispiels zurückzusetzen, damit es erneut ausgeführt werden kann.

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

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) mit [CSS-Transitions](/de/docs/Web/CSS/CSS_transitions) animiert. Grundlegende Eintritts- und Austrittsanimationen werden mit der {{CSSxRef("transition")}}-Eigenschaft bereitgestellt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut als Popover deklariert wird, und ein {{htmlelement("button")}}-Element, das mit dem [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut als Steuerung für die Anzeige des Popovers dient.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

In diesem Beispiel möchten wir zwei Eigenschaften animieren: {{cssxref("opacity")}} und {{cssxref("transform")}} (insbesondere eine horizontale Skalentransformation), um das Popover ein- und auszublenden sowie horizontal wachsen und schrumpfen zu lassen.

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

Um dies zu erreichen, haben wir einen Ausgangszustand für diese Eigenschaften im standardmäßig ausgeblendeten Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die {{cssxref(":popover-open")}}-Pseudoklasse) festgelegt.

Wir setzen dann eine {{cssxref("transition")}}-Eigenschaft, um zwischen den beiden Zuständen zu animieren. Ein Anfangszustand für die Animation ist in einer `@starting-style` At-Regel enthalten, um die Eintrittsanimation zu aktivieren.

Da das animierte Element beim Anzeigen in den {{Glossary("top_layer", "Top Layer")}} verschoben wird und beim Ausblenden wieder aus dem Top Layer entfernt wird (mit {{cssxref("display", "display: none")}}), sind einige zusätzliche Schritte erforderlich, um sicherzustellen, dass die Animation in beide Richtungen funktioniert:

- `display` wird zur Liste der übertragenen Elemente hinzugefügt, um sicherzustellen, dass das animierte Element während der Ein- und Austrittsanimationen sichtbar ist (auf `display: block` oder einen anderen sichtbaren `display`-Wert gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; das Popover würde im Wesentlichen einfach verschwinden. Beachten Sie, dass der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} ebenfalls im Kürzel gesetzt ist, um die Animation zu aktivieren.
- {{cssxref("overlay")}} wird zur Liste der übertragenen Elemente hinzugefügt, um sicherzustellen, dass die Entfernung des Elements vom Top Layer erst nach Beendigung der Animation erfolgt. Dies macht zwar keinen großen Unterschied für Animationen wie diese, aber in komplexeren Fällen kann dies dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, wodurch die Animation nicht glatt oder effektiv ist. Auch hier ist `transition-behavior: allow-discrete` in diesem Fall erforderlich, damit die Animation stattfindet.

> [!NOTE]
> Wir haben auch eine Transition auf dem {{cssxref("::backdrop")}} hinzugefügt, der hinter dem Popover erscheint, wenn es geöffnet wird, um eine schöne Verdunkelungsanimation zu bieten. `[popover]:popover-open::backdrop` wird verwendet, um das Hintergrundbild auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Animating a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, geht das Popover jedes Mal, wenn der Eintrittsübergang erfolgt, von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen über. Wenn sich das Popover schließt, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standard-`[popover]`-Zustand.

> [!NOTE]
> Sie finden ein Beispiel, das die Überlagerung eines {{htmlelement("dialog")}}-Elements und dessen Hintergrundbild beim Anzeigen und Ausblenden auf der <dialog>-Referenzseite demonstriert — siehe [Überlagerung von Dialogelementen](/de/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements).

### Übergänge von Elementen beim Hinzufügen und Entfernen aus dem DOM

Dieses Beispiel enthält einen Button, der beim Drücken neue Elemente zu einem {{htmlelement("section")}}-Container hinzufügt. Jedes Element enthält wiederum einen eingebetteten Button, der beim Drücken das Element entfernt. Dieses Beispiel zeigt, wie Transitions verwendet werden, um Elemente zu animieren, wenn sie dem DOM hinzugefügt oder davon entfernt werden.

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

Wenn der Button "Create new column" geklickt wird, wird die Funktion `createColumn()` aufgerufen. Dies erstellt ein {{htmlelement("div")}}-Element mit einer zufällig generierten Hintergrundfarbe und einem {{htmlelement("button")}}-Element, um das `<div>` zu schließen. Es fügt dann den `<button>` dem `<div>` und das `<div>` dem `<section>`-Container hinzu.

Wir fügen dann einen Event-Listener zum Schließen-Button über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Das Klicken auf den Schließen-Button bewirkt zwei Dinge:

- Fügt die Klasse `fade-out` zum `<div>` hinzu. Das Hinzufügen der Klasse löst die Austrittsanimation aus, die für diese Klasse festgelegt ist.
- Entfernt das `<div>` nach einer Verzögerung von 1000 ms. Die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verzögert die Entfernung des `<div>` aus dem DOM (über [`Element.remove()`](/de/docs/Web/API/Element/remove)) bis nach dem Ende der Animation.

#### CSS

Wir fügen eine {{cssxref("transition")}} hinzu, die die {{cssxref("opacity")}} und {{cssxref("scale")}} jeder Spalte animiert, während sie hinzugefügt und entfernt werden:

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

Um die {{cssxref("opacity")}} und {{cssxref("scale")}} jedes `<div>` zu animieren, wenn es dem DOM hinzugefügt wird und dann die Animation umzukehren, wenn es aus dem DOM entfernt wird, führen wir Folgendes aus:

- Geben Sie den Endzustand der Eigenschaften, die Sie übergehen möchten, in der Regel `div { ... }` an.
- Geben Sie den Ausgangszustand an, von dem aus die Eigenschaften innerhalb eines `@starting-style` Blocks übergangen werden sollen.
- Geben Sie die Austrittsanimation in der `.fade-out` Regel an — dies ist die Klasse, die dem JavaScript den `<div>`-Elementen zuweist, wenn deren Schließen-Tasten gedrückt werden. Neben der Einstellung der Endzustände von `opacity` und `scale` setzen wir auch [`display: none`](/de/docs/Web/CSS/Reference/Properties/display) auf die `<div>`s — wir möchten, dass sie sofort nicht mehr verfügbar sind, wenn sie von der Benutzeroberfläche entfernt werden.
- Geben Sie die {{cssxref("transition")}}-Liste in der Regel `div { ... }` an, um `opacity`, `scale` und `display` zu animieren. Beachten Sie, dass bei `display` der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} ebenfalls im Kürzel gesetzt ist, damit es animiert.

#### Ergebnis

Das Endergebnis sieht so aus:

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
- [Vier neue CSS-Funktionen für sanfte Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
