---
title: "@starting-style"
slug: Web/CSS/@starting-style
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`@starting-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um Startwerte für Eigenschaften zu definieren, die auf ein Element gesetzt sind, von dem Sie möchten, dass es beim ersten Stil-Update des Elements übergeht, d.h. wenn ein Element erstmals auf einer zuvor geladenen Seite angezeigt wird.

## Syntax

Die `@starting-style` At-Regel kann auf zwei Weisen verwendet werden:

1. Als eigenständiger Block, wobei sie einen oder mehrere Regelsets enthält, die Startstil-Deklarationen definieren und die Elemente auswählen, auf die sie angewendet werden:

   ```css
   @starting-style {
     rulesets
   }
   ```

2. Eingebettet in ein bestehendes Regelset, wobei sie eine oder mehrere Deklarationen enthält, die Startwerte für die bereits von diesem Regelset ausgewählten Elemente definieren:

   ```css
   selector { /* existing ruleset */
     /* ... */

     @starting-style {
       declarations
     }
   }
   ```

## Beschreibung

Um unerwartetes Verhalten zu vermeiden, werden [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) standardmäßig nicht bei einem Element ausgelöst, wenn dessen Anfangsstil aktualisiert wird oder wenn sein {{CSSxRef("display")}}-Typ von `none` zu einem anderen Wert wechselt. Um Übergänge beim ersten Stil zu aktivieren, sind `@starting-style` Regeln erforderlich. Diese liefern Startstile für Elemente, die keinen vorherigen Zustand haben, und definieren die Eigenschaftswerte, von denen aus übergegangen werden soll.

`@starting-style` ist besonders nützlich beim Erstellen von Ein- und Austrittsübergängen für Elemente, die in der {{Glossary("top_layer", "Top-Schicht")}} angezeigt werden (wie [Popovers](/de/docs/Web/API/Popover_API) und modale {{htmlelement("dialog")}}e), Elemente, die zu `display: none` und zurück wechseln, und Elemente, die erstmals zum DOM hinzugefügt oder daraus entfernt werden.

> **Hinweis:** `@starting-style` ist nur für CSS-Übergänge relevant. Bei der Verwendung von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) zur Implementierung solcher Effekte wird `@starting-style` nicht benötigt. Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Es gibt zwei Möglichkeiten, `@starting-style` zu verwenden: als eigenständige Regel oder eingebettet in ein Regelset.

Betrachten wir ein Szenario, in dem wir ein [Popover](/de/docs/Web/API/Popover_API) animieren möchten, wenn es angezeigt wird (also, wenn es zur Top-Schicht hinzugefügt wird). Die "ursprüngliche Regel", die die Stile für das offene Popover spezifiziert, könnte wie folgt aussehen (siehe das [Popover-Beispiel](#animieren_eines_popovers) unten):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Um die Startwerte der Eigenschaften des Popovers anzugeben, die mit der ersten Methode animiert werden, fügen Sie einen eigenständigen `@starting-style` Block in Ihr CSS ein:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> Die `@starting-style` At-Regel und die "ursprüngliche Regel" haben die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity). Um sicherzustellen, dass Startstile angewendet werden, fügen Sie die `@starting-style` At-Regel _nach_ der "ursprünglichen Regel" ein. Wenn Sie die `@starting-style` At-Regel vor der "ursprünglichen Regel" spezifizieren, werden die ursprünglichen Stile die Startstile überschreiben.

Um den Startstil für das Popover mit der eingebetteten Methode anzugeben, können Sie den `@starting-style` Block innerhalb der "ursprünglichen Regel" einbetten:

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

Es ist wichtig zu verstehen, dass ein Element von seinen `@starting-style` Stilen übergeht, wenn es erstmals im DOM gerendert wird oder wenn es von {{cssxref("display", "display: none")}} zu einem sichtbaren Wert übergeht. Wenn es von seinem anfänglichen sichtbaren Zustand zurückwechselt, verwendet es nicht mehr die `@starting-style` Stile, da es nun sichtbar im DOM ist. Stattdessen wechselt es zu den Stilen, die für den Standardzustand dieses Elements existieren.

Tatsächlich gibt es in solchen Situationen drei Stilzustände zu verwalten: Startstilzustand, Übergangszustand und Standardzustand. Es ist möglich, dass sich die Übergänge für "zu" und "von" in solchen Fällen unterscheiden. Ein Beweis hierfür ist in unserem [Demonstration von wann Startstile verwendet werden](#demonstration_von_wann_startstile_verwendet_werden) Beispiel unten zu sehen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von @starting-style

Übergehen Sie die {{cssxref("background-color")}} eines Elements von transparent zu grün, wenn es erstmals gerendert wird:

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

Übergehen Sie die {{cssxref("opacity")}} eines Elements, wenn es seinen {{cssxref("display")}} Wert zu oder von `none` ändert:

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

### Demonstration von wann Startstile verwendet werden

In diesem Beispiel wird ein Button gedrückt, um ein {{htmlelement("div")}} Element zu erstellen, ihm eine `class` von `showing` zu geben und es zum DOM hinzuzufügen.

`showing` wird eine `@starting-style` von `background-color: red` und ein Stil von `background-color: blue` zugewiesen, auf den übergangen wird. Der Standard-`div` Regelset enthält `background-color: yellow`, und dort wird auch der `transition` gesetzt.

Wenn das `<div>` erstmals zum DOM hinzugefügt wird, sehen Sie den Hintergrund von rot nach blau übergehen. Nach einem Timeout entfernen wir die `showing` Klasse vom `<div>` über JavaScript. An diesem Punkt wechselt es von blau zurück zu gelb, nicht rot. Dies beweist, dass die Startstile nur verwendet werden, wenn das Element erstmals im DOM gerendert wird. Sobald es erschienen ist, wechselt das Element zurück in den Standardstil, der darauf gesetzt ist.

Nach einem weiteren Timeout entfernen wir dann das `<div>` insgesamt aus dem DOM, wodurch der Anfangszustand des Beispiels zurückgesetzt wird, sodass es erneut ausgeführt werden kann.

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

Der Code rendert sich folgendermaßen:

{{ EmbedLiveSample("Demonstration von wann Startstile verwendet werden", "100%", "150") }}

### Animieren eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) animiert. Grundlegende Ein- und Austrittsanimationen werden mit der {{CSSxRef("transition")}} Eigenschaft bereitgestellt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut deklariert ist, und ein {{htmlelement("button")}} Element, das als Steuerung für die Anzeige des Popovers mittels seines [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attributs festgelegt ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

In diesem Beispiel möchten wir zwei Eigenschaften animieren, {{cssxref("opacity")}} und {{cssxref("transform")}} (insbesondere eine horizontal skalierende Transformation), um das Popover ein- und auszublenden sowie horizontal wachsen und schrumpfen zu lassen.

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

Um dies zu erreichen, haben wir einen Anfangszustand für diese Eigenschaften im standardmäßig verborgenen Zustand des Popover-Elements gesetzt (über `[popover]` ausgewählt) und einen Endzustand im offenen Zustand des Popovers (über die {{cssxref(":popover-open")}} Pseudoklasse ausgewählt).

Wir setzen dann eine {{cssxref("transition")}} Eigenschaft, um zwischen den beiden Zuständen zu animieren. Ein Anfangszustand für die Animation wird innerhalb einer `@starting-style` At-Regel aufgenommen, um die Eintrittsanimation zu ermöglichen.

Da das animierte Element zur {{Glossary("top_layer", "Top-Schicht")}} befördert wird, wenn es gezeigt wird, und aus der Top-Schicht entfernt wird, wenn es verborgen wird (mit {{cssxref("display", "display: none")}}), sind einige zusätzliche Schritte erforderlich, um sicherzustellen, dass die Animation in beide Richtungen funktioniert:

- `display` wird zur Liste der übergehenden Elemente hinzugefügt, um sicherzustellen, dass das animierte Element während beider, Eintritts- und Austrittsanimationen sichtbar ist (auf `display: block` oder einen anderen sichtbaren `display` Wert gesetzt). Andernfalls wäre die Austrittsanimation nicht sichtbar; das Popover würde praktisch einfach verschwinden. Beachten Sie, dass auch der {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} Wert in der Kurzform gesetzt wird, um die Animation zu aktivieren.
- {{cssxref("overlay")}} wird zur Liste der übergehenden Elemente hinzugefügt, um sicherzustellen, dass das Entfernen des Elements aus der Top-Schicht erst erfolgt, wenn die Animation endet. Das macht bei Animationen wie dieser keinen großen Unterschied, aber in komplexeren Fällen kann das Unterlassen dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht reibungslos oder wirksam ist. Auch hier ist `transition-behavior: allow-discrete` in diesem Fall erforderlich, damit die Animation erfolgt.

> [!NOTE]
> Wir haben auch einen Übergang auf dem {{cssxref("::backdrop")}} aufgenommen, der hinter dem Popover erscheint, wenn es geöffnet wird, um eine schöne Verdunkelungsanimation bereitzustellen. `[popover]:popover-open::backdrop` wird verwendet, um das Backdrop auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code rendert sich folgendermaßen:

{{ EmbedLiveSample("Animieren eines Popovers", "100%", "200") }}

> [!NOTE]
> Da Popovers von `display: none` zu `display: block` wechseln, jedes Mal wenn sie angezeigt werden, wechselt das Popover bei jedem Eintrittsübergang von seinen `@starting-style` Stilen zu seinen `[popover]:popover-open` Stilen. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open` Zustand zu dem Standard `[popover]` Zustand.

> [!NOTE]
> Ein Beispiel, das das Übergehen eines {{htmlelement("dialog")}} Elements und seines Hintergrunds beim Ein- und Ausblenden aufzeigt, finden Sie auf der `<dialog>` Referenzseite — siehe [Übergang von Dialogelementen](/de/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements).

### Übergang von Elementen beim Hinzufügen und Entfernen aus dem DOM

Dieses Beispiel enthält einen Button, der, wenn er gedrückt wird, neue Elemente zu einem {{htmlelement("section")}} Container hinzufügt. Jedes Element enthält wiederum einen verschachtelten Button, der, wenn er gedrückt wird, das Element entfernt. Dieses Beispiel zeigt, wie Übergänge verwendet werden, um Elemente zu animieren, wenn sie zum DOM hinzugefügt oder daraus entfernt werden.

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

Wenn der "Create new column" Button geklickt wird, wird die `createColumn()` Funktion aufgerufen. Diese erstellt ein {{htmlelement("div")}} Element mit einer zufällig generierten Hintergrundfarbe und einem {{htmlelement("button")}} Element, um das `<div>` zu schließen. Es fügt dann den `<button>` dem `<div>` und das `<div>` dem `<section>` Container hinzu.

Wir fügen dann einen Event-Listener zum Schließen-Button über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Wenn der Schließen-Button geklickt wird, werden zwei Dinge ausgelöst:

- Es wird die `fade-out` Klasse dem `<div>` hinzugefügt. Das Hinzufügen der Klasse löst die Austrittsanimation aus, die auf dieser Klasse gesetzt ist.
- Das `<div>` wird nach einer Verzögerung von 1000 ms entfernt. Die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verzögert das Entfernen des `<div>` aus dem DOM (via [`Element.remove()`](/de/docs/Web/API/Element/remove)) bis nach dem Ende der Animation.

#### CSS

Wir fügen eine {{cssxref("transition")}} hinzu, die die {{cssxref("opacity")}} und {{cssxref("scale")}} jeder Spalte animiert, wenn sie hinzugefügt oder entfernt wird:

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

Um die {{cssxref("opacity")}} und {{cssxref("scale")}} jedes `<div>` zu animieren, während es zum DOM hinzugefügt wird und dann die Animation umzukehren, wenn es aus dem DOM entfernt wird, haben wir:

- Den Endzustand der Eigenschaften, die wir übergehen wollen, auf der `div { ... }` Regel angegeben.
- Den Anfangszustand, von dem aus die Eigenschaften übergehen sollen, innerhalb eines `@starting-style` Blockes bestimmt.
- Die Austrittsanimation innerhalb der `.fade-out` Regel spezifiziert - dies ist die Klasse, die die JavaScript den `<div>` Elementen zuweist, wenn ihre Schaltflächen geklickt werden. Neben dem Setzen der `opacity` und `scale` Endzustände setzen wir auch [`display: none`](/de/docs/Web/CSS/display) auf die `<div>`s - wir wollen, dass sie unmittelbar unerreichbar werden, wenn sie aus der UI entfernt werden.
- Die {{cssxref("transition")}} Liste innerhalb der `div { ... }` Regel angegeben, um `opacity`, `scale` und `display` zu animieren. Beachten Sie, dass für `display` auch der {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} Wert in der Kurzform gesetzt wird, sodass es animiert wird.

#### Ergebnis

Das Endergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Übergang von Elementen beim Hinzufügen und Entfernen aus dem DOM", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul
- {{cssxref("overlay")}}
- {{cssxref("transition-behavior")}}
- [`CSSStartingStyleRule`](/de/docs/Web/API/CSSStartingStyleRule)
- [Vier neue CSS-Funktionen für sanfte Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
