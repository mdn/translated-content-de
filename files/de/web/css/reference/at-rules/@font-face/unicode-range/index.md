---
title: unicode-range
slug: Web/CSS/Reference/At-rules/@font-face/unicode-range
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Der **`unicode-range`** [CSS](/de/docs/Web/CSS) Deskriptor legt den spezifischen Bereich von Zeichen fest, der aus einer Schriftart verwendet werden soll, die mithilfe der {{cssxref("@font-face")}} at-Regel definiert wurde und zur Verwendung auf der aktuellen Seite verfügbar ist. Wenn die Seite kein Zeichen in diesem Bereich verwendet, wird die Schriftart nicht heruntergeladen; wenn mindestens ein Zeichen verwendet wird, wird die gesamte Schriftart heruntergeladen.

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
  - : Ein Bereich von Unicode-Codepunkten. Zum Beispiel bedeutet `U+0025-00FF`, dass _alle Zeichen im Bereich `U+0025` bis `U+00FF` eingeschlossen werden_.
- **_Wildcard-Bereich_**
  - : Ein Bereich von Unicode-Codepunkten, der Wildcard-Zeichen enthält, also das Zeichen `'?'`. Zum Beispiel bedeutet `U+4??`, dass _alle Zeichen im Bereich `U+400` bis `U+4FF` eingeschlossen werden_.

## Beschreibung

Der Zweck dieses Deskriptors besteht darin, die Schriftartressourcen so zu segmentieren, dass ein Browser nur die Schriftartressource herunterladen muss, die für den Textinhalt einer bestimmten Seite benötigt wird. Zum Beispiel könnte eine Seite mit vielen Lokalisierungen separate Schriftartressourcen für Englisch, Griechisch und Japanisch bereitstellen. Für Benutzer, die die englische Version einer Seite betrachten, müssten die Schriftartressourcen für Griechisch und Japanisch nicht heruntergeladen werden, was Bandbreite spart.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine andere Schriftart für ein einzelnes Zeichen verwenden

In diesem Beispiel erstellen wir ein einzelnes {{HTMLElement("div")}}-Element mit einem Textstring, der ein Et-Zeichen enthält, das wir mit einer anderen Schriftart stylen möchten. Zur Verdeutlichung verwenden wir eine serifenlose Schriftart, _Helvetica_, für den Text und eine Serifenschrift, _Times New Roman_, für das Et-Zeichen.

Im CSS definieren wir im Wesentlichen ein komplett separates {{cssxref("@font-face")}}, das nur ein einzelnes Zeichen enthält, was bedeutet, dass nur dieses Zeichen mit dieser Schriftart gestylt wird. Wir hätten dies auch tun können, indem wir das Et-Zeichen in einen {{HTMLElement("span")}} gewickelt und eine andere Schriftart nur darauf angewendet hätten, aber das wäre ein zusätzliches Element und Regelset.

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
