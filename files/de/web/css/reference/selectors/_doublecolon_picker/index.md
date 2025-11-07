---
title: ::picker()
slug: Web/CSS/Reference/Selectors/::picker
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Das **`::picker()`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) zielt auf den Auswahlteil eines Elements ab, zum Beispiel den Dropdown-Auswahlbereich eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).

## Syntax

```css-nolint
::picker(<ident>) {
  /* ... */
}
```

### Parameter

- {{cssxref("ident")}}
  - : Ein String, der das Element repräsentiert, dessen Auswahlbereich Sie anvisieren möchten. Die folgenden Werte sind verfügbar:
    - `select`
      - : Der Dropdown-Auswahlbereich von anpassbaren Auswahl-Elementen.

## Beschreibung

Das `::picker()` Pseudo-Element zielt auf den Auswahlteil eines Formularelements ab, also den Popup-Teil, der erscheint, um Ihnen eine Auswahl zu ermöglichen, wenn Sie die Steuertaste drücken. Er ist nur dann anvisierbar, wenn das Ursprungelement einen Auswahlbereich hat und das Grunderscheinungsbild über den `base-select` Wert der {{cssxref("appearance")}} Eigenschaft darauf eingestellt ist.

Der `::picker(select)` Selektor zielt auf alle Nachkommen eines anpassbaren `<select>` Elements ab, mit Ausnahme des ersten `<button>` Kindes; diese Nachkommen werden vom Browser gruppiert und als Auswahlbereich gerendert. Das erste `<button>` Kind repräsentiert die Steuertaste, die den Auswahlbereich öffnet, wenn sie gedrückt wird.

Dies ermöglicht es Ihnen, alle Inhalte des Auswahlbereichs als eine einzelne Einheit anzusprechen, zum Beispiel, wenn Sie seinen Rahmen anpassen, ihn animieren, wenn er erscheint und verschwindet, oder ihn an einer anderen Stelle als der Standardposition positionieren möchten. Unser [Leitfaden zu anpassbaren Auswahl-Elementen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) zeigt viele Beispiele zur Verwendung von `::picker(select)`.

### Verhalten des Auswahl-Popovers

Das `<select>` Element und der Auswahlbereich haben automatisch eine implizite Invoker/Popover-Beziehung, wie sie durch die [Popover API](/de/docs/Web/API/Popover_API) spezifiziert wird. Weitere Details zum Popover-Verhalten finden Sie unter [Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using), und für einen typischen Anwendungsfall, den die implizite Popover-Zuordnung ermöglicht, siehe [Animation des Dropdown-Auswahlbereichs mittels Popover-Zuständen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#animating_the_picker_using_popover_states).

### Positionierung des Auswahlankers

Ein weiterer Nebeneffekt der oben erwähnten impliziten Invoker/Popover-Beziehung ist, dass das `<select>` Element und der Auswahlbereich auch eine implizite Ankerreferenz haben, was bedeutet, dass der Auswahlbereich automatisch über die [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) mit dem `select` assoziiert ist. Dies bietet mehrere Vorteile, insbesondere:

- Die Standardstile des Browsers positionieren den Auswahlbereich relativ zur Taste (dem Anker) und Sie können diese Position anpassen, wie in [Positionierung von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erläutert. Zur Bezugnahme sind die zugehörigen Standardstile wie folgt:

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

- Die Standardstile des Browsers definieren auch einige Position-versuchen-Alternativen, die den Auswahlbereich neu positionieren, falls er Gefahr läuft, den Viewport zu überschreiten. Position-versuchen-Alternativen werden im [Leitfaden zu Alternativen für Überlauf und bedingtes Verbergen](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) erklärt. Zur Bezugnahme sind die zugehörigen Standard-Fallback-Stile wie folgt:

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
> Wenn Sie die implizite Ankerreferenz entfernen möchten, um zu verhindern, dass der Auswahlbereich mit dem `<select>` Element verankert wird, können Sie dies tun, indem Sie die `position-anchor` Eigenschaft des Auswahlbereichs auf einen Ankernamen setzen, der im aktuellen Dokument nicht existiert, wie z.B. `--not-an-anchor-name`. Siehe auch [Entfernen einer Ankerzuordnung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#removing_an_anchor_association).

## Beispiele

### Grundlegende Verwendung von benutzerdefinierten Auswahlelementen

Um sich für die Funktionalität benutzerdefinierter Auswahl und minimale Standardstile des Browsers zu entscheiden (und das von den Betriebssystemen bereitgestellte Styling zu entfernen), müssen sowohl das `<select>` Element als auch sein Auswahlbereich einen {{cssxref("appearance")}} Wert von `base-select` aufweisen:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Sie könnten dann zum Beispiel die Standard-Schwarz {{cssxref("border")}} des Auswahlbereichs entfernen:

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
