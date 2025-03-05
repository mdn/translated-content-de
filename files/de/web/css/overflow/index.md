---
title: overflow
slug: Web/CSS/overflow
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`overflow`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt das gewünschte Verhalten fest, wenn der Inhalt nicht in den Auffüllungsbereich des Elements passt (überläuft) in horizontaler und/oder vertikaler Richtung.

{{EmbedInteractiveExample("pages/css/overflow.html")}}

## Bestandeigenschaften

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

Die `overflow`-Eigenschaft wird als ein oder zwei {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwerte festgelegt. Wenn nur ein Schlüsselwort angegeben ist, werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Wenn zwei Schlüsselwörter angegeben sind, gilt der erste Wert für `overflow-x` in der horizontalen Richtung und der zweite für `overflow-y` in der vertikalen Richtung.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Auffüllungsbereichs des Elements sichtbar sein. Der Elementbereich ist kein {{Glossary("scroll_container", "Scrollcontainer")}}. Dies ist der Standardwert der `overflow`-Eigenschaft.
- `hidden`
  - : Überlaufender Inhalt wird am Auffüllungsbereich des Elements abgeschnitten. Es gibt keine Scrollleisten, und der abgeschnittene Inhalt ist nicht sichtbar (d. h. der Inhalt ist verborgen), aber er existiert weiterhin. Benutzeragenten fügen keine Scrollleisten hinzu und erlauben Benutzern nicht, den Inhalt außerhalb des abgeschnittenen Bereichs durch Aktionen wie Ziehen auf einem Touchscreen oder Verwenden des Scrollrades einer Maus zu sehen. Der Inhalt _kann_ programmgesteuert gescrollt werden (zum Beispiel durch Verlinken mit einem Ankertext, durch Tabben zu einem verborgenen, aber fokussierbaren Element oder durch Setzen des Wertes der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode), in welchem Fall der Elementbereich ein Scrollcontainer ist.
- `clip`
  - : Überlaufender Inhalt wird am _overflow clip edge_ des Elements abgeschnitten, der mit der [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin) Eigenschaft definiert wird. Infolgedessen überläuft der Inhalt den Auffüllungsbereich des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin` oder um `0px`, wenn nicht gesetzt. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keine Scrollleiste hinzu, und programmgesteuertes Scrollen wird ebenfalls nicht unterstützt. Es wird kein neuer [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt. Um einen Formatierungskontext zu erstellen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Der Elementbereich ist kein Scrollcontainer.
- `scroll`
  - : Überlaufender Inhalt wird am Auffüllungsbereich des Elements abgeschnitten, und überlaufender Inhalt kann mit Hilfe von Scrollleisten in den Sichtbereich gescrollt werden. Benutzeragenten zeigen Scrollleisten an, unabhängig davon, ob ein Inhalt überläuft oder nicht, also sowohl in horizontaler als auch in vertikaler Richtung, wenn der Wert auf beide Richtungen anwendbar ist. Die Verwendung dieses Schlüsselworts kann daher verhindern, dass Scrollleisten auftauchen und verschwinden, wenn sich der Inhalt ändert. Drucker können weiterhin überlaufenden Inhalt drucken. Der Elementbereich ist ein Scrollcontainer.
- `auto`
  - : Überlaufender Inhalt wird am Auffüllungsbereich des Elements abgeschnitten, und überlaufender Inhalt kann mit Hilfe von Scrollleisten in den Sichtbereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollleisten _nur dann_ an, wenn der Inhalt überläuft. Wenn der Inhalt in den Auffüllungsbereich des Elements passt, sieht er genauso aus wie bei `visible`, erstellt aber dennoch einen neuen Formatierungskontext. Der Elementbereich ist ein Scrollcontainer.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein älterer Wertalias für `auto`. Bei `overlay` werden die Scrollleisten über dem Inhalt gezeichnet, anstatt Platz einzunehmen.

## Beschreibung

Überlaufoptionen umfassen das Verbergen überlaufender Inhalte, das Aktivieren von Scrollleisten zum Anzeigen überlaufender Inhalte oder das Anzeigen der Inhalte, die aus einem Elementbereich in den umgebenden Bereich fließen, und Kombinationen davon.

Bei der Verwendung der verschiedenen Schlüsselwörter für `overflow` sind folgende Nuancen zu beachten:

- Das Festlegen eines anderen Wertes als `visible` (der Standardwert) oder `clip` für `overflow` erstellt einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Dies ist aus technischen Gründen notwendig; wenn ein Floatelement mit einem scrollenden Element kollidiert, würde es den Inhalt bei jedem Scrollen neu umbrechen, was zu einem langsamen Scroll-Erlebnis führt.
- Damit eine `overflow`-Einstellung den gewünschten Effekt erzielt, muss das Blocklevel-Element entweder eine feste Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) haben, wenn der Überlauf in vertikaler Richtung erfolgt, eine feste Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}) haben, wenn der Überlauf in horizontaler Richtung erfolgt, eine feste Blockgröße (({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}) haben, wenn der Überlauf in Blockrichtung erfolgt, oder eine feste Inlinengröße (({{cssxref("inline-size")}} oder {{cssxref("max-inline-size")}}) oder {{cssxref("white-space")}} auf `nowrap` gesetzt haben, wenn der Überlauf in Inline-Richtung erfolgt.
- Wenn `overflow` in eine Richtung (d. h. `overflow-x` oder `overflow-y`) auf `visible` gesetzt wird, aber nicht auf `visible` oder `clip` in der anderen Richtung, verhält sich der Wert `visible` wie `auto`.
- Wenn `overflow` in eine Richtung auf `clip` gesetzt wird, aber nicht auf `visible` oder `clip` in der anderen Richtung, verhält sich der Wert `clip` wie `hidden`.
- Die JavaScript-Eigenschaft [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop) kann verwendet werden, um durch den Inhalt in einem Scrollcontainer zu scrollen, außer wenn `overflow` auf `clip` gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Ein scrollbarer Inhaltsbereich kann von einem Benutzer, der nur die Tastatur verwendet, nicht gescrollt werden, mit Ausnahme von Benutzern unter Firefox (das den Container standardmäßig über die Tastatur fokussierbar macht).

Als Entwickler müssen Sie dem Container ein [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) mit `tabindex="0"` zuweisen, damit nicht-Firefox-Tastaturnutzer den Container scrollen können. Leider hat ein Screenreader keinen Kontext dafür, wenn er auf diesen Tab-Stopp trifft, und wird wahrscheinlich den gesamten Inhalt vorlesen. Die Zuweisung einer geeigneten [WAI-ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Roles) (`role="region"` zum Beispiel) und eines zugänglichen Namens (über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)) kann dies abmildern.

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
- [Nur-Tastatur-Bereiche mit Scrollen](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
