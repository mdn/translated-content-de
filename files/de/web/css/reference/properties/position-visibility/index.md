---
title: "`position-visibility` CSS property"
short-title: position-visibility
slug: Web/CSS/Reference/Properties/position-visibility
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`position-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht das bedingte Verbergen eines mit Anker positionierten Elements, je nachdem, ob es beispielsweise über das umschließende Element oder den Viewport hinausgeht.

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

- `always`
  - : Das positionierte Element wird immer angezeigt.
- `anchors-valid`
  - : Wenn der `position-anchor` Wert des positionierten Elements nicht auf ein gültiges Ankerelement verweist, wird das positionierte Element stark verborgen.
- `anchors-visible`
  - : Wenn der Anker vollständig verborgen ist, entweder durch Überlaufen des umschließenden Elements (oder des Viewports) oder durch Überdeckung durch andere Elemente, wird das positionierte Element stark verborgen.
- `no-overflow`
  - : Wenn das positionierte Element beginnt, über das umschließende Element oder den Viewport hinaus zu gehen, wird es stark verborgen.

## Beschreibung

In manchen Situationen möchten Sie eventuell ein mit Anker positioniertes Element nicht anzeigen. Zum Beispiel, wenn sein zugehöriger Anker aus dem Sichtbereich gescrollt ist, das Element selbst jedoch teilweise oder vollständig sichtbar wäre, könnte unklar sein, worauf es sich bezieht und es könnte unnötig Platz einnehmen, daher möchten Sie es vielleicht komplett ausblenden.

Die `position-visibility` Eigenschaft kann verwendet werden, um das mit Anker positionierte Element `immer` zu zeigen oder es unter bestimmten Bedingungen auszublenden:

- `anchors-visible`: Das zugehörige Ankerelement ist vollständig verborgen.
- `anchors-valid`: Die `position-anchor` Eigenschaft des Anker-positionierten Elements verweist nicht auf eine gültige {{cssxref("anchor-name")}} die auf ein Ankerelement im selben Dokument gesetzt ist.
- `no-overflow`: Das Anker-positionierte Element ist teilweise oder vollständig verborgen.

Wenn ein Element aufgrund von `position-visibility` verborgen ist, wird es als **stark verborgen** bezeichnet. Das bedeutet, dass es so wirkt, als hätten es und seine Nachfahrelemente einen {{cssxref("visibility")}} Wert von `hidden` gesetzt, unabhängig von ihrem tatsächlichen Sichtbarkeitswert.

`position-visibility` sollte nur in Situationen verwendet werden, in denen es bevorzugt wird, das positionierte Element komplett auszublenden. In den meisten Fällen macht es mehr Sinn, zu versuchen, die Platzierung von positionierten Elementen zu ändern, wenn sie anfangen zu überlaufen, um sie auf dem Bildschirm und benutzbar zu halten. Dies kann mit der {{cssxref("position-try-fallbacks")}} Eigenschaft und der {{cssxref("@position-try")}} Regel erfolgen. Siehe den [Fallback-Optionen und bedingtes Ausblenden für Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden für mehr Informationen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel ermöglicht das Ändern des Wertes der `position-visibility` Eigenschaft eines Anker positionierten Elements, um die Effekte jedes Wertes zu demonstrieren.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente: ein Ankerelement mit einer Klasse von `anchor` und ein positioniertes Element mit einer Klasse von `infobox`.

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

Das HTML umfasst auch Fülltext, um den Inhalt höher als den Viewport zu machen, so dass Scrollen erforderlich ist. Wir haben auch ein {{htmlelement("fieldset")}} mit einer Gruppe von [Radio-Inputs](/de/docs/Web/HTML/Reference/Elements/input/radio) mit verschiedenen `position-visibility` Werten aufgenommen. Das Markup für diese ist aus Gründen der Kürze nicht gezeigt.

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

Wir fügen einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Handler für die Radio-Buttons hinzu, sodass, wenn ein neuer Wert ausgewählt wird, wir den Wert der `position-visibility` Eigenschaft der Infobox aktualisieren.

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

Wählen Sie verschiedene `position-visibility` Werte und scrollen Sie dann die Seite nach oben und unten, um ihre Auswirkungen zu sehen. Bei `position-visibility: always` wird das positionierte Element nicht verborgen. Bei `position-visibility: anchors-visible` wird das positionierte Element nur sichtbar sein, wenn der Anker teilweise oder vollständig im Bildschirm ist. Bei `position-visibility: no-overflow` wird das positionierte Element verborgen, sobald es beginnt, den Viewport zu überlaufen.

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
- [Fallback-Optionen und bedingtes Ausblenden für Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
