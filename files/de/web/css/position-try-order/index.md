---
title: position-try-order
slug: Web/CSS/position-try-order
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}{{seecompattable}}

Die **`position-try-order`** [CSS](/de/docs/Web/CSS) Eigenschaft erlaubt es Ihnen, verschiedene Fallback-Optionen anzugeben, die ein verfügbares Position-Try-Fallback verwenden, um die Position eines Anker-positionierten Elements festzulegen, anstatt der anfänglichen Positionseinstellungen.

> [!NOTE]
> Es gibt auch eine Kurznotation — {{cssxref("position-try")}}, die verwendet werden kann, um `position-try-order` und {{cssxref("position-try-fallbacks")}} Werte in einer einzigen Deklaration anzugeben.

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
  - : Der Standardwert. Keine Position-Try-Fallback-Optionen werden ausprobiert, wenn das Element zuerst angezeigt wird.
- `<try-size>`
  - : Definiert die verschiedenen Try-Size-Fallback-Optionen, die Kriterien angeben, die bestimmen, welches Try-Fallback auf das Anker-positionierte Element angewendet werden soll, wenn es anfänglich gerendert wird. Verfügbare Werte sind:
    - `most-height`
      - : Die Position-Try-Fallback-Option wird angewendet, welche dem Enthaltungsblock des Elements die meiste Höhe gibt.
    - `most-width`
      - : Die Position-Try-Fallback-Option wird angewendet, welche dem Enthaltungsblock des Elements die meiste Breite gibt.
    - `most-block-size`
      - : Die Position-Try-Fallback-Option wird angewendet, welche dem Enthaltungsblock des Elements die größte Größe in der Blockrichtung gibt.
    - `most-inline-size`
      - : Die Position-Try-Fallback-Option wird angewendet, welche dem Enthaltungsblock des Elements die größte Größe in der Inline-Richtung gibt.

## Beschreibung

Die `position-try-order` Eigenschaft legt einen leicht anderen Schwerpunkt als die restlichen Funktionen der Position-Try-Features darauf, dass sie Position-Try-Fallback-Optionen verwendet, wenn das positionierte Element zuerst angezeigt wird, und nicht, wenn es gescrollt wird. Zum Beispiel könnten Sie das Element anfänglich in einem Bereich anzeigen wollen, der mehr verfügbare Höhe oder Breite als die anfängliche Standardposition hat.

Der Browser wird die verfügbaren Position-Try-Fallback-Optionen testen, um herauszufinden, welche dem Anker-positionierten Element den meisten Raum in der angegebenen Dimension gibt. Dann wird diese Option angewendet, und die anfängliche Stilisierung des Elements wird überschrieben.

Wenn keine Position-Try-Fallback-Option verfügbar ist, die mehr Breite/Höhe als die anfängliche Positionierung des Elements bietet, wird keine Position-Try-Option angewendet. In der Praxis verhält es sich, als wäre `position-try-order` auf `normal` gesetzt.

Für detaillierte Informationen zu Anker-Features und der Nutzung von Position-Try-Optionen siehe die [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Fallback-Optionen und bedingten Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende `position-try-order` Verwendung

Dieses Demo zeigt die Wirkung von `position-try-order`.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}} Elemente, die ein Anker und ein Anker-positioniertes Element werden, und ein `<form>` mit Auswahlknöpfen, mit denen Sie verschiedene Werte von `position-try-order` auswählen können.

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

Im CSS erhält der Anker einen {{cssxref("anchor-name")}} und hat einen großen {{cssxref("margin")}}, um ihn in Richtung der oberen Mitte des Ansichtsfensters zu positionieren:

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

Wir fügen dann eine benutzerdefinierte Positionierungsoption namens `--custom-bottom` hinzu, die das Element unter dem Anker positioniert und ihm einen entsprechenden Rand gibt:

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Wir positionieren das Element anfänglich über seinem Anker und geben ihm dann unsere benutzerdefinierte Positionierungsoption unter Verwendung der `position-try` Kurznotation, die auch die `position-try-order` Eigenschaft auf `normal` setzt:

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

Schließlich schließen wir etwas JavaScript ein. Dies setzt einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignishandler auf die Auswahlknöpfe, sodass, wenn ein neuer Wert ausgewählt wird, dieser Wert auf die `position-try-order` Eigenschaft des Infokastens angewendet wird.

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

Versuchen Sie die Auswahl der `most-height` Order-Option. Dies hat die Wirkung, `--custom-bottom` als Position-Try-Fallback-Option anzuwenden, die das Element unter dem Anker positioniert. Dies geschieht, weil es mehr vertikalen Raum unter dem Anker gibt als darüber.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-fallbacks")}}
- Die {{cssxref("@position-try")}} At-Regel
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
