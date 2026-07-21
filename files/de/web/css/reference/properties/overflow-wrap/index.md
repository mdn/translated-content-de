---
title: "`overflow-wrap` CSS property"
short-title: overflow-wrap
slug: Web/CSS/Reference/Properties/overflow-wrap
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`overflow-wrap`** [CSS](/de/docs/Web/CSS)-Eigenschaft wird auf Text angewendet und legt fest, ob der Browser Zeilenumbrüche in einem ansonsten untrennbaren String einfügen soll, um zu verhindern, dass der Text über seine Zeilenbox hinausläuft.

> [!NOTE]
> Ursprünglich war die Eigenschaft eine nicht standardisierte und nicht präfixierte Microsoft-Erweiterung namens `word-wrap`, die von den meisten Browsern mit demselben Namen implementiert wurde. Seitdem wurde sie in `overflow-wrap` umbenannt, wobei `word-wrap` als Alias fungiert.

{{InteractiveExample("CSS Demo: overflow-wrap")}}

```css interactive-example-choice
overflow-wrap: normal;
```

```css interactive-example-choice
overflow-wrap: anywhere;
```

```css interactive-example-choice
overflow-wrap: break-word;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    Most words are short &amp; don't need to break. But
    <strong class="transition-all" id="example-element"
      >Antidisestablishmentarianism</strong
    >
    is long. The width is set to min-content, with a max-width of 11em.
  </div>
</section>
```

```css interactive-example
.example-container {
  background-color: rgb(255 0 200 / 0.2);
  border: 3px solid rebeccapurple;
  padding: 0.75em;
  width: min-content;
  max-width: 11em;
  height: 200px;
}
```

> [!NOTE]
> Im Gegensatz zu {{cssxref("word-break")}} erzeugt `overflow-wrap` nur dann einen Umbruch, wenn ein ganzes Wort nicht auf seiner eigenen Zeile platziert werden kann, ohne dass es überläuft.

## Syntax

```css
/* Keyword values */
overflow-wrap: normal;
overflow-wrap: break-word;
overflow-wrap: anywhere;

/* Global values */
overflow-wrap: inherit;
overflow-wrap: initial;
overflow-wrap: revert;
overflow-wrap: revert-layer;
overflow-wrap: unset;
```

### Werte

Diese Eigenschaft wird als eines der folgenden Schlüsselwortwerte angegeben:

- `normal`
  - : Zeilen dürfen nur an normalen Worttrennungspunkten brechen (z. B. ein Leerzeichen zwischen zwei Wörtern).
- `anywhere`
  - : Um Überlauf zu verhindern, kann ein ansonsten untrennbarer Zeichenfolgenbereich — wie ein langes Wort oder eine URL — an jedem Punkt gebrochen werden, wenn es keine sonst akzeptablen Umbruchpunkte in der Zeile gibt. An der Umbruchstelle wird kein Silbentrennungszeichen eingefügt. Weiche Umbruchmöglichkeiten, die durch den Wortumbruch eingeführt werden, werden bei der Berechnung der min-content intrinsischen Größen berücksichtigt.
- `break-word`
  - : Entspricht dem Wert `anywhere`, wobei normalerweise untrennbare Wörter an willkürlichen Punkten gebrochen werden dürfen, wenn es keine sonst akzeptablen Umbruchpunkte in der Zeile gibt, aber weiche Umbruchmöglichkeiten, die durch den Wortumbruch eingeführt werden, NICHT bei der Berechnung der min-content intrinsischen Größen berücksichtigt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von overflow-wrap, word-break und hyphens

Dieses Beispiel vergleicht die Ergebnisse von `overflow-wrap`, `word-break` und `hyphens` beim Aufteilen eines langen Wortes.

#### HTML

```html
<p>
  They say the fishing is excellent at Lake
  <em class="normal">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>, though
  I've never been there myself. (<code>normal</code>)
</p>
<p>
  They say the fishing is excellent at Lake
  <em class="ow-anywhere">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>overflow-wrap: anywhere</code>)
</p>
<p>
  They say the fishing is excellent at Lake
  <em class="ow-break-word">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>overflow-wrap: break-word</code>)
</p>
<p>
  They say the fishing is excellent at Lake
  <em class="word-break">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>,
  though I've never been there myself. (<code>word-break</code>)
</p>
<p>
  They say the fishing is excellent at Lake
  <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>, though
  I've never been there myself. (<code>hyphens</code>, without
  <code>lang</code> attribute)
</p>
<p lang="en">
  They say the fishing is excellent at Lake
  <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>, though
  I've never been there myself. (<code>hyphens</code>, English rules)
</p>
<p class="hyphens" lang="de">
  They say the fishing is excellent at Lake
  <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>, though
  I've never been there myself. (<code>hyphens</code>, German rules)
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
- [Leitfaden zum Umbruch und Trennung von Text](/de/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
