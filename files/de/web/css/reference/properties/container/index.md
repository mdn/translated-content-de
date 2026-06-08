---
title: "`container` CSS-Eigenschaft"
short-title: container
slug: Web/CSS/Reference/Properties/container
l10n:
  sourceCommit: 2ce88199869b63f8da3bbeafd899400f7579cce9
---

Die **container**-Eigenschaft [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) legt das Element als Abfragecontainer fest und spezifiziert den Namen und Typ des [Eingrenzungskontextes](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts), der in einer [Containerabfrage](/de/docs/Web/CSS/Guides/Containment/Container_queries) verwendet wird.

## Zusätzliche Eigenschaften

Diese Eigenschaft ist eine Abkürzung für die folgenden CSS-Eigenschaften:

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
  - : Ein Groß-/Kleinschreibung beachtender Name für den Eingrenzungskontext.
    Weitere Details zur Syntax sind auf der Seite zur {{cssxref("container-name")}}-Eigenschaft verfügbar.
- `<container-type>`
  - : Der Typ des Eingrenzungskontextes.
    Weitere Details zur Syntax sind auf der Seite zur {{cssxref("container-type")}}-Eigenschaft verfügbar.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Etablierung der Inline-Größeneingrenzung

Angenommen, das folgende HTML-Beispiel ist eine Kartenkomponente mit einem Bild, einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Der explizite Weg, um einen Containerkontext zu erstellen, besteht darin, einen `container-type` mit einem optionalen `container-name` zu deklarieren:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Die `container`-Abkürzung ist dazu gedacht, dies in einer einzigen Deklaration definierbar zu machen:

```css
.post {
  container: sidebar / inline-size;
}
```

Sie können dann diesen Container nach Name mit der {{cssxref("@container")}}-At-Regel anvisieren:

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
- [Verwendung von Containergröße und -stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- {{Cssxref("@container")}}-Regel
- CSS-{{Cssxref("contain")}}-Eigenschaft
- CSS-{{Cssxref("container-type")}}-Eigenschaft
- CSS-{{Cssxref("container-name")}}-Eigenschaft
- CSS-{{cssxref("content-visibility")}}-Eigenschaft
