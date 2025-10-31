---
title: view-transition-class
slug: Web/CSS/Reference/Properties/view-transition-class
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`view-transition-class`** [CSS](/de/docs/Web/CSS) Eigenschaft bietet den ausgewählten Elementen eine identifizierende Klasse (ein {{cssxref("custom-ident")}}) und stellt eine zusätzliche Methode zur Verfügung, um die Ansichtsübergänge für diese Elemente zu gestalten.

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
  - : Ein identifizierender Name, der dazu führt, dass das ausgewählte Element an einem separaten [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) vom Root-Ansichtsübergang teilnimmt. Der Bezeichner muss einzigartig sein. Wenn zwei gerenderte Elemente zur gleichen Zeit denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und der Übergang wird übersprungen.
- `none`
  - : Es wird keine Klasse auf die benannten Ansichtübergangs-Pseudoelemente angewendet, die für dieses Element generiert werden.

## Beschreibung

Der `view-transition-class` Wert bietet einen Stil-Ansatzpunkt, ähnlich wie ein CSS-Klassenname, der verwendet werden kann, um dieselben Stile auf mehrere Ansichtübergangs-Pseudoelemente anzuwenden. Es markiert ein Element nicht zur Erfassung. Jedes einzelne Element benötigt weiterhin seinen eigenen eindeutigen {{cssxref("view-transition-name")}}; die `view-transition-class` wird nur als zusätzliche Möglichkeit verwendet, um Elemente zu gestalten, die bereits einen `view-transition-name` haben.
Die Unterstützung zur automatischen Bestimmung des `view-transition-name` wird in der [CSS View Transitions Module Level 2](https://drafts.csswg.org/css-view-transitions-2/#auto-vt-name) Spezifikation diskutiert.

Die `view-transition-class` wendet Stile mithilfe der Ansichtübergangs-Pseudoelemente an, einschließlich {{cssxref("::view-transition-group()")}}, {{cssxref("::view-transition-image-pair()")}}, {{cssxref("::view-transition-old()")}}, und {{cssxref("::view-transition-new()")}}. Dies ist anders als der `view-transition-name`, der Ansichtübergänge zwischen dem Element im alten Zustand und seinem entsprechenden Element im neuen Zustand verbindet.

Bis die `view-transition-class` Eigenschaft in allen Browsern, die Ansichtübergänge unterstützen, vollständig unterstützt wird, fügen Sie ein benutzerdefiniertes `::view-transition-group()` für jedes Element hinzu.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

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
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using) Leitfaden
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
