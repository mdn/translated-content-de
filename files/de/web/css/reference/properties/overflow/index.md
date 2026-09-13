---
title: "`overflow` CSS-Eigenschaft"
short-title: overflow
slug: Web/CSS/Reference/Properties/overflow
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`overflow`**-Eigenschaft [CSS](/de/docs/Web/CSS) [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt das gewünschte Verhalten fest, wenn der Inhalt nicht in den Padding-Bereich des Elements passt (überläuft) in horizontaler und/oder vertikaler Richtung.

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

Diese Eigenschaft ist eine Abkürzung für die folgenden CSS-Eigenschaften:

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

Diese Eigenschaft wird als ein oder zwei durch Leerzeichen getrennte {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwerte angegeben:

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Padding-Bereichs des Elements sichtbar sein. Die Box des Elements ist kein {{Glossary("scroll_container", "scroll container")}}. Dies ist der Standardwert.
- `hidden`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements abgeschnitten, wodurch der abgeschnittene Inhalt verborgen bleibt. Wenn der Inhalt überläuft, ist die Box des Elements ein {{Glossary("scroll_container", "scroll container")}} ohne Scrollleisten; Scrollen ist weiterhin über andere Methoden möglich, einschließlich des Tab-Wechselns zu versteckten fokussierbaren Elementen, Eigenschaften wie der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) Eigenschaft und Methoden wie [`scrollTo()`](/de/docs/Web/API/Element/scrollTo).
- `clip`
  - : Überlaufender Inhalt wird an der _overflow clip edge_ des Elements abgeschnitten, die durch die {{cssxref("overflow-clip-margin")}}-Eigenschaft definiert wird. Die Box des Elements ist kein scroll container, abgeschnittener Inhalt ist nicht sichtbar und programmgesteuertes Scrollen wird nicht unterstützt.
- `scroll`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements abgeschnitten. Ob überlaufend oder nicht, die Box des Elements ist immer ein scroll container, der Scrollleisten anzeigt.
- `auto`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements abgeschnitten. Wenn der Inhalt überläuft, ist die Box des Elements ein scroll container mit angezeigten Scrollleisten.

#### Nicht-standardisierte Werte

Einige nicht-standardisierte Werte werden auch in einigen Browsern unterstützt:

- `overlay`
  - : Ein veraltetes Alias für `auto`, das in der Spezifikation für die Web-Kompatibilität definiert ist. Ursprünglich als nicht-standardisierter Wert implementiert, um Scrollleisten oberhalb des Inhalts anzuzeigen, anstatt Platz zu beanspruchen. Die Verwendung in neuem Code wird nicht empfohlen.

## Beschreibung

Standardmäßig wachsen Block-Level-Elemente, um ihren Inhalt aufzunehmen. Wenn die Größe eines Containers eingeschränkt ist, läuft der Inhalt über. Die `overflow`-Eigenschaft bestimmt, wie ein Container mit Inhalt umgeht, der über seine Ränder läuft.

Die `overflow`-Eigenschaft ist eine Abkürzung für die horizontalen {{cssxref("overflow-x")}} und vertikalen {{cssxref("overflow-y")}} Eigenschaften. Wenn nur ein Schlüsselwort angegeben wird, werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Werden zwei Schlüsselwörter angegeben, gilt der erste Wert für `overflow-x` in horizontaler Richtung und der zweite für `overflow-y` in vertikaler Richtung.

Überlaufoptionen umfassen das Verbergen von überlaufendem Inhalt, das Aktivieren von Scrollleisten zur Ansicht von überlaufendem Inhalt oder das Anzeigen des Inhalts, der aus einer Elementbox in den umgebenden Bereich fließt, und Kombinationen davon.

Alle Werte außer `visible` und `clip` erzeugen einen neuen [block formatting context](/de/docs/Web/CSS/Guides/Display/Block_formatting_context). Der neue block formatting context ist für scroll containers erforderlich, da, wenn ein Float mit einem scrollenden Element kollidiert, der Inhalt nach jedem Scroll-Schritt gezwungen neu angeordnet wird, was die Scroll-Geschwindigkeit verlangsamt.

### Was Überlauf erzeugt

Überlauf tritt auf, wenn ein Block-Level-Element Inhalt hat, der seinen eingeschränkten Raum überläuft. Der zugeteilte Raum kann durch eine Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) für vertikalen Überlauf, eine Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}) für horizontalen Überlauf, eine Blockgröße ({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}) für Blockrichtungsüberlauf oder eine Inline-Größe ({{cssxref("inline-size")}}, {{cssxref("max-inline-size")}}, oder {{cssxref("white-space")}} auf `nowrap` gesetzt) für Inlinerichtungsüberlauf eingeschränkt werden.

Das folgende CSS begrenzt die Größe des Containers und definiert [Box-Modell](/de/docs/Web/CSS/Guides/Box_model)-Eigenschaften, die die Größe des Containers begrenzen. Eine Hintergrundfarbe, die auf den `content-box` abgeschnitten wird, wird ebenfalls hinzugefügt, um zu veranschaulichen, wie überlaufender Inhalt das Element überläuft in den folgenden Erklärungen.

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

Die verschiedenen `overflow`-Werte definieren, ob ein Element Scrollleisten hat, ob es benutzer- und programmgesteuert gescrollt werden kann und ob es ein scroll container ist (dies erzeugt einen neuen [block formatting context](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)), wenn der Inhalt des Elements überläuft und, im Fall von `scroll`, auch wenn dies nicht der Fall ist.

#### Der `visible`-Wert

Der Standardwert ist `visible`. Standardmäßig, wenn Inhalte die Einschränkungen eines Containers überlaufen, sind die Inhalte nicht auf den Container beschränkt. Ein Element, das standardmäßig eingestellt ist oder explizit auf `visible` gesetzt wird, hat keine Scrollleisten, kann nicht benutzer- oder programmgesteuert gescrollt werden und ist kein {{Glossary("scroll_container", "scroll container")}}. Dieser Wert erzeugt keinen neuen block formatting context.

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

Bei `visible` tritt kein Abschneiden auf, sodass der überlaufende Inhalt außerhalb des Padding-Bereichs des Elements sichtbar ist und möglicherweise angrenzende Inhalte überlappt.

#### Der `scroll`-Wert

Bei `scroll` wird der Inhalt am Padding-Bereich des Elements abgeschnitten und kann gescrollt werden. Benutzeragenten zeigen Scrollleisten in beiden Richtungen an, unabhängig davon, ob Inhalt überläuft oder nicht, was verhindert, dass Scrollleisten beim Ändern des Inhalts erscheinen und verschwinden. Drucker können überlaufende Inhalte trotzdem ausdrucken.

Das Element ist immer ein {{Glossary("scroll_container", "scroll container")}} – selbst wenn kein überlaufender Inhalt vorhanden ist – und ist sowohl benutzer- als auch programmgesteuert scrollbar.

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

Im ersten Beispiel wird, obwohl der Inhalt nicht überläuft, trotzdem ein scroll container erstellt. Im zweiten Beispiel wird der Inhalt an die Padding-Box abgeschnitten, mit einer Scrollleiste zum Scrollen auf den überlaufenden Inhalt.

#### Der `auto`-Wert

Mit `auto` hängt es davon ab, ob das Element Scrollleisten hat und ein scroll container ist, ob das Element überlaufenden Inhalt hat. Wenn das Element Überlaufinhalt enthält, verhält es sich wie `scroll`: der überlaufende Inhalt wird an der Padding-Box des Elements abgeschnitten und überlaufender Inhalt kann mit Scrollleisten angezeigt werden. Anders als bei `scroll` zeigen Benutzeragenten Scrollleisten _nur an_, wenn der Inhalt überläuft. Wenn der Inhalt in die Padding-Box des Elements passt, sieht es genauso aus wie bei `visible`, erstellt aber trotzdem einen neuen Formatierungskontext. Die Elementbox ist nur dann ein scroll container, wenn überlaufender Inhalt vorhanden ist.

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

Wenn die Zwei-Werte-Syntax verwendet wird und ein Wert auf `visible` gesetzt ist, verhält sich diese `visible` Überlaufrichtung wie `auto`, wenn der andere Wert nicht `visible` oder `clip` ist.

#### Der `hidden`-Wert

Bei `hidden` wird der überlaufende Inhalt an der Padding-Box des Elements abgeschnitten. Es gibt keine Scrollleisten und der abgeschnittene Inhalt ist nicht sichtbar (d.h. er ist "versteckt").

Wenn überlaufender Inhalt vorhanden ist, ist das Element ein scroll container. Obwohl keine Scroll-Leisten vorhanden sind und der Benutzer den Inhalt außerhalb des abgeschnittenen Bereichs nicht durch Aktionen wie das Ziehen auf einem Touchscreen oder das Verwenden des Scrollrads einer Maus anzeigen kann, kann der versteckte Überlaufinhalt in die Ansicht gescrollt werden.

Wenn der Inhalt fokussierbare Elemente enthält, bringt Tabulatortaste das derzeit fokussierte Element in die Ansicht. Der Inhalt kann auch programmgesteuert gescrollt werden. Das Festlegen eines Werts für die [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) oder [`scrollTop`](/de/docs/Web/API/Element/scrollTop) Eigenschaft scrollt diese Entfernung von der linken bzw. oberen Kante. Sie können auch die [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode verwenden.

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

Das erste Beispiel hat keinen überlaufenden Inhalt und ist kein scroll container. Das zweite Beispiel hat überlaufenden Inhalt, der an die Padding-Box abgeschnitten ist. Obwohl keine Scrollleiste vorhanden ist, die das Scrollen zum überlaufenden Inhalt ermöglicht, kann der Inhalt in die Ansicht gescrollt werden, zum Beispiel durch Tabben zum {{htmlelement("input")}} im versteckten Inhalt. Das zweite Beispiel ist ein scroll container.

#### Der `clip`-Wert

Bei `clip` ist überlaufender Inhalt standardmäßig versteckt, es gibt keine Scrollleisten und programmgesteuertes Scrollen ist nicht möglich. Das Element ist kein scroll container und es wird kein neuer [Formatting Context](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt. Wenn der abgeschnittene Inhalt interaktiven Inhalt enthält, erhält der verborgene fokussierbare Inhalt weiterhin den Tastaturfokus, aber dieser Inhalt wird nicht in die Ansicht gescrollt, was ihn für Tastaturbenutzer unzugänglich macht.

Bei `clip` wird der Überlaufinhalt an der _overflow clip edge_ des Elements abgeschnitten, die mit der {{cssxref("overflow-clip-margin")}}-Eigenschaft definiert wird. Der abgeschnittene Inhalt überläuft die Padding-Box des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin`, der standardmäßig `0px` beträgt.

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

Der überlaufende Inhalt im zweiten Beispiel ist abgeschnitten. Durch Tabben zum {{htmlelement("input")}} im versteckten Inhalt wird dem Element der Fokus gegeben, jedoch wird es nicht in die Ansicht gescrollt, was diesen Inhalt für Tastaturbenutzer unzugänglich macht.

Wenn die Zwei-Werte-Syntax verwendet wird und ein Wert auf `clip` gesetzt ist, verhält sich diese `clip` Überlaufrichtung wie `hidden`, wenn der andere Wert nicht auf `visible` oder `clip` gesetzt ist.

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

Wenn [scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) mithilfe der {{cssxref("animation-timeline/scroll", "scroll()")}}-Funktion erstellt werden, sollten Sie `clip` anstelle von `hidden` verwenden, wenn sich kein interaktiver Inhalt in dem abgeschnittenen Bereich befindet, es sei denn, Sie möchten explizit einen scroll container erstellen.

Sowohl bei `hidden` als auch bei `clip` wird der Überlauf abgeschnitten, aber `overflow: clip` erstellt keinen scroll container, sodass abgeschnittene Elemente übersprungen werden, wenn der Benutzeragent den DOM-Baum nach dem nächsten Vorfahre-scroll container durchsucht.

Da `overflow: hidden` einen scroll container erstellt, wenn überlaufender Inhalt vorhanden ist, könnte unbeabsichtigt ein scrollbarerer Vorfahre erstellt werden, der nicht scrollt. Verwenden Sie jedoch nur `clip`, wenn Sie sicher sind, dass Sie keinen interaktiven Inhalt abschneiden.

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

### Überlaufende Ersetzungselemente

Das Setzen von `overflow` auf Bildern und anderen {{Glossary("replaced_elements", "Ersetzungselementen")}} funktioniert wie erwartet in Browsern, die das CSS Overflow Module Level 4 unterstützen; in früheren Versionen der Spezifikation wurden Ersetzungselemente immer auf das umgebende Container begrenzt.

Sehen Sie das [Browser-Kompatibilität](#browser-kompatibilität)-Diagramm für aktuelle Informationen zur Browserunterstützung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

In einigen Browsern sind Scroll-Inhaltsbereiche nicht mit der Tastatur fokussierbar, sodass sie nicht von Benutzern, die ausschließlich die Tastatur verwenden, gescrollt werden können. Um sicherzustellen, dass alle reinen Tastaturnutzer den Container scrollen können, ermöglichen Sie es dem Element, den Fokus zu erhalten, indem Sie [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) auf dem Container setzen. Um den Benutzern von Bildschirmlesegeräten einen Kontext zu geben, wenn der Container den Fokus erhält, setzen Sie eine entsprechende [WAI-ARIA Role](/de/docs/Web/Accessibility/ARIA/Reference/Roles) auf den Container, wie etwa `role="region"`, und einen zugänglichen Namen mit dem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut.

## Beispiele

### Darstellung der Ergebnisse verschiedener Überlauf-Schlüsselwörter

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

{{EmbedLiveSample("Darstellung der Ergebnisse verschiedener Überlauf-Schlüsselwörter", "500", "620")}}

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
- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [Nur Tastatur scrollbare Bereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
