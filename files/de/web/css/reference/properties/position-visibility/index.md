---
title: position-visibility
slug: Web/CSS/Reference/Properties/position-visibility
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{seecompattable}}

Die **`position-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, ein verankerungs-positioniertes Element bedingt auszublenden, je nachdem, ob es beispielsweise sein umgebendes Element oder das Ansichtsfenster überläuft.

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
  - : Wenn der Anker vollständig verborgen ist, sei es durch Überlaufen seines umgebenden Elements (oder des Ansichtsfensters) oder durch Überdeckung durch andere Elemente, wird das positionierte Element stark verborgen.
- `no-overflow`
  - : Wenn das positionierte Element beginnt, sein umgebendes Element oder das Ansichtsfenster zu überlaufen, wird es stark verborgen.

Die Spezifikation definiert auch den Wert `anchors-valid`, der noch in keinem Browser implementiert wurde.

## Beschreibung

In einigen Situationen möchten Sie möglicherweise ein verankerungs-positioniertes Element nicht anzeigen. Zum Beispiel, wenn der zugehörige Anker vom Bildschirm gescrollt wurde, das verankerte positionierte Element jedoch ansonsten noch teilweise oder vollständig sichtbar wäre, könnte es unklar sein, worauf es sich bezieht und unnötig Platz einnehmen. In solchen Fällen könnten Sie es vollständig ausblenden wollen.

Die Eigenschaft `position-visibility` kann verwendet werden, um das verankerungs-positionierte Element `always` anzuzeigen oder es bedingt auszublenden, wenn das zugehörige Ankerelement vollständig verborgen ist (`anchors-visible`) oder wenn das verankerungs-positionierte Element selbst teilweise verborgen ist (`no-overflow`).

Wenn ein Element aufgrund von `position-visibility` verborgen wird, wird es als **stark verborgen** bezeichnet. Dies bedeutet, dass es so behandelt wird, als ob es und seine Nachkommelelemente den {{cssxref("visibility")}} Wert `hidden` gesetzt hätten, unabhängig davon, welchen tatsächlichen Sichtbarkeitswert sie haben.

`position-visibility` sollte nur in Situationen verwendet werden, in denen das vollständige Ausblenden des positionierten Elements bevorzugt wird. In den meisten Fällen ist es sinnvoller, zu versuchen, die Platzierung der positionierten Elemente zu ändern, wenn sie anfangen zu überlaufen, um sie auf dem Bildschirm und nutzbar zu halten. Dies kann mit der {{cssxref("position-try-fallbacks")}} Eigenschaft und der {{cssxref("@position-try")}} At-Regel erreicht werden. Siehe den [Leitfaden für Fallback-Optionen und bedingtes Ausblenden bei Überfluss](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) für weitere Informationen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

In diesem Beispiel wird das Ändern des Wertes der Property `position-visibility` eines verankerungs-positionierten Elements ermöglicht, um die Effekte jedes Wertes zu demonstrieren.

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

Das HTML enthält auch Fülltext, um den Inhalt höher als das Ansichtsfenster zu machen, so dass Scrollen erforderlich ist. Wir haben auch ein {{htmlelement("fieldset")}} mit einer Gruppe von [Radio-Eingaben](/de/docs/Web/HTML/Reference/Elements/input/radio) mit unterschiedlichen `position-visibility` Werten hinzugefügt. Die Markup für diese wird aus Gründen der Kürze nicht gezeigt.

#### CSS

Wir gestalten ein `anchor` `<div>` als Ankerelement und verbinden das `infobox` `<div>` damit. Das relevante CSS ist wie folgt:

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

Wir fügen einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignishandler auf den Radio-Buttons hinzu, so dass, wenn ein neuer Wert ausgewählt wird, wir den Wert der `position-visibility` Eigenschaft der Infobox aktualisieren.

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

Wählen Sie verschiedene `position-visibility` Werte aus und scrollen Sie dann die Seite nach oben und unten, um deren Effekte zu sehen. Mit `position-visibility: always` wird das positionierte Element nicht verborgen. Mit `position-visibility: anchors-visible` wird das positionierte Element nur sichtbar, wenn der Anker teilweise oder vollständig auf dem Bildschirm ist. Mit `position-visibility: no-overflow` wird das positionierte Element ausgeblendet, sobald es beginnt, das Ansichtsfenster zu überlaufen.

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
- [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Verwendung von CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Anleitung
- [Leitfaden für Fallback-Optionen und bedingtes Ausblenden bei Überfluss](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
