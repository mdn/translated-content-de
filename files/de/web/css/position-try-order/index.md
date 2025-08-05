---
title: position-try-order
slug: Web/CSS/position-try-order
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die **`position-try-order`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, verschiedene Fallback-Optionen festzulegen, die zu einem verfügbaren position-try Fallback führen, um die Position eines ankerpositionierten Elements festzulegen, anstatt seine ursprünglichen Positionseinstellungen zu verwenden.

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
  - : Der Standardwert. Keine position-try Fallback-Optionen werden ausprobiert, wenn das Element zuerst angezeigt wird.
- `<try-size>`
  - : Definiert die verschiedenen Try-Size-Fallback-Optionen, die Kriterien festlegen, die bestimmen, welcher Try-Fallback auf das ankerpositionierte Element angewendet werden soll, wenn es anfänglich gerendert wird. Verfügbare Werte sind:
    - `most-height`
      - : Die position-try Fallback-Option wird angewendet, die dem umgebenden Block des Elements die größte Höhe gibt.
    - `most-width`
      - : Die position-try Fallback-Option wird angewendet, die dem umgebenden Block des Elements die größte Breite gibt.
    - `most-block-size`
      - : Die position-try Fallback-Option wird angewendet, die dem umgebenden Block des Elements die größte Größe in der Blockrichtung gibt.
    - `most-inline-size`
      - : Die position-try Fallback-Option wird angewendet, die dem umgebenden Block des Elements die größte Größe in der Inline-Richtung gibt.

## Beschreibung

Die `position-try-order` Eigenschaft hat einen leicht anderen Schwerpunkt als die restlichen position-try Funktionalitätsmerkmale, da sie position-try Fallback-Optionen verwendet, wenn das positionierte Element zuerst angezeigt wird, nicht wenn es gescrollt wird. Zum Beispiel möchten Sie das Element möglicherweise zuerst in einem Raum anzeigen, der mehr verfügbare Höhe oder Breite hat als die standardmäßige Anfangsposition.

Der Browser testet die verfügbaren position-try Fallback-Optionen, um herauszufinden, welche dem ankerpositionierten Element am meisten Platz in der angegebenen Dimension bietet. Diese Option wird dann angewendet und überschreibt die anfängliche Stilgebung des Elements.

Wenn keine position-try Fallback-Option verfügbar ist, die mehr Breite/Höhe bietet als die dem Element zugewiesene anfängliche Positionierung, wird keine position-try Option angewendet. Tatsächlich verhält es sich so, als ob `position-try-order` auf `normal` gesetzt wäre.

Für detaillierte Informationen zu Ankerfunktionen und der Verwendung von position-try Optionen, sehen Sie den [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Übersichtsseite und den [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende `position-try-order` Verwendung

Dieses Demo zeigt die Wirkung von `position-try-order`.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem ankerpositionierten Element werden, und ein `<form>`, das Radio-Buttons enthält, mit denen Sie verschiedene Werte von `position-try-order` auswählen können.

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

Im CSS wird dem Anker ein {{cssxref("anchor-name")}} zugewiesen und er hat einen großen {{cssxref("margin")}}, um ihn in der oberen Mitte des Viewports zu positionieren:

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

Wir positionieren das Element zunächst über seinem Anker und geben ihm dann unsere benutzerdefinierte Positionsoption, indem wir die `position-try` Kurzform verwenden, die auch die `position-try-order` Eigenschaft auf `normal` setzt:

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

Schließlich fügen wir etwas JavaScript hinzu. Dieses setzt einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignishandler für die Radio-Buttons, sodass, wenn ein neuer Wert ausgewählt wird, dieser auf die `position-try-order` Eigenschaft der Infobox angewendet wird.

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

{{ EmbedLiveSample("Grundlegende `position-try-order` Verwendung", "100%", "310") }}

Versuchen Sie, die `most-height` Reihenfolge-Option auszuwählen. Dies hat zur Folge, dass `--custom-bottom` als position-try Fallback-Option angewendet wird, die das Element unter dem Anker positioniert. Dies geschieht, weil unter dem Anker mehr vertikaler Platz vorhanden ist als darüber.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-fallbacks")}}
- Die {{cssxref("@position-try")}} At-Regel
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
