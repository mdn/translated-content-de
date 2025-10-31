---
title: position-try-order
slug: Web/CSS/Reference/Properties/position-try-order
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`position-try-order`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, verschiedene Fallback-Optionen zu spezifizieren, die dazu führen, dass ein verfügbarer position-try-Fallback verwendet wird, um die Position eines ankerpositionierten Elements festzulegen, anstatt seiner initialen Positionseinstellungen.

> [!NOTE]
> Es gibt auch eine Kurzschreibweise — {{cssxref("position-try")}}, die verwendet werden kann, um `position-try-order` und {{cssxref("position-try-fallbacks")}} Werte in einer einzigen Deklaration zu spezifizieren.

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
  - : Der Standardwert. Keine position-try-Fallback-Optionen werden versucht, wenn das Element zuerst angezeigt wird.
- `<try-size>`
  - : Definiert die verschiedenen try size Fallback-Optionen, die Kriterien festlegen, die bestimmen, welcher try Fallback auf das ankerpositionierte Element angewendet werden soll, wenn es initial dargestellt wird. Verfügbare Werte sind:
    - `most-height`
      - : Die position try Fallback-Option wird angewendet, die dem enthaltenen Block des Elements die größte Höhe gibt.
    - `most-width`
      - : Die position try Fallback-Option wird angewendet, die dem enthaltenen Block des Elements die größte Breite gibt.
    - `most-block-size`
      - : Die position try Fallback-Option wird angewendet, die dem enthaltenen Block des Elements die größte Blockrichtunggröße gibt.
    - `most-inline-size`
      - : Die position try Fallback-Option wird angewendet, die dem enthaltenen Block des Elements die größte Inlinerichtunggröße gibt.

## Beschreibung

Die `position-try-order` Eigenschaft hat einen leicht anderen Fokus als der Rest der position-try Funktionalitätsmerkmale, indem sie position-try-Fallback-Optionen nutzt, wenn das positionierte Element zuerst angezeigt wird, anstatt wenn es gescrollt wird. Zum Beispiel könnte es sein, dass Sie das Element zunächst in einem Bereich anzeigen möchten, der mehr verfügbare Höhe oder Breite als die standardmäßige Anfangsposition hat.

Der Browser wird die verfügbaren position-try-Fallback-Optionen testen, um herauszufinden, welche dem ankerpositionierten Element den meisten Platz in der angegebenen Dimension bietet. Diese Option wird dann angewendet und überschreibt das initiale Styling des Elements.

Wenn keine position try Fallback-Option verfügbar ist, die mehr Breite/Höhe bietet als die anfänglich zugewiesene Positionierung des Elements, wird keine position try Option angewendet. Im Effekt verhält es sich so, als ob `position-try-order` auf `normal` gesetzt wäre.

Für detaillierte Informationen zu Ankerfunktionen und der Nutzung von position try Optionen, siehe das [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Landing-Page und den [Fallback options and conditional hiding for overflow](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `position-try-order`

Diese Demo zeigt die Wirkung von `position-try-order`.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem ankerpositionierten Element werden, sowie ein `<form>`, das Radiobuttons enthält, die es Ihnen ermöglichen, verschiedene Werte von `position-try-order` auszuwählen.

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

Im CSS wird dem Anker ein {{cssxref("anchor-name")}} gegeben und mit einem großen {{cssxref("margin")}} versehen, um ihn in der oberen Mitte des Ansichtsfensters zu positionieren:

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

Wir fügen dann eine benutzerdefinierte Positionsoption namens `--custom-bottom` hinzu, die das Element unter dem Anker positioniert und ihm einen geeigneten Margin gibt:

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Wir positionieren das Element zunächst über seinem Anker und geben ihm dann unsere benutzerdefinierte Positionsoption mithilfe der Kurzschreibweise `position-try`, die auch die Eigenschaft `position-try-order` auf `normal` setzt:

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

Schließlich fügen wir etwas JavaScript hinzu. Dies setzt einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Event-Handler auf die Radiobuttons, damit bei Auswahl eines neuen Wertes dieser Wert auf die `position-try-order` Eigenschaft der Infobox angewendet wird.

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

Versuchen Sie, die `most-height` Order-Option auszuwählen. Dies hat die Wirkung, `--custom-bottom` als eine position try Fallback-Option anzuwenden, die das Element unter dem Anker positioniert. Dies geschieht, weil unter dem Anker mehr vertikaler Platz ist als darüber.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-fallbacks")}}
- Die {{cssxref("@position-try")}} At-Regel
- [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung
- [Fallback options and conditional hiding for overflow](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Anleitung
