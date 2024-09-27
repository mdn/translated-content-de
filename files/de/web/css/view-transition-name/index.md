---
title: view-transition-name
slug: Web/CSS/view-transition-name
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die **`view-transition-name`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt dem ausgewählten Element einen eindeutigen Namen (ein {{cssxref("custom-ident")}}) und bewirkt, dass es an einem separaten [View-Transition](/de/docs/Web/API/View_Transitions_API) von der Haupt-View-Transition teilnimmt – oder an keiner View-Transition, wenn der Wert `none` angegeben ist.

## Syntax

```css
/* <custom-ident> value examples */
view-transition-name: header;
view-transition-name: figure-caption;

/* Keyword value */
view-transition-name: none;
```

### Werte

- {{cssxref("custom-ident")}}
  - : Ein identifizierender Name, der bewirkt, dass das ausgewählte Element an einer separaten [View-Transition](/de/docs/Web/API/View_Transitions_API) von der Haupt-View-Transition teilnimmt. Der Bezeichner muss eindeutig sein. Wenn zwei gerenderte Elemente zur gleichen Zeit denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und die Transition wird übersprungen.
    > [!NOTE]
    > Das `<custom-ident>` kann nicht `auto` sein.
- `none`
  - : Das ausgewählte Element wird nicht an einer View-Transition teilnehmen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

```css
figcaption {
  view-transition-name: figure-caption;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
- [Sanfte und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
