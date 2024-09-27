---
title: overflow-wrap
slug: Web/CSS/overflow-wrap
l10n:
  sourceCommit: adc63413bfa7364c857de1b0f05d93b57ba921e5
---

{{CSSRef}}

> [!WARNING]
> Die Eigenschaft war ursprünglich eine nicht standardisierte und unpräfixierte Microsoft-Erweiterung namens `word-wrap`, die von den meisten Browsern unter demselben Namen implementiert wurde. Seitdem wurde sie in `overflow-wrap` umbenannt, wobei `word-wrap` ein Alias ist.

Die **`overflow-wrap`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf Text angewendet und legt fest, ob der Browser Zeilenumbrüche innerhalb eines ansonsten nicht trennbaren Strings einfügen soll, um zu verhindern, dass der Text über sein Zeilenfeld hinausläuft.

{{EmbedInteractiveExample("pages/css/overflow-wrap.html")}}

> [!NOTE]
> Im Gegensatz zu {{cssxref("word-break")}} wird `overflow-wrap` nur dann einen Umbruch erzeugen, wenn ein ganzes Wort nicht auf seine eigene Zeile gestellt werden kann, ohne überzulaufen.

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

Die `overflow-wrap` Eigenschaft wird als einzelnes Schlüsselwort aus der unten aufgeführten Liste von Werten angegeben.

### Werte

- `normal`
  - : Zeilen dürfen nur an normalen Worttrennpunkten brechen (z. B. einem Leerzeichen zwischen zwei Wörtern).
- `anywhere`
  - : Um ein Überlaufen zu verhindern, kann eine ansonsten nicht trennbare Zeichenfolge — wie ein langes Wort oder eine URL — an jedem Punkt gebrochen werden, wenn es keine anderweitig akzeptablen Trennpunkte in der Zeile gibt. An der Trennstelle wird kein Trennzeichen eingefügt. Durch den Zeilenumbruch eingeführte weiche Umbruchmöglichkeiten werden bei der Berechnung der min-content intrinsischen Größen berücksichtigt.
- `break-word`
  - : Entspricht dem `anywhere` Wert, wobei normalerweise nicht trennbare Wörter an beliebigen Punkten gebrochen werden dürfen, wenn es keine anderweitig akzeptablen Trennpunkte in der Zeile gibt, aber weiche Umbruchmöglichkeiten, die durch den Zeilenumbruch eingeführt werden, werden NICHT bei der Berechnung der min-content intrinsischen Größen berücksichtigt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von overflow-wrap, word-break und hyphens

Dieses Beispiel vergleicht die Ergebnisse von `overflow-wrap`, `word-break` und `hyphens` beim Trennen eines langen Wortes.

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
- [Leitfaden zum Umbrechen und Teilen von Text](/de/docs/Web/CSS/CSS_text/Wrapping_breaking_text)
