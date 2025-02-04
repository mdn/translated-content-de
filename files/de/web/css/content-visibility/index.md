---
title: content-visibility
slug: Web/CSS/content-visibility
l10n:
  sourceCommit: 5c1847fabca3f8f0fa6cd5e6c89b1a5a1de314e6
---

{{CSSRef}}

Die **`content-visibility`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, ob ein Element seine Inhalte überhaupt rendert, und erzwingt eine starke Reihe von Einschränkungen, die es Benutzeragenten ermöglichen, große Bereiche von Layout- und Rendering-Arbeiten potenziell zu überspringen, bis sie benötigt werden. Sie ermöglicht dem Benutzeragenten, die Rendering-Arbeit eines Elements (einschließlich Layout und Malen) zu überspringen, bis sie benötigt wird – was das anfängliche Laden der Seite erheblich beschleunigt.

> [!NOTE]
> Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)-Ereignis wird bei jedem Element mit `content-visibility: auto` ausgelöst, wenn dessen Rendering-Arbeit beginnt oder aufhört, übersprungen zu werden. Dies bietet eine bequeme Möglichkeit für den Code einer App, Renderprozesse zu starten oder zu stoppen (z. B. Zeichnen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, und so Rechenleistung zu sparen.

{{EmbedInteractiveExample("pages/css/content-visibility.html")}}

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
  - : Keine Auswirkung. Die Inhalte des Elements werden normal gelayoutet und gerendert.
- `hidden`
  - : Das Element [überspringt seine Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents). Die übersprungenen Inhalte dürfen für Funktionen des Benutzeragenten wie Suchen auf der Seite, Tab-Navigation usw. nicht zugänglich sein, noch dürfen sie auswählbar oder fokussierbar sein. Dies ist ähnlich wie das Zuordnen der Inhalte mit `display: none`.
- `auto`
  - : Das Element aktiviert Layout-Kontainment, Stil-Kontainment und Mal-Kontainment. Wenn das Element nicht [relevant für den Benutzer](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) ist, überspringt es auch seine Inhalte. Im Gegensatz zu `hidden` müssen die übersprungenen Inhalte jedoch für Funktionen des Benutzeragenten wie Suchen auf der Seite, Tab-Navigation usw. normal verfügbar sein und müssen fokussierbar und auswählbar sein wie gewohnt.

## Beschreibung

### Animieren und Übergänge von `content-visibility`

[Unterstützende Browser](#browser-kompatibilität) animieren/transitionieren `content-visibility` mit einer Variante des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete).

Diskrete Animation bedeutet im Allgemeinen, dass die Eigenschaft 50% der Animationszeit zwischen zwei Werten wechselt. Im Fall von `content-visibility` wechselt der Browser jedoch zwischen den beiden Werten, um den animierten Inhalt während der gesamten Animationsdauer anzuzeigen. Zum Beispiel:

- Beim Animieren von `content-visibility` von `hidden` zu `visible` wird der Wert bei `0%` der Animationsdauer auf `visible` gesetzt, sodass er während der gesamten Dauer sichtbar ist.
- Beim Animieren von `content-visibility` von `visible` zu `hidden` wird der Wert bei `100%` der Animationsdauer auf `hidden` gesetzt, sodass er während der gesamten Dauer sichtbar ist.

Dieses Verhalten ist nützlich für das Erstellen von Ein- und Ausstiegsanimationen, bei denen Sie beispielsweise Inhalte mit `content-visibility: hidden` aus dem DOM entfernen möchten, dabei aber einen sanften Übergang (wie z. B. ein Ausblenden) wünschen, statt sie sofort verschwinden zu lassen.

Beim Animieren von `content-visibility` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf `content-visibility` gesetzt werden. Dadurch werden `content-visibility`-Übergänge effektiv aktiviert.

> [!NOTE]
> Beim Übergang eines Elements von `content-visibility` müssen Sie keine Anfangswerte für übergehende Eigenschaften mithilfe eines [`@starting-style`](/de/docs/Web/CSS/@starting-style)-Blocks angeben, wie Sie es bei der [Transition von `display`](/de/docs/Web/CSS/display#animating_display) tun. Dies liegt daran, dass `content-visibility` ein Element nicht wie `display` aus dem DOM verbirgt: Es überspringt lediglich das Rendern der Inhalte des Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Außerhalb des Bildschirms befindliche Inhalte innerhalb einer `content-visibility: auto`-Eigenschaft bleiben im Document Object Model und im Barrierefreiheitsbaum erhalten. Dies ermöglicht eine Verbesserung der Seitenleistung mit `content-visibility: auto`, ohne die Barrierefreiheit negativ zu beeinflussen.

Da Stile für außerhalb des Bildschirms befindliche Inhalte nicht gerendert werden, werden absichtlich mit `display: none` oder `visibility: hidden` verborgene Elemente _trotzdem im Barrierefreiheitsbaum erscheinen_.
Wenn Sie nicht möchten, dass ein Element im Barrierefreiheitsbaum erscheint, verwenden Sie `aria-hidden="true"`.

## Beispiele

### Verwendung von auto, um die Rendering-Kosten langer Seiten zu reduzieren

Das folgende Beispiel zeigt die Verwendung von `content-visibility: auto`, um das Malen und Rendern von Abschnitten außerhalb des Bildschirms zu überspringen.
Wenn ein `section` außerhalb des Viewports ist, wird das Malen des Inhalts übersprungen, bis der Abschnitt in die Nähe des Viewports kommt. Dies hilft sowohl beim Laden als auch bei Interaktionen auf der Seite.

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

Die `contain-intrinsic-size`-Eigenschaft fügt jedem `section`-Element eine Standardgröße von 500px in Höhe und Breite hinzu. Nachdem ein Abschnitt gerendert wurde, behält er seine gerenderte intrinsische Größe bei, selbst wenn er aus dem Viewport herausgescrollt wird.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Verwendung von hidden zur Verwaltung der Sichtbarkeit

Das folgende Beispiel zeigt, wie die Inhaltsichtbarkeit mit JavaScript verwaltet werden kann.
Die Verwendung von `content-visibility: hidden;` anstelle von `display: none;` bewahrt den Rendering-Zustand von Inhalten, wenn sie verborgen sind, und das Rendering erfolgt schneller.

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

Die `content-visibility`-Eigenschaft wird auf Absätzen gesetzt, die direkte Kinder von Elementen mit den Klassen `visible` und `hidden` sind. In unserem Beispiel können wir Inhalte in Absätzen je nach CSS-Klasse der übergeordneten Div-Elemente anzeigen und ausblenden.

Die `contain-intrinsic-size`-Eigenschaft ist enthalten, um die Inhaltsgröße darzustellen. Dies hilft, Layout-Verschiebungen zu reduzieren, wenn Inhalte verborgen werden.

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

In diesem Beispiel haben wir ein {{htmlelement("div")}}-Element, dessen Inhalt durch Klicken oder Drücken einer Taste zwischen sichtbarer und verborgener Darstellung umgeschaltet werden kann.

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

Im CSS setzen wir zunächst `content-visibility: hidden;` auf das `<div>`, um dessen Inhalt zu verbergen. Dann richten wir `@keyframe`-Animationen ein und hängen sie an Klassen an, um das `<div>` zu zeigen und zu verbergen, wobei `content-visibility` und [`color`](/de/docs/Web/CSS/color) animiert werden, sodass Sie einen glatten Animationseffekt erhalten, wenn der Inhalt gezeigt/verborgen wird.

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

Schließlich verwenden wir JavaScript, um die `.show`- und `.hide`-Klassen auf das `<div>` anzuwenden und so die Animationen anzuwenden, während es zwischen sichtbaren und verborgenen Zuständen umgeschaltet wird.

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
