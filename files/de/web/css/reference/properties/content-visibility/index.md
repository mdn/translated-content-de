---
title: content-visibility
slug: Web/CSS/Reference/Properties/content-visibility
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`content-visibility`**-Eigenschaft von [CSS](/de/docs/Web/CSS) steuert, ob der Inhalt eines Elements überhaupt gerendert wird und erzwingt dabei eine starke Menge an "Containments", sodass Benutzeragenten möglicherweise große Teile von Layout- und Rendering-Arbeiten auslassen können, bis sie benötigt werden. Sie ermöglicht es dem Benutzeragenten, die Rendering-Arbeit eines Elements (einschließlich Layout und Malen) zu überspringen, bis es benötigt wird — was das initiale Laden der Seite erheblich beschleunigt.

> [!NOTE]
> Das Ereignis [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) wird auf jedem Element ausgelöst, das `content-visibility: auto` gesetzt hat, wenn dessen Rendering-Arbeit beginnt oder aufhört, übersprungen zu werden. Dies bietet eine bequeme Möglichkeit, die Rendering-Prozesse einer Anwendung zu starten oder zu stoppen (z. B. das Zeichnen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, und so Rechenleistung zu sparen.

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
  - : Keine Wirkung. Die Inhalte des Elements werden wie gewohnt ausgelegt und gerendert. Dies ist der Standardwert.
- `hidden`
  - : Das Element [überspringt seine Inhalte](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents). Die übersprungenen Inhalte dürfen nicht für Benutzeragenten-Funktionen zugänglich sein, wie z. B. Suchen auf der Seite, Tab-Reihenfolge-Navigation etc., und dürfen weder auswählbar noch fokussierbar sein. Dies ähnelt dem Setzen der Inhalte auf `display: none`.
- `auto`
  - : Das Element aktiviert Layout-Containment, Stil-Containment und Mal-Containment. Wenn das Element nicht [für den Benutzer relevant ist](/de/docs/Web/CSS/Guides/Containment/Using#relevant_to_the_user), werden die Inhalte ebenfalls übersprungen. Anders als bei `hidden` müssen die übersprungenen Inhalte jedoch normal für Benutzeragenten-Funktionen wie Suchen auf der Seite, Tab-Reihenfolge-Navigation etc. verfügbar und fokussierbar sowie auswählbar sein.

## Beschreibung

### Animieren und Übergänge von content-visibility

[Unterstützende Browser](#browser-kompatibilität) animieren/übergängen `content-visibility` mit einer Variante des [diskreten Animation-Typs](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete).

Diskrete Animation bedeutet generell, dass die Eigenschaft in der Mitte der Animation zwischen zwei Werten umschaltet. Im Fall von `content-visibility` wird der Browser jedoch zwischen den beiden Werten umschalten, um den animierten Inhalt während der gesamten Animationsdauer zu zeigen. Zum Beispiel:

- Beim Animieren von `content-visibility` von `hidden` zu `visible` wird der Wert zu `visible` bei `0%` der Animationsdauer wechseln, sodass er die ganze Zeit sichtbar ist.
- Beim Animieren von `content-visibility` von `visible` zu `hidden` wird der Wert zu `hidden` bei `100%` der Animationsdauer wechseln, sodass er die ganze Zeit sichtbar ist.

Dieses Verhalten ist nützlich für das Erstellen von Ein- und Austrittsanimationen, bei denen Sie beispielsweise Inhalte mit `content-visibility: hidden` aus dem DOM entfernen, aber einen sanften Übergang (wie ein Ausblenden) möchten, anstatt dass sie sofort verschwinden.

Beim Animieren von `content-visibility` mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auf `content-visibility` gesetzt sein. Dies ermöglicht effektiv `content-visibility`-Übergänge.

> [!NOTE]
> Beim Übergang des `content-visibility`-Werts eines Elements müssen Sie keine Ausgangswerte für die übergangenen Eigenschaften mit einem [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style)-Block angeben, wie Sie es tun, wenn Sie [`display`](/de/docs/Web/CSS/Reference/Properties/display#animating_display) übergehen. Dies liegt daran, dass `content-visibility` ein Element nicht aus dem DOM ausblendet, wie `display` es tut: Es überspringt lediglich das Rendering des Inhalts des Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Inhalte außerhalb des Bildschirms mit einer `content-visibility: auto`-Eigenschaft bleiben im Document Object Model und im Barrierefreiheitsbaum enthalten. Dies ermöglicht es, die Seitenleistung mit `content-visibility: auto` zu verbessern, ohne die Barrierefreiheit negativ zu beeinflussen.

Da Stile für Inhalte außerhalb des Bildschirms nicht gerendert werden, werden Abschnitte, die absichtlich mit `display: none` oder `visibility: hidden` verborgen werden, _immer noch im Barrierefreiheitsbaum erscheinen_.
Wenn Sie nicht möchten, dass ein Element im Barrierefreiheitsbaum erscheint, verwenden Sie `aria-hidden="true"`.

## Beispiele

### Verwendung von auto, um die Rendering-Kosten langer Seiten zu reduzieren

Das folgende Beispiel zeigt die Verwendung von `content-visibility: auto`, um das Malen und Rendern von Abschnitten außerhalb des Bildschirms zu überspringen.
Wenn ein `section` aus dem Ansichtsfenster heraus ist, wird das Malen des Inhalts übersprungen, bis sich der Abschnitt dem Ansichtsfenster nähert, was sowohl beim Laden als auch bei Interaktionen auf der Seite hilft.

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

Die Eigenschaft `contain-intrinsic-size` fügt den Elementen `section` standardmäßig eine Größe von 500px für Höhe und Breite hinzu. Nachdem ein Abschnitt gerendert wurde, behält er seine gerenderte intrinsische Größe bei, auch wenn er aus dem Ansichtsfenster heraus gescrollt wird.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Verwendung von hidden, um Sichtbarkeit zu verwalten

Das folgende Beispiel zeigt, wie die Inhaltssichtbarkeit mit JavaScript verwaltet werden kann.
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

Die Eigenschaft `content-visibility` wird auf Absätzen gesetzt, die direkte Kinder von Elementen mit den Klassen `visible` und `hidden` sind. In unserem Beispiel können wir Inhalte in Absätzen anzeigen und ausblenden, abhängig von der CSS-Klasse der übergeordneten div-Elemente.

Die Eigenschaft `contain-intrinsic-size` ist enthalten, um die Inhaltsgröße darzustellen. Dies hilft, Layoutverschiebungen zu reduzieren, wenn der Inhalt versteckt ist.

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

In dem CSS setzen wir zunächst `content-visibility: hidden;` auf dem `<div>`, um seinen Inhalt zu verbergen. Dann richten wir `@keyframes`-Animationen ein und fügen sie Klassen hinzu, um das `<div>` zu zeigen und zu verbergen, wobei `content-visibility` und [`color`](/de/docs/Web/CSS/Reference/Properties/color) animiert werden, sodass Sie einen sanften Animationseffekt erhalten, während der Inhalt gezeigt/verborgen wird.

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

Schließlich verwenden wir JavaScript, um die Klassen `.show` und `.hide` auf das `<div>` anzuwenden, um die Animationen auszuführen, wenn es zwischen den Zuständen sichtbar und verborgen umgeschaltet wird.

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

Das gerenderte Ergebnis sieht aus wie folgt:

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
