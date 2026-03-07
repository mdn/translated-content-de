---
title: ::picker()
slug: Web/CSS/Reference/Selectors/::picker
l10n:
  sourceCommit: 9af64ef430ad722b9cc3f75ccabeb8989c23b988
---

Das **`::picker()`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) zielt auf den Auswahlerteil eines Elements, beispielsweise den Dropdown-Auswahlbereich eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).

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
      - : Der Dropdown-Auswahlbereich anpassbarer Auswahl-Elemente.

## Beschreibung

Das `::picker()`-Pseudoelement zielt auf den Auswahlerteil eines Formularelements ab, also den Popup-Bereich, der erscheint, um Ihnen die Auswahl zu ermöglichen, wenn Sie die Steuerschaltfläche drücken. Es ist nur dann anvisierbar, wenn das auslösende Element einen Auswahlbereich hat und das Basisaussehen über den `appearance`-Eigenschaftswert `base-select` festgelegt ist.

Der `::picker(select)`-Selektor zielt auf alle Nachfahren eines anpassbaren `<select>`-Elements ab, außer auf das erste `<button>`-Kind; diese Nachfahren werden vom Browser zusammengefasst und als Auswahlbereich gerendert. Das erste `<button>`-Kind stellt die Steuerschaltfläche dar, die den Auswahlbereich öffnet, wenn sie gedrückt wird.

Dies erlaubt es Ihnen, den gesamten Inhalt des Auswahlbereichs als eine einzelne Einheit anzusteuern, zum Beispiel wenn Sie seine Grenze anpassen, ihn animieren, wenn er erscheint und verschwindet, oder ihn an einer anderen Stelle als der Standardposition positionieren möchten. Unser [Leitfaden zu anpassbaren Auswahl-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) zeigt viele Beispiele für die Nutzung von `::picker(select)`.

### Verhalten des Auswahlbereichs-Popovers

Das `<select>`-Element und der Auswahlbereich haben automatisch eine implizite Invoker/Popover-Beziehung gemäß der [Popover-API](/de/docs/Web/API/Popover_API). Siehe [Verwendung der Popover-API](/de/docs/Web/API/Popover_API/Using) für mehr Details zum Popover-Verhalten und [Animation des Auswahl-Dropdowns mit Popover-Zuständen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#animating_the_picker_using_popover_states) für einen typischen Anwendungsfall, der durch die implizite Popover-Zuordnung ermöglicht wird.

### Positionierung des Ankers des Auswahlbereichs

Ein weiterer Nebeneffekt der oben erwähnten impliziten Invoker/Popover-Beziehung ist, dass das `<select>`-Element und der Auswahlbereich auch eine implizite Anker-Referenz haben, was bedeutet, dass der Auswahlbereich automatisch über die [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) mit dem Select verbunden ist. Dies hat mehrere Vorteile, insbesondere:

- Die Standardstile des Browsers positionieren den Auswahlbereich relativ zur Schaltfläche (dem Anker), und Sie können diese Position anpassen, wie in [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Zur Referenz sind die entsprechenden Standardstile wie folgt:

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

- Die Standardstile des Browsers definieren auch einige Positionierungseinfall-Alternativen, die den Auswahlbereich neu positionieren, falls er Gefahr läuft, das Ansichtsfenster zu überlaufen. Positionierungseinfall-Alternativen sind im [Leitfaden zu Fallback-Optionen und bedingtem Verbergen für Überläufe](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) erklärt. Zur Referenz sind die entsprechenden Standard-Fallback-Stile wie folgt:

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
> Wenn Sie die implizite Anker-Referenz entfernen möchten, um zu verhindern, dass der Auswahlbereich an das `<select>`-Element verankert wird, können Sie dies tun, indem Sie die `position-anchor`-Eigenschaft des Auswahlbereichs auf einen Ankernamen setzen, der im aktuellen Dokument nicht existiert, wie z.B. `--not-an-anchor-name`. Siehe auch [Entfernung einer Anker-Zuordnung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#removing_an_anchor_association).

## Beispiele

### Grundlegende Verwendung eines benutzerdefinierten Selektors

Um die Funktionalität des benutzerdefinierten Selektors und die minimalen Standardstile des Browsers zu aktivieren (und das vom Betriebssystem bereitgestellte Styling zu entfernen), müssen das `<select>`-Element und dessen Auswahlbereich beide einen {{cssxref("appearance")}}-Wert von `base-select` gesetzt haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Sie könnten dann beispielsweise den standardmäßigen schwarzen {{cssxref("border")}} des Auswahlbereichs entfernen:

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
