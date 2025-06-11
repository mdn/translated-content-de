---
title: position-visibility
slug: Web/CSS/position-visibility
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}{{seecompattable}}

Die **`position-visibility`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht das bedingte Ausblenden eines anchorgebundenen Elements, abhängig davon, ob es beispielsweise sein enthaltendes Element oder den Viewport überläuft.

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
  - : Wenn das Anchor-Element vollständig versteckt ist, entweder weil es sein enthaltendes Element (oder den Viewport) überläuft oder von anderen Elementen überdeckt wird, wird das positionierte Element stark versteckt.
- `no-overflow`
  - : Wenn das positionierte Element beginnt, sein enthaltendes Element oder den Viewport zu überlaufen, wird es stark versteckt.

Die Spezifikation definiert auch den Wert `anchors-valid`, der jedoch in keinem Browser implementiert wurde.

## Beschreibung

In einigen Situationen möchten Sie möglicherweise ein anchorgebundenes Element nicht anzeigen. Wenn zum Beispiel das zugehörige Anchor-Element vom Bildschirm gescrollt wurde, das anchorgebundene Element jedoch ansonsten noch teilweise oder vollständig sichtbar wäre, kann es unklar sein, worauf es sich bezieht und nimmt unnötig Platz ein. Daher möchten Sie es möglicherweise vollständig ausblenden.

Die Eigenschaft `position-visibility` kann verwendet werden, um das anchorgebundene Element `immer` anzuzeigen oder bedingt auszublenden, wenn das zugehörige Anchor-Element vollständig versteckt ist (`anchors-visible`) oder wenn das anchorgebundene Element selbst teilweise versteckt ist (`no-overflow`).

Wenn ein Element aufgrund von `position-visibility` ausgeblendet wird, wird es als **stark versteckt** bezeichnet. Das bedeutet, dass es so wirkt, als hätten es und seine Nachkommen-Elemente einen {{cssxref("visibility")}}-Wert von `hidden`, unabhängig von ihrem tatsächlichen Sichtbarkeitswert.

`position-visibility` sollte nur in Situationen verwendet werden, in denen es bevorzugt wird, das positionierte Element vollständig auszublenden. In den meisten Fällen ist es sinnvoller, zu versuchen, die Platzierung von positionierten Elementen zu ändern, wenn sie beginnen, den Bildschirm zu überlaufen, um sie auf dem Bildschirm und nutzbar zu halten. Dies kann mit der Eigenschaft {{cssxref("position-try-fallbacks")}} und der Regel {{cssxref("@position-try")}} erfolgen. Weitere Informationen finden Sie im [Fallback-Optionen und bedingtes Verstecken bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)-Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel ermöglicht das Ändern des Werts der `position-visibility`-Eigenschaft eines anchorgebundenen Elements, um die Effekte jedes Wertes zu demonstrieren.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}}-Elemente: ein Anchor-Element mit einer Klasse von `anchor` und ein positioniertes Element mit einer Klasse von `infobox`.

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

Das HTML enthält auch Fülltext, um den Inhalt größer als den Viewport zu machen, sodass Scrollen erforderlich ist. Wir haben auch ein {{htmlelement("fieldset")}} mit einer Gruppe von [Radio-Inputs](/de/docs/Web/HTML/Reference/Elements/input/radio) mit verschiedenen `position-visibility`-Werten eingefügt. Der Markup für diese wird der Kürze halber nicht gezeigt.

#### CSS

Wir stylen ein `anchor` `<div>` als Anchor-Element und binden das `infobox` `<div>` daran. Der relevante CSS-Code ist wie folgt:

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

Wir fügen einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Event-Handler auf den Radio-Buttons hinzu, sodass beim Auswählen eines neuen Werts der `position-visibility`-Wert der Infobox aktualisiert wird.

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

Wählen Sie verschiedene `position-visibility`-Werte aus und scrollen Sie dann die Seite auf und ab, um deren Effekte zu sehen. Mit `position-visibility: always` wird das positionierte Element nicht versteckt. Mit `position-visibility: anchors-visible` wird das positionierte Element nur sichtbar sein, wenn der Anchor teilweise oder vollständig auf dem Bildschirm ist. Mit `position-visibility: no-overflow` wird das positionierte Element ausgeblendet, sobald es beginnt, den Viewport zu überlaufen.

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
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verstecken bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
