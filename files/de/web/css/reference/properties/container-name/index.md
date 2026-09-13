---
title: "`container-name` CSS property"
short-title: container-name
slug: Web/CSS/Reference/Properties/container-name
l10n:
  sourceCommit: 737b931225e92e0cba47e57a150878b1a78ee45a
---

Die **container-name** [CSS](/de/docs/Web/CSS) Eigenschaft legt eine Liste von Abfragecontainer-Namen fest, die von der [@container](/de/docs/Web/CSS/Reference/At-rules/@container) At-Regel in einer [Container-Abfrage](/de/docs/Web/CSS/Guides/Containment/Container_queries) verwendet werden.

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

Diese Eigenschaft wird als ein durch Leerzeichen getrennte Liste von `<custom-ident>` Werten oder dem Schlüsselwort `none` angegeben:

- `none`
  - : Der Standardwert. Der Abfragecontainer hat keinen Namen.

- {{cssxref("custom-ident")}}
  - : Ein groß- und kleinschreibungsempfindlicher String, der zur Identifizierung des Containers verwendet wird.
    Die folgenden Bedingungen gelten:
    - Der Name darf nicht `or`, `and`, `not` oder `default` entsprechen.
    - Der Name darf nicht in Anführungszeichen stehen.
    - Das gestrichelte Ident, das verwendet wird, um von Autoren definierte Bezeichner zu kennzeichnen (z.B. `--container-name`), ist zulässig.
    - Eine Liste von mehreren durch Leerzeichen getrennten Namen ist erlaubt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beschreibung

Ist kein Name angegeben, werden Stile in einer Container-Abfrage auf Elemente basierend auf Attributen wie der [Größe](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_size_queries) oder dem [Scroll-Status](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) des nächstgelegenen Vorfahren mit einem [Einschließungskontext](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts) angewendet.

> [!NOTE]
> Die Nachkommen von Größencontainern können mit [Längeneinheiten der Container-Abfrage](/de/docs/Web/CSS/Guides/Containment/Container_queries#container_query_length_units) dimensioniert werden.

Wenn einem Einschließungskontext ein Name zugewiesen wird, kann er gezielt angesprochen werden, indem dieser Name auf eine {{Cssxref("@container")}} At-Regel gesetzt wird.

Es ist möglich, einen Abfragecontainer zu erstellen, indem ein `container-name` einer Element zugewiesen wird, und dann nur das Vorhandensein dieses Namens in der zugehörigen `@container` At-Regel abgefragt wird, ohne dass ein Abfrageausdruck angegeben wird. Diese sogenannten [**name-only container queries**](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries) ermöglichen es, Stile selektiv auf Elemente anzuwenden, die nur einen Vorfahren mit einem bestimmten `container-name` gesetzt haben.

## Beispiele

### Verwendung eines Container-Namens

Angenommen das folgende HTML-Beispiel ist eine Kartenkomponente mit einem Titel und etwas Text:

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

Um einen Einschließungskontext zu erstellen, fügen Sie das `container-type` Attribut in einem Element in CSS hinzu. Das folgende Beispiel erstellt zwei Einschließungskontexte, einen für die Meta-Informationen der Karte und einen für den Post-Auszug:

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

Das Schreiben einer Container-Abfrage über die {{Cssxref("@container")}} At-Regel wendet Stile auf die Elemente des Containers an, wenn die Abfrage auf „wahr“ auswertet. Das folgende Beispiel enthält zwei Container-Abfragen, eine, die nur auf die Inhalte des `.post-excerpt` Elements angewendet wird und eine, die sowohl auf die Inhalte von `.post-meta` als auch `.post-excerpt` angewendet wird:

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

Weitere Informationen zum Schreiben von Container-Abfragen finden Sie auf der [CSS Container Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries) Seite.

### Verwendung mehrerer Container-Namen

Sie können auch mehrere Namen für einen Container-Kontext angeben, die durch ein Leerzeichen getrennt sind:

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

Dies ermöglicht es Ihnen, den Container entweder mit einem der Namen in der {{cssxref("@container")}} At-Regel anzusprechen. Dies ist nützlich, wenn Sie denselben Container mit mehreren Container-Abfragen ansprechen möchten, bei denen entweder Bedingung wahr sein kann:

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

### Verwendung einer Name-only Container-Abfrage

Dieses Beispiel demonstriert die Verwendung einer [name-only container query](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries).

#### HTML

Wir fügen ein {{htmlelement("div")}} mit einer `id` von `container` sowie drei {{htmlelement("p")}} Elemente ein, zwei innerhalb des Containers und eines außerhalb des Containers:

```html live-sample_name-only
<div id="container">
  <p>I'm in the container.</p>
  <p>I'm also in the container.</p>
</div>
<p>I'm not in the container.</p>
```

#### CSS

Wir weisen dem Container einen Namen zu:

```css live-sample_name-only
#container {
  container-name: my-container;
}
```

Wir können dann Stile selektiv nur auf Elemente innerhalb von Containern mit diesem Namen anwenden, wie im nächsten Snippet gezeigt.

```css live-sample_name-only
@container my-container {
  p {
    background-color: lime;
    font-size: 1.3rem;
    width: 50vw;
    padding: 0.5rem;
    font-family: sans-serif;
  }
}
```

#### Ergebnis

{{embedlivesample("name-only", "100%", 300)}}

Die angegebenen Stile sollten nur auf das erste und zweite {{htmlelement("p")}} Element angewendet werden, aber nicht auf das dritte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Status-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("container")}} Kurzschreibweise-Eigenschaft
- CSS {{Cssxref("container-type")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
