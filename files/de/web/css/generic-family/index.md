---
title: <generic-family>
slug: Web/CSS/generic-family
l10n:
  sourceCommit: 09877330004e55244a9e8eee2ca04a750970f72d
---

{{CSSRef}}

Der **`<generic-family>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert die Schlüsselwortwerte für generische Schriftfamilien, die in den {{cssxref("font")}} Kurzschrift- und {{cssxref("font-family")}} Langschrifteigenschaften verwendet werden. Die `<generic-family>` repräsentiert eine oder mehrere lokal installierte Schriftarten, die zu dieser Kategorie von Schriftarten gehören.

## Syntax

```css
<generic-family> = serif | sans-serif | monospace | cursive | fantasy | system-ui |
   ui-serif | ui-sans-serif | ui-monospace | ui-rounded | emoji | math | fangsong
```

## Werte

Der `<generic-family>` {{Glossary("enumerated", "enumerierte")}} Typ wird durch einen der unten aufgeführten Werte angegeben:

- `serif`

  - : Ein Serif ist eine kleine Linie oder ein Strich, der am Ende eines größeren Strichs in einem Buchstaben angebracht ist. In Serifenschriften haben Glyphen abschließende Striche, Flügel oder verjüngte Enden. Beispiele umfassen Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio und URW Palladio.

- `sans-serif`

  - : Eine Schriftart ohne Serifen; Glyphen haben einfache Strichabschlüsse, ohne Verzierungen. Beispielhafte sans-serif Schriftarten sind Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans und Nimbus Sans L.

- `monospace`

  - : Alle Glyphen haben die gleiche feste Breite. Beispielhafte monospace Schriftarten sind Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco und Lucida Console.

- `cursive`

  - : Glyphen in Schreibschriftarten verwenden im Allgemeinen eine Schreibschrift oder einen anderen Handschriftstil, und das Ergebnis sieht mehr nach handgeschriebener Stift- oder Pinsel-Schrift aus als nach gedrucktem Satz. CSS verwendet den Begriff "cursive", um eine Schriftart für jedes Alphabet anzuwenden, einschließlich solcher, die keine verbindenden Striche haben. Beispielhafte Schreibschriftarten sind Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting und Apple Chancery.

- `fantasy`

  - : Fantasieschriften sind hauptsächlich dekorative Schriften, die verspielte Darstellungen von Zeichen enthalten. Beispielhafte Fantasieschriften sind Papyrus, Herculanum, Party LET, Curlz MT, Harrington und Comic Sans MS.

- `system-ui`

  - : Glyphen werden aus der standardmäßigen Benutzeroberflächenschrift auf einer gegebenen Plattform entnommen. Da sich die typografischen Traditionen weltweit stark unterscheiden, wird diese generische Familie für Schriftarten bereitgestellt, die nicht sauber in die anderen passen.

- `ui-serif`

  - : Die standardmäßige Benutzeroberfläche-Serifenschrift. Siehe die obige Definition von `serif`.

- `ui-sans-serif`

  - : Die standardmäßige Benutzeroberfläche-Sans-Serifenschrift. Siehe die obige Definition von `sans-serif`.

- `ui-monospace`

  - : Die standardmäßige Benutzeroberfläche-Monospaceschrift. Siehe die obige Definition von `monospace`.

- `ui-rounded`

  - : Die standardmäßige Benutzeroberflächenschrift mit abgerundeten Merkmalen.

- `math`

  - : Schriftarten zur Darstellung mathematischer Ausdrücke, zum Beispiel hochgestellte und tiefgestellte Zeichen, Klammern, die mehrere Zeilen überspannen, verschachtelte Ausdrücke und doppelt gestrichene Glyphen mit unterschiedlichen Bedeutungen.

- `emoji`

  - : Schriftarten, die speziell entwickelt wurden, um Emojis darzustellen.

- `fangsong`
  - : Ein bestimmter Stil chinesischer Zeichen, der zwischen dem serifenartigen Song und den Schreibstil Kai Formen liegt. Dieser Stil wird oft für Regierungsdokumente verwendet.

## Beispiele

Dieses Beispiel demonstriert mehrere der `<generic-family>` enumerierten Werte für die {{cssxref("font-family")}} Eigenschaft.

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
- [CSS-Schriftartenmodul](/de/docs/Web/CSS/CSS_fonts)
