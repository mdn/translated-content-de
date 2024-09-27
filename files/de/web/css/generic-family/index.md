---
title: <generic-family>
slug: Web/CSS/generic-family
l10n:
  sourceCommit: bdcace5df2a9bfcb6b83d16762749a0ef769cdb8
---

{{CSSRef}}

Der **`<generic-family>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) steht für die Schlüsselwortwerte der generischen Schriftfamilien, die in der {{cssxref("font")}} Kurzschrift und den {{cssxref("font-family")}} Langschrift-Eigenschaften verwendet werden. Der `<generic-family>` steht für eine oder mehrere lokal installierte Schriftarten, die zu dieser Kategorie von Schriftarten gehören.

## Syntax

```css
<generic-family> = serif | sans-serif | monospace | cursive | fantasy | system-ui |
   ui-serif | ui-sans-serif | ui-monospace | ui-rounded | emoji | math | fangsong
```

## Werte

Der `<generic-family>` [enumerierte](/de/docs/Glossary/enumerated) Typ wird mit einem der unten aufgeführten Werte angegeben:

- `serif`

  - : Eine Serife ist eine kleine Linie oder ein Strich, der an das Ende eines größeren Strichs in einem Buchstaben angehängt ist. In Serifenschriften haben Glyphen abschließende Striche, ausgestellte oder sich verjüngende Enden. Beispiele sind Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio und URW Palladio.

- `sans-serif`

  - : Eine Schrift ohne Serifen; Glyphen haben einfache Strichenden ohne Verzierungen. Beispiele für sans-serif Schriftarten sind Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans und Nimbus Sans L.

- `monospace`

  - : Alle Glyphen haben die gleiche feste Breite. Beispiele für Monospace-Schriftarten sind Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco und Lucida Console.

- `cursive`

  - : Glyphen in Kursivschriften haben in der Regel entweder verbindende Striche oder andere Schreibschriftmerkmale, die über die von kursiven Schriftarten hinausgehen. Die Glyphen sind teilweise oder vollständig verbunden, und das Ergebnis sieht mehr wie handgeschriebene Stift- oder Pinsel-Schrift als gedruckte Buchstabenarbeit aus. Beispiele für Kursivschriften sind Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting und Apple Chancery.

- `fantasy`

  - : Fantasy-Schriften sind in erster Linie dekorative Schriften, die spielerische Darstellungen von Zeichen enthalten. Beispiele für Fantasy-Schriften sind Papyrus, Herculanum, Party LET, Curlz MT und Harrington.

- `system-ui`

  - : Glyphen stammen aus der Standardschriftart des Benutzerinterfaces auf einer bestimmten Plattform. Da die typografischen Traditionen weltweit stark variieren, wird diese generische Familie für Schriftarten bereitgestellt, die nicht klar in die anderen passen.

- `ui-serif`

  - : Die Standardschriftart für Benutzeroberflächen mit Serifen. Siehe die Definition von `serif` oben.

- `ui-sans-serif`

  - : Die Standardschriftart für Benutzeroberflächen ohne Serifen. Siehe die Definition von `sans-serif` oben.

- `ui-monospace`

  - : Die Standardschriftart für Benutzeroberflächen mit fester Breite. Siehe die Definition von `monospace` oben.

- `ui-rounded`

  - : Die Standardschriftart für Benutzeroberflächen mit abgerundeten Merkmalen.

- `math`

  - : Schriften zur Darstellung mathematischer Ausdrücke, beispielsweise Hoch- und Tiefstellungen, Klammern, die mehrere Zeilen übergreifen, geschachtelte Ausdrücke und doppelstrichige Glyphen mit unterschiedlichen Bedeutungen.

- `emoji`

  - : Schriften, die speziell für die Darstellung von Emoji entwickelt wurden.

- `fangsong`
  - : Ein bestimmter Stil chinesischer Zeichen, der zwischen Serif-stilisierten Song- und kursiv-stilisierten Kai-Formen liegt. Dieser Stil wird häufig für Regierungsdokumente verwendet.

## Beispiele

Dieses Beispiel demonstriert mehrere der `<generic-family>`-enumerierten Werte für die {{cssxref("font-family")}}-Eigenschaft.

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
- [CSS-Fonts-Modul](/de/docs/Web/CSS/CSS_fonts)
