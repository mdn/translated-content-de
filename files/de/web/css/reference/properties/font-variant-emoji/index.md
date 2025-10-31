---
title: font-variant-emoji
slug: Web/CSS/Reference/Properties/font-variant-emoji
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`font-variant-emoji`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Standardpräsentationsstil für die Anzeige von Emojis fest.

Traditionell wurde dies durch Anhängen eines _Variation Selector_, `U+FE0E` für Text und `U+FE0F` für Emoji, an den Emoji-Codepunkt durchgeführt. Nur Emojis, die zu einer [Unicode-Emoji-Präsentationssequenz](https://www.unicode.org/emoji/charts/emoji-variants.html) beitragen, werden von dieser Eigenschaft beeinflusst.

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

Die `font-variant-emoji`-Eigenschaft wird mit einem einzelnen Schlüsselwortwert aus der unten stehenden Liste angegeben.

### Werte

- `normal`
  - : Ermöglicht es einem Browser, auszuwählen, wie das Emoji angezeigt werden soll. Dies folgt oft der Einstellung des Betriebssystems.
- `text`
  - : Stellt das Emoji so dar, als ob es den Unicode-Textvariationsselektor (`U+FE0E`) verwenden würde.
- `emoji`
  - : Stellt das Emoji so dar, als ob es den Unicode-Emoji-Variationsselektor (`U+FE0F`) verwenden würde.
- `unicode`
  - : Stellt das Emoji gemäß den [Emoji-Präsentationseigenschaften](https://www.unicode.org/reports/tr51/tr51-23.html#Emoji_Presentation) dar. Wenn der `U+FE0E` oder `U+FE0F` Variationsselektor vorhanden ist, wird dieser den Wert überschreiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Obwohl die Nutzung von Emojis unterhaltsam erscheinen mag, sollten Sie deren Einfluss auf die Barrierefreiheit berücksichtigen, insbesondere für Benutzer mit visuellen und kognitiven Einschränkungen. Beachten Sie die folgenden Faktoren bei der Verwendung von Emojis:

- Anzeige auf Screenreadern: Screenreader lesen den Alt-Text eines Emojis vor. Berücksichtigen Sie dies, wenn Sie die Position eines Emojis im Inhalt wählen. Wiederholte und übermäßige Verwendung von Emojis wirkt sich nachteilig auf Benutzer von Screenreadern aus. Es ist besser, Emojis statt Emoticons zu verwenden; Emoticons werden als Satzzeichen vorgelesen.

- Kontrast mit dem Hintergrund: Bei der Verwendung von Emojis sollten Sie deren Farben und deren Wirkung mit der Hintergrundfarbe berücksichtigen, insbesondere wenn Sie Hintergrundfarben haben, die sich ändern können, wie z. B. Licht-/Dunkelmodus.

- Absicht der Verwendung: Verwenden Sie Emojis nicht als Ersatz für Wörter, da Ihr Verständnis der Bedeutung des Emojis von dem der Benutzer abweichen kann. Bedenken Sie auch, dass Emojis in verschiedenen Kulturen und Geografien unterschiedliche Bedeutungen haben könnten. Unsere Empfehlung ist, die Verwendung auf allgemein bekannte Emojis zu beschränken.

## Beispiele

### Ändern der Art und Weise, wie ein Emoji angezeigt wird

Dieses Beispiel zeigt, wie Sie ein Emoji in seiner `text`- oder `emoji`-Präsentation rendern können.

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
- [Emojis and accessibility: How to use them properly](https://uxdesign.cc/emojis-in-accessibility-how-to-use-them-properly-66b73986b803)
