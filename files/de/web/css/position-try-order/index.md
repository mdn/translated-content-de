---
title: position-try-order
slug: Web/CSS/position-try-order
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{seecompattable}}

Die **`position-try-order`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, verschiedene Fallback-Optionen anzugeben, die zu einem verfügbaren position-try Fallback führen, um die Position eines anchor-positionierten Elements festzulegen, anstatt dessen anfängliche Positionseinstellungen zu verwenden.

> [!NOTE]
> Es gibt auch eine Kurzschreibweise — {{cssxref("position-try")}}, die verwendet werden kann, um `position-try-order` und {{cssxref("position-try-fallbacks")}} Werte in einer einzigen Deklaration anzugeben.

## Syntax

```css
/* Schlüsselwörter */
position-try-order: normal;
position-try-order: most-height;
position-try-order: most-width;
position-try-order: most-block-size;
position-try-order: most-inline-size;

/* Globale Werte */
position-try-order: inherit;
position-try-order: initial;
position-try-order: revert;
position-try-order: revert-layer;
position-try-order: unset;
```

### Werte

Die Eigenschaft `position-try-order` kann entweder als das Schlüsselwort `normal` oder als ein `<try-size>` angegeben werden.

- `normal`
  - : Der Standardwert. Keine position-try Fallback-Optionen werden ausprobiert, wenn das Element erstmals angezeigt wird.
- `<try-size>`
  - : Definiert die verschiedenen Fallback-Optionen zur Größe, die Kriterien festlegen, welche Fallback-Option auf das anchor-positionierte Element angewendet werden soll, wenn es erstmals gerendert wird. Verfügbare Werte sind:
    - `most-height`
      - : Die position try Fallback-Option wird angewendet, die dem enthaltenden Block des Elements die größte Höhe gibt.
    - `most-width`
      - : Die position try Fallback-Option wird angewendet, die dem enthaltenden Block des Elements die größte Breite gibt.
    - `most-block-size`
      - : Die position try Fallback-Option wird angewendet, die dem enthaltenden Block des Elements die größte Größe in Blockrichtung gibt.
    - `most-inline-size`
      - : Die position try Fallback-Option wird angewendet, die dem enthaltenden Block des Elements die größte Größe in Inline-Richtung gibt.

## Beschreibung

Die Eigenschaft `position-try-order` hat einen leicht anderen Fokus als die übrigen Funktionen der position-try Funktionalitäten, da sie Fallback-Optionen verwendet, wenn das positionierte Element erstmals angezeigt wird, anstatt beim Scrollen. Beispielsweise möchten Sie das Element möglicherweise an einem Ort mit mehr verfügbarer Höhe oder Breite als die Standard-Startposition anzeigen.

Der Browser testet die verfügbaren position-try Fallback-Optionen, um herauszufinden, welche dem anchor-positionierten Element im angegebenen Dimensionierungsbereich den meisten Platz bietet. Diese Option wird dann angewendet, und die ursprüngliche Stilgebung des Elements wird überschrieben.

Wenn keine position try Fallback-Option verfügbar ist, die mehr Breite/Höhe als die dem Element zugewiesene anfängliche Positionierung bietet, wird keine position try Option angewendet. Im Effekt verhält es sich, als ob `position-try-order` auf `normal` gesetzt wäre.

Für detaillierte Informationen zu Anker-Funktionen und der Verwendung von position try Optionen, siehe die [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und die Anleitung [Overflow behandeln: Try-Fallbacks und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `position-try-order`

Diese Demo zeigt die Wirkung von `position-try-order`.

#### HTML

Das HTML umfasst zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem anchor-positionierten Element werden, sowie ein `<form>`, das Radiobuttons enthält, mit denen Sie verschiedene Werte von `position-try-order` auswählen können.

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Dies ist ein Informationsfeld.</p>
</div>

<form>
  <fieldset>
    <legend>Wählen Sie eine Try-Reihenfolge</legend>
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

Im CSS erhält der Anker einen {{cssxref("anchor-name")}} und hat einen großen {{cssxref("margin")}}, um ihn zur oberen Mitte des Ansichtsfensters zu positionieren:

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

Wir fügen dann eine benutzerdefinierte Positionierungsoption namens `--custom-bottom` hinzu, die das Element unter dem Anker positioniert und ihm einen entsprechenden Abstand gibt:

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Wir positionieren das Element zunächst über seinem Anker und geben ihm dann unsere benutzerdefinierte Positionierungsoption mit der Kurzschreibweise `position-try`, die auch die `position-try-order` Eigenschaft auf `normal` setzt:

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

Schließlich fügen wir etwas JavaScript hinzu. Dadurch wird ein [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignishandler auf die Radio-Buttons gesetzt, sodass bei Auswahl eines neuen Wertes dieser Wert auf die `position-try-order` Eigenschaft des Infoboxes angewendet wird.

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

Probieren Sie aus, die `most-height` Reihenfolge auszuwählen. Dies hat den Effekt, dass `--custom-bottom` als position try Fallback-Option angewendet wird, die das Element unter dem Anker positioniert. Dies tritt auf, weil unter dem Anker mehr vertikaler Platz vorhanden ist als darüber.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-fallbacks")}}
- Die {{cssxref("@position-try")}} At-Regel
- [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Overflow behandeln: Try-Fallbacks und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
