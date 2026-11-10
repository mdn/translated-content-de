---
title: "`font-variant-emoji` CSS property"
short-title: font-variant-emoji
slug: Web/CSS/Reference/Properties/font-variant-emoji
l10n:
  sourceCommit: c4e64810ce10fb5cb1eebfcd8b6f526866fd0982
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`font-variant-emoji`** legt den standardmäßigen Darstellungsstil für Emojis fest.

Traditionell wurde dazu an den Emoji-Codepunkt ein _Variation Selector_ angehängt: `U+FE0E` für die Textdarstellung oder `U+FE0F` für die Emoji-Darstellung. Diese Eigenschaft wirkt sich nur auf Emojis aus, die in einer [Unicode-Sequenz für die Emoji-Darstellung](https://www.unicode.org/emoji/charts/emoji-variants.html) aufgeführt sind.

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

Für diese Eigenschaft kann einer der folgenden Schlüsselwortwerte angegeben werden:

- `normal`
  - : Der Browser kann wählen, wie das Emoji dargestellt wird. Häufig richtet er sich dabei nach der Einstellung des Betriebssystems.
- `text`
  - : Stellt das Emoji so dar, als würde der Unicode-Variation-Selector für Text (`U+FE0E`) verwendet.
- `emoji`
  - : Stellt das Emoji so dar, als würde der Unicode-Variation-Selector für Emojis (`U+FE0F`) verwendet.
- `unicode`
  - : Stellt das Emoji entsprechend den [Eigenschaften für die Emoji-Darstellung](https://www.unicode.org/reports/tr51/tr51-23.html#Emoji_Presentation) dar. Falls der Variation Selector `U+FE0E` oder `U+FE0F` vorhanden ist, hat dieser Vorrang vor der Einstellung dieses Werts.

## Barrierefreiheit

Emojis mögen unterhaltsam wirken, doch Sie sollten ihre Auswirkungen auf die Barrierefreiheit berücksichtigen, insbesondere für Menschen mit Seh- oder kognitiven Beeinträchtigungen. Beachten Sie bei der Verwendung von Emojis die folgenden Punkte:

- Ausgabe durch Screenreader: Screenreader lesen den Alternativtext eines Emojis vor. Berücksichtigen Sie dies bei der Platzierung von Emojis im Inhalt. Wiederholte oder übermäßige Verwendung von Emojis beeinträchtigt die Nutzung mit Screenreadern. Emojis sind Emoticons vorzuziehen, da Emoticons als Satzzeichen vorgelesen werden.

- Kontrast zum Hintergrund: Berücksichtigen Sie bei Emojis deren Farben und wie diese sich von der Hintergrundfarbe abheben. Dies gilt besonders, wenn sich die Hintergrundfarbe ändern kann, etwa beim Wechsel zwischen hellem und dunklem Modus.

- Verwendungszweck: Verwenden Sie Emojis nicht als Ersatz für Wörter, da Ihre Interpretation eines Emojis von der Ihrer Nutzer abweichen kann. Bedenken Sie auch, dass Emojis je nach Kultur und Region unterschiedliche Bedeutungen haben können. Wir empfehlen, vorzugsweise allgemein bekannte Emojis zu verwenden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Die Darstellung eines Emojis ändern

Dieses Beispiel zeigt, wie Sie ein Emoji in der Darstellung `text` oder `emoji` anzeigen können.

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
