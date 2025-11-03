---
title: ::picker()
slug: Web/CSS/Reference/Selectors/::picker
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{SeeCompatTable}}

Das **`::picker()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) zielt auf den Auswahlbereich eines Elements ab, zum Beispiel den Dropdown-Auswahlbereich eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).

## Syntax

```css-nolint
::picker(<ident>) {
  /* ... */
}
```

### Parameter

- {{cssxref("ident")}}
  - : Ein String, der das Element darstellt, dessen Auswahlbereich Sie anvisieren möchten. Die folgenden Werte sind verfügbar:
    - `select`
      - : Der Dropdown-Auswahlbereich von anpassbaren Auswahl-Elementen.

## Beschreibung

Das `::picker()` Pseudoelement zielt auf den Auswahlbereich eines Formularelements ab, das heißt, auf den Popup-Bereich, der erscheint, um eine Auswahl zu ermöglichen, wenn Sie die Steuerungstaste drücken. Es kann nur dann anvisiert werden, wenn das auslösende Element einen Auswahlbereich hat und das grundlegende Erscheinungsbild über den {{cssxref("appearance")}} Eigenschaftswert `base-select` auf ihm gesetzt wurde.

Der `::picker(select)` Selektor zielt auf alle Nachkommen eines anpassbaren `<select>` Elements ab, mit Ausnahme des ersten `<button>` Kind-Elements; diese Nachkommen werden vom Browser zusammengefasst und als Auswahlbereich dargestellt. Das erste `<button>` Kind-Element repräsentiert die Steuertaste, die den Auswahlbereich öffnet, wenn sie gedrückt wird.

Dies erlaubt es Ihnen, den gesamten Inhalt des Auswahlbereichs als einheitliches Element zu targetieren, beispielsweise wenn Sie dessen Rahmen anpassen, ihn animieren oder beim Erscheinen und Verschwinden anders positionieren möchten als in der Standardposition. Unser [Leitfaden zu anpassbaren Auswahl-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) zeigt viele Beispiele für die Verwendung von `::picker(select)`.

### Verhalten des Auswahl-Popovers

Das `<select>` Element und der Auswahlbereich haben eine implizite Aufrufer/Popover-Beziehung, die ihnen automatisch zugewiesen wird, wie durch die [Popover API](/de/docs/Web/API/Popover_API) spezifiziert. Sehen Sie sich [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using) für weitere Details zum Popover-Verhalten an und betrachten Sie das Beispiel [Animierung des Dropdowns des Auswahlbereichs unter Verwendung von Popover-Zuständen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#animating_the_picker_using_popover_states) für einen typischen Anwendungsfall, der durch die implizite Popover-Verknüpfung ermöglicht wird.

### Verankerung der Auswahlposition

Ein weiterer Nebeneffekt der oben erwähnten impliziten Aufrufer/Popover-Beziehung ist, dass das `<select>` Element und der Auswahlbereich auch eine implizite Ankerreferenz haben, was bedeutet, dass der Auswahlbereich automatisch über [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) mit dem Auswahl-Element verknüpft ist. Dies hat mehrere Vorteile, insbesondere:

- Die Standardstile des Browsers positionieren den Auswahlbereich relativ zur Taste (dem Anker) und Sie können diese Position anpassen, wie in [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Zu Referenzzwecken sind die damit zusammenhängenden Standardstile wie folgt:

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

- Die Standardstile des Browsers definieren auch einige Fallback-Positionierungsversuche, die den Auswahlbereich neu positionieren, wenn er Gefahr läuft, über den Ansichtsbereich hinaus zu ragen. Die Fallback-Positionierungsversuche werden im [Leitfaden zu Fallback-Optionen und bedingtem Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) erklärt. Zu Referenzzwecken sind die damit zusammenhängenden Standard-Fallback-Stile wie folgt:

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

> [!NOTE]
> Wenn Sie die implizite Ankerreferenz entfernen möchten, um zu verhindern, dass der Auswahlbereich an das `<select>` Element verankert wird, können Sie dies erreichen, indem Sie die `position-anchor` Eigenschaft des Auswahlbereichs auf einen Ankernamen setzen, der im aktuellen Dokument nicht existiert, wie `--not-an-anchor-name`. Siehe auch [Entfernen einer Ankerzuordnung](/de/docs/Web/CSS/CSS_anchor_positioning/Using#removing_an_anchor_association).

## Beispiele

### Grundlegende Verwendung eines benutzerdefinierten Auswahl-Elements

Um die Funktionalität des benutzerdefinierten Auswahl-Elements und die minimalen Browser-Grundstile zu aktivieren (und die vom Betriebssystem bereitgestellten Stile zu entfernen), müssen sowohl das `<select>` Element als auch sein Auswahlbereich einen {{cssxref("appearance")}} Wert von `base-select` gesetzt haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Sie könnten dann beispielsweise die standardmäßige schwarze {{cssxref("border")}} des Auswahlbereichs entfernen:

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
