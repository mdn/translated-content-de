---
title: overflow
slug: Web/CSS/overflow
l10n:
  sourceCommit: 6535a1611a773988550ff0bdcf3c65873f38ea69
---

{{CSSRef}}

Die **`overflow`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt das gewünschte Verhalten fest, wenn der Inhalt nicht in den Innenabstand des Elements passt (überläuft) in horizontaler und/oder vertikaler Richtung.

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

Diese Eigenschaft ist ein Shorthand für die folgenden CSS-Eigenschaften:

- [`overflow-x`](/de/docs/Web/CSS/overflow-x)
- [`overflow-y`](/de/docs/Web/CSS/overflow-y)

## Syntax

```css
/* Keyword values */
overflow: visible;
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;
overflow: hidden visible;

/* Global values */
overflow: inherit;
overflow: initial;
overflow: revert;
overflow: revert-layer;
overflow: unset;
```

Die `overflow`-Eigenschaft wird als einer oder zwei {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwerte angegeben. Wenn nur ein Schlüsselwort angegeben wird, werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Wenn zwei Schlüsselwörter angegeben werden, gilt der erste Wert für `overflow-x` in horizontaler Richtung und der zweite für `overflow-y` in vertikaler Richtung.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Innenabstands des Elements sichtbar sein. Das Element ist keine {{Glossary("scroll_container", "Scroll-Container")}}. Dies ist der Standardwert der `overflow`-Eigenschaft.
- `hidden`
  - : Überlaufender Inhalt wird am Innenabstand des Elements abgeschnitten. Es gibt keine Scrollleisten, und der abgeschnittene Inhalt ist nicht sichtbar (d.h. der abgeschnittene Inhalt ist versteckt), aber der Inhalt existiert weiterhin. Benutzeragenten fügen keine Scrollleisten hinzu und erlauben den Benutzern auch nicht, den Inhalt außerhalb des abgeschnittenen Bereichs durch Aktionen wie Ziehen auf einem Touchscreen oder Verwenden des Scrollrads an einer Maus anzuzeigen. Der Inhalt _kann_ programmgesteuert gescrollt werden (z. B. durch Verlinkung zu Ankertext, durch Tabben zu einem verborgenen, aber fokussierbaren Element oder durch Setzen des Werts der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)-Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo)-Methode), in diesem Fall ist das Element ein Scroll-Container.
- `clip`
  - : Überlaufender Inhalt wird am _Überlauf-Clipping-Rand_ des Elements abgeschnitten, der mit der [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin)-Eigenschaft definiert wird. Dadurch überläuft der Inhalt den Innenabstand des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin` oder `0px`, wenn nicht gesetzt. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keine Scrollleiste hinzu, und programmgesteuertes Scrollen wird ebenfalls nicht unterstützt. Es wird kein neuer [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt. Um einen Formatierungskontext zu schaffen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Das Element ist kein Scroll-Container.
- `scroll`
  - : Überlaufender Inhalt wird am Innenabstand des Elements abgeschnitten, und überlaufender Inhalt kann mit Scrollleisten angezeigt werden. Benutzeragenten zeigen Scrollleisten an, unabhängig davon, ob überlaufender Inhalt vorhanden ist oder nicht, also in der horizontalen und vertikalen Richtung, wenn der Wert für beide Richtungen gilt. Die Verwendung dieses Schlüsselworts kann verhindern, dass Scrollleisten beim Ändern des Inhalts erscheinen und verschwinden. Drucker können dennoch überlaufenden Inhalt drucken. Das Element ist ein Scroll-Container.
- `auto`
  - : Überlaufender Inhalt wird am Innenabstand des Elements abgeschnitten, und überlaufender Inhalt kann mit Scrollleisten angezeigt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollleisten _nur dann_ an, wenn der Inhalt überläuft. Passt der Inhalt in den Innenabstand des Elements, sieht es aus wie mit `visible`, aber es wird dennoch ein neuer Formatierungskontext erstellt. Das Element ist ein Scroll-Container.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veralteter Wertalias für `auto`. Mit `overlay` werden die Scrollleisten über den Inhalt gezeichnet, anstatt Platz einzunehmen.

## Beschreibung

Überlaufoptionen umfassen das Verbergen von Überlaufinhalt, das Aktivieren von Scrollleisten zum Anzeigen von Überlaufinhalt oder das Anzeigen des Inhalts, der aus einem Elementkasten in den umgebenden Bereich fließt, und Kombinationen davon.

Die folgenden Nuancen sollten bei der Verwendung der verschiedenen Schlüsselwörter für `overflow` beachtet werden:

- Die Angabe eines anderen Werts als `visible` (der Standardwert) oder `clip` für `overflow` erstellt einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Dies ist aus technischen Gründen erforderlich; wenn ein Float auf ein scrollendes Element trifft, würde es den Inhalt nach jedem Scrollschritt neu umbrechen, was zu einem langsamen Scrollen führt.
- Damit eine `overflow`-Einstellung die gewünschte Wirkung erzeugt, muss das Block-Element entweder eine festgelegte Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) haben, wenn der Überlauf in vertikaler Richtung erfolgt, eine festgelegte Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}) haben, wenn der Überlauf in horizontaler Richtung erfolgt, eine festgelegte Block-Größe (({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}) haben, wenn der Überlauf in Blockrichtung erfolgt, oder eine festgelegte Inline-Größe (({{cssxref("inline-size")}} oder {{cssxref("max-inline-size")}}) oder {{cssxref("white-space")}} auf `nowrap`, wenn der Überlauf in Inline-Richtung erfolgt.
- Wenn Überlauf in eine Richtung (`overflow-x` oder `overflow-y`) auf `visible` gesetzt wird und nicht auch in der anderen Richtung auf `visible` oder `clip` gesetzt ist, verhält sich der `visible`-Wert wie `auto`.
- Wenn Überlauf in eine Richtung auf `clip` gesetzt wird und nicht auch in der anderen Richtung auf `visible` oder `clip` gesetzt ist, verhält sich der `clip`-Wert wie `hidden`.
- Die JavaScript-Eigenschaft [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop) kann verwendet werden, um durch Inhalte in einem Scroll-Container zu scrollen, außer wenn `overflow` auf `clip` gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Ein scrollender Inhaltsbereich ist nicht per Tastatur fokussierbar, sodass er von einem Benutzer, der nur die Tastatur nutzt, nicht gescrollt werden kann. Firefox und Chrome Version 132 und später sind Ausnahmen; sie machen Scroll-Container standardmäßig fokussierbar.

Bei anderen Browsern müssen Sie, um nur Tastaturbenutzern das Scrollen im Container zu ermöglichen, dem Container ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) mit `tabindex="0"` zuweisen. Leider kann es vorkommen, dass ein Screenreader bei diesem Tab-Stopp keinen Kontext über den Container hat und möglicherweise den gesamten Inhalt des Containers ansagt. Um dies zu entschärfen, geben Sie dem Container eine entsprechende [WAI-ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) (`role="region"`, zum Beispiel) und einen zugänglichen Namen (über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)).

## Beispiele

### Darstellung der Ergebnisse verschiedener Overflow-Schlüsselwörter

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
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [Tastaturgesteuerte Scrollbereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
