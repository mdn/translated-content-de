---
title: position-visibility
slug: Web/CSS/position-visibility
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

{{seecompattable}}

Die **`position-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht das bedingte Verstecken eines ankerpositionierten Elements, abhängig davon, ob es beispielsweise sein enthaltendes Element oder den Viewport überschreitet.

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
  - : Wenn der Anker vollständig ausgeblendet ist, sei es durch Überlaufen seines enthaltenen Elements (oder des Viewports) oder durch Überdeckung durch andere Elemente, wird das positionierte Element stark verborgen.
- `no-overflow`
  - : Wenn das positionierte Element beginnt, sein enthaltendes Element oder den Viewport zu überschreiten, wird es stark verborgen.

Die Spezifikation definiert auch den Wert `anchors-valid`, der bisher in keinem Browser implementiert wurde.

## Beschreibung

In einigen Situationen möchten Sie möglicherweise ein ankerpositioniertes Element nicht anzeigen. Zum Beispiel, wenn sein zugehöriger Anker vom Bildschirm gescrollt wurde, aber das ankerpositionierte Element ansonsten noch teilweise oder vollständig sichtbar wäre, könnte es unklar sein, worauf es sich bezieht, und unnötigerweise Platz einnehmen. In einem solchen Fall möchten Sie es möglicherweise vollständig ausblenden.

Die `position-visibility` Eigenschaft kann verwendet werden, um das ankerpositionierte Element `immer` anzuzeigen oder es bedingt auszublenden, wenn das zugehörige Ankerelement vollständig verborgen ist (`anchors-visible`) oder wenn das ankerpositionierte Element selbst teilweise verborgen ist (`no-overflow`).

Wenn ein Element durch `position-visibility` verborgen wird, wird es als **stark verborgen** bezeichnet. Das bedeutet, dass es so wirkt, als hätten es und seine untergeordneten Elemente einen {{cssxref("visibility")}}-Wert von `hidden` gesetzt, unabhängig von ihrem tatsächlichen Sichtbarkeitswert.

`position-visibility` sollte nur in Situationen verwendet werden, in denen das vollständige Ausblenden des positionierten Elements vorzuziehen ist. In den meisten Fällen ist es sinnvoller zu versuchen, die Platzierung der positionierten Elemente zu ändern, wenn sie beginnen, den Bildschirm zu überschreiten, um sie sichtbar und nutzbar zu halten. Dies kann mit der {{cssxref("position-try-fallbacks")}} Eigenschaft und der {{cssxref("@position-try")}} Regel erreicht werden. Siehe den [Fallback-Optionen und bedingtes Verstecken bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden für weitere Informationen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

In diesem Beispiel kann der Wert der `position-visibility` Eigenschaft eines ankerpositionierten Elements geändert werden, um die Auswirkungen jedes Wertes zu demonstrieren.

#### HTML

Wir definieren zwei {{htmlelement("div")}} Elemente: ein Ankerelement mit der Klasse `anchor` und ein positioniertes Element mit der Klasse `infobox`.

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

Das HTML enthält auch Fülltext, um den Inhalt größer als den Viewport zu machen, sodass Scrollen erforderlich ist. Wir haben auch ein {{htmlelement("fieldset")}} mit einer Gruppe von [Radio-Inputs](/de/docs/Web/HTML/Reference/Elements/input/radio) mit verschiedenen `position-visibility` Werten hinzugefügt. Der Markup hierfür wird der Kürze halber nicht gezeigt.

#### CSS

Wir gestalten ein `anchor` `<div>` als Ankerelement und koppeln das `infobox` `<div>` daran. Der relevante CSS-Code ist wie folgt:

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
  anchor-name: --my-anchor;
}

.infobox {
  position-anchor: --my-anchor;
  position: fixed;
  position-area: top span-all;
  margin-bottom: 5px;
  position-visibility: always;
}
```

#### JavaScript

Wir fügen einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignishandler an den Radio-Buttons hinzu, sodass, wenn ein neuer Wert ausgewählt wird, der `position-visibility` Eigenschaftswert der Infobox aktualisiert wird.

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

Wählen Sie verschiedene `position-visibility` Werte aus und scrollen Sie dann die Seite hoch und runter, um ihre Auswirkungen zu sehen. Mit `position-visibility: always` wird das positionierte Element nicht versteckt. Mit `position-visibility: anchors-visible` wird das positionierte Element nur sichtbar sein, wenn der Anker teilweise oder vollständig im Bildschirm ist. Mit `position-visibility: no-overflow` wird das positionierte Element ausgeblendet, sobald es beginnt, den Viewport zu überschreiten.

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
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwenden der CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verstecken bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
