---
title: appearance
slug: Web/CSS/Reference/Properties/appearance
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`appearance`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt das gerenderte Erscheinungsbild von ersetzten UI-Widget-Elementen wie Formularelementen fest. Am häufigsten erhalten solche Elemente ein natives, plattformspezifisches Styling basierend auf dem Thema des Betriebssystems oder ein primitives Erscheinungsbild, das mit CSS überschrieben werden kann.

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

Die `appearance`-Eigenschaft kann auf alle Elemente und Pseudo-Elemente angewendet werden, aber der Effekt des angegebenen Wertes, falls vorhanden, hängt vom jeweiligen Element ab.

- `none`
  - : Verleiht dem Widget ein _primitives_ Erscheinungsbild, wodurch es über CSS stilisiert werden kann, während die native Funktionalität des Widgets beibehalten wird. Dieser Wert beeinflusst keine Nicht-Widgets.

- `auto`
  - : Setzt interaktive Widgets so, dass sie mit ihrem _betriebssystemspezifischen_ Erscheinungsbild gerendert werden. Funktioniert wie `none` bei Elementen ohne betriebssystemspezifisches Styling.

- `base-select`
  - : Nur relevant für das {{htmlelement("select")}}-Element und das {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element, wodurch sie gestylt werden können.

- `<compat-special>`
  - : Hat bei bestimmten Elementen eine ähnliche Wirkung wie `auto`.
    - `textfield`
      - : Führt dazu, dass das Erscheinungsbild bestimmter `<input>`-Typen [dem des `text`-Typs entspricht](#try_it).
    - `menulist-button`
      - : Wenn auf das `<select>`-Element gesetzt, stimmt der Stil des Dropdown-Auswahlelements [mit seinem Standardzustand überein](#das_erscheinungsbild_eines_selects_setzen).

- `<compat-auto>`
  - : Enthalten für die Abwärtskompatibilität; mögliche Werte beinhalten `button`, `checkbox`, `listbox`, `menulist`, `meter`, `progress-bar`, `push-button`, `radio`, `searchfield`, `slider-horizontal`, `square-button` und `textarea`. Alle Werte verhalten sich wie `auto`: Verwenden Sie stattdessen `auto`.

> [!NOTE]
> Die Spezifikation definiert auch einen `base`-Wert. Dieser wird derzeit von keinem Browser unterstützt.

#### Nicht-standardmäßige Werte

Einige nicht-standardmäßige Werte werden auch in einigen Browsern unterstützt:

- `slider-vertical`
  - : Macht den Slider vertikal, wenn er auf `<input type="range">`-Elemente angewendet wird. Um einen [vertikalen Slider zu erstellen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls), sollten Sie stattdessen den {{cssxref("writing-mode")}} auf `vertical-lr` und die {{cssxref("direction")}} auf `rtl` setzen.

- `-apple-pay-button`
  - : Zeigt das Apple-Pay-Logo an, wenn es auf ein {{htmlelement("button")}}, {{htmlelement("a")}} oder {{htmlelement("input")}}-Element vom Typ `button` oder `reset` gesetzt wird.

## Beschreibung

Die `appearance`-Eigenschaft ermöglicht es, Elemente im betriebssystemspezifischen Stil basierend auf dem Thema des Betriebssystems anzuzeigen sowie jegliches plattformnativen Styling mit dem Wert `none` zu entfernen. Das Setzen von `appearance: none` oder das Ändern des Erscheinungsbilds von UI-Widgets verändert nicht die Funktionalität des Elements.

Während die meisten Elemente in einem Dokument vollständig durch CSS gestylt werden können, werden UI-Kontrollen (_Widgets_) typischerweise vom Browser unter Verwendung der nativen UI-Stile des Betriebssystems gerendert. Dieses _native_ Erscheinungsbild unterscheidet sich zwischen Betriebssystemen und Browsern. In diesem Standardzustand bieten Widgets begrenzte, wenn überhaupt, Features, die mit CSS gestylt werden können. Welche Elemente dieses native UI-Erscheinungsbild haben, wird in HTML definiert.

Die `appearance`-Eigenschaft bietet eine gewisse Kontrolle über das Erscheinungsbild von HTML-Widgets, die standardmäßig wie native Betriebssystemkontrollen aussehen. Besonders hervorzuheben ist der Wert `none`, der einen Teil des nativen Erscheinungsbilds eines Widgets unterdrückt. Dies führt zu einem _primitiven_ Look, der mit CSS stilisiert werden kann, während die Funktionalität und native Benutzerinteraktionen erhalten bleiben.

Einige Widgets verschwinden vollständig, wenn `appearance: none` gesetzt ist. Die versteckten Steuerungen bleiben jedoch interaktiv. Zum Beispiel wird durch Klicken auf ein {{htmlelement("label")}}, das mit einem `appearance: none`-Checkbox verknüpft ist, der angekreuzte Zustand der Box umgeschaltet.

Da `none` dazu führen kann, dass ein Widget ausgeblendet wird, wird der `base`-Wert hinzugefügt, um Widgets mit einem Basiseerscheinungsbild zu versehen. Bei Unterstützung sorgt der `base`-Wert dafür, dass Widgets ihr nativen Erscheinungsbild beibehalten, während CSS verwendet werden kann, um Styles eines Widgets zu ändern, die standardmäßig nicht änderbar sind. Im Gegensatz zu `none`, das Radioknöpfe und Kontrollkästchen verschwinden lassen kann, gibt `base` dem Widget ein primitives Erscheinungsbild mit standardmäßig nutzbaren und interoperablen nativen Styles sowie eine gute Anpassungsmöglichkeit über CSS. Während dieser `base`-Wert noch nicht unterstützt wird, bieten die vielen `<compat-auto>`-Werte eine ähnliche Funktionalität, sind jedoch typenspezifisch und nicht global.

Der `base-select`-Wert, der nur für das {{htmlelement("select")}}-Element und das {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element relevant ist, ermöglicht das [Styling von `<select>`-Elementen und dem Auswahlelement](#das_erscheinungsbild_eines_selects_setzen) (das die `<option>`-Elemente enthält). Der Picker wird in der obersten Schicht gerendert, ähnlich wie ein Popover. Wenn `base-select` gesetzt ist, kann der Picker relativ zum Select (oder anderen Elementen) mithilfe von [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positioniert werden. Darüber hinaus führt der `base-select`-Wert dazu, dass das `<select>` nicht außerhalb des Browserfensters gerendert wird oder eingebaute mobile Betriebssystemkomponenten auslöst. Es wird auch nicht mehr basierend auf der Breite der breitesten `<option>`-Elemente dimensioniert.

### Vorgehängte nicht-standardisierte Werte

Vor der Standardisierung erlaubten die vorgehangenen **`-moz-appearance`** und **`-webkit-appearance`** Eigenschaften, dass Elemente als Widgets wie Buttons oder Kästchen angezeigt werden. Die folgenden nicht-standardisierten Werte können in alten Stylesheets auftreten, am häufigsten als Werte von Shadow-DOM-Komponenten [vorgehängten Pseudo-Elementen](/de/docs/Web/CSS/Reference/Webkit_extensions#pseudo-elements).

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

Autoren wird empfohlen, nur standardisierte Schlüsselwörter zu verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

Dieses Beispiel zeigt die grundlegende Verwendung der `appearance`-Eigenschaft, um das Erscheinungsbild eines {{htmlelement("input")}}-Elements in einigen Browsern zu ändern.

#### HTML

Wir fügen zwei `number`-Formularsteuerungen zusammen mit ihren Beschriftungen ein.

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

Wir setzen das Element mit der Klasse `text`, um wie ein Textfeld auszusehen.

```css
.text {
  appearance: textfield;
}
```

#### Ergebnisse

{{EmbedLiveSample("Basic example", 600, 100)}}

Je nach Browser kann der Spinner visuell entfernt werden, wenn die Steuerung so eingestellt ist, dass sie wie ein Textfeld aussieht. Die `appearance`-Eigenschaft hat keinen Einfluss auf die Funktionalität: Auch wenn es keinen Spinner mehr zum Anklicken geben mag, werden die Pfeiltasten weiter oben und unten den Wert inkrementieren und dekrementieren.

### Appearance auf `none` gesetzt

Das folgende Beispiel zeigt, wie Sie das Standardstyling von einem Kontrollkästchen, einem Optionsfeld und einem {{htmlelement("select")}}-Element entfernen und benutzerdefiniertes Styling anwenden können.

#### HTML

Wir fügen Paare von Kontrollkästchen, Optionsfeldern und `<select>`-Elementen zusammen mit ihren zugehörigen Beschriftungen ein:

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

Wir wenden Stile auf beide {{htmlelement("input")}}-Elemente des Typs `checkbox` an; diese Stile erzeugen ein rotes Quadrat, wenn das Element gestaltbar ist. Wir setzen `appearance: none` auf den {{cssxref(":checked")}}-UI-Zustand für alle Eingaben (`checkbox` und `radio`) sowie auf Elemente mit der Klasse `.none`. Dies entfernt das gesamte Style des Optionsfeldes und der Kontrollkästchen, abgesehen von den Rändern, und ermöglicht das Anwenden gestellter Styles. Es gibt keine alternativen Styles für die Optionsfelder oder `<select>`-Elemente, wenn `none` gesetzt ist.

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

Das Setzen von `appearance: none` ermöglicht es, UI-Elemente zu stylen, birgt jedoch auch das Risiko, das Widget zu verstecken. Das nicht markierte Kontrollkästchen, dessen `appearance` auf `auto` voreingestellt ist, sieht aus wie ein Kontrollkästchen. Das Setzen von `appearance: none` im `:checked`-Zustand ermöglicht es, es zu stylen.

Wie das nicht markierte Kontrollkästchen sieht auch das nicht markierte Optionsfeld wie das native UI-Widget aus, weil es das auch ist. Im markierten Zustand verschwindet das Optionsfeld mit angewendetem `appearance: none`; seine Funktionalität bleibt erhalten, und nur seine Ränder beeinflussen das Rendering der Seite.

### Das Erscheinungsbild eines Selects setzen

Wir können die `appearance`-Eigenschaft verwenden, um benutzerdefinierte Select-Funktionalitäten zu verwenden, indem wir das `<select>`-Element und seinen Picker stylen, der den Teil des Formularsteuerelements darstellt, der aus der Seite herausspringt.

#### HTML

Wir fügen drei `<select>`-Elemente ein, mit denselben mehreren {{htmlelement("option")}}-Kindern. Wie bei jedem `<select>` fügen wir auch zugehörige {{htmlelement("label")}}-Elemente hinzu. Die dritte Option hat mehr Text, um die Wirkung von `base-select` auf die Breite des `<select>` zu demonstrieren:

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

Wir wählen die Picker aller `<select>`-Elemente mit dem {{cssxref("::picker()")}}-Pseudo-Element mit dem `select`-Parameter aus. Wir setzen den `appearance`-Wert aller Picker und eines `<select>`-Elements auf `base-select`. Wir setzen das letzte `<select>` auf `menulist-button`. Das erste `<select>` ist standardmäßig im `auto`-Zustand:

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

Wir setzen Werte für die `<select>`- und Picker-{{cssxref("background-color")}}- und {{cssxref("border")}}-Eigenschaften, um die Effekte der `appearance`-Werte zu demonstrieren:

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

Obwohl die {{cssxref("background-color")}}- und {{cssxref("border")}}-Stile auf alle `<select>`-Elemente und ihre Picker definiert sind, wirken sich die `::picker(select)`-Stile nur auf den Picker aus, wenn sowohl das Select als auch der Picker die `appearance`-Eigenschaft auf `base-select` gesetzt haben. Die ersten und dritten Selects sehen gleich aus, weil `menulist-button` ein Kompatibilitäts-Schlüsselwort ist.

Beachten Sie, dass die Inline-Größe des `<select>` standardmäßig die Inline-Größe der `<option>` mit dem meisten Text ist und dass der Dropdown-Picker über der gerenderten Seite erscheint, wenn er geöffnet ist, sodass er nicht durch die umgebende Seite eingeschränkt ist und daher vollständig sichtbar ist. Diese Aussagen sind nicht mehr wahr, wenn `base-select` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)
