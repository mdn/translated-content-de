---
title: interactivity
slug: Web/CSS/interactivity
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

{{CSSRef}}{{seecompattable}}

Die **`interactivity`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob ein Element und seine Nachkommen als [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert) festgelegt sind.

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
  - : Ausgewählte Elemente befinden sich in ihrem Standardzustand in Bezug auf Inertheit. Dies bedeutet normalerweise, dass sie interaktiv sind, aber das ist [nicht immer der Fall](#standard-inertheit). Dies ist der Standardwert.

- `inert`
  - : Ausgewählte Elemente und ihre Nachkommen sind inert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beschreibung

Die Eigenschaft `interactivity` kann verwendet werden, um festzulegen, ob ein Element und seine Nachkommen inert sind. Siehe die HTML-Referenzseite des [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) Attributs für eine detaillierte Beschreibung des Inert-Zustands.

Ein typisches Anwendungsbeispiel für `interactivity: inert` ist bei paginierten Inhalten, wie z.B. Karussells, wenn Sie möchten, dass nur der aktuell sichtbare Seiteninhalt und die Steuerelemente interaktiv sind. In solchen Fällen könnte das unerwartete Fokussieren eines Links oder Buttons außerhalb des Bildschirms das Erlebnis beeinträchtigen.

Wenn der Inert-Zustand eines Elements sowohl durch HTML (das `inert` Attribut oder eine automatische Browsereinstellung) als auch durch CSS (die `interactivity` Eigenschaft) gleichzeitig festgelegt wird, hat das CSS keinen Effekt — es kann die Inertheit des HTML nicht überschreiben.

Zum Beispiel wird das folgende HTML-Element inert sein:

```html
<button inert>You can't press me</button>
```

Das Setzen von `interactivity: auto` darauf hat keinen Effekt.

### Standard-Inertheit

Die meisten Elemente sind standardmäßig interaktiv, aber das ist nicht immer der Fall:

- Ein Vorfahre eines Elements kann in einen Inert-Zustand versetzt sein, über die `interactivity` Eigenschaft oder das `inert` Attribut.
- Während ein modales {{htmlelement("dialog")}} angezeigt wird, wird der Rest der Seite automatisch in einen Inert-Zustand versetzt.

## Beispiele

### Grundlegende Verwendung von `interactivity`

In diesem Beispiel haben wir zwei {{htmlelement("input")}} Elemente. Das zweite hat `interactivity: inert` über eine Klasse gesetzt, und ist daher in unterstützenden Browsern nicht fokussierbar oder editierbar.

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

### Die Auswirkungen der Inertheit erkunden

In diesem Beispiel erkunden wir die Auswirkungen der `interactivity` Eigenschaft.

#### HTML

Das Markup enthält zwei {{htmlelement("p")}} Elemente, von denen jedes einen Link enthält. Der zweite Absatz hat auch eine Klasse von `inert` darauf gesetzt und ein Kind-{{htmlelement("span")}} Element mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), um es editierbar zu machen.

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

Wir setzen die `interactivity` Eigenschaft im zweiten Absatz auf einen Wert von `inert`, sodass es inert ist. Dies bedeutet, dass Sie den `contenteditable` Text im ersten Absatz bearbeiten können sollten, aber nicht im zweiten, und Sie sollten nicht nach Text suchen, Text auswählen oder mit dem Link im zweiten Absatz interagieren können.

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

Wir setzen einen Ereignishandler auf jeden Absatz, der einen Klassenname umschaltet, wenn er angeklickt wird, den Klassennamen hinzufügt, dann die Klasse nach zwei Sekunden entfernt.

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

Beachten Sie, dass der zweite Absatz inert ist; er verhält sich daher nicht wie der erste Absatz. Zum Beispiel kann der Link nicht angeklickt oder fokussiert werden, der Text kann nicht ausgewählt oder durchsucht werden, der `contenteditable` `<span>` ist nicht editierbar, und `click`-Ereignisse werden nicht darauf registriert.

### Off-Screen-Elemente mittels einer View-Timeline inert setzen

Dieses Beispiel zeigt horizontal scrollende paginierte Inhalte mit jeder Seite, die mit [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) einrastet, und die Inertheit wird über eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/CSS_scroll-driven_animations) kontrolliert, die eine [View-Progresstimeline](/de/docs/Web/CSS/view-timeline-name) verwendet. Inhalt, der im {{Glossary("scroll_container", "scroll container")}} angezeigt wird, ist interaktiv; er wird inert, wenn er in den überfließenden Inhalt hinaus bewegt wird.

#### HTML

Das HTML besteht aus einer oberen [Überschrift](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul) mit vier [Listenelementen](/de/docs/Web/HTML/Reference/Elements/li), die jeweils den Inhalt für eine separate Seite enthalten.

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

Eine {{cssxref("width")}} von `100vw` wird auf die ungeordnete Liste gesetzt, um sie so breit wie den Viewport zu machen. Wir fügen eine feste {{cssxref("height")}}, etwas {{cssxref("padding")}} und einen {{cssxref("overflow-x")}} Wert von `scroll` hinzu, damit überfließender Inhalt scrollt. Ihre Kinder-Listenelemente werden horizontal mit {{cssxref("display", "display: flex")}} angeordnet. Dieser Flex-Container erhält einen {{cssxref("scroll-snap-type")}} Wert von `x mandatory`, um ihn in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu verwandeln. Das `x` Schlüsselwort bewirkt, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal einrasten. Das `mandatory` Schlüsselwort bedeutet, dass der Container am Ende einer Scroll-Aktion immer zu einem Snap-Ziel einrastet.

```css hidden live-sample___offscreen-inert
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
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

- Ein {{cssxref("flex")}} Wert von `0 0 98vw`, was bewirkt, dass jedes Element so groß wie der Scroll-Container abzüglich der auf die Liste gesetzten {{cssxref("gap")}} (siehe die `gap` Anweisung in der `ul` Regel zuvor angezeigt) ist. Dies hat auch den Effekt, jede Seite innerhalb des Scroll-Containers zu zentrieren.
- Ein {{cssxref("scroll-snap-align")}} Wert von `center`, um den Scroll-Container zum Einrasten in die Mitte jedes Snap-Ziels zu bringen.
- Ein {{cssxref("view-timeline")}} Wert von `--inertChange inline`, um das Element als Subjekt der `--inertChange` View-Progress-Timeline zu deklarieren und diese Timeline so einzustellen, dass sie in der Inline-Richtung fortschreitet, während es sich durch seinen Vorfahren-Scroll-Container bewegt.
- Ein {{cssxref("animation-timeline")}} Wert mit dem gleichen Namen wie das {{cssxref("view-timeline-name")}}, wie in der `view-timeline` Kurzform definiert, was bedeutet, dass die benannte View-Progress-Timeline verwendet wird, um den Fortschritt von auf das Element angewendeten Animationen zu kontrollieren.
- Ein {{cssxref("animation-name")}} und {{cssxref("animation-fill-mode")}} definieren die auf dieses Element angewendete Animation und ihren Fill-Mode. Der `both` Wert ist erforderlich, weil Sie möchten, dass der Startanimationszustand auf das Element angewendet wird, bevor die Animation beginnt, und der Endanimationszustand auf das Element, nachdem die Animation fertig ist. Wenn die Animation nicht erhalten bleibt, wird die `interactivity: inert`-Deklaration, die über die Animation angewendet wird, nicht auf Listenelemente angewendet beim Verlassen des Scroll-Containers.

```css live-sample___offscreen-inert
li {
  list-style-type: none;
  background-color: #eee;
  border: 1px solid #ddd;
  padding: 20px;

  flex: 0 0 98vw;

  scroll-snap-align: center;

  view-timeline: --inertChange inline;
  animation-timeline: --inertChange;
  animation-name: inert-change;
  animation-fill-mode: both;
}
```

Abschließend werden die Animations-{{cssxref("@keyframes")}} definiert. `interactivity: inert` wird an den Positionen `entry 0%` und `exit 100%` der View-Timeline gesetzt. In Kombination mit dem Wert `animation-fill-mode: both` bedeutet dies, dass die Listenelemente inert sein werden, bevor der Beginn und nach dem Ende der View-Timeline, das heißt, wenn sie außerhalb des Scroll-Containers sind. Zwischen den Positionen `entry 1%` und `exit 99%` wird `interactivity: auto` auf die Listenelemente gesetzt, was bedeutet, dass sie normal interagiert werden können, wenn sie sich im Scroll-Container befinden.

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

Scrollen Sie die ungeordnete Liste horizontal, um den Paginationseffekt zu sehen - jede Seite schnappt in den Blick. Versuchen Sie, zwischen den Links und den Buttons zu tabben; Sie werden feststellen, dass nur die, die auf dem Bildschirm sind, interaktiv sind und getabbt werden können.

{{ EmbedLiveSample("offscreen-inert", "100%", "320") }}

## Barrierefreiheitsbedenken

Berücksichtigen Sie Barrierefreiheit sorgfältig, wenn Sie Elemente inert machen. Standardmäßig gibt es keine visuelle Möglichkeit zu erkennen, ob ein Element oder sein Unterbaum inert ist. Als Webentwickler ist es Ihre Verantwortung, eindeutig die aktiven und die inerten Inhaltsteile zu kennzeichnen.

Wenn Sie visuelle und nicht-visuelle Hinweise zur Inertheit von Inhalten bereitstellen, denken Sie auch daran, dass der visuelle Viewport möglicherweise nur Abschnitte von Inhalten enthält. Benutzer können in einen kleinen Abschnitt von Inhalten hineinzoomen, oder sie können den Inhalt überhaupt nicht anzeigen. Dass inerte Abschnitte nicht offensichtlich inert sind, kann zu Frustration und einer schlechten Benutzererfahrung führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) Attribut
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
