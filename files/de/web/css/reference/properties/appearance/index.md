---
title: appearance
slug: Web/CSS/Reference/Properties/appearance
l10n:
  sourceCommit: a1c041f5d15330c7bcd85e9bf93d88f759174cf5
---

Die **`appearance`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt das gerenderte Erscheinungsbild von ersetzten UI-Elementen wie Formularsteuerungen. Am häufigsten erhalten solche Elemente ein natives, plattformabhängiges Styling basierend auf dem Thema des Betriebssystems oder ein primitives Aussehen, das mithilfe von CSS überschrieben werden kann.

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

Die `appearance` Eigenschaft kann auf alle Elemente und Pseudo-Elemente angewendet werden, aber die Wirkung des angegebenen Wertes, falls vorhanden, hängt vom Element ab, auf das er angewendet wird.

- `none`
  - : Verleiht dem Widget ein _primitives_ Aussehen, das ermöglicht, es über CSS zu stylen, während die native Funktionalität des Widgets beibehalten wird. Dieser Wert beeinflusst keine Nicht-Widgets.

- `auto`
  - : Setzt interaktive Widgets darauf, mit ihrem _OS-nativen_ Aussehen zu rendern. Verhält sich wie `none` bei Elementen ohne OS-natürliche Stilgebung.

- `base-select`
  - : Nur relevant für das {{htmlelement("select")}} Element und das {{cssxref("::picker()", "::picker(select)")}} Pseudo-Element, was es ermöglicht, sie zu stylen.

- `<compat-special>`
  - : Hat eine ähnliche Wirkung wie `auto` auf bestimmten Elementen.
    - `textfield`
      - : Führt dazu, dass bestimmte `<input>` Typen das [Erscheinungsbild des `text` Typs entsprechen](#try_it).
    - `menulist-button`
      - : Wenn es auf das `<select>` Element gesetzt ist, passt sich der Style des Dropdown-Pickers [seinem Standardzustand an](#festlegen_des_erscheinungsbilds_eines_selects).

- `<compat-auto>`
  - : Enthalten für die Rückwärtskompatibilität; mögliche Werte umfassen `button`, `checkbox`, `listbox`, `menulist`, `meter`, `progress-bar`, `push-button`, `radio`, `searchfield`, `slider-horizontal`, `square-button` und `textarea`. Alle Werte verhalten sich wie `auto`: verwenden Sie stattdessen `auto`.

> [!NOTE]
> Die Spezifikation definiert auch einen `base` Wert. Dieser wird von keinem Browser unterstützt.

#### Nicht-standardisierte Werte

Einige nicht-standardisierte Werte werden auch von einigen Browsern unterstützt:

- `slider-vertical`
  - : Macht den Schieberegler vertikal, wenn er auf `<input type="range">` Elemente angewendet wird. Um [einen vertikalen Schieberegler zu erstellen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls) sollten Sie stattdessen den {{cssxref("writing-mode")}} auf `vertical-lr` und die {{cssxref("direction")}} auf `rtl` setzen.

- `-apple-pay-button`
  - : Zeigt das Apple Pay Logo an, wenn es auf ein {{htmlelement("button")}}, {{htmlelement("a")}} oder {{htmlelement("input")}} Element des Typs `button` oder `reset` gesetzt wird.

## Beschreibung

Die `appearance` Eigenschaft ermöglicht es, Elemente in ihrem OS-nativen Stil basierend auf dem Betriebssystemthema anzuzeigen sowie das Entfernen jeglicher plattformnahen Stilgebung mit dem Wert `none`. Das Setzen von `appearance: none` oder die sonstige Änderung des Erscheinungsbilds von UI-Widgets verändert nicht die Funktionalität des Elements.

Während die meisten Elemente in einem Dokument vollständig durch CSS gestylt werden können, werden UI-Steuerelemente (_widgets_) üblicherweise vom Browser unter Verwendung der nativen UI-Stile des Betriebssystems gerendert. Dieses _native_ Erscheinungsbild unterscheidet sich je nach Betriebssystem und Browser. Im diesem standardmäßigen Zustand haben Widgets nur begrenzte, wenn überhaupt, CSS-stylbare Funktionen. Welche Elemente dieses native UI-Erscheinungsbild haben, wird in HTML definiert.

Die `appearance` Eigenschaft bietet eine gewisse Kontrolle über das Erscheinungsbild von HTML-Widgets, die standardmäßig wie native Betriebssystemsteuerungen aussehen. Am bemerkenswertesten ist, dass der Wert `none` einen Teil des nativen Erscheinungsbilds eines Widgets unterdrückt. Dies führt zu einem _primitiven_ Aussehen, das per CSS gestylt werden kann, während die Funktionalität und Unterstützung für native Benutzerinteraktionen beibehalten werden.

Einige Widgets verschwinden vollständig, wenn sie auf `appearance: none` gesetzt sind. Die versteckten Steuerelemente bleiben jedoch interaktiv. Zum Beispiel wird durch Klicken auf ein mit einem {{htmlelement("label")}} verbundenes `appearance: none` Kontrollkästchen dessen Status umgeschaltet.

Da `none` dazu führen kann, dass ein Widget versteckt wird, wird der `base` Wert hinzugefügt, um Widgets mit einem grundlegenden Erscheinungsbild zu versehen. Wenn unterstützt, stellt der `base` Wert sicher, dass Widgets ihr nativ aussehendes Erscheinungsbild beibehalten, während CSS zur Änderung von Widget-Stilen verwendet werden kann, die standardmäßig nicht veränderlich sind. Im Gegensatz zu `none`, das Radiobuttons und Kontrollkästchen verschwinden lassen kann, verleiht `base` dem Widget ein primitives Erscheinungsbild mit standardmäßigen nativen Stilen, die verwendbar und interoperabel sind und ein hohes Maß an Anpassung über CSS ermöglichen. Während dieser `base` Wert noch nicht unterstützt wird, bieten die vielen `<compat-auto>` Werte ähnliche Funktionen, sind jedoch typspezifisch und nicht global.

Der `base-select` Wert, der nur für das {{htmlelement("select")}} Element und das {{cssxref("::picker()", "::picker(select)")}} Pseudo-Element relevant ist, ermöglicht [das Styling von `<select>` Elementen und dem Auswahl-Picker](#festlegen_des_erscheinungsbilds_eines_selects) (der die `<option>` Elemente enthält). Der Picker wird in der obersten Ebene gerendert, ähnlich wie ein Popover. Wenn `base-select` gesetzt ist, kann der Picker relativ zum Select (oder anderen Elementen) unter Verwendung von [CSS Anker-Positionierungsfunktionen](/de/docs/Web/CSS/Guides/Anchor_positioning) positioniert werden. Darüber hinaus bewirkt der `base-select` Wert, dass das `<select>` nicht außerhalb des Browserfensters gerendert wird oder eingebaute mobile Betriebssystemkomponenten auslöst. Außerdem wird es nicht mehr basierend auf der Breite der breitesten `<option>` dimensioniert.

### Nicht-standardisierte vorangestellte Werte

Vor der Standardisierung ermöglichten die vorangestellten **`-moz-appearance`** und **`-webkit-appearance`** Eigenschaften das Anzeigen von Elementen als Widgets wie Schaltflächen oder Kontrollkästchen. Die folgenden nicht-standardisierten Werte können in Legacy-Stilvorlagen gefunden werden, am häufigsten als Werte von Schatten-DOM-Komponenten [vorangestellten Pseudo-Elementen](/de/docs/Web/CSS/Reference/Webkit_extensions#pseudo-elements).

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

Autoren werden ermutigt, nur Standard-Schlüsselwörter zu verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

Dieses Beispiel zeigt die grundlegende Verwendung der `appearance` Eigenschaft, die das Erscheinungsbild eines {{htmlelement("input")}} Elements in einigen Browsern verändert.

#### HTML

Wir fügen zwei `number` Eingabesteuerungen zusammen mit ihren Labels hinzu.

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

Wir setzen das Element mit der Klasse `text`, damit es wie ein Textfeld aussieht.

```css
.text {
  appearance: textfield;
}
```

#### Ergebnisse

{{EmbedLiveSample("Basic example", 600, 100)}}

Abhängig vom Browser kann der Drehknopf visuell entfernt werden, wenn die Steuerung so eingestellt ist, dass sie wie ein Textfeld aussieht. Die `appearance` Eigenschaft hat keinen Einfluss auf die Funktionalität: zum Beispiel, auch wenn es keinen Drehknopf mehr zum Klicken gibt, erhöhen und verringern die Aufwärts- und Abwärtspfeiltasten weiterhin den Wert.

### Erscheinungsbild auf `none` gesetzt

Das folgende Beispiel zeigt, wie das Standard-Styling von einem Kontrollkästchen, einem Radiobutton und einem {{htmlelement("select")}} Element entfernt und benutzerdefiniertes Styling angewendet wird.

#### HTML

Wir fügen Paare von Kontrollkästchen, Radiobuttons und `<select>` Elementen zusammen mit ihren zugehörigen Labels hinzu:

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

Wir wenden Styles auf beide {{htmlelement("input")}} Elemente des Typs `checkbox` an; diese Styles erzeugen ein rotes Quadrat, wenn das Element stylish ist. Wir setzen `appearance: none` auf den {{cssxref(":checked")}} UI-Status für alle Eingaben (`checkbox` und `radio`) sowie auf Elemente mit der `.none` Klasse. Dies entfernt alle Stile des Radiobuttons und Kontrollkästchens, außer den Rändern, und ermöglicht es, alle gesetzten Stile anzuwenden. Es gibt keine alternativen Stile für die Radiobuttons oder `<select>` Elemente, wenn `none` gesetzt ist.

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

Das Setzen von `appearance: none` ermöglicht es UI-Elementen, gestylt zu werden, birgt jedoch auch das Risiko, das Widget zu verstecken. Das nicht angekreuzte Kontrollkästchen, das standardmäßig auf `auto` steht, sieht aus wie ein Kontrollkästchen. Das Setzen von `appearance: none` im `:checked` Status ermöglicht es, es zu stylen.

Wie das nicht angekreuzte Kontrollkästchen sieht der nicht angekreuzte Radiobutton wie ein natives UI-Widget aus, weil es das ist. Im angekreuzten Zustand, wenn `appearance: none` angewendet wird, verschwindet der Radiobutton; seine Funktionalität wird beibehalten, und nur seine Ränder beeinflussen das Seitenrendering.

### Festlegen des Erscheinungsbilds eines Selects

Wir können die `appearance` Eigenschaft verwenden, um sich für eine benutzerdefinierte Select-Funktionalität zu entscheiden, die es ermöglicht, das `<select>` Element und seinen Picker zu stylen, der den Teil der Formularkomponente darstellt, der aus der Seite herausspringt.

#### HTML

Wir fügen drei `<select>` Elemente hinzu, mit den gleichen mehreren {{htmlelement("option")}} Kindern. Wie bei jedem `<select>` fügen wir auch die zugehörigen {{htmlelement("label")}} Elemente hinzu. Die dritte Option hat mehr Text, um den Effekt von `base-select` auf die Breite des `<select>` zu demonstrieren:

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

Wir wählen die Picker aller `<select>` Elemente mithilfe des {{cssxref("::picker()")}} Pseudo-Elements mit dem Parameter `select`. Wir setzen den `appearance` Wert aller Picker und eines `<select>` Elements auf `base-select`. Wir setzen das letzte `<select>` auf `menulist-button`. Das erste `<select>` steht standardmäßig auf `auto`:

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

Wir setzen Werte für die `<select>` und Picker-{{cssxref("background-color")}} und {{cssxref("border")}} Eigenschaften, um die Auswirkungen der `appearance` Werte zu demonstrieren:

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

Während die {{cssxref("background-color")}} und {{cssxref("border")}} Stile auf alle `<select>` Elemente und ihre Picker definiert sind, beeinflussen die `::picker(select)` Stile nur den Picker, bei denen sowohl das Select als auch der Picker die `appearance` Eigenschaft auf `base-select` gesetzt haben. Die ersten und dritten Selects sehen gleich aus, weil `menulist-button` ein Kompatibilitätsschlüsselwort ist.

Beachten Sie, dass standardmäßig die Inline-Größe des `<select>` normalerweise die Inline-Größe der `<option>` mit dem meisten Text ist und dass der Dropdown-Picker über der gerenderten Seite erscheint, wenn er geöffnet wird, was bedeutet, dass er nicht durch die umgebende Seite eingeschränkt wird und daher voll sichtbar ist. Diese Aussagen sind nicht mehr zutreffend, wenn `base-select` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)
