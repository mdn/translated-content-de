---
title: Pseudo-Elemente
slug: Web/CSS/Pseudo-elements
l10n:
  sourceCommit: e15d9bac2333a216eb610fdf3a0c8ba7ca7948f2
---

{{CSSRef}}

Ein CSS-**Pseudo-Element** ist ein Schlüsselwort, das zu einem Selektor hinzugefügt wird und Ihnen ermöglicht, einen bestimmten Teil des ausgewählten Elements oder der ausgewählten Elemente zu gestalten.

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

Doppelte Doppelpunkte (`::`) werden für Pseudo-Elemente verwendet. Dies unterscheidet Pseudo-Elemente von [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes), die in ihrer Notation einen einzelnen Doppelpunkt (`:`) verwenden. Beachten Sie, dass Browser die Syntax mit einem einzigen Doppelpunkt für die ursprünglichen vier Pseudo-Elemente unterstützen: `::before`, `::after`, `::first-line` und `::first-letter`.

Pseudo-Elemente existieren nicht eigenständig. Das Element, von dem ein Pseudo-Element ein Teil ist, wird als _auslösendes Element_ bezeichnet. Ein Pseudo-Element muss nach allen anderen Komponenten im [komplexen](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector) oder [zusammengesetzten](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) Selektor erscheinen. Das letzte Element im Selektor ist das auslösende Element des Pseudo-Elements. Zum Beispiel können Sie die erste Zeile eines Absatzes mit `p::first-line` auswählen, aber nicht die Kinder der ersten Zeile. `p::first-line > *` ist daher ungültig.

Ein Pseudo-Element kann basierend auf dem aktuellen Zustand des auslösenden Elements ausgewählt werden. Zum Beispiel selektiert `p:hover::first-line` die erste Zeile (Pseudo-Element) eines Absatzes, wenn der Absatz selbst umschwebt wird (Pseudo-Klasse).

> [!NOTE]
> Wenn eine [Selektorliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list) einen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert.

## Typografische Pseudo-Elemente

- {{CSSxRef("::first-line")}}
  - : Die erste Zeilenbox des auslösenden Elements.
- {{CSSxRef("::first-letter")}}
  - : Der erste Buchstabe, die Zahl oder das Symbolzeichen in der ersten Zeile seines auslösenden Elements.
- {{CSSxRef("::cue")}}
  - : Die [WebVTT](/de/docs/Web/API/WebVTT_API)-Hinweise innerhalb eines ausgewählten Elements.
    Dies kann verwendet werden, um [Untertitel und andere Hinweise zu formatieren](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in Medien mit VTT-Tracks.
    Das [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements)-Modul definiert auch die `::postfix` und `::prefix` Sub-Pseudo-Elemente. Diese werden noch von keinem Browser unterstützt.

## Highlight-Pseudo-Elemente

Wählt Dokumentabschnitte basierend auf Inhalt und Dokumentstatus aus, um diese Bereiche unterschiedlich zu gestalten und dem Benutzer den Status anzuzeigen.

- {{CSSxRef("::selection")}}
  - : Der Teil eines Dokuments, der ausgewählt wurde.
- {{CSSxRef("::target-text")}}
  - : Das Zielelement des Dokuments. Das Zielelement wird mithilfe des Fragment-Identifiers in der URL identifiziert.
- {{CSSxRef("::spelling-error")}}
  - : Ein Textabschnitt, der vom Browser als falsch geschrieben angesehen wird.
- {{CSSxRef("::grammar-error")}}
  - : Ein Textabschnitt, den der Browser als grammatikalisch inkorrekt ansieht.
- {{CSSxRef("::highlight()")}}
  - : Die Elemente im [Highlight-Register](/de/docs/Web/API/CSS/highlights_static). Es wird verwendet, um benutzerdefinierte Hervorhebungen zu erstellen.

## Baumkonforme Pseudo-Elemente

Diese Pseudo-Elemente verhalten sich wie reguläre Elemente und fügen sich nahtlos in das Boxmodell ein. Sie agieren als untergeordnetes Element, das direkt innerhalb der Hierarchie des auslösenden Elements gestaltet werden kann.

- {{CSSxRef("::before")}}
  - : Erstellt ein Pseudo-Element, das das erste Kind des ausgewählten Elements ist.
- {{CSSxRef("::after")}}
  - : Erstellt ein Pseudo-Element, das das letzte Kind des ausgewählten Elements ist.
- {{CSSxRef("::marker")}}
  - : Die automatisch generierte Markierungsbox eines Listenelements.
- {{CSSxRef("::backdrop")}}
  - : Der Hintergrund des auslösenden Elements, das in der {{Glossary("Top_layer", "Top-Ebene")}} gerendert wird.

## Elementgestützte Pseudo-Elemente

Diese Pseudo-Elemente sind echte Elemente, die ansonsten nicht auswählbar sind.

- {{CSSxRef("::details-content")}}
  - : Der erweiterbare/einklappbare Inhalt eines {{HTMLElement("details")}}-Elements.
- {{CSSxRef("::part", "::part()")}}
  - : Jedes Element innerhalb eines [Shadow-Baums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Global_attributes/part)-Attribut hat.
- {{CSSxRef("::slotted", "::slotted()")}}
  - : Jedes Element, das in einen Slot innerhalb einer HTML-Vorlage eingefügt wird.

## Formularbezogene Pseudo-Elemente

Die Pseudo-Elemente sind mit Formularelementen verbunden.

- {{CSSxRef("::checkmark")}}
  - : Zielt auf das Häkchen innerhalb des aktuell ausgewählten `<option>`-Elements eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select), um einen visuellen Hinweis darauf zu geben, welches ausgewählt ist.
- {{CSSxRef("::file-selector-button")}}
  - : Der Button eines {{HTMLElement("input") }} von [`type="file"`](/de/docs/Web/HTML/Element/input/file).
- {{CSSxRef("::picker()")}}
  - : Der Auswahlteil eines Elements, zum Beispiel der Dropdown-Auswahl eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).
- {{CSSxRef("::picker-icon")}}
  - : Das Symbol innerhalb der Formularelemente, die ein Symbol zugeordnet haben. Im Falle eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) wählt es den Pfeil aus, der nach unten zeigt, wenn die Auswahl geschlossen ist.
- {{CSSxRef("::placeholder")}}
  - : Der Platzhaltertext in einem Eingabefeld.

## Alphabetischer Index

Pseudo-Elemente, die von einer Reihe von CSS-Spezifikationen definiert werden, umfassen folgende:

A

- {{CSSxRef("::after")}}

B

- {{CSSxRef("::backdrop")}}
- {{CSSxRef("::before")}}

C

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

Sie können einige Pseudo-Element-Selektoren miteinander verketten, um Pseudo-Elemente innerhalb anderer Pseudo-Elemente zu gestalten. Die folgenden verschachtelten Pseudo-Element-Kombinationen werden unterstützt:

- {{CSSxRef("::after")}}
  - `::after::marker`: Wählt das {{CSSxRef("::marker")}}-Pseudo-Element eines `::after`-Pseudo-Elements aus, wenn `::after` als Listenelement mit {{CSSxRef("display", "display: list-item")}} gestylt ist.
- {{CSSxRef("::before")}}
  - `::before::marker`: Wählt das {{CSSxRef("::marker")}}-Pseudo-Element eines `::before`-Pseudo-Elements aus, wenn `::before` als Listenelement mit {{CSSxRef("display", "display: list-item")}} gestylt ist.

Siehe die einzelnen Referenzseiten der Pseudo-Elemente für Beispiele und Informationen zur Browser-Kompatibilität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Pseudo-Element-Modul](/de/docs/Web/CSS/CSS_pseudo-elements)
- [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes)
- [CSS-Selektoren-Modul](/de/docs/Web/CSS/CSS_selectors)
- [Lernen: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
