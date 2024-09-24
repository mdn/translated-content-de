---
title: "@starting-style"
slug: Web/CSS/@starting-style
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{CSSRef}}

Die **`@starting-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um Startwerte für Eigenschaften eines Elements zu definieren, von denen aus Sie beim ersten Stil-Update des Elements (d. h. wenn ein Element zum ersten Mal auf einer zuvor geladenen Seite angezeigt wird) Übergänge ausführen möchten.

## Syntax

Die `@starting-style`-At-Regel kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block, der einen oder mehrere Regelsätze enthält, die Startstil-Deklarationen definieren und die Elemente auswählen, auf die sie angewendet werden:

   ```css
   @starting-style {
     rulesets
   }
   ```

2. Verschachtelt innerhalb eines bestehenden Regelsatzes, wobei sie eine oder mehrere Deklarationen enthält, die Startwerte für die bereits im Regelsatz ausgewählten Elemente definieren:

   ```css
   selector { /* existing ruleset */
     /* ... */

     @starting-style {
       declarations
     }
   }
   ```

## Beschreibung

Um unerwartetes Verhalten zu vermeiden, werden [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) standardmäßig nicht beim ersten Stil-Update eines Elements ausgelöst, oder wenn sich der {{CSSxRef("display")}}-Typ von `none` zu einem anderen Wert ändert. Um Übergänge beim ersten Stil-Update zu ermöglichen, sind `@starting-style`-Regeln erforderlich. Diese bieten Startstile für Elemente, die keinen vorherigen Zustand haben, und definieren die Eigenschaftswerte, von denen der Übergang ausgehen soll.

`@starting-style` ist besonders nützlich beim Erstellen von Ein- und Ausblendeffekten für Elemente, die in der {{Glossary("top_layer", "Top-Ebene")}} angezeigt werden (wie [Popovers](/de/docs/Web/API/Popover_API) und modale {{htmlelement("dialog")}}e), für Elemente, die sich zu und von `display: none` ändern, und für Elemente, die zuerst in den oder aus dem DOM hinzugefügt oder entfernt werden.

> **Note:** `@starting-style` ist nur für CSS-Übergänge relevant. Bei Verwendung von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations), um solche Effekte zu implementieren, wird `@starting-style` nicht benötigt. Siehe [CSS-Animationen verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Es gibt zwei Möglichkeiten, `@starting-style` zu verwenden: als eigenständige Regel oder verschachtelt innerhalb eines Regelsatzes.

Betrachten Sie ein Szenario, in dem wir einen [Popover](/de/docs/Web/API/Popover_API) animieren möchten, wenn er angezeigt wird (d. h. wenn er zur Top-Ebene hinzugefügt wird). Die „Originalregel“, die die Stile für den offenen Popover spezifiziert, könnte in etwa so aussehen (siehe das [Popover-Beispiel](#animieren_eines_popovers) unten):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Um die Ausgangswerte der zu animierenden Eigenschaften des Popovers anzugeben, können Sie die erste Methode verwenden, bei der Sie einen eigenständigen `@starting-style`-Block in Ihr CSS aufnehmen:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> Die `@starting-style`-At-Regel und die „Originalregel“ haben die gleiche {{cssxref("specificity")}}. Um sicherzustellen, dass Startstile angewendet werden, fügen Sie die `@starting-style`-At-Regel _nach_ der „Originalregel“ ein. Wenn Sie die `@starting-style`-At-Regel vor der „Originalregel“ spezifizieren, werden die ursprünglichen Stile die Startstile überschreiben.

Um den Startstil für den Popover mit der verschachtelten Methode anzugeben, können Sie den `@starting-style`-Block innerhalb der „Originalregel“ verschachteln:

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

Es ist wichtig zu verstehen, dass ein Element von seinen `@starting-style`-Stilen aus übergeht, wenn es zum ersten Mal im DOM gerendert wird oder wenn es von {{cssxref("display", "display: none")}} zu einem sichtbaren Wert übergeht. Wenn es von seinem anfänglichen sichtbaren Zustand zurückwechselt, wird es die `@starting-style`-Stile nicht mehr verwenden, da es nun im DOM sichtbar ist. Stattdessen wird es zu welchen Stilen auch immer übergehen, die für den Standardzustand dieses Elements existieren.

Tatsächlich gibt es in solchen Situationen drei Stilzustände zu verwalten — den Startstil-Zustand, den Übergangszustand und den Standardzustand. Es ist möglich, dass für die „zu“ und „von“ Übergänge in solchen Fällen unterschiedliche Bedingungen bestehen. Sie können einen Beweis dafür in unserem [Demonstration von wann Startstile verwendet werden](#demonstration_von_wann_startstile_verwendet_werden) Beispiel unten sehen.

## Formale Syntax

{{csssyntax}}

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

### Demonstration von wann Startstile verwendet werden

In diesem Beispiel wird eine Schaltfläche gedrückt, um ein {{htmlelement("div")}}-Element zu erstellen, ihm eine `class` von `showing` zu geben und es dem DOM hinzuzufügen.

`showing` erhält einen `@starting-style` von `background-color: red` und einen Stil von `background-color: blue`, zu dem übergegangen wird. Der Standard-`div`-Regelsatz enthält `background-color: yellow` und hier wird auch der `transition`-Wert festgelegt.

Wenn das `<div>` erstmals dem DOM hinzugefügt wird, sehen Sie, wie der Hintergrund von rot zu blau wechselt. Nach einer Zeitüberschreitung entfernen wir die `showing`-Klasse von dem `<div>` über JavaScript. Zu diesem Zeitpunkt wechselt es von blau zurück zu gelb, nicht rot. Das beweist, dass die Startstile nur verwendet werden, wenn das Element erstmals im DOM gerendert wird. Sobald es erschienen ist, wechselt das Element zurück zum Standardstil, der darauf festgelegt ist.

Nach einer weiteren Zeitüberschreitung entfernen wir dann das `<div>` vollständig aus dem DOM, wodurch der Anfangszustand des Beispiels zurückgesetzt wird, sodass es erneut ausgeführt werden kann.

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

{{ EmbedLiveSample("Demonstration von wann Startstile verwendet werden", "100%", "150") }}

### Animieren eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) mithilfe von [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) animiert. Grundlegende Ein- und Ausanimationen werden mit der {{CSSxRef("transition")}}-Eigenschaft bereitgestellt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover deklariert ist, indem das [popover](/de/docs/Web/HTML/Global_attributes/popover)-Attribut verwendet wird, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerelement des Popover durch sein [popovertarget](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut festgelegt ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

In diesem Beispiel möchten wir zwei Eigenschaften animieren, {{cssxref("opacity")}} und {{cssxref("transform")}} (speziell eine horizontal skalierende Transformation), um das Popover ein- und auszublenden sowie horizontal wachsen und schrumpfen zu lassen.

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

Um dies zu erreichen, haben wir einen Startzustand für diese Eigenschaften im Standardverborgenen Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand im offenen Zustand des Popover (ausgewählt über die {{cssxref(":popover-open")}}-Pseudo-Klasse) festgelegt.

Wir setzen dann eine {{cssxref("transition")}}-Eigenschaft, um zwischen den beiden Zuständen zu animieren. Ein Startzustand für die Animation ist innerhalb einer `@starting-style`-At-Regel enthalten, um die Einblendanimation zu aktivieren.

Da das animierte Element in die {{Glossary("top_layer", "Top-Ebene")}} verschoben wird, wenn es angezeigt wird und aus der Top-Ebene entfernt wird, wenn es verborgen ist (mit {{cssxref("display", "display: none")}}), sind einige zusätzliche Schritte erforderlich, um sicherzustellen, dass die Animation in beide Richtungen funktioniert:

- `display` wird zur Liste der Elemente hinzugefügt, die überblendet werden, um sicherzustellen, dass das animierte Element während sowohl der Ein- als auch der Ausblendanimation sichtbar ist (auf `display: block` oder einen anderen sichtbaren `display`-Wert gesetzt). Ohne dies wäre die Ausblendanimation nicht sichtbar; tatsächlich würde das Popover einfach verschwinden. Beachten Sie, dass der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} ebenfalls im Shorthand gesetzt ist, um die Animation zu aktivieren.
- {{cssxref("overlay")}} wird zur Liste der überblenden Elemente hinzugefügt, um sicherzustellen, dass die Entfernung des Elements aus der Top-Ebene bis zum Ende der Animation verzögert wird. Dies macht keinen großen Unterschied für einfache Animationen wie diese, aber in komplexeren Fällen kann das Fehlen dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht fließend oder effektiv ist. Auch hier ist `transition-behavior: allow-discrete` erforderlich, um die Animation zu ermöglichen.

> [!NOTE]
> Wir haben auch einen Übergang auf dem {{cssxref("::backdrop")}} hinzugefügt, das hinter dem Popover erscheint, wenn es öffnet, um eine schöne Abdunklungsanimation zu ermöglichen. `[popover]:popover-open::backdrop` wird verwendet, um das Backdrop auszuwählen, wenn der Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Animieren eines Popovers", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover jedes Mal, wenn der Eintrittsübergang erfolgt, von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn der Popover schließt, wechselt er von seinem `[popover]:popover-open`-Zustand zurück zum Standard-`[popover]`-Zustand.

> [!NOTE]
> Ein Beispiel, das das Transitioning eines {{htmlelement("dialog")}}-Elements und seines Backdrops zeigt, wie es ein- und ausgeblendet wird, finden Sie auf der `<dialog>`-Referenzseite — siehe [Übergang von Dialogelementen](/de/docs/Web/HTML/Element/dialog#transitioning_dialog_elements).

### Transitioning von Elementen bei DOM-Hinzufügung und -Entfernung

Dieses Beispiel enthält eine Schaltfläche, die, wenn sie gedrückt wird, neue Elemente zu einem {{htmlelement("section")}}-Container hinzufügt. Jedes Element enthält wiederum eine verschachtelte Schaltfläche, die, wenn gedrückt, das Element entfernt. Dieses Beispiel zeigt, wie man Übergänge verwendet, um Elemente zu animieren, wenn sie dem DOM hinzugefügt oder daraus entfernt werden.

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

Wenn die Schaltfläche "Neue Spalte erstellen" geklickt wird, wird die Funktion `createColumn()` aufgerufen. Dies erstellt ein {{htmlelement("div")}}-Element mit einer zufällig generierten Hintergrundfarbe und einem {{htmlelement("button")}}-Element, um das `<div>` zu schließen. Es hängt dann den `<button>` an das `<div>` und das `<div>` an den `<section>`-Container an.

Wir fügen dann einen Event-Listener zur Schaltfläche zum Schließen hinzu über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener). Das Klicken auf die Schaltfläche zum Schließen bewirkt zwei Dinge:

- Fügt die `fade-out`-Klasse zum `<div>` hinzu. Das Hinzufügen der Klasse löst die Ausblendanimation aus, die auf dieser Klasse gesetzt ist.
- Entfernt das `<div>` nach einer Verzögerung von 1000 ms. Die Funktion [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verzögert die Entfernung des `<div>` aus dem DOM (über [`Element.remove()`](/de/docs/Web/API/Element/remove)) bis nach dem Ende der Animation.

#### CSS

Wir fügen einen {{cssxref("transition")}} hinzu, der die {{cssxref("opacity")}} und {{cssxref("scale")}} jeder Spalte animiert, wenn sie hinzugefügt oder entfernt werden:

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

Um die {{cssxref("opacity")}} und {{cssxref("scale")}} jedes `<div>` zu animieren, wie es dem DOM hinzugefügt wird, und dann die Animation umzukehren, wenn es aus dem DOM entfernt wird, führen wir Folgendes aus:

- Spezifizieren den Endzustand der Eigenschaften, die wir im `div { ... }`-Regelsatz übergehen möchten.
- Spezifizieren den Startzustand, von dem aus die Eigenschaften im `@starting-style`-Block übergehen sollen.
- Spezifizieren die Ausblendanimation im `.fade-out`-Regel — dies ist die Klasse, die das JavaScript den `<div>`-Elementen zuweist, wenn ihre Schaltflächen zum Schließen gedrückt werden. Neben dem Festlegen der Endzustände von `opacity` und `scale` setzen wir auch [`display: none`](/de/docs/Web/CSS/display) auf die `<div>`s — wir möchten, dass sie sofort nicht verfügbar werden, wenn sie aus der Benutzeroberfläche entfernt werden.
- Spezifizieren die {{cssxref("transition")}}-Liste innerhalb der `div { ... }`-Regel, um `opacity`, `scale` und `display` zu animieren. Beachten Sie, dass für `display` der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} auch im Shorthand gesetzt ist, damit es animiert wird.

#### Ergebnis

Das Endergebnis sieht so aus:

{{ EmbedLiveSample("Transitioning von Elementen bei DOM-Hinzufügung und -Entfernung", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul
- {{cssxref("overlay")}}
- {{cssxref("transition-behavior")}}
- [`CSSStartingStyleRule`](/de/docs/Web/API/CSSStartingStyleRule)
- [Vier neue CSS-Funktionen für flüssige Ein- und Ausblendeanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
