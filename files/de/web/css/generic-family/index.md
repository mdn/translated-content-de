---
title: <generic-family>
slug: Web/CSS/generic-family
l10n:
  sourceCommit: d2f848cb963307d3f56da84128da8cf221e4f72f
---

Der **`<generic-family>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert die Schlüsselwortwerte für generische Schriftartenfamilien, die in den {{cssxref("font")}} Kurzschrift- und {{cssxref("font-family")}} Langschrift-Eigenschaften verwendet werden. Das `<generic-family>` repräsentiert eine oder mehrere lokal installierte Schriftarten, die zu dieser Kategorie von Schriftarten gehören.

## Syntax

### Werte

Der `<generic-family>` {{Glossary("enumerated", "Aufzählungs-")}} Typ wird unter Verwendung eines der unten aufgeführten Werte angegeben:

- `serif`
  - : Eine Serif ist eine kleine Linie oder ein Strich, der am Ende eines größeren Strichs in einem Buchstaben angebracht ist. In Serifenschriften haben die Glyphen Abschlusssstriche, ausladende oder verjüngte Enden. Beispiele sind Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio und URW Palladio.

- `sans-serif`
  - : Eine Schriftart ohne Serifen; Glyphen haben einfache Strich-Enden ohne Verzierungen. Beispielhafte Sans-Serif-Schriften sind Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans und Nimbus Sans L.

- `monospace`
  - : Alle Glyphen haben dieselbe feste Breite. Beispielhafte Monospace-Schriften sind Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco und Lucida Console.

- `cursive`
  - : Glyphen in kursiven Schriften nutzen im Allgemeinen eine Kursive oder einen anderen Handschriftstil, und das Ergebnis sieht mehr wie handgeschriebene Feder- oder Pinsel-Schrift als wie gedruckter Satz aus. CSS verwendet den Begriff "cursive", um auf eine Schrift für jedes Skript anzuwenden, einschließlich solcher, die keine verbindenden Striche haben. Beispiele für Kursivschrift sind Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting und Apple Chancery.

- `fantasy`
  - : Fantasieschriften sind hauptsächlich dekorative Schriften, die spielerische Darstellungen von Zeichen enthalten. Beispielhafte Fantasy-Schriften sind Papyrus, Herculanum, Party LET, Curlz MT, Harrington und Comic Sans MS.

- `system-ui`
  - : Glyphen werden von der Standardbenutzeroberflächenschrift auf einer bestimmten Plattform genommen. Da sich die typografischen Traditionen weltweit stark unterscheiden, wird diese generische Familie für Schriftarten bereitgestellt, die sich nicht eindeutig in die anderen einordnen lassen.
    > [!NOTE]
    > Wie der Name schon sagt, soll `system-ui` UI-Elemente wie native Apps aussehen lassen und nicht für den Satz großer Textabsätze gedacht sein. Es kann dazu führen, dass die angezeigte Schriftart für einige Benutzer unerwünscht ist – beispielsweise kann die Standard-Windows-CJK-Schrift Latin-Skripte schlecht darstellen, und das `lang` Attribut kann die angezeigte Schriftart nicht beeinflussen. Einige Betriebssysteme erlauben keine Anpassung von `system-ui`, während Browser im Allgemeinen die Anpassung der `sans-serif` Schriftfamilie erlauben. Für große Absätze sollte `sans-serif` oder eine andere Nicht-UI-Schriftfamilie verwendet werden.

- `ui-serif`
  - : Die Standardbenutzeroberfläche Serifenschrift. Siehe die Definition von `serif` oben.

- `ui-sans-serif`
  - : Die Standardbenutzeroberfläche Sans-Serifenschrift. Siehe die Definition von `sans-serif` oben.

- `ui-monospace`
  - : Die Standardbenutzeroberfläche Monospace-Schrift. Siehe die Definition von `monospace` oben.

- `ui-rounded`
  - : Die Standardbenutzeroberfläche Schrift mit abgerundeten Eigenschaften.

- `math`
  - : Schriften zur Darstellung mathematischer Ausdrücke, beispielsweise Hoch- und Tiefstellungen, Klammern, die mehrere Zeilen übergreifen, verschachtelte Ausdrücke und doppelt geschlagene Glyphe mit unterschiedlichen Bedeutungen.

- `emoji`
  - : Schriften, die speziell dafür konzipiert sind, Emoji darzustellen.

- `fangsong`
  - : Ein besonderer Stil chinesischer Zeichen, der zwischen den mit Serifen versehenen Song-Stil und den kursivartigen Kai-Formen liegt. Dieser Stil wird häufig für Regierungsdokumente verwendet.

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
- [CSS-Schriftmodule](/de/docs/Web/CSS/CSS_fonts)
