---
title: "`overflow` CSS-Eigenschaft"
short-title: overflow
slug: Web/CSS/Reference/Properties/overflow
l10n:
  sourceCommit: bd1e1e4c5979dc7b79f75dfcc787e5bff9510aef
---

Die **`overflow`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt das gewünschte Verhalten fest, wenn Inhalt in die horizontale und/oder vertikale Richtung nicht in den Padding-Bereich des Elements passt (überläuft).

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

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Die `overflow` Eigenschaft wird als ein oder zwei {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwerte angegeben.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Padding-Bereichs des Elements sichtbar sein. Das Element ist kein {{Glossary("scroll_container", "scroll container")}}. Dies ist der Standardwert.
- `hidden`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements abgeschnitten, und der abgeschnittene Inhalt ist nicht sichtbar. Bei Überlauf ist das Element ein {{Glossary("scroll_container", "scroll container")}} ohne sichtbare Scrollbalken; Scrollen ist dennoch über andere Methoden möglich, einschließlich der Fokussierung auf versteckte Elemente, Eigenschaften wie die [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) Eigenschaft und Methoden wie [`scrollTo()`](/de/docs/Web/API/Element/scrollTo).
- `clip`
  - : Überlaufender Inhalt wird an der _overflow clip edge_ des Elements abgeschnitten, die durch die {{cssxref("overflow-clip-margin")}} Eigenschaft definiert wird. Das Element ist kein scroll container, abgeschnittener Inhalt ist nicht sichtbar, und programmatisches Scrollen wird nicht unterstützt.
- `scroll`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements abgeschnitten. Unabhängig von einem Überlauf oder nicht, ist das Element immer ein scroll container mit sichtbaren Scrollbalken.
- `auto`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements abgeschnitten. Bei Überlauf ist das Element ein scroll container mit sichtbaren Scrollbalken.

#### Nicht standardmäßige Werte

Einige nicht standardmäßige Werte werden auch in einigen Browsern unterstützt:

- `overlay`
  - : Ein Veralteter Alias für `auto`, definiert in der Spezifikation für Web-Kompatibilität. Ursprünglich als nicht standardmäßiger Wert implementiert, um Scrollbalken über den Inhalt zu rendern, anstatt Platz zu beanspruchen. Die Verwendung in neuem Code wird nicht empfohlen.

## Beschreibung

Standardmäßig wachsen blockbasierte Elemente, um ihren Inhalt aufzunehmen. Wenn die Größe eines Containers eingeschränkt ist, wird der Inhalt überlaufen. Die `overflow` Eigenschaft bestimmt, wie ein Container mit Inhalt umgeht, der seine Ränder überläuft.

Die `overflow` Eigenschaft ist eine Kurzschreibweise für die horizontale {{cssxref("overflow-x")}} und vertikale {{cssxref("overflow-y")}} Eigenschaften. Wenn nur ein Schlüsselwort angegeben ist, werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Wenn zwei Schlüsselwörter angegeben sind, gilt der erste Wert für `overflow-x` in horizontaler Richtung und der zweite Wert für `overflow-y` in vertikaler Richtung.

Überlaufoptionen umfassen das Verbergen von Überlaufinhalten, das Aktivieren von Scrollbalken zum Anzeigen von Überlaufinhalten oder das Anzeigen des Inhalts, der aus einem Elementbereich in den umgebenden Bereich herausfließt, und Kombinationen davon.

Alle Werte, außer `visible` und `clip`, erstellen einen neuen [Block-Formatierungs-Kontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context). Der neue Block-Formatierungs-Kontext ist für scroll containers notwendig, denn wenn ein Float ein scrollendes Element kreuzen würde, würde es den Inhalt nach jedem Scroll-Schritt zwangsweise neu umbrochen, was zu einem langsamen Scroll-Erlebnis führen würde.

### Was Überlauf erzeugt

Überlauf tritt auf, wenn ein Block-Element Inhalt hat, der seinen begrenzten Raum überschreitet. Der zugeteilte Raum kann durch eine Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) für vertikalen Überlauf, eine Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}) für horizontalen Überlauf, eine Blockgröße ({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}) für Block-Richtungsüberlauf oder eine Inline-Größe ({{cssxref("inline-size")}}, {{cssxref("max-inline-size")}}, oder {{cssxref("white-space")}} auf `nowrap`) für Inline-Richtungsüberlauf eingeschränkt sein.

Das folgende CSS begrenzt die Größe des Containers, indem [Box-Modell](/de/docs/Web/CSS/Guides/Box_model) Eigenschaftswerte definiert werden, die die Größe des Containers begrenzen. Eine Hintergrundfarbe, die an den `content-box` abgeschnitten ist, wird ebenfalls hinzugefügt, um zu demonstrieren, wie überlaufender Inhalt den Inhalt des Box in den folgenden Erklärungen überläuft.

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

Die verschiedenen `overflow` Werte definieren, ob ein Element Scrollbalken hat, ob es Benutzer- und programmatisch scrollbar ist und ob es ein scroll container ist (welcher einen neuen [Block-Formatierungs-Kontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt), wenn der Inhalt dieses Elements überläuft und im Fall von `scroll`, selbst wenn nicht.

#### Der `visible` Wert

Der Standardwert ist `visible`. Standardmäßig, wenn Inhalt die Beschränkungen eines Containers überschreitet, wird der Inhalt nicht im Container gehalten. Ein Element, das standardmäßig oder explizit auf `visible` gesetzt ist, hat keine Scrollbalken, ist nicht benutzer- oder programmatisch scrollbar und ist kein {{Glossary("scroll_container", "scroll container")}}. Dieser Wert erstellt keinen neuen Block-Formatierungs-Kontext.

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

Mit `visible` erfolgt kein Abschneiden, sodass der überlaufende Inhalt außerhalb des Padding-Bereichs des Elements sichtbar ist und möglicherweise benachbarte Inhalte überlappt.

#### Der `scroll` Wert

Mit `scroll` wird der Inhalt am Padding-Bereich des Elements abgeschnitten und kann in Sichtweite gescrollt werden. Benutzeragenten zeigen in beiden Richtungen Scrollbalken an, unabhängig davon, ob Inhalte überlaufen oder nicht, um zu verhindern, dass Scrollbalken erscheinen und verschwinden, wenn sich der Inhalt ändert. Drucker können überlaufenden Inhalt dennoch drucken.

Das Element ist immer ein {{Glossary("scroll_container", "scroll container")}} — sogar wenn es keinen überlaufenden Inhalt gibt — und ist sowohl benutzer- als auch programmatisch scrollbar.

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

Im ersten Beispiel, obwohl der Inhalt nicht überläuft, wird dennoch ein scroll container erstellt. Im zweiten Beispiel ist der Inhalt auf den Padding-Bereich abgeschnitten, mit einem Scrollbalken, der das Scrollen zu dem überlaufenden Inhalt ermöglicht.

#### Der `auto` Wert

Mit `auto` hängt es davon ab, ob das Element überlaufenden Inhalt hat, ob es Scrollbalken hat und ein scroll container ist. Wenn das Element überlaufenden Inhalt enthält, verhält es sich wie `scroll`: Der überlaufende Inhalt wird am Padding-Bereich des Elements abgeschnitten, und der Überlaufinhalt kann mithilfe von Scrollbalken in Sichtweite gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollbalken _nur dann an_, wenn der Inhalt überläuft. Wenn der Inhalt in den Padding-Bereich des Elements passt, sieht es genauso aus wie bei `visible`, es wird jedoch dennoch ein neuer Formatierungskontext erstellt. Der Elementbereich ist nur dann ein scroll container, wenn überlaufender Inhalt vorhanden ist.

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

Bei Verwendung der Zwei-Wert-Syntax, wenn ein Wert auf `visible` gesetzt ist, verhält sich diese `visible` Überlaufrichtung als `auto`, wenn der andere Wert nicht `visible` oder `clip` ist.

#### Der `hidden` Wert

Mit `hidden` wird überlaufender Inhalt am Padding-Bereich des Elements abgeschnitten. Es gibt keine Scrollbalken und der abgeschnittene Inhalt ist nicht sichtbar (d.h. es ist "hidden").

Wenn überlaufender Inhalt vorhanden ist, ist das Element ein scroll container. Während es keine Scrollbalken gibt und der Benutzer den Inhalt außerhalb des abgeschnittenen Bereichs nicht durch Aktionen wie Ziehen auf einem Touchscreen oder die Verwendung des Scrollrads einer Maus anzeigen kann, kann der versteckte überlaufende Inhalt in Sichtweite gescrollt werden.

Wenn der Inhalt fokussierbare Elemente enthält, bringt das Tabben das aktuell fokussierte Element in Sichtweite. Inhalte können auch programmatisch gescrollt werden. Das Festlegen eines Wertes für die [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) oder die [`scrollTop`](/de/docs/Web/API/Element/scrollTop) Eigenschaft scrollt diese Entfernung vom linken oder oberen Rand, jeweils. Sie können auch mit der Methode [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) scrollen.

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

Das erste Beispiel hat keinen überlaufenden Inhalt und ist kein scroll container. Das zweite Beispiel hat überlaufenden Inhalt, der auf den Padding-Bereich abgeschnitten ist. Obwohl kein Scrollbalken das Scrollen zum überlaufenden Inhalt ermöglicht, kann der Inhalt z. B. durch Tabben zum {{htmlelement("input")}} im versteckten Inhalt in Sichtweite gescrollt werden. Das zweite Beispiel ist ein scroll container.

#### Der `clip` Wert

Mit `clip` wird der überlaufende Inhalt standardmäßig verborgen, es gibt keine Scrollbalken, und programmatisches Scrollen ist nicht möglich. Das Element ist kein scroll container und es wird kein neuer [Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt. Wenn der abgeschnittene Inhalt interaktiven Inhalt enthält, erhält versteckter fokussierbarer Inhalt dennoch den Tastaturfokus, wird aber nicht in Sichtweite gescrollt, was ihn für Tastaturbenutzer unzugänglich macht.

Mit `clip` wird der Überlaufinhalt an der _overflow clip edge_ des Elements abgeschnitten, die mit der {{cssxref("overflow-clip-margin")}} Eigenschaft definiert wird. Der abgeschnittene Inhalt überläuft den Padding-Bereich des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin`, der standardmäßig `0px` beträgt.

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

Im zweiten Beispiel wird der überlaufende Inhalt abgeschnitten. Das Tabben zum {{htmlelement("input")}} im versteckten Inhalt gibt dem Element den Fokus, scrollt jedoch nicht in den Sichtbereich, was diesen Inhalt für Tastaturbenutzer unzugänglich macht.

Bei Verwendung der Zwei-Wert-Syntax, wenn ein Wert auf `clip` gesetzt ist, verhält sich diese `clip` Überlaufrichtung als `hidden`, wenn der andere Wert nicht auf `visible` oder `clip` gesetzt ist.

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

Beim Erstellen von [scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) mit der {{cssxref("animation-timeline/scroll", "scroll()")}} Funktion sollten Sie `clip` anstelle von `hidden` verwenden, wenn es keinen interaktiven Inhalt im abgeschnittenen Bereich gibt, es sei denn, Sie möchten explizit einen scroll container erstellen.

Sowohl bei `hidden` als auch bei `clip` wird der Überlauf abgeschnitten, aber `overflow: clip` erstellt keinen scroll container, sodass abgeschnittene Elemente übersprungen werden, wenn der Benutzeragent den DOM-Baum entlang nach dem nächstgelegenen übergeordneten scroll container sucht.

Da `overflow: hidden` einen scroll container erstellt, wenn überlaufender Inhalt vorhanden ist, könnten Sie unbeabsichtigt einen scroll-Vorfahr erstellen, der nicht scrollt. Verwenden Sie jedoch nur `clip`, wenn Sie sicher sind, dass Sie keinen interaktiven Inhalt abschneiden.

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

Das Setzen von `overflow` für Bilder und andere {{Glossary("replaced_elements", "ersetzte Elemente")}} funktioniert wie erwartet in Browsern, die das CSS Overflow Module Level 4 unterstützen; in vorherigen Versionen der Spezifikation wurden ersetzte Elemente immer auf den Begrenzungscontainer abgeschnitten.

Siehe die [Browser-Kompatibilität](#browser-kompatibilität) Tabelle für aktuelle Informationen zur Browserunterstützung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

In einigen Browsern sind scrollbare Inhaltsbereiche nicht über die Tastatur fokussierbar, sodass Benutzer, die nur die Tastatur verwenden, sie nicht scrollen können. Um sicherzustellen, dass alle Benutzer, die nur die Tastatur verwenden, den Container scrollen können, aktivieren Sie den Empfang von Fokus durch das Setzen von [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) auf dem Container. Um Bildschirmleser-Benutzern Kontext zu geben, wenn der Container den Fokus erhält, setzen Sie eine entsprechende [WAI-ARIA Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) auf dem Container, wie z.B. `role="region"`, und einen zugänglichen Namen, indem Sie das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwenden.

## Beispiele

### Demonstration der Ergebnisse verschiedener Überlauf-Schlüsselwörter

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

{{EmbedLiveSample("Demonstration der Ergebnisse verschiedener Überlauf-Schlüsselwörter", "500", "620")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}
- {{Cssxref("overflow-block")}}, {{Cssxref("overflow-clip-margin")}}, {{Cssxref("overflow-inline")}}
- {{Cssxref("clip")}}, {{Cssxref("display")}}, {{cssxref("text-overflow")}}, {{cssxref("white-space")}}
- SVG {{SVGAttr("overflow")}} Attribut
- [Scroll-Fortschritts-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)
- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [Nur-Tastatur-Scroll-Bereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
