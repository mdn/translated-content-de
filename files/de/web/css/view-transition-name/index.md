---
title: view-transition-name
slug: Web/CSS/view-transition-name
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die **`view-transition-name`** [CSS](/de/docs/Web/CSS) Eigenschaft stellt dem ausgewählten Element einen eindeutigen Namen (einen {{cssxref("custom-ident")}}) zur Verfügung und führt dazu, dass es an einem separaten [View-Übergang](/de/docs/Web/API/View_Transitions_API) vom Haupt-View-Übergang teilnimmt - oder an keinem View-Übergang, wenn der Wert `none` angegeben ist.

## Syntax

```css
/* <custom-ident> Wertbeispiele */
view-transition-name: header;
view-transition-name: figure-caption;

/* Schlüsselwortwert */
view-transition-name: none;
```

### Werte

- {{cssxref("custom-ident")}}
  - : Ein identifizierender Name, der dazu führt, dass das ausgewählte Element an einem separaten [View-Übergang](/de/docs/Web/API/View_Transitions_API) vom Haupt-View-Übergang teilnimmt. Der Bezeichner muss eindeutig sein. Wenn zwei gerenderte Elemente zur gleichen Zeit denselben `view-transition-name` haben, wird {{domxref("ViewTransition.ready")}} ablehnen und der Übergang wird übersprungen.
    > [!NOTE]
    > Der `<custom-ident>` darf nicht `auto` sein.
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
- [Glatte und einfache Übergänge mit der View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
