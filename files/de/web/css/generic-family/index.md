---
title: <generic-family>
slug: Web/CSS/generic-family
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<generic-family>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) repräsentiert die Schlüsselwortwerte für generische Schriftfamilien, die in der {{cssxref("font")}}-Kurzform und den {{cssxref("font-family")}}-Langform-Eigenschaften verwendet werden. Der `<generic-family>` repräsentiert eine oder mehrere lokal installierte Schriften, die zu dieser Kategorie von Schriften gehören.

## Syntax

### Werte

Der `<generic-family>` {{Glossary("enumerated", "aufgezählte")}} Typ wird mit einem der unten aufgeführten Werte angegeben:

- `serif`
  - : Ein Serif ist eine kleine Linie oder ein Strich, der am Ende eines größeren Strichs in einem Buchstaben angebracht ist. Bei Serifenschriften haben die Glyphen Abschlussstriche, aufgeweitete oder sich verjüngende Enden. Beispiele umfassen Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio und URW Palladio.

- `sans-serif`
  - : Eine Schriftart ohne Serifen; die Glyphen haben einfache Strichenden ohne Verzierungen. Beispiel für serifenlose Schriften umfassen Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans und Nimbus Sans L.

- `monospace`
  - : Alle Glyphen haben dieselbe feste Breite. Beispiel für Monospace-Schriften umfassen Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco und Lucida Console.

- `cursive`
  - : Glyphen in Kursivschriften verwenden in der Regel eine kursiven Schrift oder eine andere Art von Handschriftstil, und das Ergebnis sieht eher wie handgeschriebene Stift- oder Pinselgeschriebenes aus als gedrucktes Satz. CSS verwendet den Begriff "cursive", um auf eine Schriftart für jedes Skript anzuwenden, einschließlich solcher, die keine verbindenden Striche haben. Beispiel für kursiv Schriftarten umfassen Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting und Apple Chancery.

- `fantasy`
  - : Fantasieschriften sind hauptsächlich dekorative Schriften, die spielerische Darstellungen von Zeichen enthalten. Beispiel für fantasy Schriften umfassen Papyrus, Herculanum, Party LET, Curlz MT, Harrington und Comic Sans MS.

- `system-ui`
  - : Glyphen werden aus der Standardschrift der Benutzeroberfläche auf einer bestimmten Plattform entnommen. Da typografische Traditionen weltweit stark variieren, wird diese generische Familie für Schriftarten bereitgestellt, die nicht sauber in die anderen passen.
    > [!NOTE]
    > Wie der Name schon sagt, soll `system-ui` UI-Elemente wie native Apps aussehen lassen und nicht für das Setzen großer Textblöcke verwendet werden. Dies kann dazu führen, dass die angezeigte Schriftart für einige Benutzer unerwünscht ist—zum Beispiel kann die Standard-Windows-CJK-Schrift lateinische Schriften schlecht darstellen, und das `lang`-Attribut kann die angezeigte Schriftart nicht beeinflussen. Einige Betriebssysteme erlauben keine Anpassung von `system-ui`, während Browser im Allgemeinen die Anpassung der `sans-serif`-Schriftfamilie erlauben. Für große Textblöcke verwenden Sie `sans-serif` oder eine andere Nicht-UI-Schriftfamilie.

- `ui-serif`
  - : Die Standardschrift der Benutzeroberfläche mit Serifen. Siehe die Definition von `serif` oben.

- `ui-sans-serif`
  - : Die Standardschrift der Benutzeroberfläche ohne Serifen. Siehe die Definition von `sans-serif` oben.

- `ui-monospace`
  - : Die Standardschrift der Benutzeroberfläche mit fester Breite. Siehe die Definition von `monospace` oben.

- `ui-rounded`
  - : Die Standardschrift der Benutzeroberfläche mit abgerundeten Merkmalen.

- `math`
  - : Schriftarten zur Darstellung mathematischer Ausdrücke, beispielsweise Hoch- und Tiefstellung, Klammern, die mehrere Zeilen überspannen, verschachtelte Ausdrücke und doppelt geschlagene Glyphen mit unterschiedlichen Bedeutungen.

- `fangsong`
  - : Ein besonderer Stil von chinesischen Zeichen, der zwischen serif-ähnlichem Song-Stil und kursivem Kai-Stil liegt. Dieser Stil wird häufig für Regierungsdokumente verwendet.

## Formale Syntax

{{CSSSyntaxRaw(`<generic-family> = serif | sans-serif | monospace | cursive | fantasy | system-ui | ui-serif | ui-sans-serif | ui-monospace | ui-rounded | math | fangsong`)}}

## Beispiele

Dieses Beispiel demonstriert mehrere der `<generic-family>` aufgezählten Werte für die {{cssxref("font-family")}}-Eigenschaft.

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
