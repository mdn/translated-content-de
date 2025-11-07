---
title: container
slug: Web/CSS/Reference/Properties/container
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **container** [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-[CSS](/de/docs/Web/CSS)-Eigenschaft etabliert das Element als ein Abfrage-Container und bestimmt den Namen und den Typ des [Einschlusskontexts](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts), der in einer [Container-Abfrage](/de/docs/Web/CSS/Guides/Containment/Container_queries) verwendet wird.

## Bestandteile der Eigenschaft

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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
  - : Ein Case-sensitiver Name für den Einschlusskontext.
    Mehr Details zur Syntax sind auf der {{cssxref("container-name")}} Eigenschaftsseite beschrieben.
- `<container-type>`
  - : Der Typ des Einschlusskontexts.
    Mehr Details zur Syntax sind auf der {{cssxref("container-type")}} Eigenschaftsseite beschrieben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegung der Inline-Größen-Einschließung

Angenommen, das folgende HTML-Beispiel ist eine Kartenkomponente mit einem Bild, einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Die explizite Methode zur Erstellung eines Container-Kontexts besteht darin, einen `container-type` mit einem optionalen `container-name` zu deklarieren:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Die `container`-Kurzschreibweise soll dies in einer einzigen Deklaration einfacher definieren:

```css
.post {
  container: sidebar / inline-size;
}
```

Sie können dann diesen Container mittels Namen mit der {{cssxref("@container")}} At-Regel ansprechen:

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

- [CSS-Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container-type")}} Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
