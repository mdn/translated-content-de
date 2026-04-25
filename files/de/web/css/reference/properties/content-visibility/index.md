---
title: "`content-visibility` CSS property"
short-title: content-visibility
slug: Web/CSS/Reference/Properties/content-visibility
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`content-visibility`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, ob ein Element seine Inhalte überhaupt rendert, und erzwingt gleichzeitig eine starke Menge an Containments, wodurch es Benutzeragenten ermöglicht wird, potenziell große Bereiche der Layout- und Rendering-Arbeit auszulassen, bis sie benötigt werden. Dadurch kann der Benutzeragent die Render-Arbeit eines Elements (einschließlich Layout und Malerei) überspringen, bis es benötigt wird – was den anfänglichen Seitenladevorgang erheblich beschleunigt.

> [!NOTE]
> Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)-Ereignis wird bei jedem Element ausgelöst, das `content-visibility: auto` gesetzt hat, wenn dessen Render-Arbeit beginnt oder zu überspringen aufhört. Dies bietet eine bequeme Möglichkeit, den Code einer App zu starten oder Rendering-Prozesse zu stoppen (z. B. das Zeichnen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, und dabei Rechenleistung zu sparen.

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
  - : Kein Effekt. Die Inhalte des Elements werden normal ausgelegt und gerendert. Dies ist der Standardwert.
- `hidden`
  - : Das Element [überspringt seine Inhalte](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents). Die übersprungenen Inhalte dürfen Benutzer-Agent-Funktionen wie Suchen auf der Seite, Navigationsreihenfolge der Tabulatoren usw. nicht zugänglich sein und dürfen nicht auswählbar oder fokussierbar sein. Dies ähnelt dem Setzen von `display: none` für die Inhalte.
- `auto`
  - : Das Element aktiviert Layout-Containment, Stil-Containment und Malerei-Containment. Wenn das Element nicht [für den Benutzer relevant ist](/de/docs/Web/CSS/Guides/Containment/Using#relevant_to_the_user), überspringt es auch seine Inhalte. Im Unterschied zu `hidden` müssen die übersprungenen Inhalte jedoch weiterhin für Benutzer-Agent-Funktionen wie Suchen auf der Seite, Navigationsreihenfolge der Tabulatoren usw. wie gewohnt verfügbar und wie normal fokussierbar und auswählbar sein.

## Beschreibung

### Animation und Transition von content-visibility

[Unterstützende Browser](#browser-kompatibilität) animieren/übergänge `content-visibility` mit einer Variante des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete).

Diskrete Animation bedeutet im Allgemeinen, dass die Eigenschaft während der Animation zu 50 % zwischen zwei Werten wechselt. Im Fall von `content-visibility` wechselt der Browser jedoch zwischen den beiden Werten, um den animierten Inhalt während der gesamten Animinationsdauer anzuzeigen. Zum Beispiel:

- Beim Animieren von `content-visibility` von `hidden` zu `visible` wechselt der Wert zu `visible` bei `0%` der Animationsdauer, sodass es während der gesamten Dauer sichtbar ist.
- Beim Animieren von `content-visibility` von `visible` zu `hidden` wechselt der Wert zu `hidden` bei `100%` der Animationsdauer, sodass es während der gesamten Dauer sichtbar ist.

Dieses Verhalten ist nützlich für das Erstellen von Ein-/Ausblendeanimationen, bei denen Sie z. B. Inhalte mit `content-visibility: hidden` aus dem DOM entfernen möchten, jedoch eine sanfte Transition (wie ein Ausblenden) anstelle eines sofortigen Verschwindens wünschen.

Beim Animieren von `content-visibility` mit [CSS-Transitionen](/de/docs/Web/CSS/Guides/Transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auf `content-visibility` gesetzt werden. Dies ermöglicht effektiv `content-visibility`-Übergänge.

> [!NOTE]
> Wenn Sie den `content-visibility`-Wert eines Elements übergehen, müssen Sie keinen Satz von Startwerten für übergangene Eigenschaften unter Verwendung eines {{cssxref("@starting-style")}}-Blocks bereitstellen, wie Sie es tun, wenn Sie [`display` übergehen](/de/docs/Web/CSS/Reference/Properties/display#animating_display). Dies liegt daran, dass `content-visibility` ein Element nicht aus dem DOM verbirgt wie `display` es tut: Es überspringt lediglich das Rendern der Inhalte des Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Inhalte außerhalb des Bildschirms innerhalb einer `content-visibility: auto`-Eigenschaft bleiben im Document Object Model und im Accessibility-Tree. Dies ermöglicht die Verbesserung der Seitenleistung mit `content-visibility: auto`, ohne die Zugänglichkeit negativ zu beeinflussen.

Da Stile für Inhalte außerhalb des Bildschirms nicht gerendert werden, erscheinen Elemente, die absichtlich mit `display: none` oder `visibility: hidden` verborgen sind, _immer noch im Accessibility-Tree_.
Wenn Sie nicht möchten, dass ein Element im Accessibility-Tree erscheint, verwenden Sie `aria-hidden="true"`.

## Beispiele

### Verwendung von auto zur Reduzierung der Rendering-Kosten langer Seiten

Das folgende Beispiel zeigt die Verwendung von `content-visibility: auto`, um das Malen und Rendern von Abschnitten außerhalb des Bildschirms zu überspringen.
Wenn ein `section` außerhalb des Viewports liegt, wird das Malen des Inhalts übersprungen, bis die Sektion in die Nähe des Viewports kommt, was sowohl das Laden als auch die Interaktionen auf der Seite verbessert.

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

Die Eigenschaft `contain-intrinsic-size` fügt jedem `section`-Element eine Standardgröße von 500px in Höhe und Breite hinzu. Nachdem ein Abschnitt gerendert wurde, behält er seine gerenderte intrinsische Größe bei, selbst wenn er aus dem Viewport gescrollt wird.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Verwendung von hidden zur Verwaltung der Sichtbarkeit

Das folgende Beispiel zeigt, wie die Inhaltsanzeige mit JavaScript verwaltet werden kann.
Die Verwendung von `content-visibility: hidden;` anstelle von `display: none;` bewahrt den Renderstatus des Inhalts, wenn er verborgen ist, und das Rendering ist schneller.

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

Die `content-visibility`-Eigenschaft ist auf Absätzen gesetzt, die direkte Kinder von Elementen mit den Klassen `visible` und `hidden` sind. In unserem Beispiel können wir Inhalte in Absätzen je nach CSS-Klasse der übergeordneten `div`-Elemente anzeigen und verbergen.

Die Eigenschaft `contain-intrinsic-size` ist enthalten, um die Inhaltsgröße darzustellen. Dies hilft, Layoutverschiebungen zu reduzieren, wenn Inhalte verborgen sind.

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

In diesem Beispiel haben wir ein {{htmlelement("div")}}-Element, dessen Inhalt durch Klicken oder Drücken einer beliebigen Taste zwischen sichtbar und verborgen umgeschaltet werden kann.

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

Im CSS setzen wir zunächst `content-visibility: hidden;` auf das `<div>`, um dessen Inhalt zu verbergen. Dann richten wir `@keyframes`-Animationen ein und fügen sie Klassen hinzu, um das `<div>` anzuzeigen und zu verbergen, `content-visibility` und {{cssxref("color")}} zu animieren damit ein sanfter Animationseffekt entsteht, wenn der Inhalt gezeigt/verborgen wird.

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

Schließlich verwenden wir JavaScript, um die `.show`- und `.hide`-Klassen auf das `<div>` anzuwenden, damit die Animationen angewendet werden, während es zwischen sichtbaren und verborgenen Zuständen umgeschaltet wird.

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

- [CSS-Containment](/de/docs/Web/CSS/Guides/Containment)
- {{cssxref("contain-intrinsic-size")}}
- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) (web.dev)
