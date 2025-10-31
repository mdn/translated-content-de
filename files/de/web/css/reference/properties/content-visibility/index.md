---
title: content-visibility
slug: Web/CSS/Reference/Properties/content-visibility
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`content-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob ein Element seine Inhalte überhaupt rendert, und erzwingt eine starke Menge an Beschränkungen, die es Benutzeragenten ermöglichen, große Teile der Layout- und Rendering-Arbeit potenziell auszulassen, bis sie benötigt werden. Dadurch kann der Benutzeragent die Renderarbeit eines Elements (einschließlich Layout und Zeichen) überspringen, bis sie benötigt wird – was das anfängliche Laden der Seite viel schneller macht.

> [!NOTE]
> Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis wird auf jedem Element mit `content-visibility: auto` ausgelöst, wenn die Renderarbeit begonnen oder gestoppt wird. Dies bietet eine bequeme Möglichkeit, dass der Code einer Anwendung Renderprozesse startet oder stoppt (z.B. das Zeichnen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, wodurch Rechenleistung gespart wird.

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
  - : Kein Effekt. Der Inhalt des Elements wird normal angeordnet und gerendert. Dies ist der Standardwert.
- `hidden`
  - : Das Element [überspringt seine Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents). Die übersprungenen Inhalte dürfen nicht über Benutzeragenten-Funktionen wie Seitensuche, Tab-Navigation usw. zugänglich, wählbar oder fokussierbar sein. Dies ist ähnlich wie den Inhalten `display: none` zu geben.
- `auto`
  - : Das Element aktiviert Layout-Containment, Stil-Containment und Zeichen-Containment. Wenn das Element nicht für den Nutzer [relevant ist](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user), überspringt es auch seine Inhalte. Im Gegensatz zu `hidden` müssen die übersprungenen Inhalte jedoch normal über Benutzeragenten-Funktionen zugänglich, auswählbar und fokussierbar sein, wie z.B. Seitensuche, Tab-Navigation, usw.

## Beschreibung

### Animation und Übergänge von content-visibility

[Unterstützende Browser](#browser-kompatibilität) animieren/übergangen `content-visibility` mit einer Variation der [diskreten Animationstypen](/de/docs/Web/CSS/CSS_animated_properties#discrete).

Diskrete Animation bedeutet allgemein, dass die Eigenschaft während der Animation bei 50% der Zeit zwischen zwei Werten wechselt. Im Fall von `content-visibility` wird der Browser jedoch zwischen den beiden Werten wechseln, um die animierten Inhalte für die gesamte Animationsdauer anzuzeigen. Also zum Beispiel:

- Wenn `content-visibility` von `hidden` zu `visible` animiert wird, wechselt der Wert bei `0%` der Animationsdauer zu `visible`, damit es die ganze Zeit sichtbar ist.
- Wenn `content-visibility` von `visible` zu `hidden` animiert wird, wechselt der Wert bei `100%` der Animationsdauer zu `hidden`, damit es die ganze Zeit sichtbar ist.

Dieses Verhalten ist nützlich, um Ein-/Austrittsanimationen zu erstellen, bei denen Sie zum Beispiel einige Inhalte mit `content-visibility: hidden` aus dem DOM entfernen wollen, aber einen sanften Übergang (z.B. ein Überblenden) anstelle eines sofortigen Verschwindens wünschen.

Wenn `content-visibility` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) animiert wird, muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auf `content-visibility` gesetzt werden. Dies ermöglicht effektiv `content-visibility` Übergänge.

> [!NOTE]
> Wenn Sie den `content-visibility` Wert eines Elements übergehen, müssen Sie keine festgelegten Startwerte für die übergangenen Eigenschaften mit einem [`@starting-style`](/de/docs/Web/CSS/@starting-style) Block angeben, wie Sie es beim [Übergang von `display`](/de/docs/Web/CSS/Reference/Properties/display#animating_display) tun. Das liegt daran, dass `content-visibility` ein Element nicht aus dem DOM verbirgt wie `display`: es überspringt lediglich das Rendern des Inhalts des Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Inhalte außerhalb des Bildschirms innerhalb einer `content-visibility: auto` Eigenschaft bleiben im Document Object Model und im Barrierefreiheitsbaum. Dies ermöglicht es, die Seitenleistung mit `content-visibility: auto` zu verbessern, ohne die Barrierefreiheit negativ zu beeinflussen.

Da Stile für Inhalte außerhalb des Bildschirms nicht gerendert werden, erscheinen Elemente, die absichtlich mit `display: none` oder `visibility: hidden` versteckt wurden, _weiterhin im Barrierefreiheitsbaum_. Wenn Sie nicht möchten, dass ein Element im Barrierefreiheitsbaum erscheint, verwenden Sie `aria-hidden="true"`.

## Beispiele

### Verwenden von auto zur Reduzierung der Renderkosten langer Seiten

Das folgende Beispiel zeigt die Verwendung von `content-visibility: auto`, um das Zeichnen und Rendern von außerhalb des Bildschirms liegenden Abschnitten zu überspringen. Wenn ein `section` sich außerhalb des Viewports befindet, wird das Zeichnen des Inhalts übersprungen, bis der Abschnitt nahe an den Viewport kommt, was sowohl beim Laden als auch bei den Interaktionen auf der Seite hilft.

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

### Verwenden von hidden zur Steuerung der Sichtbarkeit

Das folgende Beispiel zeigt, wie die Sichtbarkeit von Inhalten mit JavaScript gesteuert werden kann. Die Verwendung von `content-visibility: hidden;` anstelle von `display: none;` bewahrt den Rendering-Zustand des Inhalts, wenn er versteckt ist und das Rendering ist schneller.

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

Die `content-visibility` Eigenschaft wird auf Absätze gesetzt, die direkte Kinder von Elementen mit den Klassen `visible` und `hidden` sind. In unserem Beispiel können wir Inhalte in Absätzen je nach CSS-Klasse der übergeordneten div-Elemente anzeigen und verbergen.

Die `contain-intrinsic-size` Eigenschaft ist enthalten, um die Inhaltsgröße darzustellen. Dies hilft, Layoutverschiebungen zu reduzieren, wenn Inhalte versteckt werden.

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

In diesem Beispiel haben wir ein {{htmlelement("div")}} Element, dessen Inhalt durch Klicken oder Drücken einer Taste zwischen angezeigt und versteckt umgeschaltet werden kann.

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

Im CSS setzen wir zunächst `content-visibility: hidden;` auf dem `<div>`, um dessen Inhalt zu verstecken. Dann richten wir `@keyframes` Animationen ein und ordnen sie Klassen zu, um das `<div>` anzuzeigen und zu verbergen, indem `content-visibility` und [`color`](/de/docs/Web/CSS/Reference/Properties/color) animiert werden, sodass Sie einen sanften Animationseffekt erhalten, wenn der Inhalt ein-/ausgeblendet wird.

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

Schließlich verwenden wir JavaScript, um die Klassen `.show` und `.hide` auf das `<div>` anzuwenden, wie es angebracht ist, um die Animationen anzuwenden, wenn es zwischen angezeigten und versteckten Zuständen umgeschaltet wird.

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
- [`contain-intrinsic-size`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-size)
- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) (web.dev)
