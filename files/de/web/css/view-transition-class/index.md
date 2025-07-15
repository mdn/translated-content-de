---
title: view-transition-class
slug: Web/CSS/view-transition-class
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`view-transition-class`** [CSS](/de/docs/Web/CSS)-Eigenschaft bietet den ausgewählten Elementen eine identifizierende Klasse (ein {{cssxref("custom-ident")}}), um eine zusätzliche Methode zur Gestaltung der View-Übergänge für diese Elemente bereitzustellen.

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
  - : Ein identifizierender Name, der bewirkt, dass das ausgewählte Element an einem separaten [View-Übergang](/de/docs/Web/API/View_Transition_API) vom Root-View-Übergang teilnimmt. Der Bezeichner muss eindeutig sein. Wenn zwei gerenderte Elemente zur gleichen Zeit denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) ablehnen und der Übergang wird übersprungen.
- `none`
  - : Keine Klasse würde auf die für dieses Element generierten benannten View-Übergangs-Pseudo-Elemente angewendet.

## Beschreibung

Der `view-transition-class`-Wert bietet einen Styling-Hook, ähnlich einem CSS-Klassennamen, der verwendet werden kann, um dieselben Stile auf mehrere View-Übergangs-Pseudo-Elemente anzuwenden. Es markiert kein Element zur Erfassung. Jedes einzelne Element benötigt immer noch seinen eigenen einzigartigen {{cssxref("view-transition-name")}}; die `view-transition-class` wird nur als zusätzliche Möglichkeit verwendet, um Elemente zu stylen, die bereits einen `view-transition-name` haben. Die Unterstützung zur automatischen Bestimmung des `view-transition-name` wird in der [CSS View Transitions Module Level 2](https://drafts.csswg.org/css-view-transitions-2/#auto-vt-name) Spezifikation diskutiert.

Die `view-transition-class` wendet Stile mithilfe der View-Übergangs-Pseudo-Elemente an, einschließlich {{cssxref("::view-transition-group()")}}, {{cssxref("::view-transition-image-pair()")}}, {{cssxref("::view-transition-old()")}} und {{cssxref("::view-transition-new()")}}. Dies unterscheidet sich von dem `view-transition-name`, der Übergänge zwischen dem Element im alten Zustand und seinem entsprechenden Element im neuen Zustand abgleicht.

Bis die `view-transition-class`-Eigenschaft in allen Browsern, die View-Übergänge unterstützen, vollständig unterstützt wird, fügen Sie ein benutzerdefiniertes `::view-transition-group()` für jedes Element hinzu.

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
- [Verwendung der View Transition API](/de/docs/Web/API/View_Transition_API/Using) Leitfaden
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
