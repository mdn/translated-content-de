---
title: content-visibility
slug: Web/CSS/content-visibility
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`content-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob ein Element überhaupt seine Inhalte rendert, und erzwingt eine starke Reihe von Einschränkungen, die es den Benutzeragenten ermöglichen, große Bereiche der Layout- und Rendering-Arbeit potenziell auszulassen, bis sie benötigt werden. Sie ermöglicht es dem Benutzeragenten, die Renderarbeit eines Elements (einschließlich Layout und Malen) zu überspringen, bis sie benötigt wird, was das anfängliche Laden der Seite wesentlich schneller macht.

> [!NOTE]
> Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis wird bei jedem Element ausgelöst, bei dem `content-visibility: auto` eingestellt ist, wenn seine Renderarbeit beginnt oder aufhört, übersprungen zu werden. Dies bietet eine bequeme Möglichkeit für den Code einer App, Rendering-Prozesse zu starten oder zu stoppen (z. B. Zeichnen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, wodurch Rechenleistung gespart wird.

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
  - : Keine Auswirkung. Die Inhalte des Elements werden normal ausgelegt und gerendert. Dies ist der Standardwert.
- `hidden`
  - : Das Element [überspringt seine Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents). Die übersprungenen Inhalte dürfen für Benutzeragenten-Funktionen nicht zugänglich sein, wie z.B. die Seiten-Suche, Tab-Order-Navigation, usw., noch dürfen sie auswählbar oder fokussierbar sein. Dies ist ähnlich wie das Geben der Inhalte `display: none`.
- `auto`
  - : Das Element schaltet Layout-, Stil- und Malcontainment ein. Wenn das Element nicht [für den Benutzer relevant](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) ist, überspringt es auch seine Inhalte. Im Gegensatz zu `hidden` müssen die übersprungenen Inhalte immer noch wie gewohnt für Benutzeragenten-Funktionen wie die Seiten-Suche, Tab-Order-Navigation usw. verfügbar sein und müssen wie gewohnt fokussierbar und auswählbar sein.

## Beschreibung

### Animieren und Überblenden von content-visibility

[Unterstützende Browser](#browser-kompatibilität) animieren/überblenden `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete).

Diskrete Animation bedeutet im Allgemeinen, dass die Eigenschaft nach 50% der Animationsdauer zwischen zwei Werten wechselt. Im Fall von `content-visibility` wird der Browser jedoch zwischen den beiden Werten wechseln, um den animierten Inhalt während der gesamten Animationsdauer zu zeigen. Beispielsweise:

- Beim Animieren von `content-visibility` von `hidden` zu `visible` wird der Wert bei `0%` der Animationsdauer auf `visible` gesetzt, sodass er während der gesamten Dauer sichtbar ist.
- Beim Animieren von `content-visibility` von `visible` zu `hidden` wird der Wert bei `100%` der Animationsdauer auf `hidden` gesetzt, sodass er während der gesamten Dauer sichtbar ist.

Dieses Verhalten ist nützlich, um Ein- und Ausblendeanimationen zu erstellen, bei denen Sie z. B. einige Inhalte aus dem DOM mit `content-visibility: hidden` entfernen möchten, aber eine sanfte Überblendung (wie ein Fade-out) wünschen, anstatt dass es sofort verschwindet.

Beim Animieren von `content-visibility` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf `content-visibility` gesetzt werden. Dies ermöglicht effektiv Übergänge von `content-visibility`.

> [!NOTE]
> Wenn Sie den `content-visibility`-Wert eines Elements überblenden, müssen Sie keine Ausgangswerte für überblendete Eigenschaften mit einem [`@starting-style`](/de/docs/Web/CSS/@starting-style) Block angeben, wie Sie es beim [Überblenden von `display`](/de/docs/Web/CSS/display#animating_display) tun. Dies liegt daran, dass `content-visibility` ein Element nicht wie `display` aus dem DOM verbirgt: Es überspringt lediglich das Rendern des Inhalts.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Off-Screen-Inhalte innerhalb einer `content-visibility: auto` Eigenschaft verbleiben im Document Object Model und dem Barrierefreiheit-Baum. Dies ermöglicht die Verbesserung der Seitenleistung mit `content-visibility: auto`, ohne negative Auswirkungen auf die Barrierefreiheit.

Da Stile für Off-Screen-Inhalte nicht gerendert werden, _erscheinen_ Elemente, die absichtlich mit `display: none` oder `visibility: hidden` verborgen sind, _immer noch im Barrierefreiheit-Baum_. Wenn Sie nicht möchten, dass ein Element im Barrierefreiheit-Baum erscheint, verwenden Sie `aria-hidden="true"`.

## Beispiele

### Verwendung von auto, um die Rendering-Kosten langer Seiten zu reduzieren

Das folgende Beispiel zeigt die Verwendung von `content-visibility: auto`, um das Malen und Rendern von Off-Screen-Sektionen zu überspringen. Wenn ein `section` außerhalb des Viewports ist, wird das Malen des Inhalts übersprungen, bis die Sektion nahe am Viewport ist, was sowohl die Ladezeit als auch die Interaktionen auf der Seite verbessert.

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

Die `contain-intrinsic-size` Eigenschaft fügt jedem `section` Element eine Standardgröße von 500px in Höhe und Breite hinzu. Nachdem ein Abschnitt gerendert wurde, behält er seine gerenderte intrinsische Größe bei, auch wenn er aus dem Viewport gescrollt wird.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Verwendung von hidden zur Verwaltung der Sichtbarkeit

Das folgende Beispiel zeigt, wie die Sichtbarkeit von Inhalten mit JavaScript verwaltet werden kann. Die Verwendung von `content-visibility: hidden;` anstelle von `display: none;` bewahrt den Renderzustand von Inhalten, wenn sie verborgen sind, und das Rendern ist schneller.

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

Die `content-visibility` Eigenschaft wird auf Absätzen gesetzt, die direkte Kinder von Elementen mit den Klassen `visible` und `hidden` sind. In unserem Beispiel können wir Inhalte in Absätzen je nach CSS-Klasse der übergeordneten div-Elemente anzeigen und verbergen.

Die `contain-intrinsic-size` Eigenschaft ist enthalten, um die Inhaltsgröße darzustellen. Dies hilft, Layoutverschiebungen zu reduzieren, wenn Inhalte verborgen werden.

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

### Animieren von content-visibility

In diesem Beispiel haben wir ein {{htmlelement("div")}} Element, dessen Inhalt durch Klicken oder Drücken einer beliebigen Taste zwischen angezeigt und verborgen umgeschaltet werden kann.

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

Im CSS setzen wir anfänglich `content-visibility: hidden;` auf das `<div>`, um seinen Inhalt zu verbergen. Wir richten dann `@keyframes` Animationen ein und heften sie an Klassen, um das `<div>` anzuzeigen und auszublenden, indem wir `content-visibility` und [`color`](/de/docs/Web/CSS/color) animieren, sodass Sie einen sanften Animationseffekt erhalten, wenn der Inhalt ein-/ausgeblendet wird.

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
    color: rgb(0 0 0 / 0%);
  }

  100% {
    content-visibility: visible;
    color: rgb(0 0 0 / 100%);
  }
}

@keyframes hide {
  0% {
    content-visibility: visible;
    color: rgb(0 0 0 / 100%);
  }

  100% {
    content-visibility: hidden;
    color: rgb(0 0 0 / 0%);
  }
}
```

#### JavaScript

Schließlich verwenden wir JavaScript, um die `.show` und `.hide` Klassen auf das `<div>` entsprechend anzuwenden, um die Animationen anzuwenden, wenn es zwischen den angezeigten und verborgenen Zuständen umgeschaltet wird.

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

- [CSS Containment](/de/docs/Web/CSS/CSS_containment)
- [`contain-intrinsic-size`](/de/docs/Web/CSS/contain-intrinsic-size)
- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) (web.dev)
