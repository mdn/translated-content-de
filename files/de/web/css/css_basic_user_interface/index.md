---
title: CSS grundlegende Benutzeroberfläche
slug: Web/CSS/CSS_basic_user_interface
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das Modul **CSS grundlegende Benutzeroberfläche** ermöglicht es Ihnen, das Rendering und die Funktionalität von Funktionen, die mit der Benutzeroberfläche zusammenhängen, zu definieren, einschließlich Umriss-Eigenschaften, visuelle Rückmeldungen für Zeigegeräte und Tastaturen sowie das Ändern der Standarddarstellung von UI-Widgets.

Grundlegende Benutzeroberflächen-Eigenschaften können verwendet werden, um das Benutzererlebnis und die Barrierefreiheit zu verbessern, indem visuelle Hinweise für die interagierenden Elemente bereitgestellt werden. Dazu gehören das Styling von Mauscursoren, die Navigation mit der Tastatur und das Styling von Caret-Cursoren, wenn ein Editierelement im Fokus steht. Das Modul enthält Funktionen zur Bereitstellung von Umrissen für fokussierte (oder nicht fokussierte) Elemente, ohne die Abmessungen und das Styling eines Elements im [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#what_is_the_css_box_model) zu beeinträchtigen. Dieses UI-Modul ermöglicht auch das Styling von Benutzeroberflächen-Steuerungen.

## Grundlegende Benutzeroberfläche in Aktion

Um zu sehen, wie grundlegende Benutzeroberflächen-Eigenschaften das Erscheinungsbild von UI-Funktionen verändern können, interagieren Sie mit den Elementen in diesem Beispiel. Beachten Sie, dass einige Funktionen in diesem Beispiel die Benutzerfreundlichkeit verbessern, während andere das Benutzererlebnis beeinträchtigen.

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

Die CSS-Eigenschaften {{CSSxRef("outline")}} und {{CSSxRef("outline-offset")}} wurden verwendet, um den Benutzern Rückmeldung darüber zu geben, welches Element derzeit im Fokus steht. Eine {{CSSxRef("accent-color")}} bietet eine Themenfarbe für alle Formularsteuerelemente. Der Caret, der beim Bearbeiten des Textes erscheint, hat dank der Eigenschaft {{CSSxRef("caret-color")}} die gleiche Farbe. Dies können allesamt als UI-Verbesserungen angesehen werden.

Einige Funktionen beeinträchtigen die Benutzerfreundlichkeit. Die Eigenschaft {{CSSxRef("cursor")}} wurde verwendet, um Cursor vom Standard des Browsers zu ändern, was verwirrend ist. Die Eigenschaft {{CSSxRef("resize")}} verhindert, dass die zweite {{HTMLElement("textarea")}} skalierbar ist, während die Eigenschaft {{CSSxRef("pointer-events")}} verhindert, dass das dritte `<textarea>` Klick-Ereignisse empfängt. Es kann jedoch immer noch über die Tastatur fokussiert werden.

Klicken Sie oben im Beispiel auf "Play", um den Code für die Animation im MDN Playground zu sehen oder zu bearbeiten.

## Referenz

### Eigenschaften

- {{CSSxRef("accent-color")}}
- {{CSSxRef("appearance")}}
- {{CSSxRef("caret-animation")}}
- {{CSSxRef("caret-color")}}
- {{CSSxRef("caret-shape")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("outline")}}, Abkürzung für:
  - {{CSSxRef("outline-color")}}
  - {{CSSxRef("outline-style")}}
  - {{CSSxRef("outline-width")}}
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("user-select")}}

Das CSS-Modul für grundlegende Benutzeroberflächen definiert auch die Eigenschaften {{CSSxRef("caret")}}, `nav-down`, `nav-left`, `nav-right` und `nav-up`. Derzeit unterstützen keine Browser diese Funktionen.

## Leitfäden

- [Lernen von Formularen: fortgeschrittenes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Erklärt, wie {{CSSxRef("appearance")}} zum Styling von Formularsteuerelementen verwendet werden kann.

## Verwandte Konzepte

- CSS [`cursor`](/de/docs/Web/CSS/Reference/Properties/cursor) Eigenschaft
- SVG [`cursor`](/de/docs/Web/SVG/Reference/Attribute/cursor) Attribut
- CSS {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}} und {{CSSxRef(":focus-visible")}} Pseudoklassen
- [`CaretPosition`](/de/docs/Web/API/CaretPosition) Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Tipps zur Gestaltung nützlicher und benutzbarer Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
