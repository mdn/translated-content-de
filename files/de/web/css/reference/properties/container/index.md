---
title: container
slug: Web/CSS/Reference/Properties/container
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **container** [Kurzform](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt das Element als Abfrage-Container fest und spezifiziert den Namen und den Typ des verwendeten [Containment-Kontextes](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) in einer [Container-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_queries).

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}

## Syntax

```css
/* <container-name> */
container: my-layout;

/* <container-name> / <container-type> */
container: my-layout / size;

/* Global Values */
container: inherit;
container: initial;
container: revert;
container: revert-layer;
container: unset;
```

### Werte

- `<container-name>`
  - : Ein case-sensitiver Name für den Containment-Kontext.
    Weitere Details zur Syntax finden Sie auf der Seite der Eigenschaft {{cssxref("container-name")}}.
- `<container-type>`
  - : Der Typ des Containment-Kontextes.
    Weitere Details zur Syntax finden Sie auf der Seite der Eigenschaft {{cssxref("container-type")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Etablierung der Inline-Größenkontainment

Angenommen, das folgende HTML-Beispiel ist eine Kartenkomponente mit einem Bild, einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Die explizite Art, einen Container-Kontext zu erstellen, besteht darin, einen `container-type` mit einem optionalen `container-name` zu deklarieren:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Die Kurzform `container` soll es einfacher machen, dies in einer einzigen Deklaration zu definieren:

```css
.post {
  container: sidebar / inline-size;
}
```

Sie können dann diesen Container mit Namen unter Verwendung der {{cssxref("@container")}} at-rule anvisieren:

```css
@container sidebar (width >= 400px) {
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
- {{Cssxref("@container")}} at-rule
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container-type")}} Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
