---
title: CSS Custom Highlight API
short-title: Custom Highlight API
slug: Web/CSS/Guides/Custom_highlight_API
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS Custom Highlight API**-Modul bietet eine programmatische Möglichkeit, bestimmte Textbereiche, die durch Range-Objekte definiert sind, zu markieren, ohne die zugrundeliegende DOM-Struktur zu beeinflussen. Diese Range-Objekte können anschließend über `::highlight()` Pseudoelemente ausgewählt werden, wobei Hervorhebungsstile hinzugefügt und entfernt werden können. Die Funktionen dieses Moduls können Hervorhebungseffekte ähnlich wie bei Texteditoren, die Rechtschreib- oder Grammatikfehler markieren, und Code-Editoren, die Syntaxfehler hervorheben, erzeugen.

Das CSS Custom Highlight API erweitert das Konzept anderer Hervorhebungs-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}} und {{cssxref('::target-text')}}. Es bietet eine Möglichkeit, beliebige Textbereiche (definiert als [`Range`](/de/docs/Web/API/Range)-Objekte in JavaScript) zu erstellen und diese über CSS zu stylen, anstatt auf von Browsern definierte Bereiche beschränkt zu sein.

## Custom Highlight API in Aktion

Um Styling von Textbereichen auf einer Webseite mit dem CSS Custom Highlight API zu ermöglichen, erstellen Sie ein [`Range`](/de/docs/Web/API/Range)-Objekt und anschließend ein [`Highlight`](/de/docs/Web/API/Highlight)-Objekt für den Bereich. Nachdem Sie die Hervorhebung mit der Methode [`HighlightRegistry.set()`](/de/docs/Web/API/HighlightRegistry/set) registriert haben, können Sie den Bereich mit dem {{cssxref("::highlight", "::highlight()")}} Pseudoelement auswählen. Der in der `set()`-Methode definierte Name wird als Parameter des `::highlight()` Pseudoelementselectors verwendet, um diesen Bereich auszuwählen. Der Bereich, der durch das `::highlight()` Pseudoelement ausgewählt wird, kann mit einer [begrenzten Anzahl von Eigenschaften](/de/docs/Web/CSS/Reference/Selectors/::highlight#allowable_properties) gestylt werden.

```html-nolint hidden
<h1>Directions</h1>
<h2>Lincoln Memorial to Martin Luther King, Jr. Memorial</h2>
<ol><li>Head south on Lincoln Memorial Circle</li
  ><li>Turn right toward Independence Ave</li
  ><li>Turn left onto Independence Ave</li
  ><li>Turn right onto West Basin Dr</li
  ><li>Look up when you reach 64 Independence Ave!</li>
</ol>
<hr />
<label
  >Number of steps completed:
  <input type="number" min="0" max="5" value="0" id="currentStep" />
</label>
```

Dieses Beispiel verwendet die {{cssxref("text-decoration")}}-Eigenschaft, um den `steps` Hervorhebungsbereich, der durch unser JavaScript definiert ist, durchzustreichen:

```css
::highlight(steps) {
  text-decoration: line-through;
  color: blue;
}
```

Wir erstellen ein `Range` mit einem Start- und Endknoten (welches in diesem Fall derselbe Knoten ist). Wir setzen dann diesen Bereich als `Highlight` mit der `set()`-Methode der CSS `HighlightRegistry`-Schnittstelle.

```js
const rangeToHighlight = new Range();
const list = document.querySelector("ol");
rangeToHighlight.setStart(list, 0);
rangeToHighlight.setEnd(list, 0);

CSS.highlights.set("steps", new Highlight(rangeToHighlight));
```

Ein Event Listener aktualisiert das Ende des hervorgehobenen Bereichs, wenn sich die Anzahl der abgeschlossenen Schritte ändert:

```js
const currentPositionSlider = document.querySelector("input");
currentPositionSlider.addEventListener("change", (e) => {
  rangeToHighlight.setEnd(list, e.target.value);
});
```

{{ EmbedLiveSample('Custom highlight API in action', 700, 300) }}

## Referenz

### Pseudoelemente

- {{CSSXref("::highlight()")}}

### Schnittstellen

- [`Highlight`](/de/docs/Web/API/Highlight)
- [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)

### Erweiterungen von Schnittstellen

Dieses Modul fügt Schnittstellen, die in anderen Spezifikationen definiert sind, Eigenschaften und Methoden hinzu.

- [`CSS`](/de/docs/Web/API/CSS)
  - [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static)

## Leitfäden

- [CSS custom highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API#concepts_and_usage)
  - : Die Konzepte und die Nutzung des CSS Custom Highlight API, einschließlich der Erstellung von `Range`- und `Highlight`-Objekten, der Registrierung der Hervorhebungen mit dem `HighlightRegistry` und der Stylisierung der Hervorhebungen mit dem `::highlight()` Pseudoelement.

## Verwandte Konzepte

- {{CSSXref("::grammar-error")}}
- {{CSSXref("::selection")}}
- {{CSSXref("::spelling-error")}}
- {{CSSXref("::target-text")}}
- [`Range`](/de/docs/Web/API/Range)-Schnittstelle und [`Range()`](/de/docs/Web/API/Range/Range) Konstruktor
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Pseudoelement Modul](/de/docs/Web/CSS/Guides/Pseudo-elements)
- [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) APIs
