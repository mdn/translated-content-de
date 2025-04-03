---
title: "@starting-style"
slug: Web/CSS/@starting-style
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die **`@starting-style`** [CSS](/de/docs/Web/CSS) [at-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um Startwerte für Eigenschaften festzulegen, die auf ein Element angewendet werden, von dem aus Sie eine Transition durchführen möchten, wenn das Element seine erste Stilaktualisierung erhält, d.h. wenn ein Element erstmals auf einer zuvor geladenen Seite angezeigt wird.

## Syntax

Die `@starting-style` at-Regel kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block, in diesem Fall enthält er einen oder mehrere Regelsets, die Startstil-Deklarationen definieren und die Elemente auswählen, auf die sie angewendet werden:

   ```css
   @starting-style {
     rulesets
   }
   ```

2. Verschachtelt innerhalb eines bestehenden Regelsets, in diesem Fall enthält er eine oder mehrere Deklarationen, die Startwerte der Eigenschaften für die durch dieses Regelset bereits ausgewählten Elemente definieren:

   ```css
   selector { /* existing ruleset */
     /* ... */

     @starting-style {
       declarations
     }
   }
   ```

## Beschreibung

Um unerwartetes Verhalten zu vermeiden, werden [CSS-Transitions](/de/docs/Web/CSS/CSS_transitions) standardmäßig nicht bei der ersten Stilaktualisierung eines Elements ausgelöst oder wenn sich sein {{CSSxRef("display")}}-Typ von `none` zu einem anderen Wert ändert. Um erste Stil-Transitions zu ermöglichen, sind `@starting-style` Regeln erforderlich. Sie bieten Startstile für Elemente, die keinen vorherigen Zustand haben, und definieren die Eigenschaftswerte, von denen aus die Transition erfolgen soll.

`@starting-style` ist besonders nützlich, wenn Sie Ein- und Austritts-Transitions für Elemente erstellen, die in der {{Glossary("top_layer", "obersten Ebene")}} angezeigt werden (wie [Popovers](/de/docs/Web/API/Popover_API) und modale {{htmllement("dialog")}}e), Elemente, die zu und von `display: none` wechseln, und Elemente, die erstmals zum DOM hinzugefügt oder daraus entfernt werden.

> **Note:** `@starting-style` ist nur relevant für CSS-Transitions. Wenn Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) verwenden, um solche Effekte zu implementieren, ist `@starting-style` nicht erforderlich. Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Es gibt zwei Möglichkeiten, `@starting-style` zu verwenden: als eigenständige Regel oder verschachtelt innerhalb eines Regelsets.

Betrachten wir ein Szenario, in dem wir ein [Popover](/de/docs/Web/API/Popover_API) animieren möchten, wenn es angezeigt wird (also wenn es zur obersten Ebene hinzugefügt wird). Die "ursprüngliche Regel", die die Stile für das geöffnete Popover spezifiziert, könnte in etwa so aussehen (siehe das [Popover-Beispiel](#animieren_eines_popovers) unten):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Um die Startwerte der zu animierenden Eigenschaften des Popovers mit der ersten Methode anzugeben, fügen Sie einen eigenständigen `@starting-style` Block in Ihrem CSS ein:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> Die `@starting-style` at-Regel und die "ursprüngliche Regel" haben die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity). Um sicherzustellen, dass die Startstile angewendet werden, fügen Sie die `@starting-style` at-Regel _nach_ der "ursprünglichen Regel" hinzu. Wenn Sie die `@starting-style` at-Regel vor der "ursprünglichen Regel" angeben, überschreiben die ursprünglichen Stile die Startstile.

Um den Startstil für das Popover mit der verschachtelten Methode anzugeben, können Sie den `@starting-style` Block in die "ursprüngliche Regel" einfügen:

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

Es ist wichtig zu verstehen, dass ein Element von seinen `@starting-style` Stilen übergeht, wenn es erstmals im DOM gerendert wird oder wenn es von {{cssxref("display", "display: none")}} zu einem sichtbaren Wert wechselt. Wenn es von seinem anfänglichen sichtbaren Zustand zurückwechselt, wird es die `@starting-style` Stile nicht mehr verwenden, da es jetzt im DOM sichtbar ist. Stattdessen geht es zu welchen Stilen auch immer zurück, die für den Standardzustand dieses Elements existieren.

Im Wesentlichen gibt es in diesen Situationen drei Stilzustände zu verwalten — den Startstil-Zustand, den Übergangszustand und den Standardzustand. Es ist möglich, dass die "hin-zu" und "weg-von" Transitions in solchen Fällen unterschiedlich sind. Sie können einen Beweis dafür in unserem [Demonstration, wann Startstile verwendet werden](#demonstration,_wann_startstile_verwendet_werden) Beispiel unten sehen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von @starting-style

Transitionieren der {{cssxref("background-color")}} eines Elements von transparent zu grün, wenn es erstmals gerendert wird:

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

Transitionieren der {{cssxref("opacity")}} eines Elements, wenn es seinen {{cssxref("display")}} Wert zu oder von `none` ändert:

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

In diesem Beispiel wird eine Schaltfläche gedrückt, um ein {{htmllement("div")}} Element zu erstellen, ihm eine `class` von `showing` zu geben und es zum DOM hinzuzufügen.

`showing` erhält ein `@starting-style` von `background-color: red` und einen Stil von `background-color: blue`, zu dem übergegangen werden soll. Die Standard `div` Regel enthält `background-color: yellow` und ist auch der Ort, an dem die `transition` festgelegt wird.

Wenn das `<div>` erstmals zum DOM hinzugefügt wird, sehen Sie, wie der Hintergrund von rot zu blau wechselt. Nach einem Timeout entfernen wir die `showing` Klasse mit JavaScript vom `<div>`. Zu diesem Zeitpunkt wechselt es von blau zurück zu gelb, nicht rot. Dies beweist, dass die Startstile nur verwendet werden, wenn das Element erstmals im DOM gerendert wird. Sobald es erschienen ist, wechselt das Element zurück zum Standardstil, der darauf gesetzt ist.

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

Der Code rendert wie folgt:

{{ EmbedLiveSample("Demonstration, wann Startstile verwendet werden", "100%", "150") }}

### Animieren eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) mithilfe von [CSS-Transitions](/de/docs/Web/CSS/CSS_transitions) animiert. Grundlegende Ein- und Austrittsanimationen werden mit der {{CSSxRef("transition")}} Eigenschaft bereitgestellt.

#### HTML

Das HTML enthält ein {{htmllement("div")}} Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Global_attributes/popover) Attribut deklariert und ein {{htmllement("button")}} Element, das als Popover-Anzeige-Steuerung mit seinem [popovertarget](/de/docs/Web/HTML/Element/button#popovertarget) Attribut ausgewiesen ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

In diesem Beispiel möchten wir zwei Eigenschaften animieren, {{cssxref("opacity")}} und {{cssxref("transform")}} (insbesondere eine horizontal skalierende Transformation), um das Popover beim Ein- und Ausblenden horizontal wachsen und schrumpfen zu lassen.

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

Um dies zu erreichen, haben wir einen Startzustand für diese Eigenschaften auf den Standard-verborgenen Zustand des Popover-Elements (ausgewählt über `[popover]`) gesetzt und einen Endzustand auf den offenen Zustand des Popovers (ausgewählt über die {{cssxref(":popover-open")}} Pseudoklasse).

Wir setzen dann eine {{cssxref("transition")}} Eigenschaft, um zwischen den beiden Zuständen zu animieren. Ein Startzustand für die Animation ist in einer `@starting-style` at-Regel enthalten, um die Einfahrtsanimation zu ermöglichen.

Da das animierte Element in die {{Glossary("top_layer", "oberste Ebene")}} befördert wird, wenn es angezeigt wird, und aus der obersten Ebene entfernt wird, wenn es versteckt wird (mit {{cssxref("display", "display: none")}}), sind einige zusätzliche Schritte erforderlich, um sicherzustellen, dass die Animation in beide Richtungen funktioniert:

- `display` wird zur Liste der animierten Elemente hinzugefügt, um sicherzustellen, dass das animierte Element während der Ein- und Austrittsanimationen sichtbar ist (auf `display: block` oder einen anderen sichtbaren `display` Wert gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; im Effekt würde das Popover einfach verschwinden. Beachten Sie, dass der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} auch in der Kurzform gesetzt wird, um die Animation zu aktivieren.
- {{cssxref("overlay")}} wird zur Liste der animierten Elemente hinzugefügt, um sicherzustellen, dass die Entfernung des Elements aus der obersten Ebene verzögert wird, bis die Animation endet. Dies macht keinen großen Unterschied für Animationen wie diese, aber in komplexeren Fällen kann das Unterlassen dieser Maßnahme dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht gleichmäßig oder effektiv ist. Auch hier ist `transition-behavior: allow-discrete` erforderlich, damit die Animation erfolgt.

> [!NOTE]
> Wir haben auch eine Transition auf das {{cssxref("::backdrop")}}, das hinter dem Popover erscheint, wenn es geöffnet wird, um eine schöne Abdunklungsanimation zu bieten. `[popover]:popover-open::backdrop` wird verwendet, um das Backdrop auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code rendert wie folgt:

{{ EmbedLiveSample("Animieren eines Popovers", "100%", "200") }}

> [!NOTE]
> Da sich Popovers bei jedem Anzeigen von `display: none` zu `display: block` ändern, wechselt das Popover bei jedem Eintritt von seinen `@starting-style` Stilen zu seinen `[popover]:popover-open` Stilen. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open` Zustand zum Standard `[popover]` Zustand.

> [!NOTE]
> Ein Beispiel, das das Transitionieren eines {{htmllement("dialog")}} Elements und seines Backdrops zeigt, während es ein- und ausgeblendet wird, finden Sie auf der `<dialog>` Referenzseite — siehe [Transitionierende Dialogelemente](/de/docs/Web/HTML/Element/dialog#transitioning_dialog_elements).

### Transitionierenden von Elementen bei DOM-Hinzufügung und -Entfernung

Dieses Beispiel enthält eine Schaltfläche, die beim Drücken neue Elemente zu einem {{htmllement("section")}} Container hinzufügt. Jedes Element enthält seinerseits eine verschachtelte Schaltfläche, die beim Drücken das Element entfernt. Dieses Beispiel demonstriert, wie Sie Transitions verwenden können, um Elemente zu animieren, wenn sie dem DOM hinzugefügt oder daraus entfernt werden.

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

Wenn die Schaltfläche "Neue Spalte erstellen" geklickt wird, wird die Funktion `createColumn()` aufgerufen. Diese erstellt ein {{htmllement("div")}} Element mit einer zufällig generierten Hintergrundfarbe und einem {{htmllement("button")}} Element zum Schließen des `<div>`. Es hängt dann das `<button>` an das `<div>` und das `<div>` an den `<section>` Container.

Wir fügen dann einen Ereignislistener zum Schließen-Button über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Das Klicken auf den Schließen-Button bewirkt zwei Dinge:

- Fügt die `fade-out` Klasse zum `<div>` hinzu. Das Hinzufügen der Klasse löst die Austrittsanimation aus, die auf dieser Klasse eingestellt ist.
- Entfernt das `<div>` nach einer Verzögerung von 1000ms. [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verzögert die Entfernung des `<div>` vom DOM (über [`Element.remove()`](/de/docs/Web/API/Element/remove)), bis die Animation endet.

#### CSS

Wir fügen eine {{cssxref("transition")}} ein, die die {{cssxref("opacity")}} und {{cssxref("scale")}} jeder Spalte animiert, während sie hinzugefügt und entfernt werden:

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

Um die {{cssxref("opacity")}} und {{cssxref("scale")}} jeder `<div>` zu animieren, während sie dem DOM hinzugefügt und dann wieder entfernt wird, gehen wir folgendermaßen vor:

- Den Endzustand der Eigenschaften, die wir übergänge möchten, auf der `div { ... }` Regel festlegen.
- Den Startzustand, von dem aus die Eigenschaften übergehen sollen, in einem `@starting-style` Block festlegen.
- Die Austrittsanimation in der `.fade-out` Regel angeben — dies ist die Klasse, die das JavaScript den `<div>` Elementen zuweist, wenn ihre Schaltflächen zum Schließen gedrückt werden. Neben dem Setzen der `opacity` und `scale` Endzustände setzen wir auch [`display: none`](/de/docs/Web/CSS/display) auf die `<div>`s — wir möchten, dass sie sofort nicht mehr verfügbar sind, wenn sie aus der Benutzeroberfläche entfernt werden.
- Die {{cssxref("transition")}} Liste innerhalb der `div { ... }` Regel angeben, um `opacity`, `scale` und `display` zu animieren. Beachten Sie, dass für `display` der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} ebenfalls in der Kurzform gesetzt wird, damit es animiert wird.

#### Ergebnis

Das Endergebnis sieht so aus:

{{ EmbedLiveSample("Transitionierenden von Elementen bei DOM-Hinzufügung und -Entfernung", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS transitions](/de/docs/Web/CSS/CSS_transitions) Modul
- {{cssxref("overlay")}}
- {{cssxref("transition-behavior")}}
- [`CSSStartingStyleRule`](/de/docs/Web/API/CSSStartingStyleRule)
- [Vier neue CSS-Funktionen für reibungslose Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
