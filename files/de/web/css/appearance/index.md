---
title: appearance
slug: Web/CSS/appearance
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

Die **`appearance`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt das gerenderte Erscheinungsbild von ersetzten UI-Widget-Elementen wie z.B. Formularelementen fest. Am häufigsten erhalten solche Elemente ein nativer, plattformspezifisches Styling basierend auf dem Thema des Betriebssystems oder ein primitives Erscheinungsbild mit Stilen, die mit CSS überschrieben werden können.

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

Die `appearance`-Eigenschaft kann auf alle Elemente und Pseudo-Elemente angewendet werden, aber die Wirkung des angegebenen Wertes hängt, falls vorhanden, vom Element ab, auf das sie angewendet wird.

- `none`
  - : Verleiht dem Widget ein _primitives_ Erscheinungsbild, sodass es über CSS gestylt werden kann, während die native Funktionalität des Widgets beibehalten wird. Dieser Wert beeinflusst keine Nicht-Widgets.

- `auto`
  - : Stellt interaktive Widgets mit ihrem _OS-nativen_ Erscheinungsbild dar. Verhält sich wie `none` bei Elementen ohne OS-native Gestaltung.

- `base-select`
  - : Nur relevant für das {{htmlelement("select")}}-Element und das {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element, sodass diese gestaltet werden können.

- `<compat-special>`
  - : Hat eine Wirkung, die `auto` auf bestimmten Elementen ähnelt.
    - `textfield`
      - : Verursacht, dass das Aussehen bestimmter `<input>`-Typen [dem Aussehen des `text`-Typs entspricht](#try_it).
    - `menulist-button`
      - : Wenn es auf das `<select>`-Element gesetzt wird, passt sich der Stil des Dropdown-Auswahlfeldes [dem seiner Standardstatus an](#festlegen_des_erscheinungsbildes_eines_selects).

- `<compat-auto>`
  - : Aus Gründen der Rückwärtskompatibilität enthalten; mögliche Werte umfassen `button`, `checkbox`, `listbox`, `menulist`, `meter`, `progress-bar`, `push-button`, `radio`, `searchfield`, `slider-horizontal`, `square-button` und `textarea`. Die Werte verhalten sich alle wie `auto`: Verwenden Sie stattdessen `auto`.

> [!NOTE]
> Die Spezifikation definiert auch einen `base`-Wert. Dieser wird derzeit von keinem Browser unterstützt.

#### Nicht standardisierte Werte

Einige nicht standardisierte Werte werden auch von einigen Browsern unterstützt:

- `slider-vertical`
  - : Macht den Schieberegler vertikal, wenn er auf `<input type="range">`-Elemente angewendet wird. Um [einen vertikalen Schieberegler zu erstellen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls), sollten Sie stattdessen den {{cssxref("writing-mode")}} auf `vertical-lr` und die {{cssxref("direction")}} auf `rtl` setzen.

- `-apple-pay-button`
  - : Zeigt das Apple Pay-Logo an, wenn es auf ein {{htmlelement("button")}}, {{htmlelement("a")}} oder {{htmlelement("input")}}-Element vom Typ `button` oder `reset` gesetzt ist.

## Beschreibung

Die `appearance`-Eigenschaft ermöglicht die Anzeige von Elementen im OS-nativen Stil basierend auf dem Thema des Betriebssystems sowie die Entfernung jeglicher plattformnativen Gestaltung mit dem `none`-Wert. Das Setzen von `appearance: none` oder die anderweitige Änderung des Erscheinungsbildes von UI-Widgets ändert nicht die Funktionalität des Elements.

Während die meisten Elemente in einem Dokument vollständig mit CSS gestylt werden können, werden UI-Steuerelemente (_Widgets_) normalerweise vom Browser unter Verwendung der nativen UI-Stile des Betriebssystems gerendert. Dieses _native_ Erscheinungsbild variiert zwischen Betriebssystemen und Browsern. In diesem Standardzustand haben Widgets nur begrenzt oder gar keine Funktionen, die mit CSS gestaltet werden können. Welche Elemente dieses native UI-Erscheinungsbild haben, ist in HTML definiert.

Die `appearance`-Eigenschaft bietet eine gewisse Kontrolle über das Erscheinungsbild von HTML-Widgets, die standardmäßig wie native Betriebssystemsteuerungen aussehen. Besonders bemerkenswert ist, dass der Wert `none` einen Teil des nativen Erscheinungsbildes eines Widgets unterdrückt. Dies führt zu einem _primitiven_ Look, der über CSS gestaltet werden kann, während die Funktionalität beibehalten und native Benutzerinteraktionen unterstützt werden.

Einige Widgets verschwinden vollständig, wenn `appearance: none` gesetzt wird. Die versteckten Steuerungen sind jedoch weiterhin interaktiv. Beispielsweise wird durch Anklicken eines mit einem {{htmlelement("label")}} verbundenen `appearance: none`-Kontrollkästchens dessen Status umgeschaltet.

Weil `none` dazu führen kann, dass ein Widget verborgen wird, wird der `base`-Wert hinzugefügt, um Widgets ein grundlegendes Erscheinungsbild zu verleihen. Wenn unterstützt, wird der `base`-Wert sicherstellen, dass Widgets ihr natives Erscheinungsbild beibehalten, während CSS verwendet werden kann, um Stile eines Widgets zu ändern, die standardmäßig nicht geändert werden können. Im Gegensatz zu `none`, das Radiobuttons und Kontrollkästchen verschwinden lassen kann, verleiht `base` dem Widget ein primitives Erscheinungsbild mit standardmäßigen nativen Stilen, die benutzbar und interoperabel sind, und ermöglicht ein gutes Maß an Anpassung über CSS. Während dieser `base`-Wert noch nicht unterstützt wird, bieten die vielen `<compat-auto>`-Werte ähnliche Funktionalität, sind jedoch typspezifisch und nicht global.

Der `base-select`-Wert, der nur für das {{htmlelement("select")}}-Element und das {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element relevant ist, ermöglicht [das Styling von `<select>`-Elementen und dem Auswahlpicker](#festlegen_des_erscheinungsbildes_eines_selects) (der die `<option>`-Elemente enthält). Der Picker wird in der obersten Ebene gerendert, ähnlich wie ein Popover. Wenn `base-select` gesetzt ist, kann der Picker relativ zum Select (oder anderen Elementen) unter Verwendung von [CSS Anchoring-Positionierungsfunktionen](/de/docs/Web/CSS/CSS_anchor_positioning) positioniert werden. Darüber hinaus führt der `base-select`-Wert dazu, dass der `<select>` nicht außerhalb des Browserfensters gerendert wird oder eingebaute mobile Betriebssystemkomponenten aktiviert. Außerdem wird die Größe nicht mehr basierend auf der Breite des breitesten `<option>` festgelegt.

### Vorangestellte nicht standardisierte Werte

Vor der Standardisierung erlaubten die vorangestellten Eigenschaften **`-moz-appearance`** und **`-webkit-appearance`**, dass Elemente als Widgets wie Buttons oder Checkboxes angezeigt werden. Folgende nicht standardisierte Werte können in älteren Stylesheets, am häufigsten als Werte von Shadow-DOM-Komponenten [vorangestellten Pseudo-Elementen](/de/docs/Web/CSS/Reference/Webkit_extensions#pseudo-elements), auftreten.

<details>
<summary>Nicht standardisierte Werte</summary>

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

Es wird empfohlen, nur standardisierte Schlüsselwörter zu verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

Dieses Beispiel demonstriert die grundlegende Verwendung der `appearance`-Eigenschaft, um das Erscheinungsbild eines {{htmlelement("input")}}-Elements in einigen Browsern zu ändern.

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

Wir stellen das Element mit der Klasse `text` so ein, dass es wie ein Textfeld aussieht.

```css
.text {
  appearance: textfield;
}
```

#### Ergebnisse

{{EmbedLiveSample("Basic example", 600, 100)}}

Je nach Browser kann der Spinner visuell entfernt werden, wenn die Steuerung so eingestellt ist, dass sie wie ein Textfeld aussieht. Die `appearance`-Eigenschaft hat keinen Einfluss auf die Funktionalität: Zum Beispiel, obwohl es keinen klickbaren Spinner mehr gibt, erhöhen und verringern die Auf- und Abwärtspfeil-Tasten weiterhin den Wert.

### Erscheinungsbild auf `none` gesetzt

Das folgende Beispiel zeigt, wie das Standard-Styling von einem Kontrollkästchen, einer Radiotaste und einem {{htmlelement("select")}}-Element entfernt und benutzerdefiniertes Styling angewendet wird.

#### HTML

Wir fügen Paare von Kontrollkästchen, Radiotasten und `<select>`-Elementen zusammen mit ihren zugehörigen Beschriftungen ein:

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

Wir wenden Stile auf beide {{htmlelement("input")}}-Elemente vom Typ `checkbox` an; diese Stile erstellen ein rotes Quadrat, wenn das Element stilisiert werden kann. Wir setzen `appearance: none` auf den {{cssxref(":checked")}} UI-Status für alle Eingaben (`checkbox` und `radio`) sowie auf Elemente mit der Klasse `.none`. Dies entfernt den gesamten Stil der Radiotaste und des Kontrollkästchens, abgesehen von den Rändern, und erlaubt es, dass alle festgelegten Stile angewendet werden. Es gibt keine alternativen Stile für die Radiotasten oder `<select>`-Elemente, wenn `none` gesetzt ist.

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

Das Setzen von `appearance: none` ermöglicht es, UI-Elemente zu stylen, birgt jedoch auch das Risiko, das Widget zu verstecken. Das nicht angekreuzte Kontrollkästchen, dessen `appearance` zu `auto` standardmäßig gesetzt ist, sieht wie ein Kontrollkästchen aus. Das Setzen von `appearance: none` im `:checked`-Zustand ermöglicht es, es zu stylen.

Wie das nicht angekreuzte Kontrollkästchen sieht die nicht aktivierte Radiotaste wie ein natives UI-Widget aus, weil sie es ist. Wenn sie aktiviert wird und `appearance: none` angewendet wird, verschwindet die Radiotaste; ihre Funktionalität bleibt erhalten, und nur ihre Ränder beeinflussen das Seiten-Rendering.

### Festlegen des Erscheinungsbildes eines Selects

Wir können die `appearance`-Eigenschaft verwenden, um in die benutzerdefinierte Select-Funktionalität zu wechseln, die es ermöglicht, das `<select>`-Element und seinen Picker, der den Teil des Formularsteuerungselements darstellt, der aus der Seite herausragt, zu gestalten.

#### HTML

Wir fügen drei `<select>`-Elemente ein, mit denselben mehreren {{htmlelement("option")}}-Kindern. Wie bei jedem `<select>` enthalten wir auch die zugehörigen {{htmlelement("label")}}-Elemente. Die dritte Option hat mehr Text, um den Effekt von `base-select` auf die Breite des `<select>` zu demonstrieren:

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

Wir wählen die Picker aller `<select>`-Elemente mit dem {{cssxref("::picker()")}}-Pseudo-Element mit dem Parameter `select` aus. Wir setzen den `appearance`-Wert aller Picker und eines `<select>`-Elements auf `base-select`. Wir setzen das letzte `<select>` auf `menulist-button`. Das erste `<select>` ist standardmäßig im `auto`-Zustand:

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

Wir setzen Werte für die Eigenschaften {{cssxref("background-color")}} und {{cssxref("border")}} der `<select>` und Picker, um die Auswirkungen der `appearance`-Werte zu demonstrieren:

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

Während die Stile {{cssxref("background-color")}} und {{cssxref("border")}} auf allen `<select>`-Elementen und ihren Pickern definiert sind, wirken die `::picker(select)`-Stile nur auf den Picker, wenn sowohl das `<select>` als auch der Picker die `appearance`-Eigenschaft auf `base-select` gesetzt haben. Die erste und dritte Auswahl sehen gleich aus, weil `menulist-button` ein Kompatibilitätsschlüsselwort ist.

Beachten Sie, dass standardmäßig die Inline-Größe des `<select>` im Allgemeinen die Inline-Größe des `<option>` mit dem meisten Text ist und dass der Dropdown-Picker über der gerenderten Seite angezeigt wird, wenn er geöffnet wird, und somit nicht vom umgebenden Seitenlayout eingeschränkt ist und daher vollständig sichtbar ist. Diese Aussagen sind nicht mehr zutreffend, wenn `base-select` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)
