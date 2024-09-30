---
title: font-variant-emoji
slug: Web/CSS/font-variant-emoji
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`font-variant-emoji`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Standard-Darstellungsstil für die Anzeige von Emojis fest.

Traditionell wurde dies durch Anhängen eines _Variation Selectors_, `U+FE0E` für Text und `U+FE0F` für Emoji, an den Emoji-Codepunkt durchgeführt. Nur Emojis, die zu einer [Unicode-Emoji-Präsentationssequenz](https://www.unicode.org/emoji/charts/emoji-variants.html) beitragen, werden von dieser Eigenschaft beeinflusst.

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

Die `font-variant-emoji` Eigenschaft wird unter Verwendung eines einzelnen Schlüsselwortwerts aus der folgenden Liste festgelegt.

### Werte

- `normal`
  - : Ermöglicht einem Browser auszuwählen, wie das Emoji angezeigt wird. Dies folgt oft der Einstellung des Betriebssystems.
- `text`
  - : Rendert das Emoji, als ob es den Unicode Text Variation Selector (`U+FE0E`) verwenden würde.
- `emoji`
  - : Rendert das Emoji, als ob es den Unicode Emoji Variation Selector (`U+FE0F`) verwenden würde.
- `unicode`
  - : Rendert das Emoji gemäß den [Emoji Präsentaionseigenschaften](https://www.unicode.org/reports/tr51/tr51-23.html#Emoji_Presentation). Wenn der `U+FE0E` oder `U+FE0F` Variation Selector vorhanden ist, wird dieser die Wertsetzung überschreiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Während die Verwendung von Emojis lustig erscheinen mag, sollten Sie deren Auswirkungen auf die Barrierefreiheit berücksichtigen, insbesondere für Benutzer mit visuellen und kognitiven Beeinträchtigungen. Berücksichtigen Sie die folgenden Faktoren bei der Verwendung von Emojis:

- Anzeige auf Screenreadern: Screenreader lesen den Alt-Text eines Emojis vor. Beachten Sie dies, um die Position eines Emojis im Inhalt zu berücksichtigen. Wiederholte und übermäßige Verwendung von Emojis wirkt sich nachteilig auf Benutzer von Screenreadern aus. Es ist besser, Emojis als Emoticons zu verwenden; Emoticons werden als Interpunktionszeichen vorgelesen.

- Kontrast zum Hintergrund: Achten Sie bei der Verwendung von Emojis auf deren Farben und wie diese mit der Hintergrundfarbe harmonieren, insbesondere wenn Sie Hintergrundfarben verwenden, die sich ändern können, wie z. B. hell/dunkel Modi.

- Verwendungsabsicht: Verwenden Sie keine Emojis, um Wörter zu ersetzen, da Ihr Verständnis der Emoji-Bedeutung von dem der Benutzer abweichen kann. Berücksichtigen Sie auch, dass Emojis in verschiedenen Kulturen und Regionen unterschiedliche Bedeutungen haben können. Unsere Empfehlung ist es, die Nutzung vorzugsweise auf allgemein bekannte Emojis zu beschränken.

## Beispiele

### Änderung der Art, wie ein Emoji angezeigt wird

Dieses Beispiel zeigt, wie Sie ein Emoji in seiner `text` oder `emoji` Präsentationsform rendern können.

#### HTML

```html hidden
<p class="nosupport">
  Your Browser does not support <code>font-variant-emoji</code>. This image
  shows how it is rendered with support.
</p>
<img
  class="nosupport"
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
  .nosupport {
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
