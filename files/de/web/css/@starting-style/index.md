---
title: "@starting-style"
slug: Web/CSS/@starting-style
l10n:
  sourceCommit: 0d43b58f31f30e5dbafd9c117a467e389cc8b176
---

{{CSSRef}}

Die **`@starting-style`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um Startwerte für Eigenschaften zu definieren, die auf ein Element angewendet werden sollen. Diese Startwerte dienen als Ausgangspunkt für Übergänge, wenn das Element seine erste Stilaktualisierung erhält, d.h. wenn ein Element auf einer zuvor geladenen Seite zum ersten Mal angezeigt wird.

## Syntax

Die `@starting-style` At-Regel kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block, der einen oder mehrere Regelsätze enthält, die Startstilerklärungen definieren und die Elemente auswählen, auf die sie angewendet werden:

   ```css
   @starting-style {
     /* rulesets */
   }
   ```

2. Eingerückt innerhalb eines bestehenden Regelsatzes, wobei sie eine oder mehrere Deklarationen enthält, die Startwerte für die bereits durch diesen Regelsatz ausgewählten Elemente definieren:

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

Um unerwartetes Verhalten zu vermeiden, werden bei [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) standardmäßig keine Übergänge bei der ersten Stilaktualisierung eines Elements oder bei einer Änderung seines {{CSSxRef("display")}}-Typs von `none` zu einem anderen Wert ausgelöst. Um Übergänge für den ersten Stil zu aktivieren, sind `@starting-style`-Regeln erforderlich. Sie bieten Startstile für Elemente, die keinen vorherigen Zustand haben, und definieren die Eigenschaftswerte, von denen aus der Übergang erfolgt.

`@starting-style` ist besonders nützlich für das Erstellen von Ein- und Austrittsübergängen für Elemente, die in der {{Glossary("top_layer", "obersten Ebene")}} angezeigt werden (wie [Popovers](/de/docs/Web/API/Popover_API) und modale {{htmlelement("dialog")}}s), sowie für Elemente, die von und zu `display: none` wechseln, und Elemente, die zum ersten Mal dem DOM hinzugefügt oder daraus entfernt werden.

> **Hinweis:** `@starting-style` ist nur für CSS-Übergänge relevant. Bei der Verwendung von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) zur Implementierung solcher Effekte ist `@starting-style` nicht erforderlich. Weitere Informationen finden Sie unter [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations).

Es gibt zwei Möglichkeiten, `@starting-style` zu verwenden: als eigenständige Regel oder eingebettet in einen Regelsatz.

Betrachten wir ein Szenario, in dem ein [Popover](/de/docs/Web/API/Popover_API) animiert werden soll, wenn es angezeigt wird (d.h. wenn es zur obersten Ebene hinzugefügt wird). Die "Originalregel", die die Stile für das offene Popover spezifiziert, könnte folgendermaßen aussehen (siehe das [Popover-Beispiel](#animieren_eines_popovers) unten):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Um die Startwerte der Popover-Eigenschaften zu spezifizieren, die mit der ersten Methode animiert werden, fügen Sie einen eigenständigen `@starting-style`-Block in Ihr CSS ein:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> Die `@starting-style` At-Regel und die "Originalregel" haben die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity). Um sicherzustellen, dass Startstile angewendet werden, sollten Sie die `@starting-style` At-Regel _nach_ der "Originalregel" einfügen. Wenn Sie die `@starting-style`-Atregel vor der "Originalregel" spezifizieren, werden die Originalstile die Startstile überschreiben.

Um den Startstil für das Popover mit der eingeschachtelten Methode zu spezifizieren, können Sie den `@starting-style`-Block in die "Originalregel" einfügen:

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

Es ist wichtig zu verstehen, dass ein Element von seinen `@starting-style`-Stilen aus übergeht, wenn es zum ersten Mal im DOM gerendert wird oder wenn es von {{cssxref("display", "display: none")}} zu einem sichtbaren Wert wechselt. Wenn es von seinem anfänglichen sichtbaren Zustand zurückwechselt, verwendet es nicht mehr die `@starting-style`-Stile, da es nun sichtbar im DOM ist. Stattdessen wechselt es zurück zu den bestehenden Stilen für den Standardzustand dieses Elements.

In solchen Situationen gibt es effektiv drei Stilzustände zu verwalten – Startstilzustand, Übergangszustand und Standardzustand. Es ist möglich, dass die "zu" und "von" Übergänge in solchen Fällen unterschiedlich sind. Ein Beweis hierfür finden Sie in unserem Beispiel [Demonstration of when starting styles are used](#demonstration,_wann_startstile_verwendet_werden) unten.

## Formale Syntax

{{CSSSyntaxRaw(`@starting-style = @starting-style { <rule-list> }`)}}

## Beispiele

### Grundlegende Verwendung von @starting-style

Übergang der {{cssxref("background-color")}} eines Elements von transparent zu grün, wenn es erstmalig gerendert wird:

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

Übergang der {{cssxref("opacity")}} eines Elements, wenn sein {{cssxref("display")}}-Wert zu oder von `none` wechselt:

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

In diesem Beispiel wird eine Schaltfläche gedrückt, um ein {{htmlelement("div")}} Element zu erstellen, ihm eine `class` von `showing` zu geben und es dem DOM hinzuzufügen.

`showing` erhält einen `@starting-style` von `background-color: red` und einen Stil von `background-color: blue` als Übergangsziel. Der Standard-`div`-Regelsatz enthält `background-color: yellow` und ist auch der Ort, an dem der `transition` gesetzt wird.

Wenn das `<div>` zum ersten Mal dem DOM hinzugefügt wird, sehen Sie, wie der Hintergrund von Rot nach Blau wechselt. Nach einem Timeout entfernen wir die `showing`-Klasse vom `<div>` über JavaScript. Zu diesem Zeitpunkt wechselt es von Blau nach Gelb zurück, nicht Rot. Dies beweist, dass die Startstile nur beim ersten Rendern des Elements im DOM verwendet werden. Sobald es erschienen ist, wechselt das Element zu dem festgelegten Standardstil zurück.

Nach einem weiteren Timeout entfernen wir das `<div>` vollständig aus dem DOM, wodurch der Initialzustand des Beispiels zurückgesetzt wird, sodass es erneut ausgeführt werden kann.

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

### Animieren eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) animiert. Grundlegende Ein- und Austrittsanimationen werden mithilfe der {{CSSxRef("transition")}}-Eigenschaft bereitgestellt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mithilfe des [popover](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attributs deklariert ist, und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerelement des Popovers mithilfe seines [popovertarget](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attributs festgelegt ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

In diesem Beispiel möchten wir zwei Eigenschaften animieren, {{cssxref("opacity")}} und {{cssxref("transform")}} (speziell eine horizontal skalierende Transformation), um das Popover ein- und auszublenden und horizontal wachsen und schrumpfen zu lassen.

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

Um dies zu erreichen, haben wir einen Startzustand für diese Eigenschaften auf dem standardmäßig versteckten Zustand des Popover-Elements (ausgewählt über `[popover]`) und einen Endzustand auf dem geöffneten Zustand des Popovers (ausgewählt über die {{cssxref(":popover-open")}} Pseudoklasse) festgelegt.

Dann setzen wir eine {{cssxref("transition")}}-Eigenschaft, um zwischen den beiden Zuständen zu animieren. Ein Startzustand für die Animation ist innerhalb einer `@starting-style` At-Regel enthalten, um die Eintrittsanimation zu aktivieren.

Da das animierte Element in die {{Glossary("top_layer", "oberste Ebene")}} verschoben wird, wenn es angezeigt wird, und aus dieser entfernt wird, wenn es versteckt wird (mit {{cssxref("display", "display: none")}}), sind einige zusätzliche Schritte erforderlich, um sicherzustellen, dass die Animation in beide Richtungen funktioniert:

- `display` wird der Liste der animierten Elemente hinzugefügt, um sicherzustellen, dass das animierte Element während der Ein- und Austrittsanimationen sichtbar ist (auf `display: block` oder einen anderen sichtbaren `display`-Wert gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; das Popover würde effektiv einfach verschwinden. Beachten Sie, dass der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} auch im Shorthand gesetzt wird, um die Animation zu aktivieren.
- {{cssxref("overlay")}} wird der Liste der animierten Elemente hinzugefügt, um sicherzustellen, dass die Entfernung des Elements aus der obersten Ebene bis zum Ende der Animation verzögert wird. Dies macht keinen großen Unterschied bei Animationen wie dieser, aber in komplexeren Fällen kann es dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht reibungslos oder effektiv ist. Auch hier ist `transition-behavior: allow-discrete` erforderlich, damit die Animation stattfindet.

> [!NOTE]
> Wir haben auch eine Transition auf dem {{cssxref("::backdrop")}} hinzugefügt, der hinter dem Popover angezeigt wird, wenn es geöffnet wird, um eine schöne Verdunkelungsanimation zu ermöglichen. `[popover]:popover-open::backdrop` wird verwendet, um den Hintergrund auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Animating a popover", "100%", "200") }}

> [!NOTE]
> Da Popovers bei jeder Anzeige von `display: none` zu `display: block` wechseln, wechselt das Popover bei jedem Eintrittsübergang von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open` Zustand zum Standardzustand `[popover]`.

> [!NOTE]
> Ein Beispiel, das zeigt, wie ein {{htmlelement("dialog")}}-Element und sein Hintergrund übergangen werden, wenn es angezeigt und verborgen wird, finden Sie auf der `<dialog>` Referenzseite — siehe [Transitioning dialog elements](/de/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements).

### Übergangseffekte bei Hinzufügen und Entfernen von Elementen im DOM

Dieses Beispiel enthält eine Schaltfläche, mit der, wenn sie gedrückt wird, neue Elemente zu einem {{htmlelement("section")}}-Container hinzugefügt werden. Jedes Element enthält wiederum eine eingebettete Schaltfläche, mit der das Element entfernt wird. Dieses Beispiel demonstriert, wie Übergänge verwendet werden, um Elemente zu animieren, wenn sie dem DOM hinzugefügt oder daraus entfernt werden.

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

Wenn die Schaltfläche "Neue Spalte erstellen" geklickt wird, wird die `createColumn()`-Funktion aufgerufen. Diese erstellt ein {{htmlelement("div")}}-Element mit einer zufällig generierten Hintergrundfarbe und einem {{htmlelement("button")}}-Element zum Schließen des `<div>`. Anschließend wird der `<button>` dem `<div>` und das `<div>` dem `<section>`-Container hinzugefügt.

Wir fügen dann einen Event-Listener zum Schließen der Schaltfläche über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Das Klicken auf die Schaltfläche zum Schließen bewirkt Folgendes:

- Fügt die Klasse `fade-out` zum `<div>` hinzu. Das Hinzufügen der Klasse löst die Austrittsanimation aus, die auf dieser Klasse gesetzt ist.
- Entfernt das `<div>` nach einer Verzögerung von 1000 ms. Das [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verzögert die Entfernung des `<div>` aus dem DOM (über [`Element.remove()`](/de/docs/Web/API/Element/remove)) bis nach dem Ende der Animation.

#### CSS

Wir fügen eine {{cssxref("transition")}} hinzu, die die {{cssxref("opacity")}} und die {{cssxref("scale")}} jeder Spalte animiert, wenn sie hinzugefügt oder entfernt werden:

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

Um die {{cssxref("opacity")}} und die {{cssxref("scale")}} jedes `<div>` zu animieren, wenn es dem DOM hinzugefügt wird und dann die Animation umzukehren, wenn es entfernt wird, gehen wir folgendermaßen vor:

- Die Endzustände der Eigenschaften, die wir übergehen möchten, werden in der `div { ... }`-Regel angegeben.
- Der Startzustand, von dem aus die Eigenschaften übergehen sollen, wird innerhalb eines `@starting-style`-Blocks angegeben.
- Die Austrittsanimation wird in der `.fade-out`-Regel angegeben — dies ist die Klasse, die der JavaScript den `<div>`-Elementen zuweist, wenn ihre Schaltflächen zum Schließen gedrückt werden. Zusätzlich zu den Endzuständen von `opacity` und `scale` setzen wir auch [`display: none`](/de/docs/Web/CSS/display) auf die `<div>`s — wir möchten, dass sie sofort nicht mehr verfügbar sind, wenn sie aus der Benutzeroberfläche entfernt werden.
- Die {{cssxref("transition")}}-Liste wird in der `div { ... }`-Regel angegeben, um `opacity`, `scale` und `display` zu animieren. Beachten Sie, dass für `display` auch der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} im Shorthand gesetzt ist, damit es animiert wird.

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
- [Four new CSS features for smooth entry and exit animations](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
