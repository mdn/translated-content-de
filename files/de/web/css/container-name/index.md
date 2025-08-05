---
title: container-name
slug: Web/CSS/container-name
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die **container-name** [CSS](/de/docs/Web/CSS)-Eigenschaft legt eine Liste von Abfragecontainernamen fest, die durch die [@container](/de/docs/Web/CSS/@container)-Regel in einer [Containerabfrage](/de/docs/Web/CSS/CSS_containment/Container_queries) verwendet werden.
Eine Containerabfrage wird Stile auf Elemente basierend auf der [Größe](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries) oder dem [Scrollzustand](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) des nächstgelegenen Vorfahren mit einem Containment-Kontext anwenden.
Wenn einem Containment-Kontext ein Name zugewiesen wird, kann er gezielt mit der {{Cssxref("@container")}}-Regel anvisiert werden, anstatt des nächstgelegenen Vorfahren mit Containment.

> [!NOTE]
> Bei der Verwendung der {{cssxref("container-type")}}- und `container-name`-Eigenschaften werden die Werte `style` und `layout` der {{cssxref("contain")}}-Eigenschaft automatisch angewendet.

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
  - : Eine groß- und kleinschreibungsempfindliche Zeichenfolge, die zur Identifizierung des Containers verwendet wird.
    Die folgenden Bedingungen gelten:
    - Der Name darf nicht `or`, `and`, `not` oder `default` entsprechen.
    - Der Name darf nicht in Anführungszeichen stehen.
    - Der gestrichelte Identifikator, der für benutzerdefinierte Bezeichner gedacht ist (z.B. `--container-name`), ist erlaubt.
    - Eine Liste von mehreren Namen, getrennt durch ein Leerzeichen, ist zulässig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung eines Container-Namens

Beispiel des folgenden HTML, welches eine Kartenkomponente mit einem Titel und etwas Text ist:

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

Um einen Containment-Kontext zu erstellen, fügen Sie die `container-type`-Eigenschaft zu einem Element in CSS hinzu.
Das folgende Beispiel erstellt zwei Containment-Kontexte, einen für die Metainformationen der Karte und einen für den Beitragstext:

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

Das Schreiben einer Containerabfrage über die {{Cssxref("@container")}}-Regel wird Stile auf die Elemente des Containers anwenden, wenn die Abfrage zu wahr evaluiert wird.
Das folgende Beispiel hat zwei Containerabfragen, eine, die nur auf den Inhalt des `.post-excerpt`-Elements angewendet wird, und eine, die sowohl auf den `.post-meta`- als auch auf den `.post-excerpt`-Inhalt angewendet wird:

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

Weitere Informationen zum Schreiben von Containerabfragen finden Sie auf der [CSS Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries) Seite.

### Verwendung mehrerer Container-Namen

Sie können auch mehrere Namen für einen Container-Kontext durch ein Leerzeichen getrennt angeben:

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

Dies ermöglicht es Ihnen, den Container mit einem der beiden Namen in der {{cssxref("@container")}}-Regel anzusprechen.
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
- [Verwendung von Größen- und Stilabfragen für Container](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Scrollzustand-Abfragen für Container](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}}-Regel
- CSS {{Cssxref("container")}} Kurzschreibweise
- CSS {{Cssxref("container-type")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
