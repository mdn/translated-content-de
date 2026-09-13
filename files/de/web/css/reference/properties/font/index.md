---
title: "`font` CSS-Eigenschaft"
short-title: font
slug: Web/CSS/Reference/Properties/font
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`font`** [CSS](/de/docs/Web/CSS) [Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) Eigenschaft setzt alle verschiedenen Eigenschaften der Schriftart eines Elements. Alternativ kann sie die Schriftart eines Elements auf eine Systemschriftart setzen.

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

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("font-family")}}
- {{cssxref("font-size")}}
- {{cssxref("font-width")}}
- {{cssxref("font-style")}}
- {{cssxref("font-variant")}}
- {{cssxref("font-weight")}}
- {{cssxref("line-height")}}

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

Der Wert ist entweder eine Kurzform zur Angabe der verschiedenen schriftbezogenen Eigenschaften oder ein einzelnes `<system-font-family-name>` Schlüsselwort:

- `<'font-style'>` {{optional_inline}}
  - : Siehe die {{cssxref("font-style")}} CSS-Eigenschaft. Standard ist `normal`.
- `<font-variant-css2>` {{optional_inline}}
  - : Entweder der Wert `normal` oder `small-caps` der Eigenschaft {{cssxref("font-variant")}}. Standard ist `normal`.
- `<'font-weight'>` {{optional_inline}}
  - : Siehe die {{cssxref("font-weight")}} CSS-Eigenschaft. Standard ist `normal`.
- `<font-width-css3>` {{optional_inline}}
  - : Die von der {{cssxref("font-width")}} CSS-Eigenschaft unterstützten Schlüsselwörter. Standard ist `normal`.
- `<'font-size'>`
  - : Siehe die {{cssxref("font-size")}} CSS-Eigenschaft.
- `<'line-height'>` {{optional_inline}}
  - : Siehe die {{cssxref("line-height")}} CSS-Eigenschaft. Standard ist `normal`.
- `<'font-family'>`
  - : Siehe die {{cssxref("font-family")}} CSS-Eigenschaft. Muss der letzte Wert sein.

- `<system-font-family-name>`
  - : Ein einzelnes Schlüsselwort, das eine Systemschriftart repräsentiert, einschließlich:
    - `caption`
      - : Die Systemschriftart, die für beschriftete Steuerelemente (Buttons, Dropdowns usw.) verwendet wird.
    - `icon`
      - : Die Systemschriftart zur Beschriftung von Symbolen.
    - `menu`
      - : Die Systemschriftart, die in Menüs (z.B. Dropdown-Menüs und Menüliste) verwendet wird.
    - `message-box`
      - : Die Systemschriftart, die in Dialogfeldern verwendet wird.
    - `small-caption`
      - : Die Systemschriftart für die Beschriftung kleiner Steuerelemente.
    - `status-bar`
      - : Die Systemschriftart, die in Fensterstatusleisten verwendet wird.

    Es gibt mehrere nicht standardisierte Werte, die mit Präfixen implementiert sind.

## Beschreibung

Der Wert der `font`-Eigenschaft ist entweder ein einzelnes Schlüsselwort, das einen `system-font-family-name` darstellt, oder mehrere Langform-Eigenschaftswerte, die verwendet werden, um alle verschiedenen Eigenschaften der Schriftart eines Elements festzulegen.

### Systemschriftarten-Deklarationen

Wenn `font` als `<system-font-family-name>` Schlüsselwort angegeben wird, muss der gesamte Eigenschaftswert auf dieses einzelne, nicht fallunterscheidende Schlüsselwort gesetzt sein. Gültige Werte sind `caption`, `icon`, `menu`, `message-box`, `small-caption` oder `status-bar`.

Browser unterstützen auch nicht standardisierte Werte mit Präfixen:

- Chromium implementiert `-webkit-control`, `-webkit-small-control` und `-webkit-mini-control`.
- Webkit enthält die Chromium-Werte und fügt `-webkit-body`, `-webkit-pictograph` und `-webkit-ruby-text` sowie mehrere systemschriftarten mit dem Präfix `-apple-system-*` hinzu.
- Gecko implementiert `-moz-window`, `-moz-document`, `-moz-desktop`, `-moz-info`, `-moz-dialog`, `-moz-button`, `-moz-pull-down-menu`, `-moz-list` und `-moz-field`.

Die Systemschriftart oder `<system-font-family-name>` kann nur mit der Eigenschaft `font` gesetzt werden. Wenn ein einzelnes Schlüsselwort wie `font: icon` definiert wird, legt es die Schriftfamilie, die Größe, das Gewicht, den Stil usw. auf die vom Browser definierten Werte für die benannte Systemschriftart fest. Diese Werte können alle mit Langform-Deklarationen geändert werden, die _nach_ der `font` Deklaration platziert werden.

Wenn innerhalb eines `font` Eigenschaftswertes nach dem `<system-font-family-name>` Schlüsselwort `font` Langform-Komponenten eingefügt werden, macht dies die Deklaration ungültig. Zum Beispiel ist `font: icon small` ungültig.

Erscheint ein `<system-font-family-name>` Schlüsselwort an anderer Stelle im Wert als an erster Stelle, wird das Schlüsselwort als {{cssxref("ident")}} behandelt, das einen standardmäßigen `font-family` Namen repräsentiert. Beispielsweise setzt die Deklaration `font: small icon` die `font-family` auf eine Schriftart mit dem Namen `icon`, eine Nicht-Systemschriftart, die möglicherweise nicht existiert. Diese Deklaration setzt auch die `font-size` auf `small` und setzt alle anderen Kurzform-Komponenteneigenschaften auf ihre Initialwerte zurück.

### Kurzform-Schriftdeklarationen

Wenn `font` als eine Kurzform für mehrere schriftbezogene Eigenschaften angegeben wird, dann:

- muss es Werte einschließen für:
  - {{cssxref("font-size")}}
  - {{cssxref("font-family")}}

- kann es optional Werte einschließen für:
  - {{cssxref("font-style")}}
  - {{cssxref("font-variant")}}
  - {{cssxref("font-weight")}}
  - {{cssxref("font-width")}}
  - {{cssxref("line-height")}}

Wie bei jeder Kurzformeigenschaft werden alle Langform-Komponenteneigenschaften, die nicht spezifiziert sind, auf ihre Initialwerte gesetzt, möglicherweise überschreiben sie Werte, die zuvor mit Nicht-Kurzform-Eigenschaften gesetzt wurden. Zusätzlich setzt die Kurzform folgende Eigenschaften auf ihre Initialwerte zurück. Die Kurzform kann sie nicht explizit festlegen:

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

### Reihenfolge der Kurzform-Eigenschaften

Die Reihenfolge einiger Langform-Werte innerhalb der Kurzform `font` Deklaration muss einige Regeln befolgen:

- Sowohl die `font-size` als auch die `font-family` Komponenten sind erforderlich (außer bei [Systemschriftarten-Deklarationen](#systemschriftarten-deklarationen)).
- Die `font-style`, `font-variant` und `font-weight` Komponenten müssen der `font-size` Wert vorausgehen.
- Eine `line-height` kann nur eingeschlossen werden, wenn `font-size` eingeschlossen wird. Wenn vorhanden, muss die `line-height` unmittelbar der `font-size` folgen, wobei die beiden Werte durch einen Schrägstrich (`/`) getrennt sein müssen, zum Beispiel: `16px / 3`.
- Die `font-family` muss der letzte spezifizierte Wert sein.

### Komponenten mit eingeschränkten Werten

Für die Rückwärtskompatibilität beinhalten die gültigen Werte der `font-variant` und `font-width` Komponente nicht alle gültigen Werte oder die Langform-Äquivalente.

Die gültigen Werte für die `font-variant` Komponente sind auf `normal` oder `small-caps` beschränkt. Obwohl keine anderen Werte unterstützt werden, setzt die Kurzform-Deklaration `font` alle `font-variant-*` Langform-Eigenschaften auf `normal` zurück, einschließlich {{cssxref("font-variation-settings")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-emoji")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-east-asian")}}, und {{cssxref("font-variant-alternates")}}.

Die gültigen Werte für die `font-width` Komponente beschränken sich auf Schlüsselwortwerte: `normal`, `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`. Die {{cssxref("font-width")}} Langform-Eigenschaft unterstützt auch {{cssxref("percentage")}} Werte, aber diese sind nicht innerhalb der Kurzform gültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel definiert die `font` für alle {{htmlelement("p")}} Elemente. Wir setzen die `font-size` auf `12px` und die `line-height` auf `14px`, getrennt durch einen Schrägstrich (`/`). Die Deklaration setzt auch die `font-family` auf `sans-serif`.

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

In diesem Beispiel setzen wir die `font-weight` auf `bold`, die `font-style` auf `italic`, die `font-size` auf `large`, die `line-height` auf `1.6` und die `font-family` auf `serif`.

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

### Systemschriftart

Dieses Beispiel demonstriert die Verwendung der `font` Eigenschaft, um eine Systemschriftart zu setzen.

#### CSS

Wir setzen die Schrift der Absätze so, dass sie dieselbe `font-family`, `line-height`, `font-size`, usw. hat wie die Statusleiste des Fensters, dann setzen wir die `line-height` auf `1.6`.

```css
p {
  font: status-bar;
  line-height: 1.6;
}
```

#### HTML

Unser HTML enthält einen Absatz ({{htmlelement("p")}}), der einen Link ({{htmlelement("a")}}) mit einem verworrenen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) Attributwert enthält. Wenn Sie den gerenderten Link schweben oder fokussieren, sollte die Statusleiste Ihres Browsers den Wert des `href` Attributs anzeigen.

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

#### JavaScript

Da die URL in unserem HTML-Link keine gute Praxis ist, fügen wir ein Skript hinzu, das verhindert, dass das Dokument beim Klicken auf den Link auf eine nicht existierende Seite weiterleitet.

```js
const aElem = document.querySelector("a");
aElem.addEventListener("click", (e) => {
  e.preventDefault();
  return false;
});
```

#### Ergebnis

{{EmbedLiveSample('System font','100%', '100')}}

Schweben oder fokussieren Sie den Link. Die Schrift sollte dieselbe Familie und Größe haben wie der Text in Ihrer Statusleiste am unteren Rand Ihres Browserfensters.

### Kurzform-Deklaration-Ersteller

In dieser Live-Demonstration können Sie verschiedene Optionsfelder auswählen, um unterschiedliche Kurzform-Werte zu erzeugen und dabei die Auswirkungen der von Ihnen erstellten Kurzform-Deklarationen zu visualisieren.

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
- [System font stack](https://css-tricks.com/snippets/css/system-font-stack/) auf CSS-Tricks (2017)
