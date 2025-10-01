---
title: <generic-family>
slug: Web/CSS/generic-family
l10n:
  sourceCommit: 11ece47da8e1e4ef0ceba62d44c763fd29b5992f
---

Der **`<generic-family>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert die Schlüsselwortwerte für generische Schriftfamilien, die in den {{cssxref("font")}} Kurz- und {{cssxref("font-family")}} Langform-Eigenschaften verwendet werden. Die `<generic-family>` repräsentiert eine oder mehrere lokal installierte Schriften, die zu dieser Kategorie von Schriften gehören.

## Syntax

### Werte

Der `<generic-family>` {{Glossary("enumerated", "auflistbare")}} Typ wird mit einem der nachstehend aufgeführten Werte angegeben:

- `serif`
  - : Eine Serif ist eine kleine Linie oder ein Strich, der am Ende eines größeren Strichs in einem Buchstaben angebracht ist. In Serif-Schriften haben Glyphen Abschlussstriche, ausgestellte oder sich verjüngende Enden. Beispiele umfassen Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio und URW Palladio.

- `sans-serif`
  - : Eine Schrift ohne Serifen; Glyphen haben einfache Strichenden, ohne Verzierungen. Beispielhafte Sans-Serif-Schriften sind Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans und Nimbus Sans L.

- `monospace`
  - : Alle Glyphen haben die gleiche feste Breite. Beispielhafte Monospace-Schriften sind Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco und Lucida Console.

- `cursive`
  - : Glyphen in kursiven Schriften verwenden im Allgemeinen eine kursive Schrift oder einen anderen Handschriftstil, und das Ergebnis sieht eher wie handgeschriebenes Stift- oder Pinselgeschriebenes als wie gedrucktes Setzen aus. CSS verwendet den Begriff "cursive" für eine Schrift für beliebige Schriftzeichen, einschließlich solcher ohne verbindende Striche. Beispielhafte Kursive sind Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting und Apple Chancery.

- `fantasy`
  - : Fantasy-Schriften sind hauptsächlich dekorative Schriften, die spielerische Darstellungen von Zeichen enthalten. Beispielhafte Fantasy-Schriften sind Papyrus, Herculanum, Party LET, Curlz MT, Harrington und Comic Sans MS.

- `system-ui`
  - : Glyphen stammen aus der Standard-UI-Schrift einer bestimmten Plattform. Da typografische Traditionen weltweit stark variieren, wird diese generische Familie für Schriftarten bereitgestellt, die nicht klar in die anderen Kategorien passen.
    > [!NOTE]
    > Wie der Name schon sagt, soll `system-ui` UI-Elemente wie native Apps aussehen lassen und nicht für das Setzen großer Textabsätze verwendet werden. Es kann dazu führen, dass die angezeigte Schriftart für einige Benutzer unerwünscht ist — zum Beispiel kann die Standardschriftart des Windows-CJK für Lateinschriften schlecht rendern, und das `lang` Attribut beeinflusst möglicherweise nicht die angezeigte Schrift. Einige Betriebssysteme erlauben keine Anpassung von `system-ui`, während Browser im Allgemeinen die Anpassung der `sans-serif` Schriftfamilie erlauben. Für große Absätze verwenden Sie `sans-serif` oder eine andere Nicht-UI-Schriftfamilie.

- `ui-serif`
  - : Die serifenbetonte Standard-UI-Schrift. Siehe die Definition von `serif` oben.

- `ui-sans-serif`
  - : Die serifenlose Standard-UI-Schrift. Siehe die Definition von `sans-serif` oben.

- `ui-monospace`
  - : Die Standard-UI-Schrift mit fester Breite. Siehe die Definition von `monospace` oben.

- `ui-rounded`
  - : Die Standard-UI-Schrift mit abgerundeten Merkmalen.

- `math`
  - : Schriften für die Darstellung mathematischer Ausdrücke, beispielsweise Hoch- und Tiefstellungen, Klammern über mehrere Zeilen, verschachtelte Ausdrücke und doppelt geschlagene Glyphen mit unterschiedlichen Bedeutungen.

- `fangsong`
  - : Ein besonderer Stil chinesischer Zeichen zwischen dem serifartigen Song- und dem kursiven Kai-Stil. Dieser Stil wird häufig für Regierungsdokumente verwendet.

## Formale Syntax

{{CSSSyntaxRaw(`<generic-family> = serif | sans-serif | monospace | cursive | fantasy | system-ui | ui-serif | ui-sans-serif | ui-monospace | ui-rounded | math | fangsong`)}}

## Beispiele

Dieses Beispiel demonstriert mehrere der `<generic-family>` auflistbaren Werte für die {{cssxref("font-family")}} Eigenschaft.

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
