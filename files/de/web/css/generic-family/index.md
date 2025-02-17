---
title: <generic-family>
slug: Web/CSS/generic-family
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<generic-family>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert die Schlüsselwortwerte für generische Schriftfamilien, die im {{cssxref("font")}}-Kurzschreibstil und in den {{cssxref("font-family")}}-Langschreibstil-Eigenschaften verwendet werden. Der `<generic-family>` repräsentiert eine oder mehrere lokal installierte Schriftarten, die zu dieser Kategorie von Schriftarten gehören.

## Syntax

```css
<generic-family> = serif | sans-serif | monospace | cursive | fantasy | system-ui |
   ui-serif | ui-sans-serif | ui-monospace | ui-rounded | emoji | math | fangsong
```

## Werte

Der `<generic-family>`-{{Glossary("enumerated", "enumerierte")}} Typ wird mit einem der unten aufgeführten Werte angegeben:

- `serif`

  - : Eine Serifenschrift hat kleine Linien oder Striche, die an das Ende einer größeren Linie eines Buchstabens angefügt sind. In Serifenschriften haben die Glyphen Zierabschlüsse, auslaufende oder sich verjüngende Enden. Beispiele sind Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio und URW Palladio.

- `sans-serif`

  - : Eine Schriftart ohne Serifen; die Glyphen haben einfache Strichendungen ohne Verzierungen. Beispiele für serifenlose Schriften sind Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans und Nimbus Sans L.

- `monospace`

  - : Alle Glyphen haben dieselbe feste Breite. Beispiele für Monospace-Schriftarten sind Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco und Lucida Console.

- `cursive`

  - : Glyphen in Schreibschrift-Schriftarten haben im Allgemeinen entweder verbindende Striche oder andere kursive Merkmale, die über die von Kursivschriften hinausgehen. Die Glyphen sind teilweise oder vollständig verbunden, und das Ergebnis ähnelt eher handschriftlichem Schreiben mit Stift oder Pinsel als gedruckten Buchstaben. Beispiele für kursive Schriftarten sind Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting und Apple Chancery.

- `fantasy`

  - : Fantasieschriften sind primär dekorative Schriftarten, die spielerische Darstellungen von Zeichen enthalten. Beispiele für Fantasieschriften sind Papyrus, Herculanum, Party LET, Curlz MT und Harrington.

- `system-ui`

  - : Glyphen werden aus der Standard-Benutzeroberflächen-Schriftart auf einer bestimmten Plattform übernommen. Da sich typografische Traditionen weltweit stark unterscheiden, wird diese generische Familie für Schriftarten bereitgestellt, die nicht eindeutig in die anderen Kategorien passen.

- `ui-serif`

  - : Die Standardschrift mit Serifen für Benutzeroberflächen. Siehe die Definition von `serif` oben.

- `ui-sans-serif`

  - : Die serifenlose Standardschrift für Benutzeroberflächen. Siehe die Definition von `sans-serif` oben.

- `ui-monospace`

  - : Die Monospace-Standardschrift für Benutzeroberflächen. Siehe die Definition von `monospace` oben.

- `ui-rounded`

  - : Die Standardschrift für Benutzeroberflächen mit abgerundeten Merkmalen.

- `math`

  - : Schriftarten zur Darstellung mathematischer Ausdrücke, beispielsweise Hoch- und Tiefstellungen, Klammern über mehrere Zeilen, verschachtelte Ausdrücke und doppelt gestrichene Glyphen mit unterschiedlichen Bedeutungen.

- `emoji`

  - : Schriftarten, die speziell für die Darstellung von Emoji entworfen wurden.

- `fangsong`
  - : Ein bestimmter Stil chinesischer Schriftzeichen, der zwischen Serifenstil-Song und dem kursiven Kai-Stil liegt. Dieser Stil wird häufig für Regierungsdokumente verwendet.

## Beispiele

Dieses Beispiel zeigt mehrere der `<generic-family>`-enumerierten Werte für die {{cssxref("font-family")}}-Eigenschaft.

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
- [CSS Fonts Modul](/de/docs/Web/CSS/CSS_fonts)
