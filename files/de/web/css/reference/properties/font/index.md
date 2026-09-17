---
title: CSS-Eigenschaft `font`
short-title: font
slug: Web/CSS/Reference/Properties/font
l10n:
  sourceCommit: 3f221b9845703eb21db70cdc321f843d5c1c072b
---

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`font`** legt alle verschiedenen Eigenschaften der Schrift eines Elements fest. Alternativ legt sie die Schrift eines Elements auf eine Systemschrift fest.

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

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("font-family")}}
- {{cssxref("font-size")}}
- {{cssxref("font-width")}}
- {{cssxref("font-style")}}
- {{cssxref("font-variant")}}
- {{cssxref("font-weight")}}
- {{cssxref("line-height")}}

### Nur-zurücksetzbare Untereigenschaften

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

Der Wert ist entweder eine Kurzschreibweise, die die verschiedenen schriftbezogenen Eigenschaften angibt, oder ein einzelnes Schlüsselwort `<system-font-family-name>`:

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
  - : Ein einzelnes Schlüsselwort, das eine Systemschrift repräsentiert, darunter:
    - `caption`
      - : Die Systemschrift, die für beschriftete Steuerelemente verwendet wird (Schaltflächen, Dropdown-Menüs usw.).
    - `icon`
      - : Die Systemschrift, die zur Beschriftung von Symbolen verwendet wird.
    - `menu`
      - : Die Systemschrift, die in Menüs verwendet wird (z. B. Dropdown-Menüs und Menülisten).
    - `message-box`
      - : Die Systemschrift, die in Dialogfeldern verwendet wird.
    - `small-caption`
      - : Die Systemschrift, die zur Beschriftung kleiner Steuerelemente verwendet wird.
    - `status-bar`
      - : Die Systemschrift, die in Fensterstatusleisten verwendet wird.

    Es gibt mehrere nicht standardisierte Werte, die mit Präfixen implementiert sind.

## Beschreibung

Der Eigenschaftswert von `font` ist entweder ein einzelnes Schlüsselwort, das einen Systemschriftfamiliennamen repräsentiert, oder mehrere Langform-Eigenschaftswerte, die verwendet werden, um alle verschiedenen Eigenschaften der Schrift eines Elements festzulegen.

### Systemschrift-Deklarationen

Wenn `font` als Schlüsselwort `<system-font-family-name>` angegeben wird, muss der vollständige Eigenschaftswert auf dieses einzelne Schlüsselwort ohne Berücksichtigung der Groß- und Kleinschreibung gesetzt werden. Gültige Werte sind `caption`, `icon`, `menu`, `message-box`, `small-caption` oder `status-bar`.

Browser unterstützen auch nicht standardisierte Werte mit Präfixen:

- Chromium implementiert `-webkit-control`, `-webkit-small-control` und `-webkit-mini-control`.
- Webkit umfasst die Chromium-Werte und fügt `-webkit-body`, `-webkit-pictograph` und `-webkit-ruby-text` sowie mehrere mit `-apple-system-*` präfixierte Systemschrift-Namen hinzu.
- Gecko implementiert `-moz-window`, `-moz-document`, `-moz-desktop`, `-moz-info`, `-moz-dialog`, `-moz-button`, `-moz-pull-down-menu`, `-moz-list` und `-moz-field`.

Die Systemschrift beziehungsweise `<system-font-family-name>` kann nur mit der Eigenschaft `font` festgelegt werden. Die Definition eines einzelnen Schlüsselwortwerts wie `font: icon` legt Schriftfamilie, Schriftgröße, Schriftschnitt, Schriftstil usw. auf die Werte fest, die der Browser für die benannte Systemschrift definiert. Diese Werte können alle mit Langform-Deklarationen geändert werden, die _nach_ der `font`-Deklaration stehen.

Das Einschließen beliebiger `font`-Langformkomponenten nach dem Schlüsselwort `<system-font-family-name>` innerhalb eines Eigenschaftswerts von `font` macht die Deklaration ungültig. Beispielsweise ist `font: icon small` ungültig.

Wenn ein Schlüsselwort `<system-font-family-name>` an einer anderen Stelle im Wert als der ersten Komponente erscheint, wird das Schlüsselwort als {{cssxref("ident")}} behandelt, das einen standardmäßigen `font-family`-Namen darstellt. Beispielsweise setzt die Deklaration `font: small icon` die `font-family` auf eine Schrift namens `icon`, eine Nicht-Systemschrift, die möglicherweise existiert oder nicht. Diese Deklaration setzt außerdem `font-size` auf `small` und setzt alle anderen Komponenteneigenschaften der Kurzschreibweise auf ihre Anfangswerte zurück.

### Kurzschrift-Deklarationen für Schriftarten

Wenn `font` als Kurzschreibweise für mehrere schriftbezogene Eigenschaften angegeben wird, dann:

- muss sie Werte enthalten für:
  - {{cssxref("font-size")}}
  - {{cssxref("font-family")}}

- kann sie optional Werte enthalten für:
  - {{cssxref("font-style")}}
  - {{cssxref("font-variant")}}
  - {{cssxref("font-weight")}}
  - {{cssxref("font-width")}}
  - {{cssxref("line-height")}}

Wie bei jeder Kurzschreibweise werden alle nicht angegebenen Langform-Komponenteneigenschaften auf ihre Anfangswerte gesetzt, wodurch möglicherweise zuvor mit Nicht-Kurzschreibweise-Eigenschaften festgelegte Werte überschrieben werden. Zusätzlich setzt die Kurzschreibweise die folgenden Eigenschaften auf ihre Anfangswerte zurück. Die Kurzschreibweise kann sie nicht explizit festlegen:

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

### Reihenfolge der Kurzschreibweise-Eigenschaften

Die Reihenfolge einiger Langformwerte innerhalb der Kurzschreibweise-Deklaration `font` muss einigen Regeln folgen:

- Sowohl die Komponenten `font-size` als auch `font-family` sind erforderlich (außer bei [Systemschrift-Deklarationen](#systemschrift-deklarationen)).
- Die Komponenten `font-style`, `font-variant` und `font-weight` müssen dem Wert `font-size` vorangehen.
- Ein `line-height` kann nur einbezogen werden, wenn `font-size` einbezogen wird. Falls vorhanden, muss `line-height` unmittelbar auf `font-size` folgen, wobei die beiden Werte durch einen Schrägstrich (`/`) getrennt sind, zum Beispiel: `16px / 3`.
- `font-family` muss der zuletzt angegebene Wert sein.

### Komponenten mit eingeschränkten Werten

Aus Gründen der Abwärtskompatibilität enthalten die gültigen Werte der Komponenten `font-variant` und `font-width` nicht alle gültigen Werte oder Langform-Entsprechungen.

Die gültigen Werte für die Komponente `font-variant` sind auf `normal` oder `small-caps` beschränkt. Obwohl keine anderen Werte unterstützt werden, setzt die Kurzschreibweise-Deklaration `font` alle Langform-Eigenschaften `font-variant-*` auf `normal` zurück, einschließlich {{cssxref("font-variation-settings")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-emoji")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-east-asian")}} und {{cssxref("font-variant-alternates")}}.

Die gültigen Werte für die Komponente `font-width` sind auf Schlüsselwortwerte beschränkt: `normal`, `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`. Die Langform-Eigenschaft {{cssxref("font-width")}} unterstützt auch {{cssxref("percentage")}}-Werte, diese sind jedoch innerhalb der Kurzschreibweise nicht gültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel definiert `font` für alle {{htmlelement("p")}}-Elemente. Wir setzen `font-size` auf `12px` und `line-height` auf `14px` und trennen sie durch einen Schrägstrich (`/`). Die Deklaration setzt außerdem `font-family` auf `sans-serif`.

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

Dieses Beispiel demonstriert die Verwendung der Eigenschaft `font`, um eine Systemschrift festzulegen.

#### CSS

Wir setzen die Schrift des Absatzes auf dieselbe `font-family`, `line-height`, `font-size` usw. wie die Statusleiste des Fensters und setzen dann `line-height` auf `1.6`.

```css
p {
  font: status-bar;
  line-height: 1.6;
}
```

#### HTML

Unser HTML enthält einen Absatz ({{htmlelement("p")}}) mit einem Link ({{htmlelement("a")}}) mit einem verschachtelten Wert für das Attribut [`href`](/de/docs/Web/HTML/Reference/Elements/a#href). Wenn Sie den gerenderten Link mit der Maus überfahren oder fokussieren, sollte die Statusleiste Ihres Browsers den Wert des Attributs `href` anzeigen.

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

Da die URL in unserem HTML-Link keine gute Praxis ist, fügen wir ein Skript ein, das verhindert, dass das Dokument auf eine nicht vorhandene Seite weitergeleitet wird, wenn auf den Link geklickt wird.

```js
const aElem = document.querySelector("a");
aElem.addEventListener("click", (e) => {
  e.preventDefault();
  return false;
});
```

#### Ergebnis

{{EmbedLiveSample('System font','100%', '100')}}

Fahren Sie mit der Maus über den Link oder fokussieren Sie ihn. Die Schrift sollte dieselbe Familie und Größe haben wie der Text in Ihrer Statusleiste am unteren Rand Ihres Browserfensters.

### Generator für Kurzschreibweise-Deklarationen

In dieser Live-Demonstration können Sie verschiedene Optionsfelder auswählen, um unterschiedliche Kurzschreibweise-Werte zu generieren, während Sie die Auswirkungen der von Ihnen erstellten Kurzschreibweise-Deklarationen visualisieren.

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
- [Systemschrift-Stack](https://css-tricks.com/snippets/css/system-font-stack/) auf CSS-Tricks (2017)
