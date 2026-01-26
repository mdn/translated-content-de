---
title: overflow
slug: Web/CSS/Reference/Properties/overflow
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`overflow`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt das gewünschte Verhalten fest, wenn Inhalt in der horizontalen und/oder vertikalen Richtung nicht in den Padding-Bereich des Elements passt (überläuft).

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

## Einzelne Eigenschaften

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
overflow: hidden visible;

/* Global values */
overflow: inherit;
overflow: initial;
overflow: revert;
overflow: revert-layer;
overflow: unset;
```

Die `overflow`-Eigenschaft wird als ein oder zwei {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwerte angegeben. Wenn nur ein Schlüsselwort angegeben wird, werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Wenn zwei Schlüsselwörter angegeben werden, gilt der erste Wert für `overflow-x` in horizontaler Richtung und der zweite für `overflow-y` in vertikaler Richtung.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Padding-Bereichs des Elements sichtbar sein. Das Element ist kein {{Glossary("scroll_container", "Scroll-Container")}}. Dies ist der Standardwert der `overflow`-Eigenschaft.
- `hidden`
  - : Überlaufender Inhalt wird im Padding-Bereich des Elements abgeschnitten. Es gibt keine Scroll-Leisten, und der abgeschnittene Inhalt ist nicht sichtbar (d.h. der abgeschnittene Inhalt ist verborgen), aber der Inhalt existiert weiterhin. Benutzeragenten fügen keine Scroll-Leisten hinzu und erlauben den Benutzern auch nicht, den Inhalt außerhalb des abgeschnittenen Bereichs durch Aktionen wie Dragging auf einem Touchscreen oder Verwendung des Scrollrads an einer Maus zu sehen. Der Inhalt _kann_ programmgesteuert gescrollt werden (zum Beispiel durch Verlinken auf Ankertext, durch Fokussieren eines verborgenen, aber fokussierbaren Elements oder durch Setzen des Wertes der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)-Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo)-Methode), in diesem Fall ist das Element ein Scroll-Container.
- `clip`
  - : Überlaufender Inhalt wird am _Überlaufcliprand_ des Elements abgeschnitten, der mit der {{cssxref("overflow-clip-margin")}}-Eigenschaft definiert ist. Infolgedessen überläuft der Inhalt den Padding-Bereich des Elements um den {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin` oder um `0px`, wenn nicht festgelegt. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keine Scroll-Leiste hinzu und programmgesteuertes Scrollen wird ebenfalls nicht unterstützt. Es wird kein neuer [Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt. Um einen Formatierungskontext zu erstellen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Das Element ist kein Scroll-Container.
- `scroll`
  - : Überlaufender Inhalt wird im Padding-Bereich des Elements abgeschnitten, und überlaufender Inhalt kann mittels Scroll-Leisten in den sichtbaren Bereich gescrollt werden. Benutzeragenten zeigen Scroll-Leisten unabhängig davon an, ob Inhalt überläuft, also sowohl in horizontaler als auch in vertikaler Richtung, wenn der Wert für beide Richtungen gilt. Die Verwendung dieses Schlüsselworts kann somit verhindern, dass Scroll-Leisten erscheinen und verschwinden, wenn sich der Inhalt ändert. Drucker können immer noch überlaufende Inhalte drucken. Das Element ist ein Scroll-Container.
- `auto`
  - : Überlaufender Inhalt wird im Padding-Bereich des Elements abgeschnitten, und überlaufender Inhalt kann mittels Scroll-Leisten in den sichtbaren Bereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scroll-Leisten _nur dann_ an, wenn der Inhalt überläuft. Wenn der Inhalt in den Padding-Bereich des Elements passt, sieht es genauso aus wie bei `visible`, erstellt jedoch trotzdem einen neuen Formatierungskontext. Das Element ist ein Scroll-Container.

> [!NOTE]
> Der Schlüsselwert `overlay` ist ein veralteter Wertalias für `auto`. Mit `overlay` werden die Scroll-Leisten über dem Inhalt gezeichnet, anstatt Platz einzunehmen.

## Beschreibung

Überlaufoptionen umfassen das Verbergen von Überlaufinhalt, das Aktivieren von Scroll-Leisten, um Überlaufinhalt anzuzeigen, oder das Anzeigen von Inhalt, der aus einem Elementbereich in den umliegenden Bereich fließt, sowie Kombinationen davon.

Die folgenden Nuancen sollten beim Verwenden der verschiedenen Schlüsselwörter für `overflow` beachtet werden:

- Das Angeben eines anderen Wertes als `visible` (dem Standardwert) oder `clip` für `overflow` erstellt einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context). Dies ist aus technischen Gründen erforderlich; wenn ein Float mit einem scrollenden Element kollidiert, würde er den Inhalt nach jedem Scroll-Schritt erneut umbrechen, was zu einem langsamen Scroll-Erlebnis führen würde.
- Damit eine `overflow`-Einstellung den gewünschten Effekt erzielt, muss das Block-Element entweder eine festgelegte Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) haben, wenn der Überlauf in der vertikalen Richtung ist, eine festgelegte Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}) wenn der Überlauf in der horizontalen Richtung ist, eine festgelegte Block-Größe ({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}) wenn der Überlauf in der Blockrichtung ist, oder eine festgelegte Inline-Größe ({{cssxref("inline-size")}} oder {{cssxref("max-inline-size")}}) oder {{cssxref("white-space")}} auf `nowrap` gesetzt, wenn der Überlauf in der Inline-Richtung ist.
- Das Setzen des Überlaufs auf `visible` in einer Richtung (d.h. `overflow-x` oder `overflow-y`), wenn dieser Wert in der anderen Richtung nicht auf `visible` oder `clip` gesetzt ist, führt dazu, dass der `visible`-Wert sich wie `auto` verhält.
- Das Setzen des Überlaufs auf `clip` in einer Richtung, wenn dieser Wert in der anderen Richtung nicht auf `visible` oder `clip` gesetzt ist, führt dazu, dass der `clip`-Wert sich wie `hidden` verhält.
- Die JavaScript-Eigenschaft [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop) kann verwendet werden, um durch Inhalte in einem Scroll-Container zu scrollen, es sei denn, `overflow` ist auf `clip` gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Ein scrollbarer Inhaltsbereich ist nicht über die Tastatur fokussierbar, daher kann er von einem reinen Tastaturbenutzer nicht gescrollt werden. Firefox und Chrome ab Version 132 sind Ausnahmen; sie machen Scroll-Container standardmäßig fokussierbar.

Für andere Browser müssen Sie, um es Tastaturbenutzern zu ermöglichen, den Container zu scrollen, diesem einen [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) zuweisen, indem Sie `tabindex="0"` setzen. Leider kann ein Screenreader bei Erreichen dieses Tab-Stops möglicherweise keinen Kontext über den Container haben und könnte den gesamten Inhalt des Containers ansagen. Um dies abzumildern, sollten Sie dem Container eine geeignete [WAI-ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) zuweisen (z.B. `role="region"`) und einen zugänglichen Namen (über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)).

## Beispiele

### Demonstration der Ergebnisse verschiedener Schlüsselwörter für overflow

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
- SVG {{SVGAttr("overflow")}}-Attribut
- [CSS overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
- [Nur Tastatur-Scrollbereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
