---
title: position-try-order
slug: Web/CSS/Reference/Properties/position-try-order
l10n:
  sourceCommit: 3e0ba995376cace7f08f0771635f86f0fb1753b3
---

Die **`position-try-order`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, verschiedene Fallback-Optionen anzugeben, die dazu führen, dass ein verfügbarer position-try Fallback verwendet wird, um die Position eines ankerpositionierten Elements festzulegen, anstatt der ursprünglichen Positionseinstellungen.

> [!NOTE]
> Es gibt auch eine Kurzschreibweise — {{cssxref("position-try")}}, die verwendet werden kann, um `position-try-order` und {{cssxref("position-try-fallbacks")}} Werte in einer einzigen Deklaration anzugeben.

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
  - : Der Standardwert. Es werden keine position-try Fallback-Optionen ausprobiert, wenn das Element zum ersten Mal angezeigt wird.
- `<try-size>`
  - : Definiert die verschiedenen Fallback-Optionen für die Größe, die Kriterien festlegen, welche Try-Fallback auf das ankerpositionierte Element angewendet werden soll, wenn es erstmals gerendert wird. Verfügbare Werte sind:
    - `most-height`
      - : Die Position-try Fallback-Option wird angewendet, die dem enthaltenden Block des Elements die meiste Höhe gibt.
    - `most-width`
      - : Die Position-try Fallback-Option wird angewendet, die dem enthaltenden Block des Elements die meiste Breite gibt.
    - `most-block-size`
      - : Die Position-try Fallback-Option wird angewendet, die dem enthaltenden Block des Elements die größte Größe in der Blockrichtung gibt.
    - `most-inline-size`
      - : Die Position-try Fallback-Option wird angewendet, die dem enthaltenden Block des Elements die größte Größe in der Inline-Richtung gibt.

## Beschreibung

Die `position-try-order` Eigenschaft hat einen leicht unterschiedlichen Fokus im Vergleich zu den restlichen Funktionen der position-try Funktionalität, da sie von Position-try Fallback-Optionen Gebrauch macht, wenn das positionierte Element zum ersten Mal angezeigt wird, anstatt beim Scrollen. Zum Beispiel möchten Sie das Element möglicherweise zunächst in einem Bereich anzeigen, der mehr verfügbare Höhe oder Breite als die Standard-Initialposition hat.

Der Browser wird die verfügbaren Position-try Fallback-Optionen testen, um herauszufinden, welche dem ankerpositionierten Element den meisten Platz in der angegebenen Dimension bietet. Dann wendet er diese Option an und überschreibt die ursprüngliche Stilgebung des Elements.

Wenn keine Position-try Fallback-Option verfügbar ist, die mehr Breite/Höhe als die dem Element zugewiesene Initialposition bietet, wird keine Position-try Option angewendet. Effektiv verhält es sich so, als ob `position-try-order` auf `normal` gesetzt wäre.

Für detaillierte Informationen zu Ankerfunktionen und der Verwendung von Position-try Optionen siehe das [CSS anchor positioning](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul und den [Fallback options and conditional hiding for overflow](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `position-try-order`

Dieses Demo zeigt die Auswirkung von `position-try-order`.

#### HTML

Das HTML umfasst zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem ankerpositionierten Element werden, und ein `<form>`, das Optionsfelder enthält, mit denen Sie verschiedene Werte von `position-try-order` auswählen können.

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

Im CSS wird dem Anker ein {{cssxref("anchor-name")}} gegeben und es wird ein großer {{cssxref("margin")}} verwendet, um ihn in Richtung der oberen Mitte des Viewports zu positionieren:

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

Wir fügen dann eine benutzerdefinierte Positionsoption namens `--custom-bottom` hinzu, die das Element unter dem Anker positioniert und ihm einen geeigneten Rand gibt:

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Wir positionieren das Element zunächst über seinem Anker und geben ihm dann unsere benutzerdefinierte Positionsoption mit der `position-try` Kurzschrift, die auch die `position-try-order` Eigenschaft auf `normal` setzt:

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

Schließlich fügen wir etwas JavaScript hinzu. Dies setzt einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignishandler auf die Optionsfelder, sodass beim Auswählen eines neuen Werts dieser Wert auf die `position-try-order` Eigenschaft der Info-Box angewendet wird.

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

Versuchen Sie, die `most-height` Reihenfolgeoption auszuwählen. Dies hat den Effekt, dass `--custom-bottom` als eine Position-try Fallback-Option angewendet wird, die das Element unter den Anker positioniert. Dies geschieht, weil es mehr vertikalen Platz unter dem Anker gibt als über ihm.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-fallbacks")}}
- Die {{cssxref("@position-try")}} At-Regel
- [CSS anchor positioning](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Verwendung der CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Anleitung
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Anleitung
