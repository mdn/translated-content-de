---
title: "@starting-style"
slug: Web/CSS/Reference/At-rules/@starting-style
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`@starting-style`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird verwendet, um Anfangswerte für Eigenschaften festzulegen, die von einem Element bei seiner ersten Stilaktualisierung verwendet werden sollen, also wenn ein Element erstmals auf einer zuvor geladenen Seite angezeigt wird.

## Syntax

Die `@starting-style` At-Regel kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block, in diesem Fall enthält er ein oder mehrere Regelsets, die Anfangsstil-Deklarationen definieren und die Elemente auswählen, auf die sie angewendet werden:

   ```css
   @starting-style {
     /* rulesets */
   }
   ```

2. Verschachtelt innerhalb eines bestehenden Regelsets, in diesem Fall enthält er ein oder mehrere Deklarationen, die Anfangswerte für die Eigenschaften der bereits durch dieses Regelset ausgewählten Elemente definieren:

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

Um unerwartetes Verhalten zu vermeiden, werden [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) standardmäßig nicht bei der anfänglichen Stilaktualisierung eines Elements ausgelöst, oder wenn sich der {{CSSxRef("display")}}-Typ des Elements von `none` zu einem anderen Wert ändert. Um Übergänge beim ersten Stil zu ermöglichen, sind `@starting-style` Regeln erforderlich. Sie liefern Anfangsstile für Elemente, die keinen vorherigen Zustand haben, und definieren die Eigenschaftswerte, von denen aus der Übergang erfolgen soll.

`@starting-style` ist besonders nützlich, um Eingangs- und Ausgangsübergänge für Elemente zu erstellen, die in einer {{Glossary("top_layer", "obersten Ebene")}} angezeigt werden (wie z.B. [Popovers](/de/docs/Web/API/Popover_API) und modale {{htmlelement("dialog")}}s) oder Elemente, die in den und aus dem `display: none`-Zustand wechseln, sowie für Elemente, wenn sie dem DOM hinzugefügt oder aus ihm entfernt werden.

> [!NOTE] > `@starting-style` ist nur für CSS-Übergänge relevant. Wenn Sie [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) verwenden, um solche Effekte zu implementieren, ist `@starting-style` nicht erforderlich. Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using) für ein Beispiel.

Es gibt zwei Möglichkeiten, `@starting-style` zu verwenden: als eigenständige Regel oder verschachtelt innerhalb eines Regelsets.

Betrachten wir ein Szenario, in dem wir ein [Popover](/de/docs/Web/API/Popover_API) animieren möchten, wenn es angezeigt wird (d.h. wenn es zur obersten Ebene hinzugefügt wird). Die "Originalregel", die die Stile für das geöffnete Popover angibt, könnte folgendermaßen aussehen (siehe das [Popover-Beispiel](#animieren_eines_popovers) unten):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Um die Anfangswerte der Popover-Eigenschaften, die animiert werden sollen, mit der ersten Methode anzugeben, fügen Sie einen eigenständigen `@starting-style` Block in Ihr CSS ein:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> Die `@starting-style` At-Regel und die "Originalregel" haben die gleiche [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity). Um sicherzustellen, dass die Anfangsstile angewendet werden, platzieren Sie die `@starting-style` At-Regel _nach_ der "Originalregel". Wenn Sie die `@starting-style` At-Regel vor der "Originalregel" angeben, werden die ursprünglichen Stile die Anfangsstile überschreiben.

Um den Anfangsstil für das Popover mit der verschachtelten Methode anzugeben, können Sie den `@starting-style` Block innerhalb der "Originalregel" verschachteln:

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

Es ist wichtig zu verstehen, dass ein Element von seinen `@starting-style` Stilen aus Übergang nimmt, wenn es erstmals im DOM gerendert wird oder wenn es von {{cssxref("display", "display: none")}} zu einem sichtbaren Wert wechselt. Wenn es aus seinem anfänglichen sichtbaren Zustand zurückwechselt, wird es die `@starting-style` Stile nicht mehr verwenden, da es nun im DOM sichtbar ist. Stattdessen wird es zu den Stilen zurückkehren, die für den Standardzustand dieses Elements existieren.

Tatsächlich gibt es in diesen Situationen drei Stilzustände, die verwaltet werden müssen: der Anfangsstil-Zustand, der übergangene Zustand und der Standardzustand. In solchen Fällen können die "Zu-" und "Von-" Übergänge unterschiedlich sein. Sie können ein Beispiel dafür in unserem [Beispiel, wann Anfangsstile verwendet werden](#beispiel,_wann_anfangsstile_verwendet_werden) unten sehen.

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

### Beispiel, wann Anfangsstile verwendet werden

In diesem Beispiel wird ein Button gedrückt, um ein {{htmlelement("div")}} Element zu erstellen, ihm eine `class` von `showing` zu geben und es dem DOM hinzuzufügen.

`showing` hat einen `@starting-style` von `background-color: red` und einen Stil, der zu `background-color: blue` übergeht. Das Standard-`div`-Regelset enthält `background-color: yellow` und ist auch dort, wo der `transition` festgelegt ist.

Wenn das `<div>` erstmals dem DOM hinzugefügt wird, sehen Sie, wie sich der Hintergrund von rot zu blau ändert. Nach einer Zeitüberschreitung entfernen wir die `showing`-Klasse vom `<div>` über JavaScript. An diesem Punkt wechselt es von blau zurück zu gelb, nicht zu rot. Dies beweist, dass die Anfangsstile nur beim ersten Rendering des Elements im DOM verwendet werden. Wenn es einmal erschienen ist, kehrt das Element zu dem auf ihm festgelegten Standardstil zurück.

Nachdem das `<div>` vollständig aus dem DOM entfernt wurde, wird der Anfangszustand des Beispiels zurückgesetzt, sodass es erneut ausgeführt werden kann.

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

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) mithilfe von [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) animiert. Grundlegende Eingangs- und Ausgangsanimationen werden mit der {{CSSxRef("transition")}}-Eigenschaft bereitgestellt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut deklariert ist, und ein {{htmlelement("button")}} Element, das als Anzeige-Steuerelement für das Popover mit seinem [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) Attribut festgelegt ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

In diesem Beispiel möchten wir zwei Eigenschaften animieren: {{cssxref("opacity")}} und {{cssxref("transform")}} (speziell ein horizontal skalierender Transform), um das Ein- und Ausblenden des Popovers sowie das horizontale Wachstum und Schrumpfen zu ermöglichen.

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

Um dies zu erreichen, haben wir einen Anfangszustand für diese Eigenschaften im standardmäßig verborgenen Zustand des Popover-Elements festgelegt (ausgewählt über `[popover]`), und einen Endzustand im offenen Zustand des Popovers (ausgewählt über die {{cssxref(":popover-open")}}-Pseudoklasse).

Wir haben dann eine {{cssxref("transition")}}-Eigenschaft festgelegt, um zwischen den beiden Zuständen zu animieren. Ein Anfangszustand für die Animation ist in einer `@starting-style` At-Regel enthalten, um die Eingangsanimation zu ermöglichen.

Da das animierte Element zur {{Glossary("top_layer", "obersten Ebene")}} gefördert wird, wenn es angezeigt wird, und aus der obersten Ebene entfernt wird, wenn es versteckt wird (mit {{cssxref("display", "display: none")}}), sind einige zusätzliche Schritte erforderlich, um sicherzustellen, dass die Animation in beide Richtungen funktioniert:

- `display` wird zur Liste der animierten Elemente hinzugefügt, um sicherzustellen, dass das animierte Element während der Eingangs- und Ausgangsanimation sichtbar ist (auf `display: block` oder einen anderen sichtbaren `display`-Wert gesetzt). Ohne dies wäre die Ausgangsanimation nicht sichtbar; tatsächlich würde das Popover einfach verschwinden. Beachten Sie, dass der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} auch im Kurzbefehl festgelegt wird, um die Animation zu aktivieren.
- {{cssxref("overlay")}} wird zur Liste der animierten Elemente hinzugefügt, um sicherzustellen, dass die Entfernung des Elements von der obersten Ebene verzögert wird, bis die Animation endet. Dies macht keinen großen Unterschied bei Animationen wie dieser, aber in komplexeren Fällen kann das Fehlen dieser Maßnahme dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht flüssig oder effektiv ist. Erneut ist `transition-behavior: allow-discrete` in diesem Fall erforderlich, damit die Animation stattfindet.

> [!NOTE]
> Wir haben auch einen Übergang auf dem {{cssxref("::backdrop")}} hinzugefügt, das hinter dem Popover erscheint, wenn es geöffnet wird, um eine schöne Verdunkelungsanimation zu bieten. `[popover]:popover-open::backdrop` wird verwendet, um das Backdrop auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Animating a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jeder Anzeige von `display: none` zu `display: block` wechseln, wechselt das Popover bei jedem Auftreten des Eingangsübergangs von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open`-Zustand zurück zum Standard-`[popover]`-Zustand.

> [!NOTE]
> Sie finden ein Beispiel, das das Übergangs-Verhalten eines {{htmlelement("dialog")}}-Elements und seines Backdrops zeigt, während es ein- und ausgeblendet wird, auf der `<dialog>`-Referenzseite — siehe [Übergangseffekte bei Dialogelementen](/de/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements).

### Übergang von Elementen bei DOM-Hinzufügung und -Entfernung

Dieses Beispiel enthält einen Button, der bei Drücken neue Elemente zu einem {{htmlelement("section")}} Container hinzufügt. Jedes Element enthält wiederum einen geschachtelten Button, der bei Drücken das Element entfernt. Dieses Beispiel zeigt, wie Übergänge verwendet werden, um Elemente zu animieren, wenn sie dem DOM hinzugefügt oder daraus entfernt werden.

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

Wenn der "Neue Spalte erstellen" Button geklickt wird, wird die Funktion `createColumn()` aufgerufen. Diese erstellt ein {{htmlelement("div")}} Element mit einer zufällig generierten Hintergrundfarbe und ein {{htmlelement("button")}} Element zum Schließen des `<div>`. Es fügt dann das `<button>` dem `<div>` und das `<div>` dem `<section>` Container hinzu.

Wir fügen dem Schließen-Button dann einen Event-Listener über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Das Klicken des Schließen-Buttons bewirkt zwei Dinge:

- Fügt die `fade-out` Klasse zum `<div>` hinzu. Das Hinzufügen der Klasse löst die Ausgangsanimation aus, die auf dieser Klasse festgelegt ist.
- Entfernt das `<div>` nach einer Verzögerung von 1000ms. Die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) Funktion verzögert die Entfernung des `<div>` aus dem DOM (über [`Element.remove()`](/de/docs/Web/API/Element/remove)), bis die Animation endet.

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

Um die {{cssxref("opacity")}} und {{cssxref("scale")}} jedes `<div>` zu animieren, sobald es dem DOM hinzugefügt wird und dann die Animation umzukehren, wenn es aus dem DOM entfernt wird, führen wir Folgendes durch:

- Wir geben den Endzustand der Eigenschaften, die wir übergehen wollen, in der Regel `div { ... }` an.
- Wir geben den Anfangszustand, von dem aus die Eigenschaften übergehen sollen, in einem `@starting-style` Block an.
- Wir geben die Ausgangsanimation in der `.fade-out` Regel an — dies ist die Klasse, die das JavaScript den `<div>` Elementen zuweist, wenn ihre Schaltflächen gedrückt werden. Neben der Festlegung der `opacity`- und `scale`-Endzustände setzen wir auch [`display: none`](/de/docs/Web/CSS/Reference/Properties/display) auf die `<div>`s — wir möchten, dass sie unmittelbar nach ihrer Entfernung aus der Benutzeroberfläche nicht mehr zur Verfügung stehen.
- Wir geben die {{cssxref("transition")}} Liste in der Regel `div { ... }` an, um `opacity`, `scale` und `display` zu animieren. Beachten Sie, dass für `display` auch der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} im Kurzbefehl festgelegt ist, damit er animiert wird.

#### Ergebnis

Das Endergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Transitioning elements on DOM addition and removal", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Übergänge](/de/docs/Web/CSS/Guides/Transitions) Modul
- {{cssxref("overlay")}}
- {{cssxref("transition-behavior")}}
- [`CSSStartingStyleRule`](/de/docs/Web/API/CSSStartingStyleRule)
- [Vier neue CSS-Funktionen für reibungslose Eingangs- und Ausgangsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
