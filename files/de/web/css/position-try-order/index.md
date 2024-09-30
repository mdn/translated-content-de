---
title: position-try-order
slug: Web/CSS/position-try-order
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{seecompattable}}

Die **`position-try-order`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, verschiedene Fallback-Optionen anzugeben, die dazu führen, dass ein verfügbarer `position-try`-Fallback verwendet wird, um die Position eines ankergestützten Elements zu setzen, anstatt seiner initialen Positionseinstellungen.

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

Die Eigenschaft `position-try-order` kann entweder als das Schlüsselwort `normal` oder als `<try-size>` angegeben werden.

- `normal`
  - : Der Standardwert. Keine `position-try` Fallback-Optionen werden versucht, wenn das Element zum ersten Mal angezeigt wird.
- `<try-size>`
  - : Definiert die verschiedenen Fallback-Optionen für die Versuchgröße, die Kriterien festlegen, die bestimmen, welcher Fallback auf das ankergestützte Element angewendet werden soll, wenn es initial gerendert wird. Verfügbare Werte sind:
    - `most-height`
      - : Die `position-try` Fallback-Option wird angewendet, die dem enthaltenen Block des Elements die meiste Höhe gibt.
    - `most-width`
      - : Die `position-try` Fallback-Option wird angewendet, die dem enthaltenen Block des Elements die meiste Breite gibt.
    - `most-block-size`
      - : Die `position-try` Fallback-Option wird angewendet, die dem enthaltenen Block des Elements die größte Größe in Blockrichtung gibt.
    - `most-inline-size`
      - : Die `position-try` Fallback-Option wird angewendet, die dem enthaltenen Block des Elements die größte Größe in Inline-Richtung gibt.

## Beschreibung

Die `position-try-order` Eigenschaft hat einen etwas anderen Fokus als die restlichen `position-try` Funktionalitätsmerkmale, da sie `position-try` Fallback-Optionen verwendet, wenn das positionierte Element zum ersten Mal angezeigt wird, anstatt wenn es gescrollt wird. Zum Beispiel könnte man wollen, dass das Element zunächst in einem Bereich dargestellt wird, der mehr verfügbare Höhe oder Breite als die standardmäßige Startposition hat.

Der Browser wird die verfügbaren `position-try` Fallback-Optionen testen, um herauszufinden, welche dem ankergestützten Element den meisten Platz in der angegebenen Dimension geben. Diese Option wird dann angewendet und überschreibt die anfängliche Stilsetzung des Elements.

Wenn keine `position-try` Fallback-Option verfügbar ist, die mehr Breite/Höhe bietet als die dem Element zugewiesene Anfangsposition, wird keine `position-try` Option angewendet. Tatsächlich verhält es sich so, als wäre `position-try-order` auf `normal` eingestellt.

Für detaillierte Informationen zu Anker-Funktionen und der Nutzung von `position-try` Optionen, siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und die [Umgang mit Überlauf: Fallbacks und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Anleitung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung von `position-try-order`

Dieses Demo zeigt die Wirkung von `position-try-order`.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}}-Elemente, die zu einem Anker und einem ankergestützten Element werden, und ein `<form>`, das Radiobuttons enthält, mit denen Sie verschiedene Werte von `position-try-order` auswählen können.

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

Im CSS erhält der Anker einen {{cssxref("anchor-name")}} und hat einen großen {{cssxref("margin")}}, um ihn im oberen Zentrum des Viewports zu positionieren:

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

Wir schließen dann eine benutzerdefinierte Positionsoption namens `--custom-bottom` ein, die das Element unter dem Anker positioniert und ihm einen entsprechenden Rand gibt:

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Wir positionieren das Element zunächst über seinem Anker und geben ihm dann unsere benutzerdefinierte Positionsoption mit der Kurzschreibweise `position-try`, die auch die Eigenschaft `position-try-order` auf `normal` setzt:

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

Schließlich fügen wir etwas JavaScript hinzu. Dies setzt einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Handler auf die Radiobuttons, sodass, wenn ein neuer Wert ausgewählt wird, dieser Wert auf die `position-try-order` Eigenschaft der Infobox angewendet wird.

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

{{ EmbedLiveSample("Grundlegende Nutzung von `position-try-order`", "100%", "310") }}

Versuchen Sie, die `most-height` Ordnungsoption auszuwählen. Dies hat zur Folge, dass `--custom-bottom` als `position-try` Fallback-Option angewendet wird, die das Element unter dem Anker positioniert. Dies tritt auf, weil unter dem Anker mehr vertikaler Raum als über ihm verfügbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-fallbacks")}}
- Die {{cssxref("@position-try")}} Regel
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Umgang mit Überlauf: Fallbacks und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Anleitung
