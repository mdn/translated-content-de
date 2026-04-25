---
title: "`::picker()` CSS pseudo-element"
short-title: ::picker()
slug: Web/CSS/Reference/Selectors/::picker
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

Das **`::picker()`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) zielt auf den Auswahlbereich eines Elements ab, zum Beispiel den Drop-Down-Auswahlbereich eines [anpassbaren Auswahlfelds](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select).

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
      - : Der Drop-Down-Auswahlbereich von anpassbaren Auswahlfeldern.

## Beschreibung

Das `::picker()` Pseudo-Element zielt auf den Auswahlbereich eines Formularelements ab, also den Popup-Teil, der erscheint, um Ihnen die Auswahl zu ermöglichen, wenn Sie die Steuerungstaste drücken. Es kann nur anvisiert werden, wenn das Ursprungselement einen Auswahlbereich hat und das basis Erscheinungsbild über die {{cssxref("appearance")}} Eigenschaft `base-select` eingestellt hat.

Der `::picker(select)` Selektor zielt auf alle Nachkommen des anpassbaren `<select>` Elements ab, außer das erste `<button>` Kind; diese Nachkommen werden vom Browser zusammengefasst und als der Auswahlbereich gerendert. Das erste `<button>` Kind stellt die Steuerungstaste dar, die den Auswahlbereich öffnet, wenn sie gedrückt wird.

Dies ermöglicht es Ihnen, den gesamten Inhalt des Auswahlbereichs als eine Einheit anzusprechen, zum Beispiel, wenn Sie dessen Rahmen anpassen, ihn animieren wollen, wenn er erscheint und verschwindet, oder ihn an einer anderen Stelle als der Standardposition positionieren. Unser [Leitfaden für anpassbare Auswahlfelder](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) zeigt viele Beispiele für die Verwendung von `::picker(select)`.

### Verhalten des Auswahldropdowns

Das `<select>` Element und der Auswahlbereich haben automatisch eine implizite Invoker/Popover-Beziehung, wie sie von der [Popover API](/de/docs/Web/API/Popover_API) spezifiziert ist. Siehe [Die Verwendung der Popover API](/de/docs/Web/API/Popover_API/Using) für weitere Details zum Popover-Verhalten und [Animation des Drop-Down-Auswahlbereichs mit Popover-Zuständen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#animating_the_picker_using_popover_states) für einen typischen Anwendungsfall, der durch die implizite Popover-Verknüpfung ermöglicht wird.

### Positionierung des Auswahlbereichs-Ankers

Ein weiterer Nebeneffekt der oben erwähnten impliziten Invoker/Popover-Beziehung ist, dass das `<select>` Element und der Auswahlbereich auch einen impliziten Ankerbezug haben, was bedeutet, dass der Auswahlbereich automatisch über [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) mit dem `select` verbunden ist. Dies hat mehrere Vorteile, insbesondere:

- Die Standardstile des Browsers positionieren den Auswahlbereich relativ zur Schaltfläche (dem Anker) und Sie können diese Position anpassen, wie im [Positionieren von Elementen relativ zu ihrem Anker](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#positioning_elements_relative_to_their_anchor) erklärt. Zu Referenzzwecken sind die zugehörigen Standardstile wie folgt:

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

- Die Standardstile des Browsers definieren auch einige Fallback-Positionen, die den Auswahlbereich neu positionieren, wenn er Gefahr läuft, den Viewport zu überlaufen. Fallback-Positionen sind im [Anleitung: Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden erklärt. Zu Referenzzwecken sind die zugehörigen Standard-Fallback-Stile wie folgt:

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
> Wenn Sie den impliziten Ankerbezug entfernen möchten, um zu verhindern, dass der Auswahlbereich an das `<select>` Element verankert wird, können Sie dies tun, indem Sie die `position-anchor` Eigenschaft des Auswahlbereichs auf einen Ankernamen setzen, der im aktuellen Dokument nicht existiert, wie `--not-an-anchor-name`. Siehe auch [Entfernen einer Ankerverknüpfung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#removing_an_anchor_association).

## Beispiele

### Grundlegende Nutzung eines benutzerdefinierten Auswahlfelds

Um die benutzerdefinierte Auswahlfunktionalität und minimalen Standardstile des Browsers zu nutzen (und die vom Betriebssystem bereitgestellten Stile zu entfernen), müssen das `<select>` Element und sein Auswahlbereich beide einen {{cssxref("appearance")}} Wert von `base-select` gesetzt haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Sie könnten dann zum Beispiel den Standard-schwarzen {{cssxref("border")}} des Auswahlbereichs entfernen:

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
