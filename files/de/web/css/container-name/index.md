---
title: container-name
slug: Web/CSS/container-name
l10n:
  sourceCommit: a69f9903e7444d42adcf2432eaa511c05761c757
---

{{CSSRef}}

Die **container-name** [CSS](/de/docs/Web/CSS) Eigenschaft legt eine Liste von Container-Namen für Abfragen fest, die von der [@container](/de/docs/Web/CSS/@container) Regel in einer [Containern-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_queries) verwendet werden. Eine Container-Abfrage wird Stile auf Elemente basierend auf der [Größe](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries) oder dem [Scroll-Zustand](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) des nächstgelegenen Vorfahren mit einem Containment-Kontext anwenden. Wenn einem Containment-Kontext ein Name zugewiesen wird, kann er spezifisch unter Verwendung der {{Cssxref("@container")}} Regel statt des nächstgelegenen Vorfahren mit Containment angesprochen werden.

> [!NOTE]
> Bei Verwendung der Eigenschaften {{cssxref("container-type")}} und `container-name` werden die Werte `style` und `layout` der Eigenschaft {{cssxref("contain")}} automatisch angewendet.

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

  - : Eine groß- und kleinschreibungssensitive Zeichenkette, die zur Identifizierung des Containers verwendet wird.
    Die folgenden Bedingungen gelten:

    - Der Name darf nicht `or`, `and`, `not` oder `default` entsprechen.
    - Der Namenswert darf nicht in Anführungszeichen stehen.
    - Das gestrichelte Identifikationsmerkmal, das zur Bezeichnung von benutzerdefinierten Bezeichnern verwendet wird (z.B. `--container-name`), ist erlaubt.
    - Eine Liste mehrerer Namen, getrennt durch ein Leerzeichen, ist zulässig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung eines Container-Namens

Gegeben ist das folgende HTML-Beispiel, welches eine Karten-Komponente mit einem Titel und etwas Text darstellt:

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

Um einen Containment-Kontext zu erstellen, fügen Sie die Eigenschaft `container-type` einem Element in CSS hinzu. Das folgende Beispiel erstellt zwei Containment-Kontexte, einen für die Karten-Metadaten und einen für den Beitragstext:

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

Das Schreiben einer Container-Abfrage über die {{Cssxref("@container")}} Regel wird Stile auf die Elemente des Containers anwenden, wenn die Abfrage zutrifft. Das folgende Beispiel hat zwei Container-Abfragen, eine, die nur auf den Inhalt des `.post-excerpt`-Elements angewendet wird, und eine, die sowohl auf den `.post-meta` als auch den `.post-excerpt`-Inhalt angewendet wird:

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

Für weitere Informationen zum Schreiben von Container-Abfragen, siehe die [CSS Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries) Seite.

### Verwendung mehrerer Container-Namen

Sie können einem Container-Kontext auch mehrere Namen geben, die durch ein Leerzeichen getrennt sind:

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

Dies ermöglicht es Ihnen, den Container mit einem der Namen in der {{Cssxref("@container")}} Regel anzusprechen. Dies ist nützlich, wenn Sie denselben Container mit mehreren Container-Abfragen ansprechen möchten, wobei eine der Bedingungen zutreffen könnte:

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

- [CSS Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}} Regel
- CSS {{Cssxref("container")}} Kurzschreibweise
- CSS {{Cssxref("container-type")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
