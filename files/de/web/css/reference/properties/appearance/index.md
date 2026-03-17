---
title: appearance
slug: Web/CSS/Reference/Properties/appearance
l10n:
  sourceCommit: 76936e1d9ff271ac59307a0f858d0d7b57f3866a
---

Die **`appearance`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das gerenderte Erscheinungsbild von ersetzten UI-Widget-Elementen wie Formularelementen fest. Am häufigsten erhalten solche Elemente ein natives, plattformspezifisches Styling basierend auf dem Thema des Betriebssystems oder ein primitives Erscheinungsbild mit Stilen, die mithilfe von CSS überschrieben werden können.

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

Die `appearance`-Eigenschaft kann auf alle Elemente und Pseudo-Elemente angewendet werden, aber die Auswirkung des angegebenen Wertes, sofern vorhanden, hängt von dem Element ab, auf das sie angewendet wird.

- `none`
  - : Verleiht dem Widget ein _primitives_ Erscheinungsbild, welches über CSS gestylt werden kann, während die native Funktionalität des Widgets erhalten bleibt. Dieser Wert hat keine Auswirkungen auf Nicht-Widgets.

- `auto`
  - : Setzt interaktive Widgets auf ihre _OS-native_ Erscheinung. Verhält sich wie `none` bei Elementen ohne OS-native Stylinge.

- `base-select`
  - : Relevante nur für das {{htmlelement("select")}} Element und das {{cssxref("::picker()", "::picker(select)")}} Pseudo-Element, welche vollständig gestylt werden können.

- `<compat-special>`
  - : Hat eine ähnliche Wirkung wie `auto` auf bestimmten Elementen.
    - `textfield`
      - : Verursacht, dass das Erscheinungsbild bestimmter `<input>`-Typen [dem des `text`-Typs entspricht](#try_it).
    - `menulist-button`
      - : Wenn auf das `<select>` Element gesetzt, entspricht der Stil des Drop-Down-Pickers [dem seiner Standardzustand](#das_erscheinungsbild_eines_select-elements_festlegen).

- `<compat-auto>`
  - : Eingeschlossen für die Rückwärtskompatibilität; mögliche Werte umfassen `button`, `checkbox`, `listbox`, `menulist`, `meter`, `progress-bar`, `push-button`, `radio`, `searchfield`, `slider-horizontal`, `square-button` und `textarea`. Die Werte verhalten sich alle wie `auto`: verwenden Sie stattdessen `auto`.

> [!NOTE]
> Die Spezifikation definiert auch einen `base`-Wert. Dieser wird derzeit von keinem Browser unterstützt.

#### Nicht-standardmäßige Werte

Einige nicht-standardmäßige Werte werden auch in einigen Browsern unterstützt:

- `slider-vertical`
  - : Macht den Slider vertikal, wenn er auf `<input type="range">` Elemente angewendet wird. Um [einen vertikalen Slider zu erstellen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls) sollten Sie stattdessen den {{cssxref("writing-mode")}} auf `vertical-lr` und die {{cssxref("direction")}} auf `rtl` setzen.

- `-apple-pay-button`
  - : Zeigt das Apple Pay-Logo an, wenn es auf ein {{htmlelement("button")}}, {{htmlelement("a")}} oder {{htmlelement("input")}} Element vom Typ `button` oder `reset` gesetzt wird.

## Beschreibung

Die `appearance`-Eigenschaft ermöglicht es, Elemente im nativen Stil des Betriebssystems basierend auf dem Thema des Betriebssystems anzuzeigen, sowie die Entfernung jeglicher plattformspezifischer Stilgebung mit dem Wert `none`. Das Setzen von `appearance: none` oder das Ändern des Erscheinungsbildes von UI-Widgets ändert nicht die Funktionalität des Elements.

Während die meisten Elemente in einem Dokument vollständig durch CSS gestylt werden können, werden UI-Kontrollen (_Widgets_) normalerweise vom Browser unter Verwendung der nativen UI-Stile des Betriebssystems gerendert. Dieses _native_ Erscheinungsbild unterscheidet sich zwischen Betriebssystemen und Browsern. In diesem Standardzustand haben Widgets begrenzte, wenn überhaupt, Funktionen, die mit CSS gestylt werden können. Welche Elemente dieses native UI-Erscheinungsbild haben, wird im HTML definiert.

Die `appearance`-Eigenschaft bietet einige Kontrolle über das Erscheinungsbild von HTML-Widgets, die standardmäßig wie native Betriebssystemkontrollen aussehen. Am bemerkenswertesten unterdrückt der Wert `none` einen Teil des nativen Erscheinungsbildes eines Widgets. Dies führt zu einem _primitiven_ Aussehen, das über CSS gestylt werden kann, während die Funktionalität beibehalten und native Benutzerinteraktionen unterstützt werden.

Einige Widgets verschwinden vollständig, wenn sie auf `appearance: none` gesetzt werden. Die versteckten Kontrollen bleiben jedoch interaktiv. Zum Beispiel wird durch Klicken auf ein {{htmlelement("label")}}, das mit einem `appearance: none` Kontrollkästchen verknüpft ist, der Aktivierungszustand des Kontrollkästchens umgeschaltet.

Weil `none` dazu führen kann, dass ein Widget verborgen wird, wird der `base`-Wert hinzugefügt, um Widgets ein Basisaussehen zu geben. Wenn unterstützt, sorgt der `base`-Wert dafür, dass Widgets ihr natives Erscheinungsbild beibehalten, während CSS verwendet werden kann, um ein Widget so zu stylen, dass sich Stile ändern lassen, die standardmäßig nicht geändert werden können. Im Gegensatz zu `none`, wodurch Radiobuttons und Kontrollkästchen verschwinden können, gibt `base` dem Widget ein primitives Erscheinungsbild mit Standard-nativen Stilen, die benutzbar und interoperabel sind, sowie die Möglichkeit zur CSS-Anpassung. Während dieser `base`-Wert noch nicht unterstützt wird, bieten die vielen `<compat-auto>` Werte ähnliche Funktionalität, sind aber typspezifisch und nicht global.

### Anpassbare Select-Elemente

Der `base-select` Wert, der nur für das {{htmlelement("select")}} Element und das {{cssxref("::picker()", "::picker(select)")}} Pseudo-Element relevant ist, ermöglicht das [Styling von `<select>`-Elementen und dem Auswahlschalter](#das_erscheinungsbild_eines_select-elements_festlegen) (der die `<option>`-Elemente enthält). Der Schalter wird in der obersten Ebene gerendert, ähnlich einem Popover. Wenn `base-select` gesetzt ist, kann der Schalter relativ zum Select (oder anderen Elementen) unter Verwendung von [CSS Anker-Positionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning) Funktionen positioniert werden. Darüber hinaus bewirkt der `base-select`-Wert, dass das `<select>` außerhalb des Browserfensters nicht gerendert oder integrierte mobile Betriebssystemkomponenten nicht ausgelöst werden. Es wird auch nicht mehr basierend auf der Breite der breitesten `<option>` größenabhängig.

Mehr Informationen finden Sie unter [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).

### Präfixierte nicht-standardmäßige Werte

Vor der Standardisierung ermöglichten die präfixierten **`-moz-appearance`** und **`-webkit-appearance`** Eigenschaften, dass Elemente als Widgets wie Buttons oder Checkboxen dargestellt werden. Die folgenden nicht-standardmäßigen Werte können in Legacy-Stilvorlagen gefunden werden, am häufigsten als Werte von Shadow DOM-Komponenten [prämierte Pseudo-Elemente](/de/docs/Web/CSS/Reference/Webkit_extensions#pseudo-elements).

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

Dieses Beispiel zeigt die grundlegende Verwendung der `appearance`-Eigenschaft, um das Erscheinungsbild eines {{htmlelement("input")}}-Elements in einigen Browsern zu ändern.

#### HTML

Wir fügen zwei `number` Formular-Steuerelemente zusammen mit ihren Labels hinzu.

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

Wir setzen das Element mit der Klasse `text`, sodass es wie ein Textfeld aussieht.

```css
.text {
  appearance: textfield;
}
```

#### Ergebnisse

{{EmbedLiveSample("Basic example", 600, 100)}}

Je nach Browser kann der Spinner visuell entfernt werden, wenn das Steuerelement so eingestellt ist, dass es wie ein Textfeld aussieht. Die `appearance`-Eigenschaft hat keine Auswirkungen auf die Funktionalität: zum Beispiel kann es sein, dass kein Spinner mehr zum Anklicken vorhanden ist, aber die Auf- und Abwärts-Pfeiltasten werden den Wert immer noch erhöhen und senken.

### Erscheinungsbild auf `none` gesetzt

Das folgende Beispiel zeigt, wie das Standardstyling eines Kontrollkästchens, eines Radio-Buttons und eines {{htmlelement("select")}}-Elements entfernt und ein benutzerdefiniertes Styling angewendet werden.

#### HTML

Wir fügen Paare von Kontrollkästchen, Radio-Buttons und `<select>` Elementen, zusammen mit ihren zugehörigen Labels hinzu:

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

Wir wenden Stile auf beide {{htmlelement("input")}}-Elemente vom Typ `checkbox` an; diese Stile erzeugen ein rotes Quadrat, wenn das Element stilisierbar ist. Wir setzen `appearance: none` auf den {{cssxref(":checked")}} UI-Zustand für alle Eingaben (`checkbox` und `radio`) sowie auf Elemente mit der `.none` Klasse. Dies entfernt alle Stile des Radio-Buttons und der Checkbox, außer den Rändern, und erlaubt es, gesetzte Stile anzuwenden. Es gibt keine alternativen Stile für die Radio-Buttons oder `<select>`-Elemente, wenn `none` gesetzt ist.

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

Das Setzen von `appearance: none` ermöglicht es, UI-Elemente zu stilisieren, birgt jedoch auch das Risiko, dass das Widget verborgen wird. Das nicht markierte Kontrollkästchen erscheint wie ein Kontrollkästchen mit `appearance`, die auf `auto` gesetzt ist. Das Setzen von `appearance: none` im `:checked` Zustand aktiviert es für das Styling.

Wie das nicht markierte Kontrollkästchen sieht der nicht markierte Radio-Button wie das native UI-Widget aus, weil es ist. Wenn sie sich im markierten Zustand befinden, wird der Radio-Button mit angewendetem `appearance: none` unsichtbar; die Funktionalität wird beibehalten und nur die Ränder beeinflussen das Seiten-Rendering.

### Das Erscheinungsbild eines Select-Elements festlegen

Wir können die `appearance`-Eigenschaft verwenden, um sich für die benutzerdefinierte Auswahlelement-Funktionalität zu entscheiden, wodurch das `<select>`-Element und sein Picker gestylt werden können, was den Teil des Formular-Steuerelements darstellt, der aus der Seite herausspringt.

#### HTML

Wir fügen drei `<select>`-Elemente mit denselben mehrfachen {{htmlelement("option")}} Kindern hinzu. Wie bei jedem `<select>` fügen wir auch zugehörige {{htmlelement("label")}} Elemente hinzu. Die dritte Option hat mehr Text, um die Wirkung von `base-select` auf die Breite des `<select>` zu demonstrieren:

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

Wir wählen die Picker aller `<select>`-Elemente mit dem {{cssxref("::picker()")}} Pseudo-Element mit dem Parameter `select`. Wir setzen den `appearance`-Wert aller Picker und eines `<select>`-Elements auf `base-select`. Wir setzen das letzte `<select>` auf `menulist-button`. Das erste `<select>` hat standardmäßig den `auto`-Zustand:

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

Wir setzen Werte für die {{cssxref("background-color")}} und {{cssxref("border")}} Eigenschaften des `<select>` und der Picker, um die Auswirkungen der `appearance`-Werte zu demonstrieren:

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

Während die {{cssxref("background-color")}} und {{cssxref("border")}} Stile auf alle `<select>`-Elemente und ihre Picker angewendet werden, beeinflussen die `::picker(select)` Stile nur den Picker, bei dem sowohl das Select als auch der Picker die `appearance`-Eigenschaft auf `base-select` gesetzt haben. Das erste und das dritte Select sehen gleich aus, weil `menulist-button` ein Kompatibilitäts-Schlüsselwort ist.

Beachten Sie, dass standardmäßig die Zeilenlänge des `<select>` in der Regel der Zeilenlänge der `<option>` mit dem meisten Text entspricht und dass der Dropdown-Picker über der renderisierten Seite erscheint, wenn er geöffnet wird, sodass er nicht durch die umgebende Seite eingeschränkt und daher vollständig sichtbar ist. Diese Aussagen gelten nicht mehr, wenn `base-select` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)
