---
title: container-name
slug: Web/CSS/Reference/Properties/container-name
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **container-name** [CSS](/de/docs/Web/CSS) Eigenschaft gibt eine Liste von Abfragenamen für Container an, die von der [@container](/de/docs/Web/CSS/@container) At-Regel in einer [Containerabfrage](/de/docs/Web/CSS/CSS_containment/Container_queries) verwendet werden. Eine Containerabfrage wendet Stile auf Elemente basierend auf der [Größe](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries) oder dem [Scroll-Status](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) des nächstgelegenen Vorfahren mit einem Containment-Kontext an. Wenn einem Containment-Kontext ein Name gegeben wird, kann er gezielt mit der {{Cssxref("@container")}} At-Regel anstelle des nächstgelegenen Vorfahren mit Containment angesprochen werden.

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
  - : Eine groß- und kleinschreibungssensitive Zeichenkette, die zur Identifizierung des Containers verwendet wird. Folgende Bedingungen gelten:
    - Der Name darf nicht `or`, `and`, `not` oder `default` entsprechen.
    - Der Name darf nicht in Anführungszeichen stehen.
    - Der gestrichelte Identifikator, der dazu gedacht ist, von Autoren definierte Bezeichner anzugeben (z. B. `--container-name`), ist zulässig.
    - Es ist erlaubt, eine Liste mehrerer Namen, getrennt durch ein Leerzeichen, anzugeben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwenden eines Container-Namens

Gegeben ist das folgende HTML-Beispiel, das eine Kartenkomponente mit einem Titel und etwas Text ist:

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

Um einen Containment-Kontext zu erstellen, fügen Sie die `container-type` Eigenschaft zu einem Element in CSS hinzu.
Das folgende Beispiel erstellt zwei Containment-Kontexte, einen für die Karten-Metainformationen und einen für den Auszug des Beitrags:

> [!NOTE]
> Eine Kurzsyntax für diese Deklarationen ist auf der {{cssxref("container")}} Seite beschrieben.

```css
.post-meta {
  container-type: inline-size;
}

.post-excerpt {
  container-type: inline-size;
  container-name: excerpt;
}
```

Das Schreiben einer Container-Abfrage mittels der {{Cssxref("@container")}} At-Regel wird Stile auf die Elemente des Containers anwenden, wenn die Abfrage als wahr ausgewertet wird. Das folgende Beispiel hat zwei Container-Abfragen, eine, die nur auf den Inhalt des `.post-excerpt` Elements angewendet wird und eine, die auf den Inhalt sowohl von `.post-meta` als auch von `.post-excerpt` angewendet wird:

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

Für weitere Informationen zum Schreiben von Container-Abfragen, siehe die [CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) Seite.

### Verwenden mehrerer Container-Namen

Sie können auch mehrere Namen für einen Container-Kontext angeben, die durch ein Leerzeichen getrennt sind:

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

Dies ermöglicht es Ihnen, den Container mit einem der beiden Namen in der {{cssxref("@container")}} At-Regel anzusprechen. Dies ist nützlich, wenn Sie denselben Container mit mehreren Containerabfragen ansprechen möchten, bei denen entweder Bedingung zutreffen könnte:

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

- [CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Status-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("container")}} Kurzschreibweise
- CSS {{Cssxref("container-type")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
