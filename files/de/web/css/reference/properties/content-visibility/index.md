---
title: content-visibility
slug: Web/CSS/Reference/Properties/content-visibility
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`content-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob ein Element seine Inhalte überhaupt rendert, und erzwingt eine starke Menge von Containments, wodurch Benutzeragenten möglicherweise große Teile der Layout- und Renderingarbeit auslassen können, bis sie benötigt werden. Sie ermöglicht es dem Benutzeragenten, die Renderarbeit eines Elements (einschließlich Layout und Zeichnen) zu überspringen, bis sie benötigt wird — was das initiale Laden der Seite erheblich beschleunigt.

> [!NOTE]
> Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis wird bei jedem Element ausgelöst, das `content-visibility: auto` gesetzt hat, wenn seine Renderarbeit beginnt oder aufhört, übersprungen zu werden. Dies bietet eine bequeme Möglichkeit für den Code einer App, Renderprozesse zu starten oder zu stoppen (z. B. das Zeichnen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, und so Rechenleistung zu sparen.

{{InteractiveExample("CSS Demo: content-visibility")}}

```css interactive-example-choice
content-visibility: visible;
```

```css interactive-example-choice
content-visibility: hidden;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="container" id="example-element">
    <div class="child">
      <span>This is an inner div</span>
    </div>
  </div>
</section>
```

```css interactive-example
.container {
  width: 140px;
  height: 140px;
  border: 3px solid rgb(64 28 163);
  background-color: rgb(135 136 184);
  display: flex;
  align-items: center;
  justify-content: center;
}

.child {
  border: 3px solid rgb(64 28 163);
  background-color: wheat;
  color: black;
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## Syntax

```css
/* Keyword values */
content-visibility: visible;
content-visibility: hidden;
content-visibility: auto;

/* Global values */
content-visibility: inherit;
content-visibility: initial;
content-visibility: revert;
content-visibility: revert-layer;
content-visibility: unset;
```

### Werte

- `visible`
  - : Keine Wirkung. Die Inhalte des Elements werden normal layoutet und gerendert. Dies ist der Standardwert.
- `hidden`
  - : Das Element [überspringt seine Inhalte](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents). Die übersprungenen Inhalte dürfen für benutzeragentenbezogene Funktionen, wie Suchen auf der Seite, Tabulatornavigation usw., nicht zugänglich sein und dürfen weder auswählbar noch fokussierbar sein. Dies ist ähnlich wie das Zuweisen von `display: none` zu den Inhalten.
- `auto`
  - : Das Element aktiviert Layout-, Stil- und Zeichen-Containment. Wenn das Element nicht [relevant für den Benutzer ist](/de/docs/Web/CSS/Guides/Containment/Using#relevant_to_the_user), überspringt es auch seine Inhalte. Im Gegensatz zu `hidden` müssen die übersprungenen Inhalte jedoch weiterhin benutzeragentenbezogenen Funktionen wie Suchen auf der Seite, Tabulatornavigation usw. normal zugänglich sein und müssen normal fokussierbar und auswählbar sein.

## Beschreibung

### Animieren und Übergänge von content-visibility

[Unterstützende Browser](#browser-kompatibilität) animieren/übertragen `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete).

Diskrete Animation bedeutet im Allgemeinen, dass die Eigenschaft zur Hälfte der Animation zwischen zwei Werten umschaltet. Im Fall von `content-visibility` schaltet der Browser jedoch zwischen den beiden Werten, um den animierten Inhalt für die gesamte Animationsdauer zu zeigen. Zum Beispiel:

- Wenn `content-visibility` von `hidden` zu `visible` animiert wird, schaltet der Wert bei `0%` der Animationsdauer auf `visible`, sodass er die gesamte Zeit sichtbar ist.
- Wenn `content-visibility` von `visible` zu `hidden` animiert wird, schaltet der Wert bei `100%` der Animationsdauer auf `hidden`, sodass er die gesamte Zeit sichtbar ist.

Dieses Verhalten ist nützlich, um Ein- und Ausblendeanimationen zu erstellen, bei denen Sie beispielsweise Inhalte mit `content-visibility: hidden` aus dem DOM entfernen möchten, aber einen sanften Übergang (wie ein Ausblenden) wünschen, anstatt dass es sofort verschwindet.

Wenn `content-visibility` mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) animiert wird, muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auf `content-visibility` gesetzt werden. Dies ermöglicht effektiv `content-visibility`-Übergänge.

> [!NOTE]
> Beim Überblenden eines Elements `content-visibility`-Wert ist es nicht erforderlich, einen Satz anfänglicher Werte für die übergangenen Eigenschaften mit einem {{cssxref("@starting-style")}} Block bereitzustellen, wie es beim [Überblenden von `display`](/de/docs/Web/CSS/Reference/Properties/display#animating_display) der Fall ist. Dies liegt daran, dass `content-visibility` ein Element nicht aus dem DOM verbirgt wie `display`: Es überspringt nur das Rendern des Inhalts des Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Bildschirmexterne Inhalte innerhalb einer `content-visibility: auto` Eigenschaft verbleiben im Document Object Model und im Barrierefreiheit-Baum. Dies erlaubt es, die Seitenleistung mit `content-visibility: auto` zu verbessern, ohne die Zugänglichkeit negativ zu beeinflussen.

Da Stile für bildschirmexterne Inhalte nicht gerendert werden, erscheinen absichtlich mit `display: none` oder `visibility: hidden` versteckte Elemente _trotzdem im Barrierefreiheit-Baum_.
Wenn Sie nicht möchten, dass ein Element im Barrierefreiheit-Baum erscheint, verwenden Sie `aria-hidden="true"`.

## Beispiele

### Nutzung von auto zur Reduzierung der Rendering-Kosten langer Seiten

Das folgende Beispiel zeigt die Verwendung von `content-visibility: auto`, um das Zeichnen und Rendern von Off-Screen-Bereichen zu überspringen.
Wenn sich ein `section` außerhalb des Viewports befindet, wird das Zeichnen des Inhalts übersprungen, bis sich der Abschnitt dem Viewport nähert, was sowohl beim Laden als auch bei den Interaktionen auf der Seite hilft.

#### HTML

```html
<section>
  <!-- Content for each section… -->
</section>
<section>
  <!-- Content for each section… -->
</section>
<section>
  <!-- Content for each section… -->
</section>
<!-- … -->
```

#### CSS

Die `contain-intrinsic-size` Eigenschaft fügt jedem `section` Element standardmäßig eine Größe von 500px in der Höhe und Breite hinzu. Nachdem ein Abschnitt gerendert wurde, behält er seine gerenderte intrinsische Größe, selbst wenn er aus dem Viewport gescrollt wird.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Nutzung von hidden zur Verwaltung der Sichtbarkeit

Das folgende Beispiel zeigt, wie man die Inhalts-Sichtbarkeit mit JavaScript verwaltet.
Verwendung von `content-visibility: hidden;` anstelle von `display: none;` bewahrt den Rendering-Zustand des Inhalts, wenn er versteckt ist und das Rendering erfolgt schneller.

#### HTML

```html
<div class="hidden">
  <button class="toggle">Show</button>
  <p>
    This content is initially hidden and can be shown by clicking the button.
  </p>
</div>
<div class="visible">
  <button class="toggle">Hide</button>
  <p>
    This content is initially visible and can be hidden by clicking the button.
  </p>
</div>
```

#### CSS

Die Eigenschaft `content-visibility` ist auf Absätze gesetzt, die direkte Kinder von Elementen mit den Klassen `visible` und `hidden` sind. In unserem Beispiel können wir Inhalte in Absätzen anzeigen und ausblenden, abhängig von der CSS-Klasse der übergeordneten div-Elemente.

Die Eigenschaft `contain-intrinsic-size` ist enthalten, um die Inhaltsgröße darzustellen. Dies hilft, Layoutverschiebungen zu reduzieren, wenn Inhalte ausgeblendet werden.

```css
p {
  contain-intrinsic-size: 0 1.1em;
  border: dotted 2px;
}

.hidden > p {
  content-visibility: hidden;
}

.visible > p {
  content-visibility: visible;
}
```

#### JavaScript

```js
const handleClick = (event) => {
  const button = event.target;
  const div = button.parentElement;
  button.textContent = div.classList.contains("visible") ? "Show" : "Hide";
  div.classList.toggle("hidden");
  div.classList.toggle("visible");
};

document.querySelectorAll("button.toggle").forEach((button) => {
  button.addEventListener("click", handleClick);
});
```

#### Ergebnis

{{ EmbedLiveSample('Using hidden to manually manage visibility') }}

### Animieren der content-visibility

In diesem Beispiel haben wir ein {{htmlelement("div")}} Element, dessen Inhalt durch Klicken oder Drücken einer beliebigen Taste zwischen angezeigt und versteckt umgeschaltet werden kann.

#### HTML

```html
<p>
  Click anywhere on the screen or press any key to toggle the
  <code>&lt;div&gt;</code> content between hidden and showing.
</p>

<div>
  This is a <code>&lt;div&gt;</code> element that animates between
  <code>content-visibility: hidden;</code>and
  <code>content-visibility: visible;</code>. We've also animated the text color
  to create a smooth animation effect.
</div>
```

#### CSS

Im CSS setzen wir zunächst `content-visibility: hidden;` auf das `<div>`, um dessen Inhalt zu verbergen. Dann richten wir `@keyframes`-Animationen ein und hängen sie an Klassen an, um das `<div>` anzuzeigen und zu verbergen, wobei `content-visibility` und {{cssxref("color")}} so animiert werden, dass Sie einen glatten Animationseffekt beim Anzeigen/Verbergen des Inhalts erhalten.

```css
div {
  font-size: 1.6rem;
  padding: 20px;
  border: 3px solid red;
  border-radius: 20px;
  width: 480px;

  content-visibility: hidden;
}

/* Animation classes */

.show {
  animation: show 0.7s ease-in forwards;
}

.hide {
  animation: hide 0.7s ease-out forwards;
}

/* Animation keyframes */

@keyframes show {
  0% {
    content-visibility: hidden;
    color: transparent;
  }

  100% {
    content-visibility: visible;
    color: black;
  }
}

@keyframes hide {
  0% {
    content-visibility: visible;
    color: black;
  }

  100% {
    content-visibility: hidden;
    color: transparent;
  }
}
```

#### JavaScript

Schließlich verwenden wir JavaScript, um die Klassen `.show` und `.hide` auf das `<div>` anzuwenden, wie es zur Animation bei Umschalten zwischen angezeigten und verborgenen Zuständen erforderlich ist.

```js
const divElem = document.querySelector("div");
const htmlElem = document.querySelector(":root");

htmlElem.addEventListener("click", showHide);
document.addEventListener("keydown", showHide);

function showHide() {
  if (divElem.classList.contains("show")) {
    divElem.classList.remove("show");
    divElem.classList.add("hide");
  } else {
    divElem.classList.remove("hide");
    divElem.classList.add("show");
  }
}
```

#### Ergebnis

Das gerenderte Ergebnis sieht so aus:

{{ EmbedLiveSample("Animating content-visibility", "100%", "300") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Containment](/de/docs/Web/CSS/Guides/Containment)
- {{cssxref("contain-intrinsic-size")}}
- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) (web.dev)
