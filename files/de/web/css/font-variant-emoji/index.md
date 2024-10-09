---
title: font-variant-emoji
slug: Web/CSS/font-variant-emoji
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`font-variant-emoji`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Standarddarstellungsstil für die Anzeige von Emojis fest.

Traditionell wurde dies durch das Anhängen eines _Variation Selectors_, `U+FE0E` für Text und `U+FE0F` für Emoji, an den Emoji-Codepunkt erreicht. Nur Emojis, die zu einer [Unicode-Emoji-Präsentationssequenz](https://www.unicode.org/emoji/charts/emoji-variants.html) beitragen, werden von dieser Eigenschaft beeinflusst.

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
  - : Erlaubt es einem Browser, auszuwählen, wie das Emoji angezeigt wird. Dies richtet sich oft nach den Betriebssystemeinstellungen.
- `text`
  - : Rendert das Emoji, als ob es den Unicode-Textvariation-Selector (`U+FE0E`) verwendet.
- `emoji`
  - : Rendert das Emoji, als ob es den Unicode-Emoji-Variation-Selector (`U+FE0F`) verwendet.
- `unicode`
  - : Rendert das Emoji gemäß den [Emoji-Präsentationseigenschaften](https://www.unicode.org/reports/tr51/tr51-23.html#Emoji_Presentation). Wenn ein `U+FE0E` oder `U+FE0F` Variation Selector vorhanden ist, wird dieser die Einstellung dieses Wertes überschreiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Zugänglichkeit

Obwohl die Verwendung von Emojis unterhaltsam erscheinen mag, sollten Sie deren Auswirkungen auf die Zugänglichkeit berücksichtigen, insbesondere für Nutzer mit Seh- oder kognitiven Beeinträchtigungen. Beachten Sie die folgenden Faktoren bei der Verwendung von Emojis:

- Anzeige auf Screenreadern: Screenreader lesen den Alt-Text eines Emojis vor. Berücksichtigen Sie dies, um die Position eines Emojis im Inhalt zu bedenken. Wiederholung und übermäßiger Einsatz von Emojis wirken sich negativ auf Screenreader-Nutzer aus. Es ist besser, Emojis anstelle von Emoticons zu verwenden; Emoticons werden als Satzzeichen vorgelesen.

- Kontrast zum Hintergrund: Berücksichtigen Sie bei der Verwendung von Emojis deren Farben und wie diese mit der Hintergrundfarbe funktionieren, insbesondere wenn Sie Hintergrundfarben haben, die sich ändern können, wie z.B. im hellen/dunklen Modus.

- Verwendungszweck: Verwenden Sie Emojis nicht als Ersatz für Wörter, da Ihre Interpretation der Emoji-Bedeutung von der der Nutzer abweichen kann. Berücksichtigen Sie auch, dass Emojis in verschiedenen Kulturen und geografischen Regionen unterschiedliche Bedeutungen haben können. Unsere Empfehlung ist, die Verwendung auf allgemein bekannte Emojis zu beschränken.

## Beispiele

### Ändern der Darstellung eines Emojis

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

- [font-variant](/de/docs/Web/CSS/font-variant)
- [font-variant-alternates](/de/docs/Web/CSS/font-variant-alternates)
- [font-variant-caps](/de/docs/Web/CSS/font-variant-caps)
- [font-variant-east-asian](/de/docs/Web/CSS/font-variant-east-asian)
- [font-variant-ligatures](/de/docs/Web/CSS/font-variant-ligatures)
- [font-variant-numeric](/de/docs/Web/CSS/font-variant-numeric)
- [Emojis und Zugänglichkeit: Wie man sie richtig verwendet](https://uxdesign.cc/emojis-in-accessibility-how-to-use-them-properly-66b73986b803)
