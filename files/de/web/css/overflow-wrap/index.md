---
title: overflow-wrap
slug: Web/CSS/overflow-wrap
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`overflow-wrap`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf Text angewendet und legt fest, ob der Browser Zeilenumbrüche in einem ansonsten untrennbaren Zeichenfolgenbereich einfügen soll, um zu verhindern, dass der Text über den Rand seines Zeilenkastens hinausgeht.

> [!NOTE]
> Die Eigenschaft war ursprünglich eine nicht standardisierte und nicht prefixierte Microsoft-Erweiterung namens `word-wrap` und wurde von den meisten Browsern unter demselben Namen implementiert. Sie wurde inzwischen in `overflow-wrap` umbenannt, wobei `word-wrap` ein Alias ist.

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
  border: 3px solid #663399;
  padding: 0.75em;
  width: min-content;
  max-width: 11em;
  height: 200px;
}
```

> [!NOTE]
> Im Gegensatz zu {{cssxref("word-break")}} erzeugt `overflow-wrap` nur dann einen Umbruch, wenn ein ganzes Wort nicht in einer eigenen Zeile platziert werden kann, ohne über den Rand hinauszugehen.

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

Die `overflow-wrap` Eigenschaft wird als Schlüsselwort aus der folgenden Liste von Werten angegeben.

### Werte

- `normal`
  - : Zeilen dürfen nur an normalen Worttrennpunkten (wie einem Leerzeichen zwischen zwei Wörtern) umbrochen werden.
- `anywhere`
  - : Um ein Überlaufen zu verhindern, kann eine ansonsten untrennbare Zeichenfolge – wie ein langes Wort oder eine URL – an jedem Punkt umbrochen werden, wenn es keine anderweitig akzeptablen Trennpunkte in der Zeile gibt. Es wird kein Trennzeichen am Umbruchpunkt eingefügt. Weiche Umbruchmöglichkeiten, die durch den Umbruch eingeführt werden, werden bei der Berechnung von Min-Content-intrinsischen Größen berücksichtigt.
- `break-word`
  - : Entspricht dem Wert `anywhere`, wobei normalerweise untrennbare Wörter an beliebigen Punkten umbrochen werden dürfen, wenn es keine anderweitig akzeptablen Trennpunkte gibt, jedoch werden weiche Umbruchmöglichkeiten, die durch den Umbruch eingeführt werden, bei der Berechnung von Min-Content-intrinsischen Größen NICHT berücksichtigt.

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
- [Leitfaden zum Umbruch und Trennung von Text](/de/docs/Web/CSS/CSS_text/Wrapping_breaking_text)
