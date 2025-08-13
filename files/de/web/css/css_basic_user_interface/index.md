---
title: CSS Grundlegende Benutzeroberfläche
slug: Web/CSS/CSS_basic_user_interface
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Das Modul **CSS grundlegende Benutzeroberfläche** ermöglicht es Ihnen, das Rendern und die Funktionalität von Funktionen zu definieren, die mit der Benutzeroberfläche zusammenhängen, einschließlich Umriss-Eigenschaften, visuelles Feedback für Zeigegeräte und Tastatur sowie die Änderung des standardmäßigen Aussehens von UI-Widgets.

Grundlegende Benutzeroberflächeneigenschaften können verwendet werden, um die Benutzererfahrung und Barrierefreiheit zu verbessern, indem sie visuelle Hinweise auf Elemente bereitstellen, mit denen interagiert wird, einschließlich der Gestaltung von Mauszeigern und der fokussierten Navigation per Tastatur sowie der Gestaltung von Eingabepositionen, wenn ein bearbeitbares Element den Fokus hat. Das Modul ermöglicht es, Umrisse für fokussierte (oder nicht fokussierte) Elemente bereitzustellen, ohne die Dimensionen und das Styling eines Elements gemäß dem [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#what_is_the_css_box_model) zu beeinflussen. Dieses UI-Modul ermöglicht auch das Styling von Benutzeroberflächen-Steuerelementen.

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

Die CSS-{{CSSxRef("outline")}}- und {{CSSxRef("outline-offset")}}-Eigenschaften wurden verwendet, um den Benutzern Feedback darüber zu geben, welches Element aktuell den Fokus hat. Eine {{CSSxRef("accent-color")}} stellt eine Themenfarbe für alle Formularelemente bereit. Der Cursor, der beim Bearbeiten von Text erscheint, hat dank der {{CSSxRef("caret-color")}}-Eigenschaft dieselbe Farbe. Diese können alle als UI-Verbesserungen betrachtet werden.

Einige Funktionen beeinträchtigen die Benutzerfreundlichkeit. Die {{CSSxRef("cursor")}}-Eigenschaft wurde verwendet, um die Zeiger von der Standardeinstellung des Browsers zu ändern, was verwirrend ist. Die {{CSSxRef("resize")}}-Eigenschaft verhindert, dass die zweite {{HTMLElement("textarea")}} vergrößert werden kann, während die {{CSSxRef("pointer-events")}}-Eigenschaft verhindert, dass die dritte `<textarea>` Klickereignisse empfängt. Sie ist jedoch weiterhin mit der Tastatur fokussierbar.

Klicken Sie im obigen Beispiel auf "Play", um den Code für die Animation im MDN Playground zu sehen oder zu bearbeiten.

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

Das CSS-Modul grundlegende Benutzeroberfläche definiert auch die Eigenschaften `caret`, `caret-animation`, `caret-shape`, `nav-down`, `nav-left`, `nav-right` und `nav-up`. Derzeit unterstützen keine Browser diese Funktionen.

## Leitfäden

- [Formulare lernen: Erweiterte Formulargestaltung](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Erklärt, wie {{CSSxRef("appearance")}} verwendet werden kann, um Formularsteuerelemente zu gestalten.

## Verwandte Konzepte

- CSS-[`cursor`](/de/docs/Web/CSS/cursor)-Eigenschaft
- SVG-[`cursor`](/de/docs/Web/SVG/Reference/Attribute/cursor)-Attribut
- CSS-{{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}} und {{CSSxRef(":focus-visible")}} Pseudoklassen
- [`CaretPosition`](/de/docs/Web/API/CaretPosition)-Interface

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Tipps zum Entwerfen von nützlichen und benutzbaren Fokus-Indikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
