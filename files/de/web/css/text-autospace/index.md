---
title: text-autospace
slug: Web/CSS/text-autospace
l10n:
  sourceCommit: d92ee717f209ccad5d5a5705d64548e1d289f5d9
---

Die **`text-autospace`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, den Abstand zwischen chinesischen/japanischen/koreanischen (CJK) und nicht-CJK-Zeichen festzulegen.

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
  - : Erstellt das Standardverhalten, bei dem automatisch Abstände zwischen CJK- und nicht-CJK-Zeichen sowie um Satzzeichen angewendet werden. Dieser Wert hat den gleichen Effekt wie die Anwendung von sowohl [`ideograph-alpha`](#ideograph-alpha) als auch [`ideograph-numeric`](#ideograph-numeric).
- `<autospace>`
  - : Bietet mehr Kontrolle über das Abstandsverhalten. Es akzeptiert:
    - das Schlüsselwort `no-autospace`, oder
    - eine Kombination aus einem oder mehreren von `ideograph-alpha`, `ideograph-numeric` und `punctuation`, optional gefolgt von `insert` oder `replace`.
    - `no-autospace`
      - : Deaktiviert den automatischen Abstand zwischen CJK- und nicht-CJK-Zeichen.
    - `ideograph-alpha`
      - : Fügt nur Abstand zwischen ideografischen Zeichen (wie Katakana und Han) und nicht-ideografischen Buchstaben (wie Latein) hinzu. Es fügt keinen Abstand zwischen ideografischen Zeichen und nicht-ideografischen Zahlen hinzu.
    - `ideograph-numeric`
      - : Fügt nur Abstand zwischen ideografischen Zeichen (wie Katakana und Han) und nicht-ideografischen Zahlen (wie Latein) hinzu. Es fügt keinen Abstand zwischen ideografischen Zeichen und nicht-ideografischen Buchstaben hinzu.
    - `punctuation`
      - : Fügt nicht-brechende Abstände um Satzzeichen hinzu, wie es durch sprachspezifische typografische Konventionen erforderlich ist.
    - `insert`
      - : Fügt den angegebenen Abstand nur hinzu, wenn zwischen den ideografischen und nicht-ideografischen Skripten keine bestehenden Abstände vorhanden sind.
    - `replace`
      - : Ersetzt bestehende Abstände (wie {{Glossary("Whitespace", "U+0020")}}) zwischen ideografischen und nicht-ideografischen Zeichen durch den angegebenen Abstand.
- `auto`
  - : Lässt den Browser typografisch angemessene Abstände wählen. Der Abstand kann je nach Browser und Plattform variieren.

> [!NOTE]
> Wenn weder `insert` noch `replace` angegeben sind, verhält es sich wie `insert`.

> [!NOTE]
> Diese Eigenschaft ist additiv mit den Eigenschaften {{CSSXRef("word-spacing")}} und {{CSSXRef("letter-spacing")}}. Der durch die `letter-spacing`-Einstellung hinzugefügte Abstand wird zu dem durch `text-autospace` erzeugten Abstand addiert. Dasselbe gilt für `word-spacing`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Dieses Beispiel zeigt den Unterschied zwischen verschiedenen Werten von `text-autospace`. Versuchen Sie, einen Wert aus dem Dropdown-Feld auszuwählen, um zu sehen, wie er den Abstand im Text beeinflusst.

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
- [CSS Text](/de/docs/Web/CSS/CSS_text) Modul
