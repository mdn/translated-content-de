---
title: CSS-Grundlegendes Benutzeroberfläche
slug: Web/CSS/CSS_basic_user_interface
l10n:
  sourceCommit: 7c98b5490c1c1a9e7b1cdf4d42cad5acc732d44f
---

Das Modul **CSS-Grundlegendes Benutzeroberfläche** ermöglicht es Ihnen, die Darstellung und Funktionalität von Funktionen im Zusammenhang mit der Benutzeroberfläche zu definieren, einschließlich Umriss-Eigenschaften, visuelle Rückmeldungen an Zeigegeräte und Tastatur sowie die Änderung des Standardaussehens von UI-Widgets.

Grundlegende Benutzeroberflächen-Eigenschaften können verwendet werden, um die Benutzererfahrung und Zugänglichkeit zu verbessern, indem visuelle Hinweise für Elemente bereitgestellt werden, die interagiert werden, einschließlich der Gestaltung von Mauszeigern und der Tastaturnavigationsfokussierung, sowie der Gestaltung von Caret-Cursors, wenn ein bearbeitbares Element fokussiert ist. Das Modul ermöglicht es, Umrisse für fokussierte (oder nicht fokussierte) Elemente bereitzustellen, ohne die Dimensionen und Gestaltung eines Elements im [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#what_is_the_css_box_model) zu beeinflussen. Dieses UI-Modul ermöglicht auch das Styling von Bedienelementen der Benutzeroberfläche.

### Grundlegende Benutzeroberfläche in Aktion

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

Die CSS-Eigenschaften {{CSSxRef("outline")}} und {{CSSxRef("outline-offset")}} wurden verwendet, um den Nutzern ein Feedback zu geben, welches Element aktuell fokussiert ist. Ein {{CSSxRef("accent-color")}} bietet eine Themenfarbe für alle Formularsteuerelemente. Der Caret, der erscheint, wenn der Text bearbeitet wird, hat dank der {{CSSxRef("caret-color")}}-Eigenschaft die gleiche Farbe. All dies kann als UI-Verbesserungen betrachtet werden.

Einige Funktionen beeinträchtigen die Benutzerfreundlichkeit. Die {{CSSxRef("cursor")}}-Eigenschaft wurde verwendet, um Cursors vom standardmäßigen Browser-Cursor zu ändern, was verwirrend ist. Die {{CSSxRef("resize")}}-Eigenschaft verhindert, dass das zweite {{HTMLElement("textarea")}} resizebar ist, während die {{CSSxRef("pointer-events")}}-Eigenschaft verhindert, dass das dritte `<textarea>` Klickereignisse empfängt. Es kann jedoch weiterhin mit der Tastatur fokussiert werden.

Klicken Sie auf "Play" im obigen Beispiel, um den Code für die Animation im MDN Playground zu sehen oder zu bearbeiten.

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

Das CSS-Grundlegendes Benutzeroberfläche-Modul definiert auch die Eigenschaften `caret`, `caret-animation`, `caret-shape`, `nav-down`, `nav-left`, `nav-right` und `nav-up`. Derzeit unterstützt kein Browser diese Funktionen.

## Leitfäden

- [Formulare lernen: Erweiterte Formulargestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Erklärt, wie {{CSSxRef("appearance")}} verwendet werden kann, um Formularsteuerelemente zu gestalten.

## Verwandte Konzepte

- CSS [`cursor`](/de/docs/Web/CSS/cursor) Eigenschaft
- SVG [`cursor`](/de/docs/Web/SVG/Reference/Attribute/cursor) Attribut
- CSS {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}} und {{CSSxRef(":focus-visible")}} Pseudoklassen
- [`CaretPosition`](/de/docs/Web/API/CaretPosition) Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Tipps zur Gestaltung nützlicher und brauchbarer Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
