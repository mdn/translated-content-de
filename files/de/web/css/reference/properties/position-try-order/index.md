---
title: position-try-order
slug: Web/CSS/Reference/Properties/position-try-order
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`position-try-order`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, verschiedene Fallback-Optionen anzugeben, die dazu führen, dass ein verfügbarer position-try-Fallback verwendet wird, um die Position eines ankerpositionierten Elements festzulegen, anstatt der ursprünglichen Positionseinstellungen.

> [!NOTE]
> Es gibt auch eine Kurzform-Eigenschaft — {{cssxref("position-try")}}, die verwendet werden kann, um `position-try-order` und {{cssxref("position-try-fallbacks")}} Werte in einer einzigen Deklaration anzugeben.

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

Die `position-try-order` Eigenschaft kann entweder als Schlüsselwortwert `normal` oder als `<try-size>` angegeben werden.

- `normal`
  - : Der Standardwert. Es werden keine position-try-Fallback-Optionen ausprobiert, wenn das Element das erste Mal angezeigt wird.
- `<try-size>`
  - : Definiert die verschiedenen try-size-Fallback-Optionen, die Kriterien angeben, welche Try-Fallback auf das ankerpositionierte Element angewendet werden soll, wenn es ursprünglich dargestellt wird. Verfügbare Werte sind:
    - `most-height`
      - : Die position-try-Fallback-Option wird angewendet, die dem enthaltenden Block des Elements die größte Höhe verleiht.
    - `most-width`
      - : Die position-try-Fallback-Option wird angewendet, die dem enthaltenden Block des Elements die größte Breite verleiht.
    - `most-block-size`
      - : Die position-try-Fallback-Option wird angewendet, die dem enthaltenden Block des Elements die größte Größe in Blockrichtung verleiht.
    - `most-inline-size`
      - : Die position-try-Fallback-Option wird angewendet, die dem enthaltenden Block des Elements die größte Größe in der Inline-Richtung verleiht.

## Beschreibung

Die `position-try-order` Eigenschaft hat einen etwas anderen Fokus als die restlichen Funktionalitäten der position-try-Funktionen, da sie auf position-try-Fallback-Optionen zurückgreift, wenn das positionierte Element das erste Mal angezeigt wird, anstatt wenn es gescrollt wird. Zum Beispiel möchten Sie das Element möglicherweise ursprünglich in einem Bereich anzeigen, der mehr verfügbare Höhe oder Breite als die Standard-Startposition hat.

Der Browser testet die verfügbaren position-try-Fallback-Optionen, um herauszufinden, welche dem ankerpositionierten Element am meisten Raum in der angegebenen Dimension bietet. Diese Option wird dann angewendet und überschreibt das ursprüngliche Styling des Elements.

Wenn keine position-try-Fallback-Option verfügbar ist, die mehr Breite/Höhe bietet als die ursprüngliche Zuweisung der Position des Elements, wird keine position-try-Option angewendet. Tatsächlich verhält sich dies so, als ob `position-try-order` auf `normal` gesetzt wäre.

Für detaillierte Informationen zu Ankerfunktionen und der Verwendung von position-try-Optionen, siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul-Landingpage und den [Fallback-Optionen und bedingte Ausblendung für Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `position-try-order`

Dieses Demo zeigt die Wirkung von `position-try-order`.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}} Elemente, die ein Anker und ein ankerpositioniertes Element werden, und ein `<form>`, das Optionsfelder enthält, mit denen Sie verschiedene Werte von `position-try-order` auswählen können.

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

Im CSS erhält der Anker einen {{cssxref("anchor-name")}} und hat einen großen {{cssxref("margin")}}, um ihn in der oberen Mitte des Ansichtsbereichs zu positionieren:

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
  anchor-name: --my-anchor;
  margin: 90px auto;
}
```

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
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

Wir fügen dann eine benutzerdefinierte Positionsoption namens `--custom-bottom` hinzu, die das Element unter dem Anker positioniert und ihm einen entsprechenden Rand gibt:

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Wir positionieren das Element zunächst über seinem Anker und geben ihm dann unsere benutzerdefinierte Positionsoption mit der `position-try` Kurzform an, die auch die `position-try-order` Eigenschaft auf `normal` setzt:

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;

  bottom: anchor(top);
  margin-bottom: 10px;
  justify-self: anchor-center;

  position-try: normal --custom-bottom;
}
```

#### JavaScript

Schließlich fügen wir etwas JavaScript hinzu. Dies setzt einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignishandler auf die Optionsfelder, sodass, wenn ein neuer Wert ausgewählt wird, dieser Wert auf die `position-try-order` Eigenschaft der Infobox angewendet wird.

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

Versuchen Sie, die `most-height` Reihenfolgenoption auszuwählen. Dies hat den Effekt, `--custom-bottom` als position-try-Fallback-Option anzuwenden, die das Element unter dem Anker positioniert. Dies geschieht, weil unter dem Anker mehr vertikaler Raum vorhanden ist als darüber.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-fallbacks")}}
- Die {{cssxref("@position-try")}} At-Regel
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingte Ausblendung für Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
