---
title: Pseudo-Elemente
slug: Web/CSS/Pseudo-elements
l10n:
  sourceCommit: e2819fa744925becc6b6800972c66a046ba8ddc0
---

{{CSSRef}}

Ein CSS **Pseudo-Element** ist ein Schlüsselwort, das zu einem Selektor hinzugefügt wird, um einen bestimmten Teil des ausgewählten Elements bzw. der ausgewählten Elemente zu gestalten.

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

Doppelte Doppelpunkte (`::`) werden für Pseudo-Elemente verwendet. Dies unterscheidet Pseudo-Elemente von [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes), die einen einzelnen Doppelpunkt (`:`) in ihrer Notation verwenden. Beachten Sie, dass Browser die Einzelsyntax für die ursprünglichen vier Pseudo-Elemente unterstützen: `::before`, `::after`, `::first-line` und `::first-letter`.

Pseudo-Elemente existieren nicht unabhängig. Das Element, von dem ein Pseudo-Element ein Teil ist, wird als dessen _ursprüngliches Element_ bezeichnet. Ein Pseudo-Element muss nach allen anderen Komponenten im [komplexen](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector) oder [zusammengesetzten](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) Selektor erscheinen. Das letzte Element im Selektor ist das ursprüngliche Element des Pseudo-Elements. Zum Beispiel können Sie die erste Zeile eines Absatzes mit `p::first-line` auswählen, aber nicht die Kinder der ersten Zeile. Daher ist `p::first-line > *` ungültig.

Ein Pseudo-Element kann basierend auf dem aktuellen Zustand des ursprünglichen Elements ausgewählt werden. Zum Beispiel wählt `p:hover::first-line` die erste Zeile (Pseudo-Element) eines Absatzes aus, wenn der Absatz selbst gerade die Pseudo-Klasse `:hover` hat.

> [!NOTE]
> Wenn eine [Selektorliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list) einen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert.

## Typografische Pseudo-Elemente

- {{CSSxRef("::first-line")}}
  - : Die erste Zeilen-Box des ursprünglichen Elements.
- {{CSSxRef("::first-letter")}}
  - : Der erste Buchstabe, die erste Zahl oder das erste Symbolzeichen auf der ersten Zeile seines ursprünglichen Elements.
- {{CSSxRef("::cue")}}
  - : Die [WebVTT](/de/docs/Web/API/WebVTT_API) Cues innerhalb eines ausgewählten Elements. Dies kann verwendet werden, um [Untertitel und andere Cues](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in Medien mit VTT-Tracks zu gestalten. Das [CSS Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul definiert auch die `::postfix` und `::prefix` Sub-Pseudo-Elemente. Diese werden von keinem Browser unterstützt.

## Highlight-Pseudo-Elemente

Wählt Dokumentabschnitte basierend auf Inhalt und Dokumentstatus aus und ermöglicht es, diese Bereiche unterschiedlich zu gestalten, um diesen Status dem Benutzer anzuzeigen.

- {{CSSxRef("::selection")}}
  - : Der Teil eines Dokuments, der ausgewählt wurde.
- {{CSSxRef("::target-text")}}
  - : Das Zielelement des Dokuments. Das Zielelement wird mithilfe der Fragmentkennung der URL identifiziert.
- {{CSSxRef("::spelling-error")}}
  - : Ein Textabschnitt, der vom Browser als falsch geschrieben angesehen wird.
- {{CSSxRef("::grammar-error")}}
  - : Ein Textabschnitt, der vom Browser als grammatikalisch inkorrekt angesehen wird.
- {{CSSxRef("::highlight()")}}
  - : Die Elemente im [Highlight-Register](/de/docs/Web/API/CSS/highlights_static). Es wird verwendet, um benutzerdefinierte Highlights zu erstellen.

## Baumkonforme Pseudo-Elemente

Diese Pseudo-Elemente verhalten sich wie reguläre Elemente und fügen sich nahtlos in das Box-Modell ein. Sie agieren als Kindelement, das direkt innerhalb der Hierarchie des ursprünglichen Elements gestaltet werden kann.

- {{CSSxRef("::before")}}
  - : Erstellt ein Pseudo-Element, das das erste Kind des ausgewählten Elements ist.
- {{CSSxRef("::after")}}
  - : Erstellt ein Pseudo-Element, das das letzte Kind des ausgewählten Elements ist.
- {{CSSxRef("::marker")}}
  - : Die automatisch erzeugte Markierungsbox eines Listenelements.
- {{CSSxRef("::placeholder")}}
  - : Der Platzhaltertext in einem Eingabefeld.
- {{CSSxRef("::backdrop")}}
  - : Der Hintergrund des ursprünglich renderten Elements in der {{Glossary("Top_layer", "obersten Ebene")}}.

## Elemente-gebundene Pseudo-Elemente

Diese Pseudo-Elemente sind tatsächliche Elemente, die sonst nicht auswählbar sind.

- {{CSSxRef("::details-content")}}
  - : Der erweiterbare/zusammenklappbare Inhalt eines {{HTMLElement("details")}} Elements.
- {{CSSxRef("::file-selector-button")}}
  - : Die Schaltfläche eines {{HTMLElement("input") }} von [`type="file"`](/de/docs/Web/HTML/Element/input/file).
- {{CSSxRef("::part", "::part()")}}
  - : Jedes Element innerhalb eines [Shadow-Trees](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Global_attributes/part) Attribut trägt.
- {{CSSxRef("::slotted", "::slotted()")}}
  - : Jedes Element, das in einen Slot innerhalb einer HTML-Vorlage eingefügt wurde.

## Alphabetisches Verzeichnis

Pseudo-Elemente, die durch eine Reihe von CSS-Spezifikationen definiert sind, umfassen die folgenden:

A

- {{CSSxRef("::after")}}

B

- {{CSSxRef("::backdrop")}}
- {{CSSxRef("::before")}}

C

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

- [CSS Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes)
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [Lernen: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
