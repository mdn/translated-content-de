---
title: Grundlegende Benutzeroberfläche in CSS
slug: Web/CSS/CSS_basic_user_interface
l10n:
  sourceCommit: 6cd62fb4482a2d6927cebd0223bf8d0386095340
---

Das **modul der grundlegenden Benutzeroberfläche in CSS** ermöglicht es Ihnen, das Rendering und die Funktionalität von Funktionen im Zusammenhang mit der Benutzeroberfläche zu definieren, einschließlich Outline-Eigenschaften, visuellen Rückmeldungen an Zeigegeräte und Tastatur sowie dem Ändern des Standardaussehens von UI-Widgets.

Durch grundlegende Benutzeroberflächeneigenschaften kann die Benutzererfahrung und Zugänglichkeit verbessert werden, indem visuelle Hinweise zu Elementen bereitgestellt werden, die manipuliert werden, einschließlich der Gestaltung von Mauszeigern und der Navigation mit der Fokussierung per Tastatur sowie der Gestaltung von Karetzeigern, wenn ein bearbeitbares Element den Fokus hat. Das Modul ermöglicht es, Outlines für fokussierte (oder nicht fokussierte) Elemente bereitzustellen, ohne die Dimensionen und das Styling des [Boxmodells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#what_is_the_css_box_model) eines Elements zu beeinträchtigen. Dieses UI-Modul ermöglicht auch das Styling von Bedienelementen der Benutzeroberfläche.

## Grundlegende Benutzeroberfläche in Aktion

Um zu sehen, wie grundlegende Benutzeroberflächeneigenschaften das Aussehen von UI-Features verändern können, interagieren Sie mit den Elementen in diesem Beispiel. Beachten Sie, dass einige Funktionen in diesem Beispiel die Benutzbarkeit verbessern, während andere die Benutzererfahrung beeinträchtigen.

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

Die CSS-Eigenschaften {{CSSxRef("outline")}} und {{CSSxRef("outline-offset")}} wurden verwendet, um den Benutzern Rückmeldung darüber zu geben, welches Element derzeit den Fokus hat. Ein {{CSSxRef("accent-color")}} bietet eine Themenfarbe für alle Formularelemente. Der Karet, der beim Bearbeiten des Textes erscheint, hat dank der Eigenschaft {{CSSxRef("caret-color")}} die gleiche Farbe. Diese können alle als UI-Verbesserungen betrachtet werden.

Einige Merkmale beeinträchtigen die Benutzbarkeit. Die Eigenschaft {{CSSxRef("cursor")}} wurde verwendet, um die Zeiger vom Standard des Browsers zu ändern, was verwirrend ist. Die {{CSSxRef("resize")}}-Eigenschaft verhindert, dass das zweite {{HTMLElement("textarea")}} größenveränderbar ist, während die Eigenschaft {{CSSxRef("pointer-events")}} verhindert, dass das dritte `<textarea>` Klick-Ereignisse empfängt. Es ist jedoch weiterhin mit der Tastatur fokussierbar.

Klicken Sie auf "Play" im obigen Beispiel, um den Code für die Animation im MDN Playground zu sehen oder zu bearbeiten.

## Referenz

### Eigenschaften

- {{CSSxRef("accent-color")}}
- {{CSSxRef("appearance")}}
- {{CSSxRef("caret-animation")}}
- {{CSSxRef("caret-color")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("outline")}}, Abkürzung für:
  - {{CSSxRef("outline-color")}}
  - {{CSSxRef("outline-style")}}
  - {{CSSxRef("outline-width")}}
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("user-select")}}

Das Modul der grundlegenden Benutzeroberfläche in CSS definiert auch die Eigenschaften `caret`, `caret-shape`, `nav-down`, `nav-left`, `nav-right` und `nav-up`. Derzeit unterstützen keine Browser diese Funktionen.

## Leitfäden

- [Formulare lernen: erweitertes Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Erklärt, wie {{CSSxRef("appearance")}} verwendet werden kann, um Formularelemente zu stylen.

## Verwandte Konzepte

- CSS [`cursor`](/de/docs/Web/CSS/cursor) Eigenschaft
- SVG [`cursor`](/de/docs/Web/SVG/Reference/Attribute/cursor) Attribut
- CSS {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}} und {{CSSxRef(":focus-visible")}} Pseudoklassen
- [`CaretPosition`](/de/docs/Web/API/CaretPosition) Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Tipps zum Entwerfen nützlicher und benutzbarer Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
