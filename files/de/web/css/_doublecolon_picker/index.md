---
title: ::picker()
slug: Web/CSS/::picker
l10n:
  sourceCommit: 004b0ee7b8cfaf6793c1e36d589233199c616759
---

{{CSSRef}}{{SeeCompatTable}}

Das **`::picker()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) zielt auf den Picker-Teil eines Elements ab, zum Beispiel den Dropdown-Picker eines [anpassbaren Select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).

## Syntax

```css-nolint
::picker(<ident>) {
  /* ... */
}
```

### Parameter

- {{cssxref("ident")}}
  - : Ein Zeichenfolgenwert, der das Element repräsentiert, dessen Picker Sie anvisieren möchten. Die folgenden Werte sind verfügbar:
    - `select`
      - : Der Dropdown-Picker von anpassbaren Select-Elementen.

## Beschreibung

Das `::picker()` Pseudoelement zielt auf den Picker-Teil eines Formularelements ab, das heißt, den Popup-Teil, der erscheint, um Ihnen eine Auswahl zu ermöglichen, wenn Sie die Steuertaste drücken. Es kann nur verwendet werden, wenn das Ursprungs-Element einen Picker hat und die Grundeinstellung über die Eigenschaft {{cssxref("appearance")}} mit dem Wert `base-select` versehen ist.

Der `::picker(select)` Selektor zielt auf alle Nachkommen eines anpassbaren `<select>` Elements ab, außer dem ersten `<button>` Kind; diese Nachkommen werden vom Browser gruppiert und als Picker dargestellt. Das erste `<button>` Kind stellt die Steuerungstaste dar, die den Picker öffnet, wenn sie gedrückt wird.

Dies ermöglicht es Ihnen, den gesamten Picker-Inhalt als einzelne Einheit zu behandeln, beispielsweise wenn Sie seinen Rahmen anpassen, ihn animieren lassen, wenn er erscheint und verschwindet, oder ihn an einem anderen als dem Standardort positionieren wollen. Unser [Leitfaden zu anpassbaren Select-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) zeigt viele Beispiele für die Verwendung von `::picker(select)`.

### Picker-Popover-Verhalten

Das `<select>` Element und der Picker haben automatisch eine implizite Invoker/Popover-Beziehung zugewiesen, wie durch die [Popover API](/de/docs/Web/API/Popover_API) spezifiziert. Siehe [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) für weitere Details zum Popover-Verhalten und [Animation des Dropdown-Pickers anhand von Popover-Zuständen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#animating_the_picker_using_popover_states) für einen typischen Anwendungsfall, der durch die implizite Popover-Zuordnung erlaubt wird.

### Picker-Ankerpositionierung

Ein weiterer Nebeneffekt der oben erwähnten impliziten Invoker/Popover-Beziehung ist, dass das `<select>` Element und der Picker auch eine implizite Ankerreferenz haben, was bedeutet, dass der Picker automatisch über die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) mit dem Select-Element verknüpft ist. Dies hat mehrere Vorteile, insbesondere:

- Die Standardstile des Browsers positionieren den Picker relativ zur Taste (dem Anker) und Sie können diese Position anpassen, wie im Abschnitt [Elemente relativ zu ihrem Anker positionieren](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt wird. Zur Referenz sind die entsprechenden Standardstile wie folgt:

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

- Die Standardstile des Browsers definieren ebenfalls einige Position-Try-Backups, die den Picker neu positionieren, wenn er Gefahr läuft, den Viewport zu überschreiten. Position-Try-Backups werden im Abschnitt [Umgang mit Überlauf: Try-Backups und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) erklärt. Zur Referenz sind die entsprechenden standardmäßigen Backupstile wie folgt:

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

### Grundlegende Verwendung eines anpassbaren Selects

Um die Funktionalität eines anpassbaren Selects und die minimalen Standardstile des Browsers zu verwenden (und das vom Betriebssystem bereitgestellte Styling zu entfernen), müssen das `<select>` Element und sein Picker beide einen {{cssxref("appearance")}} Wert von `base-select` gesetzt haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Sie könnten dann beispielsweise den standardmäßigen schwarzen {{cssxref("border")}} des Pickers entfernen:

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
- [Anpassbare Select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
