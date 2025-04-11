---
title: Pseudo-Elemente
slug: Web/CSS/Pseudo-elements
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Ein CSS **Pseudo-Element** ist ein Schlüsselwort, das zu einem Selektor hinzugefügt wird und es Ihnen ermöglicht, einen bestimmten Teil der ausgewählten Elemente zu stylen.

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

Doppelte Doppelpunkte (`::`) werden für Pseudo-Elemente verwendet. Dies unterscheidet Pseudo-Elemente von [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes), die in ihrer Notation einen einfachen Doppelpunkt (`:`) verwenden. Beachten Sie, dass Browser die Syntax mit einfachem Doppelpunkt für die ursprünglichen vier Pseudo-Elemente unterstützen: `::before`, `::after`, `::first-line` und `::first-letter`.

Pseudo-Elemente existieren nicht unabhängig. Das Element, von dem ein Pseudo-Element ein Teil ist, wird als sein _Ursprungselement_ bezeichnet. Ein Pseudo-Element muss nach allen anderen Komponenten im [komplexen](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector) oder [zusammengesetzten](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) Selektor erscheinen. Das letzte Element im Selektor ist das Ursprungselement des Pseudo-Elements. Zum Beispiel können Sie die erste Zeile eines Absatzes mit `p::first-line` auswählen, aber nicht die Kinder der ersten Zeile. So ist `p::first-line > *` ungültig.

Ein Pseudo-Element kann basierend auf dem aktuellen Zustand des Ursprungselements ausgewählt werden. Zum Beispiel wählt `p:hover::first-line` die erste Zeile (Pseudo-Element) eines Absatzes aus, wenn der Absatz selbst gehovt wird (Pseudo-Klasse).

> [!NOTE]
> Wenn eine [Selektorenliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list) einen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert.

## Typografische Pseudo-Elemente

- {{CSSxRef("::first-line")}}
  - : Die erste Zeilenbox des Ursprungselements.
- {{CSSxRef("::first-letter")}}
  - : Der erste Buchstabe, die erste Zahl oder das erste Symbolzeichen auf der ersten Zeile seines Ursprungselements.
- {{CSSxRef("::cue")}}
  - : Die [WebVTT](/de/docs/Web/API/WebVTT_API) Cues innerhalb eines ausgewählten Elements.
    Dies kann verwendet werden, um [Untertitel und andere Cues](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in Medien mit VTT-Tracks zu stylen.
    Das [CSS Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul definiert auch die `::postfix` und `::prefix` Sub-Pseudo-Elemente. Diese werden noch von keinem Browser unterstützt.

## Hervorhebungs-Pseudo-Elemente

Wählt Dokumentabschnitte basierend auf Inhalt und Dokumentstatus aus und ermöglicht es, diese Bereiche unterschiedlich zu stylen, um diesen Status dem Benutzer anzuzeigen.

- {{CSSxRef("::selection")}}
  - : Der Teil eines Dokuments, der ausgewählt wurde.
- {{CSSxRef("::target-text")}}
  - : Das Ziel-Element des Dokuments. Das Ziel-Element wird durch den Fragment-Bezeichner der URL identifiziert.
- {{CSSxRef("::spelling-error")}}
  - : Ein Textabschnitt, von dem der Browser glaubt, dass er falsch geschrieben ist.
- {{CSSxRef("::grammar-error")}}
  - : Ein Textabschnitt, von dem der Browser glaubt, dass er grammatikalisch inkorrekt ist.
- {{CSSxRef("::highlight()")}}
  - : Die Elemente im [Highlight-Register](/de/docs/Web/API/CSS/highlights_static). Es wird verwendet, um benutzerdefinierte Hervorhebungen zu erstellen.

## Strukturkonforme Pseudo-Elemente

Diese Pseudo-Elemente verhalten sich wie reguläre Elemente und fügen sich nahtlos in das Box-Modell ein. Sie agieren als Kind-Element, das direkt innerhalb der Hierarchie des Ursprungselements gestylt werden kann.

- {{CSSxRef("::before")}}
  - : Erstellt ein Pseudo-Element, das das erste Kind des ausgewählten Elements ist.
- {{CSSxRef("::after")}}
  - : Erstellt ein Pseudo-Element, das das letzte Kind des ausgewählten Elements ist.
- {{CSSxRef("::column")}}
  - : Jedes Säulenfragment eines [Mehrspaltenlayouts](/de/docs/Web/CSS/CSS_multicol_layout).
- {{CSSxRef("::marker")}}
  - : Die automatisch generierte Markierung eines Listenelements.
- {{CSSxRef("::backdrop")}}
  - : Der Hintergrund des Ursprungselements, das in der {{Glossary("Top_layer", "obersten Schicht")}} gerendert wird.
- {{CSSxRef("::scroll-button()")}}
  - : Erstellt eine Schaltfläche, die das Scrollen des {{Glossary("scroll_container", "Scroll-Containers")}}, auf den sie angewendet wird, steuern kann.
- {{CSSxRef("::scroll-marker")}}
  - : Erstellt ein Pseudo-Element, das eine Scroll-Markierung ist — ein Scroll-Zielknopf für sein Ursprungselement, das in einer Scroll-Markierungsgruppe verschachtelt ist.
- {{CSSxRef("::scroll-marker-group")}}
  - : Generiert einen Container vor oder nach einem Scroll-Container, um die {{cssxref("::scroll-marker")}} Pseudo-Elemente zu enthalten, die auf dem Element oder seinen Nachkommen generiert werden.

## Elemente-unterstützte Pseudo-Elemente

Diese Pseudo-Elemente sind reale Elemente, die anderweitig nicht auswählbar sind.

- {{CSSxRef("::details-content")}}
  - : Der erweiterbare/zusammenklappbare Inhalt eines {{HTMLElement("details")}} Elements.
- {{CSSxRef("::part", "::part()")}}
  - : Jedes Element innerhalb eines [Schattenbaums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein übereinstimmendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attribut hat.
- {{CSSxRef("::slotted", "::slotted()")}}
  - : Jedes Element, das in einen Slot in einer HTML-Vorlage platziert wird.

## Formularbezogene Pseudo-Elemente

Die Pseudo-Elemente beziehen sich auf Formularelemente.

- {{CSSxRef("::checkmark")}}
  - : Zielt auf das Häkchen ab, das in das aktuell ausgewählte `<option>` Element eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) eingefügt wird, um eine visuelle Anzeige zu bieten, welches ausgewählt ist.
- {{CSSxRef("::file-selector-button")}}
  - : Die Schaltfläche eines {{HTMLElement("input") }} vom [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file).
- {{CSSxRef("::picker()")}}
  - : Der Auswahlteil eines Elements, zum Beispiel der Dropdown-Auswahlknopf eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).
- {{CSSxRef("::picker-icon")}}
  - : Das Auswahl-Icon innerhalb von Formularelementen, die ein mit ihnen verbundenes Icon haben. Im Fall eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) wählt es den Pfeil aus, der nach unten zeigt, wenn die Auswahl geschlossen ist.
- {{CSSxRef("::placeholder")}}
  - : Der Platzhaltertext in einem Eingabefeld.

## Alphabetischer Index

Durch eine Reihe von CSS-Spezifikationen definierte Pseudo-Elemente umfassen folgende:

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

## Verschachteln von Pseudo-Elementen

Sie können einige Pseudo-Element-Selektoren zusammenketten, um verschachtelte Pseudo-Elemente innerhalb anderer Pseudo-Elemente zu stylen. Die folgenden verschachtelten Pseudo-Element-Kombinationen werden unterstützt:

- {{CSSxRef("::after")}}
  - `::after::marker`: Wählt das {{CSSxRef("::marker")}} Pseudo-Element eines `::after` Pseudo-Elements aus, wenn `::after` als Listenelement mit {{CSSxRef("display", "display: list-item")}} gestylt ist.
- {{CSSxRef("::before")}}
  - `::before::marker`: Wählt das {{CSSxRef("::marker")}} Pseudo-Element eines `::before` Pseudo-Elements aus, wenn `::before` als Listenelement mit {{CSSxRef("display", "display: list-item")}} gestylt ist.

Schauen Sie sich die einzelnen Pseudo-Element-Referenzseiten für Beispiele und Informationen zur Browser-Kompatibilität an.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Pseudo-Element](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes)
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [Lernen: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
