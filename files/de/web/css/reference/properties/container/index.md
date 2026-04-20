---
title: "`container` CSS-Eigenschaft"
short-title: container
slug: Web/CSS/Reference/Properties/container
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **container**-[Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt das Element als Abfragecontainer fest und spezifiziert den Namen und Typ des verwendeten [Einschließungskontexts](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts) in einer [Container-Abfrage](/de/docs/Web/CSS/Guides/Containment/Container_queries).

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
  - : Ein fallunempfindlicher Name für den Einschließungskontext.
    Weitere Details zur Syntax werden auf der Seite der Eigenschaft {{cssxref("container-name")}} behandelt.
- `<container-type>`
  - : Der Typ des Einschließungskontexts.
    Weitere Details zur Syntax werden auf der Seite der Eigenschaft {{cssxref("container-type")}} behandelt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Inline-Größeneinschließung etablieren

Gegeben ist das folgende HTML-Beispiel, das eine Kartenkomponente mit einem Bild, einem Titel und etwas Text darstellt:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Der explizite Weg, einen Containerkontext zu erstellen, besteht darin, einen `container-type` mit einem optionalen `container-name` zu deklarieren:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Die `container`-Shorthand soll dies einfacher machen, indem es in einer einzigen Deklaration definiert wird:

```css
.post {
  container: sidebar / inline-size;
}
```

Sie können dann diesen Container mit dem Namen unter Verwendung der {{cssxref("@container")}}-At-Regel ansprechen:

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
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- {{Cssxref("@container")}}-At-Regel
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container-type")}}-Eigenschaft
- CSS {{Cssxref("container-name")}}-Eigenschaft
- CSS {{cssxref("content-visibility")}}-Eigenschaft
