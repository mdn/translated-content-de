---
title: Grundlegende Benutzeroberfläche in CSS
short-title: Grundlegende Benutzeroberfläche
slug: Web/CSS/Guides/Basic_user_interface
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Das **CSS-Modul für grundlegende Benutzeroberfläche** ermöglicht es Ihnen, das Rendering und die Funktionalität von Funktionen im Zusammenhang mit der Benutzeroberfläche zu definieren, einschließlich Umriss-Eigenschaften, visueller Rückmeldungen für Zeigegeräte und Tastaturen sowie zur Änderung der Standarddarstellung von UI-Widgets.

Eigenschaften der grundlegenden Benutzeroberfläche können verwendet werden, um die Benutzererfahrung und Zugänglichkeit zu verbessern, indem visuelle Hinweise für Elemente bereitgestellt werden, mit denen interagiert wird. Dazu gehören das Styling von Mauszeigern und der Tastaturnavigationsfokus sowie das Styling der Cursor, wenn ein bearbeitbares Element den Fokus hat. Das Modul enthält Funktionen zum Bereitstellen von Umrissen für fokussierte (oder nicht fokussierte) Elemente, ohne die Dimensionen und das Styling des [Box-Modells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#what_is_the_css_box_model) eines Elements zu beeinflussen. Dieses UI-Modul ermöglicht auch das Styling von Benutzeroberflächen-Steuerelementen.

## Grundlegende Benutzeroberfläche in Aktion

Um zu sehen, wie grundlegende Benutzeroberflächen-Eigenschaften das Erscheinungsbild von UI-Funktionen ändern können, interagieren Sie mit den Elementen in diesem Beispiel. Beachten Sie, dass einige Funktionen in diesem Beispiel die Benutzerfreundlichkeit verbessern, während andere die Benutzererfahrung beeinträchtigen.

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

Die CSS-Eigenschaften {{CSSxRef("outline")}} und {{CSSxRef("outline-offset")}} wurden verwendet, um den Benutzern eine Rückmeldung darüber zu geben, welches Element gerade den Fokus hat. Eine {{CSSxRef("accent-color")}} bietet eine Designfarbe für alle Formularelemente. Der Cursor, der beim Bearbeiten des Texts erscheint, hat dank der Eigenschaft {{CSSxRef("caret-color")}} die gleiche Farbe. Diese können alle als Verbesserungen der Benutzeroberfläche angesehen werden.

Einige Funktionen beeinträchtigen die Benutzerfreundlichkeit. Die {{CSSxRef("cursor")}}-Eigenschaft wurde verwendet, um die Zeiger vom Standardzeiger des Browsers zu ändern, was verwirrend ist. Die {{CSSxRef("resize")}}-Eigenschaft verhindert, dass das zweite {{HTMLElement("textarea")}} in der Größe geändert werden kann, während die Eigenschaft {{CSSxRef("pointer-events")}} verhindert, dass das dritte `<textarea>` Klickereignisse empfängt. Es ist jedoch weiterhin mit der Tastatur fokussierbar.

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

Das CSS-Modul für grundlegende Benutzeroberfläche definiert auch die Eigenschaften {{CSSxRef("caret")}}, `nav-down`, `nav-left`, `nav-right` und `nav-up`. Derzeit unterstützen keine Browser diese Funktionen.

## Leitfäden

- [Formulare lernen: erweitertes Formular-Styling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Erklärt, wie {{CSSxRef("appearance")}} zur Gestaltung von Formularelementen verwendet werden kann.

## Verwandte Konzepte

- CSS-Eigenschaft [`cursor`](/de/docs/Web/CSS/Reference/Properties/cursor)
- SVG-Attribut [`cursor`](/de/docs/Web/SVG/Reference/Attribute/cursor)
- CSS {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}} und {{CSSxRef(":focus-visible")}} Pseudoklassen
- [`CaretPosition`](/de/docs/Web/API/CaretPosition) Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Tipps für die Gestaltung nützlicher und benutzerfreundlicher Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
