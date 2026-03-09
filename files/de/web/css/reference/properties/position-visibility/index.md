---
title: position-visibility
slug: Web/CSS/Reference/Properties/position-visibility
l10n:
  sourceCommit: 295f308ff9562fb5dff29f78268320a8ba759c8f
---

Die **`position-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht das bedingte Verbergen eines ankergestützten Elements, je nachdem, ob es beispielsweise sein umgebendes Element oder den Viewport überläuft.

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
  - : Wenn der Wert des `position-anchor` des positionierten Elements nicht auf ein gültiges Ankerelement zeigt, wird das positionierte Element stark verborgen.
- `anchors-visible`
  - : Wenn der Anker vollständig verborgen ist, entweder weil er sein umgebendes Element (oder den Viewport) überläuft oder von anderen Elementen überdeckt wird, wird das positionierte Element stark verborgen.
- `no-overflow`
  - : Wenn das positionierte Element beginnt, sein umgebendes Element oder den Viewport zu überlaufen, wird es stark verborgen.

## Beschreibung

In einigen Situationen möchten Sie vielleicht ein ankergestütztes Element nicht anzeigen. Wenn sein zugehöriger Anker beispielsweise aus dem Sichtfeld gescrollt wurde, das ankergestützte Element jedoch sonst noch teilweise oder vollständig sichtbar wäre, könnte es unklar sein, worauf es sich bezieht, und unnötig Platz beanspruchen. Daher möchten Sie es möglicherweise komplett verbergen.

Die `position-visibility` Eigenschaft kann verwendet werden, um das ankergestützte Element `immer` anzuzeigen oder es unter bestimmten Umständen bedingt zu verbergen:

- `anchors-visible`: Das zugehörige Ankerelement ist vollständig verborgen.
- `anchors-valid`: Die `position-anchor` Eigenschaft des ankergestützten Elements verweist nicht auf einen gültigen {{cssxref("anchor-name")}}, der auf einem Ankerelement im selben Dokument gesetzt ist.
- `no-overflow`: Das ankergestützte Element ist teilweise oder vollständig verborgen.

Wenn ein Element aufgrund von `position-visibility` verborgen ist, wird es als **stark verborgen** bezeichnet. Das bedeutet, dass es so agiert, als hätten es und seine untergeordneten Elemente einen {{cssxref("visibility")}} Wert von `hidden`, unabhängig davon, welchen sichtbaren Wert sie tatsächlich haben.

`position-visibility` sollte nur in Situationen verwendet werden, in denen es bevorzugt wird, das positionierte Element komplett zu verbergen. In den meisten Fällen ist es sinnvoller zu versuchen, die Platzierung der positionierten Elemente zu ändern, wenn sie anfangen, den Bildschirmrand zu überschreiten, um sie sichtbar und verwendbar zu halten. Dies kann mit der {{cssxref("position-try-fallbacks")}} Eigenschaft und der {{cssxref("@position-try")}} At-Regel erreicht werden. Weitere Informationen finden Sie im [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel ermöglicht der Änderung des Wertes der `position-visibility` Eigenschaft eines ankergestützten Elements, um die Effekte jedes Wertes zu demonstrieren.

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

Das HTML enthält auch ein Fülltext, um den Inhalt größer als den Viewport zu machen, sodass Scrollen erforderlich ist. Es wurde außerdem ein {{htmlelement("fieldset")}} mit einer Gruppe von [Radio Inputs](/de/docs/Web/HTML/Reference/Elements/input/radio) mit verschiedenen `position-visibility` Werten hinzugefügt. Das Markup dafür wird der Kürze halber nicht gezeigt.

#### CSS

Wir gestalten ein `anchor` `<div>` als Ankerelement und verknüpfen das `infobox` `<div>` damit. Das relevante CSS ist wie folgt:

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

Wir fügen einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignishandler zu den Radio-Buttons hinzu, sodass, wenn ein neuer Wert ausgewählt wird, wir den `position-visibility` Eigenschaftswert der Infobox aktualisieren.

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

Wählen Sie verschiedene `position-visibility` Werte und scrollen Sie dann die Seite auf und ab, um deren Effekte zu sehen. Mit `position-visibility: always` gesetzt wird das positionierte Element nicht verborgen. Mit `position-visibility: anchors-visible` gesetzt wird das positionierte Element nur sichtbar, wenn der Anker teilweise oder vollständig sichtbar ist. Mit `position-visibility: no-overflow` gesetzt wird das positionierte Element verborgen, sobald es beginnt, den Viewport zu überlaufen.

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
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
