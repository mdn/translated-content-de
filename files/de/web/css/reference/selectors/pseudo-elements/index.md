---
title: Pseudo-Elemente
slug: Web/CSS/Reference/Selectors/Pseudo-elements
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein CSS-**Pseudo-Element** ist ein Schlüsselwort, das zu einem Selektor hinzugefügt wird, um einen spezifischen Teil des ausgewählten Elements oder der ausgewählten Elemente zu gestalten.

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

Doppelpunkte (`::`) werden für Pseudo-Elemente verwendet. Dies unterscheidet Pseudo-Elemente von [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), die einen einzelnen Doppelpunkt (`:`) in ihrer Notation verwenden. Beachten Sie, dass Browser die Syntax mit einem Doppelpunkt für die ursprünglichen vier Pseudo-Elemente unterstützen: `::before`, `::after`, `::first-line`, und `::first-letter`.

Pseudo-Elemente existieren nicht unabhängig. Das Element, von dem ein Pseudo-Element ein Teil ist, wird als sein _ursprüngliches Element_ bezeichnet. Ein Pseudo-Element muss nach allen anderen Komponenten des [komplexen](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#complex_selector) oder [zusammengesetzten](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) Selektors erscheinen. Das letzte Element im Selektor ist das ursprüngliche Element des Pseudo-Elements. Zum Beispiel können Sie die erste Zeile eines Absatzes mit `p::first-line` auswählen, aber nicht die Kinder der ersten Zeile. Daher ist `p::first-line > *` ungültig.

Ein Pseudo-Element kann basierend auf dem aktuellen Zustand des ursprünglichen Elements ausgewählt werden. Zum Beispiel wählt `p:hover::first-line` die erste Zeile (Pseudo-Element) eines Absatzes, wenn der Absatz selbst gehovt wird (Pseudo-Klasse).

> [!NOTE]
> Wenn eine [Selektorliste](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#selector_list) einen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert.

## Typografische Pseudo-Elemente

- {{CSSxRef("::first-line")}}
  - : Die erste Zeilenbox des ursprünglichen Elements.
- {{CSSxRef("::first-letter")}}
  - : Der erste Buchstabe, die erste Zahl oder das erste Symbolzeichen auf der ersten Zeile seines ursprünglichen Elements.
- {{CSSxRef("::cue")}}
  - : Die [WebVTT](/de/docs/Web/API/WebVTT_API) Hinweispunkte innerhalb eines ausgewählten Elements.
    Dies kann verwendet werden, um [Untertitel und andere Hinweise](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in Medien mit VTT-Tracks zu gestalten.
    Das [CSS Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul definiert auch die `::postfix` und `::prefix` Sub-Pseudo-Elemente. Diese werden noch von keinem Browser unterstützt.

## Hervorhebungs-Pseudo-Elemente

Wählt Dokumentabschnitte basierend auf Inhalt und Dokumentstatus aus, wodurch diese Bereiche unterschiedlich gestaltet werden können, um den Status dem Benutzer anzuzeigen.

- {{CSSxRef("::selection")}}
  - : Der Abschnitt eines Dokuments, der ausgewählt wurde.
- {{CSSxRef("::target-text")}}
  - : Das Zielelement des Dokuments. Das Zielelement wird durch den Fragmentbezeichner der URL identifiziert.
- {{CSSxRef("::spelling-error")}}
  - : Ein Textabschnitt, den der Browser für falsch geschrieben hält.
- {{CSSxRef("::grammar-error")}}
  - : Ein Textabschnitt, den der Browser für grammatikalisch inkorrekt hält.
- {{CSSxRef("::highlight()")}}
  - : Die Elemente im [Highlight-Register](/de/docs/Web/API/CSS/highlights_static). Es wird verwendet, um benutzerdefinierte Hervorhebungen zu erstellen.

## Baumgebundene Pseudo-Elemente

Diese Pseudo-Elemente verhalten sich wie normale Elemente, die nahtlos innerhalb des Box-Modells passen. Sie agieren als Kind-Element, das direkt innerhalb der Hierarchie des ursprünglichen Elements gestaltet werden kann.

- {{CSSxRef("::before")}}
  - : Erstellt ein Pseudo-Element, das das erste Kind des ausgewählten Elements ist.
- {{CSSxRef("::after")}}
  - : Erstellt ein Pseudo-Element, das das letzte Kind des ausgewählten Elements ist.
- {{CSSxRef("::column")}}
  - : Jedes Spalten-Fragment eines [Mehrspaltenlayouts](/de/docs/Web/CSS/Guides/Multicol_layout).
- {{CSSxRef("::marker")}}
  - : Die automatisch generierte Markierungsbox eines Listenelements.
- {{CSSxRef("::backdrop")}}
  - : Der Hintergrund des ursprünglichen Elements, der in der {{Glossary("Top_layer", "obersten Schicht")}} gerendert wird.
- {{CSSxRef("::scroll-button()")}}
  - : Erstellt eine Schaltfläche, die das Scrollen des {{Glossary("scroll_container", "Scroll-Containers")}} kontrollieren kann, auf den es angewendet wird.
- {{CSSxRef("::scroll-marker")}}
  - : Erstellt ein Pseudo-Element, das ein Scroll-Marker ist — ein Scroll-Zielknopf für sein ursprüngliches Element, das in einer Scroll-Marker-Gruppe verschachtelt ist.
- {{CSSxRef("::scroll-marker-group")}}
  - : Erzeugt einen Container vor oder nach einem Scroll-Container, um die {{cssxref("::scroll-marker")}} Pseudo-Elemente zu enthalten, die auf dem Element oder seinen Nachkommen generiert werden.

## Elementgestützte Pseudo-Elemente

Diese Pseudo-Elemente sind reale Elemente, die ansonsten nicht wählbar sind.

- {{CSSxRef("::details-content")}}
  - : Der erweiterbare/zusammenklappbare Inhalt eines {{HTMLElement("details")}} Elements.
- {{CSSxRef("::part", "::part()")}}
  - : Jedes Element innerhalb eines [Schattenbaums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein übereinstimmendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attribut hat.
- {{CSSxRef("::slotted", "::slotted()")}}
  - : Jedes Element, das in einen Slot innerhalb einer HTML-Vorlage eingesetzt wird.

## Formularbezogene Pseudo-Elemente

Die Pseudo-Elemente beziehen sich auf Formularelemente.

- {{CSSxRef("::checkmark")}}
  - : Ziel der Markierung, die in das aktuell ausgewählte `<option>` Element eines [anpassbaren Auswahlelements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) eingefügt wird, um anzuzeigen, welches ausgewählt ist.
- {{CSSxRef("::file-selector-button")}}
  - : Der Knopf eines {{HTMLElement("input") }} vom [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file).
- {{CSSxRef("::picker()")}}
  - : Der Picker-Teil eines Elements, zum Beispiel der Dropdown-Picker eines [anpassbaren Auswahlelements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).
- {{CSSxRef("::picker-icon")}}
  - : Das Picker-Symbol in Formularelementen, die mit einem Symbol verbunden sind. Im Fall eines [anpassbaren Auswahlelements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) wird der Pfeil ausgewählt, der nach unten zeigt, wenn die Auswahl geschlossen ist.
- {{CSSxRef("::placeholder")}}
  - : Der Platzhaltertext in einem Eingabefeld.

## Alphabetisches Verzeichnis

Pseudo-Elemente, die durch eine Reihe von CSS-Spezifikationen definiert werden, umfassen die folgenden:

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

## Verschachtelung von Pseudo-Elementen

Sie können einige Pseudo-Element-Selektoren verkettet verwenden, um Pseudo-Elemente innerhalb anderer Pseudo-Elemente zu gestalten. Die folgenden verschachtelten Pseudo-Element-Kombinationen werden unterstützt:

- {{CSSxRef("::after")}}
  - `::after::marker`: Wählt das {{CSSxRef("::marker")}} Pseudo-Element eines `::after` Pseudo-Elements, wenn `::after` als Listeneintrag mit {{CSSxRef("display", "display: list-item")}} gestaltet wird.
- {{CSSxRef("::before")}}
  - `::before::marker`: Wählt das {{CSSxRef("::marker")}} Pseudo-Element eines `::before` Pseudo-Elements, wenn `::before` als Listeneintrag mit {{CSSxRef("display", "display: list-item")}} gestaltet wird.

Sehen Sie sich die einzelnen Pseudo-Element-Referenzseiten für Beispiele und Browser-Kompatibilitätsinformationen an.

## Vererbung von Hervorhebungs-Pseudo-Elementen

[Hervorhebungs-Pseudo-Elemente](#hervorhebungs-pseudo-elemente), wie {{CSSxref("::selection")}}, {{CSSxref("::target-text")}}, {{CSSxref("::highlight()")}}, {{CSSxref("::spelling-error")}}, und {{CSSxref("::grammar-error")}}, folgen einem konsistenten Vererbungsmodell, das sich von der [normalen Elementvererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance) unterscheidet.

Wenn Sie Stile auf Hervorhebungs-Pseudo-Elemente anwenden, erben sie sowohl von:

1. Ihren übergeordneten Elementen (folgend der normalen Vererbung).
2. Den Hervorhebungs-Pseudo-Elementen ihrer übergeordneten Elemente (folgend der Hervorhebungsvererbung).

Das bedeutet, dass wenn Sie sowohl ein Hervorhebungs-Pseudo-Element eines übergeordneten Elements als auch ein Hervorhebungs-Pseudo-Element eines Kindelements gestalten, der hervorgehobene Text des Kindelements Eigenschaften von beiden Quellen kombiniert.

Hier ist ein konkretes Beispiel.

Zuerst haben wir etwas HTML, das zwei verschachtelte {{htmlelement("div")}}-Elemente enthält. Ein Teil des enthaltenen Textinhalts befindet sich direkt im übergeordneten `<div>`, und ein Teil ist im Kind-`<div>` verschachtelt.

```html live-sample___highlight_inheritance
<div class="parent">
  Parent text
  <div class="child">Child text</div>
</div>
```

Als Nächstes fügen wir etwas CSS hinzu, das die übergeordneten und die Kind-`<div>`-Elemente separat auswählt und ihnen unterschiedliche {{cssxref("color")}}-Werte gibt, und die Auswahl des Textes im übergeordneten und Kind-Element auswählt ({{cssxref("::selection")}}). Dies gibt jedem `<div>` eine andere {{cssxref("background-color")}} und legt eine andere Text-`color` auf der übergeordneten Auswahl fest.

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

Versuchen Sie, den Text in den übergeordneten und den Kind-Elementen auszuwählen. Beachten Sie, dass:

1. Wenn Sie den übergeordneten Text auswählen, verwendet er den gelben Hintergrund und die rote Textfarbe, die in `.parent::selection` definiert sind.
2. Wenn Sie den Kindtext auswählen, verwendet er:
   - Den orangefarbenen Hintergrund aus `.child::selection`.
   - Die rot geerbte Textfarbe vom `::selection` Pseudo-Element des übergeordneten Elements.

Dies demonstriert, wie das Hervorhebungs-Pseudo-Element des Kindelements sowohl vom übergeordneten Element als auch vom Hervorhebungs-Pseudo-Element des übergeordneten Elements erbt.

[CSS-Benutzerdefinierte Eigenschaften (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) in Hervorhebungs-Pseudo-Elementen erben von ihrem ursprünglichen Element (dem Element, auf das sie angewendet werden), nicht durch die Hervorhebungsvererbungskette. Zum Beispiel:

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

Bei Verwendung des universellen Selektors mit Hervorhebungs-Pseudo-Elementen wird die Hervorhebungsvererbung verhindert. Zum Beispiel:

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
- [Vererbungsveränderungen für CSS Auswahlstile](https://developer.chrome.com/blog/selection-styling) - Detaillierte Erklärung der Änderungen im Vererbungsmodell der Hervorhebungs-Pseudo-Elemente in Chrome 134
