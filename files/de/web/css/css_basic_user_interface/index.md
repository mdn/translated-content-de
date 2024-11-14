---
title: Grundlegende CSS-Benutzeroberfläche
slug: Web/CSS/CSS_basic_user_interface
l10n:
  sourceCommit: 5755d6dfbac15abc29ddcd924cee110c4139b073
---

{{CSSRef}}

Das **CSS-Modul der grundlegenden Benutzeroberfläche** ermöglicht es Ihnen, die Darstellung und Funktionalität von Merkmalen zu definieren, die mit der Benutzeroberfläche zusammenhängen, einschließlich Umriss-Eigenschaften, visuelle Rückmeldungen für Zeigegerät und Tastatur sowie das Ändern des Standard-Erscheinungsbilds von UI-Widgets.

Eigenschaften der grundlegenden Benutzeroberfläche können verwendet werden, um die Benutzererfahrung und Zugänglichkeit zu verbessern, indem sie visuelle Hinweise für Elemente bereitstellen, mit denen interagiert wird, einschließlich Styling von Mauscursorn und Tastatur-Fokusnavigation sowie Styling des Caret-Cursors, wenn ein bearbeitbares Element den Fokus hat. Das Modul ermöglicht es, Umrisse für fokussierte (oder nicht fokussierte) Elemente bereitzustellen, ohne die Abmessungen und das Styling eines Elements im [Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model#what_is_the_css_box_model) zu beeinflussen. Dieses UI-Modul ermöglicht auch das Styling von Benutzeroberflächen-Steuerelementen.

### Grundlegende Benutzeroberfläche in Aktion

Um zu sehen, wie die Eigenschaften der grundlegenden Benutzeroberfläche das Erscheinungsbild von UI-Funktionen verändern können, interagieren Sie mit den Elementen in diesem Beispiel. Beachten Sie, dass einige Funktionen in diesem Beispiel die Benutzerfreundlichkeit verbessern, während andere die Benutzererfahrung beeinträchtigen.

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

Die CSS-Eigenschaften {{CSSxRef("outline")}} und {{CSSxRef("outline-offset")}} wurden verwendet, um den Nutzern Rückmeldungen darüber zu geben, welches Element derzeit den Fokus hat. Ein {{CSSxRef("accent-color")}} bietet eine Themenfarbe für alle Formularelemente. Der Caret, der beim Bearbeiten von Text erscheint, hat dank der Eigenschaft {{CSSxRef("caret-color")}} die gleiche Farbe. Diese können alle als Verbesserungen der Benutzeroberfläche angesehen werden.

Einige Funktionen beeinträchtigen die Benutzerfreundlichkeit. Die Eigenschaft {{CSSxRef("cursor")}} wurde verwendet, um Cursorn von den Standard-Browser-Einstellungen zu ändern, was verwirrend ist. Die Eigenschaft {{CSSxRef("resize")}} verhindert, dass die zweite {{HTMLElement("textarea")}} resize-bar ist, während die Eigenschaft {{CSSxRef("pointer-events")}} verhindert, dass die dritte `<textarea>` Klickereignisse empfängt. Sie ist jedoch weiterhin per Tastatur fokussierbar.

Klicken Sie auf "Play" im obigen Beispiel, um den Code für die Animation im MDN Playground anzusehen oder zu bearbeiten.

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

- [Lernen Sie Formulare: Fortgeschrittenes Formularstyling](/de/docs/Learn/Forms/Advanced_form_styling)
  - : Erklärt, wie {{CSSxRef("appearance")}} verwendet werden kann, um Formularelemente zu stylen.

## Verwandte Konzepte

- CSS-Eigenschaft [`cursor`](/de/docs/Web/CSS/cursor)
- SVG-Attribut [`cursor`](/de/docs/Web/SVG/Attribute/cursor)
- CSS-Pseudoklassen {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}} und {{CSSxRef(":focus-visible")}}
- [`CaretPosition`](/de/docs/Web/API/CaretPosition)-Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Tipps zur Gestaltung nützlicher und benutzbarer Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
