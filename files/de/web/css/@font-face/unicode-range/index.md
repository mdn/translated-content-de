---
title: unicode-range
slug: Web/CSS/@font-face/unicode-range
l10n:
  sourceCommit: 7e1296fc0722c86fb7e15487b5e9626597c7a2a0
---

Der **`unicode-range`** [CSS](/de/docs/Web/CSS) Deskriptor legt den spezifischen Bereich von Zeichen fest, die aus einer Schriftart verwendet werden sollen, die mit der {{cssxref("@font-face")}}-Regel definiert wurde und auf der aktuellen Seite zur Verfügung steht. Wenn die Seite kein Zeichen in diesem Bereich verwendet, wird die Schriftart nicht heruntergeladen; bei Verwendung von mindestens einem Zeichen wird die gesamte Schriftart heruntergeladen.

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
  - : Ein Bereich von Unicode-Codepunkten. Beispielsweise bedeutet `U+0025-00FF`, _alle Zeichen im Bereich von `U+0025` bis `U+00FF` einzuschließen_.
- **_Wildcard-Bereich_**
  - : Ein Bereich von Unicode-Codepunkten, der Wildcard-Zeichen enthält, also das Zeichen `'?'` verwendet. Zum Beispiel bedeutet `U+4??`, _alle Zeichen im Bereich von `U+400` bis `U+4FF` einzuschließen_.

## Beschreibung

Zweck dieses Deskriptors ist es, die Schriftressourcen so zu segmentieren, dass ein Browser nur die Schriftressource herunterladen muss, die für den Textinhalt einer bestimmten Seite benötigt wird. Zum Beispiel könnte eine Website mit vielen Lokalisierungen separate Schriftressourcen für Englisch, Griechisch und Japanisch bereitstellen. Für Nutzer, die die englische Version einer Seite betrachten, müssten die Schriftressourcen für Griechisch und Japanisch nicht heruntergeladen werden, was Bandbreite spart.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine andere Schriftart für ein einzelnes Zeichen verwenden

In diesem Beispiel erstellen wir ein einzelnes {{HTMLElement("div")}}-Element mit einer Textzeichenfolge, die ein kaufmännisches Und-Zeichen enthält, das wir mit einer anderen Schriftart gestalten möchten. Zur Verdeutlichung verwenden wir eine serifenlose Schrift, _Helvetica_, für den Text und eine Serifenschrift, _Times New Roman_, für das kaufmännische Und-Zeichen.

Im CSS definieren wir im Grunde eine komplett separate {{cssxref("@font-face")}}, die nur ein einzelnes Zeichen enthält, was bedeutet, dass nur dieses Zeichen mit dieser Schriftart gestaltet wird. Wir könnten dies auch erreichen, indem wir das kaufmännische Und-Zeichen in ein {{HTMLElement("span")}} einwickeln und nur darauf eine andere Schriftart anwenden, aber das wäre ein zusätzliches Element und eine Regel.

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
