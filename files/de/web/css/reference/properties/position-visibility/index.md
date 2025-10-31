---
title: position-visibility
slug: Web/CSS/Reference/Properties/position-visibility
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{seecompattable}}

Die **`position-visibility`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, ein anker-positioniertes Element bedingt zu verstecken, abhängig davon, ob es beispielsweise sein enthaltendes Element oder den Viewport überläuft.

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
  - : Wenn der Anker vollständig verborgen ist, entweder weil er sein enthaltendes Element (oder den Viewport) überläuft oder von anderen Elementen überdeckt wird, wird das positionierte Element stark verborgen.
- `no-overflow`
  - : Wenn das positionierte Element beginnt, sein enthaltendes Element oder den Viewport zu überlaufen, wird es stark verborgen.

Die Spezifikation definiert auch den `anchors-valid` Wert, welcher noch in keinem Browser implementiert wurde.

## Beschreibung

In einigen Situationen möchten Sie möglicherweise kein anker-positioniertes Element anzeigen. Zum Beispiel, wenn sein zugehöriger Anker vom Bildschirm gescrollt wurde, das anker-positionierte Element jedoch sonst noch teilweise oder vollständig sichtbar wäre, könnte es unklar sein, worauf es sich bezieht und nimmt unnötig Platz ein. In einem solchen Fall möchten Sie es möglicherweise vollständig verbergen.

Die `position-visibility` Eigenschaft kann verwendet werden, um das anker-positionierte Element `always` anzuzeigen oder bedingt zu verstecken, wenn das zugehörige Ankerelement vollständig verborgen ist (`anchors-visible`) oder wenn das anker-positionierte Element selbst teilweise versteckt ist (`no-overflow`).

Wenn ein Element aufgrund von `position-visibility` versteckt wird, wird es als **stark verborgen** bezeichnet. Das bedeutet, dass es so wirkt, als hätten es und seine Nachfahrenelemente einen {{cssxref("visibility")}} Wert von `hidden` gesetzt, unabhängig davon, welchen tatsächlichen Sichtbarkeitswert sie haben.

`position-visibility` sollte nur in Situationen verwendet werden, in denen es bevorzugt wird, das positionierte Element vollständig zu verbergen. In den meisten Fällen ergibt es mehr Sinn, zu versuchen, die Platzierung von positionierten Elementen zu ändern, wenn sie beginnen überzulaufen, um sie auf dem Bildschirm und nutzbar zu halten. Dies kann mit der {{cssxref("position-try-fallbacks")}} Eigenschaft und der {{cssxref("@position-try")}} Regel erreicht werden. Siehe den [Rückfalloptionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden für weitere Informationen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel ermöglicht es, den Wert einer anker-positionierten Eigenschaft `position-visibility` zu ändern, um die Auswirkungen jedes Wertes zu demonstrieren.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente; ein Ankerelement mit der Klasse `anchor` und ein positioniertes Element mit der Klasse `infobox`.

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

Das HTML enthält auch Fülltexte, um den Inhalt größer als den Viewport zu machen, sodass Scrollen erforderlich ist. Wir haben auch ein {{htmlelement("fieldset")}} mit einer Gruppe von [Radio-Inputs](/de/docs/Web/HTML/Reference/Elements/input/radio) mit verschiedenen `position-visibility` Werten eingeschlossen. Das Markup für diese wird der Kürze halber nicht gezeigt.

#### CSS

Wir stylen ein `anchor` `<div>` als Ankerelement und verankern das `infobox` `<div>` daran. Der relevante CSS ist wie folgt:

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

Wir fügen einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignishandler hinzu, um bei der Auswahl eines neuen Wertes den `position-visibility` Eigenschaftswert der Infobox zu aktualisieren.

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

Wählen Sie unterschiedliche `position-visibility` Werte und scrollen Sie dann die Seite hoch und runter, um deren Auswirkungen zu sehen. Mit `position-visibility: always` wird das positionierte Element nicht versteckt. Mit `position-visibility: anchors-visible` wird das positionierte Element nur sichtbar sein, wenn der Anker teilweise oder vollständig auf dem Bildschirm ist. Mit `position-visibility: no-overflow` wird das positionierte Element versteckt, sobald es beginnt, den Viewport zu überlaufen.

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
- [CSS Anker-Positionierung verwenden](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Rückfalloptionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
