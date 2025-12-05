---
title: CSS Benutzeroberfläche Grundlagen
short-title: Grundlegende Benutzeroberfläche
slug: Web/CSS/Guides/Basic_user_interface
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Das **CSS Benutzeroberfläche Grundlagen**-Modul ermöglicht es Ihnen, das Rendering und die Funktionalität von Funktionen zu definieren, die mit der Benutzeroberfläche zusammenhängen. Dazu gehören Umriss-Eigenschaften, visuelles Feedback für Zeigegeräte und Tastaturen sowie die Anpassung des Standardaussehens von UI-Widgets.

Grundlegende Benutzeroberflächen-Eigenschaften können verwendet werden, um die Benutzererfahrung und die Zugänglichkeit zu verbessern, indem visuelle Hinweise für Elemente bereitgestellt werden, mit denen interagiert wird. Dazu gehört das Styling von Mauszeigern und der Navigation des Tastaturfokus sowie das Styling von Caret-Cursorn, wenn ein bearbeitbares Element den Fokus hat. Das Modul umfasst Funktionen zum Bereitstellen von Umrissen für fokussierte (oder nicht fokussierte) Elemente, ohne die Dimensionen und das Styling des [Box-Modells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#what_is_the_css_box_model) eines Elements zu beeinflussen. Dieses UI-Modul ermöglicht auch das Styling von Benutzeroberflächensteuerungen.

## Grundlegende Benutzeroberfläche in Aktion

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

Die CSS-Eigenschaften {{CSSxRef("outline")}} und {{CSSxRef("outline-offset")}} wurden verwendet, um den Nutzern Rückmeldung darüber zu geben, welches Element derzeit den Fokus hat. Eine {{CSSxRef("accent-color")}} bietet eine Themenfarbe für alle Formularsteuerelemente. Der Caret, der beim Bearbeiten des Textes erscheint, hat dank der {{CSSxRef("caret-color")}}-Eigenschaft die gleiche Farbe. Diese können allesamt als Verbesserungen der Benutzeroberfläche betrachtet werden.

Einige Funktionen beeinträchtigen die Benutzerfreundlichkeit. Die {{CSSxRef("cursor")}}-Eigenschaft wurde verwendet, um die Cursor vom Browser-Standard zu ändern, was verwirrend ist. Die {{CSSxRef("resize")}}-Eigenschaft verhindert, dass der zweite {{HTMLElement("textarea")}} vergrößert werden kann, während die {{CSSxRef("pointer-events")}}-Eigenschaft verhindert, dass das dritte `<textarea>` Klickereignisse empfängt. Es ist jedoch weiterhin mit der Tastatur fokussierbar.

Klicken Sie auf "Play" im obigen Beispiel, um den Code für die Animation im MDN Playground zu sehen oder zu bearbeiten.

## Referenz

### Eigenschaften

- {{CSSxRef("accent-color")}}
- {{CSSxRef("appearance")}}
- {{CSSxRef("caret-animation")}}
- {{CSSxRef("caret-color")}}
- {{CSSxRef("caret-shape")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("interest-delay")}}, Kurzform für:
  - {{CSSxRef("interest-delay-start")}}
  - {{CSSxRef("interest-delay-end")}}
- {{CSSxRef("outline")}}, Kurzform für:
  - {{CSSxRef("outline-color")}}
  - {{CSSxRef("outline-style")}}
  - {{CSSxRef("outline-width")}}
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("user-select")}}

Das CSS Benutzeroberfläche Grundlagen-Modul definiert auch die Eigenschaften {{CSSxRef("caret")}}, `nav-down`, `nav-left`, `nav-right` und `nav-up`. Derzeit unterstützen keine Browser diese Funktionen.

## Leitfäden

- [Lernen Sie Formulare: Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Erklärt, wie {{CSSxRef("appearance")}} verwendet werden kann, um Formularsteuerelemente zu stylen.

## Verwandte Konzepte

- CSS {{cssxref("cursor")}}-Eigenschaft
- SVG [`cursor`](/de/docs/Web/SVG/Reference/Attribute/cursor)-Attribut
- CSS {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}} und {{CSSxRef(":focus-visible")}} Pseudoklassen
- [`CaretPosition`](/de/docs/Web/API/CaretPosition) Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Tipps für das Gestalten nützlicher und benutzbarer Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
