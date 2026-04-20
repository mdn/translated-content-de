---
title: "`font-variant-emoji` CSS property"
short-title: font-variant-emoji
slug: Web/CSS/Reference/Properties/font-variant-emoji
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`font-variant-emoji`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt den Standarddarstellungsstil für die Anzeige von Emojis an.

Traditionell wurde dies durch das Anhängen eines _Variation Selectors_, `U+FE0E` für Text und `U+FE0F` für Emoji, an den Emoji-Codepunkt erreicht. Nur Emojis, die zu einer [Unicode-Emoji-Darstellungssequenz](https://www.unicode.org/emoji/charts/emoji-variants.html) beitragen, werden von dieser Eigenschaft beeinflusst.

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

Die `font-variant-emoji` Eigenschaft wird durch einen einzelnen Schlüsselwortwert aus der unten stehenden Liste festgelegt.

### Werte

- `normal`
  - : Ermöglicht es einem Browser, zu wählen, wie das Emoji angezeigt wird. Dies folgt oft der Betriebssystemeinstellung.
- `text`
  - : Rendert das Emoji, als ob es den Unicode-Text-Variation-Selector (`U+FE0E`) verwendet.
- `emoji`
  - : Rendert das Emoji, als ob es den Unicode-Emoji-Variation-Selector (`U+FE0F`) verwendet.
- `unicode`
  - : Rendert das Emoji gemäß den [Emoji-Darstellungseigenschaften](https://www.unicode.org/reports/tr51/tr51-23.html#Emoji_Presentation). Wenn der `U+FE0E` oder `U+FE0F` Variation Selector vorhanden ist, überschreibt er diese Wert-Einstellung.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Während der Gebrauch von Emojis unterhaltsam erscheinen mag, sollten Sie deren Einfluss auf die Barrierefreiheit, insbesondere für Nutzer mit Seh- und kognitiven Beeinträchtigungen, berücksichtigen. Berücksichtigen Sie die folgenden Faktoren bei der Verwendung von Emojis:

- Darstellung auf Screenreadern: Screenreader lesen den Alt-Text eines Emojis vor. Beachten Sie dies, um die Position eines Emojis im Inhalt zu berücksichtigen. Die wiederholte und übermäßige Verwendung von Emojis wirkt sich negativ auf Screenreader-Nutzer aus. Es ist besser, Emojis anstelle von Emoticons zu verwenden; Emoticons werden als Interpunktionszeichen vorgelesen.

- Kontrast zum Hintergrund: Berücksichtigen Sie bei der Verwendung von Emojis deren Farben und wie sie mit der Hintergrundfarbe funktionieren, insbesondere wenn Sie Hintergrundfarben haben, die sich ändern können, wie z.B. im Hell/Dunkel-Modus.

- Verwendungszweck: Verwenden Sie Emojis nicht als Ersatz für Wörter, da Ihr Verständnis der Emoji-Bedeutung von dem der Nutzer abweichen kann. Berücksichtigen Sie auch, dass Emojis in verschiedenen Kulturen und geografischen Regionen unterschiedliche Bedeutungen haben können. Unsere Empfehlung ist, die Nutzung auf allgemein bekannte Emojis zu beschränken.

## Beispiele

### Änderung der Anzeigeart eines Emojis

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
- [Emojis und Barrierefreiheit: Wie man sie richtig verwendet](https://uxdesign.cc/emojis-in-accessibility-how-to-use-them-properly-66b73986b803)
