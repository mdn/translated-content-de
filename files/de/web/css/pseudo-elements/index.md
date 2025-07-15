---
title: Pseudo-Elemente
slug: Web/CSS/Pseudo-elements
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Ein CSS-**Pseudo-Element** ist ein Schlüsselwort, das einem Selektor hinzugefügt wird, um einen bestimmten Teil des ausgewählten Elements oder der ausgewählten Elemente zu gestalten.

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

Doppelte Doppelpunkte (`::`) werden für Pseudo-Elemente verwendet. Dies unterscheidet Pseudo-Elemente von [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes), die in ihrer Notation einen einzelnen Doppelpunkt (`:`) verwenden. Beachten Sie, dass Browser die einzelne Doppelpunkt-Syntax für die ursprünglichen vier Pseudo-Elemente unterstützen: `::before`, `::after`, `::first-line`, und `::first-letter`.

Pseudo-Elemente existieren nicht unabhängig. Das Element, dessen Teil ein Pseudo-Element ist, wird als sein _ursprüngliches Element_ bezeichnet. Ein Pseudo-Element muss nach allen anderen Komponenten im [komplexen](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector) oder [zusammengesetzten](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) Selektor erscheinen. Das letzte Element im Selektor ist das ursprüngliche Element des Pseudo-Elements. Zum Beispiel können Sie die erste Zeile eines Absatzes mit `p::first-line` auswählen, aber nicht die Kinder der ersten Zeile. Daher ist `p::first-line > *` ungültig.

Ein Pseudo-Element kann basierend auf dem aktuellen Zustand des ursprünglichen Elements ausgewählt werden. Zum Beispiel wählt `p:hover::first-line` die erste Zeile (Pseudo-Element) eines Absatzes, wenn der Absatz selbst gehobert wird (Pseudo-Klasse).

> [!NOTE]
> Wenn eine [Selektorliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list) einen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert.

## Typografische Pseudo-Elemente

- {{CSSxRef("::first-line")}}
  - : Die erste Zeilenbox des ursprünglichen Elements.
- {{CSSxRef("::first-letter")}}
  - : Der erste Buchstabe, die erste Zahl oder das Symbolzeichen in der ersten Zeile seines ursprünglichen Elements.
- {{CSSxRef("::cue")}}
  - : Die [WebVTT](/de/docs/Web/API/WebVTT_API)-Cues innerhalb eines ausgewählten Elements.
    Dies kann verwendet werden, um [Untertitel und andere Cues zu gestalten](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in Medien mit VTT-Tracks.
    Das Modul der [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) definiert auch die `::postfix` und `::prefix` Sub-Pseudo-Elemente. Diese werden derzeit von keinem Browser unterstützt.

## Hervorhebungs-Pseudo-Elemente

Wählt Dokumentabschnitte basierend auf Inhalt und Dokumentstatus aus und ermöglicht es, diese Bereiche unterschiedlich zu gestalten, um den Status dem Nutzer anzuzeigen.

- {{CSSxRef("::selection")}}
  - : Der Abschnitt eines Dokuments, der ausgewählt wurde.
- {{CSSxRef("::target-text")}}
  - : Das Ziel-Element des Dokuments. Das Ziel-Element wird über den Fragmentbezeichner der URL identifiziert.
- {{CSSxRef("::spelling-error")}}
  - : Ein Textabschnitt, den der Browser für falsch geschrieben hält.
- {{CSSxRef("::grammar-error")}}
  - : Ein Textabschnitt, den der Browser für grammatikalisch falsch hält.
- {{CSSxRef("::highlight()")}}
  - : Die Elemente im [Highlight-Register](/de/docs/Web/API/CSS/highlights_static). Es wird verwendet, um benutzerdefinierte Highlights zu erstellen.

## Baumkonforme Pseudo-Elemente

Diese Pseudo-Elemente verhalten sich wie reguläre Elemente und passen nahtlos in das Boxmodell. Sie agieren als Kindelement, das direkt innerhalb der Hierarchie des ursprünglichen Elements gestaltet werden kann.

- {{CSSxRef("::before")}}
  - : Erzeugt ein Pseudo-Element, das das erste Kindelement des ausgewählten Elements ist.
- {{CSSxRef("::after")}}
  - : Erzeugt ein Pseudo-Element, das das letzte Kindelement des ausgewählten Elements ist.
- {{CSSxRef("::column")}}
  - : Jedes Spaltenfragment eines [Mehrspalten-Layouts](/de/docs/Web/CSS/CSS_multicol_layout).
- {{CSSxRef("::marker")}}
  - : Der automatisch generierte Marker-Box eines Listenelements.
- {{CSSxRef("::backdrop")}}
  - : Der Hintergrund des ursprünglichen Elements, das in der {{Glossary("Top_layer", "Top-Schicht")}} gerendert wird.
- {{CSSxRef("::scroll-button()")}}
  - : Erstellt einen Knopf, der das Scrollen des {{Glossary("scroll_container", "Scroll-Containers")}} steuern kann, auf den er angewendet wird.
- {{CSSxRef("::scroll-marker")}}
  - : Erstellt ein Pseudo-Element, das ein Scroll-Marker ist — ein Scroll-Zielknopf für sein ursprüngliches Element, das in einer Scroll-Marker-Gruppe verschachtelt ist.
- {{CSSxRef("::scroll-marker-group")}}
  - : Erzeugt einen Container vor oder nach einem Scroll-Container, um die {{CSSxRef("::scroll-marker")}} Pseudo-Elemente zu enthalten, die auf dem Element oder seinen Nachkommen erzeugt werden.

## Elementgestützte Pseudo-Elemente

Diese Pseudo-Elemente sind reale Elemente, die nicht anderweitig auswählbar sind.

- {{CSSxRef("::details-content")}}
  - : Der erweiterbare/zusammenklappbare Inhalt eines {{HTMLElement("details")}}-Elements.
- {{CSSxRef("::part", "::part()")}}
  - : Jedes Element innerhalb eines [Shadow Trees](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut hat.
- {{CSSxRef("::slotted", "::slotted()")}}
  - : Jedes Element, das in einen Slot innerhalb einer HTML-Vorlage platziert wurde.

## Formularbezogene Pseudo-Elemente

Die Pseudo-Elemente beziehen sich auf Formularelemente.

- {{CSSxRef("::checkmark")}}
  - : Zielt auf das Häkchen ab, das im aktuell ausgewählten `<option>`-Element eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) platziert ist, um visuell anzuzeigen, welches ausgewählt ist.
- {{CSSxRef("::file-selector-button")}}
  - : Der Knopf eines {{HTMLElement("input")}} vom [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file).
- {{CSSxRef("::picker()")}}
  - : Der Picker-Teil eines Elements, zum Beispiel der Dropdown-Picker eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).
- {{CSSxRef("::picker-icon")}}
  - : Das Picker-Symbol innerhalb von Formularelementen, die ein Symbol damit verbunden haben. Im Falle eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) wählt es den Pfeil aus, der nach unten zeigt, wenn die Auswahl geschlossen ist.
- {{CSSxRef("::placeholder")}}
  - : Der Platzhaltertext in einem Eingabefeld.

## Alphabetisches Verzeichnis

Die durch eine Reihe von CSS-Spezifikationen definierten Pseudo-Elemente umfassen Folgendes:

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

Sie können einige Pseudo-Element-Selektoren miteinander verketten, um verschachtelte Pseudo-Elemente innerhalb anderer Pseudo-Elemente zu gestalten. Die folgenden verschachtelten Pseudo-Element-Kombinationen werden unterstützt:

- {{CSSxRef("::after")}}
  - `::after::marker`: Wählt das {{CSSxRef("::marker")}} Pseudo-Element eines `::after` Pseudo-Elements aus, wenn `::after` als Listenelement gestaltet ist, mit {{CSSxRef("display", "display: list-item")}}.
- {{CSSxRef("::before")}}
  - `::before::marker`: Wählt das {{CSSxRef("::marker")}} Pseudo-Element eines `::before` Pseudo-Elements aus, wenn `::before` als Listenelement gestaltet ist, mit {{CSSxRef("display", "display: list-item")}}.

Sehen Sie sich die einzelnen Referenzseiten zu den Pseudo-Elementen für Beispiele und Informationen zur Browser-Kompatibilität an.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Pseudo-Element](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [Lernen: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
