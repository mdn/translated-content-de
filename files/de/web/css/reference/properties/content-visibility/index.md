---
title: "`content-visibility` CSS property"
short-title: content-visibility
slug: Web/CSS/Reference/Properties/content-visibility
l10n:
  sourceCommit: c4e64810ce10fb5cb1eebfcd8b6f526866fd0982
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`content-visibility`** steuert, ob der Inhalt eines Elements überhaupt gerendert wird. Zugleich aktiviert sie umfassende Formen der Eingrenzung (Containment). Dadurch können User Agents möglicherweise große Teile der Layout- und Rendering-Arbeit auslassen, bis sie benötigt werden. Der User Agent kann die Rendering-Arbeit für ein Element – einschließlich Layout und Zeichnen – überspringen, bis sie erforderlich ist. Das beschleunigt das anfängliche Laden der Seite erheblich.

> [!NOTE]
> Das Ereignis [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) wird bei jedem Element mit `content-visibility: auto` ausgelöst, wenn das Überspringen seiner Rendering-Arbeit beginnt oder endet. Anwendungscode kann damit Rendering-Prozesse (z. B. das Zeichnen auf einem {{htmlelement("canvas")}}) starten oder anhalten, je nachdem, ob sie benötigt werden. So lässt sich Rechenleistung sparen.

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

Diese Eigenschaft wird mit einem der folgenden Schlüsselwortwerte angegeben:

- `visible`
  - : Keine Auswirkung. Der Inhalt des Elements wird wie gewohnt im Layout berücksichtigt und gerendert. Dies ist der Standardwert.
- `hidden`
  - : Das Element [überspringt seinen Inhalt](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents). Der übersprungene Inhalt darf über Funktionen des User Agents wie die Seitensuche oder die Navigation per Tabulatortaste nicht zugänglich sein. Er darf auch weder auswählbar noch fokussierbar sein. Dies ist vergleichbar mit `display: none` für den Inhalt.
- `auto`
  - : Für das Element werden Layout-, Stil- und Zeichen-Containment aktiviert. Wenn das Element für die [Nutzenden nicht relevant](/de/docs/Web/CSS/Guides/Containment/Using#relevant_to_the_user) ist, überspringt es außerdem seinen Inhalt. Anders als bei `hidden` muss der übersprungene Inhalt für Funktionen des User Agents wie die Seitensuche und die Navigation per Tabulatortaste weiterhin wie gewohnt verfügbar sowie fokussierbar und auswählbar sein.

## Beschreibung

### Animationen und Übergänge von content-visibility

[Browser, die dies unterstützen](#browser-kompatibilität), animieren `content-visibility` beziehungsweise wenden Übergänge darauf an. Dabei nutzen sie eine Variante des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete).

Bei einer diskreten Animation wechselt eine Eigenschaft normalerweise nach 50 % der Animationsdauer von einem Wert zum anderen. Bei `content-visibility` erfolgt der Wechsel dagegen so, dass der animierte Inhalt während der gesamten Animationsdauer sichtbar bleibt. Zum Beispiel:

- Wird `content-visibility` von `hidden` zu `visible` animiert, wechselt der Wert bei `0%` der Animationsdauer zu `visible`, sodass der Inhalt durchgehend sichtbar ist.
- Wird `content-visibility` von `visible` zu `hidden` animiert, wechselt der Wert erst bei `100%` der Animationsdauer zu `hidden`, sodass der Inhalt durchgehend sichtbar ist.

Dieses Verhalten ist nützlich für Ein- und Ausblendeanimationen: Sie können beispielsweise Inhalte mit `content-visibility: hidden` ausblenden und dabei einen weichen Übergang, etwa ein Ausblenden per Fade-out, erzielen, statt sie sofort verschwinden zu lassen.

Wenn Sie `content-visibility` mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) animieren, muss für `content-visibility` [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) festgelegt werden. Dadurch werden Übergänge für `content-visibility` ermöglicht.

> [!NOTE]
> Bei einem Übergang des `content-visibility`-Werts eines Elements müssen Sie keine Ausgangswerte für die Eigenschaften angeben, auf die der Übergang angewendet wird. Anders als beim [Übergang von `display`](/de/docs/Web/CSS/Reference/Properties/display#animating_display) ist dafür kein {{cssxref("@starting-style")}}-Block erforderlich. Der Grund ist, dass `content-visibility` ein Element nicht wie `display` aus dem DOM entfernt, sondern lediglich das Rendern seines Inhalts überspringt.

## Barrierefreiheit

Inhalte außerhalb des sichtbaren Bereichs bleiben bei `content-visibility: auto` im Document Object Model und im Barrierefreiheitsbaum erhalten. So können Sie mit `content-visibility: auto` die Seitenleistung verbessern, ohne die Barrierefreiheit zu beeinträchtigen.

Da die Stile von Inhalten außerhalb des sichtbaren Bereichs nicht gerendert werden, erscheinen Elemente, die absichtlich mit `display: none` oder `visibility: hidden` verborgen wurden, _dennoch im Barrierefreiheitsbaum_.
Wenn ein Element dort nicht erscheinen soll, verwenden Sie `aria-hidden="true"`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Mit auto die Rendering-Kosten langer Seiten senken

Das folgende Beispiel zeigt, wie Sie mit `content-visibility: auto` das Zeichnen und Rendern von Abschnitten außerhalb des sichtbaren Bereichs überspringen können.
Befindet sich ein `section`-Element außerhalb des Viewports, wird sein Inhalt erst gezeichnet, wenn sich der Abschnitt dem Viewport nähert. Das verbessert sowohl das Laden als auch die Interaktion mit der Seite.

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

Die Eigenschaft `contain-intrinsic-size` legt für Höhe und Breite jedes `section`-Elements eine Standardgröße von 500px fest. Nachdem ein Abschnitt gerendert wurde, behält er seine gerenderte intrinsische Größe bei – auch wenn er aus dem Viewport gescrollt wird.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Mit hidden die Sichtbarkeit verwalten

Das folgende Beispiel zeigt, wie Sie die Sichtbarkeit von Inhalten mit JavaScript verwalten können.
Wenn Sie `content-visibility: hidden;` statt `display: none;` verwenden, bleibt der Rendering-Zustand verborgener Inhalte erhalten, und das erneute Rendern erfolgt schneller.

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

Die Eigenschaft `content-visibility` wird für Absätze festgelegt, die direkte Kindelemente von Elementen mit den Klassen `visible` und `hidden` sind. In diesem Beispiel können wir den Inhalt der Absätze abhängig von der CSS-Klasse des übergeordneten div-Elements ein- oder ausblenden.

Die Eigenschaft `contain-intrinsic-size` ist enthalten, um die Größe des Inhalts abzubilden. Dies hilft, Layout-Verschiebungen zu verringern, wenn der Inhalt verborgen wird.

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

{{ EmbedLiveSample('using_hidden_to_manage_visibility') }}

### content-visibility animieren

In diesem Beispiel gibt es ein {{htmlelement("div")}}-Element, dessen Inhalt Sie durch Klicken oder Drücken einer beliebigen Taste ein- und ausblenden können.

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

Im CSS setzen wir zunächst `content-visibility: hidden;` für das `<div>`, um seinen Inhalt zu verbergen. Anschließend definieren wir `@keyframes`-Animationen und weisen sie Klassen zum Ein- und Ausblenden des `<div>` zu. Dabei animieren wir `content-visibility` und {{cssxref("color")}}, sodass beim Ein- und Ausblenden des Inhalts ein weicher Animationseffekt entsteht.

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

Schließlich verwenden wir JavaScript, um dem `<div>` je nach Zustand die Klassen `.show` und `.hide` zuzuweisen und so die entsprechenden Animationen beim Ein- und Ausblenden auszuführen.

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

- [CSS-Containment](/de/docs/Web/CSS/Guides/Containment)
- {{cssxref("contain-intrinsic-size")}}
- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)
- [content-visibility: die neue CSS-Eigenschaft, die Ihre Rendering-Leistung steigert](https://web.dev/articles/content-visibility) (web.dev)
