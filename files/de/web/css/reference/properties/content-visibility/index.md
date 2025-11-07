---
title: content-visibility
slug: Web/CSS/Reference/Properties/content-visibility
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`content-visibility`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, ob ein Element seine Inhalte überhaupt rendert, und erzwingt eine starke Menge von Containments, wodurch es Benutzeragenten ermöglicht wird, potenziell große Teile der Layout- und Rendering-Arbeit zu überspringen, bis sie benötigt werden. Dies ermöglicht dem Benutzeragenten, die Renderarbeit eines Elements (einschließlich Layout und Grafik) zu überspringen, bis sie benötigt wird – was das anfängliche Laden der Seite erheblich beschleunigt.

> [!NOTE]
> Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)-Ereignis tritt bei jedem Element auf, das `content-visibility: auto` eingestellt hat, wenn dessen Renderarbeit beginnt oder nicht mehr übersprungen wird. Dies bietet eine praktische Möglichkeit für den Code einer Anwendung, Renderprozesse zu starten oder zu stoppen (z. B. Zeichnen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, um Rechenleistung zu sparen.

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
  - : Keine Wirkung. Die Inhalte des Elements werden wie gewohnt layoutiert und gerendert. Dies ist der Standardwert.
- `hidden`
  - : Das Element [überspringt seine Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents). Die übersprungenen Inhalte dürfen nicht für Benutzeragentenfunktionen zugänglich sein, wie z. B. die Seitensuche, Tab-Navigationsreihenfolge usw., noch auswählbar oder fokussierbar sein. Dies ähnelt dem Zuweisen von `display: none` an die Inhalte.
- `auto`
  - : Das Element aktiviert Layout-, Stil- und Grafik-Containment. Wenn das Element nicht [relevant für den Benutzer](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) ist, überspringt es auch seine Inhalte. Im Gegensatz zu `hidden` müssen die übersprungenen Inhalte jedoch weiterhin wie gewohnt für Benutzeragentenfunktionen wie Seitensuche, Tab-Navigationsreihenfolge usw. verfügbar und fokussierbar sowie auswählbar sein.

## Beschreibung

### Animation und Übergang von content-visibility

[Unterstützende Browser](#browser-kompatibilität) animieren/übergang `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete).

Diskrete Animation bedeutet im Allgemeinen, dass die Eigenschaft zur Hälfte der Animation zwischen zwei Werten umschaltet. Im Fall von `content-visibility` schaltet der Browser jedoch zwischen den beiden Werten um, um die animierten Inhalte für die gesamte Dauer der Animation anzuzeigen. Ein Beispiel:

- Bei der Animation von `content-visibility` von `hidden` nach `visible` schaltet der Wert bei `0%` der Animationsdauer auf `visible`, damit es die gesamte Zeit über sichtbar ist.
- Bei der Animation von `content-visibility` von `visible` nach `hidden` schaltet der Wert bei `100%` der Animationsdauer auf `hidden`, damit es die gesamte Zeit über sichtbar ist.

Dieses Verhalten ist nützlich für Ein-/Ausgangsanimationen, wenn Sie beispielsweise Inhalte mit `content-visibility: hidden` aus dem DOM entfernen möchten, aber eine fließende Übergangsanimation (wie einen Ausblendeffekt) wünschen, anstatt dass sie sofort verschwindet.

Beim Animieren von `content-visibility` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) auf `content-visibility` gesetzt werden. Dies ermöglicht effektiv `content-visibility`-Übergänge.

> [!NOTE]
> Beim Übergang des `content-visibility`-Werts eines Elements müssen Sie keinen Satz von Startwerten für übergangene Eigenschaften mit einem [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style)-Block bereitstellen, wie Sie das beim [Übergang von `display`](/de/docs/Web/CSS/Reference/Properties/display#animating_display) tun. Dies liegt daran, dass `content-visibility` ein Element nicht aus dem DOM ausblendet wie `display`, sondern lediglich das Renden des Inhalts des Elements überspringt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Inhalte außerhalb des Bildschirms innerhalb einer `content-visibility: auto`-Eigenschaft bleiben im Document Object Model und im Barrierefreiheitsbaum. Dies ermöglicht eine Verbesserung der Seitenleistung mit `content-visibility: auto`, ohne die Barrierefreiheit negativ zu beeinflussen.

Da Stile für Inhalte außerhalb des Bildschirms nicht gerendert werden, erscheinen absichtlich mit `display: none` oder `visibility: hidden` verborgene Elemente _trotzdem im Barrierefreiheitsbaum_.
Wenn Sie nicht möchten, dass ein Element im Barrierefreiheitsbaum erscheint, verwenden Sie `aria-hidden="true"`.

## Beispiele

### Verwendung von auto, um die Rendering-Kosten langer Seiten zu reduzieren

Das folgende Beispiel zeigt die Verwendung von `content-visibility: auto`, um das Zeichnen und Rendern von Abschnitten außerhalb des Bildschirms zu überspringen.
Wenn sich ein `section` außerhalb des Viewports befindet, wird das Zeichnen der Inhalte übersprungen, bis der Abschnitt nahe am Viewport ist, was sowohl das Laden als auch die Interaktionen auf der Seite erleichtert.

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

Die `contain-intrinsic-size`-Eigenschaft fügt jedem `section`-Element eine Standardgröße von 500px in Höhe und Breite hinzu. Nachdem ein Abschnitt gerendert wurde, behält er seine gerenderte intrinsische Größe bei, selbst wenn er aus dem Viewport gescrollt wird.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Verwendung von hidden zur Verwaltung der Sichtbarkeit

Das folgende Beispiel zeigt, wie die Sichtbarkeit von Inhalten mit JavaScript verwaltet wird.
Die Verwendung von `content-visibility: hidden;` anstelle von `display: none;` bewahrt den Rendering-Zustand von Inhalten, wenn sie versteckt werden, und ermöglicht ein schnelleres Rendern.

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

Die `content-visibility`-Eigenschaft ist auf Absätzen eingestellt, die direkte Kinder von Elementen mit den Klassen `visible` und `hidden` sind. In unserem Beispiel können wir Inhalte in Absätzen abhängig von der CSS-Klasse der übergeordneten `div`-Elemente anzeigen und ausblenden.

Die `contain-intrinsic-size`-Eigenschaft wird hinzugefügt, um die Inhaltsgröße darzustellen. Dies trägt dazu bei, Layoutverschiebungen zu reduzieren, wenn Inhalte ausgeblendet werden.

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

In diesem Beispiel haben wir ein {{htmlelement("div")}}-Element, dessen Inhalt bei einem Klick oder Tastendruck zwischen sichtbar und versteckt umgeschaltet werden kann.

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

Im CSS setzen wir initial `content-visibility: hidden;` auf das `<div>`, um seinen Inhalt zu verstecken. Wir richten dann `@keyframes`-Animationen ein und hängen sie an Klassen, um das `<div>` anzuzeigen und zu verstecken, wobei `content-visibility` und [`color`](/de/docs/Web/CSS/Reference/Properties/color) animiert werden, sodass ein fließender Animationseffekt entsteht, wenn der Inhalt ein-/ausgeblendet wird.

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

Schließlich verwenden wir JavaScript, um die Klassen `.show` und `.hide` auf das `<div>` anzuwenden, um die Animationen zu aktivieren, wenn es zwischen den Zuständen sichtbar und versteckt umgeschaltet wird.

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
