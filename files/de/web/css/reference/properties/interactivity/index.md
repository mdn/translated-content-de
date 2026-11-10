---
title: "`interactivity` CSS property"
short-title: interactivity
slug: Web/CSS/Reference/Properties/interactivity
l10n:
  sourceCommit: c4e64810ce10fb5cb1eebfcd8b6f526866fd0982
---

{{seecompattable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`interactivity`** legt fest, ob ein Element und seine Nachfahren [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert) sind.

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

Diese Eigenschaft wird mit einem der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Ausgewählte Elemente befinden sich hinsichtlich ihrer Inertheit im Standardzustand. In der Regel bedeutet das, dass sie interaktiv sind, aber das ist [nicht immer der Fall](#standardmäßige_inertheit). Dies ist der Standardwert.

- `inert`
  - : Ausgewählte Elemente und ihre Nachfahren sind inert.

## Beschreibung

Mit der Eigenschaft `interactivity` lässt sich festlegen, ob ein Element und seine Nachfahren inert sind. Eine ausführliche Beschreibung dieses Zustands finden Sie auf der Referenzseite zum HTML-Attribut [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert).

Ein typischer Anwendungsfall für `interactivity: inert` sind seitenweise dargestellte Inhalte, etwa in Karussells, wenn nur mit den Inhalten und Steuerelementen der aktuell sichtbaren Seite interagiert werden soll. In solchen Fällen könnte es die Nutzung beeinträchtigen, wenn ein Link oder Button außerhalb des sichtbaren Bereichs unerwartet den Fokus erhält.

Wenn der inerte Zustand eines Elements gleichzeitig durch HTML (das Attribut `inert` oder eine automatische Browsereinstellung) und CSS (die Eigenschaft `interactive`) festgelegt wird, hat CSS keine Wirkung – es kann die durch HTML festgelegte Inertheit nicht überschreiben.

Das folgende HTML-Element ist beispielsweise inert:

```html
<button inert>You can't press me</button>
```

Wird darauf `interactive: auto` gesetzt, hat dies keine Wirkung.

### Standardmäßige Inertheit

Die meisten Elemente sind standardmäßig interaktiv, aber das ist nicht immer der Fall:

- Ein Vorfahre eines Elements kann über die Eigenschaft `interactive` oder das Attribut `inert` in einen inerten Zustand versetzt worden sein.
- Während ein modales {{htmlelement("dialog")}} angezeigt wird, wird der Rest der Seite automatisch in einen inerten Zustand versetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `interactivity`

In diesem Beispiel gibt es zwei {{htmlelement("input")}}-Elemente. Für das zweite ist über eine Klasse `interactivity: inert` festgelegt. In unterstützenden Browsern kann es daher weder den Fokus erhalten noch bearbeitet werden.

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

Die Ausgabe sieht wie folgt aus:

{{ EmbedLiveSample("basic-interactivity", "100%", "100") }}

### Auswirkungen der Inertheit untersuchen

In diesem Beispiel untersuchen wir die Auswirkungen der Eigenschaft `interactivity`.

#### HTML

Das Markup enthält zwei {{htmlelement("p")}}-Elemente, die jeweils einen Link enthalten. Dem zweiten Absatz ist außerdem die Klasse `inert` zugewiesen. Er enthält ein {{htmlelement("span")}}-Kindelement, bei dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt ist, damit es bearbeitet werden kann.

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

Wir setzen die Eigenschaft `interactivity` des zweiten Absatzes auf `inert`. Dadurch wird er inert. Das bedeutet, dass Sie den `contenteditable`-Text im ersten Absatz bearbeiten können sollten, nicht jedoch den im zweiten. Außerdem sollten Sie im zweiten Absatz weder nach Text suchen oder Text auswählen noch mit dem Link interagieren können.

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

Wir legen für jeden Absatz einen Ereignis-Handler fest, der beim Klicken einen Klassennamen hinzufügt und die Klasse nach zwei Sekunden wieder entfernt.

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

Beachten Sie, dass der zweite Absatz inert ist und sich deshalb anders verhält als der erste. Beispielsweise kann der Link weder angeklickt werden noch den Fokus erhalten, der Text kann weder ausgewählt noch durchsucht werden, das `contenteditable`-`<span>` kann nicht bearbeitet werden und `click`-Ereignisse werden darauf nicht registriert.

### Elemente außerhalb des sichtbaren Bereichs mit einer View-Timeline inert machen

Dieses Beispiel zeigt horizontal scrollende, seitenweise dargestellte Inhalte. Jede Seite rastet mithilfe von [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) ein. Die Inertheit wird durch eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) gesteuert, die eine [View-Progress-Timeline](/de/docs/Web/CSS/Reference/Properties/view-timeline-name) verwendet. Inhalte, die im {{Glossary("scroll_container", "Scroll-Container")}} angezeigt werden, sind interaktiv. Sobald sie aus dem sichtbaren Bereich in den überlaufenden Inhalt verschoben werden, werden sie inert.

#### HTML

Das HTML besteht aus einer übergeordneten [Überschrift](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul) mit vier [Listeneinträgen](/de/docs/Web/HTML/Reference/Elements/li), die jeweils den Inhalt einer eigenen Seite enthalten.

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

Für die ungeordnete Liste wird eine {{cssxref("width")}} von `100vw` festgelegt, damit sie so breit wie der Viewport ist. Wir fügen eine feste {{cssxref("height")}}, etwas {{cssxref("padding")}} und für {{cssxref("overflow-x")}} den Wert `scroll` hinzu, damit überlaufende Inhalte gescrollt werden können. Die Listeneinträge werden mit {{cssxref("display", "display: flex")}} horizontal angeordnet. Dieser Flex-Container erhält für {{cssxref("scroll-snap-type")}} den Wert `x mandatory` und wird dadurch zu einem {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}. Das Schlüsselwort `x` bewirkt, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal einrasten. Das Schlüsselwort `mandatory` bedeutet, dass der Container am Ende eines Scrollvorgangs immer an einem Snap-Ziel einrastet.

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

Auf jeden Listeneintrag werden die folgenden Stile angewendet:

- Ein {{cssxref("flex")}}-Wert von `0 0 98vw`, durch den jeder Eintrag so groß wird wie der Scroll-Container abzüglich des für die Liste festgelegten {{cssxref("gap")}} (siehe die `gap`-Deklaration in der zuvor gezeigten `ul`-Regel). Dadurch wird außerdem jede Seite im Scroll-Container zentriert.
- Ein {{cssxref("scroll-snap-align")}}-Wert von `center`, damit der Scroll-Container an der Mitte jedes Snap-Ziels einrastet.
- Ein {{cssxref("view-timeline")}}-Wert von `--inner-change inline`, der das Element als Subjekt der View-Progress-Timeline `--inner-change` deklariert und festlegt, dass diese Timeline in Inline-Richtung fortschreitet, während sich das Element durch den übergeordneten Scroll-Container bewegt.
- Ein {{cssxref("animation-timeline")}}-Wert mit demselben Namen wie {{cssxref("view-timeline-name")}}, der in der Kurzschreibweise `view-timeline` definiert wurde. Damit steuert die benannte View-Progress-Timeline den Fortschritt der auf das Element angewendeten Animationen.
- Werte für {{cssxref("animation-name")}} und {{cssxref("animation-fill-mode")}}, die die auf dieses Element angewendete Animation und deren Fill-Modus festlegen. Der Wert `both` ist erforderlich, damit der Anfangszustand der Animation bereits vor ihrem Beginn und ihr Endzustand auch nach ihrem Ende für das Element gelten. Würde der Animationszustand nicht beibehalten, gälte die durch die Animation angewendete Deklaration `interactivity: inert` nicht für Listeneinträge außerhalb des Scroll-Containers.

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

Abschließend werden die {{cssxref("@keyframes")}} der Animation definiert. An den Positionen `entry 0%` und `exit 100%` der View-Timeline wird `interactivity: inert` festgelegt. Zusammen mit dem Wert `animation-fill-mode: both` bedeutet dies, dass die Listeneinträge vor dem Beginn und nach dem Ende der View-Timeline inert sind, also wenn sie sich außerhalb des Scroll-Containers befinden. Zwischen den Positionen `entry 1%` und `exit 99%` wird für die Listeneinträge `interactivity: auto` festgelegt. Damit kann normal mit ihnen interagiert werden, wenn sie sich innerhalb des Scroll-Containers befinden.

Eine Erklärung der Positionswerte finden Sie auf der Referenzseite zu {{cssxref("animation-range")}}.

#### Ergebnis

Scrollen Sie die ungeordnete Liste horizontal, um den Effekt der Seitennavigation zu sehen – jede Seite rastet im sichtbaren Bereich ein. Versuchen Sie, mit der Tabulatortaste zwischen den Links und Buttons zu wechseln. Sie werden feststellen, dass nur die sichtbaren interaktiv und per Tabulatortaste erreichbar sind.

{{ EmbedLiveSample("offscreen-inert", "100%", "320") }}

## Barrierefreiheit

Berücksichtigen Sie die Barrierefreiheit sorgfältig, wenn Sie Elemente inert machen. Standardmäßig ist visuell nicht erkennbar, ob ein Element oder sein Teilbaum inert ist. Als Webentwickler sind Sie dafür verantwortlich, klar kenntlich zu machen, welche Inhaltsbereiche aktiv und welche inert sind.

Denken Sie bei visuellen und nicht visuellen Hinweisen auf die Inertheit von Inhalten auch daran, dass im sichtbaren Viewport möglicherweise nur Teile des Inhalts zu sehen sind. Nutzer können einen kleinen Inhaltsbereich vergrößert haben oder den Inhalt überhaupt nicht sehen können. Wenn inerte Bereiche nicht eindeutig als solche erkennbar sind, kann dies zu Frustration und einer schlechten Nutzungserfahrung führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Attribut [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
