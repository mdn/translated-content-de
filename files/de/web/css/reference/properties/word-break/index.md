---
title: "`word-break` CSS property"
short-title: word-break
slug: Web/CSS/Reference/Properties/word-break
l10n:
  sourceCommit: 5d36878cea385cee3a4823ffb00ba4cac04a5826
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`word-break`** legt fest, ob Zeilenumbrüche an Stellen eingefügt werden, an denen der Text andernfalls über seine Inhaltsbox hinausragen würde.

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

Die Eigenschaft `word-break` wird durch ein einzelnes Schlüsselwort aus der folgenden Werteliste angegeben.

### Werte

- `normal`
  - : Verwendet die standardmäßigen Regeln für Zeilenumbrüche.
- `break-all`
  - : Um ein Überlaufen zu verhindern, können Wortumbrüche zwischen beliebigen zwei Zeichen eingefügt werden (ausgenommen chinesischer, japanischer und koreanischer Text).
- `keep-all`
  - : In chinesischem, japanischem und koreanischem (CJK-)Text sollen keine Wortumbrüche eingefügt werden. Für anderen Text gilt dasselbe Verhalten wie bei `normal`.
- `auto-phrase`
  - : Hat dieselbe Wirkung wie `word-break: normal`, führt jedoch zusätzlich eine sprachspezifische Analyse durch, damit Umbrüche nicht mitten in natürlichen Wortgruppen platziert werden.
- `break-word`
  - : Hat dieselbe Wirkung wie `overflow-wrap: anywhere` in Kombination mit `word-break: normal`, unabhängig vom tatsächlichen Wert der Eigenschaft {{cssxref("overflow-wrap")}}.

> [!NOTE]
> Im Gegensatz zu `word-break: break-word` und `overflow-wrap: break-word` (siehe {{cssxref("overflow-wrap")}}) erzeugt `word-break: break-all` einen Umbruch genau an der Stelle, an der der Text andernfalls über seinen Container hinausragen würde – selbst wenn ein Umbruch vor dem gesamten Wort einen Umbruch innerhalb des Wortes unnötig machen würde.

Die Spezifikation führt außerdem den zusätzlichen Wert `manual` auf, der derzeit von keinem Browser unterstützt wird. Nach seiner Implementierung wird `manual` dieselbe Wirkung wie `word-break: normal` haben, mit der Ausnahme, dass in südostasiatischen Sprachen keine Umbrüche automatisch eingefügt werden. Dies ist erforderlich, weil User Agents in diesen Sprachen Umbrüche häufig an ungünstigen Stellen platzieren. Mit `manual` können Sie Zeilenumbrüche selbst an geeigneten Stellen einfügen.

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
- [Leitfaden zum Umbrechen von Text](/de/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
- [Ansätze für Zeilenumbrüche](https://www.w3.org/International/articles/typography/linebreak) auf w3.org (2018)
