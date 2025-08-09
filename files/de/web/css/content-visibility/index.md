---
title: content-visibility
slug: Web/CSS/content-visibility
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Die **`content-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob ein Element seine Inhalte überhaupt rendert, und erzwingt gleichzeitig eine starke Menge von Enthaltungen, sodass Benutzeragenten möglicherweise große Teile der Layout- und Rendering-Arbeit überspringen können, bis sie benötigt werden. Dies ermöglicht es dem Benutzeragenten, die Rendering-Arbeit eines Elements (einschließlich Layout und Malen) zu überspringen, bis sie benötigt wird – was das initiale Laden der Seite erheblich schneller macht.

> [!NOTE]
> Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis wird bei jedem Element ausgelöst, das `content-visibility: auto` gesetzt hat, wenn seine Rendering-Arbeit beginnt oder aufhört, übersprungen zu werden. Dies bietet eine bequeme Möglichkeit für den Code einer App, um Renderprozesse zu starten oder zu stoppen (z. B. Zeichnen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden und somit Rechenleistung zu sparen.

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
  - : Keine Auswirkung. Die Inhalte des Elements werden wie gewohnt angeordnet und gerendert. Dies ist der Standardwert.
- `hidden`
  - : Das Element [überspringt seine Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents). Die übersprungenen Inhalte dürfen nicht für Benutzeragenten-Funktionen zugänglich sein, wie z. B. Seitensuche, Tab-Reihenfolge-Navigation, etc., noch auswählbar oder fokussierbar sein. Dies ist ähnlich wie wenn die Inhalte `display: none` erhalten.
- `auto`
  - : Das Element aktiviert Layout-Einhaltung, Stil-Einhaltung und Mal-Einhaltung. Wenn das Element nicht [für den Benutzer relevant ist](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user), überspringt es auch seine Inhalte. Im Gegensatz zu `hidden` müssen die übersprungenen Inhalte dennoch wie gewohnt für Benutzeragenten-Funktionen verfügbar sein, wie z. B. Seitensuche, Tab-Reihenfolge-Navigation, etc., und müssen fokussierbar und auswählbar sein.

## Beschreibung

### Animation und Übergänge von content-visibility

[Unterstützende Browser](#browser-kompatibilität) animieren/übergängen `content-visibility` mit einer Variation des [diskreten Animationstypen](/de/docs/Web/CSS/CSS_animated_properties#discrete).

Diskrete Animation bedeutet im Allgemeinen, dass die Eigenschaft 50% der Animation zwischen zwei Werten wechseln wird. Im Fall von `content-visibility`, wird der Browser jedoch zwischen den beiden Werten wechseln, um den animierten Inhalt während der gesamten Animationsdauer anzuzeigen. So zum Beispiel:

- Wenn `content-visibility` von `hidden` zu `visible` animiert wird, wechselt der Wert bei `0%` der Animationsdauer zu `visible`, sodass er durchgehend sichtbar ist.
- Wenn `content-visibility` von `visible` zu `hidden` animiert wird, wechselt der Wert bei `100%` der Animationsdauer zu `hidden`, sodass er durchgehend sichtbar ist.

Dieses Verhalten ist nützlich, um Ein-/Austrittsanimationen zu erstellen, bei denen Sie beispielsweise Inhalte aus dem DOM mit `content-visibility: hidden` entfernen möchten, aber eine sanfte Übergangsanimation (wie ein Ausblenden) wünschen, anstatt dass diese sofort verschwindet.

Beim Animieren von `content-visibility` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf `content-visibility` gesetzt werden. Dies aktiviert effektiv `content-visibility` Übergänge.

> [!NOTE]
> Wenn Sie den `content-visibility` Wert eines Elements übergangsweise ändern, müssen Sie kein Set von Startwerten für die übergangenen Eigenschaften mit einem [`@starting-style`](/de/docs/Web/CSS/@starting-style) Block bereitstellen, wie Sie es beim [Übergang von `display`](/de/docs/Web/CSS/display#animating_display) tun. Dies liegt daran, dass `content-visibility` ein Element nicht aus dem DOM ausblendet wie `display`: es überspringt einfach das Rendern der Inhalte des Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Off-Screen-Inhalte innerhalb einer `content-visibility: auto` Eigenschaft bleiben im Document Object Model und im Barrierefreiheitsbaum erhalten. Dies ermöglicht es, die Seitenleistung mit `content-visibility: auto` zu verbessern, ohne die Zugänglichkeit negativ zu beeinträchtigen.

Da Stile für Off-Screen-Inhalte nicht gerendert werden, _erscheinen_ Elemente, die absichtlich mit `display: none` oder `visibility: hidden` ausgeblendet werden, _dennoch im Barrierefreiheitsbaum_.
Wenn Sie nicht möchten, dass ein Element im Barrierefreiheitsbaum erscheint, verwenden Sie `aria-hidden="true"`.

## Beispiele

### Auto verwenden, um die Rendering-Kosten langer Seiten zu reduzieren

Das folgende Beispiel zeigt die Verwendung von `content-visibility: auto`, um das Malen und Rendern von Off-Screen-Abschnitten zu überspringen.
Wenn sich ein `section` außerhalb des Ansichtsfensters befindet, wird das Malen des Inhalts übersprungen, bis der Abschnitt in die Nähe des Ansichtsfensters kommt, was sowohl beim Laden als auch bei der Interaktion auf der Seite hilft.

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

Die `contain-intrinsic-size` Eigenschaft fügt der Höhe und Breite jedes `section` Elements eine Standardgröße von 500px hinzu. Nachdem ein Abschnitt gerendert wurde, behält er seine gerenderte intrinsische Größe bei, auch wenn er aus dem Ansichtsfenster gescrollt wird.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Hidden verwenden, um Sichtbarkeit zu verwalten

Das folgende Beispiel zeigt, wie man die Inhaltssichtbarkeit mit JavaScript verwaltet.
Die Verwendung von `content-visibility: hidden;` anstelle von `display: none;` erhält den Rendering-Zustand von Inhalten, wenn sie ausgeblendet sind, und das Rendern ist schneller.

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

Die `content-visibility` Eigenschaft wird auf Absätzen gesetzt, die direkte Kinder von Elementen mit den Klassen `visible` und `hidden` sind. In unserem Beispiel können wir Inhalte in Absätzen abhängig von der CSS-Klasse der übergeordneten `div`-Elemente anzeigen und ausblenden.

Die `contain-intrinsic-size` Eigenschaft ist enthalten, um die Inhaltsgröße darzustellen. Dies trägt dazu bei, das Layoutverschiebung zu reduzieren, wenn Inhalte ausgeblendet werden.

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

### Animation der content-visibility

In diesem Beispiel haben wir ein {{htmlelement("div")}} Element, dessen Inhalt durch Klick oder Tastendruck zwischen sichtbar und verborgen umgeschaltet werden kann.

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

Im CSS setzen wir zunächst `content-visibility: hidden;` auf das `<div>`, um seinen Inhalt auszublenden. Wir richten dann `@keyframes` Animationen ein und hängen sie an Klassen an, um das `<div>` anzuzeigen und auszublenden, wobei `content-visibility` und [`color`](/de/docs/Web/CSS/color) animiert werden, sodass Sie einen sanften Animationseffekt erhalten, wenn der Inhalt gezeigt/ausgeblendet wird.

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

Schließlich verwenden wir JavaScript, um die `.show` und `.hide` Klassen auf das `<div>` anzuwenden, um die Animationen hinzuzufügen, während zwischen sichtbaren und verborgenen Zuständen umgeschaltet wird.

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
