---
title: ::picker-icon
slug: Web/CSS/::picker-icon
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

{{SeeCompatTable}}

Der **`::picker-icon`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) zielt auf das Auswahl-Symbol innerhalb von Formularelementen, die ein solches Symbol besitzen. Im Fall eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) selektiert es das Pfeilsymbol, das im `<select>` Element angezeigt wird und nach unten zeigt, wenn es geschlossen ist.

## Syntax

```css-nolint
::picker-icon {
  /* ... */
}
```

## Beschreibung

Das `::picker-icon` Pseudo-Element zielt auf das Auswahl-Symbol von Formularelementen ab, also das Symbol, das auf der Steuerungsschaltfläche angezeigt wird. Es kann nur gezielt werden, wenn das auslösende Element ein Auswahlfeld hat und das Basis-Aussehen über den {{cssxref("appearance")}} Property-Wert `base-select` festgelegt ist. Die erzeugte Box erscheint nach allen Boxen, die durch das {{cssxref("::after")}} Pseudo-Element erzeugt werden, mit dem Symbol, das im Standard-Browser-Stylesheet angegeben ist; es kann mit der {{cssxref("content")}} Eigenschaft angepasst werden.

Der `::picker-icon` Selektor kann verwendet werden, um den nach unten gerichteten Pfeil auf der Inline-Endseite eines [anpassbaren Auswahl-Elements](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select) auszuwählen. Dies ist beispielsweise nützlich, wenn Sie die Farbe oder Größe des Symbols anpassen, ein anderes Symbol verwenden (mit {{cssxref("content")}} oder [SVG](/de/docs/Web/SVG)) oder es animieren möchten, wenn die Auswahl geöffnet und geschlossen wird.

Die Auswahl von anpassbaren `<select>` Auswahl-Symbolen ist der einzige aktuelle Anwendungsfall für `::picker-icon`, aber in Zukunft könnten weitere hinzugefügt werden.

> [!NOTE]
> Das `::picker-icon` Pseudo-Element ist nicht im Zugänglichkeitsbaum enthalten, sodass jeglicher generierter {{cssxref("content")}}, der darauf gesetzt wird, nicht von unterstützenden Technologien angesagt wird. Sie sollten dennoch sicherstellen, dass jedes neue Symbol, das Sie festlegen, visuell sinnvoll für den beabsichtigten Zweck ist.

## Beispiele

### Animation des Auswahl-Symbols

Um sich für anpassbare Auswahl-Funktionalität zu entscheiden, müssen sowohl das `<select>` Element als auch dessen Auswahl ein {{cssxref("appearance")}} Wert von `base-select` eingestellt haben:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Sie könnten dann zum Beispiel das `::picker-icon` anvisieren und ihm eine benutzerdefinierte {{cssxref("color")}} und eine {{cssxref("transition")}} geben, sodass Änderungen an seiner {{cssxref("rotate")}} Eigenschaft weich animiert werden:

```css
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

In der nächsten Regel wird `::picker-icon` mit der {{cssxref(":open")}} Pseudo-Klasse kombiniert — die das Symbol nur anvisiert, wenn das Auswahlfeld offen ist — und es wird zu einem `rotate` Wert von `180deg` überführt, wenn das `<select>` geöffnet wird.

```css
select:open::picker-icon {
  rotate: 180deg;
}
```

Sehen Sie [Styling the picker icon](/de/docs/Learn_web_development/Extensions/Forms/Customizable_select#styling_the_picker_icon) für ein vollständiges Beispiel, das diesen Code verwendet, zusammen mit einem Live-Beispiel.

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
