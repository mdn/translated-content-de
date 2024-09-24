---
title: Überlauf
slug: Web/CSS/overflow
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{CSSRef}}

Die **`overflow`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt das gewünschte Verhalten fest, wenn Inhalte nicht in den Padding-Bereich des Elements passen (überlaufen) und zwar in horizontaler und/oder vertikaler Richtung.

{{EmbedInteractiveExample("pages/css/overflow.html")}}

## Teil-Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`overflow-x`](/de/docs/Web/CSS/overflow-x)
- [`overflow-y`](/de/docs/Web/CSS/overflow-y)

## Syntax

```css
/* Schlüsselwortwerte */
overflow: visible;
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;
overflow: hidden visible;

/* Globale Werte */
overflow: inherit;
overflow: initial;
overflow: revert;
overflow: revert-layer;
overflow: unset;
```

Die `overflow`-Eigenschaft wird als ein oder zwei {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwerte angegeben. Wenn nur ein Schlüsselwort angegeben ist, werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Wenn zwei Schlüsselwörter angegeben sind, gilt der erste Wert für `overflow-x` in horizontaler Richtung und der zweite für `overflow-y` in vertikaler Richtung.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Padding-Bereichs des Elements sichtbar sein. Das Element-Feld ist kein {{glossary("scroll container")}}. Dies ist der Standardwert der `overflow`-Eigenschaft.
- `hidden`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements abgeschnitten. Es gibt keine Scrollbalken und der abgeschnittene Inhalt ist nicht sichtbar (d. h., der abgeschnittene Inhalt ist verborgen), existiert jedoch weiterhin. Benutzeragenten fügen keine Scrollbalken hinzu und ermöglichen es Benutzern auch nicht, den Inhalt außerhalb des abgeschnittenen Bereichs zu sehen, z. B. durch Dragging auf einem Touchscreen oder durch Verwenden des Scrollrads einer Maus. Der Inhalt kann programmatisch gescrollt werden (z. B. durch Verlinkung mit Ankertext, durch Springen zu einem versteckten, aber fokussierbaren Element oder durch Setzen des Wertes der {{domxref("Element.scrollLeft", "scrollLeft")}} Eigenschaft oder der {{domxref("Element.scrollTo", "scrollTo()")}} Methode), in diesem Fall ist das Elementfeld ein Scrollcontainer.
- `clip`
  - : Überlaufender Inhalt wird am Überlauf-Clip-Rand des Elements abgeschnitten, der mithilfe der [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin) Eigenschaft definiert wird. Folglich überläuft der Inhalt den Padding-Bereich des Elements um den {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin` oder um `0px`, wenn nicht festgelegt. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keine Scrollleiste hinzu und programmatisches Scrollen wird ebenfalls nicht unterstützt. Es wird kein neuer [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt. Um einen Formatierungskontext zu schaffen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Das Elementfeld ist kein Scrollcontainer.
- `scroll`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements abgeschnitten und überlaufender Inhalt kann mithilfe von Scrollbalken ins Blickfeld gescrollt werden. Benutzeragenten zeigen Scrollbalken an, unabhängig davon, ob Inhalt überläuft oder nicht, also in horizontaler und vertikaler Richtung, wenn der Wert für beide Richtungen gilt. Die Verwendung dieses Schlüsselworts kann daher verhindern, dass Scrollbalken je nach Inhalt erscheinen und verschwinden. Drucker können Überlaufinhalte dennoch drucken. Das Elementfeld ist ein Scrollcontainer.
- `auto`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements abgeschnitten, und überlaufender Inhalt kann mit Scrollbalken ins Blickfeld gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollbalken _nur dann_ an, wenn der Inhalt überläuft. Wenn der Inhalt in den Padding-Bereich des Elements passt, sieht es aus wie bei `visible`, jedoch wird dennoch ein neuer Formatierungskontext erstellt. Das Elementfeld ist ein Scrollcontainer.

> [!NOTE]
> Das Schlüsselwort `overlay` ist ein veralteter Wertalias für `auto`. Mit `overlay` werden die Scrollbalken über den Inhalt gezeichnet, anstatt Platz einzunehmen.

## Beschreibung

Überlaufoptionen umfassen das Verbergen von Überlaufinhalten, das Aktivieren von Scrollbalken, um Überlaufinhalte anzuzeigen, oder das Anzeigen des Inhalts, der aus einem Elementfeld in den umgebenden Bereich fließt, sowie Kombinationen dieser Möglichkeiten.

Die folgenden Nuancen sollten beachtet werden, wenn die verschiedenen Schlüsselwörter für `overflow` verwendet werden:

- Das Angeben eines anderen Wertes als `visible` (der Standardwert) oder `clip` für `overflow` erstellt einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Dies ist aus technischen Gründen notwendig; wenn ein Float mit einem scrollenden Element interagiert, würde es den Inhalt nach jedem Scrollschritt gewaltsam neu umbrechen, was zu einem langsamen Scrollerlebnis führen würde.
- Damit eine `overflow`-Einstellung die gewünschte Wirkung erzielt, muss das Block-Element entweder eine festgelegte Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) haben, wenn der Überlauf in vertikaler Richtung auftritt, eine festgelegte Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}), wenn der Überlauf in horizontaler Richtung auftritt, eine festgelegte Blockgröße ({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}), wenn der Überlauf in Blockrichtung auftritt, oder eine festgelegte Inline-Größe ({{cssxref("inline-size")}} oder {{cssxref("max-inline-size")}}) oder {{cssxref("white-space")}} auf `nowrap` gesetzt, wenn der Überlauf in Inline-Richtung auftritt.
- Das Setzen von Überlauf auf `visible` in einer Richtung (d. h. `overflow-x` oder `overflow-y`), wenn es in der anderen Richtung nicht auf `visible` oder `clip` gesetzt ist, führt dazu, dass sich der `visible`-Wert wie `auto` verhält.
- Das Setzen von Überlauf auf `clip` in einer Richtung, wenn es in der anderen Richtung nicht auf `visible` oder `clip` gesetzt ist, führt dazu, dass sich der `clip`-Wert wie `hidden` verhält.
- Die JavaScript-{{domxref("Element.scrollTop")}}-Eigenschaft kann verwendet werden, um durch Inhalt in einem Scrollcontainer zu scrollen, außer wenn `overflow` auf `clip` gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Ein scrollender Inhaltsbereich kann nicht von einem Benutzer, der ausschließlich die Tastatur benutzt, gescrollt werden, mit Ausnahme von Benutzern auf Firefox (der den Container standardmäßig tastaturfokussierbar macht).

Als Entwickler müssen Sie, um Benutzern, die ausschließlich die Tastatur verwenden und nicht auf Firefox sind, das Scrollen des Containers zu ermöglichen, ihm einen [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) mit `tabindex="0"` zuweisen. Leider wird ein Bildschirmleseprogramm, wenn es auf diesen Tabstop stößt, keinen Kontext dafür haben, was es ist, und das Bildschirmleseprogramm wird wahrscheinlich den gesamten Inhalt ansagen. Wenn Sie ihm eine geeignete [WAI-ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Roles) (`role="region"` zum Beispiel) und einen zugänglichen Namen (über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)) geben, kann dies abgemildert werden.

## Beispiele

### Demonstration der Ergebnisse verschiedener Overflow-Schlüsselwörter

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
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow)
- [Tastatur-nur Scrollbereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
