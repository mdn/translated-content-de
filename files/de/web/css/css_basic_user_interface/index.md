---
title: CSS Grundlegende Benutzeroberfläche
slug: Web/CSS/CSS_basic_user_interface
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{CSSRef}}

Das **CSS Modul für grundlegende Benutzeroberflächen** erlaubt es Ihnen, das Rendering und die Funktionalität von Benutzeroberflächen-Features zu definieren, einschließlich Outline-Eigenschaften, visuelle Rückmeldungen für Zeigegeräte und Tastaturen sowie die Änderung des Standardaussehens von UI-Widgets.

Grundlegende Benutzeroberflächeneigenschaften können verwendet werden, um die Benutzererfahrung und Zugänglichkeit zu verbessern, indem visuelle Hinweise zu den Elementen bereitgestellt werden, mit denen interagiert wird. Dies umfasst das Styling von Mauszeigern und Tastaturfokusnavigation sowie das Styling von Caret-Cursoren, wenn ein bearbeitbares Element im Fokus steht. Das Modul ermöglicht es, Umrisse für fokussierte (oder nicht fokussierte) Elemente bereitzustellen, ohne die Dimensionen und das Styling des [Box-Modells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#what_is_the_css_box_model) eines Elements zu beeinflussen. Dieses UI-Modul ermöglicht auch das Styling von Benutzeroberflächen-Steuerelementen.

### Grundlegende Benutzeroberfläche in Aktion

Um zu sehen, wie grundlegende Benutzeroberflächeneigenschaften das Erscheinungsbild von UI-Features verändern können, interagieren Sie mit den Elementen in diesem Beispiel. Beachten Sie, dass einige Features in diesem Beispiel die Benutzerfreundlichkeit verbessern, während andere die Benutzererfahrung beeinträchtigen.

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
  border: 1px solid #ccc;
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

Die CSS-Eigenschaften {{CSSxRef("outline")}} und {{CSSxRef("outline-offset")}} wurden verwendet, um den Benutzern Rückmeldung darüber zu geben, welches Element derzeit im Fokus steht. Eine {{CSSxRef("accent-color")}} bietet eine Themenfarbe für alle Formularelemente. Der Caret, der beim Bearbeiten des Textes erscheint, hat dank der Eigenschaft {{CSSxRef("caret-color")}} dieselbe Farbe. Diese können alle als UI-Verbesserungen angesehen werden.

Einige Features beeinträchtigen die Benutzerfreundlichkeit. Die {{CSSxRef("cursor")}}-Eigenschaft wurde verwendet, um die Zeiger vom Standard des Browsers zu ändern, was verwirrend ist. Die {{CSSxRef("resize")}}-Eigenschaft verhindert, dass die zweite {{HTMLElement("textarea")}} größenveränderbar ist, während die {{CSSxRef("pointer-events")}}-Eigenschaft verhindert, dass das dritte `<textarea>` Klickereignisse empfängt. Es ist weiterhin mit der Tastatur fokussierbar.

Klicken Sie oben im Beispiel auf "Play", um den Code für die Animation im MDN Playground zu sehen oder zu bearbeiten.

## Referenz

### Eigenschaften

- {{CSSxRef("accent-color")}}
- {{CSSxRef("appearance")}}

- {{CSSxRef("caret")}}, Kurzform für:
  - {{CSSxRef("caret-color")}}
  - {{CSSxRef("caret-shape")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("nav-down")}}
- {{CSSxRef("nav-left")}}
- {{CSSxRef("nav-right")}}
- {{CSSxRef("nav-up")}}
- {{CSSxRef("outline")}}, Kurzform für:
  - {{CSSxRef("outline-color")}}
  - {{CSSxRef("outline-style")}}
  - {{CSSxRef("outline-width")}}
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("user-select")}}

## Leitfäden

- [Lernen Sie Formulare: Fortgeschrittenes Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Erklärt, wie {{CSSxRef("appearance")}} verwendet werden kann, um Formularelemente zu stylen.

## Verwandte Konzepte

- CSS [`cursor`](/de/docs/Web/CSS/cursor) Eigenschaft
- SVG [`cursor`](/de/docs/Web/SVG/Reference/Attribute/cursor) Attribut
- CSS {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}} und {{CSSxRef(":focus-visible")}} Pseudoklassen
- [`CaretPosition`](/de/docs/Web/API/CaretPosition) Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Tipps für das Design nützlicher und benutzbarer Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
