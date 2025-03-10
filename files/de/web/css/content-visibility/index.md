---
title: content-visibility
slug: Web/CSS/content-visibility
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`content-visibility`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, ob ein Element seine Inhalte überhaupt rendert, zusammen mit der Durchsetzung eines starken Sets von Containments, wodurch Benutzeragenten möglicherweise große Teile der Layout- und Renderarbeit auslassen können, bis sie benötigt werden. Sie ermöglicht es dem Benutzeragenten, die Renderarbeit eines Elements (einschließlich Layout und Malen) zu überspringen, bis sie benötigt wird – was das anfängliche Laden der Seite erheblich beschleunigt.

> [!NOTE]
> Das Ereignis [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) wird für jedes Element ausgelöst, bei dem `content-visibility: auto` gesetzt ist, wenn seine Renderarbeit gestartet oder gestoppt wird. Dies bietet eine bequeme Möglichkeit für den Code einer Anwendung, Renderprozesse zu starten oder zu stoppen (z.B. das Zeichnen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, und so Rechenleistung zu sparen.

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
  - : Keine Wirkung. Die Inhalte des Elements werden wie gewohnt layoutet und gerendert.
- `hidden`
  - : Das Element [überspringt seine Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents). Die übersprungenen Inhalte dürfen nicht für Benutzeragenten-Funktionen zugänglich sein, wie beispielsweise Suchen auf der Seite, Tabulator-Navigation usw., und dürfen weder auswählbar noch fokussierbar sein. Dies ähnelt dem Zuweisen der Inhalte als `display: none`.
- `auto`
  - : Das Element aktiviert Layout-, Stil- und Mal-Containment. Falls das Element für den Benutzer nicht [relevant](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) ist, werden seine Inhalte ebenfalls übersprungen. Anders als bei `hidden` müssen die übersprungenen Inhalte jedoch wie gewohnt für Benutzeragenten-Funktionen verfügbar sein, wie z.B. Suchen auf der Seite, Tabulator-Navigation usw., und müssen fokussierbar und auswählbar sein.

## Beschreibung

### Animieren und Übergänge von content-visibility

[Unterstützende Browser](#browser-kompatibilität) animieren/transitionieren `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete).

Diskrete Animation bedeutet im Allgemeinen, dass die Eigenschaft während der Animation zur Hälfte zwischen zwei Werten umspringt. Im Fall von `content-visibility` wird der Browser jedoch zwischen den zwei Werten umschalten, um den animierten Inhalt für die gesamte Dauer der Animation zu zeigen. Zum Beispiel:

- Beim Animieren von `content-visibility` von `hidden` zu `visible` springt der Wert bei `0%` der Animationsdauer zu `visible`, sodass er während der gesamten Zeit sichtbar ist.
- Beim Animieren von `content-visibility` von `visible` zu `hidden` springt der Wert bei `100%` der Animationsdauer zu `hidden`, sodass es während der gesamten Zeit sichtbar ist.

Dieses Verhalten ist nützlich, um Ein- und Ausstiegsanimationen zu erstellen, bei denen Sie z.B. Inhalte aus dem DOM mit `content-visibility: hidden` entfernen möchten, aber einen sanften Übergang (wie ein Ausblenden) wünschen, anstatt ein sofortiges Verschwinden.

Beim Animieren von `content-visibility` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf `content-visibility` gesetzt werden. Dies aktiviert effektiv `content-visibility`-Übergänge.

> [!NOTE]
> Beim Übergang des `content-visibility`-Wertes eines Elements müssen Sie keine Startwerte für transitionierten Eigenschaften mit einem [`@starting-style`](/de/docs/Web/CSS/@starting-style)-Block bereitstellen, wie beim [Übergang von `display`](/de/docs/Web/CSS/display#animating_display). Dies liegt daran, dass `content-visibility` ein Element nicht wie `display` aus dem DOM ausblendet: Es überspringt nur das Rendern der Inhalte des Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Inhalte außerhalb des Bildschirms innerhalb einer `content-visibility: auto`-Eigenschaft bleiben im Dokumentobjektmodell und im Barrierefreiheitsbaum. Dies ermöglicht es, die Seitenleistung mit `content-visibility: auto` zu verbessern, ohne die Barrierefreiheit negativ zu beeinflussen.

Da Stile für Inhalte außerhalb des Bildschirms nicht gerendert werden, _erscheinen Elemente, die absichtlich mit `display: none` oder `visibility: hidden` versteckt wurden, dennoch im Barrierefreiheitsbaum_.
Wenn Sie nicht möchten, dass ein Element im Barrierefreiheitsbaum erscheint, verwenden Sie `aria-hidden="true"`.

## Beispiele

### Verwendung von auto zur Reduzierung der Renderkosten langer Seiten

Das folgende Beispiel zeigt die Verwendung von `content-visibility: auto`, um das Malen und Rendern von Bereichen außerhalb des sichtbaren Bereichs zu überspringen.
Wenn sich ein `section` außerhalb des Viewports befindet, wird das Malen des Inhalts übersprungen, bis die Sektion in die Nähe des Viewports kommt, was sowohl das Laden als auch die Interaktionen auf der Seite unterstützt.

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

Die Eigenschaft `contain-intrinsic-size` fügt jedem `section`-Element eine Standardgröße von 500px in Höhe und Breite hinzu. Nachdem eine Sektion gerendert wurde, behält sie ihre gerenderte intrinsische Größe bei, selbst wenn sie aus dem Viewport gescrollt wird.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Verwendung von hidden zur Steuerung der Sichtbarkeit

Das folgende Beispiel zeigt, wie die Inhaltsichtbarkeit mit JavaScript gesteuert werden kann.
Die Verwendung von `content-visibility: hidden;` anstelle von `display: none;` bewahrt den Renderzustand der Inhalte, wenn sie verborgen sind, und das Rendern erfolgt schneller.

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

Die `content-visibility`-Eigenschaft wird auf Absätzen gesetzt, die direkte Kinder von Elementen mit den Klassen `visible` und `hidden` sind. In unserem Beispiel können wir Inhalte in Absätzen je nach CSS-Klasse der übergeordneten `div`-Elemente ein- und ausblenden.

Die Eigenschaft `contain-intrinsic-size` wird hinzugefügt, um die Inhaltsgröße darzustellen. Dies hilft, das Layout-Shift zu reduzieren, wenn Inhalte verborgen werden.

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

In diesem Beispiel haben wir ein {{htmlelement("div")}}-Element, dessen Inhalt durch Klicken oder Drücken einer Taste zwischen sichtbar und versteckt umgeschaltet werden kann.

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

Im CSS setzen wir initial `content-visibility: hidden;` auf das `<div>`, um seine Inhalte zu verstecken. Dann erstellen wir `@keyframe`-Animationen und hängen sie an Klassen an, um das `<div>` zu zeigen und zu verstecken, wobei `content-visibility` und [`color`](/de/docs/Web/CSS/color) animiert werden, sodass Sie einen sanften Animationseffekt erhalten, wenn der Inhalt gezeigt/versteckt wird.

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

Schließlich verwenden wir JavaScript, um die `.show`- und `.hide`-Klassen auf das `<div>` anzuwenden, um die Animationen anzuwenden, wenn es zwischen sichtbaren und verborgenen Zuständen umgeschaltet wird.

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
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) (web.dev)
