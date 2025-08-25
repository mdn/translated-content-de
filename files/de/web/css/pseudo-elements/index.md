---
title: Pseudo-Elemente
slug: Web/CSS/Pseudo-elements
l10n:
  sourceCommit: 37482c6bb0894d047a225c24f102352f89788523
---

Ein CSS **Pseudo-Element** ist ein Schlüsselwort, das zu einem Selektor hinzugefügt wird, um einen bestimmten Teil des ausgewählten Elements oder der ausgewählten Elemente zu stylen.

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

Doppelte Doppelpunkte (`::`) werden für Pseudo-Elemente verwendet. Dies unterscheidet Pseudo-Elemente von [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes), die einen einzelnen Doppelpunkt (`:`) in ihrer Notation verwenden. Beachten Sie, dass Browser aufgrund der Unterstützung der einfachen Doppelpunktsyntax für die ursprünglichen vier Pseudo-Elemente `::before`, `::after`, `::first-line` und `::first-letter` die einfache Doppelpunktsyntax unterstützen.

Pseudo-Elemente existieren nicht unabhängig. Das Element, von dem ein Pseudo-Element ein Teil ist, wird als _ursprüngliches Element_ bezeichnet. Ein Pseudo-Element muss nach allen anderen Komponenten im [komplexen](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector) oder [zusammengesetzten](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) Selektor erscheinen. Das letzte Element im Selektor ist das ursprüngliche Element des Pseudo-Elements. Zum Beispiel können Sie die erste Zeile eines Absatzes mit `p::first-line` auswählen, jedoch nicht die Kinder der ersten Zeile. Daher ist `p::first-line > *` ungültig.

Ein Pseudo-Element kann basierend auf dem aktuellen Zustand des ursprünglichen Elements ausgewählt werden. Zum Beispiel wählt `p:hover::first-line` die erste Zeile (Pseudo-Element) eines Absatzes aus, wenn der Absatz selbst gehovt wird (Pseudo-Klasse).

> [!NOTE]
> Wenn eine [Selektorliste](/de/docs/Web/CSS/CSS_selectors/Selector_structure#selector_list) einen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert.

## Typografische Pseudo-Elemente

- {{CSSxRef("::first-line")}}
  - : Die erste Zeilenbox des ursprünglichen Elements.
- {{CSSxRef("::first-letter")}}
  - : Der erste Buchstabe, die erste Zahl oder das Symbol auf der ersten Zeile des ursprünglichen Elements.
- {{CSSxRef("::cue")}}
  - : Die [WebVTT](/de/docs/Web/API/WebVTT_API) Cues innerhalb eines ausgewählten Elements.
    Dies kann verwendet werden, um [Untertitel und andere Cues zu stylen](/de/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in Medien mit VTT-Tracks.
    Das [CSS Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul definiert ebenfalls die `::postfix` und `::prefix` Sub-Pseudo-Elemente. Diese werden derzeit von keinem Browser unterstützt.

## Hervorhebungs-Pseudo-Elemente

Wählen Sie Dokumentabschnitte basierend auf dem Inhalt und Dokumentstatus aus, um diese Bereiche anders zu stylen, um diesen Status dem Benutzer anzuzeigen.

- {{CSSxRef("::selection")}}
  - : Der Teil eines Dokuments, der ausgewählt wurde.
- {{CSSxRef("::target-text")}}
  - : Das Zieldokumentelement. Das Zieldokumentelement wird mit dem Fragment-Identifikator der URL identifiziert.
- {{CSSxRef("::spelling-error")}}
  - : Ein Textabschnitt, den der Browser als falsch geschrieben ansieht.
- {{CSSxRef("::grammar-error")}}
  - : Ein Textabschnitt, den der Browser als grammatikalisch inkorrekt ansieht.
- {{CSSxRef("::highlight()")}}
  - : Die Elemente im [Highlight-Register](/de/docs/Web/API/CSS/highlights_static). Es wird verwendet, um benutzerdefinierte Hervorhebungen zu erstellen.

## Baumkonforme Pseudo-Elemente

Diese Pseudo-Elemente verhalten sich wie reguläre Elemente, indem sie nahtlos innerhalb des Box-Modells passen. Sie wirken als Kindelement, das direkt innerhalb der Hierarchie des ursprünglichen Elements gestylt werden kann.

- {{CSSxRef("::before")}}
  - : Erstellt ein Pseudo-Element, das das erste Kindelement des ausgewählten Elementes ist.
- {{CSSxRef("::after")}}
  - : Erstellt ein Pseudo-Element, das das letzte Kindelement des ausgewählten Elementes ist.
- {{CSSxRef("::column")}}
  - : Jedes Spaltenfragment eines [Mehrspaltenlayouts](/de/docs/Web/CSS/CSS_multicol_layout).
- {{CSSxRef("::marker")}}
  - : Die automatisch generierte Markierungsbox eines Listenelements.
- {{CSSxRef("::backdrop")}}
  - : Der Hintergrund des ursprünglichen Elements, das im {{Glossary("Top_layer", "Top-Layer")}} gerendert wird.
- {{CSSxRef("::scroll-button()")}}
  - : Erstellt eine Schaltfläche, die das Scrollen des {{Glossary("scroll_container", "Scroll-Containers")}} steuern kann, auf den es angewendet wurde.
- {{CSSxRef("::scroll-marker")}}
  - : Erstellt ein Pseudo-Element, das ein Scroll-Marker ist – eine Scroll-Zielschaltfläche für sein ursprüngliches Element, das in einer Scroll-Marker-Gruppe verschachtelt ist.
- {{CSSxRef("::scroll-marker-group")}}
  - : Generiert einen Container vor einem Scroll-Container, um die {{cssxref("::scroll-marker")}} Pseudo-Elemente zu enthalten, die auf dem Element oder seinen Nachfahren generiert werden.

## Elemente-gestützte Pseudo-Elemente

Diese Pseudo-Elemente sind reale Elemente, die sonst nicht auswählbar sind.

- {{CSSxRef("::details-content")}}
  - : Die ausklappbaren/in collaps-Möglichkeiten-Inhalte eines {{HTMLElement("details")}} Elements.
- {{CSSxRef("::part", "::part()")}}
  - : Jedes Element innerhalb eines [Shadow Tree](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein übereinstimmendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attribut hat.
- {{CSSxRef("::slotted", "::slotted()")}}
  - : Jedes Element, das in einen Slot innerhalb eines HTML-Templates eingefügt wird.

## Formularbezogene Pseudo-Elemente

Die Pseudo-Elemente beziehen sich auf Formularelemente.

- {{CSSxRef("::checkmark")}}
  - : Zielt auf das Häkchen ab, das innerhalb des aktuell ausgewählten `<option>` Elements eines [anpassbaren Auswahlelements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) platziert ist, um einen visuellen Hinweis darauf zu geben, welches ausgewählt ist.
- {{CSSxRef("::file-selector-button")}}
  - : Die Schaltfläche eines {{HTMLElement("input")}} von [`type="file"`](/de/docs/Web/HTML/Reference/Elements/input/file).
- {{CSSxRef("::picker()")}}
  - : Der Auswahlteil eines Elements, zum Beispiel der Dropdown-Auswahl eines [anpassbaren Auswahlelements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).
- {{CSSxRef("::picker-icon")}}
  - : Das Auswahl-Symbol innerhalb von Formularelementen, denen ein Symbol zugewiesen ist. Im Falle eines [anpassbaren Auswahlelements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) wählt es den Pfeil, der nach unten zeigt, wenn das Auswahlfeld geschlossen ist.
- {{CSSxRef("::placeholder")}}
  - : Der Platzhaltertext in einem Eingabefeld.

## Alphabetischer Index

Pseudo-Elemente, die durch eine Reihe von CSS-Spezifikationen definiert sind, umfassen Folgendes:

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

Sie können einige Pseudo-Element-Selektoren zusammenketten, um gestylte Pseudo-Elemente zu erstellen, die in andere Pseudo-Elemente verschachtelt sind. Die folgenden Kombinationen von verschachtelten Pseudo-Elementen werden unterstützt:

- {{CSSxRef("::after")}}
  - `::after::marker`: Wählt das {{CSSxRef("::marker")}} Pseudo-Element eines `::after` Pseudo-Elements aus, wenn `::after` als Listenelement, mit {{CSSxRef("display", "display: list-item")}}, gestylt ist.
- {{CSSxRef("::before")}}
  - `::before::marker`: Wählt das {{CSSxRef("::marker")}} Pseudo-Element eines `::before` Pseudo-Elements aus, wenn `::before` als Listenelement, mit {{CSSxRef("display", "display: list-item")}}, gestylt ist.

Besuchen Sie die Referenzseiten zu den einzelnen Pseudo-Elementen für Beispiele und Informationen zur Browser-Kompatibilität.

## Vererbung von Hervorhebungs-Pseudo-Elementen

[Hervorhebungs-Pseudo-Elemente](#hervorhebungs-pseudo-elemente), wie {{CSSxref("::selection")}}, {{CSSxref("::target-text")}}, {{CSSxref("::highlight()")}}, {{CSSxref("::spelling-error")}} und {{CSSxref("::grammar-error")}}, folgen einem konsistenten Vererbungsmodell, das sich von der [regulären Elementvererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) unterscheidet.

Wenn Sie Stile auf Hervorhebungs-Pseudo-Elemente anwenden, erben sie von sowohl:

1. Ihren Elternelementen (gemäß der normalen Vererbung).
2. Den Hervorhebungs-Pseudo-Elementen ihrer Elternelemente (gemäß der Hervorhebungsvererbung).

Das bedeutet, dass wenn Sie sowohl ein Elternelement als auch ein Kindelement mit einem Hervorhebungs-Pseudo-Element stylen, der hervorgehobene Text des Kindelements Eigenschaften aus beiden Quellen kombiniert.

Hier ist ein konkretes Beispiel.

Zuerst haben wir einige HTML-Inhalte, die zwei verschachtelte {{htmlelement("div")}} Elemente umfassen. Einige der eingeschlossenen Textinhalte befinden sich direkt im übergeordneten `<div>`, und einige sind im untergeordneten `<div>` verschachtelt.

```html live-sample___highlight_inheritance
<div class="parent">
  Parent text
  <div class="child">Child text</div>
</div>
```

Als nächstes fügen wir etwas CSS hinzu, das die übergeordneten und untergeordneten `<div>` Elemente separat auswählt und ihnen unterschiedliche {{cssxref("color")}} Werte gibt, und das ausgewählte Textstück der übergeordneten und untergeordneten Elemente ({{cssxref("::selection")}}) auswählt. Dies gibt jedem `<div>` eine andere {{cssxref("background-color")}} und setzt eine andere Textfarbe `color` auf der Elternelementauswahl.

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

Das Beispiel wird folgendermaßen dargestellt:

{{EmbedLiveSample("highlight_inheritance", , "150")}}

Versuchen Sie, den Text in beiden Elementen auszuwählen. Beachten Sie, dass:

1. Wenn Sie den übergeordneten Text auswählen, er den gelben Hintergrund und die rote Textfarbe verwendet, die in `.parent::selection` definiert sind.
2. Wenn Sie den untergeordneten Text auswählen, es verwendet:
   - Den orangefarbenen Hintergrund von `.child::selection`.
   - Die rote Textfarbe, die von dem `::selection` Pseudo-Element des übergeordneten Elements geerbt wird.

Dies demonstriert, wie das Hervorhebungs-Pseudo-Element des Kindelements sowohl vom Elternelement als auch vom Hervorhebungs-Pseudo-Element des Elternelements erbt.

[CSS Custom Properties (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) in Hervorhebungs-Pseudo-Elementen erben von ihrem ursprünglichen Element (dem Element, auf das sie angewendet werden), nicht durch die Hervorhebungsvererbungskette. Zum Beispiel:

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

Wenn Sie mit dem universellen Selektor mit Hervorhebungs-Pseudo-Elementen arbeiten, verhindert dies die Hervorhebungsvererbung. Zum Beispiel:

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
- [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes)
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [Lernen: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Änderungen der Vererbung für CSS-Auswahl-Styling](https://developer.chrome.com/blog/selection-styling) - Detaillierte Erklärung der Modelländerungen bei der Hervorhebungsvererbung in Chrome 134
