---
title: "`<generic-family>` CSS-Typ"
short-title: <generic-family>
slug: Web/CSS/Reference/Values/generic-family
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<generic-family>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert die Schlüsselwort-Werte für generische Schriftfamilien, die in den {{cssxref("font")}} Shorthand- und {{cssxref("font-family")}} Longhand-Eigenschaften verwendet werden. Das `<generic-family>` repräsentiert eine oder mehrere lokal installierte Schriften, die zu dieser Schriftkategorie gehören.

## Syntax

### Werte

Der `<generic-family>` {{Glossary("enumerated", "enumerierte")}} Typ wird unter Verwendung eines der unten aufgeführten Werte festgelegt:

- `serif`
  - : Ein Serif ist eine kleine Linie oder ein Strich, der am Ende eines größeren Strichs in einem Buchstaben befestigt ist. In Serif-Schriften haben Glyphen abschließende Striche, ausgestellte oder sich verjüngende Enden. Beispiele hierfür sind Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio und URW Palladio.

- `sans-serif`
  - : Eine Schrift ohne Serifen; Glyphen haben einfache Strichenden ohne Verzierungen. Beispielhafte sans-serif-Schriften sind Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans und Nimbus Sans L.

- `monospace`
  - : Alle Glyphen haben die gleiche feste Breite. Beispielhafte Monospace-Schriften sind Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco und Lucida Console.

- `cursive`
  - : Glyphen in Kursivschriften verwenden im Allgemeinen eine kursivartige oder andere Handschrift, und das Ergebnis sieht eher wie handgeschriebenes Stift- oder Pinsel-Schreiben als wie gedruckte Satzschrift aus. CSS verwendet den Begriff "cursive", um auf eine Schrift für jedes Skript zuzugreifen, einschließlich solcher ohne verbindende Striche. Beispielhafte Kursive sind Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting und Apple Chancery.

- `fantasy`
  - : Fantasieschriften sind in erster Linie dekorative Schriften, die spielerische Darstellungen von Zeichen enthalten. Beispielhafte Fantasieschriften sind Papyrus, Herculanum, Party LET, Curlz MT, Harrington und Comic Sans MS.

- `system-ui`
  - : Glyphen werden von der standardmäßigen Benutzeroberflächen-Schrift auf einer bestimmten Plattform genommen. Da sich typografische Traditionen weltweit stark unterscheiden, wird diese generische Familie für Schriftarten bereitgestellt, die sich nicht sauber in die anderen einordnen lassen.
    > [!NOTE]
    > Wie der Name schon sagt, ist `system-ui` dazu gedacht, UI-Elemente wie native Apps aussehen zu lassen und nicht dafür, große Texte zu setzen. Für einige Benutzer kann das angezeigte Schriftbild unerwünscht sein - zum Beispiel kann die Standard-Windows-CJK-Schrift lateinische Schriften schlecht rendern und die `lang`-Attributeigenschaft möglicherweise keine Auswirkungen auf die angezeigte Schrift haben. Einige Betriebssysteme erlauben keine Anpassung von `system-ui`, während Browser im Allgemeinen die Anpassung der `sans-serif` Schriftartfamilie erlauben. Für große Textblöcke verwenden Sie `sans-serif` oder eine andere nicht-UI-Schriftartfamilie.

- `ui-serif`
  - : Die standardmäßige Benutzeroberflächen-Serifenschrift. Siehe die Definition von `serif` oben.

- `ui-sans-serif`
  - : Die standardmäßige Benutzeroberflächen-sans-serif-Schrift. Siehe die Definition von `sans-serif` oben.

- `ui-monospace`
  - : Die standardmäßige Benutzeroberflächen-Monospace-Schrift. Siehe die Definition von `monospace` oben.

- `ui-rounded`
  - : Die standardmäßige Benutzeroberflächen-Schrift mit abgerundeten Merkmalen.

- `math`
  - : Schriften zur Darstellung mathematischer Ausdrücke, zum Beispiel Hoch- und Tiefstellungen, Klammern, die über mehrere Zeilen gehen, verschachtelte Ausdrücke und doppelstrichige Glyphen mit unterschiedlichen Bedeutungen.

- `fangsong`
  - : Ein besonderer Stil chinesischer Schriftzeichen, der zwischen dem serifartigen Song-Stil und dem kursivartigen Kai-Stil liegt. Dieser Stil wird oft für Regierungsdokumente verwendet.

## Formale Syntax

{{CSSSyntaxRaw(`<generic-family> = serif | sans-serif | monospace | cursive | fantasy | system-ui | ui-serif | ui-sans-serif | ui-monospace | ui-rounded | math | fangsong`)}}

## Beispiele

Dieses Beispiel zeigt mehrere der `<generic-family>` Aufzählungswerte für die {{cssxref("font-family")}}-Eigenschaft.

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
- [CSS-Schriftartenmodul](/de/docs/Web/CSS/Guides/Fonts)
