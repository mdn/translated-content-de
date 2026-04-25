---
title: "`position-try-order` CSS property"
short-title: position-try-order
slug: Web/CSS/Reference/Properties/position-try-order
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`position-try-order`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, verschiedene Fallback-Optionen anzugeben, bei denen ein verfügbarer Fallback von `position-try` verwendet wird, um die Position eines ankergestützten Elements festzulegen, anstatt die ursprünglichen Positionseinstellungen zu verwenden.

> [!NOTE]
> Es gibt auch eine Kurzschreibweise — {{cssxref("position-try")}}, die verwendet werden kann, um `position-try-order` und {{cssxref("position-try-fallbacks")}}-Werte in einer einzigen Deklaration anzugeben.

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

Die `position-try-order`-Eigenschaft kann entweder als Schlüsselwortwert `normal` oder als `<try-size>` angegeben werden.

- `normal`
  - : Der Standardwert. Es werden keine Fallback-Optionen von `position-try` ausprobiert, wenn das Element zum ersten Mal angezeigt wird.
- `<try-size>`
  - : Definiert die verschiedenen Try-Size-Fallback-Optionen, die Kriterien spezifizieren, um zu bestimmen, welcher Try-Fallback auf das ankergestützte Element angewendet werden soll, wenn es erstmals gerendert wird. Verfügbare Werte sind:
    - `most-height`
      - : Es wird die Fallback-Option angewendet, die dem umgebenden Block des Elements die größte Höhe gibt.
    - `most-width`
      - : Es wird die Fallback-Option angewendet, die dem umgebenden Block des Elements die größte Breite gibt.
    - `most-block-size`
      - : Es wird die Fallback-Option angewendet, die dem umgebenden Block des Elements die größte Größe in Blockrichtung gibt.
    - `most-inline-size`
      - : Es wird die Fallback-Option angewendet, die dem umgebenden Block des Elements die größte Größe in Inline-Richtung gibt.

## Beschreibung

Die `position-try-order`-Eigenschaft hat einen etwas anderen Fokus als die restlichen `position-try`-Funktionalitäten, da sie Fallback-Optionen von `position-try` verwendet, wenn das positionierte Element zum ersten Mal angezeigt wird, anstatt beim Scrollen. Zum Beispiel möchten Sie das Element möglicherweise zunächst in einem Bereich anzeigen, der mehr verfügbare Höhe oder Breite als die standardmäßige Anfangsposition hat.

Der Browser prüft die verfügbaren Fallback-Optionen von `position-try`, um festzustellen, welche dem ankergestützten Element in der angegebenen Dimension am meisten Platz bieten. Diese Option wird dann angewendet und überschreibt das anfängliche Styling des Elements.

Wenn keine Fallback-Option von `position-try` verfügbar ist, die mehr Breite/Höhe als die anfängliche Positionierung des Elements bietet, wird keine Fallback-Option angewendet. In der Praxis verhält es sich so, als ob `position-try-order` auf `normal` gesetzt wäre.

Für detaillierte Informationen zu Ankerfunktionen und der Verwendung von `position-try`-Optionen, siehe das [CSS-Anchor-Positioning](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul und den [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `position-try-order`

Dieses Demo zeigt die Auswirkung von `position-try-order`.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}}-Elemente, die zu einem Anker und einem ankergestützten Element werden, sowie ein `<form>` mit Radiobuttons, die es Ihnen ermöglichen, verschiedene Werte von `position-try-order` auszuwählen.

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

Im CSS wird dem Anker ein {{cssxref("anchor-name")}} zugewiesen und er erhält einen großen {{cssxref("margin")}}, um ihn in die Nähe der oberen Mitte des Ansichtsfensters zu verschieben:

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

Wir fügen dann eine benutzerdefinierte Positionierungsoption namens `--custom-bottom` hinzu, die das Element unter dem Anker positioniert und ihm einen angemessenen Rand gibt:

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Wir positionieren das Element zunächst über seinem Anker und geben ihm dann unsere benutzerdefinierte Positionsoption mit der Kurzschreibweise `position-try`, die auch die `position-try-order`-Eigenschaft auf `normal` setzt:

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

Schließlich fügen wir etwas JavaScript hinzu. Dieses setzt einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignishandler auf die Radiobuttons, sodass bei Auswahl eines neuen Werts dieser Wert auf die `position-try-order`-Eigenschaft des Infokastens angewendet wird.

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

Versuchen Sie, die Reihenfolge `most-height` auszuwählen. Dies bewirkt, dass `--custom-bottom` als Fallback-Option von `position-try` angewendet wird, die das Element unter dem Anker positioniert. Dies tritt auf, weil es unter dem Anker mehr vertikalen Raum gibt als darüber.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-fallbacks")}}
- Die {{cssxref("@position-try")}}-Regel
- [CSS-Anchor-Positioning](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Verwendung der CSS-Anchor-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
