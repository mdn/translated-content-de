---
title: overflow
slug: Web/CSS/overflow
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{CSSRef}}

Die **`overflow`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) legt das gewünschte Verhalten fest, wenn Inhalt nicht in den Randbereich eines Elements passt (überläuft) in horizontaler und/oder vertikaler Richtung.

{{EmbedInteractiveExample("pages/css/overflow.html")}}

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschrift für die folgenden CSS-Eigenschaften:

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

Die `overflow`-Eigenschaft wird als ein oder zwei {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwerte angegeben. Wenn nur ein Schlüsselwort angegeben wird, werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Wenn zwei Schlüsselwörter angegeben werden, gilt der erste Wert für `overflow-x` in der horizontalen Richtung und der zweite für `overflow-y` in der vertikalen Richtung.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Randbereichs des Elements sichtbar sein. Das Element-Box ist kein {{Glossary("scroll_container", "scroll container")}}. Dies ist der Standardwert der `overflow`-Eigenschaft.
- `hidden`
  - : Überlaufender Inhalt wird am Randbereich des Elements abgeschnitten. Es gibt keine Scrollbars, und der abgeschnittene Inhalt ist nicht sichtbar (d. h., abgeschnittener Inhalt ist versteckt), aber der Inhalt existiert weiterhin. User Agents fügen keine Scrollbars hinzu und erlauben Benutzern auch nicht, den Inhalt außerhalb des abgeschnittenen Bereichs durch Aktionen wie Ziehen auf einem Touchscreen oder Verwenden des Scrollrads auf einer Maus anzuzeigen. Der Inhalt _kann_ programmatisch gescrollt werden (zum Beispiel durch Verlinkung zu Ankertext, Tabben zu einem versteckten, aber fokussierbaren Element oder indem der Wert der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)-Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo)-Methode gesetzt wird), in diesem Fall ist das Element-Box ein Scroll-Container.
- `clip`
  - : Überlaufender Inhalt wird am _overflow clip edge_ des Elements abgeschnitten, das mit der [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin)-Eigenschaft definiert wird. Infolgedessen überläuft der Inhalt die Randbox des Elements um den {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin` oder um `0px`, wenn er nicht gesetzt ist. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, User Agents fügen keine Scrollbar hinzu und programmatisches Scrollen wird ebenfalls nicht unterstützt. Kein neuer [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) wird erstellt. Um einen Formatierungskontext zu erstellen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Die Element-Box ist kein Scroll-Container.
- `scroll`
  - : Überlaufender Inhalt wird am Randbereich des Elements abgeschnitten und Überlaufinhalt kann mit Scrollbars in den Sichtbereich gescrollt werden. User Agents zeigen Scrollbars an, unabhängig davon, ob Inhalt überläuft, sowohl in horizontaler als auch vertikaler Richtung, wenn der Wert in beiden Richtungen angewendet wird. Die Verwendung dieses Schlüsselworts kann daher verhindern, dass Scrollbars erscheinen und verschwinden, wenn sich der Inhalt ändert. Drucker können dennoch Überflussinhalt drucken. Die Element-Box ist ein Scroll-Container.
- `auto`
  - : Überlaufender Inhalt wird am Randbereich des Elements abgeschnitten und Überlaufinhalt kann mit Scrollbars in den Sichtbereich gescrollt werden. Im Gegensatz zu `scroll` zeigen User Agents Scrollbars _nur an_, wenn der Inhalt überläuft. Wenn der Inhalt in die Randbox des Elements passt, sieht es genauso aus wie mit `visible`, erstellt aber dennoch einen neuen Formatierungskontext. Die Element-Box ist ein Scroll-Container.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veralteter Wertalias für `auto`. Mit `overlay` werden die Scrollbars über dem Inhalt gezeichnet, anstatt Platz einzunehmen.

## Beschreibung

Überlaufoptionen umfassen das Verbergen von Überlaufinhalt, das Aktivieren von Scrollbars, um Überlaufinhalt anzuzeigen, oder das Anzeigen des Inhalts, das aus einer Element-Box in den umgebenden Bereich fließt, und Kombinationen davon.

Die folgenden Feinheiten sollten beachtet werden, während die verschiedenen Schlüsselwörter für `overflow` verwendet werden:

- Die Angabe eines anderen Werts als `visible` (dem Standard) oder `clip` für `overflow` erstellt einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Dies ist aus technischen Gründen notwendig; wenn ein Float ein Scroll-Element schneidet, würde es den Inhalt nach jedem Scroll-Schritt neu umwickeln, was zu einem langsamen Scroll-Erlebnis führen würde.
- Damit eine `overflow`-Einstellung die gewünschte Wirkung erzielt, muss das Block-Element entweder eine festgelegte Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) aufweisen, wenn der Überlauf in der vertikalen Richtung erfolgt, eine festgelegte Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}) bei horizontalem Überlauf, eine festgelegte Blockgröße (({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}) bei Block-Richtung-Überlauf, oder eine festgelegte Inline-Größe (({{cssxref("inline-size")}} oder {{cssxref("max-inline-size")}}) oder {{cssxref("white-space")}} auf `nowrap` gesetzt bei Inline-Richtung-Überlauf.
- Das Setzen von Overflow auf `visible` in einer Richtung (d. h. `overflow-x` oder `overflow-y`), wenn es nicht auf `visible` oder `clip` in der anderen Richtung gesetzt ist, führt dazu, dass sich der `visible`-Wert wie `auto` verhält.
- Das Setzen von Overflow auf `clip` in einer Richtung, wenn es nicht auf `visible` oder `clip` in der anderen Richtung gesetzt ist, führt dazu, dass sich der `clip`-Wert wie `hidden` verhält.
- Die JavaScript-Eigenschaft [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop) kann verwendet werden, um durch Inhalt in einem Scroll-Container zu scrollen, es sei denn, `overflow` ist auf `clip` gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Ein scrollbarer Inhaltsbereich kann nicht von einem nur mit Tastatur bedienbaren Benutzer gescrollt werden, mit Ausnahme von Benutzern auf Firefox (die den Container standardmäßig tastaturfokussierbar machen).

Als Entwickler, um auch nicht-Firefox-Nur-Tastatur-Benutzern das Scrollen des Containers zu ermöglichen, müssen Sie ihm einen [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) mit `tabindex="0"` zuweisen. Leider hat ein Screenreader, wenn er auf diesen Tab-Stopp stößt, keinen Kontext für das, was es ist, und ihr Screenreader wird wahrscheinlich den gesamten Inhalt ankündigen. Ihm eine passende [WAI-ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Roles) (`role="region"`, zum Beispiel) und einen zugänglichen Namen (über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)) zu geben, kann dies mildern.

## Beispiele

### Demonstration der Ergebnisse verschiedener Überlauf-Schlüsselwörter

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
- [Keyboard-only scrolling areas](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
