---
title: "@starting-style"
slug: Web/CSS/@starting-style
l10n:
  sourceCommit: a3eec14af0580dad6eae65980686cee6cafc2c68
---

Die **`@starting-style`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um Startwerte für Eigenschaften zu definieren, die auf ein Element gesetzt werden, von dem Sie möchten, dass es beim ersten Stilupdate des Elements einen Übergang macht, z. B. wenn ein Element zum ersten Mal auf einer zuvor geladenen Seite angezeigt wird.

## Syntax

Die `@starting-style`-Regel kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block, in dem Fall enthält sie ein oder mehrere Regelsätze, die Startstil-Deklarationen definieren und die Elemente auswählen, auf die sie angewendet werden:

   ```css
   @starting-style {
     /* rulesets */
   }
   ```

2. Verschachtelt innerhalb eines vorhandenen Regelsatzes, in dem Fall enthält sie eine oder mehrere Deklarationen, die Startwerte für die bereits durch diesen Regelsatz ausgewählten Elemente definieren:

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

Um unerwartetes Verhalten zu vermeiden, werden [CSS-Transitions](/de/docs/Web/CSS/CSS_transitions) standardmäßig nicht bei einem anfänglichen Stilupdate eines Elements ausgelöst oder wenn sich der {{CSSxRef("display")}}-Typ von `none` zu einem anderen Wert ändert. Um Übergänge beim ersten Stilupdate zu ermöglichen, sind `@starting-style`-Regeln erforderlich. Sie bieten Startstile für Elemente, die keinen vorherigen Zustand haben und definieren die Eigenschaftswerte, von denen aus der Übergang erfolgen soll.

`@starting-style` ist besonders nützlich beim Erstellen von Ein- und Ausblende-Transitionen für Elemente, die in der {{Glossary("top_layer", "oberen Schicht")}} angezeigt werden (wie [Popovers](/de/docs/Web/API/Popover_API) und modale {{htmlelement("dialog")}}s), Elemente, die von und zu `display: none` wechseln, und Elemente, die dem DOM erstmals hinzugefügt oder daraus entfernt werden.

> [!NOTE]
> `@starting-style` ist nur für CSS-Übergänge relevant. Wenn Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) zur Implementierung solcher Effekte verwenden, wird `@starting-style` nicht benötigt. Sehen Sie sich [Using CSS animations](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel an.

Es gibt zwei Möglichkeiten, `@starting-style` zu verwenden: als eigenständige Regel oder innerhalb eines Regelsatzes verschachtelt.

Betrachten wir ein Szenario, in dem wir ein [Popover](/de/docs/Web/API/Popover_API) animieren möchten, wenn es angezeigt wird (d.h. wenn es in die obere Schicht hinzugefügt wird). Die "Originalregel", die die Stile für das geöffnete Popover angibt, könnte ungefähr so aussehen (siehe das [Popover-Beispiel](#animieren_eines_popovers) unten):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Um die Startwerte der Popover-Eigenschaften anzugeben, die mit der ersten Methode animiert werden sollen, fügen Sie einen eigenständigen `@starting-style`-Block in Ihr CSS ein:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> Die `@starting-style` At-Regel und die "Originalregel" haben die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity). Um sicherzustellen, dass die Startstile angewendet werden, fügen Sie die `@starting-style` At-Regel _nach_ der "Originalregel" ein. Wenn Sie die `@starting-style` At-Regel vor der "Originalregel" angeben, überschreiben die Originalstile die Startstile.

Um den Startstil für das Popover mit der verschachtelten Methode anzugeben, können Sie den `@starting-style`-Block in die "Originalregel" einfügen:

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

Es ist wichtig zu verstehen, dass ein Element von seinen `@starting-style`-Stilen übergeht, wenn es zum ersten Mal im DOM gerendert wird oder wenn es sich von {{cssxref("display", "display: none")}} zu einem sichtbaren Wert ändert. Wenn es von seinem anfänglichen sichtbaren Zustand zurückkehrt, wird es die `@starting-style`-Stile nicht mehr verwenden, da es nun im DOM sichtbar ist. Stattdessen wird es zu den Stilen zurückkehren, die für den Standardzustand dieses Elements existieren.

Tatsächlich gibt es in diesen Situationen drei Stilzustände zu verwalten – den Startstilzustand, den übergangenen Zustand und den Standardzustand. Es ist möglich, dass sich die "zu" und "von" Übergänge in solchen Fällen unterscheiden. Sie können einen Beweis dafür in unserem [Demonstration of when starting styles are used](#demonstration_der_verwendung_von_startstilen)-Beispiel unten sehen.

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

### Demonstration der Verwendung von Startstilen

In diesem Beispiel wird ein Button gedrückt, um ein {{htmlelement("div")}}-Element zu erstellen, ihm eine `class` von `showing` zu geben und es dem DOM hinzuzufügen.

`showing` hat einen `@starting-style` von `background-color: red` und einen Stil von `background-color: blue`, zu dem es übergehen soll. Der Standard-`div`-Regelsatz enthält `background-color: yellow`, und dort wird auch der `transition` gesetzt.

Wenn das `<div>` zum ersten Mal dem DOM hinzugefügt wird, sehen Sie, dass der Hintergrund von Rot zu Blau übergeht. Nach einem Timeout entfernen wir die `showing`-Klasse aus dem `<div>` über JavaScript. Zu diesem Zeitpunkt geht es von Blau zurück zu Gelb über, nicht Rot. Dies beweist, dass die Startstile nur verwendet werden, wenn das Element zum ersten Mal im DOM gerendert wird. Sobald es erschienen ist, kehrt das Element zu dem Standardstil zurück, der darauf gesetzt ist.

Nach einem weiteren Timeout entfernen wir das `<div>` vollständig aus dem DOM, um den Anfangszustand des Beispiels zurückzusetzen, damit es erneut ausgeführt werden kann.

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

Der Code rendert sich wie folgt:

{{ EmbedLiveSample("Demonstration of when starting styles are used", "100%", "150") }}

### Animieren eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) mit [CSS-Transitions](/de/docs/Web/CSS/CSS_transitions) animiert. Grundlegende Ein- und Ausblende-Animationen werden mithilfe der {{CSSxRef("transition")}}-Eigenschaft bereitgestellt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut deklariert wurde, und ein {{htmlelement("button")}}-Element, das als Anzeigesteuerung des Popovers mit seinem [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut festgelegt ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

In diesem Beispiel möchten wir zwei Eigenschaften animieren: {{cssxref("opacity")}} und {{cssxref("transform")}} (insbesondere eine horizontale Skalierungs-Transformation), um das Popover ein- und auszublenden sowie horizontal zu vergrößern und zu verkleinern.

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

Um dies zu erreichen, haben wir einen Startzustand für diese Eigenschaften im standardmäßig ausgeblendeten Zustand des Popover-Elements gesetzt (ausgewählt über `[popover]`), und einen Endzustand im geöffneten Zustand des Popovers (ausgewählt über die {{cssxref(":popover-open")}}-Pseudo-Klasse).

Wir setzen dann eine {{cssxref("transition")}}-Eigenschaft, um zwischen den beiden Zuständen zu animieren. Ein Anfangszustand für die Animation ist innerhalb einer `@starting-style`-At-Regel enthalten, um die Einstiegsanimation zu aktivieren.

Weil das animierte Element in die {{Glossary("top_layer", "oberste Schicht")}} befördert wird, wenn es angezeigt wird und aus der obersten Schicht entfernt wird, wenn es ausgeblendet wird (mit {{cssxref("display", "display: none")}}), sind einige zusätzliche Schritte erforderlich, um sicherzustellen, dass die Animation in beide Richtungen funktioniert:

- `display` wird zur Liste der übergangenen Elemente hinzugefügt, um sicherzustellen, dass das animierte Element während beider Ein- und Ausblende-Animationen sichtbar ist (auf `display: block` oder einen anderen sichtbaren `display`-Wert gesetzt). Ohne dies wäre die Ausblende-Animation nicht sichtbar; in der Tat würde das Popover einfach verschwinden. Beachten Sie, dass der {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}}-Wert auch im Shorthand gesetzt ist, um die Animation zu aktivieren.
- {{cssxref("overlay")}} wird zur Liste der übergangenen Elemente hinzugefügt, um sicherzustellen, dass die Entfernung des Elements aus der obersten Schicht bis zum Ende der Animation aufgeschoben wird. Dies macht in solchen Animationen keinen großen Unterschied, aber in komplexeren Fällen kann das Nicht-Durchführen dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, wodurch die Animation nicht reibungslos oder effektiv ist. Auch hier ist `transition-behavior: allow-discrete` erforderlich, damit die Animation stattfindet.

> [!NOTE]
> Wir haben auch einen Übergang auf der {{cssxref("::backdrop")}} hinzugefügt, die erscheint, wenn das Popover geöffnet wird, um eine schöne Verdunkelungsanimation zu bieten. `[popover]:popover-open::backdrop` wird verwendet, um den Hintergrund auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code rendert sich wie folgt:

{{ EmbedLiveSample("Animating a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover jedes Mal bei Eintritt der Übergangsanimation von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open`-Zustand zurück zu seinem Standard-`[popover]`-Zustand.

> [!NOTE]
> Sie finden ein Beispiel, das das Übergang einer {{htmlelement("dialog")}}-Element beschreibt, sowie dessen Hintergrund, wenn es angezeigt und ausgeblendet wird, auf der `<dialog>`-Referenzseite — siehe [Transitioning dialog elements](/de/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements).

### Übergang von Elementen bei Hinzufügung und Entfernung aus dem DOM

Dieses Beispiel enthält einen Button, der beim Drücken neue Elemente zu einem {{htmlelement("section")}}-Container hinzufügt. Jedes Element enthält wiederum einen eingebetteten Button, der beim Drücken das Element entfernt. Dieses Beispiel zeigt, wie Sie Übergänge verwenden, um Elemente zu animieren, wenn sie dem DOM hinzugefügt oder daraus entfernt werden.

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

Wenn der "Create new column"-Button angeklickt wird, wird die Funktion `createColumn()` aufgerufen. Diese erstellt ein {{htmlelement("div")}}-Element mit einer zufällig generierten Hintergrundfarbe und einem {{htmlelement("button")}}-Element, um das `<div>` zu schließen. Dann fügt es das `<button>` dem `<div>` und das `<div>` dem `<section>`-Container hinzu.

Wir fügen dann ein Event-Listener für den Schließen-Button über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Das Klicken auf den Schließen-Button bewirkt zwei Dinge:

- Fügt die `fade-out` Klasse dem `<div>` hinzu. Das Hinzufügen der Klasse löst die Ausblende-Animation aus, die auf dieser Klasse gesetzt ist.
- Entfernt das `<div>` nach einer Verzögerung von 1000ms. Das [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verzögert die Entfernung des `<div>` aus dem DOM (über [`Element.remove()`](/de/docs/Web/API/Element/remove)) bis nach dem Ende der Animation.

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

Um die {{cssxref("opacity")}} und {{cssxref("scale")}} jedes `<div>` zu animieren, während es dem DOM hinzugefügt wird und dann die Animation zu umkehren, wenn es aus dem DOM entfernt wird, gehen wir wie folgt vor:

- Geben den Endzustand der Eigenschaften an, die wir im `div { ... }`-Regel übergehen möchten.
- Geben den Startzustand an, von dem aus die Eigenschaften im `@starting-style`-Block übergehen sollen.
- Spezifizieren die Ausblende-Animation innerhalb der `.fade-out`-Regel — das ist die Klasse, die das JavaScript den `<div>`-Elementen zuweist, wenn ihre Schaltflächen gedrückt werden. Neben dem Setzen der Endzustände von `opacity` und `scale`, setzen wir auch [`display: none`](/de/docs/Web/CSS/display) auf die `<div>`s — wir möchten, dass sie sofort nicht mehr verfügbar werden, wenn sie aus der Benutzeroberfläche entfernt werden.
- Spezifizieren die {{cssxref("transition")}}-Liste innerhalb der `div { ... }`-Regel, um `opacity`, `scale` und `display` zu animieren. Beachten Sie, dass für `display` der {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}}-Wert auch im Shorthand festgelegt ist, damit er animiert wird.

#### Ergebnis

Das Endergebnis sieht so aus:

{{ EmbedLiveSample("Transitioning elements on DOM addition and removal", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Transitions](/de/docs/Web/CSS/CSS_transitions) Modul
- {{cssxref("overlay")}}
- {{cssxref("transition-behavior")}}
- [`CSSStartingStyleRule`](/de/docs/Web/API/CSSStartingStyleRule)
- [Four new CSS features for smooth entry and exit animations](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
