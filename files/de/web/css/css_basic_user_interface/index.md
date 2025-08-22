---
title: Grundlegende CSS-Benutzeroberfläche
slug: Web/CSS/CSS_basic_user_interface
l10n:
  sourceCommit: 7a146b52b4ba03be98075668d50490872c78fd12
---

Das Modul der **grundlegenden CSS-Benutzeroberfläche** ermöglicht es Ihnen, das Rendering und die Funktionalität von Funktionen im Zusammenhang mit der Benutzeroberfläche festzulegen, einschließlich Umriss-Eigenschaften, visuelles Feedback für Zeigegeräte und Tastaturen sowie das Ändern des Standardaussehens von UI-Widgets.

Grundlegende Benutzeroberflächeneigenschaften können verwendet werden, um die Benutzerfreundlichkeit und Zugänglichkeit zu verbessern, indem visuelle Hinweise auf Elemente gegeben werden, die interagiert werden, einschließlich der Gestaltung von Mauszeigern und der navigierenden Fokussierung über die Tastatur sowie der Gestaltung von Caret-Zeigern, wenn ein bearbeitbares Element den Fokus hat. Das Modul ermöglicht es, Umrisse für fokussierte (oder nicht fokussierte) Elemente bereitzustellen, ohne die Dimensionen und das Styling eines Elements im [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#what_is_the_css_box_model) zu beeinträchtigen. Dieses UI-Modul ermöglicht auch die Gestaltung von Benutzeroberflächensteuerungen.

### Grundlegende Benutzeroberfläche in Aktion

Um zu sehen, wie grundlegende Benutzeroberflächeneigenschaften das Erscheinungsbild von UI-Funktionen verändern können, interagieren Sie mit den Elementen in diesem Beispiel. Beachten Sie, dass einige Funktionen in diesem Beispiel die Benutzerfreundlichkeit verbessern, während andere die Benutzererfahrung beeinträchtigen.

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

Die CSS-Eigenschaften {{CSSxRef("outline")}} und {{CSSxRef("outline-offset")}} wurden verwendet, um den Benutzern Rückmeldung zu geben, welches Element den aktuellen Fokus hat. Eine {{CSSxRef("accent-color")}} bietet eine Themenfarbe für alle Formularsteuerelemente. Der Caret, der erscheint, wenn der Text bearbeitet wird, hat dank der Eigenschaft {{CSSxRef("caret-color")}} die gleiche Farbe. Diese können alle als Verbesserungen der Benutzeroberfläche betrachtet werden.

Einige Funktionen beeinträchtigen die Benutzerfreundlichkeit. Die Eigenschaft {{CSSxRef("cursor")}} wurde verwendet, um Zeiger vom Standard des Browsers zu ändern, was verwirrend ist. Die Eigenschaft {{CSSxRef("resize")}} verhindert, dass das zweite {{HTMLElement("textarea")}} größenveränderbar ist, während die Eigenschaft {{CSSxRef("pointer-events")}} verhindert, dass das dritte `<textarea>` Klickereignisse empfängt. Es ist jedoch weiterhin über die Tastatur fokussierbar.

Klicken Sie oben im Beispiel auf „Play“, um den Code für die Animation im MDN Playground zu sehen oder zu bearbeiten.

## Referenz

### Eigenschaften

- {{CSSxRef("accent-color")}}
- {{CSSxRef("appearance")}}
- {{CSSxRef("caret-animation")}}
- {{CSSxRef("caret-color")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("outline")}}, zusammengefasst für:
  - {{CSSxRef("outline-color")}}
  - {{CSSxRef("outline-style")}}
  - {{CSSxRef("outline-width")}}
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("user-select")}}

Das Modul der grundlegenden CSS-Benutzeroberfläche definiert auch die Eigenschaften `caret`, `caret-shape`, `nav-down`, `nav-left`, `nav-right` und `nav-up`. Derzeit unterstützen keine Browser diese Funktionen.

## Leitfäden

- [Formulare lernen: Erweiterte Formulargestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Erklärt, wie {{CSSxRef("appearance")}} verwendet werden kann, um Formularsteuerelemente zu gestalten.

## Verwandte Konzepte

- CSS-Eigenschaft [`cursor`](/de/docs/Web/CSS/cursor)
- SVG-Attribut [`cursor`](/de/docs/Web/SVG/Reference/Attribute/cursor)
- CSS-Pseudoklassen {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}} und {{CSSxRef(":focus-visible")}}
- Schnittstelle [`CaretPosition`](/de/docs/Web/API/CaretPosition)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Tipps zum Gestalten nützlicher und benutzbarer Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
