---
title: container
slug: Web/CSS/container
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{CSSRef}}

Die **container** [Kurzform](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft legt das Element als Abfrage-Container fest und spezifiziert den Namen und den Typ des verwendeten [Containment-Kontexts](/de/docs/Web/CSS/CSS_containment/Container_queries#naming_containment_contexts) in einer [Container-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_queries).

## Bestandteile der Eigenschaften

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

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Etablierung der Inline-Größenenthaltung

Angenommen, das folgende HTML-Beispiel ist eine Kartenkomponente mit einem Bild, einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Die explizite Methode, um einen Container-Kontext zu erstellen, besteht darin, einen `container-type` mit einem optionalen `container-name` zu deklarieren:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Die `container`-Kurzform soll es einfacher machen, dies in einer einzigen Deklaration zu definieren:

```css
.post {
  container: sidebar / inline-size;
}
```

Sie können dann diesen Container gezielt per Name mit der {{cssxref("@container")}}-Anweisung ansprechen:

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
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- {{Cssxref("@container")}}-Anweisung
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container-type")}}-Eigenschaft
- CSS {{Cssxref("container-name")}}-Eigenschaft
- CSS {{cssxref("content-visibility")}}-Eigenschaft
