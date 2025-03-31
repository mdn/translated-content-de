---
title: ::picker()
slug: Web/CSS/::picker
l10n:
  sourceCommit: 44f398527f2b0195a7c3b35db0a53c80aebe8e48
---

{{CSSRef}}{{SeeCompatTable}}

Das **`::picker()`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) zielt auf den Auswahlteil eines Elements ab, beispielsweise den Drop-down-Auswahler eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).

## Syntax

```css-nolint
::picker(<ident>) {
  /* ... */
}
```

### Parameter

- {{cssxref("ident")}}
  - : Ein String, der das Element repräsentiert, dessen Auswahler Sie anvisieren möchten. Die folgenden Werte sind verfügbar:
    - `select`
      - : Der Drop-down-Auswahler von anpassbaren Auswahl-Elementen.

## Beschreibung

Das `::picker()` Pseudo-Element zielt auf den Auswahlteil eines Formularelements ab, also den Popup-Teil, der erscheint und es Ihnen ermöglicht, eine Auswahl zu treffen, wenn Sie die Steuertaste drücken. Es kann nur dann angezielt werden, wenn das auslösende Element einen Auswahler hat und das grundlegende Aussehen über den {{cssxref("appearance")}} Eigenschaft `base-select` Wert darauf gesetzt ist.

Der `::picker(select)` Selektor zielt auf alle Nachfahren eines anpassbaren `<select>` Elements außer dem ersten `<button>` Kind ab; diese Nachfahren werden vom Browser zusammengefasst und als Auswahler gerendert. Das erste `<button>` Kind stellt die Steuertaste dar, die den Auswahler öffnet, wenn sie gedrückt wird.

Dies ermöglicht Ihnen, alle Inhalte des Auswählers als eine einzelne Einheit anzuzielen, beispielsweise, wenn Sie seine Umrandung anpassen, ihn animieren, wenn er erscheint und verschwindet, oder ihn an einer anderen Stelle als der Standardposition positionieren möchten. Unser [Leitfaden zu anpassbaren Auswahl-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) zeigt viele Beispiele für die Verwendung von `::picker(select)`.

### Verhalten des Picker-Popovers

Das `<select>` Element und der Auswahler haben eine implizite Invoker/Popover-Beziehung, die ihnen automatisch zugewiesen wird, wie es von der [Popover API](/de/docs/Web/API/Popover_API) spezifiziert wird. Weitere Details zum Popover-Verhalten finden Sie unter [Using the Popover API](/de/docs/Web/API/Popover_API/Using) und eine typische Anwendung, die durch die implizite Popover-Assoziation ermöglicht wird, finden Sie im Abschnitt [Animating the picker drop-down using popover states](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#animating_the_picker_using_popover_states).

### Positionierung des Picker-Ankers

Ein weiterer Nebeneffekt der oben erwähnten impliziten Invoker/Popover-Beziehung ist, dass das `<select>` Element und der Auswahler auch eine implizite Ankerreferenz haben, was bedeutet, dass der Auswahler automatisch über [CSS Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning) mit dem `select` verbunden ist. Dies hat mehrere Vorteile, insbesondere:

- Die standardmäßigen Browser-Stile positionieren den Auswahler relativ zur Taste (dem Anker) und Sie können diese Position anpassen, wie in [Positioning elements relative to their anchor](/de/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Zum Nachschlagen sind die zugehörigen Standardstile wie folgt:

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

- Die standardmäßigen Browser-Stile definieren auch einige Fallbacks für die Positionierung, die den Auswahler neu positionieren, falls er droht, den Viewport zu überlaufen. Fallbacks zur Positionsanpassung werden in [Handling overflow: try fallbacks and conditional hiding](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) erklärt. Zum Nachschlagen sind die zugehörigen Standard-Fallback-Stile wie folgt:

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

### Grundlegende Verwendung des benutzerdefinierten Auswahl-Elements

Um die Funktionalität des benutzerdefinierten Auswahl-Elements und minimale grundlegende Browser-Stile (und die Betriebssystem-bereitgestellte Stilgebung zu entfernen) zu aktivieren, müssen das `<select>` Element und sein Auswahler beide einen {{cssxref("appearance")}} Wert von `base-select` aufweisen:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Sie könnten dann beispielsweise die standardmäßige schwarze {{cssxref("border")}} des Auswählers entfernen:

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
