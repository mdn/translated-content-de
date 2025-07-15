---
title: overflow
slug: Web/CSS/overflow
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`overflow`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt das gewünschte Verhalten fest, wenn Inhalte nicht in den Innenabstand (Padding-Box) des Elements passen (überlaufen) und dies in horizontaler und/oder vertikaler Richtung geschieht.

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

Die `overflow`-Eigenschaft wird als ein oder zwei {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwerte angegeben. Wenn nur ein Schlüsselwort angegeben wird, setzen `overflow-x` und `overflow-y` denselben Wert. Wenn zwei Schlüsselwörter angegeben werden, wird der erste Wert auf `overflow-x` in der horizontalen Richtung angewendet und der zweite auf `overflow-y` in der vertikalen Richtung.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Innenabstands (Padding-Box) des Elements sichtbar sein. Die Elementbox ist kein {{Glossary("scroll_container", "Scrollcontainer")}}. Dies ist der Standardwert der `overflow`-Eigenschaft.
- `hidden`
  - : Überlaufender Inhalt wird an der Innenabstandskante des Elements abgeschnitten. Es gibt keine Scrollleisten, und der abgeschnittene Inhalt ist nicht sichtbar (d.h. der abgeschnittene Inhalt ist versteckt), aber der Inhalt existiert weiterhin. Web-Browser fügen keine Scrollleisten hinzu und erlauben es den Benutzern auch nicht, den Inhalt außerhalb des abgeschnittenen Bereichs durch Aktionen wie das Ziehen auf einem Touchscreen oder die Verwendung des Scrollrads einer Maus anzuzeigen. Der Inhalt _kann_ jedoch programmgesteuert gescrollt werden (zum Beispiel durch Verlinkung zu einem Ankertext, durch Tabulatornavigieren zu einem versteckten, aber fokussierbaren Element oder durch Festlegen des Wertes der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)-Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo)-Methode), in welchem Fall die Elementbox ein Scrollcontainer ist.
- `clip`
  - : Überlaufender Inhalt wird an der _Überlaufabschneidekante_ des Elements abgeschnitten, die mit der [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin)-Eigenschaft definiert wird. Dadurch läuft der Inhalt bis zum {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin` oder, falls nicht gesetzt, bis `0px` über die Innenabstandskante hinaus. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Browser fügen keine Scrollleiste hinzu, und programmgesteuertes Scrollen wird ebenfalls nicht unterstützt. Es wird kein [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt. Zum Erstellen eines Formatierungskontexts verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Die Elementbox ist kein Scrollcontainer.
- `scroll`
  - : Überlaufender Inhalt wird an der Innenabstandskante des Elements abgeschnitten, und überlaufender Inhalt kann mit Scrollleisten in den Sichtbereich gescrollt werden. Browser zeigen Scrollleisten an, unabhängig davon, ob Inhalte überlaufen oder nicht, sowohl in horizontaler als auch vertikaler Richtung, wenn der Wert auf beide Richtungen zutrifft. Die Verwendung dieses Schlüsselworts kann daher verhindern, dass Scrollleisten erscheinen und verschwinden, wenn sich Inhalte ändern. Drucker können trotzdem überlaufenden Inhalt drucken. Die Elementbox ist ein Scrollcontainer.
- `auto`
  - : Überlaufender Inhalt wird an der Innenabstandskante des Elements abgeschnitten, und überlaufender Inhalt kann mit Scrollleisten in den Sichtbereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Browser Scrollleisten _nur an_, wenn der Inhalt überläuft. Wenn der Inhalt in den Innenabstand des Elements passt, sieht es aus wie `visible`, erstellt aber trotzdem einen neuen Formatierungskontext. Die Elementbox ist ein Scrollcontainer.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veraltetes Alias für `auto`. Mit `overlay` werden die Scrollleisten auf dem Inhalt gezeichnet, anstatt Platz zu beanspruchen.

## Beschreibung

Überlaufoptionen umfassen das Ausblenden von Überlaufinhalten, das Aktivieren von Scrollleisten, um Überlaufinhalte anzuzeigen, oder das Anzeigen des Inhalts, der aus einer Elementbox in den umgebenden Bereich fließt, sowie deren Kombinationen.

Bei der Verwendung der verschiedenen Schlüsselwörter für `overflow` sollten folgende Nuancen beachtet werden:

- Das Festlegen eines anderen Wertes als `visible` (der Standard) oder `clip` für `overflow` erstellt einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Dies ist aus technischen Gründen erforderlich; wenn ein Float ein scrollendes Element schneidet, würde es dazu führen, dass der Inhalt bei jedem Scrollschritt neu umbrochen wird, was zu einem langsamen Scrollverhalten führt.
- Damit eine `overflow`-Einstellung die gewünschte Wirkung erzielt, muss das Blockelement entweder eine festgelegte Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) haben, wenn der Überlauf in der vertikalen Richtung erfolgt, eine festgelegte Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}) haben, wenn der Überlauf in der horizontalen Richtung erfolgt, eine festgelegte Blockgröße ({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}) haben, wenn der Überlauf in der Blockrichtung erfolgt, oder eine festgelegte Inlinegröße ({{cssxref("inline-size")}} oder {{cssxref("max-inline-size")}}) oder {{cssxref("white-space")}} auf `nowrap` gesetzt sein, wenn der Überlauf in der Inlinerichtung erfolgt.
- Das Festlegen von `overflow` auf `visible` in einer Richtung (d.h. `overflow-x` oder `overflow-y`), wenn es nicht auf `visible` oder `clip` in der anderen Richtung gesetzt ist, führt dazu, dass der `visible`-Wert sich wie `auto` verhält.
- Das Festlegen von `overflow` auf `clip` in einer Richtung, wenn es nicht auf `visible` oder `clip` in der anderen Richtung gesetzt ist, führt dazu, dass der `clip`-Wert sich wie `hidden` verhält.
- Die JavaScript-Eigenschaft [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop) kann verwendet werden, um durch Inhalte in einem Scrollcontainer zu scrollen, außer wenn `overflow` auf `clip` gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Ein scrollbarer Inhaltsbereich ist nicht mit der Tastatur fokussierbar, sodass er von einem reinen Tastaturbenutzer nicht gescrollt werden kann. Firefox und Chrome 132 und später sind Ausnahmen; sie machen Scrollcontainer standardmäßig fokussierbar.

Für andere Browser müssen Sie, um reinen Tastaturbenutzern das Scrollen des Containers zu ermöglichen, dem Container ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) zuweisen, indem Sie `tabindex="0"` verwenden. Leider hat ein Screenreader möglicherweise keinen Kontext, wenn er auf diesen Tabulatorstopp trifft, und könnte den gesamten Inhalt des Containers ankündigen. Um dies abzumildern, geben Sie dem Container eine passende [WAI-ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) (z. B. `role="region"`) und einen zugänglichen Namen (via [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)).

## Beispiele

### Demonstration der Ergebnisse verschiedener overflow-Schlüsselwörter

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
- [Tastaturkurse für Scrollbereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
