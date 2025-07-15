---
title: position-visibility
slug: Web/CSS/position-visibility
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{seecompattable}}

Die **`position-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht das bedingte Verbergen eines ankerpositionierten Elements, zum Beispiel, wenn es seinen enthaltenden oder den Ansichtsbereich überläuft.

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
  - : Wenn der Anker vollständig verborgen ist, sei es durch Überlauf des enthaltenden Elements (oder des Ansichtsbereichs) oder durch Verdeckung durch andere Elemente, wird das positionierte Element stark verborgen.
- `no-overflow`
  - : Wenn das positionierte Element beginnt, seinen enthaltenden oder den Ansichtsbereich zu überlaufen, wird es stark verborgen.

Die Spezifikation definiert auch den Wert `anchors-valid`, der in keinem Browser implementiert wurde.

## Beschreibung

In einigen Situationen möchten Sie möglicherweise ein ankerpositioniertes Element nicht anzeigen. Zum Beispiel, wenn der zugehörige Anker außerhalb des Bildschirms gescrollt wurde, das ankerpositionierte Element jedoch teilweise oder vollständig sichtbar bleibt, könnte es unklar sein, worauf es sich bezieht und unnötig Platz einnehmen. Daher möchten Sie es möglicherweise vollständig verbergen.

Die Eigenschaft `position-visibility` kann verwendet werden, um das ankerpositionierte Element `always` anzuzeigen oder es bedingt zu verbergen, wenn das zugehörige Ankerelement vollständig verborgen ist (`anchors-visible`) oder wenn das ankerpositionierte Element selbst teilweise verborgen ist (`no-overflow`).

Wenn ein Element aufgrund von `position-visibility` verborgen wird, wird dies als **stark verborgen** bezeichnet. Das bedeutet, dass es so wirkt, als ob es und seine Nachkommenelemente den {{cssxref("visibility")}} Wert `hidden` hätten, unabhängig davon, welcher Sichtbarkeitswert tatsächlich gesetzt ist.

`position-visibility` sollte nur in Situationen verwendet werden, in denen das vollständige Verbergen des positionierten Elements bevorzugt wird. In den meisten Fällen ist es sinnvoller, zu versuchen, die Platzierung von positionierten Elementen zu ändern, wenn sie zu überlaufen beginnen, um sie auf dem Bildschirm und benutzbar zu halten. Dies kann mit der Eigenschaft {{cssxref("position-try-fallbacks")}} und der Regel {{cssxref("@position-try")}} erreicht werden. Weitere Informationen finden Sie im [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel ermöglicht das Ändern des Wertes der `position-visibility` Eigenschaft eines ankerpositionierten Elements, um die Effekte jedes Wertes zu demonstrieren.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente: ein Ankerelement mit einer Klasse `anchor` und ein positioniertes Element mit einer Klasse `infobox`.

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

Das HTML enthält auch Fülltext, um den Inhalt größer als den Ansichtsbereich zu machen, sodass Scrollen erforderlich ist. Wir haben auch ein {{htmlelement("fieldset")}} mit einer Gruppe von [Radio-Inputs](/de/docs/Web/HTML/Reference/Elements/input/radio) mit verschiedenen `position-visibility` Werten hinzugefügt. Der Markup dafür wird der Kürze halber nicht angezeigt.

#### CSS

Wir stylen ein `anchor` `<div>` als Ankerelement und binden das `infobox` `<div>` daran. Der relevante CSS ist wie folgt:

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

Wir fügen einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Handler auf die Radio-Buttons ein, sodass, wenn ein neuer Wert ausgewählt wird, wir den `position-visibility` Eigenschaftswert des Infobox aktualisieren.

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

Wählen Sie verschiedene `position-visibility` Werte aus und scrollen Sie dann die Seite hoch und runter, um deren Effekte zu sehen. Bei `position-visibility: always` wird das positionierte Element nicht verborgen. Bei `position-visibility: anchors-visible` wird das positionierte Element nur sichtbar sein, wenn der Anker teilweise oder vollständig auf dem Bildschirm ist. Bei `position-visibility: no-overflow` wird das positionierte Element verborgen, sobald es beginnt, den Ansichtsbereich zu überlaufen.

{{ EmbedLiveSample("Grundlegende Nutzung", "100%", "180") }}

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
- [Verwendung der CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
