---
title: interactivity
slug: Web/CSS/interactivity
l10n:
  sourceCommit: 3ff38e7687b65e43fe821a904ff52778312b8d36
---

{{CSSRef}}{{seecompattable}}

Die CSS-Eigenschaft **`interactivity`** legt fest, ob ein Element und seine Nachkommen als [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert) eingestellt sind.

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
  - : Ausgewählte Elemente befinden sich in ihrem Standardzustand in Bezug auf Inertheit. Das bedeutet normalerweise, dass sie interaktiv sind, aber das ist [nicht immer der Fall](#standard-inertheit). Dies ist der Standardwert.

- `inert`
  - : Ausgewählte Elemente und ihre Nachkommen sind inert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beschreibung

Die Eigenschaft `interactivity` kann verwendet werden, um festzulegen, ob ein Element und seine Nachkommen inert sind. Siehe die HTML-Attribut-Referenzseite [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) für eine detaillierte Beschreibung des inert-Zustands.

Ein typischer Anwendungsfall für `interactivity: inert` ist bei paginierten Inhalten, wie Karussellen, wenn Sie nur möchten, dass der aktuell sichtbare Inhalt und die Steuerelemente interaktiv sind. In solchen Fällen könnte das unerwartete Fokussieren auf einen nicht sichtbaren Link oder Button das Erlebnis stören.

Wenn der inert-Zustand eines Elements sowohl durch HTML (das `inert`-Attribut oder eine automatische Browsereinstellung) als auch durch CSS (die `interactive`-Eigenschaft) gleichzeitig festgelegt wird, hat CSS keine Wirkung — es kann die Inertheit des HTML nicht überschreiben.

Beispielsweise wird das folgende HTML-Element inert sein:

```html
<button inert>You can't press me</button>
```

Das Setzen von `interactive: auto` darauf wird keinen Effekt haben.

### Standard-Inertheit

Die meisten Elemente sind standardmäßig interaktiv, aber das ist nicht immer der Fall:

- Ein Vorfahre eines Elements kann auf einen inert-Zustand gesetzt sein, entweder durch die `interactive`-Eigenschaft oder das `inert`-Attribut.
- Während ein modales {{htmlelement("dialog")}} angezeigt wird, wird der Rest der Seite automatisch in einen inert-Zustand versetzt.

## Beispiele

### Grundlegende Verwendung von `interactivity`

In diesem Beispiel haben wir zwei {{htmlelement("input")}}-Elemente. Das zweite hat `interactivity: inert` über eine Klasse gesetzt und ist daher in unterstützten Browsern nicht fokussierbar oder bearbeitbar.

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

### Erforschung der Effekte von Inertheit

In diesem Beispiel untersuchen wir die Effekte der `interactivity`-Eigenschaft.

#### HTML

Das Markup enthält zwei {{htmlelement("p")}}-Elemente, von denen jedes einen Link enthält. Der zweite Absatz hat zusätzlich eine Klasse `inert` und ein Kind-{{htmlelement("span")}}-Element mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), das ihn bearbeitbar macht.

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

Wir setzen die `interactivity`-Eigenschaft im zweiten Absatz auf den Wert `inert`, was ihn inert macht. Das bedeutet, dass Sie in der Lage sein sollten, den `contenteditable`-Text im ersten Absatz zu bearbeiten, aber nicht im zweiten. Sie sollten im zweiten Absatz nicht nach Text suchen, Text auswählen oder mit dem Link interagieren können.

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

Wir setzen einen Ereignishandler auf jeden Absatz, der beim Klicken einen Klassennamen umschaltet, den Klassennamen hinzufügt und die Klasse nach zwei Sekunden entfernt.

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

Beachten Sie, wie der zweite Absatz inert ist; er verhält sich daher nicht wie der erste Absatz. Beispielsweise kann der Link nicht angeklickt oder fokussiert werden, der Text kann nicht ausgewählt oder durchsucht werden, das `contenteditable`-`<span>` ist nicht bearbeitbar, und Klick-Ereignisse werden nicht registriert.

### Einstellung von inaktiven Elementen außerhalb des Bildschirms mit einer View-Timeline

Dieses Beispiel zeigt horizontal scrollenden paginierten Inhalt, wobei jede Seite mithilfe von [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) eingerastet wird, und die Inertheit über eine [scrollgesteuerte Animation](/de/docs/Web/CSS/CSS_scroll-driven_animations) gesteuert wird, die eine [View-Progess-Timeline](/de/docs/Web/CSS/view-timeline-name) verwendet. Der Inhalt, der im {{Glossary("scroll_container", "Scroll-Container")}} angezeigt wird, ist interaktiv und wird inert, wenn er in den überlaufenden Inhalt verschoben wird.

#### HTML

Das HTML besteht aus einer Überschrift auf höchster Ebene und einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul) mit vier [Listenelementen](/de/docs/Web/HTML/Reference/Elements/li), die jeweils den Inhalt für eine separate Seite enthalten.

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

Eine {{cssxref("width")}} von `100vw` wird auf die ungeordnete Liste gesetzt, um sie so breit wie den Anzeigebereich zu machen. Wir fügen eine feste {{cssxref("height")}}, etwas {{cssxref("padding")}} und einen {{cssxref("overflow-x")}}-Wert von `scroll` hinzu, damit überlaufender Inhalt scrollen kann. Ihre untergeordneten Listenelemente sind horizontal mit {{cssxref("display", "display: flex")}} angeordnet. Dieser Flex-Container erhält einen {{cssxref("scroll-snap-type")}}-Wert von `x mandatory`, um ihn in einen {{Glossary("Scroll_snap#scroll_snap_container", "scroll snap container")}} zu verwandeln. Das `x`-Schlüsselwort bewirkt, dass die {{Glossary("Scroll_snap#snap_target", "snap targets")}} des Containers horizontal einrasten. Das `mandatory`-Schlüsselwort bedeutet, dass der Container am Ende einer Scroll-Aktion immer zu einem Snap-Target einrasten wird.

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

Jedes Listenelement hat folgende Stile:

- Ein {{cssxref("flex")}}-Wert von `0 0 98vw`, wodurch jedes Element so groß wie der Scroll-Container abzüglich des auf die Liste gesetzten {{cssxref("gap")}} (siehe die `gap`-Deklaration in der zuvor gezeigten `ul`-Regel) ist. Dies hat auch den Effekt, dass jede Seite im Scroll-Container zentriert wird.
- Ein {{cssxref("scroll-snap-align")}}-Wert von `center`, damit der Scroll-Container zur Mitte jedes Snap-Targets einrastet.
- Ein {{cssxref("view-timeline")}}-Wert von `--inertChange inline`, um das Element als Subjekt der `--inertChange`-View-Progress-Timeline zu deklarieren und diese Timeline so einzustellen, dass sie in Inline-Richtung fortschreitet, während sie sich durch ihren Vorfahren-Scroll-Container bewegt.
- Ein {{cssxref("animation-timeline")}}-Wert mit demselben Namen wie die {{cssxref("view-timeline-name")}}, wie in der `view-timeline`-Kurzschrift definiert, was bedeutet, dass die benannte View-Progress-Timeline verwendet wird, um den Fortschritt der auf das Element angewendeten Animationen zu steuern.
- Ein {{cssxref("animation-name")}} und {{cssxref("animation-fill-mode")}}, die die auf dieses Element angewendete Animation und ihren Fill-Mode definieren. Der `both`-Wert ist erforderlich, da Sie den Anfangszustand der Animation auf das Element anwenden möchten, bevor die Animation beginnt, und den Endzustand der Animation auf das Element anwenden möchten, nachdem die Animation endet. Wenn die Animation nicht beibehalten wird, wird die `interactivity: inert`-Deklaration, die über die Animation angewendet wird, nicht für Listenelemente gelten, wenn sie sich außerhalb des Scroll-Containers befinden.

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

Schließlich werden die Animationen {{cssxref("@keyframes")}} definiert. `interactivity: inert` wird an den Positionen `entry 0%` und `exit 100%` der View-Timeline gesetzt. Zusammen mit dem `animation-fill-mode: both`-Wert bedeutet dies, dass die Listenelemente vor dem Beginn und nach dem Ende der View-Timeline inert sind, d.h., wenn sie sich außerhalb des Scroll-Containers befinden. Zwischen den Positionen `entry 1%` und `exit 99%` wird `interactivity: auto` auf die Listenelemente gesetzt, was bedeutet, dass sie normal interaktiv sind, wenn sie sich innerhalb des Scroll-Containers befinden.

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

Scrollen Sie die ungeordnete Liste horizontal, um den Seiteneffekt zu sehen — jede Seite wird in den Blick einrasten. Versuchen Sie, zwischen den Links und den Schaltflächen zu tabben; Sie werden feststellen, dass auf dem Bildschirm nur die Elemente interaktiv sind und angetabt werden können.

{{ EmbedLiveSample("offscreen-inert", "100%", "320") }}

## Barrierefreiheitsüberlegungen

Berücksichtigen Sie die Barrierefreiheit sorgfältig, wenn Sie Elemente inert machen. Standardmäßig gibt es keine visuelle Möglichkeit zu erkennen, ob ein Element oder sein Teilbaum inert ist. Als Webentwickler liegt es in Ihrer Verantwortung, die aktiven und inerten Inhaltsbereiche klar zu unterscheiden.

Während Sie visuelle und nicht-visuelle Hinweise zur Inhaltsträgheit bereitstellen, bedenken Sie auch, dass der visuelle Viewport möglicherweise nur Teile eines Inhalts enthält. Benutzer können in einen kleinen Bereich des Inhalts hineingezoomt sein, oder Benutzer können den Inhalt überhaupt nicht sehen. Inert-Abschnitte, die nicht offensichtlich inert sind, können zu Frustration und einem schlechten Benutzererlebnis führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Attribut [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
