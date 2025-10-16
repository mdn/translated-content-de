---
title: ::picker()
slug: Web/CSS/::picker
l10n:
  sourceCommit: 827fdf3b0a52b14af5962cb2c9d3b59e213c2a57
---

{{SeeCompatTable}}

Das **`::picker()`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) zielt auf den Auswahlsystemteil eines Elements ab, zum Beispiel den Dropdown-Auswahlteil eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).

## Syntax

```css-nolint
::picker(<ident>) {
  /* ... */
}
```

### Parameter

- {{cssxref("ident")}}
  - : Ein String, der das Element repräsentiert, dessen Auswahlsystem Sie anvisieren möchten. Die folgenden Werte sind verfügbar:
    - `select`
      - : Der Dropdown-Auswahlsystemteil anpassbarer Auswahl-Elemente.

## Beschreibung

Das `::picker()` Pseudo-Element zielt auf den Auswahlsystemteil eines Formularelements ab, also den Popup-Teil, der erscheint, um eine Auswahl zu treffen, wenn Sie die Steuerungstaste drücken. Es kann nur anvisiert werden, wenn das ursprungsgebende Element ein Auswahlsystem hat und das Grundaussehen über die {{cssxref("appearance")}}-Eigenschaft auf den Wert `base-select` gesetzt ist.

Der `::picker(select)` Selektor zielt auf alle Nachfahren des anpassbaren `<select>` Elements ab, außer auf das erste `<button>` Kind; diese Nachfahren werden vom Browser zusammengefasst und als das Auswahlsystem dargestellt. Das erste `<button>` Kind repräsentiert die Steuerungstaste, die das Auswahlsystem öffnet, wenn sie gedrückt wird.

Dies ermöglicht es Ihnen, alle Inhalte des Auswahlsystems als eine einzelne Einheit zu gestalten, zum Beispiel wenn Sie dessen Rand anpassen, es beim Erscheinen und Verschwinden animieren oder es an anderer Stelle als der Standardposition positionieren möchten. Unser [Leitfaden für anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) zeigt viele Beispiele für die Verwendung von `::picker(select)`.

### Picker-Popup-Verhalten

Das `<select>` Element und das Auswahlsystem haben automatisch eine implizite Aufrufer-/Popup-Beziehung zugewiesen, wie sie durch die [Popover-API](/de/docs/Web/API/Popover_API) festgelegt ist. Siehe [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) für mehr Details zum Popup-Verhalten, und siehe [Animation des Dropdown-Auswahlsystems mit Popup-Zuständen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#animating_the_picker_using_popover_states) für einen typischen Anwendungsfall, der durch die implizite Popup-Assoziation ermöglicht wird.

### Picker-Anker-Positionierung

Ein weiterer Nebeneffekt der oben genannten impliziten Aufrufer-/Popup-Beziehung ist, dass das `<select>` Element und das Auswahlsystem auch eine implizite Ankerreferenz haben, was bedeutet, dass das Auswahlsystem automatisch mit dem `select` über [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) verknüpft ist. Dies hat mehrere Vorteile, insbesondere:

- Die Standardeinstellungen des Browsers positionieren das Auswahlsystem relativ zur Schaltfläche (dem Anker) und Sie können diese Position anpassen, wie in [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erläutert. Zur Referenz sind die zugehörigen Standardstile wie folgt:

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

- Die Standardeinstellungen des Browsers definieren auch einige Positionsfehlversuche, die das Auswahlsystem neu positionieren, wenn die Gefahr besteht, dass es den Ansichtsbereich überläuft. Positionsfehlversuche sind im [Leitfaden über Fallback-Optionen und bedingtes Verstecken bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) erklärt. Zur Referenz sind die zugehörigen Standardfallback-Stile wie folgt:

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
> Wenn Sie die implizite Ankerreferenz entfernen möchten, um zu verhindern, dass das Auswahlsystem an das `<select>` Element angeheftet wird, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Auswahlsystems auf einen Ankernamen setzen, der im aktuellen Dokument nicht existiert, wie `--not-an-anchor-name`. Siehe auch [Entfernung einer Ankerassoziation](/de/docs/Web/CSS/CSS_anchor_positioning/Using#removing_an_anchor_association).

## Beispiele

### Grundlegende Verwendung von kundenspezifischen Auswahlmöglichkeiten

Um die Funktionalität für kundenspezifische Auswahlmöglichkeiten und minimale grundlegende Browserstile zu aktivieren und das vom Betriebssystem bereitgestellte Styling zu entfernen, müssen das `<select>` Element und sein Auswahlsystem beide den {{cssxref("appearance")}} Wert `base-select` gesetzt haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Sie könnten dann zum Beispiel den standardmäßigen schwarzen {{cssxref("border")}} des Auswahlsystems entfernen:

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
