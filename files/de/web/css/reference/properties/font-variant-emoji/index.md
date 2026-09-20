---
title: "`font-variant-emoji` CSS property"
short-title: font-variant-emoji
slug: Web/CSS/Reference/Properties/font-variant-emoji
l10n:
  sourceCommit: 874031f6f50908d8679b8debc6bbd807870c8dbb
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`font-variant-emoji`** legt den Standarddarstellungsstil für die Anzeige von Emojis fest.

Traditionell wurde dies durch das Anhängen eines _Variation Selectors_, `U+FE0E` für Text und `U+FE0F` für Emoji, an den Emoji-Codepunkt erreicht. Nur Emojis, die als Beitrag zu einer [Unicode-Emoji-Präsentationssequenz](https://www.unicode.org/emoji/charts/emoji-variants.html) aufgeführt sind, werden von dieser Eigenschaft beeinflusst.

## Syntax

```css
/* Keyword values */
font-variant-emoji: normal;
font-variant-emoji: text;
font-variant-emoji: emoji;
font-variant-emoji: unicode;

/* Global values */
font-variant-emoji: inherit;
font-variant-emoji: initial;
font-variant-emoji: revert;
font-variant-emoji: revert-layer;
font-variant-emoji: unset;
```

### Werte

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `normal`
  - : Ermöglicht einem Browser, auszuwählen, wie das Emoji angezeigt wird. Dies folgt häufig der Einstellung des Betriebssystems.
- `text`
  - : Rendert das Emoji, als würde es den Unicode-Textvariationsselektor (`U+FE0E`) verwenden.
- `emoji`
  - : Rendert das Emoji, als würde es den Unicode-Emoji-Variationsselektor (`U+FE0F`) verwenden.
- `unicode`
  - : Rendert das Emoji gemäß den [Emoji-Präsentationseigenschaften](https://www.unicode.org/reports/tr51/tr51-23.html#Emoji_Presentation). Wenn der Variationsselektor `U+FE0E` oder `U+FE0F` vorhanden ist, überschreibt er diese Werteinstellung.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Obwohl die Verwendung von Emojis unterhaltsam erscheinen mag, sollten Sie ihre Auswirkungen auf die Barrierefreiheit berücksichtigen, insbesondere für Nutzende mit Seh- und kognitiven Beeinträchtigungen. Berücksichtigen Sie bei der Verwendung von Emojis die folgenden Faktoren:

- Anzeige in Screenreadern: Screenreader lesen den Alternativtext eines Emojis vor. Beachten Sie dies bei der Positionierung eines Emojis im Inhalt. Die wiederholte und übermäßige Verwendung von Emojis wirkt sich nachteilig auf Screenreader-Nutzende aus. Es ist besser, Emojis als Emoticons zu verwenden; Emoticons werden als Satzzeichen vorgelesen.

- Kontrast zum Hintergrund: Berücksichtigen Sie bei der Verwendung von Emojis deren Farben und wie diese mit der Hintergrundfarbe zusammenwirken, insbesondere wenn Sie Hintergrundfarben haben, die sich ändern können, wie etwa helle/dunkle Modi.

- Verwendungszweck: Verwenden Sie Emojis nicht als Ersatz für Wörter, da sich Ihr Verständnis der Bedeutung eines Emojis von dem der Nutzenden unterscheiden kann. Berücksichtigen Sie auch, dass Emojis in verschiedenen Kulturen und Regionen unterschiedliche Bedeutungen haben können. Unsere Empfehlung ist, die Verwendung vorzugsweise auf allgemein bekannte Emojis zu beschränken.

## Beispiele

### Ändern der Darstellung eines Emojis

Dieses Beispiel zeigt, wie Sie ein Emoji in seiner `text`- oder `emoji`-Darstellung rendern können.

#### HTML

```html hidden
<p class="no-support">
  Your Browser does not support <code>font-variant-emoji</code>. This image
  shows how it is rendered with support.
</p>
<img
  class="no-support"
  src="./font-variant-emoji-example.jpg"
  alt="a telephone emoji show as text, black and white next to a telephone emoji shown as emoji full color and graphical representation" />
```

```html
<section class="emojis">
  <div class="emoji">
    <h2>text presentation</h2>
    <div class="text-presentation">☎</div>
  </div>
  <div class="emoji">
    <h2>emoji presentation</h2>
    <div class="emoji-presentation">☎</div>
  </div>
</section>
```

#### CSS

```css hidden
@supports (font-variant-emoji: emoji) {
  .no-support {
    display: none;
  }
  .emojis {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-family: "Noto Color Emoji", "Segoe UI Emoji", "Apple Color Emoji";
  }
  .emoji > div {
    font-size: 2rem;
  }
}

@supports not (font-variant-emoji: emoji) {
  .emojis {
    display: none;
  }
}
```

```css
.text-presentation {
  font-variant-emoji: text;
}

.emoji-presentation {
  font-variant-emoji: emoji;
}
```

#### Ergebnis

{{ EmbedLiveSample('Changing the way an emoji is displayed') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [font-variant](/de/docs/Web/CSS/Reference/Properties/font-variant)
- [font-variant-alternates](/de/docs/Web/CSS/Reference/Properties/font-variant-alternates)
- [font-variant-caps](/de/docs/Web/CSS/Reference/Properties/font-variant-caps)
- [font-variant-east-asian](/de/docs/Web/CSS/Reference/Properties/font-variant-east-asian)
- [font-variant-ligatures](/de/docs/Web/CSS/Reference/Properties/font-variant-ligatures)
- [font-variant-numeric](/de/docs/Web/CSS/Reference/Properties/font-variant-numeric)
- [Emojis und Barrierefreiheit: So verwenden Sie sie richtig](https://uxdesign.cc/emojis-in-accessibility-how-to-use-them-properly-66b73986b803)
