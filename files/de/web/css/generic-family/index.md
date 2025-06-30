---
title: <generic-family>
slug: Web/CSS/generic-family
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

{{CSSRef}}

Der **`<generic-family>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert die Schlüsselwortwerte für generische Schriftfamilien, die in den {{cssxref("font")}} Kurzschrift- und {{cssxref("font-family")}} Langschrift-Eigenschaften verwendet werden. Der `<generic-family>` repräsentiert eine oder mehrere lokal installierte Schriften, die zu dieser Schriftkategorie gehören.

## Syntax

### Werte

Der `<generic-family>` {{Glossary("enumerated", "aufgezählte")}} Typ wird mithilfe eines der unten aufgeführten Werte angegeben:

- `serif`
  - : Ein Serif ist eine kleine Linie oder ein Strich, der am Ende eines größeren Strichs in einem Buchstaben angebracht ist. In Serif-Schriften haben Glyphen Abschlussstriche, ausgestellte oder sich verjüngende Endungen. Beispiele sind Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio und URW Palladio.

- `sans-serif`
  - : Eine Schrift ohne Serifen; Glyphen haben einfache Strichenden, ohne Verzierungen. Beispielhafte Sans-Serif-Schriften sind Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans und Nimbus Sans L.

- `monospace`
  - : Alle Glyphen haben die gleiche feste Breite. Beispielhafte Monospace-Schriften sind Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco und Lucida Console.

- `cursive`
  - : Glyphen in Kursivschriften verwenden in der Regel eine kursiven Schrift oder einen anderen Handschriftstil, und das Ergebnis sieht mehr wie handgeschriebene Feder- oder Pinselstriche aus als gedruckte Schriftsatz. CSS verwendet den Begriff "cursive", um sich auf eine Schriftart für jedes Skript zu beziehen, einschließlich solcher, die keine verbindenden Striche haben. Beispielhafte kursiven Schriften sind Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting und Apple Chancery.

- `fantasy`
  - : Fantasy-Schriften sind hauptsächlich dekorative Schriften, die verspielte Darstellungen von Buchstaben enthalten. Beispielhafte Fantasy-Schriften sind Papyrus, Herculanum, Party LET, Curlz MT, Harrington und Comic Sans MS.

- `system-ui`
  - : Glyphen werden aus der Standardschrift der Benutzeroberfläche auf einer bestimmten Plattform entnommen. Da sich typografische Traditionen weltweit stark unterscheiden, wird diese generische Familie für Schriftarten bereitgestellt, die nicht sauber in die anderen einzuordnen sind.

- `ui-serif`
  - : Die Standard-Serifenschrift der Benutzeroberfläche. Siehe die Definition von `serif` oben.

- `ui-sans-serif`
  - : Die Standard-Sans-Serifenschrift der Benutzeroberfläche. Siehe die Definition von `sans-serif` oben.

- `ui-monospace`
  - : Die Standard-Monospace-Schrift der Benutzeroberfläche. Siehe die Definition von `monospace` oben.

- `ui-rounded`
  - : Die Standardschrift der Benutzeroberfläche mit abgerundeten Merkmalen.

- `math`
  - : Schriften zum Darstellen von mathematischen Ausdrücken, z. B. Hoch- und Tiefstellung, Klammern, die sich über mehrere Zeilen erstrecken, verschachtelte Ausdrücke und doppelt gestrichene Glyphen mit unterschiedlichen Bedeutungen.

- `emoji`
  - : Schriften, die speziell zum Rendern von Emoji entworfen wurden.

- `fangsong`
  - : Ein bestimmter Stil von chinesischen Schriftzeichen, der zwischen serifartigem Song und kursivem Kai-Formen liegt. Dieser Stil wird häufig für Regierungsdokumente verwendet.

## Formale Syntax

{{CSSSyntaxRaw(`<generic-family> = serif | sans-serif | monospace | cursive | fantasy | system-ui | ui-serif | ui-sans-serif | ui-monospace | ui-rounded | emoji | math | fangsong`)}}

## Beispiele

Dieses Beispiel demonstriert mehrere der `<generic-family>` aufgezählten Werte für die {{cssxref("font-family")}} Eigenschaft.

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
