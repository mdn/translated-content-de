---
title: "`container-name` CSS property"
short-title: container-name
slug: Web/CSS/Reference/Properties/container-name
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Die CSS-Eigenschaft **container-name** legt eine Liste von Abfragecontainernamen fest, die von der `@container`-Regel in einer [Containerabfrage](/de/docs/Web/CSS/Guides/Containment/Container_queries) verwendet werden.

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
  - : Eine Groß-/Kleinschreibung beachtende Zeichenkette, die zur Identifizierung des Containers verwendet wird. Folgende Bedingungen gelten:
    - Der Name darf nicht `or`, `and`, `not` oder `default` entsprechen.
    - Der Name darf nicht in Anführungszeichen stehen.
    - Der zur Kennzeichnung benutzerdefinierter Bezeichner gedachte Bindestrich-Identifikator (z.B. `--container-name`) ist zulässig.
    - Eine Liste von mehreren durch Leerzeichen getrennten Namen ist zulässig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beschreibung

Wenn kein Name angegeben ist, wird eine Containerabfrage Stile auf Elemente anwenden, basierend auf Attributen wie [Größe](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_size_queries) oder [Scrollzustand](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) des nächstgelegenen Vorfahren mit einem [Containment-Kontext](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts).

> [!NOTE]
> Die Nachfolger von Größencontainern können mit [Container-Abfrage-Einheitengrößen](/de/docs/Web/CSS/Guides/Containment/Container_queries#container_query_length_units) dimensioniert werden.

Wenn einem Containment-Kontext ein Name zugewiesen wird, kann er gezielt angesprochen werden, indem dieser Name in einer `@container`-Regel festgelegt wird.

Es ist möglich, einen Abfragecontainer durch Zuweisung eines `container-name` zu einem Element zu erstellen und dann nur die Existenz dieses Namens in der zugehörigen `@container`-Regel abzufragen, ohne einen Abfrageausdruck anzugeben. Diese sogenannten [**namenbezogenen Containerabfragen**](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries) ermöglichen die selektive Anwendung von Stilen auf Elemente, basierend nur darauf, ob sie einen Vorfahren mit einem bestimmten `container-name` haben.

## Beispiele

### Verwendung eines Container-Namens

Gegeben sei das folgende HTML-Beispiel, das eine Kartenkomponente mit einem Titel und etwas Text zeigt:

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

Um einen Containment-Kontext zu erstellen, fügen Sie die Eigenschaft `container-type` einem Element in CSS hinzu.
Das folgende Beispiel erstellt zwei Containment-Kontexte, eines für die Metainformationen der Karte und eines für den Beitragstext:

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

Das Schreiben einer Containerabfrage über die `@container`-Regel wird Stile auf die Elemente des Containers anwenden, wenn die Abfrage zutrifft.
Das folgende Beispiel enthält zwei Containerabfragen, eine, die nur auf den Inhalt des `.post-excerpt`-Elements und eine, die sowohl auf den `.post-meta`- als auch auf den `.post-excerpt`-Inhalt angewendet wird:

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

Weitere Informationen zum Schreiben von Containerabfragen finden Sie auf der [CSS Container Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries)-Seite.

### Verwendung mehrerer Container-Namen

Sie können auch mehrere Namen an einen Container-Kontext übergeben, getrennt durch ein Leerzeichen:

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

Dies ermöglicht es Ihnen, den Container mit einem der beiden Namen in der `@container`-Regel anzusprechen. Dies ist nützlich, wenn Sie denselben Container mit mehreren Containerabfragen gezielt ansprechen möchten, bei denen jede der Bedingungen zutreffen könnte:

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

### Verwendung einer namenbezogenen Containerabfrage

Dieses Beispiel zeigt, wie man eine [namenbezogene Containerabfrage](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries) verwendet.

#### HTML

Wir fügen ein {{htmlelement("div")}} mit einer `id` von `container` und drei {{htmlelement("p")}}-Elementen ein, zwei innerhalb des Containers und eins außerhalb des Containers:

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

Anschließend können wir Stile selektiv nur auf Elemente innerhalb von Containern mit diesem Namen anwenden, wie im nächsten Snippet gezeigt.

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

Die angegebenen Stile sollten nur auf die ersten und zweiten {{htmlelement("p")}}-Elemente angewendet werden, nicht aber auf das dritte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Container Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Containergröße und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scrollzustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}}-Regel
- CSS {{Cssxref("container")}}-Kurzschreibweise
- CSS {{Cssxref("container-type")}}-Eigenschaft
- CSS {{cssxref("content-visibility")}}-Eigenschaft
