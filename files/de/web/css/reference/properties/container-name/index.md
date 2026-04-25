---
title: "`container-name` CSS property"
short-title: container-name
slug: Web/CSS/Reference/Properties/container-name
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **container-name** [CSS](/de/docs/Web/CSS) Eigenschaft legt eine Liste von Abfragecontainer-Namen fest, die von der [@container](/de/docs/Web/CSS/Reference/At-rules/@container) At-Regel in einer [Containerabfrage](/de/docs/Web/CSS/Guides/Containment/Container_queries) verwendet werden.
Eine Containerabfrage wird Stile auf Elemente basierend auf der [Größe](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_size_queries) oder dem [Scrollzustand](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) des nächsten Vorfahren mit einem Containment-Kontext anwenden.
Wenn ein Containment-Kontext einen Namen erhält, kann er gezielt mit der {{Cssxref("@container")}} At-Regel anstelle des nächsten Vorfahren mit Containment angesprochen werden.

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
  - : Ein groß-/kleinsensitiver String, der zur Identifizierung des Containers verwendet wird.
    Die folgenden Bedingungen gelten:
    - Der Name darf nicht `or`, `and`, `not` oder `default` lauten.
    - Der Name darf nicht in Anführungszeichen stehen.
    - Der Trefferbezeichner, der für benutzerdefinierte Identifizierungen (z.B. `--container-name`) gedacht ist, ist erlaubt.
    - Eine Liste von mehreren durch ein Leerzeichen getrennten Namen ist zulässig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung eines Container-Namens

Das folgende HTML-Beispiel zeigt eine Kartenkomponente mit einem Titel und etwas Text:

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
Das folgende Beispiel erstellt zwei Containment-Kontexte, einen für die Meta-Informationen der Karte und einen für den Post-Auszug:

> [!NOTE]
> Eine Kurzschreibweise für diese Deklarationen wird auf der {{cssxref("container")}} Seite beschrieben.

```css
.post-meta {
  container-type: inline-size;
}

.post-excerpt {
  container-type: inline-size;
  container-name: excerpt;
}
```

Durch das Schreiben einer Containerabfrage über die {{Cssxref("@container")}} At-Regel werden Stile auf die Elemente des Containers angewendet, wenn die Abfrage wahr ist.
Das folgende Beispiel hat zwei Containerabfragen, eine, die nur auf die Inhalte des `.post-excerpt` Elements angewendet wird und eine, die auf die Inhalte sowohl von `.post-meta` als auch `.post-excerpt` angewendet wird:

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

Für mehr Informationen zum Schreiben von Containerabfragen siehe die [CSS Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries) Seite.

### Verwendung mehrerer Container-Namen

Sie können auch mehrere Namen für einen Container-Kontext angeben, die durch ein Leerzeichen getrennt sind:

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

Dies ermöglicht es Ihnen, den Container entweder mit dem einen oder dem anderen Namen in der {{cssxref("@container")}} At-Regel zu adressieren.
Dies ist nützlich, wenn Sie denselben Container mit mehreren Containerabfragen ansprechen möchten, bei denen eine der Bedingungen zutreffen kann:

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

- [CSS Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scrollstatusabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("container")}} Kurzschreibweise
- CSS {{Cssxref("container-type")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
