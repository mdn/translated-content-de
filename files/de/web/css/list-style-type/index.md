---
title: list-style-type
slug: Web/CSS/list-style-type
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`list-style-type`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Markierung (wie eine Scheibe, ein Zeichen oder ein benutzerdefinierter Zählerstil) eines Listenelementes fest.

{{EmbedInteractiveExample("pages/css/list-style-type.html")}}

Die Markierung übernimmt [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword), die gleiche wie die berechnete [Farbe](/de/docs/Web/CSS/color_value) des Elements, auf das sie angewendet wird.

Nur wenige Elemente ({{HTMLElement("li")}} und {{HTMLElement("summary")}}) haben einen Standardwert von `display: list-item`. Die Eigenschaft `list-style-type` kann jedoch auf jedes Element angewendet werden, dessen {{cssxref("display")}}-Wert auf `list-item` gesetzt ist. Darüber hinaus kann diese Eigenschaft, da sie vererbt wird, auf ein übergeordnetes Element (gewöhnlich {{HTMLElement("ol")}} oder {{HTMLElement("ul")}}) gesetzt werden, damit sie für alle Listeneinträge gilt.

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

Die Eigenschaft `list-style-type` kann als eines der folgenden definiert werden:

- ein `<custom-ident>` Wert,
- ein `symbols()` Wert,
- ein `<string>` Wert oder
- das Schlüsselwort `none`.

Beachten Sie, dass:

- Einige Typen eine geeignete Schriftart benötigen, um wie erwartet angezeigt zu werden.
- `cjk-ideographic` identisch mit `trad-chinese-informal` ist; es existiert aus Kompatibilitätsgründen.

### Werte

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Ein Bezeichner, der mit dem Wert eines {{cssxref("@counter-style")}} oder eines der vordefinierten Stile übereinstimmt:
- {{cssxref("symbols", "symbols()")}}
  - : Definiert einen anonymen Stil der Liste.
- {{cssxref("&lt;string&gt;")}}
  - : Der angegebene String wird als Markierung des Eintrags verwendet.
- `none`
  - : Es wird keine Markierung angezeigt.
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
  - : Dezimalzahlen, aufgefüllt mit führenden Nullen.
- `lower-roman`
  - : Kleine römische Zahlen.
- `upper-roman`
  - : Große römische Zahlen.
- `lower-greek`
  - : Kleine klassische griechische Buchstaben.
- `lower-alpha`, `lower-latin`
  - : Kleine [ASCII](/de/docs/Glossary/ASCII) Buchstaben.
- `upper-alpha`, `upper-latin`
  - : Große ASCII Buchstaben.
- `arabic-indic`, `-moz-arabic-indic`
  - : Arabisch-Indische Zahlen.
- `armenian`
  - : Traditionelle armenische Nummerierung.
- `bengali`, `-moz-bengali`
  - : Bengalische Nummerierung.
- `cambodian`/`khmer`
  - : Kambodschanische/Khmer Nummerierung.
- `cjk-earthly-branch`, `-moz-cjk-earthly-branch`
  - : Han „Irdischen Zweig“ Ordnungszahlen.
- `cjk-heavenly-stem`, `-moz-cjk-heavenly-stem`
  - : Han „Himmlischen Stamm“ Ordnungszahlen.
- `cjk-ideographic`
  - : Identisch mit `trad-chinese-informal`.
- `devanagari`, `-moz-devanagari`
  - : Devanagari Nummerierung.
- `ethiopic-numeric`
  - : Äthiopische Nummerierung.
- `georgian`
  - : Traditionelle georgische Nummerierung.
- `gujarati`, `-moz-gujarati`
  - : Gujarati Nummerierung.
- `gurmukhi`, `-moz-gurmukhi`
  - : Gurmukhi Nummerierung.
- `hebrew`
  - : Traditionelle hebräische Nummerierung.
- `hiragana`
  - : Wörterbuchreihe Hiragana Buchstabenreihenfolge.
- `hiragana-iroha`
  - : [Iroha-Reihe](https://en.wikipedia.org/wiki/Iroha) Hiragana Buchstabenreihenfolge.
- `japanese-formal`
  - : Japanische formelle Nummerierung, die in rechtlichen oder finanziellen Dokumenten verwendet wird. Die Kanjis sind so gestaltet, dass sie nicht modifiziert werden können, um wie ein anderer korrekter auszusehen.
- `japanese-informal`
  - : Japanische informelle Nummerierung.
- `kannada`, `-moz-kannada`
  - : Kannada Nummerierung.
- `katakana`
  - : Wörterbuchreihe Katakana Buchstabenreihenfolge.
- `katakana-iroha`
  - : [Iroha-Reihe](https://en.wikipedia.org/wiki/Iroha) Katakana Buchstabenreihenfolge.
- `korean-hangul-formal`
  - : Koreanische Hangul Nummerierung.
- `korean-hanja-formal`
  - : Formelle koreanische Han Nummerierung.
- `korean-hanja-informal`
  - : Koreanische Hanja Nummerierung.
- `lao`, `-moz-lao`
  - : Laotische Nummerierung.
- `lower-armenian`
  - : Kleine armenische Nummerierung.
- `malayalam`, `-moz-malayalam`
  - : Malayalam Nummerierung.
- `mongolian`
  - : Mongolische Nummerierung.
- `myanmar`, `-moz-myanmar`
  - : Myanmar (Burmesische) Nummerierung.
- `oriya`, `-moz-oriya`
  - : Oriya Nummerierung.
- `persian`, `-moz-persian`
  - : Persische Nummerierung.
- `simp-chinese-formal`
  - : Vereinfachte chinesische formelle Nummerierung.
- `simp-chinese-informal`
  - : Vereinfachte chinesische informelle Nummerierung.
- `tamil`, `-moz-tamil`
  - : Tamil Nummerierung.
- `telugu`, `-moz-telugu`
  - : Telugu Nummerierung.
- `thai`, `-moz-thai`
  - : Thailändische Nummerierung.
- `tibetan`
  - : Tibetische Nummerierung.
- `trad-chinese-formal`
  - : Traditionelle chinesische formelle Nummerierung.
- `trad-chinese-informal`
  - : Traditionelle chinesische informelle Nummerierung.
- `upper-armenian`
  - : Traditionelle große armenische Nummerierung.
- `disclosure-open`
  - : Symbol, das anzeigt, dass ein Offenlegungselement wie {{HTMLElement("details")}} geöffnet ist.
- `disclosure-closed`
  - : Symbol, das anzeigt, dass ein Offenlegungselement, wie {{HTMLElement("details")}}, geschlossen ist.

Sehen Sie sich das Beispiel [Alle Listentypen](#alle_listentypen) an, um diese Werte in Aktion zu sehen. Details zu allen verfügbaren Zählerstilen, die von verschiedenen Kulturen weltweit verwendet werden, finden Sie in [Vorgefertigte Zählerstile](https://www.w3.org/TR/predefined-counter-styles/).

### Nicht-standardisierte Erweiterungen

Einige vordefinierte Typen werden von Mozilla (Firefox) mit einem `-moz-` Präfix unterstützt.

- `ethiopic-halehame`: `-moz-ethiopic-halehame`
- `ethiopic-halehame-am`: `-moz-ethiopic-halehame-am`
- `ethiopic-halehame-ti-er`: `-moz-ethiopic-halehame-ti-er`
- `ethiopic-halehame-ti-et`: `-moz-ethiopic-halehame-ti-et`
- `ethiopic-numeric`: `-moz-ethiopic-numeric`
- `hangul`: `-moz-hangul`
- `hangul-consonant`: `-moz-hangul-consonant`
- `urdu`: `-moz-urdu`

Siehe die [Kompatibilitätstabelle](#browser-kompatibilität), um zu prüfen, welche Browser welche Erweiterung unterstützen.

## Zugänglichkeit

Safari erkennt eine geordnete oder ungeordnete Liste nicht als Liste im Zugänglichkeitsbaum, wenn sie einen `list-style-type` Wert von `none` hat. Diese Problematik kann behoben werden, indem dem Öffnungstag der Liste `role="list"` hinzugefügt wird. Um mehr über dieses Thema und mögliche Lösungen zu erfahren, siehe [`list-style`](/de/docs/Web/CSS/list-style#accessibility).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Listeneinträge mit Markierungen

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

  <label for="-moz-ethiopic-halehame">
    <input
      type="radio"
      id="-moz-ethiopic-halehame"
      name="type"
      value="-moz-ethiopic-halehame" />-moz-ethiopic-halehame
  </label>

  <label for="-moz-ethiopic-halehame-am">
    <input
      type="radio"
      id="-moz-ethiopic-halehame-am"
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

  <label for="-moz-ethiopic-halehame-ti-er">
    <input
      type="radio"
      id="-moz-ethiopic-halehame-ti-er"
      name="type"
      value="-moz-ethiopic-halehame-ti-er" />-moz-ethiopic-halehame-ti-er
  </label>

  <label for="-moz-ethiopic-halehame-ti-et">
    <input
      type="radio"
      id="-moz-ethiopic-halehame-ti-et"
      name="type"
      value="-moz-ethiopic-halehame-ti-et" />-moz-ethiopic-halehame-ti-et
  </label>

  <label for="-moz-hangul">
    <input
      type="radio"
      id="-moz-hangul"
      name="type"
      value="-moz-hangul" />-moz-hangul
  </label>

  <label for="-moz-hangul-consonant">
    <input
      type="radio"
      id="-moz-hangul-consonant"
      name="type"
      value="-moz-hangul-consonant" />-moz-hangul-consonant
  </label>

  <label for="-moz-urdu">
    <input type="radio" id="-moz-urdu" name="type" value="-moz-urdu" />-moz-urdu
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
container.addEventListener("change", (event) => {
  const list = document.querySelector("ol");
  list.setAttribute("style", `list-style-type: ${event.target.value}`);
});
```

#### Ergebnis

{{EmbedLiveSample("All_list_style_types", "600", "800")}}

Wir sind nicht auf die in dieser Seite oder der Spezifikation definierten Listentypen beschränkt. Die {{cssxref("@counter-style")}} At-Regel ermöglicht die Erstellung von [Zählern mit beliebigen Alphabeten](https://r12a.github.io/app-counters/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("list-style")}} Kurzschreibweise
- {{Cssxref("list-style-image")}} Eigenschaft
- {{Cssxref("list-style-position")}} Eigenschaft
- {{Cssxref("::marker")}} Pseudoelement
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
