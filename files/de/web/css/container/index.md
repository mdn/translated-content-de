---
title: container
slug: Web/CSS/container
l10n:
  sourceCommit: 4b6b77bc36496c88dcbe477ec46da678a85d8e6e
---

{{CSSRef}}

Die **container** [Kurzform](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt das Element als Abfrage-Container fest und spezifiziert den Namen und Typ des [Enthaltungskontexts](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts), der in einer [Container-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_queries) verwendet wird.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}

## Syntax

```css
/* <container-name> */
container: my-layout;

/* <container-name> / <container-type> */
container: my-layout / size;

/* Globale Werte */
container: inherit;
container: initial;
container: revert;
container: revert-layer;
container: unset;
```

### Werte

- `<container-name>`
  - : Ein case-sensitiver Name für den Enthaltungskontext.
    Weitere Details zur Syntax finden Sie auf der {{cssxref("container-name")}} Eigenschaftsseite.
- `<container-type>`
  - : Der Typ des Enthaltungskontexts.
    Weitere Details zur Syntax finden Sie auf der {{cssxref("container-type")}} Eigenschaftsseite.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegung der Inline-Größenbeschränkung

Gegeben ist das folgende HTML-Beispiel, das eine Kartenkomponente mit einem Bild, einem Titel und etwas Text darstellt:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Die explizite Möglichkeit, einen Container-Kontext zu erstellen, besteht darin, einen `container-type` mit einem optionalen `container-name` zu deklarieren:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Die `container` Kurzform ist dafür gedacht, dies einfacher in einer einzelnen Deklaration zu definieren:

```css
.post {
  container: sidebar / inline-size;
}
```

Sie können dann diesen Container namentlich durch die {{cssxref("@container")}} At-Regel ansprechen:

```css
@container sidebar (min-width: 400px) {
  /* <stylesheet> */
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container-type")}} Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
