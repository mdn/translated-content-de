---
title: view-transition-name
slug: Web/CSS/view-transition-name
l10n:
  sourceCommit: 5de337827007e2a7fb89261215b6dbcf4caafafa
---

{{CSSRef}}

Die **`view-transition-name`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt dem ausgewählten Element einen eindeutigen Identifikationsnamen (ein {{cssxref("custom-ident")}}) und bewirkt, dass es an einem separaten [View-Übergang](/de/docs/Web/API/View_Transition_API) vom Root-View-Übergang teilnimmt – oder an keinem View-Übergang, wenn der Wert `none` angegeben ist.

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
  - : Ein Identifikationsname, der bewirkt, dass das ausgewählte Element an einem separaten [View-Übergang](/de/docs/Web/API/View_Transition_API) vom Root-View-Übergang teilnimmt. Der Bezeichner muss eindeutig sein. Wenn zwei gerenderte Elemente zur gleichen Zeit denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und der Übergang wird übersprungen.
    > [!NOTE]
    > Der `<custom-ident>` kann nicht `auto` sein.
- `none`
  - : Das ausgewählte Element nimmt nicht an einem View-Übergang teil.

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

- {{cssxref("view-transition-class")}}
- [View Transition API](/de/docs/Web/API/View_Transition_API)
- [Sanfte Übergänge mit der View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
