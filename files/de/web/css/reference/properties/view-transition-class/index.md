---
title: "`view-transition-class` CSS property"
short-title: view-transition-class
slug: Web/CSS/Reference/Properties/view-transition-class
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`view-transition-class`**-Eigenschaft [CSS](/de/docs/Web/CSS) versieht die ausgewählten Elemente mit einer identifizierenden Klasse (einem {{cssxref("custom-ident")}}) und bietet damit eine zusätzliche Methode zum Stylen der Ansichtstransitionen für diese Elemente.

## Syntax

```css
/* <custom-ident> value examples */
view-transition-class: card;

/* Keyword value */
view-transition-class: none;

/* Global values */
view-transition-class: inherit;
view-transition-class: initial;
view-transition-class: revert;
view-transition-class: revert-layer;
view-transition-class: unset;
```

### Werte

- {{cssxref("custom-ident")}}
  - : Ein identifizierender Name, der dazu führt, dass das ausgewählte Element an einer separaten [Ansichtstransition](/de/docs/Web/API/View_Transition_API) von der Wurzelansichtstransition teilnimmt. Der Bezeichner muss eindeutig sein. Wenn zwei gerenderte Elemente zur gleichen Zeit denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und die Transition wird übersprungen.
- `none`
  - : Es wird keine Klasse auf die benannten Ansichtstransition-Pseudo-Elemente angewendet, die für dieses Element erzeugt werden.

## Beschreibung

Der `view-transition-class`-Wert bietet ein Styling-Element, ähnlich wie ein CSS-Klassenname, mit dem dieselben Stile auf mehrere Ansichtstransition-Pseudo-Elemente angewendet werden können. Es markiert kein Element zum Erfassen. Jedes einzelne Element benötigt weiterhin seinen eigenen eindeutigen {{cssxref("view-transition-name")}}; die `view-transition-class` wird nur als zusätzliche Möglichkeit genutzt, um Elemente zu stylen, die bereits einen `view-transition-name` haben. Die Unterstützung zur automatischen Bestimmung des `view-transition-name` wird in der Spezifikation [CSS View Transitions Module Level 2](https://drafts.csswg.org/css-view-transitions-2/#auto-vt-name) diskutiert.

Die `view-transition-class` wendet Stile mit den Ansichtstransition-Pseudo-Elementen an, einschließlich {{cssxref("::view-transition-group()")}}, {{cssxref("::view-transition-image-pair()")}}, {{cssxref("::view-transition-old()")}}, und {{cssxref("::view-transition-new()")}}. Dies unterscheidet sich von dem `view-transition-name`, der Ansichtstransitionen zwischen dem Element im alten Zustand und seinem entsprechenden Element im neuen Zustand abgleicht.

Bis die `view-transition-class`-Eigenschaft in allen Browsern, die Ansichtstransitionen unterstützen, vollständig unterstützt wird, sollte ein benutzerdefiniertes `::view-transition-group()` für jedes Element enthalten werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

```css
::view-transition-group(.fast-card-slide) {
  animation-duration: 3s;
}

.product {
  view-transition-class: fast-card-slide;
}

.product#card1 {
  view-transition-name: show-card;
}

.product#card2 {
  view-transition-name: hide-card;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("view-transition-name")}}
- [Using the View Transition API](/de/docs/Web/API/View_Transition_API/Using) Leitfaden
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
