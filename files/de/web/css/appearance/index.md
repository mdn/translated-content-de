---
title: appearance
slug: Web/CSS/appearance
l10n:
  sourceCommit: 27dee9f7fd5371791072b5144b8348e65a64fbfe
---

Die **`appearance`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt das gerenderte Erscheinungsbild von ersetzten UI-Widget-Elementen wie Formularsteuerelementen. Meistens erhalten solche Elemente ein natives, plattformabhängiges Styling basierend auf dem Thema des Betriebssystems oder ein primitives Erscheinungsbild mit Styles, die mit CSS überschrieben werden können.

{{InteractiveExample("CSS Demo: appearance")}}

```css interactive-example-choice
appearance: auto;
```

```css interactive-example-choice
appearance: none;
```

```css interactive-example-choice
appearance: textfield;
```

```html interactive-example
<section id="default-example">
  <div class="background" id="example-element">
    <input type="search" value="search" aria-label="unlabeled search" />
    <input type="checkbox" aria-label="unlabeled checkbox" />
    <input type="radio" aria-label="unlabeled radio button" />
    <button>Button</button>
  </div>
</section>
```

```css interactive-example
input,
button {
  appearance: inherit;
}
```

## Syntax

```css
/* CSS Basic User Interface Module Level 4 values */
appearance: none;
appearance: auto;
appearance: menulist-button;
appearance: textfield;
appearance: base-select;

/* Global values */
appearance: inherit;
appearance: initial;
appearance: revert;
appearance: revert-layer;
appearance: unset;

/* <compat-auto> values have the same effect as 'auto' */
appearance: button;
appearance: checkbox;
```

### Werte

Die `appearance`-Eigenschaft kann auf alle Elemente und Pseudo-Elemente angewendet werden, aber die Wirkung des angegebenen Wertes, falls vorhanden, hängt vom Element ab, auf das sie angewendet wird.

- `none`
  - : Verleiht dem Widget ein _primitives_ Erscheinungsbild, das über CSS gestylt werden kann, wobei die native Funktionalität des Widgets erhalten bleibt. Dieser Wert hat keine Auswirkungen auf Nicht-Widgets.

- `auto`
  - : Setzt interaktive Widgets so, dass sie mit ihrem _OS-nativen_ Erscheinungsbild gerendert werden. Verhält sich wie `none` bei Elementen ohne OS-natives Styling.

- `base-select`
  - : Nur relevant für das {{htmlelement("select")}}-Element und das {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element, was deren Styling ermöglicht.

- `<compat-special>`
  - : Hat eine ähnliche Wirkung wie `auto` bei bestimmten Elementen.
    - `textfield`
      - : Lässt das Erscheinungsbild bestimmter `<input>`-Typen [dem des `text`-Typs entsprechen](#try_it).
    - `menulist-button`
      - : Bei Einstellung auf das `<select>`-Element entspricht der Stil des Dropdown-Auswahlelements [dem seines Standardzustands](#Setting_the_appearance_of_a_select).

- `<compat-auto>`
  - : Wird aus Gründen der Abwärtskompatibilität eingeschlossen; mögliche Werte umfassen `button`, `checkbox`, `listbox`, `menulist`, `meter`, `progress-bar`, `push-button`, `radio`, `searchfield`, `slider-horizontal`, `square-button` und `textarea`. Die Werte verhalten sich alle wie `auto`; verwenden Sie stattdessen `auto`.

> [!NOTE]
> Die Spezifikation definiert auch einen `base`-Wert. Dieser wird von keinem Browser unterstützt.

#### Nicht-standardisierte Werte

Einige nicht-standardisierte Werte werden auch in einigen Browsern unterstützt:

- `slider-vertical`
  - : Lässt den Slider vertikal erscheinen, wenn er auf `<input type="range">`-Elemente angewendet wird. Um [einen vertikalen Slider zu erstellen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls), sollten Sie stattdessen den {{cssxref("writing-mode")}} auf `vertical-lr` und die {{cssxref("direction")}} auf `rtl` setzen.

- `-apple-pay-button`
  - : Zeigt das Apple Pay-Logo an, wenn es auf ein {{htmlelement("button")}}, {{htmlelement("a")}} oder {{htmlelement("input")}}-Element vom Typ `button` oder `reset` gesetzt wird.

## Beschreibung

Die `appearance`-Eigenschaft ermöglicht die Anzeige von Elementen im OS-nativen Stil basierend auf dem Thema des Betriebssystems sowie das Entfernen jeglicher plattformnativen Stile durch den Wert `none`. Das Setzen von `appearance: none` oder das anderweitige Ändern des Erscheinungsbilds von UI-Widgets ändert nicht die Funktionalität des Elements.

Während die meisten Elemente in einem Dokument vollständig durch CSS gestylt werden können, werden UI-Steuerelemente (_Widgets_) typischerweise vom Browser mit den nativen UI-Stilen des Betriebssystems gerendert. Dieses _native_ Erscheinungsbild unterscheidet sich zwischen Betriebssystemen und Browsern. In diesem Standardzustand haben Widgets eingeschränkte oder gar keine stilbaren Features mit CSS. Welche Elemente dieses native UI-Erscheinungsbild haben, wird in HTML definiert.

Die `appearance`-Eigenschaft bietet einige Kontrolle über das Erscheinungsbild von HTML-Widgets, die standardmäßig wie native Betriebssystem-Steuerelemente aussehen. Besonders bemerkenswert ist, dass der Wert `none` einen Teil des nativen Erscheinungsbildes eines Widgets unterdrückt. Dies führt zu einem _primitiven_ Look, der über CSS gestylt werden kann und dennoch Funktionalität und Unterstützung für native Benutzerinteraktionen beibehält.

Einige Widgets verschwinden vollständig, wenn sie auf `appearance: none` gesetzt werden. Die versteckten Steuerelemente bleiben jedoch interaktiv. Beispielsweise wird durch Klicken auf ein {{htmlelement("label")}}, das mit einer Checkbox mit `appearance: none` verknüpft ist, der Checked-Status der Checkbox umgeschaltet.

Da `none` dazu führen kann, dass ein Widget ausgeblendet wird, wird der `base`-Wert hinzugefügt, um Widgets ein Basiserscheinungsbild zu verleihen. Wenn unterstützt, stellt der `base`-Wert sicher, dass Widgets ihr natives Erscheinungsbild beibehalten, während CSS verwendet werden kann, um die Standards nicht änderbaren Stile eines Widgets zu ändern. Im Gegensatz zu `none`, das Radiobuttons und Checkboxen verschwinden lassen kann, gibt `base` dem Widget ein primitives Erscheinungsbild mit standardmäßigen nativen Stilen, die verwendbar und interoperabel sind, sowie eine gute Anpassungsmöglichkeit über CSS. Während dieser `base`-Wert noch nicht unterstützt wird, bieten die vielen `<compat-auto>`-Werte ähnliche Funktionalität, sind jedoch typspezifisch und nicht global.

Der Wert `base-select`, der nur für das {{htmlelement("select")}}-Element und das {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element relevant ist, ermöglicht [das Styling von `<select>`-Elementen und des Auswahl-Werkzeugs](#Setting_the_appearance_of_a_select) (das die `<option>`-Elemente enthält). Der Picker wird in der obersten Schicht gerendert, ähnlich wie ein Popover. Wenn `base-select` gesetzt ist, kann der Picker relativ zum Selektor (oder anderen Elementen) mit den [CSS-Ankerpositionierungs](/de/docs/Web/CSS/CSS_anchor_positioning) -Funktionen positioniert werden. Darüber hinaus führt der Wert `base-select` dazu, dass das `<select>` nicht außerhalb des Browserfensters gerendert wird oder keine eingebauten Komponenten des mobilen Betriebssystems auslöst. Es wird auch nicht mehr basierend auf der Breite der breitesten `<option>`-Wert bemessen.

### Präfixierte nicht-standardisierte Werte

Vor der Standardisierung ermöglichten die präfixierten **`-moz-appearance`** und **`-webkit-appearance`** Eigenschaften es Elementen, als Widgets wie Buttons oder Checkboxen angezeigt zu werden. Die folgenden nicht-standardisierten Werte können in Legacy-Stylesheets vorkommen, am häufigsten als Werte von Shadow-DOM-Komponenten [präfixierte Pseudo-Elemente](/de/docs/Web/CSS/WebKit_Extensions#pseudo-elements).

<details>
<summary>Nicht-standardisierte Werte</summary>

- `attachment`
- `borderless-attachment`
- `button-bevel`
- `caps-lock-indicator`
- `caret`
- `checkbox-container`
- `checkbox-label`
- `checkmenuitem`
- `color-well`
- `continuous-capacity-level-indicator`
- `default-button`
- `discrete-capacity-level-indicator`
- `inner-spin-button`
- `image-controls-button`
- `list-button`
- `listitem`
- `media-enter-fullscreen-button`
- `media-exit-fullscreen-button`
- `media-fullscreen-volume-slider`
- `media-fullscreen-volume-slider-thumb`
- `media-mute-button`
- `media-play-button`
- `media-overlay-play-button`
- `media-return-to-realtime-button`
- `media-rewind-button`
- `media-seek-back-button`
- `media-seek-forward-button`
- `media-toggle-closed-captions-button`
- `media-slider`
- `media-sliderthumb`
- `media-volume-slider-container`
- `media-volume-slider-mute-button`
- `media-volume-slider`
- `media-volume-sliderthumb`
- `media-controls-background`
- `media-controls-dark-bar-background`
- `media-controls-fullscreen-background`
- `media-controls-light-bar-background`
- `media-current-time-display`
- `media-time-remaining-display`
- `menulist-text`
- `menulist-textfield`
- `meterbar`
- `number-input`
- `progress-bar-value`
- `progressbar`
- `progressbar-vertical`
- `range`
- `range-thumb`
- `rating-level-indicator`
- `relevancy-level-indicator`
- `scale-horizontal`
- `scalethumbend`
- `scalethumb-horizontal`
- `scalethumbstart`
- `scalethumbtick`
- `scalethumb-vertical`
- `scale-vertical`
- `scrollbarthumb-horizontal`
- `scrollbarthumb-vertical`
- `scrollbartrack-horizontal`
- `scrollbartrack-vertical`
- `searchfield-decoration`
- `searchfield-results-decoration`
- `searchfield-results-button`
- `searchfield-cancel-button`
- `snapshotted-plugin-overlay`
- `sheet`
- `sliderthumb-horizontal`
- `sliderthumb-vertical`
- `textfield-multiline`

</details>

Autoren werden ermutigt, nur standardisierte Schlüsselwörter zu verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

Dieses Beispiel demonstriert die grundlegende Verwendung der `appearance`-Eigenschaft und verändert das Erscheinungsbild eines {{htmlelement("input")}}-Elements in einigen Browsern.

#### HTML

Wir fügen zwei `number`-Formularsteuerelemente zusammen mit ihren Labels ein.

```html
<p>
  <label>Enter a number: <input type="number" min="0" max="10" /></label>
</p>
<p>
  <label
    >Enter a number: <input type="number" min="0" max="10" class="text"
  /></label>
</p>
```

#### CSS

Wir setzen das Element mit der Klasse `text` so, dass es wie ein Textfeld aussieht.

```css
.text {
  appearance: textfield;
}
```

#### Ergebnisse

{{EmbedLiveSample("Basic example", 600, 100)}}

Abhängig vom Browser kann der Spinner visuell entfernt werden, wenn das Steuerungselement so eingestellt ist, dass es wie ein Textfeld aussieht. Die `appearance`-Eigenschaft hat keine Wirkung auf die Funktionalität: Zum Beispiel, während es keinen Spinner mehr geben mag, auf den man klicken kann, werden die Pfeiltasten nach oben und unten immer noch den Wert inkrementieren und dekrementieren.

### Erscheinungsbild auf `none` gesetzt

Das folgende Beispiel zeigt, wie man das Standardstyling von einem Kontrollkästchen, einem Radiobutton und einem {{htmlelement("select")}}-Element entfernt und benutzerdefiniertes Styling anwendet.

#### HTML

Wir fügen Paare von Kontrollkästchen, Radiobuttons und `<select>`-Elementen zusammen mit ihren zugehörigen Labels ein:

```html
<label><input type="checkbox" /> Default unchecked </label>
<label><input type="checkbox" checked /> Default checked </label>

<hr />

<label><input type="radio" name="radio" /> Default unchecked </label>
<label><input type="radio" name="radio" checked /> Default checked </label>

<hr />

<label
  >Unstyled select
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</label>

<label
  >Styled select
  <select class="none">
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</label>
```

#### CSS

```css hidden
label {
  display: block;
  margin: 0.5em 0;
}
```

Wir wenden Styles sowohl auf {{htmlelement("input")}}-Elemente vom Typ `checkbox` an; diese Styles erzeugen ein rotes Quadrat, wenn das Element stilisierbar ist. Wir setzen `appearance: none` auf den {{cssxref(":checked")}}-UI-Zustand für alle Eingaben (`checkbox` und `radio`), sowie auf Elemente mit der `.none`-Klasse. Dies entfernt alle Styles des Radiobuttons und des Kontrollkästchens, abgesehen von den Rändern, und erlaubt es, alle gesetzten Styles anzuwenden. Es gibt keine alternativen Styles für die Radiobuttons oder `<select>`-Elemente, wenn `none` gesetzt ist.

```css
[type="checkbox"] {
  width: 1em;
  height: 1em;
  display: inline-block;
  background: red;
}
input:checked,
.none {
  appearance: none;
}
```

#### Ergebnis

{{EmbedLiveSample("Appearance set to none", 600, 220)}}

Das Setzen von `appearance: none` ermöglicht es, UI-Elemente zu stylen, aber es birgt auch das Risiko, das Widget zu verstecken. Das nicht angekreuzte Kontrollkästchen, dessen `appearance` standardmäßig `auto` ist, sieht aus wie ein Kontrollkästchen. Das Setzen von `appearance: none` im `:checked`-Zustand ermöglicht es, es zu stylen.

Wie das nicht angekreuzte Kontrollkästchen sieht auch der nicht angekreuzte Radiobutton wie das native UI-Widget aus, weil er es ist. Im angekreuzten Zustand, mit `appearance: none` angewendet, verschwindet der Radiobutton; seine Funktionalität bleibt erhalten und nur seine Ränder beeinflussen das Seitenrendering.

### Das Erscheinungsbild eines Selektors festlegen

Wir können die `appearance`-Eigenschaft verwenden, um benutzerdefinierte Selektor-Funktionalitäten zu aktivieren, was das Styling des `<select>`-Elements und seines Pickers ermöglicht, welcher den Teil des Formularsteuerelements darstellt, der aus der Seite herausspringt.

#### HTML

Wir fügen drei `<select>`-Elemente ein, die mit denselben mehreren {{htmlelement("option")}}-Kindern ausgestattet sind. Wie bei jedem `<select>` beinhalten wir auch zugehörige {{htmlelement("label")}}-Elemente. Die dritte Option hat mehr Text, um die Wirkung von `base-select` auf die Breite des `<select>` zu demonstrieren:

```html
<label for="ice-cream1"
  >Default flavor:
  <select id="ice-cream1">
    <option>Asparagus</option>
    <option>Dulce de leche</option>
    <option>Pistachio, rum raisin, and coffee</option>
  </select>
</label>
<label for="ice-cream2"
  >Base select flavor:
  <select id="ice-cream2" class="baseSelect">
    <option>Asparagus</option>
    <option>Dulce de leche</option>
    <option>Pistachio, rum raisin, and coffee</option>
  </select>
</label>
<label for="ice-cream3"
  >Menulist button flavor:
  <select id="ice-cream3" class="menulistButton">
    <option>Asparagus</option>
    <option>Dulce de leche</option>
    <option>Pistachio, rum raisin, and coffee</option>
  </select>
</label>
```

#### CSS

Wir wählen die Picker aller `<select>`-Elemente mit dem {{cssxref("::picker()")}}-Pseudo-Element und dem `select`-Parameter aus. Wir setzen den `appearance`-Wert aller Picker und eines `<select>`-Elements auf `base-select`. Wir setzen das letzte `<select>` auf `menulist-button`. Das erste `<select>` wird standardmäßig auf den `auto`-Zustand gesetzt:

```css
.baseSelect,
::picker(select) {
  appearance: base-select;
}
.menulistButton {
  appearance: menulist-button;
}
```

```css
label {
  display: block;
}
```

Wir setzen Werte für die {{cssxref("background-color")}} und {{cssxref("border")}}-Eigenschaften der `<select>`-Elemente und ihrer Picker, um die Effekte der `appearance`-Werte zu demonstrieren:

```css
select {
  border: 1px solid red;
  background-color: orange;
}

::picker(select) {
  background-color: yellow;
  border: none;
}
```

#### Ergebnisse

{{EmbedLiveSample("Setting the appearance of a select", 1050, 80)}}

Obwohl die {{cssxref("background-color")}} und {{cssxref("border")}}-Styles auf allen `<select>`-Elementen und ihren Pickern definiert sind, wirken die `::picker(select)`-Styles nur auf den Picker, wenn sowohl das `select` als auch der Picker die `appearance`-Eigenschaft auf `base-select` gesetzt haben. Die ersten und dritten `select` sehen gleich aus, weil `menulist-button` ein Kompatibilitätsschlüsselwort ist.

Achten Sie darauf, dass in der Regel die Inline-Größe des `<select>` der Inline-Größe der `<option>` mit dem meisten Text entspricht und dass das Dropdown-Auswahlelement über der gerenderten Seite erscheint, wenn es geöffnet ist, wodurch es nicht durch die umgebende Seite eingeschränkt wird und daher vollständig sichtbar ist. Diese Aussagen stimmen nicht mehr, wenn `base-select` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)
