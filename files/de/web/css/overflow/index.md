---
title: overflow
slug: Web/CSS/overflow
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`overflow`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt das gewünschte Verhalten fest, wenn der Inhalt nicht in die Padding-Box des Elements passt (überläuft) und zwar in horizontaler und/oder vertikaler Richtung.

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

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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

Die `overflow`-Eigenschaft wird als ein oder zwei {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwerte angegeben. Wird nur ein Schlüsselwort angegeben, werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Bei Angabe von zwei Schlüsselwörtern gilt der erste Wert für `overflow-x` in horizontaler Richtung und der zweite für `overflow-y` in vertikaler Richtung.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb der Padding-Box des Elements sichtbar sein. Die Element-Box ist kein {{Glossary("scroll_container", "Scroll-Container")}}. Dies ist der Standardwert der `overflow`-Eigenschaft.
- `hidden`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten. Es gibt keine Scrollbars, und der abgeschnittene Inhalt ist nicht sichtbar (d.h. der abgeschnittene Inhalt ist verborgen), aber der Inhalt existiert weiterhin. Benutzeragenten fügen keine Scrollbars hinzu und erlauben Benutzern auch nicht, den Inhalt außerhalb des abgeschnittenen Bereichs durch Aktionen wie Ziehen auf einem Touchscreen oder Verwenden des Scrollrads einer Maus anzuzeigen. Der Inhalt _kann_ programmgesteuert gescrollt werden (zum Beispiel durch Verlinken auf Ankertext, durch Tabben zu einem verborgenen, aber fokussierbaren Element oder durch Setzen des Wertes der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)-Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo)-Methode), in diesem Fall ist die Element-Box ein Scroll-Container.
- `clip`
  - : Überlaufender Inhalt wird an der _Überlaufclip-Kante_ des Elements abgeschnitten, die mit der [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin)-Eigenschaft definiert wird. Dadurch überläuft der Inhalt die Padding-Box des Elements um den {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin` oder um `0px`, wenn nicht festgelegt. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keine Scrollbar hinzu, und programmgesteuertes Scrollen wird ebenfalls nicht unterstützt. Es wird kein neuer [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt. Um einen Formatierungskontext zu erstellen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Die Element-Box ist kein Scroll-Container.
- `scroll`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten, und überlaufender Inhalt kann mithilfe von Scrollbars in den sichtbaren Bereich gescrollt werden. Benutzeragenten zeigen Scrollbars an, unabhängig davon, ob Inhalt überläuft oder nicht, also in den horizontalen und vertikalen Richtungen, wenn der Wert auf beide Richtungen angewendet wird. Die Verwendung dieses Schlüsselworts kann daher verhindern, dass Scrollbars erscheinen und verschwinden, wenn sich der Inhalt ändert. Drucker können dennoch überlaufenden Inhalt drucken. Die Element-Box ist ein Scroll-Container.
- `auto`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten, und überlaufender Inhalt kann mithilfe von Scrollbars in den sichtbaren Bereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollbars _nur an_, wenn der Inhalt überläuft. Wenn der Inhalt in die Padding-Box des Elements passt, sieht es aus wie mit `visible`, erstellt jedoch dennoch einen neuen Formatierungskontext. Die Element-Box ist ein Scroll-Container.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veraltetes Alias für `auto`. Mit `overlay` werden die Scrollbars über dem Inhalt angezeigt, anstatt Platz einzunehmen.

## Beschreibung

Überlaufsoptionen umfassen das Verbergen von Überlaufinhalten, das Aktivieren von Scrollbars zur Ansicht von Überlaufinhalten oder das Anzeigen von Inhalten, die aus einer Element-Box in den umliegenden Bereich fließen und Kombinationen daraus.

Die folgenden Nuancen sollten berücksichtigt werden, wenn die verschiedenen Schlüsselwörter für `overflow` verwendet werden:

- Das Angeben eines anderen Werts als `visible` (Standard) oder `clip` für `overflow` erstellt einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Dies ist aus technischen Gründen notwendig; wenn ein Float mit einem scrollenden Element überlappt, würde es den Inhalt nach jedem Scrollschritt erneut umhüllen, was zu einem langsamen Scrollerlebnis führen würde.
- Damit eine `overflow`-Einstellung den gewünschten Effekt erzielt, muss das Block-Level-Element eine festgelegte Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) haben, wenn der Überlauf in vertikaler Richtung erfolgt, eine festgelegte Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}) in horizontaler Richtung, ein festgelegter Blockgröße (({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}) wenn der Überlauf in Block-Richtung erfolgt, oder eine festgelegte Inline-Größe (({{cssxref("inline-size")}} oder {{cssxref("max-inline-size")}}) oder {{cssxref("white-space")}} auf `nowrap` gesetzt, wenn der Überlauf in Inline-Richtung erfolgt.
- Das Setzen von Überlauf auf `visible` in eine Richtung (d.h. `overflow-x` oder `overflow-y`), wenn es in der anderen Richtung nicht auf `visible` oder `clip` gesetzt ist, führt dazu, dass der `visible`-Wert sich wie `auto` verhält.
- Das Setzen von Überlauf auf `clip` in eine Richtung, wenn es in der anderen Richtung nicht auf `visible` oder `clip` gesetzt ist, führt dazu, dass sich der `clip`-Wert wie `hidden` verhält.
- Die JavaScript [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop)-Eigenschaft kann verwendet werden, um durch den Inhalt in einem Scroll-Container zu scrollen, es sei denn, `overflow` ist auf `clip` gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Ein scrollender Inhaltsbereich kann von einem reinen Tastaturbenutzer nicht gescrollt werden, mit Ausnahme von Benutzern auf Firefox (welcher den Container standardmäßig durch die Tastatur fokussierbar macht).

Als Entwickler müssen Sie, um Nicht-Firefox-Tastaturbenutzern das Scrollen des Containers zu ermöglichen, ihm ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) mit `tabindex="0"` geben. Leider haben Screenreader bei Erreichen dieser Tab-Stopp-Stelle keinen Kontext dafür, was sie ist, und ihr Screenreader wird wahrscheinlich den gesamten Inhalt ankündigen. Dies kann durch die Vergabe einer entsprechenden [WAI-ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) (`role="region"`, zum Beispiel) und eines zugänglichen Namens (über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)) gemildert werden.

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

{{EmbedLiveSample("Darstellung der Ergebnisse verschiedener Overflow-Schlüsselwörter", "500", "620")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}
- {{Cssxref("overflow-block")}}, {{Cssxref("overflow-clip-margin")}}, {{Cssxref("overflow-inline")}}
- {{Cssxref("clip")}}, {{Cssxref("display")}}, {{cssxref("text-overflow")}}, {{cssxref("white-space")}}
- SVG {{SVGAttr("overflow")}}-Attribut
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow)-Modul
- [Tastaturbasierte Scrollbereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
