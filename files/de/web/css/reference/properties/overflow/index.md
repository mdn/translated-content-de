---
title: "`overflow` CSS-Eigenschaft"
short-title: overflow
slug: Web/CSS/Reference/Properties/overflow
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`overflow`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt das gewünschte Verhalten fest, wenn der Inhalt nicht in den Innenabstand des Elements passt (überläuft), und zwar in horizontaler und/oder vertikaler Richtung.

{{InteractiveExample("CSS Demo: overflow")}}

```css interactive-example-choice
overflow: visible;
```

```css interactive-example-choice
overflow: hidden;
```

```css interactive-example-choice
overflow: clip;
```

```css interactive-example-choice
overflow: scroll;
```

```css interactive-example-choice
overflow: auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p id="example-element">
    Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's
    Inn Hall. Implacable November weather. As much mud in the streets as if the
    waters had but newly retired from the face of the earth.
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 15em;
  height: 9em;
  border: medium dotted;
  padding: 0.75em;
  text-align: left;
}
```

## Bestandteilseigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("overflow-x")}}
- {{cssxref("overflow-y")}}

## Syntax

```css
/* Keyword values */
overflow: visible;
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;

/* Two-value syntax: horizontal | vertical */
overflow: hidden visible;

/* Global values */
overflow: inherit;
overflow: initial;
overflow: revert;
overflow: revert-layer;
overflow: unset;
```

### Werte

Diese Eigenschaft wird als ein oder zwei durch Leerzeichen getrennte {{CSSXref("overflow_value", "&lt;overflow&gt;")}}-Schlüsselwortwerte angegeben:

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Innenabstands des Elements sichtbar sein. Das Element ist keine {{Glossary("scroll_container", "scroll container")}}. Dies ist der Standardwert.
- `hidden`
  - : Überlaufender Inhalt wird am Innenabstand des Elements abgeschnitten, der abgeschnittene Inhalt bleibt verborgen. Bei Überlauf ist das Element ein {{Glossary("scroll_container", "scroll container")}} ohne Scrollleisten; das Scrollen ist dennoch über andere Methoden möglich, einschließlich des Tabben zu versteckten fokussierbaren Elementen, mit Eigenschaften wie der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)-Eigenschaft und mit Methoden wie [`scrollTo()`](/de/docs/Web/API/Element/scrollTo).
- `clip`
  - : Überlaufender Inhalt wird an der _overflow clip edge_ des Elements abgeschnitten, die durch die {{cssxref("overflow-clip-margin")}}-Eigenschaft definiert wird. Das Element ist kein scroll container, der abgeschnittene Inhalt bleibt unsichtbar und programmgesteuertes Scrollen wird nicht unterstützt.
- `scroll`
  - : Überlaufender Inhalt wird am Innenabstand des Elements abgeschnitten. Unabhängig davon, ob er überläuft oder nicht, das Element ist immer ein scroll container mit sichtbaren Scrollleisten.
- `auto`
  - : Überlaufender Inhalt wird am Innenabstand des Elements abgeschnitten. Bei Überlauf ist das Element ein scroll container mit sichtbaren Scrollleisten.

#### Nicht-standardisierte Werte

Einige nicht-standardisierte Werte werden in manchen Browsern ebenfalls unterstützt:

- `overlay`
  - : Ein veraltetes Alias für `auto`, in der Spezifikation für die Web-Kompatibilität definiert. Ursprünglich als nicht-standardisierter Wert implementiert, um Scrollleisten über dem Inhalt zu rendern, anstatt Platz einzunehmen. Die Verwendung in neuem Code wird nicht empfohlen.

## Beschreibung

Standardmäßig wachsen Blockelemente, um zu ihrem Inhalt zu passen. Ist die Größe eines Containers eingeschränkt, wird der Inhalt überlaufen. Die `overflow`-Eigenschaft bestimmt, wie ein Container mit überlaufendem Inhalt umgeht.

Die `overflow`-Eigenschaft ist eine Kurzschreibweise für die horizontale {{cssxref("overflow-x")}}- und vertikale {{cssxref("overflow-y")}}-Eigenschaften. Wenn nur ein Schlüsselwort angegeben ist, werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Wenn zwei Schlüsselwörter angegeben sind, wird der erste Wert auf `overflow-x` in der horizontalen Richtung und der zweite auf `overflow-y` in der vertikalen Richtung angewendet.

Überlaufoptionen umfassen das Verbergen von überlaufendem Inhalt, das Aktivieren von Scrollleisten, um überlaufenden Inhalt anzuzeigen, oder das Anzeigen des Inhalts, der über den Rand eines Elemente-Kastens in den umliegenden Bereich hinausfließt, und Kombinationen davon.

Alle Werte, außer `visible` und `clip`, erstellen einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context). Der neue Blockformatierungskontext ist für scroll container notwendig, denn wenn ein Float mit einem scrollenden Element interagieren würde, würde der Inhalt nach jedem Scroll-Schritt zwangsweise neu umbrochen, was zu einem langsamen Scroll-Erlebnis führt.

### Was Overflow erzeugt

Overflow tritt auf, wenn ein Blockelement Inhalt hat, der seinen beschränkten Raum überläuft. Der zur Verfügung gestellte Raum kann durch eine Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) für vertikalen Overflow, eine Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}) für horizontalen Overflow, eine Blockgröße ({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}) für blockrichtungsüberlauf oder eine Inlinengröße ({{cssxref("inline-size")}}, {{cssxref("max-inline-size")}}, oder {{cssxref("white-space")}} auf `nowrap` gesetzt) für inlinerichtungsüberlauf eingeschränkt sein.

Der folgende CSS-Code begrenzt die Größe des Containers und definiert [Box-Modell](/de/docs/Web/CSS/Guides/Box_model)-Eigenschaftswerte, die die Größe des Containers einschränken.
Eine Hintergrundfarbe, die auf den `content-box` zugeschnitten ist, wird ebenfalls hinzugefügt, um zu veranschaulichen, wie überfüllter Inhalt die Content-Box in den folgenden Erklärungen überläuft.

```css
div {
  height: 10em;
  width: 15em;
  border: 3px solid;
  padding: 10px;

  background-color: #ededed;
  background-clip: content-box;
}
```

### Verständnis der Overflow-Werte

Die verschiedenen `overflow`-Werte definieren, ob ein Element Scrollleisten hat, ob es benutzer- und programmgesteuert scrollbar ist und ob es ein scroll container ist (welcher einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt), wenn der Inhalt des Elements überläuft und im Fall von `scroll` sogar, wenn er es nicht tut.

#### Der `visible`-Wert

Der Standardwert ist `visible`. Standardmäßig ist der Inhalt, wenn er die Einschränkungen eines Containers überläuft, nicht auf den Container beschränkt. Ein Element, das standardmäßig oder explizit auf `visible` gesetzt ist, hat keine Scrollleisten, ist nicht benutzer- oder programmgesteuert scrollbar und ist kein {{Glossary("scroll_container", "scroll container")}}. Dieser Wert erstellt keinen neuen Blockformatierungskontext.

```css live-sample___visible
div {
  overflow: visible;
}
```

{{EmbedLiveSample("visible", "", "300px")}}

```html hidden live-sample___visible
<div>
  <h2>overflow: visible;</h2>
</div>
<div>
  <p>
    The <code>overflow</code> property in this example is set to
    <code>visible</code>. No scroll container is created; the content just
    overflows the container.
  </p>
</div>
```

Mit `visible` erfolgt kein Clipping, sodass der überlaufende Inhalt sichtbar außerhalb des Innenabstands des Elements ist und möglicherweise angrenzenden Inhalt überlappt.

#### Der `scroll`-Wert

Mit `scroll` wird der Inhalt am Innenabstand des Elements abgeschnitten und kann in den Sichtbereich gescrollt werden. Benutzeragenten zeigen Scrollleisten in beiden Richtungen an, unabhängig davon, ob Inhalt überläuft oder nicht, was verhindert, dass Scrollleisten als Reaktion auf Inhaltsänderungen erscheinen und verschwinden. Drucker können dennoch überlaufenden Inhalt drucken.

Das Element ist immer ein {{Glossary("scroll_container", "scroll container")}} - auch wenn kein überlaufender Inhalt vorhanden ist - und ist sowohl benutzer- als auch programmgesteuert scrollbar.

```css live-sample___scroll
div {
  overflow: scroll;
}
```

{{EmbedLiveSample("scroll", "", "300px")}}

```html hidden live-sample___scroll
<div>
  <h2>overflow: scroll;</h2>
</div>
<div>
  <p>
    The <code>overflow</code> property in this example is set to
    <code>scroll</code>. A scroll container is created; a scrollbar is always
    visible, even if not needed.
  </p>
</div>
```

Im ersten Beispiel wird, auch wenn der Inhalt nicht überläuft, ein scroll container erstellt. Im zweiten Beispiel wird der Inhalt an die Padding-Box angepasst, wobei eine Scrollleiste das Scrollen zu dem überlaufenden Inhalt ermöglicht.

#### Der `auto`-Wert

Bei `auto` hängt es davon ab, ob das Element überlaufenden Inhalt hat, ob das Element Scrollleisten hat und ein scroll container ist. Wenn das Element überlaufenden Inhalt enthält, verhält es sich wie `scroll`: Der überlaufende Inhalt wird am Innenabstand des Elements abgeschnitten, und überlaufender Inhalt kann über Scrollleisten in den Sichtbereich gebracht werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollleisten _nur dann an_, wenn der Inhalt überläuft. Wenn der Inhalt in den Innenabstand des Elements passt, sieht es aus wie bei `visible`, erstellt jedoch dennoch einen neuen Formatierungskontext. Der Elementkasten ist nur dann ein scroll container, wenn überlaufender Inhalt vorhanden ist.

```css live-sample___auto
div {
  overflow: auto;
}
```

{{EmbedLiveSample("auto", "", "300px")}}

```html hidden live-sample___auto
<div>
  <h2>overflow: auto;</h2>
</div>
<div>
  <p>
    The <code>overflow</code> property in this example is set to
    <code>auto</code>. Because there is overflowing content, a scroll container
    is created. The content is clipped to the padding box and a scroll bar
    enables scrolling to the overflowing content.
  </p>
</div>
```

Bei der Verwendung der Zweisyntax wird, wenn ein Wert auf `visible` gesetzt ist, diese `visible`-Überlaufsrichtung wie `auto` verhalten, wenn der andere Wert nicht `visible` oder `clip` ist.

#### Der `hidden`-Wert

Mit `hidden` wird überlaufender Inhalt am Innenabstand des Elements abgeschnitten. Es gibt keine Scrollleisten, und der abgeschnittene Inhalt ist nicht sichtbar (d.h. er wird "versteckt").

Falls überlaufender Inhalt vorhanden ist, ist das Element ein scroll container. Während keine Scrollleisten vorhanden sind und der Benutzer den Inhalt außerhalb des abgeschnittenen Bereichs nicht durch Aktionen wie das Ziehen auf einem Touchscreen oder die Verwendung des Mausrads anzeigen kann, kann der versteckte Überlaufinhalt in den Sichtbereich gescrollt werden.

Enthält der Inhalt fokussierbare Elemente, wird durch Tabben das aktuell fokussierte Element in den Sichtbereich gebracht. Der Inhalt kann auch programmgesteuert gescrollt werden. Beim Setzen eines Werts für die [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)- oder [`scrollTop`](/de/docs/Web/API/Element/scrollTop)-Eigenschaft wird diese Entfernung von der linken oder oberen Kante gescrollt. Sie können auch die Methode [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) verwenden.

```css live-sample___hidden
div {
  overflow: hidden;
}
```

{{EmbedLiveSample("hidden", "", "300px")}}

```html hidden live-sample___hidden
<div>
  <h2>overflow: hidden;</h2>
</div>
<div>
  <p>
    The <code>overflow</code> property in this example is set to
    <code>hidden</code>. While hidden,
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#interactive_content"
      >interactive content</a
    >
    can be scrolled into view when focused. Because content overflows, the
    element is a scroll container, even though no scroll bars are present.
    Tabbing will give this
    <input aria-label="input" placeholder="input" /> focus and scroll it into
    view. This content is also programmatically scrollable.
  </p>
</div>
```

Das erste Beispiel hat keinen überlaufenden Inhalt und ist kein scroll container. Das zweite Beispiel hat überlaufenden Inhalt, der an die Padding-Box abgeschnitten wird. Obwohl keine Scrollleiste vorhanden ist, die das Scrollen zum überlaufenden Inhalt ermöglicht, kann der Inhalt in den Sichtbereich gescrollt werden, z.B. durch das Tabben zum {{htmlelement("input")}} im versteckten Inhalt. Das zweite Beispiel ist ein scroll container.

#### Der `clip`-Wert

Mit `clip` ist überlaufender Inhalt standardmäßig verborgen, es sind keine Scrollleisten vorhanden und programmgesteuertes Scrollen ist nicht möglich. Das Element ist kein scroll container und es wird kein neuer [Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt. Wenn der abgeschnittene Inhalt interaktiven Inhalt enthält, erhält verborgener fokussierbarer Inhalt dennoch den Tastaturfokus, aber dieser Inhalt wird nicht in den Sichtbereich gescrollt, was ihn für Tastaturbenutzer unzugänglich macht.

Mit `clip` wird Überlaufinhalt an der _overflow clip edge_ des Elements abgeschnitten, die mit der {{cssxref("overflow-clip-margin")}}-Eigenschaft definiert wird. Der abgeschnittene Inhalt überläuft den Innenabstand des Elements um den {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin`, welcher standardmäßig `0px` beträgt.

```css live-sample___clip
div {
  overflow: clip;
}
```

{{EmbedLiveSample("clip", "", "350")}}

```html hidden live-sample___clip
<div>
  <h2>overflow: clip;</h2>
</div>
<div>
  <p>
    The <code>overflow</code> property in this example is set to
    <code>clip</code>. When hidden,
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#interactive_content"
      >interactive content</a
    >
    can NOT be scrolled into view when focused. Overflowing content is clipped
    to the container. No scroll container is created. Tabbing will give this
    <input aria-label="input" placeholder="input" /> focus but will not scroll
    it into view. Keyboard users will not be able to reach this content. This
    content is also not programmatically scrollable.
  </p>
</div>
<fieldset>
  <legend>Select a <code>overflow-clip-margin</code> value</legend>
  <ul>
    <li>
      <label
        ><input type="radio" name="overflow" value="0" /> overflow-clip-margin:
        0;</label
      >
    </li>
    <li>
      <label
        ><input type="radio" name="overflow" value="3em" />
        overflow-clip-margin: 3em;</label
      >
    </li>
  </ul>
</fieldset>
```

Das überlaufende Inhalt des zweiten Beispiels wird abgeschnitten. Beim Tabben zum {{htmlelement("input")}} im versteckten Inhalt erhält das Element den Fokus, aber es wird nicht in den Sichtbereich gescrollt, was diesen Inhalt für Tastaturbenutzer unzugänglich macht.

Bei der Zweisyntax verhält sich, wenn ein Wert auf `clip` gesetzt ist, diese `clip`-Überlaufsrichtung wie `hidden`, wenn der andere Wert nicht auf `visible` oder `clip` gesetzt ist.

```css hidden live-sample___clip
ul {
  list-style-type: none;
}
label {
  font-family: monospace;
}
:has([value="0"]:checked) div {
  overflow-clip-margin: 0;
}
:has([value="3em"]:checked) div {
  overflow-clip-margin: 3em;
}

@supports not (overflow-clip-margin: 0) {
  body::before {
    content: "Your browser doesn't support overflow-clip-margin yet.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;

    width: 100%;
  }
}
```

#### Mit scroll-gesteuerten Animationen

Beim Erstellen von [scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) mit der {{cssxref("animation-timeline/scroll", "scroll()")}}-Funktion sollten Sie `clip` anstelle von `hidden` verwenden, wenn im abgeschnittenen Bereich kein interaktiver Inhalt vorhanden ist, es sei denn, Sie möchten explizit einen scroll container erstellen.

Bei sowohl `hidden` als auch `clip` wird der Überlauf abgeschnitten, aber `overflow: clip` erstellt keinen scroll container, sodass abgeschnittene Elemente übersprungen werden, wenn der Benutzeragent im DOM-Baum nach dem nächsten Vorfahren-Scrollcontainer sucht.

Weil `overflow: hidden` bei existierendem Überlauf einen scroll container erstellt, können Sie unbeabsichtigt einen scrollenden Vorfahren erstellen, der nicht scrollt. Verwenden Sie jedoch nur `clip`, wenn Sie sicher sind, dass Sie keinen interaktiven Inhalt abschneiden werden.

```css hidden live-sample___visible live-sample___scroll live-sample___auto live-sample___clip live-sample___hidden
div {
  height: 10em;
  width: 15em;
  border: 3px solid;
  padding: 10px;
  background-color: #ededed;
  background-clip: content-box;
}
p {
  font-size: 1.5rem;
  line-height: 1.6;
  font-family: sans-serif;
}
h2 {
  font-family: monospace;
}
body {
  height: 98vh;
  overflow: clip;
  display: flex;
  flex-flow: row wrap;
  gap: 3em;
}
```

### Überlaufende ersetzte Elemente

Das Setzen von `overflow` bei Bildern und anderen {{Glossary("replaced_elements", "ersetzten Elementen")}} funktioniert wie erwartet in Browsern, die das CSS Overflow Module Level 4 unterstützen; in vorherigen Spezifikationsversionen wurden ersetzte Elemente immer an den Begrenzungscontainer abgeschnitten.

Entnehmen Sie bitte der [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle die aktuellen Informationen zur Unterstützung durch Browser.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

In einigen Browsern sind scrollenden Inhaltsbereiche über die Tastatur nicht fokussierbar, so dass sie von Tastaturnutzern nicht gescrollt werden können. Um sicherzustellen, dass alle Tastaturnutzer den Container scrollen können, ermöglichen Sie dem Element, den Fokus zu erhalten, indem Sie [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) am Container setzen. Um Bildschirmleser-Nutzern den Kontext beim Empfang des Fokus durch den Container zu geben, setzen Sie eine geeignete [WAI-ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) am Container, wie `role="region"`, und einen zugänglichen Namen mithilfe des Attributs [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby).

## Beispiele

### Ergebnisdarstellung verschiedener Overflow-Schlüsselwörter

#### HTML

```html
<div>
  <code>visible</code>
  <p class="visible">
    Maya Angelou: "I've learned that people will forget what you said, people
    will forget what you did, but people will never forget how you made them
    feel."
  </p>
</div>

<div>
  <code>hidden</code>
  <p class="hidden">
    Maya Angelou: "I've learned that people will forget what you said, people
    will forget what you did, but people will never forget how you made them
    feel."
  </p>
</div>

<div>
  <code>clip</code>
  <p class="clip">
    Maya Angelou: "I've learned that people will forget what you said, people
    will forget what you did, but people will never forget how you made them
    feel."
  </p>
</div>

<div>
  <code>scroll</code>
  <p class="scroll">
    Maya Angelou: "I've learned that people will forget what you said, people
    will forget what you did, but people will never forget how you made them
    feel."
  </p>
</div>

<div>
  <code>auto</code>
  <p class="auto">
    Maya Angelou: "I've learned that people will forget what you said, people
    will forget what you did, but people will never forget how you made them
    feel."
  </p>
</div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}

div {
  margin: 2em;
  font-size: 1.2em;
}

p {
  width: 5em;
  height: 5em;
  border: dotted;
  margin-top: 0.5em;
}

div:nth-of-type(5),
div:nth-of-type(6) {
  margin-top: 200px;
}
```

```css
p.visible {
  overflow: visible;
}

p.hidden {
  overflow: hidden;
}

p.clip {
  overflow: clip;
  overflow-clip-margin: 1em;
}

p.scroll {
  overflow: scroll;
}

p.auto {
  overflow: auto;
}
```

#### Ergebnis

{{EmbedLiveSample("Demonstrating results of various overflow keywords", "500", "620")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}
- {{Cssxref("overflow-block")}}, {{Cssxref("overflow-clip-margin")}}, {{Cssxref("overflow-inline")}}
- {{Cssxref("clip")}}, {{Cssxref("display")}}, {{cssxref("text-overflow")}}, {{cssxref("white-space")}}
- SVG {{SVGAttr("overflow")}}-Attribut
- [Scroll progress timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)
- [CSS overflow](/de/docs/Web/CSS/Guides/Overflow)-Modul
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)-Modul
- [Nur-Tastatur-Scrollbereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
