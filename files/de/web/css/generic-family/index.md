---
title: <generic-family>
slug: Web/CSS/generic-family
l10n:
  sourceCommit: bdcace5df2a9bfcb6b83d16762749a0ef769cdb8
---

{{CSSRef}}

Der **`<generic-family>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert die Schlüsselwortwerte für generische Schriftfamilien, die in den Kurzform-Eigenschaften {{cssxref("font")}} und Langform-Eigenschaften {{cssxref("font-family")}} verwendet werden. Die `<generic-family>` repräsentiert eine oder mehrere lokal installierte Schriften, die zu dieser Kategorie von Schriften gehören.

## Syntax

```css
<generic-family> = serif | sans-serif | monospace | cursive | fantasy | system-ui |
   ui-serif | ui-sans-serif | ui-monospace | ui-rounded | emoji | math | fangsong
```

## Werte

Der `<generic-family>` {{glossary("enumerated")}} Typ wird anhand eines der unten aufgeführten Werte spezifiziert:

- `serif`

  - : Eine Serif ist eine kleine Linie oder ein Strich, der am Ende eines größeren Strichs in einem Buchstaben angebracht ist. In Serifenschriften haben Glyphen Abschlusstriche, auslaufende oder sich verjüngende Enden. Beispiele sind Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio und URW Palladio.

- `sans-serif`

  - : Eine Schrift ohne Serifen; Glyphen haben einfache Strichabschlüsse ohne Verzierungen. Beispiel für sans-serif Schriftarten sind Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans und Nimbus Sans L.

- `monospace`

  - : Alle Glyphen haben die gleiche feste Breite. Beispiele für monospace Schriftarten sind Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco und Lucida Console.

- `cursive`

  - : Glyphen in Kursive Schriftarten haben in der Regel entweder Verbindungsstriche oder andere kursive Merkmale, die über diejenigen von kursiven Schriftarten hinausgehen. Die Glyphen sind teilweise oder vollständig verbunden, und das Ergebnis sieht mehr nach handschriftlicher Stift- oder Pinselarbeitung als nach gedruckter Schrift aus. Beispiel für kursive Schriftarten sind Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting und Apple Chancery.

- `fantasy`

  - : Fantasy-Schriften sind hauptsächlich dekorative Schriften, die verspielte Darstellungen von Zeichen enthalten. Beispiel für Fantasy Schriftarten sind Papyrus, Herculanum, Party LET, Curlz MT und Harrington.

- `system-ui`

  - : Glyphen werden aus der Standardschriftart der Benutzeroberfläche auf einer bestimmten Plattform entnommen. Da sich schriftliche Traditionen weltweit stark unterscheiden, wird diese generische Familie für Schriftarten bereitgestellt, die sich nicht eindeutig in die anderen einordnen lassen.

- `ui-serif`

  - : Die Standardschriftart der Benutzeroberfläche Serif. Siehe die Definition von `serif` oben.

- `ui-sans-serif`

  - : Die Standardschriftart der Benutzeroberfläche Sans-Serif. Siehe die Definition von `sans-serif` oben.

- `ui-monospace`

  - : Die Standardschriftart der Benutzeroberfläche Monospace. Siehe die Definition von `monospace` oben.

- `ui-rounded`

  - : Die Standardschriftart der Benutzeroberfläche, die abgerundete Merkmale aufweist.

- `math`

  - : Schriften zum Anzeigen mathematischer Ausdrücke, z.B. Hoch- und Tiefstellungen, Klammern, die mehrere Zeilen umfassen, verschachtelte Ausdrücke und doppelt geschlagene Glyphen mit unterschiedlichen Bedeutungen.

- `emoji`

  - : Schriftarten, die speziell dazu entwickelt wurden, Emoji darzustellen.

- `fangsong`
  - : Ein bestimmter Stil chinesischer Schriftzeichen, der zwischen dem Serif-Stil Song und dem Kursive-Stil Kai liegt. Dieser Stil wird häufig für amtliche Dokumente verwendet.

## Beispiele

Dieses Beispiel demonstriert einige der `<generic-family>` aufgezählten Werte für die {{cssxref("font-family")}}-Eigenschaft.

### HTML

```html
<ul>
  <li class="serif">serif</li>
  <li class="sans-serif">sans-serif</li>
  <li class="monospace">monospace</li>
  <li class="cursive">cursive</li>
  <li class="fantasy">fantasy</li>
  <li class="system-ui">system-ui</li>
</ul>
```

### CSS

```css
ul {
  font-size: 1.5rem;
  line-height: 2;
}
.serif {
  font-family: serif;
}
.sans-serif {
  font-family: sans-serif;
}
.monospace {
  font-family: monospace;
}
.cursive {
  font-family: cursive;
}
.fantasy {
  font-family: fantasy;
}
.system-ui {
  font-family: system-ui;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "500", "355")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("font-family")}} und {{cssxref("font")}}
- [CSS-Schriftartmodul](/de/docs/Web/CSS/CSS_fonts)
