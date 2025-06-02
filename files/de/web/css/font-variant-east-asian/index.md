---
title: font-variant-east-asian
slug: Web/CSS/font-variant-east-asian
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{CSSRef}}

Die **`font-variant-east-asian`**-Eigenschaft von [CSS](/de/docs/Web/CSS) steuert die Verwendung alternativer Glyphen für ostasiatische Schriften, wie Japanisch und Chinesisch.

{{InteractiveExample("CSS Demo: font-variant-east-asian")}}

```css interactive-example-choice
font-variant-east-asian: normal;
```

```css interactive-example-choice
font-variant-east-asian: ruby;
```

```css interactive-example-choice
font-variant-east-asian: jis78;
```

```css interactive-example-choice
font-variant-east-asian: proportional-width;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>
      JIS78とJIS83以降では、檜と桧、籠と篭など、一部の文字の入れ替えが行われている。また、「唖然」や「躯体」などの書体が変更されている。
    </p>
  </div>
</section>
```

```css interactive-example
section {
  font-family:
    "YuGothic Medium", YuGothic, "Yu Gothic Medium", "Yu Gothic", sans-serif;
  margin-top: 10px;
  font-size: 1.5em;
}
```

## Syntax

```css
font-variant-east-asian: normal;
font-variant-east-asian: ruby;
font-variant-east-asian: jis78; /* <east-asian-variant-values> */
font-variant-east-asian: jis83; /* <east-asian-variant-values> */
font-variant-east-asian: jis90; /* <east-asian-variant-values> */
font-variant-east-asian: jis04; /* <east-asian-variant-values> */
font-variant-east-asian: simplified; /* <east-asian-variant-values> */
font-variant-east-asian: traditional; /* <east-asian-variant-values> */
font-variant-east-asian: full-width; /* <east-asian-width-values> */
font-variant-east-asian: proportional-width; /* <east-asian-width-values> */
font-variant-east-asian: ruby full-width jis83;

/* Global values */
font-variant-east-asian: inherit;
font-variant-east-asian: initial;
font-variant-east-asian: revert;
font-variant-east-asian: revert-layer;
font-variant-east-asian: unset;
```

### Werte

- `normal`
  - : Dieses Schlüsselwort führt zur Deaktivierung der Verwendung solcher alternativer Glyphen.
- `ruby`
  - : Dieses Schlüsselwort erzwingt die Verwendung spezieller Glyphen für Rubyschriftzeichen. Da diese normalerweise kleiner sind, gestalten Schriftentwickler oft spezifische Formen, die normalerweise etwas fettgedruckter sind, um den Kontrast zu verbessern. Dieses Schlüsselwort entspricht den OpenType-Werten `ruby`.
- `<east-asian-variant-values>`

  - : Diese Werte geben eine Reihe von logografischen Glyphenvarianten an, die für die Anzeige verwendet werden sollen. Mögliche Werte sind:

    | Schlüsselwort | Standard, der die Glyphen definiert                                         | OpenType-Äquivalent |
    | ------------- | --------------------------------------------------------------------------- | ------------------- |
    | `jis78`       | [JIS X 0208:1978](https://en.wikipedia.org/wiki/JIS_X_0208#First_standard)  | `jp78`              |
    | `jis83`       | [JIS X 0208:1983](https://en.wikipedia.org/wiki/JIS_X_0208#Second_standard) | `jp83`              |
    | `jis90`       | [JIS X 0208:1990](https://en.wikipedia.org/wiki/JIS_X_0208#Third_standard)  | `jp90`              |
    | `jis04`       | [JIS X 0213:2004](https://en.wikipedia.org/wiki/JIS_X_0213)                 | `jp04`              |
    | `simplified`  | Keine, verwenden Sie die vereinfachten chinesischen Glyphen                 | `smpl`              |
    | `traditional` | Keine, verwenden Sie die traditionellen chinesischen Glyphen                | `trad`              |

- `<east-asian-width-values>`

  - : Diese Werte steuern die Größenanpassung von Figuren, die für ostasiatische Schriftzeichen verwendet werden. Zwei Werte sind möglich:

    - `proportional-width` aktiviert die Gruppe ostasiatischer Schriftzeichen, die in der Breite variieren. Es entspricht den OpenType-Werten `pwid`.
    - `full-width` aktiviert die Gruppe ostasiatischer Schriftzeichen, die alle die gleiche, ungefähr quadratische Breitenmetrik aufweisen. Es entspricht den OpenType-Werten `fwid`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von ostasiatischen Glyphenvarianten

Dieses Beispiel erfordert die auf Ihrem Betriebssystem installierte Schriftart "Yu Gothic", andere Schriftarten unterstützen möglicherweise keine OpenType-Funktionen.

#### HTML

```html
<table>
  <thead></thead>
  <tbody>
    <tr>
      <th>normal/jis78:</th>
      <td>麹町</td>
      <td class="jis78">麹町</td>
    </tr>
    <tr>
      <th>normal/ruby:</th>
      <td>しんかんせん</td>
      <td class="ruby">しんかんせん</td>
    </tr>
    <tr>
      <th>normal/traditional:</th>
      <td>大学</td>
      <td class="traditional">大学</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
tbody {
  border: 0;
}

td {
  font-family: "Yu Gothic";
  font-size: 20px;
}
th {
  color: grey;
  padding-right: 10px;
}

.ruby {
  font-variant-east-asian: ruby;
}

.jis78 {
  font-variant-east-asian: jis78;
}

.traditional {
  font-variant-east-asian: traditional;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_East_Asian_glyph_variants')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`font-variant`](/de/docs/Web/CSS/font-variant)
- [`font-variant-alternates`](/de/docs/Web/CSS/font-variant-alternates)
- [`font-variant-caps`](/de/docs/Web/CSS/font-variant-caps)
- [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji)
- [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures)
- [`font-variant-numeric`](/de/docs/Web/CSS/font-variant-numeric)
- [`font-variant-position`](/de/docs/Web/CSS/font-variant-position)
