---
title: CSS Custom Highlight API
short-title: Custom Highlight API
slug: Web/CSS/Guides/Custom_highlight_API
l10n:
  sourceCommit: a2d0346638937e9c92c500dcb568803778e8354e
---

Das Modul **CSS Custom Highlight API** bietet eine programmatische Möglichkeit, spezifische Textbereiche zu targetieren, die durch Range-Objekte definiert sind, ohne die zugrunde liegende DOM-Struktur zu beeinflussen. Die Range-Objekte können dann über `::highlight()` Pseudoelemente ausgewählt werden, und es können Hervorhebungsstile hinzugefügt und entfernt werden. Die Funktionen dieses Moduls können Hervorhebungseffekte erzeugen, die ähnlich sind wie die Art und Weise, wie Texteditoren Rechtschreib- oder Grammatikfehler hervorheben und Code-Editoren Syntaxfehler anzeigen.

Die CSS Custom Highlight API erweitert das Konzept anderer Pseudoelemente zur Hervorhebung wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}} und {{cssxref('::target-text')}} durch die Bereitstellung einer Möglichkeit, beliebige Textranges (definiert als [`Range`](/de/docs/Web/API/Range) Objekte in JavaScript) zu erstellen und über CSS zu stylen, anstatt auf browser-definierte Ranges beschränkt zu sein.

## Custom Highlight API in Aktion

Um Textbereiche auf einer Webseite mit der CSS Custom Highlight API zu stylen, erstellen Sie ein [`Range`](/de/docs/Web/API/Range) Objekt und dann ein [`Highlight`](/de/docs/Web/API/Highlight) Objekt für den Range. Nachdem Sie die Hervorhebung mit der Methode [`HighlightRegistry.set()`](/de/docs/Web/API/HighlightRegistry/set) registriert haben, können Sie den Bereich mit dem {{cssxref("::highlight()")}} Pseudoelement auswählen. Der im `set()`-Methode definierte Name wird als Parameter des `::highlight()` Pseudoelementselectors verwendet, um diesen Bereich auszuwählen. Der Bereich, der durch das `::highlight()` Pseudoelement ausgewählt wird, kann mit einer [begrenzten Anzahl von Eigenschaften](/de/docs/Web/CSS/Reference/Selectors/::highlight#allowable_properties) gestylt werden.

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

Dieses Beispiel verwendet die Eigenschaft {{cssxref("text-decoration")}}, um den `steps` Highlight-Bereich zu durchstreichen, der durch unser JavaScript definiert wird:

```css
::highlight(steps) {
  text-decoration: line-through;
  color: blue;
}
```

Wir erstellen ein `Range` mit einem Start- und Endknoten (welcher in diesem Fall derselbe Knoten ist). Dann setzen wir diesen Bereich als `Highlight` mit der `set()` Methode der CSS `HighlightRegistry` Schnittstelle.

```js
const rangeToHighlight = new Range();
const list = document.querySelector("ol");
rangeToHighlight.setStart(list, 0);
rangeToHighlight.setEnd(list, 0);

CSS.highlights.set("steps", new Highlight(rangeToHighlight));
```

Ein Event-Listener aktualisiert das Ende des hervorgehobenen Bereichs, wenn sich die Anzahl der abgeschlossenen Schritte ändert:

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

Dieses Modul fügt Eigenschaften und Methoden zu Schnittstellen hinzu, die in anderen Spezifikationen definiert sind.

- [`CSS`](/de/docs/Web/API/CSS)
  - [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static)

## Leitfäden

- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API#concepts_and_usage)
  - : Die Konzepte und die Verwendung der CSS Custom Highlight API, einschließlich der Erstellung von `Range`- und `Highlight`-Objekten, der Registrierung der Hervorhebungen mit der `HighlightRegistry` und der Gestaltung der Hervorhebungen mit dem `::highlight()` Pseudoelement.

## Verwandte Konzepte

- {{CSSXref("::grammar-error")}}
- {{CSSXref("::selection")}}
- {{CSSXref("::spelling-error")}}
- {{CSSXref("::target-text")}}
- [`AbstractRange`](/de/docs/Web/API/AbstractRange) Schnittstelle
- [`Range`](/de/docs/Web/API/Range) Schnittstelle und [`Range()`](/de/docs/Web/API/Range/Range) Konstruktor
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Pseudoelementmodul](/de/docs/Web/CSS/Guides/Pseudo-elements)
- [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) APIs
