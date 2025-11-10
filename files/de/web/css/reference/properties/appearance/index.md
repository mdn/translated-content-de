---
title: appearance
slug: Web/CSS/Reference/Properties/appearance
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`appearance`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt das gerenderte Erscheinungsbild von ersetzten UI-Widget-Elementen wie Formularsteuerungen. Solche Elemente erhalten meistens ein natives, plattformspezifisches Styling, basierend auf dem Betriebssystem-Thema oder ein primitives Erscheinungsbild mit Stilen, die durch CSS überschrieben werden können.

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

Die `appearance` Eigenschaft kann auf alle Elemente und Pseudo-Elemente angewendet werden, aber die Wirkung des angegebenen Wertes, falls vorhanden, hängt vom Element ab, auf das sie angewendet wird.

- `none`

  - : Verleiht dem Widget ein _primitives_ Erscheinungsbild, das durch CSS stilisierbar ist, während die native Funktionalität des Widgets erhalten bleibt. Dieser Wert beeinflusst keine Nicht-Widgets.

- `auto`

  - : Setzt interaktive Widgets so, dass sie mit ihrem _OS-nativen_ Erscheinungsbild gerendert werden. Verhält sich wie `none` bei Elementen ohne OS-natives Styling.

- `base-select`

  - : Nur relevant für das {{htmlelement("select")}} Element und das {{cssxref("::picker()", "::picker(select)")}} Pseudo-Element, wodurch sie gestylt werden können.

- `<compat-special>`

  - : Hat einen Effekt ähnlich wie `auto` bei bestimmten Elementen.
    - `textfield`
      - : Führt dazu, dass das Erscheinungsbild bestimmter `<input>` Typen [dem Erscheinungsbild des `text` Typs entspricht](#try_it).
    - `menulist-button`
      - : Wenn auf das `<select>` Element gesetzt, passt sich der Stil des Dropdown-Pickers [dem seines Standardzustands an](#das_erscheinungsbild_eines_select_festlegen).

- `<compat-auto>`
  - : Eingeschlossen für Rückwärtskompatibilität; mögliche Werte sind `button`, `checkbox`, `listbox`, `menulist`, `meter`, `progress-bar`, `push-button`, `radio`, `searchfield`, `slider-horizontal`, `square-button` und `textarea`. Alle Werte verhalten sich wie `auto`: Verwenden Sie stattdessen `auto`.

> [!NOTE]
> Die Spezifikation definiert auch einen `base` Wert. Dieser wird von keinem Browser unterstützt.

#### Nicht-standardmäßige Werte

Einige nicht-standardmäßige Werte werden in einigen Browsern unterstützt:

- `slider-vertical`

  - : Macht den Slider vertikal, wenn auf `<input type="range">` Elemente angewendet. Um einen [vertikalen Slider zu erstellen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls) sollten Sie stattdessen den {{cssxref("writing-mode")}} auf `vertical-lr` und die {{cssxref("direction")}} auf `rtl` setzen.

- `-apple-pay-button`
  - : Zeigt das Apple Pay-Logo an, wenn es auf ein {{htmlelement("button")}}, {{htmlelement("a")}}, oder ein {{htmlelement("input")}} Element des Typs `button` oder `reset` gesetzt ist.

## Beschreibung

Die `appearance` Eigenschaft ermöglicht das Anzeigen von Elementen im OS-nativen Stil basierend auf dem Thema des Betriebssystems sowie die Entfernung von jedwedem plattformspezifischen Styling mit dem Wert `none`. Das Setzen von `appearance: none` oder das anderweitige Ändern des Erscheinungsbildes von UI-Widgets ändert nicht die Funktionalität des Elements.

Während die meisten Elemente in einem Dokument vollständig durch CSS gestylt werden können, werden UI-Steuerelemente (_Widgets_) typischerweise vom Browser gerendert, indem die nativen UI-Stile des Betriebssystems verwendet werden. Dieses _native_ Erscheinungsbild unterscheidet sich zwischen Betriebssystemen und Browsern. In diesem Standardzustand haben Widgets begrenzte, wenn überhaupt, Merkmale, die mit CSS gestylt werden können. Welche Elemente dieses native UI-Erscheinungsbild haben, wird in HTML definiert.

Die `appearance` Eigenschaft bietet eine gewisse Kontrolle über das Erscheinungsbild von HTML-Widgets, die standardmäßig wie native Betriebssystemsteuerungen aussehen. Besonders bemerkenswert ist der Wert `none`, der einen Teil des nativen Erscheinungsbildes eines Widgets unterdrückt. Dies führt zu einem _primitiven_ Aussehen, das über CSS gestylt werden kann, während die Funktionalität und die Unterstützung nativer Benutzerinteraktionen erhalten bleiben.

Einige Widgets verschwinden vollständig, wenn sie auf `appearance: none` gesetzt sind. Die versteckten Steuerelemente bleiben jedoch interaktiv. Zum Beispiel wird das Klicken auf ein {{htmlelement("label")}}, das mit einem `appearance: none` Checkbox verknüpft ist, den überprüften Zustand der Checkbox umschalten.

Da `none` dazu führen kann, dass ein Widget verborgen wird, wird der `base` Wert hinzugefügt, um Widgets ein Basis-Erscheinungsbild zu geben. Wenn unterstützt, wird der `base` Wert sicherstellen, dass Widgets ihr natives Erscheinungsbild beibehalten, während CSS verwendet werden kann, um einen Widget-Stil zu ändern, der standardmäßig nicht änderbar ist. Im Gegensatz zu `none`, das Radio Buttons und Checkboxen verschwinden lassen kann, gibt `base` dem Widget ein primitives Erscheinungsbild mit standardmäßigen nativen Stilen, die benutzbar und interoperabel sind und ein hohes Maß an Anpassung über CSS ermöglichen. Während dieser `base` Wert noch nicht unterstützt wird, bieten die vielen `<compat-auto>` Werte ähnliche Funktionen, sind aber typspezifisch und nicht global.

Der `base-select` Wert, der nur für das {{htmlelement("select")}} Element und das {{cssxref("::picker()", "::picker(select)")}} Pseudo-Element relevant ist, ermöglicht [die Gestaltung von `<select>` Elementen und dem Select-Picker](#das_erscheinungsbild_eines_select_festlegen) (welches die `<option>` Elemente enthält). Der Picker wird in der obersten Schicht gerendert, ähnlich einem Popover. Wenn `base-select` gesetzt ist, kann der Picker relativ zum Select (oder anderen Elementen) mit [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) positioniert werden. Zusätzlich verursacht der `base-select` Wert, dass das `<select>` nicht außerhalb des Browserfensters gerendert wird oder eingebaute mobile Betriebssystemkomponenten ausgelöst werden. Es wird auch nicht mehr basierend auf der Breite der breitesten `<option>` skaliert.

### Vorangestellte nicht-standardmäßige Werte

Vor der Standardisierung erlaubten die vorangestellten Eigenschaften **`-moz-appearance`** und **`-webkit-appearance`**, dass Elemente als Widgets wie Buttons oder Checkboxen dargestellt werden. Die folgenden nicht-standardmäßigen Werte können in alten Stylesheets angetroffen werden, am häufigsten als Werte von Shadow DOM Komponenten [vorangestellten Pseudo-Elementen](/de/docs/Web/CSS/Reference/Webkit_extensions#pseudo-elements).

<details>
<summary>Nicht-standardmäßige Werte</summary>

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

Autoren werden ermutigt, nur Standard-Schlüsselwörter zu verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

Dieses Beispiel zeigt die grundlegende Verwendung der `appearance`-Eigenschaft, um das Erscheinungsbild eines {{htmlelement("input")}} Elements in einigen Browsern zu ändern.

#### HTML

Wir fügen zwei `number` Formularfelder zusammen mit ihren Beschriftungen hinzu.

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

Abhängig vom Browser kann der Spinner visuell entfernt werden, wenn die Steuerung so eingestellt ist, dass sie wie ein Textfeld aussieht. Die `appearance`-Eigenschaft hat keine Auswirkungen auf die Funktionalität: Beispielsweise werden die Auf- und Ab-Pfeiltasten weiterhin den Wert inkrementieren und dekrementieren, auch wenn es keinen klickbaren Spinner mehr gibt.

### Appearance auf `none` setzen

Das folgende Beispiel zeigt, wie das Standardstyling von einer Checkbox, einem Radiobutton und einem {{htmlelement("select")}}-Element entfernt und ein benutzerdefiniertes Styling angewendet wird.

#### HTML

Wir fügen Paare von Checkboxen, Radiobuttons und `<select>` Elementen zusammen mit deren zugehörigen Beschriftungen hinzu:

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

Wir wenden Stile auf beide {{htmlelement("input")}} Elemente des Typs `checkbox` an; diese Stile erzeugen ein rotes Quadrat, wenn das Element stilisierbar ist. Wir setzen `appearance: none` auf den {{cssxref(":checked")}} UI-Zustand für alle Eingaben (`checkbox` und `radio`), sowie auf Elemente mit der Klasse `.none`. Dies entfernt alle Stile des Radiobuttons und der Checkbox, außer den Außenabständen, und erlaubt jegliche gesetzten Stile anzuwenden. Es gibt keine alternativen Stile für die Radiobuttons oder `<select>` Elemente, wenn `none` gesetzt wird.

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

Das Setzen von `appearance: none` ermöglicht es, UI-Elemente zu stylen, birgt aber auch das Risiko, das Widget zu verbergen. Die nicht überprüfte Checkbox, bei der ihr `appearance` auf `auto` standardmäßig, sieht aus wie eine Checkbox. Das Setzen von `appearance: none` im `:checked` Zustand erlaubt es, sie zu stylen.

Wie die nicht überprüfte Checkbox sieht der nicht überprüfte Radiobutton aus wie das native UI-Widget, weil es so ist. Wenn im überprüften Zustand mit `appearance: none` angewendet, verschwindet der Radiobutton; seine Funktionalität bleibt erhalten und nur seine Außenabstände beeinflussen das Seitenrendering.

### Das Erscheinungsbild eines select festlegen

Wir können die `appearance`-Eigenschaft nutzen, um benutzerdefinierte Select-Funktionalität einzuführen, die es ermöglicht, das `<select>` Element und seinen Picker, der den Teil der Formularsteuerung darstellt, der aus der Seite herausspringt, zu stylen.

#### HTML

Wir fügen drei `<select>`-Elemente mit denselben mehrfachen {{htmlelement("option")}}-Kindern hinzu. Wie bei jedem `<select>` fügen wir auch zugehörige {{htmlelement("label")}}-Elemente hinzu. Die dritte Option hat mehr Text, um die Wirkung von `base-select` auf die Breite des `<select>` zu demonstrieren:

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

Wir wählen die Picker aller `<select>`-Elemente mit dem {{cssxref("::picker()")}} Pseudo-Element und dem Parameter `select` aus. Wir setzen den `appearance`-Wert aller Picker und eines `<select>`-Elements auf `base-select`. Wir setzen das letzte `<select>` auf `menulist-button`. Das erste `<select>` besitzt standardmäßig den `auto` Zustand:

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

Wir setzen Werte für die {{cssxref("background-color")}} und {{cssxref("border")}} Eigenschaften der `<select>` und seiner Picker, um die Effekte der `appearance`-Werte zu demonstrieren:

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

Während die {{cssxref("background-color")}} und {{cssxref("border")}} Stile auf allen `<select>` Elementen und ihren Pickern definiert sind, wirken sich die `::picker(select)` Stile nur auf den Picker aus, bei dem sowohl das Select als auch der Picker die `appearance` Eigenschaft auf `base-select` gesetzt haben. Die ersten und dritten Selects sehen gleich aus, weil `menulist-button` ein Kompatibilitäts-Schlüsselwort ist.

Beachten Sie, dass standardmäßig die Inline-Größe des `<select>` normalerweise der Inline-Größe der `<option>` mit dem meisten Text entspricht und dass der Dropdown-Picker über dem gerenderten Seiteninhalt erscheint, wenn er geöffnet ist, wodurch er nicht durch die umliegende Seite begrenzt ist und daher vollständig sichtbar bleibt. Diese Aussagen stimmen nicht mehr, wenn `base-select` gesetzt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)
