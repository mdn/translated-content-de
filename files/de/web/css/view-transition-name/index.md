---
title: view-transition-name
slug: Web/CSS/view-transition-name
l10n:
  sourceCommit: 632289fcc10e926d166e1b49e5ba3505de182856
---

{{CSSRef}}

Die **`view-transition-name`**-[CSS](/de/docs/Web/CSS) Eigenschaft weist dem ausgewählten Element einen eindeutigen Identifikationsnamen (ein {{cssxref("custom-ident")}}) zu und führt dazu, dass es an einem separaten [View-Übergang](/de/docs/Web/API/View_Transitions_API) vom Haupt-View-Übergang teilnimmt – oder an keinem View-Übergang, wenn der Wert `none` angegeben ist.

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
  - : Ein Identifikationsname, der dazu führt, dass das ausgewählte Element an einem separaten [View-Übergang](/de/docs/Web/API/View_Transitions_API) vom Haupt-View-Übergang teilnimmt. Der Bezeichner muss eindeutig sein. Wenn zwei gerenderte Elemente zur gleichen Zeit denselben `view-transition-name` haben, wird [`ViewTransition.ready`](/de/docs/Web/API/ViewTransition/ready) abgelehnt und der Übergang wird übersprungen.
    > [!NOTE]
    > Der `<custom-ident>` kann nicht `auto` sein.
- `none`
  - : Das ausgewählte Element wird nicht an einem View-Übergang teilnehmen.

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
- [Sanfte Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
