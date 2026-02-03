---
title: Pseudo-Elemente
slug: Web/CSS/Reference/Selectors/Pseudo-elements
l10n:
  sourceCommit: 21d2342d16ed78d6c72c66a71599125eb2405a31
---

Ein CSS **Pseudo-Element** ist ein Schlüsselwort, das einem Selektor hinzugefügt wird, um einen bestimmten Teil der ausgewählten Elemente zu stylen.

> [!NOTE]
> Diese Seite ist ein Index aller Pseudo-Elemente in CSS. Die Seite [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) stellt das Modul vor, das einige, aber nicht alle dieser Pseudo-Elemente definiert.

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

Doppelpunktpaare (`::`) werden für Pseudo-Elemente verwendet. Dies unterscheidet Pseudo-Elemente von [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), die in ihrer Notation einen einfachen Doppelpunkt (`:`) verwenden. Beachten Sie, dass Browser die Syntax mit einem einfachen Doppelpunkt für die ursprünglichen vier Pseudo-Elemente unterstützen: `::before`, `::after`, `::first-line`, und `::first-letter`.

Pseudo-Elemente existieren nicht unabhängig. Das Element, von dem ein Pseudo-Element Teil ist, wird als sein _ausgehendes Element_ bezeichnet. Ein Pseudo-Element muss nach allen anderen Komponenten im [komplexen](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#complex_selector) oder [zusammengesetzten](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) Selektor erscheinen. Das letzte Element im Selektor ist das ausgehende Element des Pseudo-Elements. Zum Beispiel können Sie die erste Zeile eines Absatzes mit `p::first-line` auswählen, jedoch nicht die Kinder der ersten Zeile. Daher ist `p::first-line > *` ungültig.

Ein Pseudo-Element kann basierend auf dem aktuellen Zustand des ausgehenden Elements ausgewählt werden. Zum Beispiel wählt `p:hover::first-line` die erste Zeile (Pseudo-Element) eines Absatzes aus, wenn der Absatz selbst ein Hovering-Effekt zeigt (Pseudo-Klasse).

> [!NOTE]
> Wenn eine [Selector-Liste](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#selector_list) einen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert.

## Typografische Pseudo-Elemente

- {{CSSxRef("::first-line")}}
  - : Die erste Zeilen-Box des ausgehenden Elements.
- {{CSSxRef("::first-letter")}}
  - : Der erste Buchstabe, die erste Zahl oder das erste Symbolzeichen in der ersten Zeile seines ausgehenden Elements.
- {{CSSxRef("::cue")}}
  - : Die [WebVTT](/de/docs/Web/API/WebVTT_API) Hinweise innerhalb eines ausgewählten Elements.
    Dies kann verwendet werden, um [Untertitel und andere Hinweise zu stylen](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in Medien mit VTT-Tracks.
    Das [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul definiert auch die `::postfix` und `::prefix` Sub-Pseudo-Elemente. Diese werden von keinem Browser unterstützt.

## Highlight-Pseudo-Elemente

Wählt Dokumentabschnitte basierend auf Inhalt und Dokumentstatus aus und ermöglicht es, diese Bereiche unterschiedlich zu stylen, um den Status dem Benutzer anzuzeigen.

- {{CSSxRef("::grammar-error")}}
  - : Ein Textteil, den der Browser für grammatikalisch falsch hält.
- {{CSSxRef("::highlight()")}}
  - : Die Elemente im [Highlight-Register](/de/docs/Web/API/CSS/highlights_static). Es wird verwendet, um benutzerdefinierte Hervorhebungen zu erstellen.
- {{CSSxRef("::search-text")}}
  - : Suchergebnisse, die vom "Find" oder "Find in page"-Textsuch-Feature des Benutzeragents identifiziert werden.
- {{CSSxRef("::selection")}}
  - : Der Teil eines Dokuments, der ausgewählt wurde.
- {{CSSxRef("::spelling-error")}}
  - : Ein Textteil, den der Browser für falsch geschrieben hält.
- {{CSSxRef("::target-text")}}
  - : Das Zielelement des Dokuments. Das Zielelement wird über den [Fragment-Identifikator der URL](/de/docs/Web/URI/Reference/Fragment) identifiziert.

## Baumkonforme Pseudo-Elemente

Diese Pseudo-Elemente verhalten sich wie normale Elemente und fügen sich nahtlos in das Boxmodell ein. Sie wirken wie ein Kindelement, das direkt innerhalb der Hierarchie des ausgehenden Elements gestylt werden kann.

- {{CSSxRef("::before")}}
  - : Erstellt ein Pseudo-Element, das das erste Kind des ausgewählten Elements ist.
- {{CSSxRef("::after")}}
  - : Erstellt ein Pseudo-Element, das das letzte Kind des ausgewählten Elements ist.
- {{CSSxRef("::column")}}
  - : Jedes Spaltenfragment eines [mehrspaltigen Layouts](/de/docs/Web/CSS/Guides/Multicol_layout).
- {{CSSxRef("::marker")}}
  - : Die automatisch generierte Marker-Box eines Listenelements.
- {{CSSxRef("::backdrop")}}
  - : Der Hintergrund des ausgehenden Elements, der in der {{Glossary("Top_layer", "Top-Schicht")}} gerendert wird.
- {{CSSxRef("::scroll-button()")}}
  - : Erstellt einen Button, der das Scrollen des {{Glossary("scroll_container", "Scrollcontainers")}}, auf den es angewendet wird, steuern kann.
- {{CSSxRef("::scroll-marker")}}
  - : Erstellt ein Pseudo-Element, das ein Scroll-Marker ist — ein Scrollziel-Button für sein ausgehendes Element, das in einer Scroll-Marker-Gruppe verschachtelt ist.
- {{CSSxRef("::scroll-marker-group")}}
  - : Erzeugt einen Container vor oder nach einem Scroll-Container, um die auf dem Element oder seinen Nachkommen generierten {{cssxref("::scroll-marker")}} Pseudo-Elemente aufzunehmen.

## Auf Elementen basierende Pseudo-Elemente

Diese Pseudo-Elemente sind reale Elemente, die ansonsten nicht selektierbar sind.

- {{CSSxRef("::details-content")}}
  - : Der erweiterbare/kollabierbare Inhalt eines {{HTMLElement("details")}} Elements.
- {{cssxref("::part()")}}
  - : Jedes Element innerhalb eines [Schattenbaums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein entsprechendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attribut hat.
- {{cssxref("::slotted()")}}
  - : Jedes Element, das in einen Slot innerhalb eines HTML-Templates platziert wurde.

## Formularbezogene Pseudo-Elemente

Die Pseudo-Elemente beziehen sich auf Formularelemente.

- {{CSSxRef("::checkmark")}}
  - : Visiert das Häkchen innerhalb des aktuell ausgewählten `<option>` Elements eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), um eine visuelle Anzeige, welches ausgewählt wurde, zu geben.
- {{CSSxRef("::file-selector-button")}}
  - : Der Button eines {{HTMLElement("input")}} vom [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file).
- {{CSSxRef("::picker()")}}
  - : Der Picker-Teil eines Elements, zum Beispiel der Drop-down-Picker eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).
- {{CSSxRef("::picker-icon")}}
  - : Das Picker-Icon innerhalb von Formularsteuerelementen, die ein zugeordnetes Symbol haben. Im Fall eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) wählt es den Pfeil aus, der nach unten zeigt, wenn das Auswahlfeld geschlossen ist.
- {{CSSxRef("::placeholder")}}
  - : Der Platzhaltertext in einem Eingabefeld.

## Alphabetischer Index

Durch eine Reihe von CSS-Spezifikationen definierte Pseudo-Elemente umfassen die folgenden:

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

Nicht-standardisierte, vendor-spezifische Pseudo-Elemente umfassen:

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
  - `::after::marker`: Wählt das {{CSSxRef("::marker")}} Pseudo-Element eines `::after` Pseudo-Elements aus, wenn `::after` als Listenelement mit {{CSSxRef("display", "display: list-item")}} gestylt ist.
- {{CSSxRef("::before")}}
  - `::before::marker`: Wählt das {{CSSxRef("::marker")}} Pseudo-Element eines `::before` Pseudo-Elements aus, wenn `::before` als Listenelement mit {{CSSxRef("display", "display: list-item")}} gestylt ist.

Schauen Sie sich die einzelnen Referenzseiten zu den Pseudo-Elementen für Beispiele und Informationen zur Browser-Kompatibilität an.

## Highlight-Pseudo-Elemente Vererbung

[Highlight-Pseudo-Elemente](#highlight-pseudo-elemente) wie {{CSSxref("::selection")}}, {{CSSxref("::target-text")}}, {{CSSxref("::highlight()")}}, {{CSSxref("::spelling-error")}} und {{CSSxref("::grammar-error")}} folgen einem konsistenten Vererbungsmodell, das sich von der [regulären Elementvererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) unterscheidet.

Wenn Sie Styles auf Highlight-Pseudo-Elemente anwenden, erben sie sowohl von:

1. Ihren Elternelementen (gemäß normaler Vererbung).
2. Den Highlight-Pseudo-Elementen ihrer Elternelemente (gemäß Highlight-Vererbung).

Das bedeutet, dass, wenn Sie sowohl das Highlight-Pseudo-Element eines Elternelements als auch das eines Kindelements stylen, der hervorgehobene Text des Kindes Eigenschaften aus beiden Quellen kombiniert.

Hier ist ein konkretes Beispiel.

Zuerst haben wir etwas HTML, das zwei verschachtelte {{htmlelement("div")}} Elemente enthält. Ein Teil des enthaltenen Textes befindet sich direkt im übergeordneten `<div>`, und ein Teil ist im untergeordneten `<div>` verschachtelt.

```html live-sample___highlight_inheritance
<div class="parent">
  Parent text
  <div class="child">Child text</div>
</div>
```

Als Nächstes fügen wir etwas CSS hinzu, das die Elternelemente und Kind-`<div>`-Elemente separat auswählt und ihnen unterschiedliche {{cssxref("color")}} Werte verleiht, sowie den Text des Elternteils und Kindes auswählt ({{cssxref("::selection")}}). Dies gibt jedem `<div>` eine andere {{cssxref("background-color")}} und setzt eine andere Textfarbe für die Auswahl des Elternteils fest.

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

Versuchen Sie, den Text in beiden Elementen auszuwählen. Beachten Sie, dass:

1. Wenn Sie den Text des Elternteils auswählen, verwendet er den gelben Hintergrund und die rote Textfarbe, die in `.parent::selection` definiert sind.
2. Wenn Sie den Text des Kindes auswählen, verwendet er:
   - Den orangefarbenen Hintergrund aus `.child::selection`.
   - Die rote Textfarbe, die vom `::selection` Pseudo-Element des Elternteils geerbt wird.

Dies zeigt, wie das Highlight-Pseudo-Element des Kindes sowohl von seinem übergeordneten Element als auch vom Highlight-Pseudo-Element des Elternteils erbt.

[CSS-Benutzerdefinierte Eigenschaften (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) in Highlight-Pseudo-Elementen erben von ihrem Ursprünglichen Element (dem Element, auf das sie angewendet werden), nicht durch die Highlight-Vererbungskette. Zum Beispiel:

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

Die Verwendung des universellen Selektors mit Highlight-Pseudo-Elementen verhindert die Highlighter-Vererbung. Zum Beispiel:

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
- [Änderungen bei der Vererbung für CSS-Auswahlstyling](https://developer.chrome.com/blog/selection-styling) - Detaillierte Erklärung der Änderungen im Highlight-Pseudo-Elemente-Vererbungsmodell in Chrome 134
