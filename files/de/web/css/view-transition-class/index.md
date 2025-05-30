---
title: view-transition-class
slug: Web/CSS/view-transition-class
l10n:
  sourceCommit: 828ae6eee278f30c3fa3677a74915d28d9e338b2
---

{{CSSRef}}

Die **`view-transition-class`** [CSS](/de/docs/Web/CSS) Eigenschaft bietet den ausgewählten Elementen eine identifizierende Klasse (ein {{cssxref("custom-ident")}}), was eine zusätzliche Methode zur Gestaltung der Ansichtsübergänge für diese Elemente bereitstellt.

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
  - : Ein identifizierender Name, der bewirkt, dass das ausgewählte Element an einem separaten [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) vom Root-Ansichtsübergang teilnimmt. Der Bezeichner muss einzigartig sein. Wenn zwei gerenderte Elemente zur gleichen Zeit denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) zurückgewiesen und der Übergang wird übersprungen.
- `none`
  - : Keine Klasse würde auf die für dieses Element generierten benannten Ansichtsübergangs-Pseudoelemente angewendet.

## Beschreibung

Der Wert `view-transition-class` bietet einen Styling-Hook, ähnlich einem CSS-Klassennamen, der verwendet werden kann, um dieselben Stile auf mehrere Ansichtsübergangs-Pseudoelemente anzuwenden. Es markiert ein Element nicht für die Aufnahme. Jedes einzelne Element benötigt weiterhin seinen eigenen einzigartigen {{cssxref("view-transition-name")}}; die `view-transition-class` wird nur als zusätzlicher Weg verwendet, um Elemente zu stylen, die bereits einen `view-transition-name` haben.
Die Unterstützung für die automatische Bestimmung des `view-transition-name` wird in der Spezifikation des [CSS View Transitions Module Level 2](https://drafts.csswg.org/css-view-transitions-2/#auto-vt-name) diskutiert.

Die `view-transition-class` wendet Stile mithilfe der Ansichtsübergangs-Pseudoelemente an, einschließlich {{cssxref("::view-transition-group()")}}, {{cssxref("::view-transition-image-pair()")}}, {{cssxref("::view-transition-old()")}}, und {{cssxref("::view-transition-new()")}}. Dies unterscheidet sich von dem `view-transition-name`, der Ansichtsübergänge zwischen dem Element im alten Zustand mit dem entsprechenden Element im neuen Zustand abgleicht.

Bis die Eigenschaft `view-transition-class` in allen Browsern, die Ansichtsübergänge unterstützen, vollständig unterstützt wird, sollte ein benutzerdefinierter `::view-transition-group()` für jedes Element einbezogen werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

```css
::view-transition-group(fast-card-slide) {
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
