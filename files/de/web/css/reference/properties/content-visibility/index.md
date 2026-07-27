---
title: "`content-visibility` CSS property"
short-title: content-visibility
slug: Web/CSS/Reference/Properties/content-visibility
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`content-visibility`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, ob ein Element seine Inhalte überhaupt rendert und erzwingt gleichzeitig eine starke Menge von Einschlüssen, was es den Benutzeragenten ermöglicht, potenziell große Bereiche von Layout- und Rendering-Arbeit zu überspringen, bis diese benötigt werden. Sie ermöglicht es dem Benutzeragenten, die Renderarbeit eines Elements (einschließlich Layout und Malen) zu überspringen, bis sie benötigt wird – was das initiale Laden der Seite wesentlich schneller macht.

> [!NOTE]
> Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)-Event wird bei jedem Element ausgelöst, das `content-visibility: auto` gesetzt hat, wenn begonnen oder aufgehört wird, seine Renderarbeit zu überspringen. Dies bietet eine bequeme Möglichkeit für den Code einer App, Rendering-Prozesse zu starten oder zu stoppen (z. B. Zeichnen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, wodurch Rechenleistung gespart wird.

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `visible`
  - : Keine Auswirkung. Die Inhalte des Elements werden normal layoutiert und gerendert. Dies ist der Standardwert.
- `hidden`
  - : Das Element [überspringt seine Inhalte](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents). Die übersprungenen Inhalte dürfen für Benutzeragenten-Funktionen wie Suchen auf der Seite, Tab-Reihenfolge-Navigation usw. nicht zugänglich sein, noch dürfen sie selektierbar oder fokussierbar sein. Dies ähnelt dem Geben der Inhalte `display: none`.
- `auto`
  - : Das Element aktiviert Layout-, Style- und Malereinschluss. Wenn das Element nicht für den Benutzer [relevant ist](/de/docs/Web/CSS/Guides/Containment/Using#relevant_to_the_user), überspringt es auch seine Inhalte. Im Gegensatz zu `hidden` müssen die übersprungenen Inhalte für Benutzeragenten-Funktionen wie Suchen auf der Seite, Tab-Reihenfolge-Navigation usw. normal zugänglich sein und normal fokussierbar und auswählbar bleiben.

## Beschreibung

### Animieren und Übergänge von content-visibility

[Unterstützende Browser](#browser-kompatibilität) animieren/übergang `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete).

Diskrete Animation bedeutet im Allgemeinen, dass die Eigenschaft 50% der Animation zwischen zwei Werten wechselt. Bei `content-visibility` wird der Browser jedoch zwischen den zwei Werten wechseln, um den animierten Inhalt für die gesamte Dauer der Animation anzuzeigen. Zum Beispiel:

- Beim Animieren von `content-visibility` von `hidden` zu `visible` wird der Wert bei `0%` der Animationsdauer auf `visible` umgeschaltet, sodass er während der gesamten Dauer sichtbar ist.
- Beim Animieren von `content-visibility` von `visible` zu `hidden` wird der Wert bei `100%` der Animationsdauer auf `hidden` umgeschaltet, sodass er während der gesamten Dauer sichtbar ist.

Dieses Verhalten ist nützlich, um Ein-/Ausgangsanimationen zu erstellen, bei denen Sie beispielsweise Inhalte mit `content-visibility: hidden` aus dem DOM entfernen möchten, aber einen sanften Übergang wünschen (wie ein Ausblenden), anstatt dass sie sofort verschwinden.

Beim Animieren von `content-visibility` mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auf `content-visibility` gesetzt werden. Dies ermöglicht effektiv Übergänge von `content-visibility`.

> [!NOTE]
> Beim Übergang eines `content-visibility`-Werts eines Elements müssen Sie nicht einen Satz von Startwerten für übergangene Eigenschaften mit einem {{cssxref("@starting-style")}}-Block bereitstellen, wie Sie es tun würden, wenn Sie [`display`](/de/docs/Web/CSS/Reference/Properties/display#animating_display) übergangieren. Das liegt daran, dass `content-visibility` ein Element nicht aus dem DOM entfernt, wie es `display` tut: Es überspringt einfach das Rendern des Inhalts des Elements.

## Formelle Definition

{{cssinfo}}

## Formelle Syntax

{{CSSSyntax}}

## Barrierefreiheit

Inhalte außerhalb des Bildschirms innerhalb einer `content-visibility: auto`-Eigenschaft bleiben im Dokument-Objektmodell und im Barrierefreiheitsbaum. Dies ermöglicht die Verbesserung der Seitenperformance mit `content-visibility: auto`, ohne die Barrierefreiheit negativ zu beeinflussen.

Da Stile für Inhalte außerhalb des Bildschirms nicht gerendert werden, erscheinen Elemente, die absichtlich mit `display: none` oder `visibility: hidden` versteckt werden, _immer noch im Barrierefreiheitsbaum_.
Wenn Sie nicht möchten, dass ein Element im Barrierefreiheitsbaum erscheint, verwenden Sie `aria-hidden="true"`.

## Beispiele

### Verwenden von auto zur Verringerung der Renderingkosten langer Seiten

Das folgende Beispiel zeigt die Verwendung von `content-visibility: auto`, um das Malen und Rendern von Teilen außerhalb des Bildschirms zu überspringen.
Wenn sich ein `section`-Element außerhalb des Ansichtsbereichs befindet, wird das Malen des Inhalts übersprungen, bis der Abschnitt in die Nähe des Ansichtsbereichs kommt, was sowohl beim Laden als auch bei Interaktionen auf der Seite hilft.

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

Die `contain-intrinsic-size`-Eigenschaft fügt jedem `section`-Element eine Standardgröße von 500px für Höhe und Breite hinzu. Nachdem ein Abschnitt gerendert wurde, behält er seine gerenderte intrinsische Größe, auch wenn er aus dem Ansichtsbereich gescrollt wird.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Verwenden von hidden zur Verwaltung der Sichtbarkeit

Das folgende Beispiel zeigt, wie man die Inhaltsichtbarkeit mit JavaScript verwaltet.
Die Verwendung von `content-visibility: hidden;` anstelle von `display: none;` bewahrt den Rendering-Zustand des Inhalts, wenn er versteckt ist, und das Rendering ist schneller.

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

Die `content-visibility`-Eigenschaft wird auf Absätze gesetzt, die direkte Kinder von Elementen mit den Klassen `visible` und `hidden` sind. In unserem Beispiel können wir Inhalte in Absätzen anzeigen und verstecken, je nachdem, welche CSS-Klasse die übergeordneten div-Elemente haben.

Die `contain-intrinsic-size`-Eigenschaft ist enthalten, um die Inhaltsgröße darzustellen. Dies hilft, Verschiebungen im Layout zu reduzieren, wenn Inhalte versteckt werden.

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

Im CSS wird zunächst `content-visibility: hidden;` auf das `<div>` gesetzt, um dessen Inhalt zu verstecken. Wir richten dann `@keyframes`-Animationen ein und weisen sie Klassen zu, um das `<div>` anzuzeigen und zu verstecken, `content-visibility` und {{cssxref("color")}} zu animieren, sodass Sie einen sanften Animationseffekt erhalten, während der Inhalt gezeigt/versteckt wird.

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

Schließlich verwenden wir JavaScript, um die `.show`- und `.hide`-Klassen auf das `<div>` anzuwenden, um die Animationen anzuwenden, während es zwischen sichtbaren und versteckten Zuständen umgeschaltet wird.

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
