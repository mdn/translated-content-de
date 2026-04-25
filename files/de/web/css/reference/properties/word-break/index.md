---
title: "`word-break` CSS property"
short-title: word-break
slug: Web/CSS/Reference/Properties/word-break
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`word-break`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob Zeilenumbrüche dort erscheinen, wo der Text andernfalls sein Inhaltsfeld überlaufen würde.

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

Die `word-break`-Eigenschaft wird als ein einzelnes Schlüsselwort aus der unten stehenden Liste von Werten angegeben.

### Werte

- `normal`
  - : Verwenden Sie die standardmäßige Zeilenumbruchregel.
- `break-all`
  - : Um Überlauf zu verhindern, sollten Wortumbrüche zwischen beliebigen zwei Zeichen eingefügt werden (ausgenommen chinesisch/japanisch/koreanischer Text).
- `keep-all`
  - : Wortumbrüche sollten für chinesisch/japanisch/koreanischen (CJK) Text nicht verwendet werden. Für Nicht-CJK-Text entspricht das Verhalten dem von `normal`.
- `auto-phrase`
  - : Hat den gleichen Effekt wie `word-break: normal`, mit der Ausnahme, dass sprachspezifische Analysen durchgeführt werden, um Wortumbrüche zu verbessern, indem sie nicht in der Mitte von natürlichen Phrasen platziert werden.
- `break-word`
  - : Hat den gleichen Effekt wie `overflow-wrap: anywhere` kombiniert mit `word-break: normal`, unabhängig vom tatsächlichen Wert der {{cssxref("overflow-wrap")}}-Eigenschaft.

> [!NOTE]
> Im Gegensatz zu `word-break: break-word` und `overflow-wrap: break-word` (siehe {{cssxref("overflow-wrap")}}), wird `word-break: break-all` einen Umbruch genau an der Stelle erzeugen, wo der Text ansonsten sein Containerelement überlaufen würde (auch wenn die Platzierung eines gesamten Wortes in einer eigenen Zeile die Notwendigkeit eines Umbruchs aufheben würde).

Die Spezifikation listet auch einen zusätzlichen Wert `manual` auf, der derzeit in keinem Browser unterstützt wird. Bei Implementierung wird `manual` den gleichen Effekt wie `word-break: normal` haben, mit der Ausnahme, dass in südostasiatischen Sprachen keine automatischen Umbrüche eingefügt werden. Dies ist notwendig, weil User Agents in solchen Sprachen häufig Umbrüche an suboptimalen Positionen einfügen. `manual` wird es Ihnen ermöglichen, Zeilenumbrüche an optimalen Stellen manuell einzufügen.

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
- [Leitfaden zum Umbruch und Brechen von Text](/de/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
