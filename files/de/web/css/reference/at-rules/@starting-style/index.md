---
title: "`@starting-style` CSS at-rule"
short-title: "@starting-style"
slug: Web/CSS/Reference/At-rules/@starting-style
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die **`@starting-style`**-[CSS](/de/docs/Web/CSS)-[At-Rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) definiert Ausgangswerte für Eigenschaften eines Elements, von denen aus eine Transition erfolgen soll, wenn das Element seine erste Stilaktualisierung erhält – also wenn es erstmals auf einer bereits geladenen Seite angezeigt wird.

## Syntax

Die `@starting-style`-At-Rule kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block. In diesem Fall enthält sie einen oder mehrere Regelsätze, die Ausgangsstile definieren und die Elemente auswählen, für die sie gelten:

   ```css
   @starting-style {
     /* rulesets */
   }
   ```

2. Verschachtelt innerhalb eines bestehenden Regelsatzes. In diesem Fall enthält sie eine oder mehrere Deklarationen, die Ausgangswerte für die bereits durch diesen Regelsatz ausgewählten Elemente festlegen:

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

Um unerwartetes Verhalten zu vermeiden, werden [CSS-Transitionen](/de/docs/Web/CSS/Guides/Transitions) standardmäßig weder bei der ersten Stilaktualisierung eines Elements noch dann ausgelöst, wenn sich sein {{CSSxRef("display")}}-Wert von `none` zu einem anderen Wert ändert. Für Transitionen beim ersten Anzeigen sind `@starting-style`-Regeln erforderlich. Sie legen Ausgangsstile für Elemente fest, die noch keinen vorherigen Zustand haben, und definieren damit die Eigenschaftswerte, von denen die Transition ausgeht.

`@starting-style` ist besonders nützlich für Ein- und Ausblendtransitionen von Elementen im {{Glossary("top_layer", "Top Layer")}}, etwa [Popover](/de/docs/Web/API/Popover_API) und modalen {{htmlelement("dialog")}}-Elementen. Das gilt auch für Elemente, deren `display`-Wert zu oder von `none` wechselt, sowie für Elemente, die erstmals zum DOM hinzugefügt oder daraus entfernt werden.

> [!NOTE]
> `@starting-style` ist nur für CSS-Transitionen relevant. Wenn Sie solche Effekte mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) umsetzen, benötigen Sie `@starting-style` nicht. Ein Beispiel finden Sie unter [CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animations/Using).

Sie können `@starting-style` entweder als eigenständige Regel oder verschachtelt innerhalb eines Regelsatzes verwenden.

Angenommen, ein [Popover](/de/docs/Web/API/Popover_API) soll beim Anzeigen – also beim Hinzufügen zum Top Layer – animiert werden. Die „ursprüngliche Regel“, die die Stile für das geöffnete Popover festlegt, könnte so aussehen (siehe das [Popover-Beispiel](#ein_popover_animieren) weiter unten):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Um mit der ersten Methode die Ausgangswerte der zu animierenden Popover-Eigenschaften festzulegen, fügen Sie Ihrer CSS-Datei einen eigenständigen `@starting-style`-Block hinzu:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> Die `@starting-style`-At-Rule und die „ursprüngliche Regel“ haben die gleiche [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity). Damit die Ausgangsstile angewendet werden, platzieren Sie die `@starting-style`-At-Rule _nach_ der „ursprünglichen Regel“. Steht sie davor, überschreiben die ursprünglichen Stile die Ausgangsstile.

Bei der verschachtelten Methode legen Sie den Ausgangsstil für das Popover fest, indem Sie den `@starting-style`-Block innerhalb der „ursprünglichen Regel“ platzieren:

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

Es ist wichtig zu verstehen, dass ein Element von seinen `@starting-style`-Stilen aus eine Transition durchläuft, wenn es erstmals im DOM gerendert wird oder sein {{cssxref("display", "display: none")}}-Wert zu einem sichtbaren Wert wechselt. Wenn es anschließend aus diesem ersten sichtbaren Zustand zurückwechselt, verwendet es die `@starting-style`-Stile nicht mehr, da es nun im DOM sichtbar ist. Stattdessen erfolgt die Transition zu den Stilen, die für seinen Standardzustand festgelegt sind.

In solchen Fällen gibt es also drei Stilzustände: den Ausgangsstil, den Zustand nach der Transition und den Standardzustand. Die Transitionen beim Ein- und Ausblenden können sich daher unterscheiden. Das folgende Beispiel [Demonstration der Verwendung von Ausgangsstilen](#demonstration_der_verwendung_von_ausgangsstilen) zeigt dies.

## Formale Syntax

{{CSSSyntaxRaw(`@starting-style = @starting-style { <rule-list> }`)}}

## Beispiele

### Grundlegende Verwendung von @starting-style

Der {{cssxref("background-color")}}-Wert eines Elements wechselt bei seiner ersten Darstellung durch eine Transition von transparent zu grün:

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

Der {{cssxref("opacity")}}-Wert eines Elements durchläuft eine Transition, wenn sich sein {{cssxref("display")}}-Wert zu oder von `none` ändert:

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

### Demonstration der Verwendung von Ausgangsstilen

In diesem Beispiel wird durch einen Klick auf eine Schaltfläche ein {{htmlelement("div")}}-Element erstellt, mit der `class` `showing` versehen und zum DOM hinzugefügt.

Für `showing` sind `background-color: red` als `@starting-style` und `background-color: blue` als Zielstil der Transition festgelegt. Der Standardregelsatz für `div` enthält `background-color: yellow`. Dort ist auch `transition` festgelegt.

Wenn das `<div>` erstmals zum DOM hinzugefügt wird, sehen Sie, wie die Hintergrundfarbe von Rot zu Blau wechselt. Nach einer festgelegten Zeit entfernen wir die Klasse `showing` per JavaScript vom `<div>`. Daraufhin wechselt die Hintergrundfarbe von Blau zurück zu Gelb, nicht zu Rot. Das zeigt, dass die Ausgangsstile nur verwendet werden, wenn das Element erstmals im DOM gerendert wird. Danach wechselt das Element durch eine Transition zurück zu seinem festgelegten Standardstil.

Nach einer weiteren festgelegten Zeit entfernen wir das `<div>` vollständig aus dem DOM. Dadurch wird das Beispiel in seinen Ausgangszustand zurückgesetzt und kann erneut ausgeführt werden.

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

### Ein Popover animieren

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) mithilfe von [CSS-Transitionen](/de/docs/Web/CSS/Guides/Transitions) animiert. Für einfache Animationen beim Ein- und Ausblenden wird die Eigenschaft {{CSSxRef("transition")}} verwendet.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das über das Attribut [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover) als Popover definiert ist. Ein {{htmlelement("button")}}-Element dient über sein Attribut [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) als Steuerelement zum Anzeigen des Popovers.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

In diesem Beispiel animieren wir zwei Eigenschaften: {{cssxref("opacity")}} und {{cssxref("transform")}} – genauer gesagt eine horizontale Skalierung. So wird das Popover ein- und ausgeblendet und gleichzeitig in der Breite vergrößert beziehungsweise verkleinert.

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

Dazu legen wir für diese Eigenschaften einen Ausgangszustand im standardmäßig verborgenen Zustand des Popover-Elements fest (ausgewählt über `[popover]`). Den Endzustand legen wir für das geöffnete Popover fest (ausgewählt über die Pseudoklasse {{cssxref(":popover-open")}}).

Anschließend legen wir eine {{cssxref("transition")}}-Eigenschaft fest, um den Wechsel zwischen den beiden Zuständen zu animieren. Der Ausgangszustand der Animation steht innerhalb einer `@starting-style`-At-Rule, damit die Animation beim Einblenden ausgeführt wird.

Da das animierte Element beim Anzeigen in den {{Glossary("top_layer", "Top Layer")}} verschoben und beim Ausblenden (mit {{cssxref("display", "display: none")}}) daraus entfernt wird, sind einige zusätzliche Schritte nötig, damit die Animation in beide Richtungen funktioniert:

- `display` wird in die Liste der Eigenschaften mit Transition aufgenommen, damit das animierte Element während der gesamten Ein- und Ausblendanimation sichtbar bleibt (mit `display: block` oder einem anderen sichtbaren `display`-Wert). Ohne diesen Schritt wäre die Ausblendanimation nicht sichtbar; das Popover würde einfach verschwinden. Beachten Sie, dass in der Kurzschreibweise auch der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} gesetzt wird, um die Animation zu ermöglichen.
- {{cssxref("overlay")}} wird ebenfalls in die Liste aufgenommen. Dadurch wird das Element erst nach dem Ende der Animation aus dem Top Layer entfernt. Bei einer Animation wie dieser macht das kaum einen Unterschied. In komplexeren Fällen kann das Element andernfalls zu früh aus dem Overlay entfernt werden, sodass die Animation nicht flüssig oder wirkungsvoll ist. Auch hier ist `transition-behavior: allow-discrete` erforderlich, damit die Animation stattfindet.

> [!NOTE]
> Wir haben auch für den {{cssxref("::backdrop")}}, der beim Öffnen hinter dem Popover erscheint, eine Transition hinzugefügt. Sie sorgt für eine sanfte Abdunkelung. Mit `[popover]:popover-open::backdrop` wird der Backdrop des geöffneten Popovers ausgewählt.

#### Ergebnis

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Animating a popover", "100%", "200") }}

> [!NOTE]
> Da Popover bei jedem Anzeigen von `display: none` zu `display: block` wechseln, erfolgt bei jeder Einblendtransition eine Transition von den `@starting-style`-Stilen zu den `[popover]:popover-open`-Stilen. Beim Schließen wechselt das Popover vom Zustand `[popover]:popover-open` zum Standardzustand `[popover]`.

> [!NOTE]
> Ein Beispiel für Transitionen eines {{htmlelement("dialog")}}-Elements und seines Backdrops beim Ein- und Ausblenden finden Sie auf der Referenzseite für `<dialog>` unter [Transitionen für dialog-Elemente](/de/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements).

### Transitionen beim Hinzufügen und Entfernen von DOM-Elementen

Dieses Beispiel enthält eine Schaltfläche, die beim Anklicken neue Elemente an einen {{htmlelement("section")}}-Container anhängt. Jedes dieser Elemente enthält wiederum eine Schaltfläche, mit der es entfernt werden kann. Das Beispiel zeigt, wie Sie Elemente beim Hinzufügen zum DOM und beim Entfernen daraus mithilfe von Transitionen animieren.

#### HTML

```html
<button>Create new column</button>
<section></section>
```

#### CSS

Wir fügen eine {{cssxref("transition")}} hinzu, die {{cssxref("opacity")}} und {{cssxref("scale")}} jeder Spalte beim Hinzufügen und Entfernen animiert:

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

Um {{cssxref("opacity")}} und {{cssxref("scale")}} jedes `<div>` beim Hinzufügen zum DOM zu animieren und die Animation beim Entfernen umzukehren, gehen wir so vor:

- Wir legen den Endzustand der Eigenschaften, für die eine Transition erfolgen soll, in der Regel `div { ... }` fest.
- Wir legen den Ausgangszustand dieser Eigenschaften in einem `@starting-style`-Block fest.
- Wir legen die Ausblendanimation in der Regel `.fade-out` fest. JavaScript weist diese Klasse den `<div>`-Elementen zu, wenn ihre Schaltflächen zum Schließen angeklickt werden. Neben den Endzuständen für `opacity` und `scale` setzen wir für die `<div>`-Elemente auch [`display: none`](/de/docs/Web/CSS/Reference/Properties/display), damit sie nach dem Entfernen aus der Benutzeroberfläche sofort nicht mehr verfügbar sind.
- Wir legen die {{cssxref("transition")}}-Liste in der Regel `div { ... }` fest, um `opacity`, `scale` und `display` zu animieren. Beachten Sie, dass für `display` in der Kurzschreibweise auch der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} gesetzt wird, damit die Animation stattfindet.

#### JavaScript

JavaScript ermöglicht das Hinzufügen und Entfernen der Elemente:

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

Wenn die Schaltfläche „Neue Spalte erstellen“ angeklickt wird, wird die Funktion `createColumn()` aufgerufen. Sie erstellt ein {{htmlelement("div")}}-Element mit einer zufällig erzeugten Hintergrundfarbe und ein {{htmlelement("button")}}-Element zum Schließen des `<div>`. Anschließend hängt sie das `<button>` an das `<div>` und das `<div>` an den `<section>`-Container an.

Außerdem registrieren wir über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einen Event-Listener für die Schaltfläche zum Schließen. Ein Klick darauf bewirkt zwei Dinge:

- Die Klasse `fade-out` wird dem `<div>` hinzugefügt. Dadurch wird die für diese Klasse festgelegte Ausblendanimation ausgelöst.
- Das `<div>` wird nach einer Verzögerung von 1000 ms entfernt. [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verzögert das Entfernen des `<div>` aus dem DOM über [`Element.remove()`](/de/docs/Web/API/Element/remove), bis die Animation beendet ist.

#### Ergebnis

Das Ergebnis sieht so aus:

{{ EmbedLiveSample("Transitioning elements on DOM addition and removal", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Modul [CSS-Transitionen](/de/docs/Web/CSS/Guides/Transitions)
- {{cssxref("overlay")}}
- {{cssxref("transition-behavior")}}
- [`CSSStartingStyleRule`](/de/docs/Web/API/CSSStartingStyleRule)
- [Vier neue CSS-Funktionen für flüssige Ein- und Ausblendanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
