---
title: "@starting-style"
slug: Web/CSS/@starting-style
l10n:
  sourceCommit: 5a195171d06aee3d9c1c78d71c7f0c3a060f5263
---

{{CSSRef}}

Die **`@starting-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um Anfangswerte für Eigenschaften festzulegen, die auf ein Element angewendet werden, von dem Sie möchten, dass es von diesen Werten aus Übergänge macht, wenn das Element seine erste Stilaktualisierung erhält, d.h. wenn ein Element erstmals auf einer zuvor geladenen Seite angezeigt wird.

## Syntax

Die `@starting-style` At-Regel kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block, in diesem Fall enthält sie einen oder mehrere Regelsätze, die anfängliche Stildeklarationen definieren und die Elemente auswählen, auf die sie angewendet werden:

   ```css
   @starting-style {
     /* rulesets */
   }
   ```

2. Verschachtelt innerhalb eines bestehenden Regelsatzes, in diesem Fall enthält sie eine oder mehrere Deklarationen, die anfängliche Eigenschaftswerte für die Elemente definieren, die bereits von diesem Regelsatz ausgewählt wurden:

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

Um unerwartetes Verhalten zu vermeiden, werden [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) standardmäßig nicht bei einer anfänglichen Stilaktualisierung eines Elements ausgelöst oder wenn sich der {{CSSxRef("display")}}-Typ von `none` auf einen anderen Wert ändert. Um Übergänge beim ersten Stil zu ermöglichen, sind `@starting-style`-Regeln erforderlich. Sie bieten Anfangsstile für Elemente, die keinen vorherigen Zustand haben, indem sie die Eigenschaftswerte definieren, von denen aus der Übergang erfolgt.

`@starting-style` ist besonders nützlich bei der Erstellung von Ein- und Ausstiegstransitionen für Elemente, die in der {{Glossary("top_layer", "Top-Ebene")}} angezeigt werden (wie [Popovers](/de/docs/Web/API/Popover_API) und modale {{htmlelement("dialog")}}s), für Elemente, die von und zu `display: none` wechseln, und für Elemente, wenn sie erstmals zum DOM hinzugefügt oder daraus entfernt werden.

> **Note:** `@starting-style` ist nur für CSS-Übergänge relevant. Wenn Sie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) verwenden, um solche Effekte zu implementieren, wird `@starting-style` nicht benötigt. Siehe [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Es gibt zwei Möglichkeiten, `@starting-style` zu verwenden: als eigenständige Regel oder verschachtelt innerhalb eines Regelsatzes.

Betrachten wir ein Szenario, in dem wir ein [Popover](/de/docs/Web/API/Popover_API) animieren möchten, wenn es angezeigt wird (d.h. wenn es zur Top-Ebene hinzugefügt wird). Die "ursprüngliche Regel", die die Stile für das geöffnete Popover angibt, könnte in etwa so aussehen (siehe das [Popover-Beispiel](#animation_eines_popovers) unten):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Um die Anfangswerte der animierten Eigenschaften des Popovers mit der ersten Methode anzugeben, fügen Sie einen eigenständigen `@starting-style`-Block in Ihr CSS ein:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> Die `@starting-style`-At-Regel und die "ursprüngliche Regel" haben die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity). Um sicherzustellen, dass die Anfangsstile angewendet werden, fügen Sie die `@starting-style`-At-Regel _nach_ der "ursprünglichen Regel" ein. Wenn Sie die `@starting-style`-At-Regel vor der "ursprünglichen Regel" spezifizieren, überschreiben die ursprünglichen Stile die Anfangsstile.

Um den Anfangsstil für das Popover mit der verschachtelten Methode anzugeben, können Sie den `@starting-style`-Block in die "ursprüngliche Regel" einbetten:

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

Es ist wichtig zu verstehen, dass ein Element von seinen `@starting-style`-Stilen aus Übergänge macht, wenn es erstmals im DOM gerendert wird, oder wenn es von {{cssxref("display", "display: none")}} zu einem sichtbaren Wert übergeht. Wenn es von seinem anfänglichen sichtbaren Zustand zurückkehrt, wird es die `@starting-style`-Stile nicht mehr verwenden, da es jetzt im DOM sichtbar ist. Stattdessen wird es zu den Stilen zurückkehren, die für den Standardzustand dieses Elements existieren.

Tatsächlich gibt es in diesen Situationen drei Stilzustände zu verwalten: Anfangsstilzustand, Übergangszustand und Standardzustand. Es ist möglich, dass die "zu" und "von" Übergänge in solchen Fällen unterschiedlich sind. Sie können einen Beweis dafür in unserem [Nachweis, wann Anfangsstile verwendet werden](#demonstration,_wann_anfangsstile_verwendet_werden) Beispiel unten sehen.

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

### Demonstration, wann Anfangsstile verwendet werden

In diesem Beispiel wird ein Button gedrückt, um ein {{htmlelement("div")}}-Element zu erstellen, ihm eine `class` von `showing` zu geben und es zum DOM hinzuzufügen.

`showing` erhält ein `@starting-style` von `background-color: red` und einen Stil von `background-color: blue`, zu dem übergegangen wird. Der standardmäßige `<div>`-Regelsatz enthält `background-color: yellow` und ist auch der Ort, an dem der `transition`-Übergang festgelegt ist.

Wenn das `<div>` erstmals dem DOM hinzugefügt wird, sehen Sie, wie der Hintergrund von rot nach blau übergeht. Nach einem Timeout entfernen wir die `showing`-Klasse vom `<div>` mithilfe von JavaScript. Zu diesem Zeitpunkt übergeht es von blau zurück zu gelb, nicht rot. Dies beweist, dass die Anfangsstile nur verwendet werden, wenn das Element erstmals im DOM gerendert wird. Sobald es erschienen ist, geht das Element zurück zum Standardstil, der darauf festgelegt ist.

Nach einem weiteren Timeout entfernen wir das `<div>` dann vollständig aus dem DOM, was den Anfangszustand des Beispiels zurücksetzt, damit es erneut ausgeführt werden kann.

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

### Animation eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) animiert. Grundlegende Ein- und Ausstiegsanimationen werden mit der {{CSSxRef("transition")}}-Eigenschaft bereitgestellt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attribut deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung des Popovers mit seinem [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut festgelegt ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

In diesem Beispiel wollen wir zwei Eigenschaften animieren, {{cssxref("opacity")}} und {{cssxref("transform")}} (insbesondere eine horizontale Skalierungstransformation), um das Popover ein- und ausblenden sowie horizontal wachsen und schrumpfen zu lassen.

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

Um dies zu erreichen, haben wir einen Ausgangszustand für diese Eigenschaften im standardmäßig verborgenen Zustand des Popover-Elements (ausgewählt via `[popover]`) festgelegt und einen Endzustand im offenen Zustand des Popovers (ausgewählt via der {{cssxref(":popover-open")}} Pseudo-Klasse) festgelegt.

Dann setzen wir eine {{cssxref("transition")}}-Eigenschaft, um zwischen den beiden Zuständen zu animieren. Ein Anfangszustand für die Animation ist innerhalb einer `@starting-style`-At-Regel enthalten, um die Einstiegstransition zu aktivieren.

Da das animierte Element in die {{Glossary("top_layer", "Top-Ebene")}} befördert wird, wenn es angezeigt wird und aus der Top-Ebene entfernt wird, wenn es ausgeblendet ist (mit {{cssxref("display", "display: none")}}), sind einige zusätzliche Schritte erforderlich, um sicherzustellen, dass die Animation in beide Richtungen funktioniert:

- `display` wird zur Liste der zu animierenden Elemente hinzugefügt, um sicherzustellen, dass das animierte Element während beider Einstieg- und Austrittsanimationen sichtbar ist (auf `display: block` oder einen anderen sichtbaren `display`-Wert gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; effektiv würde das Popover einfach verschwinden. Beachten Sie, dass der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} ebenfalls im Shorthand gesetzt ist, um die Animation zu aktivieren.
- {{cssxref("overlay")}} wird zur Liste der zu animierenden Elemente hinzugefügt, um sicherzustellen, dass das Element erst nach dem Ende der Animation aus der Top-Ebene entfernt wird. Dies macht keinen großen Unterschied bei Animationen wie dieser, aber in komplexeren Fällen kann es dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht glatt oder effektiv ist. Auch hier ist `transition-behavior: allow-discrete` erforderlich, damit die Animation stattfindet.

> [!NOTE]
> Wir haben auch eine Transition auf dem {{cssxref("::backdrop")}} hinzugefügt, die hinter dem Popover erscheint, wenn es geöffnet wird, um eine schöne Verdunklungsanimation zu bieten. `[popover]:popover-open::backdrop` wird verwendet, um das Backdrop auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code rendert sich wie folgt:

{{ EmbedLiveSample("Animating a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover jedes Mal vom `@starting-style`-Stil zum `[popover]:popover-open`-Stil, wenn die Einstiegstransition erfolgt. Wenn das Popover schließt, wechselt es von seinem `[popover]:popover-open` Zustand zurück zum Standard-`[popover]`-Zustand.

> [!NOTE]
> Sie können ein Beispiel finden, das die Transition eines {{htmlelement("dialog")}}-Elements und dessen Backdrop demonstriert, wie es angezeigt und verborgen wird, auf der `<dialog>`-Referenzseite — siehe [Übergänge von Dialogelementen](/de/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements).

### Übergänge von Elementen bei DOM-Hinzufügung und -Entfernung

Dieses Beispiel enthält einen Button, der, wenn er gedrückt wird, neue Elemente zu einem {{htmlelement("section")}}-Container hinzufügt. Jedes Element enthält wiederum einen eingebetteten Button, der, wenn er gedrückt wird, das Element entfernt. Dieses Beispiel zeigt, wie Übergänge verwendet werden können, um Elemente zu animieren, wenn sie zum oder aus dem DOM hinzugefügt oder entfernt werden.

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

Wenn der Button "Neue Spalte erstellen" geklickt wird, wird die Funktion `createColumn()` aufgerufen. Diese erstellt ein {{htmlelement("div")}}-Element mit einer zufällig generierten Hintergrundfarbe und einem {{htmlelement("button")}}-Element zum Schließen des `<div>`. Es wird dann der `<button>` zum `<div>` und das `<div>` zum `<section>`-Container hinzugefügt.

Wir fügen dann einen Ereignislistener zum Schließen-Button über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Das Klicken auf den Schließen-Button bewirkt zwei Dinge:

- Die `fade-out`-Klasse wird dem `<div>` hinzugefügt. Das Hinzufügen der Klasse löst die Austrittsanimation aus, die auf dieser Klasse festgelegt ist.
- Das `<div>` wird nach einer Verzögerung von 1000ms entfernt. Der Aufruf von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verzögert die Entfernung des `<div>` aus dem DOM (über [`Element.remove()`](/de/docs/Web/API/Element/remove)) bis nach dem Ende der Animation.

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

Um die {{cssxref("opacity")}} und {{cssxref("scale")}} jedes `<div>` zu animieren, wenn es zum DOM hinzugefügt wird, und dann die Animation zu umkehren, wenn es aus dem DOM entfernt wird, tun wir Folgendes:

- Wir spezifizieren den Endzustand der Eigenschaften, die wir über die Regel `div { ... }` übergehen möchten.
- Wir spezifizieren den Ausgangszustand, von dem aus die Eigenschaften innerhalb eines `@starting-style`-Blocks übergehen sollen.
- Wir spezifizieren die Austrittsanimation innerhalb der `.fade-out`-Regel — dies ist die Klasse, die das JavaScript den `<div>`-Elementen zuweist, wenn deren Schließen-Buttons gedrückt werden. Neben der Einstellung der Endzustände von `opacity` und `scale` legen wir auch [`display: none`](/de/docs/Web/CSS/display) auf den `<div>`s fest — wir möchten, dass sie sofort nicht mehr verfügbar sind, wenn sie aus der UI entfernt werden.
- Wir spezifizieren die {{cssxref("transition")}}-Liste innerhalb der Regel `div { ... }`, um `opacity`, `scale` und `display` zu animieren. Beachten Sie, dass für `display` auch der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} im Shorthand gesetzt wird, damit es animiert wird.

#### Ergebnis

Das Endergebnis sieht folgendermaßen aus:

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
- [Vier neue CSS-Funktionen für sanfte Ein- und Ausgangsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
