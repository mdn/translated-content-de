---
title: overflow
slug: Web/CSS/overflow
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{CSSRef}}

Die **`overflow`**-[CSS](/de/docs/Web/CSS)-[Abkürzungseigenschaft](/de/docs/Web/CSS/Shorthand_properties) legt das gewünschte Verhalten fest, wenn der Inhalt nicht in das Padding-Box-Element passt (überläuft) und zwar in horizontaler und/oder vertikaler Richtung.

{{EmbedInteractiveExample("pages/css/overflow.html")}}

## Bestandeigenschaften

Diese Eigenschaft ist eine Abkürzung für die folgenden CSS-Eigenschaften:

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

Die `overflow`-Eigenschaft wird als ein oder zwei {{CSSXref("overflow_value", "&lt;overflow&gt;")}}-Schlüsselwortwerte angegeben. Wenn nur ein Schlüsselwort angegeben wird, werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Wenn zwei Schlüsselwörter angegeben werden, gilt der erste Wert für `overflow-x` in horizontaler Richtung und der zweite für `overflow-y` in vertikaler Richtung.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb der Padding-Box des Elements sichtbar sein. Die Element-Box ist kein [Scroll-Container](/de/docs/Glossary/scroll_container). Dies ist der Standardwert der `overflow`-Eigenschaft.
- `hidden`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten. Es gibt keine Scrollleisten, und der abgeschnittene Inhalt ist nicht sichtbar (d. h., abgeschnittener Inhalt ist ausgeblendet), existiert aber weiterhin. Benutzeragenten fügen keine Scrollleisten hinzu und erlauben den Benutzern auch nicht, den Inhalt außerhalb des abgeschnittenen Bereichs durch Aktionen wie Ziehen auf einem Touchscreen oder Verwenden des Scrollrads an einer Maus anzuzeigen. Der Inhalt _kann_ programmgesteuert gescrollt werden (zum Beispiel durch Verlinkung zu Ankertext, durch Tabbing zu einem ausgeblendeten, aber fokussierbaren Element oder durch Setzen des Wertes der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)-Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo)-Methode), in diesem Fall ist die Element-Box ein Scroll-Container.
- `clip`
  - : Überlaufender Inhalt wird an der _overflow clip edge_ des Elements abgeschnitten, die mit der [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin)-Eigenschaft definiert ist. Dadurch überläuft der Inhalt die Padding-Box des Elements um den {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin` oder um `0px`, wenn er nicht gesetzt ist. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keine Scrollleiste hinzu, und auch programmgesteuertes Scrollen wird nicht unterstützt. Kein neuer [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) wird erstellt. Um einen Formatierungskontext zu erstellen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Die Element-Box ist kein Scroll-Container.
- `scroll`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten, und überlaufender Inhalt kann mit Scrollleisten in den sichtbaren Bereich gescrollt werden. Benutzeragenten zeigen Scrollleisten an, unabhängig davon, ob der Inhalt überläuft oder nicht, also in horizontaler und vertikaler Richtung, wenn der Wert für beide Richtungen gilt. Die Verwendung dieses Schlüsselworts kann daher verhindern, dass Scrollleisten erscheinen und verschwinden, wenn sich der Inhalt ändert. Drucker können trotzdem überlaufenden Inhalt drucken. Die Element-Box ist ein Scroll-Container.
- `auto`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten, und überlaufender Inhalt kann mit Scrollleisten in den sichtbaren Bereich gescrollt werden. Anders als bei `scroll` zeigen Benutzeragenten Scrollleisten _nur an_, wenn der Inhalt überläuft. Wenn der Inhalt in die Padding-Box des Elements passt, sieht es genauso aus wie bei `visible`, erstellt jedoch trotzdem einen neuen Formatierungskontext. Die Element-Box ist ein Scroll-Container.

> [!NOTE]
> Der Schlüsselwert `overlay` ist ein veraltetes Alias für `auto`. Bei `overlay` werden die Scrollleisten über den Inhalt gezeichnet, anstatt Platz einzunehmen.

## Beschreibung

Überlaufoptionen umfassen das Ausblenden von Überlaufinhalt, das Einschalten von Scrollleisten, um Überlaufinhalt anzuzeigen, oder das Anzeigen von Inhalt, der aus einer Element-Box in den umgebenden Bereich fließt, sowie Kombinationen davon.

Die folgenden Nuancen sollten beim Verwenden der verschiedenen Schlüsselwörter für `overflow` beachtet werden:

- Das Spezifizieren eines anderen Wertes als `visible` (dem Standardwert) oder `clip` für `overflow` erstellt einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Dies ist aus technischen Gründen notwendig; wenn ein Float mit einem Scroll-Element überschneidet, würde der Inhalt bei jedem Scrollschritt zwangsweise neu umbrochen, was zu einer langsamen Scroll-Erfahrung führen würde.
- Damit eine `overflow`-Einstellung die gewünschte Wirkung erzielt, muss das Block-Element entweder eine festgelegte Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) haben, wenn der Überlauf in vertikaler Richtung ist, eine festgelegte Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}) in horizontaler Richtung, eine festgelegte Blockgröße (({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}) wenn der Überlauf in Block-Richtung ist, oder eine festgelegte Inline-Größe (({{cssxref("inline-size")}} oder {{cssxref("max-inline-size")}}) oder {{cssxref("white-space")}} auf `nowrap` gesetzt, wenn der Überlauf in Inline-Richtung ist.
- Das Setzen von Overflow auf `visible` in eine Richtung (d. h. `overflow-x` oder `overflow-y`), wenn es in der anderen Richtung nicht auf `visible` oder `clip` gesetzt wird, führt dazu, dass der `visible`-Wert sich wie `auto` verhält.
- Das Setzen von Overflow auf `clip` in eine Richtung, wenn es in der anderen Richtung nicht auf `visible` oder `clip` gesetzt wird, führt dazu, dass der `clip`-Wert sich wie `hidden` verhält.
- Die JavaScript-Eigenschaft [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop) kann verwendet werden, um durch den Inhalt in einem Scroll-Container zu scrollen, außer wenn `overflow` auf `clip` gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Ein scrollbarer Inhaltsbereich kann nicht von einem Benutzer, der nur die Tastatur verwendet, gescrollt werden, mit Ausnahme von Benutzern in Firefox (der den Container standardmäßig tastaturfokussierbar macht).

Als Entwickler müssen Sie, um Nicht-Firefox-Tastaturbenutzer den Container scrollen zu lassen, einen [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) mit `tabindex="0"` vergeben. Leider hat ein Screenreader, wenn er auf diesen Tab-Stop stößt, keinen Kontext dafür, was er ist, und wird wahrscheinlich den gesamten Inhalt ansagen. Dies kann durch die Angabe einer geeigneten [WAI-ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Roles) (`role="region"`, zum Beispiel) und eines zugänglichen Namens (über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)) gemildert werden.

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
- [Nur-Tastatur-Scrollbereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
