---
title: unicode-range
slug: Web/CSS/@font-face/unicode-range
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`unicode-range`** CSS-Deskriptor legt den spezifischen Bereich von Zeichen fest, der aus einer mit der {{cssxref("@font-face")}}-Regel definierten Schriftart verwendet werden soll und für die aktuelle Seite verfügbar gemacht wird. Wenn auf der Seite kein Zeichen in diesem Bereich verwendet wird, wird die Schriftart nicht heruntergeladen; wird mindestens eines verwendet, wird die gesamte Schriftart heruntergeladen.

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
  - : Ein Bereich von Unicode-Codepunkten. `U+0025-00FF` bedeutet zum Beispiel _alle Zeichen im Bereich von `U+0025` bis `U+00FF` einschließen_.
- **_Wildcard-Bereich_**
  - : Ein Bereich von Unicode-Codepunkten, der Wildcards enthält, das heißt, der das `'?'`-Zeichen verwendet, sodass `U+4??` zum Beispiel bedeutet, _alle Zeichen im Bereich von `U+400` bis `U+4FF` einschließen_.

## Beschreibung

Der Zweck dieses Deskriptors ist es, die Schriftressourcen so zu segmentieren, dass ein Browser nur die Schriftressource herunterladen muss, die für den Textinhalt einer bestimmten Seite benötigt wird. Ein Beispiel wäre eine Website mit vielen Lokalisierungen, die separate Schriftressourcen für Englisch, Griechisch und Japanisch bereitstellen könnte. Für Benutzer, die die englische Version einer Seite anzeigen, müssten die Schriftressourcen für die griechischen und japanischen Schriften nicht heruntergeladen werden, was Bandbreite spart.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung einer anderen Schriftart für ein einzelnes Zeichen

In diesem Beispiel erstellen wir ein einzelnes {{HTMLElement("div")}}-Element mit einer Textzeichenfolge, die ein Et-Zeichen enthält, das wir mit einer anderen Schriftart gestalten möchten. Um es offensichtlich zu machen, verwenden wir eine serifenlose Schrift, _Helvetica_, für den Text und eine Serifenschrift, _Times New Roman_, für das Et-Zeichen.

Im CSS definieren wir tatsächlich ein völlig separates {{cssxref("@font-face")}}, das nur ein einzelnes Zeichen enthält, was bedeutet, dass nur dieses Zeichen mit dieser Schriftart gestaltet wird. Wir hätten dies auch erreichen können, indem wir das Et-Zeichen in ein {{HTMLElement("span")}} einwickeln und nur dort eine andere Schriftart anwenden, aber das wäre ein zusätzliches Element und Regelset.

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
