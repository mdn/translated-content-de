---
title: interactivity
slug: Web/CSS/interactivity
l10n:
  sourceCommit: f8939dd06d7b120f77c4b4c70cac591d0eb20beb
---

{{CSSRef}}{{seecompattable}}

Die **`interactivity`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Element und seine Nachkommen [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert) gesetzt werden.

## Syntax

```css
/* Keyword values */
interactivity: auto;
interactivity: inert;

/* Global values */
interactivity: inherit;
interactivity: initial;
interactivity: revert;
interactivity: revert-layer;
interactivity: unset;
```

### Werte

- `auto`
  - : Ausgewählte Elemente befinden sich in ihrem Standardzustand in Bezug auf Trägheit. Dies bedeutet in der Regel, dass sie interaktiv sind, aber dies ist [nicht immer der Fall](#standardmäßige_trägheit). Dies ist der Standardwert.

- `inert`
  - : Ausgewählte Elemente und ihre Nachkommen sind träge.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beschreibung

Die `interactivity` Eigenschaft kann verwendet werden, um festzulegen, ob ein Element und seine Nachkommen träge sind. Siehe die HTML-Attributreferenzseite [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) für eine detaillierte Beschreibung des Trägheitszustands.

Ein typischer Anwendungsfall für `interactivity: inert` ist in paginiertem Inhalt, wie Karussells, wenn Sie nur mit dem gerade sichtbaren Inhalt und den Steuerelementen interagieren möchten. In solchen Fällen könnte das unerwartete Fokussieren auf einen außerhalb des Bildschirms befindlichen Link oder Button das Erlebnis beeinträchtigen.

Wenn der Trägheitszustand eines Elements sowohl durch HTML (das `inert` Attribut oder eine automatische Browsereinstellung) als auch durch CSS (die `interactivity` Eigenschaft) gleichzeitig festgelegt wird, hat CSS keine Wirkung – es kann die Trägheit durch HTML nicht überschreiben.

Zum Beispiel wird das folgende HTML-Element träge sein:

```html
<button inert>You can't press me</button>
```

Das Setzen von `interactivity: auto` wird keine Wirkung haben.

### Standardmäßige Trägheit

Die meisten Elemente sind standardmäßig interaktiv, aber dies ist nicht immer der Fall:

- Ein Vorfahrelement kann in einen trägen Zustand versetzt werden, über die `interactivity` Eigenschaft oder das `inert` Attribut.
- Während ein modales {{htmlelement("dialog")}} angezeigt wird, wird der Rest der Seite automatisch in einen trägen Zustand versetzt.

## Beispiele

### Grundlegende Verwendung von `interactivity`

In diesem Beispiel haben wir zwei {{htmlelement("input")}} Elemente. Das zweite hat `interactivity: inert` über eine Klasse gesetzt, und ist daher in unterstützenden Browsern nicht fokussierbar oder bearbeitbar.

```html live-sample___basic-interactivity
<p>
  <label>
    This input is interactive:
    <input type="text" name="one" value="editable" />
  </label>
</p>
<p>
  <label>
    This input is not interactive:
    <input type="text" name="two" value="Not editable" class="inert" />
  </label>
</p>
```

```css live-sample___basic-interactivity
.inert {
  interactivity: inert;
  background-color: lightpink;
}
```

#### Ergebnis

Die Ausgabe sieht folgendermaßen aus:

{{ EmbedLiveSample("basic-interactivity", "100%", "100") }}

### Erforschen der Auswirkungen von Trägheit

In diesem Beispiel erforschen wir die Auswirkungen der `interactivity` Eigenschaft.

#### HTML

Das Markup enthält zwei {{htmlelement("p")}} Elemente, von denen jedes einen Link enthält. Der zweite Absatz hat auch eine Klasse `inert` und ein Kind-{{htmlelement("span")}} Element mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), um es bearbeitbar zu machen.

```html-nolint live-sample___inertness-effects
<p>
  This paragraph is not
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inert"
    >inert</a
  >. You should be able to select the text content, search for it using
  in-browser search features, and focus and click the link. There is a
  <code>click</code> event handler set on the paragraph that changes the border
  color for a second when it is clicked anywhere.
  <span contenteditable="">This sentence has <code>contenteditable</code> set on
  it, so it is editable</span>.
</p>

<p class="inert">
  This paragraph is
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inert"
    >inert</a
  >. You won't be able to select the text content, search for it using
  in-browser search features, focus and click the link, or issue
  <code>click</code> events on it (the border color won't change when it is
  clicked).
  <span contenteditable=""
    >This sentence has <code>contenteditable</code> set on it, but it is not
    editable because it is inert</span
  >.
</p>
```

#### CSS

Wir setzen die `interactivity` Eigenschaft im zweiten Absatz auf den Wert `inert`, um es träge zu machen. Dies bedeutet, dass Sie den `contenteditable` Text im ersten Absatz bearbeiten können sollten, aber nicht im zweiten, und Sie sollten keinen Text suchen, auswählen oder mit dem Link im zweiten Absatz interagieren können.

```css live-sample___inertness-effects
.inert {
  interactivity: inert;
}

[contenteditable] {
  outline: 1px dashed lightblue;
}

.borderChanged {
  border-color: orange;
}
```

```css hidden live-sample___inertness-effects
body {
  font: 1.2em / 1.5 system-ui;
}

p {
  border: 5px solid black;
  padding: 10px;
  width: 90%;
  margin: 20px auto;
}
```

#### JavaScript

Wir setzen einen Ereignishandler auf jeden Absatz, der einen Klassennamen bei einem Klick umschaltet, die Klasse hinzufügt und sie nach zwei Sekunden wieder entfernt.

```js live-sample___inertness-effects
const paras = document.querySelectorAll("p");

function tempBorderChange(e) {
  const targetPara = e.currentTarget;
  targetPara.classList.add("borderChanged");
  setTimeout(() => {
    targetPara.classList.remove("borderChanged");
  }, 2000);
}

for (para of paras) {
  para.addEventListener("click", tempBorderChange);
}
```

#### Ergebnis

{{ EmbedLiveSample("inertness-effects", "100%", "380") }}

Beachten Sie, wie der zweite Absatz träge ist; er verhält sich daher nicht wie der erste Absatz. Zum Beispiel kann der Link nicht angeklickt oder fokussiert werden, der Text kann nicht ausgewählt oder durchsucht werden, der `contenteditable` `<span>` ist nicht editierbar und `click`-Ereignisse werden darauf nicht registriert.

### Außerhalb des Bildschirms befindliche Elemente mittels einer View-Timeline auf Trägheit setzen

Dieses Beispiel zeigt horizontal scrollenden paginierten Inhalt, bei dem jede Seite mit [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) festgehalten wird, und die Trägheit über eine [scrollgesteuerte Animation](/de/docs/Web/CSS/CSS_scroll-driven_animations) kontrolliert wird, die eine [Sichtfortschrittstimeline](/de/docs/Web/CSS/view-timeline-name) verwendet. Inhalte, die im {{Glossary("scroll_container", "Scroll-Container")}} angezeigt werden, sind interaktiv; sie werden träge, wenn sie aus dem überfließenden Inhalt herausbewegt werden.

#### HTML

Das HTML besteht aus einer Kopfzeile oberster Ebene [heading](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einer [unsortierten Liste](/de/docs/Web/HTML/Reference/Elements/ul) mit vier [Listenelementen](/de/docs/Web/HTML/Reference/Elements/li), die jeweils den Inhalt für eine separate Seite enthalten.

```html live-sample___offscreen-inert
<h1>Pagination interactivity demo</h1>
<ul>
  <li>
    <h2>Page 1</h2>
    <p>This is the first page of content.</p>
    <p><a href="#">A demo link</a>.</p>
    <p><button>Press me</button></p>
  </li>
  <li>
    <h2>Page 2</h2>
    <p>This is the second page of content.</p>
    <p><a href="#">A demo link</a>.</p>
    <p><button>Press me</button></p>
  </li>
  <li>
    <h2>Page 3</h2>
    <p>This is the third page of content.</p>
    <p><a href="#">A demo link</a>.</p>
    <p><button>Press me</button></p>
  </li>
  <li>
    <h2>Page 4</h2>
    <p>This is the fourth page of content.</p>
    <p><a href="#">A demo link</a>.</p>
    <p><button>Press me</button></p>
  </li>
</ul>
```

#### CSS

Eine {{cssxref("width")}} von `100vw` wird auf die unsortierte Liste gesetzt, um sie so breit wie den Ansichtsbereich zu machen. Wir fügen eine feste {{cssxref("height")}}, etwas {{cssxref("padding")}} und einen {{cssxref("overflow-x")}} Wert von `scroll` hinzu, sodass überfließender Inhalt scrollt. Die enthaltenen Listenelemente werden horizontal mit {{cssxref("display", "display: flex")}} layoutet. Dieser Flex-Container erhält einen {{cssxref("scroll-snap-type")}} Wert von `x mandatory`, um ihn in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll Snap Container")}} zu verwandeln. Das `x` Schlüsselwort sorgt dafür, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal schnappen. Das `mandatory` Schlüsselwort bedeutet, dass der Container immer zu einem Snap-Ziel am Ende einer Scroll-Aktion schnappen wird.

```css hidden live-sample___offscreen-inert
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Helvetica", "Arial", sans-serif;
}

h1 {
  text-align: center;
  margin: 0;
}

button {
  background-color: white;
}
```

```css live-sample___offscreen-inert
ul {
  width: 100vw;
  height: 250px;
  padding: 1vw;
  overflow-x: scroll;
  display: flex;
  gap: 1vw;
  scroll-snap-type: x mandatory;
}
```

Jedes Listenelement hat die folgenden Stile angewendet:

- Einen {{cssxref("flex")}} Wert von `0 0 98vw`, der jedes Element so groß wie den Scroll-Container abzüglich der auf die Liste gesetzten {{cssxref("gap")}} (siehe die `gap` Deklaration in der zuvor gezeigten `ul` Regel) zwingt. Dies hat auch den Effekt, jede Seite innerhalb des Scroll-Containers zu zentrieren.
- Einen {{cssxref("scroll-snap-align")}} Wert von `center`, um zu bewirken, dass der Scroll-Container zur Mitte jedes Snap-Zieles schnappt.
- Einen {{cssxref("view-timeline")}} Wert von `--inner-change inline`, um das Element als Subjekt der `--inner-change` Sichtfortschrittstimeline zu deklarieren und diese Timeline so zu setzen, dass sie in Inline-Richtung fortschreitet, während sie sich durch ihren Vorfahrenscrollcontainer bewegt.
- Einen {{cssxref("animation-timeline")}} Wert mit demselben Namen wie die {{cssxref("view-timeline-name")}}, wie in der `view-timeline` Kurzschreibung definiert, was bedeutet, dass die benannte Sichtfortschrittstimeline verwendet wird, um den Fortschritt von auf das Element angewandten Animationen zu steuern.
- Einen {{cssxref("animation-name")}} und {{cssxref("animation-fill-mode")}}, der die auf dieses Element angewandte Animation und ihren Füllmodus definiert. Der `both` Wert ist erforderlich, weil Sie möchten, dass der Start-Animationszustand auf das Element angewendet wird, bevor die Animation beginnt, und der End-Animationszustand auf das Element angewendet wird, nachdem die Animation endet. Wenn die Animation nicht gespeichert wird, greift die per Animation angewendete `interactivity: inert` Deklaration nicht auf Listenelemente, wenn sie außerhalb des Scroll-Containers sind.

```css live-sample___offscreen-inert
li {
  list-style-type: none;
  background-color: #eeeeee;
  border: 1px solid #dddddd;
  padding: 20px;

  flex: 0 0 98vw;

  scroll-snap-align: center;

  view-timeline: --inner-change inline;
  animation-timeline: --inner-change;
  animation-name: inert-change;
  animation-fill-mode: both;
}
```

Abschließend werden die Animation {{cssxref("@keyframes")}} definiert. `interactivity: inert` wird an den Positionen `entry 0%` und `exit 100%` der View-Timeline gesetzt. Zusammen mit dem Wert `animation-fill-mode: both` bedeutet das, dass die Listenelemente vor Beginn und nach Ende der View-Timeline träge sein werden, d.h. wenn sie außerhalb des Scroll-Containers sind. Zwischen den Positionen `entry 1%` und `exit 99%` wird `interactivity: auto` auf die Listenelemente gesetzt, was bedeutet, dass sie normal interagiert werden können, wenn sie innerhalb des Scroll-Containers sind.

```css live-sample___offscreen-inert
@keyframes inert-change {
  entry 0%,
  exit 100% {
    interactivity: inert;
  }

  entry 1%,
  exit 99% {
    interactivity: auto;
  }
}
```

Siehe die {{cssxref("animation-range")}} Referenzseite für eine Erklärung der Positionswerte.

#### Ergebnis

Scrollen Sie die unsortierte Liste horizontal, um den Paginierungseffekt zu sehen — jede Seite schnellt ins Blickfeld. Versuchen Sie, zwischen den Links und den Buttons zu tabben; Sie werden feststellen, dass nur die im Bildschirm sichtbaren interaktiv sind und getabbt werden können.

{{ EmbedLiveSample("offscreen-inert", "100%", "320") }}

## Barrierefreiheitsbedenken

Berücksichtigen Sie die Barrierefreiheit sorgfältig, wenn Sie Elemente träge machen. Standardmäßig gibt es keine visuelle Möglichkeit, zu erkennen, ob ein Element oder sein Unterbaum träge ist oder nicht. Als Webentwickler liegt es in Ihrer Verantwortung, die aktiven und die trägen Inhaltsteile deutlich zu kennzeichnen.

Während Sie visuelle und nicht-visuelle Hinweise zur Trägheit von Inhalten bereitstellen, bedenken Sie auch, dass der visuelle Ansichtsbereich möglicherweise nur Teile von Inhalten enthält. Benutzer könnten in eine kleine Inhaltssektion hineingezoomt sein, oder Benutzer könnten den Inhalt gar nicht sehen können. Abschnitte, die nicht offensichtlich träge sind, können zu Frustration und einer schlechten Benutzererfahrung führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) Attribut
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
