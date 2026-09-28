---
title: "`font-variant-emoji` CSS property"
short-title: font-variant-emoji
slug: Web/CSS/Reference/Properties/font-variant-emoji
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`font-variant-emoji`** legt den standardmäßigen Darstellungsstil für Emojis fest.

Traditionell wurde dies erreicht, indem an den Emoji-Codepunkt ein _Variation Selector_ angehängt wurde: `U+FE0E` für Text oder `U+FE0F` für Emoji. Diese Eigenschaft wirkt sich nur auf Emojis aus, die in einer [Unicode-Emoji-Darstellungssequenz](https://www.unicode.org/emoji/charts/emoji-variants.html) aufgeführt sind.

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

Für diese Eigenschaft wird einer der folgenden Schlüsselwortwerte angegeben:

- `normal`
  - : Ermöglicht es dem Browser, die Darstellung des Emojis zu wählen. Häufig richtet sie sich nach der Einstellung des Betriebssystems.
- `text`
  - : Stellt das Emoji so dar, als würde es den Unicode-Variation-Selector für Text (`U+FE0E`) verwenden.
- `emoji`
  - : Stellt das Emoji so dar, als würde es den Unicode-Variation-Selector für Emojis (`U+FE0F`) verwenden.
- `unicode`
  - : Stellt das Emoji gemäß den [Eigenschaften für die Emoji-Darstellung](https://www.unicode.org/reports/tr51/tr51-23.html#Emoji_Presentation) dar. Ist der Variation Selector `U+FE0E` oder `U+FE0F` vorhanden, hat er Vorrang vor diesem Wert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Auch wenn die Verwendung von Emojis unterhaltsam erscheinen mag, sollten Sie ihre Auswirkungen auf die Barrierefreiheit berücksichtigen, insbesondere für Menschen mit visuellen oder kognitiven Beeinträchtigungen. Beachten Sie bei der Verwendung von Emojis folgende Aspekte:

- Ausgabe durch Screenreader: Screenreader lesen den Alternativtext eines Emojis vor. Berücksichtigen Sie daher, an welcher Stelle im Inhalt ein Emoji steht. Wiederholte und übermäßige Verwendung von Emojis beeinträchtigt die Nutzung mit Screenreadern. Emojis sind Emoticons vorzuziehen, da Emoticons als Satzzeichen vorgelesen werden.

- Kontrast zum Hintergrund: Berücksichtigen Sie bei Emojis ihre Farben und deren Wirkung vor der Hintergrundfarbe. Das ist besonders wichtig, wenn sich die Hintergrundfarbe ändern kann, etwa beim Wechsel zwischen hellem und dunklem Modus.

- Verwendungszweck: Verwenden Sie Emojis nicht als Ersatz für Wörter, da Ihre Interpretation ihrer Bedeutung von der Ihrer Nutzer abweichen kann. Bedenken Sie außerdem, dass Emojis in verschiedenen Kulturen und Regionen unterschiedliche Bedeutungen haben können. Wir empfehlen, sich möglichst auf allgemein bekannte Emojis zu beschränken.

## Beispiele

### Die Darstellung eines Emojis ändern

Dieses Beispiel zeigt, wie Sie ein Emoji in der Darstellungsform `text` oder `emoji` wiedergeben können.

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
    font-family:
      "Noto Color Emoji", "Segoe UI Emoji", "Apple Color Emoji", sans-serif;
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
