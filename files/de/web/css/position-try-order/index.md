---
title: position-try-order
slug: Web/CSS/position-try-order
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`position-try-order`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, verschiedene Fallback-Optionen anzugeben, die dazu führen, dass ein verfügbarer position-try Fallback verwendet wird, um die Position eines Anker-positionierten Elements festzulegen, anstatt seiner ursprünglichen Positionseinstellungen.

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
  - : Der Standardwert. Es werden keine position-try Fallback-Optionen ausprobiert, wenn das Element das erste Mal angezeigt wird.
- `<try-size>`
  - : Definiert die verschiedenen Try-Size Fallback-Optionen, die Kriterien bestimmen, welche Try-Fallback auf das Anker-positionierte Element angewendet werden sollen, wenn es zunächst gerendert wird. Verfügbare Werte sind:
    - `most-height`
      - : Die Position-try Fallback-Option wird angewendet, die dem enthaltenden Block des Elements die meiste Höhe gibt.
    - `most-width`
      - : Die Position-try Fallback-Option wird angewendet, die dem enthaltenden Block des Elements die meiste Breite gibt.
    - `most-block-size`
      - : Die Position-try Fallback-Option wird angewendet, die dem enthaltenden Block des Elements die größte Größe in Blockrichtung gibt.
    - `most-inline-size`
      - : Die Position-try Fallback-Option wird angewendet, die dem enthaltenden Block des Elements die größte Größe in Inlinerichtung gibt.

## Beschreibung

Die `position-try-order` Eigenschaft hat einen leicht anderen Fokus als die restlichen position-try Funktionalitätsmerkmale, da sie Position-try Fallback-Optionen nutzen kann, wenn das positionierte Element das erste Mal angezeigt wird, anstatt wenn es gescrollt wird. Zum Beispiel könnten Sie das Element zunächst in einem Bereich anzeigen wollen, der mehr verfügbare Höhe oder Breite als die standardmäßige Anfangsposition hat.

Der Browser testet die verfügbaren position-try Fallback-Optionen, um herauszufinden, welche dem Anker-positionierten Element den meisten Raum in der angegebenen Dimension bietet. Anschließend wird diese Option angewendet und die ursprünglichen Stil-Einstellungen des Elements überschrieben.

Wenn keine Position-try Fallback-Option verfügbar ist, die mehr Breite/Höhe bietet als die dem Element zugewiesene Anfangsposition, wird keine Position-try Option angewendet. Effektiv verhält es sich so, als ob `position-try-order` auf `normal` gesetzt wäre.

Für detaillierte Informationen zu Ankerfunktionen und der Verwendung von Position-try-Optionen, siehe das [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul und den [Fallback Options and conditional hiding for overflow](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `position-try-order`

Dieses Demo zeigt die Wirkung von `position-try-order`.

#### HTML

Das HTML beinhaltet zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem Anker-positionierten Element werden, und ein `<form>`, das Radio-Buttons enthält, mit denen Sie verschiedene Werte von `position-try-order` auswählen können.

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

Im CSS erhält der Anker einen {{cssxref("anchor-name")}} und hat einen großen {{cssxref("margin")}}, um ihn zum oberen Zentrum des Viewports zu positionieren:

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

Wir fügen dann eine benutzerdefinierte Positionsoption namens `--custom-bottom` hinzu, die das Element unterhalb des Ankers positioniert und ihm einen passenden Rand gibt:

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

Wir positionieren das Element zunächst über seinem Anker und geben ihm dann unsere benutzerdefinierte Positionsoption mit der `position-try` Kurzform, die ebenfalls die `position-try-order` Eigenschaft auf `normal` setzt:

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

Abschließend fügen wir etwas JavaScript hinzu. Dies legt einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignishandler für die Radio-Buttons fest, sodass der ausgewählte Wert, wenn ein neuer Wert ausgewählt wird, auf die `position-try-order` Eigenschaft der Infobox angewendet wird.

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

Versuchen Sie, die `most-height` Reihenfolgeoption auszuwählen. Dies hat zur Folge, dass `--custom-bottom` als Position-try Fallback-Option angewendet wird, wodurch das Element unterhalb des Ankers positioniert wird. Dies geschieht, da unterhalb des Ankers mehr vertikaler Raum vorhanden ist als oberhalb.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-fallbacks")}}
- Die {{cssxref("@position-try")}} At-Regel
- [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung von CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
