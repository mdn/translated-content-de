---
title: <generic-family>
slug: Web/CSS/Reference/Values/generic-family
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<generic-family>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert die Schlüsselwortwerte für generische Schriftfamilien, die in der {{cssxref("font")}} Kurzform und der {{cssxref("font-family")}} Langform verwendet werden. Das `<generic-family>` repräsentiert eine oder mehrere lokal installierte Schriften, die zu dieser Kategorie von Schriften gehören.

## Syntax

### Werte

Der `<generic-family>` {{Glossary("enumerated", "aufgezählte")}} Typ wird mit einem der unten aufgelisteten Werte angegeben:

- `serif`
  - : Ein Serif ist eine kleine Linie oder ein Strich, der am Ende eines größeren Strichs in einem Buchstaben angebracht ist. In Serif-Schriften haben Glyphen abschließende Striche, ausgestellte oder sich verjüngende Enden. Beispiele sind Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio und URW Palladio.

- `sans-serif`
  - : Eine Schrift ohne Serifen; Glyphen haben einfache Strichenden, ohne Verzierungen. Beispiel-Schriften für sans-serif sind Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans und Nimbus Sans L.

- `monospace`
  - : Alle Glyphen haben die gleiche feste Breite. Beispiel-Schriften für Monospace sind Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco und Lucida Console.

- `cursive`
  - : Glyphen in Kursivschriften verwenden allgemein eine kursiven Schriftstil oder einen anderen Handschriftstil, und das Ergebnis sieht mehr wie handgeschriebene Stift- oder Pinselbeschriftung aus als wie gedruckter Satz. CSS verwendet den Begriff "cursive" für eine Schrift für jedes Schriftbild, einschließlich solcher, die keine verbindenden Striche haben. Beispiel-Kursivschriften sind Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting und Apple Chancery.

- `fantasy`
  - : Fantasy-Schriften sind hauptsächlich dekorative Schriften, die spielerische Darstellungen von Zeichen enthalten. Beispiel-Fantasieschriften sind Papyrus, Herculanum, Party LET, Curlz MT, Harrington und Comic Sans MS.

- `system-ui`
  - : Glyphen werden aus der Standardschrifttype der Benutzeroberfläche auf einer bestimmten Plattform entnommen. Da sich typografische Traditionen weltweit stark unterscheiden, wird diese generische Familie für Schrifttypen bereitgestellt, die nicht klar in die anderen passen.
    > [!NOTE]
    > Wie der Name impliziert, soll `system-ui` UI-Elemente wie native Apps aussehen lassen und nicht für das Setzen großer Textabsätze verwendet werden. Dies kann dazu führen, dass die angezeigte Schriftart für einige Benutzer unpassend ist – zum Beispiel kann die Standard-Windows-CJK-Schriftart lateinische Schriften schlecht darstellen, und das `lang`-Attribut kann die angezeigte Schriftart nicht beeinflussen. Einige Betriebssysteme erlauben keine Anpassung von `system-ui`, während Browser im Allgemeinen die Anpassung der `sans-serif` Schriftfamilie erlauben. Für große Textabsätze sollten Sie `sans-serif` oder eine andere Nicht-UI-Schriftfamilie verwenden.

- `ui-serif`
  - : Die serifenbasierte Standardschrifttype der Benutzeroberfläche. Siehe die Definition von `serif` oben.

- `ui-sans-serif`
  - : Die Standardschrifttype der Benutzeroberfläche ohne Serifen. Siehe die Definition von `sans-serif` oben.

- `ui-monospace`
  - : Die monospaced Standardschrifttype der Benutzeroberfläche. Siehe die Definition von `monospace` oben.

- `ui-rounded`
  - : Die Standardschrifttype der Benutzeroberfläche mit abgerundeten Merkmalen.

- `math`
  - : Schriften zum Anzeigen mathematischer Ausdrücke, zum Beispiel hoch- und tiefgestellte Zeichen, Klammern über mehrere Zeilen, verschachtelte Ausdrücke und doppelt geschlagene Glyphen mit unterschiedlichen Bedeutungen.

- `fangsong`
  - : Ein besonderer Stil chinesischer Zeichen, der zwischen Serif-Stil Song und Kursiv-Stil Kai-Formen liegt. Dieser Stil wird häufig für Regierungsdokumente verwendet.

## Formale Syntax

{{CSSSyntaxRaw(`<generic-family> = serif | sans-serif | monospace | cursive | fantasy | system-ui | ui-serif | ui-sans-serif | ui-monospace | ui-rounded | math | fangsong`)}}

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
- [CSS-Schriftenmodul](/de/docs/Web/CSS/CSS_fonts)
