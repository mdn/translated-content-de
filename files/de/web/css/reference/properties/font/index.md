---
title: CSS-Eigenschaft `font`
short-title: font
slug: Web/CSS/Reference/Properties/font
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die **`font`**-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) von [CSS](/de/docs/Web/CSS) legt die verschiedenen Schrifteigenschaften eines Elements fest. Alternativ weist sie einem Element eine Systemschrift zu.

{{InteractiveExample("CSS Demo: font")}}

```css interactive-example-choice
font:
  1.2rem "Fira Sans",
  sans-serif;
```

```css interactive-example-choice
font:
  italic 1.2rem "Fira Sans",
  serif;
```

```css interactive-example-choice
font: italic small-caps bold 16px/2 cursive;
```

```css interactive-example-choice
font: small-caps bold 24px/1 sans-serif;
```

```css interactive-example-choice
font: caption;
```

```html interactive-example
<section id="default-example">
  <q id="example-element">
    Prejudices, it is well known, are most difficult to eradicate from the heart
    whose soil has never been loosened or fertilized by education: they grow
    there, firm as weeds among stones.
  </q>
</section>
```

```css interactive-example
@font-face {
  font-family: "Fira Sans";
  src:
    local("FiraSans-Regular"),
    url("/shared-assets/fonts/FiraSans-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Fira Sans";
  src:
    local("FiraSans-Italic"),
    url("/shared-assets/fonts/FiraSans-Italic.woff2") format("woff2");
  font-weight: normal;
  font-style: italic;
}

section {
  margin-top: 10px;
  font-size: 1.1em;
}
```

## Zusammengefasste Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("font-family")}}
- {{cssxref("font-size")}}
- {{cssxref("font-width")}}
- {{cssxref("font-style")}}
- {{cssxref("font-variant")}}
- {{cssxref("font-weight")}}
- {{cssxref("line-height")}}

### Nur zurückgesetzte Untereigenschaften

Diese Eigenschaft setzt die folgenden CSS-Eigenschaften auf ihre Anfangswerte zurück:

- {{cssxref("font-feature-settings")}}
- {{cssxref("font-kerning")}}
- {{cssxref("font-language-override")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-size-adjust")}}
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-emoji")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-variation-settings")}}

## Syntax

```css-nolint
/* font-size font-family */
font: 1.2em sans-serif;

/* font-size/line-height font-family */
font: 1.2em/2 "Fira Sans", sans-serif;

/* font-style font-weight font-size font-family */
font: italic bold 1.2em monospace;

/* font-width font-variant font-size font-family */
font: ultra-condensed small-caps 1.2em Montserrat, Helvetica, sans-serif;

/* system font */
font: caption;
```

### Werte

Der Wert ist entweder eine Kurzschreibweise für verschiedene schriftbezogene Eigenschaften oder ein einzelnes `<system-font-family-name>`-Schlüsselwort:

- `<'font-style'>` {{optional_inline}}
  - : Siehe die CSS-Eigenschaft {{cssxref("font-style")}}. Der Standardwert ist `normal`.
- `<font-variant-css2>` {{optional_inline}}
  - : Entweder der Wert `normal` oder `small-caps` der Eigenschaft {{cssxref("font-variant")}}. Der Standardwert ist `normal`.
- `<'font-weight'>` {{optional_inline}}
  - : Siehe die CSS-Eigenschaft {{cssxref("font-weight")}}. Der Standardwert ist `normal`.
- `<font-width-css3>` {{optional_inline}}
  - : Die von der CSS-Eigenschaft {{cssxref("font-width")}} unterstützten Schlüsselwörter. Der Standardwert ist `normal`.
- `<'font-size'>`
  - : Siehe die CSS-Eigenschaft {{cssxref("font-size")}}.
- `<'line-height'>` {{optional_inline}}
  - : Siehe die CSS-Eigenschaft {{cssxref("line-height")}}. Der Standardwert ist `normal`.
- `<'font-family'>`
  - : Siehe die CSS-Eigenschaft {{cssxref("font-family")}}. Muss der letzte Wert sein.

- `<system-font-family-name>`
  - : Ein einzelnes Schlüsselwort, das eine Systemschrift bezeichnet. Dazu gehören:
    - `caption`
      - : Die Systemschrift für Steuerelemente mit Beschriftung (Schaltflächen, Dropdown-Listen usw.).
    - `icon`
      - : Die Systemschrift für Symbolbeschriftungen.
    - `menu`
      - : Die Systemschrift für Menüs (z. B. Dropdown-Menüs und Menülisten).
    - `message-box`
      - : Die Systemschrift für Dialogfelder.
    - `small-caption`
      - : Die Systemschrift für die Beschriftung kleiner Steuerelemente.
    - `status-bar`
      - : Die Systemschrift für Statusleisten von Fenstern.

    Außerdem sind mehrere nicht standardisierte Werte mit Präfixen implementiert.

## Beschreibung

Der Wert der Eigenschaft `font` ist entweder ein einzelnes Schlüsselwort, das eine Systemschrift bezeichnet, oder eine Kombination von Werten einzelner Eigenschaften, mit denen die verschiedenen Schrifteigenschaften eines Elements festgelegt werden.

### Deklarationen von Systemschriften

Wenn `font` als `<system-font-family-name>`-Schlüsselwort angegeben wird, muss der gesamte Eigenschaftswert aus diesem einen Schlüsselwort bestehen. Dabei wird die Groß- und Kleinschreibung nicht berücksichtigt. Gültige Werte sind `caption`, `icon`, `menu`, `message-box`, `small-caption` und `status-bar`.

Browser unterstützen außerdem nicht standardisierte Werte mit Präfixen:

- Chromium implementiert `-webkit-control`, `-webkit-small-control` und `-webkit-mini-control`.
- Webkit unterstützt die Chromium-Werte und ergänzt `-webkit-body`, `-webkit-pictograph` und `-webkit-ruby-text` sowie mehrere Systemschriftnamen mit dem Präfix `-apple-system-*`.
- Gecko implementiert `-moz-window`, `-moz-document`, `-moz-desktop`, `-moz-info`, `-moz-dialog`, `-moz-button`, `-moz-pull-down-menu`, `-moz-list` und `-moz-field`.

Eine Systemschrift, also ein `<system-font-family-name>`, kann nur mit der Eigenschaft `font` festgelegt werden. Ein einzelner Schlüsselwortwert wie `font: icon` setzt Schriftfamilie, Größe, Stärke, Stil usw. auf die Werte, die der Browser für die benannte Systemschrift definiert. Alle diese Werte können durch Deklarationen einzelner Eigenschaften geändert werden, die _nach_ der `font`-Deklaration stehen.

Wenn innerhalb des Werts einer `font`-Eigenschaft nach dem `<system-font-family-name>`-Schlüsselwort weitere Komponenten der einzelnen `font`-Eigenschaften stehen, ist die Deklaration ungültig. Beispielsweise ist `font: icon small` ungültig.

Wenn ein `<system-font-family-name>`-Schlüsselwort an einer anderen Stelle als der ersten Komponente des Werts steht, wird es als {{cssxref("ident")}} behandelt, der einen gewöhnlichen `font-family`-Namen bezeichnet. Beispielsweise setzt die Deklaration `font: small icon` die `font-family` auf eine Schrift namens `icon` – keine Systemschrift, die möglicherweise existiert oder auch nicht. Diese Deklaration setzt außerdem `font-size` auf `small` und alle übrigen Komponenten der Kurzschreibweise auf ihre Anfangswerte zurück.

### `font`-Deklarationen in Kurzschreibweise

Wenn `font` als Kurzschreibweise für mehrere schriftbezogene Eigenschaften angegeben wird, gilt Folgendes:

- Werte für diese Eigenschaften sind erforderlich:
  - {{cssxref("font-size")}}
  - {{cssxref("font-family")}}

- Werte für diese Eigenschaften sind optional:
  - {{cssxref("font-style")}}
  - {{cssxref("font-variant")}}
  - {{cssxref("font-weight")}}
  - {{cssxref("font-width")}}
  - {{cssxref("line-height")}}

Wie bei jeder Kurzschreibweise werden alle nicht angegebenen Einzelkomponenten auf ihre Anfangswerte gesetzt. Dadurch können zuvor mit einzelnen Eigenschaften festgelegte Werte überschrieben werden. Darüber hinaus setzt die Kurzschreibweise die folgenden Eigenschaften auf ihre Anfangswerte zurück. Sie können mit der Kurzschreibweise nicht ausdrücklich festgelegt werden:

- {{cssxref("font-feature-settings")}}
- {{cssxref("font-kerning")}}
- {{cssxref("font-language-override")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-size-adjust")}}
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-emoji")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-variation-settings")}}

### Reihenfolge der Werte in der Kurzschreibweise

Für die Reihenfolge einiger Werte innerhalb einer `font`-Deklaration in Kurzschreibweise gelten bestimmte Regeln:

- Die Komponenten `font-size` und `font-family` sind beide erforderlich (außer bei [Deklarationen von Systemschriften](#deklarationen_von_systemschriften)).
- Die Komponenten `font-style`, `font-variant` und `font-weight` müssen vor dem Wert für `font-size` stehen.
- Ein Wert für `line-height` kann nur angegeben werden, wenn auch `font-size` angegeben ist. Ist `line-height` vorhanden, muss der Wert unmittelbar auf `font-size` folgen. Die beiden Werte werden durch einen Schrägstrich (`/`) getrennt, zum Beispiel: `16px / 3`.
- `font-family` muss der letzte angegebene Wert sein.

### Komponenten mit eingeschränkten Werten

Aus Gründen der Abwärtskompatibilität umfassen die gültigen Werte der Komponenten `font-variant` und `font-width` nicht alle Werte, die für die entsprechenden einzelnen Eigenschaften gültig sind.

Die gültigen Werte für die Komponente `font-variant` sind auf `normal` und `small-caps` beschränkt. Obwohl keine weiteren Werte unterstützt werden, setzt eine `font`-Deklaration in Kurzschreibweise alle einzelnen `font-variant-*`-Eigenschaften auf `normal` zurück, darunter {{cssxref("font-variation-settings")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-emoji")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-east-asian")}} und {{cssxref("font-variant-alternates")}}.

Die gültigen Werte für die Komponente `font-width` sind auf folgende Schlüsselwörter beschränkt: `normal`, `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`. Die einzelne Eigenschaft {{cssxref("font-width")}} unterstützt auch {{cssxref("percentage")}}-Werte, diese sind jedoch innerhalb der Kurzschreibweise nicht gültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel definiert `font` für alle {{htmlelement("p")}}-Elemente. Wir setzen `font-size` auf `12px` und `line-height` auf `14px` und trennen die Werte durch einen Schrägstrich (`/`). Die Deklaration setzt außerdem `font-family` auf `sans-serif`.

```css
p {
  font: 12px / 14px sans-serif;
}
```

```html hidden
<p>
  This is a paragraph of sans-serif text. The font-size is small, at just 12px.
  If this text wraps, the line height is pretty tight at 14px, so this may be
  difficult to read.
</p>
```

{{EmbedLiveSample('basic usage','100%', '100')}}

### Mehrere Eigenschaften

In diesem Beispiel setzen wir `font-weight` auf `bold`, `font-style` auf `italic`, `font-size` auf `large`, `line-height` auf `1.6` und `font-family` auf `serif`.

```css
p {
  font: bold italic large / 1.6 serif;
}
```

```html hidden
<p>
  In this example, we set the font weight to bold, the font style to italic, the
  font size to large, the line height to 1.6, and the font family to serif.
</p>
```

{{EmbedLiveSample('Multiple properties','100%', '100')}}

### Systemschrift

Dieses Beispiel zeigt, wie Sie mit der Eigenschaft `font` eine Systemschrift festlegen.

#### HTML

Unser HTML enthält einen Absatz ({{htmlelement("p")}}) mit einem Link ({{htmlelement("a")}}), dessen Attribut [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) einen komplizierten Wert hat. Wenn Sie den Mauszeiger über den dargestellten Link bewegen oder ihn fokussieren, sollte die Statusleiste Ihres Browsers den Wert des Attributs `href` anzeigen.

```html
<p>
  <a
    href="/%20The%20font%20should%20be%20the%20same%20
family%20and%20size%20and%20the%20text%20in%20the%20example."
    >Hover or focus this text. The font should be the same family and size and
    the text in your status bar.</a
  >
</p>
```

#### CSS

Wir geben dem Absatz dieselben Werte für `font-family`, `line-height`, `font-size` usw. wie der Statusleiste des Fensters. Anschließend setzen wir `line-height` auf `1.6`.

```css
p {
  font: status-bar;
  line-height: 1.6;
}
```

#### JavaScript

Da die URL in unserem HTML-Link kein gutes Praxisbeispiel ist, fügen wir ein Skript hinzu. Es verhindert, dass das Dokument beim Anklicken des Links zu einer nicht existierenden Seite weiterleitet.

```js
const aElem = document.querySelector("a");
aElem.addEventListener("click", (e) => {
  e.preventDefault();
  return false;
});
```

#### Ergebnis

{{EmbedLiveSample('System font','100%', '100')}}

Bewegen Sie den Mauszeiger über den Link oder fokussieren Sie ihn. Schriftfamilie und -größe sollten mit dem Text in der Statusleiste am unteren Rand Ihres Browserfensters übereinstimmen.

### Generator für Deklarationen in Kurzschreibweise

In dieser interaktiven Demonstration können Sie verschiedene Optionsfelder auswählen, um unterschiedliche Werte für die Kurzschreibweise zu erzeugen und die Auswirkungen der erstellten Deklarationen zu sehen.

```html hidden
<p>
  Change the radio buttons below to see the generated shorthand and its effect.
</p>
<form action="createShortHand()">
  <div class="cf">
    <div class="setPropCont">
      font-style<br />
      <input
        type="radio"
        id="font-style-none"
        name="font_style"
        checked
        value="" />
      <label for="font-style-none">omit value</label><br />
      <input
        type="radio"
        id="font-style-normal"
        name="font_style"
        value="normal" />
      <label for="font-style-normal">normal</label><br />
      <input
        type="radio"
        id="font-style-italic"
        name="font_style"
        value="italic" />
      <label for="font-style-italic">italic</label><br />
      <input
        type="radio"
        id="font-style-oblique"
        name="font_style"
        value="oblique" />
      <label for="font-style-oblique">oblique</label>
    </div>

    <div class="setPropCont">
      font-variant<br />
      <input
        type="radio"
        id="font-variant-none"
        name="font_variant"
        checked
        value=" " />
      <label for="font-variant-none">omit value</label><br />
      <input
        type="radio"
        id="font-variant-normal"
        name="font_variant"
        value="normal" />
      <label for="font-variant-normal">normal</label><br />
      <input
        type="radio"
        id="font-variant-small-caps"
        name="font_variant"
        value="small-caps" />
      <label for="font-variant-small-caps">small-caps</label>
    </div>

    <div class="setPropCont">
      font-weight<br />
      <input type="radio" id="font-weight-none" name="font_weight" value="" />
      <label for="font-weight-none">omit value</label><br />
      <input
        type="radio"
        id="font-weight-normal"
        checked
        name="font_weight"
        value="400" />
      <label for="font-weight-normal">normal</label><br />
      <input
        type="radio"
        id="font-weight-bold"
        name="font_weight"
        value="700" />
      <label for="font-weight-bold">bold</label>
    </div>

    <div class="setPropCont">
      font-size<br />
      <input type="radio" id="font-size-12px" name="font_size" value="12px" />
      <label for="font-size-12px">12px</label><br />
      <input
        type="radio"
        id="font-size-16px"
        name="font_size"
        value="16px"
        checked />
      <label for="font-size-16px">16px</label><br />
      <input type="radio" id="font-size-24px" name="font_size" value="24px" />
      <label for="font-size-24px">24px</label>
    </div>

    <div class="setPropCont">
      line-height<br />
      <input
        type="radio"
        id="line-height-none"
        name="line_height"
        checked
        value="" />
      <label for="line-height-none">omit value</label><br />
      <input
        type="radio"
        id="line-height-1-2"
        name="line_height"
        value="/1.2" />
      <label for="line-height-1-2">1.2</label><br />
      <input type="radio" id="line-height-3" name="line_height" value="/3" />
      <label for="line-height-3">3</label>
    </div>
    <br />

    <div class="setPropCont fontfamily">
      font-family<br />
      <input
        type="radio"
        id="font-family-courier"
        name="font_family"
        checked
        value="courier" />
      <label for="font-family-courier">courier</label><br />
      <input
        type="radio"
        id="font-family-serif"
        name="font_family"
        value="serif" />
      <label for="font-family-serif">serif</label><br />
      <input
        type="radio"
        id="font-family-sans-serif"
        name="font_family"
        value="sans-serif" />
      <label for="font-family-sans-serif">sans-serif</label><br />
      <input
        type="radio"
        id="font-family-arial"
        name="font_family"
        value="arial" />
      <label for="font-family-arial">Arial</label><br />
      <input
        type="radio"
        id="font-family-monospace"
        name="font_family"
        value="monospace" />
      <label for="font-family-monospace">monospace</label><br />
      <input
        type="radio"
        id="font-family-cursive"
        name="font_family"
        value="cursive" />
      <label for="font-family-cursive">cursive</label><br />
      <input
        type="radio"
        id="font-family-fantasy"
        name="font_family"
        value="fantasy" />
      <label for="font-family-fantasy">fantasy</label><br />
      <input
        type="radio"
        id="font-family-system-ui"
        name="font_family"
        value="system-ui" />
      <label for="font-family-system-ui">system-ui</label><br />
    </div>
  </div>

  <div class="cf propInputs">
    <div class="propInputCont tar">font :</div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_style" /><br />
      font-style <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_variant" /> <br />
      font-variant <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_font_weight" /> <br />
      font-weight <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss mandatory" id="input_font_size" /> <br />
      font-size <br />
      mandatory
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss" id="input_line_height" /> <br />
      line-height <br />
      optional
    </div>
    <div class="propInputCont">
      <input type="text" class="curCss mandatory" id="input_font_family" />
      <br />
      font-family <br />
      mandatory
    </div>
  </div>
</form>

<div class="fontShortHand">
  This is some sample text.<br />
  This is some more sample text.
</div>
```

```css hidden
body,
input {
  font: 14px "Arial";
  overflow: hidden;
}

.propInputCont {
  float: left;
  text-align: center;
  margin-right: 5px;
  width: 80px;
}

.setPropCont {
  float: left;
  margin-right: 5px;
  width: 120px;
}

.propInputs,
.setPropCont {
  margin-bottom: 1em;
}

.curCss {
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  width: 80px;
}

.mandatory {
  border-bottom-color: red;
}

.cf::before,
.cf::after {
  content: " ";
  display: table;
}

.cf::after {
  clear: both;
}

.tar {
  width: 40px;
  text-align: right;
}
.fontfamily {
  display: inline-block;
}
```

```js hidden
const textAreas = document.getElementsByClassName("curCss");

function getProperties() {
  return (
    `${getCheckedValue("font_style")} ` +
    `${getCheckedValue("font_variant")} ` +
    `${getCheckedValue("font_weight")} ` +
    `${getCheckedValue("font_size")}` +
    `${getCheckedValue("line_height")} ` +
    `${getCheckedValue("font_family")}`
  );
}

function getCheckedValue(radioName) {
  const radios = document.forms[0].elements[radioName];
  for (const radio of radios) {
    if (radio.checked) {
      const curElemName = `input_${radioName}`;
      const curElem = document.getElementById(curElemName);
      curElem.value = radio.value;

      return radio.value;
    }
  }
}

function setCss() {
  injectCss(getProperties());
}

function injectCss(cssFragment) {
  const old = document.body.getElementsByTagName("style");
  if (old.length > 1) {
    old[1].parentElement.removeChild(old[1]);
  }
  css = document.createElement("style");
  css.textContent = `.fontShortHand{font: ${cssFragment}}`;
  document.body.appendChild(css);
}

setCss();

document.querySelectorAll("input[type='radio']").forEach((el) => {
  el.addEventListener("change", setCss);
});
```

{{EmbedLiveSample('Shorthand declaration creator','100%', '500px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- [Systemschrift-Stapel](https://css-tricks.com/snippets/css/system-font-stack/) auf CSS-Tricks (2017)
