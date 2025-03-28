---
title: ::picker-icon
slug: Web/CSS/::picker-icon
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{CSSRef}}

Das **`::picker-icon`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) zielt auf das Auswahl-Symbol innerhalb von Formularelementen ab, die ein mit ihnen verbundenes Symbol haben. Im Falle eines [anpassbaren select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) wählt es das Pfeil-Symbol aus, das auf dem `<select>`-Element angezeigt wird und beim Schließen nach unten zeigt.

## Syntax

```css-nolint
::picker-icon {
  /* ... */
}
```

## Beschreibung

Das `::picker-icon` Pseudo-Element zielt auf das Auswahl-Symbol von Formularelementen ab, das heißt das Symbol, das auf der Steuertaste angezeigt wird. Es kann nur ausgewählt werden, wenn das ursprungliche Element ein Auswahl-Symbol hat und über die {{cssxref("appearance")}}-Eigenschaft auf den `base-select`-Wert eingestellt ist. Sein generiertes Kästchen erscheint nach allen Kästchen, die vom {{cssxref("::after")}} Pseudo-Element generiert werden, mit dem im Standard-Browser-Stylesheet angegebenen Symbol; Sie können es mit der {{cssxref("content")}}-Eigenschaft anpassen.

Der `::picker-icon`-Selektor kann verwendet werden, um den nach unten zeigenden Pfeil auf der Inline-Endseite eines [anpassbaren select-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) auszuwählen. Dies ist zum Beispiel nützlich, wenn Sie die Farbe oder Größe des Symbols anpassen, ein anderes Symbol verwenden (mit {{cssxref("content")}} oder [SVG](/de/docs/Web/SVG)) oder es animieren möchten, wenn der Auswahlmechanismus geöffnet und geschlossen wird.

Die Auswahl anpassbarer `<select>`-Auswahlsymbole ist der einzige aktuelle Anwendungsfall für `::picker-icon`, aber in Zukunft könnten weitere hinzukommen.

> [!NOTE]
> Das `::picker-icon` Pseudo-Element ist nicht im Barrierefreiheit-Baum enthalten, daher wird jeder auf ihm gesetzte generierte {{cssxref("content")}} von unterstützenden Technologien nicht angekündigt. Sie sollten dennoch sicherstellen, dass jedes neue von Ihnen gesetzte Symbol visuell für seinen beabsichtigten Zweck sinnvoll ist.

## Beispiele

### Animation des Auswahl-Symbols

Um die anpassbare Auswahlfunktionalität zu aktivieren, müssen beim `<select>`-Element und seinem Auswahlmechanismus beide eine {{cssxref("appearance")}}-Wert von `base-select` gesetzt werden:

```css
select,
::picker-icon(select) {
  appearance: base-select;
}
```

Sie könnten dann zum Beispiel das `::picker-icon` anvisieren und ihm eine benutzerdefinierte {{cssxref("color")}} und einen {{cssxref("transition")}} geben, sodass Änderungen an seiner {{cssxref("rotate")}}-Eigenschaft fließend animiert werden:

```css
select::picker-icon {
  color: #999;
  transition: 0.4s rotate;
}
```

In der nächsten Regel wird `::picker-icon` mit der {{cssxref(":open")}} Pseudo-Klasse kombiniert – die das Symbol nur anvisiert, wenn der Auswahlmechanismus geöffnet ist – und es wird auf einen `rotate`-Wert von `180deg` übertragen, wenn das `<select>` geöffnet wird.

```css
select:open::picker-icon {
  rotate: 180deg;
}
```

Sehen Sie sich [Styling the picker icon](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#styling_the_picker_icon) für ein vollständiges Beispiel an, das diesen Code verwendet, zusammen mit einem Live-Beispiel-Rendering.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}
- [Anpassbare select-Elemente](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select)
