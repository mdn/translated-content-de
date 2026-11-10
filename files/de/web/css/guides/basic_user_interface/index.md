---
title: Grundlegende CSS-Benutzeroberfläche
short-title: Grundlegende Benutzeroberfläche
slug: Web/CSS/Guides/Basic_user_interface
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das Modul **CSS basic user interface** ermöglicht es Ihnen, die Darstellung und Funktionalität von Benutzeroberflächenfunktionen festzulegen. Dazu gehören outline-Eigenschaften, visuelles Feedback für Zeigegeräte und Tastaturen sowie Änderungen am Standarderscheinungsbild von UI-Widgets.

Mit den Eigenschaften dieses Moduls können Sie die Benutzerfreundlichkeit und Barrierefreiheit verbessern, indem Sie visuelle Hinweise für Elemente bereitstellen, mit denen interagiert wird. Dazu zählen die Gestaltung von Mauszeigern, der Fokusnavigation per Tastatur und der Eingabemarke, wenn ein editierbares Element den Fokus hat. Das Modul ermöglicht es außerdem, fokussierte oder nicht fokussierte Elemente mit einer outline zu versehen, ohne die Abmessungen und die Gestaltung ihres [Box-Modells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#what_is_the_css_box_model) zu beeinflussen. Auch Steuerelemente der Benutzeroberfläche lassen sich damit gestalten.

## Grundlegende Benutzeroberfläche in Aktion

Interagieren Sie mit den Elementen in diesem Beispiel, um zu sehen, wie die Eigenschaften des Moduls das Erscheinungsbild von Benutzeroberflächenfunktionen verändern können. Beachten Sie, dass einige Funktionen in diesem Beispiel die Benutzerfreundlichkeit verbessern, während andere sie beeinträchtigen.

```html hidden live-sample___basicui
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

```css hidden live-sample___basicui
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

Die CSS-Eigenschaften {{CSSxRef("outline")}} und {{CSSxRef("outline-offset")}} geben Nutzenden eine visuelle Rückmeldung darüber, welches Element gerade den Fokus hat. {{CSSxRef("accent-color")}} legt eine Akzentfarbe für alle Formularsteuerelemente fest. Dank {{CSSxRef("caret-color")}} hat die beim Bearbeiten von Text sichtbare Eingabemarke dieselbe Farbe. All dies kann die Benutzeroberfläche verbessern.

Einige Funktionen beeinträchtigen jedoch die Benutzerfreundlichkeit. Mit {{CSSxRef("cursor")}} wurden die vom Browser vorgegebenen Mauszeiger geändert, was verwirrend ist. {{CSSxRef("resize")}} verhindert, dass sich die Größe des zweiten {{HTMLElement("textarea")}}-Elements ändern lässt. {{CSSxRef("pointer-events")}} verhindert, dass das dritte `<textarea>`-Element Klickereignisse empfängt. Über die Tastatur kann es dennoch fokussiert werden.

Klicken Sie im obigen Beispiel auf „Play“, um den Code für die Animation im MDN Playground anzusehen oder zu bearbeiten.

## Referenz

### Eigenschaften

- {{CSSxRef("accent-color")}}
- {{CSSxRef("appearance")}}
- {{CSSxRef("caret-animation")}}
- {{CSSxRef("caret-color")}}
- {{CSSxRef("caret-shape")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("interest-delay")}}, Kurzschreibweise für:
  - {{CSSxRef("interest-delay-start")}}
  - {{CSSxRef("interest-delay-end")}}
- {{CSSxRef("outline")}}, Kurzschreibweise für:
  - {{CSSxRef("outline-color")}}
  - {{CSSxRef("outline-style")}}
  - {{CSSxRef("outline-width")}}
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("user-select")}}

Das Modul CSS basic user interface definiert außerdem die Eigenschaften {{CSSxRef("caret")}}, `nav-down`, `nav-left`, `nav-right` und `nav-up`. Derzeit unterstützt kein Browser diese Funktionen.

## Leitfäden

- [Formulare kennenlernen: Fortgeschrittene Gestaltung von Formularen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Erläutert, wie {{CSSxRef("appearance")}} zur Gestaltung von Formularsteuerelementen verwendet werden kann.

## Verwandte Konzepte

- CSS-Eigenschaft {{cssxref("cursor")}}
- SVG-Attribut [`cursor`](/de/docs/Web/SVG/Reference/Attribute/cursor)
- CSS-Pseudoklassen {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}} und {{CSSxRef(":focus-visible")}}
- [`CaretPosition`](/de/docs/Web/API/CaretPosition)-Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Tipps zur Gestaltung nützlicher und benutzerfreundlicher Fokusindikatoren](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
