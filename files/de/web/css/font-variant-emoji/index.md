---
title: font-variant-emoji
slug: Web/CSS/font-variant-emoji
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`font-variant-emoji`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert den Standard-Darstellungsstil für die Darstellung von Emojis.

Traditionell wurde dies durch das Anhängen eines _Variation Selectors_, `U+FE0E` für Text und `U+FE0F` für Emoji, an den Emoji-Codepunkt erreicht. Nur Emojis, die als beitragend zu einer [Unicode emoji presentation sequence](https://www.unicode.org/emoji/charts/emoji-variants.html) gelistet sind, werden von dieser Eigenschaft beeinflusst.

## Syntax

```css
/* Schlüsselwortwerte */
font-variant-emoji: normal;
font-variant-emoji: text;
font-variant-emoji: emoji;
font-variant-emoji: unicode;

/* Globale Werte */
font-variant-emoji: inherit;
font-variant-emoji: initial;
font-variant-emoji: revert;
font-variant-emoji: revert-layer;
font-variant-emoji: unset;
```

Die Eigenschaft `font-variant-emoji` wird mit einem einzelnen Schlüsselwortwert aus der untenstehenden Liste angegeben.

### Werte

- `normal`
  - : Ermöglicht einem Browser die Auswahl, wie das Emoji angezeigt wird. Dies folgt oft der Einstellung des Betriebssystems.
- `text`
  - : Stellt das Emoji dar, als ob es den Unicode-Textvariationsselektor (`U+FE0E`) verwenden würde.
- `emoji`
  - : Stellt das Emoji dar, als ob es den Unicode-Emoji-Variationsselektor (`U+FE0F`) verwenden würde.
- `unicode`
  - : Stellt das Emoji gemäß den [Emoji-Darstellungseigenschaften](https://www.unicode.org/reports/tr51/tr51-23.html#Emoji_Presentation) dar. Wenn der `U+FE0E` oder `U+FE0F` Variationsselektor vorhanden ist, überschreibt er diese Einstellung.

## Offizielle Definition

{{CSSInfo}}

## Offizieller Syntax

{{CSSSyntax}}

## Barrierefreiheit

Während die Verwendung von Emojis unterhaltsam erscheinen mag, sollten Sie deren Auswirkungen auf die Barrierefreiheit, insbesondere für Nutzer mit visuellen und kognitiven Beeinträchtigungen, berücksichtigen. Berücksichtigen Sie die folgenden Faktoren bei der Verwendung von Emojis:

- Anzeige auf Bildschirmlesegeräten: Bildschirmlesegeräte lesen den Alt-Text eines Emojis vor. Behalten Sie dies im Hinterkopf, um die Position eines Emojis im Inhalt zu berücksichtigen. Wiederholter und übermäßiger Gebrauch von Emojis wirkt sich nachteilig auf Benutzer von Bildschirmlesegeräten aus. Es ist besser, Emojis anstelle von Emoticons zu verwenden; Emoticons werden als Satzzeichenzeichen vorgelesen.

- Kontrast zum Hintergrund: Wenn Sie Emojis verwenden, berücksichtigen Sie deren Farben und wie diese mit der Hintergrundfarbe funktionieren, insbesondere wenn Sie Hintergrundfarben haben, die sich ändern können, wie z.B. bei hellen/dunklen Modi.

- Verwendungsabsicht: Verwenden Sie Emojis nicht, um Wörter zu ersetzen, da Ihr Verständnis der Emoji-Bedeutung von dem der Nutzer abweichen kann. Berücksichtigen Sie auch, dass Emojis in verschiedenen Kulturen und Geografien unterschiedliche Bedeutungen haben können. Unsere Empfehlung ist, die Verwendung vorzugsweise auf allgemein bekannte Emojis zu beschränken.

## Beispiele

### Änderung der Anzeigeart eines Emojis

Dieses Beispiel zeigt, wie Sie ein Emoji in seiner `text`- oder `emoji`-Darstellung rendern können.

#### HTML

```html hidden
<p class="nosupport">
  Ihr Browser unterstützt <code>font-variant-emoji</code> nicht. Dieses Bild zeigt, wie es mit Unterstützung gerendert wird.
</p>
<img
  class="nosupport"
  src="./font-variant-emoji-example.jpg"
  alt="ein Telefon-Emoji als Text dargestellt, schwarz-weiß neben einem Telefon-Emoji, das als Emoji in voller Farbe und grafischer Darstellung gezeigt wird" />
```

```html
<section class="emojis">
  <div class="emoji">
    <h2>Textdarstellung</h2>
    <div class="text-presentation">☎</div>
  </div>
  <div class="emoji">
    <h2>Emojidarstellung</h2>
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
- [Emojis and accessibility: How to use them properly](https://uxdesign.cc/emojis-in-accessibility-how-to-use-them-properly-66b73986b803)
