---
title: Pseudo-Elemente
slug: Web/CSS/Reference/Selectors/Pseudo-elements
l10n:
  sourceCommit: 93b85a5bc2b4589d93185263fd2c14381c36f821
---

Ein CSS **Pseudo-Element** ist ein Schlüsselwort, das zu einem Selektor hinzugefügt wird und es Ihnen ermöglicht, einen bestimmten Teil des ausgewählten Elements(s) zu stylen.

> [!NOTE]
> Diese Seite ist ein Index aller Pseudo-Elemente in CSS. Die Seite [CSS Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) führt das Modul ein, das einige, aber nicht alle dieser Pseudo-Elemente definiert.

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

Doppelpunkte (`::`) werden für Pseudo-Elemente verwendet. Dies unterscheidet Pseudo-Elemente von [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), die in ihrer Notation einen einfachen Doppelpunkt (`:`) verwenden. Beachten Sie, dass Browser die Einfachkolonsyntax für die ursprünglichen vier Pseudo-Elemente unterstützen: `::before`, `::after`, `::first-line` und `::first-letter`.

Pseudo-Elemente existieren nicht unabhängig. Das Element, von dem ein Pseudo-Element ein Teil ist, wird als sein _ausgehendes Element_ bezeichnet. Ein Pseudo-Element muss nach allen anderen Komponenten im [komplexen](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#complex_selector) oder [zusammengesetzten](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) Selektor erscheinen. Das letzte Element im Selektor ist das ausgehende Element des Pseudo-Elements. Zum Beispiel können Sie die erste Zeile eines Absatzes mit `p::first-line` auswählen, aber nicht die Kinder der ersten Zeile. Also ist `p::first-line > *` ungültig.

Ein Pseudo-Element kann basierend auf dem aktuellen Zustand des ausgehenden Elements ausgewählt werden. Zum Beispiel wählt `p:hover::first-line` die erste Zeile (Pseudo-Element) eines Absatzes aus, wenn der Absatz selbst gerade überfahren wird (Pseudo-Klasse).

> [!NOTE]
> Wenn eine [Selektorliste](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#selector_list) einen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert.

## Typografische Pseudo-Elemente

- {{CSSxRef("::first-line")}}
  - : Die erste Zeilen-Box des ausgehenden Elements.
- {{CSSxRef("::first-letter")}}
  - : Der erste Buchstabe, die Zahl oder das Symbolzeichen in der ersten Zeile seines ausgehenden Elements.
- {{CSSxRef("::cue")}}
  - : Die [WebVTT](/de/docs/Web/API/WebVTT_API) Cues innerhalb eines ausgewählten Elements.
    Dies kann verwendet werden, um [Untertitel und andere Cues zu stylen](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in Medien mit VTT-Tracks.
    Das [CSS Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul definiert außerdem die `::postfix` und `::prefix` Sub-Pseudo-Elemente. Diese werden von keinem Browser unterstützt.

## Highlight Pseudo-Elemente

Selektiert Dokumentabschnitte basierend auf Inhalt und Dokumentstatus und ermöglicht es, diese Bereiche unterschiedlich zu stylen, um diesen Status dem Nutzer anzuzeigen.

- {{CSSxRef("::selection")}}
  - : Der Teil eines Dokuments, der ausgewählt wurde.
- {{CSSxRef("::target-text")}}
  - : Das Ziel-Element des Dokuments. Das Ziel-Element wird mithilfe des Fragment-Identifiers der URL identifiziert.
- {{CSSxRef("::spelling-error")}}
  - : Ein Textabschnitt, den der Browser für falsch geschrieben hält.
- {{CSSxRef("::grammar-error")}}
  - : Ein Textabschnitt, den der Browser für grammatikalisch falsch hält.
- {{CSSxRef("::highlight()")}}
  - : Die Elemente im [Highlight-Register](/de/docs/Web/API/CSS/highlights_static). Es wird verwendet, um benutzerdefinierte Hervorhebungen zu erstellen.

## Baumkonforme Pseudo-Elemente

Diese Pseudo-Elemente verhalten sich wie reguläre Elemente, die sich nahtlos in das Box-Modell einfügen. Sie agieren als Kindelement, das direkt innerhalb der Hierarchie des ausgehenden Elements gestylt werden kann.

- {{CSSxRef("::before")}}
  - : Erstellt ein Pseudo-Element, das das erste Kind des ausgewählten Elements ist.
- {{CSSxRef("::after")}}
  - : Erstellt ein Pseudo-Element, das das letzte Kind des ausgewählten Elements ist.
- {{CSSxRef("::column")}}
  - : Jedes Spaltenfragment eines [Mehrspaltenlayouts](/de/docs/Web/CSS/Guides/Multicol_layout).
- {{CSSxRef("::marker")}}
  - : Die automatisch generierte Marker-Box eines Listenelements.
- {{CSSxRef("::backdrop")}}
  - : Der Hintergrund des ausgehenden Elements, dargestellt in der {{Glossary("Top_layer", "oberen Schicht")}}.
- {{CSSxRef("::scroll-button()")}}
  - : Erstellt einen Button, der das Scrollen des {{Glossary("scroll_container", "Scroll-Containers")}} steuert, auf den er angewendet wird.
- {{CSSxRef("::scroll-marker")}}
  - : Erstellt ein Pseudo-Element, das ein Scroll-Marker ist — ein Scroll-Ziel-Button für sein ausgehendes Element, das in einer Scroll-Marker-Gruppe verschachtelt ist.
- {{CSSxRef("::scroll-marker-group")}}
  - : Generiert einen Container vor oder nach einem Scroll-Container, um die von dem Element oder seinen Nachfahren generierten {{cssxref("::scroll-marker")}} Pseudo-Elemente zu enthalten.

## Elementgestützte Pseudo-Elemente

Diese Pseudo-Elemente sind echte Elemente, die sonst nicht auswählbar sind.

- {{CSSxRef("::details-content")}}
  - : Die ein- und ausblendbaren Inhalte eines {{HTMLElement("details")}} Elements.
- {{CSSxRef("::part", "::part()")}}
  - : Jedes Element innerhalb eines [Shadow-Baums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attribut hat.
- {{CSSxRef("::slotted", "::slotted()")}}
  - : Jedes Element, das in einem Slot innerhalb einer HTML-Vorlage platziert ist.

## Formularbezogene Pseudo-Elemente

Die Pseudo-Elemente sind mit Formularelementen verbunden.

- {{CSSxRef("::checkmark")}}
  - : Zielt auf das Häkchen im derzeit ausgewählten `<option>`-Element eines [anpassbaren Auswahlelements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), um eine visuelle Anzeige des ausgewählten Elements zu bieten.
- {{CSSxRef("::file-selector-button")}}
  - : Der Button eines {{HTMLElement("input") }} vom [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file).
- {{CSSxRef("::picker()")}}
  - : Der Auswahlteil eines Elements, zum Beispiel der Drop-Down-Auswähler eines [anpassbaren Auswahlelements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).
- {{CSSxRef("::picker-icon")}}
  - : Das Auswahl-Icon innerhalb der Formularelemente, die ein zugeordnetes Symbol haben. Im Fall eines [anpassbaren Auswahlelements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) wählt es den Pfeil aus, der nach unten zeigt, wenn die Auswahl geschlossen ist.
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
- {{CSSxRef("::cue")}} (und {{CSSxRef("::cue", "::cue()")}})

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

- {{CSSxRef("::part", "::part()")}}
- {{CSSxRef("::picker()")}}
- {{CSSxRef("::picker-icon")}}
- {{CSSxRef("::placeholder")}}

S

- {{CSSxRef("::scroll-button()")}}
- {{CSSxRef("::scroll-marker")}}
- {{CSSxRef("::scroll-marker-group")}}
- {{CSSxRef("::selection")}}
- {{CSSxRef("::slotted", "::slotted()")}}
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

Nicht-standardisierte, mit Anbieter-Präfix versehenen Pseudo-Elemente umfassen:

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

## Pseudo-Elemente verschachteln

Sie können einige Pseudo-Elemente-Selektoren zusammen verketten, um Pseudo-Elemente zu stylen, die innerhalb anderer Pseudo-Elemente verschachtelt sind. Die folgenden verschachtelten Pseudo-Element-Kombinationen werden unterstützt:

- {{CSSxRef("::after")}}
  - `::after::marker`: Wählt das {{CSSxRef("::marker")}} Pseudo-Element eines `::after` Pseudo-Elements aus, wenn `::after` als Listenelement gestylt ist, mit {{CSSxRef("display", "display: list-item")}}.
- {{CSSxRef("::before")}}
  - `::before::marker`: Wählt das {{CSSxRef("::marker")}} Pseudo-Element eines `::before` Pseudo-Elements aus, wenn `::before` als Listenelement gestylt ist, mit {{CSSxRef("display", "display: list-item")}}.

Sehen Sie sich die einzelnen Referenzseiten der Pseudo-Elemente für Beispiele und Informationen zur Browser-Kompatibilität an.

## Highlight-Pseudo-Elemente Vererbung

[Highlight Pseudo-Elemente](#highlight_pseudo-elemente), wie {{CSSxref("::selection")}}, {{CSSxref("::target-text")}}, {{CSSxref("::highlight()")}}, {{CSSxref("::spelling-error")}}, und {{CSSxref("::grammar-error")}}, folgen einem konsistenten Vererbungsmodell, das sich von der [regulären Elementvererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) unterscheidet.

Wenn Sie Stile auf Highlight Pseudo-Elemente anwenden, erben sie von sowohl:

1. Ihren Elternelementen (gemäß normaler Vererbung).
2. Den Highlight Pseudo-Elementen ihrer Elternelemente (gemäß Highlight Vererbung).

Das bedeutet, dass, wenn Sie sowohl ein Highlight Pseudo-Element eines Elternelements als auch das eines Kindelements stylen, der Text des Kindelements hervorgehoben wird, indem Eigenschaften aus beiden Quellen kombiniert werden.

Hier ist ein konkretes Beispiel.

Zuerst haben wir etwas HTML, das zwei verschachtelte {{htmlelement("div")}} Elemente enthält. Ein Teil des enthaltenen Textinhalts befindet sich direkt innerhalb des Elternelements `<div>`, und ein Teil ist innerhalb des Kindelements `<div>` verschachtelt.

```html live-sample___highlight_inheritance
<div class="parent">
  Parent text
  <div class="child">Child text</div>
</div>
```

Anschließend fügen wir etwas CSS hinzu, das die übergeordneten und untergeordneten `<div>` Elemente separat auswählt und ihnen unterschiedliche {{cssxref("color")}} Werte gibt, und wählt den ausgewählten Text des Eltern- und Kindelements ({{cssxref("::selection")}}). Dies gibt jedem `<div>` eine andere {{cssxref("background-color")}} und setzt eine andere Textfarbe auf der Elternauswahl.

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

Versuchen Sie, den Text in beiden Elementen, Eltern- und Kindelemente, auszuwählen. Beachten Sie, dass:

1. Wenn Sie den Text des Elternelements auswählen, wird der gelbe Hintergrund und die rote Textfarbe verwendet, die in `.parent::selection` definiert sind.
2. Wenn Sie den Text des Kindelements auswählen, wird verwendet:
   - Der orange Hintergrund von `.child::selection`.
   - Die rote Textfarbe, die vom `::selection` Pseudo-Element des Elternteils geerbt wird.

Dies zeigt, wie das Highlight Pseudo-Element des Kindelements sowohl von seinem Elternteil als auch vom Highlight Pseudo-Element des Elternteils erbt.

[CSS benutzerdefinierte Eigenschaften (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) in Highlight Pseudo-Elementen erben von ihrem ausgehenden Element (dem Element, auf das sie angewendet werden), nicht durch die Highlight-Vererbungskette. Zum Beispiel:

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

Bei der Verwendung des universellen Selektors mit Highlight Pseudo-Elementen wird die Highlight-Vererbung verhindert. Zum Beispiel:

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
- [Vererbungsänderungen für CSS-Auswahl-Styling](https://developer.chrome.com/blog/selection-styling) - Detaillierte Erklärung der Highlight Pseudo-Element-Vererbungsmodelländerungen in Chrome 134
