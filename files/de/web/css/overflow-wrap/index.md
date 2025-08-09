---
title: overflow-wrap
slug: Web/CSS/overflow-wrap
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die **`overflow-wrap`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf Text angewendet und legt fest, ob der Browser Zeilenumbrüche innerhalb einer ansonsten untrennbaren Zeichenfolge einfügen soll, um zu verhindern, dass der Text über sein Zeilenfeld hinausläuft.

> [!NOTE]
> Die Eigenschaft war ursprünglich eine nicht standardisierte und unveränderte Microsoft-Erweiterung, genannt `word-wrap`, und wurde von den meisten Browsern unter demselben Namen implementiert. Sie wurde inzwischen in `overflow-wrap` umbenannt, wobei `word-wrap` ein Alias ist.

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
> Im Gegensatz zu {{cssxref("word-break")}} erstellt `overflow-wrap` nur dann einen Umbruch, wenn ein ganzes Wort nicht ohne Überlauf in eine eigene Zeile gesetzt werden kann.

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

Die `overflow-wrap` Eigenschaft wird als einzelnes Schlüsselwort aus der folgenden Liste von Werten festgelegt.

### Werte

- `normal`
  - : Zeilen können nur an normalen Worttrennungsstellen (wie einem Leerzeichen zwischen zwei Wörtern) umbrochen werden.
- `anywhere`
  - : Um Überlauf zu vermeiden, kann eine ansonsten untrennbare Zeichenfolge — wie ein langes Wort oder eine URL — an jedem Punkt gebrochen werden, wenn es in der Zeile keine anderen akzeptablen Umbruchstellen gibt. An der Umbruchstelle wird kein Trennzeichen eingefügt. Weiche Umbruchmöglichkeiten, die durch den Wortumbruch eingeführt werden, werden bei der Berechnung der min-content intrinsischen Größen berücksichtigt.
- `break-word`
  - : Entspricht dem `anywhere`-Wert, wobei normalerweise untrennbare Wörter an beliebigen Punkten gebrochen werden dürfen, wenn es in der Zeile keine anderen akzeptablen Umbruchstellen gibt, aber weiche Umbruchmöglichkeiten, die durch den Wortumbruch eingeführt werden, werden NICHT bei der Berechnung der min-content intrinsischen Größen berücksichtigt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von overflow-wrap, word-break, und hyphens

Dieses Beispiel vergleicht die Ergebnisse von `overflow-wrap`, `word-break`, und `hyphens` beim Aufteilen eines langen Wortes.

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
- [Leitfaden zum Umbruchs- und Trennungsprozess von Text](/de/docs/Web/CSS/CSS_text/Wrapping_breaking_text)
