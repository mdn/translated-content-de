---
title: "@starting-style"
slug: Web/CSS/@starting-style
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`@starting-style`**-[@regel](/de/docs/Web/CSS/CSS_syntax/At-rule) in [CSS](/de/docs/Web/CSS) wird verwendet, um Startwerte für Eigenschaften zu definieren, die auf ein Element angewendet werden sollen, wenn es seine erste Stilaktualisierung erhält, d.h. wenn ein Element zum ersten Mal auf einer zuvor geladenen Seite angezeigt wird.

## Syntax

Die `@starting-style`-Regel kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block, der einen oder mehrere Regelsätze enthält, die Startstil-Deklarationen definieren und die Elemente auswählen, auf die sie angewendet werden:

   ```css
   @starting-style {
     /* rulesets */
   }
   ```

2. Eingebettet in einen bestehenden Regelsatz, in diesem Fall enthält es eine oder mehrere Deklarationen, die Startwerte für die im Regelsatz bereits ausgewählten Elemente definieren:

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

Um unerwartetes Verhalten zu vermeiden, werden [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) standardmäßig nicht bei der ersten Stilaktualisierung eines Elements oder bei einer Änderung seines {{CSSxRef("display")}}-Typs von `none` auf einen anderen Wert ausgelöst. Um erste Stilübergänge zu ermöglichen, werden `@starting-style`-Regeln benötigt. Sie bieten Startstile für Elemente, die keinen vorherigen Zustand haben, und definieren die Eigenschaftswerte, von denen aus übergegangen werden soll.

`@starting-style` ist besonders nützlich beim Erstellen von Ein- und Ausblendeübergängen für Elemente, die im {{Glossary("top_layer", "Top-Layer")}} angezeigt werden (zum Beispiel [Popovers](/de/docs/Web/API/Popover_API) und modale {{htmlelement("dialog")}}s), sowie bei Elementen, die zu und von `display: none` wechseln und bei Elementen, die zum ersten Mal dem DOM hinzugefügt oder daraus entfernt werden.

> [!NOTE]
> `@starting-style` ist nur relevant für CSS-Übergänge. Beim Verwenden von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) zur Implementierung solcher Effekte ist `@starting-style` nicht notwendig. Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Es gibt zwei Möglichkeiten, `@starting-style` zu verwenden: als eigenständige Regel oder eingebettet in einen Regelsatz.

Stellen wir uns ein Szenario vor, bei dem wir ein [Popover](/de/docs/Web/API/Popover_API) beim Anzeigen animieren möchten (also wenn es zum Top-Layer hinzugefügt wird). Die "Originalregel", die die Stile für das geöffnete Popover spezifiziert, könnte folgendermaßen aussehen (siehe das [Popover-Beispiel](#animierung_eines_popovers) unten):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Um die Startwerte der Eigenschaften des Popovers zu spezifizieren, die mit der ersten Methode animiert werden sollen, fügen Sie einen eigenständigen `@starting-style`-Block in Ihr CSS ein:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> Die `@starting-style`-@regel und die "Originalregel" haben die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity). Um sicherzustellen, dass Startstile angewendet werden, platzieren Sie die `@starting-style`-@regel _nach_ der "Originalregel". Wenn Sie die `@starting-style`-@regel vor der "Originalregel" angeben, werden die Originalstile die Startstile überschreiben.

Um den Startstil für das Popover mit der verschachtelten Methode festzulegen, können Sie den `@starting-style`-Block innerhalb der "Originalregel" verschachteln:

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

Es ist wichtig zu verstehen, dass ein Element von seinen `@starting-style`-Stilen übergehen wird, wenn es zum ersten Mal im DOM gerendert wird oder wenn es von {{cssxref("display", "display: none")}} zu einem sichtbaren Wert wechselt. Wenn es von seinem ersten sichtbaren Zustand zurückwechselt, wird es die `@starting-style`-Stile nicht mehr verwenden, da es jetzt im DOM sichtbar ist. Stattdessen wechselt es zurück zu den Stilen, die für den Standardzustand dieses Elements existieren.

Tatsächlich gibt es in diesen Situationen drei Stilzustände zu verwalten – Startstilzustand, Übergangszustand und Standardzustand. Es ist möglich, dass die "zu" und "von" Übergänge in solchen Fällen unterschiedlich sind. Sie können einen Beweis dafür in unserem Beispiel [Demonstration of when starting styles are used](#demonstration_of_when_starting_styles_are_used) unten sehen.

## Formale Syntax

{{CSSSyntaxRaw(`@starting-style = @starting-style { <rule-list> }`)}}

## Beispiele

### Grundlegende Verwendung von @starting-style

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

In diesem Beispiel wird eine Schaltfläche gedrückt, um ein {{htmlelement("div")}}-Element zu erstellen, ihm eine `class` von `showing` zu geben und es dem DOM hinzuzufügen.

`showing` hat einen `@starting-style` von `background-color: red` und einen Stil von `background-color: blue`, zu dem es übergeht. Der Standard-`div`-Regelsatz enthält `background-color: yellow` und ist auch dort, wo der `transition` gesetzt wird.

Wenn das `<div>` zum ersten Mal dem DOM hinzugefügt wird, sehen Sie, wie der Hintergrund von rot zu blau übergeht. Nach einem Timeout entfernen wir die `showing`-Klasse vom `<div>` über JavaScript. An diesem Punkt wechselt es von blau zurück zu gelb, nicht rot. Dies beweist, dass die Startstile nur verwendet werden, wenn das Element erstmals im DOM gerendert wird. Sobald es erschienen ist, wechselt das Element zurück zu dem Standardstil, der darauf gesetzt ist.

Nach einem weiteren Timeout entfernen wir dann das `<div>` vollständig aus dem DOM, um den Anfangszustand des Beispiels zurückzusetzen, damit es erneut ausgeführt werden kann.

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

### Animierung eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) mithilfe von [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) animiert. Grundlegende Ein- und Ausblendeanimationen werden mithilfe der {{CSSxRef("transition")}}-Eigenschaft bereitgestellt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut als Popover deklariert wird, und ein {{htmlelement("button")}}-Element, das als Steuerungselement für die Anzeige des Popovers über sein [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut ausgewiesen ist.

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

Um dies zu erreichen, haben wir einen Startzustand für diese Eigenschaften im Standard-verborgenen Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die {{cssxref(":popover-open")}}-Pseudoklasse) festgelegt.

Wir setzen dann eine {{cssxref("transition")}}-Eigenschaft, um zwischen den beiden Zuständen zu animieren. Ein Startzustand für die Animation ist innerhalb einer `@starting-style`-@regel enthalten, um die Einblendanimation zu aktivieren.

Da das animierte Element in den {{Glossary("top_layer", "Top-Layer")}} befördert wird, wenn es angezeigt wird, und aus diesem entfernt wird, wenn es verborgen wird (mit {{cssxref("display", "display: none")}}), sind einige zusätzliche Schritte erforderlich, um sicherzustellen, dass die Animation in beide Richtungen funktioniert:

- `display` wird der Liste der übergangenen Elemente hinzugefügt, um sicherzustellen, dass das animierte Element während sowohl der Ein- als auch der Ausblendeanimation sichtbar ist (auf `display: block` oder einen anderen sichtbaren `display`-Wert gesetzt). Ohne dies wäre die Ausblendeanimation nicht sichtbar; das Popover würde einfach verschwinden. Beachten Sie, dass der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} ebenfalls im Kürzel gesetzt wird, um die Animation zu aktivieren.
- {{cssxref("overlay")}} wird der Liste der übergangenen Elemente hinzugefügt, um sicherzustellen, dass das Entfernen des Elements aus dem Top-Layer bis zum Ende der Animation aufgeschoben wird. Dies macht keinen großen Unterschied bei Animationen wie dieser, aber in komplexeren Fällen kann dies dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht glatt oder effektiv ist. Auch hier ist `transition-behavior: allow-discrete` in diesem Fall erforderlich, damit die Animation stattfinden kann.

> [!NOTE]
> Wir haben auch eine Transition auf der {{cssxref("::backdrop")}} hinzugefügt, die hinter dem Popover erscheint, wenn es geöffnet wird, um eine angenehme Verdunkelungsanimation zu bieten. `[popover]:popover-open::backdrop` wird verwendet, um das Backdrop zu selektieren, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Animating a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover jedes Mal, wenn die Einblendtransition stattfindet, von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standard-`[popover]`-Zustand.

> [!NOTE]
> Ein Beispiel, das das Übergang eines {{htmlelement("dialog")}}-Elements und seines Backdrops beim Anzeigen und Verbergen zeigt, finden Sie auf der `<dialog>`-Referenzseite – siehe [Transitioning dialog elements](/de/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements).

### Übergang von Elementen beim Hinzufügen und Entfernen aus dem DOM

Dieses Beispiel enthält eine Schaltfläche, die, wenn gedrückt, neue Elemente zu einem {{htmlelement("section")}}-Container hinzufügt. Jedes Element enthält wiederum eine verschachtelte Schaltfläche, die, wenn gedrückt, das Element entfernt. Dieses Beispiel zeigt, wie Übergänge verwendet werden können, um Elemente bei ihrem Hinzufügen oder Entfernen aus dem DOM zu animieren.

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

Wenn die Schaltfläche "Neue Spalte erstellen" geklickt wird, wird die `createColumn()`-Funktion aufgerufen. Diese erstellt ein {{htmlelement("div")}}-Element mit einer zufällig generierten Hintergrundfarbe und ein {{htmlelement("button")}}-Element zum Schließen des `<div>`. Es fügt dann das `<button>` dem `<div>` und das `<div>` dem `<section>`-Container hinzu.

Wir fügen dann einen Ereignislistener zur Schaltfläche zum Schließen über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Das Klicken auf die Schaltfläche zum Schließen bewirkt zwei Dinge:

- Fügt die `fade-out`-Klasse dem `<div>` hinzu. Das Hinzufügen der Klasse löst die Ausblendeanimation aus, die in dieser Klasse definiert ist.
- Entfernt das `<div>` nach einer Verzögerung von 1000ms. Die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Funktion verzögert das Entfernen des `<div>` aus dem DOM (über [`Element.remove()`](/de/docs/Web/API/Element/remove)), bis die Animation endet.

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

Um die {{cssxref("opacity")}} und {{cssxref("scale")}} jedes `<div>` zu animieren, wenn es dem DOM hinzugefügt wird, und dann die Animation umzukehren, wenn es aus dem DOM entfernt wird, gehen wir wie folgt vor:

- Legen Sie den Endzustand der Eigenschaften, die wir übergehen möchten, in der `div { ... }`-Regel fest.
- Geben Sie den Anfangszustand an, von dem aus die Eigenschaften innerhalb eines `@starting-style`-Blocks übergegangen werden sollen.
- Geben Sie die Ausblendeanimation in der `.fade-out`-Regel an – dies ist die Klasse, die das JavaScript den `<div>`-Elementen zuweist, wenn ihre Schaltflächen zum Schließen gedrückt werden. Neben dem Setzen der Endzustände von `opacity` und `scale` setzen wir auch [`display: none`](/de/docs/Web/CSS/display) auf den `<div>`s – wir möchten, dass sie sofort nicht mehr verfügbar sind, wenn sie aus der Benutzeroberfläche entfernt werden.
- Geben Sie die {{cssxref("transition")}}-Liste innerhalb der `div { ... }`-Regel an, um `opacity`, `scale` und `display` zu animieren. Beachten Sie, dass für `display` auch der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} im Kürzel gesetzt wird, damit er animiert wird.

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
- [Vier neue CSS-Funktionen für reibungslose Ein- und Ausblendanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
