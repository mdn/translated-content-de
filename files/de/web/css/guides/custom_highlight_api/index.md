---
title: CSS Custom Highlight API
short-title: Custom Highlight API
slug: Web/CSS/Guides/Custom_highlight_API
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das **CSS Custom Highlight API** Modul bietet eine programmgesteuerte Möglichkeit, bestimmte Textbereiche, die durch Range-Objekte definiert sind, zu markieren, ohne die zugrunde liegende DOM-Struktur zu beeinträchtigen. Die Range-Objekte können dann über `::highlight()` Pseudoelemente ausgewählt werden, und Sie können Hervorhebungsstile hinzufügen und entfernen. Die Funktionen dieses Moduls können Hervorhebungseffekte erzeugen, ähnlich wie Texteditoren Rechtschreib- oder Grammatikfehler hervorheben oder Code-Editoren Syntaxfehler markieren.

Das CSS Custom Highlight API erweitert das Konzept anderer Highlight-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}} und {{cssxref('::target-text')}} durch die Möglichkeit, beliebige Textranges zu erstellen (definiert als [`Range`](/de/docs/Web/API/Range) Objekte in JavaScript) und diese über CSS zu stylen, anstatt auf browserdefinierte Ranges beschränkt zu sein.

## Custom Highlight API in Aktion

Um die Hervorhebung von Textranges auf einer Webseite mit dem CSS Custom Highlight API zu ermöglichen, erstellen Sie ein [`Range`](/de/docs/Web/API/Range) Objekt und dann ein [`Highlight`](/de/docs/Web/API/Highlight) Objekt für den Bereich. Nach der Registrierung der Hervorhebung mit der [`HighlightRegistry.set()`](/de/docs/Web/API/HighlightRegistry/set) Methode können Sie den Bereich mit dem {{cssxref("::highlight()")}} Pseudoelement auswählen. Der im `set()`-Methode definierte Name wird als Parameter des `::highlight()` Pseudoelement-Selektors verwendet, um diesen Bereich auszuwählen. Der durch das `::highlight()` Pseudoelement ausgewählte Bereich kann mit einer [begrenzten Anzahl von Eigenschaften](/de/docs/Web/CSS/Reference/Selectors/::highlight#allowable_properties) gestylt werden.

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

In diesem Beispiel wird die {{cssxref("text-decoration")}} Eigenschaft verwendet, um den `steps` Hervorhebungsbereich, der durch unser JavaScript definiert ist, durchzustreichen:

```css
::highlight(steps) {
  text-decoration: line-through;
  color: blue;
}
```

Wir erstellen ein `Range` mit einem Start- und Endknoten (was in diesem Fall derselbe Knoten ist). Wir legen dieses Range dann als `Highlight` mit der `set()`-Methode des CSS `HighlightRegistry` Interface fest.

```js
const rangeToHighlight = new Range();
const list = document.querySelector("ol");
rangeToHighlight.setStart(list, 0);
rangeToHighlight.setEnd(list, 0);

CSS.highlights.set("steps", new Highlight(rangeToHighlight));
```

Ein Ereignis-Listener aktualisiert das Ende des hervorgehobenen Bereichs, wenn sich die Anzahl der abgeschlossenen Schritte ändert:

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

### Schnittstellenerweiterungen

Dieses Modul fügt Schnittstellen, die in anderen Spezifikationen definiert sind, Eigenschaften und Methoden hinzu.

- [`CSS`](/de/docs/Web/API/CSS)
  - [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static)

## Leitfäden

- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API#concepts_and_usage)
  - : Die Konzepte und Nutzung des CSS Custom Highlight API, einschließlich der Erstellung von `Range` und `Highlight` Objekten, der Registrierung der Hervorhebungen mit dem `HighlightRegistry` und der Gestaltung der Hervorhebungen mit dem `::highlight()` Pseudoelement.

## Verwandte Konzepte

- {{CSSXref("::grammar-error")}}
- {{CSSXref("::selection")}}
- {{CSSXref("::spelling-error")}}
- {{CSSXref("::target-text")}}
- [`Range`](/de/docs/Web/API/Range) Schnittstelle und [`Range()`](/de/docs/Web/API/Range/Range) Konstruktor
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Pseudo-Element Modul](/de/docs/Web/CSS/Guides/Pseudo-elements)
- [CSS Objektmodell (CSSOM)](/de/docs/Web/API/CSS_Object_Model) APIs
