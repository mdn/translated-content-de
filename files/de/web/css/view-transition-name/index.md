---
title: view-transition-name
slug: Web/CSS/view-transition-name
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die **`view-transition-name`** [CSS](/de/docs/Web/CSS)-Eigenschaft bietet dem ausgewählten Element einen unverwechselbaren Namen (ein {{cssxref("custom-ident")}}) und bewirkt, dass es an einem separaten [Ansichtsübergang](/de/docs/Web/API/View_Transitions_API) vom Wurzel-Ansichtsübergang teilnimmt — oder an keinem Ansichtsübergang, wenn der Wert `none` angegeben ist.

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
  - : Ein identifizierender Name, der bewirkt, dass das ausgewählte Element an einem separaten [Ansichtsübergang](/de/docs/Web/API/View_Transitions_API) vom Wurzel-Ansichtsübergang teilnimmt. Der Identifikator muss eindeutig sein. Wenn zwei gerenderte Elemente zur gleichen Zeit denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) zurückgewiesen und der Übergang wird übersprungen.
    > [!NOTE]
    > Das `<custom-ident>` kann nicht `auto` sein.
- `none`
  - : Das ausgewählte Element wird nicht an einem Ansichtsübergang teilnehmen.

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
