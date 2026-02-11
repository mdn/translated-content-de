---
title: overflow
slug: Web/CSS/Reference/Properties/overflow
l10n:
  sourceCommit: 08fc6e4e0c44d7e840ae42e5911d9e721a99d336
---

Die **`overflow`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt das gewünschte Verhalten fest, wenn der Inhalt nicht in den Randabstand des Elements passt (überläuft) in der horizontalen und/oder vertikalen Richtung.

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

## Bestandteile

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

Die `overflow`-Eigenschaft wird als ein oder zwei {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwerte spezifiziert. Wenn nur ein Schlüsselwort angegeben wird, werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Wenn zwei Schlüsselwörter angegeben werden, gilt der erste Wert für `overflow-x` in der horizontalen Richtung und der zweite für `overflow-y` in der vertikalen Richtung.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Randabstandes des Elements sichtbar sein. Die Elementbox ist kein {{Glossary("scroll_container", "Scroll-Container")}}. Dies ist der Standardwert der `overflow`-Eigenschaft.
- `hidden`
  - : Überlaufender Inhalt wird am Randabstand des Elements abgeschnitten. Es gibt keine Scrollleisten, und der abgeschnittene Inhalt ist nicht sichtbar (d.h. der abgeschnittene Inhalt ist versteckt), aber der Inhalt existiert weiterhin. Benutzeragenten fügen keine Scrollleisten hinzu und erlauben auch nicht, dass Benutzer den Inhalt außerhalb des abgeschnittenen Bereichs durch Aktionen wie Ziehen auf einem Touchscreen oder Verwenden des Scrollrads einer Maus betrachten. Der Inhalt kann jedoch programmgesteuert gescrollt werden (z. B. durch Verlinken auf Ankertext, durch Tabben zu einem versteckten, aber fokussierbaren Element oder durch Setzen des Werts der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)-Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo)-Methode), in diesem Fall ist die Elementbox ein Scroll-Container.
- `clip`
  - : Überlaufender Inhalt wird an der _overflow clip edge_ des Elements abgeschnitten, die mit der Eigenschaft {{cssxref("overflow-clip-margin")}} definiert wird. Dadurch überläuft der Inhalt den Randabstand des Elements um den {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin` oder um `0px`, wenn nicht gesetzt. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keine Scrollleiste hinzu, und programmgesteuertes Scrollen wird ebenfalls nicht unterstützt. Es wird kein neuer [Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt. Um einen Formatierungskontext zu erstellen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Die Elementbox ist kein Scroll-Container.
- `scroll`
  - : Überlaufender Inhalt wird am Randabstand des Elements abgeschnitten, und Überlaufinhalt kann mithilfe von Scrollleisten in den sichtbaren Bereich gescrollt werden. Benutzeragenten zeigen Scrollleisten an, unabhängig davon, ob Inhalt überläuft oder nicht, also in den horizontalen und vertikalen Richtungen, falls der Wert auf beide Richtungen zutrifft. Durch die Verwendung dieses Schlüsselworts kann verhindert werden, dass Scrollleisten erscheinen und verschwinden, wenn sich der Inhalt ändert. Drucker können dennoch überlaufenden Inhalt drucken. Die Elementbox ist ein Scroll-Container.
- `auto`
  - : Überlaufender Inhalt wird am Randabstand des Elements abgeschnitten, und Überlaufinhalt kann mithilfe von Scrollleisten in den sichtbaren Bereich gescrollt werden. Anders als bei `scroll` zeigen Benutzeragenten Scrollleisten _nur an_, wenn der Inhalt überläuft. Wenn der Inhalt in den Randabstand des Elements passt, sieht es aus wie bei `visible`, aber es wird dennoch ein neuer Formatierungskontext erstellt. Die Elementbox ist ein Scroll-Container.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veraltetes Wertäquivalent für `auto`. Bei `overlay` werden die Scrollleisten über dem Inhalt gezeichnet, anstatt Platz zu beanspruchen.

## Beschreibung

Überlaufoptionen umfassen das Verbergen von Überlaufinhalt, das Aktivieren von Scrollleisten, um Überlaufinhalt anzuzeigen, oder das Anzeigen des Inhalts, der aus einer Elementbox in den umgebenden Bereich fließt, sowie deren Kombinationen.

Die folgenden Nuancen sollten beim Verwenden der verschiedenen Schlüsselwörter für `overflow` beachtet werden:

- Das Festlegen eines anderen Werts als `visible` (dem Standardwert) oder `clip` für `overflow` erstellt einen neuen [block-formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context). Dies ist aus technischen Gründen notwendig; wenn ein Float ein rollendes Element schneidet, würde es den Inhalt nach jedem Scrollschritt zwangsweise neu umbrechen, was zu einem langsamen Scroll-Erlebnis führen würde.
- Damit eine `overflow`-Einstellung die gewünschte Wirkung erzielt, muss das Block-Element entweder eine festgelegte Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) haben, wenn der Überlauf in vertikaler Richtung erfolgt, eine festgelegte Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}) in horizontaler Richtung, eine festgelegte Blockgröße (({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}) bei Überlauf in Blockrichtung, oder eine festgelegte Inline-Größe (({{cssxref("inline-size")}} oder {{cssxref("max-inline-size")}}) oder {{cssxref("white-space")}} auf `nowrap` gesetzt, wenn der Überlauf in Inline-Richtung erfolgt.
- Das Festlegen von overflow auf `visible` in einer Richtung (d.h. `overflow-x` oder `overflow-y`), wenn es nicht in der anderen Richtung auf `visible` oder `clip` festgelegt ist, führt dazu, dass sich der `visible`-Wert wie `auto` verhält.
- Das Festlegen von overflow auf `clip` in einer Richtung, wenn es nicht in der anderen Richtung auf `visible` oder `clip` festgelegt ist, führt dazu, dass sich der `clip`-Wert wie `hidden` verhält.
- Die JavaScript-Eigenschaft [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop) kann verwendet werden, um durch Inhalte in einem Scroll-Container zu scrollen, außer wenn `overflow` auf `clip` gesetzt ist.
- Das Festlegen von `overflow` auf Bildern und anderen {{Glossary("replaced_elements", "ersetzten Elementen")}} funktioniert wie erwartet in Browsern, die das CSS Overflow Module Level 4 unterstützen; in früheren Versionen der Spezifikation wurden ersetzte Elemente immer auf den begrenzenden Container beschnitten.
  Siehe [Browser-Kompatibilität](#browser-kompatibilität) für unterstützende Browser.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Ein scrollbarer Inhaltsbereich ist nicht über die Tastatur fokusierbar, sodass er von einem Benutzer, der nur die Tastatur verwendet, nicht gescrollt werden kann. Firefox und Chrome ab Version 132 sind Ausnahmen; sie machen Scroll-Container standardmäßig fokusierbar.

Für andere Browser müssen Sie einen [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) auf den Container setzen, um es Tastaturbenutzern zu ermöglichen, den Container zu scrollen, indem Sie `tabindex="0"` verwenden. Leider kann es bei einem Screenreader, der auf diesen Tabstopp stößt, an Kontext über den Container fehlen und möglicherweise wird der gesamte Inhalt des Containers angekündigt. Um dies zu mildern, geben Sie dem Container eine geeignete [WAI-ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) (`role="region"`, zum Beispiel) und einen zugänglichen Namen (über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)).

## Beispiele

### Demonstration der Ergebnisse verschiedener `overflow`-Schlüsselwörter

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
- [Nur-Tastatur-Scrollbereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
