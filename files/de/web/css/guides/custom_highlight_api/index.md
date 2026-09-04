---
title: CSS Custom Highlight API
short-title: Custom Highlight API
slug: Web/CSS/Guides/Custom_highlight_API
l10n:
  sourceCommit: c26d4cc8e9b10c504587531c49fa82b7b646be18
---

Das Modul der **CSS Custom Highlight API** bietet eine programmgesteuerte Möglichkeit, bestimmte Textbereiche zu definieren, die durch `Range`-Objekte spezifiziert werden, ohne die zugrunde liegende DOM-Struktur zu verändern. Die `Range`-Objekte können dann über `::highlight()`-Pseudoelemente ausgewählt und mit Hervorhebungsstilen versehen oder entfernt werden. Mit den Funktionen dieses Moduls können Hervorhebungseffekte ähnlich denen in Texteditoren erzielt werden, die Rechtschreib- oder Grammatikfehler hervorheben, oder in Code-Editoren, die Syntaxfehler anzeigen.

Die CSS Custom Highlight API erweitert das Konzept anderer Highlight-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}} und {{cssxref('::target-text')}}. Sie bietet die Möglichkeit, beliebige Textbereiche zu erstellen (als [`Range`](/de/docs/Web/API/Range)-Objekte in JavaScript definiert) und sie über CSS zu stylen, anstatt auf vom Browser definierte Bereiche beschränkt zu sein.

## Custom Highlight API in Aktion

Um Textbereiche auf einer Webseite mithilfe der CSS Custom Highlight API zu stylen, erstellen Sie ein [`Range`](/de/docs/Web/API/Range)-Objekt, gefolgt von einem [`Highlight`](/de/docs/Web/API/Highlight)-Objekt für diesen Bereich. Nach der Registrierung der Hervorhebung mit der [`HighlightRegistry.set()`](/de/docs/Web/API/HighlightRegistry/set)-Methode können Sie den Bereich mit dem {{cssxref("::highlight()")}}-Pseudoelement auswählen. Der im `set()`-Methode definierte Name wird als Parameter des `::highlight()`-Pseudoelement-Selektors verwendet, um diesen Bereich auszuwählen. Der durch das `::highlight()`-Pseudoelement ausgewählte Bereich kann mit einer [begrenzten Anzahl von Eigenschaften](/de/docs/Web/CSS/Reference/Selectors/::highlight#allowable_properties) gestylt werden.

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

In diesem Beispiel wird die {{cssxref("text-decoration")}}-Eigenschaft verwendet, um den `steps`-Hervorhebungsbereich, der durch unser JavaScript definiert ist, durchzustreichen:

```css
::highlight(steps) {
  text-decoration: line-through;
  color: blue;
}
```

Wir erstellen ein `Range` mit einem Start- und Endknoten (was in diesem Fall derselbe Knoten ist). Wir setzen diesen Bereich dann als `Highlight` mit der `set()`-Methode der CSS `HighlightRegistry`-Schnittstelle.

```js
const rangeToHighlight = new Range();
const list = document.querySelector("ol");
rangeToHighlight.setStart(list, 0);
rangeToHighlight.setEnd(list, 0);

CSS.highlights.set("steps", new Highlight(rangeToHighlight));
```

Ein Ereignis-Listener aktualisiert das Ende des hervorgehobenen Bereichs, wenn sich die Anzahl der erledigten Schritte ändert:

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

### Erweiterungen der Schnittstellen

Dieses Modul fügt Eigenschaften und Methoden zu Schnittstellen hinzu, die in anderen Spezifikationen definiert sind.

- [`CSS`](/de/docs/Web/API/CSS)
  - [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static)

## Leitfäden

- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API#concepts_and_usage)
  - : Die Konzepte und die Verwendung der CSS Custom Highlight API, einschließlich der Erstellung von `Range`- und `Highlight`-Objekten, der Registrierung der Hervorhebungen mit der `HighlightRegistry` und der Gestaltung der Hervorhebungen mit dem `::highlight()`-Pseudoelement.

## Verwandte Konzepte

- {{CSSXref("::grammar-error")}}
- {{CSSXref("::selection")}}
- {{CSSXref("::spelling-error")}}
- {{CSSXref("::target-text")}}
- [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Schnittstelle
- [`Range`](/de/docs/Web/API/Range)-Schnittstelle und [`Range()`](/de/docs/Web/API/Range/Range)-Konstruktor
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Pseudo-Element-Modul](/de/docs/Web/CSS/Guides/Pseudo-elements)
- [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) APIs
