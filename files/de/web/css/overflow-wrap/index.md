---
title: overflow-wrap
slug: Web/CSS/overflow-wrap
l10n:
  sourceCommit: 1db74391e637d69ede247bb4e4a4f0585a2f11c6
---

{{CSSRef}}

Die **`overflow-wrap`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf Text angewendet und legt fest, ob der Browser Zeilenumbrüche in einer ansonsten untrennbaren Zeichenfolge einfügen soll, um zu verhindern, dass der Text aus seiner Linienbox herausfließt.

> [!NOTE]
> Die Eigenschaft war ursprünglich eine nicht standardisierte und unpräfixierte Microsoft-Erweiterung namens `word-wrap` und wurde von den meisten Browsern mit demselben Namen implementiert. Sie wurde inzwischen in `overflow-wrap` umbenannt, wobei `word-wrap` ein Alias ist.

{{EmbedInteractiveExample("pages/css/overflow-wrap.html")}}

> [!NOTE]
> Im Gegensatz zu {{cssxref("word-break")}} erzeugt `overflow-wrap` nur einen Umbruch, wenn ein ganzes Wort nicht ohne Überlauf in einer eigenen Zeile platziert werden kann.

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

Die `overflow-wrap` Eigenschaft wird als einzelnes Schlüsselwort aus der untenstehenden Liste von Werten angegeben.

### Werte

- `normal`
  - : Zeilen können nur an normalen Wortumbrüchen gebrochen werden (wie z.B. einem Leerzeichen zwischen zwei Wörtern).
- `anywhere`
  - : Um Überlauf zu verhindern, kann eine ansonsten untrennbare Zeichenfolge – wie ein langes Wort oder eine URL – an jedem Punkt gebrochen werden, wenn es keine anderweitig akzeptablen Umbruchstellen in der Zeile gibt. Kein Trennzeichen wird an der Umbruchstelle eingefügt. Weiche Umbruchmöglichkeiten, die durch den Wortumbruch eingeführt werden, werden bei der Berechnung von min-content intrinsischen Größen berücksichtigt.
- `break-word`
  - : Dasselbe wie der `anywhere` Wert, wobei normalerweise untrennbare Wörter an beliebigen Punkten gebrochen werden dürfen, wenn es keine anderweitig akzeptablen Umbruchstellen in der Zeile gibt, aber weiche Umbruchmöglichkeiten, die durch den Wortumbruch eingeführt werden, NICHT bei der Berechnung von min-content intrinsischen Größen berücksichtigt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von overflow-wrap, word-break und hyphens

Dieses Beispiel vergleicht die Ergebnisse von `overflow-wrap`, `word-break` und `hyphens`, wenn ein langes Wort gebrochen wird.

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
- [Leitfaden zu Umbrüchen und zum Trennen von Text](/de/docs/Web/CSS/CSS_text/Wrapping_breaking_text)
