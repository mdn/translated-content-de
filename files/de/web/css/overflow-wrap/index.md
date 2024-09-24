---
title: overflow-wrap
slug: Web/CSS/overflow-wrap
l10n:
  sourceCommit: adc63413bfa7364c857de1b0f05d93b57ba921e5
---

{{CSSRef}}

> [!WARNING]
> Die Eigenschaft war ursprünglich eine nicht standardisierte und unveränderte Microsoft-Erweiterung namens `word-wrap` und wurde von den meisten Browsern mit demselben Namen implementiert. Sie wurde inzwischen in `overflow-wrap` umbenannt, wobei `word-wrap` ein Alias ist.

Die **`overflow-wrap`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf Text angewendet und legt fest, ob der Browser Zeilenumbrüche innerhalb einer ansonsten untrennbaren Zeichenfolge einfügen soll, um zu verhindern, dass Text über seine Zeilenbox hinausläuft.

{{EmbedInteractiveExample("pages/css/overflow-wrap.html")}}

> [!NOTE]
> Im Gegensatz zu {{cssxref("word-break")}} erzeugt `overflow-wrap` nur dann einen Umbruch, wenn ein ganzes Wort nicht auf seine eigene Zeile gesetzt werden kann, ohne überzulaufen.

## Syntax

```css
/* Schlüsselwortwerte */
overflow-wrap: normal;
overflow-wrap: break-word;
overflow-wrap: anywhere;

/* Globale Werte */
overflow-wrap: inherit;
overflow-wrap: initial;
overflow-wrap: revert;
overflow-wrap: revert-layer;
overflow-wrap: unset;
```

Die `overflow-wrap`-Eigenschaft wird als ein einzelnes Schlüsselwort aus der untenstehenden Liste von Werten angegeben.

### Werte

- `normal`
  - : Zeilen dürfen nur an normalen Worttrennpunkten (wie einem Leerzeichen zwischen zwei Wörtern) umbrochen werden.
- `anywhere`
  - : Um Überlauf zu verhindern, kann eine ansonsten untrennbare Zeichenfolge – wie ein langes Wort oder eine URL – an jedem Punkt umgebrochen werden, wenn es in der Zeile keine anderen akzeptablen Umbruchstellen gibt. Es wird kein Trennzeichen an der Umbruchstelle eingefügt. Weiche Umbruchmöglichkeiten, die durch den Wortumbruch eingeführt werden, werden bei der Berechnung von min-content inhärenten Größen berücksichtigt.
- `break-word`
  - : Dies entspricht dem Wert `anywhere`, wobei normalerweise untrennbare Wörter an beliebigen Punkten umbrochen werden dürfen, wenn es in der Zeile keine anderen akzeptablen Umbruchstellen gibt, aber weiche Umbruchmöglichkeiten, die durch den Wortumbruch eingeführt werden, NICHT bei der Berechnung von min-content inhärenten Größen berücksichtigt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von overflow-wrap, word-break und hyphens

Dieses Beispiel vergleicht die Ergebnisse von `overflow-wrap`, `word-break` und `hyphens` beim Umbruch eines langen Wortes.

#### HTML

```html
<p>
  Sie sagen, das Angeln ist ausgezeichnet am See
  <em class="normal">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>, obwohl
  ich selbst noch nie dort war. (<code>normal</code>)
</p>
<p>
  Sie sagen, das Angeln ist ausgezeichnet am See
  <em class="ow-anywhere">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  obwohl ich selbst noch nie dort war. (<code>overflow-wrap: anywhere</code>)
</p>
<p>
  Sie sagen, das Angeln ist ausgezeichnet am See
  <em class="ow-break-word">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  obwohl ich selbst noch nie dort war. (<code>overflow-wrap: break-word</code>)
</p>
<p>
  Sie sagen, das Angeln ist ausgezeichnet am See
  <em class="word-break">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  obwohl ich selbst noch nie dort war. (<code>word-break</code>)
</p>
<p>
  Sie sagen, das Angeln ist ausgezeichnet am See
  <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  obwohl ich selbst noch nie dort war. (<code>hyphens</code>, ohne
  <code>lang</code> Attribut)
</p>
<p lang="en">
  Sie sagen, das Angeln ist ausgezeichnet am See
  <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  obwohl ich selbst noch nie dort war. (<code>hyphens</code>, englische Regeln)
</p>
<p class="hyphens" lang="de">
  Sie sagen, das Angeln ist ausgezeichnet am See
  <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  obwohl ich selbst noch nie dort war. (<code>hyphens</code>, deutsche Regeln)
</p>
```

#### CSS

```css
p {
  width: 13em;
  margin: 2px;
  background: gold;
}

.ow-anywhere {
  overflow-wrap: anywhere;
}

.ow-break-word {
  overflow-wrap: break-word;
}

.word-break {
  word-break: break-all;
}

.hyphens {
  hyphens: auto;
}
```

#### Ergebnis

{{ EmbedLiveSample('Comparing_overflow-wrap_word-break_and_hyphens', '100%', 260) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("word-break")}}
- {{cssxref("white-space")}}
- {{cssxref("hyphens")}}
- {{cssxref("text-overflow")}}
- [Leitfaden zum Umbruch und Brechen von Text](/de/docs/Web/CSS/CSS_text/Wrapping_breaking_text)
