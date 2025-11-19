---
title: overflow
slug: Web/CSS/Reference/Properties/overflow
l10n:
  sourceCommit: f28f4c26a3d95e41d01a505af3388881abd6e49c
---

Die **`overflow`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt das gewünschte Verhalten fest, wenn der Inhalt nicht in den Innenabstandskasten des Elements passt (überläuft) und zwar in horizontaler und/oder vertikaler Richtung.

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

Die Eigenschaft `overflow` wird als ein oder zwei {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwerte angegeben. Wenn nur ein Schlüsselwort angegeben wird, werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Wenn zwei Schlüsselwörter angegeben werden, gilt der erste Wert für `overflow-x` in horizontaler Richtung und der zweite Wert für `overflow-y` in vertikaler Richtung.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht beschnitten und kann außerhalb des Innenabstandkastens des Elements sichtbar sein. Die Elementbox ist kein {{Glossary("scroll_container", "Scroll-Container")}}. Dies ist der Standardwert der Eigenschaft `overflow`.
- `hidden`
  - : Überlaufender Inhalt wird am Innenabstandskasten des Elements beschnitten. Es gibt keine Bildlaufleisten und der beschnittene Inhalt ist nicht sichtbar (d.h. der beschnittene Inhalt ist verborgen), aber der Inhalt existiert dennoch. Benutzeragenten fügen keine Bildlaufleisten hinzu und ermöglichen es den Benutzern auch nicht, den Inhalt außerhalb des beschnittenen Bereichs durch Aktionen wie Ziehen auf einem Touchscreen oder Verwenden des Scrollrads auf einer Maus anzuzeigen. Der Inhalt _kann_ programmatisch gescrollt werden (zum Beispiel durch Verlinken zu Ankertext, durch Tabben zu einem verborgenen aber fokussierbaren Element oder durch Einstellen des Werts der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode), wobei in diesem Fall die Elementbox ein Scroll-Container ist.
- `clip`
  - : Überlaufender Inhalt wird am _overflow clip edge_ des Elements beschnitten, der mit der Eigenschaft [`overflow-clip-margin`](/de/docs/Web/CSS/Reference/Properties/overflow-clip-margin) definiert wird. Infolgedessen überläuft der Inhalt den Innenabstandskasten des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin` oder um `0px`, wenn nicht gesetzt. Überlaufender Inhalt außerhalb des beschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keine Bildlaufleiste hinzu, und programmatisches Scrollen wird ebenfalls nicht unterstützt. Es wird kein neuer [Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt. Um einen Formatierungskontext zu etablieren, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Die Elementbox ist kein Scroll-Container.
- `scroll`
  - : Überlaufender Inhalt wird am Innenabstandskasten des Elements beschnitten und kann durch Bildlaufleisten sichtbar gemacht werden. Benutzeragenten zeigen Bildlaufleisten unabhängig davon an, ob ein Inhalt überläuft oder nicht, also in horizontaler und vertikaler Richtung, wenn der Wert auf beide Richtungen zutrifft. Die Verwendung dieses Schlüsselworts kann daher verhindern, dass Bildlaufleisten erscheinen und verschwinden, während sich der Inhalt ändert. Drucker können dennoch überlaufenden Inhalt drucken. Die Elementbox ist ein Scroll-Container.
- `auto`
  - : Überlaufender Inhalt wird am Innenabstandskasten des Elements beschnitten und kann durch Bildlaufleisten sichtbar gemacht werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Bildlaufleisten _nur dann_ an, wenn der Inhalt überläuft. Wenn der Inhalt in den Innenabstandskasten des Elements passt, sieht es genauso aus wie bei `visible`, hat jedoch weiterhin einen neuen Formatierungskontext. Die Elementbox ist ein Scroll-Container.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veraltetes Wertalias für `auto`. Bei `overlay` werden die Bildlaufleisten über dem Inhalt gezeichnet anstatt Platz einzunehmen.

## Beschreibung

Überlaufoptionen umfassen das Verbergen von Überlaufinhalten, das Aktivieren von Bildlaufleisten zum Anzeigen von Überlaufinhalten oder das Anzeigen des Inhalts, der aus einer Elementbox in den umgebenden Bereich fließt, sowie Kombinationen davon.

Die folgenden Feinheiten sollten beachtet werden, wenn Sie die verschiedenen Schlüsselwörter für `overflow` verwenden:

- Das Angeben eines anderen Werts als `visible` (der Standardwert) oder `clip` für `overflow` erstellt einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context). Dies ist aus technischen Gründen notwendig; wenn ein Float ein Scrollelement schneidet, würde es den Inhalt nach jedem Scrollschritt gewaltsam neu umwickeln, was zu einem langsamen Scroll-Erlebnis führen würde.
- Damit eine `overflow`-Einstellung die gewünschte Wirkung erzielt, muss das Block-Element entweder eine festgelegte Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) haben, wenn der Überlauf in der vertikalen Richtung erfolgt, eine festgelegte Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}) haben, wenn der Überlauf in der horizontalen Richtung erfolgt, eine festgelegte Blockgröße ({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}) haben, wenn der Überlauf in Blockrichtung erfolgt, oder eine festgelegte Inline-Größe ({{cssxref("inline-size")}} oder {{cssxref("max-inline-size")}}) haben oder {{cssxref("white-space")}} auf `nowrap` gesetzt, wenn der Überlauf in Inline-Richtung erfolgt.
- Das Setzen von overflow auf `visible` in eine Richtung (d.h. `overflow-x` oder `overflow-y`), wenn es in der anderen Richtung nicht auf `visible` oder `clip` gesetzt ist, führt dazu, dass der Wert `visible` sich wie `auto` verhält.
- Das Setzen von overflow auf `clip` in eine Richtung, wenn es in der anderen Richtung nicht auf `visible` oder `clip` gesetzt ist, führt dazu, dass der Wert `clip` sich wie `hidden` verhält.
- Die JavaScript-Eigenschaft [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop) kann verwendet werden, um durch Inhalte in einem Scroll-Container zu scrollen, außer wenn `overflow` auf `clip` gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Ein scrollbarer Inhaltsbereich ist nicht per Tastatur fokussierbar, sodass er nicht von einem Benutzer, der nur die Tastatur verwendet, gescrollt werden kann. Firefox und Chrome ab Version 132 sind Ausnahmen; sie machen Scroll-Container standardmäßig fokussierbar.

Für andere Browser müssen Sie, um Tastaturbenutzern das Scrollen des Containers zu ermöglichen, dem Container ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) zuweisen, indem Sie `tabindex="0"` verwenden. Leider kann es sein, dass ein Bildschirmlesegerät, wenn es auf diesen Tab-Stopp stößt, keinen Kontext über den Container hat und möglicherweise den gesamten Inhalt des Containers ansagt. Um dies zu mildern, geben Sie dem Container eine geeignete [WAI-ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) (zum Beispiel `role="region"`) und einen zugänglichen Namen (über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)).

## Beispiele

### Ergebnisse verschiedener `overflow`-Schlüsselwörter demonstrieren

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
- [CSS overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
- [Tastatur-Scrollbereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
