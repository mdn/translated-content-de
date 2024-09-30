---
title: overflow
slug: Web/CSS/overflow
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{CSSRef}}

Die **`overflow`** [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt das gewünschte Verhalten fest, wenn Inhalte in der horizontalen und/oder vertikalen Richtung nicht in den Innenabstand eines Elements passen (überlaufen).

{{EmbedInteractiveExample("pages/css/overflow.html")}}

## Bestandteil-Eigenschaften

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

Die `overflow`-Eigenschaft wird als ein oder zwei {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwort-Werte angegeben. Wenn nur ein Schlüsselwort angegeben wird, werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Wenn zwei Schlüsselwörter angegeben werden, gilt der erste Wert für `overflow-x` in horizontaler Richtung und der zweite für `overflow-y` in vertikaler Richtung.

### Werte

- `visible`
  - : Überlaufende Inhalte werden nicht abgeschnitten und können außerhalb des Innenabstands des Elements sichtbar sein. Der Elementkasten ist keine [Scroll-Container](/de/docs/Glossary/scroll_container). Dies ist der Standardwert der `overflow`-Eigenschaft.
- `hidden`
  - : Überlaufende Inhalte werden am Innenabstand des Elements abgeschnitten. Es gibt keine Scrollleisten und die abgeschnittenen Inhalte sind nicht sichtbar (d. h. die abgeschnittenen Inhalte sind verborgen), aber die Inhalte existieren weiterhin. Benutzeragenten fügen keine Scrollleisten hinzu und erlauben Benutzern auch nicht, die Inhalte außerhalb des abgeschnittenen Bereichs durch Aktionen wie Ziehen auf einem Touchscreen oder Verwenden des Mausrads zu sehen. Die Inhalte _können_ programmgesteuert gescrollt werden (zum Beispiel durch Verlinken mit Ankertext, durch Tabben zu einem verborgenen, aber fokussierbaren Element oder durch Setzen des Wertes der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)-Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo)-Methode), in diesem Fall ist der Elementkasten ein Scroll-Container.
- `clip`
  - : Überlaufender Inhalt wird an der _overflow clip Kante_ des Elements abgeschnitten, die mit der [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin)-Eigenschaft definiert wird. Dadurch wird der Inhalt bis zur {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin` oder auf `0px`, wenn nicht gesetzt, über den Innenabstand des Elements hinaus überlaufen. Überlaufende Inhalte außerhalb des abgeschnittenen Bereichs sind nicht sichtbar, Benutzeragenten fügen keine Scrollleiste hinzu und programmgesteuertes Scrollen wird ebenfalls nicht unterstützt. Es wird kein neuer [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt. Um einen Formatierungskontext zu erstellen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Der Elementkasten ist kein Scroll-Container.
- `scroll`
  - : Überlaufender Inhalt wird am Innenabstand des Elements abgeschnitten und kann in den Ansichtsbereich gescrollt werden, indem Scrollleisten verwendet werden. Benutzeragenten zeigen Scrollleisten an, unabhängig davon, ob Inhalte überlaufen, sodass in horizontaler und vertikaler Richtung, wenn der Wert auf beide Richtungen anwendbar ist. Die Verwendung dieses Schlüsselworts kann daher verhindern, dass Scrollleisten erscheinen und verschwinden, während sich der Inhalt ändert. Drucker können dennoch überlaufende Inhalte drucken. Der Elementkasten ist ein Scroll-Container.
- `auto`
  - : Überlaufender Inhalt wird am Innenabstand des Elements abgeschnitten und kann mit Scrollleisten in den Ansichtsbereich gescrollt werden. Anders als bei `scroll`, zeigen Benutzeragenten Scrollleisten _nur an_, wenn der Inhalt überläuft. Wenn der Inhalt in den Innenabstand des Elements passt, sieht es genauso aus wie mit `visible`, erstellt jedoch dennoch einen neuen Formatierungskontext. Der Elementkasten ist ein Scroll-Container.

> [!NOTE]
> Der Schlüsselwort-Wert `overlay` ist ein veralteter Wertalias für `auto`. Mit `overlay` werden die Scrollleisten über den Inhalten gezeichnet, statt Platz einzunehmen.

## Beschreibung

Überlaufoptionen umfassen das Verbergen von Überlaufinhalten, das Aktivieren von Scrollleisten zum Anzeigen von Überlaufinhalten oder das Anzeigen der Inhalte, die aus einem Elementkasten in den umgebenden Bereich hinausfließen, sowie deren Kombinationen.

Die folgenden Nuancen sollten bei der Verwendung der verschiedenen Schlüsselwörter für `overflow` beachtet werden:

- Das Festlegen eines anderen Werts als `visible` (dem Standard) oder `clip` für `overflow` erstellt einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Dies ist aus technischen Gründen notwendig; wenn ein Float mit einem scrollbaren Element überlagert wird, würde er den Inhalt nach jedem Scroll-Schritt zwingend neu umbrechen, was zu einem langsamen Scroll-Erlebnis führen würde.
- Damit eine `overflow`-Einstellung den gewünschten Effekt erzielt, muss das Block-Level-Element entweder eine festgelegte Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) haben, wenn der Überlauf in vertikaler Richtung erfolgt, eine festgelegte Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}), wenn der Überlauf in horizontaler Richtung erfolgt, eine festgelegte Blockgröße ({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}), wenn der Überlauf in Blockrichtung erfolgt, oder eine festgelegte Inline-Größe ({{cssxref("inline-size")}} oder {{cssxref("max-inline-size")}}) oder {{cssxref("white-space")}} auf `nowrap` festgelegt, wenn der Überlauf in Inline-Richtung erfolgt.
- Das Festlegen von Overflow auf `visible` in eine Richtung (d. h. `overflow-x` oder `overflow-y`), wenn es in der anderen Richtung nicht auf `visible` oder `clip` eingestellt ist, führt dazu, dass der Wert `visible` sich wie `auto` verhält.
- Wenn Overflow in eine Richtung auf `clip` eingestellt ist und nicht als `visible` oder `clip` in der anderen Richtung, verhält sich der Wert `clip` wie `hidden`.
- Die JavaScript-Eigenschaft [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop) kann verwendet werden, um durch Inhalte in einem Scroll-Container zu scrollen, außer wenn `overflow` auf `clip` gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Ein scrollbarer Inhaltsbereich kann von einem nur Tastatur benutzenden Benutzer nicht gescrollt werden, mit der Ausnahme von Benutzern auf Firefox (das den Container standardmäßig mit der Tastatur fokussierbar macht).

Als Entwickler werden Sie nicht-Firefox Tastatur-Nutzer, um den Container zu scrollen, ein [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) geben müssen, indem Sie `tabindex="0"` verwenden. Leider wird bei einem von einem Screenreader gefundenen Tab-Stopp der gesamte Inhalt des Containers ohne Kontext für den Tab-Stopp angekündigt. Das Zuweisen einer geeigneten [WAI-ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Roles) (zum Beispiel `role="region"`) und eines zugänglichen Namens (über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)) kann dies mildern.

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
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow)
- [Tastatur-nur Scrollbereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
