---
title: content-visibility
slug: Web/CSS/Reference/Properties/content-visibility
l10n:
  sourceCommit: 13f5bce7caf7be6e4156655d827e5927091310b9
---

Die **`content-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob ein Element seine Inhalte überhaupt rendert, und erzwingt gleichzeitig eine starke Menge von Containments, sodass Benutzeragenten möglicherweise große Teile der Layout- und Rendering-Arbeit überspringen können, bis sie benötigt werden. Sie ermöglicht es dem Benutzeragenten, die Rendering-Arbeit eines Elements (einschließlich Layout und Painting) zu überspringen, bis sie benötigt wird, was das anfängliche Laden der Seite erheblich beschleunigt.

> [!NOTE]
> Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis wird auf jedem Element ausgelöst, das `content-visibility: auto` gesetzt hat, wenn seine Rendering-Arbeit beginnt oder aufhört, übersprungen zu werden. Dies bietet eine praktische Möglichkeit für den Code einer App, Renderprozesse (z. B. das Zeichnen auf einem {{htmlelement("canvas")}}) zu starten oder zu stoppen, wenn sie nicht benötigt werden, und so Rechenleistung zu sparen.

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
  - : Das Element [überspringt seine Inhalte](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents). Die übersprungenen Inhalte dürfen nicht für Benutzeragenten-Funktionen wie Seite-suchen, Tabulator-Navigation usw. zugänglich sein, noch dürfen sie auswählbar oder fokussierbar sein. Dies ähnelt der Angabe der Inhalte mit `display: none`.
- `auto`
  - : Das Element aktiviert Layout-Containment, Style-Containment und Render-Containment. Wenn das Element nicht [für den Benutzer relevant](/de/docs/Web/CSS/Guides/Containment/Using#relevant_to_the_user) ist, überspringt es ebenfalls seine Inhalte. Im Gegensatz zu `hidden` müssen die übersprungenen Inhalte für Benutzeragenten-Funktionen wie Seite-suchen, Tabulator-Navigation usw. weiterhin wie gewohnt verfügbar und fokussierbar sowie auswählbar sein.

## Beschreibung

### Animation und Transition von content-visibility

[Unterstützende Browser](#browser-kompatibilität) animieren/transitionieren `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete).

Diskrete Animation bedeutet im Allgemeinen, dass die Eigenschaft in der Mitte der Animation zwischen zwei Werten wechselt. Im Fall von `content-visibility` wechselt der Browser jedoch zwischen den beiden Werten, um den animierten Inhalt während der gesamten Animationsdauer anzuzeigen. Zum Beispiel:

- Beim Animieren von `content-visibility` von `hidden` zu `visible` wechselt der Wert zu `visible` bei `0%` der Animationsdauer, sodass er während der gesamten Zeit sichtbar ist.
- Beim Animieren von `content-visibility` von `visible` zu `hidden` wechselt der Wert zu `hidden` bei `100%` der Animationsdauer, sodass er während der gesamten Zeit sichtbar ist.

Dieses Verhalten ist nützlich für das Erstellen von Ein-/Austrittsanimationen, bei denen Sie z. B. Inhalte aus dem DOM mit `content-visibility: hidden` entfernen möchten, jedoch einen sanften Übergang (wie ein Ausblenden) anstelle eines sofortigen Verschwindens wünschen.

Beim Animieren von `content-visibility` mit [CSS-Transitions](/de/docs/Web/CSS/Guides/Transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auf `content-visibility` gesetzt werden. Dies aktiviert effektiv `content-visibility`-Transitions.

> [!NOTE]
> Beim Transitionieren des `content-visibility`-Wertes eines Elements benötigen Sie keinen Satz von Anfangswerten für die übergangenen Eigenschaften in einem [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style) Block, wie dies der Fall ist, wenn Sie [`display`](/de/docs/Web/CSS/Reference/Properties/display#animating_display) transitionieren. Dies liegt daran, dass `content-visibility` ein Element nicht aus dem DOM verbirgt wie `display`: es wird lediglich das Rendering des Inhalts des Elements übersprungen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Inhalte außerhalb des Bildschirms innerhalb einer `content-visibility: auto` Eigenschaft bleiben im Dokument-Objektmodell und im Zugänglichkeitsbaum. Dies ermöglicht die Verbesserung der Seitenleistung mit `content-visibility: auto`, ohne die Barrierefreiheit negativ zu beeinflussen.

Da die Stile für Inhalte außerhalb des Bildschirms nicht gerendert werden, _erscheinen_ absichtlich versteckte Elemente mit `display: none` oder `visibility: hidden` _immer noch im Zugänglichkeitsbaum_.
Wenn Sie nicht möchten, dass ein Element im Zugänglichkeitsbaum erscheint, verwenden Sie `aria-hidden="true"`.

## Beispiele

### Verwenden von auto zur Reduzierung der Rendering-Kosten bei langen Seiten

Das folgende Beispiel zeigt die Verwendung von `content-visibility: auto`, um das Painting und Rendering von Bereichen außerhalb des Bildschirms zu überspringen.
Wenn ein `section` aus dem Ansichtsfenster heraus ist, wird das Painting des Inhalts übersprungen, bis der Abschnitt sich dem Ansichtsfenster nähert, was sowohl beim Laden als auch bei Interaktionen auf der Seite hilft.

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

Die `contain-intrinsic-size` Eigenschaft fügt jeder `section`-Elementhöhe und -breite eine Standardgröße von 500px hinzu. Nachdem ein Abschnitt gerendert wurde, behält es seine gerenderte intrinsische Größe bei, auch wenn es aus dem Ansichtsfenster gescrollt wird.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Verwenden von hidden zur Verwaltung der Sichtbarkeit

Das folgende Beispiel zeigt, wie die Sichtbarkeit von Inhalten mit JavaScript verwaltet wird.
Die Verwendung von `content-visibility: hidden;` anstelle von `display: none;` bewahrt den Rendering-Zustand von Inhalten, wenn sie verborgen sind, und das Rendering erfolgt schneller.

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

Die `content-visibility`-Eigenschaft wird auf Absätzen festgelegt, die direkte Kinder von Elementen mit den Klassen `visible` und `hidden` sind. In unserem Beispiel können wir Inhalte in Absätzen anzeigen und ausblenden, je nach CSS-Klasse der übergeordneten div-Elemente.

Die `contain-intrinsic-size` Eigenschaft ist enthalten, um die Inhaltsgröße darzustellen. Dies hilft, das Layout-Verschieben zu reduzieren, wenn Inhalte verborgen sind.

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

### Animation von content-visibility

In diesem Beispiel haben wir ein {{htmlelement("div")}}-Element, dessen Inhalt durch Klicken oder Drücken einer Taste zwischen sichtbar und verborgen umgeschaltet werden kann.

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

Im CSS setzen wir zunächst `content-visibility: hidden;` auf das `<div>`, um seinen Inhalt zu verbergen. Dann richten wir `@keyframes`-Animationen ein und binden sie an Klassen, um das `<div>` anzuzeigen und zu verbergen, wobei `content-visibility` und [`color`](/de/docs/Web/CSS/Reference/Properties/color) animiert werden, sodass Sie einen glatten Animationseffekt erhalten, wenn der Inhalt angezeigt/ausgeblendet wird.

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

Schließlich verwenden wir JavaScript, um die Klassen `.show` und `.hide` auf das `<div>` anzuwenden, wie es angemessen ist, um die Animationen anzuwenden, während es zwischen den sichtbaren und verborgenen Zuständen umgeschaltet wird.

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
- [`contain-intrinsic-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-size)
- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) (web.dev)
