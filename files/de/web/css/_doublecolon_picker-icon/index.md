---
title: ::picker-icon
slug: Web/CSS/::picker-icon
l10n:
  sourceCommit: e70bdcc4e6827cab5a3478bdda6250a92250a474
---

{{CSSRef}}{{SeeCompatTable}}

Das **`::picker-icon`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) zielt auf das Auswahl-Icon innerhalb von Formularelementen ab, die ein mit ihnen verbundenes Icon haben. Im Fall eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) wählt es das Pfeil-Icon aus, das auf dem `<select>`-Element angezeigt wird und nach unten zeigt, wenn es geschlossen ist.

## Syntax

```css-nolint
::picker-icon {
  /* ... */
}
```

## Beschreibung

Das Pseudo-Element `::picker-icon` zielt auf das Auswahl-Icon von Formularelementen ab, also das Icon, das auf der Steuerungsschaltfläche angezeigt wird. Es ist nur zum Zielen verfügbar, wenn das ursprungsgebende Element ein Auswahlwerkzeug hat und das grundlegende Erscheinungsbild über die {{cssxref("appearance")}}-Eigenschaft mit dem Wert `base-select` eingestellt ist. Sein generierter Kasten erscheint nach allen von dem Pseudo-Element {{cssxref("::after")}} generierten Kästen mit dem Icon, das im Standard-Browser-Stylesheet angegeben ist; Es kann mit der {{cssxref("content")}}-Eigenschaft angepasst werden.

Der `::picker-icon` Selektor kann verwendet werden, um den nach unten zeigenden Pfeil auf der Endseite eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) auszuwählen. Dies ist nützlich, wenn Sie zum Beispiel die Farbe oder Größe des Icons anpassen möchten, ein anderes Icon verwenden (mithilfe von {{cssxref("content")}} oder [SVG](/de/docs/Web/SVG)), oder es animieren, wenn das Auswahlwerkzeug geöffnet und geschlossen wird.

Die Auswahl anpassbarer `<select>` Auswahl-Icons ist der einzige derzeitige Anwendungsfall für `::picker-icon`, aber weitere könnten in Zukunft hinzugefügt werden.

> [!NOTE]
> Das `::picker-icon` Pseudo-Element ist nicht in den Zugänglichkeitsbaum eingeschlossen, sodass jeglicher generierter {{cssxref("content")}}, der darauf gesetzt wird, nicht von unterstützenden Technologien angekündigt wird. Sie sollten trotzdem sicherstellen, dass jegliches neue Icon, das Sie setzen, visuell für den beabsichtigten Zweck sinnvoll ist.

## Beispiele

### Das Auswahl-Icon animieren

Um die Funktionalität anpassbarer Auswahlen zu aktivieren, müssen das `<select>`-Element und sein Auswahlwerkzeug beide einen {{cssxref("appearance")}} Wert von `base-select` aufweisen:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Sie könnten dann zum Beispiel das `::picker-icon` ansprechen und ihm eine benutzerdefinierte {{cssxref("color")}} und eine {{cssxref("transition")}} geben, sodass Änderungen seiner {{cssxref("rotate")}} Eigenschaft glatt animiert werden:

```css
select::picker-icon {
  color: #999;
  transition: 0.4s rotate;
}
```

Im nächsten Regelwerk wird `::picker-icon` mit der {{cssxref(":open")}} Pseudoklasse kombiniert — die das Icon nur anvisiert, wenn das Auswahlwerkzeug geöffnet ist — und es wird zu einem `rotate` Wert von `180deg` animiert, wenn das `<select>` geöffnet wird.

```css
select:open::picker-icon {
  rotate: 180deg;
}
```

Sehen Sie sich [Das Auswahl-Icon stylen](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#styling_the_picker_icon) für ein vollständiges Beispiel an, das diesen Code verwendet, zusammen mit einer Live-Beispielanzeige.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}
- [Anpassbare Auswahl-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
