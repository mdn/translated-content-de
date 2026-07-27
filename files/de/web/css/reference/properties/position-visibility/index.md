---
title: "`position-visibility` CSS property"
short-title: position-visibility
slug: Web/CSS/Reference/Properties/position-visibility
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`position-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, ein Anker-positioniertes Element bedingt zu verbergen, je nachdem beispielsweise, ob es sein enthaltendes Element oder den Viewport überläuft.

## Syntax

```css
/* Single values */
position-visibility: always;
position-visibility: anchors-valid;
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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `always`
  - : Das positionierte Element wird immer angezeigt.
- `anchors-valid`
  - : Wenn der `position-anchor`-Wert des positionierten Elements nicht auf ein gültiges Ankerelement zeigt, wird das positionierte Element stark verborgen.
- `anchors-visible`
  - : Wenn der Anker vollständig verborgen ist, entweder weil er sein enthaltendes Element (oder den Viewport) überläuft oder von anderen Elementen verdeckt wird, wird das positionierte Element stark verborgen.
- `no-overflow`
  - : Wenn das positionierte Element beginnt, sein enthaltendes Element oder den Viewport zu überlaufen, wird es stark verborgen.

## Beschreibung

In einigen Situationen möchten Sie eventuell ein Anker-positioniertes Element nicht anzeigen. Zum Beispiel, wenn sein zugehöriger Anker vom Bildschirm gescrollt wurde, aber das Anker-positionierte Element ansonsten noch teilweise oder vollständig sichtbar wäre, könnte es unklar sein, worauf es sich bezieht und unnötigerweise Platz einnehmen. Daher möchten Sie es vielleicht komplett verbergen.

Die Eigenschaft `position-visibility` kann verwendet werden, um das Anker-positionierte Element `always` anzuzeigen oder bedingt in bestimmten Situationen zu verbergen:

- `anchors-visible`: Das zugehörige Ankerelement ist vollständig verborgen.
- `anchors-valid`: Die `position-anchor`-Eigenschaft des Anker-positionierten Elements verweist nicht auf einen gültigen {{cssxref("anchor-name")}} der auf ein Ankerelement im selben Dokument gesetzt ist.
- `no-overflow`: Das Anker-positionierte Element ist teilweise oder vollständig verborgen.

Wenn ein Element aufgrund von `position-visibility` verborgen ist, wird es als **stark verborgen** bezeichnet. Das bedeutet, dass es so agieren wird, als ob es und seine Nachkommenelemente einen {{cssxref("visibility")}}-Wert von `hidden` gesetzt haben, unabhängig von ihrem eigentlichen Sichtbarkeitswert.

`position-visibility` sollte nur in Situationen verwendet werden, in denen es bevorzugt wird, das positionierte Element vollständig zu verbergen. In den meisten Fällen ist es sinnvoller zu versuchen, die Platzierung von positionierten Elementen zu ändern, wenn sie beginnen, überzulaufen, um sie auf dem Bildschirm und nutzbar zu halten. Dies kann mit der Eigenschaft {{cssxref("position-try-fallbacks")}} und der Regel {{cssxref("@position-try")}} erreicht werden. Sehen Sie den [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden für weitere Informationen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel erlaubt das Ändern des Wertes der `position-visibility`-Eigenschaft eines Ankers, um die Effekte jedes Wertes zu demonstrieren.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente: ein Ankerelement mit der Klasse `anchor` und ein positioniertes Element mit der Klasse `infobox`.

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

Das HTML enthält auch Fülltext, um den Inhalt höher als den Viewport zu machen, sodass Scrollen erforderlich ist. Wir haben auch ein {{htmlelement("fieldset")}} mit einer Gruppe von [Radio-Eingaben](/de/docs/Web/HTML/Reference/Elements/input/radio) mit verschiedenen `position-visibility`-Werten eingeschlossen. Das Markup hierfür wird aus Gründen der Kürze nicht gezeigt.

#### CSS

Wir gestalten ein `anchor` `<div>` als Ankerelement und verbinden das `infobox` `<div>` damit. Der relevante CSS ist wie folgt:

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
  border: 1px solid #dddddd;
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

Wir fügen einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignishandler zu den Radio-Buttons hinzu, sodass beim Auswählen eines neuen Werts der Wert der `position-visibility`-Eigenschaft der Infobox aktualisiert wird.

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

Wählen Sie verschiedene `position-visibility`-Werte aus und scrollen Sie dann die Seite nach oben und unten, um deren Effekte zu sehen. Mit `position-visibility: always` wird das positionierte Element nicht verborgen. Mit `position-visibility: anchors-visible` wird das positionierte Element nur sichtbar, wenn der Anker teilweise oder vollständig auf dem Bildschirm ist. Mit `position-visibility: no-overflow` wird das positionierte Element verborgen, sobald es beginnt, den Viewport zu überlaufen.

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
- [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Verwendung der CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
