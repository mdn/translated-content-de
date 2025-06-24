---
title: container-name
slug: Web/CSS/container-name
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **container-name**-[CSS](/de/docs/Web/CSS) Eigenschaft legt eine Liste von Abfragenamen für Container fest, die von der [@container](/de/docs/Web/CSS/@container) At-Regel in einer [Container-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_queries) verwendet werden. Eine Container-Abfrage wendet Stile auf Elemente basierend auf der [Größe](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries) oder dem [Scroll-Zustand](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) des nächsten Vorfahren mit einem Containment-Kontext an. Wenn einem Containment-Kontext ein Name zugewiesen wird, kann er gezielt mit der {{Cssxref("@container")}} At-Regel anvisiert werden, anstatt mit dem nächstgelegenen Vorfahren mit Containment.

> [!NOTE]
> Bei Verwendung der Eigenschaften {{cssxref("container-type")}} und `container-name` werden die Werte `style` und `layout` der {{cssxref("contain")}} Eigenschaft automatisch angewendet.

## Syntax

```css
container-name: none;

/* A single name */
container-name: myLayout;

/* Multiple names */
container-name: myPageLayout myComponentLibrary;

/* Global Values */
container-name: inherit;
container-name: initial;
container-name: revert;
container-name: revert-layer;
container-name: unset;
```

### Werte

- `none`

  - : Standardwert. Der Abfrage-Container hat keinen Namen.

- {{cssxref("custom-ident")}}
  - : Ein Groß- und Kleinschreibung beachtender String, der zur Identifizierung des Containers verwendet wird. Die folgenden Bedingungen gelten:
    - Der Name darf nicht `or`, `and`, `not` oder `default` sein.
    - Der Name darf nicht in Anführungszeichen stehen.
    - Die gestrichelte Identifikation, die für benutzerdefinierte Identifikatoren gedacht ist (z. B. `--container-name`), ist zulässig.
    - Eine Liste von mehreren durch Leerzeichen getrennten Namen ist erlaubt.

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

Um einen Containment-Kontext zu erstellen, fügen Sie die `container-type` Eigenschaft zu einem Element in CSS hinzu. Das folgende Beispiel erstellt zwei Containment-Kontexte, einen für die Meta-Informationen der Karte und einen für den Beitragstext:

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

Das Schreiben einer Container-Abfrage über die {{Cssxref("@container")}} At-Regel wendet Stile auf die Elemente des Containers an, wenn die Abfrage wahr ist. Das folgende Beispiel hat zwei Container-Abfragen, eine, die nur auf die Inhalte des `.post-excerpt` Elements angewendet wird, und eine, die sowohl auf die `.post-meta` als auch auf die `.post-excerpt` Inhalte angewendet wird:

```css
@container excerpt (min-width: 400px) {
  p {
    visibility: hidden;
  }
}

@container (min-width: 400px) {
  p {
    font-size: 2rem;
  }
}
```

Weitere Informationen zum Schreiben von Container-Abfragen finden Sie auf der Seite [CSS Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries).

### Verwendung mehrerer Container-Namen

Sie können auch mehrere Namen für einen Container-Kontext durch Leerzeichen getrennt angeben:

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

Dies ermöglicht es Ihnen, den Container mit einem der beiden Namen in der {{cssxref("@container")}} At-Regel anzuvisieren. Dies ist nützlich, wenn Sie denselben Container mit mehreren Container-Abfragen anvisieren möchten, bei denen entweder Bedingung wahr sein könnte:

```css
@container meta (max-width: 500px) {
  p {
    visibility: hidden;
  }
}

@container card (max-height: 200px) {
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

- [CSS Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("container")}} Kurzschreibweise
- CSS {{Cssxref("container-type")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
