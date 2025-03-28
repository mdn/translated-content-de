---
title: Pseudo-Elemente
slug: Web/CSS/Pseudo-elements
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{CSSRef}}

Ein CSS **Pseudo-Element** ist ein Schlüsselwort, das einem Selektor hinzugefügt wird und es Ihnen ermöglicht, einen bestimmten Teil des ausgewählten Elements oder der Elemente zu gestalten.

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

Doppelte Doppelpunkte (`::`) werden für Pseudo-Elemente verwendet. Dies unterscheidet Pseudo-Elemente von [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes), die in ihrer Notation einen einzelnen Doppelpunkt (`:`) verwenden. Beachten Sie, dass Browser die Syntax mit einem Doppelpunkt für die ursprünglichen vier Pseudo-Elemente unterstützen: `::before`, `::after`, `::first-line` und `::first-letter`.

Pseudo-Elemente existieren nicht unabhängig. Das Element, von dem ein Pseudo-Element ein Teil ist, wird als _ursprüngliches Element_ bezeichnet. Ein Pseudo-Element muss nach allen anderen Komponenten im [komplexen](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector) oder [zusammengesetzten](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) Selektor erscheinen. Das letzte Element im Selektor ist das ursprüngliche Element des Pseudo-Elements. Zum Beispiel können Sie die erste Zeile eines Absatzes mit `p::first-line` auswählen, aber nicht die Kinder der ersten Zeile. Daher ist `p::first-line > *` ungültig.

Ein Pseudo-Element kann basierend auf dem aktuellen Zustand des ursprünglichen Elements ausgewählt werden. Zum Beispiel selektiert `p:hover::first-line` die erste Zeile (Pseudo-Element) eines Absatzes, wenn der Absatz selbst gehovt wird (Pseudo-Klasse).

> [!NOTE]
> Wenn eine [Selektorenliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list) einen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert.

## Typografische Pseudo-Elemente

- {{CSSxRef("::first-line")}}
  - : Die erste Zeilenbox des ursprünglichen Elements.
- {{CSSxRef("::first-letter")}}
  - : Der erste Buchstabe, die erste Zahl oder das erste Symbolzeichen in der ersten Zeile seines ursprünglichen Elements.
- {{CSSxRef("::cue")}}
  - : Die [WebVTT](/de/docs/Web/API/WebVTT_API)-Hinweise innerhalb eines ausgewählten Elements.
    Dies kann genutzt werden, um [Untertitel und andere Hinweise zu gestalten](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in Medien mit VTT-Tracks.
    Das [CSS Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements)-Modul definiert auch die `::postfix` und `::prefix` Sub-Pseudo-Elemente. Diese werden von keinem Browser bisher unterstützt.

## Hervorhebungs-Pseudo-Elemente

Wählt Dokumentabschnitte basierend auf Inhalt und Dokumentstatus aus, wodurch diese Bereiche unterschiedlich gestaltet werden können, um diesen Status dem Benutzer anzuzeigen.

- {{CSSxRef("::selection")}}
  - : Der Teil eines Dokuments, der ausgewählt wurde.
- {{CSSxRef("::target-text")}}
  - : Das Zielelement des Dokuments. Das Zielelement wird mit dem Fragment-Identifikator der URL identifiziert.
- {{CSSxRef("::spelling-error")}}
  - : Ein Abschnitt von Text, den der Browser als falsch geschrieben ansieht.
- {{CSSxRef("::grammar-error")}}
  - : Ein Abschnitt von Text, den der Browser als grammatikalisch inkorrekt ansieht.
- {{CSSxRef("::highlight()")}}
  - : Die Elemente im [Hervorhebungsregister](/de/docs/Web/API/CSS/highlights_static). Es wird verwendet, um benutzerdefinierte Hervorhebungen zu erstellen.

## Baumkonforme Pseudo-Elemente

Diese Pseudo-Elemente verhalten sich wie reguläre Elemente und passen nahtlos in das Box-Modell. Sie agieren als Kindelemente, die direkt innerhalb der Hierarchie des ursprünglichen Elements gestaltet werden können.

- {{CSSxRef("::before")}}
  - : Erstellt ein Pseudo-Element, das das erste Kind des ausgewählten Elements ist.
- {{CSSxRef("::after")}}
  - : Erstellt ein Pseudo-Element, das das letzte Kind des ausgewählten Elements ist.
- {{CSSxRef("::marker")}}
  - : Die automatisch generierte Markerbox eines Listenelements.
- {{CSSxRef("::backdrop")}}
  - : Der Hintergrund des ursprünglichen Elements, der in der {{Glossary("Top_layer", "obersten Ebene")}} gerendert wird.

## Element-unterstützte Pseudo-Elemente

Diese Pseudo-Elemente sind echte Elemente, die ansonsten nicht auswählbar sind.

- {{CSSxRef("::details-content")}}
  - : Die ein- und ausklappbaren Inhalte eines {{HTMLElement("details")}}-Elements.
- {{CSSxRef("::part", "::part()")}}
  - : Jedes Element innerhalb eines [Shadow-Trees](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Global_attributes/part)-Attribut hat.
- {{CSSxRef("::slotted", "::slotted()")}}
  - : Jedes Element, das in einen Slot innerhalb eines HTML-Templates eingefügt wird.

## Formularbezogene Pseudo-Elemente

Die Pseudo-Elemente beziehen sich auf Formularelemente.

- {{CSSxRef("::checkmark")}}
  - : Ziel des Häkchens, das in das aktuell ausgewählte `<option>`-Element eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) eingefügt wird, um einen visuellen Hinweis darauf zu geben, welches ausgewählt ist.
- {{CSSxRef("::file-selector-button")}}
  - : Die Schaltfläche eines {{HTMLElement("input") }} von [`type="file"`](/de/docs/Web/HTML/Element/input/file).
- {{CSSxRef("::picker()")}}
  - : Der Auswahlteil eines Elements, zum Beispiel der Dropdown-Auswahl eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).
- {{CSSxRef("::picker-icon")}}
  - : Das Auswahl-Symbol innerhalb von Formularelementen, die mit einem Symbol verknüpft sind. Im Fall eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) selektiert es den Pfeil, der nach unten zeigt, wenn die Auswahl geschlossen ist.
- {{CSSxRef("::placeholder")}}
  - : Der Platzhaltertext in einem Eingabefeld.

## Alphabetisches Register

Pseudo-Elemente, die von einer Reihe von CSS-Spezifikationen definiert werden, umfassen die folgenden:

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

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Pseudo-Element](/de/docs/Web/CSS/CSS_pseudo-elements)-Modul
- [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes)
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul
- [Lernen: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
