---
title: container-name
slug: Web/CSS/Reference/Properties/container-name
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **container-name** [CSS](/de/docs/Web/CSS) Eigenschaft gibt eine Liste von Abfrage-Containernamen an, die von der [@container](/de/docs/Web/CSS/Reference/At-rules/@container) At-Regel in einer [Container-Abfrage](/de/docs/Web/CSS/Guides/Containment/Container_queries) verwendet werden. Eine Container-Abfrage wird Stile auf Elemente basierend auf der [Größe](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_size_queries) oder dem [Scroll-Zustand](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) des nächsten Vorfahren mit einem Containment-Kontext anwenden. Wenn einem Containment-Kontext ein Name gegeben wird, kann er gezielt mit der {{Cssxref("@container")}} At-Regel angesprochen werden, anstatt den nächstgelegenen Vorfahren mit Containment zu verwenden.

## Syntax

```css
container-name: none;

/* A single name */
container-name: my-layout;

/* Multiple names */
container-name: my-page-layout my-component-library;

/* Global Values */
container-name: inherit;
container-name: initial;
container-name: revert;
container-name: revert-layer;
container-name: unset;
```

### Werte

- `none`

  - : Standardwert. Der Abfragecontainer hat keinen Namen.

- {{cssxref("custom-ident")}}
  - : Eine Groß-/Kleinschreibung beachtende Zeichenkette, die zur Identifizierung des Containers verwendet wird.
    Es gelten die folgenden Bedingungen:
    - Der Name darf nicht gleich `or`, `and`, `not` oder `default` sein.
    - Der Name darf nicht in Anführungszeichen sein.
    - Das gestrichelte Ident, das dazu gedacht ist, benutzerdefinierte Bezeichner zu kennzeichnen (z. B. `--container-name`), ist erlaubt.
    - Eine Liste mehrerer Namen, die durch ein Leerzeichen getrennt sind, ist erlaubt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung eines Containernamens

Gegeben ist das folgende HTML-Beispiel, das eine Kartenkomponente mit einem Titel und etwas Text darstellt:

```html
<div class="card">
  <div class="post-meta">
    <h2>Card title</h2>
    <p>My post details.</p>
  </div>
  <div class="post-excerpt">
    <p>
      A preview of my <a href="https://example.com">blog post</a> about cats.
    </p>
  </div>
</div>
```

Um einen Containment-Kontext zu erstellen, fügen Sie die `container-type` Eigenschaft zu einem Element in CSS hinzu. Das folgende Beispiel erstellt zwei Containment-Kontexte, einen für die Metainformationen der Karte und einen für den Beitragstextauszug:

> [!NOTE]
> Eine Kurzschreibweise für diese Deklarationen wird auf der Seite {{cssxref("container")}} beschrieben.

```css
.post-meta {
  container-type: inline-size;
}

.post-excerpt {
  container-type: inline-size;
  container-name: excerpt;
}
```

Das Schreiben einer Container-Abfrage über die {{Cssxref("@container")}} At-Regel wendet Stile auf die Elemente des Containers an, wenn die Abfrage als wahr evaluiert wird. Das folgende Beispiel enthält zwei Container-Abfragen, von denen eine nur auf die Inhalte des `.post-excerpt` Elements und eine auf die Inhalte sowohl von `.post-meta` als auch von `.post-excerpt` angewendet wird:

```css
@container excerpt (width >= 400px) {
  p {
    visibility: hidden;
  }
}

@container (width >= 400px) {
  p {
    font-size: 2rem;
  }
}
```

Für weitere Informationen zum Schreiben von Container-Abfragen siehe die [CSS Container Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries) Seite.

### Verwendung mehrerer Containernamen

Sie können einem Container-Kontext auch mehrere Namen geben, die durch ein Leerzeichen getrennt sind:

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

Dies ermöglicht es Ihnen, den Container mit einem der Namen in der {{cssxref("@container")}} At-Regel anzusprechen. Dies ist nützlich, wenn Sie denselben Container mit mehreren Container-Abfragen ansprechen möchten, bei denen eine von beiden Bedingungen wahr sein könnte:

```css
@container meta (width <= 500px) {
  p {
    visibility: hidden;
  }
}

@container card (width <= 200px) {
  h2 {
    font-size: 1.5em;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("container")}} Kurzschreibweise
- CSS {{Cssxref("container-type")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
