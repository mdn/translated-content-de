---
title: unicode-range
slug: Web/CSS/@font-face/unicode-range
l10n:
  sourceCommit: a3eec14af0580dad6eae65980686cee6cafc2c68
---

Der CSS-Deskriptor **`unicode-range`** setzt den spezifischen Bereich von Zeichen, die aus einer mit der @font-face-Regel definierten Schriftart verwendet werden sollen, und für die aktuelle Seite verfügbar gemacht werden. Wenn die Seite kein Zeichen in diesem Bereich verwendet, wird die Schriftart nicht heruntergeladen; wenn mindestens ein Zeichen verwendet wird, wird die gesamte Schriftart heruntergeladen.

## Syntax

```css
/* <unicode-range> values */
unicode-range: U+26; /* single code point */
unicode-range: U+0-7F;
unicode-range: U+0025-00FF; /* code point range */
unicode-range: U+4??; /* wildcard range */
unicode-range: U+0025-00FF, U+4??; /* multiple values */
```

### Werte

- **_einzelner Codepunkt_**
  - : Ein einzelner Unicode-Zeichen-Codepunkt, zum Beispiel `U+26`.
- **_Codepunkt-Bereich_**
  - : Ein Bereich von Unicode-Codepunkten. Zum Beispiel bedeutet `U+0025-00FF` _alle Zeichen im Bereich von `U+0025` bis `U+00FF` einbeziehen_.
- **_Wildcard-Bereich_**
  - : Ein Bereich von Unicode-Codepunkten, der Wildcard-Zeichen enthält, das heißt unter Verwendung des Zeichens `'?'`, sodass zum Beispiel `U+4??` bedeutet, _alle Zeichen im Bereich von `U+400` bis `U+4FF` einbeziehen_.

## Beschreibung

Das Ziel dieses Deskriptors ist es, die Schriftsatz-Ressourcen so zu segmentieren, dass ein Browser nur die notwendigen Schriftressourcen für den Textinhalt einer bestimmten Seite herunterladen muss. Beispielsweise könnte eine Website mit vielen Lokalisierungen separate Schriftsatz-Ressourcen für Englisch, Griechisch und Japanisch bereitstellen. Für Benutzer, die die englische Version einer Seite anzeigen, müssten die Schriftsatz-Ressourcen für griechische und japanische Schriften nicht heruntergeladen werden, was Bandbreite spart.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine andere Schriftart für ein einzelnes Zeichen verwenden

In diesem Beispiel erstellen wir ein einzelnes `<div>`-Element, mit einem Textstring, der ein kaufmännisches Und (&) enthält, das wir mit einer anderen Schriftart gestalten möchten. Um es offensichtlich zu machen, verwenden wir eine serifenlose Schriftart, _Helvetica_, für den Text, und eine Serifenschrift, _Times New Roman_, für das kaufmännische Und.

Im CSS definieren wir im Grunde eine völlig separate @font-face, die nur ein einzelnes Zeichen enthält, was bedeutet, dass nur dieses Zeichen mit dieser Schrift gestaltet wird. Wir hätten dies auch tun können, indem wir das kaufmännische Und in ein `<span>`-Element einwickeln und nur dafür eine andere Schriftart anwenden, aber das wäre ein zusätzliches Element und eine zusätzliche Regel.

#### HTML

```html
<div>Me & You = Us</div>
```

#### CSS

```css
@font-face {
  font-family: "Ampersand";
  src: local("Times New Roman");
  unicode-range: U+26;
}

div {
  font-size: 4em;
  font-family: "Ampersand", "Helvetica", sans-serif;
}
```

#### Ergebnis

{{EmbedLiveSample("Using_a_different_font_for_a_single_character", 500,104)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
