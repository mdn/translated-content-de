---
title: word-break
slug: Web/CSS/Reference/Properties/word-break
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`word-break`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Zeilenumbrüche dort erscheinen, wo der Text andernfalls den Inhaltbereich überlaufen würde.

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

Die `word-break` Eigenschaft wird als einzelnes Schlüsselwort festgelegt, das aus der untenstehenden Liste von Werten ausgewählt wird.

### Werte

- `normal`
  - : Verwendet die Standardregel für Zeilenumbrüche.
- `break-all`
  - : Um Überlauf zu verhindern, sollten Wortumbrüche zwischen beliebigen zwei Zeichen eingefügt werden (außer bei Chinesisch/Japanisch/Koreanisch Text).
- `keep-all`
  - : Wortumbrüche sollten nicht für chinesische/japanische/koreanische (CJK) Texte verwendet werden. Das Verhalten für Nicht-CJK Texte ist dasselbe wie bei `normal`.
- `auto-phrase`
  - : Hat den gleichen Effekt wie `word-break: normal`, außer dass eine sprachspezifische Analyse durchgeführt wird, um Wortumbrüche zu verbessern, indem sie nicht in der Mitte von natürlichen Phrasen platziert werden.
- `break-word`
  - : Hat den gleichen Effekt wie `overflow-wrap: anywhere` in Kombination mit `word-break: normal`, unabhängig vom tatsächlichen Wert der {{cssxref("overflow-wrap")}} Eigenschaft.

> [!NOTE]
> Im Gegensatz zu `word-break: break-word` und `overflow-wrap: break-word` (siehe {{cssxref("overflow-wrap")}}) wird `word-break: break-all` einen Umbruch genau an der Stelle erzeugen, an der der Text andernfalls seinen Container überlaufen würde (auch wenn das Platzieren eines ganzen Wortes in einer eigenen Zeile den Umbruch überflüssig machen würde).

Die Spezifikation führt auch einen zusätzlichen Wert, `manual`, auf, der derzeit in keinem Browser unterstützt wird. Sobald implementiert, wird `manual` denselben Effekt wie `word-break: normal` haben, außer dass in südostasiatischen Sprachen keine Umbrüche automatisch eingefügt werden. Dies ist erforderlich, da in solchen Sprachen Benutzeragenten häufig Umbrüche an suboptimalen Stellen platzieren. Mit `manual` können Sie manuell Zeilenumbrüche an optimalen Positionen einfügen.

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
- [Leitfaden zu Textumbruch und Texttrennung](/de/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
