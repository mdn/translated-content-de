---
title: overflow
slug: Web/CSS/Reference/Properties/overflow
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`overflow`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt das gewünschte Verhalten fest, wenn Inhalte nicht in die Auffüllungskiste eines Elements passen (überlaufen) und zwar in horizontaler und/oder vertikaler Richtung.

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

## Bestandteilende Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für folgende CSS-Eigenschaften:

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

Die `overflow`-Eigenschaft wird als ein oder zwei {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwort-Werte angegeben. Wenn nur ein Schlüsselwort angegeben wird, werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Wenn zwei Schlüsselwörter angegeben werden, gilt der erste Wert für `overflow-x` in horizontaler Richtung und der zweite für `overflow-y` in vertikaler Richtung.

### Werte

- `visible`
  - : Überlaufende Inhalte werden nicht beschnitten und können außerhalb der Auffüllungskiste des Elements sichtbar sein. Die Elementkiste ist kein {{Glossary("scroll_container", "Scroll-Container")}}. Dies ist der Standardwert der `overflow`-Eigenschaft.
- `hidden`
  - : Überlaufende Inhalte sind an der Auffüllungskiste des Elements beschnitten. Es gibt keine Rollbalken und die beschnittenen Inhalte sind nicht sichtbar (d.h. die beschnittenen Inhalte sind verborgen), aber die Inhalte existieren weiterhin. Benutzeragenten fügen keine Rollbalken hinzu und erlauben auch nicht, die Inhalte außerhalb des beschnittenen Bereichs durch Aktionen wie Ziehen auf einem Touchscreen oder Scrollen mit dem Mausrad anzuzeigen. Die Inhalte _können_ programmatisch gescrollt werden (zum Beispiel durch Verlinken zu Ankertexten, durch Tabben zu einem verborgenen, aber fokussierbaren Element oder durch Festlegen des Werts der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)-Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo)-Methode), in diesem Fall ist die Elementkiste ein Scroll-Container.
- `clip`
  - : Überlaufende Inhalte sind an der _Überlauf-Schnittkante_ des Elements beschnitten, die mit der [`overflow-clip-margin`](/de/docs/Web/CSS/Reference/Properties/overflow-clip-margin)-Eigenschaft definiert wird. Infolgedessen überlaufen die Inhalte die Auffüllungskiste des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin` oder `0px`, wenn nicht gesetzt. Überlaufende Inhalte außerhalb des beschnittenen Bereichs sind nicht sichtbar, Benutzeragenten fügen keinen Rollbalken hinzu und programmatisches Scrollen wird ebenfalls nicht unterstützt. Es wird kein neuer [Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt. Um einen Formatierungskontext zu erstellen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Die Elementkiste ist kein Scroll-Container.
- `scroll`
  - : Überlaufende Inhalte sind an der Auffüllungskiste des Elements beschnitten, und überlaufende Inhalte können mithilfe von Rollbalken gescrollt werden. Benutzeragenten zeigen Rollbalken an, unabhängig davon, ob Inhalte überlaufen oder nicht, also in horizontaler und vertikaler Richtung, wenn der Wert in beiden Richtungen gilt. Die Verwendung dieses Schlüsselworts kann daher verhindern, dass Rollbalken beim Ändern von Inhalten ein- und ausgeblendet werden. Drucker können jedoch weiterhin überlaufende Inhalte drucken. Die Elementkiste ist ein Scroll-Container.
- `auto`
  - : Überlaufende Inhalte sind an der Auffüllungskiste des Elements beschnitten, und überlaufende Inhalte können mithilfe von Rollbalken gescrollt werden. Anders als bei `scroll` zeigen Benutzeragenten Rollbalken _nur_ an, wenn die Inhalte überlaufen. Wenn die Inhalte in die Auffüllungskiste des Elements passen, sieht es genauso aus wie bei `visible`, erstellt jedoch weiterhin einen neuen Formatierungskontext. Die Elementkiste ist ein Scroll-Container.

> [!NOTE]
> Der Schlüsselwort-Wert `overlay` ist ein veraltetes Wert-Alias für `auto`. Bei `overlay` werden die Rollbalken über den Inhalten gezeichnet, anstatt Platz einzunehmen.

## Beschreibung

Überlaufoptionen umfassen das Verbergen von überlaufenden Inhalten, das Aktivieren von Rollbalken zur Anzeige von überlaufenden Inhalten oder das Anzeigen der Inhalte, die aus einer Elementkiste in den umgebenden Bereich fließen, sowie deren Kombinationen.

Die folgenden Feinheiten sollten beachtet werden, wenn die verschiedenen Schlüsselwörter für `overflow` verwendet werden:

- Das Angeben eines anderen Wertes als `visible` (dem Standardwert) oder `clip` für `overflow` erstellt einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context). Dies ist aus technischen Gründen notwendig; wenn ein Float ein scrollendes Element schneidet, würde es den Inhalt nach jedem Scroll-Schritt gewaltsam neu umwickeln, was zu einem langsamen Scroll-Erlebnis führt.
- Damit eine `overflow`-Einstellung die gewünschte Wirkung erzielt, muss das Block-Element entweder eine festgelegte Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) haben, wenn der Überlauf in vertikaler Richtung erfolgt; eine festgelegte Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}) wenn der Überlauf in horizontaler Richtung erfolgt; eine festgelegte Block-Größe (({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}) wenn der Überlauf in Blockrichtung erfolgt, oder eine festgelegte Inline-Größe (({{cssxref("inline-size")}} oder {{cssxref("max-inline-size")}}) oder {{cssxref("white-space")}} auf `nowrap` gesetzt ist, wenn der Überlauf in Inline-Richtung erfolgt.
- Das Festlegen von `overflow` auf `visible` in eine Richtung (d.h. `overflow-x` oder `overflow-y`), wenn es in der anderen Richtung nicht auf `visible` oder `clip` gesetzt ist, führt dazu, dass sich der `visible`-Wert wie `auto` verhält.
- Das Festlegen von `overflow` auf `clip` in eine Richtung, wenn es in der anderen Richtung nicht auf `visible` oder `clip` gesetzt ist, führt dazu, dass sich der `clip`-Wert wie `hidden` verhält.
- Das JavaScript-Property [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop) kann verwendet werden, um durch Inhalte in einem Scroll-Container zu scrollen, außer wenn `overflow` auf `clip` gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Ein scrollbarer Inhaltsbereich ist nicht tastaturfokussierbar, sodass ein Benutzer ihn nicht nur mit der Tastatur scrollen kann. Firefox und Chrome 132 und höher sind Ausnahmen; sie machen Scroll-Container standardmäßig fokussierbar.

Für andere Browser müssen Sie, um Tastaturbenutzer zu ermöglichen, den Container zu scrollen, dem Container einen [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) mit `tabindex="0"` zuweisen. Leider kann es sein, dass ein Bildschirmlesegerät bei Erreichen dieses Tab-Stops keinen Kontext über den Container hat und möglicherweise den gesamten Inhalt des Containers ansagt. Um dies zu mildern, geben Sie dem Container eine passende [WAI-ARIA Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) (zum Beispiel `role="region"`) und einen zugänglichen Namen (mittels [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)).

## Beispiele

### Ergebnisse verschiedener Overflow-Schlüsselwörter demonstrieren

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
- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow)-Modul
- [Nur-Tastatur-Scrollbereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
