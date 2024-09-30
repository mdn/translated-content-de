---
title: unicode-range
slug: Web/CSS/@font-face/unicode-range
l10n:
  sourceCommit: 418b3ebf6464716649125199385c39d86c944973
---

{{CSSRef}}

Der **`unicode-range`** CSS-Deskriptor legt den spezifischen Zeichensatzbereich fest, der von einer über die {{cssxref("@font-face")}} At-Regel definierten Schriftart verwendet werden soll und für die Verwendung auf der aktuellen Seite verfügbar ist. Wenn die Seite keinen Charakter in diesem Bereich verwendet, wird die Schriftart nicht heruntergeladen; wenn mindestens einer verwendet wird, wird die gesamte Schriftart heruntergeladen.

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
- **_Codepunktbereich_**
  - : Ein Bereich von Unicode-Codepunkten. Zum Beispiel bedeutet `U+0025-00FF`, _alle Zeichen im Bereich `U+0025` bis `U+00FF` einbeziehen_.
- **_Wildcard-Bereich_**
  - : Ein Bereich von Unicode-Codepunkten mit Wildcard-Zeichen, das heißt unter Verwendung des `'?'` Zeichens, zum Beispiel bedeutet `U+4??`, _alle Zeichen im Bereich `U+400` bis `U+4FF` einbeziehen_.

## Beschreibung

Der Zweck dieses Deskriptors besteht darin, die Schriftressourcen so zu segmentieren, dass ein Browser nur die Schriftressource herunterladen muss, die für den Textinhalt einer bestimmten Seite benötigt wird. Beispielsweise könnte eine Seite mit vielen Lokalisierungen separate Schriftressourcen für Englisch, Griechisch und Japanisch bereitstellen. Für Benutzer, die die englische Version einer Seite anzeigen, müssten die Schriftressourcen für griechische und japanische Schriften nicht heruntergeladen werden, was Bandbreite spart.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung einer anderen Schriftart für ein einzelnes Zeichen

In diesem Beispiel erstellen wir ein einfaches HTML-Dokument mit einem einzelnen {{HTMLElement("div")}}-Element, das ein Kaufmanns-Und enthält, das wir mit einer anderen Schriftart stilisieren möchten. Um es offensichtlich zu machen, verwenden wir eine serifenlose Schrift, _Helvetica_, für den Text und eine Serifenschrift, _Times New Roman_, für das Kaufmanns-Und.

Im CSS definieren wir effektiv eine vollständig separate {{cssxref("@font-face")}}, die nur ein einzelnes Zeichen enthält, was bedeutet, dass nur dieses Zeichen mit dieser Schriftart gestylt wird. Wir hätten dies auch tun können, indem wir das Kaufmanns-Und in einem {{HTMLElement("span")}} eingeschlossen und eine andere Schriftart darauf angewendet hätten, aber das bedeutet ein zusätzliches Element und ein zusätzliches Regelset.

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
  font-family: Ampersand, Helvetica, sans-serif;
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
