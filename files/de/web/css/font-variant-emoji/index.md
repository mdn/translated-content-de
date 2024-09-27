---
title: font-variant-emoji
slug: Web/CSS/font-variant-emoji
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`font-variant-emoji`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Standarddarstellungsstil für die Anzeige von Emojis fest.

Traditionell wurde dies durch Anhängen eines _Variationsselektors_, `U+FE0E` für Text und `U+FE0F` für Emoji, an den Emoji-Codepunkt erreicht. Nur Emojis, die zu einer [Unicode Emoji-Darstellungssequenz](https://www.unicode.org/emoji/charts/emoji-variants.html) beitragen, werden von dieser Eigenschaft beeinflusst.

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

Die Eigenschaft `font-variant-emoji` wird mit einem einzelnen Schlüsselwort aus der untenstehenden Liste angegeben.

### Werte

- `normal`
  - : Ermöglicht es einem Browser, auszuwählen, wie das Emoji angezeigt wird. Dies folgt oft der Einstellung des Betriebssystems.
- `text`
  - : Rendert das Emoji, als ob es den Unicode-Textvariationsselektor (`U+FE0E`) verwenden würde.
- `emoji`
  - : Rendert das Emoji, als ob es den Unicode-Emoji-Variationsselektor (`U+FE0F`) verwenden würde.
- `unicode`
  - : Rendert das Emoji gemäß den [Eigenschaften der Emoji-Darstellung](https://www.unicode.org/reports/tr51/tr51-23.html#Emoji_Presentation). Wenn der Variationsselektor `U+FE0E` oder `U+FE0F` vorhanden ist, wird dieser Wert überschrieben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Obwohl die Verwendung von Emojis lustig erscheinen mag, sollten Sie deren Auswirkungen auf die Barrierefreiheit, insbesondere für Nutzer mit Seh- und kognitiven Beeinträchtigungen, berücksichtigen. Berücksichtigen Sie folgende Faktoren bei der Verwendung von Emojis:

- Anzeige auf Screen-Readern: Screen-Reader lesen den Alt-Text eines Emojis vor. Beachten Sie dies, um die Position eines Emojis im Inhalt zu berücksichtigen. Wiederholte und übermäßige Verwendung von Emojis hat negative Auswirkungen auf Benutzer von Screen-Readern. Es ist besser, Emojis anstelle von Emoticons zu verwenden; Emoticons werden als Satzzeichen vorgelesen.

- Kontrast mit dem Hintergrund: Berücksichtigen Sie bei der Verwendung von Emojis deren Farben und wie diese mit der Hintergrundfarbe harmonieren, insbesondere wenn Sie Hintergrundfarben haben, die sich ändern können, wie z. B. bei hellen/dunklen Modi.

- Absicht der Verwendung: Verwenden Sie keine Emojis, um Wörter zu ersetzen, da Ihr Verständnis der Emoji-Bedeutung von dem der Nutzer abweichen kann. Bedenken Sie auch, dass Emojis in verschiedenen Kulturen und Regionen unterschiedliche Bedeutungen haben könnten. Unsere Empfehlung ist, die Verwendung auf allgemein bekannte Emojis zu beschränken.

## Beispiele

### Ändern der Art und Weise, wie ein Emoji dargestellt wird

Dieses Beispiel zeigt, wie man ein Emoji in seiner `text`- oder `emoji`-Darstellung rendern kann.

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
