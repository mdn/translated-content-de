---
title: position-visibility
slug: Web/CSS/position-visibility
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{CSSRef}}{{seecompattable}}

Die **`position-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht das bedingte Ausblenden eines verankerten Elements, abhängig davon, ob es beispielsweise über sein enthaltendes Element oder den Viewport hinausragt.

## Syntax

```css
/* Single values */
position-visibility: always;
position-visibility: anchors-visible;
position-visibility: no-overflow;

/* Global values */
position-visibility: inherit;
position-visibility: initial;
position-visibility: revert;
position-visibility: revert-layer;
position-visibility: unset;
```

### Werte

- `always`
  - : Das positionierte Element wird immer angezeigt.
- `anchors-visible`
  - : Wenn der Anker vollständig versteckt ist, entweder aufgrund von Überlappungen mit seinem enthaltenden Element (oder dem Viewport) oder durch andere Elemente verdeckt, wird das positionierte Element stark versteckt.
- `no-overflow`
  - : Wenn das positionierte Element beginnt, sein enthaltendes Element oder den Viewport zu überlappen, wird es stark versteckt.

Die Spezifikation definiert auch den Wert `anchors-valid`, der in keinem Browser bisher implementiert wurde.

## Beschreibung

In einigen Situationen möchten Sie möglicherweise ein verankertes Element nicht anzeigen. Zum Beispiel, wenn der zugehörige Anker aus dem sichtbaren Bereich gescrollt wurde, das verankerte Element jedoch ansonsten noch teilweise oder vollständig sichtbar wäre, könnte es unklar sein, worauf es sich bezieht, und unnötig Platz einnehmen. In solch einem Fall könnte es ratsam sein, es vollständig auszublenden.

Die `position-visibility` Eigenschaft kann verwendet werden, um das verankerte Element `always` anzuzeigen oder es bedingt auszublenden, wenn das zugehörige Ankerelement vollständig versteckt ist (`anchors-visible`) oder wenn das verankerte Element selbst teilweise versteckt ist (`no-overflow`).

Wenn ein Element aufgrund von `position-visibility` versteckt ist, wird es als **stark versteckt** bezeichnet. Das bedeutet, dass es so behandelt wird, als ob es und seine Nachkommen eine {{cssxref("visibility")}} von `hidden` hätten, unabhängig von ihrem tatsächlichen Sichtbarkeitswert.

`position-visibility` sollte nur in Situationen verwendet werden, in denen das vollständige Ausblenden des positionierten Elements bevorzugt wird. In den meisten Fällen ist es sinnvoller, zu versuchen, die Positionierung der ausgesuchten Elemente zu ändern, wenn sie zu überlappen beginnen, um sie sichtbar und benutzbar zu halten. Dies kann mit der {{cssxref("position-try-fallbacks")}} Eigenschaft und der {{cssxref("@position-try")}} Regel erreicht werden. Weitere Informationen finden Sie im [Umgang mit Überlappungen: Fallbacks ausprobieren und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

In diesem Beispiel wird die Möglichkeit gezeigt, den Wert der `position-visibility` Eigenschaft eines verankerten Elements zu ändern, um die Auswirkungen jedes Wertes zu demonstrieren.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente; ein Ankerelement mit der Klasse `anchor` und ein positioniertes Element mit der Klasse `infobox`.

```html hidden
<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque.
</p>
```

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

```html hidden
<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>

<form>
  <fieldset>
    <legend>Choose position visibility</legend>
    <div>
      <label for="radio-always">always</label>
      <input
        type="radio"
        id="radio-always"
        name="position-visibility"
        value="always"
        checked />
    </div>
    <div>
      <label for="radio-anchors-visible">anchors-visible</label>
      <input
        type="radio"
        id="radio-anchors-visible"
        name="position-visibility"
        value="anchors-visible" />
    </div>
    <div>
      <label for="radio-no-overflow">no-overflow</label>
      <input
        type="radio"
        id="radio-no-overflow"
        name="position-visibility"
        value="no-overflow" />
    </div>
  </fieldset>
</form>
```

Das HTML enthält auch Fülltext, um den Inhalt größer als den Viewport zu gestalten, sodass Scrollen erforderlich ist. Wir haben auch ein {{htmlelement("fieldset")}} mit einer Gruppe von [Radiobuttons](/de/docs/Web/HTML/Element/input/radio) mit verschiedenen `position-visibility` Werten hinzugefügt. Das Markup für diese wird der Kürze halber nicht gezeigt.

#### CSS

Wir stylen ein `anchor` `<div>` als Ankerelement und binden das `infobox` `<div>` daran. Das relevante CSS ist wie folgt:

```css hidden
body {
  width: 50%;
  margin: 0 auto;
}

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

form {
  position: fixed;
  background: white;
  bottom: 2px;
  right: 2px;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.anchor {
  anchor-name: --myAnchor;
}

.infobox {
  position-anchor: --myAnchor;
  position: fixed;
  position-area: top span-all;
  margin-bottom: 5px;
  position-visibility: always;
}
```

#### JavaScript

Wir fügen einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignishandler für die Radiobuttons hinzu, so dass, wenn ein neuer Wert ausgewählt wird, wir den `position-visibility` Wert der Infobox aktualisieren.

```js
const infobox = document.querySelector(".infobox");
const radios = document.querySelectorAll('[name="position-visibility"]');

for (const radio of radios) {
  radio.addEventListener("change", setPositionVisibility);
}

function setPositionVisibility(e) {
  infobox.style.positionVisibility = e.target.value;
}
```

#### Ergebnis

Wählen Sie unterschiedliche `position-visibility` Werte aus und scrollen Sie dann die Seite auf und ab, um ihre Auswirkungen zu sehen. Mit `position-visibility: always` wird das positionierte Element nicht verborgen. Mit `position-visibility: anchors-visible` wird das positionierte Element nur sichtbar, wenn der Anker teilweise oder vollständig im sichtbaren Bereich ist. Bei `position-visibility: no-overflow` wird das positionierte Element versteckt, sobald es beginnt, den Viewport zu überlappen.

{{ EmbedLiveSample("Basic usage", "100%", "180") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("position")}}
- {{cssxref("position-area")}}
- [CSS Verankerung Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS Verankerung Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Umgang mit Überlappungen: Fallbacks ausprobieren und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
