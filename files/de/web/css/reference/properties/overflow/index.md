---
title: "`overflow` CSS-Eigenschaft"
short-title: overflow
slug: Web/CSS/Reference/Properties/overflow
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`overflow`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt das gewünschte Verhalten fest, wenn der Inhalt im horizontalen und/oder vertikalen Bereich nicht in den Padding-Bereich des Elements passt (überläuft).

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

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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

Die `overflow`-Eigenschaft wird als ein oder zwei {{CSSXref("overflow_value", "&lt;overflow&gt;")}} Schlüsselwortwerte angegeben. Wenn nur ein Schlüsselwort angegeben ist, werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Wenn zwei Schlüsselwörter angegeben sind, gilt der erste Wert für `overflow-x` in der horizontalen Richtung und der zweite gilt für `overflow-y` in der vertikalen Richtung.

### Werte

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Padding-Bereichs des Elements sichtbar sein. Der Elementkasten ist kein {{Glossary("scroll_container", "scroll container")}}. Dies ist der Standardwert der `overflow`-Eigenschaft.
- `hidden`
  - : Überlaufender Inhalt wird am Rand des Padding-Bereichs des Elements abgeschnitten. Es gibt keine Scrollleisten, und der abgeschnittene Inhalt ist nicht sichtbar (d.h. abgeschnittener Inhalt wird ausgeblendet), aber der Inhalt existiert weiterhin. Benutzeragenten fügen keine Scrollleisten hinzu und ermöglichen den Benutzern auch nicht, den Inhalt außerhalb des abgeschnittenen Bereichs durch Aktionen wie Dragging auf einem Touchscreen oder Verwenden des Scrollrads einer Maus zu sehen. Der Inhalt kann jedoch programmatisch gescrollt werden (zum Beispiel durch Verlinken auf Ankertext, durch Tabben zu einem versteckten, aber fokussierbaren Element oder durch Setzen des Wertes der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)-Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo)-Methode), in diesem Fall ist der Elementkasten ein Scrollcontainer.
- `clip`
  - : Überlaufender Inhalt wird am _overflow clip edge_ des Elements abgeschnitten, der mit der {{cssxref("overflow-clip-margin")}} Eigenschaft definiert wird. Infolgedessen überläuft der Inhalt den Padding-Bereich des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin` oder um `0px`, wenn nicht festgelegt. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keine Scrollleiste hinzu, und programmatisches Scrollen wird ebenfalls nicht unterstützt. Es wird kein neuer [formatting context](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt. Um einen Formatierungskontext zu erstellen, verwenden Sie `overflow: clip` zusammen mit {{cssxref("display", "display: flow-root", "#flow-root")}}. Der Elementkasten ist kein Scrollcontainer.
- `scroll`
  - : Überlaufender Inhalt wird am Rand des Padding-Bereichs des Elements abgeschnitten, und überlaufender Inhalt kann mit Scrollleisten in den Sichtbereich gescrollt werden. Benutzeragenten zeigen Scrollleisten an, unabhängig davon, ob Inhalt überläuft oder nicht, also in der horizontalen und vertikalen Richtung, wenn der Wert für beide Richtungen gilt. Die Verwendung dieses Schlüsselworts kann daher verhindern, dass Scrollleisten erscheinen und verschwinden, wenn sich der Inhalt ändert. Drucker können dennoch überlaufenden Inhalt drucken. Der Elementkasten ist ein Scrollcontainer.
- `auto`
  - : Überlaufender Inhalt wird am Rand des Padding-Bereichs des Elements abgeschnitten, und überlaufender Inhalt kann mit Scrollleisten in den Sichtbereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollleisten _nur dann_ an, wenn der Inhalt überläuft. Wenn der Inhalt in den Padding-Bereich des Elements passt, sieht es genauso aus wie bei `visible`, erstellt jedoch immer noch einen neuen Formatierungskontext. Der Elementkasten ist ein Scrollcontainer.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein altes Alias für `auto`. Mit `overlay` werden die Scrollleisten über dem Inhalt gezeichnet, anstatt Platz zu beanspruchen.

## Beschreibung

Die Überlaufoptionen umfassen das Ausblenden von Überlaufinhalten, das Aktivieren von Scrollleisten, um Überlaufinhalte anzuzeigen, oder das Anzeigen des Inhaltes, der über einen Elementkasten hinaus in die umliegende Fläche fließt, sowie Kombinationen davon.

Die folgenden Nuancen sollten beim Verwenden der verschiedenen Schlüsselwörter für `overflow` beachtet werden:

- Das Festlegen eines anderen Wertes als `visible` (dem Standard) oder `clip` für `overflow` erstellt einen neuen [Block Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context). Dies ist aus technischen Gründen notwendig; wenn ein Float mit einem scrollenden Element kollidiert, würde es den Inhalt nach jedem Scroll-Schritt zwangsweise neu umwickeln, was zu einem langsamen Scrollerlebnis führt.
- Damit eine `overflow`-Einstellung die gewünschte Wirkung hat, muss das Block-Level-Element entweder eine festgelegte Höhe ({{cssxref("height")}} oder {{cssxref("max-height")}}) haben, wenn der Überlauf in der vertikalen Richtung ist, eine festgelegte Breite ({{cssxref("width")}} oder {{cssxref("max-width")}}) haben, wenn der Überlauf in der horizontalen Richtung ist, eine festgelegte Blockgröße (({{cssxref("block-size")}} oder {{cssxref("max-block-size")}}), wenn der Überlauf in der Block-Richtung ist, oder eine festgelegte Inline-Größe (({{cssxref("inline-size")}} oder {{cssxref("max-inline-size")}}) oder {{cssxref("white-space")}} auf `nowrap` gesetzt haben, wenn der Überlauf in der Inline-Richtung ist.
- Das Festlegen von `overflow` auf `visible` in einer Richtung (d.h. `overflow-x` oder `overflow-y`), wenn es in der anderen Richtung nicht auf `visible` oder `clip` eingestellt ist, führt dazu, dass sich der `visible`-Wert wie `auto` verhält.
- Das Festlegen von `overflow` auf `clip` in einer Richtung führt dazu, dass sich der `clip`-Wert wie `hidden` verhält, wenn er in der anderen Richtung nicht auf `visible` oder `clip` eingestellt ist.
- Die JavaScript-Eigenschaft [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop) kann verwendet werden, um durch den Inhalt in einem Scrollcontainer zu scrollen, außer wenn `overflow` auf `clip` gesetzt ist.
- Das Setzen von `overflow` auf Bilder und andere {{Glossary("replaced_elements", "ersetzte Elemente")}} funktioniert wie erwartet in Browsern, die das CSS Overflow Module Level 4 unterstützen; in früheren Versionen der Spezifikation wurden ersetzte Elemente immer an den Rand des Containers abgeschnitten.
  Siehe [Browser-Kompatibilität](#browser-kompatibilität) für unterstützende Browser.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Ein scrollender Inhaltsbereich ist nicht über die Tastatur fokussierbar, sodass er von einem reinen Tastaturbenutzer nicht gescrollt werden kann. Firefox und Chrome 132 und höher sind Ausnahmen; sie machen Scrollcontainer standardmäßig fokussierbar.

Für andere Browser müssen Sie, um reinen Tastaturbenutzern das Scrollen im Container zu ermöglichen, dem Container einen [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) mit `tabindex="0"` zuweisen. Leider hat ein Screenreader möglicherweise keinen Kontext über den Container, wenn er auf dieser Tabulatortaste stoppt, und könnte möglicherweise den gesamten Inhalt des Containers ankündigen. Um dies zu mildern, geben Sie dem Container eine geeignete [WAI-ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) (`role="region"`, zum Beispiel) und einen zugänglichen Namen (über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)).

## Beispiele

### Demonstration der Ergebnisse der verschiedenen `overflow`-Schlüsselwörter

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
- [Tastaturbasierte Scrollbereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
