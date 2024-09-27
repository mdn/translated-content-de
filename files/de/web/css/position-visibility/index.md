---
title: position-visibility
slug: Web/CSS/position-visibility
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{CSSRef}}{{seecompattable}}

Die **`position-visibility`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht das bedingte Ausblenden eines verankerungs-positionierten Elements, je nachdem, ob es zum Beispiel sein enthaltenes Element oder den Viewport überläuft.

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
  - : Wenn die Verankerung vollständig verdeckt ist, entweder durch Überlaufen des enthaltenen Elements (oder des Viewports) oder durch andere Elemente, wird das positionierte Element stark verborgen.
- `no-overflow`
  - : Wenn das positionierte Element beginnt, das enthaltene Element oder den Viewport zu überlaufen, wird es stark verborgen.

Die Spezifikation definiert auch den Wert `anchors-valid`, der noch in keinem Browser implementiert wurde.

## Beschreibung

In einigen Situationen möchten Sie möglicherweise ein verankerungs-positioniertes Element nicht anzeigen. Zum Beispiel, wenn die zugehörige Verankerung aus dem sichtbaren Bereich gescrollt wurde, das verankerungs-positionierte Element jedoch ansonsten noch teilweise oder vollständig sichtbar wäre, könnte unklar sein, worauf es sich bezieht und es würde unnötig Platz einnehmen, daher möchten Sie es möglicherweise ganz ausblenden.

Die Eigenschaft `position-visibility` kann verwendet werden, um das verankerungs-positionierte Element `always` anzuzeigen oder bedingt auszublenden, wenn das zugehörige Verankerungselement vollständig verborgen ist (`anchors-visible`) oder wenn das verankerungs-positionierte Element selbst teilweise verborgen ist (`no-overflow`).

Wenn ein Element aufgrund von `position-visibility` ausgeblendet wird, spricht man von **stark verborgen**. Das bedeutet, dass es so behandelt wird, als ob für es und seine Nachkommenelemente ein {{cssxref("visibility")}}-Wert von `hidden` gesetzt wäre, unabhängig von ihrem tatsächlichen Sichtbarkeitswert.

`position-visibility` sollte nur in Situationen verwendet werden, in denen es vorzuziehen ist, das positionierte Element vollständig auszublenden. In den meisten Fällen ist es sinnvoller, zu versuchen, die Platzierung der positionierten Elemente zu ändern, wenn sie zu überlaufen beginnen, um sie auf dem Bildschirm und nutzbar zu halten. Dies kann mit der Eigenschaft {{cssxref("position-try-fallbacks")}} und der Regel {{cssxref("@position-try")}} erreicht werden. Weitere Informationen finden Sie im [Umgang mit Überlauf: Fallbacks ausprobieren und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)-Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel ermöglicht die Änderung des Wertes der `position-visibility`-Eigenschaft eines verankerungs-positionierten Elements, um die Auswirkungen jedes Wertes zu demonstrieren.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}}-Elemente; ein Verankerungselement mit einer Klasse von `anchor` und ein positioniertes Element mit einer Klasse von `infobox`.

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

Das HTML enthält auch Fülltext, um den Inhalt größer als den Viewport zu machen, sodass Scrollen erforderlich ist. Wir haben auch ein {{htmlelement("fieldset")}} mit einer Gruppe von [Radio-Eingabefeldern](/de/docs/Web/HTML/Element/input/radio) mit verschiedenen `position-visibility`-Werten eingefügt. Das Markup hierfür wird der Kürze halber nicht angezeigt.

#### CSS

Wir gestalten ein `anchor` `<div>` als ein Verankerungselement und binden das `infobox` `<div>` daran. Der relevante CSS-Code ist wie folgt:

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

Wir binden einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Event-Handler an die Radio-Buttons, sodass beim Auswählen eines neuen Wertes die `position-visibility`-Eigenschaft des Infobox-Elements aktualisiert wird.

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

Wählen Sie verschiedene `position-visibility`-Werte aus und scrollen Sie dann die Seite nach oben und unten, um deren Auswirkungen zu sehen. Mit `position-visibility: always` wird das positionierte Element nicht ausgeblendet. Mit `position-visibility: anchors-visible` wird das positionierte Element nur sichtbar, wenn die Verankerung teilweise oder vollständig im Sichtbereich ist. Mit `position-visibility: no-overflow` wird das positionierte Element ausgeblendet, sobald es beginnt, den Viewport zu überlaufen.

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
- [CSS-Verankerungspositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung von CSS-Verankerungspositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Umgang mit Überlauf: Fallbacks ausprobieren und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
