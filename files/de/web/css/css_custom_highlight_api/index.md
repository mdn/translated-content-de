---
title: CSS Custom Highlight API
slug: Web/CSS/CSS_custom_highlight_API
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Das **CSS Custom Highlight API**-Modul bietet eine programmatische Möglichkeit, bestimmte Textbereiche zu markieren, die durch Range-Objekte definiert sind, ohne die zugrunde liegende DOM-Struktur zu beeinflussen. Die Range-Objekte können dann über `::highlight()` Pseudoelemente ausgewählt und mit Hervorhebungsstilen versehen oder diese entfernt werden. Die Funktionen dieses Moduls können Hervorhebungseffekte erzeugen, ähnlich wie Texteditoren Rechtschreib- oder Grammatikfehler markieren und Code-Editoren Syntaxfehler hervorheben.

Das CSS Custom Highlight API erweitert das Konzept anderer Hervorhebungs-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}}, und {{cssxref('::target-text')}} indem es eine Möglichkeit bietet, beliebige Textbereiche (definiert als [`Range`](/de/docs/Web/API/Range) Objekte in JavaScript) zu erstellen und über CSS zu stylen, anstatt auf browserdefinierte Bereiche beschränkt zu sein.

## Custom Highlight API in Aktion

Um Textbereiche auf einer Webseite mit dem CSS Custom Highlight API zu stylen, erstellen Sie ein [`Range`](/de/docs/Web/API/Range) Objekt und dann ein [`Highlight`](/de/docs/Web/API/Highlight) Objekt für diesen Bereich. Nachdem das Highlight mittels der Methode [`HighlightRegistry.set()`](/de/docs/Web/API/HighlightRegistry/set) registriert wurde, können Sie den Bereich mit dem {{cssxref("::highlight", "::highlight()")}} Pseudoelement auswählen. Der im `set()`-Methode definierte Name wird als Parameter des `::highlight()` Pseudoelementselectors verwendet, um diesen Bereich auszuwählen. Der durch das `::highlight()` Pseudoelement ausgewählte Bereich kann mit einer [begrenzten Anzahl von Eigenschaften](/de/docs/Web/CSS/Reference/Selectors/::highlight#allowable_properties) gestylt werden.

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

Dieses Beispiel verwendet die {{cssxref("text-decoration")}} Eigenschaft, um den `steps`-Hervorhebungsbereich zu durchstreichen, der durch unser JavaScript definiert ist:

```css
::highlight(steps) {
  text-decoration: line-through;
  color: blue;
}
```

Wir erstellen ein `Range` mit einem Anfangs- und Endknoten (welcher in diesem Fall derselbe Knoten ist). Wir setzen dann diesen Bereich als `Highlight` mittels der `set()`-Methode der CSS `HighlightRegistry`-Schnittstelle.

```js
const rangeToHighlight = new Range();
const list = document.querySelector("ol");
rangeToHighlight.setStart(list, 0);
rangeToHighlight.setEnd(list, 0);

CSS.highlights.set("steps", new Highlight(rangeToHighlight));
```

Ein Event-Listener aktualisiert das Ende des hervorgehobenen Bereichs, wenn sich die Anzahl der erledigten Schritte ändert:

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

- [CSS custom highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API#concepts_and_usage)
  - : Die Konzepte und die Verwendung des CSS Custom Highlight API, einschließlich der Erstellung von `Range` und `Highlight` Objekten, der Registrierung der Highlights mit dem `HighlightRegistry` und dem Stylen der Highlights mittels des `::highlight()` Pseudoelements.

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

- [CSS-Pseudo-Element-Modul](/de/docs/Web/CSS/Guides/Pseudo-elements)
- [CSS Objektmodell (CSSOM)](/de/docs/Web/API/CSS_Object_Model) APIs
