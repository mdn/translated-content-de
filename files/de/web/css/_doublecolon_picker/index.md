---
title: ::picker()
slug: Web/CSS/::picker
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{CSSRef}}

Der **`::picker()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) zielt auf den Auswahlteil eines Elements ab, beispielsweise den Dropdown-Auswahlbereich eines [anpassbaren Auswahlelements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).

## Syntax

```css-nolint
::picker(<ident>) {
  /* ... */
}
```

### Parameter

- {{cssxref("ident")}}
  - : Ein String, der das Element repräsentiert, dessen Auswahl Sie anvisieren möchten. Die folgenden Werte sind verfügbar:
    - `select`
      - : Der Dropdown-Auswahlbereich von anpassbaren Auswahlelementen.

## Beschreibung

Das `::picker()` Pseudoelement zielt auf den Auswahlteil eines Formularelements ab, das heißt, der Popup-Teil, der erscheint, um Ihnen eine Auswahl zu ermöglichen, wenn Sie die Steuertaste drücken. Es kann nur dann anvisiert werden, wenn das ursprungsgebende Element über einen Auswahlbereich verfügt und sein grundlegendes Erscheinungsbild über den `base-select` Wert der {{cssxref("appearance")}} Eigenschaft festgelegt ist.

Der `::picker(select)` Selektor zielt auf alle Nachkommen des anpassbaren `<select>` Elements ab, außer auf das erste `<button>`-Kind; diese Nachkommen werden vom Browser zusammengefasst und als Auswahlbereich gerendert. Das erste `<button>`-Kind stellt die Steuertaste dar, die den Auswahlbereich beim Drücken öffnet.

Dies ermöglicht es Ihnen, alle Inhalte des Auswahlbereichs als eine einzige Entität zu behandeln, zum Beispiel, wenn Sie seine Umrandung anpassen, es animieren lassen, wenn es erscheint und verschwindet, oder es an einer anderen Stelle als der Standardposition positionieren. Unser [anpassbare Auswahlelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) Leitfaden zeigt viele Beispiele für die Verwendung von `::picker(select)`.

### Verhalten des Auswahl-Popovers

Das `<select>` Element und der Auswahlbereich haben automatisch eine implizite Aufrufer-/Popover-Beziehung, wie sie von der [Popover API](/de/docs/Web/API/Popover_API) festgelegt ist, zugewiesen. Siehe [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using) für weitere Details über das Verhalten des Popovers und [Den Auswahl-Dropdown mit Popover-Zuständen animieren](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#animating_the_picker_using_popover_states) für einen typischen Anwendungsfall, der durch die implizite Popover-Assoziation ermöglicht wird.

### Verankerungspositionierung des Auswahlbereichs

Ein weiterer Nebeneffekt der oben genannten impliziten Aufrufer-/Popover-Beziehung ist, dass das `<select>` Element und der Auswahlbereich auch eine implizite Ankerreferenz haben, was bedeutet, dass der Auswahlbereich automatisch durch [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) mit dem Select verbunden ist. Dies hat mehrere Vorteile, insbesondere:

- Die Standardstile des Browsers positionieren den Auswahlbereich relativ zur Schaltfläche (dem Anker) und Sie können diese Position anpassen, wie in [Elemente relativ zu ihrem Anker positionieren](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Zur Referenz sind die zugehörigen Standardstile wie folgt:

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

- Die Standardstile des Browsers definieren auch einige Fallbacks für Positionsversuche, die den Auswahlbereich neu positionieren, wenn er Gefahr läuft, den Ansichtbereich zu überlaufen. Fallbacks für Positionsversuche werden in [Überlauf behandeln: Fallback-Optionen und bedingtes verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) erklärt. Zur Referenz sind die zugehörigen Standard-Fallback-Stile wie folgt:

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

### Grundlegende Verwendung des anpassbaren Auswahlelements

Um die Funktionalität des anpassbaren Auswahlelements und minimale browserbasierte Stile zu aktivieren (und das vom Betriebssystem bereitgestellte Styling zu entfernen), müssen sowohl das `<select>` Element als auch dessen Auswahlbereich einen {{cssxref("appearance")}} Wert von `base-select` gesetzt haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Sie könnten dann zum Beispiel die standardmäßig schwarze {{cssxref("border")}} des Auswahlbereichs entfernen:

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
- [Anpassbare Auswahlelemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
