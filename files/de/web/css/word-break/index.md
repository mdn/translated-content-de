---
title: word-break
slug: Web/CSS/word-break
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`word-break`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Zeilenumbrüche auftreten, wo der Text sonst über seinen Content-Bereich hinauslaufen würde.

{{InteractiveExample("CSS Demo: word-break")}}

```css interactive-example-choice
word-break: normal;
```

```css interactive-example-choice
word-break: break-all;
```

```css interactive-example-choice
word-break: keep-all;
```

```css interactive-example-choice
word-break: break-word;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Honorificabilitudinitatibus califragilisticexpialidocious
    Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
    グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
  </div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  padding: 20px;
  text-align: start;
  border: solid 1px darkgray;
}
```

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

Die `word-break` Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus der untenstehenden Liste von Werten ausgewählt wird.

### Werte

- `normal`
  - : Verwenden Sie die Standardregel für Zeilenumbrüche.
- `break-all`
  - : Um Überlauf zu verhindern, sollten Wortumbrüche zwischen beliebigen zwei Zeichen eingefügt werden (mit Ausnahme von Chinesisch/Japanisch/Koreanischem Text).
- `keep-all`
  - : Wortumbrüche sollten nicht für Chinesisch/Japanisch/Koreanischen (CJK) Text verwendet werden. Das Verhalten bei nicht-CJK-Texten ist dasselbe wie bei `normal`.
- `auto-phrase`
  - : Hat den gleichen Effekt wie `word-break: normal`, außer dass eine sprachspezifische Analyse durchgeführt wird, um Wortumbrüche zu verbessern, indem sie nicht in der Mitte natürlicher Phrasen platziert werden.
- `break-word`
  - : Hat den gleichen Effekt wie `overflow-wrap: anywhere` in Kombination mit `word-break: normal`, unabhängig vom tatsächlichen Wert der {{cssxref("overflow-wrap")}} Eigenschaft.

> [!NOTE]
> Im Gegensatz zu `word-break: break-word` und `overflow-wrap: break-word` (siehe {{cssxref("overflow-wrap")}}), erzeugt `word-break: break-all` einen Umbruch exakt an der Stelle, an der der Text sonst über seinen Container hinauslaufen würde (auch wenn das Setzen eines gesamten Wortes auf eine eigene Zeile den Bedarf für einen Umbruch negieren würde).

Die Spezifikation listet auch einen zusätzlichen Wert, `manual`, der derzeit in keinem Browser unterstützt wird. Wenn implementiert, wird `manual` den gleichen Effekt wie `word-break: normal` haben, außer dass Umbrüche in südostasiatischen Sprachen nicht automatisch eingefügt werden. Dies ist notwendig, da Benutzeragenten in solchen Sprachen häufig Umbrüche an suboptimalen Positionen platzieren. `manual` wird Ihnen ermöglichen, Zeilenumbrüche manuell an optimalen Positionen einzufügen.

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
