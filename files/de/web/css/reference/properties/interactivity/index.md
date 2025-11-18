---
title: interactivity
slug: Web/CSS/Reference/Properties/interactivity
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{CSSRef}}{{seecompattable}}

Die **`interactivity`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob ein Element und seine Knoten-Deszendenten auf [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert) gesetzt sind.

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
  - : Ausgewählte Elemente befinden sich im Standardzustand in Bezug auf Inertheit. Dies bedeutet normalerweise, dass sie interaktiv sind, aber das ist [nicht immer der Fall](#standard-inertheit). Dies ist der Standardwert.

- `inert`
  - : Ausgewählte Elemente und deren Nachkommen sind inert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beschreibung

Die Eigenschaft `interactivity` kann verwendet werden, um festzulegen, ob ein Element und seine Nachkommen inert sind. Siehe die HTML Attributsreferenzseite [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) für eine detaillierte Beschreibung des Inert-Zustandes.

Ein typischer Anwendungsfall für `interactivity: inert` ist bei paginierten Inhalten, wie Karussells, wenn nur der aktuell sichtbare Seiteninhalt und die -steuerungen interaktiv sein sollen. In solchen Fällen könnte das unabsichtliche Fokussieren auf einen nicht sichtbaren Link oder Button das Nutzererlebnis beeinträchtigen.

Wenn der Inertheitszustand eines Elements sowohl durch HTML (das `inert` Attribut oder eine automatische Browsereinstellung) als auch durch CSS (die Eigenschaft `interactive`) zur gleichen Zeit angegeben wird, hat CSS keine Wirkung — es kann die Inertheit des HTML nicht außer Kraft setzen.

Zum Beispiel wird das folgende HTML-Element inert sein:

```html
<button inert>You can't press me</button>
```

Das Setzen von `interactive: auto` darauf hat keine Wirkung.

### Standard-Inertheit

Die meisten Elemente sind standardmäßig interaktiv, aber das ist nicht immer der Fall:

- Ein Vorfahrelement kann auf einen inerten Zustand gesetzt sein, über die Eigenschaft `interactive` oder das Attribut `inert`.
- Während ein modales {{htmlelement("dialog")}} angezeigt wird, wird der Rest der Seite automatisch auf einen inerten Zustand gesetzt.

## Beispiele

### Grundlegende Verwendung von `interactivity`

In diesem Beispiel haben wir zwei {{htmlelement("input")}}-Elemente. Auf das zweite ist `interactivity: inert` über eine Klasse gesetzt, und daher ist es in unterstützenden Browsern nicht fokussierbar oder editierbar.

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

In diesem Beispiel untersuchen wir die Effekte der Eigenschaft `interactivity`.

#### HTML

Die Markup enthält zwei {{htmlelement("p")}}-Elemente, von denen jedes einen Link enthält. Der zweite Absatz hat zudem eine Klasse `inert` auf ihn gesetzt, und ein Kind-{{htmlelement("span")}}-Element mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), das bearbeitbar ist.

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

Wir setzen die Eigenschaft `interactivity` im zweiten Absatz auf den Wert `inert`, womit es inert wird. Das bedeutet, dass Sie den Text `contenteditable` im ersten Absatz bearbeiten können sollten, jedoch nicht im zweiten, und Sie sollten nicht in der Lage sein, nach Text zu suchen, Text auszuwählen oder mit dem Link im zweiten Absatz zu interagieren.

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

Wir setzen einen Ereignishandler auf jeden Absatz, der einen Klassennamen beim Klick toggelt, den Klassennamen hinzufügt und dann nach zwei Sekunden wieder entfernt.

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

Beachten Sie, wie der zweite Absatz inert ist; daher verhält er sich nicht wie der erste Absatz. Zum Beispiel kann der Link nicht angeklickt oder fokussiert werden, der Text kann nicht ausgewählt oder durchsucht werden, das `contenteditable` `<span>` ist nicht bearbeitbar, und `click`-Ereignisse werden auf ihm nicht registriert.

### Inertsetzen von nicht sichtbaren Elementen mithilfe einer View-Timeline

Dieses Beispiel zeigt horizontal scrollenden, paginierten Inhalt, wobei jede Seite mithilfe von [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) eingerastet wird und die Inertheit über eine Scroll-gesteuerte Animation kontrolliert wird, die eine [View-Progress-Timeline](/de/docs/Web/CSS/Reference/Properties/view-timeline-name) verwendet. Der Inhalt, der im {{Glossary("scroll_container", "Scroll-Container")}} angezeigt wird, ist interaktiv; er wird inert, wenn er in den überlaufenden Inhalt verschoben wird.

#### HTML

Das HTML besteht aus einer Überschrift der obersten Ebene [heading](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und einer [ungeordneten Liste](/de/docs/Web/HTML/Reference/Elements/ul) mit vier [Listenelementen](/de/docs/Web/HTML/Reference/Elements/li), die jeweils den Inhalt für eine separate Seite enthalten.

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

Eine {{cssxref("width")}} von `100vw` wird auf die ungeordnete Liste gesetzt, um sie so breit wie das Ansichtsfenster zu machen. Wir fügen eine feste {{cssxref("height")}}, etwas {{cssxref("padding")}} und einen {{cssxref("overflow-x")}} Wert von `scroll` hinzu, sodass überlaufender Inhalt scrollt. Ihre Kind-Listenelemente werden horizontal mit {{cssxref("display", "display: flex")}} angeordnet. Dieser Flex-Container erhält einen {{cssxref("scroll-snap-type")}} Wert von `x mandatory`, um ihn in einen {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}} zu verwandeln. Das `x`-Schlüsselwort bewirkt, dass die {{Glossary("Scroll_snap#snap_target", "Snap-Ziele")}} des Containers horizontal einrasten. Das `mandatory`-Schlüsselwort bedeutet, dass der Container immer zu einem Snap-Ziel am Ende einer Scroll-Aktion einrastet.

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

Jedes Listenelement hat die folgenden Stilregeln angewandt:

- Einen {{cssxref("flex")}} Wert von `0 0 98vw`, wodurch jedes Element so groß wie der Scroll-Container gemacht wird, minus der auf die Liste gesetzten {{cssxref("gap")}} (siehe die `gap`-Deklaration in der weiter oben gezeigten `ul`-Regel). Dies hat auch den Effekt, jede Seite im Scroll-Container zu zentrieren.
- Einen {{cssxref("scroll-snap-align")}} Wert von `center`, um den Scroll-Container in der Mitte jedes Snap-Ziels einrasten zu lassen.
- Einen {{cssxref("view-timeline")}} Wert von `--inner-change inline`, um das Element als Subjekt der `--inner-change` View-Progress-Timeline zu deklarieren und diese Timeline so festzulegen, dass sie im Inline-Richtung fortschreitet, während sie sich durch ihren Vorfahren-Scroll-Container bewegt.
- Einen {{cssxref("animation-timeline")}} Wert mit demselben Namen wie dem {{cssxref("view-timeline-name")}}, wie im `view-timeline`-Kürzel definiert, was bedeutet, dass die benannte View-Progress-Timeline verwendet wird, um den Fortschritt von Animationen zu steuern, die auf das Element angewendet werden.
- Ein {{cssxref("animation-name")}} und ein {{cssxref("animation-fill-mode")}}, die die auf dieses Element angewendete Animation und ihren Füllmodus definieren. Der Wert `both` ist erforderlich, weil Sie möchten, dass der Startanimation-Zustand auf das Element angewendet wird, bevor die Animation beginnt, und der Endanimation-Zustand auf das Element angewendet wird, nachdem die Animation beendet ist. Wenn die Animation nicht beibehalten wird, wird die `interactivity: inert`-Deklaration, die über die Animation angewendet wird, keinen Einfluss auf Listenelemente haben, wenn sie sich außerhalb des Scroll-Containers befinden.

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

Schließlich werden die Animation {{cssxref("@keyframes")}} definiert. `interactivity: inert` wird an den Positionen `entry 0%` und `exit 100%` der View-Timeline gesetzt. In Kombination mit dem Wert `animation-fill-mode: both` bedeutet dies, dass die Listenelemente inert sein werden, bevor der Start und nach dem Ende der View-Timeline, das heißt, wenn sie sich außerhalb des Scroll-Containers befinden. Zwischen den Positionen `entry 1%` und `exit 99%` wird `interactivity: auto` auf die Listenelemente gesetzt, was bedeutet, dass sie normal interaktiv sein können, wenn sie sich innerhalb des Scroll-Containers befinden.

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

Scrollen Sie die ungeordnete Liste horizontal, um den Paginierungseffekt zu sehen — jede Seite rastet ins Sichtfeld ein. Versuchen Sie, zwischen den Links und den Buttons zu tabben; Sie werden feststellen, dass nur jene auf dem Bildschirm interaktiv sind und angesteuert werden können.

{{ EmbedLiveSample("offscreen-inert", "100%", "320") }}

## Barrierefreiheitsbedenken

Sie sollten Barrierefreiheit sorgfältig prüfen, wenn Sie Elemente inert machen. Standardmäßig gibt es keinen visuellen Hinweis darauf, ob ein Element oder dessen Unterbaum inert ist oder nicht. Als Webentwickler ist es Ihre Verantwortung, klar zu kennzeichnen, welche Teile des Inhalts aktiv sind und welche inert sind.

Während Sie visuelle und nicht-visuelle Hinweise zur Inertheit von Inhalten bereitstellen, sollten Sie auch bedenken, dass das visuelle Ansichtsfenster möglicherweise nur Teile von Inhalten enthält. Benutzer könnten in einen kleinen Abschnitt des Inhalts hineingezoomt haben, oder Benutzer können den Inhalt überhaupt nicht sehen. Inerte Abschnitte, die nicht offensichtlich inert sind, können zu Frustration und schlechtem Benutzererlebnis führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) Attribut
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
