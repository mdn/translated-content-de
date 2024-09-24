---
title: unicode-range
slug: Web/CSS/@font-face/unicode-range
l10n:
  sourceCommit: 418b3ebf6464716649125199385c39d86c944973
---

{{CSSRef}}

Der **`unicode-range`** CSS-Deskriptor legt den spezifischen Zeichenbereich fest, der von einer mit der {{cssxref("@font-face")}} at-rule definierten Schriftart verwendet werden soll und auf der aktuellen Seite verfügbar gemacht wird. Wenn auf der Seite kein Zeichen in diesem Bereich verwendet wird, wird die Schriftart nicht heruntergeladen; wird mindestens eines verwendet, wird die gesamte Schriftart heruntergeladen.

## Syntax

```css
/* <unicode-range> Werte */
unicode-range: U+26; /* einzelner Codepunkt */
unicode-range: U+0-7F;
unicode-range: U+0025-00FF; /* Codepunktbereich */
unicode-range: U+4??; /* Platzhalterbereich */
unicode-range: U+0025-00FF, U+4??; /* mehrere Werte */
```

### Werte

- **_einzelner Codepunkt_**
  - : Ein einzelner Unicode-Zeichen-Codepunkt, zum Beispiel `U+26`.
- **_Codepunktbereich_**
  - : Ein Bereich von Unicode-Codepunkten. Zum Beispiel bedeutet `U+0025-00FF` _alle Zeichen im Bereich von `U+0025` bis `U+00FF` einbeziehen_.
- **_Platzhalterbereich_**
  - : Ein Bereich von Unicode-Codepunkten mit Platzhalterzeichen, also unter Verwendung des `'?'` Zeichens. Zum Beispiel bedeutet `U+4??` _alle Zeichen im Bereich von `U+400` bis `U+4FF` einbeziehen_.

## Beschreibung

Der Zweck dieses Deskriptors besteht darin, die Schriftart-Ressourcen zu segmentieren, sodass der Browser nur die Schriftart-Ressource herunterladen muss, die für den Textinhalt einer bestimmten Seite benötigt wird. Beispielsweise könnte eine Website mit vielen Lokalisierungen separate Schriftart-Ressourcen für Englisch, Griechisch und Japanisch bereitstellen. Für Benutzer, die die englische Version einer Seite ansehen, müssten die Schriftressourcen für griechische und japanische Schriften nicht heruntergeladen werden, wodurch Bandbreite gespart wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung einer anderen Schriftart für ein einzelnes Zeichen

In diesem Beispiel erstellen wir ein einfaches HTML mit einem einzigen {{HTMLElement("div")}}-Element, das ein Et-Zeichen enthält, das wir mit einer anderen Schriftart gestalten möchten. Zur Verdeutlichung verwenden wir eine serifenlose Schrift, _Helvetica_, für den Text und eine Serifenschrift, _Times New Roman_, für das Et-Zeichen.

Im CSS definieren wir tatsächlich eine völlig separate {{cssxref("@font-face")}}, die nur ein einziges Zeichen enthält, was bedeutet, dass nur dieses Zeichen mit dieser Schriftart gestaltet wird. Wir hätten dies auch tun können, indem wir das Et-Zeichen in ein {{HTMLElement("span")}} einwickeln und eine andere Schriftart nur dafür anwenden, aber das ist ein zusätzliches Element und eine zusätzliche Regelmenge.

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
