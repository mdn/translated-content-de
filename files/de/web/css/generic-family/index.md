---
title: <generic-family>
slug: Web/CSS/generic-family
l10n:
  sourceCommit: bdcace5df2a9bfcb6b83d16762749a0ef769cdb8
---

{{CSSRef}}

Der **`<generic-family>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert die Schlüsselwortwerte für generische Schriftfamilien, die in den {{cssxref("font")}} Kurzhand- und {{cssxref("font-family")}} Langhand-Eigenschaften verwendet werden. Der `<generic-family>` repräsentiert eine oder mehrere lokal installierte Schriften, die zu dieser Kategorie von Schriften gehören.

## Syntax

```css
<generic-family> = serif | sans-serif | monospace | cursive | fantasy | system-ui |
   ui-serif | ui-sans-serif | ui-monospace | ui-rounded | emoji | math | fangsong
```

## Werte

Der `<generic-family>` [enumerierte](/de/docs/Glossary/enumerated) Typ wird mit einem der unten aufgeführten Werte angegeben:

- `serif`

  - : Eine Serif ist eine kleine Linie oder ein Strich, der am Ende eines größeren Strichs in einem Buchstaben angebracht ist. In Serifenschriften haben Glyphen Abschlüsse, ausgefächerte oder zulaufende Enden. Beispiele sind Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio und URW Palladio.

- `sans-serif`

  - : Eine Schrift ohne Serifen; Glyphen haben einfache Strichenden ohne Verzierungen. Beispiele für serifenlose Schriften sind Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans und Nimbus Sans L.

- `monospace`

  - : Alle Glyphen haben die gleiche feste Breite. Beispiele für monospaced Schriften sind Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco und Lucida Console.

- `cursive`

  - : Glyphen in Kursivschriften haben im Allgemeinen entweder verbundene Striche oder andere kursivtypische Merkmale, die über die von kursive Schriftarten hinausgehen. Die Glyphen sind teilweise oder vollständig verbunden, und das Ergebnis sieht mehr nach handgeschriebenem Stift- oder Pinselstrich als nach gedruckter Buchstabenarbeit aus. Beispielhafte Kursivschriften sind Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting und Apple Chancery.

- `fantasy`

  - : Fantasieschriften sind hauptsächlich dekorative Schriften, die verspielte Darstellungen von Zeichen enthalten. Beispielhafte Fantasieschriften sind Papyrus, Herculanum, Party LET, Curlz MT und Harrington.

- `system-ui`

  - : Glyphen stammen aus der Standardschriftart der Benutzeroberfläche auf einer bestimmten Plattform. Da typografische Traditionen weltweit stark variieren, wird diese generische Familie für Schriftarten bereitgestellt, die sich nicht klar den anderen zuordnen lassen.

- `ui-serif`

  - : Die Standard-Serifenschrift der Benutzeroberfläche. Siehe die Definition von `serif` oben.

- `ui-sans-serif`

  - : Die Standard-sans-serif Schrift der Benutzeroberfläche. Siehe die Definition von `sans-serif` oben.

- `ui-monospace`

  - : Die Standard-monospaced Schrift der Benutzeroberfläche. Siehe die Definition von `monospace` oben.

- `ui-rounded`

  - : Die Standard-Benutzeroberflächenschrift, die abgerundete Merkmale aufweist.

- `math`

  - : Schriften zum Anzeigen mathematischer Ausdrücke, beispielsweise hoch- und tiefgestellte Zeichen, Klammern, die mehrere Linien umfassen, verschachtelte Ausdrücke und doppelt geschlagene Glyphen mit unterschiedlichen Bedeutungen.

- `emoji`

  - : Schriften, die speziell für die Darstellung von Emojis entworfen wurden.

- `fangsong`
  - : Ein bestimmter Stil chinesischer Schriftzeichen, die zwischen den serifartigen Song- und kursiveartigen Kai-Formen liegen. Dieser Stil wird häufig für Regierungsdokumente verwendet.

## Beispiele

Dieses Beispiel zeigt mehrere der `<generic-family>` aufgezählten Werte für die {{cssxref("font-family")}} Eigenschaft.

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
