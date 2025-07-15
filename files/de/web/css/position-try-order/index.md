---
title: position-try-order
slug: Web/CSS/position-try-order
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`position-try-order`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, verschiedene Fallback-Optionen anzugeben, die dazu führen, dass ein verfügbarer Position-Try-Fallback verwendet wird, um die Position eines ankerpositionierten Elements festzulegen, anstatt seine ursprünglichen Positionseinstellungen.

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

Die Eigenschaft `position-try-order` kann entweder als Schlüsselwortwert `normal` oder als `<try-size>` angegeben werden.

- `normal`
  - : Der Standardwert. Es werden keine Position-Try-Fallback-Optionen ausprobiert, wenn das Element zum ersten Mal angezeigt wird.
- `<try-size>`
  - : Definiert die verschiedenen Try-Size-Fallback-Optionen, die Kriterien festlegen, welche Try-Fallback auf das ankerpositionierte Element angewendet werden soll, wenn es initial gerendert wird. Verfügbare Werte sind:
    - `most-height`
      - : Die Position-Try-Fallback-Option wird angewendet, die dem umschließenden Block des Elements die meiste Höhe gibt.
    - `most-width`
      - : Die Position-Try-Fallback-Option wird angewendet, die dem umschließenden Block des Elements die meiste Breite gibt.
    - `most-block-size`
      - : Die Position-Try-Fallback-Option wird angewendet, die dem umschließenden Block des Elements die größte Größe in Blockrichtung gibt.
    - `most-inline-size`
      - : Die Position-Try-Fallback-Option wird angewendet, die dem umschließenden Block des Elements die größte Größe in Inline-Richtung gibt.

## Beschreibung

Die `position-try-order` Eigenschaft hat einen etwas anderen Schwerpunkt als die restlichen Funktionen der Position-Try-Funktionalität, da sie von Position-Try-Fallback-Optionen Gebrauch macht, wenn das positionierte Element erstmals angezeigt wird, anstatt wenn es gescrollt wird. Beispielsweise möchten Sie das Element möglicherweise zunächst in einem Raum mit mehr verfügbarer Höhe oder Breite als die Standardanfangposition anzeigen.

Der Browser prüft die verfügbaren Position-Try-Fallback-Optionen, um herauszufinden, welche dem ankerpositionierten Element den meisten Platz in der angegebenen Dimension bietet. Anschließend wird diese Option angewendet und überschreibt das ursprüngliche Styling des Elements.

Falls keine Position-Try-Fallback-Option verfügbar ist, die mehr Breite/Höhe als die dem Element zugewiesene ursprüngliche Positionierung bietet, wird keine Position-Try-Option angewendet. Effektiv verhält es sich so, als ob `position-try-order` auf `normal` gesetzt wäre.

Für detaillierte Informationen zu Ankerfunktionen und der Verwendung von Position-Try-Optionen siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `position-try-order`

Dieses Demo zeigt die Wirkung von `position-try-order`.

#### HTML

Das HTML umfasst zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem ankerpositionierten Element werden, und ein `<form>`, das Radiobuttons enthält, mit denen Sie verschiedene Werte von `position-try-order` auswählen können.

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

Im CSS wird dem Anker ein {{cssxref("anchor-name")}} zugewiesen und er hat einen großen {{cssxref("margin")}}, um ihn zur oberen Mitte des Viewports zu positionieren:

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

Wir fügen dann eine benutzerdefinierte Positionsoption namens `--custom-bottom` hinzu, die das Element unter dem Anker positioniert und ihm einen geeigneten Rand gibt:

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Wir positionieren das Element zunächst über seinem Anker und geben ihm dann unsere benutzerdefinierte Positionsoption mithilfe der `position-try` Kurzform, die auch die `position-try-order` Eigenschaft auf `normal` setzt:

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

Schließlich binden wir etwas JavaScript ein. Dies setzt einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Handler auf die Radiobuttons, so dass, wenn ein neuer Wert ausgewählt wird, dieser Wert auf die `position-try-order` Eigenschaft des Infokastens angewendet wird.

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

Versuchen Sie, die `most-height` Order-Option auszuwählen. Dies hat zur Folge, dass `--custom-bottom` als Position-Try-Fallback-Option angewendet wird, die das Element unter dem Anker positioniert. Dies geschieht, weil unterhalb des Ankers mehr vertikaler Platz zur Verfügung steht als darüber.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-fallbacks")}}
- Die {{cssxref("@position-try")}} At-Regel
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
