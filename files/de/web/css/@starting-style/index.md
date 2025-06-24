---
title: "@starting-style"
slug: Web/CSS/@starting-style
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Die **`@starting-style`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wird verwendet, um Ausgangswerte für Eigenschaften festzulegen, die bei einem Element eingestellt werden, von dem Sie möchten, dass es eine Transition ausführt, wenn das Element seine erste Stilaktualisierung erhält, d.h. wenn ein Element erstmals auf einer zuvor geladenen Seite angezeigt wird.

## Syntax

Die `@starting-style` At-Regel kann auf zwei Arten verwendet werden:

1. Als eigenständiger Block, der einen oder mehrere Regelwerke enthält, die Start-Style-Deklarationen definieren und die Elemente auswählen, auf die sie angewendet werden:

   ```css
   @starting-style {
     /* rulesets */
   }
   ```

2. Geschachtelt innerhalb eines bestehenden Regelwerks, in welchem Fall es eine oder mehrere Deklarationen enthält, die Startwerte für die schon durch dieses Regelwerk ausgewählten Elemente definieren:

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

Um unerwartetes Verhalten zu vermeiden, werden [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) standardmäßig nicht ausgelöst bei der anfänglichen Stilaktualisierung eines Elements oder wenn sich sein {{CSSxRef("display")}}-Typ von `none` zu einem anderen Wert ändert. Um erste Stil-Transitionen zu aktivieren, sind `@starting-style`-Regeln erforderlich. Sie bieten Startstile für Elemente, die keinen vorherigen Zustand haben, und definieren die Eigenschaftswerte, von denen aus die Transition erfolgen soll.

`@starting-style` ist besonders nützlich, wenn Sie Eintritts- und Austrittsübergänge für im {{Glossary("top_layer", "Top-Layer")}} angezeigte Elemente (wie [Popovers](/de/docs/Web/API/Popover_API) und modale {{htmlelement("dialog")}}e), Elemente, die zu und von `display: none` wechseln, sowie Elemente, die erstmals dem DOM hinzugefügt oder daraus entfernt werden, erstellen.

> [!NOTE] > `@starting-style` ist nur für CSS-Übergänge relevant. Beim Verwenden von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) zur Implementierung solcher Effekte wird `@starting-style` nicht benötigt. Siehe [Using CSS animations](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für ein Beispiel.

Es gibt zwei Möglichkeiten, `@starting-style` zu verwenden: als eigenständige Regel oder innerhalb eines Regelwerks.

Betrachten wir ein Szenario, in dem wir einen [Popover](/de/docs/Web/API/Popover_API) animieren möchten, wenn er angezeigt wird (d.h. wenn er dem Top-Layer hinzugefügt wird). Die "Originalregel", die die Stile für den offenen Popover spezifiziert, könnte ungefähr so aussehen (siehe das [Popover-Beispiel](#popover_animieren) unten):

```css
[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}
```

Um die Startwerte der zu animierenden Eigenschaften des Popovers mithilfe der ersten Methode anzugeben, fügen Sie einen eigenständigen `@starting-style`-Block in Ihrem CSS ein:

```css
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}
```

> [!NOTE]
> Die `@starting-style` At-Regel und die "Originalregel" haben die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity). Um sicherzustellen, dass die Startstile angewendet werden, sollten Sie die `@starting-style` At-Regel _nach_ der "Originalregel" einfügen. Wenn Sie die `@starting-style` At-Regel vor der "Originalregel" angeben, überschreiben die Originalstile die Startstile.

Um den Startstil für den Popover mithilfe der geschachtelten Methode anzugeben, können Sie den `@starting-style`-Block innerhalb der "Originalregel" schachteln:

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

Es ist wichtig zu verstehen, dass ein Element von seinen `@starting-style`-Stilen aus übereinstimmt, wenn es zum ersten Mal im DOM gerendert wird oder wenn es von {{cssxref("display", "display: none")}} zu einem sichtbaren Wert wechselt. Wenn es von seinem anfänglichen sichtbaren Zustand zurückwechselt, wird es die `@starting-style`-Stile nicht mehr verwenden, da es nun im DOM sichtbar ist. Stattdessen wird es zu welchem auch immer Stilen zurückkehren, die für den Standardzustand dieses Elements existieren.

In der Praxis gibt es in diesen Situationen drei Stilzustände zu verwalten — den Startstil-Zustand, den Transition-Zustand und den Standardzustand. In solchen Fällen können die "to" und "from"-Transitionen unterschiedlich sein. Sie können einen Beweis dafür in unserem [Demonstrationsbeispiel der Verwendung von Startstilen](#demonstration_der_verwendung_von_startstilen) unten sehen.

## Formale Syntax

{{CSSSyntaxRaw(`@starting-style = @starting-style { <rule-list> }`)}}

## Beispiele

### Grundlegende @starting-style Anwendung

Übergang einer {{cssxref("background-color")}} eines Elements von transparent zu grün, wenn es erstmals gerendert wird:

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

In diesem Beispiel wird ein Button gedrückt, um ein {{htmlelement("div")}}-Element zu erstellen, ihm eine `class` von `showing` zu geben und es zum DOM hinzuzufügen.

`showing` erhält eine `@starting-style` von `background-color: red` und einen Stil von `background-color: blue`, zu dem es übergeht. Das Standard-`div`-Regelwerk enthält `background-color: yellow` und dort ist auch das `transition` angegeben.

Wenn das `<div>` erstmals dem DOM hinzugefügt wird, sehen Sie den Hintergrund von rot nach blau übergehen. Nach einer definierten Verzögerung entfernen wir die `showing`-Klasse vom `<div>` über JavaScript. Zu diesem Zeitpunkt wird es von blau zurück zu gelb wechseln, nicht rot. Dies beweist, dass die Startstile nur dann verwendet werden, wenn das Element erstmals im DOM gerendert wird. Sobald es erschienen ist, wechselt das Element zurück zum Standardstil, der auf ihm eingestellt wurde.

Nach einer weiteren Verzögerung entfernen wir das `<div>` vollständig aus dem DOM, um den Anfangszustand des Beispiels zurückzusetzen, sodass es erneut ausgeführt werden kann.

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

{{ EmbedLiveSample("Demonstration der Verwendung von Startstilen", "100%", "150") }}

### Popover animieren

In diesem Beispiel wird ein [Popover](/de/docs/Web/API/Popover_API) mithilfe von [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) animiert. Basis-Eintritts- und Austrittsanimationen werden mithilfe der {{CSSxRef("transition")}}-Eigenschaft bereitgestellt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}}-Element, das als Popover mithilfe des [Popover]-Attributs deklariert ist und ein {{htmlelement("button")}}-Element, das als Anzeige-Steuerung des Popovers mittels seines [popovertarget]-Attributs bestimmt ist.

```html
<button popovertarget="mypopover">Show the popover</button>
<div popover="auto" id="mypopover">I'm a Popover! I should animate.</div>
```

#### CSS

In diesem Beispiel möchten wir zwei Eigenschaften animieren, {{cssxref("opacity")}} und {{cssxref("transform")}} (genauer gesagt, eine horizontal skalierende Transformation), um das Popover ein- und auszublenden sowie horizontal wachsen und schrumpfen zu lassen.

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

Um dies zu erreichen, haben wir einen Startzustand für diese Eigenschaften im Standard-versteckten Zustand des Popover-Elements (ausgewählt via `[popover]`) gesetzt und einen Endzustand im offenen Zustand des Popovers (ausgewählt via die {{cssxref(":popover-open")}}-Pseudoklasse).

Wir setzen dann eine {{cssxref("transition")}}-Eigenschaft, um zwischen den beiden Zuständen zu animieren. Ein Startzustand für die Animation ist in einer `@starting-style` At-Regel enthalten, um die Eintrittsanimation zu aktivieren.

Da das animierte Element beim Anzeigen in das {{Glossary("top_layer", "Top-Layer")}} befördert wird und aus dem Top-Layer entfernt wird, wenn es versteckt wird (mit {{cssxref("display", "display: none")}}), sind einige zusätzliche Schritte erforderlich, um sicherzustellen, dass die Animation in beide Richtungen funktioniert:

- "display" wird zur Liste der Übergangselemente hinzugefügt, um sicherzustellen, dass das animierte Element während der gesamten Ein- und Austrittsanimation sichtbar bleibt (auf `display: block` oder einen anderen sichtbaren `display`-Wert gesetzt). Ohne dies wäre die Austrittsanimation nicht sichtbar; faktisch würde das Popover einfach verschwinden. Beachten Sie, dass der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} auch im Shorthand gesetzt wird, um die Animation zu aktivieren.
- {{cssxref("overlay")}} wird zur Liste der Übergangselemente hinzugefügt, um sicherzustellen, dass das Entfernen des Elements aus dem Top-Layer aufgeschoben wird, bis die Animation endet. Dies macht keinen großen Unterschied bei Animationen wie dieser, aber in komplexeren Fällen kann es, wenn dies nicht gemacht wird, dazu führen, dass das Element zu schnell aus dem Overlay entfernt wird, was bedeutet, dass die Animation nicht glatt oder effektiv ist. Auch hier ist `transition-behavior: allow-discrete` erforderlich, damit die Animation abläuft.

> [!NOTE]
> Wir haben auch eine Transition auf dem {{cssxref("::backdrop")}} eingefügt, der hinter dem Popover erscheint, wenn es geöffnet ist, um eine angenehme Verdunkelungsanimation bereitzustellen. `[popover]:popover-open::backdrop` wird verwendet, um das Backdrop zu selektieren, wenn das Popover geöffnet ist.

#### Ergebnis

Der Code wird wie folgt gerendert:

{{ EmbedLiveSample("Popover animieren", "100%", "200") }}

> [!NOTE]
> Da Popovers jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das Popover bei jeder Eintrittsübergang von seinen `@starting-style`-Stilen zu seinen `[popover]:popover-open`-Stilen. Wenn das Popover geschlossen wird, wechselt es von seinem `[popover]:popover-open`-Zustand zum Standard-`[popover]`-Zustand.

> [!NOTE]
> Sie können ein Beispiel finden, das das Umblenden eines {{htmlelement("dialog")}}-Elements und seines Backdrops zeigt, während es ein- und ausgeblendet wird, auf der `<dialog>`-Referenzseite — siehe [Transitioning dialog elements](/de/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements).

### Übergang von Elementen bei DOM-Hinzufügung und -Entfernung

Dieses Beispiel enthält einen Button, der, wenn er gedrückt wird, neue Elemente zu einem {{htmlelement("section")}}-Container hinzufügt. Jedes Element enthält wiederum einen verschachtelten Button, der, wenn er gedrückt wird, das Element entfernt. Dieses Beispiel zeigt, wie man Transitionen verwendet, um Elemente zu animieren, wenn sie zum DOM hinzugefügt oder daraus entfernt werden.

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

Wenn der Button "Neue Spalte erstellen" geklickt wird, wird die `createColumn()`-Funktion aufgerufen. Diese erstellt ein {{htmlelement("div")}}-Element mit einer zufällig generierten Hintergrundfarbe und ein {{htmlelement("button")}}-Element, um das `<div>` zu schließen. Anschließend wird der `<button>` dem `<div>` hinzugefügt und das `<div>` dem `<section>`-Container hinzugefügt.

Wir fügen dem Schließ-Button dann einen Event-Listener über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Das Klicken auf den Schließ-Button bewirkt zwei Dinge:

- Fügt der `<div>`-Klasse die `fade-out`-Klasse hinzu. Das Hinzufügen der Klasse löst die Austrittsanimation aus, die auf dieser Klasse festgelegt ist.
- Entfernt das `<div>` nach einer Verzögerung von 1000ms. Der [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verzögert das Entfernen des `<div>` aus dem DOM (über [`Element.remove()`](/de/docs/Web/API/Element/remove)), bis die Animation beendet ist.

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

Um die {{cssxref("opacity")}} und {{cssxref("scale")}} jedes `<div>` zu animieren, während es dem DOM hinzugefügt und dann beim Entfernen aus dem DOM rückgängig gemacht wird, gehen wir wie folgt vor:

- Geben Sie den Endzustand der Eigenschaften, die Sie übergehen möchten, in der `div { ... }`-Regel an.
- Geben Sie den Startzustand, von dem aus Sie die Eigenschaften übergehen möchten, in einem `@starting-style`-Block an.
- Geben Sie die Austrittsanimation in der `.fade-out`-Regel an — dies ist die Klasse, die das JavaScript den `<div>`-Elementen zuweist, wenn ihre Schaltflächen gedrückt werden. Neben der Festlegung der Endzustände von `opacity` und `scale` setzen wir auch [`display: none`](/de/docs/Web/CSS/display) auf die `<div>`s — wir möchten, dass sie sofort nicht mehr verfügbar sind, wenn sie aus der Benutzeroberfläche entfernt werden.
- Geben Sie die {{cssxref("transition")}}-Liste in der `div { ... }`-Regel an, um `opacity`, `scale` und `display` zu animieren. Beachten Sie, dass für `display` auch der Wert {{cssxref("transition-behavior", "transition-behavior: allow-discrete")}} im Shorthand gesetzt wird, damit es animiert wird.

#### Ergebnis

Das Endergebnis sieht wie folgt aus:

{{ EmbedLiveSample("Übergang von Elementen bei DOM-Hinzufügung und -Entfernung", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions)-Modul
- {{cssxref("overlay")}}
- {{cssxref("transition-behavior")}}
- [`CSSStartingStyleRule`](/de/docs/Web/API/CSSStartingStyleRule)
- [Vier neue CSS-Funktionen für nahtlose Eintritts- und Austrittsanimationen](https://developer.chrome.com/blog/entry-exit-animations/) auf developer.chrome.com (2023)
