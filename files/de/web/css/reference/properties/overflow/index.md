---
title: "`overflow` CSS-Eigenschaft"
short-title: overflow
slug: Web/CSS/Reference/Properties/overflow
l10n:
  sourceCommit: ef6043b9d32b240262f6a29b719c02a7f61a5066
---

Die **`overflow`**-[CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt das gewünschte Verhalten fest, wenn Inhalte nicht in den Innenabstand eines Elements passen (überlaufen) in horizontaler und/oder vertikaler Richtung.

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

## Zusammengesetzte Eigenschaften

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

Die `overflow`-Eigenschaft wird als ein oder zwei {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwerte angegeben.

### Werte

- `visible`
  - : Überlappende Inhalte werden nicht abgeschnitten und können außerhalb des Innenabstands des Elements sichtbar sein. Das Element ist kein {{Glossary("scroll_container", "Scroll-Container")}}. Dies ist der Standardwert.
- `hidden`
  - : Überlappende Inhalte werden am Innenabstand des Elements abgeschnitten und der abgeschnittene Inhalt bleibt verborgen. Wenn Inhalte überlaufen, ist das Element ein {{Glossary("scroll_container", "Scroll-Container")}} ohne Scrollleisten; das Scrollen ist dennoch über andere Methoden wie das Tabben zu versteckten fokussierbaren Elementen, Eigenschaften wie der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)-Eigenschaft und Methoden wie [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) möglich.
- `clip`
  - : Überlappende Inhalte werden an der _overflow-clip edge_ des Elements abgeschnitten, die durch die {{cssxref("overflow-clip-margin")}}-Eigenschaft definiert ist. Das Element ist kein Scroll-Container, abgeschnittener Inhalt ist nicht sichtbar und programmatisches Scrollen wird nicht unterstützt.
- `scroll`
  - : Überlappende Inhalte werden am Innenabstand des Elements abgeschnitten. Unabhängig davon, ob Inhalte überlaufen oder nicht, ist das Element immer ein Scroll-Container, der Scrollleisten anzeigt.
- `auto`
  - : Überlappende Inhalte werden am Innenabstand des Elements abgeschnitten. Wenn Inhalte überlaufen, ist das Element ein Scroll-Container, der Scrollleisten anzeigt.

#### Nicht standardmäßige Werte

Einige nicht standardmäßige Werte werden in einigen Browsern ebenfalls unterstützt:

- `overlay`
  - : Ein veraltetes Alias für `auto`, das in der Spezifikation für die Webkompatibilität definiert ist. Ursprünglich als nicht standardmäßiger Wert implementiert, um Scrollleisten über den Inhalten anzuzeigen, anstatt Platz einzunehmen. Die Verwendung in neuem Code wird nicht empfohlen.

## Beschreibung

Standardmäßig wachsen block-level Elemente, um ihrem Inhalt zu entsprechen. Wenn die Größe eines Containers begrenzt ist, wird der Inhalt überlaufen. Die `overflow`-Eigenschaft bestimmt, wie ein Container mit Inhalten umgeht, die seine Grenzen überschreiten.

Die `overflow`-Eigenschaft ist eine Kurzschreibweise für die horizontalen {{cssxref("overflow-x")}} und vertikalen {{cssxref("overflow-y")}} Eigenschaften. Wenn nur ein Schlüsselwort angegeben ist, werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Wenn zwei Schlüsselwörter angegeben sind, gilt der erste Wert für `overflow-x` in horizontaler Richtung und der zweite für `overflow-y` in vertikaler Richtung.

Überlaufoptionen umfassen das Verbergen überlaufender Inhalte, das Aktivieren von Scrollleisten zur Anzeige überlaufender Inhalte oder das Anzeigen von Inhalten, die aus einem Elementbox in den umgebenden Bereich hineinragen, sowie Kombinationen davon.

Alle Werte, außer `visible` und `clip`, erstellen einen neuen [Blockformatierungs-Kontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context). Der neue Blockformatierungs-Kontext ist für Scroll-Container notwendig, da ein Float, der mit einem Scrolling-Element verknüpft ist, den Inhalt nach jedem Scroll-Schritt zwangsweise neu umhüllen würde, was zu einem langsamen Scroll-Erlebnis führen würde.

### Was verursacht Überlauf

Überlauf tritt auf, wenn ein Block-Element Inhalte hat, die seinen beschränkten Raum überlaufen. Der zugewiesene Raum kann durch eine Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) für vertikalen Überlauf, eine Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}) für horizontalen Überlauf, eine Block-Größe ({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}) für Überlauf in Blockrichtung oder eine Inline-Größe ({{cssxref("inline-size")}}, {{cssxref("max-inline-size")}} oder {{cssxref("white-space")}} auf `nowrap` gesetzt) für Überlauf in Inlinerichtung beschränkt werden.

Der folgende CSS begrenzt die Größe des Containers, indem Werte von [Boxmodell](/de/docs/Web/CSS/Guides/Box_model)-Eigenschaften definiert werden, die die Größe des Containers einschränken.
Eine Hintergrundfarbe, beschnitten auf den `content-box`, wird ebenfalls hinzugefügt, um zu verdeutlichen, wie überlaufende Inhalte die content box in den folgenden Erklärungen überlaufen.

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

### Verständnis der Überlaufwerte

Die verschiedenen `overflow`-Werte definieren, ob ein Element Scrollleisten hat, ob es vom Benutzer und programmatisch scrollbar ist und ob es ein Scroll-Container (der einen neuen [Blockformatierungs-Kontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt) ist, wenn die Inhalte dieses Elements überlaufen und, im Falle von `scroll`, sogar wenn sie es nicht tun.

#### Der `visible` Wert

Der Standardwert ist `visible`. Standardmäßig, wenn der Inhalt die Einschränkungen eines Containers überläuft, wird der Inhalt nicht auf den Container beschränkt. Ein Element, das standardmäßig oder ausdrücklich auf `visible` gesetzt ist, hat keine Scrollleisten, ist nicht vom Benutzer programmatisch scrollbar und ist kein {{Glossary("scroll_container", "Scroll-Container")}}. Dieser Wert erstellt keinen neuen Blockformatierungs-Kontext.

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

Mit `visible` erfolgt kein Clipping, sodass der überlaufende Inhalt außerhalb des Innenabstandes des Elements sichtbar ist und möglicherweise angrenzende Inhalte überlappt.

#### Der `scroll` Wert

Mit `scroll` wird der Inhalt am Innenabstand des Elements abgeschnitten und kann in den Sichtbereich gescrollt werden. Benutzeragenten zeigen Scrollleisten in beide Richtungen an, unabhängig davon, ob Inhalte überlaufen oder nicht, was verhindert, dass Scrollleisten erscheinen und verschwinden, während sich der Inhalt ändert. Drucker können dennoch überlaufende Inhalte drucken.

Das Element ist immer ein {{Glossary("scroll_container", "Scroll-Container")}} — auch wenn kein überlaufender Inhalt vorhanden ist — und ist sowohl vom Benutzer scrollbar als auch programmatisch scrollbar.

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

Im ersten Beispiel, obwohl der Inhalt nicht überläuft, wird dennoch ein Scroll-Container erstellt. Im zweiten Beispiel wird der Inhalt auf den Innenabstand abgeschnitten, wobei eine Scrollleiste das Scrollen zum überlaufenden Inhalt ermöglicht.

#### Der `auto` Wert

Mit `auto` hängt es davon ab, ob das Element überlaufenden Inhalt hat, um festzulegen, ob das Element Scrollleisten hat und ein Scroll-Container ist. Wenn das Element überlaufenden Inhalt enthält, verhält es sich wie `scroll`: der überlaufende Inhalt wird am Innenabstand des Elements abgeschnitten und überlaufender Inhalt kann mit Scrollleisten in den Sichtbereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollleisten _nur an_, wenn der Inhalt überläuft. Wenn der Inhalt in den Innenabstand des Elements passt, sieht es genauso aus wie bei `visible`, erstellt jedoch dennoch einen neuen Formatierungskontext. Die Elemente-Box ist nur dann ein Scroll-Container, wenn es überlaufenden Inhalt gibt.

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

Bei Verwendung der Zwei-Wert-Syntax, wenn ein Wert auf `visible` eingestellt ist, verhält sich diese `visible` Überlaufrichtung als `auto`, wenn der andere Wert nicht `visible` oder `clip` ist.

#### Der `hidden` Wert

Mit `hidden` wird überlaufender Inhalt am Innenabstand des Elements abgeschnitten. Es gibt keine Scrollleisten und der abgeschnittene Inhalt ist nicht sichtbar (d.h. er ist "verborgen").

Wenn es überlaufenden Inhalt gibt, ist das Element ein Scroll-Container. Während es keine Scrollleisten gibt und der Benutzer den Inhalt außerhalb des abgeschnittenen Bereichs nicht durch Aktionen wie das Ziehen auf einem Touchscreen oder die Verwendung des Scrollrads einer Maus anzeigen kann, kann der verborgene Überlaufinhalt programmiert gescrollt werden.

Wenn der Inhalt fokussierbare Elemente enthält, bringt das Tabben das momentan fokussierte Element in den Sichtbereich. Inhalt kann auch programmiert gescrollt werden. Das Einstellen eines Wertes für die [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) oder [`scrollTop`](/de/docs/Web/API/Element/scrollTop) Eigenschaft scrollt diese Entfernung vom linken oder oberen Rand. Sie können auch die [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode verwenden.

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

Das erste Beispiel hat keinen überlaufenden Inhalt und ist kein Scroll-Container. Das zweite Beispiel hat überlaufenden Inhalt, der auf den Innenabstand abgeschnitten ist. Obwohl es keine Scrollleiste gibt, die das Scrollen zum überlaufenden Inhalt ermöglicht, kann der Inhalt in den Sichtbereich gescrollt werden, z.B. durch Tabben zum {{htmlelement("input")}} im verborgenen Inhalt. Das zweite Beispiel ist ein Scroll-Container.

#### Der `clip` Wert

Mit `clip` ist überlaufender Inhalt standardmäßig verborgen, es gibt keine Scrollleisten und programmatisches Scrollen ist nicht möglich. Das Element ist kein Scroll-Container und es wird kein neuer [Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt. Wenn der abgeschnittene Inhalt interaktive Inhalte enthält, erhält der verborgene fokussierbare Inhalt dennoch den Tastaturfokus, wird jedoch nicht in den Sichtbereich gescrollt, wodurch er für Tastaturbenutzer unzugänglich wird.

Mit `clip` wird der Überlaufinhalt an der _overflow-clip edge_ des Elements abgeschnitten, die mit der {{cssxref("overflow-clip-margin")}}-Eigenschaft definiert wird. Der abgeschnittene Inhalt überläuft den Innenabstand des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin`, der standardmäßig auf `0px` gesetzt ist.

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

Das überlaufende Inhalt des zweiten Beispiels ist abgeschnitten. Das Tabben zum {{htmlelement("input")}} im verborgenen Inhalt gibt dem Element den Fokus, scrollt es jedoch nicht in den Sichtbereich, wodurch dieser Inhalt für Tastaturbenutzer unzugänglich ist.

Bei Verwendung der Zwei-Wert-Syntax, wenn ein Wert auf `clip` gesetzt ist, verhält sich diese `clip`-Überlaufrichtung als `hidden`, wenn der andere Wert nicht `visible` oder `clip` ist.

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

#### Mit scrollgesteuerten Animationen

Beim Erstellen von [scrollgesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) mit der {{cssxref("animation-timeline/scroll", "scroll()")}} Funktion, ziehen Sie `clip` vor `hidden` in Betracht, wenn es keinen interaktiven Inhalt im abgeschnittenen Bereich gibt, es sei denn, Sie möchten ausdrücklich einen Scroll-Container erstellen.

Mit sowohl `hidden` als auch `clip` wird der Überlauf abgeschnitten, aber `overflow: clip` erzeugt keinen Scroll-Container, sodass abgeschnittene Elemente übersprungen werden, wenn der Benutzeragent im DOM-Baum nach dem nächstgelegenen Vorfahren-Scroll-Container sucht.

Da `overflow: hidden` einen Scroll-Container erstellt, wenn es überlaufenden Inhalt gibt, könnten Sie versehentlich einen Scroll-Vorfahren erstellen, der nicht scrollt. Verwenden Sie `clip` jedoch nur, wenn Sie sicher sind, dass Sie keinen interaktiven Inhalt abschneiden.

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

Das Setzen von `overflow` auf Bilder und andere {{Glossary("replaced_elements", "ersetzte Elemente")}} funktioniert wie erwartet in Browsern, die das CSS Overflow Module Level 4 unterstützen; in vorherigen Versionen der Spezifikation wurden ersetzte Elemente immer auf den begrenzenden Container abgeschnitten.

Sehen Sie sich das [Browser-Kompatibilitätsdiagramm](#browser-kompatibilität) für aktuelle Informationen zur Unterstützung durch Browser an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

In einigen Browsern sind Scroll-Inhaltsbereiche nicht über die Tastatur fokusierbar, daher können sie nicht von einem Benutzer bedient werden, der nur die Tastatur verwendet. Um sicherzustellen, dass alle Benutzer, die nur die Tastatur verwenden, den Container scrollen können, aktivieren Sie die Fokussierung des Elements, indem Sie [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) auf dem Container setzen. Um den Nutzern von Bildschirmleseprogrammen Kontext zu geben, wenn der Container den Fokus erhält, setzen Sie eine passende [WAI-ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) auf den Container, wie `role="region"`, und einen zugänglichen Namen, indem Sie das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut verwenden.

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

<div>
  <code>overlay</code>
  <p class="overlay">
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

p.overlay {
  overflow: overlay;
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
- SVG {{SVGAttr("overflow")}} Attribut
- [Scroll-Fortschritt Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)
- [CSS Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [Tastatur-only Scroll-Bereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
