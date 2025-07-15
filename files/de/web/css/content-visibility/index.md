---
title: content-visibility
slug: Web/CSS/content-visibility
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`content-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob ein Element seinen Inhalt überhaupt rendert, und erzwingt zudem eine starke Reihe von Containment-Eigenschaften. So können Benutzeragenten möglicherweise große Teile der Layout- und Renderarbeit weglassen, bis sie benötigt werden. Dadurch kann der Benutzeragent die Renderarbeit eines Elements (einschließlich Layout und Zeichnen) überspringen, bis sie benötigt wird – was die anfängliche Seitenladezeit erheblich verkürzt.

> [!NOTE]
> Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis wird auf jedem Element ausgelöst, das `content-visibility: auto` gesetzt hat, wenn seine Renderarbeit beginnt oder aufhört übersprungen zu werden. Dies bietet eine bequeme Möglichkeit für den Code einer App, Rendering-Prozesse zu starten oder zu stoppen (z.B. Zeichnungen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, und dadurch Rechenleistung zu sparen.

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
  - : Keine Wirkung. Der Inhalt des Elements wird wie gewohnt verteilt und gerendert. Dies ist der Standardwert.
- `hidden`
  - : Das Element [überspringt seinen Inhalt](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents). Der übersprungene Inhalt darf nicht zugänglich für Funktionen des Benutzeragenten sein, wie z.B. die Suche auf der Seite, die Navigation über die Tabulatorreihenfolge etc., und darf weder auswählbar noch fokussierbar sein. Dies ähnelt dem Zuweisen von `display: none` zu den Inhalten.
- `auto`
  - : Das Element aktiviert Layout-, Stil- und Zeichen-Containment. Wenn das Element nicht [für den Benutzer relevant](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) ist, wird auch sein Inhalt übersprungen. Im Gegensatz zu `hidden` muss der übersprungene Inhalt allerdings weiterhin wie gewohnt für Funktionen des Benutzeragenten verfügbar sein, beispielsweise die Suche auf der Seite, die Tabulatorreihenfolge etc., und er muss wie gewohnt fokussierbar und auswählbar sein.

## Beschreibung

### Inhalte animieren und Übergänge gestalten mit content-visibility

[Unterstützende Browser](#browser-kompatibilität) animieren/übergangsweise `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete).

Diskrete Animation bedeutet in der Regel, dass die Eigenschaft während der Animation in der Mitte, also zu 50%, zwischen zwei Werten umschaltet. Im Falle von `content-visibility` wechselt der Browser jedoch zwischen den beiden Werten, um den animierten Inhalt für die gesamte Animationsdauer anzuzeigen. Zum Beispiel:

- Wenn `content-visibility` von `hidden` zu `visible` animiert wird, wechselt der Wert zu `visible` bei `0%` der Animationsdauer, damit er während der gesamten Dauer sichtbar ist.
- Wenn `content-visibility` von `visible` zu `hidden` animiert wird, wechselt der Wert zu `hidden` bei `100%` der Animationsdauer, damit er während der gesamten Dauer sichtbar ist.

Dieses Verhalten ist nützlich, um Ein-/Ausgangsanimationen zu erstellen, bei denen Sie zum Beispiel Inhalte aus dem DOM entfernen möchten mit `content-visibility: hidden`, dabei aber einen sanften Übergang (wie ein Ausblenden) wünschen, anstatt dass es sofort verschwindet.

Wenn `content-visibility` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) animiert wird, muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf `content-visibility` gesetzt werden. Dies ermöglicht effektiv `content-visibility`-Übergänge.

> [!NOTE]
> Beim Übergang des `content-visibility`-Werts eines Elements müssen Sie kein Set von Anfangswerten für die Eigenschaften, die übergegangen werden, mithilfe eines [`@starting-style`](/de/docs/Web/CSS/@starting-style) Blocks bereitstellen, wie Sie es beim [Übergang von `display`](/de/docs/Web/CSS/display#animating_display) machen. Das liegt daran, dass `content-visibility` ein Element nicht wie `display` aus dem DOM entfernt: Es wird nur das Rendern des Inhalts des Elements übersprungen.

## Formelle Definition

{{cssinfo}}

## Formelle Syntax

{{CSSSyntax}}

## Barrierefreiheit

Nicht im sichtbaren Bereich befindlicher Inhalt innerhalb einer `content-visibility: auto` Eigenschaft bleibt im Dokumentobjektmodell und im Barrierefreiheitsbaum vorhanden. Dies ermöglicht eine Verbesserung der Seitenleistung mit `content-visibility: auto`, ohne die Barrierefreiheit negativ zu beeinflussen.

Da Stile für Inhalte außerhalb des sichtbaren Bereichs nicht gerendert werden, erscheinen Elemente, die absichtlich mit `display: none` oder `visibility: hidden` ausgeblendet werden, _immer noch im Barrierefreiheitsbaum_.
Wenn Sie nicht möchten, dass ein Element im Barrierefreiheitsbaum erscheint, verwenden Sie `aria-hidden="true"`.

## Beispiele

### Verwendung von auto, um die Rendering-Kosten langer Seiten zu reduzieren

Das folgende Beispiel zeigt die Verwendung von `content-visibility: auto`, um das Zeichnen und Rendern von Bereichen außerhalb des sichtbaren Bereichs zu überspringen.
Wenn ein `section` außerhalb des sichtbaren Bereichs ist, wird das Zeichnen des Inhalts übersprungen, bis der Bereich in die Nähe des sichtbaren Bereichs kommt, was sowohl beim Laden als auch bei Interaktionen auf der Seite hilft.

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

Die Eigenschaft `contain-intrinsic-size` fügt jedem `section`-Element eine Standardgröße von 500px für Höhe und Breite hinzu. Nachdem ein Abschnitt gerendert wurde, behält er seine gerenderte intrinsische Größe bei, selbst wenn er aus dem sichtbaren Bereich gescrollt wird.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Verwendung von hidden, um die Sichtbarkeit zu steuern

Das folgende Beispiel zeigt, wie man die Inhalts-Sichtbarkeit mit JavaScript steuert.
Die Verwendung von `content-visibility: hidden;` anstelle von `display: none;` bewahrt den Rendering-Zustand des Inhalts, wenn er verborgen ist, und macht das Rendering schneller.

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

Die `content-visibility`-Eigenschaft wird auf Absätzen gesetzt, die direkte Kinder von Elementen mit den Klassen `visible` und `hidden` sind. In unserem Beispiel können wir Inhalte in Absätzen anzeigen und verbergen, abhängig von der CSS-Klasse der übergeordneten div-Elemente.

Die Eigenschaft `contain-intrinsic-size` wird hinzugefügt, um die Inhaltsgröße darzustellen. Dies hilft, Layoutverschiebungen zu reduzieren, wenn Inhalt verborgen wird.

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

In diesem Beispiel haben wir ein {{htmlelement("div")}}-Element, dessen Inhalt durch Klicken oder Drücken einer beliebigen Taste zwischen angezeigt und verborgen umgeschaltet werden kann.

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

Im CSS setzen wir zunächst `content-visibility: hidden;` auf das `<div>`, um seinen Inhalt zu verbergen. Dann richten wir `@keyframes`-Animationen ein und fügen sie Klassen hinzu, um das `<div>` anzuzeigen und zu verbergen, indem wir `content-visibility` und [`color`](/de/docs/Web/CSS/color) animieren, damit ein sanfter Animationseffekt entsteht, während der Inhalt angezeigt/verborgen wird.

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

Schließlich verwenden wir JavaScript, um die `.show` und `.hide` Klassen auf das `<div>` anzuwenden, wie es angemessen ist, um die Animationen anzuwenden, während es zwischen angezeigten und verborgenen Zuständen umgeschaltet wird.

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
