---
title: "@starting-style"
slug: Web/CSS/@starting-style
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die **`@starting-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) wird verwendet, um Startwerte für Eigenschaften eines Elements festzulegen, von denen aus Sie bei der ersten Stilaktualisierung des Elements übergehen möchten, d. h. wenn ein Element erstmals auf einer zuvor geladenen Seite angezeigt wird.

## Syntax

Die `@starting-style` At-Regel kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block, der einen oder mehrere Regelsätze enthält, die Start-Stildeklarationen definieren und die Elemente auswählen, auf die sie angewendet werden:

   ```css
   @starting-style {
     rulesets
   }
   ```

2. Eingebettet in einen vorhandenen Regelsatz, der dann eine oder mehrere Deklarationen enthält, die Startwerte für die Eigenschaften der Elemente definieren, die bereits von diesem Regelsatz ausgewählt wurden:

   ```css
   selector { /* existing ruleset */
     /* ... */

     @starting-style {
       declarations
     }
   }
   ```

## Beschreibung

Um unerwartetes Verhalten zu vermeiden, werden [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) standardmäßig nicht bei der ersten Stilaktualisierung eines Elements oder wenn sich der {{CSSxRef("display")}}-Typ von `none` in einen anderen Wert ändert, ausgelöst. Um Übergänge beim ersten Stil zu aktivieren, sind `@starting-style`-Regeln erforderlich. Diese bieten Start-Stile für Elemente, die keinen vorherigen Zustand haben und definieren die Eigenschaftswerte, von denen aus übergangen wird.

`@starting-style` ist besonders nützlich, um Ein- und Austrittsübergänge für Elemente, die in der {{Glossary("Top_layer", "oberen Ebene")}} angezeigt werden (wie [Popovers](/de/docs/Web/API/Popover_API) und modale {{htmlelement("dialog")}}e), Elemente, die sich zu und von `display: none` ändern, und Elemente, die erstmals hinzugefügt oder aus dem DOM entfernt werden, zu erstellen.

> **Hinweis:** `@starting-style` ist nur für CSS-Übergänge relevant. Bei der Verwendung von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) zur Implementierung solcher Effekte wird `@starting-style` nicht benötigt. Weitere Informationen finden Sie unter [Using CSS animations](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations).

Es gibt zwei Möglichkeiten, `@starting-style` zu verwenden: als eigenständige Regel oder eingebettet in einen Regelsatz.

Betrachten Sie ein Szenario, in dem wir einen [Popover](/de/docs/Web/API/Popover_API) animieren möchten, wenn er angezeigt wird (das heißt, wenn er zur oberen Ebene hinzugefügt wird). Die "originale Regel", die die Stile für den geöffneten Popover spezifiziert, könnte folgendermaßen aussehen (siehe das [Popover-Beispiel](#animieren_eines_popovers) unten):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Um die Anfangswerte der Eigenschaften des Popovers zu spezifizieren, die mit der ersten Methode animiert werden sollen, fügen Sie einen eigenständigen `@starting-style`-Block in Ihr CSS ein:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> Die `@starting-style` At-Regel und die "originale Regel" haben dieselbe {{cssxref("spezifität")}}. Um sicherzustellen, dass Start-Stile angewendet werden, fügen Sie die `@starting-style` At-Regel _nach_ der "originalen Regel" ein. Wenn Sie die `@starting-style` At-Regel vor der "originalen Regel" spezifizieren, überschreiben die originalen Stile die Start-Stile.

Um den Start-Stil für den Popover mit der verschachtelten Methode anzugeben, können Sie den `@starting-style`-Block innerhalb der "originalen Regel" verschachteln:

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

### Wann werden Start-Stile genutzt?

Es ist wichtig zu verstehen, dass ein Element von seinen `@starting-style`-Stilen übergeht, wenn es erstmals im DOM gerendert wird, oder wenn es von {{cssxref("display", "display: none")}} zu einem sichtbaren Wert wechselt. Wenn es von seinem initialen sichtbaren Zustand zurückwechselt, nutzt es nicht mehr die `@starting-style`-Stile, da es jetzt im DOM sichtbar ist. Stattdessen wird es zu den Stilen übergehen, die für den Standardzustand des Elements existieren.

Tatsächlich sind in diesen Situationen drei Stilzustände zu verwalten — Startstilzustand, übergangener Zustand und Standardzustand. Die „zu“ und „von“ Übergänge können in solchen Fällen unterschiedlich sein. Sie können einen Beweis dafür in unserem [Demonstration of when starting styles are used](#demonstration,_wann_start-stile_verwendet_werden) Beispiel unten sehen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung von @starting-style

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

### Demonstration, wann Start-Stile verwendet werden

In diesem Beispiel wird eine Schaltfläche gedrückt, um ein {{htmlelement("div")}}-Element zu erstellen, ihm eine `class` von `showing` zu geben und es zum DOM hinzuzufügen.

`showing` erhält einen `@starting-style` von `background-color: red` und einen Stil von `background-color: blue` für die Überleitung. Der Standard `div`-Regelsatz enthält `background-color: yellow`, und dort wird auch der `transition` festgesetzt.

Wenn das `<div>` erstmals dem DOM hinzugefügt wird, sehen Sie, wie der Hintergrund von rot zu blau übergeht. Nach einem Timeout entfernen wir die `showing`-Klasse vom `<div>` über JavaScript. Zu diesem Zeitpunkt wechselt es von blau zurück zu gelb, nicht zu rot. Dies beweist, dass die Start-Stile nur verwendet werden, wenn das Element erstmals im DOM gerendert wird. Sobald es erschienen ist, wechselt das Element zurück zum Standardstil, der darauf festgelegt ist.

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

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Demonstration of when starting styles are used", "100%", "150") }}

### Animieren eines Popovers

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) animiert. Grundlegende Ein- und Austrittsanimationen werden mit der {{CSSxRef("transition")}}-Eigenschaft bereitgestellt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mit dem [popover](/de/docs/Web/HTML/Global_attributes/popover)-Attribut deklariert ist, und ein {{htmlelement("button")}}-Element, das als Steuerungselement für die Anzeige des Popovers designiert ist, mit seinem [popovertarget](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

In diesem Beispiel wollen wir zwei Eigenschaften animieren, [`opacity`](/de/docs/Web/CSS/opacity) und [`transform`](/de/docs/Web/CSS/transform) (speziell ein horizontal skalierender Transform), um den Popover ein- und auszublenden sowie horizontal zu wachsen und zu schrumpfen.

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

Dazu haben wir einen Anfangszustand für diese Eigenschaften im versteckten Standardzustand des Popover-Elements festgelegt (ausgewählt über `[popover]`) und einen Endzustand im geöffneten Zustand des Popovers (ausgewählt über die [`:popover-open`](/de/docs/Web/CSS/:popover-open) Pseudoklasse).

Wir setzen dann eine [`transition`](/de/docs/Web/CSS/transition)-Eigenschaft, um zwischen den beiden Zuständen zu animieren. Ein Anfangszustand für die Animation ist innerhalb einer `@starting-style`-At-Regel enthalten, um die Eintrittsanimation zu ermöglichen.

Da das animierte Element zur {{Glossary("Top_layer", "oberen Ebene")}} gebracht wird, wenn es angezeigt wird, und aus der oberen Ebene entfernt wird, wenn es versteckt wird (mit [`display: none`](/de/docs/Web/CSS/display)), sind einige zusätzliche Schritte erforderlich, um die Animation in beide Richtungen zu gewährleisten:

- `display` wird zur Liste der animierten Elemente hinzugefügt, um sicherzustellen, dass das animierte Element während sowohl der Ein- als auch der Austrittsanimation sichtbar ist (auf `display: block` oder einen anderen sichtbaren `display`-Wert gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; tatsächlich würde das Popover einfach verschwinden. Beachten Sie, dass auch der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) im Shorthand gesetzt ist, um die Animation zu aktivieren.
- [`overlay`](/de/docs/Web/CSS/overlay) wird zur Liste der animierten Elemente hinzugefügt, um sicherzustellen, dass die Entfernung des Elements aus der oberen Ebene erst nach Abschluss der Animation erfolgt. Bei einfachen Animationen wie dieser hat dies keinen großen Einfluss, aber in komplexeren Fällen kann das Fehlen dieser Maßnahme dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht glatt oder effektiv ist. Auch hier ist `transition-behavior: allow-discrete` erforderlich, damit die Animation stattfindet.

> [!NOTE]
> Wir haben auch eine Übergangsanimation auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) eingefügt, der erscheint, wenn das Popover geöffnet wird, um eine nette Abdunkelungsanimation zu bieten. `[popover]:popover-open::backdrop` wird verwendet, um das Hintergrundbild auszuwählen, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Animating a popover", "100%", "200") }}

> [!NOTE]
> Da Popover sich bei jeder Anzeige von `display: none` zu `display: block` ändern, wechselt der Popover bei jedem Eintrittsübergang von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn sich der Popover schließt, wechselt er von seinem `[popover]:popover-open`-Zustand zum Standard-[popover]-Zustand.

> [!NOTE]
> Ein Beispiel, das das Übergehen eines {{htmlelement("dialog")}}-Elements und seines Hintergrunds zeigt, wenn es angezeigt und verborgen wird, finden Sie auf der `<dialog>`-Referenzseite – siehe [Transitioning dialog elements](/de/docs/Web/HTML/Element/dialog#transitioning_dialog_elements).

### Übergehen von Elementen bei DOM-Hinzufügung und -Entfernung

Dieses Beispiel enthält eine Schaltfläche, die beim Drücken neue Elemente zu einem {{htmlelement("section")}}-Container hinzufügt. Jedes Element enthält wiederum eine verschachtelte Schaltfläche, die beim Drücken das Element entfernt. Dieses Beispiel zeigt, wie Übergänge genutzt werden können, um Elemente beim Hinzufügen oder Entfernen aus dem DOM zu animieren.

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

Wenn die Schaltfläche "Erstelle neue Spalte" geklickt wird, wird die Funktion `createColumn()` aufgerufen. Diese erstellt ein {{htmlelement("div")}}-Element mit einer zufällig generierten Hintergrundfarbe und ein {{htmlelement("button")}}-Element, um das `<div>` zu schließen. Es wird dann das `<button>` dem `<div>` und das `<div>` dem `<section>`-Container hinzugefügt.

Wir fügen dann einen Event-Listener auf die Schließen-Schaltfläche mittels [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Ein Klick auf die Schaltfläche zum Schließen bewirkt zwei Dinge:

- Fügt die `fade-out`-Klasse zum `<div>` hinzu. Das Hinzufügen der Klasse löst die Abgangsanimation aus, die dieser Klasse zugewiesen ist.
- Entfernt das `<div>` nach einer Verzögerung von 1000 ms. Die [`setTimeout()`](/de/docs/Web/API/SetTimeout) verzögert das Entfernen des `<div>` vom DOM (mittels [`Element.remove()`](/de/docs/Web/API/Element/remove)) bis nach Ende der Animation.

#### CSS

Wir fügen einen {{cssxref("transition")}} hinzu, der die {{cssxref("opacity")}} und {{cssxref("scale")}} jeder Spalte animiert, wenn sie hinzugefügt und entfernt werden:

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

Um die [`opacity`](/de/docs/Web/CSS/opacity) und [`scale`](/de/docs/Web/CSS/scale) jedes `<div>` zu animieren, wenn es zum DOM hinzugefügt und dann die Animation beim Entfernen umzukehren, tun wir folgendes:

- Geben Sie den Endzustand der Eigenschaften, die wir übergehen möchten, in der `div { ... }`-Regel an.
- Geben Sie den Startzustand an, von dem aus die Eigenschaften innerhalb eines `@starting-style`-Blocks übergehen.
- Geben Sie die Austrittsanimation innerhalb der `.fade-out`-Regel an — dies ist die Klasse, die das JavaScript den `<div>`-Elementen zuweist, wenn ihre Schaltflächen zum Schließen gedrückt werden. Neben dem Setzen der Endzustände für `opacity` und `scale` setzen wir auch [`display: none`](/de/docs/Web/CSS/display) auf die `<div>`s — wir wollen, dass sie sofort nicht mehr verfügbar sind, wenn sie aus der UI entfernt werden.
- Geben Sie die [`transition`](/de/docs/Web/CSS/transition)-Liste innerhalb der `div { ... }`-Regel an, um `opacity`, `scale` und `display` zu animieren. Beachten Sie, dass für `display` auch der Wert [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) im Shorthand gesetzt ist, damit es animiert.

#### Ergebnis

Das Endergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Transitioning elements on DOM addition and removal", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS transitions](/de/docs/Web/CSS/CSS_transitions) Modul
- [`overlay`](/de/docs/Web/CSS/overlay)
- [`transition-behavior`](/de/docs/Web/CSS/transition-behavior)
- [`CSSStartingStyleRule`](/de/docs/Web/API/CSSStartingStyleRule)
- [Vier neue CSS-Features für sanfte Ein- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
