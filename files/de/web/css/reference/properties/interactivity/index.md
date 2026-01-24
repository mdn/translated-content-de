---
title: interactivity
slug: Web/CSS/Reference/Properties/interactivity
l10n:
  sourceCommit: 4b6027efb86db472ca6c37390fe9402b16b2716c
---

{{seecompattable}}

Die **`interactivity`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob ein Element und seine Nachkommen als [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert) gesetzt sind.

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
  - : Ausgewählte Elemente befinden sich im Standardzustand bezüglich der Inertheit. Dies bedeutet in der Regel, dass sie interaktiv sind, aber dies ist [nicht immer der Fall](#standard-inertheit). Dies ist der Standardwert.

- `inert`
  - : Ausgewählte Elemente und ihre Nachkommen sind inert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beschreibung

Die `interactivity`-Eigenschaft kann verwendet werden, um festzulegen, ob ein Element und seine Nachkommen inert sind. Siehe die HTML-Referenzseite zum [`inert`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/inert) für eine detaillierte Beschreibung des Inertheitszustands.

Ein typischer Anwendungsfall für `interactivity: inert` ist bei paginierten Inhalten, wie Karussells, wenn Sie nur den Inhalt und die Steuerelemente der aktuell sichtbaren Seite interaktiv gestalten möchten. In solchen Fällen könnte das unerwartete Fokussieren auf einen Off-Screen-Link oder -Button das Erlebnis beeinträchtigen.

Wenn der Inertheitszustand eines Elements sowohl über HTML (das `inert`-Attribut oder eine automatische Browsereinstellung) als auch über CSS (die `interactive`-Eigenschaft) gleichzeitig festgelegt ist, hat CSS keine Auswirkungen — es kann die Inertheit von HTML nicht überschreiben.

Zum Beispiel wird das folgende HTML-Element inert sein:

```html
<button inert>You can't press me</button>
```

Das Setzen von `interactive: auto` darauf hat keine Wirkung.

### Standard-Inertheit

Die meisten Elemente sind standardmäßig interaktiv, aber dies ist nicht immer der Fall:

- Ein Vorfahre eines Elements könnte auf einen Inertheitszustand gesetzt sein, entweder durch die `interactive`-Eigenschaft oder das `inert`-Attribut.
- Während ein modales {{htmlelement("dialog")}} angezeigt wird, wird der Rest der Seite automatisch in einen inerten Zustand versetzt.

## Beispiele

### Einfache Nutzung von `interactivity`

In diesem Beispiel haben wir zwei {{htmlelement("input")}}-Elemente. Das zweite hat `interactivity: inert` über eine Klasse gesetzt und ist daher in unterstützenden Browsern nicht fokussierbar oder bearbeitbar.

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

### Untersuchung der Auswirkungen von Inertheit

In diesem Beispiel untersuchen wir die Auswirkungen der `interactivity`-Eigenschaft.

#### HTML

Das Markup enthält zwei {{htmlelement("p")}}-Elemente, von denen jedes einen Link enthält. Der zweite Absatz hat auch eine Klasse `inert` und ein Kindelement {{htmlelement("span")}} mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), um es bearbeitbar zu machen.

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
  <span contenteditable>This sentence has <code>contenteditable</code> set on
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
  <span contenteditable
    >This sentence has <code>contenteditable</code> set on it, but it is not
    editable because it is inert</span
  >.
</p>
```

#### CSS

Wir setzen die `interactivity`-Eigenschaft auf den zweiten Absatz mit einem Wert von `inert`, was ihn inert macht. Dies bedeutet, dass Sie den `contenteditable`-Text im ersten Absatz bearbeiten können sollten, aber nicht im zweiten, und Sie sollten keinen Text suchen, auswählen oder mit dem Link im zweiten Absatz interagieren können.

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

Wir setzen einen Ereignishandler auf jeden Absatz, der beim Klicken einen Klassennamen umschaltet, indem er den Klassenname hinzufügt und dann nach zwei Sekunden wieder entfernt.

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

Beachten Sie, wie der zweite Absatz inert ist; er verhält sich daher nicht wie der erste Absatz. Zum Beispiel kann der Link weder angeklickt noch fokussiert werden, der Text kann nicht ausgewählt oder durchsucht werden, das `contenteditable` `<span>` ist nicht bearbeitbar, und `click`-Ereignisse werden nicht registriert.

### Off-Screen-Elemente mit einer View-Timeline in den Inertheitszustand versetzen

In diesem Beispiel wird horizontal scrollbarer paginierter Inhalt gezeigt, bei dem jede Seite mit [`CSS Scroll Snap`](/de/docs/Web/CSS/Guides/Scroll_snap) fixiert wird, und die Inertheit wird über eine [scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) gesteuert, die eine [View-Progress-Timeline](/de/docs/Web/CSS/Reference/Properties/view-timeline-name) verwendet. Angezeigte Inhalte im {{Glossary("scroll_container", "scroll container")}} sind interaktiv; sie werden inert, wenn sie in den überlaufenden Inhalt hinaus verschoben werden.

#### HTML

Das HTML besteht aus einer Überschriftsebene und einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul) mit vier [Listenelementen](/de/docs/Web/HTML/Reference/Elements/li), die jeweils den Inhalt für eine separate Seite enthalten.

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

Eine {{cssxref("width")}} von `100vw` wird auf die ungeordnete Liste gesetzt, um sie so breit wie das Ansichtsfenster zu machen. Wir fügen eine feste {{cssxref("height")}}, etwas {{cssxref("padding")}} und einen {{cssxref("overflow-x")}}-Wert von `scroll` hinzu, sodass überfließender Inhalt scrollt. Ihre Kindelemente werden horizontal mit {{cssxref("display", "display: flex")}} angeordnet. Dieser Flex-Container erhält einen {{cssxref("scroll-snap-type")}}-Wert von `x mandatory`, um ihn in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu verwandeln. Das `x`-Schlüsselwort verursacht, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal eingerastet werden. Das `mandatory`-Schlüsselwort bedeutet, dass der Container immer am Ende einer Scroll-Aktion zu einem Snap-Ziel einrastet.

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

Jedes Listenelement hat die folgenden Stile angewandt:

- Ein {{cssxref("flex")}}-Wert von `0 0 98vw`, der jedes Element zwingt, so groß wie der Scroll-Container minus des auf die Liste gesetzten {{cssxref("gap")}} (siehe die `gap`-Deklaration in der früher gezeigten `ul`-Regel) zu sein. Dies hat auch den Effekt, jede Seite innerhalb des Scroll-Containers zu zentrieren.
- Ein {{cssxref("scroll-snap-align")}}-Wert von `center`, um den Scroll-Container dazu zu bringen, zu jedem Snap-Ziel in der Mitte zu schnalzen.
- Ein {{cssxref("view-timeline")}}-Wert von `--inner-change inline`, um das Element als Subjekt der `--inner-change`-View-Progress-Timeline zu deklarieren und diese Timeline so zu setzen, dass sie sich in Inline-Richtung bewegt, wenn sie durch ihren Vorfahren-Scroll-Container läuft.
- Ein {{cssxref("animation-timeline")}}-Wert mit demselben Namen wie der {{cssxref("view-timeline-name")}}, wie in der `view-timeline`-Kurzschreibweise definiert, was bedeutet, dass die benannte View-Progress-Timeline verwendet wird, um den Fortschritt der auf das Element angewendeten Animationen zu steuern.
- Ein {{cssxref("animation-name")}} und {{cssxref("animation-fill-mode")}}, der die auf dieses Element angewendete Animation und ihren Füllmodus definiert. Der `both`-Wert ist erforderlich, weil Sie möchten, dass der Startanimationszustand auf das Element angewendet wird, bevor die Animation beginnt, und der Endanimationszustand auf das Element angewendet wird, nachdem die Animation endet. Wenn die Animation nicht beibehalten wird, wird die `interactivity: inert`-Deklaration, die über die Animation angewendet wird, nicht für Listenelemente außerhalb des Scroll-Containers gelten.

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

Schließlich werden die Animation-{{cssxref("@keyframes")}} definiert. `interactivity: inert` ist an den Positionen `entry 0%` und `exit 100%` der View-Timeline gesetzt. Zusammen mit dem `animation-fill-mode: both`-Wert bedeutet dies, dass die Listenelemente inert sind, bevor der Beginn und nach dem Ende der View-Zeitleiste, das heißt, wenn sie sich außerhalb des Scroll-Containers befinden. Zwischen den Positionen `entry 1%` und `exit 99%` ist auf den Listenelementen `interactivity: auto` gesetzt, das heißt, sie können normal interagiert werden, wenn sie sich innerhalb des Scroll-Containers befinden.

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

Siehe die {{cssxref("animation-range")}}-Referenzseite für eine Erklärung der Positionswerte.

#### Ergebnis

Scrollen Sie die ungeordnete Liste horizontal, um den Paginationseffekt zu sehen — jede Seite schnalzt ins Blickfeld. Versuchen Sie, zwischen den Links und den Schaltflächen zu tabben; Sie werden feststellen, dass nur die sichtbaren interaktiv sind und getabt werden können.

{{ EmbedLiveSample("offscreen-inert", "100%", "320") }}

## Barrierefreiheitshinweise

Berücksichtigen Sie die Barrierefreiheit sorgfältig, wenn Sie Elemente inert machen. Standardmäßig gibt es keine visuelle Möglichkeit zu erkennen, ob ein Element oder sein Unterbaum inert ist. Als Webentwickler liegt es in Ihrer Verantwortung, die aktiven Inhalte und die inerten Inhalte klar zu kennzeichnen.

Während Sie visuelle und nicht-visuelle Hinweise über die Inertheit von Inhalten bereitstellen, denken Sie auch daran, dass das visuelle Ansichtsfenster möglicherweise nur Abschnitte von Inhalten enthält. Benutzer könnten in einen kleinen Abschnitt der Inhalte hineingezoomt sein, oder Benutzer könnten die Inhalte überhaupt nicht anzeigen können. Die Tatsache, dass inerte Abschnitte nicht offensichtlich inert sind, kann zu Frustration und einer schlechten Benutzererfahrung führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attribut
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
