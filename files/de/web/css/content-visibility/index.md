---
title: content-visibility
slug: Web/CSS/content-visibility
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die **`content-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob ein Element seine Inhalte überhaupt rendert, und erzwingt eine starke Menge an Einschlüssen, sodass Benutzeragenten möglicherweise große Teile von Layout- und Rendering-Arbeiten überspringen können, bis diese benötigt werden. Es ermöglicht dem Benutzeragenten, die Rendering-Arbeiten eines Elements (einschließlich Layout und Malen) zu überspringen, bis sie benötigt werden – was das anfängliche Laden der Seite erheblich beschleunigt.

> [!NOTE]
> Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis wird bei jedem Element mit `content-visibility: auto` ausgelöst, wenn seine Rendering-Arbeiten gestartet oder gestoppt werden, übersprungen zu werden. Dies bietet eine bequeme Möglichkeit für den Code einer App, Rendering-Prozesse zu starten oder zu stoppen (z.B. Zeichnen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, und so Rechenleistung zu schonen.

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
  - : Keine Auswirkung. Die Inhalte des Elements werden wie gewohnt angeordnet und gerendert.
- `hidden`
  - : Das Element [überspringt seine Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents). Die übersprungenen Inhalte dürfen nicht für Benutzeragenten-Funktionen zugänglich sein, wie z.B. Suche auf der Seite, Tabulatornavigation usw., noch auswählbar oder fokussierbar sein. Dies ähnelt dem Zuweisen von `display: none` zu den Inhalten.
- `auto`
  - : Das Element aktiviert Layout-Einschluss, Stil-Einschluss und Mal-Einschluss. Wenn das Element für den Benutzer nicht [relevant ist](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user), überspringt es auch seine Inhalte. Im Gegensatz zu `hidden` müssen die übersprungenen Inhalte dennoch normal für Benutzeragenten-Funktionen verfügbar sein, z.B. Suche auf der Seite, Tabulatornavigation, usw., und müssen normal fokussierbar und auswählbar sein.

## Beschreibung

### Animieren und Übergänge von content-visibility

[Unterstützende Browser](#browser-kompatibilität) animieren/übergangsweise `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete).

Diskrete Animation bedeutet im Allgemeinen, dass die Eigenschaft 50 % der Zeit zwischen zwei Werten umschaltet. Im Fall von `content-visibility` wird der Browser jedoch zwischen den beiden Werten umschalten, um den animierten Inhalt während der gesamten Animationsdauer anzuzeigen. Zum Beispiel:

- Bei der Animation von `content-visibility` von `hidden` zu `visible` wechselt der Wert bei `0 %` der Animationsdauer zu `visible`, sodass er die gesamte Zeit sichtbar ist.
- Bei der Animation von `content-visibility` von `visible` zu `hidden` wechselt der Wert bei `100 %` der Animationsdauer zu `hidden`, sodass er die gesamte Zeit sichtbar ist.

Dieses Verhalten ist nützlich für die Erstellung von Ein-/Ausblendanimationen, bei denen Sie beispielsweise einen Inhalt mit `content-visibility: hidden` aus dem DOM entfernen möchten, jedoch eine sanfte Übergangsanimation (wie ein Ausblenden) wünschen, anstatt dass er sofort verschwindet.

Beim Animieren von `content-visibility` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf `content-visibility` gesetzt werden. Dies aktiviert effektiv Übergänge für `content-visibility`.

> [!NOTE]
> Beim Übergang des `content-visibility`-Wertes eines Elements müssen Sie keine Anfangswerte für die übergehenden Eigenschaften mit einem [`@starting-style`](/de/docs/Web/CSS/@starting-style) Block bereitstellen, wie es beim [Übergang von `display`](/de/docs/Web/CSS/display#animating_display) der Fall ist. Das liegt daran, dass `content-visibility` ein Element nicht aus dem DOM versteckt wie `display`, sondern nur das Rendern des Inhalts des Elements überspringt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Inhalte außerhalb des Bildschirms innerhalb einer `content-visibility: auto` Eigenschaft bleiben im Dokument-Objektmodell und im Barrierefreiheitsbaum. Dies ermöglicht, die Seitenleistung mit `content-visibility: auto` zu verbessern, ohne die Barrierefreiheit negativ zu beeinflussen.

Da Stile für Bildschirminhalte nicht gerendert werden, werden Elemente, die absichtlich mit `display: none` oder `visibility: hidden` versteckt sind, _weiterhin im Barrierefreiheitsbaum erscheinen_.
Wenn Sie nicht möchten, dass ein Element im Barrierefreiheitsbaum erscheint, verwenden Sie `aria-hidden="true"`.

## Beispiele

### Verwenden von auto zur Reduzierung der Rendering-Kosten langer Seiten

Das folgende Beispiel zeigt die Verwendung von `content-visibility: auto`, um das Malen und Rendern von Abschnitten außerhalb des Bildschirms zu überspringen.
Wenn ein `section` aus dem Blickfeld ist, wird das Malen des Inhalts übersprungen, bis der Abschnitt sich dem Blickfeld nähert. Dies hilft sowohl beim Laden als auch bei den Interaktionen auf der Seite.

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

Die `contain-intrinsic-size` Eigenschaft fügt jedem `section` Element eine Standardgröße von 500px in Höhe und Breite hinzu. Nachdem ein Abschnitt gerendert wurde, behält er seine gerenderte intrinsische Größe bei, auch wenn er aus dem Blickfeld gescrollt wird.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Verwenden von hidden zur Verwaltung der Sichtbarkeit

Das folgende Beispiel zeigt, wie man die Inhalts-Sichtbarkeit mit JavaScript verwaltet.
Durch die Verwendung von `content-visibility: hidden;` anstelle von `display: none;` bleibt der Rendering-Zustand des Inhalts erhalten, wenn dieser versteckt ist, wodurch das Rendering schneller wird.

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

Die `content-visibility` Eigenschaft wird auf Absätze angewendet, die direkte Kinder von Elementen mit den Klassen `visible` und `hidden` sind. In unserem Beispiel können wir Inhalte in Absätzen je nach CSS-Klasse der übergeordneten `div`-Elemente anzeigen und verbergen.

Die `contain-intrinsic-size` Eigenschaft wird hinzugefügt, um die Inhaltsgröße darzustellen. Dies hilft, Verschiebungen des Layouts zu reduzieren, wenn Inhalte versteckt sind.

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

### Animieren der Inhalts-Sichtbarkeit

In diesem Beispiel haben wir ein {{htmlelement("div")}} Element, dessen Inhalt durch Klicken oder Drücken einer beliebigen Taste zwischen angezeigt und verborgen umgeschaltet werden kann.

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

Im CSS setzen wir anfänglich `content-visibility: hidden;` auf das `<div>`, um dessen Inhalt zu verbergen. Dann richten wir `@keyframe`-Animationen ein und fügen sie Klassen hinzu, um das `<div>` anzuzeigen und zu verstecken, wobei wir `content-visibility` sowie [`color`](/de/docs/Web/CSS/color) animieren, damit ein sanfter Animationseffekt entsteht, wenn der Inhalt angezeigt/verborgen wird.

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

Schließlich verwenden wir JavaScript, um die `.show` und `.hide` Klassen auf das `<div>` anzuwenden, um die Animationen beim Umschalten zwischen sichtbar und verborgen zu bewirken.

```js
const divElem = document.querySelector("div");
const htmlElem = document.querySelector(":root");

htmlElem.addEventListener("click", showHide);
document.addEventListener("keydown", showHide);

function showHide() {
  if (divElem.classList[0] === "show") {
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
- [content-visibility: die neue CSS-Eigenschaft, die Ihre Rendering-Leistung steigert](https://web.dev/articles/content-visibility) (web.dev)
