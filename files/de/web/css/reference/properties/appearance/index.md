---
title: "`appearance` CSS property"
short-title: appearance
slug: Web/CSS/Reference/Properties/appearance
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`appearance`** legt das gerenderte Erscheinungsbild ersetzter UI-Widget-Elemente wie Formularsteuerelemente fest. Meist erhalten solche Elemente entweder ein natives, plattformspezifisches Styling, das auf dem Theme des Betriebssystems basiert, oder ein einfaches Erscheinungsbild, dessen Stile sich mit CSS überschreiben lassen.

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

Die Eigenschaft `appearance` kann auf alle Elemente und Pseudoelemente angewendet werden. Ob und wie sich der angegebene Wert auswirkt, hängt jedoch vom jeweiligen Element ab.

- `none`
  - : Verleiht dem Widget ein _einfaches_ Erscheinungsbild, das sich mit CSS gestalten lässt, während seine native Funktionalität erhalten bleibt. Dieser Wert wirkt sich nicht auf Elemente aus, die keine Widgets sind.

- `auto`
  - : Bewirkt, dass interaktive Widgets mit ihrem _betriebssystemnativen_ Erscheinungsbild gerendert werden. Verhält sich bei Elementen ohne betriebssystemnatives Styling wie `none`.

- `base-select`
  - : Ist nur für das Element {{htmlelement("select")}} und das Pseudoelement {{cssxref("::picker()", "::picker(select)")}} relevant und ermöglicht deren vollständige Gestaltung.

- `<compat-special>`
  - : Hat bei bestimmten Elementen eine ähnliche Wirkung wie `auto`.
    - `textfield`
      - : Bewirkt, dass das Erscheinungsbild bestimmter `<input>`-Typen [dem Erscheinungsbild des Typs `text` entspricht](#try_it).
    - `menulist-button`
      - : Wenn dieser Wert für das Element `<select>` festgelegt ist, [entspricht das Styling des Drop-down-Pickers dem seines Standardzustands](#erscheinungsbild_eines_select-elements_festlegen).

- `<compat-auto>`
  - : Ist aus Gründen der Abwärtskompatibilität enthalten. Mögliche Werte sind `button`, `checkbox`, `listbox`, `menulist`, `meter`, `progress-bar`, `push-button`, `radio`, `searchfield`, `slider-horizontal`, `square-button` und `textarea`. Alle diese Werte verhalten sich wie `auto`: Verwenden Sie stattdessen `auto`.

> [!NOTE]
> Die Spezifikation definiert auch den Wert `base`. Dieser wird noch von keinem Browser unterstützt.

#### Nicht standardisierte Werte

Einige nicht standardisierte Werte werden ebenfalls von manchen Browsern unterstützt:

- `slider-vertical`
  - : Richtet den Schieberegler vertikal aus, wenn der Wert auf `<input type="range">`-Elemente angewendet wird. Um [einen vertikalen Schieberegler zu erstellen](/de/docs/Web/CSS/Guides/Writing_modes/Vertical_controls), sollten Sie stattdessen {{cssxref("writing-mode")}} auf `vertical-lr` und {{cssxref("direction")}} auf `rtl` setzen.

- `-apple-pay-button`
  - : Zeigt das Apple-Pay-Logo an, wenn der Wert für ein {{htmlelement("button")}}-, {{htmlelement("a")}}- oder {{htmlelement("input")}}-Element mit dem Typ `button` oder `reset` festgelegt wird.

## Beschreibung

Mit der Eigenschaft `appearance` können Elemente entsprechend dem Theme des Betriebssystems in ihrem betriebssystemnativen Stil angezeigt werden. Mit dem Wert `none` lässt sich außerdem jegliches plattformnative Styling entfernen. Wenn Sie `appearance: none` festlegen oder das Erscheinungsbild von UI-Widgets auf andere Weise ändern, bleibt die Funktionalität des Elements erhalten.

Während sich die meisten Elemente eines Dokuments vollständig mit CSS gestalten lassen, rendert der Browser UI-Steuerelemente (_Widgets_) normalerweise mit den nativen UI-Stilen des Betriebssystems. Dieses _native_ Erscheinungsbild unterscheidet sich je nach Betriebssystem und Browser. In diesem Standardzustand lassen sich Widgets mit CSS nur eingeschränkt oder gar nicht gestalten. Welche Elemente dieses native UI-Erscheinungsbild haben, ist in HTML definiert.

Die Eigenschaft `appearance` bietet eine gewisse Kontrolle über das Erscheinungsbild von HTML-Widgets, die standardmäßig wie native Steuerelemente des Betriebssystems aussehen. Insbesondere unterdrückt der Wert `none` einen Teil des nativen Erscheinungsbilds eines Widgets. Dadurch entsteht ein _einfaches_ Erscheinungsbild, das sich mit CSS gestalten lässt, während die Funktionalität und die Unterstützung nativer Benutzerinteraktionen erhalten bleiben.

Manche Widgets verschwinden vollständig, wenn `appearance: none` festgelegt wird. Die ausgeblendeten Steuerelemente bleiben jedoch interaktiv. Wenn Sie beispielsweise auf ein {{htmlelement("label")}} klicken, das einer Checkbox mit `appearance: none` zugeordnet ist, wird deren Aktivierungszustand umgeschaltet.

Da `none` ein Widget ausblenden kann, wird der Wert `base` hinzugefügt, um Widgets ein grundlegendes Erscheinungsbild zu geben. Sobald `base` unterstützt wird, sorgt der Wert dafür, dass Widgets ihr natives Erscheinungsbild beibehalten und sich zugleich Stile mit CSS ändern lassen, die standardmäßig nicht veränderbar sind. Anders als `none`, das Radio-Buttons und Checkboxen verschwinden lassen kann, verleiht `base` dem Widget ein einfaches Erscheinungsbild mit nutzbaren, interoperablen nativen Standardstilen und ermöglicht zugleich eine weitreichende Anpassung mit CSS. Obwohl `base` noch nicht unterstützt wird, bieten die zahlreichen `<compat-auto>`-Werte eine ähnliche Funktionalität. Sie sind jedoch typspezifisch und nicht allgemein anwendbar.

### Anpassbare select-Elemente

Der Wert `base-select`, der nur für das Element {{htmlelement("select")}} und das Pseudoelement {{cssxref("::picker()", "::picker(select)")}} relevant ist, ermöglicht die [Gestaltung von `<select>`-Elementen und des Select-Pickers](#erscheinungsbild_eines_select-elements_festlegen), der die `<option>`-Elemente enthält. Der Picker wird ähnlich wie ein Popover in der obersten Ebene gerendert. Wenn `base-select` festgelegt ist, kann der Picker mithilfe von [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) relativ zum select-Element oder zu anderen Elementen positioniert werden. Außerdem verhindert `base-select`, dass `<select>` außerhalb des Browserfensters gerendert wird oder integrierte Komponenten mobiler Betriebssysteme auslöst. Seine Größe richtet sich dann auch nicht mehr nach der Breite des breitesten `<option>`-Elements.

Weitere Informationen finden Sie unter [Anpassbare select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).

### Nicht standardisierte Werte mit Präfix

Vor der Standardisierung ermöglichten die Eigenschaften **`-moz-appearance`** und **`-webkit-appearance`** mit Präfix, Elemente als Widgets wie Schaltflächen oder Checkboxen darzustellen. Die folgenden nicht standardisierten Werte können in älteren Stylesheets vorkommen, am häufigsten als Werte von [Pseudoelementen mit Präfix](/de/docs/Web/CSS/Reference/Webkit_extensions#pseudo-elements) für Shadow-DOM-Komponenten.

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

Autoren sollten ausschließlich standardisierte Schlüsselwörter verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

Dieses Beispiel zeigt die grundlegende Verwendung der Eigenschaft `appearance`, mit der sich das Erscheinungsbild eines {{htmlelement("input")}}-Elements in einigen Browsern ändern lässt.

#### HTML

Wir fügen zwei Formularsteuerelemente vom Typ `number` sowie die zugehörigen Labels ein.

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

Wir legen fest, dass das Element mit der Klasse `text` wie ein Textfeld aussieht.

```css
.text {
  appearance: textfield;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic example", 600, 100)}}

Je nach Browser wird das Steuerelement möglicherweise ohne sichtbare Pfeilschaltflächen dargestellt, wenn es wie ein Textfeld aussehen soll. Die Eigenschaft `appearance` hat keinen Einfluss auf die Funktionalität: Auch wenn keine Pfeilschaltflächen mehr zum Anklicken sichtbar sind, lässt sich der Wert weiterhin mit den Pfeiltasten nach oben und unten erhöhen und verringern.

### Erscheinungsbild auf `none` setzen

Das folgende Beispiel zeigt, wie Sie das Standard-Styling einer Checkbox, eines Radio-Buttons und eines {{htmlelement("select")}}-Elements entfernen und eigenes Styling anwenden.

#### HTML

Wir fügen jeweils zwei Checkboxen, Radio-Buttons und `<select>`-Elemente sowie die zugehörigen Labels ein:

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

Wir wenden Stile auf beide {{htmlelement("input")}}-Elemente vom Typ `checkbox` an. Diese Stile erzeugen ein rotes Quadrat, sofern sich das Element gestalten lässt. Für den UI-Zustand {{cssxref(":checked")}} aller Input-Elemente (`checkbox` und `radio`) sowie für Elemente mit der Klasse `.none` legen wir `appearance: none` fest. Dadurch wird das gesamte Styling der Radio-Buttons und Checkboxen bis auf die Außenabstände entfernt, sodass festgelegte Stile angewendet werden können. Für die Radio-Buttons und `<select>`-Elemente sind keine alternativen Stile vorgesehen, wenn `none` festgelegt ist.

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

Mit `appearance: none` lassen sich UI-Elemente gestalten, es besteht jedoch auch die Gefahr, dass das Widget ausgeblendet wird. Die nicht aktivierte Checkbox, deren `appearance` standardmäßig `auto` ist, sieht wie eine Checkbox aus. Wird im Zustand `:checked` `appearance: none` festgelegt, lässt sie sich gestalten.

Wie die nicht aktivierte Checkbox sieht auch der nicht aktivierte Radio-Button wie das native UI-Widget aus, da er eines ist. Im aktivierten Zustand verschwindet der Radio-Button, wenn `appearance: none` angewendet wird. Seine Funktionalität bleibt erhalten; lediglich seine Außenabstände beeinflussen noch die Darstellung der Seite.

### Erscheinungsbild eines select-Elements festlegen

Mit der Eigenschaft `appearance` können wir die anpassbare select-Funktionalität aktivieren. Dadurch lassen sich das `<select>`-Element und sein Picker gestalten – also der Teil des Formularsteuerelements, der sich über der Seite öffnet.

#### HTML

Wir fügen drei `<select>`-Elemente mit jeweils denselben mehreren untergeordneten {{htmlelement("option")}}-Elementen ein. Wie bei jedem `<select>` fügen wir auch die zugehörigen {{htmlelement("label")}}-Elemente hinzu. Die dritte Option enthält mehr Text, um die Auswirkung von `base-select` auf die Breite von `<select>` zu veranschaulichen:

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

Wir wählen die Picker aller `<select>`-Elemente mithilfe des Pseudoelements {{cssxref("::picker()")}} mit dem Parameter `select` aus. Für alle Picker und ein `<select>`-Element setzen wir `appearance` auf `base-select`. Für das letzte `<select>` legen wir `menulist-button` fest. Das erste `<select>` verwendet standardmäßig den Zustand `auto`:

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

Um die Auswirkungen der `appearance`-Werte zu veranschaulichen, legen wir Werte für die Eigenschaften {{cssxref("background-color")}} und {{cssxref("border")}} der `<select>`-Elemente und Picker fest:

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

#### Ergebnis

{{EmbedLiveSample("Setting the appearance of a select", 1050, 80)}}

Obwohl die Stile für {{cssxref("background-color")}} und {{cssxref("border")}} für alle `<select>`-Elemente und ihre Picker definiert sind, wirken sich die Stile für `::picker(select)` nur auf den Picker aus, bei dem sowohl für das select-Element als auch für den Picker die Eigenschaft `appearance` auf `base-select` gesetzt ist. Das erste und das dritte select-Element sehen gleich aus, da `menulist-button` ein Kompatibilitätsschlüsselwort ist.

Beachten Sie, dass die Inline-Größe von `<select>` standardmäßig im Allgemeinen der Inline-Größe des `<option>`-Elements mit dem meisten Text entspricht. Außerdem erscheint der Drop-down-Picker beim Öffnen über der gerenderten Seite. Dadurch wird er nicht durch die umgebende Seite begrenzt und ist vollständig sichtbar. Wenn `base-select` festgelegt ist, trifft beides nicht mehr zu.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)
