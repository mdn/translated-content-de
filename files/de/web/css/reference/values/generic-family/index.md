---
title: <generic-family>
slug: Web/CSS/Reference/Values/generic-family
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<generic-family>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert die Schlüsselwortwerte für generische Schriftartenfamilien, die in der {{cssxref("font")}} Kurzschreibweise und in den {{cssxref("font-family")}} Langhand-Eigenschaften verwendet werden. Der `<generic-family>` repräsentiert eine oder mehrere lokal installierte Schriftarten, die zu dieser Kategorie von Schriftarten gehören.

## Syntax

### Werte

Der `<generic-family>` {{Glossary("enumerated", "aufgezählte")}} Typ wird mit einem der unten aufgeführten Werte angegeben:

- `serif`

  - : Ein Serif ist eine kleine Linie oder ein Strich, der am Ende eines größeren Strichs in einem Buchstaben angebracht ist. In Serif-Schriften haben die Glyphen Abschlussstriche, verbreiterte oder sich verjüngende Enden. Beispiele sind Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio und URW Palladio.

- `sans-serif`

  - : Eine Schriftart ohne Serifen; Glyphen haben glatte Strichenden ohne Verzierungen. Beispiele für Sans-Serif-Schriften sind Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans und Nimbus Sans L.

- `monospace`

  - : Alle Glyphen haben die gleiche feste Breite. Beispiele für Monospace-Schriften sind Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco und Lucida Console.

- `cursive`

  - : Glyphen in Kursivschriftarten verwenden im Allgemeinen eine Kursivschrift oder einen anderen Handschriftstil, und das Ergebnis sieht mehr wie handgeschriebenes Stift- oder Pinselwerk aus als wie gedrucktes Schriftsatz. CSS verwendet den Begriff "cursive", um auf eine Schriftart für jedes Skript anzuwenden, einschließlich solcher, die keine zusammenhängenden Striche haben. Beispiele für Kursivschriftarten sind Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting und Apple Chancery.

- `fantasy`

  - : Fantasy-Schriften sind hauptsächlich dekorative Schriften, die spielerische Darstellungen von Charakteren enthalten. Beispiele für Fantasy-Schriften sind Papyrus, Herculanum, Party LET, Curlz MT, Harrington und Comic Sans MS.

- `system-ui`

  - : Glyphen stammen aus der Standardschriftart der Benutzeroberfläche auf einer gegebenen Plattform. Da typografische Traditionen weltweit stark variieren, wird diese generische Familie für Schriftarten bereitgestellt, die nicht eindeutig in die anderen passen.
    > [!NOTE]
    > Wie der Name schon sagt, ist `system-ui` dafür gedacht, UI-Elemente wie native Apps aussehen zu lassen, und nicht für das Setzen großer Textabsätze. Es kann dazu führen, dass die angezeigte Schriftart für einige Benutzer unerwünscht ist — zum Beispiel kann die Standardschriftart Windows CJK lateinische Skripte schlecht rendern, und das `lang`-Attribut kann die angezeigte Schriftart möglicherweise nicht beeinflussen. Einige Betriebssysteme erlauben keine Anpassung von `system-ui`, während Browser im Allgemeinen eine Anpassung der `sans-serif`-Schriftfamilie erlauben. Für große Absätze verwenden Sie stattdessen `sans-serif` oder eine andere Nicht-UI-Schriftfamilie.

- `ui-serif`

  - : Die Standardschriftart für serifenbetonte Benutzeroberflächen. Siehe die Definition von `serif` oben.

- `ui-sans-serif`

  - : Die Standardschriftart für serifenlose Benutzeroberflächen. Siehe die Definition von `sans-serif` oben.

- `ui-monospace`

  - : Die Standardschriftart für monospaced Benutzeroberflächen. Siehe die Definition von `monospace` oben.

- `ui-rounded`

  - : Die Standardschriftart für Benutzeroberflächen mit abgerundeten Merkmalen.

- `math`

  - : Schriftarten zur Darstellung mathematischer Ausdrücke, beispielsweise Hoch- und Tiefstellen, Klammern, die über mehrere Zeilen gehen, verschachtelte Ausdrücke und doppelt gestrichene Glyphen mit unterschiedlichen Bedeutungen.

- `fangsong`
  - : Ein besonderer Stil chinesischer Schriftzeichen, der zwischen dem serifähnlichen Song- und dem kursiven Kai-Stil liegt. Dieser Stil wird oft für offizielle Dokumente verwendet.

## Formale Syntax

{{CSSSyntaxRaw(`<generic-family> = serif | sans-serif | monospace | cursive | fantasy | system-ui | ui-serif | ui-sans-serif | ui-monospace | ui-rounded | math | fangsong`)}}

## Beispiele

Dieses Beispiel zeigt mehrere der `<generic-family>` aufgezählten Werte für die {{cssxref("font-family")}}-Eigenschaft.

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
- [CSS-Schriftenmodul](/de/docs/Web/CSS/Guides/Fonts)
