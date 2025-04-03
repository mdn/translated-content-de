---
title: overflow
slug: Web/CSS/overflow
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die **`overflow`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt das gewünschte Verhalten fest, wenn Inhalte nicht in die Rahmenbox des Elements passen (also überlaufen) und das sowohl in horizontaler als auch in vertikaler Richtung.

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

## Bestandteile der Eigenschaften

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

Die `overflow`-Eigenschaft wird als ein oder zwei {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwerte angegeben. Wenn nur ein Schlüsselwort angegeben wird, erhalten sowohl `overflow-x` als auch `overflow-y` denselben Wert. Wenn zwei Schlüsselwörter angegeben werden, gilt der erste Wert für `overflow-x` in der horizontalen Richtung und der zweite für `overflow-y` in der vertikalen Richtung.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb der Rahmenbox des Elements sichtbar sein. Die Elementbox ist kein {{Glossary("scroll_container", "Scroll-Container")}}. Dies ist der Standardwert der `overflow`-Eigenschaft.
- `hidden`
  - : Überlaufender Inhalt wird an der Rahmenbox des Elements abgeschnitten. Es gibt keine Scrollbalken, und der abgeschnittene Inhalt ist nicht sichtbar (d.h. der abgeschnittene Inhalt ist verborgen), aber der Inhalt existiert weiterhin. Benutzeragenten fügen keine Scrollbalken hinzu und erlauben es den Benutzern auch nicht, den Inhalt außerhalb des abgeschnittenen Bereichs durch Aktionen wie Ziehen auf einem Touchscreen oder Verwenden des Scrollrads einer Maus anzuzeigen. Der Inhalt _kann_ programmatisch gescrollt werden (zum Beispiel durch Verlinken auf Ankertext, durch Tabwechsel zu einem verborgenen, aber fokussierbaren Element oder durch Setzen des Werts der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) Eigenschaft oder der Methode [`scrollTo()`](/de/docs/Web/API/Element/scrollTo)), wobei die Elementbox ein Scroll-Container ist.
- `clip`
  - : Überlaufender Inhalt wird an der _Überlauf-Abschneidekante_ des Elements abgeschnitten, die mit der Eigenschaft [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin) definiert wird. Dadurch ragt der Inhalt außerhalb der Rahmenbox des Elements um den {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin` oder um `0px`, wenn nicht gesetzt, hervor. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keinen Scrollbalken hinzu, und auch das programmatische Scrollen wird nicht unterstützt. Es wird kein neues [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt. Um einen Formatierungskontext zu etablieren, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Die Elementbox ist kein Scroll-Container.
- `scroll`
  - : Überlaufender Inhalt wird an der Rahmenbox des Elements abgeschnitten, und der überlaufende Inhalt kann mit Scrollbalken in den Ansichtsbereich gescrollt werden. Benutzeragenten zeigen Scrollbalken an, unabhängig davon, ob Inhalt überläuft oder nicht, also sowohl in horizontaler als auch in vertikaler Richtung, wenn der Wert in beide Richtungen angewendet wird. Die Verwendung dieses Schlüsselworts kann daher verhindern, dass Scrollbalken erscheinen und verschwinden, während sich der Inhalt ändert. Drucker können weiterhin überlaufenden Inhalt drucken. Die Elementbox ist ein Scroll-Container.
- `auto`
  - : Überlaufender Inhalt wird an der Rahmenbox des Elements abgeschnitten, und der überlaufende Inhalt kann mit Scrollbalken in den Ansichtsbereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten die Scrollbalken _nur dann_ an, wenn der Inhalt überläuft. Wenn der Inhalt in die Rahmenbox des Elements passt, sieht es genauso aus wie bei `visible`, erstellt jedoch immer noch einen neuen Formatierungskontext. Die Elementbox ist ein Scroll-Container.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veraltetes Alias für `auto`. Bei Verwendung von `overlay` werden Scrollbalken über dem Inhalt gezeichnet, anstatt Platz zu beanspruchen.

## Beschreibung

Überlaufoptionen umfassen das Verbergen von überlaufendem Inhalt, das Aktivieren von Scrollbalken zum Anzeigen von überlaufendem Inhalt oder das Anzeigen des in ein Elementkasten herausfließenden Inhalts in die umgebende Umgebung und Kombinationen davon.

Die folgenden Feinheiten sollten beachtet werden, wenn die verschiedenen Schlüsselwörter für `overflow` verwendet werden:

- Die Angabe eines anderen Werts als `visible` (dem Standardwert) oder `clip` für `overflow` erstellt einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Dies ist aus technischen Gründen notwendig; wenn ein Floatelement mit einem Scrollelement interagiert, würde es den Inhalt nach jedem Scrollschritt zwangsweise umwickeln, was zu einem langsamen Scrollerlebnis führen würde.
- Um den gewünschten Effekt zu erzielen, muss das Block-Element entweder eine festgelegte Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) für vertikalen Überlauf haben, eine festgelegte Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}) für horizontalen Überlauf, eine festgelegte Blockgröße (({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}) für Überlauf in Blockrichtung oder eine festgelegte Inline-Größe (({{cssxref("inline-size")}} oder {{cssxref("max-inline-size")}}) oder {{cssxref("white-space")}} auf `nowrap` setzen für Überlauf in Innlinierichtung.
- Wenn overflow in einer Richtung auf `visible` gesetzt wird (d.h. `overflow-x` oder `overflow-y`), während es in der anderen Richtung nicht auf `visible` oder `clip` gesetzt ist, verhält sich der `visible`-Wert wie `auto`.
- Wenn overflow in einer Richtung auf `clip` gesetzt wird, während es in der anderen Richtung nicht auf `visible` oder `clip` gesetzt ist, verhält sich der `clip`-Wert wie `hidden`.
- Die JavaScript-Eigenschaft [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop) kann verwendet werden, um durch den Inhalt in einem Scroll-Container zu scrollen, außer wenn `overflow` auf `clip` gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Ein scrollbarer Inhaltsbereich kann von einem Benutzer, der nur die Tastatur verwendet, nicht gescrollt werden, mit Ausnahme von Benutzern auf Firefox (der den Container standardmäßig tastaturfokussierbar macht).

Als Entwickler müssen Sie, um das Scrollen des Containers für nicht Firefox-Keyboard-Only-Benutzer zu ermöglichen, diesem einen [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) mit `tabindex="0"` zuweisen. Leider wird, wenn ein Screenreader auf diesen Tabstop stößt, der gesamte Inhalt angesagt, da der Screenreader keinen Kontext dafür hat. Eine geeignete [WAI-ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) (`role="region"`, zum Beispiel) und einen zugänglichen Namen (über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)) zuweisen, kann dies mildern.

## Beispiele

### Ergebnisse von verschiedenen Overflow-Schlüsselwörtern zeigen

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

{{EmbedLiveSample("Ergebnisse von verschiedenen Overflow-Schlüsselwörtern zeigen", "500", "620")}}

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
- [Nur-Tastatur-Scrolling-Bereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
