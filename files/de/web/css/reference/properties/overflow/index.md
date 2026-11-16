---
title: CSS-Eigenschaft `overflow`
short-title: overflow
slug: Web/CSS/Reference/Properties/overflow
l10n:
  sourceCommit: 0e4db835c8abee4ec3813eb29414edd1189d463c
---

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`overflow`** legt fest, wie sich ein Element verhalten soll, wenn sein Inhalt in horizontaler und/oder vertikaler Richtung nicht in seine Padding-Box passt und überläuft.

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

## Zugehörige Eigenschaften

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

### Werte

Diese Eigenschaft wird mit einem oder zwei durch Leerzeichen getrennten {{CSSXref("overflow_value", "&lt;overflow&gt;")}}-Schlüsselwortwerten angegeben:

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb der Padding-Box des Elements sichtbar sein. Die Elementbox ist kein {{Glossary("scroll_container", "Scroll-Container")}}. Dies ist der Standardwert.
- `hidden`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten und ist außerhalb davon nicht sichtbar. Wenn Inhalt überläuft, ist die Elementbox ein {{Glossary("scroll_container", "Scroll-Container")}} ohne Scrollbalken. Scrollen ist dennoch auf andere Weise möglich, beispielsweise durch Navigieren mit der Tabulatortaste zu verborgenen fokussierbaren Elementen, über Eigenschaften wie [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) und über Methoden wie [`scrollTo()`](/de/docs/Web/API/Element/scrollTo).
- `clip`
  - : Überlaufender Inhalt wird an der durch die Eigenschaft {{cssxref("overflow-clip-margin")}} definierten _Abschneidekante für überlaufenden Inhalt_ abgeschnitten. Die Elementbox ist kein Scroll-Container, abgeschnittener Inhalt ist nicht sichtbar und programmgesteuertes Scrollen wird nicht unterstützt.
- `scroll`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten. Die Elementbox ist unabhängig davon, ob Inhalt überläuft, immer ein Scroll-Container mit Scrollbalken.
- `auto`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten. Wenn Inhalt überläuft, ist die Elementbox ein Scroll-Container mit Scrollbalken.

#### Nicht standardisierte Werte

Einige Browser unterstützen auch nicht standardisierte Werte:

- `overlay`
  - : Ein veralteter Alias für `auto`, der aus Gründen der Webkompatibilität in der Spezifikation definiert ist. Er wurde ursprünglich als nicht standardisierter Wert implementiert, damit Scrollbalken über dem Inhalt dargestellt werden, statt Platz einzunehmen. Von seiner Verwendung in neuem Code wird abgeraten.

## Beschreibung

Elemente auf Blockebene wachsen standardmäßig so, dass ihr Inhalt hineinpasst. Wenn die Größe eines Containers begrenzt ist, kann sein Inhalt überlaufen. Die Eigenschaft `overflow` bestimmt, wie ein Container mit Inhalt umgeht, der über seine Ränder hinausreicht.

Die Eigenschaft `overflow` ist eine Kurzschreibweise für die horizontale Eigenschaft {{cssxref("overflow-x")}} und die vertikale Eigenschaft {{cssxref("overflow-y")}}. Wird nur ein Schlüsselwort angegeben, erhalten `overflow-x` und `overflow-y` denselben Wert. Werden zwei Schlüsselwörter angegeben, gilt der erste Wert für `overflow-x` in horizontaler Richtung und der zweite für `overflow-y` in vertikaler Richtung.

Zu den Möglichkeiten für den Umgang mit überlaufendem Inhalt gehören, ihn auszublenden, Scrollbalken zum Anzeigen des Inhalts bereitzustellen oder ihn außerhalb der Elementbox im umgebenden Bereich darzustellen. Diese Möglichkeiten lassen sich auch kombinieren.

Alle Werte außer `visible` und `clip` erzeugen einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context). Dieser ist für Scroll-Container erforderlich: Würde ein Float ein scrollendes Element überlagern, müsste dessen Inhalt nach jedem Scrollschritt erneut umbrochen werden, was das Scrollen verlangsamen würde.

### Wann Inhalt überläuft

Inhalt läuft über, wenn der Inhalt eines Elements auf Blockebene den verfügbaren, begrenzten Platz überschreitet. Dieser Platz kann für vertikalen Überlauf durch eine Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}), für horizontalen Überlauf durch eine Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}), für Überlauf in Blockrichtung durch eine Blockgröße ({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}) oder für Überlauf in Inline-Richtung durch eine Inline-Größe ({{cssxref("inline-size")}}, {{cssxref("max-inline-size")}} oder {{cssxref("white-space")}} mit dem Wert `nowrap`) begrenzt sein.

Das folgende CSS begrenzt die Größe des Containers mit Eigenschaftswerten des [Box-Modells](/de/docs/Web/CSS/Guides/Box_model).
Außerdem wird eine auf die `content-box` begrenzte Hintergrundfarbe hinzugefügt. Sie verdeutlicht in den folgenden Erläuterungen, wie überlaufender Inhalt über die Content-Box hinausragt.

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

### Die Werte von `overflow` verstehen

Die verschiedenen Werte von `overflow` legen fest, ob ein Element Scrollbalken hat, ob Benutzer oder Programme darin scrollen können und ob es ein Scroll-Container ist, der einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erzeugt. Dies gilt, wenn der Inhalt des Elements überläuft – bei `scroll` auch dann, wenn er nicht überläuft.

#### Der Wert `visible`

Der Standardwert ist `visible`. Wenn Inhalt die Abmessungen eines Containers überschreitet, bleibt er standardmäßig nicht auf den Container begrenzt. Ein Element mit dem Standardwert `visible` oder einem ausdrücklich gesetzten Wert `visible` hat keine Scrollbalken, kann weder durch Benutzer noch programmgesteuert gescrollt werden und ist kein {{Glossary("scroll_container", "Scroll-Container")}}. Dieser Wert erzeugt keinen neuen Blockformatierungskontext.

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

Bei `visible` wird nichts abgeschnitten. Überlaufender Inhalt ist daher außerhalb der Padding-Box des Elements sichtbar und kann angrenzenden Inhalt überlagern.

#### Der Wert `scroll`

Bei `scroll` wird Inhalt an der Padding-Box des Elements abgeschnitten und kann durch Scrollen sichtbar gemacht werden. User Agents zeigen Scrollbalken in beide Richtungen an, unabhängig davon, ob Inhalt überläuft. Dadurch wird verhindert, dass Scrollbalken bei Inhaltsänderungen erscheinen und verschwinden. Drucker können überlaufenden Inhalt dennoch drucken.

Das Element ist immer ein {{Glossary("scroll_container", "Scroll-Container")}} – auch wenn kein Inhalt überläuft – und kann sowohl durch Benutzer als auch programmgesteuert gescrollt werden.

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

Im ersten Beispiel wird ein Scroll-Container erzeugt, obwohl der Inhalt nicht überläuft. Im zweiten Beispiel wird der Inhalt an der Padding-Box abgeschnitten. Über einen Scrollbalken kann der überlaufende Inhalt angezeigt werden.

#### Der Wert `auto`

Bei `auto` hängt es davon ab, ob Inhalt überläuft, ob das Element Scrollbalken hat und ein Scroll-Container ist. Wenn Inhalt überläuft, verhält es sich wie `scroll`: Der Inhalt wird an der Padding-Box des Elements abgeschnitten und kann mithilfe von Scrollbalken sichtbar gemacht werden. Anders als bei `scroll` zeigen User Agents Scrollbalken _nur dann_ an, wenn Inhalt überläuft. Passt der Inhalt in die Padding-Box des Elements, sieht es genauso aus wie mit `visible`, erzeugt aber dennoch einen neuen Formatierungskontext. Die Elementbox ist nur dann ein Scroll-Container, wenn Inhalt überläuft.

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

Werden zwei Werte angegeben und ist einer davon `visible`, verhält sich die Überlaufrichtung mit `visible` wie bei `auto`, sofern der andere Wert weder `visible` noch `clip` ist.

#### Der Wert `hidden`

Bei `hidden` wird überlaufender Inhalt an der Padding-Box des Elements abgeschnitten. Es gibt keine Scrollbalken und der abgeschnittene Inhalt ist nicht sichtbar – er ist also „verborgen“.

Wenn Inhalt überläuft, ist das Element ein Scroll-Container. Zwar gibt es keine Scrollbalken und Benutzer können den Inhalt außerhalb des sichtbaren Bereichs nicht durch Ziehen auf einem Touchscreen oder mit dem Mausrad anzeigen, der verborgene überlaufende Inhalt kann jedoch auf andere Weise durch Scrollen sichtbar gemacht werden.

Enthält der Inhalt fokussierbare Elemente, wird beim Navigieren mit der Tabulatortaste das jeweils fokussierte Element sichtbar gemacht. Auch programmgesteuertes Scrollen ist möglich. Wird die Eigenschaft [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) oder [`scrollTop`](/de/docs/Web/API/Element/scrollTop) auf einen Wert gesetzt, wird um den entsprechenden Abstand vom linken beziehungsweise oberen Rand gescrollt. Sie können auch die Methode [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) verwenden.

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

Im ersten Beispiel läuft kein Inhalt über und das Element ist kein Scroll-Container. Im zweiten Beispiel läuft Inhalt über und wird an der Padding-Box abgeschnitten. Obwohl kein Scrollbalken vorhanden ist, kann der überlaufende Inhalt sichtbar gemacht werden, beispielsweise indem Sie mit der Tabulatortaste zum {{htmlelement("input")}} im verborgenen Inhalt navigieren. Das zweite Beispiel ist ein Scroll-Container.

#### Der Wert `clip`

Bei `clip` wird überlaufender Inhalt standardmäßig verborgen. Es gibt keine Scrollbalken und programmgesteuertes Scrollen ist nicht möglich. Das Element ist kein Scroll-Container und es wird kein neuer [Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erzeugt. Wenn der abgeschnittene Inhalt interaktive Elemente enthält, können verborgene fokussierbare Elemente weiterhin den Tastaturfokus erhalten. Sie werden jedoch nicht durch Scrollen sichtbar gemacht und sind daher für Benutzer, die eine Tastatur verwenden, nicht zugänglich.

Bei `clip` wird überlaufender Inhalt an der _Abschneidekante für überlaufenden Inhalt_ des Elements abgeschnitten. Diese wird mit der Eigenschaft {{cssxref("overflow-clip-margin")}} festgelegt. Der abgeschnittene Inhalt kann um den {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin` über die Padding-Box des Elements hinausragen. Der Standardwert ist `0px`.

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

Im zweiten Beispiel wird der überlaufende Inhalt abgeschnitten. Wenn Sie mit der Tabulatortaste zum {{htmlelement("input")}} im verborgenen Inhalt navigieren, erhält das Element den Fokus, wird aber nicht durch Scrollen sichtbar gemacht. Dieser Inhalt ist daher für Benutzer, die eine Tastatur verwenden, nicht zugänglich.

Werden zwei Werte angegeben und ist einer davon `clip`, verhält sich die Überlaufrichtung mit `clip` wie bei `hidden`, sofern der andere Wert weder `visible` noch `clip` ist.

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

#### Bei scrollgesteuerten Animationen

Wenn Sie mit der Funktion {{cssxref("animation-timeline/scroll", "scroll()")}} [scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) erstellen, sollten Sie `clip` statt `hidden` verwenden, sofern sich im abgeschnittenen Bereich kein interaktiver Inhalt befindet und Sie nicht ausdrücklich einen Scroll-Container erzeugen möchten.

Sowohl `hidden` als auch `clip` schneiden überlaufenden Inhalt ab. `overflow: clip` erzeugt jedoch keinen Scroll-Container. Deshalb werden Elemente mit `clip` übersprungen, wenn der User Agent im DOM-Baum nach oben nach dem nächstgelegenen übergeordneten Scroll-Container sucht.

Da `overflow: hidden` bei überlaufendem Inhalt einen Scroll-Container erzeugt, könnten Sie unbeabsichtigt ein übergeordnetes Scrollelement erzeugen, das nicht scrollt. Verwenden Sie `clip` aber nur, wenn Sie sicher sind, dass dadurch kein interaktiver Inhalt abgeschnitten wird.

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

### Überlauf bei ersetzten Elementen

Das Festlegen von `overflow` für Bilder und andere {{Glossary("replaced_elements", "ersetzte Elemente")}} funktioniert in Browsern, die CSS Overflow Module Level 4 unterstützen, wie erwartet. In früheren Versionen der Spezifikation wurden ersetzte Elemente immer an den Grenzen des umschließenden Containers abgeschnitten.

Informationen zur aktuellen Browser-Unterstützung finden Sie in der Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität).

## Barrierefreiheit

In einigen Browsern können scrollbare Inhaltsbereiche nicht über die Tastatur fokussiert werden. Benutzer, die ausschließlich eine Tastatur verwenden, können darin daher nicht scrollen. Damit alle diese Benutzer im Container scrollen können, ermöglichen Sie dem Element, den Fokus zu erhalten, indem Sie für den Container [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) festlegen. Damit Benutzer von Screenreadern beim Fokussieren des Containers den nötigen Kontext erhalten, legen Sie eine passende [WAI-ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) fest, etwa `role="region"`, und vergeben Sie mit dem Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) einen zugänglichen Namen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ergebnisse verschiedener `overflow`-Schlüsselwörter veranschaulichen

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
- SVG-Attribut {{SVGAttr("overflow")}}
- [Scroll-Fortschritts-Zeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)
- Modul [CSS overflow](/de/docs/Web/CSS/Guides/Overflow)
- Modul [CSS scroll-driven animations](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Scrollbare Bereiche für reine Tastaturbedienung](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
