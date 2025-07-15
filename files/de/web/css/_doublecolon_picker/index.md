---
title: ::picker()
slug: Web/CSS/::picker
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Das **`::picker()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) zielt auf den Auswahldialog eines Elements ab, zum Beispiel den Dropdown-Auswahldialog eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).

## Syntax

```css-nolint
::picker(<ident>) {
  /* ... */
}
```

### Parameter

- {{cssxref("ident")}}
  - : Ein String, der das Element repräsentiert, dessen Auswahldialog Sie anvisieren möchten. Die folgenden Werte sind verfügbar:
    - `select`
      - : Der Dropdown-Auswahldialog von anpassbaren Auswahl-Elementen.

## Beschreibung

Das Pseudoelement `::picker()` zielt auf den Auswahldialog eines Formularsteuerelements, das heißt den Popup-Teil, der erscheint, um Ihnen eine Auswahl zu ermöglichen, wenn Sie den Steuerelement-Button drücken. Es kann nur dann angesteuert werden, wenn das ursprüngliche Element einen Auswahldialog besitzt und das grundlegende Erscheinungsbild über den `base-select`-Wert der {{cssxref("appearance")}}-Eigenschaft gesetzt ist.

Der `::picker(select)`-Selektor zielt auf alle Nachkommen des anpassbaren `<select>`-Elements ab, mit Ausnahme des ersten `<button>`-Kindes; diese Nachkommen werden vom Browser gruppiert und als Auswahldialog gerendert. Das erste `<button>`-Kind repräsentiert den Steuerelement-Button, der den Auswahldialog öffnet, wenn er gedrückt wird.

Dies ermöglicht es Ihnen, alle Inhalte des Auswahldialogs als eine Einheit anzusprechen, z.B. wenn Sie seinen Rahmen anpassen, ihn beim Erscheinen und Verschwinden animieren oder ihn an einer anderen Position als der Standardposition platzieren möchten. Unser [Leitfaden zu anpassbaren Auswahl-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) zeigt viele Beispiele für die Verwendung von `::picker(select)`.

### Verhalten des Auswahldialog-Popovers

Das `<select>`-Element und der Auswahldialog haben automatisch eine implizite Invoker/Popover-Beziehung zugewiesen, wie vom [Popover-API](/de/docs/Web/API/Popover_API) festgelegt. Siehe [Verwendung des Popover-APIs](/de/docs/Web/API/Popover_API/Using) für weitere Details zum Popover-Verhalten, und siehe [Animieren des Auswahldialog-Dropdowns mithilfe von Popover-Zuständen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#animating_the_picker_using_popover_states) für einen typischen Anwendungsfall, der durch die implizite Popover-Verknüpfung ermöglicht wird.

### Positionierung des Auswahldialog-Ankers

Ein weiterer Nebeneffekt der oben erwähnten impliziten Invoker/Popover-Beziehung ist, dass das `<select>`-Element und der Auswahldialog auch einen impliziten Ankerbezug haben, was bedeutet, dass der Auswahldialog automatisch über die [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) mit der Auswahl verknüpft ist. Dies hat mehrere Vorteile, vor allem:

- Die Standardstile des Browsers positionieren den Auswahldialog relativ zum Button (dem Anker) und Sie können diese Position anpassen, wie im Abschnitt [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Zur Referenz sind die zugehörigen Standardstile wie folgt:

  ```css
  inset: auto;
  margin: 0;
  min-inline-size: anchor-size(self-inline);
  min-block-size: 1lh;
  /* Go to the edge of the viewport, and add scrollbars if needed. */
  max-block-size: stretch;
  overflow: auto;
  /* Below and span-right, by default. */
  position-area: block-end span-inline-end;
  ```

- Die Standardstile des Browsers definieren auch einige Fallback-Positionen, die den Auswahldialog umpositionieren, wenn er Gefahr läuft, den Viewport zu überlaufen. Fallback-Positionen werden im [Leitfaden zu Fallback-Optionen und bedingtem Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) erklärt. Zur Referenz sind die zugehörigen Standard-Fallback-Stile wie folgt:

  ```css
  position-try-order: most-block-size;
  position-try-fallbacks:
    /* First try above and span-right, */
    /* then below but span-left, */
    /* then above and span-left. */
    block-start span-inline-end,
    block-end span-inline-start,
    block-start span-inline-start;
  ```

## Beispiele

### Grundlegende Verwendung eines benutzerdefinierten Auswahl-Elements

Um sich für die Funktionalität des benutzerdefinierten Auswahl-Elements und die minimalen Basisstile des Browsers zu entscheiden (und die vom Betriebssystem bereitgestellten Stile zu entfernen), müssen das `<select>`-Element und sein Auswahldialog beide einen {{cssxref("appearance")}}-Wert von `base-select` gesetzt haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Sie könnten dann zum Beispiel den Standard-schwarzen {{cssxref("border")}} des Auswahldialogs entfernen:

```css
::picker(select) {
  border: none;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}
- [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
