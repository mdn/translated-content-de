---
title: "`font` CSS-Eigenschaft"
short-title: font
slug: Web/CSS/Reference/Properties/font
l10n:
  sourceCommit: efad19be74655f7a9c78f78d81cd4fb18d551033
---

Die **`font`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) setzt alle verschiedenen Eigenschaften der Schriftart eines Elements. Alternativ stellt sie die Schriftart eines Elements auf eine Systemschriftart ein.

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
    whose soil has never been loosened or fertilised by education: they grow
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

Der Wert ist entweder eine Kurzschreibweise, die die verschiedenen schriftartbezogenen Eigenschaften spezifiziert, oder ein einzelnes `<system-font-family-name>` Schlüsselwort:

- `<'font-style'>` {{optional_inline}}
  - : Siehe die CSS-Eigenschaft {{cssxref("font-style")}}. Standardwert ist `normal`.
- `<font-variant-css2>` {{optional_inline}}
  - : Entweder der Wert `normal` oder `small-caps` der Eigenschaft {{cssxref("font-variant")}}. Standardwert ist `normal`.
- `<'font-weight'>` {{optional_inline}}
  - : Siehe die CSS-Eigenschaft {{cssxref("font-weight")}}. Standardwert ist `normal`.
- `<font-width-css3>` {{optional_inline}}
  - : Die von der CSS-Eigenschaft {{cssxref("font-width")}} unterstützten Schlüsselwörter. Standardwert ist `normal`.
- `<'font-size'>`
  - : Siehe die CSS-Eigenschaft {{cssxref("font-size")}}.
- `<'line-height'>` {{optional_inline}}
  - : Siehe die CSS-Eigenschaft {{cssxref("line-height")}}. Standardwert ist `normal`.
- `<'font-family'>`
  - : Siehe die CSS-Eigenschaft {{cssxref("font-family")}}. Muss der letzte Wert sein.

- `<system-font-family-name>`
  - : Ein einzelnes Schlüsselwort, das eine Systemschriftart repräsentiert, einschließlich:
    - `caption`
      - : Die Systemschriftart, die für beschriftete Steuerelemente (Buttons, Dropdowns etc.) verwendet wird.
    - `icon`
      - : Die Systemschriftart, die zur Beschriftung von Symbolen verwendet wird.
    - `menu`
      - : Die Systemschriftart, die in Menüs (z.B. Dropdown-Menüs oder Menüliste) verwendet wird.
    - `message-box`
      - : Die Systemschriftart, die in Dialogfeldern verwendet wird.
    - `small-caption`
      - : Die Systemschriftart, die zur Beschriftung kleiner Steuerelemente verwendet wird.
    - `status-bar`
      - : Die Systemschriftart, die in den Statusleisten von Fenstern verwendet wird.

    Es gibt mehrere nicht standardmäßige Werte, die mit Präfixen implementiert sind.

## Beschreibung

Der Wert der `font`-Eigenschaft ist entweder ein einzelnes Schlüsselwort, das einen `system-font-family-name` repräsentiert, oder mehrere ausgeschriebene Eigenschaftswerte, die verwendet werden, um alle unterschiedlichen Eigenschaften der Schriftart eines Elements zu setzen.

### Systemschriftart-Deklarationen

Wenn `font` als ein `<system-font-family-name>` Schlüsselwort angegeben wird, muss der vollständige Eigenschaftswert auf dieses einzelne, nicht case-sensitive Schlüsselwort gesetzt werden. Gültige Werte sind `caption`, `icon`, `menu`, `message-box`, `small-caption` oder `status-bar`.

Browser unterstützen auch nicht standardmäßige, vorangestellte Werte:

- Chromium implementiert `-webkit-control`, `-webkit-small-control` und `-webkit-mini-control`.
- Webkit umfasst die Chromium-Werte und fügt `-webkit-body`, `-webkit-pictograph` und `-webkit-ruby-text`, zusammen mit mehreren `-apple-system-*` vorangestellten Systemschriftart-Namen hinzu.
- Gecko implementiert `-moz-window`, `-moz-document`, `-moz-desktop`, `-moz-info`, `-moz-dialog`, `-moz-button`, `-moz-pull-down-menu`, `-moz-list` und `-moz-field`.

Die Systemschriftart oder `<system-font-family-name>` kann nur mit der `font`-Eigenschaft gesetzt werden. Durch das Definieren eines einzelnen Schlüsselwortwertes, wie `font: icon`, werden die Schriftfamilie, Größe, Gewicht, Stil usw. auf die Werte gesetzt, die der Browser für die benannte Systemschriftart definiert. Diese Werte können alle mit ausgeschriebenen Deklarationen, die _nach_ der `font`-Deklaration platziert werden, geändert werden.

Das Einbeziehen von `font`-Komponenten nach dem `<system-font-family-name>` Schlüsselwort innerhalb eines `font`-Eigenschaftswertes macht die Deklaration ungültig. Zum Beispiel ist `font: icon small` ungültig.

Wenn ein `<system-font-family-name>` Schlüsselwort irgendwo im Wert erscheint, außer als erstes Element, wird das Schlüsselwort als ein {{cssxref("ident")}} behandelt, das einen Standard-`font-family`-Namen repräsentiert. Zum Beispiel setzt die Deklaration `font: small icon` die `font-family` auf eine Schriftart namens `icon`, eine Nicht-Systemschriftart, die möglicherweise existiert oder nicht. Diese Deklaration setzt auch die `font-size` auf `small` und setzt alle anderen Bestandteile der Kurzschreibweise auf ihre Anfangswerte zurück.

### Kurzhand-Schriftdeklariationen

Wenn `font` als Kurzschrift für mehrere schriftartbezogene Eigenschaften angegeben ist, dann:

- muss es Werte für folgende Eigenschaften beinhalten:
  - {{cssxref("font-size")}}
  - {{cssxref("font-family")}}

- kann es optional Werte für folgende Eigenschaften beinhalten:
  - {{cssxref("font-style")}}
  - {{cssxref("font-variant")}}
  - {{cssxref("font-weight")}}
  - {{cssxref("font-width")}}
  - {{cssxref("line-height")}}

Wie bei jeder Kurzschreibweise, werden alle der nicht spezifizierten ausgeschriebenen Komponenteneigenschaften auf ihren Anfangswert gesetzt, möglicherweise überschreibend Werte, die zuvor mit Nicht-Kurzschreibweiseigenschaften gesetzt wurden. Außerdem setzt die Kurzschreibweise die folgenden Eigenschaften auf ihre Anfangswerte zurück. Die Kurzschreibweise kann sie nicht explizit setzen:

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

### Reihenfolge der Kurzschreibweiseigenschaften

Die Reihenfolge einiger der ausgeschriebenen Werte innerhalb der `font`-Kurzschreibweisendeklaration muss einigen Regeln folgen:

- Sowohl die `font-size`- als auch die `font-family`-Komponenten sind erforderlich (außer für [Systemschriftart-Deklarationen](#systemschriftart-deklarationen)).
- Die `font-style`, `font-variant` und `font-weight` Komponenten müssen dem `font-size` Wert vorangehen.
- Ein `line-height` kann nur enthalten sein, wenn `font-size` enthalten ist. Falls vorhanden, muss `line-height` unmittelbar auf `font-size` folgen, wobei die beiden Werte durch einen Schrägstrich (`/`) getrennt sind, z.B.: `16px / 3`.
- Die `font-family` muss der letzte spezifizierte Wert sein.

### Komponenten mit eingeschränkten Werten

Für die Rückwärtskompatibilität umfassen die gültigen Werte der `font-variant` und `font-width` Komponenten nicht alle gültigen Werte oder die ausgeschriebenen Entsprechungen.

Die gültigen Werte für die `font-variant` Komponente sind auf `normal` oder `small-caps` beschränkt. Obwohl keine anderen Werte unterstützt werden, setzt die `font`-Kurzschreibung alle ausgeschriebenen `font-variant-*` Eigenschaften auf `normal` zurück, einschließlich {{cssxref("font-variation-settings")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-emoji")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-east-asian")}}, und {{cssxref("font-variant-alternates")}}.

Die gültigen Werte für die `font-width` Komponente sind auf Schlüsselwortwerte beschränkt: `normal`, `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`. Die ausgeschriebene Eigenschaft {{cssxref("font-width")}} unterstützt auch {{cssxref("percentage")}}-Werte, aber diese sind in der Kurzschreibweise nicht zulässig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel definiert die `font` für alle {{htmlelement("p")}}-Elemente. Wir setzen die `font-size` auf `12px` und die `line-height` auf `14px`, wobei wir diese mit einem Schrägstrich (`/`) trennen. Die Deklaration setzt auch die `font-family` auf `sans-serif`.

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

In diesem Beispiel setzen wir das `font-weight` auf `bold`, den `font-style` auf `italic`, die `font-size` auf `large`, die `line-height` auf `1.6` und die `font-family` auf `serif`.

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

Dieses Beispiel demonstriert die Verwendung der `font`-Eigenschaft, um eine Systemschriftart festzulegen.

#### CSS

Wir setzen die Schriftart des Absatzes so, dass sie dieselbe `font-family`, `line-height`, `font-size` usw. hat wie die Statusleiste des Fensters, dann setzen wir die `line-height` auf `1.6`.

```css
p {
  font: status-bar;
  line-height: 1.6;
}
```

#### HTML

Unser HTML beinhaltet einen Absatz ({{htmlelement("p")}}) mit einem Link ({{htmlelement("a")}}), der einen komplizierten [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attributwert enthält. Wenn Sie den gerenderten Link überfahren oder fokussieren, sollte die Statusleiste Ihres Browsers den Wert des `href`-Attributs anzeigen.

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

Da die URL in unserem HTML-Link keine gute Praxis ist, fügen wir ein Skript hinzu, das das Dokument daran hindert, beim Klicken auf den Link zu einer nicht existierenden Seite weiterzuleiten.

```js
const aElem = document.querySelector("a");
aElem.addEventListener("click", function (e) {
  e.preventDefault();
  return false;
});
```

#### Ergebnis

{{EmbedLiveSample('System font','100%', '100')}}

Überfahren oder fokussieren Sie den Link. Die Schriftart sollte dieselbe Familie und Größe haben wie der Text in Ihrer Statusleiste unten im Browserfenster.

### Kurzschreibweisedeklarations-Ersteller

In dieser Live-Vorführung können Sie verschiedene Optionsfelder auswählen, um unterschiedliche Kurzschreibwerte zu erzeugen und gleichzeitig die Auswirkungen der von Ihnen erstellten Kurzschreibungsdeklarationen zu visualisieren.

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
- [Systemschriftenstapel](https://css-tricks.com/snippets/css/system-font-stack/) auf CSS-Tricks (2017)
