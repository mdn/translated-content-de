---
title: CSS-Benutzeroberfläche
slug: Web/CSS/CSS_basic_user_interface
l10n:
  sourceCommit: 49f90b9c810e5167fecf6ad652afb03075072db7
---

Das **CSS-Modul Benutzeroberfläche** ermöglicht es Ihnen, das Rendering und die Funktionalität von Features im Zusammenhang mit der Benutzeroberfläche zu definieren, einschließlich Umriss-Eigenschaften, visuelles Feedback für Zeigegeräte und Tastaturen sowie der Änderung des Standardaussehens von UI-Widgets.

Eigenschaften der Benutzeroberfläche können verwendet werden, um die Benutzererfahrung und Zugänglichkeit zu verbessern, indem visuelle Hinweise auf Elemente bereitgestellt werden, mit denen interagiert wird. Dies umfasst das Styling von Mauszeigern und der Fokus-Navigation über Tastatur sowie das Styling von Caret-Cursorn, wenn ein bearbeitbares Element den Fokus hat. Das Modul enthält Funktionen zum Bereitstellen von Umrissen für fokussierte (oder nicht fokussierte) Elemente, ohne die Dimensionen und das Styling eines Elements im [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#what_is_the_css_box_model) zu beeinträchtigen. Dieses UI-Modul ermöglicht auch das Styling von Benutzeroberflächen-Steuerelementen.

## Benutzeroberfläche in Aktion

Um zu sehen, wie Benutzeroberflächeneigenschaften das Erscheinungsbild von UI-Funktionen verändern können, interagieren Sie mit den Elementen in diesem Beispiel. Beachten Sie, dass einige Features in diesem Beispiel die Benutzerfreundlichkeit verbessern, während andere das Benutzererlebnis beeinträchtigen.

```html hidden live-sample___basicUI
<div><span contenteditable>Edit this text </span></div>
<fieldset>
  <legend>Play with these fake form controls</legend>
  <input type="checkbox" id="check" />
  <input type="radio" name="a" />
  <input type="radio" name="a" />
  <input type="range" />
  <progress></progress>
</fieldset>
<fieldset>
  <legend>Be careful not to ruin usability: try resizing these.</legend>
  <textarea>
  cursor: wait;
  </textarea>
  <textarea>
  resize: none;
  </textarea>
  <textarea>
  pointer-events: none;
  </textarea>
</fieldset>
```

```css hidden live-sample___basicUI
body {
  font-family: sans-serif;
  font-size: 1.25rem;
}
[contenteditable] {
  cursor: copy;
  caret-color: magenta;
  border: 1px solid #cccccc;
}
:focus {
  outline: dashed magenta 3px;
  outline-offset: 10px;
}
* {
  accent-color: magenta;
}
div,
fieldset {
  margin: 20px;
}
textarea:nth-of-type(1) {
  cursor: wait;
}
textarea:nth-of-type(2) {
  resize: none;
}
textarea:nth-of-type(3) {
  pointer-events: none;
}
```

{{EmbedLiveSample("basicUI", "", "300px")}}

Die CSS-Eigenschaften {{CSSxRef("outline")}} und {{CSSxRef("outline-offset")}} wurden verwendet, um den Nutzern zu zeigen, welches Element derzeit den Fokus hat. Ein {{CSSxRef("accent-color")}} bietet eine Themenfarbe für alle Formularelemente. Der Caret, der erscheint, wenn der Text bearbeitet wird, hat die gleiche Farbe dank der {{CSSxRef("caret-color")}} Eigenschaft. Dies können alle als Verbesserungen der Benutzeroberfläche betrachtet werden.

Einige Features beeinträchtigen die Benutzerfreundlichkeit. Die {{CSSxRef("cursor")}} Eigenschaft wurde verwendet, um die Zeiger vom Standard des Browsers zu ändern, was verwirrend ist. Die {{CSSxRef("resize")}} Eigenschaft verhindert, dass die zweite {{HTMLElement("textarea")}} angepasst werden kann, während die {{CSSxRef("pointer-events")}} Eigenschaft verhindert, dass das dritte `<textarea>` Klickereignisse empfängt. Es ist jedoch weiterhin mit der Tastatur fokussierbar.

Klicken Sie auf "Play" im obigen Beispiel, um den Code für die Animation im MDN Playground zu sehen oder zu bearbeiten.

## Referenz

### Eigenschaften

- {{CSSxRef("accent-color")}}
- {{CSSxRef("appearance")}}
- {{CSSxRef("caret-animation")}}
- {{CSSxRef("caret-color")}}
- {{CSSxRef("caret-shape")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("outline")}}, Kurzform für:
  - {{CSSxRef("outline-color")}}
  - {{CSSxRef("outline-style")}}
  - {{CSSxRef("outline-width")}}
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("user-select")}}

Das CSS-Modul für Benutzeroberflächen definiert auch die Eigenschaften {{CSSxRef("caret")}}, `nav-down`, `nav-left`, `nav-right` und `nav-up`. Derzeit unterstützen keine Browser diese Funktionen.

## Leitfäden

- [Formulare lernen: Fortgeschrittenes Formulargestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Erklärt, wie {{CSSxRef("appearance")}} verwendet werden kann, um Formularsteuerungen zu stylen.

## Verwandte Konzepte

- CSS-Eigenschaft [`cursor`](/de/docs/Web/CSS/cursor)
- SVG-Attribut [`cursor`](/de/docs/Web/SVG/Reference/Attribute/cursor)
- CSS-Pseudoklassen {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}}, und {{CSSxRef(":focus-visible")}}
- [`CaretPosition`](/de/docs/Web/API/CaretPosition) Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Tips for Designing Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
