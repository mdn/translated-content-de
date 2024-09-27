---
title: position-try-order
slug: Web/CSS/position-try-order
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{seecompattable}}

Die **`position-try-order`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, verschiedene Rückfalloptionen anzugeben, die dazu führen, dass eine verfügbare Position-Try-Rückfalloption verwendet wird, um die Position eines Anker-positionierten Elements festzulegen, anstatt seiner anfänglichen Positionseinstellungen.

> [!NOTE]
> Es gibt auch eine Kurzschreibweise — {{cssxref("position-try")}}, mit der `position-try-order` und {{cssxref("position-try-fallbacks")}} Werte in einer einzigen Deklaration angegeben werden können.

## Syntax

```css
/* Keywords */
position-try-order: normal;
position-try-order: most-height;
position-try-order: most-width;
position-try-order: most-block-size;
position-try-order: most-inline-size;

/* Global values */
position-try-order: inherit;
position-try-order: initial;
position-try-order: revert;
position-try-order: revert-layer;
position-try-order: unset;
```

### Werte

Die Eigenschaft `position-try-order` kann entweder als Schlüsselwortwert `normal` oder als `<try-size>` angegeben werden.

- `normal`
  - : Der Standardwert. Es werden keine Position-Try-Rückfalloptionen ausprobiert, wenn das Element zuerst angezeigt wird.
- `<try-size>`
  - : Definiert die verschiedenen Try-Size-Rückfalloptionen, die Kriterien festlegen, was Try-Rückfall auf das Anker-positionierte Element angewendet werden soll, wenn es erstmals gerendert wird. Verfügbare Werte sind:
    - `most-height`
      - : Die Position-Try-Rückfalloption, die die Höhe des enthaltenden Blocks des Elements maximiert, wird angewendet.
    - `most-width`
      - : Die Position-Try-Rückfalloption, die die Breite des enthaltenden Blocks des Elements maximiert, wird angewendet.
    - `most-block-size`
      - : Die Position-Try-Rückfalloption, die die größte Größe in Blockrichtung des enthaltenden Blocks des Elements maximiert, wird angewendet.
    - `most-inline-size`
      - : Die Position-Try-Rückfalloption, die die größte Größe in Inlinerichtung des enthaltenden Blocks des Elements maximiert, wird angewendet.

## Beschreibung

Die Eigenschaft `position-try-order` hat einen leicht anderen Fokus als die restlichen Position-Try-Funktionalitäten, da sie Position-Try-Rückfalloptionen nutzt, wenn das positionierte Element zuerst angezeigt wird, anstatt wenn es gescrollt wird. Zum Beispiel möchten Sie das Element möglicherweise zuerst in einem Bereich anzeigen, der mehr verfügbare Höhe oder Breite als die Standardanfangsposition hat.

Der Browser testet die verfügbaren Position-Try-Rückfalloptionen, um herauszufinden, welche die meiste Fläche in der angegebenen Dimension für das Anker-positionierte Element bietet. Diese Option wird dann angewendet und überschreibt das anfängliche Styling des Elements.

Wenn keine Position-Try-Rückfalloption verfügbar ist, die mehr Breite/Höhe als die anfängliche Positionierung des Elements bietet, wird keine Position-Try-Option angewendet. Im Grunde ist das Verhalten so, als wäre `position-try-order` auf `normal` gesetzt.

Für detaillierte Informationen über Anker-Funktionen und Position-Try-Option-Nutzung siehe die [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Landingpage und den [Überlauf verarbeiten: Try Rückfälle und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung von `position-try-order`

Dieses Demo zeigt die Auswirkung von `position-try-order`.

#### HTML

Das HTML beinhaltet zwei {{htmlelement("div")}}-Elemente, die zu einem Anker und einem Anker-positionierten Element werden, sowie ein `<form>`, das Radiobuttons enthält, mit denen Sie verschiedene Werte von `position-try-order` auswählen können.

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>

<form>
  <fieldset>
    <legend>Choose a try order</legend>
    <div>
      <label for="radio-normal">normal</label>
      <input
        type="radio"
        id="radio-normal"
        name="position-try-order"
        value="normal"
        checked />
    </div>
    <div>
      <label for="radio-most-height">most-height</label>
      <input
        type="radio"
        id="radio-most-height"
        name="position-try-order"
        value="most-height" />
    </div>
  </fieldset>
</form>
```

#### CSS

Im CSS erhält der Anker einen {{cssxref("anchor-name")}} und hat einen großen {{cssxref("margin")}}, um ihn zum oberen Zentrum des Viewports zu positionieren:

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
.anchor {
  anchor-name: --myAnchor;
  margin: 90px auto;
}
```

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
}

form {
  position: fixed;
  bottom: 2px;
  right: 2px;
}
```

Wir fügen dann eine benutzerdefinierte Positionsoption namens `--custom-bottom` hinzu, die das Element unterhalb des Ankers positioniert und ihm einen entsprechenden Rand gibt:

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Wir positionieren das Element zunächst über seinem Anker und geben ihm dann unsere benutzerdefinierte Positionsoption mit Hilfe der `position-try` Kurzschreibweise, die auch die Eigenschaft `position-try-order` auf `normal` setzt:

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;

  bottom: anchor(top);
  margin-bottom: 10px;
  justify-self: anchor-center;

  position-try: normal --custom-bottom;
}
```

#### JavaScript

Schließlich fügen wir etwas JavaScript hinzu. Dies setzt einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignishandler für die Radiobuttons, sodass, wenn ein neuer Wert ausgewählt wird, dieser Wert auf die Eigenschaft `position-try-order` der Infobox angewendet wird.

```js
const infobox = document.querySelector(".infobox");
const form = document.forms[0];
const radios = form.elements["position-try-order"];

for (const radio of radios) {
  radio.addEventListener("change", setTryOrder);
}

function setTryOrder(e) {
  const tryOrder = e.target.value;
  infobox.style.positionTryOrder = tryOrder;
}
```

#### Ergebnis

{{ EmbedLiveSample("Basic `position-try-order` usage", "100%", "310") }}

Versuchen Sie, die `most-height` Order-Option zu wählen. Dies hat die Wirkung, `--custom-bottom` als eine Position-Try-Rückfalloption anzuwenden, die das Element unter dem Anker positioniert. Dies geschieht, weil es mehr vertikalen Platz unterhalb des Ankers gibt als darüber.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-fallbacks")}}
- Die {{cssxref("@position-try")}} at-rule
- [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS Anker-Positionierung verwenden](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Überlauf verarbeiten: Try Rückfälle und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
