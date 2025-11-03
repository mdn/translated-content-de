---
title: Pseudo-Elemente
slug: Web/CSS/Reference/Selectors/Pseudo-elements
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Ein CSS-**Pseudo-Element** ist ein Schlüsselwort, das einem Selektor hinzugefügt wird, um einen spezifischen Teil des ausgewählten Elements oder der Elemente zu gestalten.

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

Doppelte Doppelpunkte (`::`) werden für Pseudo-Elemente verwendet. Dies unterscheidet Pseudo-Elemente von [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), die in ihrer Notation einen einzelnen Doppelpunkt (`:`) verwenden. Beachten Sie, dass Browser die einheitliche Doppelpunktsyntax für die ursprünglichen vier Pseudo-Elemente unterstützen: `::before`, `::after`, `::first-line`, und `::first-letter`.

Pseudo-Elemente existieren nicht unabhängig. Das Element, von dem ein Pseudo-Element ein Teil ist, wird als sein _ursprüngliches Element_ bezeichnet. Ein Pseudo-Element muss nach allen anderen Komponenten im [komplexen](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector) oder [zusammengesetzten](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) Selektor erscheinen. Das letzte Element im Selektor ist das ursprüngliche Element des Pseudo-Elements. Zum Beispiel können Sie die erste Zeile eines Absatzes mit `p::first-line` auswählen, aber nicht die Kinder der ersten Zeile. Daher ist `p::first-line > *` ungültig.

Ein Pseudo-Element kann basierend auf dem aktuellen Zustand des ursprünglichen Elements ausgewählt werden. Zum Beispiel wählt `p:hover::first-line` die erste Zeile (Pseudo-Element) eines Absatzes, wenn der Absatz selbst gehovt wird (Pseudoklasse).

> [!NOTE]
> Wenn eine [Selektorliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list) einen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert.

## Typografische Pseudo-Elemente

- {{CSSxRef("::first-line")}}
  - : Die erste Zeilenbox des ursprünglichen Elements.
- {{CSSxRef("::first-letter")}}
  - : Der erste Buchstabe, die erste Zahl oder das erste Symbolzeichen auf der ersten Linie seines ursprünglichen Elements.
- {{CSSxRef("::cue")}}
  - : Die [WebVTT](/de/docs/Web/API/WebVTT_API)-Hinweise innerhalb eines ausgewählten Elements.
    Dies kann verwendet werden, um [Untertitel und andere Hinweise zu gestalten](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in Medien mit VTT-Spuren.
    Das [CSS Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul definiert auch die Sub-Pseudo-Elemente `::postfix` und `::prefix`. Diese werden von keinem Browser unterstützt.

## Hervorhebungspseudo-Elemente

Wählt Dokumentabschnitte basierend auf Inhalt und Dokumentstatus aus und ermöglicht es, diese Bereiche unterschiedlich zu gestalten, um diesen Status dem Benutzer anzuzeigen.

- {{CSSxRef("::selection")}}
  - : Der Teil eines Dokuments, der ausgewählt wurde.
- {{CSSxRef("::target-text")}}
  - : Das Zielelement des Dokuments. Das Zielelement wird mit Hilfe des Fragmentidentifikators der URL identifiziert.
- {{CSSxRef("::spelling-error")}}
  - : Ein Textabschnitt, von dem der Browser annimmt, dass er falsch geschrieben ist.
- {{CSSxRef("::grammar-error")}}
  - : Ein Textabschnitt, von dem der Browser annimmt, dass er grammatikalisch nicht korrekt ist.
- {{CSSxRef("::highlight()")}}
  - : Die Elemente im [Highlight-Register](/de/docs/Web/API/CSS/highlights_static). Es wird verwendet, um benutzerdefinierte Hervorhebungen zu erstellen.

## Baumtreue Pseudo-Elemente

Diese Pseudo-Elemente verhalten sich wie reguläre Elemente und fügen sich nahtlos in das Boxmodell ein. Sie wirken wie ein Kindelement, das direkt innerhalb der Hierarchie des ursprünglichen Elements gestylt werden kann.

- {{CSSxRef("::before")}}
  - : Erstellt ein Pseudo-Element, das das erste Kind des ausgewählten Elements ist.
- {{CSSxRef("::after")}}
  - : Erstellt ein Pseudo-Element, das das letzte Kind des ausgewählten Elements ist.
- {{CSSxRef("::column")}}
  - : Jeder Spaltenabschnitt eines [Mehrspaltenlayouts](/de/docs/Web/CSS/CSS_multicol_layout).
- {{CSSxRef("::marker")}}
  - : Die automatisch generierte Markerbox eines Listenelements.
- {{CSSxRef("::backdrop")}}
  - : Der Hintergrund des ursprünglichen Elements, das in der {{Glossary("Top_layer", "oberen Ebene")}} gerendert wird.
- {{CSSxRef("::scroll-button()")}}
  - : Erzeugt eine Schaltfläche, die das Scrollen des {{Glossary("scroll_container", "Scroll-Containers")}} steuern kann, auf den sie angewendet wird.
- {{CSSxRef("::scroll-marker")}}
  - : Erstellt ein Pseudo-Element, das eine Scroll-Marke ist — eine Scrollziel-Schaltfläche für ihr ursprüngliches Element, das in einer Scroll-Markierungsgruppe verschachtelt ist.
- {{CSSxRef("::scroll-marker-group")}}
  - : Generiert einen Container vor oder nach einem Scroll-Container, um die durch das Element oder seine Nachkommen erzeugten {{cssxref("::scroll-marker")}}-Pseudo-Elemente zu beinhalten.

## Elementgestützte Pseudo-Elemente

Diese Pseudo-Elemente sind echte Elemente, die anderweitig nicht auswählbar sind.

- {{CSSxRef("::details-content")}}
  - : Der erweiterbare/zusammenklappbare Inhalt eines {{HTMLElement("details")}}-Elements.
- {{CSSxRef("::part", "::part()")}}
  - : Jedes Element innerhalb eines [Schattenbaums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attribut hat.
- {{CSSxRef("::slotted", "::slotted()")}}
  - : Jedes Element, das in einen Slot innerhalb einer HTML-Vorlage eingefügt wird.

## Formularbezogene Pseudo-Elemente

Die Pseudo-Elemente stehen in Zusammenhang mit Formularelementen.

- {{CSSxRef("::checkmark")}}
  - : Zielt auf das Häkchen ab, das im aktuell ausgewählten `<option>`-Element eines [anpassbaren Auswahlelements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) platziert, um einen visuellen Hinweis darauf zu geben, welches ausgewählt ist.
- {{CSSxRef("::file-selector-button")}}
  - : Die Schaltfläche eines {{HTMLElement("input") }} vom [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file).
- {{CSSxRef("::picker()")}}
  - : Der Auswahl-Teil eines Elements, zum Beispiel der Dropdown-Picker eines [anpassbaren Auswahlelements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).
- {{CSSxRef("::picker-icon")}}
  - : Das Auswahl-Symbol innerhalb von Formularelementen, die mit einem Symbol verbunden sind. Im Falle eines [anpassbaren Auswahlelements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) wählt es den Pfeil aus, der nach unten zeigt, wenn die Auswahl geschlossen ist.
- {{CSSxRef("::placeholder")}}
  - : Der Platzhaltertext in einem Eingabefeld.

## Alphabetischer Index

Durch ein Set an CSS-Spezifikationen definierte Pseudo-Elemente umfassen die folgenden:

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

## Verschachtelte Pseudo-Elemente

Sie können einige Pseudo-Elemente miteinander verketten, um verschachtelte Pseudo-Elemente zu gestalten. Die folgenden verschachtelten Pseudo-Elementkombinationen werden unterstützt:

- {{CSSxRef("::after")}}
  - `::after::marker`: Wählt das {{CSSxRef("::marker")}} Pseudo-Element eines `::after` Pseudo-Elements aus, wenn `::after` als Listenelement gestaltet wird, mit {{CSSxRef("display", "display: list-item")}}.
- {{CSSxRef("::before")}}
  - `::before::marker`: Wählt das {{CSSxRef("::marker")}} Pseudo-Element eines `::before` Pseudo-Elements aus, wenn `::before` als Listenelement gestaltet wird, mit {{CSSxRef("display", "display: list-item")}}.

Informieren Sie sich in den einzelnen Referenzseiten der Pseudo-Elemente über Beispiele und Informationen zur Browser-Kompatibilität.

## Vererbung der Hervorhebungspseudo-Elemente

[Hervorhebungspseudo-Elemente](#hervorhebungspseudo-elemente), wie {{CSSxref("::selection")}}, {{CSSxref("::target-text")}}, {{CSSxref("::highlight()")}}, {{CSSxref("::spelling-error")}}, und {{CSSxref("::grammar-error")}}, folgen einem konsistenten Vererbungsmodell, das sich von der [regulären Elementvererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) unterscheidet.

Wenn Sie Stile auf Hervorhebungspseudo-Elemente anwenden, erben diese sowohl von:

1. Ihren Elternelementen (entsprechend der normalen Vererbung).
2. Den Hervorhebungspseudo-Elementen ihrer Elternelemente (entsprechend der Hervorhebungsvererbung).

Das bedeutet, dass, wenn Sie sowohl ein Elternelement mit einem Hervorhebungspseudo-Element als auch ein Kindelement mit einem Hervorhebungspseudo-Element gestalten, das hervorgehobene Kindtextinhalt beide Stileigenschaften kombiniert.

Hier ist ein konkretes Beispiel.

Zunächst haben wir etwas HTML, das zwei verschachtelte {{htmlelement("div")}}-Elemente beinhaltet. Ein Teil des enthaltenen Textinhalts befindet sich direkt innerhalb des übergeordneten `<div>`, und ein Teil ist innerhalb des Kinder-`<div>` verschachtelt.

```html live-sample___highlight_inheritance
<div class="parent">
  Parent text
  <div class="child">Child text</div>
</div>
```

Als nächstes fügen wir etwas CSS hinzu, das die übergeordneten und die Kinder-`<div>`-Elemente separat auswählt und ihnen unterschiedliche {{cssxref("color")}} Werte gibt, sowie das ausgewählte `::selection`-Pseudoelement des Elternteils und des Kindes. Dies verleiht jedem `<div>` eine andere {{cssxref("background-color")}} und setzt eine andere Textfarbe auf der Auswahl des Elternteils.

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

Versuchen Sie, den Text sowohl in den Eltern- als auch in den Kind-Elementen auszuwählen. Beachten Sie, dass:

1. Wenn Sie den Text des Elternteils auswählen, wird er mit dem gelben Hintergrund und der roten Textfarbe gerendert, das in `.parent::selection` definiert ist.
2. Wenn Sie den Text des Kindes auswählen, wird verwendet:
   - Der orange Hintergrund von `.child::selection`.
   - Die rote Textfarbe, die vom `::selection`-Pseudo-Element des Elternteils geerbt wird.

Dies zeigt, wie das Hervorhebungspseudo-Element des Kindes sowohl vom Elternelement als auch vom Hervorhebungspseudo-Element des Elternteils erbt.

[CSS-Benutzerdefinierte Eigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) in Hervorhebungspseudo-Elementen erben von ihrem ursprünglichen Element (dem Element, auf das sie angewendet werden), nicht durch die Hervorhebungsvererbungskette. Zum Beispiel:

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

Wenn der universelle Selektor mit Hervorhebungspseudo-Elementen verwendet wird, verhindert er die Hervorhebungsvererbung. Zum Beispiel:

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

- [CSS Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [Lernen: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Änderungen der Vererbung für CSS-Auswahlstil](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) - Detaillierte Erklärung der Änderungen des Vererbungsmodells von Hervorhebungspseudoelementen in Chrome 134
