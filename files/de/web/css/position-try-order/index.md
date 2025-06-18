---
title: position-try-order
slug: Web/CSS/position-try-order
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{CSSRef}}

Die **`position-try-order`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, verschiedene Fallback-Optionen anzugeben, mit denen eine verfügbare Position-Try-Fallback-Option verwendet wird, um die Position eines Anker-Positionierten Elements festzulegen, anstatt seiner anfänglichen Positionseinstellungen.

> [!NOTE]
> Es gibt auch eine Kurzform — {{cssxref("position-try")}}, mit der Sie sowohl `position-try-order` als auch {{cssxref("position-try-fallbacks")}} Werte in einer einzigen Deklaration angeben können.

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
  - : Der Standardwert. Es werden keine Position-Try-Fallback-Optionen ausprobiert, wenn das Element zuerst angezeigt wird.
- `<try-size>`
  - : Definiert die verschiedenen Fallback-Optionen für die Try-Größen, die Kriterien angeben, die bestimmen, welcher Try-Fallback auf das anker-positionierte Element angewendet werden soll, wenn es initial gerendert wird. Verfügbare Werte sind:
    - `most-height`
      - : Die Position-Try-Fallback-Option wird angewendet, die dem enthaltenen Block des Elements die größte Höhe gibt.
    - `most-width`
      - : Die Position-Try-Fallback-Option wird angewendet, die dem enthaltenen Block des Elements die größte Breite gibt.
    - `most-block-size`
      - : Die Position-Try-Fallback-Option wird angewendet, die dem enthaltenen Block des Elements die größte Größe in der Blockrichtung gibt.
    - `most-inline-size`
      - : Die Position-Try-Fallback-Option wird angewendet, die dem enthaltenen Block des Elements die größte Größe in der Inline-Richtung gibt.

## Beschreibung

Die `position-try-order` Eigenschaft hat einen etwas anderen Fokus als die restlichen Funktionalitätsmerkmale der Position-Try-Features, da sie Positions-Try-Fallback-Optionen verwendet, wenn das positionierte Element zuerst angezeigt wird, anstatt wenn es gescrollt wird. Zum Beispiel könnte man das Element initial in einem Bereich anzeigen wollen, der mehr verfügbare Höhe oder Breite als die standardmäßige Anfangsposition hat.

Der Browser testet die verfügbaren Position-Try-Fallback-Optionen, um festzustellen, welche dem anker-positionierten Element den meisten Platz in der angegebenen Dimension bietet. Diese Option wird dann angewendet und überschreibt das ursprüngliche Styling des Elements.

Wenn keine Position-Try-Fallback-Option verfügbar ist, die mehr Breite/Höhe bietet als die anfängliche Positionierung, die dem Element zugewiesen ist, wird keine Position-Try-Option angewendet. In der Praxis verhält es sich so, als ob `position-try-order` auf `normal` gesetzt wäre.

Für detaillierte Informationen zu Ankerfunktionen und der Verwendung von Position-Try-Optionen siehe das [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul und den [Fallback-Optionen und bedingtes Verbergen für Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `position-try-order`

Diese Demo zeigt die Wirkung von `position-try-order`.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem anker-positionierten Element werden, und ein `<form>`, das Radiobuttons enthält, mit denen Sie verschiedene Werte von `position-try-order` auswählen können.

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

Im CSS erhält der Anker einen {{cssxref("anchor-name")}} und hat einen großen {{cssxref("margin")}}, um ihn näher zur oberen Mitte des Viewports zu positionieren:

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

Wir fügen dann eine benutzerdefinierte Positionsoption namens `--custom-bottom` hinzu, die das Element unter dem Anker positioniert und ihm einen passenden Rand gibt:

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Wir positionieren das Element zuerst über seinem Anker und geben ihm dann unsere benutzerdefinierte Positionsoption mit der Kurzform `position-try`, die auch die Eigenschaft `position-try-order` auf `normal` setzt:

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

Schließlich fügen wir etwas JavaScript hinzu. Dies setzt einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Handler auf die Radiobuttons, sodass, wenn ein neuer Wert ausgewählt wird, dieser Wert auf die `position-try-order` Eigenschaft des Infokastens angewendet wird.

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

Versuchen Sie, die `most-height` Reihenfolgewahl auszuwählen. Dies hat zur Folge, dass `--custom-bottom` als Position-Try-Fallback-Option angewendet wird, die das Element unter dem Anker positioniert. Dies tritt auf, weil unter dem Anker mehr vertikaler Raum vorhanden ist als darüber.

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
- [Fallback-Optionen und bedingtes Verbergen für Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
