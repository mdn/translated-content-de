---
title: container
slug: Web/CSS/container
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **Container**-Eigenschaft [shorthand](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) etabliert das Element als Abfragecontainer und gibt den Namen und Typ des verwendeten [Containment-Kontexts](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) in einer [Container-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_queries) an.

## Bestandskomponenten

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
  - : Ein fall-sensitiver Name für den Containment-Kontext.
    Weitere Details zur Syntax finden Sie auf der {{cssxref("container-name")}}-Eigenschaftsseite.
- `<container-type>`
  - : Der Typ des Containment-Kontexts.
    Weitere Details zur Syntax finden Sie auf der {{cssxref("container-type")}}-Eigenschaftsseite.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einrichten der Inlinegrößen-Einschließung

Angesichts des folgenden HTML-Beispiels, das eine Kartenschnittstelle mit einem Bild, einem Titel und etwas Text darstellt:

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

Die `container`-Kurzform soll dies in einer einzigen Deklaration einfacher machen:

```css
.post {
  container: sidebar / inline-size;
}
```

Sie können dann mit der {{cssxref("@container")}}-Regel gezielt diesen Container über seinen Namen ansprechen:

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

- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- {{Cssxref("@container")}}-Regel
- CSS-{{Cssxref("contain")}}-Eigenschaft
- CSS-{{Cssxref("container-type")}}-Eigenschaft
- CSS-{{Cssxref("container-name")}}-Eigenschaft
- CSS-{{cssxref("content-visibility")}}-Eigenschaft
