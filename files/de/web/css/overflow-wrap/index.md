---
title: overflow-wrap
slug: Web/CSS/overflow-wrap
l10n:
  sourceCommit: adc63413bfa7364c857de1b0f05d93b57ba921e5
---

{{CSSRef}}

> [!WARNING]
> Die Eigenschaft war ursprünglich eine nicht standardisierte und unveränderte Microsoft-Erweiterung namens `word-wrap` und wurde von den meisten Browsern mit demselben Namen umgesetzt. Seitdem wurde sie in `overflow-wrap` umbenannt, wobei `word-wrap` ein Alias darstellt.

Die **`overflow-wrap`** [CSS](/de/docs/Web/CSS) Eigenschaft wird auf Text angewendet und legt fest, ob der Browser Zeilenumbrüche in einem ansonsten umbruchfesten String einfügen soll, um zu verhindern, dass der Text seine Zeilenbox überfließt.

{{EmbedInteractiveExample("pages/css/overflow-wrap.html")}}

> [!NOTE]
> Im Gegensatz zu {{cssxref("word-break")}} erzeugt `overflow-wrap` nur dann einen Umbruch, wenn ein ganzes Wort nicht in einer eigenen Zeile untergebracht werden kann, ohne dass es überläuft.

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

Die `overflow-wrap`-Eigenschaft wird als ein einzelnes Schlüsselwort aus der folgenden Liste von Werten angegeben.

### Werte

- `normal`
  - : Zeilen dürfen nur an den üblichen Umbruchstellen (wie einem Leerzeichen zwischen zwei Wörtern) umbrochen werden.
- `anywhere`
  - : Um Überlauf zu vermeiden, kann ein ansonsten umbruchfester String von Zeichen – wie ein langes Wort oder eine URL – an jedem Punkt umbrochen werden, wenn es keine andere zulässige Umbruchstelle in der Zeile gibt. An der Umbruchstelle wird kein Trennzeichen eingefügt. Weiche Umbruchmöglichkeiten, die durch den Wortumbruch eingeführt werden, werden bei der Berechnung der min-content innewohnenden Größen berücksichtigt.
- `break-word`
  - : Das gleiche wie der Wert `anywhere`, mit normalerweise umbruchfesten Wörtern, die an beliebigen Punkten umbrochen werden dürfen, wenn es keine andere zulässige Umbruchstelle in der Zeile gibt, aber weiche Umbruchmöglichkeiten, die durch den Wortumbruch eingeführt werden, werden bei der Berechnung der min-content innewohnenden Größen NICHT berücksichtigt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von overflow-wrap, word-break und hyphens

Dieses Beispiel vergleicht die Ergebnisse von `overflow-wrap`, `word-break` und `hyphens`, wenn ein langes Wort umbrochen wird.

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
- [Leitfaden zum Umbruch und Trennen von Text](/de/docs/Web/CSS/CSS_text/Wrapping_breaking_text)
