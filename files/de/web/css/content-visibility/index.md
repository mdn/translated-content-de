---
title: content-visibility
slug: Web/CSS/content-visibility
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die **`content-visibility`**-[CSS](/de/docs/Web/CSS)-Eigenschaft steuert, ob ein Element seine Inhalte überhaupt rendert, zusammen mit der Erzwingung einer starken Reihe von Einschlüssen, die es den Benutzeragenten ermöglichen, möglicherweise große Teile der Layout- und Renderarbeit zu überspringen, bis sie benötigt werden. Sie ermöglicht es dem Benutzeragenten, die Renderarbeit eines Elements (einschließlich Layout und Malen) zu überspringen, bis diese Arbeit benötigt wird – was das anfängliche Laden der Seite erheblich beschleunigt.

> [!NOTE]
> Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)-Ereignis wird bei jedem Element mit `content-visibility: auto` ausgelöst, wenn dessen Renderarbeit beginnt oder aufhört, übersprungen zu werden. Dies bietet eine bequeme Möglichkeit für den Code einer App, Renderprozesse (z. B. das Zeichnen auf einem {{htmlelement("canvas")}}) zu beginnen oder zu stoppen, wenn sie nicht benötigt werden, und dadurch Rechenleistung zu sparen.

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
  - : Keine Auswirkung. Die Inhalte des Elements werden normal angeordnet und gerendert.
- `hidden`
  - : Das Element [überspringt seine Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents). Die übersprungenen Inhalte dürfen nicht durch Benutzeragentenfunktionen wie Seitensuche, Tab-Reihenfolge-Navigation usw. zugänglich sein, noch auswählbar oder fokussierbar sein. Dies ist ähnlich, als würde man den Inhalten `display: none` geben.
- `auto`
  - : Das Element aktiviert Layout-Einschließung, Stil-Einschließung und Mal-Einschließung. Wenn das Element nicht [für den Benutzer relevant ist](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user), werden auch seine Inhalte übersprungen. Im Gegensatz zu `hidden` müssen die übersprungenen Inhalte jedoch weiterhin normal für Benutzeragentenfunktionen wie Seitensuche, Tab-Reihenfolge-Navigation usw. verfügbar sein und müssen normal fokussierbar und auswählbar sein.

## Beschreibung

### Animationen und Übergänge von content-visibility

[Unterstützende Browser](#browser-kompatibilität) animieren/übergehen `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete).

Diskrete Animation bedeutet allgemein, dass die Eigenschaft 50% des Weges durch die Animation zwischen zwei Werten wechselt. Im Fall von `content-visibility` wird der Browser jedoch zwischen den beiden Werten wechseln, um den animierten Inhalt für die gesamte Dauer der Animation anzuzeigen. Zum Beispiel:

- Wenn `content-visibility` von `hidden` zu `visible` animiert wird, wechselt der Wert bei `0%` der Animationsdauer zu `visible`, sodass er die ganze Zeit über sichtbar ist.
- Wenn `content-visibility` von `visible` zu `hidden` animiert wird, wechselt der Wert bei `100%` der Animationsdauer zu `hidden`, sodass er die ganze Zeit über sichtbar ist.

Dieses Verhalten ist nützlich, um Ein-/Austrittsanimationen zu erstellen, bei denen Sie zum Beispiel Inhalte aus dem DOM mit `content-visibility: hidden` entfernen möchten, dabei aber eine sanfte Übergangsbewegung (wie ein Ausblenden) wünschen, anstatt dass sie plötzlich verschwinden.

Beim Animieren von `content-visibility` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf `content-visibility` gesetzt werden. Dies ermöglicht effektiv `content-visibility`-Übergänge.

> [!NOTE]
> Wenn Sie den `content-visibility`-Wert eines Elements übergehen, müssen Sie keinen Satz von Startwerten für die übergangeneneigenschaften mithilfe eines [`@starting-style`](/de/docs/Web/CSS/@starting-style)-Blocks bereitstellen, wie Sie es beim [Übergang des `display`](/de/docs/Web/CSS/display#animating_display) tun. Dies liegt daran, dass `content-visibility` ein Element nicht aus dem DOM ausblendet wie `display`: Es überspringt einfach das Rendern der Inhalte des Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Off-Screen-Inhalte innerhalb einer `content-visibility: auto`-Eigenschaft bleiben im Dokumentobjektmodell und im Barrierefreiheitsbaum vorhanden. Dies ermöglicht die Verbesserung der Seitenleistung mit `content-visibility: auto`, ohne die Barrierefreiheit negativ zu beeinflussen.

Da Stile für Off-Screen-Inhalte nicht gerendert werden, _erscheinen Elemente, die absichtlich mit `display: none` oder `visibility: hidden` versteckt wurden, weiterhin im Barrierefreiheitsbaum_.
Wenn Sie nicht möchten, dass ein Element im Barrierefreiheitsbaum erscheint, verwenden Sie `aria-hidden="true"`.

## Beispiele

### Verwendung von auto zum Reduzieren der Renderingkosten langer Seiten

Das folgende Beispiel zeigt die Verwendung von `content-visibility: auto`, um das Malen und Rendern von Off-Screen-Bereichen zu überspringen. Wenn ein `section`-Bereich außerhalb des Viewports ist, wird das Malen des Inhalts übersprungen, bis der Bereich nahe an den Viewport kommt. Dies hilft sowohl beim Laden als auch bei Interaktionen auf der Seite.

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

Die `contain-intrinsic-size`-Eigenschaft fügt der Höhe und Breite jedes `section`-Elements eine Standardgröße von 500px hinzu. Nachdem ein Abschnitt gerendert wurde, behält er seine gerenderte intrinsische Größe, auch wenn er aus dem Viewport gescrollt wird.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Verwendung von hidden zur Verwaltung der Sichtbarkeit

Das folgende Beispiel zeigt, wie Sie die Inhaltsanzeige mit JavaScript verwalten können. Die Verwendung von `content-visibility: hidden;` anstelle von `display: none;` bewahrt den Renderstatus von Inhalten, wenn sie verborgen sind, und erleichtert das schnellere Rendern.

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

Die `content-visibility`-Eigenschaft wird auf Absätzen gesetzt, die direkte Kinder von Elementen mit den Klassen `visible` und `hidden` sind. In unserem Beispiel können wir Inhalte in Absätzen abhängig von der CSS-Klasse der übergeordneten div-Elemente ein- und ausblenden.

Die `contain-intrinsic-size`-Eigenschaft wird hinzugefügt, um die Inhaltsgröße darzustellen. Dies hilft, Layoutverschiebung zu reduzieren, wenn Inhalte verborgen sind.

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

Im CSS setzen wir zunächst `content-visibility: hidden;` auf das `<div>`, um dessen Inhalt zu verbergen. Wir richten dann `@keyframes`-Animationen ein und fügen sie Klassen hinzu, um das `<div>` anzuzeigen und zu verbergen, wobei `content-visibility` und [`color`](/de/docs/Web/CSS/color) animiert werden, sodass Sie eine sanfte Animation erhalten, während der Inhalt angezeigt/versteckt wird.

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

Schließlich verwenden wir JavaScript, um die `.show`- und `.hide`-Klassen auf das `<div>` wie angemessen anzuwenden, um die Animationen anzuwenden, wenn es zwischen angezeigten und verborgenen Zuständen umgeschaltet wird.

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

- [CSS-Einschließung](/de/docs/Web/CSS/CSS_containment)
- [`contain-intrinsic-size`](/de/docs/Web/CSS/contain-intrinsic-size)
- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)
- [content-visibility: die neue CSS-Eigenschaft, die Ihre Rendering-Leistung steigert](https://web.dev/articles/content-visibility) (web.dev)
