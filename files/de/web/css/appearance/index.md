---
title: appearance
slug: Web/CSS/appearance
l10n:
  sourceCommit: 6eae35bc64a49865a469ca29bc40e6993b9cb8cc
---

Die **`appearance`**-Eigenschaft für [CSS](/de/docs/Web/CSS) spezifiziert das gerenderte Erscheinungsbild von ersetzten UI-Widget-Elementen wie Formularelementen. Häufig erhalten solche Elemente ein natives, plattformspezifisches Styling basierend auf dem Thema des Betriebssystems oder ein primitives Erscheinungsbild mit Stilen, die mithilfe von CSS überschrieben werden können.

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

Die `appearance`-Eigenschaft kann auf alle Elemente und Pseudo-Elemente angewendet werden, aber die Wirkung des angegebenen Wertes hängt, falls vorhanden, vom angewendeten Element ab.

- `none`
  - : Verleiht dem Widget ein _primitives_ Erscheinungsbild, sodass es über CSS gestylt werden kann, während die native Funktionalität des Widgets erhalten bleibt. Dieser Wert wirkt sich nicht auf Nicht-Widgets aus.

- `auto`
  - : Setzt interaktive Widgets, damit sie mit ihrem _OS-nativen_ Erscheinungsbild gerendert werden. Verhält sich wie `none` bei Elementen ohne OS-native Styling.

- `base-select`
  - : Nur relevant für das {{htmlelement("select")}}-Element und das {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element, um deren Styling zu ermöglichen.

- `<compat-special>`
  - : Hat einen ähnlichen Effekt wie `auto` auf bestimmten Elementen.
    - `textfield`
      - : Bewirkt, dass das Erscheinungsbild bestimmter Typen von `<input>` dem des Typs `text` [entspricht](#try_it).
    - `menulist-button`
      - : Wenn auf das `<select>`-Element angewendet, entspricht der Stil des Drop-down-Pickers [dem seines Standardzustands](#einstellung_des_erscheinungsbilds_eines_select).

- `<compat-auto>`
  - : Enthalten für die Rückwärtskompatibilität; mögliche Werte schließen `button`, `checkbox`, `listbox`, `menulist`, `meter`, `progress-bar`, `push-button`, `radio`, `searchfield`, `slider-horizontal`, `square-button` und `textarea` ein. Alle Werte verhalten sich wie `auto`: verwenden Sie stattdessen `auto`.

> [!NOTE]
> Die Spezifikation definiert auch einen `base`-Wert. Dieser wird noch von keinem Browser unterstützt.

#### Nicht-standardisierte Werte

Einige nicht-standardisierte Werte werden auch in einigen Browsern unterstützt:

- `slider-vertical`
  - : Macht den Schieberegler vertikal, wenn auf `<input type="range">`-Elemente angewendet. Um [einen vertikalen Schieberegler zu erstellen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls), sollten Sie stattdessen den {{cssxref("writing-mode")}} auf `vertical-lr` und die {{cssxref("direction")}} auf `rtl` setzen.

- `-apple-pay-button`
  - : Zeigt das Apple Pay-Logo an, wenn es auf ein {{htmlelement("button")}}, {{htmlelement("a")}} oder {{htmlelement("input")}}-Element vom Typ `button` oder `reset` gesetzt wird.

## Beschreibung

Die `appearance`-Eigenschaft ermöglicht das Anzeigen von Elementen in ihrem Betriebssystem-nativen Stil basierend auf dem Thema des Betriebssystems sowie das Entfernen jeglichen plattformspezifischen Stylings mit dem Wert `none`. Das Setzen von `appearance: none` oder das Ändern des Erscheinungsbilds von UI-Widgets ändert nicht die Funktionalität des Elements.

Während die meisten Elemente in einem Dokument vollständig mit CSS gestylt werden können, werden UI-Steuerelemente (_Widgets_) typischerweise vom Browser unter Verwendung der nativen UI-Stile des Betriebssystems gerendert. Diese _natives_ Erscheinungsbild unterscheidet sich zwischen Betriebssystemen und Browsern. In diesem Standardzustand haben Widgets nur begrenzte, wenn überhaupt, Styling-Möglichkeiten mit CSS. Welche Elemente dieses native UI-Erscheinungsbild haben, ist in HTML definiert.

Die `appearance`-Eigenschaft bietet einige Kontrolle über das Erscheinungsbild von HTML-Widgets, die standardmäßig wie native Betriebssystem-Steuerelemente aussehen. Besonders hervorzuheben ist der Wert `none`, der einen Teil des nativen Erscheinungsbilds eines Widgets unterdrückt. Dies führt zu einem _primitiven_ Look, der über CSS gestylt werden kann, während die Funktionalität und native Benutzerinteraktionen unterstützt bleiben.

Einige Widgets verschwinden vollständig, wenn `appearance: none` gesetzt wird. Die ausgeblendeten Steuerelemente bleiben jedoch interaktiv. Beispielsweise wird durch Klicken auf ein {{htmlelement("label")}}, das mit einem `appearance: none`-Checkbox-Element verknüpft ist, der geprüfte Zustand der Checkbox umgeschaltet.

Da `none` dazu führen kann, dass ein Widget ausgeblendet wird, wird der `base`-Wert hinzugefügt, um Widgets ein Basiserleben zu bieten. Wenn unterstützt, stellt der `base`-Wert sicher, dass Widgets ihr natives Erscheinungsbild beibehalten, während CSS verwendet werden kann, um ein Widget zu ändern, dessen Stile standardmäßig nicht änderbar sind. Im Gegensatz zu `none`, das Radiobuttons und Checkboxen verschwinden lassen kann, gibt `base` dem Widget ein primitives Erscheinungsbild mit standardmäßigen nativen Stilen, die nutzbar und interoperabel sind, und ermöglicht auch ein gutes Maß an Anpassung über CSS. Während dieser `base`-Wert noch nicht unterstützt wird, bieten die vielen `<compat-auto>`-Werte ähnliche Funktionen, sind jedoch typspezifisch und nicht global.

Der Wert `base-select`, der nur für das {{htmlelement("select")}}-Element und das {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element relevant ist, ermöglicht das [Styling von `<select>`-Elementen und des Auswahl-Pickers](#einstellung_des_erscheinungsbilds_eines_select), der die `<option>`-Elemente enthält. Der Picker wird in der obersten Ebene gerendert, ähnlich einem Popover. Wenn `base-select` gesetzt ist, kann der Picker relativ zur Auswahl (oder anderen Elementen) mit Hilfe von [CSS-Anker-Positionierungsfunktionen](/de/docs/Web/CSS/CSS_anchor_positioning) positioniert werden. Zusätzlich bewirkt der `base-select`-Wert, dass das `<select>` nicht außerhalb des Browserfensters rendert oder integrierte Komponenten des mobilen Betriebssystems auslöst. Es wird auch nicht mehr basierend auf der Breite der breitesten `<option>` dimensioniert.

### Mit Präfix versehene nicht-standardisierte Werte

Vor der Standardisierung erlaubten die mit Präfixen versehenen Eigenschaften **`-moz-appearance`** und **`-webkit-appearance`**, dass Elemente als Widgets wie Schaltflächen oder Checkboxen angezeigt werden. Die folgenden nicht-standardisierten Werte können in veralteten Stylesheets gefunden werden, am häufigsten als Werte von Shadow-DOM-Komponenten [mit Präfix versehenen Pseudo-Elementen](/de/docs/Web/CSS/WebKit_Extensions#pseudo-elements).

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

In diesem Beispiel wird die grundlegende Verwendung der `appearance`-Eigenschaft gezeigt, um das Erscheinungsbild eines {{htmlelement("input")}}-Elements in einigen Browsern zu ändern.

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

Wir setzen das Element mit der Klasse `text`, damit es wie ein Textfeld aussieht.

```css
.text {
  appearance: textfield;
}
```

#### Ergebnisse

{{EmbedLiveSample("Basic example", 600, 100)}}

Abhängig vom Browser wird der Spinner möglicherweise visuell entfernt, wenn das Steuerelement so gesetzt wird, dass es wie ein Textfeld aussieht. Die `appearance`-Eigenschaft hat keinen Einfluss auf die Funktionalität: zum Beispiel werden, obwohl möglicherweise kein Spinner mehr zum Klicken vorhanden ist, die Auf- und Ab-Cursor-Tasten weiterhin den Wert erhöhen und verringern.

### Erscheinungsbild auf `none` gesetzt

Das folgende Beispiel zeigt, wie die Standard-Styling von einem Kontrollkästchen, einem Radio-Button und einem {{htmlelement("select")}}-Element entfernt und individuelles Styling angewendet wird.

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

Wir wenden Styles auf beide {{htmlelement("input")}}-Elemente vom Typ `checkbox` an; diese Styles erzeugen ein rotes Quadrat, wenn das Element stylbar ist. Wir setzen `appearance: none` auf den {{cssxref(":checked")}} UI-Zustand für alle Eingaben (`checkbox` und `radio`) sowie auf Elemente mit der `.none`-Klasse. Dadurch werden alle Styles des Radiobuttons und des Kontrollkästchens entfernt, außer den Rändern, und jegliche festgelegten Styles können angewendet werden. Es gibt keine Alternativstyles für die Radiobuttons oder `<select>`-Elemente, wenn `none` gesetzt ist.

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

Das Setzen von `appearance: none` ermöglicht es, UI-Elemente zu stylen, birgt jedoch auch das Risiko, das Widget auszublenden. Das nicht markierte Kontrollkästchen, mit seinem `appearance` auf den Standardwert `auto`, sieht aus wie ein Kontrollkästchen. Das Setzen von `appearance: none` im `:checked`-Zustand ermöglicht es, es zu stylen.

Wie das nicht markierte Kontrollkästchen sieht der nicht markierte Radiobutton wie das native UI-Widget aus, weil es das ist. Im markierten Zustand, mit angewendetem `appearance: none`, verschwindet der Radiobutton; seine Funktionalität bleibt erhalten, und nur seine Ränder beeinflussen das Rendering der Seite.

### Einstellung des Erscheinungsbilds eines Select

Wir können die `appearance`-Eigenschaft verwenden, um benutzerdefinierte Select-Funktionalität zu aktivieren und das `<select>`-Element und seinen Picker, der den Teil des Formularelements repräsentiert, der aus der Seite herausspringt, zu stylen.

#### HTML

Wir fügen drei `<select>`-Elemente mit denselben mehrfachen {{htmlelement("option")}}-Kindern ein. Wie bei jedem `<select>` fügen wir auch zugehörige {{htmlelement("label")}}-Elemente hinzu. Die dritte Option hat mehr Text, um die Wirkung von `base-select` auf die Breite des `<select>` zu demonstrieren:

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

Wir wählen die Picker aller `<select>`-Elemente mit dem {{cssxref("::picker()")}}-Pseudo-Element und dem `select`-Parameter aus. Wir setzen den `appearance`-Wert aller Picker und eines `<select>`-Elements auf `base-select`. Wir setzen das letzte `<select>` auf `menulist-button`. Das erste `<select>` wird auf den `auto`-Zustand zurücksetzen:

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

Obwohl die {{cssxref("background-color")}} und {{cssxref("border")}}-Styles auf allen `<select>`-Elementen und ihren Pickern definiert sind, beeinflussen die `::picker(select)`-Styles nur den Picker, bei dem sowohl das `select` als auch der Picker die `appearance`-Eigenschaft auf `base-select` gesetzt haben. Die ersten und dritten Auswahlen sehen gleich aus, weil `menulist-button` ein Kompatibilitätsschlüsselwort ist.

Beachten Sie, dass die Inline-Größe des `<select>` standardmäßig die Inline-Größe des `<option>` mit dem meisten Text ist und dass der Dropdown-Picker über der gerenderten Seite angezeigt wird, wenn er geöffnet ist, wodurch er nicht durch die umgebende Seite eingeschränkt wird und somit vollständig sichtbar ist. Diese Aussagen sind nicht mehr wahr, wenn `base-select` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)
