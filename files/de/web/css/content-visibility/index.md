---
title: content-visibility
slug: Web/CSS/content-visibility
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die **`content-visibility`** [CSS](/de/docs/Web/CSS)-Eigenschaft kontrolliert, ob der Inhalt eines Elements überhaupt gerendert wird. Sie erzwingt zudem eine starke Gruppe von Containments, sodass User Agents große Teile der Layout- und Rendering-Arbeit potenziell auslassen können, bis sie benötigt werden. Dadurch kann der User Agent die Rendering-Arbeit eines Elements (einschließlich Layout und Painting) überspringen, bis sie benötigt wird – was den initialen Seitenaufbau wesentlich beschleunigt.

> [!NOTE]
> Das Ereignis [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) wird bei jedem Element gefeuert, bei dem `content-visibility: auto` eingestellt ist, wenn die Rendering-Arbeit beginnt oder aufhört, übersprungen zu werden. Dies bietet eine bequeme Möglichkeit für den Code einer App, Renderprozesse zu beginnen oder zu stoppen (z.B. das Zeichnen auf einem {{htmlelement("canvas")}}), wenn sie nicht benötigt werden, und so die Rechenleistung zu schonen.

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
  - : Keine Wirkung. Der Inhalt des Elements wird normal ausgelegt und gerendert.
- `hidden`
  - : Das Element [überspringt seinen Inhalt](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents). Der übersprungene Inhalt darf nicht für Benutzer-Agent-Funktionen zugänglich sein, wie z.B. Seitensuche, Tab-Navigation etc., und darf nicht auswählbar oder fokussierbar sein. Dies ähnelt dem Verhalten von `display: none`.
- `auto`
  - : Das Element aktiviert Layout-Containment, Style-Containment und Paint-Containment. Wenn das Element nicht [benutzerspezifisch relevant](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) ist, wird auch dessen Inhalt übersprungen. Im Gegensatz zu `hidden` muss der übersprungene Inhalt jedoch normal für Benutzer-Agent-Funktionen zugänglich sein, wie z.B. Seitensuche, Tab-Navigation etc., und muss fokussierbar und auswählbar sein.

## Beschreibung

### Animation und Transition von content-visibility

[Unterstützende Browser](#browser-kompatibilität) animieren/transitionieren `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete).

Diskrete Animation bedeutet im Allgemeinen, dass die Eigenschaft während der Hälfte der Animation zwischen zwei Werten umschaltet. Bei `content-visibility` schaltet der Browser jedoch zwischen den beiden Werten, um den animierten Inhalt während der gesamten Animationsdauer anzuzeigen. Beispiel:

- Bei der Animation von `content-visibility` von `hidden` zu `visible` schaltet der Wert bei `0%` der Animationsdauer zu `visible`, sodass es die ganze Zeit sichtbar ist.
- Bei der Animation von `content-visibility` von `visible` zu `hidden` schaltet der Wert bei `100%` der Animationsdauer zu `hidden`, sodass es die ganze Zeit sichtbar ist.

Dieses Verhalten ist nützlich, um Ein-/Ausgangsanimationen zu erstellen, bei denen Sie z.B. Inhalte mit `content-visibility: hidden` aus dem DOM entfernen möchten, aber eine sanfte Transition (wie ein Ausblenden) wünschen, anstatt dass dieser sofort verschwindet.

Wenn `content-visibility` mit [CSS-Transitions](/de/docs/Web/CSS/CSS_transitions) animiert wird, muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf `content-visibility` gesetzt werden. Dies ermöglicht effektiv `content-visibility`-Transitions.

> [!NOTE]
> Beim Übergang des `content-visibility`-Werts eines Elements müssen Sie keinen Satz von Startwerten für transitionierte Eigenschaften mithilfe eines [`@starting-style`](/de/docs/Web/CSS/@starting-style)-Blocks angeben, wie Sie es beim [Übergang von `display`](/de/docs/Web/CSS/display#animating_display) tun. Dies liegt daran, dass `content-visibility` ein Element nicht wie `display` aus dem DOM verbirgt: Es überspringt einfach das Rendern des Inhalts des Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Inhalte außerhalb des Bildschirms innerhalb einer Eigenschaft `content-visibility: auto` bleiben im Dokumentobjektmodell und im Accessibility-Tree. Dies ermöglicht eine Verbesserung der Seitenleistung mit `content-visibility: auto`, ohne die Barrierefreiheit negativ zu beeinflussen.

Da Stile für Inhalte außerhalb des Bildschirms nicht gerendert werden, _erscheinen Elemente, die absichtlich mit `display: none` oder `visibility: hidden` versteckt werden, dennoch im Accessibility-Tree_.
Wenn Sie nicht möchten, dass ein Element im Accessibility-Tree erscheint, verwenden Sie `aria-hidden="true"`.

## Beispiele

### Verwendung von auto zur Reduzierung der Rendering-Kosten langer Seiten

Das folgende Beispiel zeigt die Verwendung von `content-visibility: auto`, um das Painting und Rendering von Bereichen außerhalb des Bildschirms zu überspringen.
Wenn sich ein `section` außerhalb des Ansichtsfensters befindet, wird das Painting des Inhalts übersprungen, bis sich der Bereich dem Ansichtsfenster nähert. Dies hilft sowohl bei der Ladezeit als auch bei Interaktionen auf der Seite.

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

Die Eigenschaft `contain-intrinsic-size` fügt jedem `section`-Element eine Standardgröße von 500px in Höhe und Breite hinzu. Nachdem ein Abschnitt gerendert wurde, behält er seine gerenderte intrinsische Größe bei, auch wenn er aus dem Ansichtsfenster herausgescrollt wird.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Verwendung von hidden zur Verwaltung der Sichtbarkeit

Das folgende Beispiel zeigt, wie die Sichtbarkeit von Inhalten mit JavaScript verwaltet werden kann.
Die Verwendung von `content-visibility: hidden;` anstelle von `display: none;` bewahrt den Rendering-Zustand von Inhalten, wenn sie versteckt sind, und sorgt für schnelleres Rendering.

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

Die Eigenschaft `content-visibility` wird auf Absätzen eingestellt, die direkte Kinder von Elementen mit den Klassen `visible` und `hidden` sind. In unserem Beispiel können wir Inhalte in Absätzen abhängig von der CSS-Klasse der übergeordneten div-Elemente ein- und ausblenden.

Die Eigenschaft `contain-intrinsic-size` ist enthalten, um die Inhaltsgröße darzustellen. Dies hilft dabei, Layoutverschiebungen zu reduzieren, wenn der Inhalt ausgeblendet wird.

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

{{EmbedLiveSample('Using hidden to manually manage visibility')}}

### Animation von content-visibility

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

Im CSS setzen wir initial `content-visibility: hidden;` auf das `<div>`, um dessen Inhalt zu verbergen. Dann richten wir `@keyframe`-Animationen ein und verknüpfen sie mit Klassen, um das `<div>` anzuzeigen und zu verbergen, wobei `content-visibility` und [`color`](/de/docs/Web/CSS/color) animiert werden, sodass ein sanfter Animationseffekt entsteht, wenn der Inhalt angezeigt/versteckt wird.

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

Schließlich verwenden wir JavaScript, um die `.show`- und `.hide`-Klassen auf das `<div>` anzuwenden, um die Animationen entsprechend anzuwenden, wenn es zwischen sichtbaren und verborgenen Zuständen umgeschaltet wird.

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

{{EmbedLiveSample("Animating content-visibility", "100%", "300")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Containment](/de/docs/Web/CSS/CSS_containment)
- [`contain-intrinsic-size`](/de/docs/Web/CSS/contain-intrinsic-size)
- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) (web.dev)
