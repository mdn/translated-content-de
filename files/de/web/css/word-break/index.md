---
title: word-break
slug: Web/CSS/word-break
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`word-break`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Zeilenumbrüche dort erscheinen, wo der Text sonst seinen Inhaltsblock überlaufen würde.

{{EmbedInteractiveExample("pages/css/word-break.html")}}

## Syntax

```css
/* Keyword values */
word-break: normal;
word-break: break-all;
word-break: keep-all;
word-break: auto-phrase; /* experimental */
word-break: break-word; /* deprecated */

/* Global values */
word-break: inherit;
word-break: initial;
word-break: revert;
word-break: revert-layer;
word-break: unset;
```

Die `word-break`-Eigenschaft wird als ein einzelnes Stichwort aus der untenstehenden Werteliste angegeben.

### Werte

- `normal`
  - : Verwenden Sie die Standardregel für Zeilenumbrüche.
- `break-all`
  - : Um Überlauf zu verhindern, sollten Wortumbrüche zwischen zwei beliebigen Zeichen eingefügt werden (außer bei chinesischen/japanischen/koreanischen Texten).
- `keep-all`
  - : Wortumbrüche sollten nicht für chinesische/japanische/koreanische (CJK) Texte verwendet werden. Das Verhalten bei nicht-CJK-Texten ist dasselbe wie bei `normal`.
- `auto-phrase`
  - : Hat den gleichen Effekt wie `word-break: normal`, außer dass eine sprachspezifische Analyse durchgeführt wird, um Wortumbrüche zu verbessern, indem sie nicht in der Mitte von natürlichen Phrasen platziert werden.
- `break-word`
  - : Hat den gleichen Effekt wie `overflow-wrap: anywhere` kombiniert mit `word-break: normal`, unabhängig vom tatsächlichen Wert der {{cssxref("overflow-wrap")}}-Eigenschaft.

> [!NOTE]
> Im Gegensatz zu `word-break: break-word` und `overflow-wrap: break-word` (siehe {{cssxref("overflow-wrap")}}), erstellt `word-break: break-all` einen Umbruch genau an der Stelle, wo der Text sonst seinen Container überlaufen würde (auch wenn das Platzieren eines gesamten Wortes in einer eigenen Zeile den Bedarf für einen Umbruch aufheben würde).

Die Spezifikation listet auch einen zusätzlichen Wert, `manual`, der derzeit von keinem Browser unterstützt wird. Wenn `manual` implementiert wird, wird es den gleichen Effekt wie `word-break: normal` haben, außer dass in südostasiatischen Sprachen keine Umbrüche automatisch eingefügt werden. Dies ist notwendig, weil Benutzeragenten in solchen Sprachen häufig Umbrüche an suboptimalen Positionen platzieren. `manual` erlaubt es, Zeilenumbrüche an optimalen Positionen manuell einzufügen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<p>1. <code>word-break: normal</code></p>
<p class="normal narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>2. <code>word-break: break-all</code></p>
<p class="breakAll narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>3. <code>word-break: keep-all</code></p>
<p class="keepAll narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>4. <code>word-break: manual</code></p>
<p class="manual narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>5. <code>word-break: auto-phrase</code></p>
<p class="autoPhrase narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>6. <code>word-break: break-word</code></p>
<p class="breakWord narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>
```

### CSS

```css
.narrow {
  padding: 10px;
  border: 1px solid;
  width: 500px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 1px;
}

.normal {
  word-break: normal;
}

.breakAll {
  word-break: break-all;
}

.keepAll {
  word-break: keep-all;
}

.manual {
  word-break: manual;
}

.autoPhrase {
  word-break: auto-phrase;
}

.breakWord {
  word-break: break-word;
}
```

{{EmbedLiveSample('Examples', '100%', 600)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("overflow-wrap")}}
- {{cssxref("white-space")}}
- {{cssxref("hyphens")}}
- {{cssxref("line-break")}}
- [Leitfaden zum Umbruch und Brechen von Text](/de/docs/Web/CSS/CSS_text/Wrapping_breaking_text)
