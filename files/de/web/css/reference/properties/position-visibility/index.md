---
title: "`position-visibility` CSS property"
short-title: position-visibility
slug: Web/CSS/Reference/Properties/position-visibility
l10n:
  sourceCommit: 3858458a5c5bbaa528b76a09e35b7732b0a0ec0f
---

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`position-visibility`** können Sie ein an einem Anker positioniertes Element unter bestimmten Bedingungen ausblenden, beispielsweise wenn es über sein umschließendes Element oder den Viewport hinausragt.

## Syntax

```css
/* Single values */
position-visibility: always;
position-visibility: anchor-valid;
position-visibility: anchor-visible;
position-visibility: no-overflow;

/* Global values */
position-visibility: inherit;
position-visibility: initial;
position-visibility: revert;
position-visibility: revert-layer;
position-visibility: unset;
```

### Werte

Diese Eigenschaft wird mit einem der folgenden Schlüsselwortwerte angegeben:

- `always`
  - : Das positionierte Element wird immer angezeigt.
- `anchor-valid`
  - : Wenn der Wert von {{cssxref("position-anchor")}} des positionierten Elements nicht auf ein gültiges Ankerelement verweist, wird das positionierte Element vollständig ausgeblendet.
- `anchor-visible`
  - : Wenn der Anker vollständig verborgen ist, weil er über sein umschließendes Element (oder den Viewport) hinausragt oder von anderen Elementen verdeckt wird, wird das positionierte Element vollständig ausgeblendet.
- `no-overflow`
  - : Sobald das positionierte Element beginnt, über sein umschließendes Element oder den Viewport hinauszuragen, wird es vollständig ausgeblendet.

## Beschreibung

In manchen Situationen möchten Sie ein an einem Anker positioniertes Element möglicherweise nicht anzeigen. Wenn beispielsweise der zugehörige Anker aus dem sichtbaren Bereich gescrollt wurde, das positionierte Element aber weiterhin teilweise oder vollständig sichtbar wäre, könnte unklar sein, worauf es sich bezieht. Zudem würde es unnötig Platz beanspruchen. In diesem Fall können Sie es vollständig ausblenden.

Mit der Eigenschaft `position-visibility` können Sie das an einem Anker positionierte Element `always` anzeigen oder es unter bestimmten Bedingungen ausblenden:

- `anchor-visible`: Das zugehörige Ankerelement ist vollständig verborgen.
- `anchor-valid`: Die Eigenschaft `position-anchor` des an einem Anker positionierten Elements verweist nicht auf einen gültigen {{cssxref("anchor-name")}}, der für ein Ankerelement im selben Dokument festgelegt wurde.
- `no-overflow`: Das an einem Anker positionierte Element ist teilweise oder vollständig verborgen.

Wenn ein Element aufgrund von `position-visibility` ausgeblendet wird, gilt es als **vollständig ausgeblendet**. Das bedeutet, dass es sich und seine Nachfahren so verhalten, als wäre für sie ein {{cssxref("visibility")}}-Wert von `hidden` festgelegt – unabhängig von ihrem tatsächlichen Wert für `visibility`.

`position-visibility` sollte nur verwendet werden, wenn es vorzuziehen ist, das positionierte Element vollständig auszublenden. In den meisten Fällen ist es sinnvoller, seine Platzierung anzupassen, sobald es beginnt, über den sichtbaren Bereich hinauszuragen, damit es auf dem Bildschirm sichtbar und nutzbar bleibt. Dies ist mit der Eigenschaft {{cssxref("position-try-fallbacks")}} und der At-Regel {{cssxref("@position-try")}} möglich. Weitere Informationen finden Sie im Leitfaden zu [Ausweichoptionen und bedingtem Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel können Sie den Wert der Eigenschaft `position-visibility` eines an einem Anker positionierten Elements ändern, um die Auswirkungen der einzelnen Werte zu sehen.

#### HTML

Wir definieren zwei {{htmlelement("div")}}-Elemente: ein Ankerelement mit der Klasse `anchor` und ein positioniertes Element mit der Klasse `infobox`.

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
      <label for="radio-anchor-visible">anchor-visible</label>
      <input
        type="radio"
        id="radio-anchor-visible"
        name="position-visibility"
        value="anchor-visible" />
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

Das HTML enthält außerdem Fülltext, damit der Inhalt höher als der Viewport ist und gescrollt werden muss. Zusätzlich gibt es ein {{htmlelement("fieldset")}} mit einer Gruppe von [Radio-Buttons](/de/docs/Web/HTML/Reference/Elements/input/radio) für verschiedene `position-visibility`-Werte. Der zugehörige Code wird der Kürze halber nicht gezeigt.

#### CSS

Wir gestalten ein `anchor`-`<div>` als Ankerelement und verankern das `infobox`-`<div>` daran. Das relevante CSS lautet:

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

Wir fügen den Radio-Buttons einen Event-Handler für [`change`](/de/docs/Web/API/HTMLElement/change_event) hinzu. Wenn ein neuer Wert ausgewählt wird, aktualisieren wir damit den Wert der Eigenschaft `position-visibility` der Infobox.

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

Wählen Sie verschiedene `position-visibility`-Werte aus und scrollen Sie die Seite nach oben und unten, um ihre Auswirkungen zu sehen. Bei `position-visibility: always` wird das positionierte Element nicht ausgeblendet. Bei `position-visibility: anchor-visible` ist es nur sichtbar, wenn der Anker teilweise oder vollständig auf dem Bildschirm zu sehen ist. Bei `position-visibility: no-overflow` wird es ausgeblendet, sobald es beginnt, über den Viewport hinauszuragen.

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
- Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)
- Leitfaden [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- Leitfaden [Ausweichoptionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
