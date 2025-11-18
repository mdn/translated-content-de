---
title: list-style-type
slug: Web/CSS/Reference/Properties/list-style-type
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

Die **`list-style-type`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Markierungssymbol (wie eine Scheibe, ein Zeichen oder ein benutzerdefinierter Zählerstil) eines Listenelements fest.

{{InteractiveExample("CSS Demo: list-style-type")}}

```css interactive-example-choice
list-style-type: space-counter;
```

```css interactive-example-choice
list-style-type: disc;
```

```css interactive-example-choice
list-style-type: circle;
```

```css interactive-example-choice
list-style-type: "\1F44D";
```

```html interactive-example
<section class="default-example" id="default-example">
  <div>
    <p>NASA Notable Missions</p>
    <ul class="transition-all unhighlighted" id="example-element">
      <li>Apollo</li>
      <li>Hubble</li>
      <li>Chandra</li>
      <li>Cassini-Huygens</li>
    </ul>
  </div>
  <hr />
  <div class="note">
    <p>
      <code>space-counter</code> is defined with
      <a
        href="//developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@counter-style"
        target="_parent"
        ><code>@counter-style</code></a
      >
    </p>
  </div>
</section>
```

```css interactive-example
.default-example {
  font-size: 1.2rem;
}

#example-element {
  width: 100%;
  background: #be094b;
  color: white;
}

section {
  text-align: left;
  flex-direction: column;
}

hr {
  width: 50%;
  color: lightgray;
  margin: 0.5em;
}

.note {
  font-size: 0.8rem;
}

.note a {
  color: #009e5f;
}

@counter-style space-counter {
  symbols: "\1F680" "\1F6F8" "\1F6F0" "\1F52D";
  suffix: " ";
}
```

Das Markierungssymbol wird [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) sein, also dieselbe berechnete [Farbe](/de/docs/Web/CSS/Reference/Values/color_value) des Elements, auf das es angewendet wird.

Nur wenige Elemente ({{HTMLElement("li")}} und {{HTMLElement("summary")}}) haben einen Standardwert von `display: list-item`. Die `list-style-type` Eigenschaft kann jedoch auf jedes Element angewendet werden, dessen {{cssxref("display")}} Wert auf `list-item` gesetzt ist. Darüber hinaus kann diese Eigenschaft, da sie vererbt wird, auf einem Elternelement (häufig {{HTMLElement("ol")}} oder {{HTMLElement("ul")}}) gesetzt werden, damit sie auf alle Listenelemente angewendet wird.

## Syntax

```css
/* Partial list of types */
list-style-type: disc;
list-style-type: circle;
list-style-type: square;
list-style-type: decimal;
list-style-type: georgian;
list-style-type: trad-chinese-informal;
list-style-type: kannada;

/* <string> value */
list-style-type: "-";

/* Identifier matching an @counter-style rule */
list-style-type: custom-counter-style;

/* Keyword value */
list-style-type: none;

/* Global values */
list-style-type: inherit;
list-style-type: initial;
list-style-type: revert;
list-style-type: revert-layer;
list-style-type: unset;
```

Die `list-style-type` Eigenschaft kann definiert werden als:

- ein `<custom-ident>` Wert,
- ein `symbols()` Wert,
- ein `<string>` Wert, oder
- das Schlüsselwort `none`.

Beachten Sie, dass:

- Einige Typen eine geeignete installierte Schriftart erfordern, um wie erwartet angezeigt zu werden.
- Der Typ `cjk-ideographic` ist identisch mit `trad-chinese-informal`; er existiert aus Kompatibilitätsgründen.

### Werte

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Ein Bezeichner, der dem Wert eines {{cssxref("@counter-style")}} oder einem der vordefinierten Stile entspricht:
- {{cssxref("symbols", "symbols()")}}
  - : Definiert einen anonymen Stil der Liste.
- {{cssxref("&lt;string&gt;")}}
  - : Der angegebene String wird als Markierungssymbol des Elements verwendet.
- `none`
  - : Es wird kein Markierungssymbol angezeigt.
- `disc`
  - : Ein ausgefüllter Kreis (Standardwert).
- `circle`
  - : Ein hohler Kreis.
- `square`
  - : Ein ausgefülltes Quadrat.
- `decimal`
  - : Dezimalzahlen, beginnend mit 1.
- `cjk-decimal`
  - : Han-Dezimalzahlen.
- `decimal-leading-zero`
  - : Dezimalzahlen, mit führenden Nullen gepolstert.
- `lower-roman`
  - : Kleinbuchstaben römische Zahlen.
- `upper-roman`
  - : Großbuchstaben römische Zahlen.
- `lower-greek`
  - : Kleinbuchstaben klassisches Griechisch.
- `lower-alpha`, `lower-latin`
  - : Kleinbuchstaben {{Glossary("ASCII", "ASCII")}} Buchstaben.
- `upper-alpha`, `upper-latin`
  - : Großbuchstaben ASCII Buchstaben.
- `arabic-indic`, `-moz-arabic-indic`
  - : Arabisch-Indische Zahlen.
- `armenian`
  - : Traditionelle armenische Nummerierung.
- `bengali`, `-moz-bengali`
  - : Bengalische Nummerierung.
- `cambodian`/`khmer`
  - : Kambodschanische/Khmer Nummerierung.
- `cjk-earthly-branch`, `-moz-cjk-earthly-branch`
  - : Han "Earthly Branch" Ordnungszahlen.
- `cjk-heavenly-stem`, `-moz-cjk-heavenly-stem`
  - : Han "Heavenly Stem" Ordnungszahlen.
- `cjk-ideographic`
  - : Identisch mit `trad-chinese-informal`.
- `devanagari`, `-moz-devanagari`
  - : Devanagari-Nummerierung.
- `ethiopic-numeric`
  - : Äthiopische Nummerierung.
- `georgian`
  - : Traditionelle georgische Nummerierung.
- `gujarati`, `-moz-gujarati`
  - : Gujarati-Nummerierung.
- `gurmukhi`, `-moz-gurmukhi`
  - : Gurmukhi-Nummerierung.
- `hebrew`
  - : Traditionelle hebräische Nummerierung.
- `hiragana`
  - : Wörterbuch-Reihenfolge Hiragana Buchstaben.
- `hiragana-iroha`
  - : [Iroha-Reihenfolge](https://en.wikipedia.org/wiki/Iroha) Hiragana Buchstaben.
- `japanese-formal`
  - : Japanische formelle Nummerierung, die in gesetzlichen oder finanziellen Dokumenten verwendet wird. Die Kanjis sind so gestaltet, dass sie nicht verändert werden können, um wie ein anderer korrekter auszusehen.
- `japanese-informal`
  - : Japanische informelle Nummerierung.
- `kannada`, `-moz-kannada`
  - : Kannada-Nummerierung.
- `katakana`
  - : Wörterbuch-Reihenfolge Katakana Buchstaben.
- `katakana-iroha`
  - : [Iroha-Reihenfolge](https://en.wikipedia.org/wiki/Iroha) Katakana Buchstaben.
- `korean-hangul-formal`
  - : Koreanische Hangul Nummerierung.
- `korean-hanja-formal`
  - : Formelle koreanische Han-Nummerierung.
- `korean-hanja-informal`
  - : Koreanische Hanja-Nummerierung.
- `lao`, `-moz-lao`
  - : Laotische Nummerierung.
- `lower-armenian`
  - : Kleinbuchstaben Armenische Nummerierung.
- `malayalam`, `-moz-malayalam`
  - : Malayalam-Nummerierung.
- `mongolian`
  - : Mongolische Nummerierung.
- `myanmar`, `-moz-myanmar`
  - : Myanmar (Burmesische) Nummerierung.
- `oriya`, `-moz-oriya`
  - : Oriya-Nummerierung.
- `persian`, `-moz-persian`
  - : Persische Nummerierung.
- `simp-chinese-formal`
  - : Vereinfachte chinesische formelle Nummerierung.
- `simp-chinese-informal`
  - : Vereinfachte chinesische informelle Nummerierung.
- `tamil`, `-moz-tamil`
  - : Tamilische Nummerierung.
- `telugu`, `-moz-telugu`
  - : Telugu-Nummerierung.
- `thai`, `-moz-thai`
  - : Thailändische Nummerierung.
- `tibetan`
  - : Tibetische Nummerierung.
- `trad-chinese-formal`
  - : Traditionelle chinesische formelle Nummerierung.
- `trad-chinese-informal`
  - : Traditionelle chinesische informelle Nummerierung.
- `upper-armenian`
  - : Traditionelle Großbuchstaben Armenische Nummerierung.
- `disclosure-open`
  - : Symbol, das anzeigt, dass ein Ausklapp-Widget wie {{HTMLElement("details")}} geöffnet ist.
- `disclosure-closed`
  - : Symbol, das anzeigt, dass ein Ausklapp-Widget wie {{HTMLElement("details")}} geschlossen ist.

Schauen Sie sich das Beispiel [Alle Listentypen](#alle_listentypen) an, um die oben genannten Werte in Aktion zu sehen. Details zu allen verfügbaren Zählerstilen, die in verschiedenen Kulturen auf der ganzen Welt verwendet werden, finden Sie in [Vorgefertigte Zählerstile](https://w3c.github.io/predefined-counter-styles/).

### Nicht-standardmäßige Erweiterungen

Einige vordefinierte Typen werden von Mozilla (Firefox) mit einem `-moz-` Präfix unterstützt.

- `ethiopic-halehame`: `-moz-ethiopic-halehame`
- `ethiopic-halehame-am`: `-moz-ethiopic-halehame-am`
- `ethiopic-halehame-ti-er`: `-moz-ethiopic-halehame-ti-er`
- `ethiopic-halehame-ti-et`: `-moz-ethiopic-halehame-ti-et`
- `ethiopic-numeric`: `-moz-ethiopic-numeric`
- `hangul`: `-moz-hangul`
- `hangul-consonant`: `-moz-hangul-consonant`
- `urdu`: `-moz-urdu`

Sehen Sie sich die [Kompatibilitätstabelle](#browser-kompatibilität) an, um zu prüfen, welche Browser welche Erweiterung unterstützen.

## Barrierefreiheit

Safari wird eine geordnete oder ungeordnete Liste nicht als Liste im Barrierefreiheitsbaum erkennen, wenn sie einen `list-style-type` Wert von `none` hat. Dies kann gelöst werden, indem `role="list"` zum Eröffnungs-Tag der Liste hinzugefügt wird. Um mehr darüber und mögliche Lösungen zu erfahren, siehe [`list-style`](/de/docs/Web/CSS/Reference/Properties/list-style#accessibility).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Listenelement-Markierungen festlegen

#### HTML

```html
List 1
<ol class="normal">
  <li>Hello</li>
  <li>World</li>
  <li>What's up?</li>
</ol>

List 2
<ol class="shortcut">
  <li>Looks</li>
  <li>Like</li>
  <li>The</li>
  <li>Same</li>
</ol>
```

#### CSS

```css
ol.normal {
  list-style-type: upper-alpha;
}

/* or use the shortcut "list-style": */
ol.shortcut {
  list-style: upper-alpha;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_list_item_markers","200","300")}}

### Alle Listentypen

#### HTML

```html
<ol>
  <li>Apollo</li>
  <li>Hubble</li>
  <li>Chandra</li>
  <li>Cassini-Huygens</li>
  <li>Spitzer</li>
</ol>

<h2>Choose a list style type:</h2>

<div class="container">
  <label for="disc">
    <input type="radio" id="disc" name="type" value="disc" />disc
  </label>

  <label for="circle">
    <input type="radio" id="circle" name="type" value="circle" />circle
  </label>

  <label for="square">
    <input type="radio" id="square" name="type" value="square" />square
  </label>

  <label for="decimal">
    <input type="radio" id="decimal" name="type" value="decimal" />decimal
  </label>

  <label for="cjk-decimal">
    <input
      type="radio"
      id="cjk-decimal"
      name="type"
      value="cjk-decimal" />cjk-decimal
  </label>

  <label for="decimal-leading-zero">
    <input
      type="radio"
      id="decimal-leading-zero"
      name="type"
      value="decimal-leading-zero" />decimal-leading-zero
  </label>

  <label for="lower-roman">
    <input
      type="radio"
      id="lower-roman"
      name="type"
      value="lower-roman" />lower-roman
  </label>

  <label for="upper-roman">
    <input
      type="radio"
      id="upper-roman"
      name="type"
      value="upper-roman" />upper-roman
  </label>

  <label for="lower-greek">
    <input
      type="radio"
      id="lower-greek"
      name="type"
      value="lower-greek" />lower-greek
  </label>

  <label for="lower-alpha">
    <input
      type="radio"
      id="lower-alpha"
      name="type"
      value="lower-alpha" />lower-alpha, lower-latin
  </label>

  <label for="upper-alpha">
    <input
      type="radio"
      id="upper-alpha"
      name="type"
      value="upper-alpha" />upper-alpha, upper-latin
  </label>

  <label for="arabic-indic">
    <input
      type="radio"
      id="arabic-indic"
      name="type"
      value="arabic-indic" />arabic-indic
  </label>

  <label for="armenian">
    <input type="radio" id="armenian" name="type" value="armenian" />armenian
  </label>

  <label for="bengali">
    <input type="radio" id="bengali" name="type" value="bengali" />bengali
  </label>

  <label for="cambodian">
    <input type="radio" id="cambodian" name="type" value="cambodian" />cambodian
  </label>

  <label for="cjk-earthly-branch">
    <input
      type="radio"
      id="cjk-earthly-branch"
      name="type"
      value="cjk-earthly-branch" />cjk-earthly-branch
  </label>

  <label for="cjk-heavenly-stem">
    <input
      type="radio"
      id="cjk-heavenly-stem"
      name="type"
      value="cjk-heavenly-stem" />cjk-heavenly-stem
  </label>

  <label for="cjk-ideographic">
    <input
      type="radio"
      id="cjk-ideographic"
      name="type"
      value="cjk-ideographic" />cjk-ideographic
  </label>

  <label for="devanagari">
    <input
      type="radio"
      id="devanagari"
      name="type"
      value="devanagari" />devanagari
  </label>

  <label for="ethiopic-numeric">
    <input
      type="radio"
      id="ethiopic-numeric"
      name="type"
      value="ethiopic-numeric" />ethiopic-numeric
  </label>

  <label for="georgian">
    <input type="radio" id="georgian" name="type" value="georgian" />georgian
  </label>

  <label for="gujarati">
    <input type="radio" id="gujarati" name="type" value="gujarati" />gujarati
  </label>

  <label for="gurmukhi">
    <input type="radio" id="gurmukhi" name="type" value="gurmukhi" />gurmukhi
  </label>

  <label for="hebrew">
    <input type="radio" id="hebrew" name="type" value="hebrew" />hebrew
  </label>

  <label for="hiragana">
    <input type="radio" id="hiragana" name="type" value="hiragana" />hiragana
  </label>

  <label for="hiragana-iroha">
    <input
      type="radio"
      id="hiragana-iroha"
      name="type"
      value="hiragana-iroha" />hiragana-iroha
  </label>

  <label for="japanese-formal">
    <input
      type="radio"
      id="japanese-formal"
      name="type"
      value="japanese-formal" />japanese-formal
  </label>

  <label for="japanese-informal">
    <input
      type="radio"
      id="japanese-informal"
      name="type"
      value="japanese-informal" />japanese-informal
  </label>

  <label for="kannada">
    <input type="radio" id="kannada" name="type" value="kannada" />kannada
  </label>

  <label for="katakana">
    <input type="radio" id="katakana" name="type" value="katakana" />katakana
  </label>

  <label for="katakana-iroha">
    <input
      type="radio"
      id="katakana-iroha"
      name="type"
      value="katakana-iroha" />katakana-iroha
  </label>

  <label for="khmer">
    <input type="radio" id="khmer" name="type" value="khmer" />khmer
  </label>

  <label for="korean-hangul-formal">
    <input
      type="radio"
      id="korean-hangul-formal"
      name="type"
      value="korean-hangul-formal" />korean-hangul-formal
  </label>

  <label for="korean-hanja-formal">
    <input
      type="radio"
      id="korean-hanja-formal"
      name="type"
      value="korean-hanja-formal" />korean-hanja-formal
  </label>

  <label for="korean-hanja-informal">
    <input
      type="radio"
      id="korean-hanja-informal"
      name="type"
      value="korean-hanja-informal" />korean-hanja-informal
  </label>

  <label for="lao">
    <input type="radio" id="lao" name="type" value="lao" />lao
  </label>

  <label for="lower-armenian">
    <input
      type="radio"
      id="lower-armenian"
      name="type"
      value="lower-armenian" />lower-armenian
  </label>

  <label for="malayalam">
    <input type="radio" id="malayalam" name="type" value="malayalam" />malayalam
  </label>

  <label for="mongolian">
    <input type="radio" id="mongolian" name="type" value="mongolian" />mongolian
  </label>

  <label for="myanmar">
    <input type="radio" id="myanmar" name="type" value="myanmar" />myanmar
  </label>

  <label for="oriya">
    <input type="radio" id="oriya" name="type" value="oriya" />oriya
  </label>

  <label for="persian">
    <input type="radio" id="persian" name="type" value="persian" />persian
  </label>

  <label for="simp-chinese-formal">
    <input
      type="radio"
      id="simp-chinese-formal"
      name="type"
      value="simp-chinese-formal" />simp-chinese-formal
  </label>

  <label for="simp-chinese-informal">
    <input
      type="radio"
      id="simp-chinese-informal"
      name="type"
      value="simp-chinese-informal" />simp-chinese-informal
  </label>

  <label for="tamil">
    <input type="radio" id="tamil" name="type" value="tamil" />tamil
  </label>

  <label for="telugu">
    <input type="radio" id="telugu" name="type" value="telugu" />telugu
  </label>

  <label for="thai">
    <input type="radio" id="thai" name="type" value="thai" />thai
  </label>

  <label for="tibetan">
    <input type="radio" id="tibetan" name="type" value="tibetan" />tibetan
  </label>

  <label for="trad-chinese-formal">
    <input
      type="radio"
      id="trad-chinese-formal"
      name="type"
      value="trad-chinese-formal" />trad-chinese-formal
  </label>

  <label for="trad-chinese-informal">
    <input
      type="radio"
      id="trad-chinese-informal"
      name="type"
      value="trad-chinese-informal" />trad-chinese-informal
  </label>

  <label for="upper-armenian">
    <input
      type="radio"
      id="upper-armenian"
      name="type"
      value="upper-armenian" />upper-armenian
  </label>

  <label for="disclosure-open">
    <input
      type="radio"
      id="disclosure-open"
      name="type"
      value="disclosure-open" />disclosure-open
  </label>

  <label for="disclosure-closed">
    <input
      type="radio"
      id="disclosure-closed"
      name="type"
      value="disclosure-closed" />disclosure-closed
  </label>

  <label for="moz-ethiopic-halehame">
    <input
      type="radio"
      id="moz-ethiopic-halehame"
      name="type"
      value="-moz-ethiopic-halehame" />-moz-ethiopic-halehame
  </label>

  <label for="moz-ethiopic-halehame-am">
    <input
      type="radio"
      id="moz-ethiopic-halehame-am"
      name="type"
      value="-moz-ethiopic-halehame-am" />-moz-ethiopic-halehame-am
  </label>

  <label for="ethiopic-halehame-ti-er">
    <input
      type="radio"
      id="ethiopic-halehame-ti-er"
      name="type"
      value="ethiopic-halehame-ti-er" />ethiopic-halehame-ti-er
  </label>

  <label for="ethiopic-halehame-ti-et">
    <input
      type="radio"
      id="ethiopic-halehame-ti-et"
      name="type"
      value="ethiopic-halehame-ti-et" />ethiopic-halehame-ti-et
  </label>

  <label for="hangul">
    <input type="radio" id="hangul" name="type" value="hangul" />hangul
  </label>

  <label for="hangul-consonant">
    <input
      type="radio"
      id="hangul-consonant"
      name="type"
      value="hangul-consonant" />hangul-consonant
  </label>

  <label for="urdu">
    <input type="radio" id="urdu" name="type" value="urdu" />urdu
  </label>

  <label for="moz-ethiopic-halehame-ti-er">
    <input
      type="radio"
      id="moz-ethiopic-halehame-ti-er"
      name="type"
      value="-moz-ethiopic-halehame-ti-er" />-moz-ethiopic-halehame-ti-er
  </label>

  <label for="moz-ethiopic-halehame-ti-et">
    <input
      type="radio"
      id="moz-ethiopic-halehame-ti-et"
      name="type"
      value="-moz-ethiopic-halehame-ti-et" />-moz-ethiopic-halehame-ti-et
  </label>

  <label for="moz-hangul">
    <input
      type="radio"
      id="moz-hangul"
      name="type"
      value="-moz-hangul" />-moz-hangul
  </label>

  <label for="moz-hangul-consonant">
    <input
      type="radio"
      id="moz-hangul-consonant"
      name="type"
      value="-moz-hangul-consonant" />-moz-hangul-consonant
  </label>

  <label for="moz-urdu">
    <input type="radio" id="moz-urdu" name="type" value="-moz-urdu" />-moz-urdu
  </label>
</div>
```

#### CSS

```css
ol {
  font-size: 1.2rem;
}

.container {
  column-count: 3;
}

label {
  display: block;
}

input {
  margin: 0.4rem;
}
```

#### JavaScript

```js
const container = document.querySelector(".container");
const list = document.querySelector("ol");

container.addEventListener("change", (event) => {
  list.setAttribute("style", `list-style-type: ${event.target.value}`);
});
```

#### Ergebnis

{{EmbedLiveSample("All_list_style_types", "600", "800")}}

Wir sind nicht auf die auf dieser Seite oder in der Spezifikation definierten Listentypen beschränkt. Die {{cssxref("@counter-style")}} At-Regel ermöglicht die Erstellung von [Zählern mit jedem Alphabet](https://r12a.github.io/app-counters/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("list-style")}} Kurzschreibweise
- {{Cssxref("list-style-image")}} Eigenschaft
- {{Cssxref("list-style-position")}} Eigenschaft
- {{Cssxref("::marker")}} Pseudo-Element
- [Leitfaden zu CSS-Listen und Zählern](/de/docs/Web/CSS/Guides/Lists) Modul
- [Leitfaden zu CSS-Zählerstilen](/de/docs/Web/CSS/Guides/Counter_styles) Modul
