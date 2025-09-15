---
title: text-autospace
slug: Web/CSS/text-autospace
l10n:
  sourceCommit: 9036ccca6d55b90913ca424e6706b0c9ed1fa93b
---

Die **`text-autospace`**-[CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, den Abstand festzulegen, der zwischen chinesischen/japanischen/koreanischen (CJK) und nicht-CJK-Zeichen angewendet wird.

## Syntax

```css
text-autospace: normal;
text-autospace: no-autospace;
text-autospace: ideograph-alpha;
text-autospace: ideograph-numeric;
text-autospace: punctuation;
text-autospace: insert;
text-autospace: replace;
text-autospace: ideograph-alpha ideograph-numeric punctuation;
text-autospace: ideograph-alpha ideograph-numeric;
text-autospace: ideograph-alpha ideograph-numeric insert;
text-autospace: auto;

/* Global values */
text-autospace: inherit;
text-autospace: initial;
text-autospace: revert;
text-autospace: revert-layer;
text-autospace: unset;
```

### Werte

- `normal`
  - : Erstellt das Standardverhalten, um automatisch Abstände zwischen CJK- und nicht-CJK-Zeichen sowie um Satzzeichen herum anzuwenden. Dieser Wert hat denselben Effekt wie die Anwendung sowohl von [`ideograph-alpha`](#ideograph-alpha) als auch [`ideograph-numeric`](#ideograph-numeric).
- `<autospace>`
  - : Bietet mehr Kontrolle über die Abstandsverhalten. Es akzeptiert das Schlüsselwort `no-autospace` oder eine Kombination von einem oder mehreren der folgenden: `ideograph-alpha`, `ideograph-numeric` und `punctuation`, optional gefolgt von `insert` oder `replace`.
    - `no-autospace`
      - : Deaktiviert den automatischen Abstand zwischen CJK- und nicht-CJK-Zeichen.
    - `ideograph-alpha`
      - : Fügt nur Abstände zwischen ideographischen Zeichen (wie Katakana und Han) und nicht-ideographischen Buchstaben (wie Latein) hinzu. Es fügt keine Abstände zwischen ideographischen Zeichen und nicht-ideographischen Zahlen hinzu.
    - `ideograph-numeric`
      - : Fügt nur Abstände zwischen ideographischen Zeichen (wie Katakana und Han) und nicht-ideographischen Zahlen (wie Latein) hinzu. Es fügt keine Abstände zwischen ideographischen Zeichen und nicht-ideographischen Buchstaben hinzu.
    - `punctuation`
      - : Fügt nicht brechende Abstände um Satzzeichen hinzu, wie sie durch sprachspezifische typografische Konventionen erforderlich sind.
    - `insert`
      - : Fügt den angegebenen Abstand nur hinzu, wenn keine vorhandenen Abstände zwischen den ideographischen und nicht-ideographischen Schriften vorhanden sind.
    - `replace`
      - : Ersetzt bestehende Abstände (wie {{Glossary("Whitespace", "U+0020")}}) zwischen ideographischen und nicht-ideographischen Zeichen durch den angegebenen Abstand.
- `auto`
  - : Lässt den Browser typografisch passende Abstände wählen. Die Abstände können je nach Browser und Plattform variieren.

> [!NOTE]
> Wenn weder `insert` noch `replace` spezifiziert sind, verhält sich die Eigenschaft wie `insert`.

> [!NOTE]
> Diese Eigenschaft ist additiv mit den Eigenschaften {{CSSXRef("word-spacing")}} und {{CSSXRef("letter-spacing")}}. Der durch die Einstellung `letter-spacing` hinzugefügte Abstand wird zu dem durch `text-autospace` erzeugten Abstand addiert. Das Gleiche gilt für `word-spacing`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Dieses Beispiel zeigt den Unterschied zwischen verschiedenen Werten von `text-autospace`. Versuchen Sie, einen Wert aus der Dropdown-Liste auszuwählen, um zu sehen, wie er den Abstand im Text beeinflusst.

```html hidden
<form>
  <label for="autospace">Choose value for <code>text-autospace:</code></label>
  <select name="autospace" id="autospace">
    <option selected value="no-autospace">no-autospace</option>
    <option value="normal">normal</option>
    <option value="ideograph-alpha">ideograph-alpha</option>
    <option value="ideograph-numeric">ideograph-numeric</option>
  </select>
</form>
<div class="unsupported">
  <code>text-autospace</code> is not supported in your browser.
</div>
```

```html
<main>
  <figure class="no-autospace">
    <figcaption>
      <code>
        text-autospace: <span id="autospace-value">no-autospace</span>;
      </code>
    </figcaption>
    <div>
      <p>HTML超文本标记语言</p>
      <p>42四十二</p>
    </div>
  </figure>
</main>
```

```css
.no-autospace {
  text-autospace: no-autospace;
}
.auto {
  text-autospace: auto;
}
.normal {
  text-autospace: normal;
}
.ideograph-alpha {
  text-autospace: ideograph-alpha;
}
.ideograph-numeric {
  text-autospace: ideograph-numeric;
}
```

```css hidden
figure {
  margin: 1rem;
  div {
    font-size: 2rem;
    padding: 1rem;
    font-family: sans-serif;
    border: tomato solid 1px;
  }
  p {
    margin: 0;
  }
}
main {
  max-width: max-content;
}
@supports not (text-autospace: normal) {
  form {
    display: none;
  }
  .unsupported {
    color: red;
  }
}
@supports (text-autospace: normal) {
  .unsupported {
    display: none;
  }
}
```

```js hidden
const chose = document.querySelector("#autospace");
const fig = document.querySelector("figure");
const codeValue = document.querySelector("#autospace-value");
chose.addEventListener("change", (e) => {
  fig.className = e.target.value;
  codeValue.innerText = e.target.value;
});
```

{{EmbedLiveSample("Example", 200, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('text-spacing-trim')}}
- [`ic`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#local_font-relative_lengths) und [`ric`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#root_font-relative_lengths) Einheiten
- [CSS Text](/de/docs/Web/CSS/CSS_text)-Modul
