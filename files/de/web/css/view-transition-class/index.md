---
title: view-transition-class
slug: Web/CSS/view-transition-class
l10n:
  sourceCommit: 5de337827007e2a7fb89261215b6dbcf4caafafa
---

{{CSSRef}}

Die **`view-transition-class`** [CSS](/de/docs/Web/CSS) Eigenschaft bietet den ausgewählten Elementen eine identifizierende Klasse (ein {{cssxref("custom-ident")}}), die eine zusätzliche Methode zur Gestaltung der Ansichtsübergänge für diese Elemente bereitstellt.

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
  - : Ein identifizierender Name, der das ausgewählte Element dazu bringt, an einem separaten [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) vom Hauptübergang teilzunehmen. Der Bezeichner muss eindeutig sein. Wenn zwei gerenderte Elemente gleichzeitig denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und der Übergang wird übersprungen.
- `none`
  - : Keine Klasse wird auf die benannten Pseudo-Elemente des Ansichtsübergangs angewendet, die für dieses Element generiert werden.

## Beschreibung

Der `view-transition-class` Wert bietet einen Styling-Hook, ähnlich einem CSS-Klassennamen, der verwendet werden kann, um dieselben Stile auf mehrere Ansichtsübergangs-Pseudo-Elemente anzuwenden. Er markiert kein Element zur Erfassung. Jedes einzelne Element benötigt immer noch seinen eigenen einzigartigen {{cssxref("view-transition-name")}}; die `view-transition-class` dient nur als zusätzliche Möglichkeit, Elemente zu gestalten, die bereits einen `view-transition-name` haben.
Die Unterstützung zur automatischen Bestimmung des `view-transition-name` wird in der [CSS View Transitions Module Level 2](https://drafts.csswg.org/css-view-transitions-2/#auto-vt-name) Spezifikation diskutiert.

Die `view-transition-class` wendet Stile mit den Ansichtsübergangs-Pseudo-Elementen an, einschließlich {{cssxref("::view-transition-group()")}}, {{cssxref("::view-transition-image-pair()")}}, {{cssxref("::view-transition-old()")}}, und {{cssxref("::view-transition-new()")}}. Dies unterscheidet sich von der `view-transition-name`, die Ansichtsübergänge zwischen dem Element im alten Zustand und dem entsprechenden Element im neuen Zustand abgleicht.

Bis die `view-transition-class` Eigenschaft in allen Browsern, die Ansichtsübergänge unterstützen, vollständig unterstützt wird, fügen Sie für jedes Element eine benutzerdefinierte `::view-transition-group()` hinzu.

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
