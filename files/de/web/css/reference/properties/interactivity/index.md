---
title: interactivity
slug: Web/CSS/Reference/Properties/interactivity
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{CSSRef}}{{seecompattable}}

Die **`interactivity`** [CSS](/de/docs/Web/CSS) Property legt fest, ob ein Element und seine Nachkommenknoten auf [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert) gesetzt sind.

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
  - : Ausgewählte Elemente befinden sich in ihrem Standardzustand in Bezug auf die Inaktivität. Dies bedeutet normalerweise, dass sie interaktiv sind, was jedoch [nicht immer der Fall ist](#standardmäßige_inaktivität). Dies ist der Standardwert.

- `inert`
  - : Ausgewählte Elemente und ihre Nachfolger sind inaktiv.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beschreibung

Die `interactivity`-Eigenschaft kann verwendet werden, um festzulegen, ob ein Element und seine Nachfolger inaktiv sind. Siehe die HTML-Referenzseite für das [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attribut für eine detaillierte Beschreibung des inaktiven Zustands.

Ein typisches Anwendungsszenario für `interactivity: inert` ist in paginierten Inhalten, wie Karussells, wenn Sie möchten, dass nur der aktuell sichtbare Seiteninhalt und die Steuerelemente interaktiv sind. In solchen Fällen könnte das unerwartete Fokussieren auf einen außerhalb des Bildschirms liegenden Link oder Button das Erlebnis beeinträchtigen.

Wenn der inaktive Zustand eines Elements sowohl durch HTML (das `inert`-Attribut oder eine automatische Browsereinstellung) als auch durch CSS (die `interactive`-Eigenschaft) gleichzeitig spezifiziert wird, hat das CSS keine Wirkung – es kann die Inaktivität des HTMLs nicht überschreiben.

Zum Beispiel wird das folgende HTML-Element inaktiv sein:

```html
<button inert>You can't press me</button>
```

Das Setzen von `interactive: auto` auf diesem Element hat keine Wirkung.

### Standardmäßige Inaktivität

Die meisten Elemente sind standardmäßig interaktiv, aber das ist nicht immer der Fall:

- Ein Vorfahre eines Elements kann auf einen inaktiven Zustand gesetzt sein, entweder durch die `interactive`-Eigenschaft oder das `inert`-Attribut.
- Während ein modales {{htmlelement("dialog")}} angezeigt wird, wird der Rest der Seite automatisch in einen inaktiven Zustand versetzt.

## Beispiele

### Grundlegende Verwendung von `interactivity`

In diesem Beispiel haben wir zwei {{htmlelement("input")}}-Elemente. Das zweite hat `interactivity: inert`, das über eine Klasse gesetzt wird und ist daher in unterstützenden Browsern weder fokussierbar noch bearbeitbar.

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

### Erforschen der Auswirkungen von Inaktivität

In diesem Beispiel untersuchen wir die Auswirkungen der `interactivity`-Eigenschaft.

#### HTML

Das Markup enthält zwei {{htmlelement("p")}}-Elemente, von denen jedes einen Link enthält. Der zweite Abschnitt hat auch eine Klasse von `inert`, die auf ihn gesetzt ist, und ein Kind-{{htmlelement("span")}}-Element mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), um es bearbeitbar zu machen.

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

Wir setzen die `interactivity`-Eigenschaft des zweiten Abschnitts auf einen Wert von `inert`, um ihn inaktiv zu machen. Das bedeutet, dass Sie den `contenteditable`-Text im ersten Abschnitt bearbeiten können sollten, aber nicht im zweiten, und dass Sie nicht nach Text suchen, Text auswählen oder mit dem Link im zweiten Abschnitt interagieren können sollten.

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

Wir setzen einen Event-Handler auf jeden Abschnitt, der einen Klassennamen beim Klicken umschaltet, indem er den Klassennamen hinzufügt und nach zwei Sekunden die Klasse entfernt.

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

Beachten Sie, dass der zweite Abschnitt inaktiv ist; er verhält sich daher nicht wie der erste Abschnitt. Beispielsweise kann der Link nicht angeklickt oder fokussiert werden, der Text kann nicht ausgewählt oder durchsucht werden, das `contenteditable` `<span>` ist nicht bearbeitbar, und `click`-Ereignisse werden darauf nicht registriert.

### Außerhalb des Bildschirms befindliche Elemente mit einer Ansichtstimeline auf inaktiv setzen

Dieses Beispiel zeigt horizontal scrollende, paginierte Inhalte, bei denen jede Seite mithilfe von [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) eingerastet wird, und die Inaktivität über eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/CSS_scroll-driven_animations) gesteuert wird, die eine [Ansichtsfortschritts-Timeline](/de/docs/Web/CSS/Reference/Properties/view-timeline-name) verwendet. Der angezeigte Inhalt im {{Glossary("scroll_container", "Scroll-Container")}} ist interaktiv; er wird inaktiv, wenn er in den überlaufenden Inhalt hinaus verschoben wird.

#### HTML

Das HTML besteht aus einer obersten [Überschrift](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul) mit vier [Listeneinträgen](/de/docs/Web/HTML/Reference/Elements/li), von denen jeder den Inhalt für eine separate Seite enthält.

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

Eine {{cssxref("width")}} von `100vw` wird auf die ungeordnete Liste gesetzt, um sie so breit wie das Ansichtsfenster zu machen. Wir fügen eine feste {{cssxref("height")}}, etwas {{cssxref("padding")}} und einen {{cssxref("overflow-x")}}-Wert von `scroll` hinzu, sodass überlaufender Inhalt gescrollt wird. Ihre Kindelemente werden mit {{cssxref("display", "display: flex")}} horizontal angeordnet. Dieser Flex-Container erhält einen {{cssxref("scroll-snap-type")}}-Wert von `x mandatory`, um ihn in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu verwandeln. Das `x`-Schlüsselwort bewirkt, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal eingeplant werden. Das `mandatory`-Schlüsselwort bedeutet, dass der Container immer zu einem Snap-Ziel am Ende einer Scroll-Aktion schnappt.

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

Jeder Listeneintrag hat die folgenden Stile angewendet:

- Ein {{cssxref("flex")}}-Wert von `0 0 98vw`, der jedes Element dazu zwingt, so groß wie der Scroll-Container minus des auf die Liste gesetzten {{cssxref("gap")}} zu sein (siehe die `gap`-Deklaration in der zuvor gezeigten `ul`-Regel). Dies hat auch den Effekt, jede Seite innerhalb des Scroll-Containers zu zentrieren.
- Ein {{cssxref("scroll-snap-align")}}-Wert von `center`, der den Scroll-Container dazu bringt, zum Zentrum jedes Snap-Ziels zu schnappen.
- Ein {{cssxref("view-timeline")}}-Wert von `--inner-change inline`, um das Element als Subjekt der `--inner-change`-Ansichtsfortschritts-Timeline zu deklarieren, und um diese Timeline so einzustellen, dass sie in der inline-Richtung fortschreitet, während sie sich durch ihren übergeordneten Scroll-Container bewegt.
- Ein {{cssxref("animation-timeline")}}-Wert mit demselben Namen wie der {{cssxref("view-timeline-name")}}, wie in der `view-timeline`-Abkürzung definiert, was bedeutet, dass die benannte Ansichtsfortschritts-Timeline verwendet wird, um den Fortschritt der auf das Element angewendeten Animationen zu steuern.
- Ein {{cssxref("animation-name")}} und {{cssxref("animation-fill-mode")}}, die die auf dieses Element angewendete Animation und ihren Füllmodus definieren. Der `both`-Wert ist erforderlich, weil Sie den Anfangsanimationszustand auf das Element anwenden möchten, bevor die Animation beginnt, und den Endanimationszustand auf das Element anwenden möchten, nachdem die Animation beendet ist. Wenn die Animation nicht erhalten bleibt, wird die `interactivity: inert`-Deklaration, die durch die Animation angewendet wird, auf Listenelemente, die sich außerhalb des Scroll-Containers befinden, nicht angewendet.

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

Schließlich werden die {{cssxref("@keyframes")}} der Animation definiert. `interactivity: inert` wird an den Positionen `entry 0%` und `exit 100%` der Ansichtszeitleiste gesetzt. In Kombination mit dem `animation-fill-mode: both`-Wert bedeutet dies, dass die Listeneinträge inaktiv sein werden, bevor der Beginn und nach dem Ende der Ansichtszeitleiste, das heißt, wenn sie sich außerhalb des Scroll-Containers befinden. Zwischen den Positionen `entry 1%` und `exit 99%` wird `interactivity: auto` auf die Listeneinträge gesetzt, was bedeutet, dass sie wie gewöhnlich interagiert werden können, wenn sie sich innerhalb des Scroll-Containers befinden.

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

Sehen Sie die {{cssxref("animation-range")}}-Referenzseite für eine Erklärung der Positionswerte.

#### Ergebnis

Scrollen Sie die ungeordnete Liste horizontal, um den Paginationseffekt zu sehen – jede Seite snappt in den Ansichtsbereich. Versuchen Sie, zwischen den Links und den Buttons zu tabben; Sie werden feststellen, dass nur die auf dem Bildschirm interaktiv sind und angetabbt werden können.

{{ EmbedLiveSample("offscreen-inert", "100%", "320") }}

## Barrierefreiheit

Berücksichtigen Sie die Barrierefreiheit sorgfältig, wenn Sie Elemente inaktiv machen. Standardmäßig gibt es keine visuelle Möglichkeit zu erkennen, ob ein Element oder sein Subtree inaktiv ist oder nicht. Als Webentwickler ist es Ihre Verantwortung, die aktiven und die inaktiven Inhaltsteile deutlich zu kennzeichnen.

Während Sie visuelle und nicht-visuelle Hinweise zur Inaktivität von Inhalten geben, denken Sie auch daran, dass das visuelle Ansichtsfenster möglicherweise nur Abschnitte von Inhalten enthält. Benutzer können in einen kleinen Abschnitt des Inhalts hineingezoomt sein oder Benutzer können möglicherweise den Inhalt überhaupt nicht sehen. Nicht offensichtlich inaktive Abschnitte können zu Frustration und einem schlechten Benutzererlebnis führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) Attribut
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
