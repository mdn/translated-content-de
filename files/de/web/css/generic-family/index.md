---
title: <generic-family>
slug: Web/CSS/generic-family
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Der **`<generic-family>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert die Schlüsselwortwerte für generische Schriftfamilien, die in den {{cssxref("font")}}-Kurzschreibweise und {{cssxref("font-family")}}-Langschreibweise-Eigenschaften verwendet werden. Die `<generic-family>` repräsentiert eine oder mehrere lokal installierte Schriftarten, die zu dieser Schriftartkategorie gehören.

## Syntax

```css
<generic-family> = serif | sans-serif | monospace | cursive | fantasy | system-ui |
   ui-serif | ui-sans-serif | ui-monospace | ui-rounded | emoji | math | fangsong
```

## Werte

Der `<generic-family>` {{Glossary("enumerated", "aufgezählte")}} Typ wird mittels eines der unten aufgelisteten Werte angegeben:

- `serif`

  - : Eine Serif ist eine kleine Linie oder ein Strich, der am Ende eines größeren Strichs in einem Buchstaben angebracht ist. In Serifenschriften haben Glyphen Abschlussstriche, auslaufende oder sich verjüngende Enden. Beispiele sind Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio und URW Palladio.

- `sans-serif`

  - : Eine Schrift ohne Serifen; Glyphen haben einfache Strichenden ohne Verzierungen. Beispielhafte sans-serif Schriften sind Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans und Nimbus Sans L.

- `monospace`

  - : Alle Glyphen haben die gleiche feste Breite. Beispielhafte Monospace-Schriften sind Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco und Lucida Console.

- `cursive`

  - : Glyphen in kursiven Schriften verwenden im Allgemeinen eine Kursive oder einen anderen Handschriftstil, und das Ergebnis sieht mehr wie handgeschriebene Stift- oder Pinsel-Schrift aus als gedruckte Schriftsatz. CSS verwendet den Begriff "cursive", um auf eine Schrift für jedes Skript anzuwenden, einschließlich solcher, die keine verbindenden Striche haben. Beispielhafte kursiv Schriften sind Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting und Apple Chancery.

- `fantasy`

  - : Fantasieschriften sind primär dekorative Schriften, die spielerische Darstellungen von Zeichen enthalten. Beispielhafte Fantasieschriften sind Papyrus, Herculanum, Party LET, Curlz MT, Harrington und Comic Sans MS.

- `system-ui`

  - : Glyphen werden von der Standardschriftart der Benutzeroberfläche auf einer bestimmten Plattform übernommen. Da die typografischen Traditionen weltweit stark variieren, ist diese generische Familie für Schriftarten vorgesehen, die nicht eindeutig in die anderen passen.

- `ui-serif`

  - : Die Standard-Serifenschrift der Benutzeroberfläche. Siehe die Definition von `serif` oben.

- `ui-sans-serif`

  - : Die Standard-Sans-Serifenschrift der Benutzeroberfläche. Siehe die Definition von `sans-serif` oben.

- `ui-monospace`

  - : Die Standard-Monospace-Schrift der Benutzeroberfläche. Siehe die Definition von `monospace` oben.

- `ui-rounded`

  - : Die Standardschrift der Benutzeroberfläche, die abgerundete Merkmale hat.

- `math`

  - : Schriften zum Anzeigen mathematischer Ausdrücke, zum Beispiel Hoch- und Tiefstellungen, Klammern, die über mehrere Zeilen gehen, verschachtelte Ausdrücke und durchgestochene Glyphen mit besonderen Bedeutungen.

- `emoji`

  - : Schriften, die speziell zum Rendern von Emojis entwickelt wurden.

- `fangsong`
  - : Ein besonderer Stil chinesischer Schriftzeichen, der zwischen Serif-Style Song und Cursive-Style Kai Formen liegt. Dieser Stil wird oft für Regierungsdokumente verwendet.

## Beispiele

Dieses Beispiel zeigt mehrere der `<generic-family>` aufgezählten Werte für die {{cssxref("font-family")}}-Eigenschaft.

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
- [CSS-Schriftenmodul](/de/docs/Web/CSS/CSS_fonts)
