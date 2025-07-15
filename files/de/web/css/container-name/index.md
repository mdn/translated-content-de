---
title: container-name
slug: Web/CSS/container-name
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **container-name**-Eigenschaft von [CSS](/de/docs/Web/CSS) spezifiziert eine Liste von Abfragenamen von Containern, die von der [@container](/de/docs/Web/CSS/@container) Regel in einer [Container-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_queries) verwendet wird. Eine Container-Abfrage wendet Stile auf Elemente basierend auf der [Größe](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries) oder dem [Scrollstatus](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) des nächstgelegenen Vorfahren mit einem Containment-Kontext an. Wenn einem Containment-Kontext ein Name zugewiesen wird, kann er speziell mit der {{Cssxref("@container")}} Regel anvisiert werden, anstatt des nächsten Vorfahren mit Containment.

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
  - : Ein schriftgrößen-sensitiver String, der zur Identifikation des Containers verwendet wird. Die folgenden Bedingungen gelten:
    - Der Name darf nicht `or`, `and`, `not` oder `default` entsprechen.
    - Der Namenswert darf nicht in Anführungszeichen stehen.
    - Die mit Bindestrichen versehene Identifikation, die von Autoren definierte Identifikatoren bezeichnen soll (z.B. `--container-name`), ist erlaubt.
    - Eine Liste von mehreren Namen, getrennt durch ein Leerzeichen, ist erlaubt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung eines Container-Namens

Angenommen, das folgende HTML-Beispiel ist eine Kartenkomponente mit einem Titel und etwas Text:

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

Um einen Containment-Kontext zu erstellen, fügen Sie die `container-type`-Eigenschaft zu einem Element in CSS hinzu. Das folgende Beispiel erstellt zwei Containment-Kontexte, einen für die Meta-Informationen der Karte und einen für den Beitragstext:

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

Wenn Sie eine Container-Abfrage über die {{Cssxref("@container")}} Regel schreiben, werden Stile auf die Elemente des Containers angewandt, wenn die Abfrage als wahr ausgewertet wird. Das folgende Beispiel enthält zwei Container-Abfragen, eine, die nur auf den Inhalt des `.post-excerpt`-Elements angewendet wird, und eine, die sowohl auf die `.post-meta`- als auch die `.post-excerpt`-Inhalte angewendet wird:

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

Weitere Informationen zum Schreiben von Container-Abfragen finden Sie auf der Seite zu [CSS Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).

### Verwendung mehrerer Container-Namen

Sie können einem Container-Kontext auch mehrere Namen geben, die durch ein Leerzeichen getrennt sind:

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

Dies ermöglicht es Ihnen, den Container mit jedem Namen in der {{cssxref("@container")}} Regel zu adressieren. Dies ist nützlich, wenn Sie denselben Container mit mehreren Container-Abfragen anvisieren möchten, bei denen entweder Bedingung zutreffen könnte:

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

- [CSS Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container Größen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}} Regel
- CSS {{Cssxref("container")}} Kurzform-Eigenschaft
- CSS {{Cssxref("container-type")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
