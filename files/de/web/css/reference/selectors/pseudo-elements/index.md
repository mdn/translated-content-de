---
title: Pseudo-Elemente
slug: Web/CSS/Reference/Selectors/Pseudo-elements
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Ein CSS **Pseudo-Element** ist ein Schlüsselwort, das zu einem Selektor hinzugefügt wird und es Ihnen ermöglicht, einen bestimmten Teil der ausgewählten Elemente zu stylen.

> [!NOTE]
> Diese Seite ist ein Index aller Pseudo-Elemente in CSS. Die Seite über [CSS Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) stellt das Modul vor, das einige, aber nicht alle, dieser Pseudo-Elemente definiert.

## Syntax

```css
selector::pseudo-element {
  property: value;
}
```

Zum Beispiel kann {{CSSxRef("::first-line")}} verwendet werden, um die Schriftart der ersten Zeile eines Absatzes zu ändern.

```css
/* The first line of every <p> element. */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

Doppelte Doppelpunkte (`::`) werden für Pseudo-Elemente verwendet. Dies unterscheidet Pseudo-Elemente von [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), die einen einzelnen Doppelpunkt (`:`) in ihrer Notation verwenden. Beachten Sie, dass Browser die Syntax mit einem einzelnen Doppelpunkt für die ursprünglichen vier Pseudo-Elemente unterstützen: `::before`, `::after`, `::first-line` und `::first-letter`.

Pseudo-Elemente existieren nicht unabhängig. Das Element, dessen Teil ein Pseudo-Element ist, wird als _ursprüngliches Element_ bezeichnet. Ein Pseudo-Element muss nach allen anderen Komponenten im [komplexen](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#complex_selector) oder [zusammengesetzten](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) Selektor erscheinen. Das letzte Element im Selektor ist das ursprüngliche Element des Pseudo-Elements. Zum Beispiel können Sie die erste Zeile eines Absatzes mit `p::first-line` auswählen, aber nicht die Kinder der ersten Linie. Daher ist `p::first-line > *` ungültig.

Ein Pseudo-Element kann basierend auf dem aktuellen Zustand des ursprünglichen Elements ausgewählt werden. Zum Beispiel wählt `p:hover::first-line` die erste Zeile (Pseudo-Element) eines Absatzes aus, wenn der Absatz selbst gehovt wird (Pseudo-Klasse).

> [!NOTE]
> Wenn eine [Selektor-Liste](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#selector_list) einen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert.

## Typografische Pseudo-Elemente

- {{CSSxRef("::first-line")}}
  - : Die erste Zeilenbox des ursprünglichen Elements.
- {{CSSxRef("::first-letter")}}
  - : Der erste Buchstabe, die Zahl oder das Symbolzeichen auf der ersten Zeile seines ursprünglichen Elements.
- {{CSSxRef("::cue")}}
  - : Die [WebVTT](/de/docs/Web/API/WebVTT_API) Hinweise innerhalb eines ausgewählten Elements.
    Dies kann verwendet werden, um [Untertitel und andere Hinweise](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in Medien mit VTT-Tracks zu stylen.
    Das [CSS Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul definiert auch die `::postfix` und `::prefix` Sub-Pseudo-Elemente. Diese werden von keinem Browser unterstützt.

## Highlight-Pseudo-Elemente

Wählt Dokumentabschnitte basierend auf Inhalt und Dokumentstatus aus, sodass diese Bereiche unterschiedlich gestylt werden können, um diesen Status dem Benutzer anzuzeigen.

- {{CSSxRef("::selection")}}
  - : Der Teil eines Dokuments, der ausgewählt wurde.
- {{CSSxRef("::target-text")}}
  - : Das Ziel-Element des Dokuments. Das Ziel-Element wird mit dem Fragment-Bezeichner der URL identifiziert.
- {{CSSxRef("::spelling-error")}}
  - : Ein Textteil, den der Browser für falsch geschrieben hält.
- {{CSSxRef("::grammar-error")}}
  - : Ein Textteil, den der Browser für grammatikalisch falsch hält.
- {{CSSxRef("::highlight()")}}
  - : Die Elemente im [Highlight-Register](/de/docs/Web/API/CSS/highlights_static). Es wird verwendet, um benutzerdefinierte Hervorhebungen zu erstellen.

## Baumgebundene Pseudo-Elemente

Diese Pseudo-Elemente verhalten sich wie reguläre Elemente, die sich nahtlos im Box-Modell einfügen. Sie fungieren als Kind-Element, das direkt innerhalb der Hierarchie des ursprünglichen Elements gestylt werden kann.

- {{CSSxRef("::before")}}
  - : Erstellt ein Pseudo-Element, das das erste Kind des ausgewählten Elements ist.
- {{CSSxRef("::after")}}
  - : Erstellt ein Pseudo-Element, das das letzte Kind des ausgewählten Elements ist.
- {{CSSxRef("::column")}}
  - : Jedes Säulenfragment eines [Mehrspaltenlayouts](/de/docs/Web/CSS/Guides/Multicol_layout).
- {{CSSxRef("::marker")}}
  - : Die automatisch generierte Marker-Box eines Listenelements.
- {{CSSxRef("::backdrop")}}
  - : Der Hintergrund des ursprünglichen Elements, das im {{Glossary("Top_layer", "Top Layer")}} gerendert wird.
- {{CSSxRef("::scroll-button()")}}
  - : Erstellt einen Knopf, der das Scrollen des {{Glossary("scroll_container", "Scroll-Containers")}} steuern kann, auf den er angewendet wird.
- {{CSSxRef("::scroll-marker")}}
  - : Erstellt ein Pseudo-Element, das ein Scroll-Marker ist — ein Scroll-Ziel-Knopf für sein ursprüngliches Element, das in einer Scroll-Marker-Gruppe verschachtelt ist.
- {{CSSxRef("::scroll-marker-group")}}
  - : Erzeugt einen Container vor oder nach einem Scroll-Container, um die {{cssxref("::scroll-marker")}} Pseudo-Elemente zu enthalten, die auf dem Element oder seinen Nachkommen generiert werden.

## Elementunterstützende Pseudo-Elemente

Diese Pseudo-Elemente sind reale Elemente, die anderweitig nicht auswählbar sind.

- {{CSSxRef("::details-content")}}
  - : Der erweiterbare/einklappbare Inhalt eines {{HTMLElement("details")}} Elements.
- {{cssxref("::part()")}}
  - : Ein beliebiges Element innerhalb eines [Shadow-DOMs](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attribut hat.
- {{cssxref("::slotted()")}}
  - : Ein Element, das in einen Slot innerhalb eines HTML-Templates eingefügt wird.

## Formularbezogene Pseudo-Elemente

Die Pseudo-Elemente beziehen sich auf Formularelemente.

- {{CSSxRef("::checkmark")}}
  - : Zielt auf das Häkchen, das im aktuell ausgewählten `<option>`-Element eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) platziert ist, um eine visuelle Anzeige zu geben, welches ausgewählt ist.
- {{CSSxRef("::file-selector-button")}}
  - : Der Knopf eines {{HTMLElement("input") }} vom [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file).
- {{CSSxRef("::picker()")}}
  - : Der Picker-Teil eines Elements, zum Beispiel der Dropdown-Picker eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).
- {{CSSxRef("::picker-icon")}}
  - : Das Picker-Symbol innerhalb von Formularelementen, die mit einem Symbol verbunden sind. Im Fall eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) wählt es den Pfeil, der nach unten zeigt, wenn das Auswahlfeld geschlossen ist.
- {{CSSxRef("::placeholder")}}
  - : Der Platzhaltertext in einem Eingabefeld.

## Alphabetischer Index

Pseudo-Elemente, die durch eine Reihe von CSS-Spezifikationen definiert sind, umfassen die folgenden:

A

- {{CSSxRef("::after")}}

B

- {{CSSxRef("::backdrop")}}
- {{CSSxRef("::before")}}

C

- {{CSSxRef("::column")}}
- {{CSSxRef("::checkmark")}}
- {{CSSxRef("::cue")}} (und {{cssxref("::cue()")}})

D

- {{CSSxRef("::details-content")}}

F

- {{CSSxRef("::file-selector-button")}}
- {{CSSxRef("::first-letter")}}
- {{CSSxRef("::first-line")}}

G

- {{CSSxRef("::grammar-error")}}

H

- {{CSSxRef("::highlight()")}}

M

- {{CSSxRef("::marker")}}

P

- {{cssxref("::part()")}}
- {{CSSxRef("::picker()")}}
- {{CSSxRef("::picker-icon")}}
- {{CSSxRef("::placeholder")}}

S

- {{CSSxRef("::scroll-button()")}}
- {{CSSxRef("::scroll-marker")}}
- {{CSSxRef("::scroll-marker-group")}}
- {{CSSxRef("::selection")}}
- {{cssxref("::slotted()")}}
- {{CSSxRef("::spelling-error")}}

T

- {{CSSxRef("::target-text")}}

V

- {{cssxref("::view-transition")}}
- {{cssxref("::view-transition-image-pair()")}}
- {{cssxref("::view-transition-group()")}}
- {{cssxref("::view-transition-new()")}}
- {{cssxref("::view-transition-old()")}}

### Nicht-standardisierte Pseudo-Elemente

Nicht-standardisierte, herstellerpräfixierte Pseudo-Elemente umfassen:

#### `-moz-` Präfix

- {{CSSxRef("::-moz-color-swatch")}}
- {{CSSxRef("::-moz-focus-inner")}}
- {{CSSxRef("::-moz-list-bullet")}}
- {{CSSxRef("::-moz-list-number")}}
- {{CSSxRef("::-moz-meter-bar")}}
- {{CSSxRef("::-moz-progress-bar")}}
- {{CSSxRef("::-moz-range-progress")}}
- {{CSSxRef("::-moz-range-thumb")}}
- {{CSSxRef("::-moz-range-track")}}

#### `-webkit-` Präfix

- {{CSSxRef("::-webkit-inner-spin-button")}}
- {{CSSxRef("::-webkit-meter-bar")}}
- {{CSSxRef("::-webkit-meter-even-less-good-value")}}
- {{CSSxRef("::-webkit-meter-inner-element")}}
- {{CSSxRef("::-webkit-meter-optimum-value")}}
- {{CSSxRef("::-webkit-meter-suboptimum-value")}}
- {{CSSxRef("::-webkit-progress-bar")}}
- {{CSSxRef("::-webkit-progress-inner-element")}}
- {{CSSxRef("::-webkit-progress-value")}}
- {{CSSxRef("::-webkit-scrollbar")}}
- {{CSSxRef("::-webkit-search-cancel-button")}}
- {{CSSxRef("::-webkit-search-results-button")}}
- {{CSSxRef("::-webkit-slider-runnable-track")}}
- {{CSSxRef("::-webkit-slider-thumb")}}

## Verschachtelung von Pseudo-Elementen

Sie können einige Pseudo-Element-Selektoren miteinander verbinden, um verschachtelte Pseudo-Elemente innerhalb anderer Pseudo-Elemente zu stylen. Die folgenden verschachtelten Pseudo-Element-Kombinationen werden unterstützt:

- {{CSSxRef("::after")}}
  - `::after::marker`: Wählt das {{CSSxRef("::marker")}} Pseudo-Element eines `::after` Pseudo-Elements aus, wenn `::after` als Listenelement gestylt ist, mit {{CSSxRef("display", "display: list-item")}}.
- {{CSSxRef("::before")}}
  - `::before::marker`: Wählt das {{CSSxRef("::marker")}} Pseudo-Element eines `::before` Pseudo-Elements aus, wenn `::before` als Listenelement gestylt ist, mit {{CSSxRef("display", "display: list-item")}}.

Sehen Sie sich die individuellen Pseudo-Element-Referenzseiten für Beispiele und Informationen zur Browser-Kompatibilität an.

## Vererbung von Highlight-Pseudo-Elementen

[Highlight-Pseudo-Elemente](#highlight-pseudo-elemente), wie {{CSSxref("::selection")}}, {{CSSxref("::target-text")}}, {{CSSxref("::highlight()")}}, {{CSSxref("::spelling-error")}}, und {{CSSxref("::grammar-error")}}, folgen einem konsistenten Vererbungsmodell, das sich von der [regulären Elementvererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) unterscheidet.

Wenn Sie Stile auf Highlight-Pseudo-Elemente anwenden, erben sie sowohl von:

1. Ihren Elternelementen (gemäß normaler Vererbung).
2. Den Highlight-Pseudo-Elementen ihrer Elternelemente (gemäß Highlight-Vererbung).

Dies bedeutet, dass, wenn Sie sowohl das Highlight-Pseudo-Element eines Elternelements als auch das eines Kindelements stylen, der Text des Kindelements Eigenschaften aus beiden Quellen kombiniert.

Hier ist ein konkretes Beispiel.

Zuerst haben wir etwas HTML, das zwei verschachtelte {{htmlelement("div")}} Elemente enthält. Einige der enthaltenen Textinhalte befinden sich direkt innerhalb des Eltern-`<div>`, einige sind innerhalb des Kinder-`<div>` verschachtelt.

```html live-sample___highlight_inheritance
<div class="parent">
  Parent text
  <div class="child">Child text</div>
</div>
```

Als nächstes fügen wir etwas CSS hinzu, das die Eltern- und Kinder-`<div>` Elemente separat auswählt und ihnen unterschiedliche {{cssxref("color")}} Werte gibt, und das ausgewählte Textfeld des Eltern- und Kind-`<div>` auswählt ({{cssxref("::selection")}}). Dies gibt jedem `<div>` eine unterschiedliche {{cssxref("background-color")}} und setzt eine unterschiedliche Textfarbe `color` für das Elternselektionsfeld.

```css live-sample___highlight_inheritance
/* Style for the parent element */
.parent {
  color: blue;
}

/* Style for the parent's selected text */
.parent::selection {
  background-color: yellow;
  color: red;
}

/* Style for the child element */
.child {
  color: green;
}

/* Style for the child's selected text */
.child::selection {
  background-color: orange;
}
```

Das Beispiel wird wie folgt gerendert:

{{EmbedLiveSample("highlight_inheritance", , "150")}}

Versuchen Sie, den Text in beiden Eltern- und Kind-Elementen auszuwählen. Beachten Sie, dass:

1. Wenn Sie den Elterntext auswählen, verwendet er den gelben Hintergrund und die rote Textfarbe, die in `.parent::selection` definiert sind.
2. Wenn Sie den Kindertext auswählen, verwendet er:
   - Den orangefarbenen Hintergrund von `.child::selection`.
   - Die rote Textfarbe, die vom `::selection`-Pseudo-Element des Elternteils geerbt wurde.

Dies demonstriert, wie das Highlight-Pseudo-Element des Kindes sowohl von seinem Elternelement als auch vom Highlight-Pseudo-Element des Elternteils erbt.

[CSS-Custom-Properties (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) in Highlight-Pseudo-Elementen erben von ihrem ursprünglichen Element (dem Element, auf das sie angewendet werden), nicht durch die Highlight-Vererbungskette. Zum Beispiel:

```css
:root {
  --selection-color: lightgreen;
}

::selection {
  color: var(--selection-color);
}

.blue {
  --selection-color: blue;
}
```

Wenn der universelle Selektor mit Highlight-Pseudo-Elementen verwendet wird, verhindert er die Highlight-Vererbung. Zum Beispiel:

```css
/* This prevents highlight inheritance */
*::selection {
  color: lightgreen;
}

/* Prefer this to allow inheritance */
:root::selection {
  color: lightgreen;
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
- [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [CSS Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- [Lernen: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Vererbungsänderungen für CSS-Auswahldarstellung](https://developer.chrome.com/blog/selection-styling) - Detaillierte Erklärung der Änderungen im Highlight-Pseudo-Element Vererbungsmodell in Chrome 134
