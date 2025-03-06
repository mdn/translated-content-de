---
title: overflow
slug: Web/CSS/overflow
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Die **`overflow`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt das gewünschte Verhalten fest, wenn Inhalte nicht in den Padding-Bereich des Elements passen (überlaufen) und in horizontaler und/oder vertikaler Richtung überlaufen.

{{EmbedInteractiveExample("pages/css/overflow.html")}}

## Zusammengesetzte Eigenschaften

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

Die `overflow`-Eigenschaft wird als ein oder zwei {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwerte angegeben. Wenn nur ein Schlüsselwort angegeben wird, werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Wenn zwei Schlüsselwörter angegeben werden, gilt der erste Wert für `overflow-x` in horizontaler Richtung und der zweite für `overflow-y` in vertikaler Richtung.

### Werte

- `visible`
  - : Überlaufende Inhalte werden nicht abgeschnitten und können außerhalb des Padding-Bereichs des Elements sichtbar sein. Die Elementbox ist kein {{Glossary("scroll_container", "Scroll-Container")}}. Dies ist der Standardwert der `overflow`-Eigenschaft.
- `hidden`
  - : Überlaufende Inhalte werden am Padding-Bereich des Elements abgeschnitten. Es gibt keine Scrollleisten und die abgeschnittenen Inhalte sind nicht sichtbar (d. h. die abgeschnittenen Inhalte sind verborgen), jedoch existieren die Inhalte weiterhin. Benutzeragenten fügen keine Scrollleisten hinzu und erlauben Benutzern auch nicht, die Inhalte außerhalb des abgeschnittenen Bereichs durch Aktionen wie Ziehen auf einem Touchscreen oder Verwenden des Scrollrads an einer Maus zu sehen. Die Inhalte _können_ programmatisch gescrollt werden (zum Beispiel durch Verlinkung zu Ankertext, durch Tabben zu einem verborgenen, aber fokussierbaren Element oder durch Setzen des Wertes der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode), in diesem Fall ist die Elementbox ein Scroll-Container.
- `clip`
  - : Überlaufende Inhalte werden an der _overflow clip edge_ des Elements abgeschnitten, die mit der [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin) Eigenschaft definiert wurde. Dadurch überlaufen Inhalte den Padding-Bereich des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin` oder um `0px`, wenn nicht gesetzt. Inhalte, die außerhalb des abgeschnittenen Bereichs liegen, sind nicht sichtbar, Benutzeragenten fügen keine Scrollleiste hinzu und programmatisches Scrollen wird ebenfalls nicht unterstützt. Es wird kein neuer [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt. Um einen Formatierungskontext zu erstellen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Die Elementbox ist kein Scroll-Container.
- `scroll`
  - : Überlaufende Inhalte werden am Padding-Bereich des Elements abgeschnitten, und überlaufende Inhalte können mit Scrollleisten in den Ansichtsbereich gescrollt werden. Benutzeragenten zeigen Scrollleisten an, unabhängig davon, ob Inhalte überlaufen oder nicht, also in horizontaler und vertikaler Richtung, wenn der Wert für beide Richtungen gilt. Die Verwendung dieses Schlüsselworts kann somit verhindern, dass Scrollleisten erscheinen und verschwinden, während sich die Inhalte ändern. Drucker können den Überlaufinhalt trotzdem drucken. Die Elementbox ist ein Scroll-Container.
- `auto`
  - : Überlaufende Inhalte werden am Padding-Bereich des Elements abgeschnitten, und überlaufende Inhalte können mit Scrollleisten in den Ansichtsbereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollleisten nur dann an, wenn die Inhalte tatsächlich überlaufen. Wenn Inhalte in den Padding-Bereich des Elements passen, sieht es genauso aus wie bei `visible`, erstellt jedoch dennoch einen neuen Formatierungskontext. Die Elementbox ist ein Scroll-Container.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veralteter Wertalias für `auto`. Mit `overlay` werden die Scrollleisten über dem Inhalt gezeichnet, anstatt Platz zu beanspruchen.

## Beschreibung

Zu den Überlaufoptionen gehören das Verbergen von Überlaufinhalten, das Aktivieren von Scrollleisten zum Anzeigen von Überlaufinhalten oder das Anzeigen von Inhalten, die aus einer Elementbox in den umgebenden Bereich hinausfließen, sowie Kombinationen davon.

Die folgenden Nuancen sollten beim Verwenden der verschiedenen Schlüsselwörter für `overflow` beachtet werden:

- Die Angabe eines Werts, der nicht `visible` (der Standardwert) oder `clip` ist, für `overflow` erstellt einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Dies ist aus technischen Gründen erforderlich; wenn ein Floatelement mit einem Scroll-Element kollidiert, würde es beim Scrollen den Inhalt nach jedem Scrollschritt zwangsweise neu umwickeln, was zu einem langsamen Scroll-Erlebnis führen würde.
- Damit eine `overflow`-Einstellung die gewünschte Wirkung erzielt, muss das Blocklevel-Element entweder eine festgelegte Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) haben, wenn der Überlauf in vertikaler Richtung erfolgt, eine festgelegte Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}) haben, wenn der Überlauf in horizontaler Richtung erfolgt, eine festgelegte Blockgröße ({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}) haben, wenn der Überlauf in Blockrichtung erfolgt, oder eine festgelegte Zeilenlänge ({{cssxref("inline-size")}} oder {{cssxref("max-inline-size")}}) oder {{cssxref("white-space")}} auf `nowrap` gesetzt haben, wenn der Überlauf in Inline-Richtung erfolgt.
- Das Setzen von `overflow` auf `visible` in einer Richtung (d. h. `overflow-x` oder `overflow-y`), wenn es in der anderen Richtung nicht auf `visible` oder `clip` gesetzt ist, führt dazu, dass sich der `visible`-Wert wie `auto` verhält.
- Das Setzen von `overflow` auf `clip` in einer Richtung, wenn es in der anderen Richtung nicht auf `visible` oder `clip` gesetzt ist, führt dazu, dass sich der `clip`-Wert wie `hidden` verhält.
- Die JavaScript-Eigenschaft [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop) kann verwendet werden, um durch Inhalte in einem Scroll-Container zu scrollen, außer wenn `overflow` auf `clip` gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Ein scrollbarer Inhaltsbereich kann von einem Benutzer, der ausschließlich die Tastatur verwendet, nicht gescrollt werden, mit Ausnahme von Benutzern in Firefox (der den Container standardmäßig mit der Tastatur fokussierbar macht).

Als Entwickler müssen Sie, um das Scrollen des Containers für Nicht-Firefox-Benutzer, die nur die Tastatur verwenden, zu ermöglichen, ihm ein [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) mit `tabindex="0"` geben. Leider hat ein Screenreader keinen Kontext für diesen Tab-Stopp und wird wahrscheinlich den gesamten Inhalt verkünden. Dies kann gemildert werden, indem ihm eine geeignete [WAI-ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) (`role="region"`, zum Beispiel) und einen zugänglichen Namen (durch [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)) gegeben wird.

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
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [Tastaturgesteuerte Scrollbereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
