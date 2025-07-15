---
title: <generic-family>
slug: Web/CSS/generic-family
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<generic-family>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert die Schlüsselwortwerte für generische Schriftartenfamilien, die in den {{cssxref("font")}}-Kurzschreib- und {{cssxref("font-family")}}-Langschreib-Eigenschaften verwendet werden. Der `<generic-family>` repräsentiert eine oder mehrere lokal installierte Schriftarten, die zu dieser Kategorie von Schriftarten gehören.

## Syntax

### Werte

Der `<generic-family>` {{Glossary("enumerated", "aufgezählte")}} Typ wird mit einem der unten aufgeführten Werte angegeben:

- `serif`
  - : Ein Serif ist ein kleiner Strich oder eine Linie, die an das Ende eines größeren Strichs in einem Buchstaben angefügt ist. In Serifenschriften haben Glyphen Abschlussstriche, die aufgeweitet oder sich verjüngen. Beispiele umfassen Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio und URW Palladio.

- `sans-serif`
  - : Eine Schriftart ohne Serifen; Glyphen haben einfache Strichenden, ohne Verzierung. Beispielhafte sans-serif-Schriften umfassen Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans und Nimbus Sans L.

- `monospace`
  - : Alle Glyphen haben die gleiche feste Breite. Beispielhafte Monospace-Schriften umfassen Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco und Lucida Console.

- `cursive`
  - : Glyphen in Schreibschrift-Schriften verwenden normalerweise eine Schreibschrift oder einen anderen Handschriftstil, und das Ergebnis sieht eher wie handgeschriebenes Stift- oder Pinsel-Schreiben aus als gedruckte Typografie. CSS verwendet den Begriff "cursive", um eine Schriftart für jedes Schriftsystem anzuwenden, einschließlich solcher ohne verbindende Striche. Beispielhafte Schreibschrift-Schriften umfassen Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting und Apple Chancery.

- `fantasy`
  - : Fantasy-Schriften sind hauptsächlich dekorative Schriften, die spielerische Darstellungen von Zeichen enthalten. Beispielhafte Fantasy-Schriften umfassen Papyrus, Herculanum, Party LET, Curlz MT, Harrington und Comic Sans MS.

- `system-ui`
  - : Glyphen werden aus der Standardschriftart der Benutzeroberfläche auf einer bestimmten Plattform entnommen. Da sich typografische Traditionen weltweit stark unterscheiden, wird diese generische Familie für Schriftarten bereitgestellt, die sich nicht klar in die anderen einordnen lassen.

- `ui-serif`
  - : Die Standardschriftart der Benutzeroberfläche mit Serifen. Siehe die Definition von `serif` oben.

- `ui-sans-serif`
  - : Die Standardschriftart der Benutzeroberfläche ohne Serifen. Siehe die Definition von `sans-serif` oben.

- `ui-monospace`
  - : Die Standardschriftart der Benutzeroberfläche mit fester Breite. Siehe die Definition von `monospace` oben.

- `ui-rounded`
  - : Die Standardschriftart der Benutzeroberfläche mit abgerundeten Merkmalen.

- `math`
  - : Schriften zur Darstellung mathematischer Ausdrücke, zum Beispiel Hoch- und Tiefstellung, mehrere Zeilen umfassende Klammern, Schachtelausdrücke und doppelt geschlagene Glyphen mit unterschiedlichen Bedeutungen.

- `emoji`
  - : Schriften, die speziell für das Rendern von Emoji entworfen wurden.

- `fangsong`
  - : Ein besonderer Stil chinesischer Schriftzeichen, der zwischen dem Serif-Stil "Song" und dem Kursiv-Stil "Kai" angesiedelt ist. Dieser Stil wird häufig für Regierungsdokumente verwendet.

## Formale Syntax

{{CSSSyntaxRaw(`<generic-family> = serif | sans-serif | monospace | cursive | fantasy | system-ui | ui-serif | ui-sans-serif | ui-monospace | ui-rounded | emoji | math | fangsong`)}}

## Beispiele

Dieses Beispiel demonstriert mehrere der `<generic-family>`-aufgezählten Werte für die {{cssxref("font-family")}}-Eigenschaft.

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
