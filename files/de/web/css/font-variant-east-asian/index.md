---
title: font-variant-east-asian
slug: Web/CSS/font-variant-east-asian
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`font-variant-east-asian`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung alternativer Glyphen für ostasiatische Schriften wie Japanisch und Chinesisch.

{{EmbedInteractiveExample("pages/css/font-variant-east-asian.html")}}

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
  - : Dieses Schlüsselwort erzwingt die Verwendung spezieller Glyphen für Rubyschriftzeichen. Da diese normalerweise kleiner sind, entwerfen Schriftgestalter oft spezifische Formen, die in der Regel leicht fett sind, um den Kontrast zu verbessern. Dieses Schlüsselwort entspricht den OpenType-Werten `ruby`.
- `<east-asian-variant-values>`

  - : Diese Werte spezifizieren eine Reihe von logografischen Glyphenvarianten, die für die Anzeige verwendet werden sollen. Mögliche Werte sind:

    | Schlüsselwort | Standard, der die Glyphen definiert                                         | OpenType-Äquivalent |
    | ------------- | --------------------------------------------------------------------------- | ------------------- |
    | `jis78`       | [JIS X 0208:1978](https://en.wikipedia.org/wiki/JIS_X_0208#First_standard)  | `jp78`              |
    | `jis83`       | [JIS X 0208:1983](https://en.wikipedia.org/wiki/JIS_X_0208#Second_standard) | `jp83`              |
    | `jis90`       | [JIS X 0208:1990](https://en.wikipedia.org/wiki/JIS_X_0208#Third_standard)  | `jp90`              |
    | `jis04`       | [JIS X 0213:2004](https://en.wikipedia.org/wiki/JIS_X_0213)                 | `jp04`              |
    | `simplified`  | Keiner, verwenden Sie die vereinfachten chinesischen Glyphen                | `smpl`              |
    | `traditional` | Keiner, verwenden Sie die traditionellen chinesischen Glyphen               | `trad`              |

- `<east-asian-width-values>`

  - : Diese Werte steuern die Größeneinstellung der für ostasiatische Zeichen verwendeten Ziffern. Zwei Werte sind möglich:

    - `proportional-width` aktiviert das Set ostasiatischer Zeichen, die in der Breite variieren. Es entspricht den OpenType-Werten `pwid`.
    - `full-width` aktiviert das Set ostasiatischer Zeichen, die alle die gleiche, ungefähr quadratische Breitenmetrik aufweisen. Es entspricht den OpenType-Werten `fwid`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung ostasiatischer Glyphenvarianten

Dieses Beispiel erfordert die im Betriebssystem installierte Schriftart "Yu Gothic", andere Schriftarten unterstützen möglicherweise keine OpenType-Features.

#### HTML

```html
<table>
  <thead></thead>
  <tbody style="border:0;">
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
