---
title: ::picker-icon
slug: Web/CSS/::picker-icon
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Der **`::picker-icon`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) zielt auf das Picker-Symbol in Formularsteuerelementen, die ein Symbol zugeordnet haben. Im Fall eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) wählt es das Pfeilsymbol aus, das auf dem `<select>`-Element angezeigt wird und nach unten zeigt, wenn es geschlossen ist.

## Syntax

```css-nolint
::picker-icon {
  /* ... */
}
```

## Beschreibung

Das `::picker-icon`-Pseudo-Element zielt auf das Picker-Symbol von Formularsteuerelementen ab, also das Symbol, das auf der Steuerschaltfläche angezeigt wird. Es kann nur dann gezielt werden, wenn das ausgehende Element einen Picker hat und das grundlegende Aussehen über den {{cssxref("appearance")}}-Eigenschaftswert `base-select` eingestellt wurde. Seine generierte Box erscheint nach allen von dem {{cssxref("::after")}} Pseudo-Element generierten Boxen, mit dem im Standard-Browser-Stylesheet angegebenen Symbol; Sie können es mit der {{cssxref("content")}}-Eigenschaft anpassen.

Der `::picker-icon`-Selektor kann verwendet werden, um den nach unten zeigenden Pfeil auf der Inline-End-Seite eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) zu wählen. Dies ist nützlich, wenn Sie beispielsweise die Farbe oder Größe des Symbols anpassen, ein anderes Symbol verwenden (mit {{cssxref("content")}} oder [SVG](/de/docs/Web/SVG)), oder es animieren möchten, wenn der Picker geöffnet und geschlossen wird.

Das Auswählen anpassbarer `<select>` Picker-Symbole ist der einzige derzeitige Anwendungsfall für `::picker-icon`, aber es können in Zukunft weitere hinzugefügt werden.

> [!NOTE]
> Das `::picker-icon`-Pseudo-Element ist nicht im Accessibility Tree enthalten, sodass von ihm erzeugter Inhalt, der mit {{cssxref("content")}} gesetzt wurde, nicht von unterstützenden Technologien angekündigt wird. Sie sollten dennoch sicherstellen, dass jedes neue Symbol, das Sie setzen, visuell für den beabsichtigten Zweck sinnvoll ist.

## Beispiele

### Animieren des Picker-Symbols

Um die anpassbare Auswahlfunktionalität zu aktivieren, müssen das `<select>`-Element und sein Picker beide einen {{cssxref("appearance")}} Wert von `base-select` gesetzt haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Sie könnten dann beispielsweise das `::picker-icon` anvisieren und ihm eine benutzerdefinierte {{cssxref("color")}} und eine {{cssxref("transition")}} geben, sodass Änderungen an seiner {{cssxref("rotate")}}-Eigenschaft sanft animiert werden:

```css
select::picker-icon {
  color: #999;
  transition: 0.4s rotate;
}
```

In der nächsten Regel wird `::picker-icon` mit der {{cssxref(":open")}} Pseudo-Klasse kombiniert — die das Symbol nur dann anvisiert, wenn der Picker geöffnet ist — und es auf einen `rotate`-Wert von `180deg` setzt, wenn das `<select>` geöffnet ist.

```css
select:open::picker-icon {
  rotate: 180deg;
}
```

Siehe [Stil des Picker-Symbols](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#styling_the_picker_icon) für ein vollständiges Beispiel, das diesen Code verwendet, zusammen mit einem Live-Beispiel-Rendering.

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
