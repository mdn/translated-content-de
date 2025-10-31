---
title: overflow
slug: Web/CSS/Reference/Properties/overflow
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`overflow`**-[CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt das gewünschte Verhalten fest, wenn der Inhalt nicht in den Padding-Bereich des Elements passt (überläuft) in horizontaler und/oder vertikaler Richtung.

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

- [`overflow-x`](/de/docs/Web/CSS/Reference/Properties/overflow-x)
- [`overflow-y`](/de/docs/Web/CSS/Reference/Properties/overflow-y)

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

Die `overflow`-Eigenschaft wird als eines oder zwei {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Keyword-Werte angegeben. Wenn nur ein Keyword angegeben ist, werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Werden zwei Keywords angegeben, gilt der erste Wert für `overflow-x` in horizontaler Richtung und der zweite für `overflow-y` in vertikaler Richtung.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Padding-Bereichs des Elements sichtbar sein. Die Elementbox ist kein {{Glossary("scroll_container", "scroll container")}}. Dies ist der Standardwert der `overflow`-Eigenschaft.
- `hidden`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements abgeschnitten. Es gibt keine Scrollbalken und der abgeschnittene Inhalt ist nicht sichtbar (d.h., der abgeschnittene Inhalt ist verborgen), aber der Inhalt existiert weiterhin. Benutzeragenten fügen keine Scrollbalken hinzu und erlauben Benutzern nicht, den Inhalt außerhalb des abgeschnittenen Bereichs durch Aktionen wie Ziehen auf einem Touchscreen oder Verwenden des Scrollrads einer Maus anzuzeigen. Der Inhalt _kann_ programmgesteuert gescrollt werden (zum Beispiel durch Verlinken zu Ankertext, durch Wechseln zu einem verborgenen, aber fokussierbaren Element oder durch Setzen des Wertes der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)-Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo)-Methode), in diesem Fall ist die Elementbox ein Scroll-Container.
- `clip`
  - : Überlaufender Inhalt wird an der _Overflow-Clip-Kante_ des Elements abgeschnitten, die mit der [`overflow-clip-margin`](/de/docs/Web/CSS/Reference/Properties/overflow-clip-margin)-Eigenschaft definiert wird. Infolgedessen überläuft der Inhalt den Padding-Bereich des Elements um den {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin` oder um `0px`, wenn nicht gesetzt. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keinen Scrollbalken hinzu, und programmgesteuertes Scrollen wird ebenfalls nicht unterstützt. Es wird kein neuer [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt. Um einen Formatierungskontext zu schaffen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Die Elementbox ist kein Scroll-Container.
- `scroll`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements abgeschnitten, und überlaufender Inhalt kann mit Scrollbalken in den Sichtbereich gescrollt werden. Benutzeragenten zeigen Scrollbalken an, unabhängig davon, ob Inhalt überläuft oder nicht, also in horizontaler und vertikaler Richtung, wenn der Wert auf beide Richtungen zutrifft. Die Verwendung dieses Keywords kann daher verhindern, dass Scrollbalken erscheinen und verschwinden, wenn sich der Inhalt ändert. Drucker könnten jedoch überlaufenden Inhalt dennoch drucken. Die Elementbox ist ein Scroll-Container.
- `auto`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements abgeschnitten, und überlaufender Inhalt kann mit Scrollbalken in den Sichtbereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollbalken _nur an_, wenn der Inhalt überläuft. Wenn der Inhalt in den Padding-Bereich des Elements passt, sieht es genauso aus wie mit `visible`, erstellt jedoch dennoch einen neuen Formatierungskontext. Die Elementbox ist ein Scroll-Container.

> [!NOTE]
> Der Keyword-Wert `overlay` ist ein veralteter Wertalias für `auto`. Mit `overlay` werden die Scrollbalken über dem Inhalt gezeichnet, anstatt Platz einzunehmen.

## Beschreibung

Überlaufoptionen umfassen das Verbergen von Überlaufinhalten, das Aktivieren von Scrollbalken, um Überlaufinhalte anzuzeigen, oder das Anzeigen des Inhalts, der aus einer Elementbox in den umgebenden Bereich fließt, und Kombinationen davon.

Die folgenden Nuancen sollten berücksichtigt werden, wenn die verschiedenen Keywords für `overflow` genutzt werden:

- Die Angabe eines Wertes, der nicht `visible` (der Standardwert) oder `clip` ist, für `overflow` erzeugt einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Dies ist aus technischen Gründen notwendig: Wenn ein Float mit einem scrollenden Element kolidiert, würde es den Inhalt nach jedem Scrollschritt zwangsweise umwickeln, was zu einem langsamen Scroll-Erlebnis führen würde.
- Damit eine `overflow`-Einstellung den gewünschten Effekt erzielt, muss das Block-Level-Element entweder eine feste Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) haben, wenn der Überlauf in vertikaler Richtung erfolgt, eine feste Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}), wenn der Überlauf in horizontaler Richtung erfolgt, eine feste Blockgröße ({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}), wenn der Überlauf in Blockrichtung erfolgt, oder eine feste Inline-Größe ({{cssxref("inline-size")}} oder {{cssxref("max-inline-size")}}) oder {{cssxref("white-space")}} auf `nowrap` gesetzt, wenn der Überlauf in Inline-Richtung erfolgt.
- Das Setzen von Overflow auf `visible` in einer Richtung (d.h. `overflow-x` oder `overflow-y`), wenn es in der anderen Richtung nicht auf `visible` oder `clip` gesetzt ist, führt dazu, dass der `visible`-Wert sich wie `auto` verhält.
- Das Setzen von Overflow auf `clip` in einer Richtung, wenn es in der anderen Richtung nicht auf `visible` oder `clip` gesetzt ist, führt dazu, dass sich der `clip`-Wert wie `hidden` verhält.
- Die JavaScript-Eigenschaft [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop) kann verwendet werden, um durch Inhalt in einem Scroll-Container zu scrollen, außer wenn `overflow` auf `clip` gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Ein scrollender Inhaltsbereich ist nicht über die Tastatur fokussierbar, daher kann er von einem Benutzer, der nur die Tastatur verwendet, nicht gescrollt werden. Firefox und Chrome 132 und höher sind Ausnahmen; sie machen Scroll-Container standardmäßig fokussierbar.

Für andere Browser müssen Sie einem Container einen [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) zuweisen, indem Sie `tabindex="0"` setzen, um es Tastaturbenutzern zu ermöglichen, den Container zu scrollen. Leider hat ein Screenreader, wenn er auf diese Tabulatorstopp stößt, möglicherweise keinen Kontext über den Container und könnte wahrscheinlich den gesamten Inhalt des Containers ansagen. Um dem entgegenzuwirken, geben Sie dem Container eine geeignete [WAI-ARIA Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) (`role="region"`, zum Beispiel) und einen zugänglichen Namen (über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)).

## Beispiele

### Darstellung der Ergebnisse verschiedener Overflow-Keywords

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
- [Keyboard-only scrolling areas](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
