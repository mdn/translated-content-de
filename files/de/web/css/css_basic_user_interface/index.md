---
title: CSS-Grundlagen Benutzeroberfläche
slug: Web/CSS/CSS_basic_user_interface
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Grundlagenmodul der Benutzeroberfläche** ermöglicht es Ihnen, die Darstellung und Funktionalität von Funktionen im Zusammenhang mit der Benutzeroberfläche zu definieren, einschließlich Umriss-Eigenschaften, visuelle Rückmeldungen bei Zeigegeräten und Tastaturen sowie die Veränderung des Standarderscheinungsbilds von UI-Widgets.

Grundlegende Benutzeroberflächeneigenschaften können verwendet werden, um die Benutzerfreundlichkeit und Barrierefreiheit zu verbessern, indem visuelle Hinweise zu den Elementen bereitgestellt werden, mit denen interagiert wird, einschließlich der Gestaltung von Mauszeigern, der Navigation des Tastaturfokus und der Gestaltung der Caret-Zeiger, wenn ein bearbeitbares Element den Fokus hat. Das Modul ermöglicht es, Umrisse für fokussierte (oder nicht fokussierte) Elemente bereitzustellen, ohne die Abmessungen und das Styling des [Boxmodells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#what_is_the_css_box_model) eines Elements zu beeinträchtigen. Dieses UI-Modul ermöglicht auch das Styling von Benutzeroberflächensteuerungen.

### Grundlegende Benutzeroberfläche in Aktion

Um zu sehen, wie grundlegende Benutzeroberflächeneigenschaften das Erscheinungsbild von UI-Funktionen verändern können, interagieren Sie mit den Elementen in diesem Beispiel. Beachten Sie, dass einige Funktionen in diesem Beispiel die Benutzerfreundlichkeit verbessern, während andere das Benutzererlebnis beeinträchtigen.

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

Die CSS-Eigenschaften {{CSSxRef("outline")}} und {{CSSxRef("outline-offset")}} wurden verwendet, um den Benutzern Rückmeldung zu geben, welches Element aktuell den Fokus hat. Eine {{CSSxRef("accent-color")}} bietet eine Themenfarbe für alle Formularelemente. Der Caret, der erscheint, wenn der Text bearbeitet wird, hat dank der Eigenschaft {{CSSxRef("caret-color")}} die gleiche Farbe. Diese können alle als UI-Verbesserungen betrachtet werden.

Einige Funktionen beeinträchtigen die Benutzerfreundlichkeit. Die Eigenschaft {{CSSxRef("cursor")}} wurde verwendet, um Cursor vom Browser-Standard zu ändern, was verwirrend ist. Die Eigenschaft {{CSSxRef("resize")}} verhindert, dass das zweite {{HTMLElement("textarea")}} in der Größe verändert werden kann, während die Eigenschaft {{CSSxRef("pointer-events")}} verhindert, dass das dritte `<textarea>` Klickereignisse empfängt. Es kann jedoch weiterhin über die Tastatur fokussiert werden.

Klicken Sie im obigen Beispiel auf "Play", um den Code für die Animation im MDN Playground zu sehen oder zu bearbeiten.

## Referenz

### Eigenschaften

- {{CSSxRef("accent-color")}}
- {{CSSxRef("appearance")}}
- {{CSSxRef("caret-color")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("outline")}}, Kurzschreibweise für:
  - {{CSSxRef("outline-color")}}
  - {{CSSxRef("outline-style")}}
  - {{CSSxRef("outline-width")}}
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("user-select")}}

> [!NOTE]
> Die Spezifikation definiert auch die Eigenschaften: `caret`, `caret-shape`, `nav-down`, `nav-left`, `nav-right` und `nav-up`. Diese Eigenschaften wurden bisher in keinem Browser implementiert.

## Leitfäden

- [Lernen Sie Formulare: Fortgeschrittenes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Erklärt, wie {{CSSxRef("appearance")}} verwendet werden kann, um Formularelemente zu stylen.

## Verwandte Konzepte

- CSS [`cursor`](/de/docs/Web/CSS/cursor) Eigenschaft
- SVG [`cursor`](/de/docs/Web/SVG/Reference/Attribute/cursor) Attribut
- CSS {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}}, und {{CSSxRef(":focus-visible")}} Pseudoklassen
- [`CaretPosition`](/de/docs/Web/API/CaretPosition) Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Tipps für das Design nützlicher und benutzbarer Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
