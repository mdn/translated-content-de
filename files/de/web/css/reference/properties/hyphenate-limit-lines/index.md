---
title: "`hyphenate-limit-lines` CSS property"
short-title: hyphenate-limit-lines
slug: Web/CSS/Reference/Properties/hyphenate-limit-lines
l10n:
  sourceCommit: 2f5d0e19eb706f36f837b84855f581f4bd087d15
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`hyphenate-limit-lines`** legt fest, wie viele aufeinanderfolgende Zeilen in einem Element höchstens mit einem getrennten Wort enden dürfen.

{{InteractiveExample("CSS Demo: hyphenate-limit-lines")}}

```css interactive-example-choice
hyphenate-limit-lines: no-limit;
```

```css interactive-example-choice
hyphenate-limit-lines: 2;
```

```css interactive-example-choice
hyphenate-limit-lines: 1;
```

```css interactive-example-choice
hyphenate-limit-lines: 0;
```

```html interactive-example
<section id="default-example">
  <p id="example-element" lang="en">
    The word supercalifragilisticexpialidocious is a mouthful of nonsensical
    syllables.
  </p>
</section>
```

```css interactive-example
#example-element {
  border: 2px dashed #aaa;
  font-size: 1.5rem;
  text-align: left;
  width: 11rem;
  hyphens: auto;
}
```

## Syntax

```css
/* Keyword value */
hyphenate-limit-lines: no-limit;

/* <integer> values */
hyphenate-limit-lines: 2;
hyphenate-limit-lines: 1;
hyphenate-limit-lines: 0;

/* Global values */
hyphenate-limit-lines: inherit;
hyphenate-limit-lines: initial;
hyphenate-limit-lines: revert;
hyphenate-limit-lines: revert-layer;
hyphenate-limit-lines: unset;
```

### Werte

Die Eigenschaft erhält einen einzelnen Wert aus der folgenden Liste:

- `no-limit`
  - : Die Anzahl aufeinanderfolgender Zeilen, die mit einem getrennten Wort enden, ist nicht begrenzt. Dies ist der Standardwert.
- {{cssxref("integer")}}
  - : Eine nicht negative Ganzzahl (`0` oder größer), die angibt, wie viele aufeinanderfolgende Zeilen höchstens mit einem getrennten Wort enden dürfen.

## Beschreibung

Mit der Eigenschaft `hyphenate-limit-lines` können Sie begrenzen, wie viele Zeilen hintereinander mit einem getrennten Wort enden dürfen. Bei schmalem Text oder Blocksatz muss der Browser möglicherweise Wörter in mehreren aufeinanderfolgenden Zeilen [trennen](/de/docs/Web/CSS/Reference/Properties/hyphens). Viele typografische Stilrichtlinien halten eine lange Folge solcher Zeilen für ablenkend und schwer lesbar und empfehlen, sie auf zwei oder drei Zeilen zu begrenzen.

Der Wert `<integer>` gibt an, wie viele aufeinanderfolgende Zeilen höchstens mit einem getrennten Wort enden dürfen. Ein Wert von `2` erlaubt beispielsweise höchstens zwei solcher Zeilen hintereinander. Ein Wert von `0` verhindert, dass eine Zeile mit einem getrennten Wort endet, und deaktiviert damit praktisch die Silbentrennung. Negative Werte sind ungültig.

Sobald die angegebene Anzahl aufeinanderfolgender Zeilen mit einem getrennten Wort endet, trennt der Browser in der nächsten Zeile kein Wort. Stattdessen bricht er die Zeile an einer regulären Umbruchmöglichkeit um, etwa an einem Leerzeichen zwischen Wörtern. Wenn die Zeile vorher voll ist, kann der Text überlaufen. Nach einer Zeile ohne getrenntes Wort beginnt die Zählung erneut.

Die Eigenschaft wirkt sich nur aus, wenn die Silbentrennung aktiviert ist, beispielsweise durch {{cssxref("hyphens", "hyphens: auto")}} oder durch bedingte Trennstriche (`&shy;`) im Text bei `hyphens: manual`.

Wenn {{cssxref("overflow-wrap")}} auf `break-word` oder `anywhere` gesetzt ist, kann ein Wort, das nicht in eine Zeile passt, weiterhin umgebrochen werden, um ein Überlaufen zu verhindern – auch wenn der Grenzwert von `hyphenate-limit-lines` bereits erreicht ist. In diesem Fall kann der Browser das Wort ohne Bindestrich umbrechen oder den Grenzwert ignorieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aufeinanderfolgende Zeilen mit getrennten Wörtern begrenzen

Dieses Beispiel zeigt, wie sich mit der Eigenschaft `hyphenate-limit-lines` die Anzahl aufeinanderfolgender Zeilen begrenzen lässt, die mit einem getrennten Wort enden.

#### HTML

Wir verwenden zwei Boxen mit demselben Text, der ein sehr langes Wort enthält.

```html
<div class="container">
  <p class="no-limit" lang="en">
    The word pneumonoultramicroscopicsilicovolcanoconiosis names a lung disease.
  </p>
  <p class="limit-1" lang="en">
    The word pneumonoultramicroscopicsilicovolcanoconiosis names a lung disease.
  </p>
</div>
```

#### CSS

Wir legen einige grundlegende Stile fest und begrenzen unter anderem die Breite auf `10em`. Das ist zu schmal für unser langes Wort. Für beide Boxen setzen wir `hyphens: auto`. Im schmalen Container wird das lange Wort dadurch standardmäßig über drei Zeilen umgebrochen. Anschließend setzen wir `hyphenate-limit-lines` für eine Box ausdrücklich auf den Standardwert `no-limit` und für die andere auf `1`. Damit darf nur eine Zeile hintereinander mit einem getrennten Wort enden.

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

p {
  margin: 0;
  padding: 0.5rem;
  border: 2px dashed #999999;
  font-size: 1.25rem;
  width: 10em;
  hyphens: auto;
}

.no-limit {
  hyphenate-limit-lines: no-limit;
}

.limit-1 {
  hyphenate-limit-lines: 1;
}
```

```css hidden
@layer no-support {
  @supports not (hyphenate-limit-lines: 1) {
    body::before {
      content: "Your browser doesn't support the hyphenate-limit-lines property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
      margin-bottom: 1rem;
    }
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Limiting consecutive hyphenated lines", "", 250)}}

Mit `no-limit` in der ersten Box kann das lange Wort nach Bedarf getrennt werden, damit es nicht über den Container hinausragt. Bei `1` in der zweiten Box darf nur eine Zeile hintereinander mit einem getrennten Wort enden. Damit das lange Wort hineinpasst, müsste es jedoch in zwei aufeinanderfolgenden Zeilen getrennt werden. Nach der ersten Trennung ragt der Rest des Wortes daher über den Container hinaus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("hyphens")}}
- {{cssxref("hyphenate-character")}}
- {{cssxref("hyphenate-limit-chars")}}
- [Text umbrechen und Wörter trennen](/de/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
- [CSS-Textmodul](/de/docs/Web/CSS/Guides/Text)
