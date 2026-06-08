---
title: "`container-name` CSS property"
short-title: container-name
slug: Web/CSS/Reference/Properties/container-name
l10n:
  sourceCommit: 2ce88199869b63f8da3bbeafd899400f7579cce9
---

Die **container-name** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt eine Liste von Abfragenamen für Container an, die von der [@container](/de/docs/Web/CSS/Reference/At-rules/@container) At-Regel in einer [Container-Abfrage](/de/docs/Web/CSS/Guides/Containment/Container_queries) verwendet werden.

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
  - : Der Standardwert. Der Abfragecontainer hat keinen Namen.

- {{cssxref("custom-ident")}}
  - : Eine groß-/klein-schreibungssensitive Zeichenkette, die zur Identifizierung des Containers verwendet wird. Die folgenden Bedingungen gelten:
    - Der Name darf nicht `or`, `and`, `not` oder `default` sein.
    - Der Namewert darf nicht in Anführungszeichen stehen.
    - Die gestrichelte Identität, die zur Angabe von benutzerdefinierten Bezeichnern verwendet wird (z. B. `--container-name`), ist zulässig.
    - Eine Liste von mehreren, durch Leerzeichen getrennten Namen ist erlaubt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beschreibung

Wenn kein Name angegeben ist, wird eine Container-Abfrage Stile auf Elemente basierend auf Attributen wie der [Größe](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_size_queries) oder dem [Scroll-Zustand](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) des nächsten Vorfahren mit einem [Containment-Kontext](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts) anwenden.

> [!NOTE]
> Die Nachkommen von Größencontainern können mit [Größeneinheiten für Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries#container_query_length_units) dimensioniert werden.

Wenn einem Containment-Kontext ein Name gegeben wird, kann er gezielt angesprochen werden, indem dieser Name in einer {{Cssxref("@container")}} At-Regel gesetzt wird.

Es ist möglich, einen Abfragecontainer zu erstellen, indem einem Element ein {{cssxref("container-name")}} zugewiesen wird, und dann nur die Existenz dieses Namens in der zugehörigen `@container` At-Regel abgefragt wird, ohne eine Abfrageausdruck zu spezifizieren. Diese sogenannten [**name-only container queries**](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries) ermöglichen es, selektiv Stile auf Elemente anzuwenden, basierend nur darauf, ob sie einen Vorfahren mit einem spezifischen `container-name` gesetzt haben.

## Beispiele

### Verwendung eines Containernamens

Angenommen, wir haben das folgende HTML-Beispiel, das eine Kartenkomponente mit einem Titel und etwas Text ist:

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
Das folgende Beispiel erstellt zwei Containment-Kontexte, einen für die Meta-Informationen der Karte und einen für den Beitrag-Auszug:

> [!NOTE]
> Eine verkürzte Syntax für diese Deklarationen wird auf der {{cssxref("container")}} Seite beschrieben.

```css
.post-meta {
  container-type: inline-size;
}

.post-excerpt {
  container-type: inline-size;
  container-name: excerpt;
}
```

Das Schreiben einer Container-Abfrage über die {{Cssxref("@container")}} At-Regel wird Stile auf die Elemente des Containers anwenden, wenn die Abfrage wahr ist.
Das folgende Beispiel hat zwei Container-Abfragen, eine, die nur auf die Inhalte des `.post-excerpt`-Elements angewendet wird und eine, die sowohl auf die `.post-meta` als auch auf die `.post-excerpt`-Inhalte angewendet wird:

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

Für weitere Informationen zum Schreiben von Container-Abfragen siehe die Seite [CSS Container Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries).

### Verwendung mehrerer Containernamen

Sie können auch mehrere Namen für einen Container-Kontext durch ein Leerzeichen getrennt angeben:

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

Dadurch können Sie den Container mit einem der Namen in der {{cssxref("@container")}} At-Regel ansprechen.
Dies ist nützlich, wenn Sie denselben Container mit mehreren Container-Abfragen ansprechen möchten, bei denen entweder Bedingung zutreffen könnte:

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

### Verwendung einer name-only Container-Abfrage

Dieses Beispiel zeigt, wie eine [name-only container query](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries) verwendet wird.

#### HTML

Wir fügen ein {{htmlelement("div")}} mit einer `id` von `container` ein und drei {{htmlelement("p")}}-Elemente, von denen zwei im Container und eins außerhalb des Containers sind:

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

Wir können dann Stile selektiv nur auf die Elemente innerhalb der Container mit diesem Namenssatz anwenden, wie im nächsten Schnipsel gezeigt.

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

Die angegebenen Stile sollten nur auf das erste und zweite {{htmlelement("p")}}-Element angewendet werden, nicht aber auf das dritte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Größen- und Stilabfragen für Container](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Scroll-Zustand-Abfragen für Container](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}} At-Regel
- CSS-{{Cssxref("container")}}-Kurzschreibweise
- CSS-{{Cssxref("container-type")}}-Eigenschaft
- CSS-{{cssxref("content-visibility")}}-Eigenschaft
