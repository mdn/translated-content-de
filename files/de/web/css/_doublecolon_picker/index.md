---
title: ::picker()
slug: Web/CSS/::picker
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}{{SeeCompatTable}}

Das **`::picker()`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) zielt auf den Auswahlbereich eines Elements ab, zum Beispiel den Auswahl-Dialog eines [anpassbaren Auswahlfelds](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).

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
      - : Der Auswahl-Dialog von anpassbaren Auswahlfeldern.

## Beschreibung

Das `::picker()` Pseudo-Element zielt auf den Auswahlbereich eines Formularelements ab, das heißt, den eingeblendeten Teil, der erscheint, um eine Auswahl zu ermöglichen, wenn Sie die Steuertaste drücken. Es ist nur anvisierbar, wenn das ursprüngliche Element einen Auswahlbereich hat und das Basisaussehen auf ihm mithilfe der {{cssxref("appearance")}} Eigenschaft mit dem Wert `base-select` gesetzt wurde.

Der `::picker(select)` Selektor zielt auf alle Nachkommen eines anpassbaren `<select>` Elements ab, außer auf das erste `<button>` Kind; diese Nachkommen werden vom Browser zusammengefasst und als Auswahlbereich dargestellt. Das erste `<button>` Kind repräsentiert die Steuertaste, die den Auswahlbereich öffnet, wenn sie gedrückt wird.

Dies ermöglicht es Ihnen, alle Inhalte des Auswahlbereichs als eine einzige Einheit anzusprechen, zum Beispiel, wenn Sie seinen Rahmen anpassen, ihn animieren möchten, wenn er erscheint und verschwindet, oder ihn an einer anderen Stelle als der Standardposition positionieren möchten. Unser [Leitfaden zu anpassbaren Auswahlfeldern](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) zeigt viele Beispiele für die Verwendung von `::picker(select)`.

### Verhalten des Auswahlbereich-Popovers

Das `<select>` Element und der Auswahlbereich haben eine implizite Anweisung-/Popover-Beziehung, die ihnen automatisch zugewiesen wird, wie sie von der [Popover API](/de/docs/Web/API/Popover_API) festgelegt wurde. Weitere Details zum Popover-Verhalten finden Sie unter [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using) und sehen Sie sich [Animation der Auswahl des Drop-Downs mittels Popover-Zustände](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#animating_the_picker_using_popover_states) für einen typischen Anwendungsfall an, der durch die implizite Popover-Verknüpfung ermöglicht wird.

### Positionierung der Auswahlbereichs-Anker

Eine weitere Nebenwirkung der oben genannten impliziten Anweisung-/Popover-Beziehung ist, dass das `<select>` Element und der Auswahlbereich auch eine implizite Anker-Referenz haben, was bedeutet, dass der Auswahlbereich automatisch mit dem Auswahlfeld über [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) assoziiert ist. Dies hat mehrere Vorteile, vor allem:

- Die Standardstile des Browsers positionieren den Auswahlbereich relativ zur Taste (dem Anker) und Sie können diese Position anpassen, wie in [Positionieren von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Zur Referenz sind die verbundenen Standardstile wie folgt:

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

- Die Standardstile des Browsers definieren auch einige Position-Try-Alternativen, die den Auswahlbereich neu positionieren, falls er droht, das Sichtfeld zu überlaufen. Position-Try-Alternativen werden im [Leitfaden zu Fallback-Optionen und bedingtem Verbergen für Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) erklärt. Zur Referenz sind die verbundenen Standard-Fallback-Stile wie folgt:

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

### Grundlegende Verwendung des benutzerdefinierten Auswahlfelds

Um die Funktionalität des benutzerdefinierten Auswahlfelds und die minimalen Basisstile des Browsers zu nutzen (und die vom Betriebssystem bereitgestellte Gestaltung zu entfernen), müssen sowohl das `<select>` Element als auch dessen Auswahlbereich einen {{cssxref("appearance")}} Wert von `base-select` haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Sie könnten dann zum Beispiel die standardmäßige schwarze {{cssxref("border")}} des Auswahlbereichs entfernen:

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
- [Anpassbare Auswahlfelder](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
