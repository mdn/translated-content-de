---
title: "`appearance` CSS property"
short-title: appearance
slug: Web/CSS/Reference/Properties/appearance
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`appearance`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert das gerenderte Erscheinungsbild von ersetzten UI-Widget-Elementen wie Formularelementen. Am häufigsten erhalten solche Elemente ein natives, plattform-spezifisches Styling basierend auf dem Thema des Betriebssystems oder ein primitives Aussehen mit Stilen, die mit CSS überschrieben werden können.

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

Die `appearance` Eigenschaft kann auf alle Elemente und Pseudoelemente angewendet werden, aber die Wirkung des angegebenen Wertes, falls vorhanden, hängt von dem Element ab, auf das sie angewendet wird.

- `none`
  - : Verleiht dem Widget ein primitives Erscheinungsbild, sodass es über CSS stilisierbar ist, wobei jedoch die native Funktionalität des Widgets erhalten bleibt. Dieser Wert hat keine Auswirkungen auf Nicht-Widgets.

- `auto`
  - : Setzt interaktive Widgets so, dass sie mit ihrem OS-nativen Erscheinungsbild gerendert werden. Bei Elementen ohne OS-native Stil erscheint es wie `none`.

- `base-select`
  - : Relevanter nur für das {{htmlelement("select")}}-Element und das {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element, wodurch sie vollständig stilisiert werden können.

- `<compat-special>`
  - : Hat einen Effekt, der `auto` auf bestimmten Elementen ähnlich ist.
    - `textfield`
      - : Verursacht, dass das Erscheinungsbild bestimmter `<input>`-Typen dem des `text`-Typs [entspricht](#try_it).
    - `menulist-button`
      - : Wenn es auf das `<select>`-Element gesetzt wird, entspricht der Stil des Dropdown-Auswahlmenüs dem seines Standardzustandes [entspricht](#einstellen_des_erscheinungsbildes_eines_select).

- `<compat-auto>`
  - : Aus Gründen der Rückwärtskompatibilität enthalten; mögliche Werte sind `button`, `checkbox`, `listbox`, `menulist`, `meter`, `progress-bar`, `push-button`, `radio`, `searchfield`, `slider-horizontal`, `square-button` und `textarea`. Alle Werte verhalten sich wie `auto`: Verwenden Sie stattdessen `auto`.

> [!NOTE]
> Die Spezifikation definiert auch einen `base`-Wert. Dieser wird von keinem Browser unterstützt.

#### Nicht-standardisierte Werte

Einige nicht-standardisierte Werte werden ebenfalls in einigen Browsern unterstützt:

- `slider-vertical`
  - : Macht den Schieberegler vertikal, wenn er auf `<input type="range">`-Elemente angewendet wird. Um [einen vertikalen Schieberegler zu erstellen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls), sollten Sie stattdessen den {{cssxref("writing-mode")}} auf `vertical-lr` und die {{cssxref("direction")}} auf `rtl` setzen.

- `-apple-pay-button`
  - : Zeigt das Apple Pay-Logo an, wenn es auf ein {{htmlelement("button")}}, {{htmlelement("a")}} oder {{htmlelement("input")}} Element des Typs `button` oder `reset` gesetzt wird.

## Beschreibung

Die `appearance` Eigenschaft ermöglicht es, Elemente basierend auf dem Thema des Betriebssystems im OS-nativen Stil anzuzeigen, sowie alle plattform-nativen Stile mit dem Wert `none` zu entfernen. Das Setzen von `appearance: none` oder das Ändern des Erscheinungsbildes von UI-Widgets ändert nicht die Funktionalität des Elements.

Während die meisten Elemente in einem Dokument vollständig mit CSS stilisiert werden können, werden UI-Kontrollen (Widgets) typischerweise vom Browser unter Verwendung der nativen UI-Stile des Betriebssystems gerendert. Diese native Erscheinung unterscheidet sich zwischen Betriebssystemen und Browsern. In diesem Standardzustand bieten Widgets nur eingeschränkte oder keine Möglichkeiten, mit CSS gestaltet zu werden. Welche Elemente dieses native UI-Erscheinungsbild haben, wird in HTML definiert.

Die `appearance` Eigenschaft bietet eine gewisse Kontrolle über das Erscheinungsbild von HTML-Widgets, die standardmäßig wie native Betriebssystemkontrollen aussehen. Besonders hervorzuheben ist der `none`-Wert, der Teile des nativen Erscheinungsbildes eines Widgets unterdrückt. Dies führt zu einem primitiven Aussehen, das über CSS gestaltet werden kann, während die Funktionalität und die Unterstützung der nativen Benutzerinteraktionen erhalten bleibt.

Einige Widgets verschwinden vollständig, wenn sie auf `appearance: none` gesetzt werden. Die versteckten Steuerungen sind jedoch weiterhin interaktiv. Zum Beispiel wird durch Klicken auf ein {{htmlelement("label")}}, das mit einem `appearance: none` Checkbox verbunden ist, der gelieferte Zustand der Checkbox umgeschaltet.

Da `none` dazu führen kann, dass ein Widget verborgen wird, wird der `base`-Wert hinzugefügt, um Widgets ein grundlegendes Erscheinungsbild zu verleihen. Wenn unterstützt, wird der `base`-Wert sicherstellen, dass Widgets ihr natives Erscheinungsbild beibehalten, während CSS verwendet werden kann, um die Stile eines Widgets zu ändern, die standardmäßig nicht änderbar sind. Im Gegensatz zu `none`, bei dem Radio-Buttons und Checkboxes verschwinden können, gibt `base` dem Widget ein primitives Aussehen mit standardmäßig angezeigten nativen Stilen, die benutzbar und interoperabel sind und eine gute Anpassungsmöglichkeit über CSS bieten. Obwohl dieser `base`-Wert noch nicht unterstützt wird, bieten die vielen `<compat-auto>`-Werte ähnliche Funktionen, sind jedoch spezifisch für einen Typ und nicht global.

### Anpassbare `select`-Elemente

Der `base-select`-Wert, der nur für das {{htmlelement("select")}}-Element und das {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element relevant ist, ermöglicht das [Stylen von `<select>`-Elementen und dem Auswahlmenü](#einstellen_des_erscheinungsbildes_eines_select) (das die `<option>`-Elemente enthält). Der Picker wird in der obersten Schicht ähnlich einem Popover gerendert. Wenn `base-select` gesetzt ist, kann der Picker relativ zum Select (oder anderen Elementen) mithilfe von [CSS-Ankerpositionierungsfunktionen](/de/docs/Web/CSS/Guides/Anchor_positioning) positioniert werden. Darüber hinaus bewirkt der `base-select`-Wert, dass das `<select>` nicht außerhalb des Browser-Panels gerendert wird oder um mobile Betriebssystemkomponenten auszulösen. Es wird auch nicht mehr basierend auf der Breite der breitesten `<option>`-Breite dimensioniert.

Siehe [Anpassbare `select`-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) für weitere Informationen.

### Vorgesetzte nicht-standardisierte Werte

Vor der Standardisierung ermöglichten die vorgesetzten **`-moz-appearance`** und **`-webkit-appearance`** Eigenschaften, dass Elemente als Widgets wie Schaltflächen oder Checkboxes angezeigt werden. Die folgenden nicht-standardisierten Werte können in Legacy-Stylesheets vorkommen, am häufigsten als Werte von Shadow-DOM-Komponenten [vorgesetzten Pseudoelementen](/de/docs/Web/CSS/Reference/Webkit_extensions#pseudo-elements).

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

### Einfaches Beispiel

Dieses Beispiel zeigt die grundlegende Verwendung der `appearance`-Eigenschaft, indem das Erscheinungsbild eines {{htmlelement("input")}}-Elements in einigen Browsern verändert wird.

#### HTML

Wir fügen zwei `number`-Formularelemente zusammen mit ihren Labels ein.

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

Je nach Browser kann der Drehregler visuell entfernt werden, wenn das Steuerelement so eingestellt ist, dass es wie ein Textfeld aussieht. Die `appearance`-Eigenschaft hat keine Auswirkungen auf die Funktionalität: zum Beispiel, während es möglicherweise keinen Drehregler mehr gibt, auf den man klicken kann, werden dennoch die Aufwärts- und Abwärtspfeiltasten weiterhin den Wert erhöhen und verringern.

### Appearance auf `none` gesetzt

Das folgende Beispiel zeigt, wie man das Standardstyling von einer Checkbox, einem Radio-Button und einem {{htmlelement("select")}} Element entfernt und benutzerdefiniertes Styling anwendet.

#### HTML

Wir fügen Paare von Checkboxes, Radio-Buttons und `<select>`-Elementen zusammen mit ihren zugehörigen Labels ein:

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

Wir wenden Stile auf beide {{htmlelement("input")}}-Elemente vom Typ `checkbox` an; diese Stile erzeugen ein rotes Quadrat, falls das Element stilisierbar ist. Wir setzen `appearance: none` im {{cssxref(":checked")}} UI-Zustand für alle Inputs (`checkbox` und `radio`) sowie für Elemente mit der `.none`-Klasse. Dies entfernt den gesamten Stil des Radio-Buttons und der Checkbox, mit Ausnahme der Ränder, und ermöglicht das Anwenden von festgelegten Stilen. Es gibt keine alternativen Stile für die Radio-Buttons oder `<select>`-Elemente, wenn `none` gesetzt ist.

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

Das Setzen von `appearance: none` ermöglicht das Styling von UI-Elementen, birgt jedoch auch das Risiko, dass das Widget verborgen wird. Die nicht markierte Checkbox, deren `appearance` auf `auto` steht, sieht wie eine Checkbox aus. Das Setzen von `appearance: none` im `:checked`-Zustand ermöglicht es, sie zu stylen.

Wie die nicht markierte Checkbox sieht der nicht markierte Radio-Button wie das native UI-Widget aus, da er es ist. Im markierten Zustand, mit `appearance: none` angewendet, verschwindet der Radio-Button; seine Funktionalität bleibt erhalten, und nur seine Ränder beeinflussen das Rendering der Seite.

### Einstellen des Erscheinungsbildes eines Select

Wir können die `appearance`-Eigenschaft verwenden, um in die benutzerdefinierte `select`-Funktionalität einzusteigen, die es ermöglicht, das `<select>`-Element und seinen Picker zu stylen, der den Teil des Formularelements repräsentiert, der aus der Seite herauskommt.

#### HTML

Wir fügen drei `<select>`-Elemente ein, mit den gleichen mehrfachen {{htmlelement("option")}}-Kindern. Wie bei jedem `<select>`, fügen wir auch assoziierte {{htmlelement("label")}}-Elemente ein. Die dritte Option enthält mehr Text, um die Wirkung von `base-select` auf die Breite des `<select>` zu demonstrieren:

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

Wir wählen die Picker aller `<select>`-Elemente mit Hilfe des {{cssxref("::picker()")}} Pseudoelements mit dem Parameter `select`. Wir setzen den `appearance`-Wert aller Picker und eines `<select>`-Elements auf `base-select`. Wir setzen das letzte `<select>` auf `menulist-button`. Die erste `<select>` hat standardmäßig den `auto`-Zustand:

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

Wir setzen Werte für die {{cssxref("background-color")}} und {{cssxref("border")}} Eigenschaften der `<select>` und Picker, um die Effekte der `appearance`-Werte zu demonstrieren:

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

Während die {{cssxref("background-color")}} und {{cssxref("border")}} Stile auf alle `<select>`-Elemente und ihre Picker angewendet werden, beeinflussen die `::picker(select)` Stile nur den Picker, bei dem sowohl `select` als auch `picker` die `appearance`-Eigenschaft auf `base-select` gesetzt haben. Die erste und dritte `selects` sehen gleich aus, da `menulist-button` ein Kompatibilitäts-Schlüsselwort ist.

Beachten Sie, dass standardmäßig die Inline-Größe des `<select>` im Allgemeinen die Inline-Größe der `<option>` mit dem meisten Text ist und dass der Dropdown-Picker über der gerenderten Seite erscheint, wenn er geöffnet wird, wobei er durch die umgebende Seite nicht eingeschränkt ist und daher vollständig sichtbar ist. Diese Aussagen sind nicht mehr zutreffend, wenn `base-select` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)
