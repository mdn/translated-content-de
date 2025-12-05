---
title: content-visibility
slug: Web/CSS/Reference/Properties/content-visibility
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`content-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob ein Element seine Inhalte überhaupt rendert, zusammen mit einem Satz starker Enthaltungen, wodurch Benutzeragenten möglicherweise große Teile der Layout- und Rendering-Arbeit weglassen können, bis sie benötigt werden. Sie ermöglicht es dem Benutzeragenten, die Rendering-Arbeit eines Elements (einschließlich Layout und Malen) zu überspringen, bis sie benötigt wird – was das anfängliche Laden der Seite deutlich beschleunigt.

> [!NOTE]
> Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis wird bei jedem Element ausgelöst, das `content-visibility: auto` gesetzt hat, wenn seine Rendering-Arbeit beginnt oder aufhört, übersprungen zu werden. Dies bietet eine bequeme Möglichkeit für den Code einer Anwendung, Rendering-Prozesse zu starten oder zu stoppen (z. B. das Zeichnen auf einer {{htmlelement("canvas")}}), wenn diese nicht benötigt werden, und spart so Rechenleistung.

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
  - : Kein Effekt. Die Inhalte des Elements werden wie gewohnt angeordnet und gerendert. Dies ist der Standardwert.
- `hidden`
  - : Das Element [überspringt seine Inhalte](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents). Die übersprungenen Inhalte dürfen für Benutzeragenten-Funktionen, wie Suchen auf der Seite, Tab-Reihenfolge-Navigation etc., weder zugänglich noch auswählbar oder fokussierbar sein. Dies ähnelt dem Zuweisen von `display: none` an die Inhalte.
- `auto`
  - : Das Element aktiviert Layout-, Stil- und Mal-Containment. Ist das Element nicht [relevant für den Benutzer](/de/docs/Web/CSS/Guides/Containment/Using#relevant_to_the_user), überspringt es auch seine Inhalte. Im Gegensatz zu hidden müssen die übersprungenen Inhalte dennoch wie gewohnt für Benutzeragenten-Funktionen verfügbar sein, z. B. Finden auf der Seite, Tab-Reihenfolge-Navigation usw., und müssen wie gewohnt fokussierbar und auswählbar sein.

## Beschreibung

### Animieren und Übergänge von content-visibility

[Unterstützende Browser](#browser-kompatibilität) animieren/übertragen `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete).

Diskrete Animation bedeutet im Allgemeinen, dass die Eigenschaft auf halbem Weg durch die Animation zwischen zwei Werten umschaltet. Im Fall von `content-visibility` wird der Browser jedoch zwischen den beiden Werten umschalten, um den animierten Inhalt während der gesamten Animationsdauer anzuzeigen. Zum Beispiel:

- Beim Animieren von `content-visibility` von `hidden` zu `visible` wird der Wert bei `0%` der Animationsdauer zu `visible` umgeschaltet, sodass er während der gesamten Dauer sichtbar ist.
- Beim Animieren von `content-visibility` von `visible` zu `hidden` wird der Wert bei `100%` der Animationsdauer zu `hidden` umgeschaltet, sodass er während der gesamten Dauer sichtbar bleibt.

Dieses Verhalten ist nützlich für das Erstellen von Eintritts-/Austrittsanimationen, bei denen Sie beispielsweise wollen, dass ein Inhalt aus dem DOM entfernt wird mit `content-visibility: hidden`, aber Sie eine sanfte Übergangsanimation (wie ein Ausblenden) wünschen, statt dass es sofort verschwindet.

Beim Animieren von `content-visibility` mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auf `content-visibility` gesetzt werden. Dies ermöglicht effektiv `content-visibility`-Übergänge.

> [!NOTE]
> Wenn Sie den `content-visibility` Wert eines Elements übergangsweise ändern, müssen Sie keine Startwerte für übertragene Eigenschaften mit einem [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style)-Block angeben, wie es beim Übergang von `display` erforderlich ist. Dies liegt daran, dass `content-visibility` ein Element nicht wie `display` aus dem DOM ausblendet: es überspringt einfach das Rendering des Inhalts des Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Inhalte außerhalb des Bildschirms innerhalb einer `content-visibility: auto` Eigenschaft bleiben im Dokumentobjektmodell und im Barrierefreiheitsbaum. Dies ermöglicht eine Verbesserung der Seitenleistung mit `content-visibility: auto`, ohne die Barrierefreiheit negativ zu beeinflussen.

Da Stile für außerhalb des Bildschirms liegende Inhalte nicht gerendert werden, erscheinen absichtlich mit `display: none` oder `visibility: hidden` versteckte Elemente dennoch im Barrierefreiheitsbaum.
Wenn Sie nicht möchten, dass ein Element im Barrierefreiheitsbaum erscheint, verwenden Sie `aria-hidden="true"`.

## Beispiele

### Verwendung von auto zur Reduzierung der Rendering-Kosten langer Seiten

Das folgende Beispiel zeigt die Verwendung von `content-visibility: auto`, um das Malen und Rendern von Abschnitten außerhalb des Bildschirms zu überspringen.
Wenn ein `section` außerhalb des Viewports ist, wird das Malen des Inhalts übersprungen, bis der Abschnitt in die Nähe des Viewports kommt, was sowohl beim Laden als auch bei Interaktionen auf der Seite hilft.

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

Die `contain-intrinsic-size`-Eigenschaft fügt der Höhe und Breite jedes `section`-Elements eine Standardgröße von 500px hinzu. Nachdem ein Abschnitt gerendert wurde, behält er seine gerenderte intrinsische Größe bei, auch wenn er aus dem Viewport gescrollt wird.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Verwendung von hidden zur Verwaltung der Sichtbarkeit

Das folgende Beispiel zeigt, wie die Sichtbarkeit von Inhalten mit JavaScript verwaltet werden kann.
Die Verwendung von `content-visibility: hidden;` anstelle von `display: none;` bewahrt den Rendering-Zustand des Inhalts, wenn er versteckt wird, und das Rendering ist schneller.

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

Die Eigenschaft `content-visibility` wird auf Absätze angewendet, die direkte Kinder von Elementen mit den Klassen `visible` und `hidden` sind. In unserem Beispiel können wir Inhalte in Absätzen je nach CSS-Klasse der übergeordneten div-Elemente ein- und ausblenden.

Die `contain-intrinsic-size`-Eigenschaft ist enthalten, um die Inhaltsgröße darzustellen. Dies hilft, Layoutverschiebungen zu reduzieren, wenn Inhalte ausgeblendet werden.

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

In diesem Beispiel haben wir ein {{htmlelement("div")}}-Element, dessen Inhalt durch Klicken oder Drücken einer Taste zwischen "angezeigt" und "versteckt" umgeschaltet werden kann.

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

Im CSS setzen wir zunächst `content-visibility: hidden;` auf dem `<div>`, um seinen Inhalt zu verbergen. Dann richten wir `@keyframes`-Animationen ein und fügen sie Klassen hinzu, um das `<div>` anzuzeigen und zu verbergen, wobei `content-visibility` und {{cssxref("color")}} animiert werden, sodass Sie einen weichen Animationseffekt erhalten, während der Inhalt angezeigt/verborgen wird.

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

Schließlich verwenden wir JavaScript, um die `.show` und `.hide` Klassen auf das `<div>` anzuwenden, um die Animationen entsprechend anzuwenden, während es zwischen angezeigten und verborgenen Zuständen umgeschaltet wird.

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

- [CSS Containment](/de/docs/Web/CSS/Guides/Containment)
- {{cssxref("contain-intrinsic-size")}}
- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) (web.dev)
