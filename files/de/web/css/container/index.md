---
title: container
slug: Web/CSS/container
l10n:
  sourceCommit: 4b6b77bc36496c88dcbe477ec46da678a85d8e6e
---

{{CSSRef}}

Die **container** [Shorthand](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft etabliert das Element als Abfrage-Container und spezifiziert den Namen und Typ des [Einschlusskontexts](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts), der in einer [Container-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_queries) verwendet wird.

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

/* Global Values */
container: inherit;
container: initial;
container: revert;
container: revert-layer;
container: unset;
```

### Werte

- `<container-name>`
  - : Ein fall-sensitiver Name für den Einschlusskontext.
    Weitere Details zur Syntax werden auf der {{cssxref("container-name")}} Eigenschaftsseite behandelt.
- `<container-type>`
  - : Der Typ des Einschlusskontexts.
    Weitere Details zur Syntax werden auf der {{cssxref("container-type")}} Eigenschaftsseite behandelt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Etablierung der Inline-Größen-Einschließung

Angenommen, das folgende HTML-Beispiel ist eine Kartenkomponente mit einem Bild, einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Der explizite Weg, einen Container-Kontext zu erstellen, besteht darin, einen `container-type` mit einem optionalen `container-name` anzugeben:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Die `container` Kurzform soll dies einfacher machen und in einer einzigen Deklaration definieren:

```css
.post {
  container: sidebar / inline-size;
}
```

Sie können diesen Container dann mit dem Namen mittels der {{cssxref("@container")}} @-Regel ansprechen:

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
- [Verwendung von Container-Größen- und Stil-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- {{Cssxref("@container")}} @-Regel
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container-type")}} Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
