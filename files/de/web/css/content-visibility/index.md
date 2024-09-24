---
title: content-visibility
slug: Web/CSS/content-visibility
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die **`content-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob ein Element seine Inhalte überhaupt rendert, und erzwingt eine starke Reihe von Beschränkungen, die es den Benutzeragenten ermöglichen, große Bereiche der Layout- und Renderarbeit potenziell auszulassen, bis sie benötigt werden. Sie ermöglicht dem Benutzeragenten, die Renderarbeit eines Elements (einschließlich Layout und Malen) zu überspringen, bis sie benötigt wird – was das anfängliche Laden der Seite erheblich beschleunigt.

> [!NOTE]
> Das {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}-Ereignis wird bei jedem Element mit `content-visibility: auto` ausgelöst, wenn dessen Renderarbeit beginnt oder aufhört, übersprungen zu werden. Dies bietet eine bequeme Möglichkeit für den Code einer Anwendung, Renderprozesse zu starten oder zu stoppen (z.B. das Zeichnen auf einem {{htmlelement("canvas")}}), wenn diese nicht benötigt werden, und so Rechenleistung zu sparen.

{{EmbedInteractiveExample("pages/css/content-visibility.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
content-visibility: visible;
content-visibility: hidden;
content-visibility: auto;

/* Globale Werte */
content-visibility: inherit;
content-visibility: initial;
content-visibility: revert;
content-visibility: revert-layer;
content-visibility: unset;
```

### Werte

- `visible`
  - : Keine Auswirkung. Die Inhalte des Elements werden wie gewohnt layoutiert und gerendert.
- `hidden`
  - : Das Element [überspringt seine Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents). Die übersprungenen Inhalte dürfen nicht für Funktionen des Benutzeragenten zugänglich sein, wie z.B. Seitensuche, Tabulator-Navigation usw., noch auswählbar oder fokussierbar sein. Dies ist ähnlich wie bei der Angabe der Inhalte mit `display: none`.
- `auto`
  - : Das Element schaltet Layout-Kontainment, Stil-Kontainment und Mal-Kontainment ein. Wenn das Element nicht [für den Benutzer relevant](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) ist, überspringt es auch seine Inhalte. Im Gegensatz zu `hidden` müssen die übersprungenen Inhalte weiterhin normal für Benutzeragentenfunktionen wie Seitensuche, Tabulator-Navigation usw. zugänglich und normal fokussierbar und auswählbar sein.

## Beschreibung

### Animation und Übergang von content-visibility

[Unterstützende Browser](#browser-kompatibilität) animieren/übergang `content-visibility` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete).

Diskrete Animation bedeutet generell, dass das Property zwischen zwei Werten 50% der Animationszeit umschalten wird. Bei `content-visibility` jedoch schaltet der Browser zwischen den beiden Werten um, um den animierten Inhalt während der gesamten Animationsdauer zu zeigen. Beispiel:

- Bei der Animation von `content-visibility` von `hidden` zu `visible` wird der Wert bei `0%` der Animationsdauer auf `visible` umgeschaltet, damit er während der gesamten Zeit sichtbar ist.
- Bei der Animation von `content-visibility` von `visible` zu `hidden` wird der Wert bei `100%` der Animationsdauer auf `hidden` umgeschaltet, sodass er die ganze Zeit sichtbar ist.

Dieses Verhalten ist nützlich für die Erstellung von Ein- und Ausgangsanimationen, bei denen Sie beispielsweise Inhalt aus dem DOM mit `content-visibility: hidden` entfernen möchten, aber einen sanften Übergang (wie ein Ausblenden) anstelle eines sofortigen Verschwindens wünschen.

Bei der Animation von `content-visibility` mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) auf `content-visibility` gesetzt werden. Dies ermöglicht effektiv `content-visibility`-Übergänge.

> [!NOTE]
> Beim Übergang des `content-visibility`-Werts eines Elements müssen Sie keinen Satz von Startwerten für übergangene Eigenschaften mithilfe eines [`@starting-style`](/de/docs/Web/CSS/@starting-style)-Blocks bereitstellen, wie dies beim [Übergang von `display`](/de/docs/Web/CSS/display#animating_display) erforderlich ist. Der Grund dafür ist, dass `content-visibility` ein Element nicht aus dem DOM entfernt, wie `display` es tut: Es überspringt nur das Rendern des Inhalts des Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Inhalte außerhalb des Bildschirms innerhalb einer Eigenschaft `content-visibility: auto` verbleiben im Document Object Model und im Barrierefreiheitsbaum. Dies ermöglicht eine Leistungsverbesserung der Seite mit `content-visibility: auto`, ohne die Zugänglichkeit negativ zu beeinflussen.

Da Stile für Inhalte außerhalb des Bildschirms nicht gerendert werden, erscheinen absichtlich mit `display: none` oder `visibility: hidden` versteckte Elemente _trotzdem im Barrierefreiheitsbaum_.
Wenn Sie nicht möchten, dass ein Element im Barrierefreiheitsbaum erscheint, verwenden Sie `aria-hidden="true"`.

## Beispiele

### Verwendung von auto zur Reduzierung der Rendering-Kosten langer Seiten

Das folgende Beispiel zeigt die Verwendung von `content-visibility: auto`, um das Malen und Rendern von Abschnitten außerhalb des Bildschirms zu überspringen.
Wenn ein `section` aus dem Sichtbereich heraus ist, wird das Malen des Inhalts übersprungen, bis der Abschnitt sich dem Sichtbereich nähert. Dies hilft sowohl beim Laden als auch bei Interaktionen auf der Seite.

#### HTML

```html
<section>
  <!-- Inhalt für jeden Abschnitt… -->
</section>
<section>
  <!-- Inhalt für jeden Abschnitt… -->
</section>
<section>
  <!-- Inhalt für jeden Abschnitt… -->
</section>
<!-- … -->
```

#### CSS

Die Eigenschaft `contain-intrinsic-size` fügt der Höhe und Breite jedes `section`-Elements eine Standardgröße von 500px hinzu. Nachdem ein Abschnitt gerendert wurde, behält er seine gerenderte intrinsische Größe, auch wenn er aus dem Sichtbereich gescrollt wird.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Verwendung von hidden zur Verwaltung der Sichtbarkeit

Das folgende Beispiel zeigt, wie man die Sichtbarkeit von Inhalten mit JavaScript verwaltet.
`content-visibility: hidden;` anstelle von `display: none;` zu verwenden, bewahrt den Rendering-Zustand von Inhalten, wenn sie versteckt sind, und die Wiedergabe ist schneller.

#### HTML

```html
<div class="hidden">
  <button class="toggle">Show</button>
  <p>
    Dieser Inhalt ist zunächst versteckt und kann durch Klicken auf die Schaltfläche angezeigt werden.
  </p>
</div>
<div class="visible">
  <button class="toggle">Hide</button>
  <p>
    Dieser Inhalt ist zunächst sichtbar und kann durch Klicken auf die Schaltfläche versteckt werden.
  </p>
</div>
```

#### CSS

Die `content-visibility`-Eigenschaft ist auf Absätze gesetzt, die direkte Kinder von Elementen mit den Klassen `visible` und `hidden` sind. In unserem Beispiel können wir Inhalte in Absätzen je nach CSS-Klasse der übergeordneten div-Elemente ein- und ausblenden.

Die Eigenschaft `contain-intrinsic-size` ist enthalten, um die Inhaltsgröße darzustellen. Dies hilft, das Layout-Shift zu reduzieren, wenn Inhalte versteckt sind.

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

In diesem Beispiel haben wir ein {{htmlelement("div")}}-Element, dessen Inhalt durch Klicken oder Drücken einer beliebigen Taste zwischen sichtbar und versteckt umgeschaltet werden kann.

#### HTML

```html
<p>
  Klicken Sie irgendwo auf den Bildschirm oder drücken Sie eine beliebige Taste, um den
  <code>&lt;div&gt;</code>-Inhalt zwischen versteckt und sichtbar umzuschalten.
</p>

<div>
  Dies ist ein <code>&lt;div&gt;</code>-Element, das zwischen
  <code>content-visibility: hidden;</code> und
  <code>content-visibility: visible;</code> animiert. Wir haben auch die Textfarbe
  animiert, um einen sanften Animationseffekt zu erzeugen.
</div>
```

#### CSS

In dem CSS setzen wir anfänglich `content-visibility: hidden;` auf das `<div>`, um seinen Inhalt zu verbergen. Wir richten dann `@keyframe`-Animationen ein und verknüpfen sie mit Klassen, um das `<div>` anzuzeigen und zu verstecken, indem wir `content-visibility` und [`color`](/de/docs/Web/CSS/color) animieren, damit Sie einen sanften Animationseffekt erhalten, wenn der Inhalt angezeigt/versteckt wird.

```css
div {
  font-size: 1.6rem;
  padding: 20px;
  border: 3px solid red;
  border-radius: 20px;
  width: 480px;

  content-visibility: hidden;
}

/* Animationsklassen */

.show {
  animation: show 0.7s ease-in forwards;
}

.hide {
  animation: hide 0.7s ease-out forwards;
}

/* Animations-Schlüsselbilder */

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

Schließlich verwenden wir JavaScript, um die `.show` und `.hide` Klassen entsprechend auf das `<div>` anzuwenden, um die Animationen anzuwenden, da es zwischen sichtbaren und versteckten Zuständen umgeschaltet wird.

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

Das gerenderte Ergebnis sieht wie folgt aus:

{{ EmbedLiveSample("Animating content-visibility", "100%", "300") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Containment](/de/docs/Web/CSS/CSS_containment)
- [`contain-intrinsic-size`](/de/docs/Web/CSS/contain-intrinsic-size)
- {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) (web.dev)
