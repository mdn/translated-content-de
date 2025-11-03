---
title: CSS Custom Highlight API
slug: Web/CSS/CSS_custom_highlight_API
l10n:
  sourceCommit: 1d4acd0cc450af2e293b9856d5763b92a0812e30
---

Das Modul **CSS Custom Highlight API** bietet eine programmatische Möglichkeit, bestimmte Textbereiche, die durch `Range`-Objekte definiert sind, gezielt anzusprechen, ohne die zugrunde liegende DOM-Struktur zu beeinflussen. Die `Range`-Objekte können dann über `::highlight()` Pseudo-Elemente ausgewählt und mit Hervorhebungsstilen versehen oder diese entfernt werden. Die Funktionen dieses Moduls ermöglichen Hervorhebungseffekte ähnlich wie bei Texteditoren, die Rechtschreib- oder Grammatikfehler hervorheben, und Code-Editoren, die Syntaxfehler markieren.

Die CSS Custom Highlight API erweitert das Konzept anderer Hervorhebungs-Pseudo-Elemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}}, und {{cssxref('::target-text')}} durch die Bereitstellung einer Möglichkeit, beliebige Textranges zu erstellen (definiert als [`Range`](/de/docs/Web/API/Range)-Objekte in JavaScript) und diese über CSS zu stylen, anstatt auf durch den Browser definierte Ranges beschränkt zu sein.

## Custom Highlight API in Aktion

Um das Stylen von Textranges auf einer Webseite mithilfe der CSS Custom Highlight API zu ermöglichen, erstellen Sie ein [`Range`](/de/docs/Web/API/Range)-Objekt und anschließend ein [`Highlight`](/de/docs/Web/API/Highlight)-Objekt für den `Range`. Nach der Registrierung der Hervorhebung mit der Methode [`HighlightRegistry.set()`](/de/docs/Web/API/HighlightRegistry/set) können Sie den Range dann mit dem {{cssxref("::highlight", "::highlight()")}} Pseudo-Element auswählen. Der im `set()`-Methode definierte Name wird als Parameter des `::highlight()` Pseudo-Element Selektors verwendet, um diesen Range auszuwählen. Der durch das `::highlight()` Pseudo-Element ausgewählte Range kann mit einer [begrenzten Anzahl von Eigenschaften](/de/docs/Web/CSS/Reference/Selectors/::highlight#allowable_properties) gestylt werden.

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

Dieses Beispiel verwendet die Eigenschaft {{cssxref("text-decoration")}}, um den `steps`-Hervorhebungsbereich, der durch unser JavaScript definiert ist, durchzustreichen:

```css
::highlight(steps) {
  text-decoration: line-through;
  color: blue;
}
```

Wir erstellen einen `Range` mit einem Start- und Endknoten (was in diesem Fall derselbe Knoten ist). Wir setzen diesen Range dann als `Highlight` mithilfe der `set()`-Methode der CSS `HighlightRegistry`-Schnittstelle.

```js
const rangeToHighlight = new Range();
const list = document.querySelector("ol");
rangeToHighlight.setStart(list, 0);
rangeToHighlight.setEnd(list, 0);

CSS.highlights.set("steps", new Highlight(rangeToHighlight));
```

Ein Ereignislistener aktualisiert das Ende des hervorgehobenen Bereichs, wenn sich die Anzahl der abgeschlossenen Schritte ändert:

```js
const currentPositionSlider = document.querySelector("input");
currentPositionSlider.addEventListener("change", (e) => {
  rangeToHighlight.setEnd(list, e.target.value);
});
```

{{ EmbedLiveSample('Custom highlight API in action', 700, 300) }}

## Referenz

### Pseudo-Elemente

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
  - : Die Konzepte und Verwendung der CSS Custom Highlight API, einschließlich der Erstellung von `Range` und `Highlight`-Objekten, der Registrierung der Hervorhebungen mithilfe der `HighlightRegistry` und dem Stylen der Hervorhebungen mithilfe des `::highlight()` Pseudo-Elements.

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

- [CSS-Pseudo-Element-Modul](/de/docs/Web/CSS/CSS_pseudo-elements)
- [CSS-Objektmodell (CSSOM)](/de/docs/Web/API/CSS_Object_Model) APIs
