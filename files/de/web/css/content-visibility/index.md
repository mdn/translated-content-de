---
title: content-visibility
slug: Web/CSS/content-visibility
l10n:
  sourceCommit: 8697d1b0b7ace72cffe786933aae6c2f9b454b14
---

{{CSSRef}}

Die **`content-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft kontrolliert, ob ein Element seine Inhalte überhaupt rendert, und erzwingt eine starke Menge von Enthüllungen, die den Benutzeragenten ermöglichen, möglicherweise große Bereiche der Layout- und Rendering-Arbeit auszulassen, bis sie benötigt werden. Sie ermöglicht es dem Benutzeragenten, die Rendering-Arbeit eines Elements (einschließlich Layout und Malerei) zu überspringen, bis es benötigt wird - was das anfängliche Laden der Seite deutlich schneller macht.

> [!NOTE]
> Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis tritt bei jedem Element auf, das `content-visibility: auto` gesetzt hat, wenn seine Rendering-Arbeit beginnt oder aufhört, übersprungen zu werden. Dies bietet eine praktische Möglichkeit für den Code einer App, Renderprozesse zu starten oder zu stoppen (z. B. Zeichnen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, um Rechenleistung zu sparen.

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
  border: 3px solid rgb(64, 28, 163);
  background-color: rgb(135, 136, 184);
  display: flex;
  align-items: center;
  justify-content: center;
}

.child {
  border: 3px solid rgb(64, 28, 163);
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
  - : Keine Wirkung. Die Inhalte des Elements werden wie gewohnt layoutet und gerendert. Dies ist der Standardwert.
- `hidden`
  - : Das Element [überspringt seine Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents). Die übersprungenen Inhalte dürfen nicht für Benutzeragenten-Funktionen zugänglich sein, wie z. B. die Seitensuche, Tab-Reihenfolge-Navigation usw., und dürfen nicht auswählbar oder fokussierbar sein. Dies ist ähnlich wie das Setzen von `display: none` für die Inhalte.
- `auto`
  - : Das Element schaltet Layout-Kontainment, Stil-Kontainment und Mal-Kontainment ein. Wenn das Element nicht [relevant für den Benutzer](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) ist, überspringt es auch seine Inhalte. Im Gegensatz zu `hidden` müssen die übersprungenen Inhalte jedoch weiterhin normal für Benutzeragenten-Funktionen wie die Seitensuche, Tab-Reihenfolge-Navigation usw. verfügbar sein und müssen normal fokussierbar und auswählbar sein.

## Beschreibung

### Animieren und Überblenden von content-visibility

[Unterstützende Browser](#browser-kompatibilität) animieren/überblenden `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete).

Diskrete Animation bedeutet im Allgemeinen, dass die Eigenschaft 50 % der Animationsdauer zwischen zwei Werten umschalten wird. Im Fall von `content-visibility` schaltet der Browser jedoch zwischen den beiden Werten um, um den animierten Inhalt für die gesamte Dauer der Animation zu zeigen. Zum Beispiel:

- Wenn `content-visibility` von `hidden` zu `visible` animiert wird, wird der Wert zu `visible` bei `0 %` der Animationsdauer umgeschaltet, sodass es die gesamte Zeit sichtbar ist.
- Wenn `content-visibility` von `visible` zu `hidden` animiert wird, wird der Wert zu `hidden` bei `100 %` der Animationsdauer umgeschaltet, sodass es die gesamte Zeit sichtbar ist.

Dieses Verhalten ist nützlich für das Erstellen von Ein- und Ausblendeffekten, bei denen Sie zum Beispiel etwas Inhalt aus dem DOM entfernen möchten mit `content-visibility: hidden`, aber eine sanfte Überblendung (wie ein Ausblenden) anstelle eines sofortigen Verschwindens wünschen.

Bei der Animation von `content-visibility` mit [CSS transitions](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf `content-visibility` gesetzt werden. Dies ermöglicht effektiv Übergänge bei `content-visibility`.

> [!NOTE]
> Wenn Sie den `content-visibility`-Wert eines Elements überblenden, müssen Sie keine Satz von Startwerten für überblendete Eigenschaften mit einem [`@starting-style`](/de/docs/Web/CSS/@starting-style) Block bereitstellen, wie Sie es bei der [Überblendung von `display`](/de/docs/Web/CSS/display#animating_display) tun. Dies liegt daran, dass `content-visibility` ein Element nicht aus dem DOM verbirgt wie `display`: Es überspringt einfach das Rendern des Inhalts des Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Inhalte außerhalb des Bildschirms innerhalb einer `content-visibility: auto` Eigenschaft bleiben im Document Object Model und im Barrierefreiheitsbaum. Dies ermöglicht eine Verbesserung der Seitenleistung mit `content-visibility: auto`, ohne die Zugänglichkeit negativ zu beeinflussen.

Da Stile für Inhalt außerhalb des Bildschirms nicht gerendert werden, erscheinen Elemente, die absichtlich mit `display: none` oder `visibility: hidden` versteckt sind, _immer noch im Barrierefreiheitsbaum_.
Wenn Sie nicht möchten, dass ein Element im Barrierefreiheitsbaum erscheint, verwenden Sie `aria-hidden="true"`.

## Beispiele

### Verwendung von auto zur Reduzierung der Rendering-Kosten langer Seiten

Das folgende Beispiel zeigt die Verwendung von `content-visibility: auto`, um das Malen und Rendern von Bereichen außerhalb des Bildschirms zu überspringen.
Wenn ein `section` außerhalb des Sichtfensters liegt, wird das Malen des Inhalts übersprungen, bis der Abschnitt dem Sichtfenster nahekommt, was sowohl beim Laden als auch bei der Interaktion auf der Seite hilft.

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

Die Eigenschaft `contain-intrinsic-size` fügt jedem `section`-Element eine Standardgröße von 500px in Höhe und Breite hinzu. Nachdem ein Abschnitt gerendert wurde, behält er seine gerenderte intrinsische Größe bei, auch wenn er aus dem Sichtfenster gescrollt wird.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Verwendung von hidden zur Steuerung der Sichtbarkeit

Im folgenden Beispiel wird gezeigt, wie Sie die Sichtbarkeit von Inhalten mit JavaScript steuern.
Die Verwendung von `content-visibility: hidden;` anstelle von `display: none;` bewahrt den Rendering-Zustand des Inhalts, wenn er verborgen ist, und das Rendering ist schneller.

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

Die Eigenschaft `content-visibility` wird auf Absätzen gesetzt, die direkte Kinder von Elementen mit den Klassen `visible` und `hidden` sind. In unserem Beispiel können wir den Inhalt in Absätzen je nach CSS-Klasse der übergeordneten div-Elemente anzeigen und verbergen.

Die `contain-intrinsic-size` Eigenschaft ist enthalten, um die Inhaltsgröße darzustellen. Dies hilft, Layoutverschiebungen zu reduzieren, wenn Inhalte verborgen sind.

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

Im CSS setzen wir zunächst `content-visibility: hidden;` auf das `<div>`, um seinen Inhalt zu verbergen. Dann richten wir `@keyframes` Animationen ein und fügen sie Klassen hinzu, um das `<div>` anzuzeigen und zu verbergen, wobei `content-visibility` und [`color`](/de/docs/Web/CSS/color) animiert werden, sodass Sie einen sanften Animationseffekt erhalten, während der Inhalt angezeigt oder verborgen wird.

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

Schließlich verwenden wir JavaScript, um die `.show` und `.hide` Klassen auf das `<div>` anzuwenden, wie es angemessen ist, um die Animationen anzuwenden, während es zwischen den sichtbaren und verborgenen Zuständen umgeschaltet wird.

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

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("Animating content-visibility", "100%", "300") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Containment](/de/docs/Web/CSS/CSS_containment)
- [`contain-intrinsic-size`](/de/docs/Web/CSS/contain-intrinsic-size)
- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)
- [content-visibility: die neue CSS-Eigenschaft, die Ihre Rendering-Leistung steigert](https://web.dev/articles/content-visibility) (web.dev)
