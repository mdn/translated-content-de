---
title: appearance
slug: Web/CSS/Reference/Properties/appearance
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`appearance`**-Eigenschaft in [CSS](/de/docs/Web/CSS) gibt das gerenderte Aussehen von ersetzten UI-Widget-Elementen wie Formularsteuerungen an. Solche Elemente erhalten meist eine native, plattformspezifische Gestaltung basierend auf dem Thema des Betriebssystems oder ein primitives Aussehen mit Stilen, die mit CSS überschrieben werden können.

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

Die `appearance`-Eigenschaft kann auf alle Elemente und Pseudo-Elemente angewendet werden, aber die Wirkung des angegebenen Werts, falls vorhanden, hängt von dem Element ab, auf das sie angewendet wird.

- `none`
  - : Verleiht dem Widget ein _primitives_ Aussehen, sodass es über CSS stilisiert werden kann, während die native Funktionalität des Widgets beibehalten wird. Dieser Wert beeinflusst keine Nicht-Widgets.

- `auto`
  - : Setzt interaktive Widgets, um mit ihrem _OS-nativen_ Aussehen gerendert zu werden. Verhält sich wie `none` auf Elementen ohne OS-natives Styling.

- `base-select`
  - : Nur relevant für das {{htmlelement("select")}}-Element und das {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element, sodass sie gestylt werden können.

- `<compat-special>`
  - : Hat eine ähnliche Wirkung wie `auto` auf bestimmten Elementen.
    - `textfield`
      - : Verursacht, dass das Aussehen bestimmter `<input>`-Typen [dem Aussehen des `text`-Typs entspricht](#try_it).
    - `menulist-button`
      - : Wenn es auf das `<select>`-Element gesetzt wird, entspricht der Stil des Dropdown-Pickers [seinem Standardzustand](#setzen_des_aussehens_von_select).

- `<compat-auto>`
  - : Enthalten für rückwärtskompatible Zwecke; mögliche Werte sind `button`, `checkbox`, `listbox`, `menulist`, `meter`, `progress-bar`, `push-button`, `radio`, `searchfield`, `slider-horizontal`, `square-button` und `textarea`. Alle Werte verhalten sich wie `auto`: verwenden Sie stattdessen `auto`.

> [!NOTE]
> Die Spezifikation definiert auch einen `base`-Wert. Dieser wird von keinem Browser unterstützt.

#### Nicht standardisierte Werte

Einige nicht standardisierte Werte werden auch in einigen Browsern unterstützt:

- `slider-vertical`
  - : Macht den Schieberegler vertikal, wenn er auf `<input type="range">`-Elemente angewendet wird. Um [einen vertikalen Schieberegler zu erstellen](/de/docs/Web/CSS/CSS_writing_modes/Vertical_controls), sollten Sie stattdessen den {{cssxref("writing-mode")}} auf `vertical-lr` und die {{cssxref("direction")}} auf `rtl` setzen.

- `-apple-pay-button`
  - : Zeigt das Apple Pay-Logo an, wenn es auf ein {{htmlelement("button")}}, {{htmlelement("a")}}, oder {{htmlelement("input")}}-Element vom Typ `button` oder `reset` gesetzt wird.

## Beschreibung

Die `appearance`-Eigenschaft ermöglicht das Anzeigen von Elementen im Stil des Betriebssystems basierend auf dem Thema des Betriebssystems sowie das Entfernen von plattformnativen Stilen mit dem Wert `none`. Das Setzen von `appearance: none` oder das Ändern des Erscheinungsbildes von UI-Widgets verändert nicht die Funktionalität des Elements.

Während die meisten Elemente in einem Dokument vollständig durch CSS gestylt werden können, werden UI-Steuerelemente (_Widgets_) typischerweise vom Browser unter Verwendung nativer UI-Stile des Betriebssystems gerendert. Dieses _native_ Erscheinungsbild unterscheidet sich zwischen Betriebssystemen und Browsern. In diesem Standardzustand haben Widgets nur begrenzte, wenn überhaupt, funktionale Stile, die mit CSS angepasst werden können. Welche Elemente dieses native UI-Erscheinungsbild haben, wird in HTML definiert.

Die `appearance`-Eigenschaft bietet einige Kontrolle über das Erscheinungsbild von HTML-Widgets, die standardmäßig wie native Betriebssystemsteuerungen aussehen. Am bemerkenswertesten ist, dass der Wert `none` einen Teil des nativen Erscheinungsbilds eines Widgets unterdrückt. Dies führt zu einem _primitiven_ Aussehen, das über CSS gestylt werden kann, während die Funktionalität und die Unterstützung für native Benutzerinteraktionen erhalten bleiben.

Einige Widgets verschwinden vollständig, wenn sie auf `appearance: none` gesetzt werden. Die versteckten Steuerelemente bleiben jedoch interaktiv. Beispielsweise wird das Klicken auf ein {{htmlelement("label")}}, das mit einem `appearance: none`-Checkbox verbunden ist, den geprüften Status der Checkbox umschalten.

Da `none` dazu führen kann, dass ein Widget verborgen wird, wird der `base`-Wert hinzugefügt, um Widgets ein Grundaussehen zu verleihen. Wenn es unterstützt wird, stellt der `base`-Wert sicher, dass Widgets ihr natives Erscheinungsbild beibehalten, während CSS verwendet werden kann, um die Styles eines Widgets zu ändern, die standardmäßig nicht änderbar sind. Im Gegensatz zu `none`, was Radio-Schaltflächen und Kontrollkästchen zum Verschwinden bringen kann, verleiht `base` dem Widget ein primitives Aussehen mit nativen Standardstilen, die benutzbar und interoperabel sind, und ermöglicht zudem ein hohes Maß an Anpassung über CSS. Zwar wird dieser `base`-Wert noch nicht unterstützt, aber die verschiedenen `<compat-auto>`-Werte bieten ähnliche Funktionalität, sind jedoch typenspezifisch und nicht global.

Der `base-select`-Wert, der nur für das {{htmlelement("select")}}-Element und das {{cssxref("::picker()", "::picker(select)")}}-Pseudo-Element relevant ist, ermöglicht [das Styling von `<select>`-Elementen und dem Auswahlelement](#setzen_des_aussehens_von_select) (das die `<option>`-Elemente enthält). Das Auswahlelement wird in der obersten Ebene gerendert, ähnlich wie ein Popover. Wenn `base-select` gesetzt ist, kann der Picker relativ zum Select (oder anderen Elementen) unter Verwendung von [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positioniert werden. Außerdem verursacht der `base-select`-Wert, dass das `<select>`-Element nicht außerhalb des Browserfensters gerendert wird oder eingebauten mobilen Betriebssystemkomponenten ausgelöst zu werden. Es wird auch nicht mehr basierend auf der Breite der breitesten `<option>` bemessen.

### Mit Präfix versehene nicht standardisierte Werte

Vor der Standardisierung ermöglichten die mit Präfix versehenen Eigenschaften **`-moz-appearance`** und **`-webkit-appearance`**, dass Elemente als Widgets wie Buttons oder Checkboxen angezeigt werden. Die folgenden nicht standardisierten Werte könnten in legacy Stylesheets auftreten, am häufigsten als Werte von Shadow DOM-Komponenten [mit Präfix versehenen Pseudo-Elementen](/de/docs/Web/CSS/Reference/Webkit_extensions#pseudo-elements).

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

Autoren werden ermutigt, nur standardisierte Schlüsselwörter zu verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

Dieses Beispiel demonstriert die grundlegende Verwendung der `appearance`-Eigenschaft, um das Erscheinungsbild eines {{htmlelement("input")}}-Elements in einigen Browsern zu ändern.

#### HTML

Wir fügen zwei `number`-Formularsteuerungen sowie deren Labels ein.

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

Abhängig vom Browser kann der Spinner visuell entfernt werden, wenn die Steuerung so eingestellt ist, dass sie wie ein Textfeld aussieht. Die `appearance`-Eigenschaft hat keinen Einfluss auf die Funktionalität: Zum Beispiel werden die Auf- und Abwärtspfeiltasten die Werte weiterhin erhöhen und verringern, auch wenn es keinen sichtbaren Spinner mehr gibt.

### Aussehen auf `none` gesetzt

Das folgende Beispiel zeigt, wie das Standard-Styling von einer Checkbox, einem Radio-Button und einem {{htmlelement("select")}}-Element entfernt und benutzerdefiniertes Styling angewendet wird.

#### HTML

Wir fügen Paare von Check-und Radio-Schaltflächen sowie `<select>`-Elemente mit ihren zugehörigen Labels ein:

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

Wir wenden Stile auf beide {{htmlelement("input")}}-Elemente vom Typ `checkbox` an; diese Stile erzeugen ein rotes Quadrat, wenn das Element stilisierbar ist. Wir setzen `appearance: none` im {{cssxref(":checked")}} UI-Staat für alle Eingaben (`checkbox` und `radio`) sowie auf Elemente mit der Klasse `.none`. Dies entfernt jegliche Style der Radio-Schaltfläche und Checkbox, abgesehen von den Rändern, und ermöglicht das Anwenden der festgelegten Styles. Es gibt keine alternativen Styles für die Radio-Schaltflächen oder `<select>`-Elemente, wenn `none` gesetzt ist.

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

Das Setzen von `appearance: none` ermöglicht das Styling von UI-Elementen, birgt jedoch auch das Risiko, das Widget zu verstecken. Die ungeprüfte Checkbox, deren `appearance` auf `auto` zurückgesetzt ist, sieht aus wie eine Checkbox. Das Setzen von `appearance: none` im `:checked`-Staat ermöglicht es, dass es gestylt wird.

Wie die ungeprüfte Checkbox sieht die ungeprüfte Radio-Schaltfläche wie das native UI-Widget aus, weil sie es ist. Im geprüften Zustand, mit `appearance: none` angewendet, verschwindet die Radio-Schaltfläche; die Funktionalität bleibt erhalten, und nur ihre Ränder beeinflussen das Seiten-Rendering.

### Setzen des Aussehens von Select

Wir können die `appearance`-Eigenschaft verwenden, um benutzerdefinierte Select-Funktionalität zu aktivieren, die das Styling des `<select>`-Elements und seines Pickers ermöglicht, der den Teil des Formularsteuerelements darstellt, der aus der Seite herausspringt.

#### HTML

Wir fügen drei `<select>`-Elemente mit denselben mehrfachen {{htmlelement("option")}}-Kindern ein. Wie bei jedem `<select>` fügen wir auch zugehörige {{htmlelement("label")}}-Elemente ein. Die dritte Option hat mehr Text, um den Effekt von `base-select` auf die Breite des `<select>` zu demonstrieren:

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

Wir wählen die Picker aller `<select>`-Elemente mit dem {{cssxref("::picker()")}}-Pseudo-Element mit dem `select`-Parameter aus. Wir setzen den `appearance`-Wert aller Picker und eines `<select>`-Elements auf `base-select`. Wir setzen das letzte `<select>` auf `menulist-button`. Das erste `<select>` hat standardmäßig den `auto`-Zustand:

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

Obwohl die {{cssxref("background-color")}} und {{cssxref("border")}}-Stile auf allen `<select>`-Elementen und ihren Pickern definiert sind, wirken die `::picker(select)`-Stile nur auf den Picker, bei dem sowohl select als auch der Picker die `appearance`-Eigenschaft auf `base-select` gesetzt haben. Die ersten und dritten selects sehen gleich aus, da `menulist-button` ein Kompatibilitätsschlüsselwort ist.

Beachten Sie, dass standardmäßig die Inline-Größe des `<select>` im Allgemeinen die Inline-Größe der `<option>` mit dem meisten Text ist und dass der Dropdown-Picker über der gerenderten Seite erscheint, wenn er geöffnet ist, wodurch er nicht von der umgebenden Seite eingeschränkt wird und daher vollständig sichtbar ist. Diese Aussagen gelten nicht mehr, wenn `base-select` gesetzt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)
