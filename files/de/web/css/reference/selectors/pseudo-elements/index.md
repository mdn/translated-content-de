---
title: Pseudo-Elemente
slug: Web/CSS/Reference/Selectors/Pseudo-elements
l10n:
  sourceCommit: bc294cca926abf68e1cbf8026f0bae1bf6a95325
---

Ein CSS **Pseudo-Element** ist ein Schlüsselwort, das einem Selektor hinzugefügt wird, um einen bestimmten Teil des ausgewählten Elements oder der ausgewählten Elemente zu stylen.

> [!NOTE]
> Diese Seite ist ein Index aller Pseudo-Elemente in CSS. Die [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements)-Seite stellt das Modul vor, das einige, aber nicht alle dieser Pseudo-Elemente definiert.

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

Doppelte Doppelpunkte (`::`) werden für Pseudo-Elemente verwendet. Dies unterscheidet Pseudo-Elemente von [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), die in ihrer Notation einen einzelnen Doppelpunkt (`:`) verwenden. Beachten Sie, dass Browser die Syntax mit einem einzelnen Doppelpunkt für die ursprünglichen vier Pseudo-Elemente unterstützen: `::before`, `::after`, `::first-line` und `::first-letter`.

Pseudo-Elemente existieren nicht unabhängig. Das Element, von dem ein Pseudo-Element ein Teil ist, wird als sein _ursprüngliches Element_ bezeichnet. Ein Pseudo-Element muss nach allen anderen Komponenten im [komplexen](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#complex_selector) oder [zusammengesetzten](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) Selektor erscheinen. Das letzte Element im Selektor ist das ursprüngliche Element des Pseudo-Elements. Zum Beispiel können Sie die erste Zeile eines Absatzes mit `p::first-line` auswählen, aber nicht die Kinder der ersten Zeile. Daher ist `p::first-line > *` ungültig.

Ein Pseudo-Element kann basierend auf dem aktuellen Zustand des ursprünglichen Elements ausgewählt werden. Zum Beispiel wählt `p:hover::first-line` die erste Zeile (Pseudo-Element) eines Absatzes aus, wenn der Absatz selbst gehovt wird (Pseudo-Klasse).

Die Spezifikationen erlauben es, dass einige Pseudo-Elemente basierend auf dem aktuellen Zustand des ursprünglichen Elements ausgewählt werden können. In diesen Fällen wird das Pseudo-Element nur ausgewählt, wenn es sich im selben Zustand befindet. Zum Beispiel wählt `::picker(select):hover` den aktuell gehovten Nachfahren eines anpassbaren {{htmlelement("select")}}-Elements aus, mit Ausnahme des ersten {{htmlelement("button")}}-Kindes, das nicht vom {{cssxref("::picker()")}}-Pseudo-Element ausgewählt wird. Beachten Sie jedoch, dass, wenn eine [Selektor-Liste](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#selector_list) einen ungültigen Selektor enthält, der gesamte Stilblock ignoriert wird, daher stellen Sie sicher, dass der Zustand, den Sie einschließen, vom Pseudo-Element unterstützt wird, an das er angefügt ist.

## Typografische Pseudo-Elemente

- {{CSSxRef("::first-line")}}
  - : Die erste Zeilenbox des ursprünglichen Elements.
- {{CSSxRef("::first-letter")}}
  - : Der erste Buchstabe, die erste Zahl oder das erste Symbolzeichen in der ersten Zeile seines ursprünglichen Elements.
- {{CSSxRef("::cue")}}
  - : Die [WebVTT](/de/docs/Web/API/WebVTT_API)-Hinweise innerhalb eines ausgewählten Elements. Dies kann verwendet werden, um [Untertitel und andere Hinweise zu stylen](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in Medien mit VTT-Spuren zu gestalten. Das [CSS Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements)-Modul definiert auch die `::postfix` und `::prefix` Sub-Pseudo-Elemente. Diese werden noch von keinem Browser unterstützt.

## Highlight-Pseudo-Elemente

Wählt Dokumentabschnitte basierend auf Inhalt und Dokumentstatus aus, um diese Bereiche unterschiedlich zu gestalten und diesen Status dem Benutzer anzuzeigen.

- {{CSSxRef("::grammar-error")}}
  - : Ein Textabschnitt, den der Browser für grammatisch inkorrekt hält.
- {{CSSxRef("::highlight()")}}
  - : Die Elemente im [Highlight-Register](/de/docs/Web/API/CSS/highlights_static). Es wird verwendet, um benutzerdefinierte Hervorhebungen zu erstellen.
- {{CSSxRef("::search-text")}}
  - : Suchergebnisse, die durch die Textsuchfunktion "Suchen" oder "Seite durchsuchen" des Benutzers identifiziert werden.
- {{CSSxRef("::selection")}}
  - : Der Teil eines Dokuments, der ausgewählt wurde.
- {{CSSxRef("::spelling-error")}}
  - : Ein Textabschnitt, den der Browser für falsch geschrieben hält.
- {{CSSxRef("::target-text")}}
  - : Das Ziel-Element des Dokuments. Das Ziel-Element wird durch den [Fragment-Identifikator der URL](/de/docs/Web/URI/Reference/Fragment) identifiziert.

## Baum-Konforme Pseudo-Elemente

Diese Pseudo-Elemente verhalten sich wie gewöhnliche Elemente und fügen sich nahtlos in das Boxmodell ein. Sie fungieren als Kind-Element, das direkt innerhalb der Hierarchie des ursprünglichen Elements gestaltet werden kann.

- {{CSSxRef("::before")}}
  - : Erstellt ein Pseudo-Element, das das erste Kind des ausgewählten Elements ist.
- {{CSSxRef("::after")}}
  - : Erstellt ein Pseudo-Element, das das letzte Kind des ausgewählten Elements ist.
- {{CSSxRef("::column")}}
  - : Jedes Spaltenfragment eines [Mehrspaltenlayouts](/de/docs/Web/CSS/Guides/Multicol_layout).
- {{CSSxRef("::marker")}}
  - : Der automatisch generierte Marker-Box eines Listenelements.
- {{CSSxRef("::backdrop")}}
  - : Die Kulisse des ursprünglichen Elements, die in der {{Glossary("Top_layer", "obersten Schicht")}} gerendert wird.
- {{CSSxRef("::scroll-button()")}}
  - : Erstellt eine Schaltfläche, die das Scrollen des {{Glossary("scroll_container", "Scroll-Containers")}} steuern kann, auf den es angewendet wird.
- {{CSSxRef("::scroll-marker")}}
  - : Erstellt ein Pseudo-Element, das ein Scroll-Marker ist — eine Scroll-Ziel-Schaltfläche für sein ursprüngliches Element, das in einer Scroll-Marker-Gruppe verschachtelt ist.
- {{CSSxRef("::scroll-marker-group")}}
  - : Erzeugt einen Container vor oder nach einem Scroll-Container, um die {{cssxref("::scroll-marker")}}-Pseudo-Elemente zu enthalten, die auf dem Element oder seinen Nachkommen generiert werden.

## Element-gestützte Pseudo-Elemente

Diese Pseudo-Elemente sind reale Elemente, die anderweitig nicht auswählbar sind.

- {{CSSxRef("::details-content")}}
  - : Der erweiterbare/zusammenklappbare Inhalt eines {{HTMLElement("details")}}-Elements.
- {{cssxref("::part()")}}
  - : Jedes Element innerhalb eines [Schattenbaums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein übereinstimmendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut hat.
- {{cssxref("::slotted()")}}
  - : Jedes Element, das in einen Slot innerhalb einer HTML-Vorlage eingesetzt wurde.

## Formularbezogene Pseudo-Elemente

Die Pseudo-Elemente sind auf Formularelemente bezogen.

- {{CSSxRef("::checkmark")}}
  - : Zielt auf das Häkchen, das sich im derzeit ausgewählten `<option>`-Element eines [anpassbaren select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) befindet, um einen visuellen Hinweis darauf zu geben, welches ausgewählt ist.
- {{CSSxRef("::file-selector-button")}}
  - : Die Schaltfläche eines {{HTMLElement("input")}} des [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file).
- {{CSSxRef("::picker()")}}
  - : Der Picker-Teil eines Elements, zum Beispiel der Dropdown-Picker eines [anpassbaren select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).
- {{CSSxRef("::picker-icon")}}
  - : Das Picker-Symbol innerhalb von Formularelementen, die ein zugehöriges Symbol haben. Im Fall eines [anpassbaren select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) wählt es den Pfeil aus, der nach unten zeigt, wenn der Select geschlossen ist.
- {{CSSxRef("::placeholder")}}
  - : Der Platzhaltertext in einem Eingabefeld.

## Alphabetischer Index

Die durch eine Reihe von CSS-Spezifikationen definierten Pseudo-Elemente umfassen Folgendes:

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

### Nicht standardisierte Pseudo-Elemente

Nicht standardisierte pseudo-elemente, die durch einen Anbieter-Präfix unterstützt werden, beinhalten:

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

Sie können einige Pseudo-Element-Selektoren miteinander verketten, um verschachtelte Pseudo-Elemente innerhalb anderer Pseudo-Elemente zu stylen. Die folgenden verschachtelten Pseudo-Element-Kombinationen werden unterstützt:

- {{CSSxRef("::after")}}
  - `::after::marker`: Wählt das {{CSSxRef("::marker")}}-Pseudo-Element eines `::after`-Pseudo-Elements aus, wenn `::after` als Listenelement mit {{CSSxRef("display", "display: list-item")}} gestylt ist.
- {{CSSxRef("::before")}}
  - `::before::marker`: Wählt das {{CSSxRef("::marker")}}-Pseudo-Element eines `::before`-Pseudo-Elements aus, wenn `::before` als Listenelement mit {{CSSxRef("display", "display: list-item")}} gestylt ist.

Sehen Sie sich die einzelnen Referenzseiten für Pseudo-Elemente für Beispiele und Informationen zur Browser-Kompatibilität an.

## Hervorhebung von Pseudo-Elementen Vererbung

[Highlight-Pseudo-Elemente](#highlight-pseudo-elemente), wie {{CSSxref("::selection")}}, {{CSSxref("::target-text")}}, {{CSSxref("::highlight()")}}, {{CSSxref("::spelling-error")}}, und {{CSSxref("::grammar-error")}}, folgen einem konsistenten Vererbungsmodell, das sich von der [regulären Elementvererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) unterscheidet.

Wenn Sie Stile auf Highlight-Pseudo-Elemente anwenden, erben sie sowohl von:

1. Ihren Elternelementen (gemäß normaler Vererbung).
2. Den Highlight-Pseudo-Elementen ihrer Elternelemente (gemäß der Highlight-Vererbung).

Dies bedeutet, dass wenn Sie sowohl ein Highlight-Pseudo-Element eines Elternelements als auch eines Kind-Elements stylen, der hervorgehobene Text des Kindes Eigenschaften aus beiden Quellen kombiniert.

Hier ist ein konkretes Beispiel.

Zuerst haben wir etwas HTML, das zwei verschachtelte {{htmlelement("div")}}-Elemente enthält. Ein Teil des enthaltenen Textinhalts befindet sich direkt im übergeordneten `<div>`, und ein Teil ist im untergeordneten `<div>` verschachtelt.

```html live-sample___highlight_inheritance
<div class="parent">
  Parent text
  <div class="child">Child text</div>
</div>
```

Als nächstes fügen wir etwas CSS hinzu, das die übergeordneten und untergeordneten `<div>`-Elemente separat auswählt und ihnen unterschiedliche {{cssxref("color")}}-Werte zuweist, und das ausgewählte Text des Eltern- und Kind-Elements ({{cssxref("::selection")}}). Dies gibt jedem `<div>` eine andere {{cssxref("background-color")}} und setzt eine andere Textfarbe auf die Eltern-Auswahl.

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

Das Beispiel wird wie folgt dargestellt:

{{EmbedLiveSample("highlight_inheritance", , "150")}}

Versuchen Sie, den Text sowohl in den übergeordneten als auch in den untergeordneten Elementen auszuwählen. Beachten Sie, dass:

1. Wenn Sie den Elterntext auswählen, wird der gelbe Hintergrund und die rote Textfarbe verwendet, die in `.parent::selection` definiert sind.
2. Wenn Sie den Kindertext auswählen, wird verwendet:
   - Der orangefarbene Hintergrund von `.child::selection`.
   - Die rote Textfarbe, die vom `::selection`-Pseudo-Element des Elternteils geerbt wird.

Dies demonstriert, wie das Highlight-Pseudo-Element des Kindes sowohl vom Elternelement als auch vom Highlight-Pseudo-Element des Elternteils erbt.

[CSS-Benutzerdefinierte Eigenschaften (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) in Highlight-Pseudo-Elementen erben von ihrem ursprünglichen Element (dem Element, auf das sie angewendet werden), nicht durch die Highlight-Vererbungskette. Zum Beispiel:

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

Wenn Sie den universellen Selektor mit Highlight-Pseudo-Elementen verwenden, verhindert er die Highlight-Vererbung. Zum Beispiel:

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

- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
- [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- [Lernen: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Vererbungsänderungen für das CSS-Selektionsstyling](https://developer.chrome.com/blog/selection-styling) - Detaillierte Erklärung der Änderungen im Vererbungsmodell für Highlight-Pseudo-Elemente in Chrome 134
