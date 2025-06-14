---
title: <generic-family>
slug: Web/CSS/generic-family
l10n:
  sourceCommit: 95779360f8a92b346bc52dbdd2cca08652c61ccd
---

{{CSSRef}}

Der **`<generic-family>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert die Schlüsselwortwerte für generische Schriftfamilien, die in den {{cssxref("font")}} Kurzform- und {{cssxref("font-family")}} Langform-Eigenschaften verwendet werden. Die `<generic-family>` steht für eine oder mehrere lokal installierte Schriften, die zu dieser Schriftkategorie gehören.

## Syntax

```css
<generic-family> = serif | sans-serif | monospace | cursive | fantasy | system-ui |
   ui-serif | ui-sans-serif | ui-monospace | ui-rounded | emoji | math | fangsong
```

## Werte

Der `<generic-family>` {{Glossary("enumerated", "enumerierte")}} Typ wird durch einen der unten aufgeführten Werte angegeben:

- `serif`

  - : Ein Serif ist eine kleine Linie oder ein kleiner Strich, der an das Ende eines größeren Strichs in einem Buchstaben angehängt ist. In Serif-Schriften haben Glyphen Endstriche, verbreiterte oder verjüngte Enden. Beispiele sind Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio und URW Palladio.

- `sans-serif`

  - : Eine Schriftart ohne Serifen; Glyphen haben einfache Endstriche, ohne Verzierungen. Beispiele für sans-serif Schriften sind Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans und Nimbus Sans L.

- `monospace`

  - : Alle Glyphen haben dieselbe feste Breite. Beispiele für Monospace-Schriften sind Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco und Lucida Console.

- `cursive`

  - : Glyphen in kursiven Schriften verwenden normalerweise eine kursive Schrift oder einen anderen Schreibstil, und das Ergebnis sieht mehr nach handschriftlichem Stift- oder Pinselstrich aus als nach gedruckter Schriftarbeit. CSS verwendet den Begriff "cursive", um eine Schrift für jedes Skript anzuwenden, einschließlich solcher ohne Verbindungsstriche. Beispiele für kursive Schriften sind Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting und Apple Chancery.

- `fantasy`

  - : Fantasy-Schriften sind primär dekorative Schriften, die verspielte Darstellungen von Zeichen enthalten. Beispiele für Fantasy-Schriften sind Papyrus, Herculanum, Party LET, Curlz MT, Harrington und Comic Sans MS.

- `system-ui`

  - : Glyphen werden aus der Standardschrift für die Benutzeroberfläche auf einer bestimmten Plattform entnommen. Da typografische Traditionen weltweit stark variieren, wird diese generische Familie für Schriftarten bereitgestellt, die nicht sauber in die anderen passen.

- `ui-serif`

  - : Die Standard-Serifenschrift der Benutzeroberfläche. Siehe die obige Definition von `serif`.

- `ui-sans-serif`

  - : Die Standard-Sans-Serif-Schrift der Benutzeroberfläche. Siehe die obige Definition von `sans-serif`.

- `ui-monospace`

  - : Die Standard-Monospace-Schrift der Benutzeroberfläche. Siehe die obige Definition von `monospace`.

- `ui-rounded`

  - : Die Standardschrift der Benutzeroberfläche, die gerundete Merkmale aufweist.

- `math`

  - : Schriften für die Darstellung mathematischer Ausdrücke, zum Beispiel Hochstellen und Tiefstellen, Klammern, die sich über mehrere Zeilen erstrecken, verschachtelte Ausdrücke und doppelt geschlagene Glyphen mit unterschiedlichen Bedeutungen.

- `emoji`

  - : Schriften, die speziell zum Darstellen von Emoji entworfen wurden.

- `fangsong`
  - : Ein besonderer Stil chinesischer Schriftzeichen, der zwischen dem Serif-Stil Song und dem Kursivstil Kai liegt. Dieser Stil wird häufig für Regierungsdokumente verwendet.

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
- [CSS-Schriften-Modul](/de/docs/Web/CSS/CSS_fonts)
