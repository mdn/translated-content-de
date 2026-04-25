---
title: "`interactivity` CSS property"
short-title: interactivity
slug: Web/CSS/Reference/Properties/interactivity
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{seecompattable}}

Die **`interactivity`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob ein Element und seine Nachfolgeknoten als [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert) eingestellt sind.

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
  - : Ausgewählte Elemente und ihre Nachfolger sind inaktiv.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beschreibung

Die `interactivity`-Eigenschaft kann verwendet werden, um festzulegen, ob ein Element und seine Nachfolger inaktiv sind. Weitere Informationen zum inaktiven Zustand finden Sie auf der HTML-[`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attributreferenzseite.

Ein typisches Anwendungsbeispiel für `interactivity: inert` ist in paginierten Inhalten, wie Karussells, wenn Sie nur die aktuell sichtbare Seite und ihre Steuerelemente interaktiv machen möchten. In solchen Fällen könnte unerwartetes Fokussieren auf einen nicht sichtbaren Link oder Button das Nutzererlebnis beeinträchtigen.

Wenn der inaktive Zustand eines Elements sowohl durch HTML (das `inert`-Attribut oder eine automatische Browsereinstellung) als auch durch CSS (die `interactivity`-Eigenschaft) gleichzeitig festgelegt wird, hat CSS keine Wirkung – es kann die Inertheit durch HTML nicht überschreiben.

Zum Beispiel wird das folgende HTML-Element inaktiv sein:

```html
<button inert>You can't press me</button>
```

Das Setzen von `interactivity: auto` darauf wird keine Auswirkung haben.

### Standard-Inertheit

Die meisten Elemente sind standardmäßig interaktiv, aber das ist nicht immer der Fall:

- Ein Vorfahrelement kann auf einen Inertheitszustand eingestellt sein, entweder durch die `interactivity`-Eigenschaft oder das `inert`-Attribut.
- Während ein modales {{htmlelement("dialog")}} angezeigt wird, wird der Rest der Seite automatisch in einen inakten Zustand versetzt.

## Beispiele

### Grundlegende Verwendung von `interactivity`

In diesem Beispiel haben wir zwei {{htmlelement("input")}}-Elemente. Das zweite hat `interactivity: inert` über eine Klasse gesetzt, und ist daher in unterstützten Browsern nicht fokussierbar oder bearbeitbar.

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

In diesem Beispiel erforschen wir die Auswirkungen der `interactivity`-Eigenschaft.

#### HTML

Das Markup enthält zwei {{htmlelement("p")}}-Elemente, die jeweils einen Link enthalten. Der zweite Absatz hat zudem eine Klasse `inert` und ein Kind-{{htmlelement("span")}}-Element mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), um es bearbeitbar zu machen.

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

Wir setzen die `interactivity`-Eigenschaft auf den zweiten Absatz mit dem Wert `inert`, wodurch er inaktiv wird. Das bedeutet, dass Sie den `contenteditable`-Text im ersten Absatz bearbeiten können, aber nicht im zweiten, und Sie sollten nicht in der Lage sein, im zweiten Absatz Text zu suchen, zu markieren oder mit dem Link zu interagieren.

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

Wir setzen einen Event-Handler auf jeden Absatz, der beim Klicken einen Klassennamen umschaltet, die Klasse hinzufügt und nach zwei Sekunden wieder entfernt.

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

Beachten Sie, wie der zweite Absatz inaktiv ist; daher verhält er sich nicht wie der erste Absatz. Beispielsweise kann der Link nicht geklickt oder fokussiert werden, der Text kann nicht ausgewählt oder durchsucht werden, das `contenteditable` `<span>` ist nicht bearbeitbar, und `click`-Ereignisse werden nicht registriert.

### Einstellen von Elementen außerhalb des Bildschirms auf inaktiv mit einer Ansichtstimeline

Dieses Beispiel zeigt horizontal scrollbare, paginierte Inhalte, bei denen jede Seite mit [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) eingerastet wird, und die Inertheit über eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) gesteuert wird, die eine [Timeline für Ansichtsfortschritt](/de/docs/Web/CSS/Reference/Properties/view-timeline-name) verwendet. Inhalte, die im {{Glossary("scroll_container", "Scroll-Container")}} angezeigt werden, sind interaktiv; sie werden inaktiv, wenn sie in den Überlaufinhalt verschoben werden.

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

Eine {{cssxref("width")}} von `100vw` wird auf die ungeordnete Liste gesetzt, um sie so breit zu machen wie den Ansichtsbereich. Wir fügen eine feste {{cssxref("height")}}, etwas {{cssxref("padding")}} und einen {{cssxref("overflow-x")}}-Wert von `scroll` hinzu, damit überfließender Inhalt scrollt. Ihre Kind-Listenelemente werden mit {{cssxref("display", "display: flex")}} horizontal angeordnet. Dieser Flex-Container erhält einen {{cssxref("scroll-snap-type")}}-Wert von `x mandatory`, um ihn zu einem {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu machen. Das `x`-Schlüsselwort bewirkt, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal eingerastet werden. Das `mandatory`-Schlüsselwort bedeutet, dass der Container immer bis zu einem Snap-Ziel am Ende einer Scrollaktion einrasten wird.

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

- Ein {{cssxref("flex")}}-Wert von `0 0 98vw`, wodurch jedes Element so groß wird wie der Scroll-Container minus der auf die Liste gesetzten {{cssxref("gap")}} (siehe die `gap`-Deklaration in der zuvor gezeigten `ul`-Regel). Dies hat auch den Effekt, jede Seite innerhalb des Scroll-Containers zu zentrieren.
- Ein {{cssxref("scroll-snap-align")}} Wert von `center`, um den Scroll-Container dazu zu bringen, sich auf das Zentrum jedes Snap-Ziels einzurasten.
- Ein {{cssxref("view-timeline")}} Wert von `--inner-change inline`, um das Element als das Subjekt der `--inner-change`-Timeline für Ansichtsfortschritte zu deklarieren und diese Timeline so zu setzen, dass sie im Inline-Richtung fortschreitet, während sie durch ihren übergeordneten Scroll-Container bewegt wird.
- Ein {{cssxref("animation-timeline")}} Wert mit demselben Namen wie der {{cssxref("view-timeline-name")}}, wie in der `view-timeline`-Kurzfassung definiert, was bedeutet, dass die benannte Timeline für Ansichtsfortschritte zur Steuerung des Fortschritts von Animationen verwendet wird, die auf das Element angewendet werden.
- Ein {{cssxref("animation-name")}} und {{cssxref("animation-fill-mode")}} definieren die auf dieses Element angewendete Animation und ihren Füllmodus. Der `both`-Wert ist erforderlich, weil Sie möchten, dass der Startanimationszustand vor der Animation auf das Element angewendet wird, und der Endanimationszustand auf das Element nach dem Ende der Animation angewendet wird. Wenn die Animation nicht erhalten bleibt, wird die `interactivity: inert`-Deklaration, die über die Animation angewendet wird, auf Listenelemente keine Anwendung finden, wenn sie sich außerhalb des Scroll-Containers befinden.

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

Schließlich werden die Animation-{{cssxref("@keyframes")}} definiert. `interactivity: inert` wird an den Positionen `entry 0%` und `exit 100%` der Ansichtstimeline gesetzt. In Kombination mit dem Wert `animation-fill-mode: both` bedeutet dies, dass die Listenelemente vor dem Start und nach dem Ende der Ansichtstimeline inaktiv sein werden, das heißt, wenn sie sich außerhalb des Scroll-Containers befinden. Zwischen den Positionen `entry 1%` und `exit 99%` wird `interactivity: auto` auf die Listenelemente gesetzt, was bedeutet, dass sie normal interagiert werden können, wenn sie sich innerhalb des Scroll-Containers befinden.

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

Siehe die Referenzseite zu {{cssxref("animation-range")}} für eine Erklärung der Positionswerte.

#### Ergebnis

Scrollen Sie die ungeordnete Liste horizontal, um den Paginierungseffekt zu sehen – jede Seite schnappt in Sichtweite. Versuchen Sie, zwischen den Links und den Buttons zu tabben; Sie werden feststellen, dass nur die sich auf dem Bildschirm befindlichen interaktiv sind und angepingt werden können.

{{ EmbedLiveSample("offscreen-inert", "100%", "320") }}

## Zugänglichkeitsbedenken

Berücksichtigen Sie die Barrierefreiheit sorgfältig, wenn Sie Elemente inaktiv machen. Standardmäßig gibt es keine visuelle Möglichkeit zu erkennen, ob ein Element oder sein Unterbaum inaktiv ist. Als Webentwickler sind Sie dafür verantwortlich, klar darzustellen, welche Inhaltsteile aktiv sind und welche inaktiv sind.

Während Sie visuelle und nicht-visuelle Hinweise zur Inertheit von Inhalten bereitstellen, denken Sie auch daran, dass der visuelle Ansichtsbereich möglicherweise nur Abschnitte des Inhalts enthält. Benutzer können auf einen kleinen Abschnitt des Inhalts vergrößert sein, oder Benutzer können den Inhalt überhaupt nicht sehen. Offensichtlich nicht inaktive Abschnitte können zu Frustration und schlechtem Benutzererlebnis führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attribut
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
