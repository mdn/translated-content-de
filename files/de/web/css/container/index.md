---
title: container
slug: Web/CSS/container
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **container** [Shorthand](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt das Element als Abfragecontainer fest und gibt den Namen und den Typ des verwendeten [Containment-Kontexts](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) in einer [Container-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_queries) an.

## Bestandteileigenschaften

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
  - : Der Typ des Containment-Kontexts.
    Weitere Details zur Syntax finden Sie auf der Seite der Eigenschaft {{cssxref("container-type")}}.

## Formale Definition

{{CSSInfo}}

## Formaler Syntax

{{CSSSyntax}}

## Beispiele

### Festlegen der Inline-Größen-Eindämmung

Gegeben sei das folgende HTML-Beispiel, das eine Kartenkomponente mit einem Bild, einem Titel und etwas Text ist:

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

Die `container`-Kurzform soll diese Definition in einer einzigen Deklaration vereinfachen:

```css
.post {
  container: sidebar / inline-size;
}
```

Sie können dann diesen Container mit dem Namen über die {{cssxref("@container")}} Regel ansprechen:

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

- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen und Stil-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- {{Cssxref("@container")}} Regel
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container-type")}} Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
