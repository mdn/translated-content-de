---
title: container-name
slug: Web/CSS/container-name
l10n:
  sourceCommit: 640a544f7535a08da2a017338046e5e4a142c978
---

Die **container-name** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt eine Liste von Abfragecontainernamen an, die von der [@container](/de/docs/Web/CSS/@container)-Regel in einer [Containerabfrage](/de/docs/Web/CSS/CSS_containment/Container_queries) verwendet werden.
Eine Containerabfrage wendet Stile auf Elemente basierend auf der [Größe](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries) oder dem [Scroll-Zustand](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) des nächstgelegenen Vorfahren mit einem Containment-Kontext an.
Wenn ein Containment-Kontext einen Namen erhält, kann er mithilfe der {{Cssxref("@container")}}-Regel gezielt angesprochen werden, anstatt den nächstgelegenen Vorfahren mit Containment zu verwenden.

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
  - : Ein groß-/klein-buchstabenunabhängiger String, der zur Identifikation des Containers verwendet wird. Die folgenden Bedingungen gelten:
    - Der Name darf nicht `or`, `and`, `not` oder `default` entsprechen.
    - Der Name darf nicht in Anführungszeichen stehen.
    - Das mit einem Bindestrich versehene Identifikat, das zur Kennzeichnung benutzerdefinierter Bezeichner vorgesehen ist (z.B. `--container-name`), ist erlaubt.
    - Eine Liste mehrerer durch ein Leerzeichen getrennter Namen ist erlaubt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung eines Containernamens

Gegeben ist das folgende HTML-Beispiel, ein Kartenelement mit einem Titel und etwas Text:

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

Um einen Containment-Kontext zu erstellen, fügen Sie die `container-type`-Eigenschaft in einem Element in CSS hinzu.
Das folgende Beispiel erstellt zwei Containment-Kontexte, einen für die Meta-Informationen der Karte und einen für den Beitragstext:

> [!NOTE]
> Eine Kurzschreibweise für diese Deklarationen wird auf der {{cssxref("container")}}-Seite beschrieben.

```css
.post-meta {
  container-type: inline-size;
}

.post-excerpt {
  container-type: inline-size;
  container-name: excerpt;
}
```

Eine Containerabfrage über die {{Cssxref("@container")}}-Regel wird die Stile auf die Elemente des Containers anwenden, wenn die Abfrage als wahr ausgewertet wird.
Das folgende Beispiel hat zwei Containerabfragen, eine, die nur auf den Inhalt des `.post-excerpt`-Elements angewendet wird und eine, die sowohl auf die Inhalte von `.post-meta` als auch auf `.post-excerpt` angewendet wird:

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

Für weitere Informationen zum Schreiben von Containerabfragen, siehe die [CSS Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries) Seite.

### Verwendung mehrerer Containernamen

Sie können einem Containerkontext auch mehrere durch ein Leerzeichen getrennte Namen zuweisen:

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

Dies ermöglicht es Ihnen, den Container mit einem der Namen in der {{cssxref("@container")}}-Regel anzusprechen.
Dies ist nützlich, wenn Sie denselben Container mit mehreren Containerabfragen ansprechen möchten, bei denen eine der Bedingungen zutreffen könnte:

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

- [CSS Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containern mit Größen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}}-Regel
- CSS {{Cssxref("container")}} Kurzschreibweise
- CSS {{Cssxref("container-type")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
