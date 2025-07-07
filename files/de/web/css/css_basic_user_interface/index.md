---
title: CSS Benutzeroberfläche Basis
slug: Web/CSS/CSS_basic_user_interface
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

{{CSSRef}}

Das Modul **CSS Benutzeroberfläche Basis** ermöglicht Ihnen, das Rendering und die Funktionalität von Funktionen im Zusammenhang mit der Benutzeroberfläche zu definieren, einschließlich Umriss-Eigenschaften, visuelles Feedback für Zeigegeräte und Tastaturen sowie die Änderung des Standardaussehens von UI-Widgets.

Grundlegende Benutzeroberflächen-Eigenschaften können verwendet werden, um die Benutzererfahrung und Barrierefreiheit zu verbessern, indem visuelle Hinweise für Elemente bereitgestellt werden, mit denen interagiert wird. Dazu gehören das Styling von Mauszeigern und die Navigation der Tastatur mit Richtungstasten sowie das Styling von Karet-Cursorn, wenn ein bearbeitbares Element den Fokus hat. Das Modul ermöglicht es, Umrisse für fokussierte (oder nicht fokussierte) Elemente bereitzustellen, ohne die Dimensionen und das Styling des [Box-Modells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#what_is_the_css_box_model) eines Elements zu beeinflussen. Dieses Modul ermöglicht auch das Styling von Benutzeroberflächen-Steuerelementen.

### Grundlegende Benutzeroberfläche im Einsatz

Um zu sehen, wie grundlegende Benutzeroberflächen-Eigenschaften das Erscheinungsbild von UI-Funktionen verändern können, interagieren Sie mit den Elementen in diesem Beispiel. Beachten Sie, dass einige Funktionen in diesem Beispiel die Benutzerfreundlichkeit verbessern, während andere die Benutzererfahrung beeinträchtigen.

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

Die CSS-Eigenschaften {{CSSxRef("outline")}} und {{CSSxRef("outline-offset")}} wurden verwendet, um den Benutzern Rückmeldung darüber zu geben, welches Element derzeit den Fokus hat. Eine {{CSSxRef("accent-color")}} bietet eine Thema-Farbe für alle Formularelemente. Der Karet, der erscheint, wenn der Text bearbeitet wird, hat dank der Eigenschaft {{CSSxRef("caret-color")}} die gleiche Farbe. Diese können alle als UI-Verbesserungen betrachtet werden.

Einige Funktionen beeinträchtigen die Benutzerfreundlichkeit. Die Eigenschaft {{CSSxRef("cursor")}} wurde verwendet, um die Cursor von der Standard-Einstellung des Browsers zu ändern, was verwirrend ist. Die Eigenschaft {{CSSxRef("resize")}} verhindert, dass das zweite {{HTMLElement("textarea")}} in der Größe verändert wird, während die Eigenschaft {{CSSxRef("pointer-events")}} verhindert, dass das dritte `<textarea>` Klickereignisse empfängt. Es kann immer noch mit der Tastatur fokussiert werden.

Klicken Sie oben im Beispiel auf "Play", um den Code für die Animation im MDN Playground zu sehen oder zu bearbeiten.

## Referenz

### Eigenschaften

- {{CSSxRef("accent-color")}}
- {{CSSxRef("appearance")}}
- {{CSSxRef("caret-color")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("outline")}}, Kurzform für:
  - {{CSSxRef("outline-color")}}
  - {{CSSxRef("outline-style")}}
  - {{CSSxRef("outline-width")}}
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("user-select")}}

> [!NOTE]
> Die Spezifikation definiert auch die Eigenschaften: `caret`, `caret-shape`, `nav-down`, `nav-left`, `nav-right` und `nav-up`. Diese Eigenschaften wurden noch in keinem Browser implementiert.

## Leitfäden

- [Formulare lernen: Fortgeschrittenes Form-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Erklärt, wie {{CSSxRef("appearance")}} verwendet werden kann, um Formularelemente zu stylen.

## Verwandte Konzepte

- CSS [`cursor`](/de/docs/Web/CSS/cursor) Eigenschaft
- SVG [`cursor`](/de/docs/Web/SVG/Reference/Attribute/cursor) Attribut
- CSS {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}} und {{CSSxRef(":focus-visible")}} Pseudoklassen
- [`CaretPosition`](/de/docs/Web/API/CaretPosition) Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Tipps für das Design nützlicher und benutzbarer Fokus-Indikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
