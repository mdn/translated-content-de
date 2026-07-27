---
title: "`interactivity` CSS property"
short-title: interactivity
slug: Web/CSS/Reference/Properties/interactivity
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

{{seecompattable}}

Die **`interactivity`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, ob ein Element und seine Nachkommensknoten als [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert) festgelegt sind.

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte spezifiziert:

- `auto`
  - : Ausgewählte Elemente befinden sich in ihrem Standardzustand in Bezug auf Inertheit. Dies bedeutet in der Regel, dass sie interaktiv sind, aber das ist [nicht immer der Fall](#standard-inertheit). Dies ist der Standardwert.

- `inert`
  - : Ausgewählte Elemente und ihre Nachkommen sind inert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beschreibung

Die `interactivity`-Eigenschaft kann verwendet werden, um festzulegen, ob ein Element und seine Nachkommen inert sind. Siehe die HTML-[`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attributreferenzseite für eine detaillierte Beschreibung des inert-Zustands.

Ein typischer Anwendungsfall für `interactivity: inert` ist bei paginierten Inhalten, wie Karussells, wenn Sie möchten, dass nur der derzeit sichtbare Inhalt und die Steuerelemente interaktiv sind. In solchen Fällen könnte das unerwartete Fokussieren auf einen nicht sichtbaren Link oder Knopf das Erlebnis beeinträchtigen.

Wenn der inert-Zustand eines Elements sowohl durch HTML (das `inert`-Attribut oder eine automatische Browsereinstellung) als auch durch CSS (die `interactive`-Eigenschaft) gleichzeitig spezifiziert ist, hat das CSS keinen Einfluss – es kann die Inertheit von HTML nicht überschreiben.

Zum Beispiel wird das folgende HTML-Element inert sein:

```html
<button inert>You can't press me</button>
```

Das Setzen von `interactive: auto` darauf hat keinen Effekt.

### Standard-Inertheit

Die meisten Elemente sind standardmäßig interaktiv, aber das ist nicht immer der Fall:

- Ein Vorfahre eines Elements kann auf einen inert-Zustand gesetzt sein, über die `interactive`-Eigenschaft oder das `inert`-Attribut.
- Während ein modales {{htmlelement("dialog")}} angezeigt wird, wird der Rest der Seite automatisch in einen inert-Zustand gesetzt.

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

### Untersuchung der Effekte der Inertheit

In diesem Beispiel untersuchen wir die Effekte der `interactivity`-Eigenschaft.

#### HTML

Das Markup enthält zwei {{htmlelement("p")}}-Elemente, von denen jedes einen Link enthält. Der zweite Absatz hat auch eine Klasse `inert` darauf gesetzt sowie ein Kind-{{htmlelement("span")}}-Element mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), um es bearbeitbar zu machen.

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

Wir setzen die `interactivity`-Eigenschaft auf dem zweiten Absatz auf einen Wert von `inert`, was ihn inert macht. Das bedeutet, dass Sie den `contenteditable`-Text im ersten Absatz bearbeiten können sollten, nicht aber im zweiten, und dass Sie im zweiten Absatz keinen Text suchen, auswählen oder mit dem Link interagieren können sollten.

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

Wir setzen einen Ereignis-Handler auf jeden Absatz, der einen Klassennamen umschaltet, wenn darauf geklickt wird, den Klassennamen hinzufügt und dann die Klasse nach zwei Sekunden wieder entfernt.

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

Beachten Sie, wie der zweite Absatz inert ist; daher verhält er sich nicht wie der erste. Beispielsweise kann der Link nicht geklickt oder fokussiert werden, der Text kann nicht ausgewählt oder durchsucht werden, das `contenteditable`-`<span>` ist nicht bearbeitbar, und `click`-Ereignisse werden nicht darauf registriert.

### Setzen von nicht sichtbaren Elementen auf inert mit einer Ansicht-Zeitachse

Dieses Beispiel zeigt horizontal scrollenden paginierten Inhalt, bei dem jede Seite mithilfe von [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) eingerastet wird, und die Inertheit wird über eine [scroll-driven Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations) gesteuert, die eine [Ansichtsfortschrittszeitachse](/de/docs/Web/CSS/Reference/Properties/view-timeline-name) verwendet. Inhalt, der im {{Glossary("scroll_container", "Scroll-Container")}} angezeigt wird, ist interaktiv; er wird inert, wenn er in den überlaufenden Inhalt hinausgeht.

#### HTML

Das HTML besteht aus einer Überschrift auf oberster Ebene und einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul) mit vier [Listenelementen](/de/docs/Web/HTML/Reference/Elements/li), die jeweils den Inhalt für eine separate Seite enthalten.

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

Ein {{cssxref("width")}} von `100vw` wird auf die ungeordnete Liste gesetzt, um sie so breit wie das Ansichtsfenster zu machen. Wir fügen eine feste {{cssxref("height")}}, etwas {{cssxref("padding")}} und einen {{cssxref("overflow-x")}}-Wert von `scroll` hinzu, damit überlaufender Inhalt scrollt. Die untergeordneten Listenelemente werden horizontal mit {{cssxref("display", "display: flex")}} angeordnet. Dieser Flex-Container erhält einen {{cssxref("scroll-snap-type")}}-Wert von `x mandatory`, um ihn in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu verwandeln. Das Schlüsselwort `x` verursacht, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal eingerastet werden. Das Schlüsselwort `mandatory` bedeutet, dass der Container immer an ein Snap-Ziel am Ende einer Scroll-Aktion einrastet.

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

- Ein {{cssxref("flex")}}-Wert von `0 0 98vw`, wodurch jedes Element so groß wie der Scroll-Container minus des auf die Liste gesetzten {{cssxref("gap")}} ist (siehe die `gap`-Deklaration in der vorher gezeigten `ul`-Regel). Dies hat auch den Effekt, jede Seite im Scroll-Container zu zentrieren.
- Ein {{cssxref("scroll-snap-align")}}-Wert von `center`, um den Scroll-Container dazu zu bringen, an der Mitte jedes Snap-Ziels einzurasten.
- Ein {{cssxref("view-timeline")}}-Wert von `--inner-change inline`, um das Element als Subjekt der `--inner-change`-Ansichtsfortschrittszeitachse zu deklarieren und diese Zeitachse so einzustellen, dass sie im Inline-Richtung fortschreitet, während sie durch den übergeordneten Scroll-Container bewegt wird.
- Ein {{cssxref("animation-timeline")}}-Wert mit demselben Namen wie der {{cssxref("view-timeline-name")}}, wie im `view-timeline`-Shorthand definiert, was bedeutet, dass die benannte Ansichtsfortschrittszeitachse verwendet wird, um den Fortschritt der auf das Element angewendeten Animationen zu steuern.
- Ein {{cssxref("animation-name")}} und {{cssxref("animation-fill-mode")}}, das die auf dieses Element angewendete Animation und ihren Fill-Modus definiert. Der `both`-Wert ist erforderlich, weil Sie den Startanimationszustand auf das Element anwenden möchten, bevor die Animation beginnt, und den Endanimationszustand auf das Element anwenden möchten, nachdem die Animation endet. Wenn die Animation nicht beibehalten wird, wird die über die Animation angewendete `interactivity: inert`-Deklaration nicht auf Listenelemente angewendet, wenn sie sich außerhalb des Scroll-Containers befinden.

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

Schließlich werden die `@keyframes` der Animation definiert. `interactivity: inert` wird an den Positionen `entry 0%` und `exit 100%` der Ansichtszeitachse gesetzt. Kombiniert mit dem `animation-fill-mode: both`-Wert bedeutet dies, dass die Listenelemente inert sind, bevor der Beginn and nach dem Ende der Ansichtszeitachse, das heißt, wenn sie sich außerhalb des Scroll-Containers befinden. Zwischen den Positionen `entry 1%` und `exit 99%` wird `interactivity: auto` auf die Listenelemente gesetzt, was bedeutet, dass sie normalerweise interaktiv sind, wenn sie sich im Scroll-Container befinden.

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

Scrollen Sie die ungeordnete Liste horizontal, um den Seiteneffekt zu sehen – jede Seite wird eingeblendet. Versuchen Sie, zwischen den Links und den Schaltflächen zu tabben; Sie werden feststellen, dass nur die auf dem Bildschirm interaktiv sind und angeklickt werden können.

{{ EmbedLiveSample("offscreen-inert", "100%", "320") }}

## Barrierefreiheit

Berücksichtigen Sie die Barrierefreiheit sorgfältig, wenn Sie Elemente inert machen. Standardmäßig gibt es keine visuelle Möglichkeit zu erkennen, ob ein Element oder sein Unterbaum inert ist oder nicht. Als Webentwickler liegt es in Ihrer Verantwortung, eindeutig zu kennzeichnen, welche Teile des Inhalts aktiv und welche inert sind.

Erinnern Sie sich bei der Bereitstellung von visuellen und nicht-visuellen Hinweisen zur Inertheit des Inhalts auch daran, dass das visuelle Ansichtsfenster möglicherweise nur Abschnitte des Inhalts enthält. Benutzer könnten in einen kleinen Abschnitt des Inhalts hineingezoomt sein, oder Benutzer könnten den Inhalt überhaupt nicht sehen können. Nicht eindeutig als inert erkannte Abschnitte können zu Frustration und einer schlechten Benutzererfahrung führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Attribut [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
