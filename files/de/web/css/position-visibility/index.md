---
title: position-visibility
slug: Web/CSS/position-visibility
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

{{seecompattable}}

Die **`position-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht das bedingte Ausblenden eines anchor-positionierten Elements, abhängig davon, ob es zum Beispiel sein enthaltendes Element oder das Ansichtsfenster überläuft.

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
  - : Wenn der Anker vollständig verborgen ist, entweder indem er sein enthaltendes Element (oder das Ansichtsfenster) überläuft oder von anderen Elementen bedeckt wird, wird das positionierte Element stark verborgen.
- `no-overflow`
  - : Wenn das positionierte Element beginnt, sein enthaltendes Element oder das Ansichtsfenster zu überlaufen, wird es stark verborgen.

Die Spezifikation definiert auch den Wert `anchors-valid`, der jedoch in keinem Browser implementiert wurde.

## Beschreibung

In einigen Situationen möchten Sie möglicherweise ein anchor-positioniertes Element nicht anzeigen. Zum Beispiel, wenn der zugehörige Anker vom Bildschirm gescrollt wurde, das anchor-positionierte Element aber ansonsten noch teilweise oder vollständig sichtbar wäre, könnte es unklar sein, worauf es sich bezieht und unnötig viel Platz einnehmen. In solchen Fällen möchten Sie es möglicherweise vollständig ausblenden.

Die `position-visibility` Eigenschaft kann verwendet werden, um das anchor-positionierte Element `always` anzuzeigen oder es bedingt auszublenden, wenn das zugehörige Anker-Element vollständig verborgen ist (`anchors-visible`) oder wenn das anchor-positionierte Element selbst teilweise verborgen ist (`no-overflow`).

Wenn ein Element aufgrund von `position-visibility` verborgen wird, wird es als **stark verborgen** bezeichnet. Das bedeutet, dass es so behandelt wird, als ob es und seine Nachkommenselemente den {{cssxref("visibility")}} Wert `hidden` gesetzt haben, unabhängig davon, wie ihr tatsächlicher Sichtbarkeitswert ist.

`position-visibility` sollte nur in Situationen verwendet werden, in denen es bevorzugt wird, das positionierte Element vollständig auszublenden. In den meisten Fällen macht es mehr Sinn, zu versuchen, die Platzierung der positionierten Elemente zu ändern, wenn sie zu überlaufen beginnen, um sie auf dem Bildschirm und benutzbar zu halten. Dies kann mit der {{cssxref("position-try-fallbacks")}} Eigenschaft und der {{cssxref("@position-try")}} Regel erreicht werden. Siehe den [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden für weitere Informationen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel ermöglicht das Ändern des Wertes der `position-visibility` Eigenschaft eines anchor-positionierten Elements, um die Auswirkungen der einzelnen Werte zu demonstrieren.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente; ein Anker-Element mit einer Klasse von `anchor` und ein positioniertes Element mit einer Klasse von `infobox`.

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

Das HTML enthält auch Fülltext, um den Inhalt höher als das Ansichtsfenster zu machen, sodass ein Scrollen erforderlich ist. Wir haben auch ein {{htmlelement("fieldset")}} mit einer Gruppe von [Radio-Inputs](/de/docs/Web/HTML/Reference/Elements/input/radio) mit verschiedenen `position-visibility` Werten enthalten. Das Markup dafür wird aus Gründen der Kürze nicht gezeigt.

#### CSS

Wir stylen ein `anchor` `<div>` als Anker-Element und verbinden das `infobox` `<div>` damit. Der relevante CSS-Code ist wie folgt:

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

Wir fügen einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Event-Handler auf den Radio-Buttons hinzu, sodass beim Auswählen eines neuen Wertes der `position-visibility` Eigenschaftswert der Infobox aktualisiert wird.

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

Wählen Sie verschiedene `position-visibility` Werte aus und scrollen Sie dann die Seite hoch und runter, um deren Effekte zu sehen. Mit `position-visibility: always` wird das positionierte Element nicht verborgen. Mit `position-visibility: anchors-visible` ist das positionierte Element nur sichtbar, wenn der Anker teilweise oder vollständig auf dem Bildschirm ist. Mit `position-visibility: no-overflow` wird das positionierte Element ausgeblendet, sobald es beginnt, das Ansichtsfenster zu überlaufen.

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
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung von CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
