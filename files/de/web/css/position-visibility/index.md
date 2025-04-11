---
title: position-visibility
slug: Web/CSS/position-visibility
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}{{seecompattable}}

Die **`position-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht das bedingte Verbergen eines nach Anker positionierten Elements, beispielsweise ob es über das umgebende Element oder den Ansichtsbereich hinausragt.

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
  - : Wenn der Anker vollständig verborgen ist, sei es durch Überlauf aus dem umgebenden Element (oder dem Ansichtsbereich) oder durch Überlagerung mit anderen Elementen, wird das positionierte Element stark verborgen.
- `no-overflow`
  - : Wenn das positionierte Element beginnt, aus seinem umgebenden Element oder dem Ansichtsbereich zu überlaufen, wird es stark verborgen.

Die Spezifikation definiert auch den Wert `anchors-valid`, der jedoch noch in keinem Browser implementiert wurde.

## Beschreibung

In einigen Situationen möchten Sie ein nach Anker positioniertes Element möglicherweise nicht anzeigen. Zum Beispiel, wenn der zugehörige Anker aus dem Sichtbereich gescrollt wurde, das nach Anker positionierte Element jedoch sonst noch teilweise oder vollständig sichtbar wäre, könnte es unklar sein, worauf es sich bezieht und unnötig Platz einnehmen, weshalb Sie möchten, dass es vollständig verborgen wird.

Die Eigenschaft `position-visibility` kann verwendet werden, um das nach Anker positionierte Element `always` anzuzeigen oder bedingt zu verbergen, wenn das zugehörige Ankerelement vollständig verborgen ist (`anchors-visible`) oder wenn das nach Anker positionierte Element selbst teilweise verborgen ist (`no-overflow`).

Wenn ein Element aufgrund von `position-visibility` verborgen wird, spricht man von **stark verborgen**. Dies bedeutet, dass es so agieren wird, als hätten es und seine Nachkommenelemente einen {{cssxref("visibility")}}-Wert von `hidden`, unabhängig davon, welchen tatsächlichen Sichtbarkeitswert sie haben.

`position-visibility` sollte nur in Situationen verwendet werden, in denen das vollständige Verbergen des positionierten Elements bevorzugt wird. In den meisten Fällen ist es sinnvoller, zu versuchen, die Platzierung der positionierten Elemente zu ändern, wenn sie beginnen, überzulaufen, um sie auf dem Bildschirm und damit nutzbar zu halten. Dies kann mit der {{cssxref("position-try-fallbacks")}}-Eigenschaft und der {{cssxref("@position-try")}}-At-Regel erreicht werden. Lesen Sie den [Überlauf behandeln: Rückfalloptionen ausprobieren und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden für weitere Informationen.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel ermöglicht die Änderung des Wertes der `position-visibility`-Eigenschaft eines nach Anker positionierten Elements, um die Auswirkungen jedes Wertes zu demonstrieren.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente; ein Ankerelement mit einer Klasse von `anchor` und ein positioniertes Element mit einer Klasse von `infobox`.

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

Das HTML enthält auch Fülltext, um den Inhalt höher als den Ansichtsbereich zu machen, sodass Scrollen erforderlich ist. Wir haben auch ein {{htmlelement("fieldset")}} mit einer Gruppe von [Radio-Inputs](/de/docs/Web/HTML/Reference/Elements/input/radio) mit verschiedenen `position-visibility`-Werten hinzugefügt. Die Markierung dafür wird der Kürze halber nicht gezeigt.

#### CSS

Wir gestalten ein `anchor` `<div>` als Ankerelement und binden das `infobox` `<div>` daran. Das relevante CSS ist wie folgt:

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

Wir fügen einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignishandler auf den Radioknöpfen hinzu, sodass wir, wenn ein neuer Wert ausgewählt wird, den `position-visibility` Eigenschaftswert der Infobox aktualisieren.

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

Wählen Sie verschiedene `position-visibility` Werte aus und scrollen Sie dann die Seite nach oben und unten, um deren Effekte zu sehen. Mit `position-visibility: always` gesetzt, wird das positionierte Element nicht verborgen. Mit `position-visibility: anchors-visible` gesetzt, wird das positionierte Element nur sichtbar sein, wenn der Anker teilweise oder vollständig auf dem Bildschirm ist. Mit `position-visibility: no-overflow` gesetzt, wird das positionierte Element verborgen, sobald es beginnt, aus dem Ansichtsbereich zu überlaufen.

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
- [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung von CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Überlauf behandeln: Rückfalloptionen ausprobieren und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
