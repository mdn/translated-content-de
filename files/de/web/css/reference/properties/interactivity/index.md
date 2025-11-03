---
title: interactivity
slug: Web/CSS/Reference/Properties/interactivity
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{CSSRef}}{{seecompattable}}

Die **`interactivity`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, ob ein Element und seine Nachkommen als [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert) festgelegt sind.

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
  - : Ausgewählte Elemente befinden sich in ihrem Standardzustand hinsichtlich der Inertheit. Dies bedeutet in der Regel, dass sie interaktiv sind, aber das ist [nicht immer der Fall](#standard-inertheit). Dies ist der Standardwert.

- `inert`
  - : Ausgewählte Elemente und deren Nachkommen sind inert.

## Offizielle Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beschreibung

Die `interactivity`-Eigenschaft kann verwendet werden, um festzulegen, ob ein Element und seine Nachkommen inert sind. Siehe die HTML-Referenzseite zum [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attribut für eine detaillierte Beschreibung des Inertheitszustands.

Ein typischer Anwendungsfall für `interactivity: inert` ist bei paginiertem Inhalt, wie Karussellen, wenn Sie nur den derzeit sichtbaren Inhalt und die Steuerelemente interaktiv machen möchten. In solchen Fällen könnte ein unerwartetes Fokussieren auf eine außerhalb des Bildschirms befindliche Verknüpfung oder Schaltfläche das Erlebnis beeinträchtigen.

Wenn der Inertheitszustand eines Elements sowohl durch HTML (das `inert`-Attribut oder eine automatische Browsereinstellung) als auch durch CSS (die `interactive`-Eigenschaft) gleichzeitig festgelegt wird, hat CSS keinen Effekt — es kann die Inertheit des HTML nicht überschreiben.

Zum Beispiel wird das folgende HTML-Element inert sein:

```html
<button inert>You can't press me</button>
```

Das Festlegen von `interactive: auto` darauf wird keinen Effekt haben.

### Standard-Inertheit

Die meisten Elemente sind standardmäßig interaktiv, aber das ist nicht immer der Fall:

- Ein Vorfahr-Element kann so eingestellt sein, dass es sich in einem inerten Zustand befindet, entweder durch die `interactive`-Eigenschaft oder durch das `inert`-Attribut.
- Während ein modales {{htmlelement("dialog")}} angezeigt wird, befindet sich der Rest der Seite automatisch in einem inerten Zustand.

## Beispiele

### Grundlegende Verwendung von `interactivity`

In diesem Beispiel haben wir zwei {{htmlelement("input")}}-Elemente. Das zweite hat `interactivity: inert` über eine Klasse gesetzt, und ist daher in unterstützenden Browsern nicht fokussierbar oder bearbeitbar.

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

Die Ausgabe sieht so aus:

{{ EmbedLiveSample("basic-interactivity", "100%", "100") }}

### Erkundung der Auswirkungen von Inertheit

In diesem Beispiel erkunden wir die Auswirkungen der `interactivity`-Eigenschaft.

#### HTML

Das Markup enthält zwei {{htmlelement("p")}}-Elemente, von denen jedes einen Link enthält. Der zweite Absatz hat ebenfalls eine Klasse `inert` gesetzt und ein untergeordnetes {{htmlelement("span")}}-Element mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), um es bearbeitbar zu machen.

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

Wir setzen die `interactivity`-Eigenschaft auf den zweiten Absatz auf einen Wert von `inert`, was ihn inert macht. Das bedeutet, dass Sie den `contenteditable`-Text im ersten Absatz bearbeiten können sollten, aber nicht im zweiten, und Sie sollten nicht nach Text suchen, Text auswählen oder mit dem Link im zweiten Absatz interagieren können.

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

Wir setzen einen Event-Handler auf jeden Absatz, der bei einem Klick einen Klassennamen umschaltet, den Klassennamen hinzufügt und die Klasse nach zwei Sekunden entfernt.

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

Beachten Sie, wie der zweite Absatz inert ist; er verhält sich daher nicht wie der erste Absatz. Zum Beispiel kann der Link nicht geklickt oder fokussiert werden, der Text kann nicht ausgewählt oder durchsucht werden, das `contenteditable` `<span>` ist nicht bearbeitbar, und `click`-Ereignisse werden darauf nicht registriert.

### Festlegen von außerhalb des Bildschirms befindlichen Elementen als inert mit einer View-Timeline

Dieses Beispiel zeigt horizontal scrollbaren paginierten Inhalt, bei dem jede Seite mit [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) einrastet, und die Inertheit über eine [scroll-gesteuerte Animation](/de/docs/Web/CSS/CSS_scroll-driven_animations) gesteuert wird, die eine [View Progress Timeline](/de/docs/Web/CSS/Reference/Properties/view-timeline-name) verwendet. Das im {{Glossary("scroll_container", "Scroll-Container")}} angezeigte Inhalt ist interaktiv; er wird inert, wenn er in den überlaufenden Inhalt übergeht.

#### HTML

Das HTML besteht aus einer Überschrift auf höchster Ebene und einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul) mit vier [Listenelementen](/de/docs/Web/HTML/Reference/Elements/li), die jeweils den Inhalt einer separaten Seite enthalten.

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

Eine {{cssxref("width")}} von `100vw` wird auf die ungeordnete Liste gesetzt, um sie so breit wie das Ansichtsfenster zu machen. Wir fügen eine feste {{cssxref("height")}}, etwas {{cssxref("padding")}} und einen {{cssxref("overflow-x")}}-Wert von `scroll` hinzu, sodass überlaufender Inhalt gescrollt wird. Die Kind-Listenelemente werden horizontal mit {{cssxref("display", "display: flex")}} angeordnet. Dieser Flex-Container erhält einen {{cssxref("scroll-snap-type")}}-Wert von `x mandatory`, um ihn in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll Snap Container")}} zu verwandeln. Das Schlüsselwort `x` bewirkt, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal einrasten. Das Schlüsselwort `mandatory` bedeutet, dass der Container immer an einem Snap-Ziel am Ende einer Scroll-Aktion einrastet.

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

Auf jedes Listenelement werden die folgenden Stile angewendet:

- Ein {{cssxref("flex")}}-Wert von `0 0 98vw`, der jedes Element dazu zwingt, so groß zu sein wie der Scroll-Container minus der auf die Liste gesetzten {{cssxref("gap")}} (siehe die `gap`-Deklaration in der zuvor gezeigten `ul`-Regel). Dies hat auch den Effekt, dass jede Seite im Scroll-Container zentriert wird.
- Ein {{cssxref("scroll-snap-align")}}-Wert von `center`, um den Scroll-Container dazu zu bringen, an der Mitte jedes Snap-Ziels einzurasten.
- Ein {{cssxref("view-timeline")}}-Wert von `--inner-change inline`, um das Element als Subjekt der `--inner-change` View Progress Timeline zu erklären und diese Timeline so einzustellen, dass sie im Inline-Richtung fortschreitet, während es durch seinen übergeordneten Scroll-Container bewegt wird.
- Ein {{cssxref("animation-timeline")}}-Wert mit demselben Namen wie {{cssxref("view-timeline-name")}}, wie in der `view-timeline`-Kurzform definiert, was bedeutet, dass die benannte View Progress Timeline verwendet wird, um die Fortschritte der auf das Element angewendeten Animationen zu steuern.
- Ein {{cssxref("animation-name")}} und {{cssxref("animation-fill-mode")}}, die die auf dieses Element angewendete Animation und den Fill-Modus definieren. Der Wert `both` wird benötigt, da Sie möchten, dass der Start-Animationszustand auf das Element vor dem Start der Animation angewendet wird, und der End-Animationszustand auf das Element, nachdem die Animation beendet ist. Wenn die Animation nicht beibehalten wird, wird die durch die Animation angewandte `interactivity: inert`-Deklaration nicht auf Listenelemente außerhalb des Scroll-Containers angewendet.

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

Schließlich werden die Animation-{{cssxref("@keyframes")}} definiert. `interactivity: inert` wird bei den Positionen `entry 0%` und `exit 100%` der View Timeline gesetzt. In Kombination mit dem `animation-fill-mode: both`-Wert bedeutet dies, dass die Listenelemente vor dem Beginn und nach dem Ende der View Timeline inert sein werden, das heißt, wenn sie außerhalb des Scroll-Containers sind. Zwischen den Positionen `entry 1%` und `exit 99%` wird `interactivity: auto` auf die Listenelemente gesetzt, was bedeutet, dass sie interaktiv genutzt werden können, wenn sie sich im Scroll-Container befinden.

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

Scrollen Sie die ungeordnete Liste horizontal, um den Paginationseffekt zu sehen — jede Seite rastet ein. Versuchen Sie, zwischen den Links und den Schaltflächen zu wechseln; Sie werden feststellen, dass nur die sichtbaren interaktiv sind und fokussiert werden können.

{{ EmbedLiveSample("offscreen-inert", "100%", "320") }}

## Barrierefreiheitsbedenken

Berücksichtigen Sie die Barrierefreiheit sorgfältig, wenn Sie Elemente inert machen. Standardmäßig gibt es keine visuelle Möglichkeit, festzustellen, ob ein Element oder sein Teilbaum inert ist. Als Webentwickler liegt es in Ihrer Verantwortung, die aktiven und inerten Inhaltsbereiche klar zu kennzeichnen.

Während Sie visuelle und nicht-visuelle Hinweise auf die Inertheit von Inhalt geben, denken Sie auch daran, dass das visuelle Ansichtsfenster möglicherweise nur Teile des Inhalts enthält. Benutzer könnten in einen kleinen Bereich des Inhalts gezoomt sein oder den Inhalt möglicherweise gar nicht sehen können. Nicht offensichtlich inerte Bereiche können zu Frustration und einer schlechten Benutzererfahrung führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Attribut [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
