---
title: overflow
slug: Web/CSS/overflow
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`overflow`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt das gewünschte Verhalten fest, wenn Inhalt nicht in den Padding-Bereich des Elements passt (überläuft) in horizontaler und/oder vertikaler Richtung.

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

## Bestands-Eigenschaften

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

Die `overflow`-Eigenschaft wird als ein oder zwei {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwort-Werte angegeben. Wenn nur ein Schlüsselwort angegeben ist, werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Wenn zwei Schlüsselwörter angegeben sind, gilt der erste Wert für `overflow-x` in horizontaler Richtung und der zweite für `overflow-y` in vertikaler Richtung.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Padding-Bereichs des Elements sichtbar sein. Das Element-Box ist kein {{Glossary("scroll_container", "Scroll-Container")}}. Dies ist der Standardwert der `overflow`-Eigenschaft.
- `hidden`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten. Es gibt keine Scrollleisten und der abgeschnittene Inhalt ist nicht sichtbar (d.h. der Inhalt wird versteckt), aber der Inhalt existiert weiterhin. Benutzeragenten fügen keine Scrollleisten hinzu und erlauben den Benutzern auch nicht, den Inhalt außerhalb des abgeschnittenen Bereichs durch Aktionen wie Ziehen auf einem Touchscreen oder Verwenden des Scrollrads einer Maus zu betrachten. Der Inhalt _kann_ programmgesteuert gescrollt werden (zum Beispiel durch Verlinken zu Ankertext, tabbing zu einem versteckten, aber fokussierbaren Element oder durch Setzen des Wertes der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)-Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo)-Methode), in diesem Fall ist die Element-Box ein Scroll-Container.
- `clip`
  - : Überlaufender Inhalt wird an der _overflow clip edge_ des Elements abgeschnitten, die mit der [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin) Eigenschaft definiert ist. Daraus ergibt sich, dass Inhalt die Padding-Box des Elements um den {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin` oder um `0px`, falls nicht gesetzt, überschreitet. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keine Scrollleisten hinzu und programmgesteuertes Scrollen wird ebenfalls nicht unterstützt. Es wird kein neuer [Formatierungs-Kontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt. Um einen Formatierungskontext zu schaffen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Die Element-Box ist kein Scroll-Container.
- `scroll`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten, und überlaufender Inhalt kann mit Scrollleisten in den Ansichtsbereich gescrollt werden. Benutzeragenten zeigen Scrollleisten, unabhängig davon, ob Inhalt überläuft oder nicht, also in den horizontalen und vertikalen Richtungen, wenn der Wert für beide Richtungen gilt. Die Verwendung dieses Schlüsselworts kann daher verhindern, dass Scrollleisten erscheinen und verschwinden, wenn sich der Inhalt ändert. Drucker können jedoch weiterhin überlaufenden Inhalt drucken. Die Element-Box ist ein Scroll-Container.
- `auto`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten, und überlaufender Inhalt kann mit Scrollleisten in den Ansichtsbereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollleisten _nur dann an_, wenn Inhalt überläuft. Wenn der Inhalt in den Padding-Bereich des Elements passt, sieht es aus wie bei `visible`, stellt aber dennoch einen neuen Formatierungskontext her. Die Element-Box ist ein Scroll-Container.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veralteter Wert-Alias für `auto`. Mit `overlay` werden die Scrollleisten über dem Inhalt gezeichnet, anstatt Platz einzunehmen.

## Beschreibung

Überlaufoptionen umfassen das Verstecken von überlaufendem Inhalt, das Aktivieren von Scrollleisten, um überlaufenden Inhalt anzuzeigen, oder das Anzeigen des Inhalts, der aus einer Element-Box in den umgebenden Bereich fließt, sowie deren Kombinationen.

Die folgenden Nuancen sollten bei der Verwendung der verschiedenen Schlüsselwörter für `overflow` beachtet werden:

- Die Angabe eines anderen Werts als `visible` (der Standard) oder `clip` für `overflow` erstellt einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Dies ist aus technischen Gründen notwendig; wenn ein Float ein scrollendes Element schneidet, würde es den Inhalt bei jedem Scroll-Schritt zwangsweise neu umbrechen, was zu einem langsamen Scroll-Erlebnis führen würde.
- Damit eine `overflow`-Einstellung die gewünschte Wirkung entfaltet, muss das Block-Element entweder eine festgelegte Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) haben, wenn der Überlauf in vertikaler Richtung ist, eine festgelegte Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}), wenn der Überlauf in horizontaler Richtung ist, eine festgelegte Blockgröße (({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}), wenn der Überlauf in Blockrichtung ist, oder eine festgelegte Inlinengröße (({{cssxref("inline-size")}} oder {{cssxref("max-inline-size")}}) oder {{cssxref("white-space")}} auf `nowrap` gesetzt sein, wenn der Überlauf in Inlinerichtung ist.
- Wenn `overflow` in einer Richtung (d.h. `overflow-x` oder `overflow-y`) auf `visible` gesetzt wird, wenn es in der anderen Richtung nicht auf `visible` oder `clip` gesetzt ist, verhält sich der `visible`-Wert wie `auto`.
- Wenn `overflow` in einer Richtung auf `clip` gesetzt wird, wenn es in der anderen Richtung nicht auf `visible` oder `clip` gesetzt ist, verhält sich der `clip`-Wert wie `hidden`.
- Die JavaScript [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop)-Eigenschaft kann verwendet werden, um durch Inhalt in einem Scroll-Container zu scrollen, außer wenn `overflow` auf `clip` gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Ein scrollbarer Inhaltsbereich kann nicht von einem user, der ausschließlich die Tastatur verwendet, gescrollt werden, mit der Ausnahme von Benutzern auf Firefox (das macht den Container standardmäßig tastaturfokussierbar).

Als Entwickler sollten Sie, um Tastaturbenutzern, die nicht Firefox verwenden, zu ermöglichen, den Container zu scrollen, ihm ein [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) mit `tabindex="0"` geben. Leider haben Screenreader bei der Begegnung mit dieser Tabulatortaste keinen Kontext dafür, was es ist, und ihr Screenreader wird wahrscheinlich den gesamten Inhalt ansagen. Um dies zu mildern, können Sie ihm eine geeignete [WAI-ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) (`role="region"`, zum Beispiel) und einen zugänglichen Namen (über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)) geben.

## Beispiele

### Darstellung der Ergebnisse verschiedener `overflow` Schlüsselwörter

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

{{EmbedLiveSample("Darstellung der Ergebnisse verschiedener overflow Schlüsselwörter", "500", "620")}}

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
- [Tastatur-exklusive Scroll-Bereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
