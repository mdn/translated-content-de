---
title: font-variant-emoji
slug: Web/CSS/font-variant-emoji
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`font-variant-emoji`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt den Standarddarstellungsstil für das Anzeigen von Emojis an.

Traditionell wurde dies durch das Anhängen eines _Variation Selectors_, `U+FE0E` für Text und `U+FE0F` für Emoji, an den Emoji-Codepunkt durchgeführt. Nur Emojis, die zu einer [Unicode-Emoji-Präsentationssequenz](https://www.unicode.org/emoji/charts/emoji-variants.html) beitragen, werden von dieser Eigenschaft beeinflusst.

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

Die `font-variant-emoji` Eigenschaft wird unter Verwendung eines einzelnen Schlüsselwortwertes aus der unten stehenden Liste festgelegt.

### Werte

- `normal`
  - : Ermöglicht es einem Browser, zu entscheiden, wie das Emoji angezeigt wird. Dies folgt oft der Einstellung des Betriebssystems.
- `text`
  - : Zeigt das Emoji so an, als ob es den Unicode-Textvariationsselektor (`U+FE0E`) verwenden würde.
- `emoji`
  - : Zeigt das Emoji so an, als ob es den Unicode-Emoji-Variationsselektor (`U+FE0F`) verwenden würde.
- `unicode`
  - : Zeigt das Emoji gemäß den [Emoji-Präsentationseigenschaften](https://www.unicode.org/reports/tr51/tr51-23.html#Emoji_Presentation) an. Wenn ein `U+FE0E` oder `U+FE0F` Variationsselektor vorhanden ist, wird dieser die Wertsetzung überschreiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Auch wenn die Verwendung von Emojis unterhaltsam erscheinen mag, sollten Sie deren Auswirkungen auf die Barrierefreiheit, insbesondere für Benutzer mit Seh- und kognitiven Beeinträchtigungen, berücksichtigen. Berücksichtigen Sie die folgenden Faktoren bei der Verwendung von Emojis:

- Anzeige in Screenreadern: Screenreader lesen den Alt-Text eines Emojis vor. Beachten Sie dies, um die Position eines Emojis im Inhalt zu berücksichtigen. Wiederholte und übermäßige Verwendung von Emojis hat eine nachteilige Wirkung auf Screenreader-Benutzer. Es ist besser, Emojis als Emoticons zu verwenden; Emoticons werden als Satzzeichen vorgelesen.

- Kontrast zum Hintergrund: Berücksichtigen Sie bei der Verwendung von Emojis deren Farben und wie diese mit der Hintergrundfarbe harmonieren, insbesondere wenn Sie Hintergrundfarben haben, die sich ändern können, wie z. B. Hell-/Dunkel-Modi.

- Verwendungsabsicht: Verwenden Sie keine Emojis als Ersatz für Wörter, da Ihr Verständnis der Emoji-Bedeutung von dem der Benutzer abweichen kann. Berücksichtigen Sie auch, dass Emojis in verschiedenen Kulturen und Geografien unterschiedliche Bedeutungen haben können. Unsere Empfehlung ist, die Verwendung auf allgemein bekannte Emojis zu beschränken.

## Beispiele

### Ändern der Darstellung eines Emojis

Dieses Beispiel zeigt, wie Sie ein Emoji in der `text` oder `emoji` Präsentation anzeigen können.

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

- [font-variant](/de/docs/Web/CSS/font-variant)
- [font-variant-alternates](/de/docs/Web/CSS/font-variant-alternates)
- [font-variant-caps](/de/docs/Web/CSS/font-variant-caps)
- [font-variant-east-asian](/de/docs/Web/CSS/font-variant-east-asian)
- [font-variant-ligatures](/de/docs/Web/CSS/font-variant-ligatures)
- [font-variant-numeric](/de/docs/Web/CSS/font-variant-numeric)
- [Emojis und Barrierefreiheit: Wie man sie richtig verwendet](https://uxdesign.cc/emojis-in-accessibility-how-to-use-them-properly-66b73986b803)
