---
title: content-visibility
slug: Web/CSS/content-visibility
l10n:
  sourceCommit: dfd18cb9ee7c6195d07cd937d206b53246f7507e
---

{{CSSRef}}

Die **`content-visibility`**-Eigenschaft von [CSS](/de/docs/Web/CSS) steuert, ob die Inhalte eines Elements überhaupt gerendert werden, und erzwingt gleichzeitig eine Reihe von starken Containments. Dies ermöglicht es Benutzeragenten, große Teile von Layout- und Rendering-Arbeiten potenziell zu überspringen, bis sie benötigt werden. Dadurch kann der Benutzeragent die Rendering-Arbeit eines Elements (einschließlich Layout und Malerei) überspringen, bis sie benötigt wird, was die anfängliche Seitenladezeit erheblich verkürzt.

> [!NOTE]
> Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)-Ereignis wird bei jedem Element ausgelöst, bei dem `content-visibility: auto` gesetzt ist, wenn dessen Rendering-Arbeit beginnt oder aufhört, übersprungen zu werden. Dies bietet eine bequeme Möglichkeit für den Code einer App, Rendering-Prozesse zu starten oder zu stoppen (z.B. das Zeichnen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, um dadurch Rechenleistung zu sparen.

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
  - : Keine Auswirkung. Die Inhalte des Elements werden wie gewohnt layoutet und gerendert.
- `hidden`
  - : Das Element [überspringt seine Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents). Die übersprungenen Inhalte dürfen nicht für Funktionen des Benutzeragenten zugänglich sein, wie z.B. die Seitensuche, Tab-Reihenfolgenavigation usw., noch dürfen sie auswählbar oder fokussierbar sein. Dies ähnelt dem Setzen der Inhalte auf `display: none`.
- `auto`
  - : Das Element aktiviert Layout-, Stil- und Malen-Containment. Wenn das Element nicht [für den Benutzer relevant](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) ist, überspringt es auch seine Inhalte. Im Gegensatz zu `hidden` müssen die übersprungenen Inhalte jedoch weiterhin regulär für Funktionen des Benutzeragenten zugänglich sein, z.B. für die Seitensuche, Tab-Reihenfolgenavigation usw., und müssen fokussierbar und auswählbar bleiben.

## Beschreibung

### Animieren und Übergänge von content-visibility

[Unterstützende Browser](#browser-kompatibilität) animieren/übergang `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete).

Diskrete Animation bedeutet im Allgemeinen, dass die Eigenschaft zur Hälfte der Animation zwischen zwei Werten wechselt. Im Fall von `content-visibility` wechselt der Browser jedoch zwischen den beiden Werten, um den animierten Inhalt für die gesamte Animationsdauer anzuzeigen. Zum Beispiel:

- Beim Animieren von `content-visibility` von `hidden` zu `visible` wechselt der Wert bei `0%` der Animationsdauer zu `visible`, sodass er die gesamte Zeit sichtbar ist.
- Beim Animieren von `content-visibility` von `visible` zu `hidden` wechselt der Wert bei `100%` der Animationsdauer zu `hidden`, sodass er die gesamte Zeit sichtbar ist.

Dieses Verhalten ist nützlich, um Ein- und Austrittsanimationen zu erstellen, bei denen Sie beispielsweise Inhalte aus dem DOM mit `content-visibility: hidden` entfernen, aber einen fließenden Übergang (wie ein Ausblenden) anstelle eines sofortigen Verschwindens wünschen.

Beim Animieren von `content-visibility` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf `content-visibility` gesetzt werden. Dies ermöglicht effektiv `content-visibility`-Übergänge.

> [!NOTE]
> Beim Übergang des Wertes `content-visibility` eines Elements müssen Sie keine Anfangswerte für übergangene Eigenschaften mit einem [`@starting-style`](/de/docs/Web/CSS/@starting-style)-Block angeben, wie es beim [Übergang von `display`](/de/docs/Web/CSS/display#animating_display) der Fall ist. Dies liegt daran, dass `content-visibility` ein Element nicht aus dem DOM ausblendet, wie es `display` tut: es überspringt nur das Rendern des Inhalts des Elements.

## Offizielle Definition

{{cssinfo}}

## Offizielle Syntax

{{CSSSyntax}}

## Barrierefreiheit

Inhalte außerhalb des Bildschirms innerhalb einer `content-visibility: auto`-Eigenschaft bleiben im Dokumentobjektmodell und im Barrierefreiheitsbaum erhalten. Dies ermöglicht die Verbesserung der Seitenleistung mit `content-visibility: auto`, ohne die Barrierefreiheit negativ zu beeinflussen.

Da Stile für Inhalte außerhalb des Bildschirms nicht gerendert werden, erscheinen absichtlich mit `display: none` oder `visibility: hidden` versteckte Elemente _weiterhin im Barrierefreiheitsbaum_.
Wenn Sie nicht möchten, dass ein Element im Barrierefreiheitsbaum erscheint, verwenden Sie `aria-hidden="true"`.

## Beispiele

### Verwendung von auto zur Reduzierung der Rendering-Kosten von langen Seiten

Das folgende Beispiel zeigt die Verwendung von `content-visibility: auto`, um das Malen und Rendern von Abschnitten außerhalb des Bildschirms zu überspringen.
Wenn ein `section` aus dem Ansichtsfenster hinaus ist, wird das Malen des Inhalts übersprungen, bis der Abschnitt in die Nähe des Ansichtsfensters kommt, was sowohl beim Laden als auch bei Interaktionen auf der Seite hilft.

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

Die Eigenschaft `contain-intrinsic-size` fügt jedem `section`-Element eine Standardgröße von 500px in Höhe und Breite hinzu. Nachdem ein Abschnitt gerendert wurde, behält er seine gerenderte intrinsische Größe bei, auch wenn er aus dem Ansichtsfenster gescrollt wird.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Verwendung von hidden zur Verwaltung der Sichtbarkeit

Das folgende Beispiel zeigt, wie die Inhaltssichtbarkeit mit JavaScript verwaltet wird.
Die Verwendung von `content-visibility: hidden;` anstelle von `display: none;` bewahrt den Rendering-Zustand von Inhalten, wenn sie verborgen sind, und das Rendern erfolgt schneller.

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

Die `content-visibility`-Eigenschaft wird auf Absätze gesetzt, die direkte Kinder von Elementen mit den Klassen `visible` und `hidden` sind. In unserem Beispiel können wir Inhalte in Absätzen abhängig von der CSS-Klasse der übergeordneten `div`-Elementen anzeigen und verbergen.

Die `contain-intrinsic-size`-Eigenschaft wird hinzugefügt, um die Inhaltsgröße zu repräsentieren. Dies hilft, Layoutverschiebungen zu reduzieren, wenn Inhalte verborgen sind.

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

In der CSS setzen wir zunächst `content-visibility: hidden;` auf das `<div>`, um dessen Inhalt zu verbergen. Dann richten wir `@keyframes`-Animationen ein und heften sie an Klassen an, um das `<div>` zu zeigen und zu verbergen, wobei `content-visibility` und [`color`](/de/docs/Web/CSS/color) animiert werden, sodass Sie einen fließenden Animationseffekt erhalten, wenn der Inhalt angezeigt/versteckt wird.

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

Schließlich verwenden wir JavaScript, um die `.show`- und `.hide`-Klassen auf das `<div>` anzuwenden, wie es angebracht ist, um die Animationen anzuwenden, wenn es zwischen den angezeigten und verborgenen Zuständen umgeschaltet wird.

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
